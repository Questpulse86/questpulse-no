import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

import { PageView } from "@/components/site/PageView";
import { pageContent } from "@/lib/page-content";
import { getSiteContent } from "@/lib/site.functions";

const meta = pageContent["en"]["security"].meta;

const contentQuery = queryOptions({
  staleTime: 60_000,
  queryKey: ["site-content", "en"],
  queryFn: () => getSiteContent({ data: { locale: "en" as const } }),
});

export const Route = createFileRoute("/en/security-and-privacy")({
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
      { property: "og:locale", content: "en" },
      { property: "og:url", content: "https://questpulse.no/en/security-and-privacy" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://questpulse.no/en/security-and-privacy" },
      { rel: "alternate", hrefLang: "no", href: "/sikkerhet-og-personvern" },
    ],
  }),
  loader: ({ context }) => context.queryClient.ensureQueryData(contentQuery),
  component: Page,
});

function Page() {
  const { data } = useSuspenseQuery(contentQuery);
  return <PageView locale="en" pageKey="security" content={data} />;
}
