import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

import { Reveal } from "@/components/dchub/Reveal";
import { LeadForm } from "@/components/site/LeadForm";
import { getSiteContent } from "@/lib/site.functions";
import lindaPhoto from "@/assets/linda-karlsen.png.asset.json";
import lindaPortrett from "@/assets/linda-portrett.jpg.asset.json";
import coachingSamtale from "@/assets/coaching-samtale.jpg.asset.json";

const title = "Ledercoach Askim | Linda Karlsen NLP-coach | Digital Coach Hub";
const description =
  "Sertifisert NLP-coach Linda Karlsen i Askim tilbyr ledercoaching, ansattcoaching og grunder-coaching. 15 år erfaring. Book gratis avklaringssamtale i dag. Indre Østfold og online.";
const site = "https://digitalcoachub.no";

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

const navLinks = [
  { href: "#tjenester", label: "Tjenester" },
  { href: "#om-linda", label: "Om Linda" },
  { href: "#teamet", label: "Teamet" },
  { href: "#artikler", label: "Artikler" },
  { href: "#kontakt", label: "Kontakt" },
];

const situations = [
  {
    title: "Høyt ansvar",
    text: "Du har stort lederansvar, høye forventninger og krevende saker som tærer på konsentrasjon og mental helse. Med målrettet støtte får du struktur og verktøy for å stå stødigere og ta bedre beslutninger, også når presset er høyt.",
  },
  {
    title: "Lite tid til refleksjon",
    text: "Kalenderen er full, men hodet får aldri jobbet ordentlig langsiktig. Du hopper mellom møter, saker og meldinger og mister oversikten over hva som egentlig er viktigst. Vi hjelper deg å skape refleksjonspauser som reduserer stress og gir bedre prioriteringer.",
  },
  {
    title: "Prokrastinering",
    text: "De viktigste oppgavene skyves foran deg, selv om du vet at de er kritiske for jobb og karriere. Sammen identifiserer vi hva som faktisk stopper deg, og du får konkrete teknikker for å komme videre.",
  },
  {
    title: "Ubalanse mellom jobb og fritid",
    text: "Jobben flyter inn i kvelden, og hodet får aldri helt fri. Vi hjelper deg å sette tydelige grenser, senke stressnivået og bygge en mer bærekraftig balanse, uten at du mister engasjement eller eierskap til jobben.",
  },
  {
    title: "Følelse av å stå alene",
    text: "Som leder eller nøkkelperson kan du kjenne på ensomhet i krevende situasjoner og personalsaker. Hos Digital Coach Hub får du en profesjonell sparringspartner som forstår både mennesker, ledelse og arbeidshverdag.",
  },
];

const insights = [
  {
    title: "Kostnader",
    text: "Høyt stressnivå, dårlige prioriteringer og lav gjennomføringsevne gir skjulte kostnader i form av sykefravær, utslitte nøkkelpersoner og tapte muligheter.",
  },
  {
    title: "Beslutninger",
    text: "Når presset er høyt og bildet er uklart, faller kvaliteten på beslutningene. Det blir vanskeligere å forankre, skape eierskap og holde kursen over tid.",
  },
  {
    title: "Gjennomføring",
    text: "Gode intensjoner og planer blir værende på idéstadiet. Uten tydelig støtte og oppfølging skjer det lite endring i faktisk adferd, fokus og resultater.",
  },
];

const usps = [
  {
    num: "USP 01",
    title: "Tidsstyring",
    sub: "Når møter og avbrytelser tar over",
    text: "Du får en struktur som gjør at du faktisk styrer dagen, ikke omvendt. Konkrete grep som frigjør tid til det som betyr noe.",
  },
  {
    num: "USP 02",
    title: "Prioritering",
    sub: "Når alt haster",
    text: "Vi trener deg til å skille det viktige fra det presserende. Du slutter å reagere på alt og begynner å lede mot det som gir effekt.",
  },
  {
    num: "USP 03",
    title: "Kommunikasjon",
    sub: "Som kutter misforståelser",
    text: "Tydelig kommunikasjon er ikke en personlighetsegenskap. Det er en ferdighet. Du lærer å si det du mener på en måte folk faktisk tar inn.",
  },
  {
    num: "USP 04",
    title: "Grensesetting",
    sub: "Uten drama",
    text: "Du lærer å si nei på en måte som er profesjonell, tydelig og respektfull, uten at relasjoner tar skade og uten dårlig samvittighet etterpå.",
  },
];

