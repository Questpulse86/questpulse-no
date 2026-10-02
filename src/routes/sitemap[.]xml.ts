import { createFileRoute } from "@tanstack/react-router";

import { pagePaths } from "@/lib/page-content";

const questpulsePaths = [
  "/",
  "/en",
  "/forskning",
  "/en/research",
  ...Object.values(pagePaths).flatMap((entry) => [entry.no, entry.en]),
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: ({ request }) => {
        const host = new URL(request.url).host;
        const isDchub = host.includes("digitalcoachub");
        const origin = isDchub ? "https://digitalcoachub.no" : "https://questpulse.no";
        const pairs = isDchub
          ? [
              { no: "/", en: "/en" },
              { no: "/personvern", en: "/en/privacy" },
            ]
          : [
              { no: "/", en: "/en" },
              { no: "/forskning", en: "/en/research" },
              ...Object.values(pagePaths),
            ];
        const paths = isDchub ? ["/", "/en", "/personvern", "/en/privacy"] : questpulsePaths;

        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${paths
  .map((path) => {
    const pair = pairs.find((entry) => entry.no === path || entry.en === path)!;
    return `  <url><loc>${origin}${path}</loc><xhtml:link rel="alternate" hreflang="nb" href="${origin}${pair.no}"/><xhtml:link rel="alternate" hreflang="en" href="${origin}${pair.en}"/></url>`;
  })
  .join("\n")}
</urlset>`;

        return new Response(xml, {
          headers: { "Content-Type": "application/xml; charset=utf-8" },
        });
      },
    },
  },
});
