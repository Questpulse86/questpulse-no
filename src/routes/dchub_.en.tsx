import { createFileRoute } from "@tanstack/react-router";

import { DchubLandingPage, type DchubLandingContent } from "@/components/dchub/DchubLandingPage";
import { dchubBrand, dchubSite } from "@/lib/dchub-content";
import {
  aboutEn,
  closingEn,
  dchubUiEn,
  faqEn,
  heroEn,
  navLinksEn,
  outcomesEn,
  processEn,
  questpulseNoteEn,
  recognitionEn,
  resultsSectionEn,
  servicesEn,
  servicesSectionEn,
  testimonialsEn,
} from "@/lib/dchub-content-en";
import { cookieNoticeEn } from "@/lib/dchub-privacy-en";

const title = "Business Coach and Leadership Coach | Linda Karlsen | Digital Coach Hub";
const description =
  "Linda Karlsen offers business coaching, leadership coaching, talks and workshops for founders and leaders. 20 years of leadership experience. Askim and online across Norway.";
const site = dchubSite;
const shareImage = `${site}/dch-og-image.jpg`;

const landingContent: DchubLandingContent = {
  navLinks: navLinksEn,
  hero: heroEn,
  recognition: recognitionEn,
  outcomes: outcomesEn,
  servicesSection: servicesSectionEn,
  services: servicesEn,
  process: processEn,
  resultsSection: resultsSectionEn,
  testimonials: testimonialsEn,
  about: aboutEn,
  questpulseNote: questpulseNoteEn,
  faq: faqEn,
  closing: closingEn,
  ui: dchubUiEn,
  cookieNotice: cookieNoticeEn,
};

export const Route = createFileRoute("/dchub_/en")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "index, follow" },
      { property: "og:site_name", content: "Digital Coach Hub" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_GB" },
      { property: "og:url", content: `${site}/en/` },
      { property: "og:image", content: shareImage },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      {
        property: "og:image:alt",
        content: "Linda Karlsen, business coach and leadership coach at Digital Coach Hub",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: shareImage },
      {
        name: "twitter:image:alt",
        content: "Linda Karlsen, business coach and leadership coach at Digital Coach Hub",
      },
    ],
    links: [
      { rel: "canonical", href: `${site}/en/` },
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
            "Business coaching, leadership coaching, talks and workshops for founders and leaders. Askim and online across Norway.",
          url: `${site}/en/`,
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
          privacyPolicy: `${site}/en/privacy/`,
          areaServed: ["Askim", "Indre Østfold", "Oslo", "Norway"],
          serviceType: ["Business coaching", "Leadership coaching", "Talks", "Workshops"],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Linda Karlsen",
          jobTitle: ["Business coach", "Leadership coach", "Founder", "Speaker"],
          description:
            "Business coach, leadership coach, founder and speaker with 20 years of leadership experience.",
          url: `${site}/en/`,
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
          mainEntity: faqEn.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: { "@type": "Answer", text: item.a },
          })),
        }),
      },
    ],
  }),
  component: DcHubEnglish,
});

function DcHubEnglish() {
  return (
    <DchubLandingPage
      content={landingContent}
      locale="en"
      alternatePath="/"
      privacyPath="/en/privacy"
    />
  );
}
