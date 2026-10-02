import { defaultContent, mergeContent, type Locale, type SiteContent } from "./site-content";

// Only public marketing copy belongs here. Never cache sessions, leads or admin data.
const cache = new Map<Locale, { value: SiteContent; expires: number }>();
const pending = new Map<Locale, Promise<SiteContent>>();

export function invalidatePublicContent(locale: Locale) {
  cache.delete(locale);
}

export async function readPublicContent(locale: Locale): Promise<SiteContent> {
  const previous = cache.get(locale);
  if (previous && previous.expires > Date.now()) return previous.value;
  const running = pending.get(locale);
  if (running) return running;

  const request = (async () => {
    try {
      const { createPublicClient } = await import("./supabase-public.server");
      const { data, error } = await createPublicClient()
        .from("site_content")
        .select("data")
        .eq("locale", locale)
        .abortSignal(AbortSignal.timeout(1500))
        .maybeSingle();
      if (error) throw error;
      const value = mergeContent(locale, data?.data ?? null);
      cache.set(locale, { value, expires: Date.now() + 60_000 });
      return value;
    } catch {
      // A slow/unavailable CMS must not take the public website down.
      console.warn("Public content unavailable; using last good or bundled copy", { locale });
      const value = previous?.value ?? defaultContent[locale];
      cache.set(locale, { value, expires: Date.now() + 5_000 });
      return value;
    }
  })();
  pending.set(locale, request);
  try {
    return await request;
  } finally {
    pending.delete(locale);
  }
}