const services = [
  {
    tag: "For ansatte",
    title: "Støtte for deg som ansatt",
    text: "For deg som står i krevende situasjoner, høyt tempo eller stor belastning, og trenger et trygt rom for å sortere, prioritere og finne veien videre. Du trenger ikke ha alle svar. Vi starter der du er.",
    cta: "Book avklaringssamtale",
  },
  {
    tag: "For ledere",
    title: "Støtte for deg som leder",
    text: "For deg som leder mennesker og tar beslutninger hver dag. Vi jobber med tydelighet i rollen, krysspress, krevende samtaler, prioritering og beslutningskraft. Konkret og tilpasset din hverdag.",
    cta: "Book avklaringssamtale",
  },
  {
    tag: "Ny som leder",
    title: "For deg som er ny i lederrollen",
    text: "Trygg støtte i overgangen fra fagperson til leder. Du får konkrete verktøy for kommunikasjon, forventningsavklaring, prioritering og selvledelse, slik at du finner din egen lederstil raskt og med trygghet.",
    cta: "Book avklaringssamtale",
  },
  {
    tag: "Bedriftsløsninger",
    title: "For virksomheter",
    text: "For virksomheter som vil jobbe systematisk med bærekraftig prestasjon, trivsel og redusert stress, med lederutvikling, kurs og workshops. Vi tilpasser til din organisasjon og dine mål.",
    cta: "Ta kontakt for dialog",
  },
];

const focusList = [
  "Tidsstyring når møter og avbrytelser tar over",
  "Prioritering når alt haster",
  "Kommunikasjon som kutter misforståelser",
  "Grensesetting uten drama",
];

const stats = [
  { number: "17+", label: "År med ledererfaring i praksis" },
  { number: "100+", label: "Ledere og nøkkelpersoner støttet" },
  { number: "ICF", label: "NLP-sertifisert coach etter ICF-standarder" },
];

const values = [
  {
    title: "Praktisk tilnærming",
    text: "Strukturer og verktøy som faktisk fungerer i praksis",
  },
  {
    title: "Ærlig kommunikasjon",
    text: "Vi sier det som det er og holder oss til det som gir resultater",
  },
  {
    title: "Pålitelig støtte",
    text: "Vi står ved din side i krevende situasjoner og prosesser",
  },
];

const team = [
  {
    initials: "LK",
    photo: lindaPortrett.url,
    name: "Linda Karlsen",
    role: "Grunder og Businesscoach",
    bio: "17+ år med ledererfaring fra begge sider av bordet. NLP-sertifisert coach etter ICF-standarder. Grunder av Digital Coach Hub og QuestPulse.",
  },

  {
    initials: "TR",
    photo: null,
    name: "Thomas Ryste",
    role: "CTO",
    bio: "Teknisk arkitekt og CTO bak QuestPulse-plattformen. Ansvarlig for sikker infrastruktur, modellstyring og systemdesign.",
  },
  {
    initials: "ET",
    photo: null,
    name: "Eivind Teig",
    role: "Fullstack Utvikler",
    bio: "Fullstack-utvikler med ansvar for produkt, brukeropplevelse og integrasjoner. Bygger det digitale som gjør arbeidet skalerbart.",
  },
];

