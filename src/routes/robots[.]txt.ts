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
`;

        const body = `User-agent: Googlebot
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
