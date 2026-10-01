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
  | {
      kind: "dark";
      eyebrow?: string;
      title: string;
      lead?: string;
      items: PageItem[];
      tone?: "light";
    }
  | { kind: "contact"; eyebrow?: string; title: string; lead?: string; form?: "direct" }
  | {
      kind: "logos";
      eyebrow?: string;
      title: string;
      lead?: string;
      items: { src: string; alt: string }[];
    }
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
  | "partners"
  | "stories";

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
  stories: { no: "/historier-fra-arbeidslivet", en: "/en/workplace-stories" },
} as const;

export const navKeys: PageKey[] = ["how", "usecases", "hr", "security", "partners"];
export const footerKeys: PageKey[] = [
  "how",
  "usecases",
  "banking",
  "hr",
  "enterprise",
  "security",
  "partners",
  "stories",
  "about",
  "contact",
];

export const navLabels: Record<Locale, Record<PageKey, string>> = {
  no: {
    about: "Selskapet",
    how: "Plattformen",
    usecases: "Bruksområder",
    banking: "Bank og finans",
    hr: "For HR og ledelse",
    enterprise: "Enterprise-evaluering",
    contact: "Kontakt",
    security: "Trust Center",
    partners: "Partnerøkosystem",
    stories: "Historier fra arbeidslivet",
  },
  en: {
    about: "Company",
    how: "Platform",
    usecases: "Use cases",
    banking: "Banking & finance",
    hr: "For HR & leadership",
    enterprise: "Enterprise evaluation",
    contact: "Contact",
    security: "Trust Center",
    partners: "Partner ecosystem",
    stories: "Workplace stories",
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
            "Vi bygger i norsk arbeidsliv først, med kunnskapsintensive virksomheter som første marked. Det omfatter rådgivning, teknologi, industri, offentlige virksomheter og regulerte bransjer. Korte beslutningsveier, høye krav til etterlevelse og sterk referanseverdi gir et godt grunnlag for Norden.",
            "Kjøperne er CEO og toppledelse som trenger tidlig varsling og bedre beslutningsgrunnlag, HR- og People-ledere som trenger oversikt og prioritering, og ledere som trenger å vite hva de skal gjøre på mandag.",
          ],
        },
        {
          kind: "cards",
          eyebrow: "Avgrensning",
          title: "Hva QuestPulse ikke er",
          items: [
            {
              title: "Et eget styringslag",
              text: "QuestPulse fyller gapet mellom de faste målepunktene og kobler løpende signaler til lederhandling og læring over tid.",
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
          form: "direct",
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
              text: "Dokumentert dataflyt, databehandleravtale og tydelig ansvarsfordeling.",
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
              text: "linda@dchub.no. Velg Kartleggingssamtale i skjemaet for raskest oppfølging.",
            },
            {
              title: "Partnerskap",
              text: "Velg Partnerskap i skjemaet. Vi tar kontakt for en avklaringssamtale.",
            },
            {
              title: "Personvern",
              text: "Spørsmål om behandling av personopplysninger og tekniske forhold rettes til linda@dchub.no.",
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
              text: "Datalokasjon bekreftes i avtalegrunnlaget før oppstart. Dataflyten fra innsamling til aggregert innsikt dokumenteres per miljø.",
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
              text: "SaaS-avtale, databehandleravtale, personverndokumentasjon, underleverandørvedlegg og sikkerhetsdokumentasjon er klare for gjennomgang i anskaffelses- eller evalueringsprosessen. Avtaleverket er utarbeidet med juridisk bistand fra Ræder Bing.",
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
        title: "Partnerøkosystem | QuestPulse for BHT, rådgivning og HR",
        description:
          "QuestPulse gir bedriftshelsetjenester, rådgivere og HR-miljøer et løpende innsiktsgrunnlag som styrker kundearbeidet fra signal til dokumentert effekt.",
      },
      hero: {
        eyebrow: "Partnerøkosystem",
        title: "Gjør faglig rådgivning sterkere med løpende organisatorisk innsikt",
        lead: "QuestPulse gir bedriftshelsetjenester, organisasjonsutviklere, HR-rådgivere og undersøkelsesmiljøer et felles grunnlag for å oppdage, prioritere og følge opp det som utvikler seg hos kunden.",
      },
      sections: [
        {
          kind: "cards",
          eyebrow: "For hvem",
          title: "Bygget for aktører som allerede har kundens tillit",
          items: [
            {
              title: "Bedriftshelsetjenester",
              text: "Få et mer løpende grunnlag for forebyggende arbeidsmiljøarbeid, risikovurdering, tiltak og oppfølging mellom de faste kartleggingene.",
            },
            {
              title: "Organisasjons- og lederutvikling",
              text: "Knytt utviklingsarbeidet tettere til signalene fra organisasjonen, og følg om lederhandlingene faktisk gir ønsket effekt over tid.",
            },
            {
              title: "Medarbeiderundersøkelser og HR-rådgivning",
              text: "Utvid verdien mellom målepunktene med kontinuerlig innsikt, bedre prioritering og dokumentasjon som holder i dialogen med kunden.",
            },
          ],
        },
        {
          kind: "dark",
          eyebrow: "Verdien i samarbeidet",
          title: "Partneren beholder relasjonen. Kunden får et sterkere løp.",
          items: [
            {
              title: "Et levende innsiktsgrunnlag",
              text: "QuestPulse gir partneren et tryggere utgangspunkt for den faglige samtalen: hva utvikler seg, hvor bør innsatsen settes inn, og hva bør undersøkes nærmere?",
            },
            {
              title: "Mer treffsikker oppfølging",
              text: "Partnerens egne tjenester, fra HMS-rådgivning til lederutvikling og omstillingsstøtte, kan settes inn med bedre timing og tydeligere hensikt.",
            },
            {
              title: "Dokumentert verdi over tid",
              text: "Signal, tiltak og utvikling kan følges samlet. Det gjør det enklere å vise kunden hva som ble gjort, hvorfor og hva som skjedde videre.",
            },
          ],
        },
        {
          kind: "logos",
          eyebrow: "Innovasjon og juridisk rammeverk",
          title: "Utviklet med et økosystem rundt oss",
          lead: "Logoene viser aktører i QuestPulse’ innovasjons- og juridiske økosystem. De er ikke kundereferanser eller produktgodkjenninger.",
          items: [
            { src: "/partners/microsoft-for-startups.webp", alt: "Microsoft for Startups" },
            { src: "/partners/innovasjon-norge.webp", alt: "Innovasjon Norge" },
            { src: "/partners/smart-innovation.webp", alt: "Smart Innovation Norway" },
            { src: "/partners/raeder-bing.webp", alt: "Ræder Bing" },
            { src: "/partners/ostfold-fylkeskommune.webp", alt: "Østfold fylkeskommune" },
            { src: "/partners/mh-tech.svg", alt: "MH Tech" },
          ],
        },
        {
          kind: "register",
          eyebrow: "Samarbeidsmodell",
          title: "Tre tydelige måter å skape verdi sammen",
          items: [
            {
              title: "1. Faglig rådgivningspartner",
              text: "Du bruker QuestPulse som innsiktsgrunnlag i eget arbeid hos kunden. Vi avklarer rolle, personvern og hvordan innsikten skal omsettes til faglig oppfølging.",
            },
            {
              title: "2. Kommersiell partner",
              text: "Du tilbyr QuestPulse som del av din portefølje, med tydelig salgsmodell, opplæring og avtalte rammer for ansvar og inntektsdeling.",
            },
            {
              title: "3. Teknologi- og integrasjonspartner",
              text: "Vi utforsker integrasjon mot HR-systemer, samarbeidsverktøy eller identitetsplattformer når det gjør innføringen tryggere og enklere for kunden.",
            },
          ],
        },
        {
          kind: "contact",
          eyebrow: "Utforsk samarbeid",
          title: "La oss vurdere hvor QuestPulse kan styrke deres kundetilbud",
          lead: "Fortell kort hvem dere hjelper i dag og hvilke tjenester dere leverer. Vi foreslår en konkret første samarbeidsmodell.",
        },
      ],
    },
    stories: {
      meta: {
        title: "Historier fra arbeidslivet | Tidlig innsikt og forebygging | QuestPulse",
        description:
          "Fiktive, gjenkjennelige historier som viser hvordan QuestPulse kan styrke samtalen mellom medarbeider, leder, HR og styre før friksjon blir turnover, fravær eller tapt kapasitet.",
      },
      hero: {
        eyebrow: "Historier fra arbeidslivet",
        title: "Det som ikke blir sagt, er ofte det dyreste signalet",
        lead: "QuestPulse gir ikke arbeidsgiver innsyn i menneskers private refleksjoner. Det gir hver rolle et tryggere grunnlag for den delen av oppfølgingen de faktisk har ansvar for, tidlig nok til å gjøre en forskjell.",
      },
      sections: [
        {
          kind: "prose",
          eyebrow: "Fiktive, men gjenkjennelige situasjoner",
          title: "Verdien oppstår mellom menneskene, ikke i et system alene",
          paragraphs: [
            "Situasjonene under er fiktive sammensetninger. De beskriver hverdager mange kjenner igjen: en medarbeider som ikke vil belaste lederen sin, en mellomleder som mangler språk og struktur for oppfølging, og HR som får signalene først når saken allerede er blitt stor.",
            "QuestPulse skal gjøre den menneskelige oppfølgingen bedre, ikke erstatte den. Medarbeideren får et trygt rom og hjelp til å sortere. Lederen får aggregert innsikt og strukturert lederstøtte. HR, CEO og styre får hvert sitt nivå av beslutningsgrunnlag, uten enkeltsvar, persondata eller innsyn i små grupper.",
          ],
        },
        {
          kind: "dark",
          eyebrow: "Et nøkternt kostnadseksempel",
          title: "Når én nøkkelperson forsvinner, er kostnaden større enn en rekrutteringsprosess",
          lead: "Dette er et illustrativt scenario for finans- og forsikringsvirksomhet. Det er ikke en påstand om en fast kostnad hos alle virksomheter.",
          items: [
            {
              title: "1 008 480 kr i årslønn",
              text: "SSBs gjennomsnittlige månedslønn i finansierings- og forsikringsvirksomhet var 84 040 kr i 2025. Tolv måneder gir en enkel årslønnsreferanse på 1 008 480 kr.",
            },
            {
              title: "Ca. 504 000 kr i konservativt scenario",
              text: "Bruker man 50 prosent av årslønn som en forsiktig modell for rekruttering, ledelsestid, tom stol, onboarding og tapt produktivitet, er kostnaden allerede over en halv million kroner.",
            },
            {
              title: "Den reelle kostnaden kan bli langt høyere",
              text: "For spesialist- og lederroller kommer relasjoner, kundekunnskap, feilprioriteringer og tid til full produktivitet i tillegg. Det er nettopp dette tidlig og trygg oppfølging skal bidra til å forebygge.",
            },
          ],
        },
        {
          kind: "register",
          eyebrow: "Fem historier",
          title: "Hva kunne vært håndtert annerledes?",
          lead: "QuestPulse lover ikke å forhindre alle oppsigelser eller løse komplekse menneskelige forhold. Det gir virksomheten en bedre mulighet til å oppdage mønstre, starte riktig samtale og følge tiltakene over tid.",
          items: [
            {
              title: "1. «Jeg orker ikke å være den som klager.»",
              text: "En erfaren medarbeider har gradvis mistet energi etter flere omorganiseringer, men vil ikke dele alt med nærmeste leder. I QuestPulse kan personen reflektere privat og få perspektiver på typiske arbeidslivsutfordringer. Hvis samme type belastning bygger seg opp i flere, ser lederen kun det aggregerte mønsteret og får støtte til en trygg, relevant oppfølging.",
            },
            {
              title: "2. «Jeg ser at teamet mitt strever, men jeg vet ikke hvor jeg skal begynne.»",
              text: "Mellomlederen har høyt tempo, få arenaer for refleksjon og ulike historier fra hvert enkelt teammedlem. QuestPulse gir ikke fasiten på personer, men viser hvilke felles mønstre som fortjener oppmerksomhet og hjelper lederen å velge én strukturert handling som kan følges opp.",
            },
            {
              title: "3. «Nå kom resultatene. Nå må vi slukke brannen.»",
              text: "HR får den årlige undersøkelsen etter at flere allerede har søkt seg bort eller blitt sykmeldt. Med løpende, beskyttet innsikt kan HR se utvikling på tvers, støtte rett leder tidligere og dokumentere om tiltakene faktisk endrer bildet. Målet er mindre reaktiv brannslukking og mer presis forebygging.",
            },
            {
              title: "4. «Vi har tall på fravær og turnover, men ikke hva som bygger seg opp.»",
              text: "CEO ser konsekvensene i nøkkeltallene, ofte for sent til å forstå hva som burde vært håndtert annerledes. QuestPulse gir et aggregert og beslutningsnært bilde av risiko, kapasitet og utvikling, slik at ledelsen kan prioritere tiltak før tap av kompetanse blir et resultatregnskapsspørsmål.",
            },
            {
              title: "5. «Styret får status, men ikke en sammenhengende forebyggingssløyfe.»",
              text: "Styret trenger ikke innsyn i ansatte. Det trenger en ansvarlig forståelse av utvikling, risiko, tiltak og effekt. QuestPulse kan gi styret overordnet, anonymisert innsikt som viser at virksomheten jobber systematisk med mennesker, arbeidsmiljø og verdiskaping gjennom hele året.",
            },
          ],
        },
        {
          kind: "cards",
          eyebrow: "Hva hver rolle får",
          title: "Én struktur. Fem ulike verdier.",
          items: [
            {
              title: "Medarbeider",
              text: "Privat refleksjon, nyttige perspektiver og et tryggere sted å sette ord på arbeidslivets friksjon. Eget innhold deles aldri videre.",
            },
            {
              title: "Leder og HR",
              text: "Strukturert lederstøtte, aggregerte signaler og bedre prioritering. De kan handle på mønstre uten å be om eller se fortrolige refleksjoner.",
            },
            {
              title: "CEO og styre",
              text: "Forebyggende innsikt, dokumentert oppfølging og et felles styringsgrunnlag for å beskytte kapasitet, resultater og investeringer i mennesker.",
            },
          ],
        },
        {
          kind: "contact",
          eyebrow: "Neste steg",
          title: "Hvilken kostbar situasjon ønsker dere å oppdage tidligere?",
          lead: "Vi kan starte med én konkret beslutning, ett ansvarsområde eller en avgrenset evaluering. Sammen utformer vi et løp som er trygt for menneskene og nyttig for virksomheten.",
        },
      ],
    },
    usecases: {
      meta: {
        title: "Bruksområder | QuestPulse People Intelligence",
        description:
          "QuestPulse styrker fire viktige beslutningsområder: omstilling, ledelseskapasitet, belastning og friksjon, og psykososial risiko.",
      },
      hero: {
        eyebrow: "Bruksområder",
        title: "Fire steder der forsinkede beslutninger blir dyre",
        lead: "QuestPulse gir et tidligere bilde av hva som utvikler seg i organisasjonen, slik at HR, ledere og toppledelse kan prioritere før friksjon blir til tapt kapasitet, svakere gjennomføring eller frafall.",
      },
      sections: [
        {
          kind: "dark",
          tone: "light",
          eyebrow: "Fra signal til handling",
          title: "Ikke flere løsrevne målinger. Ett beslutningsgrunnlag som kan følges opp.",
          lead: "Samme produktlogikk brukes i hvert bruksområde: signal, tolkning, risiko, anbefaling, lederhandling og læring over tid.",
          items: [
            {
              title: "Se hva som utvikler seg",
              text: "Løpende signaler gir et mer relevant bilde mellom faste målepunkter. Innsikt presenteres aggregert og med terskler som beskytter den enkelte.",
            },
            {
              title: "Velg riktig handling",
              text: "Ledere og HR får et bedre grunnlag for å prioritere samtaler, støtte og tiltak der de har størst betydning.",
            },
            {
              title: "Følg om tiltaket virker",
              text: "Virksomheten kan følge utviklingen etter handling og dokumentere kartlegging, tiltak og oppfølging over tid.",
            },
            {
              title: "Bevar mennesket i bildet",
              text: "QuestPulse erstatter ikke faglig skjønn eller gode relasjoner. Det gir hver rolle et tryggere grunnlag for sin del av oppfølgingen.",
            },
          ],
        },
        {
          kind: "register",
          eyebrow: "Fire beslutningsområder",
          title: "Der QuestPulse gjør en praktisk forskjell",
          lead: "Dette er ikke bransjer. Det er situasjoner som går igjen i kunnskapsintensive virksomheter, enten dere jobber i rådgivning, teknologi, industri, offentlig sektor eller regulerte miljøer.",
          items: [
            {
              title: "Omstilling og endring",
              text: "Når tempo, prioriteringer eller roller endres, viser QuestPulse hvor kapasiteten holder og hvor friksjon begynner å sette seg. Det gir et bedre grunnlag for å justere rekkefølge, tempo og lederstøtte før gjennomføringen svekkes.",
            },
            {
              title: "Ledelseskapasitet",
              text: "Når ledere har høyt tempo, stort kontrollspenn eller mange parallelle krav, trenger de mer enn rapportering. QuestPulse gir et ukentlig bilde av eget ansvarsområde og strukturert støtte til å velge neste handling.",
            },
            {
              title: "Belastning og friksjon",
              text: "Vedvarende belastning og uklar arbeidsflyt blir ofte forklart som et personproblem. QuestPulse gjør mønstre i arbeidsform og samspill synlige, slik at virksomheten kan fjerne hindre og prioritere ressurser mer presist.",
            },
            {
              title: "Psykososial risiko og arbeidsmiljø",
              text: "Psykososial risiko må følges gjennom året, ikke først når en kartlegging eller et nøkkeltall viser konsekvensen. QuestPulse gir et strukturert grunnlag for forebygging, dokumentasjon og ansvarlig oppfølging.",
            },
          ],
        },
        {
          kind: "cards",
          eyebrow: "Verdi per rolle",
          title: "Det samme signalet blir nyttig på ulike nivåer",
          items: [
            {
              title: "Medarbeider",
              text: "Et privat rom for refleksjon og perspektiver på typiske utfordringer i arbeidslivet. Ingen i selskapet ser hva den enkelte skriver.",
            },
            {
              title: "Leder og HR",
              text: "Aggregert innsikt, strukturert lederstøtte og et klarere grunnlag for å prioritere tiltak før de må slukke branner.",
            },
            {
              title: "CEO og styre",
              text: "Et overordnet bilde av organisatorisk risiko, kapasitet, tiltak og utvikling som støtter forebyggende styring uten innsyn i enkeltpersoner.",
            },
          ],
        },
        {
          kind: "steps",
          eyebrow: "Slik starter det",
          title: "En kontrollert vei fra avgrenset behov til virksomhetsverdi",
          lead: "Vi starter med en konkret beslutning dere vil forbedre. Deretter avklarer vi styring, personvern og praktisk innføring før dere tar stilling til videre bruk.",
          items: [
            {
              title: "Avklar beslutningen",
              text: "Velg ett område, én enhet eller en utfordring der dere i dag får signalene for sent.",
            },
            {
              title: "Etabler trygg ramme",
              text: "Roller, tilgang, anonymitetsterskler, databehandling og ansvar for oppfølging avklares tidlig.",
            },
            {
              title: "Følg utvikling og effekt",
              text: "Vi følger signaler, prioriteringer og handlinger i en fast rytme, slik at dere får et konkret grunnlag for neste beslutning.",
            },
          ],
        },
        {
          kind: "contact",
          eyebrow: "Neste steg",
          title: "Hvilken beslutning ønsker dere å ta tidligere?",
          lead: "Fortell kort hva som er vanskelig å se eller følge opp i dag. Vi vurderer om QuestPulse kan gi dere et tryggere og mer handlingsrettet beslutningsgrunnlag.",
          form: "direct",
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
            "Insight arrives too late. Periodic measurements provide snapshots, and between measurement points the things that matter most are already happening: workload builds, friction settles into teams, follow-up slips, and strong patterns disappear without anyone understanding why they worked.",
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
              title: "A distinct management layer",
              text: "QuestPulse fills the gap between fixed measurement points and connects continuous signals to leadership action and learning over time.",
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
          form: "direct",
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
              text: "Risk-based follow-up throughout the year, not only at fixed measurement points.",
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
              text: "Documented data flow, a data processing agreement and a clear division of responsibility.",
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
          "What QuestPulse gives HR, leaders, executives and boards: better overview between measurement points, support for prioritisation and a clearer basis for decisions.",
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
              text: "linda@dchub.no. Choose Discovery conversation in the form for the fastest response.",
            },
            {
              title: "Partnerships",
              text: "Choose Partnership in the form. We will get in touch for an initial conversation.",
            },
            {
              title: "Privacy",
              text: "Questions about personal data processing and technical matters go to linda@dchub.no.",
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
              text: "Data location is confirmed in the contractual documentation before implementation. Data flow from collection to aggregated insight is documented for each environment.",
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
              text: "The SaaS agreement, data processing agreement, privacy documentation, sub-processor annex and security documentation are ready for review during procurement or evaluation. The agreement framework has been prepared with legal counsel from Ræder Bing.",
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
        title: "Partner ecosystem | QuestPulse for advisory and occupational health",
        description:
          "QuestPulse gives occupational health providers, advisors and HR partners a continuous insight foundation that strengthens client work from signal to documented effect.",
      },
      hero: {
        eyebrow: "Partner ecosystem",
        title: "Make expert advisory stronger with continuous organisational insight",
        lead: "QuestPulse gives occupational health providers, organisation development specialists, HR advisors and employee listening partners a shared foundation for detecting, prioritising and following up what is developing for their clients.",
      },
      sections: [
        {
          kind: "cards",
          eyebrow: "Who it is for",
          title: "Built for partners who already hold the client's trust",
          items: [
            {
              title: "Occupational health providers",
              text: "Gain a more continuous foundation for preventive working environment programmes, risk assessment, actions and follow-up between scheduled assessments.",
            },
            {
              title: "Organisation and leadership development",
              text: "Connect development work more closely to organisational signals and follow whether leadership actions create the intended effect over time.",
            },
            {
              title: "Employee listening and HR advisory",
              text: "Extend value between measurement points with continuous insight, stronger prioritisation and documentation that supports client dialogue.",
            },
          ],
        },
        {
          kind: "dark",
          eyebrow: "The partnership value",
          title: "The partner keeps the relationship. The client gets a stronger journey.",
          items: [
            {
              title: "A living insight foundation",
              text: "QuestPulse creates a safer starting point for the expert conversation: what is developing, where should attention go, and what deserves deeper investigation?",
            },
            {
              title: "More targeted follow-up",
              text: "Your own services, from working environment advisory to leadership development and change support, can be introduced with clearer timing and purpose.",
            },
            {
              title: "Documented value over time",
              text: "Signal, action and development can be followed together, making it easier to show the client what happened, why it mattered and what followed.",
            },
          ],
        },
        {
          kind: "logos",
          eyebrow: "Innovation and legal framework",
          title: "Developed with an ecosystem around us",
          lead: "The logos represent organisations in QuestPulse' innovation and legal ecosystem. They are not customer references or product endorsements.",
          items: [
            { src: "/partners/microsoft-for-startups.webp", alt: "Microsoft for Startups" },
            { src: "/partners/innovasjon-norge.webp", alt: "Innovation Norway" },
            { src: "/partners/smart-innovation.webp", alt: "Smart Innovation Norway" },
            { src: "/partners/raeder-bing.webp", alt: "Ræder Bing" },
            { src: "/partners/ostfold-fylkeskommune.webp", alt: "Østfold County Municipality" },
            { src: "/partners/mh-tech.svg", alt: "MH Tech" },
          ],
        },
        {
          kind: "register",
          eyebrow: "Partnership model",
          title: "Three clear ways to create value together",
          items: [
            {
              title: "1. Expert advisory partner",
              text: "You use QuestPulse as the insight foundation in your client work. Together we clarify role, privacy and how insight becomes meaningful expert follow-up.",
            },
            {
              title: "2. Commercial partner",
              text: "You offer QuestPulse as part of your portfolio, with a clear sales model, enablement and agreed boundaries for ownership and revenue sharing.",
            },
            {
              title: "3. Technology and integration partner",
              text: "We explore integrations with HR systems, collaboration tools or identity platforms where they create a safer, more seamless client experience.",
            },
          ],
        },
        {
          kind: "contact",
          eyebrow: "Explore a partnership",
          title: "Let us assess where QuestPulse can strengthen your client offering",
          lead: "Tell us who you help today and what you deliver. We will propose a concrete first partnership model.",
        },
      ],
    },
    stories: {
      meta: {
        title: "Workplace stories | Early insight and prevention | QuestPulse",
        description:
          "Fictional, recognisable workplace stories showing how QuestPulse can strengthen the conversation between employee, manager, HR and board before friction becomes turnover, absence or lost capacity.",
      },
      hero: {
        eyebrow: "Workplace stories",
        title: "What is left unsaid is often the most expensive signal",
        lead: "QuestPulse does not give employers access to private reflection. It gives each role a safer basis for the part of follow-up they are responsible for, early enough to make a difference.",
      },
      sections: [
        {
          kind: "prose",
          eyebrow: "Fictional, yet recognisable situations",
          title: "The value arises between people, not in a system alone",
          paragraphs: [
            "The situations below are fictional composites. They describe working lives many recognise: an employee who does not want to burden their manager, a middle manager who lacks language and structure for follow-up, and HR who receives the signals only after the situation has become large.",
            "QuestPulse is designed to improve human follow-up, not replace it. The employee gets a safe space and help sorting their perspective. The manager gets aggregated insight and structured leadership support. HR, CEO and board each get the appropriate decision foundation, without individual responses, personal data or insight into small groups.",
          ],
        },
        {
          kind: "dark",
          eyebrow: "A pragmatic cost scenario",
          title: "When a key person leaves, the cost is greater than a recruitment process",
          lead: "This is an illustrative scenario for financial and insurance activities. It is not a claim of a fixed cost for every organisation.",
          items: [
            {
              title: "NOK 1,008,480 in annual salary",
              text: "Statistics Norway reported average monthly earnings of NOK 84,040 in financial and insurance activities in 2025. Twelve months provide a simple annual salary reference of NOK 1,008,480.",
            },
            {
              title: "Approx. NOK 504,000 in a conservative scenario",
              text: "Using 50 percent of annual salary as a cautious model for recruitment, leadership time, vacancy, onboarding and lost productivity already puts the cost above half a million NOK.",
            },
            {
              title: "The real cost can be materially higher",
              text: "For specialist and leadership roles, relationships, customer knowledge, prioritisation errors and time to full productivity add further cost. This is what earlier and safer follow-up is intended to help prevent.",
            },
          ],
        },
        {
          kind: "register",
          eyebrow: "Five stories",
          title: "What could have been handled differently?",
          lead: "QuestPulse does not promise to prevent every resignation or solve complex human situations. It creates a better opportunity to notice patterns, start the right conversation and follow actions over time.",
          items: [
            {
              title: "1. “I do not want to be the one who complains.”",
              text: "An experienced employee has gradually lost energy after several reorganisations, but does not want to share everything with their direct manager. In QuestPulse, the person can reflect privately and receive perspective on common work-life challenges. If similar strain builds across several people, the manager sees only the aggregated pattern and receives support for safe, relevant follow-up.",
            },
            {
              title: "2. “I can see my team is struggling, but I do not know where to start.”",
              text: "The middle manager has a high pace, few spaces for reflection and different stories from each team member. QuestPulse does not provide answers about individuals, but indicates which shared patterns deserve attention and helps the manager choose one structured action to follow up.",
            },
            {
              title: "3. “The results are in. Now we have to put out the fire.”",
              text: "HR receives the annual measurement after several people have already applied elsewhere or gone on sick leave. With continuous protected insight, HR can see development across the organisation, support the right leader earlier and document whether actions actually change the picture. The aim is less reactive firefighting and more precise prevention.",
            },
            {
              title: "4. “We have absence and turnover figures, but not what is building up.”",
              text: "The CEO sees the consequences in the KPIs, often too late to understand what could have been handled differently. QuestPulse provides an aggregated, decision-ready view of risk, capacity and development, enabling leaders to prioritise action before lost expertise becomes a P&L question.",
            },
            {
              title: "5. “The board receives status, but not a coherent prevention loop.”",
              text: "The board does not need insight into employees. It needs a responsible understanding of development, risk, action and effect. QuestPulse can give the board high-level, anonymised insight showing that the organisation works systematically with people, working environment and value creation throughout the year.",
            },
          ],
        },
        {
          kind: "cards",
          eyebrow: "What each role receives",
          title: "One structure. Five different values.",
          items: [
            {
              title: "Employee",
              text: "Private reflection, useful perspective and a safer place to put words to work-life friction. Personal content is never shared onwards.",
            },
            {
              title: "Manager and HR",
              text: "Structured leadership support, aggregated signals and stronger prioritisation. They can act on patterns without requesting or seeing confidential reflections.",
            },
            {
              title: "CEO and board",
              text: "Preventive insight, documented follow-up and a shared decision foundation for protecting capacity, results and investments in people.",
            },
          ],
        },
        {
          kind: "contact",
          eyebrow: "Next step",
          title: "Which costly situation do you want to detect earlier?",
          lead: "We can start with one specific decision, one area of responsibility or a scoped evaluation. Together we can design a journey that is safe for people and useful for the organisation.",
        },
      ],
    },
    usecases: {
      meta: {
        title: "Use cases | QuestPulse People Intelligence",
        description:
          "QuestPulse strengthens four critical decision areas: change, leadership capacity, workload and friction, and psychosocial risk.",
      },
      hero: {
        eyebrow: "Use cases",
        title: "Four places where delayed decisions become expensive",
        lead: "QuestPulse creates an earlier picture of what is developing in the organisation, so HR, leaders and executive teams can prioritise before friction becomes lost capacity, weaker delivery or attrition.",
      },
      sections: [
        {
          kind: "dark",
          tone: "light",
          eyebrow: "From signal to action",
          title:
            "Not another disconnected measurement. One decision foundation that can be followed up.",
          lead: "The same product logic applies in every use case: signal, interpretation, risk, recommendation, leadership action and learning over time.",
          items: [
            {
              title: "See what is developing",
              text: "Continuous signals create a more relevant view between fixed measurement points. Insight is presented in aggregate and with thresholds that protect the individual.",
            },
            {
              title: "Choose the right action",
              text: "Leaders and HR get a stronger basis for prioritising conversations, support and measures where they matter most.",
            },
            {
              title: "Follow whether action works",
              text: "The organisation can follow development after action and document mapping, measures and follow-up over time.",
            },
            {
              title: "Keep people in the picture",
              text: "QuestPulse does not replace professional judgement or strong relationships. It gives every role a safer basis for its part of the follow-up.",
            },
          ],
        },
        {
          kind: "register",
          eyebrow: "Four decision areas",
          title: "Where QuestPulse makes a practical difference",
          lead: "These are not industries. They are situations that recur in knowledge-intensive organisations, whether you work in advisory, technology, industry, public sector or regulated environments.",
          items: [
            {
              title: "Change and restructuring",
              text: "When pace, priorities or roles change, QuestPulse shows where capacity holds and where friction is beginning to take hold. It creates a stronger basis for adjusting sequencing, pace and leadership support before delivery weakens.",
            },
            {
              title: "Leadership capacity",
              text: "When leaders face high pace, wide spans of control or multiple parallel demands, they need more than reporting. QuestPulse gives a weekly view of their area and structured support for choosing the next action.",
            },
            {
              title: "Workload and friction",
              text: "Sustained workload and unclear workflow are often explained as a people problem. QuestPulse makes patterns in ways of working and collaboration visible, so the organisation can remove obstacles and prioritise resources more precisely.",
            },
            {
              title: "Psychosocial risk and working environment",
              text: "Psychosocial risk needs attention throughout the year, not only when a mapping or KPI shows the consequence. QuestPulse gives a structured foundation for prevention, documentation and responsible follow-up.",
            },
          ],
        },
        {
          kind: "cards",
          eyebrow: "Value by role",
          title: "The same signal becomes useful at different levels",
          items: [
            {
              title: "Employee",
              text: "A private space for reflection and perspective on common work-life challenges. No one in the company sees what an individual writes.",
            },
            {
              title: "Leader and HR",
              text: "Aggregated insight, structured leadership support and a clearer basis for prioritising action before they have to fight fires.",
            },
            {
              title: "CEO and board",
              text: "A high-level view of organisational risk, capacity, actions and development that supports preventive governance without insight into individuals.",
            },
          ],
        },
        {
          kind: "steps",
          eyebrow: "How it starts",
          title: "A controlled route from a scoped need to organisational value",
          lead: "We start with one specific decision you want to improve. We then clarify governance, privacy and practical rollout before you decide on continued use.",
          items: [
            {
              title: "Clarify the decision",
              text: "Choose one area, unit or challenge where you are currently receiving signals too late.",
            },
            {
              title: "Establish a safe framework",
              text: "Roles, access, anonymity thresholds, data processing and responsibility for follow-up are clarified early.",
            },
            {
              title: "Follow development and effect",
              text: "We follow signals, priorities and actions in a steady rhythm, giving you a concrete foundation for the next decision.",
            },
          ],
        },
        {
          kind: "contact",
          eyebrow: "Next step",
          title: "Which decision do you want to make earlier?",
          lead: "Tell us briefly what is difficult to see or follow up today. We will assess whether QuestPulse can give you a safer, more actionable decision foundation.",
          form: "direct",
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
