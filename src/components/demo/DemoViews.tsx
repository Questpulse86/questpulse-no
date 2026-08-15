import { useState } from "react";

import {
  ACTION_TRACKING,
  BADGES,
  DEPARTMENTS,
  ORG_HEALTH_HISTORY,
  RISK_CATEGORIES,
  TEAMS,
  TEAM_RISKS,
  orgAverage,
  signalFor,
  signalLabel,
} from "@/components/demo/demo-data";
import {
  DemoCard,
  Gauge,
  MiniBars,
  SectionLabel,
  SignalPill,
  Sparkline,
  signalStyle,
} from "@/components/demo/DemoPrimitives";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export function ExecutiveView() {
  return (
    <div className="grid animate-fade-in grid-cols-1 gap-5 lg:grid-cols-3">
      <DemoCard>
        <SectionLabel>Organizational Health Index</SectionLabel>
        <div className="flex items-center gap-6">
          <div className="font-display text-5xl font-bold text-navy">72</div>
          <div className="min-w-0">
            <p className="mb-1 text-sm text-muted-foreground">Siste seks måneder</p>
            <Sparkline data={ORG_HEALTH_HISTORY} />
          </div>
        </div>
        <p className="mt-3 text-xs text-muted-foreground">
          Samlet indeks basert på løpende innsikt fra alle avdelinger. Ingen individdata inngår.
        </p>
      </DemoCard>

      <DemoCard className="lg:col-span-2">
        <SectionLabel>Strategisk risikobilde per avdeling</SectionLabel>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-[11px] tracking-wide text-muted-foreground uppercase">
                <th className="pr-3 pb-2 font-semibold">Avdeling</th>
                {RISK_CATEGORIES.map((k) => (
                  <th key={k.key} className="px-2 pb-2 font-semibold">
                    {k.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {DEPARTMENTS.map((d) => (
                <tr key={d.navn} className="border-t border-border">
                  <td className="py-2 pr-3 font-semibold whitespace-nowrap text-navy">{d.navn}</td>
                  {RISK_CATEGORIES.map((k) => {
                    const level = signalFor(d[k.key]);
                    const s = signalStyle(level);
                    return (
                      <td key={k.key} className="px-2 py-2">
                        <div
                          className="flex h-8 w-full items-center justify-center rounded-md text-xs font-semibold"
                          style={{ background: s.bg, color: s.color }}
                        >
                          {signalLabel[level]}
                        </div>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </DemoCard>

      <DemoCard className="lg:col-span-3">
        <SectionLabel>Tidlige varsler, fem indikatorer på organisasjonsnivå</SectionLabel>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {RISK_CATEGORIES.map((k) => (
            <Gauge key={k.key} value={orgAverage(k.key)} label={k.label} />
          ))}
        </div>
      </DemoCard>
    </div>
  );
}

export function DepartmentView() {
  return (
    <div className="animate-fade-in space-y-5">
      <DemoCard>
        <SectionLabel>Tverrteam-oversikt med hotspot-deteksjon</SectionLabel>
        <div className="space-y-3">
          {TEAMS.map((t) => (
            <div
              key={t.navn}
              className="rounded-md border p-4"
              style={{
                borderColor: t.hotspot ? "var(--signal-high-soft)" : "var(--border)",
                background: t.hotspot ? "var(--signal-high-soft)" : "transparent",
              }}
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-semibold text-navy">{t.navn}</span>
                  <SignalPill level={t.niva} />
                  {t.hotspot ? (
                    <span
                      className="text-xs font-semibold"
                      style={{ color: "var(--signal-high)" }}
                    >
                      Trenger oppmerksomhet nå
                    </span>
                  ) : null}
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span>Kapasitet</span>
                  <div className="h-2 w-28 overflow-hidden rounded-full bg-muted">
                    <div className="h-full bg-teal" style={{ width: `${t.kapasitet}%` }} />
                  </div>
                  <span className="font-semibold text-navy">{t.kapasitet} %</span>
                </div>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                <span className="font-semibold text-navy">Hvorfor: </span>
                {t.aarsak}
              </p>
              <p className="mt-1 text-sm text-navy">
                <span className="font-semibold">Anbefalt neste handling: </span>
                {t.handling}
              </p>
            </div>
          ))}
        </div>
      </DemoCard>

      <DemoCard>
        <SectionLabel>Kapasitetsoversikt per team</SectionLabel>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {TEAMS.map((t) => (
            <div key={t.navn} className="rounded-md border border-border p-4">
              <p className="text-sm font-semibold text-navy">{t.navn}</p>
              <p className="mt-2 font-display text-3xl font-bold text-teal">{t.kapasitet} %</p>
              <p className="mt-1 text-xs text-muted-foreground">
                Belegg mot normalkapasitet, aggregert for hele teamet.
              </p>
            </div>
          ))}
        </div>
      </DemoCard>
    </div>
  );
}

export function TeamView() {
  return (
    <div className="grid animate-fade-in grid-cols-1 gap-5 lg:grid-cols-3">
      <DemoCard>
        <SectionLabel>Prioritert risikoliste, Team Vekst</SectionLabel>
        <div className="space-y-3">
          {TEAM_RISKS.map((r) => (
            <div
              key={r.tema}
              className="flex items-center justify-between gap-3 border-b border-border pb-2 last:border-0"
            >
              <p className="text-sm text-muted-foreground">{r.tema}</p>
              <SignalPill level={r.niva} />
            </div>
          ))}
        </div>
      </DemoCard>

      <DemoCard className="border-teal/40 lg:col-span-2">
        <SectionLabel>Neste beste lederhandling</SectionLabel>
        <h3 className="mb-3 font-display text-xl font-bold text-navy">
          Skap pusterom før fredagens salgsgjennomgang
        </h3>
        <div className="grid gap-4 text-sm sm:grid-cols-3">
          <div>
            <p className="mb-1 font-semibold text-navy">Hvorfor dette betyr noe nå</p>
            <p className="text-muted-foreground">
              Møtetettheten har vært over terskel i tre uker, og svarraten på refleksjoner faller.
            </p>
          </div>
          <div>
            <p className="mb-1 font-semibold text-navy">Hva du bør gjøre</p>
            <p className="text-muted-foreground">
              Sett av 20 minutter uten agenda i morgendagens teammøte, og still åpne spørsmål.
            </p>
          </div>
          <div>
            <p className="mb-1 font-semibold" style={{ color: "var(--signal-high)" }}>
              Hva du bør unngå
            </p>
            <p className="text-muted-foreground">
              Ikke legg til enda et statusmøte for å følge opp risikoen.
            </p>
          </div>
        </div>
        <div className="mt-4 border-t border-border pt-4 text-sm">
          <p className="mb-1 font-semibold text-navy">Hvordan effekten måles</p>
          <p className="text-muted-foreground">
            Svarrate på refleksjonsspørsmål og møtetetthet følges de neste tre ukene.
          </p>
        </div>
      </DemoCard>

      <DemoCard>
        <SectionLabel>Forberedelse til 1:1</SectionLabel>
        <p className="mb-2 text-sm text-muted-foreground">Foreslåtte åpningsspørsmål:</p>
        <ul className="list-inside list-disc space-y-2 text-sm text-navy">
          <li>Hva har tatt mest energi denne uken?</li>
          <li>Hva trenger du mer av fra meg akkurat nå?</li>
          <li>Er det noe som burde vært sagt i teamet, men som ikke har blitt sagt?</li>
        </ul>
      </DemoCard>

      <DemoCard className="lg:col-span-2">
        <SectionLabel>Oppfølging av iverksatte tiltak</SectionLabel>
        <div className="space-y-4">
          {ACTION_TRACKING.map((a) => (
            <div
              key={a.tiltak}
              className="flex items-center justify-between gap-4 border-b border-border pb-3 last:border-0"
            >
              <div>
                <p className="text-sm font-semibold text-navy">{a.tiltak}</p>
                <p className="text-xs text-muted-foreground">Startet {a.startet}</p>
              </div>
              <MiniBars data={a.effekt} />
            </div>
          ))}
        </div>
      </DemoCard>
    </div>
  );
}

export function EmployeeView() {
  const [energi, setEnergi] = useState(6);
  const [mestring, setMestring] = useState(7);
  const [sendt, setSendt] = useState(false);

  return (
    <div className="grid animate-fade-in grid-cols-1 gap-5 lg:grid-cols-2">
      <div className="rounded-lg bg-navy p-6 text-navy-foreground lg:col-span-2">
        <div className="mb-1 flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-teal" />
          <p className="text-[11px] font-bold tracking-[0.16em] text-navy-foreground/70 uppercase">
            Privat rom for medarbeideren
          </p>
        </div>
        <p className="font-display text-lg font-bold">
          Kun synlig for deg, aldri delt med leder eller HR.
        </p>
        <p className="mt-1 text-sm text-navy-foreground/70">
          Ingenting herfra vises videre til noen i organisasjonen, og inngår aldri i aggregerte tall
          på en måte som kan spores tilbake til deg.
        </p>
      </div>

      <DemoCard>
        <SectionLabel>Dagens sjekk-inn, to minutter</SectionLabel>
        {!sendt ? (
          <div className="space-y-5">
            <div>
              <div className="mb-1 flex justify-between text-sm">
                <label htmlFor="qp-energi" className="font-medium text-navy">
                  Energi i dag
                </label>
                <span className="font-semibold text-teal">{energi}/10</span>
              </div>
              <input
                id="qp-energi"
                type="range"
                min={1}
                max={10}
                value={energi}
                onChange={(e) => setEnergi(Number(e.target.value))}
                className="w-full accent-teal"
              />
            </div>
            <div>
              <div className="mb-1 flex justify-between text-sm">
                <label htmlFor="qp-mestring" className="font-medium text-navy">
                  Følelse av mestring
                </label>
                <span className="font-semibold text-teal">{mestring}/10</span>
              </div>
              <input
                id="qp-mestring"
                type="range"
                min={1}
                max={10}
                value={mestring}
                onChange={(e) => setMestring(Number(e.target.value))}
                className="w-full accent-teal"
              />
            </div>
            <div>
              <label htmlFor="qp-notat" className="text-sm font-medium text-navy">
                Én ting du vil huske fra i dag
              </label>
              <Textarea
                id="qp-notat"
                rows={2}
                className="mt-1"
                placeholder="Skriv fritt, kun for deg selv"
              />
            </div>
            <Button size="sm" onClick={() => setSendt(true)}>
              Lagre sjekk-inn
            </Button>
          </div>
        ) : (
          <div className="animate-scale-in py-6 text-center">
            <p className="font-display text-3xl font-bold text-teal">✓</p>
            <p className="mt-2 font-semibold text-navy">Takk. Dette er kun synlig for deg.</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Du har nå 13 dager på rad med sjekk-inn.
            </p>
            <Button variant="outline" size="sm" className="mt-4" onClick={() => setSendt(false)}>
              Vis skjemaet igjen
            </Button>
          </div>
        )}
      </DemoCard>

      <DemoCard>
        <SectionLabel>Din mestringsreise</SectionLabel>
        <div className="mb-4 flex items-center gap-4">
          <div className="font-display text-4xl font-bold text-teal">13</div>
          <p className="text-sm text-muted-foreground">
            dager på rad med sjekk-inn. Din egen reise, ikke en konkurranse. Det finnes ingen
            rangering, og ingen andre kan se dette.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {BADGES.map((b) => (
            <div
              key={b.navn}
              className={
                b.laast
                  ? "rounded-md border border-border p-3 text-center opacity-50"
                  : "rounded-md border border-teal/40 bg-secondary p-3 text-center"
              }
            >
              <p className="text-xs font-semibold text-navy">{b.navn}</p>
              <p className="mt-1 text-[11px] text-muted-foreground">
                {b.laast ? "Ikke oppnådd ennå" : "Oppnådd, privat merke"}
              </p>
            </div>
          ))}
        </div>
      </DemoCard>
    </div>
  );
}
