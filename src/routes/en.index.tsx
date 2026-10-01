import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

import { Landing } from "@/components/site/Landing";
import { getSiteContent } from "@/lib/site.functions";

const contentQuery = queryOptions({
  queryKey: ["site-content", "en"],
  queryFn: () => getSiteContent({ data: { locale: "en" } }),
});

export const Route = createFileRoute("/en/")({
  head: () => ({
    meta: [
      { title: "QuestPulse | Continuous organisational insight for leaders" },
      {
        name: "description",
        content:
          "QuestPulse turns continuous organisational signals into protected, actionable insight for HR, leaders and executive teams – from early risk to documented effect.",
      },
      {
        property: "og:title",
        content: "QuestPulse | Continuous organisational insight for leaders",
      },
      { property: "og:site_name", content: "QuestPulse" },
      {
        property: "og:description",
        content:
          "From continuous organisational signals to prioritised leadership action and documented effect.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en" },
      { property: "og:url", content: "https://questpulse.no/en" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://questpulse.no/en" },
      { rel: "alternate", hrefLang: "no", href: "/" },
      { rel: "alternate", hrefLang: "x-default", href: "https://questpulse.no/en" },
    ],
  }),
  loader: ({ context }) => context.queryClient.ensureQueryData(contentQuery),
  component: EnglishIndex,
});

function EnglishIndex() {
  const { data } = useSuspenseQuery(contentQuery);
  return <Landing locale="en" content={data} />;
}
