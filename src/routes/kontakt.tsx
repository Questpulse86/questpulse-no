import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

import { PageView } from "@/components/site/PageView";
import { pageContent } from "@/lib/page-content";
import { getSiteContent } from "@/lib/site.functions";

const meta = pageContent["no"]["contact"].meta;

const contentQuery = queryOptions({
  queryKey: ["site-content", "no"],
  queryFn: () => getSiteContent({ data: { locale: "no" as const } }),
});

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: meta.title },
      { name: "description", content: meta.description },
      { property: "og:title", content: meta.title },
      { property: "og:description", content: meta.description },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "nb_NO" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "alternate", hrefLang: "en", href: "/en/contact" }],
  }),
  loader: ({ context }) => context.queryClient.ensureQueryData(contentQuery),
  component: Page,
});

function Page() {
  const { data } = useSuspenseQuery(contentQuery);
  return <PageView locale="no" pageKey="contact" content={data} />;
}
