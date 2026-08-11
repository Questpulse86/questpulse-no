export type Locale = "no" | "en";

export type SiteContent = {
  brand: { name: string; category: string; tagline: string };
  nav: { how: string; forWho: string; security: string; contact: string; cta: string };
  hero: {
    eyebrow: string;
    title: string;
    short: string;
    lead: string;
    cta1: string;
    cta2: string;
  };
  problem: {
    eyebrow: string;
    title: string;
    lead: string;
    items: { title: string; text: string }[];
  };
  how: {
    eyebrow: string;
    title: string;
    lead: string;
    steps: { title: string; text: string }[];
  };
  compliance: {
    eyebrow: string;
    title: string;
    lead: string;
    points: { title: string; text: string }[];
    note: string;
  };
  roles: {
    eyebrow: string;
    title: string;
    items: { role: string; text: string }[];
  };
  trust: { title: string; items: { title: string; text: string }[] };
  market: {
    eyebrow: string;
    title: string;
    lead: string;
    points: { title: string; text: string }[];
  };
  contact: {
    eyebrow: string;
    title: string;
    lead: string;
    nameLabel: string;
    emailLabel: string;
    companyLabel: string;
    roleLabel: string;
    typeLabel: string;
    messageLabel: string;
    submit: string;
    sending: string;
    success: string;
    error: string;
    privacy: string;
  };
  footer: { text: string; rights: string };
};

