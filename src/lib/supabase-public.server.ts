import { createClient } from "@supabase/supabase-js";

import type { Database } from "@/integrations/supabase/types";

/** Publishable-key client for public, RLS-protected reads during SSR. */
export function createPublicClient() {
  // Hosting outside Lovable (Vercel) only injects the VITE_* values at build time,
  // so fall back to those when the runtime env vars are absent.
  const url = (process.env["SUPABASE_URL"] || import.meta.env["VITE_SUPABASE_URL"]) as string;
  const key = (process.env["SUPABASE_PUBLISHABLE_KEY"] ||
    import.meta.env["VITE_SUPABASE_PUBLISHABLE_KEY"]) as string;
  if (!url || !key) {
    throw new Error("Missing Supabase URL or publishable key in the server environment");
  }
  return createClient<Database>(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
    global: {
      fetch: (input, init) => {
        const headers = new Headers(init?.headers);
        if (key.startsWith("sb_") && headers.get("Authorization") === `Bearer ${key}`) {
          headers.delete("Authorization");
        }
        headers.set("apikey", key);
        return fetch(input, { ...init, headers });
      },
    },
  });
}
