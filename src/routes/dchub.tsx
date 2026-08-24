import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { Reveal } from "@/components/dchub/Reveal";
import { DCH_FORM_ID, HubSpotForm } from "@/components/site/HubSpotForm";
import {
  BOOKING_URL,
  about,
  closing,
  dchubBrand,
  dchubImages,
  dchubSite,
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

const title = "Businesscoach og ledercoach | Linda Karlsen | Digital Coach Hub";
const description =
  "Linda Karlsen tilbyr businesscoaching, ledercoaching, foredrag og workshops for gründere og ledere. 20 års ledererfaring. Askim og digitalt i hele Norge.";
const site = dchubSite;

export const Route = createFileRoute("/dchub")({
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
      { property: "og:url", content: `${site}/` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${site}/` }],
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
          areaServed: ["Askim", "Indre Østfold", "Oslo", "Norge"],
          serviceType: [
            "Businesscoaching",
            "Ledercoaching",
            "Foredrag",
            "Workshops",
          ],
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

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dch-accent-strong focus-visible:ring-offset-2 focus-visible:ring-offset-white";
const btnPrimary = `inline-flex min-h-[48px] items-center justify-center gap-2 rounded-md bg-dch-accent-strong px-7 py-3.5 text-[15px] font-bold text-white transition-colors hover:bg-dch-ink ${focusRing}`;
const btnOutline = `inline-flex min-h-[48px] items-center justify-center gap-2 rounded-md border-2 border-dch-ink px-7 py-3.5 text-[15px] font-bold text-dch-ink transition-colors hover:bg-dch-ink hover:text-white ${focusRing}`;
const eyebrow =
  "inline-block text-[11px] font-bold tracking-[0.14em] text-dch-accent-strong uppercase";
const h2 = "mt-4 font-display text-[clamp(26px,3.2vw,38px)] leading-[1.2] font-bold";

/** Bevarer UTM-parametere fra landingen videre til HubSpot-bookingen. */
function useBookingUrl() {
  const [url, setUrl] = useState(BOOKING_URL);

  useEffect(() => {
    const current = new URLSearchParams(window.location.search);
    const forwarded = new URLSearchParams();
    current.forEach((value, key) => {
      if (/^(utm_|gclid|fbclid|hsa_)/i.test(key)) forwarded.append(key, value);
    });
    const query = forwarded.toString();
    if (query) setUrl(`${BOOKING_URL}?${query}`);
  }, []);

  return url;
}

function BookButton({
  children,
  variant = "primary",
  className = "",
}: {
  children: React.ReactNode;
  variant?: "primary" | "outline";
  className?: string;
}) {
  const url = useBookingUrl();
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener"
      data-booking-cta
      className={`${variant === "primary" ? btnPrimary : btnOutline} ${className}`}
    >
      {children}
    </a>
  );
}

function DcHub() {
  const bookingUrl = useBookingUrl();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen scroll-smooth bg-dch-sand font-sans text-dch-ink">
      <a
        href="#hovedinnhold"
        className={`sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[60] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-bold ${focusRing}`}
      >
        Til hovedinnhold
      </a>

      <header className="sticky top-0 z-50 border-b border-dch-line bg-dch-sand/95 backdrop-blur">
        <div className="mx-auto flex min-h-[72px] max-w-[1120px] items-center justify-between gap-4 px-5 py-3 sm:px-8">
          <a href="#hovedinnhold" className={`flex flex-col leading-tight ${focusRing}`}>
            <span className="font-display text-lg font-bold tracking-tight sm:text-xl">
              Digital Coach Hub
            </span>
            <span className="text-[10px] font-semibold tracking-[0.1em] text-dch-muted uppercase">
              Linda Karlsen
            </span>
          </a>

          <nav aria-label="Hovedmeny" className="hidden lg:block">
            <ul className="flex items-center gap-7">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`inline-flex min-h-[44px] items-center text-sm font-medium text-dch-ink/80 transition-colors hover:text-dch-ink ${focusRing}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <BookButton className="hidden px-5 py-2.5 text-sm sm:inline-flex">
              Book en gratis samtale
            </BookButton>
            <button
              type="button"
              aria-expanded={menuOpen}
              aria-controls="mobilmeny"
              onClick={() => setMenuOpen((open) => !open)}
              className={`inline-flex h-11 w-11 items-center justify-center rounded-md border border-dch-line bg-white text-dch-ink lg:hidden ${focusRing}`}
            >
              <span className="sr-only">{menuOpen ? "Lukk meny" : "Åpne meny"}</span>
              <span aria-hidden className="text-lg leading-none">
                {menuOpen ? "✕" : "☰"}
              </span>
            </button>
          </div>
        </div>

        {menuOpen ? (
          <nav
            id="mobilmeny"
            aria-label="Mobilmeny"
            className="border-t border-dch-line bg-white lg:hidden"
          >
            <ul className="mx-auto max-w-[1120px] px-5 py-2 sm:px-8">
              {navLinks.map((link) => (
                <li key={link.href} className="border-b border-dch-line/70 last:border-0">
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`flex min-h-[52px] items-center text-[15px] font-semibold ${focusRing}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="py-4">
                <BookButton className="w-full">Book en gratis samtale</BookButton>
              </li>
            </ul>
          </nav>
        ) : null}
      </header>

      <main id="hovedinnhold">
        {/* 2. HERO */}
        <section className="border-b border-dch-line bg-dch-warm">
          <div className="mx-auto grid max-w-[1120px] items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
            <Reveal>
              <span className={eyebrow}>{hero.eyebrow}</span>
              <h1 className="mt-4 font-display text-[clamp(32px,4.6vw,54px)] leading-[1.12] font-bold">
                {hero.title}
              </h1>
              <p className="mt-6 max-w-xl text-[19px] leading-[1.75] text-dch-muted">{hero.lead}</p>
              <div className="mt-9 flex flex-wrap gap-3.5">
                <BookButton>{hero.ctaPrimary}</BookButton>
                <a href="#slik-jobber-jeg" className={btnOutline}>
                  {hero.ctaSecondary}
                </a>
              </div>
              <ul className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-2 text-[13px] font-semibold text-dch-ink/85">
                {hero.trust.map((item, index) => (
                  <li key={item} className="flex items-center gap-4">
                    {index > 0 ? <span aria-hidden className="h-4 w-px bg-dch-line" /> : null}
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal>
              <img
                src={dchubImages.lindaHero}
                alt="Linda Karlsen, businesscoach og ledercoach i Digital Coach Hub"
                className="aspect-[4/5] w-full rounded-[20px] object-cover object-top shadow-[0_18px_50px_-30px_rgba(19,33,47,0.5)]"
                loading="eager"
              />
            </Reveal>
          </div>
        </section>

        {/* 3. GJENKJENNELSE */}
        <section className="border-b border-dch-line bg-dch-sand">
          <div className="mx-auto max-w-[1120px] px-5 py-20 sm:px-8 lg:py-28">
            <Reveal className="max-w-[720px]">
              <span className={eyebrow}>{recognition.eyebrow}</span>
              <h2 className={h2}>{recognition.title}</h2>
              <p className="mt-5 text-[19px] leading-[1.75] text-dch-muted">{recognition.lead}</p>
            </Reveal>

            <div className="mt-14 grid gap-x-14 gap-y-12 sm:grid-cols-2">
              {recognition.items.map((item, index) => (
                <Reveal key={item.title}>
                  <div className="border-t border-dch-line pt-6">
                    <span className="font-display text-sm font-bold text-dch-accent-strong">
                      0{index + 1}
                    </span>
                    <h3 className="mt-2 font-display text-[22px] leading-snug font-bold">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-[16px] leading-[1.8] text-dch-muted">{item.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 4. RESULTATET KUNDEN ØNSKER */}
        <section className="border-b border-dch-line bg-dch-warm">
          <div className="mx-auto max-w-[1120px] px-5 py-20 sm:px-8 lg:py-28">
            <Reveal className="max-w-[720px]">
              <span className={eyebrow}>{outcomes.eyebrow}</span>
              <h2 className={h2}>{outcomes.title}</h2>
              <p className="mt-5 text-[19px] leading-[1.75] text-dch-muted">{outcomes.lead}</p>
            </Reveal>
            <div className="mt-14 grid gap-10 sm:grid-cols-3">
              {outcomes.items.map((item) => (
                <Reveal key={item.title}>
                  <div className="border-t-2 border-dch-accent-strong pt-5">
                    <h3 className="font-display text-[22px] font-bold">{item.title}</h3>
                    <p className="mt-3 text-[16px] leading-[1.8] text-dch-muted">{item.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 5. TJENESTER */}
        <section id="tjenester" className="border-b border-dch-line bg-dch-sand">
          <div className="mx-auto max-w-[1120px] px-5 py-20 sm:px-8 lg:py-28">
            <Reveal className="max-w-[720px]">
              <span className={eyebrow}>{servicesSection.eyebrow}</span>
              <h2 className={h2}>{servicesSection.title}</h2>
            </Reveal>

            <div className="mt-12 divide-y divide-dch-line border-y border-dch-line">
              {services.map((service) => (
                <Reveal key={service.id}>
                  <article
                    id={service.id}
                    className="grid scroll-mt-24 gap-6 py-10 lg:grid-cols-[0.32fr_0.68fr]"
                  >
                    <div>
                      <span className={eyebrow}>{service.label}</span>
                      <h3 className="mt-3 font-display text-[24px] leading-snug font-bold">
                        {service.title}
                      </h3>
                    </div>
                    <div>
                      <p className="max-w-2xl text-[17px] leading-[1.8] text-dch-muted">
                        {service.text}
                      </p>
                      <BookButton className="mt-6">{service.cta}</BookButton>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 6. SLIK FOREGÅR SAMARBEIDET */}
        <section id="slik-jobber-jeg" className="border-b border-dch-line bg-dch-warm">
          <div className="mx-auto max-w-[1120px] scroll-mt-24 px-5 py-20 sm:px-8 lg:py-28">
            <Reveal className="max-w-[720px]">
              <span className={eyebrow}>{process.eyebrow}</span>
              <h2 className={h2}>{process.title}</h2>
            </Reveal>
            <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {process.steps.map((step, index) => (
                <li key={step.title}>
                  <Reveal>
                    <div className="border-t border-dch-line pt-5">
                      <span className="font-display text-3xl font-bold text-dch-accent-strong">
                        {index + 1}
                      </span>
                      <h3 className="mt-3 font-display text-xl font-bold">{step.title}</h3>
                      <p className="mt-3 text-[16px] leading-[1.8] text-dch-muted">{step.text}</p>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ol>
            <p className="mt-12 max-w-2xl text-[15px] text-dch-muted italic">{process.note}</p>
            <BookButton className="mt-8">Book en gratis avklaringssamtale</BookButton>
          </div>
        </section>

        {/* 7. KUNDEUTTALELSER */}
        <section id="resultater" className="border-b border-dch-line bg-dch-sand">
          <div className="mx-auto max-w-[1120px] scroll-mt-24 px-5 py-20 sm:px-8 lg:py-28">
            <Reveal className="max-w-[720px]">
              <span className={eyebrow}>{resultsSection.eyebrow}</span>
              <h2 className={h2}>{resultsSection.title}</h2>
            </Reveal>
            <div className="mt-12 grid gap-10 md:grid-cols-3">
              {testimonials.map((item) => (
                <Reveal key={item.name}>
                  <blockquote className="border-t border-dch-line pt-6">
                    <p className="font-display text-[19px] leading-[1.6]">{item.quote}</p>
                    <footer className="mt-5 text-[14px]">
                      <span className="font-bold">{item.name}</span>
                      <span className="text-dch-muted"> · {item.role}</span>
                    </footer>
                  </blockquote>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 8. OM LINDA */}
        <section id="om-linda" className="border-b border-dch-line bg-dch-warm">
          <div className="mx-auto grid max-w-[1120px] scroll-mt-24 gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:py-28">
            <Reveal>
              <img
                src={dchubImages.coachingSamtale}
                alt="Linda Karlsen i samtale med en leder"
                className="aspect-[3/4] w-full rounded-[20px] object-cover object-top"
                loading="lazy"
              />
            </Reveal>
            <Reveal>
              <span className={eyebrow}>{about.eyebrow}</span>
              <h2 className={h2}>{about.title}</h2>
              <div className="mt-6 space-y-4">
                {about.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 24)} className="text-[17px] leading-[1.85] text-dch-muted">
                    {paragraph}
                  </p>
                ))}
              </div>
              <BookButton className="mt-9">{about.cta}</BookButton>
            </Reveal>
          </div>
        </section>

        {/* 9. KORT QUESTPULSE-KOBLING */}
        <section className="border-b border-dch-line bg-dch-sand">
          <div className="mx-auto max-w-[1120px] px-5 py-12 sm:px-8">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-3xl">
                <span className="text-[11px] font-bold tracking-[0.14em] text-dch-muted uppercase">
                  {questpulseNote.eyebrow}
                </span>
                <h2 className="mt-2 font-display text-[20px] leading-snug font-bold">
                  {questpulseNote.title}
                </h2>
                <p className="mt-2 text-[15px] leading-[1.75] text-dch-muted">
                  {questpulseNote.text}
                </p>
              </div>
              <a
                href={questpulseNote.href}
                className={`inline-flex min-h-[44px] items-center text-sm font-bold text-dch-accent-strong underline underline-offset-4 ${focusRing}`}
              >
                {questpulseNote.cta}
              </a>
            </div>
          </div>
        </section>

        {/* 10. FAQ */}
        <section id="faq" className="border-b border-dch-line bg-dch-warm">
          <div className="mx-auto max-w-[820px] px-5 py-20 sm:px-8 lg:py-24">
            <Reveal>
              <span className={eyebrow}>Ofte stilte spørsmål</span>
              <h2 className={h2}>Det folk spør om før de booker</h2>
            </Reveal>
            <div className="mt-10 divide-y divide-dch-line border-y border-dch-line">
              {faq.map((item) => (
                <details key={item.q} className="group py-5">
                  <summary
                    className={`flex min-h-[44px] cursor-pointer list-none items-center justify-between gap-4 font-display text-[19px] font-bold ${focusRing}`}
                  >
                    {item.q}
                    <span
                      aria-hidden
                      className="text-dch-accent-strong transition-transform group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-[16px] leading-[1.8] text-dch-muted">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* 11. SLUTTSEKSJON: BOOKING OG KONTAKTSKJEMA */}
        <section id="book" className="bg-dch-sand">
          <div className="mx-auto max-w-[1120px] scroll-mt-24 px-5 py-20 sm:px-8 lg:py-28">
            <Reveal className="max-w-[720px]">
              <span className={eyebrow}>{closing.eyebrow}</span>
              <h2 className={h2}>{closing.title}</h2>
              <p className="mt-5 text-[19px] leading-[1.75] text-dch-muted">{closing.text}</p>
              <BookButton className="mt-8">{closing.ctaPrimary}</BookButton>
            </Reveal>

            <div className="mt-12 overflow-hidden rounded-[20px] border border-dch-line bg-white">
              <iframe
                src={`${BOOKING_URL}?embed=true`}
                title="Book en samtale med Linda Karlsen"
                loading="lazy"
                className="w-full"
                style={{ minHeight: 720 }}
              />
            </div>

            <div className="mt-16 grid gap-12 border-t border-dch-line pt-12 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <h3 className="font-display text-[22px] font-bold">Eller send en melding</h3>
                <p className="mt-3 text-[16px] leading-[1.8] text-dch-muted">{closing.formLead}</p>
                <p className="mt-6 text-sm text-dch-muted">
                  <a
                    className={`font-semibold text-dch-accent-strong ${focusRing}`}
                    href={`mailto:${dchubBrand.email}`}
                  >
                    {dchubBrand.email}
                  </a>
                  <br />
                  <a
                    className={`font-semibold text-dch-accent-strong ${focusRing}`}
                    href={`tel:${dchubBrand.phone}`}
                  >
                    {dchubBrand.phoneDisplay}
                  </a>
                  <br />
                  {dchubBrand.place}
                </p>
                <p className="mt-6 text-xs text-dch-muted">
                  Konfidensielt. Alle henvendelser behandles med diskresjon.
                </p>
              </div>
              <HubSpotForm formId={DCH_FORM_ID} />
            </div>
          </div>
        </section>
      </main>

      {/* 12. FOOTER */}
      <footer className="bg-dch-ink py-14 text-white">
        <div className="mx-auto grid max-w-[1120px] gap-10 px-5 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="font-display text-xl font-bold">Digital Coach Hub</div>
            <div className="mt-1 text-[13px] text-white/70">Linda Karlsen</div>
            <p className="mt-4 max-w-sm text-sm leading-[1.8] text-white/70">
              Businesscoaching, ledercoaching, foredrag og workshops for gründere og ledere. 20 års
              ledererfaring. Askim og digitalt i hele Norge.
            </p>
          </div>
          <nav aria-label="Footer: tjenester">
            <div className="text-[11px] font-bold tracking-[0.14em] text-white/60 uppercase">
              Tjenester
            </div>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              {services.map((service) => (
                <li key={service.id}>
                  <a href={`#${service.id}`} className={`hover:text-white ${focusRing}`}>
                    {service.label === "For virksomheter" ? "Foredrag og workshops" : service.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#faq" className={`hover:text-white ${focusRing}`}>
                  Ofte stilte spørsmål
                </a>
              </li>
            </ul>
          </nav>
          <div>
            <div className="text-[11px] font-bold tracking-[0.14em] text-white/60 uppercase">
              Kontakt
            </div>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li>
                <a href={`mailto:${dchubBrand.email}`} className={`hover:text-white ${focusRing}`}>
                  {dchubBrand.email}
                </a>
              </li>
              <li>
                <a href={`tel:${dchubBrand.phone}`} className={`hover:text-white ${focusRing}`}>
                  {dchubBrand.phoneDisplay}
                </a>
              </li>
              <li>{dchubBrand.place}</li>
              <li>Org.nr. {dchubBrand.orgNumber}</li>
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-12 flex max-w-[1120px] flex-wrap items-center justify-between gap-3 border-t border-white/15 px-5 pt-6 text-xs text-white/60 sm:px-8">
          <span>
            &copy; {new Date().getFullYear()} {dchubBrand.legalName}
          </span>
          <a href={questpulseNote.href} className={`hover:text-white ${focusRing}`}>
            QuestPulse leveres av {dchubBrand.legalName}
          </a>
        </div>
      </footer>

      {/* Mobil sticky CTA */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-dch-line bg-white/95 p-3 backdrop-blur sm:hidden">
        <a
          href={bookingUrl}
          target="_blank"
          rel="noopener"
          data-booking-cta
          className={`${btnPrimary} w-full`}
        >
          Book en gratis samtale
        </a>
      </div>
      <div aria-hidden className="h-20 bg-dch-ink sm:hidden" />
    </div>
  );
}
