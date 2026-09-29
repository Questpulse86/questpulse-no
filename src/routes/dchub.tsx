import { createFileRoute } from "@tanstack/react-router";

import { DchubLandingPage, type DchubLandingContent } from "@/components/dchub/DchubLandingPage";
import {
  about,
  closing,
  dchubBrand,
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

const title = "Businesscoach og ledercoach | Linda Karlsen | Digital Coach Hub";
const description =
  "Linda Karlsen tilbyr businesscoaching, ledercoaching, foredrag og workshops for gründere og ledere. 20 års ledererfaring. Askim og digitalt i hele Norge.";
const site = dchubSite;
const shareImage = `${site}/dch-og-image.jpg`;

const landingContent: DchubLandingContent = {
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

export const Route = createFileRoute("/dchub")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "google-site-verification", content: "rfbFzmt2lToxviyPO67oS6CbpoLd-B04Bo6iyMJp0Z8" },
      { name: "robots", content: "index, follow" },
      { property: "og:site_name", content: "Digital Coach Hub" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "nb_NO" },
      { property: "og:url", content: `${site}/` },
      { property: "og:image", content: shareImage },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      {
        property: "og:image:alt",
        content: "Linda Karlsen, businesscoach og ledercoach i Digital Coach Hub",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: shareImage },
      {
        name: "twitter:image:alt",
        content: "Linda Karlsen, businesscoach og ledercoach i Digital Coach Hub",
      },
    ],
    links: [
      { rel: "canonical", href: `${site}/` },
      { rel: "alternate", hrefLang: "nb", href: `${site}/` },
      { rel: "alternate", hrefLang: "en", href: `${site}/en/` },
      { rel: "alternate", hrefLang: "x-default", href: `${site}/` },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Digital Coach Hub AS",
          alternateName: "Linda Karlsen coaching",
          description:
            "Businesscoaching, ledercoaching, foredrag og workshops for gründere og ledere. Askim og digitalt i hele Norge.",
          url: site,
          image: shareImage,
          telephone: dchubBrand.phone,
          email: dchubBrand.email,
          founder: { "@type": "Person", name: "Linda Karlsen" },
          address: {
            "@type": "PostalAddress",
            addressLocality: "Askim",
            addressRegion: "Indre Østfold",
            postalCode: "1830",
            addressCountry: "NO",
          },
          privacyPolicy: `${site}/personvern/`,
          areaServed: ["Askim", "Indre Østfold", "Oslo", "Norge"],
          serviceType: ["Businesscoaching", "Ledercoaching", "Foredrag", "Workshops"],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Linda Karlsen",
          jobTitle: ["Businesscoach", "Ledercoach", "Gründer", "Foredragsholder"],
          description:
            "Businesscoach, ledercoach, gründer og foredragsholder med 20 års ledererfaring.",
          url: site,
          image: shareImage,
          telephone: dchubBrand.phone,
          email: dchubBrand.email,
          worksFor: { "@type": "Organization", name: dchubBrand.legalName },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faq.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: { "@type": "Answer", text: item.a },
          })),
        }),
      },
    ],
  }),
  component: DcHub,
});

function DcHub() {
  return (
    <DchubLandingPage
      content={landingContent}
      locale="no"
      alternatePath="/en"
      privacyPath="/personvern"
    />
  );
}
