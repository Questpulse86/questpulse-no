import type { Locale } from "@/lib/site-content";

export type PageSection =
  | { kind: "prose"; eyebrow?: string; title: string; lead?: string; paragraphs: string[] }
  | { kind: "cards"; eyebrow?: string; title: string; lead?: string; items: PageItem[] }
  | { kind: "register"; eyebrow?: string; title: string; lead?: string; items: PageItem[] }
  | {
      kind: "steps";
      eyebrow?: string;
      title: string;
      lead?: string;
      visual?: "flow";
      items: PageItem[];
    }
  | { kind: "dark"; eyebrow?: string; title: string; lead?: string; items: PageItem[] }
  | { kind: "contact"; eyebrow?: string; title: string; lead?: string }
  | { kind: "roles"; eyebrow?: string; title: string; lead?: string };


export type PageItem = { title: string; text: string };

export type PageData = {
  meta: { title: string; description: string };
  hero: { eyebrow: string; title: string; lead: string };
  sections: PageSection[];
};

export type PageKey =
  | "about"
  | "how"
  | "banking"
  | "hr"
  | "pilot"
  | "contact"
  | "security"
  | "partners";

export const pagePaths = {
  about: { no: "/om-selskapet", en: "/en/about" },
  how: { no: "/slik-fungerer-det", en: "/en/how-it-works" },
  banking: { no: "/for-bank-og-finans", en: "/en/banking-and-finance" },
  hr: { no: "/for-hr-og-ledelse", en: "/en/hr-and-leadership" },
  pilot: { no: "/pilot", en: "/en/pilot" },
  contact: { no: "/kontakt", en: "/en/contact" },
  security: { no: "/sikkerhet-og-personvern", en: "/en/security-and-privacy" },
  partners: { no: "/partnere", en: "/en/partners" },
} as const;

export const navKeys: PageKey[] = ["how", "banking", "hr", "pilot", "about"];
export const footerKeys: PageKey[] = [
  "about",
  "how",
  "banking",
  "hr",
  "pilot",
  "security",
  "partners",
  "contact",
];

export const navLabels: Record<Locale, Record<PageKey, string>> = {
  no: {
    about: "Om selskapet",
    how: "Slik fungerer det",
    banking: "Bank og finans",
    hr: "HR og ledelse",
    pilot: "Pilot",
    contact: "Kontakt",
    security: "Sikkerhet og personvern",
    partners: "Partnere",
  },
  en: {
    about: "About us",
    how: "How it works",
    banking: "Banking and finance",
    hr: "HR and leadership",
    pilot: "Pilot",
    contact: "Contact",
    security: "Security and privacy",
    partners: "Partners",
  },
};

