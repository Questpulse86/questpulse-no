/**
 * Personvernerklæring og informasjonskapsler for Digital Coach Hub.
 * Holdes adskilt fra QuestPulse-innholdet.
 */
import { dchubBrand } from "@/lib/dchub-content";

export const privacyMeta = {
  version: "1.0",
  updated: "10. september 2026",
  updatedIso: "2026-09-10",
};

export const privacyPage = {
  title: "Personvernerklæring og informasjonskapsler",
  lead: `Digital Coach Hub AS behandler personopplysninger når du besøker nettsiden, sender en henvendelse eller booker en samtale. Her får du vite hva som samles inn, hvorfor, hvor lenge det lagres og hvilke rettigheter du har.`,
  sections: [
    {
      id: "behandlingsansvarlig",
      title: "Behandlingsansvarlig",
      paragraphs: [
        `${dchubBrand.legalName}, org.nr. ${dchubBrand.orgNumber}, ${dchubBrand.place}, er behandlingsansvarlig for personopplysningene som samles inn via denne nettsiden.`,
        `Spørsmål om personvern rettes til ${dchubBrand.email} eller ${dchubBrand.phoneDisplay}.`,
      ],
    },
    {
      id: "hva-samles-inn",
      title: "Hvilke opplysninger samles inn",
      list: [
        "Kontaktskjema: navn, e-postadresse, eventuelt telefonnummer, virksomhet og innholdet i meldingen din.",
        "Booking av samtale: navn, e-postadresse og valgt tidspunkt.",
        "Bruk av nettsiden: teknisk informasjon som nettlesertype, sidevisninger, henvisningskilde og anonymisert IP-adresse, dersom du samtykker til analyse.",
      ],
      paragraphs: [
        "Nettsiden lagrer ingen henvendelser i egen database. Skjema og booking går direkte til kundesystemet vårt.",
      ],
    },
    {
      id: "formal",
      title: "Formål og behandlingsgrunnlag",
      list: [
        "Besvare henvendelser og avtale samtaler. Grunnlag: berettiget interesse og forberedelse til avtale.",
        "Levere og fakturere coaching, foredrag og workshops. Grunnlag: avtale og bokføringsplikt.",
        "Forstå bruken av nettsiden og forbedre innholdet. Grunnlag: samtykke.",
      ],
    },
    {
      id: "databehandlere",
      title: "Hvem opplysningene deles med",
      paragraphs: [
        "Vi bruker Microsoft Bookings til møtebestilling, Microsoft Outlook til e-post og Vercel til drift av nettsiden. Booking åpnes hos Microsoft. De tidligere HubSpot-skjemaene er fjernet fra nettsiden.",
        "Opplysninger deles ikke med andre, og selges aldri videre.",
      ],
    },
    {
      id: "lagringstid",
      title: "Hvor lenge opplysningene lagres",
      list: [
        "Henvendelser som ikke fører til samarbeid: slettes senest 12 måneder etter siste kontakt.",
        "Kundeforhold: lagres så lenge samarbeidet varer, og deretter så lenge bokføringsloven krever.",
        "Analysedata: lagres i inntil 13 måneder.",
      ],
    },
    {
      id: "informasjonskapsler",
      title: "Informasjonskapsler",
      paragraphs: [
        "Informasjonskapsler er små tekstfiler som lagres i nettleseren din. Nødvendige kapsler er alltid aktive fordi siden ikke fungerer uten dem. Analyse- og markedsføringskapsler settes bare hvis du samtykker, og du kan når som helst endre valget ditt nederst på denne siden.",
      ],
      table: [
        {
          name: "Nødvendige",
          purpose:
            "Sikrer at skjema, booking og valget ditt om informasjonskapsler fungerer og huskes.",
          duration: "Økten eller inntil 12 måneder",
        },
        {
          name: "Analyse",
          purpose:
            "Tidligere HubSpot-funksjon. Ikke aktiv i dette kontaktoppsettet.",
          duration: "Inntil 13 måneder",
        },
        {
          name: "Markedsføring",
          purpose:
            "Tidligere HubSpot-funksjon. Ikke aktiv i dette kontaktoppsettet.",
          duration: "Inntil 13 måneder",
        },
      ],
    },
    {
      id: "rettigheter",
      title: "Rettighetene dine",
      list: [
        "Innsyn i hvilke opplysninger vi har om deg.",
        "Retting av feil eller ufullstendige opplysninger.",
        "Sletting av opplysninger vi ikke har plikt til å beholde.",
        "Begrensning av eller innsigelse mot behandlingen.",
        "Dataportabilitet, altså å få opplysningene utlevert i et vanlig filformat.",
        "Å trekke tilbake samtykke når som helst, uten at det påvirker behandling som allerede er gjort.",
      ],
      paragraphs: [
        `Send en e-post til ${dchubBrand.email}, så svarer vi innen 30 dager. Mener du at behandlingen er i strid med regelverket, kan du klage til Datatilsynet.`,
      ],
    },
    {
      id: "sikkerhet",
      title: "Sikkerhet",
      paragraphs: [
        "Opplysninger overføres kryptert, og tilgang er begrenset til dem som trenger det for å svare deg og levere tjenesten. Coachingsamtaler er konfidensielle, og notater fra samtaler deles ikke med arbeidsgiver eller andre.",
      ],
    },
  ],
};

export const cookieNotice = {
  heading: "Informasjonskapsler",
  text: "Vi bruker nødvendige informasjonskapsler for at siden skal fungere, og analysekapsler for å forstå hvordan siden brukes. Du velger selv.",
  accept: "Godta alle",
  reject: "Bare nødvendige",
  link: "Les personvernerklæringen",
};
