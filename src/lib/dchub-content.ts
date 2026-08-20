/**
 * Digital Coach Hub: alt merkevare- og sideinnhold.
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
} as const;

export const dchubImages = {
  lindaHero: lindaPhoto.url,
  lindaPortrett: lindaPortrett.url,
  coachingSamtale: coachingSamtale.url,
};

export const navLinks = [
  { href: "#tjenester", label: "Tjenester" },
  { href: "#om-linda", label: "Om Linda" },
  { href: "#teamet", label: "Teamet" },
  { href: "#artikler", label: "Artikler" },
  { href: "#kontakt", label: "Kontakt" },
];

export const situations = [
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

export const insights = [
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

export const usps = [
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

export const services = [
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

export const focusList = [
  "Tidsstyring når møter og avbrytelser tar over",
  "Prioritering når alt haster",
  "Kommunikasjon som kutter misforståelser",
  "Grensesetting uten drama",
];

export const stats = [
  { number: "17+", label: "År med ledererfaring i praksis" },
  { number: "100+", label: "Ledere og nøkkelpersoner støttet" },
  { number: "ICF", label: "NLP-sertifisert coach etter ICF-standarder" },
];

export const values = [
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

export const team = [
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

export const articles = [
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
