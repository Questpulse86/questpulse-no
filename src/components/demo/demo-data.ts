/**
 * Fiktive eksempeldata for QuestPulse-demoen.
 * Ingen ekte kundedata eller personopplysninger finnes i denne filen.
 */

export type SignalLevel = "low" | "mid" | "high";

export const signalLabel: Record<SignalLevel, string> = {
  low: "Lav",
  mid: "Moderat",
  high: "Høy",
};

export function signalFor(value: number): SignalLevel {
  if (value < 34) return "low";
  if (value < 60) return "mid";
  return "high";
}

export const ORG_HEALTH_HISTORY = [
  { m: "Feb", v: 61 },
  { m: "Mar", v: 64 },
  { m: "Apr", v: 63 },
  { m: "Mai", v: 67 },
  { m: "Jun", v: 70 },
  { m: "Jul", v: 72 },
];

export const RISK_CATEGORIES = [
  { key: "burnout", label: "Utbrenthetsrisiko" },
  { key: "samarbeid", label: "Samarbeidssvikt" },
  { key: "lederbelastning", label: "Lederbelastning" },
  { key: "stillhet", label: "Stillhetsrisiko" },
  { key: "endring", label: "Endringstretthet" },
] as const;

export type RiskKey = (typeof RISK_CATEGORIES)[number]["key"];

export const DEPARTMENTS: Array<{ navn: string } & Record<RiskKey, number>> = [
  { navn: "Salg", burnout: 55, samarbeid: 30, lederbelastning: 70, stillhet: 20, endring: 65 },
  { navn: "Kundeservice", burnout: 68, samarbeid: 40, lederbelastning: 45, stillhet: 25, endring: 40 },
  { navn: "Produkt og teknologi", burnout: 38, samarbeid: 22, lederbelastning: 35, stillhet: 15, endring: 30 },
  { navn: "Økonomi", burnout: 30, samarbeid: 18, lederbelastning: 25, stillhet: 45, endring: 20 },
  { navn: "HR og drift", burnout: 42, samarbeid: 35, lederbelastning: 50, stillhet: 30, endring: 35 },
];

export function orgAverage(key: RiskKey) {
  return Math.round(DEPARTMENTS.reduce((acc, d) => acc + d[key], 0) / DEPARTMENTS.length);
}

export const TEAMS = [
  {
    navn: "Team Vekst",
    kapasitet: 96,
    hotspot: true,
    aarsak: "To ledere sluttet i kvartalet, kombinert med økt press i salgsløpet.",
    kategori: "Lederbelastning",
    niva: "high" as SignalLevel,
    handling: "Sett inn midlertidig medleder før kvartalsslutt.",
  },
  {
    navn: "Team Support Nord",
    kapasitet: 88,
    hotspot: true,
    aarsak: "Høyt volum kombinert med ferieavvikling de neste tre ukene.",
    kategori: "Utbrenthetsrisiko",
    niva: "mid" as SignalLevel,
    handling: "Vurder midlertidig bemanningsøkning i ferieperioden.",
  },
  {
    navn: "Team Onboarding",
    kapasitet: 71,
    hotspot: true,
    aarsak: "Fallende deltakelse i teamets faste sjekk-inn de siste tre ukene.",
    kategori: "Stillhetsrisiko",
    niva: "mid" as SignalLevel,
    handling: "Gjennomfør en uformell samling for å gjenopprette dialogen.",
  },
  {
    navn: "Team Datainnsikt",
    kapasitet: 82,
    hotspot: false,
    aarsak: "Ingen avvik av betydning siste periode.",
    kategori: "Ingen",
    niva: "low" as SignalLevel,
    handling: "Ingen handling nødvendig nå.",
  },
];

export const TEAM_RISKS: Array<{ tema: string; niva: SignalLevel }> = [
  { tema: "Møtetetthet over anbefalt terskel, tre uker på rad", niva: "high" },
  { tema: "Fallende svarrate på ukentlige refleksjonsspørsmål", niva: "mid" },
  { tema: "Økt andel innlogginger sent på kvelden", niva: "mid" },
  { tema: "Redusert deltakelse i frivillige sosiale økter", niva: "low" },
];

export const ACTION_TRACKING = [
  { tiltak: "Innførte møtefrie onsdag ettermiddager", startet: "3. juni", effekt: [58, 61, 66, 70] },
  { tiltak: "Kortere statusmøte, 15 minutter", startet: "17. juni", effekt: [66, 68, 71, 74] },
];

export const BADGES = [
  { navn: "Første refleksjon", laast: false },
  { navn: "Sju dager på rad", laast: false },
  { navn: "Fant roen", laast: false },
  { navn: "30 dager mestring", laast: true },
];

export const WEEK_CALENDAR = [
  { dag: "Man", moter: 3, tung: false },
  { dag: "Tir", moter: 4, tung: false },
  { dag: "Ons", moter: 2, tung: false },
  { dag: "Tor", moter: 6, tung: true },
  { dag: "Fre", moter: 3, tung: false },
];

export type RoleId = "H1" | "H2" | "H3" | "H4";

export const ROLES: Array<{ id: RoleId; navn: string; beskrivelse: string }> = [
  {
    id: "H1",
    navn: "Toppleder",
    beskrivelse: "Kun aggregerte trender og sammenligning mellom avdelinger. Ingen individdata.",
  },
  {
    id: "H2",
    navn: "Avdelingsleder",
    beskrivelse: "Tverrteam-oversikt og hotspots i egen avdeling. Kun aggregerte tall.",
  },
  {
    id: "H3",
    navn: "Teamleder",
    beskrivelse: "Prioritert risiko og neste beste lederhandling for eget team. Kun aggregerte tall.",
  },
  {
    id: "H4",
    navn: "Medarbeider",
    beskrivelse: "Personlig og privat visning. Aldri delt med leder eller HR.",
  },
];
