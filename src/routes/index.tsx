import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

import { Landing } from "@/components/site/Landing";
import { getSiteContent } from "@/lib/site.functions";

const contentQuery = queryOptions({
  queryKey: ["site-content", "no"],
  queryFn: () => getSiteContent({ data: { locale: "no" } }),
});

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "QuestPulse | People Intelligence" },
      {
        name: "description",
        content:
          "QuestPulse gir ledelsen løpende innsikt i belastning, friksjon og lederhandling, fra signal til dokumentert effekt.",
      },
      { property: "og:title", content: "QuestPulse | People Intelligence" },
      { property: "og:site_name", content: "QuestPulse" },
      {
        property: "og:description",
        content: "People Intelligence for norske virksomheter. Fra signal til dokumentert effekt.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "nb_NO" },
      { property: "og:url", content: "https://questpulse.no/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://questpulse.no/" },
      { rel: "alternate", hrefLang: "en", href: "/en" },
    ],
  }),
  loader: ({ context }) => context.queryClient.ensureQueryData(contentQuery),
  component: Index,
});

function Index() {
  const { data } = useSuspenseQuery(contentQuery);
  return <Landing locale="no" content={data} />;
}
