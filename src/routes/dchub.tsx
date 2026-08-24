import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

import { Reveal } from "@/components/dchub/Reveal";
import { DCH_FORM_ID, HubSpotForm } from "@/components/site/HubSpotForm";
import { getSiteContent } from "@/lib/site.functions";
import {
  dchubImages,
  dchubSite,
  navLinks,
  situations,
  insights,
  usps,
  services,
  focusList,
  stats,
  values,
  team,
  testimonials,
  articles,
} from "@/lib/dchub-content";

const title = "Ledercoach Askim | Linda Karlsen NLP-coach | Digital Coach Hub";
const description =
  "Sertifisert NLP-coach Linda Karlsen i Askim tilbyr ledercoaching, ansattcoaching og grunder-coaching. 15 år erfaring. Book gratis avklaringssamtale i dag. Indre Østfold og online.";
const site = dchubSite;

const contentQuery = queryOptions({
  queryKey: ["site-content", "no"],
  queryFn: () => getSiteContent({ data: { locale: "no" as const } }),
});

export const Route = createFileRoute("/dchub")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "index, follow" },
      { property: "og:site_name", content: "Digital Coach Hub" },
      {
        property: "og:title",
        content: "Linda Karlsen. Coach for ledere og ansatte | Digital Coach Hub",
      },
      {
        property: "og:description",
        content:
          "Et trygt rom, konkrete verktøy og struktur som hjelper deg å prestere bærekraftig over tid.",
      },
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
          "@type": "LocalBusiness",
          name: "Digital Coach Hub AS",
          alternateName: "Linda Karlsen Coaching",
          description:
            "Sertifisert NLP-coach Linda Karlsen tilbyr coaching og sparring for ledere og ansatte. 15 år erfaring. Askim, Indre Østfold.",
          url: site,
          telephone: "+4794806616",
          email: "linda@dchub.no",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Askim",
            addressLocality: "Askim",
            addressRegion: "Indre Østfold",
            postalCode: "1830",
            addressCountry: "NO",
          },
          geo: { "@type": "GeoCoordinates", latitude: 59.5644, longitude: 11.1734 },
          areaServed: ["Askim", "Indre Østfold", "Oslo", "Norge"],
          sameAs: ["https://questpulse.no"],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Linda Karlsen",
          jobTitle: "NLP-coach og ledercoach",
          url: site,
          telephone: "+4794806616",
          email: "linda@dchub.no",
          worksFor: { "@type": "Organization", name: "Digital Coach Hub AS" },
        }),
      },
    ],
  }),
  loader: ({ context }) => context.queryClient.ensureQueryData(contentQuery),
  component: DcHub,
});

const btnPrimary =
  "inline-flex items-center justify-center gap-2 rounded-md border-2 border-dch-accent bg-dch-accent px-7 py-3.5 text-[15px] font-bold text-white transition-all hover:border-dch-accent-deep hover:bg-dch-accent-deep";
const btnOutline =
  "inline-flex items-center justify-center gap-2 rounded-md border-2 border-dch-ink px-7 py-3.5 text-[15px] font-bold text-dch-ink transition-all hover:bg-dch-ink hover:text-white";
const label =
  "inline-block text-[11px] font-bold tracking-[0.12em] text-dch-accent uppercase";