const testimonials = [
  {
    quote:
      "«Tidligere sa jeg ja til alt og jobbet til langt på kveld. Nå har jeg verktøy som gjør at jeg setter grenser og prioriterer bedre, og både jeg og teamet leverer bedre enn før.»",
    name: "Anders Gjerdet",
    role: "Daglig leder",
  },
  {
    quote:
      "«Linda er en dyktig, varm og motiverende coach. Hun har gitt meg gode verktøy som fungerer i min rolle som leder, og hun følger godt opp underveis. Jeg kan varmt anbefale henne videre.»",
    name: "Anette Nielsen",
    role: "Butikkleder",
  },
  {
    quote:
      "«Jeg gikk fra å tvile på meg selv til å sette grenser og få respekt, på bare noen uker.»",
    name: "Hilde O. Berg",
    role: "Barnehagestyrer",
  },
];

const articles = [
  {
    icon: "💡",
    tag: "Prioritering",
    title: "Fra kaos til klarhet: 5 steg til mer struktur i hverdagen",
    text: "Slik tar du tilbake kontrollen når alt konkurrerer om oppmerksomheten din.",
  },
  {
    icon: "🎯",
    tag: "Tid",
    title: "Min strategi for å prioritere tiden når alt haster",
    text: "Tre spørsmål som hjelper deg finne hva som faktisk er viktigst, ikke bare hva som er mest presserende.",
  },
  {
    icon: "🔧",
    tag: "QuestPulse",
    title: "Verktøy som hjelper deg beholde nøkkelmedarbeidere",
    text: "Hvorfor løpende innsikt er bedre enn en årsundersøkelse for virksomheter i vekst.",
  },
];

const btnPrimary =
  "inline-flex items-center justify-center gap-2 rounded-md border-2 border-[#1A9A8E] bg-[#1A9A8E] px-7 py-3.5 text-[15px] font-bold text-white transition-all hover:border-[#158A7F] hover:bg-[#158A7F]";
const btnOutline =
  "inline-flex items-center justify-center gap-2 rounded-md border-2 border-[#13212F] px-7 py-3.5 text-[15px] font-bold text-[#13212F] transition-all hover:bg-[#13212F] hover:text-white";
const label =
  "inline-block text-[11px] font-bold tracking-[0.12em] text-[#1A9A8E] uppercase";

