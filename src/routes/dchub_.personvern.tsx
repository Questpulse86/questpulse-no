import { createFileRoute } from "@tanstack/react-router";

import { DchubPrivacyPage } from "@/components/dchub/DchubPrivacyPage";
import { dchubBrand, dchubSite } from "@/lib/dchub-content";
import { cookieNotice, privacyMeta, privacyPage } from "@/lib/dchub-privacy";

const title = "Personvernerklæring og informasjonskapsler | Digital Coach Hub";
const description =
  "Slik behandler Digital Coach Hub AS personopplysninger fra kontaktskjema, booking og bruk av nettsiden, og hvilke informasjonskapsler som brukes.";
const url = `${dchubSite}/personvern/`;

export const Route = createFileRoute("/dchub_/personvern")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "index, follow" },
      { property: "og:site_name", content: "Digital Coach Hub" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "nb_NO" },
      { property: "og:url", content: url },
      { name: "twitter:card", content: "summary" },
    ],
    links: [
      { rel: "canonical", href: url },
      { rel: "alternate", hrefLang: "nb", href: url },
      { rel: "alternate", hrefLang: "en", href: `${dchubSite}/en/privacy/` },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "PrivacyPolicy",
          name: privacyPage.title,
          url,
          inLanguage: "nb-NO",
          version: privacyMeta.version,
          dateModified: privacyMeta.updatedIso,
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
            { "@type": "ListItem", position: 1, name: "Digital Coach Hub", item: `${dchubSite}/` },
            { "@type": "ListItem", position: 2, name: privacyPage.title, item: url },
          ],
        }),
      },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <DchubPrivacyPage
      content={privacyPage}
      meta={privacyMeta}
      cookieContent={cookieNotice}
      homePath="/"
      privacyPath="/personvern"
      ui={{
        versionLabel: "Versjon",
        updatedLabel: "Sist oppdatert",
        typeHeader: "Type",
        purposeHeader: "Formål",
        durationHeader: "Varighet",
        changeCookieChoice: "Endre valg for informasjonskapsler",
        updatingCookieChoice: "Oppdaterer …",
        backToHome: "Tilbake til forsiden",
        orgNumberLabel: "org.nr.",
      }}
    />
  );
}
