import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

import { ResearchPage } from "@/components/site/ResearchPage";
import { researchContent } from "@/lib/research-content";
import { getSiteContent } from "@/lib/site.functions";

const meta = researchContent["en"].meta;

const contentQuery = queryOptions({
  queryKey: ["site-content", "en"],
  queryFn: () => getSiteContent({ data: { locale: "en" as const } }),
});

export const Route = createFileRoute("/en/research")({
  head: () => ({
    meta: [
      { title: meta.title },
      { name: "description", content: meta.description },
      { property: "og:title", content: meta.title },
      { property: "og:site_name", content: "QuestPulse" },
      { property: "og:description", content: meta.description },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_US" },
      { property: "og:url", content: "https://questpulse.no/en/research" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://questpulse.no/en/research" },
      { rel: "alternate", hrefLang: "nb", href: "/forskning" },
      { rel: "alternate", hrefLang: "en", href: "/en/research" },
    ],
  }),
  loader: ({ context }) => context.queryClient.ensureQueryData(contentQuery),
  component: Page,
});

function Page() {
  const { data } = useSuspenseQuery(contentQuery);
  return <ResearchPage locale="en" content={data} />;
}
