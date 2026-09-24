import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";

import { Button } from "@/components/ui/button";
import { getSecurityStatus } from "@/lib/site.functions";
import { cn } from "@/lib/utils";

// Tabeller som bevisst er offentlig lesbare (nettsidetekst).
const INTENTIONALLY_PUBLIC = new Set(["site_content"]);

type Level = "ok" | "warn" | "error";

function Badge({ level, children }: { level: Level; children: React.ReactNode }) {
  return (
    <span
      className={cn(
        "inline-block rounded px-2 py-0.5 text-xs font-semibold",
        level === "ok" && "bg-teal/15 text-teal",
        level === "warn" && "bg-accent text-accent-foreground",
        level === "error" && "bg-destructive/15 text-destructive",
      )}
    >
      {children}
    </span>
  );
}

export function SecurityPanel() {
  const fetchStatus = useServerFn(getSecurityStatus);
  const q = useQuery({ queryKey: ["security-status"], queryFn: () => fetchStatus() });

  if (q.isLoading) return <p className="text-sm text-muted-foreground">Kontrollerer ...</p>;
  if (q.error || !q.data)
    return <p className="text-sm text-destructive">Kunne ikke hente sikkerhetsstatus.</p>;

  const s = q.data;
  const alerts: { level: Level; text: string }[] = [];

  for (const t of s.tables) {
    if (!t.rls_enabled) alerts.push({ level: "error", text: `Tabellen ${t.name} mangler tilgangsregler (RLS er av).` });
    else if (t.open_policies > 0 && !INTENTIONALLY_PUBLIC.has(t.name))
      alerts.push({ level: "warn", text: `Tabellen ${t.name} har en regel som slipper alle gjennom.` });
  }
  for (const b of s.buckets) {
    if (b.public) alerts.push({ level: "error", text: `Lagringsbøtten ${b.name} er offentlig.` });
    else if (b.policies === 0) alerts.push({ level: "warn", text: `Lagringsbøtten ${b.name} har ingen tilgangsregler.` });
  }
  if (s.leads.client_write_policies > 0 || s.leads.client_write_grants > 0)
    alerts.push({ level: "error", text: "Henvendelser kan skrives direkte fra nettleseren. Kun serveren skal kunne lagre dem." });
  if (s.leads.hubspot_failed_30d > 0)
    alerts.push({ level: "warn", text: `${s.leads.hubspot_failed_30d} henvendelser siste 30 dager ble ikke sendt til HubSpot.` });

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-xs text-muted-foreground">
          Sist kontrollert {new Date(s.checked_at).toLocaleString("nb-NO")}
        </p>
        <Button size="sm" variant="outline" onClick={() => q.refetch()} disabled={q.isFetching}>
          {q.isFetching ? "Kontrollerer ..." : "Kontroller på nytt"}
        </Button>
      </div>

      <section
        className={cn(
          "rounded-md border p-5",
          alerts.length === 0 ? "border-teal/40 bg-teal/5" : "border-destructive/40 bg-destructive/5",
        )}
      >
        <h2 className="text-lg">{alerts.length === 0 ? "Ingen avvik funnet" : `${alerts.length} avvik krever oppmerksomhet`}</h2>
        {alerts.length > 0 ? (
          <ul className="mt-3 space-y-2">
            {alerts.map((a, i) => (
              <li key={i} className="flex items-start gap-2 text-sm">
                <Badge level={a.level}>{a.level === "error" ? "Kritisk" : "Advarsel"}</Badge>
                <span>{a.text}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </section>

      <section className="rounded-md border border-border bg-card">
        <h2 className="border-b border-border px-4 py-3 text-lg">Tilgangsregler per tabell</h2>
        <table className="w-full text-left text-sm">
          <thead className="text-xs tracking-wider text-muted-foreground uppercase">
            <tr><th className="px-4 py-2">Tabell</th><th className="px-4 py-2">RLS</th><th className="px-4 py-2">Regler</th><th className="px-4 py-2">Status</th></tr>
          </thead>
          <tbody>
            {s.tables.map((t) => {
              const level: Level = !t.rls_enabled ? "error" : t.open_policies > 0 && !INTENTIONALLY_PUBLIC.has(t.name) ? "warn" : "ok";
              return (
                <tr key={t.name} className="border-t border-border">
                  <td className="px-4 py-2">{t.name}</td>
                  <td className="px-4 py-2">{t.rls_enabled ? "På" : "Av"}</td>
                  <td className="px-4 py-2">{t.policies}</td>
                  <td className="px-4 py-2">
                    <Badge level={level}>
                      {level === "ok" ? (INTENTIONALLY_PUBLIC.has(t.name) ? "OK, bevisst offentlig" : "OK") : level === "warn" ? "Åpen regel" : "Ubeskyttet"}
                    </Badge>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>

      <section className="rounded-md border border-border bg-card">
        <h2 className="border-b border-border px-4 py-3 text-lg">Lagringsbøtter</h2>
        <table className="w-full text-left text-sm">
          <tbody>
            {s.buckets.length === 0 ? (
              <tr><td className="px-4 py-3 text-muted-foreground">Ingen lagringsbøtter.</td></tr>
            ) : (
              s.buckets.map((b) => (
                <tr key={b.name} className="border-t border-border first:border-0">
                  <td className="px-4 py-2">{b.name}</td>
                  <td className="px-4 py-2">{b.public ? "Offentlig" : "Privat"}</td>
                  <td className="px-4 py-2">{b.policies} regler</td>
                  <td className="px-4 py-2">
                    <Badge level={b.public ? "error" : b.policies === 0 ? "warn" : "ok"}>
                      {b.public ? "Offentlig" : b.policies === 0 ? "Uten regler" : "OK"}
                    </Badge>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </section>

      <section className="rounded-md border border-border bg-card p-5">
        <h2 className="text-lg">Lagring av henvendelser</h2>
        <dl className="mt-4 grid gap-4 text-sm sm:grid-cols-2">
          <div>
            <dt className="text-muted-foreground">Kun via server</dt>
            <dd className="mt-1">
              <Badge level={s.leads.client_write_policies + s.leads.client_write_grants === 0 ? "ok" : "error"}>
                {s.leads.client_write_policies + s.leads.client_write_grants === 0 ? "Ja" : "Nei, direkte skrivetilgang finnes"}
              </Badge>
            </dd>
          </div>
          <div><dt className="text-muted-foreground">Henvendelser siste 30 dager</dt><dd className="mt-1">{s.leads.total_30d}</dd></div>
          <div>
            <dt className="text-muted-foreground">Ikke sendt til HubSpot (30 dager)</dt>
            <dd className="mt-1"><Badge level={s.leads.hubspot_failed_30d === 0 ? "ok" : "warn"}>{s.leads.hubspot_failed_30d}</Badge></dd>
          </div>
          <div>
            <dt className="text-muted-foreground">Siste henvendelse</dt>
            <dd className="mt-1">{s.leads.last_insert ? new Date(s.leads.last_insert).toLocaleString("nb-NO") : "Ingen"}</dd>
          </div>
        </dl>
      </section>
    </div>
  );
}
