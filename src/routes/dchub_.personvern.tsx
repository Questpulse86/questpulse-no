import { createFileRoute } from "@tanstack/react-router";

import { CookieNotice, CookieSettingsButton } from "@/components/dchub/CookieNotice";
import { dchubBrand, dchubSite } from "@/lib/dchub-content";
import { useDchHref } from "@/lib/dchub-href";
import { privacyMeta, privacyPage } from "@/lib/dchub-privacy";

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
    links: [{ rel: "canonical", href: url }],
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
  const homeHref = useDchHref("/");

  return (
    <div className="min-h-screen bg-dch-sand font-sans text-dch-ink">
      <header className="border-b border-dch-line bg-dch-sand/95">
        <div className="mx-auto flex min-h-[72px] max-w-[880px] items-center px-5 py-3 sm:px-8">
          <a href={homeHref} className="flex flex-col leading-tight">
            <span className="font-display text-lg font-bold tracking-tight sm:text-xl">
              Digital Coach Hub
            </span>
            <span className="text-[10px] font-semibold tracking-[0.1em] text-dch-muted uppercase">
              Linda Karlsen
            </span>
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-[880px] px-5 py-16 sm:px-8 lg:py-24">
        <h1 className="font-display text-[clamp(28px,4vw,42px)] leading-[1.15] font-bold">
          {privacyPage.title}
        </h1>
        <p className="mt-3 text-[13px] text-dch-muted">
          Versjon {privacyMeta.version}. Sist oppdatert {privacyMeta.updated}.
        </p>
        <p className="mt-6 text-[19px] leading-[1.75] text-dch-muted">{privacyPage.lead}</p>

        <div className="mt-12 space-y-12">
          {privacyPage.sections.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-24">
              <h2 className="font-display text-[24px] leading-[1.25] font-bold">{section.title}</h2>
              {section.paragraphs?.map((text) => (
                <p key={text} className="mt-4 text-[16px] leading-[1.8] text-dch-muted">
                  {text}
                </p>
              ))}
              {section.list ? (
                <ul className="mt-4 space-y-2 text-[16px] leading-[1.8] text-dch-muted">
                  {section.list.map((item) => (
                    <li key={item} className="pl-5 -indent-5 before:mr-2 before:content-['•']">
                      {item}
                    </li>
                  ))}
                </ul>
              ) : null}
              {section.table ? (
                <div className="mt-6 overflow-x-auto rounded-2xl border border-dch-line bg-white">
                  <table className="w-full border-collapse text-left text-[15px]">
                    <thead>
                      <tr className="border-b border-dch-line">
                        <th className="px-4 py-3 font-semibold">Type</th>
                        <th className="px-4 py-3 font-semibold">Formål</th>
                        <th className="px-4 py-3 font-semibold">Varighet</th>
                      </tr>
                    </thead>
                    <tbody>
                      {section.table.map((row) => (
                        <tr key={row.name} className="border-b border-dch-line last:border-0">
                          <td className="px-4 py-3 font-semibold">{row.name}</td>
                          <td className="px-4 py-3 text-dch-muted">{row.purpose}</td>
                          <td className="px-4 py-3 text-dch-muted">{row.duration}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : null}
              {section.id === "informasjonskapsler" ? (
                <CookieSettingsButton className="mt-6" />
              ) : null}
            </section>
          ))}
        </div>

        <p className="mt-16 border-t border-dch-line pt-8 text-[15px] text-dch-muted">
          {dchubBrand.legalName}, org.nr. {dchubBrand.orgNumber}.{" "}
          <a
            className="font-semibold text-dch-accent-strong underline underline-offset-4"
            href={`mailto:${dchubBrand.email}`}
          >
            {dchubBrand.email}
          </a>
        </p>
        <p className="mt-6">
          <a
            href={homeHref}
            className="text-[15px] font-semibold text-dch-accent-strong underline underline-offset-4"
          >
            Tilbake til forsiden
          </a>
        </p>
      </main>

      <CookieNotice />
    </div>
  );
}
