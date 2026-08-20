import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

import { PageView } from "@/components/site/PageView";
import { pageContent } from "@/lib/page-content";
import { getSiteContent } from "@/lib/site.functions";

const meta = pageContent["no"]["usecases"].meta;

const contentQuery = queryOptions({
  queryKey: ["site-content", "no"],
  queryFn: () => getSiteContent({ data: { locale: "no" as const } }),
});

export const Route = createFileRoute("/bruksomrader")({
  head: () => ({
    meta: [
      { title: meta.title },
      { name: "description", content: meta.description },
      { property: "og:title", content: meta.title },
      { property: "og:site_name", content: "QuestPulse" },
      { property: "og:description", content: meta.description },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "nb_NO" },
      { property: "og:url", content: "https://questpulse.no/bruksomrader" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://questpulse.no/bruksomrader" },
      { rel: "alternate", hrefLang: "nb", href: "https://questpulse.no/bruksomrader" },
      { rel: "alternate", hrefLang: "en", href: "https://questpulse.no/en/use-cases" },
    ],
  }),
  loader: ({ context }) => context.queryClient.ensureQueryData(contentQuery),
  component: Page,
});

function Page() {
  const { data } = useSuspenseQuery(contentQuery);
  return <PageView locale="no" pageKey="usecases" content={data} />;
}
