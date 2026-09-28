import type { Locale } from "@/lib/site-content";

export type ResearchSource = {
  title: string;
  publisher: string;
  year: string;
  finding: string;
  url: string;
};

export type ResearchGroup = {
  id: string;
  eyebrow: string;
  title: string;
  lead: string;
  sources: ResearchSource[];
};

export type ResearchQuote = {
  text: string;
  author: string;
  role: string;
  url: string;
};

export type ResearchContent = {
  meta: { title: string; description: string };
  hero: { eyebrow: string; title: string; lead: string };
  groups: ResearchGroup[];
  quotesTitle: string;
  quotesLead: string;
  quotes: ResearchQuote[];
  closing: { title: string; text: string; cta: string };
  readSource: string;
};

export const researchPaths = { no: "/forskning", en: "/en/research" } as const;

export const researchContent: Record<Locale, ResearchContent> = {
  no: {
    meta: {
      title: "Forskning | QuestPulse",
      description:
        "Forskningen bak QuestPulse: hvorfor løpende signaler, teamdynamikk og lederhandling gir bedre beslutninger om mennesker og organisasjon.",
    },
    hero: {
      eyebrow: "Forskningsgrunnlag",
      title: "Bygget på dokumentert kunnskap",
      lead: "QuestPulse bygger på flere tiår med forskning om engasjement, teamdynamikk, ledelse og organisatorisk helse. Her er kildene vi hviler på, og hvorfor de støtter måten vi jobber på.",
    },
    groups: [
      {
        id: "tidligere",
        eyebrow: "Tema 1",
        title: "Se det tidligere",
        lead: "Engasjement og belastning svinger over tid. Periodiske målinger fanger derfor ikke utviklingen mens den skjer, og problemer holdes ofte skjult i organisasjonen.",
        sources: [
          {
            title: "It's about time: measuring the pulse of engagement",
            publisher: "Strategic HR Review, Winton & Palmer",
            year: "2018",
            finding:
              "Engasjement er dynamisk og svinger fra uke til uke. Forfatterne argumenterer for at virksomheter må supplere årlige undersøkelser med hyppigere målinger for å få data som er mulig å handle på i tide.",
            url: "https://exa.ai/library/publication/ktc8b1r4vdc",
          },
          {
            title: "Taking the pulse: a qualitative study on pulse survey implementation",
            publisher: "Frontiers in Organizational Psychology, Berthelsen & Muhonen, Malmö universitet",
            year: "2026",
            finding:
              "Korte, hyppige målinger brukes i organisasjoner som beslutningsgrunnlag og for løpende styring av psykososial risiko, ikke bare som årlig temperaturmåling.",
            url: "https://doi.org/10.3389/forgp.2025.1696769",
          },
          {
            title: "Organizational Silence: A Barrier to Change and Development",
            publisher: "Academy of Management Review, Morrison & Milliken",
            year: "2000",
            finding:
              "Ansatte tilbakeholder systematisk informasjon om problemer. Uten en trygg kanal for løpende signaler ser ledelsen utviklingen først når konsekvensene er synlige.",
            url: "http://journals.aom.org/doi/full/10.5465/amr.2000.3707697",
          },
          {
            title: "Job Satisfaction and Employee Turnover: A Firm-Level Perspective",
            publisher: "IZA Discussion Paper, Frederiksen, Aarhus Universitet",
            year: "2015",
            finding:
              "Jobbtilfredshet målt i virksomheten forutsier faktisk fratreden. Signalene finnes i organisasjonen før konsekvensen inntreffer, for dem som måler dem.",
            url: "https://docs.iza.org/dp9296.pdf",
          },
        ],
      },
      {
        id: "virker",
        eyebrow: "Tema 2",
        title: "Gjør mer av det som virker",
        lead: "Det er ikke hvem som sitter i teamet som avgjør ytelsen, men hvordan teamet samarbeider. Og lederen er den største enkeltfaktoren for engasjement.",
        sources: [
          {
            title: "Project Aristotle: Understand team effectiveness",
            publisher: "Google re:Work",
            year: "2015",
            finding:
              "Etter over 200 intervjuer og analyse av 180 team fant Google at hvem som sitter i teamet betyr mindre enn hvordan medlemmene samarbeider. Psykologisk trygghet var den viktigste dynamikken.",
            url: "https://rework.withgoogle.com/intl/en/guides/understand-team-effectiveness",
          },
          {
            title: "Creating Psychological Safety in the Workplace",
            publisher: "Research-Technology Management, om Amy Edmondsons forskning ved Harvard",
            year: "2023",
            finding:
              "Psykologisk trygghet er sjelden i praksis, men avgjørende for læring og ytelse. Når folk holder tilbake tankene sine, mister teamet små læringsøyeblikk hver dag.",
            url: "https://www.tandfonline.com/doi/full/10.1080/08956308.2023.2164439",
          },
          {
            title: "Managers Account for 70% of Variance in Employee Engagement",
            publisher: "Gallup, State of the American Manager",
            year: "2015",
            finding:
              "Ledere forklarer minst 70 prosent av variasjonen i engasjement på tvers av team. Én av to ansatte har sluttet for å komme seg vekk fra lederen sin. Lederhandling er derfor konverteringspunktet.",
            url: "https://news.gallup.com/businessjournal/182792/managers-account-variance-employee-engagement.aspx",
          },
        ],
      },
      {
        id: "effekt",
        eyebrow: "Tema 3",
        title: "Dokumenter effekten",
        lead: "Sammenhengen mellom mennesker, ledelse og forretningsresultater er blant de best dokumenterte funnene i moderne organisasjonsforskning.",
        sources: [
          {
            title: "Q12 Meta-Analysis, 11th Edition",
            publisher: "Gallup",
            year: "2024",
            finding:
              "Verdens største studie av sitt slag: 183 806 team og 3,3 millioner ansatte på tvers av 347 organisasjoner. Dokumenterer sammenheng mellom engasjement og 11 forretningsresultater, blant dem lønnsomhet, produktivitet, turnover og fravær.",
            url: "https://www.gallup.com/workplace/321725/gallup-q12-meta-analysis-report.aspx",
          },
          {
            title: "Organizational health is (still) the key to long-term performance",
            publisher: "McKinsey & Company",
            year: "2024",
            finding:
              "Over 20 år med forskning gjennom Organizational Health Index viser at organisatorisk helse er den beste prediktoren for verdiskaping. Sunnere organisasjoner leverer tre ganger høyere avkastning til eierne over tid, uavhengig av bransje.",
            url: "https://www.mckinsey.com/capabilities/people-and-organizational-performance/our-insights/organizational-health-is-still-the-key-to-long-term-performance",
          },
          {
            title: "Burn-out an occupational phenomenon, ICD-11",
            publisher: "Verdens helseorganisasjon (WHO)",
            year: "2019",
            finding:
              "Utbrenthet er definert som et arbeidsrelatert fenomen som skyldes kronisk arbeidsstress som ikke er håndtert. Belastning er en organisasjonsutfordring som kan håndteres før den blir et fraværstall.",
            url: "https://www.who.int/news/item/28-05-2019-burn-out-an-occupational-phenomenon-international-classification-of-diseases",
          },
          {
            title: "Employee Voice and Silence: Taking Stock a Decade Later",
            publisher: "Annual Review of Organizational Psychology, Morrison",
            year: "2023",
            finding:
              "Hundrevis av studier viser når og hvorfor ansatte velger å si ifra eller tie, og hva det betyr for organisasjonen. Kanaler for stemme må utformes bevisst.",
            url: "https://www.annualreviews.org/content/journals/10.1146/annurev-orgpsych-120920-054654",
          },
        ],
      },
    ],
    quotesTitle: "Uttalelser fra forskningen",
    quotesLead: "Tre sitater vi mener oppsummerer hvorfor dette feltet betyr noe.",
    quotes: [
      {
        text: "Who is on a team matters less than how the team members interact, structure their work, and view their contributions.",
        author: "Julia Rozovsky",
        role: "Analyst, Google People Operations",
        url: "https://rework.withgoogle.com/intl/en/guides/understand-team-effectiveness",
      },
      {
        text: "Every time we withhold our thoughts, we rob ourselves and our colleagues of small moments of learning.",
        author: "Amy C. Edmondson",
        role: "Professor, Harvard Business School",
        url: "https://www.tandfonline.com/doi/full/10.1080/08956308.2023.2164439",
      },
      {
        text: "People leave managers more than companies.",
        author: "Jim Harter",
        role: "Chief Scientist, Gallup",
        url: "https://news.gallup.com/opinion/gallup/186503/drives-employees-engagement-manager-ceo.aspx",
      },
    ],
    closing: {
      title: "Slik bruker vi forskningen",
      text: "QuestPulse er ikke en medarbeiderundersøkelse og ikke et måleverktøy. Forskningen over viser at signalene finnes i organisasjonen hele tiden, at teamdynamikk og ledelse avgjør utfallet, og at sammenhengen med forretningsresultater er dokumentert. Vår oppgave er å gjøre disse signalene tilgjengelige som et felles beslutningsgrunnlag, mens det fortsatt er tid til å handle.",
      cta: "Book kartleggingssamtale",
    },
    readSource: "Les kilden",
  },
  en: {
    meta: {
      title: "Research | QuestPulse",
      description:
        "The research behind QuestPulse: why continuous signals, team dynamics and leadership action produce better decisions about people and organizations.",
    },
    hero: {
      eyebrow: "Research foundation",
      title: "Built on documented knowledge",
      lead: "QuestPulse rests on decades of research into engagement, team dynamics, leadership and organizational health. These are the sources we rely on, and why they support the way we work.",
    },
    groups: [
      {
        id: "earlier",
        eyebrow: "Theme 1",
        title: "See it earlier",
        lead: "Engagement and strain fluctuate over time. Periodic measurements miss the development while it happens, and problems are often held back inside the organization.",
        sources: [
          {
            title: "It's about time: measuring the pulse of engagement",
            publisher: "Strategic HR Review, Winton & Palmer",
            year: "2018",
            finding:
              "Engagement is dynamic and shifts from week to week. The authors argue that organizations must supplement annual surveys with more frequent measurement to get data that can be acted on in time.",
            url: "https://exa.ai/library/publication/ktc8b1r4vdc",
          },
          {
            title: "Taking the pulse: a qualitative study on pulse survey implementation",
            publisher: "Frontiers in Organizational Psychology, Berthelsen & Muhonen, Malmö University",
            year: "2026",
            finding:
              "Short, frequent measurements are used in organizations as a decision basis and for ongoing management of psychosocial risk, not only as an annual temperature check.",
            url: "https://doi.org/10.3389/forgp.2025.1696769",
          },
          {
            title: "Organizational Silence: A Barrier to Change and Development",
            publisher: "Academy of Management Review, Morrison & Milliken",
            year: "2000",
            finding:
              "Employees systematically withhold information about problems. Without a safe channel for continuous signals, leadership sees the development only once the consequences are visible.",
            url: "http://journals.aom.org/doi/full/10.5465/amr.2000.3707697",
          },
          {
            title: "Job Satisfaction and Employee Turnover: A Firm-Level Perspective",
            publisher: "IZA Discussion Paper, Frederiksen, Aarhus University",
            year: "2015",
            finding:
              "Job satisfaction measured at company level predicts actual turnover. The signals exist in the organization before the consequence occurs, for those who measure them.",
            url: "https://docs.iza.org/dp9296.pdf",
          },
        ],
      },
      {
        id: "works",
        eyebrow: "Theme 2",
        title: "Do more of what works",
        lead: "It is not who is on the team that determines performance, but how the team works together. And the manager is the single largest factor for engagement.",
        sources: [
          {
            title: "Project Aristotle: Understand team effectiveness",
            publisher: "Google re:Work",
            year: "2015",
            finding:
              "After more than 200 interviews and analysis of 180 teams, Google found that who is on a team matters less than how the members interact. Psychological safety was the most important dynamic.",
            url: "https://rework.withgoogle.com/intl/en/guides/understand-team-effectiveness",
          },
          {
            title: "Creating Psychological Safety in the Workplace",
            publisher: "Research-Technology Management, on Amy Edmondson's research at Harvard",
            year: "2023",
            finding:
              "Psychological safety is rare in practice, yet decisive for learning and performance. When people hold back their thoughts, the team loses small moments of learning every day.",
            url: "https://www.tandfonline.com/doi/full/10.1080/08956308.2023.2164439",
          },
          {
            title: "Managers Account for 70% of Variance in Employee Engagement",
            publisher: "Gallup, State of the American Manager",
            year: "2015",
            finding:
              "Managers explain at least 70 percent of the variance in engagement across teams. One in two employees has left a job to get away from their manager. Leadership action is the conversion point.",
            url: "https://news.gallup.com/businessjournal/182792/managers-account-variance-employee-engagement.aspx",
          },
        ],
      },
      {
        id: "effect",
        eyebrow: "Theme 3",
        title: "Document the effect",
        lead: "The connection between people, leadership and business outcomes is among the best documented findings in modern organizational research.",
        sources: [
          {
            title: "Q12 Meta-Analysis, 11th Edition",
            publisher: "Gallup",
            year: "2024",
            finding:
              "The largest study of its kind: 183,806 teams and 3.3 million employees across 347 organizations. It documents the link between engagement and 11 business outcomes, including profitability, productivity, turnover and absenteeism.",
            url: "https://www.gallup.com/workplace/321725/gallup-q12-meta-analysis-report.aspx",
          },
          {
            title: "Organizational health is (still) the key to long-term performance",
            publisher: "McKinsey & Company",
            year: "2024",
            finding:
              "More than 20 years of research through the Organizational Health Index shows that organizational health is the best predictor of value creation. Healthier organizations deliver three times the shareholder returns over time, regardless of industry.",
            url: "https://www.mckinsey.com/capabilities/people-and-organizational-performance/our-insights/organizational-health-is-still-the-key-to-long-term-performance",
          },
          {
            title: "Burn-out an occupational phenomenon, ICD-11",
            publisher: "World Health Organization",
            year: "2019",
            finding:
              "Burnout is defined as a work-related phenomenon caused by chronic workplace stress that has not been successfully managed. Strain is an organizational challenge that can be addressed before it becomes an absence figure.",
            url: "https://www.who.int/news/item/28-05-2019-burn-out-an-occupational-phenomenon-international-classification-of-diseases",
          },
          {
            title: "Employee Voice and Silence: Taking Stock a Decade Later",
            publisher: "Annual Review of Organizational Psychology, Morrison",
            year: "2023",
            finding:
              "Hundreds of studies show when and why employees choose to speak up or stay silent, and what it means for the organization. Channels for voice must be designed deliberately.",
            url: "https://www.annualreviews.org/content/journals/10.1146/annurev-orgpsych-120920-054654",
          },
        ],
      },
    ],
    quotesTitle: "Voices from the research",
    quotesLead: "Three quotes we believe capture why this field matters.",
    quotes: [
      {
        text: "Who is on a team matters less than how the team members interact, structure their work, and view their contributions.",
        author: "Julia Rozovsky",
        role: "Analyst, Google People Operations",
        url: "https://rework.withgoogle.com/intl/en/guides/understand-team-effectiveness",
      },
      {
        text: "Every time we withhold our thoughts, we rob ourselves and our colleagues of small moments of learning.",
        author: "Amy C. Edmondson",
        role: "Professor, Harvard Business School",
        url: "https://www.tandfonline.com/doi/full/10.1080/08956308.2023.2164439",
      },
      {
        text: "People leave managers more than companies.",
        author: "Jim Harter",
        role: "Chief Scientist, Gallup",
        url: "https://news.gallup.com/opinion/gallup/186503/drives-employees-engagement-manager-ceo.aspx",
      },
    ],
    closing: {
      title: "How we use the research",
      text: "QuestPulse is not an employee survey and not a measurement tool. The research above shows that the signals exist in the organization all the time, that team dynamics and leadership determine the outcome, and that the link to business results is documented. Our task is to make these signals available as a shared basis for decisions, while there is still time to act.",
      cta: "Book an introductory conversation",
    },
    readSource: "Read the source",
  },
};
