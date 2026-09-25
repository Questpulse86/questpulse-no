import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { analyzeSecurityIncident } from "@/lib/site.functions";

type Advice = Awaited<ReturnType<typeof analyzeSecurityIncident>>;

const PRIORITY_STYLE: Record<string, string> = {
  kritisk: "bg-destructive text-destructive-foreground",
  høy: "bg-primary text-primary-foreground",
  middels: "bg-accent text-accent-foreground",
  lav: "bg-muted text-muted-foreground",
};

export function IncidentAdvisor() {
  const analyze = useServerFn(analyzeSecurityIncident);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [advice, setAdvice] = useState<Advice | null>(null);
  const [done, setDone] = useState<Record<number, boolean>>({});

  async function run() {
    setLoading(true);
    setError(null);
    setAdvice(null);
    setDone({});
    try {
      setAdvice(await analyze({ data: { description: text } }));
    } catch (e) {
      setError(e instanceof Error ? e.message : "Analysen feilet.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-6">
      <section className="rounded-md border border-border bg-card p-6">
        <h2 className="text-lg">Beskriv sikkerhetsavviket</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Hva skjedde, når ble det oppdaget, hvilke systemer og data kan være berørt. Ikke skriv navn.
          E-post, telefonnummer, fødselsnummer og IP-adresser fjernes automatisk før analysen.
        </p>
        <Textarea
          className="mt-4"
          rows={7}
          value={text}
          maxLength={5000}
          onChange={(e) => setText(e.target.value)}
          placeholder="Eksempel: En eksportfil med henvendelser ble delt via en offentlig lenke i to dager før det ble oppdaget ..."
        />
        <div className="mt-4 flex items-center justify-between gap-3">
          <span className="text-xs text-muted-foreground">{text.length} / 5000</span>
          <Button onClick={run} disabled={loading || text.trim().length < 20}>
            {loading ? "Analyserer ..." : "Foreslå tiltak"}
          </Button>
        </div>
        {error ? <p className="mt-4 text-sm text-destructive">{error}</p> : null}
      </section>

      {advice ? (
        <section className="rounded-md border border-border bg-card p-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-lg">Foreslåtte tiltak</h2>
            <span className={`rounded px-2 py-1 text-xs uppercase ${PRIORITY_STYLE[advice.severity] ?? PRIORITY_STYLE["lav"]}`}>
              Alvorlighet: {advice.severity}
            </span>
          </div>
          <p className="mt-3 text-sm">{advice.summary}</p>
          {advice.redacted ? (
            <p className="mt-2 text-xs text-muted-foreground">Direkte identifikatorer ble fjernet før analysen.</p>
          ) : null}
          <ol className="mt-5 space-y-3">
            {advice.actions.map((a, i) => (
              <li key={i} className="rounded border border-border p-4">
                <label className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    className="mt-1"
                    checked={!!done[i]}
                    onChange={(e) => setDone((p) => ({ ...p, [i]: e.target.checked }))}
                  />
                  <div className={done[i] ? "opacity-60" : ""}>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className={`rounded px-2 py-0.5 text-xs uppercase ${PRIORITY_STYLE[a.priority] ?? PRIORITY_STYLE["lav"]}`}>
                        {a.priority}
                      </span>
                      <strong className="text-sm">{a.title}</strong>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">{a.why}</p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Ansvar: {a.owner} · Frist: {a.timeframe}
                    </p>
                  </div>
                </label>
              </li>
            ))}
          </ol>
          <p className="mt-5 text-xs text-muted-foreground">
            Forslagene er beslutningsstøtte. Du vurderer, justerer og godkjenner selv hvilke tiltak som gjennomføres.
          </p>
        </section>
      ) : null}
    </div>
  );
}
