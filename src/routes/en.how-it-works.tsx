import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

import { PageView } from "@/components/site/PageView";
import { pageContent } from "@/lib/page-content";
import { getSiteContent } from "@/lib/site.functions";

const meta = pageContent["en"]["how"].meta;

const contentQuery = queryOptions({
  queryKey: ["site-content", "en"],
  queryFn: () => getSiteContent({ data: { locale: "en" as const } }),
});

export const Route = createFileRoute("/en/how-it-works")({
  head: () => ({
    meta: [
      { title: meta.title },
      { name: "description", content: meta.description },
      { property: "og:title", content: meta.title },
      { property: "og:site_name", content: "QuestPulse" },
      { property: "og:description", content: meta.description },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en" },
      { property: "og:url", content: "https://questpulse.no/en/how-it-works" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://questpulse.no/en/how-it-works" },
      { rel: "alternate", hrefLang: "no", href: "/slik-fungerer-det" },
    ],
  }),
  loader: ({ context }) => context.queryClient.ensureQueryData(contentQuery),
  component: Page,
});

function Page() {
  const { data } = useSuspenseQuery(contentQuery);
  return <PageView locale="en" pageKey="how" content={data} />;
}
