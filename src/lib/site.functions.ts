import { createServerFn } from "@tanstack/react-start";

import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import { defaultContent, mergeContent, type Locale, type SiteContent } from "@/lib/site-content";
import { contentSaveSchema, localeSchema } from "@/lib/site-schemas";

export const getSiteContent = createServerFn({ method: "GET" })
  .inputValidator((input: { locale: Locale }) => ({ locale: localeSchema.parse(input.locale) }))
  .handler(async ({ data }): Promise<SiteContent> => {
    const { readPublicContent } = await import("@/lib/public-content.server");
    return readPublicContent(data.locale);
  });

export const getAdminOverview = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { data: isAdmin } = await context.supabase.rpc("has_role", {
      _user_id: context.userId,
      _role: "admin",
    });
    if (!isAdmin) return { isAdmin: false as const };

    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const [{ data: rows }, { data: leads }, { data: audit }] = await Promise.all([
      supabaseAdmin.from("site_content").select("locale, data"),
      supabaseAdmin.from("leads").select("*").order("created_at", { ascending: false }).limit(200),
      supabaseAdmin
        .from("mcp_audit_log")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(200),
    ]);

    const stored = Object.fromEntries((rows ?? []).map((r) => [r.locale, r.data]));
    return {
      isAdmin: true as const,
      content: {
        no: mergeContent("no", stored["no"] ?? null),
        en: mergeContent("en", stored["en"] ?? null),
      },
      leads: leads ?? [],
      audit: audit ?? [],
    };
  });

export type SecurityStatus = {
  tables: { name: string; rls_enabled: boolean; policies: number; open_policies: number }[];
  buckets: { name: string; public: boolean; policies: number }[];
  leads: {
    client_write_policies: number;
    client_write_grants: number;
    total_30d: number;
    hubspot_failed_30d: number;
    last_insert: string | null;
  };
  checked_at: string;
};

export const getSecurityStatus = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }): Promise<SecurityStatus> => {
    const { data: isAdmin } = await context.supabase.rpc("has_role", {
      _user_id: context.userId,
      _role: "admin",
    });
    if (!isAdmin) throw new Error("Forbidden");
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { data, error } = await (
      supabaseAdmin.rpc as unknown as (
        fn: string,
      ) => Promise<{ data: unknown; error: { message: string } | null }>
    )("security_status");
    if (error) throw new Error(error.message);
    return data as SecurityStatus;
  });

export const analyzeSecurityIncident = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: { description: string }) => {
    const d = String(input?.description ?? "").trim();
    if (d.length < 20 || d.length > 5000)
      throw new Error("Beskrivelsen må være mellom 20 og 5000 tegn.");
    return { description: d };
  })
  .handler(async ({ data, context }) => {
    const { data: isAdmin } = await context.supabase.rpc("has_role", {
      _user_id: context.userId,
      _role: "admin",
    });
    if (!isAdmin) throw new Error("Forbidden");
    const { analyzeIncident } = await import("@/lib/incident.server");
    return analyzeIncident(data.description);
  });

export const saveSiteContent = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: unknown) => contentSaveSchema.parse(input))
  .handler(async ({ data, context }) => {
    const { data: isAdmin } = await context.supabase.rpc("has_role", {
      _user_id: context.userId,
      _role: "admin",
    });
    if (!isAdmin) throw new Error("Forbidden");

    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin
      .from("site_content")
      .upsert({ locale: data.locale, data: data.data as never }, { onConflict: "locale" });
    if (error) throw new Error(error.message);
    const { invalidatePublicContent } = await import("@/lib/public-content.server");
    invalidatePublicContent(data.locale);
    return { ok: true as const };
  });
