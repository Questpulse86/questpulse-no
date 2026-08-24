import { Link } from "@tanstack/react-router";

import { HubSpotShareForm, QP_FORM_SHARE_URL } from "@/components/site/HubSpotForm";
import { QpWave } from "@/components/site/QpWave";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { Button } from "@/components/ui/button";
import { pagePaths } from "@/lib/page-content";
import type { Locale, SiteContent } from "@/lib/site-content";

type Copy = {
  hero: { eyebrow: string; title: string; lead: string; cta1: string; cta2: string };
  problem: { eyebrow: string; title: string; body: string };
  flow: { eyebrow: string; title: string; lead: string; steps: string[] };
  usecases: {
    eyebrow: string;
    title: string;
    lead: string;
    items: { title: string; text: string }[];
    link: string;
  };
  roles: {
    eyebrow: string;
    title: string;
    items: { title: string; text: string }[];
  };
  product: { eyebrow: string; title: string; lead: string; stages: string[]; note: string };
  trust: { eyebrow: string; title: string; items: string[]; link: string };
  cta: { title: string; text: string; button: string };
};

const copy: Record<Locale, Copy> = {
  no: {
    hero: {
      eyebrow: "People Intelligence for komplekse virksomheter",
      title: "Se hva som utvikler seg før konsekvensene blir synlige",
      lead: "QuestPulse gir ledelsen løpende innsikt i belastning, friksjon og lederhandling, og viser utviklingen fra signal til dokumentert effekt over tid.",
      cta1: "Be om en strategisk gjennomgang",
      cta2: "Se hvordan det fungerer",
    },
    problem: {
      eyebrow: "Problemet",
      title: "Virksomheten oppdateres hver dag. Beslutningsgrunnlaget gjør det ikke.",
      body: "Store virksomheter tar fortsatt viktige beslutninger om mennesker, ledelse og kapasitet på signaler som allerede er utdaterte. Når konsekvensene blir synlige i sykefravær, kompetansetap, konflikter eller svakere leveranser, har handlingsrommet blitt mindre.",
    },
    flow: {
      eyebrow: "Beslutningsflyt",
      title: "Fra privat refleksjon til dokumentert effekt",
      lead: "Én sammenhengende flyt, der individet beskyttes og ledelsen får et grunnlag som kan handles på.",
      steps: [
        "Privat refleksjon",
        "Beskyttede, aggregerte signaler",
        "Prioritert beslutningsgrunnlag",
        "Lederhandling",
        "Utvikling og effekt over tid",
      ],
    },
    usecases: {
      eyebrow: "Bruksområder",
      title: "Fire beslutninger QuestPulse forbedrer",
      lead: "Innsikten har verdi der beslutningen er vanskelig og konsekvensen er dyr.",
      items: [
        {
          title: "Omstilling og endring",
          text: "Forbedrer beslutningen om rekkefølge og tempo, ved å vise hvilke enheter som bærer endringen og hvor kapasiteten svikter først.",
        },
        {
          title: "Ledelseskapasitet",
          text: "Forbedrer beslutningen om hvor lederstøtte settes inn, ved å vise hvor kontrollspennet er for stort og oppfølgingen for tynn.",
        },
        {
          title: "Belastning og friksjon",
          text: "Forbedrer beslutningen om ressurser og arbeidsform, ved å skille vedvarende belastning fra normale variasjoner.",
        },
        {
          title: "Psykososial risiko og arbeidsmiljø",
          text: "Forbedrer beslutningen om hvilke tiltak som iverksettes og dokumenteres, ved å vise risiko som bygger seg opp mellom kartleggingene.",
        },
      ],
      link: "Se alle bruksområder",
    },
    roles: {
      eyebrow: "Verdi for lederroller",
      title: "Fire innganger til samme underlag",
      items: [
        {
          title: "Konsernledelse og styre",
          text: "Organisatorisk risiko fremstilt på samme nivå som finansiell risiko, med utvikling over tid og grunnlag for styrebehandling.",
        },
        {
          title: "HR og People",
          text: "Prioritering mellom enheter, årsak framfor symptom, og dokumentasjon av kartlegging, tiltak og effekt underveis.",
        },
        {
          title: "Ledere",
          text: "Et tydelig bilde av eget ansvarsområde, med konkrete handlingsvalg og oppfølging av om handlingen traff.",
        },
        {
          title: "Risiko, compliance og HMS",
          text: "Sporbart beslutningsgrunnlag for systematisk arbeid med det psykososiale arbeidsmiljøet, klart til internkontroll og tilsyn.",
        },
      ],
    },
    product: {
      eyebrow: "Produktvisning",
      title: "Slik henger systemet sammen",
      lead: "Et nøkternt bilde av flyten gjennom plattformen. Produktskjermbilder publiseres først når de er godkjent for ekstern bruk.",
      stages: [
        "Innsamling i eksisterende arbeidsverktøy",
        "Aggregering og beskyttelse av individet",
        "Prioritering per organisatorisk område",
        "Lederhandling og oppfølging",
        "Dokumentasjon av effekt",
      ],
      note: "Aggregering skjer før innsikten blir synlig for noen leder. Enkeltsvar deles aldri.",
    },
    trust: {
      eyebrow: "Tillit",
      title: "Kontroll er en del av arkitekturen",
      items: [
        "Personvern som arkitektur",
        "Aggregert innsikt",
        "Rollebasert tilgang",
        "Dokumentert databehandling",
      ],
      link: "Gå til Trust Center",
    },
    cta: {
      title: "Hvordan følger dere utviklingen i organisasjonen i dag?",
      text: "Vi starter med deres beslutningsbehov, eksisterende prosesser og krav til personvern og sikkerhet.",
      button: "Be om en strategisk gjennomgang",
    },
  },
  en: {
    hero: {
      eyebrow: "People Intelligence for complex organisations",
      title: "See what is developing before the consequences become visible",
      lead: "QuestPulse gives leadership continuous insight into workload, friction and leadership action, and shows the development from signal to documented effect over time.",
      cta1: "Request a strategic review",
      cta2: "See how it works",
    },
    problem: {
      eyebrow: "The problem",
      title: "The organisation updates every day. The basis for decisions does not.",
      body: "Large organisations still make important decisions about people, leadership and capacity on signals that are already out of date. By the time consequences appear as absence, loss of expertise, conflict or weaker delivery, the room to act has narrowed.",
    },
    flow: {
      eyebrow: "Decision flow",
      title: "From private reflection to documented effect",
      lead: "One connected flow, where the individual is protected and leadership gets a basis it can act on.",
      steps: [
        "Private reflection",
        "Protected, aggregated signals",
        "Prioritised basis for decisions",
        "Leadership action",
        "Development and effect over time",
      ],
    },
    usecases: {
      eyebrow: "Use cases",
      title: "Four decisions QuestPulse improves",
      lead: "The insight matters where the decision is hard and the consequence is expensive.",
      items: [
        {
          title: "Change and restructuring",
          text: "Improves the decision on sequencing and pace, by showing which units carry the change and where capacity breaks first.",
        },
        {
          title: "Leadership capacity",
          text: "Improves the decision on where to add leadership support, by showing where span of control is too wide and follow-up too thin.",
        },
        {
          title: "Workload and friction",
          text: "Improves the decision on resources and ways of working, by separating sustained workload from normal variation.",
        },
        {
          title: "Psychosocial risk and working environment",
          text: "Improves the decision on which measures to act on and document, by showing risk building up between mappings.",
        },
      ],
      link: "See all use cases",
    },
    roles: {
      eyebrow: "Value for leadership roles",
      title: "Four entry points to the same basis",
      items: [
        {
          title: "Executive leadership and board",
          text: "Organisational risk presented at the same level as financial risk, with development over time and a basis for board discussion.",
        },
        {
          title: "HR and People",
          text: "Prioritisation across units, cause rather than symptom, and documentation of mapping, actions and effect along the way.",
        },
        {
          title: "Leaders",
          text: "A clear picture of their own area, with concrete choices of action and follow-up on whether the action landed.",
        },
        {
          title: "Risk, compliance and HSE",
          text: "A traceable basis for systematic work on the psychosocial working environment, ready for internal control and regulators.",
        },
      ],
    },
    product: {
      eyebrow: "Product view",
      title: "How the system fits together",
      lead: "A plain view of the flow through the platform. Product screenshots are published only once approved for external use.",
      stages: [
        "Collection in existing work tools",
        "Aggregation and protection of the individual",
        "Prioritisation per organisational area",
        "Leadership action and follow-up",
        "Documentation of effect",
      ],
      note: "Aggregation happens before any leader sees the insight. Individual answers are never shared.",
    },
    trust: {
      eyebrow: "Trust",
      title: "Control is part of the architecture",
      items: [
        "Privacy as architecture",
        "Aggregated insight",
        "Role-based access",
        "Documented data processing",
      ],
      link: "Go to the Trust Center",
    },
    cta: {
      title: "How do you follow development in your organisation today?",
      text: "We start with your decision needs, existing processes and requirements for privacy and security.",
      button: "Request a strategic review",
    },
  },
};