export const defaultContent: Record<Locale, SiteContent> = {
  no: {
    brand: {
      name: "QuestPulse",
      category: "People Intelligence",
      tagline: "Se det tidligere. Handle bedre.",
    },
    nav: {
      how: "Slik fungerer det",
      forWho: "For HR og ledelse",
      security: "Sikkerhet",
      contact: "Kontakt",
      cta: "Book en samtale",
    },
    hero: {
      eyebrow: "People Intelligence",
      title: "Vi gir arbeidsgivere innsikt i tide",
      short: "Se det tidligere. Handle bedre.",
      lead: "QuestPulse gir HR og ledelsen løpende innsikt i hva som utvikler seg i organisasjonen, og gjør det lettere å prioritere riktige handlinger.",
      cta1: "Book en samtale",
      cta2: "Slik fungerer det",
    },
    problem: {
      eyebrow: "Utgangspunktet",
      title: "Ledelsen vet mye om kunder og økonomi, og for lite om organisasjonen",
      lead: "Når utfordringen blir synlig gjennom oppsigelser, konflikter, sykefravær eller svakere leveranser, har virksomheten ofte mistet både tid og handlingsrom.",
      items: [
        {
          title: "Innsikten kommer sent",
          text: "Tradisjonelle undersøkelser gir et øyeblikksbilde. Det kan gå lang tid mellom et tidlig signal og en beslutning.",
        },
        {
          title: "Viktige forhold er vanskelige å se",
          text: "Belastning, friksjon og svak oppfølging blir ikke synlig før problemet har vokst. Det samme gjelder de positive mønstrene som burde forsterkes.",
        },
        {
          title: "Tiltak blir svakt fulgt opp",
          text: "Mange tiltak gjennomføres, men få vet om tiltaket traff riktig problem, om det virket, og hva som bør gjøres videre.",
        },
      ],
    },
    how: {
      eyebrow: "Slik fungerer QuestPulse",
      title: "Innsikt, prioritering og oppfølging i samme løp",
      lead: "QuestPulse knytter innsikt, handling og utvikling tettere sammen, i verktøyene folk allerede bruker.",
      steps: [
        {
          title: "Løpende innsikt",
          text: "Ansatte får et privat sted for refleksjon, og verdi tilbake. Virksomheten får et løpende bilde av hva som utvikler seg, ikke bare et årlig øyeblikksbilde.",
        },
        {
          title: "Tydelig prioritering",
          text: "HR og ledere ser hvor innsatsen betyr mest, hvilke team som trenger støtte, og hvilke arbeidsformer som fungerer og bør forsterkes.",
        },
        {
          title: "Dokumentert effekt",
          text: "Utviklingen følges etter at tiltak er gjennomført, slik at ledelsen ser om handlingene virket og kan dokumentere arbeidet.",
        },
      ],
    },
    compliance: {
      eyebrow: "Arbeidsmiljøloven",
      title: "Et risikostyringsverktøy, ikke enda et HR-tiltak",
      lead: "Arbeidsmiljøloven krever risikobasert og løpende kontroll av det psykososiale arbeidsmiljøet. QuestPulse gjør plikten enklere å oppfylle og å dokumentere.",
      points: [
        {
          title: "Løpende kontroll",
          text: "Risikobasert oppfølging av det psykososiale arbeidsmiljøet gjennom hele året, ikke bare ved den årlige undersøkelsen.",
        },
        {
          title: "Systematisk HMS-arbeid",
          text: "Forebyggende arbeid satt i system, med tydelig ansvar og oppfølging på hvert nivå.",
        },
        {
          title: "Dokumentasjon",
          text: "Kartlegging, tiltak og effekt dokumenteres samlet, klart til bruk for ledelse, styre og tilsyn.",
        },
      ],
      note: "Virksomheten har allerede en lovpålagt plikt. QuestPulse gjør den enklere å oppfylle.",
    },
    roles: {
      eyebrow: "Verdi for hele organisasjonen",
      title: "Fire perspektiver, ett felles bilde",
      items: [
        {
          role: "For den ansatte",
          text: "Et privat sted for refleksjon, med verdi tilbake. Trygghet for at individuelle svar ikke deles, og tilgang i kjente arbeidsverktøy.",
        },
        {
          role: "For lederen",
          text: "Bedre innsikt i eget team, støtte til prioritering og oppfølging, og mulighet til å se om handlingene faktisk virker.",
        },
        {
          role: "For HR",
          text: "Bedre oversikt mellom de større undersøkelsene, tydeligere prioritering av innsats og bedre støtte til lederne.",
        },
        {
          role: "For ledelse og styre",
          text: "Bedre beslutningsgrunnlag, tidligere innsikt i organisatorisk risiko og mer systematisk dokumentasjon.",
        },
      ],
    },
    trust: {
      title: "Bygget for virksomheter med krav til sikkerhet og dokumentasjon",
      items: [
        { title: "Azure Norway East", text: "Data lagret i Norge" },
        { title: "GDPR artikkel 25", text: "Personvern som arkitektur" },
        { title: "EU AI Act", text: "Bygget på prinsippene" },
        { title: "SSO", text: "Avklart tilgangsstyring" },
        { title: "Teams og Google Workspace", text: "Tilgang i kjente verktøy" },
      ],
    },
    market: {
      eyebrow: "Bank og finans først",
      title: "Vi beviser modellen der kravene er høyest",
      lead: "Bank og finans er vårt første bevismarked: tydelige HR-funksjoner, høy bevissthet om sikkerhet og dokumentasjon, og reelle krav til kontroll. Det er ikke en permanent avgrensning av produktet.",
      points: [
        {
          title: "Aktiv pilot",
          text: "Piloten dokumenterer bruk, innsikt, handling og videre kjøp. Pilotkunder omtales aldri ved navn på våre offentlige flater.",
        },
        {
          title: "Compliance-drevet inngang",
          text: "Samtalen starter i en plikt virksomheten allerede har, ikke i et nytt HR-prosjekt.",
        },
        {
          title: "Kartlegging før demo",
          text: "Første møte er en kartleggingssamtale om hvordan dere følger utviklingen i organisasjonen i dag.",
        },
      ],
    },
    contact: {
      eyebrow: "Neste steg",
      title: "Ta en kartleggingssamtale med oss",
      lead: "Fortell kort hva dere ønsker å få bedre oversikt over, så tar vi kontakt for en samtale.",
      nameLabel: "Navn",
      emailLabel: "E-post",
      companyLabel: "Virksomhet",
      roleLabel: "Rolle",
      typeLabel: "Hva gjelder henvendelsen?",
      messageLabel: "Melding",
      submit: "Send henvendelse",
      sending: "Sender ...",
      success: "Takk. Vi har mottatt henvendelsen og tar kontakt.",
      error: "Noe gikk galt. Prøv igjen, eller send e-post til linda@dchub.no.",
      privacy:
        "Vi bruker opplysningene kun til å følge opp henvendelsen din. Ingen deling med tredjepart.",
    },
    footer: {
      text: "QuestPulse er utviklet av Digital Coach Hub AS. People Intelligence for norske virksomheter.",
      rights: "Alle rettigheter forbeholdt.",
    },
  },
  en: {
    brand: {
      name: "QuestPulse",
      category: "People Intelligence",
      tagline: "See it earlier. Act better.",
    },
    nav: {
      how: "How it works",
      forWho: "For HR and leadership",
      security: "Security",
      contact: "Contact",
      cta: "Book a conversation",
    },
    hero: {
      eyebrow: "People Intelligence",
      title: "Insight into your organisation while there is still time to act",
      short: "See it earlier. Act better.",
      lead: "QuestPulse gives HR and leadership continuous insight into what is developing across the organisation, and makes it easier to prioritise the right actions.",
      cta1: "Book a conversation",
      cta2: "How it works",
    },
    problem: {
      eyebrow: "The starting point",
      title: "Leaders know a lot about customers and finance, and far too little about the organisation",
      lead: "By the time the problem is visible through resignations, conflict, absence or weaker delivery, the organisation has usually lost both time and options.",
      items: [
        {
          title: "Insight arrives late",
          text: "Traditional surveys give a snapshot. Long periods pass between an early signal and a decision.",
        },
        {
          title: "What matters is hard to see",
          text: "Strain, friction and weak follow-up stay invisible until the problem has grown. The same is true of the positive patterns that deserve reinforcement.",
        },
        {
          title: "Actions are weakly followed up",
          text: "Many initiatives are launched, but few know whether they addressed the right problem, whether they worked, and what to do next.",
        },
      ],
    },
    how: {
      eyebrow: "How QuestPulse works",
      title: "Insight, prioritisation and follow-up in one flow",
      lead: "QuestPulse connects insight, action and development, inside the tools people already use.",
      steps: [
        {
          title: "Continuous insight",
          text: "Employees get a private space for reflection, and value in return. The organisation gets a living picture instead of an annual snapshot.",
        },
        {
          title: "Clear prioritisation",
          text: "HR and leaders see where effort matters most, which teams need support, and which ways of working should be reinforced.",
        },
        {
          title: "Documented effect",
          text: "Development is tracked after actions are taken, so leadership can see whether they worked and document the work.",
        },
      ],
    },
    compliance: {
      eyebrow: "Norwegian Working Environment Act",
      title: "A risk management tool, not another HR initiative",
      lead: "Norwegian law requires risk-based, continuous oversight of the psychosocial working environment. QuestPulse makes that duty easier to meet and to document.",
      points: [
        {
          title: "Continuous oversight",
          text: "Risk-based follow-up of the working environment throughout the year, not only at the annual survey.",
        },
        {
          title: "Systematic HSE work",
          text: "Preventive work put into system, with clear ownership and follow-up at every level.",
        },
        {
          title: "Documentation",
          text: "Assessment, action and effect documented in one place, ready for leadership, the board and audits.",
        },
      ],
      note: "The duty already exists. QuestPulse makes it easier to fulfil.",
    },
    roles: {
      eyebrow: "Value across the organisation",
      title: "Four perspectives, one shared picture",
      items: [
        {
          role: "For the employee",
          text: "A private space for reflection, with value in return. Individual answers are never shared, and access lives in familiar tools.",
        },
        {
          role: "For the manager",
          text: "Better insight into their own team, support for prioritisation and follow-up, and a way to see whether actions worked.",
        },
        {
          role: "For HR",
          text: "Better overview between the larger surveys, clearer prioritisation of effort and stronger support for managers.",
        },
        {
          role: "For leadership and the board",
          text: "A better basis for decisions, earlier insight into organisational risk and more systematic documentation.",
        },
      ],
    },
    trust: {
      title: "Built for organisations with real security and documentation requirements",
      items: [
        { title: "Azure Norway East", text: "Data hosted in Norway" },
        { title: "GDPR article 25", text: "Privacy by design" },
        { title: "EU AI Act", text: "Built on the principles" },
        { title: "SSO", text: "Clear access control" },
        { title: "Teams and Google Workspace", text: "Access in familiar tools" },
      ],
    },
    market: {
      eyebrow: "Banking and finance first",
      title: "We prove the model where the requirements are highest",
      lead: "Banking and finance is our first proof market: clear HR functions, high awareness of security and documentation, and real control requirements. It is not a permanent limitation of the product.",
      points: [
        {
          title: "Active pilot",
          text: "The pilot documents adoption, insight, action and continued purchase. Pilot customers are never named on public surfaces.",
        },
        {
          title: "Compliance-led entry",
          text: "The conversation starts from a duty the organisation already has, not from a new HR project.",
        },
        {
          title: "Discovery before demo",
          text: "The first meeting is a discovery conversation about how you follow organisational development today.",
        },
      ],
    },
    contact: {
      eyebrow: "Next step",
      title: "Book a discovery conversation",
      lead: "Tell us briefly what you want better visibility into, and we will get in touch.",
      nameLabel: "Name",
      emailLabel: "Email",
      companyLabel: "Organisation",
      roleLabel: "Role",
      typeLabel: "What is this about?",
      messageLabel: "Message",
      submit: "Send enquiry",
      sending: "Sending ...",
      success: "Thank you. We have received your enquiry and will be in touch.",
      error: "Something went wrong. Please try again, or email linda@dchub.no.",
      privacy: "We use your details only to follow up on your enquiry. No sharing with third parties.",
    },
    footer: {
      text: "QuestPulse is built by Digital Coach Hub AS. People Intelligence for Nordic organisations.",
      rights: "All rights reserved.",
    },
  },
};

