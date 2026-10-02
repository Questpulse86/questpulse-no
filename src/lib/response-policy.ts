// Explicit allowlist prevents accidental caching of future private routes.
const publicPaths = new Set([
  "/",
  "/en",
  "/om-selskapet",
  "/en/about",
  "/slik-fungerer-det",
  "/en/how-it-works",
  "/bruksomrader",
  "/en/use-cases",
  "/for-bank-og-finans",
  "/en/banking-and-finance",
  "/for-hr-og-ledelse",
  "/en/hr-and-leadership",
  "/enterprise-evaluering",
  "/en/enterprise-evaluation",
  "/kontakt",
  "/en/contact",
  "/sikkerhet-og-personvern",
  "/en/security-and-privacy",
  "/partnere",
  "/en/partners",
  "/forskning",
  "/en/research",
  "/historier-fra-arbeidslivet",
  "/en/workplace-stories",
  "/robots.txt",
  "/sitemap.xml",
]);
const productionHosts = new Set([
  "questpulse.no",
  "www.questpulse.no",
  "digitalcoachub.no",
  "www.digitalcoachub.no",
]);

export function applyResponsePolicy(request: Request, response: Response): Response {
  const url = new URL(request.url);
  const path = url.pathname.replace(/\/+$/, "") || "/";
  const headers = new Headers(response.headers);
  headers.set("X-Content-Type-Options", "nosniff");
  headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()");
  // Avoid frame restrictions here: authenticated Lovable previews embed the site.
  const privatePath =
    /^\/(?:en\/)?(?:admin|auth|demo)(?:\/|$)/.test(path) ||
    path.startsWith("/_serverFn") ||
    path.startsWith("/api/");
  if (!productionHosts.has(url.hostname) || privatePath || response.status >= 400) {
    headers.set("X-Robots-Tag", "noindex, nofollow");
  }
  const personalized =
    request.headers.has("authorization") ||
    request.headers.has("cookie") ||
    headers.has("set-cookie");
  const isQuestPulse =
    url.hostname === "questpulse.no" ||
    url.hostname === "www.questpulse.no" ||
    url.hostname.endsWith(".vercel.app") ||
    url.hostname === "localhost";
  const cacheable =
    isQuestPulse &&
    publicPaths.has(path) &&
    !personalized &&
    request.method === "GET" &&
    response.status === 200 &&
    !headers.get("vary")?.includes("*");
  if (cacheable) {
    headers.set("Cache-Control", "public, max-age=0, must-revalidate");
    headers.set("Vercel-CDN-Cache-Control", "public, s-maxage=60, stale-while-revalidate=60");
  } else {
    headers.set("Cache-Control", "private, no-store");
    headers.set("Vercel-CDN-Cache-Control", "no-store");
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}
