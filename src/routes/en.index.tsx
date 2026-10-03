import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

import { Landing } from "@/components/site/Landing";
import { getSiteContent } from "@/lib/site.functions";

const contentQuery = queryOptions({
  staleTime: 60_000,
  queryKey: ["site-content", "en"],
  queryFn: () => getSiteContent({ data: { locale: "en" } }),
});

export const Route = createFileRoute("/en/")({
  head: () => ({
    meta: [
      { title: "QuestPulse | Leadership support and people intelligence" },
      {
        name: "description",
        content:
          "Private reflection, leadership support and organisational insight for HR and executive teams. Built for knowledge organisations with 100 or more employees.",
      },
      {
        property: "og:title",
        content: "QuestPulse | Leadership support and people intelligence",
      },
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
      { rel: "alternate", hrefLang: "nb", href: "https://questpulse.no/" },
      { rel: "alternate", hrefLang: "en", href: "https://questpulse.no/en" },
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
