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
  | "usecases"
  | "banking"
  | "hr"
  | "enterprise"
  | "contact"
  | "security"
  | "partners";

export const pagePaths = {
  about: { no: "/om-selskapet", en: "/en/about" },
  how: { no: "/slik-fungerer-det", en: "/en/how-it-works" },
  usecases: { no: "/bruksomrader", en: "/en/use-cases" },
  banking: { no: "/for-bank-og-finans", en: "/en/banking-and-finance" },
  hr: { no: "/for-hr-og-ledelse", en: "/en/hr-and-leadership" },
  enterprise: { no: "/enterprise-evaluering", en: "/en/enterprise-evaluation" },
  contact: { no: "/kontakt", en: "/en/contact" },
  security: { no: "/sikkerhet-og-personvern", en: "/en/security-and-privacy" },
  partners: { no: "/partnere", en: "/en/partners" },
} as const;

export const navKeys: PageKey[] = ["how", "usecases", "banking", "hr", "security", "about"];
export const footerKeys: PageKey[] = [
  "how",
  "usecases",
  "banking",
  "hr",
  "enterprise",
  "security",
  "partners",
  "about",
  "contact",
];

export const navLabels: Record<Locale, Record<PageKey, string>> = {
  no: {
    about: "Selskapet",
    how: "Plattformen",
    usecases: "Bruksområder",
    banking: "Finans",
    hr: "Innsikt",
    enterprise: "Enterprise-evaluering",
    contact: "Kontakt",
    security: "Trust Center",
    partners: "Partnere",
  },
  en: {
    about: "Company",
    how: "Platform",
    usecases: "Use cases",
    banking: "Finance",
    hr: "Insight",
    enterprise: "Enterprise evaluation",
    contact: "Contact",
    security: "Trust Center",
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
          title: "Hvem som står bak QuestPulse",
          items: [
            {
              title: "Linda Karlsen, CEO og gründer",
              text: "Rundt 20 års erfaring fra salg, ledelse og forretningsutvikling.",
            },
            {
              title: "Thomas Ryste, COO",
              text: "Ansvar for drift, økonomi og kommersielle avtaler.",
            },
            {
              title: "Eivind Teig, CTO",
              text: "Ansvar for produkt, sikkerhet, datamodeller og personvernarkitektur.",
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
        eyebrow: "Bank og finans",
        title: "Organisatorisk risiko kan ikke styres på årlige øyeblikksbilder",
        lead: "QuestPulse gir HR, ledelse og kontrollfunksjoner et mer løpende beslutningsgrunnlag for arbeidsmiljø, omstilling og lederoppfølging.",
      },
      sections: [
        {
          kind: "cards",
          eyebrow: "Regelverk",
          title: "Fra periodisk kartlegging til mer løpende risikoforståelse",
          lead: "Regelverket stiller krav til systematisk kartlegging, risikovurdering, tiltak og oppfølging av det psykososiale arbeidsmiljøet. QuestPulse gir virksomheten et mer løpende og strukturert beslutningsgrunnlag for dette arbeidet.",
          items: [
            {
              title: "Løpende oppfølging",
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
        title: "Trust Center | Sikkerhet, personvern og kontroll i QuestPulse",
        description:
          "Slik håndterer QuestPulse sikkerhetsarkitektur, dataflyt og datalokasjon, tilgangsstyring, aggregering, oppbevaring, underleverandører, hendelser og personvern.",
      },
      hero: {
        eyebrow: "Trust Center",
        title: "Sikkerhet og personvern dokumentert, ikke påstått",
        lead: "Innsikt om mennesker stiller strenge krav. Denne siden beskriver hvordan QuestPulse er bygget, driftet og styrt, og hvor ansvaret ligger.",
      },
      sections: [
        {
          kind: "register",
          eyebrow: "Dokumentasjon",
          title: "Sikkerhet og personvern i QuestPulse",
          items: [
            {
              title: "Sikkerhetsarkitektur",
              text: "Adskilte miljøer, minste nødvendige rettigheter mellom komponenter, kryptering i transitt og i ro, og logging av administrative operasjoner.",
            },
            {
              title: "Dataflyt og datalokasjon",
              text: "Data lagres og behandles innenfor EØS, på Azure Norway East. Dataflyten fra innsamling til aggregert innsikt er dokumentert per miljø.",
            },
            {
              title: "Tilgangsstyring",
              text: "Pålogging via virksomhetens egen identitetsleverandør med SSO. Tilgang er rollebasert, gis per organisatorisk område og logges.",
            },
            {
              title: "Aggregering og beskyttelse av individet",
              text: "Individuelle svar deles aldri med arbeidsgiver. Innsikt vises først når gruppen er stor nok til å hindre gjenkjenning.",
            },
            {
              title: "Oppbevaring og sletting",
              text: "Lagringstid settes per datakategori og avtales i databehandleravtalen. Data slettes eller returneres ved avslutning.",
            },
            {
              title: "Underleverandører",
              text: "Oppdatert oversikt over underleverandører, formål og lokasjon følger som vedlegg til databehandleravtalen.",
            },
            {
              title: "Hendelseshåndtering",
              text: "Definerte rutiner for deteksjon, klassifisering, varsling og oppfølging, med avtalte varslingsfrister mot behandlingsansvarlig.",
            },
            {
              title: "Kontinuitet og gjenoppretting",
              text: "Sikkerhetskopiering, gjenopprettingsrutiner og definerte gjenopprettingsmål, beskrevet i driftsdokumentasjonen.",
            },
            {
              title: "Personvern",
              text: "Bygget etter GDPR artikkel 25 med dataminimering. Virksomheten er behandlingsansvarlig, QuestPulse er databehandler etter artikkel 28.",
            },
            {
              title: "Modellstyring og menneskelig kontroll",
              text: "Automatisert analyse brukes til å prioritere og oppsummere, aldri til å treffe beslutninger om enkeltpersoner. Output er forklarbar og kan overstyres av en person.",
            },
            {
              title: "Avtaler og dokumentasjon",
              text: "Databehandleravtale, underleverandørvedlegg og sikkerhetsdokumentasjon deles på forespørsel som del av en anskaffelses- eller evalueringsprosess.",
            },
            {
              title: "Kontaktpunkt for sikkerhet",
              text: "Sikkerhetshenvendelser, sårbarhetsvarsler og forespørsel om dokumentasjon sendes til support@questpulse.no.",
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
    usecases: {
      meta: {
        title: "Bruksområder | QuestPulse People Intelligence",
        description:
          "Fire områder der QuestPulse forbedrer beslutningen: omstilling og endring, ledelseskapasitet, belastning og friksjon, og psykososial risiko.",
      },
      hero: {
        eyebrow: "Bruksområder",
        title: "Fire beslutninger som i dag tas for sent",
        lead: "QuestPulse brukes der konsekvensene er dyre og signalene kommer sent. Hvert område under beskriver hvilken beslutning innsikten forbedrer.",
      },
      sections: [
        {
          kind: "register",
          eyebrow: "Områder",
          title: "Der innsikten endrer beslutningen",
          items: [
            {
              title: "Omstilling og endring",
              text: "Hvilke enheter bærer endringen godt, og hvor svikter kapasiteten før leveransen gjør det. Beslutningen som forbedres er rekkefølge og tempo i omstillingen.",
            },
            {
              title: "Ledelseskapasitet",
              text: "Hvilke ledere har for stort kontrollspenn, og hvor er oppfølgingen tynn. Beslutningen som forbedres er hvor lederstøtte settes inn før turnover oppstår.",
            },
            {
              title: "Belastning og friksjon",
              text: "Hvor belastningen er vedvarende, og hvor friksjonen skyldes arbeidsform framfor personer. Beslutningen som forbedres er prioritering av ressurser og fjerning av hindre.",
            },
            {
              title: "Psykososial risiko og arbeidsmiljø",
              text: "Hvor risiko bygger seg opp mellom kartleggingene. Beslutningen som forbedres er hvilke tiltak som iverksettes, dokumenteres og følges opp mot styre og tilsyn.",
            },
          ],
        },
        {
          kind: "contact",
          eyebrow: "Neste steg",
          title: "Hvilken beslutning er vanskeligst hos dere i dag?",
          lead: "Skriv kort hva det gjelder, så setter vi opp en strategisk gjennomgang.",
        },
      ],
    },
    enterprise: {
      meta: {
        title: "Enterprise-evaluering | QuestPulse",
        description:
          "Evaluer QuestPulse i en avgrenset del av organisasjonen, med tydelige beslutningskriterier, avklart personvern og en dokumentert konklusjon.",
      },
      hero: {
        eyebrow: "Enterprise-evaluering",
        title: "Evaluer QuestPulse i en kontrollert del av organisasjonen",
        lead: "En strukturert evaluering med avgrenset omfang, avtalte beslutningskriterier og en dokumentert konklusjon.",
      },
      sections: [
        {
          kind: "register",
          eyebrow: "Struktur",
          title: "Hva evalueringen omfatter",
          items: [
            {
              title: "Avgrenset problem og mål",
              text: "Vi avklarer hvilken beslutning som skal forbedres, og hva et bedre beslutningsgrunnlag konkret betyr for dere.",
            },
            {
              title: "Definert organisatorisk område",
              text: "En avgrenset del av organisasjonen, med enheter, ledere og roller definert før oppstart.",
            },
            {
              title: "Personvern og sikkerhetsavklaring",
              text: "Databehandleravtale, datalokasjon, tilgangsstyring og terskler for aggregering avklares før oppstart.",
            },
            {
              title: "Implementeringsplan",
              text: "Oppsett, kommunikasjon, ansvar og milepæler, med tydelig anslag for egen innsats i organisasjonen.",
            },
            {
              title: "Målbare beslutningskriterier",
              text: "Hva som må være oppfylt for at evalueringen skal regnes som vellykket, avtalt skriftlig før oppstart.",
            },
            {
              title: "Evaluering og beslutning",
              text: "En felles gjennomgang av hva som ble observert, hva som ble handlet på, og hva videre bruk vil kreve.",
            },
          ],
        },
        {
          kind: "contact",
          eyebrow: "Neste steg",
          title: "Diskuter en enterprise-evaluering",
          lead: "Skriv hvilken del av organisasjonen som er aktuell, så tar vi kontakt.",
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
          title: "Who is behind QuestPulse",
          items: [
            {
              title: "Linda Karlsen, CEO and founder",
              text: "Around 20 years of experience from sales, leadership and business development.",
            },
            {
              title: "Thomas Ryste, COO",
              text: "Responsible for operations, finance and commercial agreements.",
            },
            {
              title: "Eivind Teig, CTO",
              text: "Responsible for product, security, data models and privacy architecture.",
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
        eyebrow: "Banking and finance",
        title: "Organisational risk cannot be managed on annual snapshots",
        lead: "QuestPulse gives HR, leadership and control functions a more continuous basis for decisions on working environment, change and leadership follow-up.",
      },
      sections: [
        {
          kind: "cards",
          eyebrow: "Regulatory context",
          title: "From periodic mapping to a more continuous understanding of risk",
          lead: "Regulation requires systematic mapping, risk assessment, measures and follow-up of the psychosocial working environment. QuestPulse gives the organisation a more continuous and structured basis for that work.",
          items: [
            {
              title: "Continuous follow-up",
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
        title: "Trust Center | QuestPulse security, privacy and control",
        description:
          "How QuestPulse handles security architecture, data location, access control, aggregation, retention, sub-processors, incidents, privacy and model governance.",
      },
      hero: {
        eyebrow: "Trust Center",
        title: "Security and privacy documented, not asserted",
        lead: "Insight about people demands strict safeguards. This page describes how QuestPulse is built, operated and governed, and where responsibility sits.",
      },
      sections: [
        {
          kind: "register",
          eyebrow: "Documentation",
          title: "Security and privacy in QuestPulse",
          items: [
            {
              title: "Security architecture",
              text: "Separated environments, least privilege between components, encryption in transit and at rest, and logging of administrative operations.",
            },
            {
              title: "Data flow and data location",
              text: "Data is stored and processed within the EEA, on Azure Norway East. Data flow from collection to aggregated insight is documented per environment.",
            },
            {
              title: "Access control",
              text: "Login through your own identity provider using SSO. Access is role based, granted per organisational area and logged.",
            },
            {
              title: "Aggregation and protection of the individual",
              text: "Individual answers are never shared with the employer. Insight appears only when the group is large enough to prevent identification.",
            },
            {
              title: "Retention and deletion",
              text: "Retention is set per data category and agreed in the data processing agreement. Data is deleted or returned on termination.",
            },
            {
              title: "Sub-processors",
              text: "A current list of sub-processors, their purpose and location is provided as an annex to the data processing agreement.",
            },
            {
              title: "Incident handling",
              text: "Defined routines for detection, classification, notification and follow-up, with agreed notification deadlines towards the controller.",
            },
            {
              title: "Continuity and recovery",
              text: "Backup, recovery routines and defined recovery objectives, described in the operational documentation.",
            },
            {
              title: "Privacy",
              text: "Built to GDPR article 25 with data minimisation. You are the controller, QuestPulse is the processor under an article 28 agreement.",
            },
            {
              title: "Model governance and human control",
              text: "Automated analysis is used to prioritise and summarise, never to make decisions about individuals. Output is explainable and can be overridden by a person.",
            },
            {
              title: "Agreements and documentation",
              text: "Data processing agreement, sub-processor annex and security documentation are shared on request as part of a procurement or evaluation process.",
            },
            {
              title: "Security contact point",
              text: "Security enquiries, vulnerability reports and documentation requests go to support@questpulse.no.",
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
    usecases: {
      meta: {
        title: "Use cases | QuestPulse People Intelligence",
        description:
          "Four areas where QuestPulse improves the decision: change programmes, leadership capacity, workload and friction, and psychosocial risk.",
      },
      hero: {
        eyebrow: "Use cases",
        title: "Four decisions that are made too late today",
        lead: "QuestPulse is used where consequences are expensive and signals arrive late. Each area below describes the decision the insight improves.",
      },
      sections: [
        {
          kind: "register",
          eyebrow: "Areas",
          title: "Where the insight changes the decision",
          items: [
            {
              title: "Change and restructuring",
              text: "Which units carry the change well, and where capacity breaks down before delivery does. The decision improved is sequencing and pace of the change programme.",
            },
            {
              title: "Leadership capacity",
              text: "Which leaders carry too wide a span of control, and where follow-up is thin. The decision improved is where to add leadership support before turnover appears.",
            },
            {
              title: "Workload and friction",
              text: "Where workload is sustained, and where friction stems from ways of working rather than people. The decision improved is prioritising resources and removing obstacles.",
            },
            {
              title: "Psychosocial risk and working environment",
              text: "Where risk builds up between mappings. The decision improved is which measures to act on, document and follow up towards the board and regulators.",
            },
          ],
        },
        {
          kind: "contact",
          eyebrow: "Next step",
          title: "Which decision is hardest for you today?",
          lead: "Tell us briefly, and we will set up a strategic review.",
        },
      ],
    },
    enterprise: {
      meta: {
        title: "Enterprise evaluation | QuestPulse",
        description:
          "Evaluate QuestPulse in a defined part of the organisation, with clear decision criteria, a privacy and security review and a documented conclusion.",
      },
      hero: {
        eyebrow: "Enterprise evaluation",
        title: "Evaluate QuestPulse in a controlled part of the organisation",
        lead: "A structured evaluation with a defined scope, agreed decision criteria and a documented conclusion.",
      },
      sections: [
        {
          kind: "register",
          eyebrow: "Structure",
          title: "What the evaluation covers",
          items: [
            {
              title: "Defined problem and objective",
              text: "We agree which decision is to be improved, and what a better basis for it looks like.",
            },
            {
              title: "Defined organisational area",
              text: "A delimited part of the organisation, with the units, leaders and roles involved specified up front.",
            },
            {
              title: "Privacy and security review",
              text: "Data processing agreement, data location, access control and aggregation thresholds agreed before start.",
            },
            {
              title: "Implementation plan",
              text: "Setup, communication, responsibilities and milestones, with a defined effort for your own organisation.",
            },
            {
              title: "Measurable decision criteria",
              text: "What must be true for the evaluation to be considered successful, agreed in writing before start.",
            },
            {
              title: "Evaluation and decision",
              text: "A joint review of what was observed, what was acted on, and what wider use would require.",
            },
          ],
        },
        {
          kind: "contact",
          eyebrow: "Next step",
          title: "Discuss an enterprise evaluation",
          lead: "Tell us which part of the organisation is relevant, and we will get in touch.",
        },
      ],
    },

  },
};
