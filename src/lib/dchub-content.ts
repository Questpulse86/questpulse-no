/**
 * Digital Coach Hub: Linda Karlsens personlige coachingmerkevare.
 * Holdes bevisst adskilt fra QuestPulse-innholdet i src/lib/site-content.ts
 * og src/lib/page-content.ts. Ingen deling av tekst mellom de to merkevarene.
 */
import lindaPhoto from "@/assets/linda-karlsen.png.asset.json";
import lindaPortrett from "@/assets/linda-portrett.jpg.asset.json";
import coachingSamtale from "@/assets/coaching-samtale.jpg.asset.json";

export const dchubSite = "https://digitalcoachub.no";

export const dchubBrand = {
  name: "Digital Coach Hub",
  legalName: "Digital Coach Hub AS",
  orgNumber: "936 265 634",
  person: "Linda Karlsen",
  email: "linda@dchub.no",
  phone: "+4794806616",
  phoneDisplay: "+47 948 06 616",
  place: "Askim, Indre Østfold",
} as const;

/**
 * Eksisterende bookingressurs i HubSpot (portal 146982049, region eu1):
 * møtelenken «Meet with Linda Karlsen». Alle primære CTA-er peker hit.
 * Skal en annen møtelenke brukes, endres kun denne konstanten.
 */
export const BOOKING_URL = "https://meetings-eu1.hubspot.com/linda-karlsen";

export const dchubImages = {
  lindaHero: lindaPhoto.url,
  lindaPortrett: lindaPortrett.url,
  coachingSamtale: coachingSamtale.url,
};

export const navLinks = [
  { href: "#for-grundere", label: "For gründere" },
  { href: "#for-ledere", label: "For ledere" },
  { href: "#foredrag", label: "Foredrag og workshops" },
  { href: "#om-linda", label: "Om Linda" },
  { href: "#resultater", label: "Resultater" },
];

export const hero = {
  eyebrow: "Businesscoach, ledercoach og foredragsholder",
  title: "Når du har mye ansvar, trenger du et sted å tenke klart.",
  lead: "Jeg hjelper gründere og ledere med å rydde i press, ta tydeligere beslutninger og skape fremdrift som faktisk holder. Praktisk, ærlig og tilpasset virkeligheten du står i.",
  ctaPrimary: "Book en gratis avklaringssamtale",
  ctaSecondary: "Se hvordan jeg jobber",
  trust: [
    "20 års ledererfaring",
    "Gründer",
    "Sertifisert NLP Master Coach",
    "Foredragsholder",
    "Askim og digitalt",
  ],
};

export const recognition = {
  eyebrow: "Når alt krever oppmerksomhet",
  title: "Du trenger ikke ha mistet kontrollen for å trenge en sparringspartner.",
  lead: "Mange av dem jeg jobber med leverer godt utad. Samtidig bruker de for mye kapasitet på å holde oversikten, ta alle beslutningene og bære ansvaret alene.",
  items: [
    {
      title: "Alt er viktig. Lite får nok ro.",
      text: "Du hopper mellom drift, mennesker, kunder og beslutninger. Dagen fylles, men det viktigste blir fortsatt skjøvet foran deg.",
    },
    {
      title: "Du står alene i de vanskeligste valgene.",
      text: "Andre forventer tydelige svar. Selv mangler du et sted der du kan tenke høyt, utfordre egne antakelser og sortere uten å måtte ha fasiten klar.",
    },
    {
      title: "Virksomheten vokser raskere enn strukturen.",
      text: "Det som fungerte før holder ikke lenger. Roller, prioriteringer og arbeidsmåter må utvikles uten at fremdriften stopper.",
    },
    {
      title: "Jobben følger med hjem.",
      text: "Du er ferdig med arbeidsdagen, men hodet fortsetter. Over tid går det utover både overskudd, relasjoner og kvaliteten på beslutningene.",
    },
  ],
};

export const outcomes = {
  eyebrow: "Det vi jobber mot",
  title: "Fra press og spredt fokus til tydelige valg og gjennomføring.",
  lead: "Målet er ikke en perfekt kalender. Målet er at du bruker kapasiteten din på det som faktisk betyr mest.",
  items: [
    {
      title: "Klarhet",
      text: "Du ser hva som er viktigst nå, hva som kan vente og hvilke valg som faktisk flytter deg eller virksomheten videre.",
    },
    {
      title: "Beslutningskraft",
      text: "Du tar tydeligere beslutninger, kommuniserer dem bedre og står stødigere når andre forventer svar.",
    },
    {
      title: "Bærekraftig fremdrift",
      text: "Du bygger arbeidsmåter som gir resultater uten at jobb, ansvar og ambisjoner tar all tilgjengelig kapasitet.",
    },
  ],
};

export const servicesSection = {
  eyebrow: "Slik kan jeg hjelpe",
  title: "Støtte tilpasset ansvaret du faktisk står i.",
};

export const services = [
  {
    id: "for-grundere",
    label: "For gründere",
    title: "Businesscoaching og strategisk sparring",
    text: "For deg som bygger virksomhet og samtidig skal håndtere salg, mennesker, økonomi, prioriteringer og usikkerhet. Vi rydder i det som tar kapasitet, finner neste riktige beslutning og gjør planer om til konkret handling.",
    cta: "Book en avklaringssamtale",
  },
  {
    id: "for-ledere",
    label: "For ledere",
    title: "Ledercoaching én til én",
    text: "For deg som leder mennesker, står i krysspress eller trenger et ærlig utenforstående blikk. Vi jobber med lederrollen, krevende samtaler, kommunikasjon, prioritering og beslutninger i din faktiske arbeidshverdag.",
    cta: "Book en avklaringssamtale",
  },
  {
    id: "foredrag",
    label: "For virksomheter",
    title: "Foredrag og workshops",
    text: "Engasjerende og praktiske opplegg om selvledelse, prioritering, kommunikasjon og bærekraftig prestasjon. Innholdet tilpasses målgruppen og skal kunne brukes i arbeidshverdagen, ikke bare inspirere i rommet.",
    cta: "Snakk med meg om et oppdrag",
  },
];

