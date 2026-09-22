import { createFileRoute } from "@tanstack/react-router";

import { DchubPrivacyPage } from "@/components/dchub/DchubPrivacyPage";
import { dchubSite } from "@/lib/dchub-content";
import { privacyPolicy } from "@/lib/dchub-privacy";

const title = "Personvernerklæring | Digital Coach Hub";
const description =
  "Slik behandler Digital Coach Hub AS personopplysninger for coaching, foredrag og henvendelser.";

export const Route = createFileRoute("/personvern")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${dchubSite}/personvern/` }],
  }),
  component: () => <DchubPrivacyPage content={privacyPolicy} locale="no" homePath="/" />,
});
