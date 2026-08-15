import { useState } from "react";

import type { Locale } from "@/lib/site-content";

type RoleKey = "employee" | "leader" | "hr" | "board";

type RoleCopy = {
  tab: string;
  title: string;
  lead: string;
  points: string[];
  caption: string;
};

const roleOrder: RoleKey[] = ["employee", "leader", "hr", "board"];

const copy: Record<Locale, Record<RoleKey, RoleCopy>> = {
  no: {
    employee: {
      tab: "Ansatt",
      title: "Et privat rom, med verdi tilbake",
      lead: "Den ansatte får et sted for refleksjon som er lukket. Ingen leder ser hva den enkelte har skrevet.",
      points: [
        "Individuelle svar deles aldri videre",
        "Tilgjengelig i verktøyene man allerede bruker",
        "Egen utvikling, ikke rapportering oppover",
      ],
      caption: "Enkeltsvar forblir innenfor det private rommet.",
    },
    leader: {
      tab: "Leder",
      title: "Teamets bilde, uten enkeltpersoner",
      lead: "Lederen ser mønstre på teamnivå, med terskler som gjør at ingen enkeltperson kan identifiseres.",
      points: [
        "Belastning og friksjon samlet for teamet",
        "Forslag til hva som bør gjøres først",
        "Utviklingen etter at tiltak er satt i gang",
      ],
      caption: "Aggregert til teamnivå før noe vises.",
    },
    hr: {
      tab: "HR",
      title: "Prioritering på tvers av enheter",
      lead: "HR ser hvor innsatsen gir mest effekt, uten å bygge bildet manuelt hver gang noen spør.",
      points: [
        "Oversikt mellom de større undersøkelsene",
        "Rangert bilde av hvor støtten trengs nå",
        "Dokumentasjon som bygges underveis",
      ],
      caption: "Enheter rangert etter behov, ikke etter støy.",
    },
    board: {
      tab: "Ledelse og styre",
      title: "Organisatorisk risiko i kjent format",
      lead: "Ledelsen får utviklingen presentert som annen risiko: tidlig, dokumentert og etterprøvbar.",
      points: [
        "Retning før tallene slår inn i regnskapet",
        "Tiltak og effekt dokumentert samlet",
        "Klart til bruk mot styre og tilsyn",
      ],
      caption: "Utvikling over tid, ikke et øyeblikksbilde.",
    },
  },
  en: {
    employee: {
      tab: "Employee",
      title: "A private space, with value in return",
      lead: "The employee gets a closed space for reflection. No manager sees what an individual has written.",
      points: [
        "Individual answers are never passed on",
        "Available in the tools people already use",
        "Personal development, not upward reporting",
      ],
      caption: "Individual answers stay inside the private space.",
    },
    leader: {
      tab: "Leader",
      title: "The team picture, without individuals",
      lead: "The leader sees patterns at team level, with thresholds that keep individuals unidentifiable.",
      points: [
        "Load and friction gathered for the team",
        "Suggestions for what to address first",
        "The trend after actions are under way",
      ],
      caption: "Aggregated to team level before anything is shown.",
    },
    hr: {
      tab: "HR",
      title: "Prioritisation across units",
      lead: "HR sees where effort pays off most, without rebuilding the picture manually every time someone asks.",
      points: [
        "Overview between the larger surveys",
        "A ranked view of where support is needed now",
        "Documentation built along the way",
      ],
      caption: "Units ranked by need, not by noise.",
    },
    board: {
      tab: "Executives and board",
      title: "Organisational risk in a familiar format",
      lead: "Leadership gets the trend presented like other risk: early, documented and verifiable.",
      points: [
        "Direction before the numbers hit the accounts",
        "Actions and effect documented together",
        "Ready for the board and for supervisory bodies",
      ],
      caption: "A trend over time, not a snapshot.",
    },
  },
};

function EmployeeScene() {
  const dots = [
    [26, 32],
    [58, 24],
    [92, 40],
    [40, 62],
    [74, 70],
    [110, 62],
  ];
  return (
    <svg viewBox="0 0 320 200" className="h-full w-full" role="presentation">
      <rect x="16" y="14" width="180" height="172" rx="10" className="qp-scene-panel" />
      {dots.map(([x, y], index) => (
        <circle
          key={`${x}-${y}`}
          cx={x + 30}
          cy={y + 40}
          r="7"
          className="qp-scene-dot"
          style={{ animationDelay: `${index * 0.12}s` }}
        />
      ))}
      <path
        d="M232 60 h64 M232 84 h44 M232 108 h56"
        className="qp-scene-blocked"
        strokeLinecap="round"
      />
      <path d="M244 132 l52 -52 M244 80 l52 52" className="qp-scene-cross" strokeLinecap="round" />
    </svg>
  );
}

