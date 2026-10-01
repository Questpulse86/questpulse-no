import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

import { DchubLandingPage, type DchubLandingContent } from "@/components/dchub/DchubLandingPage";
import { Landing } from "@/components/site/Landing";
import {
  about,
  closing,
  dchubSite,
  dchubUi,
  faq,
  hero,
  navLinks,
  outcomes,
  process,
  questpulseNote,
  recognition,
  resultsSection,
  services,
  servicesSection,
  testimonials,
} from "@/lib/dchub-content";
import { cookieNotice } from "@/lib/dchub-privacy";
import { isDchubHost, resolveHost } from "@/lib/host.functions";
import { getSiteContent } from "@/lib/site.functions";

const contentQuery = queryOptions({
  queryKey: ["site-content", "no"],
  queryFn: () => getSiteContent({ data: { locale: "no" } }),
});

const dchubContent: DchubLandingContent = {
  navLinks,
  hero,
  recognition,
  outcomes,
  servicesSection,
  services,
  process,
  resultsSection,
  testimonials,
  about,
  questpulseNote,
  faq,
  closing,
  ui: dchubUi,
  cookieNotice,
};

const dchTitle = "Businesscoach og ledercoach | Linda Karlsen | Digital Coach Hub";
const dchDescription =
  "Linda Karlsen tilbyr businesscoaching, ledercoaching, foredrag og workshops for gründere og ledere. 20 års ledererfaring. Askim og digitalt i hele Norge.";

export const Route = createFileRoute("/")({
  loader: async ({ context }) => {
    const host = await resolveHost();
    if (isDchubHost(host)) return { dchub: true as const };
    await context.queryClient.ensureQueryData(contentQuery);
    return { dchub: false as const };
  },
  head: ({ loaderData }) =>
    loaderData?.dchub
      ? {
          meta: [
            { title: dchTitle },
            { name: "description", content: dchDescription },
            { name: "robots", content: "index, follow" },
            { property: "og:site_name", content: "Digital Coach Hub" },
            { property: "og:title", content: dchTitle },
            { property: "og:description", content: dchDescription },
            { property: "og:type", content: "website" },
            { property: "og:locale", content: "nb_NO" },
            { property: "og:url", content: `${dchubSite}/` },
            { property: "og:image", content: `${dchubSite}/dch-og-image.jpg` },
            { name: "twitter:card", content: "summary_large_image" },
            { name: "twitter:image", content: `${dchubSite}/dch-og-image.jpg` },
          ],
          links: [{ rel: "canonical", href: `${dchubSite}/` }],
        }
      : {
          meta: [
            { title: "QuestPulse | Organisatorisk risiko og People Intelligence" },
            {
              name: "description",
              content:
                "QuestPulse gir HR, ledere og toppledelse løpende, beskyttet innsikt i organisatorisk risiko, slik at dere kan prioritere riktige handlinger før belastning og friksjon eskalerer.",
            },
            {
              property: "og:title",
              content: "QuestPulse | Organisatorisk risiko og People Intelligence",
            },
            { property: "og:site_name", content: "QuestPulse" },
            {
              property: "og:description",
              content:
                "Fra løpende organisatoriske signaler til prioriterte lederhandlinger og dokumentert effekt.",
            },
            { property: "og:type", content: "website" },
            { property: "og:locale", content: "nb_NO" },
            { property: "og:url", content: "https://questpulse.no/" },
            { name: "twitter:card", content: "summary_large_image" },
          ],
          links: [
            { rel: "canonical", href: "https://questpulse.no/" },
            { rel: "alternate", hrefLang: "en", href: "https://questpulse.no/en" },
            { rel: "alternate", hrefLang: "nb", href: "https://questpulse.no/" },
            { rel: "alternate", hrefLang: "x-default", href: "https://questpulse.no/en" },
          ],
          scripts: [
            {
              type: "application/ld+json",
              children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "SoftwareApplication",
                name: "QuestPulse",
                applicationCategory: "BusinessApplication",
                description:
                  "People Intelligence for organisatorisk helse og lederrisiko. Løpende innsikt for HR, ledere og toppledelse.",
                url: "https://questpulse.no/",
                inLanguage: "nb-NO",
                provider: {
                  "@type": "Organization",
                  name: "Digital Coach Hub AS",
                  taxID: "936265634",
                },
              }),
            },
            {
              type: "application/ld+json",
              children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                name: "Digital Coach Hub AS",
                brand: { "@type": "Brand", name: "QuestPulse" },
                url: "https://questpulse.no/",
                email: "linda@dchub.no",
                areaServed: ["Norway", "Nordics", "Europe"],
              }),
            },
          ],
        },
  component: Index,
});

function Index() {
  const { dchub } = Route.useLoaderData();
  if (dchub) {
    return (
      <DchubLandingPage
        content={dchubContent}
        locale="no"
        alternatePath="/en"
        privacyPath="/personvern"
      />
    );
  }
  return <QuestPulseHome />;
}

function QuestPulseHome() {
  const { data } = useSuspenseQuery(contentQuery);
  return <Landing locale="no" content={data} />;
}