export const inquiryTypes: Record<Locale, { value: string; label: string }[]> = {
  no: [
    { value: "demo", label: "Demo eller kartleggingssamtale" },
    { value: "pilot", label: "Pilot" },
    { value: "partner", label: "Partnerskap" },
    { value: "investor", label: "Investor" },
    { value: "annet", label: "Annet" },
  ],
  en: [
    { value: "demo", label: "Demo or discovery call" },
    { value: "pilot", label: "Pilot" },
    { value: "partner", label: "Partnership" },
    { value: "investor", label: "Investor" },
    { value: "other", label: "Other" },
  ],
};

/** Deep-merges stored content over the defaults so missing keys never break the page. */
export function mergeContent(locale: Locale, stored: unknown): SiteContent {
  const base = defaultContent[locale];
  if (!stored || typeof stored !== "object") return base;
  return deepMerge(base, stored as Record<string, unknown>) as SiteContent;
}

function deepMerge(base: unknown, override: unknown): unknown {
  if (Array.isArray(base)) {
    if (!Array.isArray(override)) return base;
    return base.map((item, i) => (i in override ? deepMerge(item, override[i]) : item));
  }
  if (base && typeof base === "object") {
    if (!override || typeof override !== "object" || Array.isArray(override)) return base;
    const out: Record<string, unknown> = { ...(base as Record<string, unknown>) };
    for (const key of Object.keys(out)) {
      if (key in (override as Record<string, unknown>)) {
        out[key] = deepMerge(out[key], (override as Record<string, unknown>)[key]);
      }
    }
    return out;
  }
  return typeof override === "string" ? override : base;
}

/** Flattens content into dot-paths of editable strings, for the admin editor. */
export function flatten(value: unknown, prefix = ""): { path: string; value: string }[] {
  if (typeof value === "string") return [{ path: prefix, value }];
  if (Array.isArray(value)) {
    return value.flatMap((item, i) => flatten(item, `${prefix}.${i}`));
  }
  if (value && typeof value === "object") {
    return Object.entries(value as Record<string, unknown>).flatMap(([key, child]) =>
      flatten(child, prefix ? `${prefix}.${key}` : key),
    );
  }
  return [];
}

/** Applies dot-path edits onto a copy of the content object. */
export function applyEdits(base: SiteContent, edits: Record<string, string>): SiteContent {
  const clone = JSON.parse(JSON.stringify(base)) as Record<string, unknown>;
  for (const [path, value] of Object.entries(edits)) {
    const parts = path.split(".");
    let cursor: Record<string, unknown> = clone;
    for (let i = 0; i < parts.length - 1; i += 1) {
      const next = cursor[parts[i]!];
      if (!next || typeof next !== "object") break;
      cursor = next as Record<string, unknown>;
    }
    cursor[parts[parts.length - 1]!] = value;
  }
  return clone as unknown as SiteContent;
}