export function Landing({ locale, content }: { locale: Locale; content: SiteContent }) {
  const t = copy[locale];

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader locale={locale} content={content} altHref={locale === "no" ? "/en" : "/"} />

      <main>
        {/* 1. Hero */}
        <section className="relative overflow-hidden bg-navy text-navy-foreground">
          <QpWave
            tone="dark"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-40 w-full opacity-60"
          />
          <div className="relative mx-auto max-w-6xl px-5 py-24 lg:py-32">
            <p className="text-xs font-bold tracking-[0.18em] text-teal uppercase">
              {t.hero.eyebrow}
            </p>
            <h1 className="mt-6 max-w-4xl text-4xl leading-[1.06] font-bold text-navy-foreground sm:text-5xl lg:text-6xl">
              {t.hero.title}
            </h1>
            <span className="qp-rule mt-8" />
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-navy-foreground/75">
              {t.hero.lead}
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to={pagePaths.contact[locale]}>{t.hero.cta1}</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-navy-foreground/30 bg-transparent text-navy-foreground hover:bg-navy-foreground/10 hover:text-navy-foreground"
              >
                <Link to={pagePaths.how[locale]}>{t.hero.cta2}</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* 2. Problemet */}
        <section className="mx-auto max-w-6xl px-5 py-24">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="qp-eyebrow">{t.problem.eyebrow}</p>
              <h2 className="mt-4 text-3xl leading-tight sm:text-4xl">{t.problem.title}</h2>
            </div>
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground lg:pt-12">
              {t.problem.body}
            </p>
          </div>
        </section>

        {/* 3. Beslutningsflyt */}
        <section className="border-y border-border bg-card">
          <div className="mx-auto max-w-6xl px-5 py-24">
            <div className="max-w-3xl">
              <p className="qp-eyebrow">{t.flow.eyebrow}</p>
              <h2 className="mt-4 text-3xl leading-tight sm:text-4xl">{t.flow.title}</h2>
              <p className="mt-5 text-muted-foreground">{t.flow.lead}</p>
            </div>
            <ol className="mt-16 grid gap-10 md:grid-cols-5 md:gap-6">
              {t.flow.steps.map((step, index) => (
                <li key={step} className="relative md:pr-6">
                  <span
                    aria-hidden
                    className="absolute top-2 left-8 hidden h-px w-full bg-border md:block"
                  />
                  <span className="relative z-10 inline-flex h-4 w-4 items-center justify-center rounded-full border border-teal bg-card">
                    <span className="h-1.5 w-1.5 rounded-full bg-teal" />
                  </span>
                  <p className="mt-5 font-display text-sm text-teal-deep tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-2 text-base leading-snug font-bold text-navy">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* 4. Bruksområder */}
        <section className="mx-auto max-w-6xl px-5 py-24">
          <div className="max-w-3xl">
            <p className="qp-eyebrow">{t.usecases.eyebrow}</p>
            <h2 className="mt-4 text-3xl leading-tight sm:text-4xl">{t.usecases.title}</h2>
            <p className="mt-5 text-muted-foreground">{t.usecases.lead}</p>
          </div>
          <dl className="mt-14 border-t border-border">
            {t.usecases.items.map((item, index) => (
              <div
                key={item.title}
                className="grid gap-3 border-b border-border py-8 md:grid-cols-[4rem_1fr_1.4fr] md:gap-8"
              >
                <span className="font-display text-sm text-teal-deep tabular-nums">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <dt className="text-lg font-bold text-navy">{item.title}</dt>
                <dd className="text-sm leading-relaxed text-muted-foreground">{item.text}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-8">
            <Link className="story-link text-sm font-semibold" to={pagePaths.usecases[locale]}>
              {t.usecases.link}
            </Link>
          </p>
        </section>

        {/* 5. Verdi for lederroller */}
        <section className="bg-navy py-24 text-navy-foreground">
          <div className="mx-auto max-w-6xl px-5">
            <p className="text-xs font-bold tracking-[0.18em] text-teal uppercase">
              {t.roles.eyebrow}
            </p>
            <h2 className="mt-4 max-w-2xl text-3xl text-navy-foreground sm:text-4xl">
              {t.roles.title}
            </h2>
            <div className="mt-14 grid gap-px overflow-hidden bg-navy-foreground/15 sm:grid-cols-2">
              {t.roles.items.map((item) => (
                <article key={item.title} className="bg-navy p-8">
                  <h3 className="text-lg text-navy-foreground">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-navy-foreground/70">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
            <p className="mt-10">
              <Link
                className="text-sm font-semibold text-teal underline-offset-4 hover:underline"
                to={pagePaths.hr[locale]}
              >
                {locale === "no" ? "Se innsikt per rolle" : "See insight per role"}
              </Link>
            </p>
          </div>
        </section>

        {/* 6. Produktvisning */}
        <section className="mx-auto max-w-6xl px-5 py-24">
          <div className="max-w-3xl">
            <p className="qp-eyebrow">{t.product.eyebrow}</p>
            <h2 className="mt-4 text-3xl leading-tight sm:text-4xl">{t.product.title}</h2>
            <p className="mt-5 text-muted-foreground">{t.product.lead}</p>
          </div>
          <div className="mt-14 border-t border-l border-border">
            {t.product.stages.map((stage, index) => (
              <div
                key={stage}
                className="flex items-baseline gap-6 border-r border-b border-border px-6 py-6"
              >
                <span className="font-display text-sm text-teal-deep tabular-nums">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-base text-navy">{stage}</span>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-2xl border-l-2 border-teal pl-5 font-display text-lg text-navy">
            {t.product.note}
          </p>
        </section>

        {/* 8. Tillit */}
        <section className="border-y border-border bg-card">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="qp-eyebrow">{t.trust.eyebrow}</p>
              <h2 className="mt-4 text-3xl leading-tight sm:text-4xl">{t.trust.title}</h2>
              <p className="mt-6">
                <Link className="story-link text-sm font-semibold" to={pagePaths.security[locale]}>
                  {t.trust.link}
                </Link>
              </p>
            </div>
            <ul className="grid gap-px self-start bg-border sm:grid-cols-2">
              {t.trust.items.map((item) => (
                <li key={item} className="bg-card px-6 py-6 text-sm font-semibold text-navy">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 9. Avsluttende CTA */}
        <section id="kontakt" className="border-t border-border">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-24 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <h2 className="text-3xl leading-tight sm:text-4xl">{t.cta.title}</h2>
              <p className="mt-5 text-muted-foreground">{t.cta.text}</p>
              <p className="mt-8 text-sm text-muted-foreground">
                <a className="story-link" href="mailto:hei@questpulse.no">
                  hei@questpulse.no
                </a>
                <br />
                <a className="story-link" href="mailto:support@questpulse.no">
                  support@questpulse.no
                </a>
                <br />
                Digital Coach Hub AS
              </p>
            </div>
            <HubSpotShareForm
              url={QP_FORM_SHARE_URL}
              title={locale === "no" ? "Kontaktskjema" : "Contact form"}
            />
          </div>
        </section>
      </main>

      <SiteFooter locale={locale} content={content} />
    </div>
  );
}
