import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { supabaseForUser } from "../supabase";
import { recordMcpAudit } from "../audit";


export default defineTool({
  name: "get_site_content",
  title: "Get site content",
  description: "Read the editable website copy for one locale ('no' or 'en') as JSON.",
  inputSchema: {
    locale: z.enum(["no", "en"]).describe("Which language version of the website copy to read."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: async ({ locale }, ctx) => {
    if (!ctx.isAuthenticated()) {
      return { content: [{ type: "text", text: "Not authenticated" }], isError: true };
    }
    const supabase = supabaseForUser(ctx);
    const { data, error } = await supabase
      .from("site_content")
      .select("locale,data,updated_at")
      .eq("locale", locale)
      .maybeSingle();
    await recordMcpAudit(ctx, {
      tool: "get_site_content",
      args: { locale },
      changes: null,
      success: !error && !!data,
      error: error?.message ?? (data ? null : `No content stored for locale '${locale}'.`),
    });
    if (error) return { content: [{ type: "text", text: error.message }], isError: true };
    if (!data) {
      return { content: [{ type: "text", text: `No content stored for locale '${locale}'.` }], isError: true };
    }
    return {

      content: [{ type: "text", text: JSON.stringify(data.data, null, 2) }],
      structuredContent: { locale: data.locale, updatedAt: data.updated_at, data: data.data },
    };
  },
});
