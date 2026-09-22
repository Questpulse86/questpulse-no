import { createFileRoute } from "@tanstack/react-router";

import { DchubPrivacyPage } from "@/components/dchub/DchubPrivacyPage";
import { dchubSite } from "@/lib/dchub-content";
import { cookieNotice, privacyMeta, privacyPage } from "@/lib/dchub-privacy";

const title = "Personvernerklæring og informasjonskapsler | Digital Coach Hub";
const description =
  "Slik behandler Digital Coach Hub AS personopplysninger fra kontaktskjema, booking og bruk av nettsiden, og hvilke informasjonskapsler som brukes.";
const url = `${dchubSite}/personvern/`;

export const Route = createFileRoute("/personvern")({
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
    links: [{ rel: "canonical", href: url }],
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
