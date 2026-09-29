import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CONTACT_STATUSES, createContact, deleteContact, listContacts, updateContact } from "@/lib/contacts.functions";

type Form = {
  name: string; email: string; phone: string; company: string; role: string; meeting_at: string;
  status: (typeof CONTACT_STATUSES)[number]; next_step: string; next_step_due: string; notes: string;
};
const empty: Form = { name: "", email: "", phone: "", company: "", role: "", meeting_at: "", status: "booket", next_step: "", next_step_due: "", notes: "" };

const toLocalInput = (iso: string | null) => {
  if (!iso) return "";
  const d = new Date(iso);
  return new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 16);
};

export function ContactsPanel() {
  const list = useServerFn(listContacts);
  const create = useServerFn(createContact);
  const update = useServerFn(updateContact);
  const remove = useServerFn(deleteContact);
  const q = useQuery({ queryKey: ["contacts"], queryFn: () => list() });
  const [form, setForm] = useState<Form>(empty);
  const [editId, setEditId] = useState<string | null>(null);
  const [sendEmail, setSendEmail] = useState(true);
  const [busy, setBusy] = useState(false);
  const [filter, setFilter] = useState<string>("alle");

  const set = (k: keyof Form) => (e: { target: { value: string } }) => setForm({ ...form, [k]: e.target.value });

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name.trim()) return toast.error("Navn må fylles ut.");
    setBusy(true);
    try {
      if (editId) {
        await update({ data: { ...form, id: editId } });
        toast.success("Kontakten er oppdatert.");
      } else {
        const r = await create({ data: { ...form, sendEmail } });
        if (r.emailError) toast.warning(`Lagret, men e-post ble ikke sendt: ${r.emailError}`);
        else toast.success(sendEmail ? "Lagret og sendt til linda@dchub.no." : "Lagret.");
      }
      setForm(empty); setEditId(null);
      await q.refetch();
    } catch {
      toast.error("Kunne ikke lagre.");
    } finally { setBusy(false); }
  }

  function edit(c: any) {
    setEditId(c.id);
    setForm({
      name: c.name ?? "", email: c.email ?? "", phone: c.phone ?? "", company: c.company ?? "", role: c.role ?? "",
      meeting_at: toLocalInput(c.meeting_at), status: c.status, next_step: c.next_step ?? "",
      next_step_due: c.next_step_due ?? "", notes: c.notes ?? "",
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function del(id: string) {
    if (!confirm("Slette kontakten?")) return;
    await remove({ data: { id } });
    await q.refetch();
  }

  const rows = (q.data ?? []).filter((c) => filter === "alle" || c.status === filter);

  return (
    <div className="space-y-10">
      <form onSubmit={submit} className="rounded-md border border-border bg-card p-6 space-y-4">
        <h2 className="text-lg">{editId ? "Rediger kontakt" : "Ny kartleggingssamtale"}</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          <Input placeholder="Navn *" value={form.name} onChange={set("name")} maxLength={120} />
          <Input placeholder="E-post" type="email" value={form.email} onChange={set("email")} maxLength={255} />
          <Input placeholder="Telefon" value={form.phone} onChange={set("phone")} maxLength={40} />
          <Input placeholder="Virksomhet" value={form.company} onChange={set("company")} maxLength={160} />
          <Input placeholder="Rolle" value={form.role} onChange={set("role")} maxLength={120} />
          <label className="text-xs text-muted-foreground">Dato og tid for samtalen
            <Input type="datetime-local" value={form.meeting_at} onChange={set("meeting_at")} />
          </label>
          <label className="text-xs text-muted-foreground">Samtalestatus
            <select value={form.status} onChange={set("status")} className="mt-1 h-9 w-full rounded-md border border-input bg-background px-3 text-sm text-foreground">
              {CONTACT_STATUSES.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
          </label>
          <label className="text-xs text-muted-foreground">Frist for neste trinn
            <Input type="date" value={form.next_step_due} onChange={set("next_step_due")} />
          </label>
        </div>
        <Input placeholder="Neste trinn" value={form.next_step} onChange={set("next_step")} maxLength={500} />
        <Textarea placeholder="Notater" value={form.notes} onChange={set("notes")} maxLength={3000} rows={3} />
        <div className="flex flex-wrap items-center gap-4">
          {!editId && (
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" checked={sendEmail} onChange={(e) => setSendEmail(e.target.checked)} />
              Send e-post til linda@dchub.no
            </label>
          )}
          <Button type="submit" disabled={busy}>{busy ? "Lagrer ..." : editId ? "Oppdater" : "Lagre booking"}</Button>
          {editId && <Button type="button" variant="ghost" onClick={() => { setEditId(null); setForm(empty); }}>Avbryt</Button>}
        </div>
      </form>

      <div>
        <div className="mb-3 flex flex-wrap gap-2">
          {["alle", ...CONTACT_STATUSES].map((s) => (
            <Button key={s} size="sm" variant={filter === s ? "default" : "outline"} onClick={() => setFilter(s)}>{s}</Button>
          ))}
        </div>
        {q.isLoading ? <p className="text-sm text-muted-foreground">Laster ...</p> : rows.length === 0 ? (
          <p className="text-sm text-muted-foreground">Ingen kontakter ennå.</p>
        ) : (
          <div className="overflow-x-auto rounded-md border border-border">
            <table className="w-full text-sm">
              <thead className="bg-muted text-left text-xs text-muted-foreground">
                <tr><th className="p-3">Kunde</th><th className="p-3">Samtale</th><th className="p-3">Status</th><th className="p-3">Neste trinn</th><th className="p-3" /></tr>
              </thead>
              <tbody>
                {rows.map((c) => (
                  <tr key={c.id} className="border-t border-border align-top">
                    <td className="p-3"><div className="font-medium">{c.name}</div><div className="text-xs text-muted-foreground">{[c.company, c.role].filter(Boolean).join(", ")}</div><div className="text-xs text-muted-foreground">{c.email}</div></td>
                    <td className="p-3">{c.meeting_at ? new Date(c.meeting_at).toLocaleString("nb-NO", { dateStyle: "medium", timeStyle: "short" }) : "Ikke satt"}{c.email_error && <div className="text-xs text-destructive">{c.email_error}</div>}</td>
                    <td className="p-3"><span className="rounded bg-accent/15 px-2 py-0.5 text-xs">{c.status}</span></td>
                    <td className="p-3">{c.next_step}{c.next_step_due && <div className="text-xs text-muted-foreground">Frist {c.next_step_due}</div>}</td>
                    <td className="p-3 whitespace-nowrap"><Button size="sm" variant="outline" onClick={() => edit(c)}>Rediger</Button> <Button size="sm" variant="ghost" onClick={() => del(c.id)}>Slett</Button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
