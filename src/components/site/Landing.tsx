import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BarChart3,
  Check,
  ChevronRight,
  Eye,
  Layers3,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";

import {
  HUBSPOT_BOOKING_URL,
  HubSpotShareForm,
  QP_FORM_SHARE_URL,
} from "@/components/site/HubSpotForm";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { pagePaths } from "@/lib/page-content";
import type { Locale, SiteContent } from "@/lib/site-content";

type HomeCopy = {
  hero: { eyebrow: string; title: string; lead: string; cta: string; secondary: string };
  signals: { label: string; title: string; status: string; privacy: string }[];
  value: { eyebrow: string; title: string; lead: string; items: { title: string; text: string }[] };
  product: {
    eyebrow: string;
    title: string;
    lead: string;
    flow: string[];
    insightTitle: string;
    insightBody: string;
    actionTitle: string;
    actionBody: string;
    example: string;
  };
  visual: {
    eyebrow: string;
    title: string;
    lead: string;
    primaryAlt: string;
    secondaryAlt: string;
  };
  rollout: {
    eyebrow: string;
    title: string;
    lead: string;
    items: { title: string; text: string }[];
  };
  markets: {
    eyebrow: string;
    title: string;
    lead: string;
    items: { title: string; text: string }[];
  };
  roles: { eyebrow: string; title: string; lead: string; items: { title: string; text: string }[] };
  trust: { eyebrow: string; title: string; lead: string; items: string[]; link: string };
  proof: {
    eyebrow: string;
    title: string;
    lead: string;
    items: { title: string; text: string }[];
    link: string;
  };
  faq: { eyebrow: string; title: string; items: { q: string; a: string }[] };
  cta: { eyebrow: string; title: string; text: string; button: string; email: string };
};

