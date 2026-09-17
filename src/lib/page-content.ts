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
  | { kind: "contact"; eyebrow?: string; title: string; lead?: string; form?: "direct" }
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
        title: "Om QuestPulse | People Intelligence-infrastruktur",
        description:
          "QuestPulse kobler lederhandling til organisatorisk effekt over tid, slik at HR og ledelsen ser hva som utvikler seg mens det fortsatt er tid til å handle.",
      },
      hero: {
        eyebrow: "Om selskapet",
        title: "People Intelligence-infrastruktur for beslutninger som virker",
        lead: "QuestPulse er People Intelligence-infrastruktur. Vi kobler lederhandling til organisatorisk effekt over tid, og gir HR og ledelsen løpende innsikt i hva som faktisk utvikler seg i organisasjonen, mens det fortsatt er tid til å handle.",
      },
      sections: [
        {
          kind: "prose",
          eyebrow: "Utgangspunktet",
          title: "Et hull i måten virksomheter styres på",
          paragraphs: [
            "Innsikten kommer for sent. Tradisjonelle undersøkelser gir øyeblikksbilder, og mellom målepunktene skjer det som betyr mest: belastning bygger seg opp, friksjon setter seg i team, oppfølging glipper, og gode mønstre forsvinner uten at noen forstår hvorfor de virket.",
            "Ledelsen ser konsekvensene i sykefravær, stille oppsigelser og lederslitasje, lenge etter at signalene var der.",
          ],
        },
        {
          kind: "cards",
          eyebrow: "Hva vi gjør",
          title: "Fra tidlige signaler til dokumentert effekt",
          items: [
            {
              title: "Signalene blir synlige tidligere",
              text: "QuestPulse løfter fram både utfordringer og det som fungerer, mens ledelsen fortsatt har handlingsrom.",
            },
            {
              title: "Ledere får grunnlag for oppfølging",
              text: "Løsningen gir ledere et konkret grunnlag for handling og hjelper HR å prioritere innsatsen der den betyr mest.",
            },
            {
              title: "Effekt følges over tid",
              text: "Der andre stopper ved å lytte, går vi videre til kausalitet: hva ble gjort, hva skjedde etterpå, og hva bør forsterkes.",
            },
          ],
        },
        {
          kind: "dark",
          eyebrow: "Personvern og etterlevelse",
          title: "Personvern er arkitektur, ikke en policy",
          items: [
            {
              title: "Verdi for ansatte",
              text: "Ansatte bruker QuestPulse fordi det hjelper dem, ikke fordi de blir målt. Det er grunnen til at dataene er ekte.",
            },
            {
              title: "Tåler kontroll",
              text: "Løsningen er bygget for å tåle tillitsvalgte, revisjon og regulatorisk kontroll.",
            },
            {
              title: "Dokumentert plikt",
              text: "Arbeidsmiljøloven krever risikobasert og løpende kontroll av det psykososiale arbeidsmiljøet, med dokumentasjon på kartlegging, tiltak og effekt.",
            },
          ],
        },
        {
          kind: "prose",
          eyebrow: "Marked og kjøpere",
          title: "Bygget i norsk arbeidsliv først",
          paragraphs: [
            "Vi bygger i norsk arbeidsliv først, med kunnskapsintensive virksomheter i bank, finans, rådgivning og industri som første marked. Korte beslutningsveier, høye krav til etterlevelse og sterk referanseverdi inn i Norden.",
            "Kjøperne er CEO og toppledelse som trenger tidlig varsling og bedre beslutningsgrunnlag, HR- og People-ledere som trenger oversikt og prioritering, og ledere som trenger å vite hva de skal gjøre på mandag.",
          ],
        },
        {
          kind: "cards",
          eyebrow: "Avgrensning",
          title: "Hva QuestPulse ikke er",
          items: [
            {
              title: "Ikke en medarbeiderundersøkelse",
              text: "QuestPulse er ikke pulsmåling, ikke en velværeapp og ikke et generelt HR-system.",
            },
            {
              title: "Ikke en digital veileder",
              text: "Vi erstatter ikke HR eller ledere. Vi gir dem grunnlaget de mangler.",
            },
            {
              title: "Ikke mer prosess",
              text: "Verdien ligger i bedre beslutningsgrunnlag, tydeligere prioritering og oppfølging av faktisk effekt.",
            },
          ],
        },
        {
          kind: "prose",
          eyebrow: "Selskapet",
          title: "Levert av Digital Coach Hub AS",
          paragraphs: [
            "Teamet er tre personer med komplementær kompetanse og ett felles utgangspunkt: vi har alle kjent på hva det koster at organisasjoner ikke ser det som bygger seg opp.",
            "Tonen vår er rolig, presis og beslutningsnær. Troverdighet er valutaen vår.",
          ],
        },
        {
          kind: "contact",
          eyebrow: "Ta kontakt",
          title: "Vil du vite mer om selskapet?",
          lead: "Book en kartleggingssamtale, så tar vi en konkret vurdering av hva QuestPulse kan bety for deres virksomhet.",
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
          "QuestPulse gir regulerte virksomheter bedre grunnlag for løpende oppfølging av psykososialt arbeidsmiljø, dokumentasjon til styre og tilsyn og mer presise prioriteringer.",
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
              text: "GDPR artikkel 25 og relevante prinsipper for ansvarlig automatisert analyse er lagt til grunn i designet, ikke lagt på i etterkant.",
            },
            {
              title: "Sporbarhet",
              text: "Beslutningsgrunnlaget kan gjenskapes i ettertid, slik internkontroll og revisjon forutsetter.",
            },
          ],
        },
        {
          kind: "prose",
          eyebrow: "Kontrollert evaluering",
          title: "Evalueringsløpet dokumenterer bruk, innsikt og handling",
          paragraphs: [
            "Et evalueringsløp avklares med tydelige rammer for omfang, personvern, beslutningskriterier og forventet egeninnsats før oppstart.",
            "Referanser og kundecaser deles kun etter avtale, direkte i dialog.",
          ],
        },
        {
          kind: "contact",
          eyebrow: "Neste steg",
          title: "Ta en kartleggingssamtale",
          lead: "Vi starter med hvordan dere følger utviklingen i organisasjonen i dag, ikke med en produktpresentasjon.",
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
              text: "hei@questpulse.no. Velg Kartleggingssamtale i skjemaet for raskest oppfølging.",
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
        title: "About QuestPulse | People Intelligence infrastructure",
        description:
          "QuestPulse connects leadership action to organisational effect over time, giving HR and leadership continuous insight while there is still time to act.",
      },
      hero: {
        eyebrow: "About QuestPulse",
        title: "People Intelligence infrastructure for decisions that work",
        lead: "QuestPulse is People Intelligence infrastructure. We connect leadership action to organisational effect over time, giving HR and leadership continuous insight into what is actually developing inside the organisation while there is still time to act.",
      },
      sections: [
        {
          kind: "prose",
          eyebrow: "The starting point",
          title: "A gap in the way organisations are managed",
          paragraphs: [
            "Insight arrives too late. Traditional surveys provide snapshots, and between measurement points the things that matter most are already happening: workload builds, friction settles into teams, follow-up slips, and strong patterns disappear without anyone understanding why they worked.",
            "Leadership sees the consequences in sickness absence, quiet quitting and leadership strain, long after the signals were already there.",
          ],
        },
        {
          kind: "cards",
          eyebrow: "What we do",
          title: "From early signals to documented effect",
          items: [
            {
              title: "Signals become visible earlier",
              text: "QuestPulse brings forward both challenges and what is working, while leadership still has room to act.",
            },
            {
              title: "Leaders get a basis for follow-up",
              text: "The solution gives leaders a concrete basis for action and helps HR prioritise effort where it matters most.",
            },
            {
              title: "Effect is followed over time",
              text: "Where others stop at listening, we continue to causality: what was done, what happened afterwards, and what should be reinforced.",
            },
          ],
        },
        {
          kind: "dark",
          eyebrow: "Privacy and compliance",
          title: "Privacy is architecture, not a policy",
          items: [
            {
              title: "Value for employees",
              text: "Employees use QuestPulse because it helps them, not because they are being measured. That is why the data is real.",
            },
            {
              title: "Built for scrutiny",
              text: "The solution is built to stand up to employee representatives, audits and regulatory scrutiny.",
            },
            {
              title: "Documented duty",
              text: "Norwegian working environment rules require risk-based and continuous control of the psychosocial working environment, with documentation of mapping, actions and effect.",
            },
          ],
        },
        {
          kind: "prose",
          eyebrow: "Market and buyers",
          title: "Built in Norwegian working life first",
          paragraphs: [
            "We are building first in Norwegian working life, with knowledge-intensive organisations in banking, finance, advisory and industry as the first market. Short decision paths, high compliance expectations and strong reference value into the Nordics.",
            "The buyers are CEOs and executive teams who need early warning and a stronger basis for decisions, HR and People leaders who need overview and prioritisation, and leaders who need to know what to do on Monday.",
          ],
        },
        {
          kind: "cards",
          eyebrow: "Definition",
          title: "What QuestPulse is not",
          items: [
            {
              title: "Not an employee survey",
              text: "QuestPulse is not a pulse survey, not a wellbeing app and not a general HR system.",
            },
            {
              title: "Not a digital adviser",
              text: "We do not replace HR or leaders. We give them the foundation they are missing.",
            },
            {
              title: "Not more process",
              text: "The value is a better basis for decisions, clearer prioritisation and follow-up of actual effect.",
            },
          ],
        },
        {
          kind: "prose",
          eyebrow: "The company",
          title: "Delivered by Digital Coach Hub AS",
          paragraphs: [
            "The team consists of three people with complementary expertise and one shared starting point: we all know what it costs when organisations fail to see what is building up.",
            "Our tone is calm, precise and close to decision-making. Credibility is our currency.",
          ],
        },
        {
          kind: "contact",
          eyebrow: "Get in touch",
          title: "Want to know more about the company?",
          lead: "Book a discovery conversation, and we will make a concrete assessment of what QuestPulse could mean for your organisation.",
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
          "QuestPulse gives regulated organisations a stronger basis for continuous follow-up of the psychosocial working environment, documentation for boards and regulators, and more precise prioritisation.",
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
              text: "GDPR article 25 and relevant principles for responsible automated analysis are built into the design, not added afterwards.",
            },
            {
              title: "Traceability",
              text: "The basis for decisions can be reconstructed later, as internal control and audit require.",
            },
          ],
        },
        {
          kind: "prose",
          eyebrow: "Controlled evaluation",
          title: "The evaluation documents use, insight and action",
          paragraphs: [
            "An evaluation track is agreed with clear boundaries for scope, privacy, decision criteria and expected internal effort before start.",
            "References and customer cases are shared only by agreement, directly in dialogue.",
          ],
        },
        {
          kind: "contact",
          eyebrow: "Next step",
          title: "Book a discovery call",
          lead: "We start with how you follow organisational development today, not with a product presentation.",
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
              text: "hei@questpulse.no. Choose Discovery conversation in the form for the fastest response.",
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