function DcHub() {
  const { data } = useSuspenseQuery(contentQuery);

  return (
    <div className="min-h-screen scroll-smooth bg-white font-sans text-[#13212F]">
      <nav className="sticky top-0 z-50 border-b border-[#E5E2DD] bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-[68px] max-w-[1120px] items-center justify-between px-8">
          <a href="#" className="flex items-baseline gap-2">
            <span className="font-display text-xl font-bold tracking-tight">Digital Coach Hub</span>
            <span className="text-[10px] font-semibold tracking-[0.08em] text-[#1A9A8E] uppercase">
              Linda Karlsen
            </span>
          </a>
          <ul className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-[#6C757D] transition-colors hover:text-[#13212F]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4">
            <a
              href="https://questpulse.no"
              className="hidden text-[13px] font-semibold text-[#1A9A8E] hover:opacity-75 sm:inline"
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
        <section className="relative overflow-hidden bg-[#FAF9F7] py-24">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-20 -right-32 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(26,154,142,0.10)_0%,transparent_70%)]"
          />
          <div className="relative mx-auto grid max-w-[1120px] items-center gap-16 px-8 lg:grid-cols-2">
            <Reveal>
              <span className="mb-6 inline-flex items-center rounded-full border border-[#1A9A8E]/25 bg-[#1A9A8E]/10 px-3.5 py-1.5 text-xs font-bold tracking-[0.08em] text-[#1A9A8E] uppercase">
                Coaching og sparring for ledere og ansatte
              </span>
              <h1 className="font-display text-[clamp(34px,4.5vw,52px)] leading-[1.15] font-bold">
                Når jobben tar
                <br />
                mer enn den gir.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-[1.75] text-[#6C757D]">
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
              <div className="mt-10 flex flex-wrap items-center gap-5 text-xs font-semibold text-[#6C757D]">
                <span>Sertifisert NLP-coach</span>
                <span className="h-4 w-px bg-[#E5E2DD]" />
                <span className="text-[#13212F]">15 år med ledere og ansatte</span>
                <span className="h-4 w-px bg-[#E5E2DD]" />
                <span className="text-[#13212F]">Askim, Indre Østfold</span>
              </div>
            </Reveal>

            <Reveal>
              <div className="overflow-hidden rounded-[20px] bg-white shadow-[0_4px_28px_rgba(19,33,47,0.09)]">
                <img
                  src={lindaPhoto.url}
                  alt="Linda Karlsen, sertifisert NLP-coach og daglig leder i Digital Coach Hub AS"
                  className="aspect-[3/4] min-h-[340px] w-full object-cover object-top"
                  loading="eager"
                />
                <div className="flex items-center gap-4 border-t border-[#E5E2DD] p-6">
                  <img
                    src={lindaPhoto.url}
                    alt=""
                    className="h-12 w-12 flex-shrink-0 rounded-full border-2 border-[#1A9A8E]/25 object-cover object-top"
                  />
                  <div>
                    <div className="font-display text-[17px] font-bold">Linda Karlsen</div>
                    <div className="text-xs text-[#6C757D]">
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
              <p className="mt-4 text-[19px] leading-[1.75] text-[#6C757D]">
                Arbeidshverdagen er blitt mer krevende for mange. Mer kompleksitet, mer endring og
                mindre tid til å hente seg inn. Her er situasjonene jeg hjelper folk gjennom.
              </p>
            </Reveal>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {situations.map((item) => (
                <Reveal key={item.title}>
                  <article className="h-full rounded-xl border border-[#E5E2DD] bg-white p-7 transition-shadow hover:shadow-[0_2px_12px_rgba(19,33,47,0.07)]">
                    <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#1A9A8E]/10 text-[#1A9A8E]">
                      ●
                    </span>
                    <h3 className="font-display text-xl">{item.title}</h3>
                    <p className="mt-3 text-[15px] leading-[1.75] text-[#6C757D]">{item.text}</p>
                  </article>
                </Reveal>
              ))}
              <Reveal>
                <article className="h-full rounded-xl border border-[#1A9A8E]/20 bg-[#FAF9F7] p-7">
                  <h3 className="font-display text-xl">Usikker på neste steg?</h3>
                  <p className="mt-3 mb-4 text-[15px] leading-[1.75] text-[#6C757D]">
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
        <section id="problemet" className="bg-[#FAF9F7] py-24">
          <div className="mx-auto grid max-w-[1120px] gap-14 px-8 lg:grid-cols-2">
            <Reveal>
              <span className={label}>Problemet er sjelden manglende vilje</span>
              <h2 className="mt-3.5 font-display text-[clamp(26px,3.2vw,38px)] leading-tight">
                De fleste vil levere godt, bidra i teamet og utvikle seg.
              </h2>
              <p className="mt-5 text-[17px] leading-[1.75] text-[#6C757D]">
                Utfordringen er at hverdagen ofte er lagt opp slik at det er vanskelig å lykkes
                alene. Uten gode verktøy og støtte ser jeg dette mønsteret igjen og igjen, uavhengig
                av tittel, bransje eller erfaring.
              </p>
              <p className="mt-4 text-[17px] leading-[1.75] text-[#6C757D]">
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
                  className="flex gap-4 rounded-xl border border-[#E5E2DD] bg-white p-6"
                >
                  <span className="mt-1 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-[#1A9A8E]/10 text-[#1A9A8E]">
                    ●
                  </span>
                  <div>
                    <h3 className="font-display text-lg">{item.title}</h3>
                    <p className="mt-2 text-[15px] leading-[1.7] text-[#6C757D]">{item.text}</p>
                  </div>
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        {/* USP */}
        <section className="relative overflow-hidden bg-[#13212F] py-24">
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
                    <div className="text-[11px] font-bold tracking-[0.12em] text-[#1A9A8E] uppercase">
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
        <section id="tjenester" className="bg-[#FAF9F7] py-24">
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
                  <article className="flex h-full flex-col justify-between rounded-xl border border-[#E5E2DD] bg-white">
                    <div className="p-7">
                      <span className="inline-block rounded-full bg-[#1A9A8E]/10 px-3 py-1 text-[11px] font-bold tracking-[0.08em] text-[#1A9A8E] uppercase">
                        {service.tag}
                      </span>
                      <h3 className="mt-4 font-display text-xl">{service.title}</h3>
                      <p className="mt-3 text-[15px] leading-[1.75] text-[#6C757D]">
                        {service.text}
                      </p>
                    </div>
                    <div className="border-t border-[#E5E2DD] px-7 py-5">
                      <a
                        href="#kontakt"
                        className="text-sm font-bold text-[#1A9A8E] underline-offset-4 hover:underline"
                      >
                        {service.cta}
                      </a>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-12">
              <div className="flex flex-col items-start gap-6 rounded-xl border border-[#1A9A8E]/25 bg-white p-8 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-3xl">
                  <span className={label}>For virksomheter med 20+ ansatte</span>
                  <h3 className="mt-3 font-display text-2xl">
                    Forebygging og løpende innsikt med QuestPulse
                  </h3>
                  <p className="mt-3 text-[15px] leading-[1.75] text-[#6C757D]">
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
                  src={coachingSamtale.url}
                  alt="Linda Karlsen i samtale med en leder i et møterom"
                  className="aspect-[3/4] w-full rounded-xl object-cover object-top"
                  loading="lazy"
                />
                <div className="mt-4 flex items-center gap-3 rounded-xl border border-[#E5E2DD] bg-white p-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1A9A8E]/10 text-[#1A9A8E]">
                    ✓
                  </span>
                  <div>
                    <div className="font-display text-base font-bold">Linda Karlsen</div>
                    <div className="text-xs text-[#6C757D]">
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
              <p className="mt-5 text-[17px] leading-[1.75] text-[#6C757D]">
                Det jeg er best på er å gjøre hverdagen din enklere å lede i. Fordi gode intensjoner
                ikke gir resultater. System gjør.
              </p>
              <p className="mt-3.5 text-[17px] leading-[1.75] text-[#6C757D]">
                Du får en struktur du faktisk klarer å følge, tydelige grep du tester med en gang,
                og ærlige tilbakemeldinger når du gjør ting unødvendig komplisert.
              </p>

              <ul className="mt-7 space-y-3">
                {focusList.map((item) => (
                  <li key={item} className="flex gap-3 text-[15px] text-[#13212F]">
                    <span className="text-[#1A9A8E]">✓</span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-9 grid gap-6 border-y border-[#E5E2DD] py-7 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div key={stat.number}>
                    <div className="font-display text-3xl font-bold text-[#1A9A8E]">
                      {stat.number}
                    </div>
                    <div className="mt-1 text-[13px] leading-snug text-[#6C757D]">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-7 grid gap-4 sm:grid-cols-3">
                {values.map((value) => (
                  <div
                    key={value.title}
                    className="rounded-lg border border-[#E5E2DD] bg-[#FAF9F7] p-4"
                  >
                    <div className="text-sm font-bold">{value.title}</div>
                    <div className="mt-1 text-[13px] leading-snug text-[#6C757D]">{value.text}</div>
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
                  <article className="h-full rounded-xl border border-[#E5E2DD] bg-white p-7 text-center">
                    {person.photo ? (
                      <img
                        src={person.photo}
                        alt={`${person.name}, ${person.role}`}
                        className="mx-auto h-20 w-20 rounded-full object-cover object-top"
                        loading="lazy"
                      />
                    ) : (
                      <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#1A9A8E]/10 font-display text-2xl font-bold text-[#1A9A8E]">
                        {person.initials}
                      </span>
                    )}
                    <div className="mt-5 font-display text-xl">{person.name}</div>
                    <div className="mt-1 text-[13px] font-semibold tracking-[0.06em] text-[#1A9A8E] uppercase">
                      {person.role}
                    </div>
                    <p className="mt-4 text-[15px] leading-[1.7] text-[#6C757D]">{person.bio}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="bg-[#FAF9F7] py-24">
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
                  <blockquote className="h-full rounded-xl border border-[#E5E2DD] bg-white p-8">
                    <div className="text-[#1A9A8E]">★★★★★</div>
                    <p className="mt-4 text-[15px] leading-[1.7] text-[#13212F] italic">
                      {item.quote}
                    </p>
                    <footer className="mt-5">
                      <div className="text-sm font-bold">{item.name}</div>
                      <div className="text-[13px] text-[#6C757D]">{item.role}</div>
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
              <p className="mt-4 text-[17px] leading-[1.75] text-[#6C757D]">
                Erfaringer fra lederhverdager der kalenderen koker, beslutninger haster og samtaler
                utsettes litt for lenge.
              </p>
            </Reveal>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {articles.map((article) => (
                <Reveal key={article.title}>
                  <article className="h-full overflow-hidden rounded-xl border border-[#E5E2DD] bg-white">
                    <div className="flex h-32 items-center justify-center bg-[#F3F1EE] text-4xl">
                      {article.icon}
                    </div>
                    <div className="p-6">
                      <span className="text-[11px] font-bold tracking-[0.08em] text-[#1A9A8E] uppercase">
                        {article.tag}
                      </span>
                      <h3 className="mt-3 font-display text-lg leading-snug">{article.title}</h3>
                      <p className="mt-3 text-[15px] leading-[1.7] text-[#6C757D]">
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
        <section id="kontakt" className="bg-[#FAF9F7] py-24">
          <div className="mx-auto grid max-w-[1120px] gap-12 px-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <span className={label}>Ta kontakt</span>
              <h2 className="mt-3.5 font-display text-[clamp(26px,3.2vw,38px)] leading-tight">
                Book en gratis avklaringssamtale
              </h2>
              <p className="mt-5 text-[17px] leading-[1.75] text-[#6C757D]">
                Jeg svarer innen én virkedag. Ingen forpliktelse. Vi ser på hvor du står og hva som
                kan passe deg.
              </p>
              <p className="mt-8 text-sm text-[#6C757D]">
                <a className="font-semibold text-[#1A9A8E]" href="mailto:linda@dchub.no">
                  linda@dchub.no
                </a>
                <br />
                <a className="font-semibold text-[#1A9A8E]" href="tel:+4794806616">
                  +47 948 06 616
                </a>
                <br />
                Askim, Indre Østfold
              </p>
              <p className="mt-6 text-xs text-[#6C757D]">
                Konfidensielt. Alle henvendelser behandles med diskresjon.
              </p>
            </div>
            <LeadForm locale="no" copy={data.contact} />
          </div>
        </section>

        {/* LOKAL SEO */}
        <section className="border-t border-[#E9ECEF] bg-[#F8F9FA] py-8">
          <div className="mx-auto max-w-[800px] px-8">
            <p className="text-xs leading-[1.8] text-[#6C757D]">
              Linda Karlsen er sertifisert NLP-coach og ledercoach med base i Askim, Indre Østfold.
              Hun tilbyr coaching for ledere, ansatte og grundere i Askim, Mysen, Moss, Fredrikstad,
              Sarpsborg og Oslo-regionen, samt online for hele Norge. Digital Coach Hub AS står bak
              QuestPulse, People Intelligence-plattform for norske kompetansebedrifter.
            </p>
          </div>
        </section>
      </main>

      <footer className="bg-[#13212F] py-16 text-white">
        <div className="mx-auto grid max-w-[1120px] gap-10 px-8 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="font-display text-xl font-bold">Digital Coach Hub</div>
            <div className="mt-1 text-[13px] text-[#1A9A8E]">Linda Karlsen, CEO</div>
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