function LeaderScene() {
  const bars = [46, 78, 60, 104, 70, 88];
  return (
    <svg viewBox="0 0 320 200" className="h-full w-full" role="presentation">
      <line x1="24" y1="164" x2="296" y2="164" className="qp-scene-axis" />
      {bars.map((height, index) => (
        <rect
          key={index}
          x={34 + index * 44}
          width="26"
          rx="4"
          y={164 - height}
          height={height}
          className={index === 3 ? "qp-scene-bar qp-scene-bar-active" : "qp-scene-bar"}
          style={{
            transformOrigin: `0px 164px`,
            animationDelay: `${index * 0.09}s`,
          }}
        />
      ))}
      <rect x="150" y="24" width="76" height="18" rx="9" className="qp-scene-chip" />
    </svg>
  );
}

function HrScene() {
  const rows = [0, 1, 2, 3];
  return (
    <svg viewBox="0 0 320 200" className="h-full w-full" role="presentation">
      {rows.map((row) => (
        <g key={row} className="qp-scene-row" style={{ animationDelay: `${row * 0.12}s` }}>
          <rect x="24" y={26 + row * 42} width="272" height="30" rx="6" className="qp-scene-panel" />
          <rect
            x="24"
            y={26 + row * 42}
            width={200 - row * 46}
            height="30"
            rx="6"
            className={row === 0 ? "qp-scene-fill qp-scene-fill-active" : "qp-scene-fill"}
          />
        </g>
      ))}
    </svg>
  );
}

function BoardScene() {
  return (
    <svg viewBox="0 0 320 200" className="h-full w-full" role="presentation">
      <rect x="24" y="34" width="272" height="46" rx="6" className="qp-scene-band" />
      <line x1="24" y1="164" x2="296" y2="164" className="qp-scene-axis" />
      <path
        d="M28 148 C 78 142, 104 74, 150 66 C 196 58, 226 112, 292 122"
        className="qp-scene-line"
        fill="none"
      />
      <circle cx="150" cy="66" r="8" className="qp-scene-marker" />
    </svg>
  );
}

const scenes: Record<RoleKey, () => JSX.Element> = {
  employee: EmployeeScene,
  leader: LeaderScene,
  hr: HrScene,
  board: BoardScene,
};

export function RoleShowcase({
  locale,
  eyebrow,
  title,
  lead,
}: {
  locale: Locale;
  eyebrow?: string;
  title: string;
  lead?: string;
}) {
  const [role, setRole] = useState<RoleKey>("employee");
  const text = copy[locale];
  const active = text[role];
  const Scene = scenes[role];

  return (
    <section className="border-y border-border bg-card">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <div className="max-w-3xl">
          {eyebrow ? <p className="qp-eyebrow">{eyebrow}</p> : null}
          <h2 className="mt-4 text-3xl leading-tight sm:text-4xl">{title}</h2>
          {lead ? <p className="mt-5 text-lg text-muted-foreground">{lead}</p> : null}
        </div>

        <div
          role="tablist"
          aria-label={title}
          className="mt-10 flex flex-wrap gap-2 border-b border-border"
        >
          {roleOrder.map((key) => {
            const selected = key === role;
            return (
              <button
                key={key}
                role="tab"
                type="button"
                aria-selected={selected}
                onClick={() => setRole(key)}
                className={[
                  "-mb-px border-b-2 px-4 py-3 text-sm font-bold transition-colors",
                  selected
                    ? "border-teal text-navy"
                    : "border-transparent text-muted-foreground hover:text-navy",
                ].join(" ")}
              >
                {text[key].tab}
              </button>
            );
          })}
        </div>

        <div key={role} className="qp-scene-enter mt-12 grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h3 className="text-2xl font-bold">{active.title}</h3>
            <p className="mt-4 leading-relaxed text-muted-foreground">{active.lead}</p>
            <ul className="mt-7 space-y-3">
              {active.points.map((point, index) => (
                <li
                  key={point}
                  className="qp-scene-point flex gap-3 text-sm"
                  style={{ animationDelay: `${0.1 + index * 0.09}s` }}
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                  <span className="leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <figure className="rounded-md border border-border bg-background p-6">
            <div className="h-56 w-full">
              <Scene />
            </div>
            <figcaption className="mt-4 text-xs text-muted-foreground">{active.caption}</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
