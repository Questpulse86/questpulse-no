import { createFileRoute } from "@tanstack/react-router";

import { DchubPrivacyPage } from "@/components/dchub/DchubPrivacyPage";
import { dchubBrand, dchubSite } from "@/lib/dchub-content";
import {
  cookieNoticeEn,
  dchubPrivacyUiEn,
  privacyMetaEn,
  privacyPageEn,
} from "@/lib/dchub-privacy-en";

const title = "Privacy and Cookies | Digital Coach Hub";
const description =
  "How Digital Coach Hub AS processes personal data from contact forms, booking and website use, and which cookies are used.";
const url = `${dchubSite}/en/privacy/`;

export const Route = createFileRoute("/dchub_/en/privacy")({
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
      { property: "og:url", content: url },
      { name: "twitter:card", content: "summary" },
    ],
    links: [
      { rel: "canonical", href: url },
      { rel: "alternate", hrefLang: "nb", href: `${dchubSite}/personvern/` },
      { rel: "alternate", hrefLang: "en", href: url },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "PrivacyPolicy",
          name: privacyPageEn.title,
          url,
          inLanguage: "en-GB",
          version: privacyMetaEn.version,
          dateModified: privacyMetaEn.updatedIso,
          isPartOf: { "@type": "WebSite", name: "Digital Coach Hub", url: dchubSite },
          publisher: {
            "@type": "Organization",
            name: dchubBrand.legalName,
            identifier: `NO ${dchubBrand.orgNumber.replace(/\s/g, "")}`,
            email: dchubBrand.email,
            telephone: dchubBrand.phone,
            url: dchubSite,
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Digital Coach Hub", item: `${dchubSite}/en/` },
            { "@type": "ListItem", position: 2, name: privacyPageEn.title, item: url },
          ],
        }),
      },
    ],
  }),
  component: PrivacyPageEnglish,
});

function PrivacyPageEnglish() {
  return (
    <DchubPrivacyPage
      content={privacyPageEn}
      meta={privacyMetaEn}
      cookieContent={cookieNoticeEn}
      homePath="/en"
      privacyPath="/en/privacy"
      ui={dchubPrivacyUiEn}
    />
  );
}
