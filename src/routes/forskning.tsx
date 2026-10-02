import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

import { ResearchPage } from "@/components/site/ResearchPage";
import { researchContent } from "@/lib/research-content";
import { getSiteContent } from "@/lib/site.functions";

const meta = researchContent["no"].meta;

const contentQuery = queryOptions({
  staleTime: 60_000,
  queryKey: ["site-content", "no"],
  queryFn: () => getSiteContent({ data: { locale: "no" as const } }),
});

export const Route = createFileRoute("/forskning")({
  head: () => ({
    meta: [
      { title: meta.title },
      { name: "description", content: meta.description },
      { property: "og:title", content: meta.title },
      { property: "og:site_name", content: "QuestPulse" },
      {
        property: "og:image",
        content: "https://questpulse.no/imagery/questpulse-leadership-reflection.webp",
      },
      { property: "og:image:alt", content: "QuestPulse: reflection and dialogue at work" },
      {
        name: "twitter:image",
        content: "https://questpulse.no/imagery/questpulse-leadership-reflection.webp",
      },
      { property: "og:description", content: meta.description },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "nb_NO" },
      { property: "og:url", content: "https://questpulse.no/forskning" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "keywords",
        content:
          "People Intelligence, organisatorisk helse, lederrisiko, psykologisk trygghet, turnover, sykefravær, arbeidsmiljøloven",
      },
    ],
    links: [
      { rel: "canonical", href: "https://questpulse.no/forskning" },
      { rel: "alternate", hrefLang: "en", href: "https://questpulse.no/en/research" },
      { rel: "alternate", hrefLang: "nb", href: "https://questpulse.no/forskning" },
      { rel: "alternate", hrefLang: "x-default", href: "https://questpulse.no/forskning" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "CollectionPage",
              name: meta.title,
              description: meta.description,
              url: "https://questpulse.no/forskning",
              inLanguage: "nb-NO",
              about: [
                "People Intelligence",
                "Organisatorisk helse",
                "Lederrisiko",
                "Psykologisk trygghet",
              ],
              publisher: {
                "@type": "Organization",
                name: "QuestPulse",
                url: "https://questpulse.no",
              },
              hasPart: researchContent["no"].groups.flatMap((g) =>
                g.sources.map((s) => ({
                  "@type": "ScholarlyArticle",
                  headline: s.title,
                  url: s.url,
                })),
              ),
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "QuestPulse",
                  item: "https://questpulse.no/",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Forskning",
                  item: "https://questpulse.no/forskning",
                },
              ],
            },
          ],
        }),
      },
    ],
  }),
  loader: ({ context }) => context.queryClient.ensureQueryData(contentQuery),
  component: Page,
});

function Page() {
  const { data } = useSuspenseQuery(contentQuery);
  return <ResearchPage locale="no" content={data} />;
}
