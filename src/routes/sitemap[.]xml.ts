import { createFileRoute } from "@tanstack/react-router";

import { pagePaths } from "@/lib/page-content";

const questpulsePaths = [
  "/",
  "/en",
  ...Object.values(pagePaths).flatMap((entry) => [entry.no, entry.en]),
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: ({ request }) => {
        const host = new URL(request.url).host;
        const isDchub = host.includes("digitalcoachub");
        const origin = isDchub ? "https://digitalcoachub.no" : "https://questpulse.no";
        const paths = isDchub ? ["/"] : questpulsePaths;

        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths.map((path) => `  <url><loc>${origin}${path === "/" ? "" : path}/</loc></url>`).join("\n")}
</urlset>`;

        return new Response(xml, {
          headers: { "Content-Type": "application/xml; charset=utf-8" },
        });
      },
    },
  },
});