function DcHub() {
  const { data } = useSuspenseQuery(contentQuery);

  return (
    <div className="min-h-screen scroll-smooth bg-white font-sans text-dch-ink">
      <nav className="sticky top-0 z-50 border-b border-dch-line bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-[68px] max-w-[1120px] items-center justify-between px-8">
          <a href="#" className="flex items-baseline gap-2">
            <span className="font-display text-xl font-bold tracking-tight">Digital Coach Hub</span>
            <span className="text-[10px] font-semibold tracking-[0.08em] text-dch-accent uppercase">
              Linda Karlsen
            </span>
          </a>
          <ul className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-dch-muted transition-colors hover:text-dch-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4">
            <a
              href="https://questpulse.no"
              className="hidden text-[13px] font-semibold text-dch-accent hover:opacity-75 sm:inline"
            >
              QuestPulse for bedrifter
            </a>
            <a href="#kontakt" className={`${btnPrimary} px-5 py-2.5 text-sm`}>
              Book samtale
            </a>
          </div>
        </div>
      </nav>

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden bg-dch-sand py-24">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-20 -right-32 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(26,154,142,0.10)_0%,transparent_70%)]"
          />
          <div className="relative mx-auto grid max-w-[1120px] items-center gap-16 px-8 lg:grid-cols-2">
            <Reveal>
              <span className="mb-6 inline-flex items-center rounded-full border border-dch-accent/25 bg-dch-accent/10 px-3.5 py-1.5 text-xs font-bold tracking-[0.08em] text-dch-accent uppercase">
                Coaching og sparring for ledere og ansatte
              </span>
              <h1 className="font-display text-[clamp(34px,4.5vw,52px)] leading-[1.15] font-bold">
                Når jobben tar
                <br />
                mer enn den gir.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-[1.75] text-dch-muted">
                Du trenger ikke mer motivasjon. Du trenger støtte som er trygg, profesjonell og som
                faktisk holder. Jeg gir deg et trygt rom, konkrete verktøy og struktur som hjelper
                deg å prestere bærekraftig over tid.
              </p>
              <div className="mt-9 flex flex-wrap gap-3.5">
                <a href="#kontakt" className={btnPrimary}>
                  Book en uforpliktende samtale
                </a>
                <a href="#tjenester" className={btnOutline}>
                  Se hva jeg tilbyr
                </a>
              </div>
              <div className="mt-10 flex flex-wrap items-center gap-5 text-xs font-semibold text-dch-muted">
                <span>Sertifisert NLP-coach</span>
                <span className="h-4 w-px bg-dch-line" />
                <span className="text-dch-ink">15 år med ledere og ansatte</span>
                <span className="h-4 w-px bg-dch-line" />
                <span className="text-dch-ink">Askim, Indre Østfold</span>
              </div>
            </Reveal>

            <Reveal>
              <div className="overflow-hidden rounded-[20px] bg-white shadow-[0_4px_28px_rgba(19,33,47,0.09)]">
                <img
                  src={dchubImages.lindaHero}
                  alt="Linda Karlsen, sertifisert NLP-coach og daglig leder i Digital Coach Hub AS"
                  className="aspect-[3/4] min-h-[340px] w-full object-cover object-top"
                  loading="eager"
                />
                <div className="flex items-center gap-4 border-t border-dch-line p-6">
                  <img
                    src={dchubImages.lindaHero}
                    alt=""
                    className="h-12 w-12 flex-shrink-0 rounded-full border-2 border-dch-accent/25 object-cover object-top"
                  />
                  <div>
                    <div className="font-display text-[17px] font-bold">Linda Karlsen</div>
                    <div className="text-xs text-dch-muted">
                      Sertifisert NLP-coach, CEO Digital Coach Hub AS
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* SITUASJONER */}
        <section id="situasjoner" className="py-24">
          <div className="mx-auto max-w-[1120px] px-8">
            <Reveal className="mx-auto mb-16 max-w-[640px] text-center">
              <span className={label}>Situasjoner jeg ser hver dag</span>
              <h2 className="mt-3.5 font-display text-[clamp(26px,3.2vw,38px)] leading-tight">
                Du vet at noe må justeres.
                <br />
                Men ikke helt hvor du skal starte.
              </h2>
              <p className="mt-4 text-[19px] leading-[1.75] text-dch-muted">
                Arbeidshverdagen er blitt mer krevende for mange. Mer kompleksitet, mer endring og
                mindre tid til å hente seg inn. Her er situasjonene jeg hjelper folk gjennom.
              </p>
            </Reveal>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {situations.map((item) => (
                <Reveal key={item.title}>
                  <article className="h-full rounded-xl border border-dch-line bg-white p-7 transition-shadow hover:shadow-[0_2px_12px_rgba(19,33,47,0.07)]">
                    <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-dch-accent/10 text-dch-accent">
                      ●
                    </span>
                    <h3 className="font-display text-xl">{item.title}</h3>
                    <p className="mt-3 text-[15px] leading-[1.75] text-dch-muted">{item.text}</p>
                  </article>
                </Reveal>
              ))}
              <Reveal>
                <article className="h-full rounded-xl border border-dch-accent/20 bg-dch-sand p-7">
                  <h3 className="font-display text-xl">Usikker på neste steg?</h3>
                  <p className="mt-3 mb-4 text-[15px] leading-[1.75] text-dch-muted">
                    Du trenger ikke ha alle svar før du tar kontakt. I en gratis avklaringssamtale
                    ser vi på hvor du står og hva som kan passe deg.
                  </p>
                  <a href="#kontakt" className={`${btnPrimary} px-5 py-2.5 text-sm`}>
                    Book gratis avklaring
                  </a>
                </article>
              </Reveal>
            </div>
          </div>
        </section>

        {/* PROBLEMET */}
        <section id="problemet" className="bg-dch-sand py-24">
          <div className="mx-auto grid max-w-[1120px] gap-14 px-8 lg:grid-cols-2">
            <Reveal>
              <span className={label}>Problemet er sjelden manglende vilje</span>
              <h2 className="mt-3.5 font-display text-[clamp(26px,3.2vw,38px)] leading-tight">
                De fleste vil levere godt, bidra i teamet og utvikle seg.
              </h2>
              <p className="mt-5 text-[17px] leading-[1.75] text-dch-muted">
                Utfordringen er at hverdagen ofte er lagt opp slik at det er vanskelig å lykkes
                alene. Uten gode verktøy og støtte ser jeg dette mønsteret igjen og igjen, uavhengig
                av tittel, bransje eller erfaring.
              </p>
              <p className="mt-4 text-[17px] leading-[1.75] text-dch-muted">
                Det er ikke et motivasjonsproblem. Det er et struktur- og støtteproblem. Og det lar
                seg løse.
              </p>
              <a href="#kontakt" className={`${btnPrimary} mt-6`}>
                Start med en samtale
              </a>
            </Reveal>

            <Reveal className="space-y-4">
              {insights.map((item) => (
                <div
                  key={item.title}
                  className="flex gap-4 rounded-xl border border-dch-line bg-white p-6"
                >
                  <span className="mt-1 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-dch-accent/10 text-dch-accent">
                    ●
                  </span>
                  <div>
                    <h3 className="font-display text-lg">{item.title}</h3>
                    <p className="mt-2 text-[15px] leading-[1.7] text-dch-muted">{item.text}</p>
                  </div>
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        {/* USP */}
        <section className="relative overflow-hidden bg-dch-ink py-24">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(26,154,142,0.16)_0%,transparent_70%)]"
          />
          <div className="relative mx-auto max-w-[1120px] px-8">
            <Reveal className="mx-auto max-w-[580px] text-center">
              <span className="text-[11px] font-bold tracking-[0.12em] text-white/60 uppercase">
                Hvorfor Digital Coach Hub
              </span>
              <h2 className="mt-3.5 font-display text-[clamp(26px,3.2vw,38px)] text-white">
                Ikke mer motivasjon. Mer system.
              </h2>
              <p className="mt-3.5 text-base leading-[1.7] text-white/55">
                Fire konkrete områder der vi gjør hverdagen din enklere å lede i, fra dag én.
              </p>
            </Reveal>

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {usps.map((usp) => (
                <Reveal key={usp.num}>
                  <article className="h-full rounded-xl border border-white/10 bg-white/[0.04] p-7 transition-transform hover:-translate-y-1">
                    <div className="text-[11px] font-bold tracking-[0.12em] text-dch-accent uppercase">
                      {usp.num}
                    </div>
                    <h3 className="mt-4 font-display text-xl text-white">{usp.title}</h3>
                    <div className="mt-1 text-[13px] text-white/50">{usp.sub}</div>
                    <p className="mt-4 text-[15px] leading-[1.7] text-white/70">{usp.text}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* TJENESTER */}
        <section id="tjenester" className="bg-dch-sand py-24">
          <div className="mx-auto max-w-[1120px] px-8">
            <Reveal className="mx-auto max-w-[640px] text-center">
              <span className={label}>Hva passer deg best?</span>
              <h2 className="mt-3.5 font-display text-[clamp(24px,2.6vw,32px)] leading-tight">
                Uansett om du kommer som leder, ny i rollen, ansatt under press eller på vegne av en
                bedrift, starter vi med en avklaringssamtale og tilpasser opplegget til din
                situasjon.
              </h2>
            </Reveal>

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => (
                <Reveal key={service.tag}>
                  <article className="flex h-full flex-col justify-between rounded-xl border border-dch-line bg-white">
                    <div className="p-7">
                      <span className="inline-block rounded-full bg-dch-accent/10 px-3 py-1 text-[11px] font-bold tracking-[0.08em] text-dch-accent uppercase">
                        {service.tag}
                      </span>
                      <h3 className="mt-4 font-display text-xl">{service.title}</h3>
                      <p className="mt-3 text-[15px] leading-[1.75] text-dch-muted">
                        {service.text}
                      </p>
                    </div>
                    <div className="border-t border-dch-line px-7 py-5">
                      <a
                        href="#kontakt"
                        className="text-sm font-bold text-dch-accent underline-offset-4 hover:underline"
                      >
                        {service.cta}
                      </a>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-12">
              <div className="flex flex-col items-start gap-6 rounded-xl border border-dch-accent/25 bg-white p-8 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-3xl">
                  <span className={label}>For virksomheter med 20+ ansatte</span>
                  <h3 className="mt-3 font-display text-2xl">
                    Forebygging og løpende innsikt med QuestPulse
                  </h3>
                  <p className="mt-3 text-[15px] leading-[1.75] text-dch-muted">
                    Digital Coach Hub AS står bak QuestPulse, en norskutviklet People Intelligence
                    Platform som gir virksomheter løpende innsikt i belastning og organisatorisk
                    risiko. For virksomheter som trenger kontinuitet, struktur og bedre
                    beslutningsgrunnlag i arbeidet med mennesker, ledelse og endring.
                  </p>
                </div>
                <a href="https://questpulse.no" className={`${btnPrimary} whitespace-nowrap`}>
                  Les om QuestPulse
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* OM LINDA */}
        <section id="om-linda" className="py-24">
          <div className="mx-auto grid max-w-[1120px] gap-16 px-8 lg:grid-cols-[0.85fr_1.15fr]">
            <Reveal>
              <div className="relative">
                <img
                  src={dchubImages.coachingSamtale}
                  alt="Linda Karlsen i samtale med en leder i et møterom"
                  className="aspect-[3/4] w-full rounded-xl object-cover object-top"
                  loading="lazy"
                />
                <div className="mt-4 flex items-center gap-3 rounded-xl border border-dch-line bg-white p-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-dch-accent/10 text-dch-accent">
                    ✓
                  </span>
                  <div>
                    <div className="font-display text-base font-bold">Linda Karlsen</div>
                    <div className="text-xs text-dch-muted">
                      NLP-sertifisert coach etter ICF-standarder
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal>
              <span className={label}>Vi hjelper folk med ansvar å få kontroll igjen</span>
              <h2 className="mt-3.5 font-display text-[clamp(24px,2.8vw,34px)] leading-tight">
                Jeg jobber med ledere og nøkkelpersoner som har tempo, forventninger og en kalender
                som aldri gir fred.
              </h2>
              <p className="mt-5 text-[17px] leading-[1.75] text-dch-muted">
                Det jeg er best på er å gjøre hverdagen din enklere å lede i. Fordi gode intensjoner
                ikke gir resultater. System gjør.
              </p>
              <p className="mt-3.5 text-[17px] leading-[1.75] text-dch-muted">
                Du får en struktur du faktisk klarer å følge, tydelige grep du tester med en gang,
                og ærlige tilbakemeldinger når du gjør ting unødvendig komplisert.
              </p>

              <ul className="mt-7 space-y-3">
                {focusList.map((item) => (
                  <li key={item} className="flex gap-3 text-[15px] text-dch-ink">
                    <span className="text-dch-accent">✓</span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-9 grid gap-6 border-y border-dch-line py-7 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div key={stat.number}>
                    <div className="font-display text-3xl font-bold text-dch-accent">
                      {stat.number}
                    </div>
                    <div className="mt-1 text-[13px] leading-snug text-dch-muted">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-7 grid gap-4 sm:grid-cols-3">
                {values.map((value) => (
                  <div
                    key={value.title}
                    className="rounded-lg border border-dch-line bg-dch-sand p-4"
                  >
                    <div className="text-sm font-bold">{value.title}</div>
                    <div className="mt-1 text-[13px] leading-snug text-dch-muted">{value.text}</div>
                  </div>
                ))}
              </div>

              <a href="#kontakt" className={`${btnPrimary} mt-8`}>
                Book en samtale med Linda
              </a>
            </Reveal>
          </div>
        </section>

        {/* TEAM */}
        <section id="teamet" className="bg-[#F3F1EE] py-24">
          <div className="mx-auto max-w-[1120px] px-8">
            <Reveal className="mx-auto max-w-[560px] text-center">
              <span className={label}>Menneskene bak</span>
              <h2 className="mt-3.5 font-display text-[clamp(26px,3.2vw,38px)] leading-tight">
                Møt teamet som står bak Digital Coach Hub hver dag
              </h2>
            </Reveal>
            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {team.map((person) => (
                <Reveal key={person.name}>
                  <article className="h-full rounded-xl border border-dch-line bg-white p-7 text-center">
                    {person.photo ? (
                      <img
                        src={person.photo}
                        alt={`${person.name}, ${person.role}`}
                        className="mx-auto h-20 w-20 rounded-full object-cover object-top"
                        loading="lazy"
                      />
                    ) : (
                      <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-dch-accent/10 font-display text-2xl font-bold text-dch-accent">
                        {person.initials}
                      </span>
                    )}
                    <div className="mt-5 font-display text-xl">{person.name}</div>
                    <div className="mt-1 text-[13px] font-semibold tracking-[0.06em] text-dch-accent uppercase">
                      {person.role}
                    </div>
                    <p className="mt-4 text-[15px] leading-[1.7] text-dch-muted">{person.bio}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="bg-dch-sand py-24">
          <div className="mx-auto max-w-[1120px] px-8">
            <Reveal className="mx-auto max-w-[560px] text-center">
              <span className={label}>Hva klientene sier</span>
              <h2 className="mt-3.5 font-display text-[clamp(26px,3.2vw,38px)]">
                Resultater som holder
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {testimonials.map((item) => (
                <Reveal key={item.name}>
                  <blockquote className="h-full rounded-xl border border-dch-line bg-white p-8">
                    <div className="text-dch-accent">★★★★★</div>
                    <p className="mt-4 text-[15px] leading-[1.7] text-dch-ink italic">
                      {item.quote}
                    </p>
                    <footer className="mt-5">
                      <div className="text-sm font-bold">{item.name}</div>
                      <div className="text-[13px] text-dch-muted">{item.role}</div>
                    </footer>
                  </blockquote>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ARTIKLER */}
        <section id="artikler" className="py-24">
          <div className="mx-auto max-w-[1120px] px-8">
            <Reveal className="mx-auto max-w-[560px] text-center">
              <span className={label}>Innsikt for ledere</span>
              <h2 className="mt-3.5 font-display text-[clamp(26px,3.2vw,38px)] leading-tight">
                Konkrete grep for mindre friksjon i hverdagen
              </h2>
              <p className="mt-4 text-[17px] leading-[1.75] text-dch-muted">
                Erfaringer fra lederhverdager der kalenderen koker, beslutninger haster og samtaler
                utsettes litt for lenge.
              </p>
            </Reveal>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {articles.map((article) => (
                <Reveal key={article.title}>
                  <article className="h-full overflow-hidden rounded-xl border border-dch-line bg-white">
                    <div className="flex h-32 items-center justify-center bg-[#F3F1EE] text-4xl">
                      {article.icon}
                    </div>
                    <div className="p-6">
                      <span className="text-[11px] font-bold tracking-[0.08em] text-dch-accent uppercase">
                        {article.tag}
                      </span>
                      <h3 className="mt-3 font-display text-lg leading-snug">{article.title}</h3>
                      <p className="mt-3 text-[15px] leading-[1.7] text-dch-muted">
                        {article.text}
                      </p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* KONTAKT */}
        <section id="kontakt" className="bg-dch-sand py-24">
          <div className="mx-auto grid max-w-[1120px] gap-12 px-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <span className={label}>Ta kontakt</span>
              <h2 className="mt-3.5 font-display text-[clamp(26px,3.2vw,38px)] leading-tight">
                Book en gratis avklaringssamtale
              </h2>
              <p className="mt-5 text-[17px] leading-[1.75] text-dch-muted">
                Jeg svarer innen én virkedag. Ingen forpliktelse. Vi ser på hvor du står og hva som
                kan passe deg.
              </p>
              <p className="mt-8 text-sm text-dch-muted">
                <a className="font-semibold text-dch-accent" href="mailto:linda@dchub.no">
                  linda@dchub.no
                </a>
                <br />
                <a className="font-semibold text-dch-accent" href="tel:+4794806616">
                  +47 948 06 616
                </a>
                <br />
                Askim, Indre Østfold
              </p>
              <p className="mt-6 text-xs text-dch-muted">
                Konfidensielt. Alle henvendelser behandles med diskresjon.
              </p>
            </div>
            <HubSpotForm formId={DCH_FORM_ID} />
          </div>
        </section>

        {/* LOKAL SEO */}
        <section className="border-t border-[#E9ECEF] bg-[#F8F9FA] py-8">
          <div className="mx-auto max-w-[800px] px-8">
            <p className="text-xs leading-[1.8] text-dch-muted">
              Linda Karlsen er sertifisert NLP-coach og ledercoach med base i Askim, Indre Østfold.
              Hun tilbyr coaching for ledere, ansatte og grundere i Askim, Mysen, Moss, Fredrikstad,
              Sarpsborg og Oslo-regionen, samt online for hele Norge. Digital Coach Hub AS står bak
              QuestPulse, People Intelligence-plattform for norske kompetansebedrifter.
            </p>
          </div>
        </section>
      </main>

      <footer className="bg-dch-ink py-16 text-white">
        <div className="mx-auto grid max-w-[1120px] gap-10 px-8 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="font-display text-xl font-bold">Digital Coach Hub</div>
            <div className="mt-1 text-[13px] text-dch-accent">Linda Karlsen, CEO</div>
            <p className="mt-4 max-w-sm text-sm leading-[1.7] text-white/60">
              Coaching og sparring for ledere, ansatte og virksomheter. Sertifisert NLP-coach. 15 år
              erfaring. Askim, Indre Østfold.
            </p>
          </div>
          <div>
            <div className="text-[11px] font-bold tracking-[0.12em] text-white/50 uppercase">
              Tjenester
            </div>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>
                <a href="#tjenester" className="hover:text-white">
                  For ansatte
                </a>
              </li>
              <li>
                <a href="#tjenester" className="hover:text-white">
                  For ledere
                </a>
              </li>
              <li>
                <a href="#tjenester" className="hover:text-white">
                  Ny som leder
                </a>
              </li>
              <li>
                <a href="#tjenester" className="hover:text-white">
                  Bedriftsløsninger
                </a>
              </li>
              <li>
                <a href="https://questpulse.no" className="hover:text-white">
                  QuestPulse for bedrifter
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="text-[11px] font-bold tracking-[0.12em] text-white/50 uppercase">
              Kontakt
            </div>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>
                <a href="mailto:linda@dchub.no" className="hover:text-white">
                  linda@dchub.no
                </a>
              </li>
              <li>
                <a href="tel:+4794806616" className="hover:text-white">
                  +47 948 06 616
                </a>
              </li>
              <li>Askim, Indre Østfold</li>
              <li>Org.nr. 936 265 634</li>
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-12 flex max-w-[1120px] flex-wrap items-center justify-between gap-3 border-t border-white/10 px-8 pt-6 text-xs text-white/50">
          <span>&copy; {new Date().getFullYear()} Digital Coach Hub AS</span>
          <a href="https://questpulse.no" className="hover:text-white">
            QuestPulse
          </a>
        </div>
      </footer>
    </div>
  );
}
