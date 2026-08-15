import { auth, defineMcp } from "@lovable.dev/mcp-js";
import type { ToolDefinition } from "@lovable.dev/mcp-js";
import listLeadsTool from "./tools/list-leads";
import getSiteContentTool from "./tools/get-site-content";
import updateSiteContentTool from "./tools/update-site-content";

const projectRef = import.meta.env["VITE_SUPABASE_PROJECT_ID"] ?? "project-ref-unset";

export default defineMcp({
  name: "nettside-lk",
  title: "Nettside LK",
  version: "0.1.0",
  instructions:
    "Tools for the QuestPulse website. Use `list_leads` to review contact-form submissions, `get_site_content` to read the editable Norwegian ('no') or English ('en') website copy, and `update_site_content` to change it. Always read the content before updating so section shapes stay intact. Leads and content edits require an admin account.",
  auth: auth.oauth.issuer({
    issuer: `https://${projectRef}.supabase.co/auth/v1`,
    acceptedAudiences: "authenticated",
  }),
  tools: [listLeadsTool, getSiteContentTool, updateSiteContentTool] as unknown as ToolDefinition[],
});
