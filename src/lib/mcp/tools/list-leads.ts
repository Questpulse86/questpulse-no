import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { supabaseForUser } from "../supabase";
import { recordMcpAudit } from "../audit";


export default defineTool({
  name: "list_leads",
  title: "List leads",
  description:
    "List contact-form leads captured on the QuestPulse website, newest first. Requires an admin account.",
  inputSchema: {
    limit: z.number().int().min(1).max(100).default(20).describe("How many leads to return."),
    inquiryType: z
      .string()
      .trim()
      .optional()
      .describe("Optional filter on inquiry type, e.g. 'demo' or 'pilot'."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: async ({ limit, inquiryType }, ctx) => {
    if (!ctx.isAuthenticated()) {
      return { content: [{ type: "text", text: "Not authenticated" }], isError: true };
    }
    const supabase = supabaseForUser(ctx);
    let query = supabase
      .from("leads")
      .select("id,name,email,company,role,inquiry_type,message,locale,hubspot_synced,hubspot_error,created_at")
      .order("created_at", { ascending: false })
      .limit(limit ?? 20);
    if (inquiryType) query = query.eq("inquiry_type", inquiryType);

    const { data, error } = await query;
    if (error) return { content: [{ type: "text", text: error.message }], isError: true };
    return {
      content: [{ type: "text", text: JSON.stringify(data ?? [], null, 2) }],
      structuredContent: { leads: data ?? [] },
    };
  },
});
