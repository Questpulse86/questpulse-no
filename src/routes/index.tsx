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
      { title: "QuestPulse | Løpende innsikt i organisasjonen" },
      {
        name: "description",
        content:
          "QuestPulse gir HR og ledelsen løpende innsikt i hva som utvikler seg i organisasjonen, og gjør det lettere å prioritere riktige handlinger.",
      },
      { property: "og:title", content: "QuestPulse | Løpende innsikt i organisasjonen" },
      {
        property: "og:description",
        content: "People Intelligence for norske virksomheter. Se det tidligere. Handle bedre.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "nb_NO" },
      { property: "og:url", content: "https://questpulse.no/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://questpulse.no/" }, { rel: "alternate", hrefLang: "en", href: "/en" }],
  }),
  loader: ({ context }) => context.queryClient.ensureQueryData(contentQuery),
  component: Index,
});

function Index() {
  const { data } = useSuspenseQuery(contentQuery);
  return <Landing locale="no" content={data} />;
}
