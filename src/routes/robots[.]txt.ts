import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/robots.txt")({
  server: {
    handlers: {
      GET: ({ request }) => {
        const host = new URL(request.url).host;
        const isDchub = host.includes("digitalcoachub");
        const origin = isDchub ? "https://digitalcoachub.no" : "https://questpulse.no";

        const disallow = isDchub
          ? ""
          : `Disallow: /demo
Disallow: /auth
Disallow: /admin
Disallow: /api/
Disallow: /_serverFn/
`;

        if (
          !new Set([
            "questpulse.no",
            "www.questpulse.no",
            "digitalcoachub.no",
            "www.digitalcoachub.no",
          ]).has(new URL(request.url).hostname)
        ) {
          return new Response("User-agent: *\nDisallow: /\n", {
            headers: { "Content-Type": "text/plain; charset=utf-8" },
          });
        }
        const body = `User-agent: OAI-SearchBot
Allow: /
${disallow}
User-agent: Googlebot
Allow: /
${disallow}
User-agent: Bingbot
Allow: /
${disallow}
User-agent: Twitterbot
Allow: /

User-agent: facebookexternalhit
Allow: /

User-agent: *
Allow: /
${disallow}
Sitemap: ${origin}/sitemap.xml
`;

        return new Response(body, {
          headers: { "Content-Type": "text/plain; charset=utf-8" },
        });
      },
    },
  },
});