const copy: Record<Locale, HomeCopy> = {
  no: {
    hero: {
      eyebrow: "People Intelligence",
      title: "Se organisatorisk risiko tidligere – og handle før den eskalerer.",
      lead: "QuestPulse gjør løpende signaler fra team, ledere og avdelinger om til beskyttet, handlingsklar innsikt for HR, ledere og toppledelse.",
      cta: "Be om en strategisk gjennomgang",
      secondary: "Se hvordan det fungerer",
    },
    signals: [
      {
        label: "Belastning",
        title: "Utvikling krever oppmerksomhet",
        status: "Følg opp",
        privacy: "Aggregert",
      },
      {
        label: "Arbeidsflyt",
        title: "Gode mønstre holder seg",
        status: "Forsterk",
        privacy: "Aggregert",
      },
      {
        label: "Lederhandling",
        title: "Tiltak kan følges over tid",
        status: "Dokumentert",
        privacy: "Sporbart",
      },
    ],
    value: {
      eyebrow: "Fra spredte signaler til felles beslutningsgrunnlag",
      title: "Mer enn en måling. Et beslutningsgrunnlag som utvikler seg med organisasjonen.",
      lead: "De fleste virksomheter tar beslutninger om mennesker, ledelse og kapasitet på forsinkede signaler. QuestPulse gjør signalene handlingsbare tidligere.",
      items: [
        {
          title: "Oppdag tidligere",
          text: "Se belastning og friksjon før konsekvensene setter seg i fravær, tap av kompetanse eller svakere leveranser.",
        },
        {
          title: "Forsterk det som virker",
          text: "Gjør gode arbeidsmønstre synlige og gi flere team mulighet til å lære av dem.",
        },
        {
          title: "Prioriter med retning",
          text: "Gi ledere et tydeligere grunnlag for hvor innsatsen bør settes inn først.",
        },
        {
          title: "Dokumenter effekten",
          text: "Følg utviklingen etter et tiltak og se om handlingen faktisk traff.",
        },
      ],
    },
    product: {
      eyebrow: "Beslutningsflaten",
      title: "Fra det som utvikler seg, til det dere gjør med det",
      lead: "Ikke flere løsrevne målinger. Ett sammenhengende bilde som gjør det mulig å se, prioritere og følge opp.",
      flow: ["Signal", "Tolkning", "Risiko", "Anbefaling", "Lederhandling", "Læring over tid"],
      insightTitle: "Arbeidsflyt fungerer bedre i flere team",
      insightBody: "Et positivt mønster er stabilt nok til å undersøkes og forsterkes.",
      actionTitle: "Anbefalt prioritering",
      actionBody: "Kartlegg hva de beste teamene gjør annerledes før neste ledermøte.",
      example: "Fiktive eksempeldata",
    },
    visual: {
      eyebrow: "Mennesker før målepunkter",
      title: "Et bedre grunnlag for den faglige samtalen",
      lead: "QuestPulse skal ikke redusere arbeidshverdagen til et tall. Målet er å gi ledere og HR kontekst nok til å stille bedre spørsmål, velge riktig oppfølging og lære av det som faktisk virker.",
      primaryAlt: "Et team som reflekterer over et felles beslutningsgrunnlag",
      secondaryAlt: "En leder som vurderer innsikt før neste handling",
    },
    rollout: {
      eyebrow: "Enkel innføring. Tydelig styring.",
      title: "Bygget for arbeidsflaten dere allerede bruker",
      lead: "QuestPulse kan rulles ut gjennom kommunikasjonsplattformen virksomheten allerede bruker, som Microsoft Teams eller Google Workspace. Omfang, ansvar og teknisk oppsett avklares tidlig, slik at oppstarten blir enkel uten et omfattende integrasjonsløp.",
      items: [
        {
          title: "I arbeidsflaten dere kjenner",
          text: "Gjør det enkelt å møte deltakere der samarbeidet allerede skjer, med et oppsett som tilpasses deres etablerte arbeidsmåte.",
        },
        {
          title: "Én felles governance-modell",
          text: "Virksomheten setter rammene: roller, tilgang, terskler og ansvar for oppfølging på tvers av organisasjonen.",
        },
        {
          title: "Strukturert onboarding",
          text: "Digital onboarding med tydelig kommunikasjon og et effektivt deltakerløp. Ved behov kan oppstarten kompletteres med fysiske samlinger.",
        },
        {
          title: "Dedikert støtte når det trengs",
          text: "Et kompetent QuestPulse-team støtter planlegging, oppstart og videre bruk, med rask veiledning før og underveis i innføringen.",
        },
      ],
    },
    markets: {
      eyebrow: "For kunnskapsintensive virksomheter",
      title: "Bygget der menneskelig kapasitet er en strategisk faktor",
      lead: "QuestPulse er relevant når kompetanse, samarbeid og ledelseskapasitet er tett knyttet til leveransen – på tvers av offentlig og privat sektor.",
      items: [
        {
          title: "Rådgivning og profesjonelle tjenester",
          text: "Når kvaliteten i leveransen avhenger av spesialistkompetanse, samspill og bærekraftig kapasitet.",
        },
        {
          title: "Teknologi og produktmiljøer",
          text: "Når endringstakt, prioriteringer og teamarbeid må fungere over tid – ikke bare ved neste release.",
        },
        {
          title: "Industri og kompetansemiljøer",
          text: "Når drift, prosjektarbeid og fagmiljøer krever tydeligere innsikt i hvor belastning og friksjon bygger seg opp.",
        },
        {
          title: "Offentlig og regulert virksomhet",
          text: "Når arbeidsmiljø, dokumentasjon og ansvarlig oppfølging må stå seg i møte med ansatte, ledelse og tilsyn.",
        },
      ],
    },
    roles: {
      eyebrow: "Innsikt som styrker relasjonene",
      title: "Riktig samtale på hvert nivå. Ingen innsyn i den enkelte.",
      lead: "QuestPulse erstatter ikke relasjonen mellom medarbeider, leder, HR og virksomhet. Det gjør oppfølgingen mer presis: personlige refleksjoner blir værende private, mens mønstre og tiltak kan deles på riktig nivå.",
      items: [
        {
          title: "Medarbeider",
          text: "Et privat rom for refleksjon og egen utvikling. Eget innhold deles aldri med arbeidsgiver, leder eller HR.",
        },
        {
          title: "Mellomleder",
          text: "Aggregerte mønstre i eget ansvarsområde og et bedre grunnlag for den neste samtalen og handlingen – aldri individuelle svar.",
        },
        {
          title: "HR og People",
          text: "Prioritering på tvers, støtte til lederne og dokumentasjon av hva som virker over tid – uten tilgang til personlige refleksjoner.",
        },
        {
          title: "CEO og toppledelse",
          text: "Et tidlig, aggregert bilde av organisatorisk risiko, kapasitet og utvikling som kan følges opp med ansvarlige tiltak.",
        },
        {
          title: "Styre",
          text: "Overordnet utvikling, risikoforståelse og dokumentert oppfølging – uten persondata, enkeltsvar eller innsyn i små grupper.",
        },
      ],
    },
    trust: {
      eyebrow: "Personvern og sikkerhet",
      title: "Innsikt uten å gjøre mennesker gjennomsiktige",
      lead: "Data pseudonymiseres, enkeltsvar skjermes og tilgang styres etter rolle. Personvern er en del av arkitekturen fra første signal.",
      items: [
        "Pseudonymiserte data",
        "Aggregert innsikt",
        "Rollebasert tilgang",
        "Tydelig eierskapsmodell",
      ],
      link: "Les om sikkerhet og personvern",
    },
    proof: {
      eyebrow: "Et troverdig grunnlag – før kundecaser publiseres",
      title: "Bygget for en grundig enterprise-vurdering",
      lead: "Mens publiserbare resultater fra piloter og forskningsprosjekter modnes, viser vi det vi kan dokumentere nå: metode, styring og et klart avtaleverk.",
      items: [
        {
          title: "Forskningsforankring",
          text: "Vi samler relevant arbeidslivs- og organisasjonsforskning, og publiserer nye funn når data og rettigheter tillater det.",
        },
        {
          title: "Avtaleverk klart",
          text: "SaaS-avtale, DPA og personverndokumentasjon er klare for innkjøp, sikkerhet og juridisk gjennomgang.",
        },
        {
          title: "Kontrollert evaluering",
          text: "En avgrenset evaluering med beslutningskriterier, avklart ansvar og dokumentert konklusjon.",
        },
      ],
      link: "Se forskningsgrunnlaget",
    },
    faq: {
      eyebrow: "Kort fortalt",
      title: "Det beslutningstakere spør om først",
      items: [
        {
          q: "Hva skiller QuestPulse fra periodiske målinger?",
          a: "Periodiske målinger gir øyeblikksbilder. QuestPulse gir et løpende bilde mellom målepunktene og kobler det til hva som faktisk ble gjort.",
        },
        {
          q: "Hvordan beskyttes den enkelte?",
          a: "Ingen i selskapet ser hva den enkelte skriver. Innsikt leveres aggregert med anonymitetsterskler. Det er bygget inn i arkitekturen.",
        },
        {
          q: "Må vi bytte HR-system?",
          a: "Nei. QuestPulse er ikke et frittstående HR-system. Det er laget for å fungere sammen med virksomhetens etablerte arbeidsverktøy og prosesser.",
        },
        {
          q: "Hvor lagres dataene?",
          a: "Data lagres innenfor EØS med rollebasert tilgang og dokumentert databehandling.",
        },
      ],
    },
    cta: {
      eyebrow: "Neste steg",
      title: "Hva ville dere sett tidligere med et bedre beslutningsgrunnlag?",
      text: "Vi starter med deres beslutningsbehov, eksisterende prosesser og krav til personvern og sikkerhet.",
      button: "Book kartleggingssamtale",
      email: "linda@dchub.no",
    },
  },
  en: {
    hero: {
      eyebrow: "People Intelligence",
      title: "See organisational risk earlier. Act before it escalates.",
      lead: "QuestPulse turns continuous signals from teams, leaders and business units into protected, actionable insight for HR, leaders and executive teams.",
      cta: "Request an executive briefing",
      secondary: "See how it works",
    },
    signals: [
      {
        label: "Workload",
        title: "Development requires attention",
        status: "Follow up",
        privacy: "Aggregated",
      },
      {
        label: "Ways of working",
        title: "Strong patterns are holding",
        status: "Reinforce",
        privacy: "Aggregated",
      },
      {
        label: "Leadership action",
        title: "Actions can be followed over time",
        status: "Documented",
        privacy: "Traceable",
      },
    ],
    value: {
      eyebrow: "From scattered signals to a shared basis for decisions",
      title: "More than measurement. A decision foundation that evolves with the organisation.",
      lead: "Most organisations make decisions about people, leadership and capacity using delayed signals. QuestPulse makes those signals actionable earlier.",
      items: [
        {
          title: "Detect earlier",
          text: "See strain and friction before the consequences become absence, lost expertise or weaker delivery.",
        },
        {
          title: "Reinforce what works",
          text: "Make strong working patterns visible and help more teams learn from them.",
        },
        {
          title: "Prioritise with direction",
          text: "Give leaders a clearer basis for deciding where attention matters first.",
        },
        {
          title: "Document the effect",
          text: "Follow development after an action and see whether it addressed the right issue.",
        },
      ],
    },
    product: {
      eyebrow: "Decision view",
      title: "From what is developing to what you do about it",
      lead: "Not another set of disconnected measurements. One coherent view for seeing, prioritising and following up.",
      flow: [
        "Signal",
        "Interpretation",
        "Risk",
        "Recommendation",
        "Leadership action",
        "Learning over time",
      ],
      insightTitle: "Ways of working are improving across more teams",
      insightBody: "A positive pattern is stable enough to examine and reinforce.",
      actionTitle: "Recommended priority",
      actionBody: "Map what the strongest teams do differently before the next leadership meeting.",
      example: "Fictional example data",
    },
    visual: {
      eyebrow: "People before measurement points",
      title: "A stronger foundation for the professional conversation",
      lead: "QuestPulse should not reduce working life to a number. The aim is to give leaders and HR enough context to ask better questions, choose the right follow-up and learn from what truly works.",
      primaryAlt: "A team reflecting on a shared decision foundation",
      secondaryAlt: "A leader considering insight before the next action",
    },
    rollout: {
      eyebrow: "Simple rollout. Clear governance.",
      title: "Built for the workplace you already use",
      lead: "QuestPulse can be rolled out through the communication platform your organisation already uses, such as Microsoft Teams or Google Workspace. Scope, ownership and technical setup are clarified early, so getting started stays straightforward without a heavy integration programme.",
      items: [
        {
          title: "In the workplace people know",
          text: "Meet participants where collaboration already happens, with a setup adapted to the ways of working you have established.",
        },
        {
          title: "One shared governance model",
          text: "The organisation sets the operating framework: roles, access, thresholds and accountability for follow-up across the business.",
        },
        {
          title: "Structured onboarding",
          text: "Digital onboarding with clear communication and an efficient participant journey. Where useful, this can be complemented with in-person sessions.",
        },
        {
          title: "Dedicated support when needed",
          text: "A capable QuestPulse team supports planning, launch and continued use, with timely guidance before and throughout rollout.",
        },
      ],
    },
    markets: {
      eyebrow: "For knowledge-intensive organisations",
      title: "Built where human capacity is a strategic factor",
      lead: "QuestPulse is relevant when expertise, collaboration and leadership capacity are closely connected to delivery – across private and public sector organisations.",
      items: [
        {
          title: "Advisory and professional services",
          text: "When delivery quality depends on specialist expertise, collaboration and sustainable capacity.",
        },
        {
          title: "Technology and product organisations",
          text: "When pace of change, priorities and teamwork need to work over time – not only until the next release.",
        },
        {
          title: "Industry and specialist environments",
          text: "When operations, project work and expert communities need clearer insight into where strain and friction are building.",
        },
        {
          title: "Public and regulated organisations",
          text: "When working environment, documentation and responsible follow-up must stand up to scrutiny from employees, leaders and oversight bodies.",
        },
      ],
    },
    roles: {
      eyebrow: "Insight that strengthens relationships",
      title: "The right conversation at every level. No insight into the individual.",
      lead: "QuestPulse does not replace the relationship between employee, manager, HR and organisation. It makes follow-up more precise: personal reflection remains private, while patterns and actions can be shared at the right level.",
      items: [
        {
          title: "Employee",
          text: "A private space for reflection and development. Personal content is never shared with the employer, manager or HR.",
        },
        {
          title: "Middle manager",
          text: "Aggregated patterns in their area and a stronger basis for the next conversation and action – never individual responses.",
        },
        {
          title: "HR and People",
          text: "Priorities across the organisation, support for leaders and evidence of what works over time – without access to personal reflections.",
        },
        {
          title: "CEO and executive team",
          text: "An early, aggregated view of organisational risk, capacity and development that can be followed up through responsible action.",
        },
        {
          title: "Board",
          text: "High-level development, risk understanding and documented follow-up – without personal data, individual responses or insight into small groups.",
        },
      ],
    },
    trust: {
      eyebrow: "Privacy and security",
      title: "Insight without making people transparent",
      lead: "Data is pseudonymised, individual responses are protected and access is role-based. Privacy is part of the architecture from the first signal.",
      items: [
        "Pseudonymised data",
        "Aggregated insight",
        "Role-based access",
        "Clear ownership model",
      ],
      link: "Read about security and privacy",
    },
    proof: {
      eyebrow: "A credible foundation – before customer cases are published",
      title: "Built for a rigorous enterprise evaluation",
      lead: "While publishable results from pilots and research projects mature, we show what can be documented now: method, governance and a clear agreement framework.",
      items: [
        {
          title: "Research foundation",
          text: "We collect relevant workplace and organisation research, and publish new findings when data and publication rights allow.",
        },
        {
          title: "Agreement framework ready",
          text: "The SaaS agreement, DPA and privacy documentation are ready for procurement, security and legal review.",
        },
        {
          title: "Controlled evaluation",
          text: "A scoped evaluation with decision criteria, clarified responsibilities and a documented conclusion.",
        },
      ],
      link: "Explore the research foundation",
    },
    faq: {
      eyebrow: "In brief",
      title: "What decision-makers ask first",
      items: [
        {
          q: "How does QuestPulse differ from periodic measurement?",
          a: "Periodic measurement provides snapshots. QuestPulse provides a continuous view between measurement points and connects it to the actions taken.",
        },
        {
          q: "How is each individual protected?",
          a: "No one in the company sees what an individual writes. Insight is aggregated and protected by anonymity thresholds. This is built into the architecture.",
        },
        {
          q: "Do we need to replace our HR system?",
          a: "No. QuestPulse is not a standalone HR system. It is designed to work with established tools and processes.",
        },
        {
          q: "Where is data stored?",
          a: "Data is stored within the EEA with role-based access and documented data processing.",
        },
      ],
    },
    cta: {
      eyebrow: "Next step",
      title: "What could you see earlier with a better basis for decisions?",
      text: "We start with your decision needs, current processes and requirements for privacy and security.",
      button: "Book a discovery conversation",
      email: "linda@dchub.no",
    },
  },
};

