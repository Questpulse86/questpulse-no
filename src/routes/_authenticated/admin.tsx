import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { getAdminOverview, saveSiteContent } from "@/lib/site.functions";
import { applyEdits, flatten, type Locale, type SiteContent } from "@/lib/site-content";

export const Route = createFileRoute("/_authenticated/admin")({
  head: () => ({
    meta: [
      { title: "Innholdspanel | QuestPulse" },
      { name: "description", content: "Rediger tekstene på QuestPulse-nettsiden og se leads." },
      { property: "og:title", content: "Innholdspanel | QuestPulse" },
      { property: "og:description", content: "Internt innholdspanel for QuestPulse." },
      { property: "og:type", content: "website" },
      { name: "robots", content: "noindex" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: AdminPage,
});

const LABELS: Record<string, string> = {
  brand: "Merkevare",
  nav: "Meny",
  hero: "Hero",
  problem: "Problemet",
  how: "Slik fungerer det",
  compliance: "Arbeidsmiljøloven",
  roles: "Verdi per rolle",
  trust: "Tillitsbånd",
  market: "Bank og finans",
  contact: "Kontaktseksjon",
  footer: "Bunntekst",
};

function AdminPage() {
  const navigate = useNavigate();
  const fetchOverview = useServerFn(getAdminOverview);
  const save = useServerFn(saveSiteContent);
  const [locale, setLocale] = useState<Locale>("no");
  const [tab, setTab] = useState<"content" | "leads" | "audit">("content");
  const [edits, setEdits] = useState<Record<string, string>>({});
  const [saving, setSaving] = useState(false);

  const overview = useQuery({ queryKey: ["admin-overview"], queryFn: () => fetchOverview() });

  const content = overview.data?.isAdmin ? overview.data.content[locale] : null;
  const fields = useMemo(() => (content ? flatten(content) : []), [content]);
  const groups = useMemo(() => {
    const map = new Map<string, { path: string; value: string }[]>();
    for (const field of fields) {
      const key = field.path.split(".")[0]!;
      map.set(key, [...(map.get(key) ?? []), field]);
    }
    return [...map.entries()];
  }, [fields]);

  async function onSave() {
    if (!content) return;
    setSaving(true);
    try {
      const next = applyEdits(content, edits);
      await save({ data: { locale, data: next as unknown as Record<string, unknown> } });
      setEdits({});
      await overview.refetch();
      toast.success("Innholdet er lagret og live på nettsiden.");
    } catch {
      toast.error("Kunne ikke lagre innholdet.");
    } finally {
      setSaving(false);
    }
  }

  async function signOut() {
    await supabase.auth.signOut();
    void navigate({ to: "/auth" });
  }

  if (overview.isLoading) {
    return <p className="p-10 text-sm text-muted-foreground">Laster ...</p>;
  }

  if (!overview.data?.isAdmin) {
    return (
      <div className="mx-auto max-w-lg px-5 py-24 text-center">
        <h1 className="text-2xl">Ingen tilgang</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Kontoen din mangler admin-rollen. Be om tilgang, eller logg inn med en annen konto.
        </p>
        <Button variant="outline" className="mt-6" onClick={signOut}>
          Logg ut
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-5 py-5">
          <div>
            <p className="qp-eyebrow">QuestPulse</p>
            <h1 className="mt-1 text-xl">Innholdspanel</h1>
          </div>
          <div className="flex items-center gap-2">
            <Button
              size="sm"
              variant={tab === "content" ? "default" : "outline"}
              onClick={() => setTab("content")}
            >
              Innhold
            </Button>
            <Button
              size="sm"
              variant={tab === "leads" ? "default" : "outline"}
              onClick={() => setTab("leads")}
            >
              Henvendelser ({overview.data.leads.length})
            </Button>
            <Button
              size="sm"
              variant={tab === "audit" ? "default" : "outline"}
              onClick={() => setTab("audit")}
            >
              Agentlogg ({overview.data.audit.length})
            </Button>

            <Button size="sm" variant="ghost" onClick={signOut}>
              Logg ut
            </Button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-5 py-10">
        {tab === "content" ? (
          <>
            <div className="sticky top-0 z-10 -mx-5 mb-8 flex flex-wrap items-center justify-between gap-3 bg-background/95 px-5 py-3 backdrop-blur">
              <div className="flex gap-2">
                {(["no", "en"] as Locale[]).map((code) => (
                  <Button
                    key={code}
                    size="sm"
                    variant={locale === code ? "default" : "outline"}
                    onClick={() => {
                      setEdits({});
                      setLocale(code);
                    }}
                  >
                    {code === "no" ? "Norsk" : "Engelsk"}
                  </Button>
                ))}
              </div>
              <Button onClick={onSave} disabled={saving || Object.keys(edits).length === 0}>
                {saving ? "Lagrer ..." : `Lagre endringer (${Object.keys(edits).length})`}
              </Button>
            </div>

            <div className="space-y-10">
              {groups.map(([group, groupFields]) => (
                <section key={group} className="rounded-md border border-border bg-card p-6">
                  <h2 className="text-lg">{LABELS[group] ?? group}</h2>
                  <div className="mt-5 space-y-5">
                    {groupFields.map((field) => (
                      <FieldEditor
                        key={field.path}
                        path={field.path}
                        value={edits[field.path] ?? field.value}
                        onChange={(value) => setEdits((prev) => ({ ...prev, [field.path]: value }))}
                      />
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </>
        ) : tab === "leads" ? (

          <div className="overflow-x-auto rounded-md border border-border bg-card">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-border text-xs tracking-wider text-muted-foreground uppercase">
                <tr>
                  <th className="px-4 py-3">Mottatt</th>
                  <th className="px-4 py-3">Navn</th>
                  <th className="px-4 py-3">E-post</th>
                  <th className="px-4 py-3">Virksomhet</th>
                  <th className="px-4 py-3">Type</th>
                  <th className="px-4 py-3">HubSpot</th>
                </tr>
              </thead>
              <tbody>
                {overview.data.leads.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="px-4 py-8 text-center text-muted-foreground">
                      Ingen henvendelser ennå.
                    </td>
                  </tr>
                ) : (
                  overview.data.leads.map((lead) => (
                    <tr key={lead.id} className="border-b border-border last:border-0 align-top">
                      <td className="px-4 py-3 whitespace-nowrap text-muted-foreground">
                        {new Date(lead.created_at).toLocaleString("nb-NO")}
                      </td>
                      <td className="px-4 py-3">
                        {lead.name}
                        {lead.message ? (
                          <p className="mt-1 max-w-sm text-xs text-muted-foreground">
                            {lead.message}
                          </p>
                        ) : null}
                      </td>
                      <td className="px-4 py-3">{lead.email}</td>
                      <td className="px-4 py-3">{lead.company ?? "-"}</td>
                      <td className="px-4 py-3">{lead.inquiry_type}</td>
                      <td className="px-4 py-3">
                        {lead.hubspot_synced ? "Sendt" : (lead.hubspot_error ?? "Ikke sendt")}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        ) : (
          <AuditTable rows={overview.data.audit} />
        )}

      </main>
    </div>
  );
}

type AuditRow = {
  id: string;
  created_at: string;
  user_email: string | null;
  user_id: string | null;
  client_id: string | null;
  tool_name: string;
  arguments: unknown;
  changes: unknown;
  success: boolean;
  error: string | null;
};

const TOOL_LABELS: Record<string, string> = {
  list_leads: "Leste henvendelser",
  get_site_content: "Leste innhold",
  update_site_content: "Endret innhold",
};

function AuditTable({ rows }: { rows: AuditRow[] }) {
  return (
    <div className="overflow-x-auto rounded-md border border-border bg-card">
      <table className="w-full text-left text-sm">
        <thead className="border-b border-border text-xs tracking-wider text-muted-foreground uppercase">
          <tr>
            <th className="px-4 py-3">Tidspunkt</th>
            <th className="px-4 py-3">Bruker</th>
            <th className="px-4 py-3">Verktøy</th>
            <th className="px-4 py-3">Parametre</th>
            <th className="px-4 py-3">Endringer</th>
            <th className="px-4 py-3">Resultat</th>
          </tr>
        </thead>
        <tbody>
          {rows.length === 0 ? (
            <tr>
              <td colSpan={6} className="px-4 py-8 text-center text-muted-foreground">
                Ingen agentaktivitet registrert ennå.
              </td>
            </tr>
          ) : (
            rows.map((row) => (
              <tr key={row.id} className="border-b border-border align-top last:border-0">
                <td className="px-4 py-3 whitespace-nowrap text-muted-foreground">
                  {new Date(row.created_at).toLocaleString("nb-NO")}
                </td>
                <td className="px-4 py-3">
                  {row.user_email ?? row.user_id ?? "Ukjent"}
                  {row.client_id ? (
                    <p className="mt-1 text-xs text-muted-foreground">Klient: {row.client_id}</p>
                  ) : null}
                </td>
                <td className="px-4 py-3">{TOOL_LABELS[row.tool_name] ?? row.tool_name}</td>
                <td className="px-4 py-3">
                  <pre className="max-w-xs overflow-x-auto text-xs text-muted-foreground">
                    {JSON.stringify(row.arguments)}
                  </pre>
                </td>
                <td className="px-4 py-3">
                  {row.changes ? (
                    <details>
                      <summary className="cursor-pointer text-xs text-muted-foreground">
                        Vis endringer
                      </summary>
                      <pre className="mt-2 max-w-sm overflow-x-auto text-xs">
                        {JSON.stringify(row.changes, null, 2)}
                      </pre>
                    </details>
                  ) : (
                    <span className="text-xs text-muted-foreground">Ingen</span>
                  )}
                </td>
                <td className="px-4 py-3">
                  {row.success ? "OK" : (row.error ?? "Feilet")}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}



function FieldEditor({
  path,
  value,
  onChange,
}: {
  path: string;
  value: string;
  onChange: (value: string) => void;
}) {
  const long = value.length > 90;
  return (
    <label className="block">
      <span className="text-xs tracking-wide text-muted-foreground">{path}</span>
      {long ? (
        <Textarea
          className="mt-1"
          rows={3}
          value={value}
          onChange={(event) => onChange(event.target.value)}
        />
      ) : (
        <Input className="mt-1" value={value} onChange={(event) => onChange(event.target.value)} />
      )}
    </label>
  );
}

export type { SiteContent };