export const pageContent: Record<Locale, Record<PageKey, PageData>> = {
  no: {
    about: {
      meta: {
        title: "Om QuestPulse | People Intelligence fra Digital Coach Hub",
        description:
          "QuestPulse utvikles av Digital Coach Hub AS. Les om hvem vi er, bakgrunnen vår og visjonen om at arbeidsgivere skal se utviklingen i organisasjonen i tide.",
      },
      hero: {
        eyebrow: "Om selskapet",
        title: "Vi bygger innsikten ledelsen mangler om egen organisasjon",
        lead: "QuestPulse utvikles av Digital Coach Hub AS. Vi kombinerer erfaring fra ledelse, HR-utvikling og teknologi for å gjøre organisatorisk risiko like synlig som økonomisk risiko.",
      },
      sections: [
        {
          kind: "prose",
          eyebrow: "Bakgrunn",
          title: "Fra coaching og lederutvikling til løpende innsikt",
          paragraphs: [
            "Digital Coach Hub har arbeidet tett på ledere og HR-miljøer i norske virksomheter. Mønsteret gjentok seg: utfordringene var kjent lenge før de ble målt, men det fantes ikke et system som fanget signalene tidsnok til at noen kunne handle.",
            "QuestPulse er svaret på det. I stedet for enda en årlig undersøkelse gir vi virksomheten et løpende bilde av hva som utvikler seg, i verktøyene folk allerede bruker.",
          ],
        },
        {
          kind: "cards",
          eyebrow: "Teamet",
          title: "Et lite team med tung fagbakgrunn",
          lead: "Vi bygger produktet tett på pilotkunder, med rådgivere innen personvern, sikkerhet og arbeidsmiljø.",
          items: [
            {
              title: "Ledelse og forretning",
              text: "Linda Karlsen leder selskapet, med bakgrunn fra coaching, lederutvikling og organisasjonsarbeid i norske virksomheter.",
            },
            {
              title: "Produkt og teknologi",
              text: "Utvikling skjer i nært samarbeid med teknologirådgivere, med sikkerhet og personvern som premiss fra første linje kode.",
            },
            {
              title: "Fag og rådgivning",
              text: "Arbeidsmiljø, HMS og personvern kvalitetssikres av eksterne fagressurser, slik at produktet står seg i møte med tilsyn og styre.",
            },
          ],
        },
        {
          kind: "dark",
          eyebrow: "Visjon",
          title: "At ingen ledelse skal oppdage utfordringen for sent",
          items: [
            {
              title: "Innsikt i tide",
              text: "Signalene skal være synlige mens handlingsrommet fortsatt er stort, ikke når oppsigelsen er levert.",
            },
            {
              title: "Trygghet for den ansatte",
              text: "Innsikt skal aldri gå på bekostning av personvern. Individuelle svar deles ikke.",
            },
            {
              title: "Dokumentert effekt",
              text: "Virksomheten skal kunne vise hva den gjorde, hvorfor, og hva som faktisk virket.",
            },
          ],
        },
        {
          kind: "contact",
          eyebrow: "Ta kontakt",
          title: "Vil du vite mer om selskapet?",
          lead: "Send oss noen ord om hva dere lurer på, så tar vi kontakt.",
        },
      ],
    },
    how: {
      meta: {
        title: "Slik fungerer QuestPulse | Innsikt, prioritering og effekt",
        description:
          "QuestPulse knytter løpende innsikt, tydelig prioritering og dokumentert effekt sammen i ett løp, i verktøyene organisasjonen allerede bruker.",
      },
      hero: {
        eyebrow: "Slik fungerer det",
        title: "Innsikt, prioritering og effekt i samme løp",
        lead: "Tre steg som henger sammen: vi fanger signalene løpende, gjør dem om til prioriteringer HR og ledere kan handle på, og følger utviklingen etter at tiltakene er satt i gang.",
      },
      sections: [
        {
          kind: "steps",
          eyebrow: "Trestegsmodellen",
          title: "Fra signal til dokumentert effekt",
          visual: "flow",
          items: [
            {
              title: "1. Løpende innsikt",
              text: "Ansatte får et privat sted for refleksjon i Teams eller Google Workspace, og verdi tilbake i form av egen utvikling. Virksomheten får et løpende bilde av belastning, friksjon og arbeidsformer som fungerer, aggregert slik at enkeltsvar aldri kan spores.",
            },
            {
              title: "2. Tydelig prioritering",
              text: "Signalene samles til et bilde HR og ledere kan handle på: hvilke team som trenger støtte nå, hva som er årsak og hva som er symptom, og hvor innsatsen gir mest effekt. Ledere får konkrete forslag, ikke bare tall.",
            },
            {
              title: "3. Dokumentert effekt",
              text: "Etter at tiltak er gjennomført følges utviklingen videre. Ledelsen ser om handlingen traff, og kartlegging, tiltak og effekt dokumenteres samlet, klart til bruk for styre og tilsyn.",
            },
          ],
        },
        {
          kind: "cards",
          eyebrow: "I praksis",
          title: "Slik ser det ut i hverdagen",
          items: [
            {
              title: "Ingen nye systemer å lære",
              text: "QuestPulse lever i verktøyene folk allerede bruker. Ingen egen portal å huske, ingen ekstra pålogging.",
            },
            {
              title: "Korte, jevne berøringspunkter",
              text: "Refleksjon tar minutter, ikke timer, og skjer jevnlig gjennom året i stedet for én gang i året.",
            },
            {
              title: "Rolletilpasset innsikt",
              text: "Leder, HR og ledelse ser hvert sitt nivå av bildet, med terskler som beskytter små team mot gjenkjenning.",
            },
          ],
        },
        {
          kind: "contact",
          eyebrow: "Neste steg",
          title: "Se det på deres egne data",
          lead: "Vi starter alltid med en kartleggingssamtale om hvordan dere følger utviklingen i dag.",
        },
      ],
    },
    banking: {
      meta: {
        title: "QuestPulse for bank og finans | Compliance og kontroll",
        description:
          "Bank og finans er vårt første bevismarked. Løpende kontroll av det psykososiale arbeidsmiljøet, dokumentasjon til styre og tilsyn, og en aktiv pilot.",
      },
      hero: {
        eyebrow: "For bank og finans",
        title: "Vi beviser modellen der kravene er høyest",
        lead: "Bank og finans har tydelige HR-funksjoner, høy bevissthet om sikkerhet og reelle krav til dokumentert kontroll. Derfor starter vi her.",
      },
      sections: [
        {
          kind: "cards",
          eyebrow: "Compliance-inngangen",
          title: "Samtalen starter i en plikt dere allerede har",
          lead: "Arbeidsmiljøloven krever risikobasert og løpende kontroll av det psykososiale arbeidsmiljøet. QuestPulse gjør plikten enklere å oppfylle og å dokumentere.",
          items: [
            {
              title: "Løpende kontroll",
              text: "Risikobasert oppfølging gjennom hele året, ikke bare ved den årlige undersøkelsen.",
            },
            {
              title: "Systematisk HMS-arbeid",
              text: "Forebyggende arbeid satt i system, med tydelig ansvar og oppfølging på hvert nivå.",
            },
            {
              title: "Dokumentasjon som holder",
              text: "Kartlegging, tiltak og effekt samlet ett sted, klart til bruk for ledelse, styre og tilsyn.",
            },
          ],
        },
        {
          kind: "dark",
          eyebrow: "Krav i bransjen",
          title: "Bygget for en sektor med lite rom for feil",
          items: [
            {
              title: "Data i Norge",
              text: "Drift på Azure Norway East, med databehandleravtale og tydelig ansvarsfordeling.",
            },
            {
              title: "Avklart tilgangsstyring",
              text: "SSO mot eksisterende identitetsleverandør, med rollebasert tilgang til innsikten.",
            },
            {
              title: "Personvern som arkitektur",
              text: "GDPR artikkel 25 og prinsippene i EU AI Act er lagt til grunn i designet, ikke lagt på i etterkant.",
            },
            {
              title: "Sporbarhet",
              text: "Beslutningsgrunnlaget kan gjenskapes i ettertid, slik internkontroll og revisjon forutsetter.",
            },
          ],
        },
        {
          kind: "prose",
          eyebrow: "Aktiv pilot",
          title: "Piloten dokumenterer bruk, innsikt og handling",
          paragraphs: [
            "Vi har en aktiv pilot i finanssektoren. Piloten dokumenterer faktisk bruk, hvilken innsikt som oppstår, hvilke handlinger den utløser og hva som skjer videre.",
            "Pilotkunder omtales aldri ved navn på våre offentlige flater. Referanser deles kun etter avtale, direkte i dialog.",
          ],
        },
        {
          kind: "contact",
          eyebrow: "Neste steg",
          title: "Ta en kartleggingssamtale",
          lead: "Vi starter med hvordan dere følger utviklingen i organisasjonen i dag, ikke med en demo.",
        },
      ],
    },
    hr: {
      meta: {
        title: "QuestPulse for HR og ledelse | Verdi per rolle",
        description:
          "Hva QuestPulse gir HR, ledere, ledelse og styre: bedre oversikt mellom undersøkelsene, støtte til prioritering og et tydeligere beslutningsgrunnlag.",
      },
      hero: {
        eyebrow: "For HR og ledelse",
        title: "Ett felles bilde, tilpasset hver rolle",
        lead: "HR, ledere og styre trenger ulike utsnitt av samme virkelighet. QuestPulse gir hver rolle det den faktisk kan handle på.",
      },
      sections: [
        {
          kind: "roles",
          eyebrow: "Verdi per rolle",
          title: "Samme underlag, ulikt utsnitt",
          lead: "Velg en rolle og se hva den faktisk får tilgang til. Enkeltsvar stopper der de hører hjemme, og hvert nivå får det som kan handles på.",
        },
        {
          kind: "dark",
          eyebrow: "Hva det erstatter",
          title: "Mindre rapportarbeid, mer oppfølging",
          items: [
            {
              title: "Færre ad hoc-uttrekk",
              text: "Bildet er oppdatert når spørsmålet kommer, ikke tre uker etterpå.",
            },
            {
              title: "Færre tiltak i blinde",
              text: "Innsatsen rettes mot årsaken, ikke mot symptomet som var lettest å måle.",
            },
            {
              title: "Mindre dokumentasjonsjobb",
              text: "Kartlegging, tiltak og effekt dokumenteres underveis i stedet for i etterkant.",
            },
          ],
        },
        {
          kind: "contact",
          eyebrow: "Neste steg",
          title: "Hva vil dere ha bedre oversikt over?",
          lead: "Fortell kort hva som er vanskelig i dag, så tar vi en kartleggingssamtale.",
        },
      ],
    },
    pilot: {
      meta: {
        title: "Pilot med QuestPulse | Innhold, omfang og søknad",
        description:
          "En QuestPulse-pilot er et avgrenset, dokumentert løp med tydelige suksesskriterier. Se hva piloten innebærer, hva dere får, og hvordan dere søker.",
      },
      hero: {
        eyebrow: "Pilot",
        title: "Et avgrenset løp med tydelige suksesskriterier",
        lead: "Piloten er ikke en gratis prøveperiode. Den er et strukturert løp der vi sammen dokumenterer bruk, innsikt, handling og effekt.",
      },
      sections: [
        {
          kind: "steps",
          eyebrow: "Slik gjennomføres den",
          title: "Fra kartlegging til beslutningsgrunnlag",
          items: [
            {
              title: "1. Kartlegging og oppsett",
              text: "Vi avklarer omfang, deltakende enheter, suksesskriterier og databehandling. Oppsett i Teams eller Google Workspace, med SSO og avklart tilgangsstyring.",
            },
            {
              title: "2. Gjennomføring",
              text: "Løpende refleksjon og innsikt gjennom pilotperioden, med jevnlige gjennomganger sammen med HR og de involverte lederne.",
            },
            {
              title: "3. Oppsummering",
              text: "Vi leverer et samlet beslutningsgrunnlag: hva som ble observert, hvilke tiltak som ble gjort, hva som virket, og hva videre bruk vil kreve.",
            },
          ],
        },
        {
          kind: "cards",
          eyebrow: "Hva dere får",
          title: "Konkret utbytte av pilotperioden",
          items: [
            {
              title: "Reell innsikt i egen organisasjon",
              text: "Ikke en demo på syntetiske data, men bildet av deres egne enheter i pilotperioden.",
            },
            {
              title: "Dokumentasjon til styre og tilsyn",
              text: "Kartlegging, tiltak og effekt dokumentert underveis, i et format ledelsen kan bruke direkte.",
            },
            {
              title: "Tett oppfølging",
              text: "Dere jobber direkte med teamet bak produktet, og påvirker hva som prioriteres videre.",
            },
          ],
        },
        {
          kind: "prose",
          eyebrow: "Hvordan søke",
          title: "Slik går dere frem",
          paragraphs: [
            "Send en henvendelse merket Pilot i skjemaet under, med noen ord om virksomheten, hvilke enheter som er aktuelle, og hva dere ønsker å få bedre oversikt over.",
            "Vi svarer med en kartleggingssamtale. Passer det for begge parter, setter vi opp pilotavtale med omfang, suksesskriterier og databehandleravtale før oppstart.",
          ],
        },
        {
          kind: "contact",
          eyebrow: "Søk pilot",
          title: "Meld interesse for pilot",
          lead: "Velg Pilot i skjemaet, så tar vi kontakt for en kartleggingssamtale.",
        },
      ],
    },
    contact: {
      meta: {
        title: "Kontakt QuestPulse | Book en kartleggingssamtale",
        description:
          "Ta kontakt med QuestPulse for en kartleggingssamtale om hvordan dere følger utviklingen i organisasjonen i dag. Vi svarer normalt innen én virkedag.",
      },
      hero: {
        eyebrow: "Kontakt",
        title: "Ta en kartleggingssamtale med oss",
        lead: "Fortell kort hva dere ønsker å få bedre oversikt over, så tar vi kontakt. Vi svarer normalt innen én virkedag.",
      },
      sections: [
        {
          kind: "contact",
          eyebrow: "Send henvendelse",
          title: "Skriv noen ord om behovet",
          lead: "Alle henvendelser behandles konfidensielt, og opplysningene brukes kun til å følge opp deg.",
        },
        {
          kind: "cards",
          eyebrow: "Andre henvendelser",
          title: "Hvem du når hvor",
          items: [
            {
              title: "Salg og pilot",
              text: "hei@questpulse.no. Velg Demo eller Pilot i skjemaet for raskest oppfølging.",
            },
            {
              title: "Partnerskap",
              text: "Velg Partnerskap i skjemaet. Vi tar kontakt for en avklaringssamtale.",
            },
            {
              title: "Personvern",
              text: "Spørsmål om behandling av personopplysninger rettes til hei@questpulse.no. Tekniske spørsmål går til support@questpulse.no.",
            },
          ],
        },
      ],
    },
    security: {
      meta: {
        title: "Sikkerhet og personvern i QuestPulse | Data lagret i Norge",
        description:
          "QuestPulse driftes på Azure Norway East, er bygget etter GDPR artikkel 25 og prinsippene i EU AI Act, og leveres med databehandleravtale.",
      },
      hero: {
        eyebrow: "Sikkerhet og personvern",
        title: "Personvern som arkitektur, ikke som vedlegg",
        lead: "Innsikt om mennesker stiller strenge krav. QuestPulse er bygget slik at virksomheten får bildet den trenger, uten at enkeltpersoner blir eksponert.",
      },
      sections: [
        {
          kind: "cards",
          eyebrow: "Grunnprinsippene",
          title: "Slik beskytter vi dataene",
          items: [
            {
              title: "Azure Norway East",
              text: "Data lagres og behandles i Norge, på Microsofts norske region, med kryptering i transitt og i ro.",
            },
            {
              title: "GDPR artikkel 25",
              text: "Innebygd personvern og dataminimering. Vi samler bare det som er nødvendig for formålet.",
            },
            {
              title: "EU AI Act",
              text: "Bygget på prinsippene i regelverket, med åpenhet om hva systemet gjør og menneskelig kontroll over beslutninger.",
            },
            {
              title: "Aggregering og terskler",
              text: "Individuelle svar deles aldri med arbeidsgiver. Innsikt vises først når gruppen er stor nok til å hindre gjenkjenning.",
            },
            {
              title: "SSO og tilgangsstyring",
              text: "Pålogging via virksomhetens egen identitetsleverandør, med rollebasert tilgang og sporbarhet.",
            },
            {
              title: "Databehandleravtale",
              text: "Standard databehandleravtale etter GDPR artikkel 28, med oversikt over underleverandører og lagringstid.",
            },
          ],
        },
        {
          kind: "dark",
          eyebrow: "Ansvarsdeling",
          title: "Hvem har ansvar for hva",
          items: [
            {
              title: "Virksomheten er behandlingsansvarlig",
              text: "Dere bestemmer formål og omfang, og hvilke enheter som deltar.",
            },
            {
              title: "QuestPulse er databehandler",
              text: "Vi behandler opplysninger kun etter instruks fra virksomheten, regulert i databehandleravtalen.",
            },
            {
              title: "Den ansatte har innsyn",
              text: "Ansatte får informasjon om hva som samles inn, og kan utøve sine rettigheter etter GDPR.",
            },
          ],
        },
        {
          kind: "contact",
          eyebrow: "Dokumentasjon",
          title: "Be om databehandleravtale og sikkerhetsdokumentasjon",
          lead: "Skriv i meldingsfeltet hvilken dokumentasjon dere trenger, så sender vi den over.",
        },
      ],
    },
    partners: {
      meta: {
        title: "Partnere | Samarbeid med QuestPulse",
        description:
          "QuestPulse samarbeider med rådgivere, HR-miljøer og teknologipartnere som jobber tett på ledelse og arbeidsmiljø i norske virksomheter.",
      },
      hero: {
        eyebrow: "Partnere",
        title: "Vi bygger sammen med dem som står nærmest kunden",
        lead: "Rådgivere, bedriftshelsetjenester, HR-miljøer og teknologipartnere gir QuestPulse rekkevidde, og kundene et bedre helhetlig løp.",
      },
      sections: [
        {
          kind: "cards",
          eyebrow: "Partnermodellen",
          title: "Tre måter å samarbeide på",
          items: [
            {
              title: "Rådgivningspartner",
              text: "Du bruker QuestPulse som innsiktsgrunnlag i eget arbeid med ledelse, arbeidsmiljø og omstilling hos kunden.",
            },
            {
              title: "Gjenselgende partner",
              text: "Du tar med QuestPulse i egen portefølje, med opplæring, salgsstøtte og avtalt fordeling.",
            },
            {
              title: "Teknologipartner",
              text: "Integrasjon mot HR-systemer, samarbeidsverktøy eller identitetsplattformer, med tydelige grensesnitt.",
            },
          ],
        },
        {
          kind: "dark",
          eyebrow: "Hva vi ser etter",
          title: "Partnere med reell nærhet til ledelsen",
          items: [
            {
              title: "Fagtyngde",
              text: "Erfaring fra arbeidsmiljø, ledelse eller HMS, ikke bare formidling.",
            },
            {
              title: "Ryddighet",
              text: "Klare rammer for personvern og konfidensialitet i egen praksis.",
            },
            {
              title: "Langsiktighet",
              text: "Vilje til å bygge over tid, sammen med et produkt som fortsatt utvikles tett på kundene.",
            },
          ],
        },
        {
          kind: "contact",
          eyebrow: "Ta kontakt",
          title: "Meld interesse som partner",
          lead: "Velg Partnerskap i skjemaet og skriv kort om hvem dere jobber med i dag.",
        },
      ],
    },
  },
  en: {
    about: {
      meta: {
        title: "About QuestPulse | People Intelligence by Digital Coach Hub",
        description:
          "QuestPulse is built by Digital Coach Hub AS. Read about who we are, our background, and our vision of employers seeing organisational change in time.",
      },
      hero: {
        eyebrow: "About us",
        title: "We build the insight leadership is missing about its own organisation",
        lead: "QuestPulse is built by Digital Coach Hub AS. We combine experience from leadership, HR development and technology to make organisational risk as visible as financial risk.",
      },
      sections: [
        {
          kind: "prose",
          eyebrow: "Background",
          title: "From coaching and leadership development to continuous insight",
          paragraphs: [
            "Digital Coach Hub has worked closely with leaders and HR teams in Nordic organisations. The pattern repeated itself: the challenges were known long before they were measured, but no system captured the signals early enough for anyone to act.",
            "QuestPulse is the answer to that. Instead of another annual survey, we give the organisation a continuous picture of what is developing, inside the tools people already use.",
          ],
        },
        {
          kind: "cards",
          eyebrow: "The team",
          title: "A small team with deep subject-matter experience",
          lead: "We build the product close to pilot customers, with advisors in privacy, security and working environment.",
          items: [
            {
              title: "Leadership and business",
              text: "Linda Karlsen leads the company, with a background in coaching, leadership development and organisational work in Nordic companies.",
            },
            {
              title: "Product and technology",
              text: "Development happens with technology advisors, with security and privacy as a premise from the first line of code.",
            },
            {
              title: "Advisory",
              text: "Working environment, HSE and privacy are quality-assured by external specialists, so the product holds up before regulators and boards.",
            },
          ],
        },
        {
          kind: "dark",
          eyebrow: "Vision",
          title: "No leadership team should discover the problem too late",
          items: [
            {
              title: "Insight in time",
              text: "Signals should be visible while there is still room to act, not once the resignation has been handed in.",
            },
            {
              title: "Safety for the employee",
              text: "Insight must never come at the cost of privacy. Individual answers are never shared.",
            },
            {
              title: "Documented effect",
              text: "The organisation should be able to show what it did, why, and what actually worked.",
            },
          ],
        },
        {
          kind: "contact",
          eyebrow: "Get in touch",
          title: "Want to know more about us?",
          lead: "Send us a few words about what you are wondering, and we will get back to you.",
        },
      ],
    },
    how: {
      meta: {
        title: "How QuestPulse works | Insight, prioritisation and effect",
        description:
          "QuestPulse connects continuous insight, clear prioritisation and documented effect in one flow, inside the tools your organisation already uses.",
      },
      hero: {
        eyebrow: "How it works",
        title: "Insight, prioritisation and effect in one flow",
        lead: "Three connected steps: we capture signals continuously, turn them into priorities HR and leaders can act on, and follow the development after actions are taken.",
      },
      sections: [
        {
          kind: "steps",
          eyebrow: "The three-step model",
          title: "From signal to documented effect",
          visual: "flow",
          items: [
            {
              title: "1. Continuous insight",
              text: "Employees get a private space for reflection in Teams or Google Workspace, and value back in their own development. The organisation gets a continuous picture of workload, friction and ways of working, aggregated so individual answers can never be traced.",
            },
            {
              title: "2. Clear prioritisation",
              text: "Signals form a picture HR and leaders can act on: which teams need support now, what is cause and what is symptom, and where effort pays off most. Leaders get concrete suggestions, not just numbers.",
            },
            {
              title: "3. Documented effect",
              text: "After actions are taken, development is tracked further. Leadership sees whether the action landed, and mapping, actions and effect are documented together, ready for the board and regulators.",
            },
          ],
        },
        {
          kind: "cards",
          eyebrow: "In practice",
          title: "What it looks like day to day",
          items: [
            {
              title: "No new system to learn",
              text: "QuestPulse lives in the tools people already use. No separate portal, no extra login.",
            },
            {
              title: "Short, regular touchpoints",
              text: "Reflection takes minutes, not hours, and happens regularly through the year instead of once a year.",
            },
            {
              title: "Role-adapted insight",
              text: "Leaders, HR and executives each see their level of the picture, with thresholds that protect small teams from identification.",
            },
          ],
        },
        {
          kind: "contact",
          eyebrow: "Next step",
          title: "See it on your own data",
          lead: "We always start with a discovery call about how you follow organisational development today.",
        },
      ],
    },
    banking: {
      meta: {
        title: "QuestPulse for banking and finance | Compliance and control",
        description:
          "Banking and finance is our first proof market: continuous control of the psychosocial working environment, documentation for boards and regulators, and an active pilot.",
      },
      hero: {
        eyebrow: "For banking and finance",
        title: "We prove the model where requirements are highest",
        lead: "Banking and finance have mature HR functions, high security awareness and real demands for documented control. That is why we start here.",
      },
      sections: [
        {
          kind: "cards",
          eyebrow: "The compliance entry point",
          title: "The conversation starts in a duty you already have",
          lead: "Norwegian working environment law requires risk-based, continuous control of the psychosocial working environment. QuestPulse makes that duty easier to meet and to document.",
          items: [
            {
              title: "Continuous control",
              text: "Risk-based follow-up through the whole year, not only at the annual survey.",
            },
            {
              title: "Systematic HSE work",
              text: "Preventive work put into system, with clear ownership and follow-up at every level.",
            },
            {
              title: "Documentation that holds",
              text: "Mapping, actions and effect in one place, ready for leadership, board and regulators.",
            },
          ],
        },
        {
          kind: "dark",
          eyebrow: "Sector requirements",
          title: "Built for a sector with little room for error",
          items: [
            {
              title: "Data in Norway",
              text: "Operated on Azure Norway East, with a data processing agreement and clear division of responsibility.",
            },
            {
              title: "Controlled access",
              text: "SSO against your existing identity provider, with role-based access to the insight.",
            },
            {
              title: "Privacy by architecture",
              text: "GDPR article 25 and the principles of the EU AI Act are built into the design, not added afterwards.",
            },
            {
              title: "Traceability",
              text: "The basis for decisions can be reconstructed later, as internal control and audit require.",
            },
          ],
        },
        {
          kind: "prose",
          eyebrow: "Active pilot",
          title: "The pilot documents use, insight and action",
          paragraphs: [
            "We have an active pilot in the financial sector. It documents actual usage, the insight that emerges, the actions it triggers and what happens next.",
            "Pilot customers are never named on our public surfaces. References are shared only by agreement, directly in dialogue.",
          ],
        },
        {
          kind: "contact",
          eyebrow: "Next step",
          title: "Book a discovery call",
          lead: "We start with how you follow organisational development today, not with a demo.",
        },
      ],
    },
    hr: {
      meta: {
        title: "QuestPulse for HR and leadership | Value per role",
        description:
          "What QuestPulse gives HR, leaders, executives and boards: better overview between surveys, support for prioritisation and a clearer basis for decisions.",
      },
      hero: {
        eyebrow: "For HR and leadership",
        title: "One shared picture, adapted to each role",
        lead: "HR, leaders and boards need different views of the same reality. QuestPulse gives each role what it can actually act on.",
      },
      sections: [
        {
          kind: "roles",
          eyebrow: "Value per role",
          title: "One shared basis, different views",
          lead: "Pick a role and see what it actually gets access to. Individual answers stop where they belong, and each level gets what it can act on.",
        },
        {
          kind: "dark",
          eyebrow: "What it replaces",
          title: "Less reporting work, more follow-up",
          items: [
            {
              title: "Fewer ad hoc extracts",
              text: "The picture is current when the question comes, not three weeks later.",
            },
            {
              title: "Fewer blind actions",
              text: "Effort targets the cause, not the symptom that was easiest to measure.",
            },
            {
              title: "Less documentation work",
              text: "Mapping, actions and effect are documented along the way instead of afterwards.",
            },
          ],
        },
        {
          kind: "contact",
          eyebrow: "Next step",
          title: "What do you need a better overview of?",
          lead: "Tell us briefly what is hard today, and we will set up a discovery call.",
        },
      ],
    },
    pilot: {
      meta: {
        title: "Pilot with QuestPulse | Scope, outcome and how to apply",
        description:
          "A QuestPulse pilot is a scoped, documented programme with clear success criteria. See what it involves, what you get, and how to apply.",
      },
      hero: {
        eyebrow: "Pilot",
        title: "A scoped programme with clear success criteria",
        lead: "The pilot is not a free trial. It is a structured programme where we jointly document use, insight, action and effect.",
      },
      sections: [
        {
          kind: "steps",
          eyebrow: "How it runs",
          title: "From mapping to a basis for decisions",
          items: [
            {
              title: "1. Mapping and setup",
              text: "We agree scope, participating units, success criteria and data processing. Setup in Teams or Google Workspace, with SSO and defined access control.",
            },
            {
              title: "2. Execution",
              text: "Continuous reflection and insight through the pilot period, with regular reviews together with HR and the leaders involved.",
            },
            {
              title: "3. Summary",
              text: "We deliver a complete basis for decisions: what was observed, which actions were taken, what worked, and what continued use would require.",
            },
          ],
        },
        {
          kind: "cards",
          eyebrow: "What you get",
          title: "Concrete outcomes of the pilot",
          items: [
            {
              title: "Real insight into your organisation",
              text: "Not a demo on synthetic data, but the picture of your own units during the pilot period.",
            },
            {
              title: "Documentation for board and regulators",
              text: "Mapping, actions and effect documented along the way, in a format leadership can use directly.",
            },
            {
              title: "Close follow-up",
              text: "You work directly with the team behind the product and influence what gets prioritised next.",
            },
          ],
        },
        {
          kind: "prose",
          eyebrow: "How to apply",
          title: "Here is how to proceed",
          paragraphs: [
            "Send an enquiry marked Pilot in the form below, with a few words about your organisation, which units are relevant, and what you want a better overview of.",
            "We respond with a discovery call. If it fits both parties, we set up a pilot agreement covering scope, success criteria and data processing before we start.",
          ],
        },
        {
          kind: "contact",
          eyebrow: "Apply for a pilot",
          title: "Register your interest",
          lead: "Choose Pilot in the form and we will get in touch for a discovery call.",
        },
      ],
    },
    contact: {
      meta: {
        title: "Contact QuestPulse | Book a discovery call",
        description:
          "Get in touch with QuestPulse for a discovery call about how you follow organisational development today. We usually reply within one working day.",
      },
      hero: {
        eyebrow: "Contact",
        title: "Book a discovery call with us",
        lead: "Tell us briefly what you want a better overview of, and we will get in touch. We usually reply within one working day.",
      },
      sections: [
        {
          kind: "contact",
          eyebrow: "Send an enquiry",
          title: "Write a few words about the need",
          lead: "All enquiries are treated confidentially, and your details are used only to follow up with you.",
        },
        {
          kind: "cards",
          eyebrow: "Other enquiries",
          title: "Who to reach where",
          items: [
            {
              title: "Sales and pilot",
              text: "hei@questpulse.no. Choose Demo or Pilot in the form for the fastest response.",
            },
            {
              title: "Partnerships",
              text: "Choose Partnership in the form. We will get in touch for an initial conversation.",
            },
            {
              title: "Privacy",
              text: "Questions about processing of personal data go to hei@questpulse.no. Technical questions go to support@questpulse.no.",
            },
          ],
        },
      ],
    },
    security: {
      meta: {
        title: "Security and privacy in QuestPulse | Data stored in Norway",
        description:
          "QuestPulse runs on Azure Norway East, is built to GDPR article 25 and the principles of the EU AI Act, and ships with a data processing agreement.",
      },
      hero: {
        eyebrow: "Security and privacy",
        title: "Privacy as architecture, not as an appendix",
        lead: "Insight about people demands strict safeguards. QuestPulse is built so the organisation gets the picture it needs without exposing individuals.",
      },
      sections: [
        {
          kind: "cards",
          eyebrow: "Core principles",
          title: "How we protect the data",
          items: [
            {
              title: "Azure Norway East",
              text: "Data is stored and processed in Norway, on Microsoft's Norwegian region, encrypted in transit and at rest.",
            },
            {
              title: "GDPR article 25",
              text: "Privacy by design and data minimisation. We collect only what the purpose requires.",
            },
            {
              title: "EU AI Act",
              text: "Built on the principles of the regulation, with transparency about what the system does and human control over decisions.",
            },
            {
              title: "Aggregation and thresholds",
              text: "Individual answers are never shared with the employer. Insight appears only when the group is large enough to prevent identification.",
            },
            {
              title: "SSO and access control",
              text: "Login through your own identity provider, with role-based access and traceability.",
            },
            {
              title: "Data processing agreement",
              text: "Standard data processing agreement under GDPR article 28, with an overview of sub-processors and retention.",
            },
          ],
        },
        {
          kind: "dark",
          eyebrow: "Responsibilities",
          title: "Who is responsible for what",
          items: [
            {
              title: "You are the data controller",
              text: "You decide purpose and scope, and which units take part.",
            },
            {
              title: "QuestPulse is the processor",
              text: "We process data only on your instruction, governed by the data processing agreement.",
            },
            {
              title: "Employees have transparency",
              text: "Employees are informed about what is collected and can exercise their GDPR rights.",
            },
          ],
        },
        {
          kind: "contact",
          eyebrow: "Documentation",
          title: "Request the DPA and security documentation",
          lead: "Note in the message field which documentation you need, and we will send it over.",
        },
      ],
    },
    partners: {
      meta: {
        title: "Partners | Working with QuestPulse",
        description:
          "QuestPulse works with advisors, HR communities and technology partners close to leadership and working environment in Nordic organisations.",
      },
      hero: {
        eyebrow: "Partners",
        title: "We build with those closest to the customer",
        lead: "Advisors, occupational health services, HR communities and technology partners give QuestPulse reach, and customers a better end-to-end journey.",
      },
      sections: [
        {
          kind: "cards",
          eyebrow: "The partner model",
          title: "Three ways to work together",
          items: [
            {
              title: "Advisory partner",
              text: "You use QuestPulse as the insight base in your own work on leadership, working environment and change.",
            },
            {
              title: "Reselling partner",
              text: "You bring QuestPulse into your own portfolio, with training, sales support and an agreed split.",
            },
            {
              title: "Technology partner",
              text: "Integration with HR systems, collaboration tools or identity platforms, with clear interfaces.",
            },
          ],
        },
        {
          kind: "dark",
          eyebrow: "What we look for",
          title: "Partners with real proximity to leadership",
          items: [
            {
              title: "Subject depth",
              text: "Experience from working environment, leadership or HSE, not only delivery.",
            },
            {
              title: "Rigour",
              text: "Clear frameworks for privacy and confidentiality in your own practice.",
            },
            {
              title: "Long-term view",
              text: "Willingness to build over time, together with a product still evolving close to its customers.",
            },
          ],
        },
        {
          kind: "contact",
          eyebrow: "Get in touch",
          title: "Register partner interest",
          lead: "Choose Partnership in the form and tell us briefly who you work with today.",
        },
      ],
    },
  },
};