const valueIcons = [Eye, Sparkles, Target, TrendingUp];
const roleIcons = [Users, Target, Layers3, BarChart3];
const rolloutIcons = [Check, ShieldCheck, Users, Sparkles];

function ProductPreview({ t }: { t: HomeCopy }) {
  return (
    <figure
      className="overflow-hidden rounded-md border border-navy-foreground/10 bg-white shadow-[0_24px_70px_rgba(3,17,31,0.16)]"
      aria-label={t.product.example}
    >
      <img
        src="/imagery/questpulse-decision-platform.webp"
        alt={t.product.example}
        className="block h-auto w-full"
      />
    </figure>
  );
}

export function Landing({ locale, content }: { locale: Locale; content: SiteContent }) {
  const t = copy[locale];

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader
        locale={locale}
        content={content}
        altHref={locale === "no" ? "/en" : "/"}
        theme="dark"
      />
      <main>
        <section className="relative overflow-hidden bg-navy text-navy-foreground">
          <div className="qp-grid-bg absolute inset-0" aria-hidden="true" />
          <div className="relative mx-auto grid max-w-7xl gap-14 px-5 pt-20 pb-12 lg:grid-cols-[0.86fr_1.14fr] lg:items-center lg:px-8 lg:pt-28 lg:pb-20">
            <div className="animate-fade-in">
              <p className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.16em] text-teal uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-teal" />
                {t.hero.eyebrow}
              </p>
              <h1 className="mt-6 max-w-2xl text-4xl leading-[1.05] font-semibold text-navy-foreground sm:text-5xl lg:text-6xl">
                {t.hero.title}
              </h1>
              <p className="mt-7 max-w-xl text-base leading-relaxed text-navy-foreground/68 sm:text-lg">
                {t.hero.lead}
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="h-12 px-6">
                  <a href={HUBSPOT_BOOKING_URL} target="_blank" rel="noreferrer">
                    {t.hero.cta}
                    <ArrowRight />
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-12 border-navy-foreground/20 bg-transparent text-navy-foreground hover:bg-navy-foreground/10 hover:text-navy-foreground"
                >
                  <Link to={pagePaths.how[locale]}>{t.hero.secondary}</Link>
                </Button>
              </div>
              <p className="mt-7 flex items-center gap-2 text-xs text-navy-foreground/45">
                <ShieldCheck className="size-4 text-teal" />
                {t.trust.items[0]} · {t.trust.items[3]}
              </p>
            </div>
            <div className="qp-hero-preview animate-scale-in">
              <ProductPreview t={t} />
            </div>
          </div>
          <div className="relative mx-auto grid max-w-7xl border-t border-navy-foreground/10 px-5 sm:grid-cols-3 lg:px-8">
            {t.signals.map((signal) => (
              <div
                key={signal.label}
                className="border-b border-navy-foreground/10 py-5 sm:border-r sm:border-b-0 sm:px-5 first:pl-0 last:border-r-0"
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="text-[10px] font-bold tracking-[0.14em] text-navy-foreground/40 uppercase">
                    {signal.label}
                  </p>
                  <span className="text-[10px] font-semibold text-teal">{signal.status}</span>
                </div>
                <p className="mt-2 text-sm text-navy-foreground/75">{signal.title}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="max-w-xl">
              <p className="qp-eyebrow">{t.value.eyebrow}</p>
              <h2 className="mt-5 text-3xl leading-tight sm:text-5xl">{t.value.title}</h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{t.value.lead}</p>
            </div>
            <div className="grid border-t border-border sm:grid-cols-2">
              {t.value.items.map((item, index) => {
                const Icon = valueIcons[index] ?? Eye;
                return (
                  <article
                    key={item.title}
                    className="group border-b border-border py-7 sm:px-7 sm:odd:border-r"
                  >
                    <div className="flex size-9 items-center justify-center rounded-md bg-secondary text-teal-deep transition-colors group-hover:bg-teal group-hover:text-primary-foreground">
                      <Icon className="size-4" />
                    </div>
                    <h3 className="mt-5 font-sans text-lg font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.text}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-card py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <div>
                <p className="qp-eyebrow">{t.proof.eyebrow}</p>
                <h2 className="mt-5 max-w-xl text-3xl leading-tight sm:text-5xl">
                  {t.proof.title}
                </h2>
              </div>
              <div>
                <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
                  {t.proof.lead}
                </p>
                <Link
                  to={locale === "no" ? "/forskning" : "/en/research"}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal-deep hover:text-navy"
                >
                  {t.proof.link}
                  <ChevronRight className="size-4" />
                </Link>
              </div>
            </div>
            <div className="mt-12 grid gap-px overflow-hidden rounded-md border border-border bg-border md:grid-cols-3">
              {t.proof.items.map((item, index) => (
                <article key={item.title} className="bg-background p-7">
                  <span className="font-display text-sm text-teal-deep">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-8 text-lg font-semibold text-navy">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="qp-eyebrow">{t.rollout.eyebrow}</p>
              <h2 className="mt-5 max-w-xl text-3xl leading-tight sm:text-5xl">
                {t.rollout.title}
              </h2>
            </div>
            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground lg:justify-self-end">
              {t.rollout.lead}
            </p>
          </div>
          <div className="mt-12 grid border-t border-border sm:grid-cols-2">
            {t.rollout.items.map((item, index) => {
              const Icon = rolloutIcons[index] ?? Check;
              return (
                <article
                  key={item.title}
                  className="border-b border-border py-7 sm:px-7 sm:odd:border-r"
                >
                  <div className="flex size-9 items-center justify-center rounded-md bg-secondary text-teal-deep">
                    <Icon className="size-4" />
                  </div>
                  <h3 className="mt-5 font-sans text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
                    {item.text}
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="bg-navy py-24 text-navy-foreground lg:py-32">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
              <div>
                <p className="text-xs font-bold tracking-[0.16em] text-teal uppercase">
                  {t.markets.eyebrow}
                </p>
                <h2 className="mt-5 max-w-xl text-3xl leading-tight text-navy-foreground sm:text-5xl">
                  {t.markets.title}
                </h2>
              </div>
              <p className="max-w-xl text-lg leading-relaxed text-navy-foreground/65 lg:justify-self-end">
                {t.markets.lead}
              </p>
            </div>
            <div className="mt-12 grid gap-px overflow-hidden rounded-md border border-navy-foreground/15 bg-navy-foreground/15 md:grid-cols-2">
              {t.markets.items.map((item) => (
                <article key={item.title} className="bg-navy p-7 sm:p-8">
                  <h3 className="text-lg font-semibold text-navy-foreground">{item.title}</h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-navy-foreground/60">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="qp-eyebrow">{t.visual.eyebrow}</p>
              <h2 className="mt-5 max-w-xl text-3xl leading-tight sm:text-5xl">{t.visual.title}</h2>
            </div>
            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground lg:justify-self-end">
              {t.visual.lead}
            </p>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-[1.35fr_0.65fr]">
            <figure className="overflow-hidden rounded-md bg-secondary">
              <img
                src="/imagery/questpulse-team-insight.webp"
                alt={t.visual.primaryAlt}
                className="h-full min-h-80 w-full object-cover"
                loading="lazy"
              />
            </figure>
            <figure className="overflow-hidden rounded-md bg-secondary">
              <img
                src="/imagery/questpulse-leadership-reflection.webp"
                alt={t.visual.secondaryAlt}
                className="h-full min-h-80 w-full object-cover"
                loading="lazy"
              />
            </figure>
          </div>
        </section>

        <section className="border-y border-border bg-card py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
              <div>
                <p className="qp-eyebrow">{t.product.eyebrow}</p>
                <h2 className="mt-5 max-w-2xl text-3xl leading-tight sm:text-5xl">
                  {t.product.title}
                </h2>
              </div>
              <p className="max-w-xl text-lg leading-relaxed text-muted-foreground lg:justify-self-end">
                {t.product.lead}
              </p>
            </div>
            <div className="mt-12">
              <ProductPreview t={t} />
            </div>
            <ol className="mt-8 grid border-y border-border sm:grid-cols-3 lg:grid-cols-6">
              {t.product.flow.map((step, index) => (
                <li
                  key={step}
                  className="flex items-center gap-3 border-b border-border py-5 sm:border-r sm:border-b-0 sm:px-5 first:pl-0 last:border-r-0"
                >
                  <span className="font-display text-sm text-teal-deep">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm font-semibold text-navy">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="bg-navy py-24 text-navy-foreground lg:py-32">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <p className="text-xs font-bold tracking-[0.16em] text-teal uppercase">
              {t.roles.eyebrow}
            </p>
            <div className="mt-5 grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <h2 className="max-w-xl text-3xl leading-tight text-navy-foreground sm:text-5xl">
                  {t.roles.title}
                </h2>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-navy-foreground/60">
                  {t.roles.lead}
                </p>
              </div>
              <div className="border-t border-navy-foreground/15">
                {t.roles.items.map((item, index) => {
                  const Icon = roleIcons[index] ?? Users;
                  return (
                    <article
                      key={item.title}
                      className="grid gap-4 border-b border-navy-foreground/15 py-6 sm:grid-cols-[3rem_11rem_1fr] sm:items-start"
                    >
                      <div className="flex size-9 items-center justify-center rounded-md bg-navy-foreground/[0.06] text-teal">
                        <Icon className="size-4" />
                      </div>
                      <h3 className="font-sans text-base font-semibold text-navy-foreground">
                        {item.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-navy-foreground/60">{item.text}</p>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="qp-eyebrow">{t.trust.eyebrow}</p>
              <h2 className="mt-5 max-w-xl text-3xl leading-tight sm:text-5xl">{t.trust.title}</h2>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                {t.trust.lead}
              </p>
              <Link
                to={pagePaths.security[locale]}
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-teal-deep hover:text-navy"
              >
                {t.trust.link}
                <ChevronRight className="size-4" />
              </Link>
            </div>
            <ul className="grid gap-px self-start overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2">
              {t.trust.items.map((item) => (
                <li key={item} className="flex min-h-32 flex-col justify-between bg-card p-6">
                  <ShieldCheck className="size-5 text-teal" />
                  <span className="mt-8 text-sm font-semibold text-navy">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-y border-border bg-card">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
            <div>
              <p className="qp-eyebrow">{t.faq.eyebrow}</p>
              <h2 className="mt-5 text-3xl leading-tight sm:text-4xl">{t.faq.title}</h2>
            </div>
            <Accordion type="single" collapsible className="border-t border-border">
              {t.faq.items.map((item, index) => (
                <AccordionItem key={item.q} value={`faq-${index}`}>
                  <AccordionTrigger className="text-left font-sans text-base font-semibold text-navy">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section id="kontakt" className="bg-navy py-24 text-navy-foreground lg:py-32">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
            <div>
              <p className="text-xs font-bold tracking-[0.16em] text-teal uppercase">
                {t.cta.eyebrow}
              </p>
              <h2 className="mt-5 max-w-xl text-3xl leading-tight text-navy-foreground sm:text-5xl">
                {t.cta.title}
              </h2>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-navy-foreground/60">
                {t.cta.text}
              </p>
              <Button asChild size="lg" className="mt-8 h-12 px-6">
                <a href={HUBSPOT_BOOKING_URL} target="_blank" rel="noreferrer">
                  {t.cta.button}
                  <ArrowRight />
                </a>
              </Button>
              <p className="mt-7 text-sm text-navy-foreground/50">
                <a href={`mailto:${t.cta.email}`} className="hover:text-navy-foreground">
                  {t.cta.email}
                </a>
              </p>
            </div>
            <div className="rounded-md bg-background p-3 sm:p-5">
              <HubSpotShareForm
                url={QP_FORM_SHARE_URL}
                title={locale === "no" ? "Kontaktskjema" : "Contact form"}
              />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter locale={locale} content={content} />
    </div>
  );
}
