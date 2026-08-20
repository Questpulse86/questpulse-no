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
      { title: "QuestPulse | Continuous insight into your organisation" },
      {
        name: "description",
        content:
          "QuestPulse gives HR and leadership continuous insight into what is developing across the organisation, and makes it easier to prioritise the right actions.",
      },
      { property: "og:title", content: "QuestPulse | Continuous insight into your organisation" },
      { property: "og:site_name", content: "QuestPulse" },
      {
        property: "og:description",
        content: "People Intelligence for Nordic organisations. See it earlier. Act better.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en" },
      { property: "og:url", content: "https://questpulse.no/en" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://questpulse.no/en" },
      { rel: "alternate", hrefLang: "no", href: "/" },
    ],
  }),
  loader: ({ context }) => context.queryClient.ensureQueryData(contentQuery),
  component: EnglishIndex,
});

function EnglishIndex() {
  const { data } = useSuspenseQuery(contentQuery);
  return <Landing locale="en" content={data} />;
}
