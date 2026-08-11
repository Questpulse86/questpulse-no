import { createServerFn } from "@tanstack/react-start";

import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import { mergeContent, type Locale, type SiteContent } from "@/lib/site-content";
import { contentSaveSchema, leadSchema, localeSchema } from "@/lib/site-schemas";

export const getSiteContent = createServerFn({ method: "GET" })
  .inputValidator((input: { locale: Locale }) => ({ locale: localeSchema.parse(input.locale) }))
  .handler(async ({ data }): Promise<SiteContent> => {
    const { createPublicClient } = await import("@/lib/supabase-public.server");
    const supabase = createPublicClient();
    const { data: row } = await supabase
      .from("site_content")
      .select("data")
      .eq("locale", data.locale)
      .maybeSingle();
    return mergeContent(data.locale, row?.data ?? null);
  });

export const submitLead = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => leadSchema.parse(input))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { syncLeadToHubspot } = await import("@/lib/hubspot.server");

    const hubspot = await syncLeadToHubspot({
      name: data.name,
      email: data.email,
      company: data.company,
      role: data.role,
      inquiryType: data.inquiryType,
      message: data.message,
    });

    const { error } = await supabaseAdmin.from("leads").insert({
      name: data.name,
      email: data.email,
      company: data.company || null,
      role: data.role || null,
      inquiry_type: data.inquiryType,
      message: data.message || null,
      locale: data.locale,
      hubspot_synced: hubspot.synced,
      hubspot_error: hubspot.error,
    });
    if (error) throw new Error("Kunne ikke lagre henvendelsen");

    return { ok: true as const, hubspotSynced: hubspot.synced };
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
    const [{ data: rows }, { data: leads }] = await Promise.all([
      supabaseAdmin.from("site_content").select("locale, data"),
      supabaseAdmin.from("leads").select("*").order("created_at", { ascending: false }).limit(200),
    ]);

    const stored = Object.fromEntries((rows ?? []).map((r) => [r.locale, r.data]));
    return {
      isAdmin: true as const,
      content: {
        no: mergeContent("no", stored["no"] ?? null),
        en: mergeContent("en", stored["en"] ?? null),
      },
      leads: leads ?? [],
    };
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
      .upsert(
        { locale: data.locale, data: data.data as never },
        { onConflict: "locale" },
      );
    if (error) throw new Error(error.message);
    return { ok: true as const };
  });
