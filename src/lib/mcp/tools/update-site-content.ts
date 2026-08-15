import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { supabaseForUser } from "../supabase";

export default defineTool({
  name: "update_site_content",
  title: "Update site content",
  description:
    "Update website copy for one locale by merging the given top-level sections into the stored content. Requires an admin account. Read the content first with get_site_content so the section shape matches.",
  inputSchema: {
    locale: z.enum(["no", "en"]).describe("Which language version of the website copy to update."),
    sections: z
      .record(z.string(), z.unknown())
      .describe("Top-level content sections to replace, e.g. { \"hero\": { ... } }."),
  },
  annotations: { readOnlyHint: false, destructiveHint: true, idempotentHint: true, openWorldHint: false },
  handler: async ({ locale, sections }, ctx) => {
    if (!ctx.isAuthenticated()) {
      return { content: [{ type: "text", text: "Not authenticated" }], isError: true };
    }
    if (!sections || Object.keys(sections).length === 0) {
      return { content: [{ type: "text", text: "No sections provided." }], isError: true };
    }

    const supabase = supabaseForUser(ctx);
    const current = await supabase.from("site_content").select("data").eq("locale", locale).maybeSingle();
    if (current.error) return { content: [{ type: "text", text: current.error.message }], isError: true };
    if (!current.data) {
      return { content: [{ type: "text", text: `No content stored for locale '${locale}'.` }], isError: true };
    }

    const merged = { ...(current.data.data as Record<string, unknown>), ...sections };
    const { data, error } = await supabase
      .from("site_content")
      .update({ data: merged })
      .eq("locale", locale)
      .select("locale,updated_at");

    if (error) return { content: [{ type: "text", text: error.message }], isError: true };
    if (!data || data.length === 0) {
      return {
        content: [{ type: "text", text: "Update was blocked — this account does not have admin access." }],
        isError: true,
      };
    }
    return {
      content: [{ type: "text", text: `Updated sections: ${Object.keys(sections).join(", ")}` }],
      structuredContent: { locale, updatedAt: data[0]!.updated_at, updatedSections: Object.keys(sections) },
    };
  },
});