export const process = {
  eyebrow: "Enkelt å komme i gang",
  title: "Vi starter med situasjonen din, ikke en ferdig metode.",
  steps: [
    {
      title: "Kort avklaring",
      text: "I en gratis samtale på 20 minutter ser vi på hva du ønsker å endre, og om jeg er riktig sparringspartner.",
    },
    {
      title: "Tydelig mål",
      text: "Vi definerer hva som skal være annerledes etter samarbeidet og hvilke beslutninger eller handlinger som betyr mest.",
    },
    {
      title: "Praktisk arbeid",
      text: "Samtalene kobles direkte til situasjonene du står i. Du får spørsmål, struktur, ærlige tilbakemeldinger og konkrete grep.",
    },
    {
      title: "Fremdrift mellom samtalene",
      text: "Det viktigste skjer i hverdagen. Derfor følger vi opp hva du faktisk har prøvd, lært og gjennomført.",
    },
  ],
  note: "I avklaringssamtalen finner vi ut om en enkeltsamtale eller et lengre forløp passer best.",
};

export const resultsSection = {
  eyebrow: "Erfaringer fra klienter",
  title: "Endring skal merkes i arbeidshverdagen.",
};

export const testimonials = [
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

export const about = {
  eyebrow: "Om Linda Karlsen",
  title: "Jeg har brukt 20 år på å forstå hva som får mennesker og virksomheter videre.",
  paragraphs: [
    "Jeg er businesscoach, ledercoach, gründer og foredragsholder. Gjennom 20 år som leder har jeg jobbet i finans, bygget salgsteam i maritim næring og stått i distribusjonsnettverk, prosjektorganisasjoner og oppstartsbedrifter.",
    "Jeg har kjent ansvaret fra innsiden. Beslutningene som må tas før hele bildet er klart. Forventningene fra kunder, medarbeidere og eiere. Periodene der alt virker viktig samtidig, og der det ikke finnes en fasit å lene seg på.",
    "Det har lært meg at mennesker med mye ansvar sjelden trenger enda en generell metode. De trenger et sted der de kan tenke klart, bli utfordret og oversette innsikt til handling i sin egen virkelighet.",
    "Som coach er jeg varm, direkte og praktisk. Jeg lytter, men lar deg ikke bli værende i de samme forklaringene. Vi jobber med det du faktisk kan påvirke, og med de valgene som gir størst effekt nå.",
    "Jeg er sertifisert NLP Master Coach og gründer av Digital Coach Hub AS og QuestPulse. Kombinasjonen av ledererfaring, coaching og gründerskap gjør at jeg forstår både mennesket, virksomheten og presset som oppstår mellom dem.",
  ],
  cta: "Book en samtale med Linda",
};

export const questpulseNote = {
  eyebrow: "Også gründer av QuestPulse",
  title:
    "Coaching gir innsikt i menneskene. QuestPulse gir virksomheten et løpende beslutningsgrunnlag.",
  text: "Digital Coach Hub AS står også bak QuestPulse, en People Intelligence-plattform for virksomheter som vil oppdage belastning, friksjon og lederutfordringer tidligere. QuestPulse har en egen merkevare, målgruppe og nettside.",
  cta: "Gå til QuestPulse",
  href: "https://questpulse.no",
};

export const faq = [
  {
    q: "Hvem passer coaching hos deg for?",
    a: "Jeg jobber primært med gründere og ledere som har mye ansvar og ønsker tydeligere prioriteringer, bedre beslutninger eller mer bærekraftig fremdrift.",
  },
  {
    q: "Hva skjer i den første samtalen?",
    a: "Vi bruker 20 minutter på å forstå situasjonen din, hva du ønsker å endre og om jeg er riktig person til å hjelpe. Samtalen er uforpliktende.",
  },
  {
    q: "Er coaching det samme som terapi?",
    a: "Nei. Coaching tar utgangspunkt i nåsituasjonen, valgene dine og det du ønsker å skape videre. Ved behov for helsehjelp eller behandling skal du bruke kvalifisert helsepersonell.",
  },
  {
    q: "Må jeg møte fysisk?",
    a: "Nei. Jeg jobber digitalt med klienter i hele Norge og tilbyr også samtaler i Askim etter avtale.",
  },
  {
    q: "Kan virksomheter bestille foredrag eller workshops?",
    a: "Ja. Foredrag og workshops tilpasses målgruppe, situasjon og ønsket resultat. Ta kontakt, så avklarer vi behov og format.",
  },
];

export const closing = {
  eyebrow: "Neste steg",
  title: "Du trenger ikke ha hele løsningen klar før du tar kontakt.",
  text: "Book en gratis avklaringssamtale. Vi ser på hva som opptar kapasiteten din nå, og hva som kan være et godt neste steg.",
  ctaPrimary: "Book 20 minutter med Linda",
  formLead: "Foretrekker du å skrive? Send en kort melding, så svarer jeg innen én virkedag.",
};
