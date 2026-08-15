import { createClient } from "@supabase/supabase-js";
import type { ToolContext } from "@lovable.dev/mcp-js";

type RuntimeGlobals = typeof globalThis & {
  Deno?: { env?: { get?: (name: string) => string | undefined } };
  process?: { env?: Record<string, string | undefined> };
};

function runtimeEnv(name: string): string | undefined {
  const runtime = globalThis as RuntimeGlobals;
  return runtime.Deno?.env?.get?.(name) ?? runtime.process?.env?.[name];
}

export type AuditEntry = {
  tool: string;
  /** Tool arguments, already stripped of anything sensitive. */
  args: Record<string, unknown>;
  /** What the call changed, when it changed anything. */
  changes?: Record<string, unknown> | null;
  success: boolean;
  error?: string | null;
};

/**
 * Writes an immutable audit row for one MCP tool call. Uses the service role
 * because the log must be write-only for the acting user (admins read it in
 * the CMS). Never throws: audit failures must not break the tool response.
 */
export async function recordMcpAudit(ctx: ToolContext, entry: AuditEntry): Promise<void> {
  const url = runtimeEnv("SUPABASE_URL") ?? runtimeEnv("VITE_SUPABASE_URL");
  const serviceKey = runtimeEnv("SUPABASE_SERVICE_ROLE_KEY");
  if (!url || !serviceKey) return;

  try {
    const supabase = createClient(url, serviceKey, {
      auth: { persistSession: false, autoRefreshToken: false },
    });
    await supabase.from("mcp_audit_log").insert({
      user_id: ctx.getUserId() ?? null,
      user_email: ctx.getUserEmail() ?? null,
      client_id: ctx.getClientId() ?? null,
      tool_name: entry.tool,
      arguments: entry.args as never,
      changes: (entry.changes ?? null) as never,
      success: entry.success,
      error: entry.error ?? null,
    });
  } catch {
    // Logging is best effort.
  }
}
