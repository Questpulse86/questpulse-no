import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

export const CONTACT_STATUSES = ["booket", "gjennomført", "oppfølging", "tilbud", "vunnet", "tapt", "avlyst"] as const;

const contactSchema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(255).optional().or(z.literal("")),
  phone: z.string().trim().max(40).optional(),
  company: z.string().trim().max(160).optional(),
  role: z.string().trim().max(120).optional(),
  meeting_at: z.string().max(40).optional().or(z.literal("")),
  status: z.enum(CONTACT_STATUSES),
  next_step: z.string().trim().max(500).optional(),
  next_step_due: z.string().max(20).optional().or(z.literal("")),
  notes: z.string().trim().max(3000).optional(),
});

async function assertAdmin(supabase: any, userId: string) {
  const { data } = await supabase.rpc("has_role", { _user_id: userId, _role: "admin" });
  if (!data) throw new Error("Forbidden");
}

const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

async function sendBookingEmail(c: z.infer<typeof contactSchema>) {
  const lovableKey = process.env["LOVABLE_API_KEY"];
  const outlookKey = process.env["MICROSOFT_OUTLOOK_API_KEY"];
  if (!lovableKey || !outlookKey) return "Outlook er ikke koblet til";
  const when = c.meeting_at
    ? new Date(c.meeting_at).toLocaleString("nb-NO", { timeZone: "Europe/Oslo", dateStyle: "full", timeStyle: "short" })
    : "Ikke satt";
  const rows: [string, string | undefined][] = [
    ["Navn", c.name], ["E-post", c.email], ["Telefon", c.phone], ["Virksomhet", c.company],
    ["Rolle", c.role], ["Tidspunkt", when], ["Status", c.status], ["Neste trinn", c.next_step],
    ["Frist neste trinn", c.next_step_due], ["Notater", c.notes],
  ];
  const html = `<h2>Kartleggingssamtale</h2><table cellpadding="6">${rows
    .filter(([, v]) => v)
    .map(([k, v]) => `<tr><td><b>${k}</b></td><td>${esc(String(v))}</td></tr>`)
    .join("")}</table>`;
  const res = await fetch("https://connector-gateway.lovable.dev/microsoft_outlook/me/sendMail", {
    method: "POST",
    headers: { Authorization: `Bearer ${lovableKey}`, "X-Connection-Api-Key": outlookKey, "Content-Type": "application/json" },
    body: JSON.stringify({
      message: {
        subject: `Kartleggingssamtale: ${c.name}${c.company ? `, ${c.company}` : ""} (${when})`,
        body: { contentType: "HTML", content: html },
        toRecipients: [{ emailAddress: { address: "linda@dchub.no" } }],
      },
    }),
  });
  if (!res.ok) {
    const body = await res.text();
    console.error(`Outlook sendMail failed [${res.status}]: ${body}`);
    return `E-post feilet (${res.status})`;
  }
  return null;
}

const clean = (c: z.infer<typeof contactSchema>) => ({
  ...c,
  email: c.email || null,
  meeting_at: c.meeting_at ? new Date(c.meeting_at).toISOString() : null,
  next_step_due: c.next_step_due || null,
});

export const listContacts = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    await assertAdmin(context.supabase, context.userId);
    const { data, error } = await (context.supabase as any)
      .from("customer_contacts").select("*").order("meeting_at", { ascending: false, nullsFirst: false });
    if (error) throw new Error(error.message);
    return data as any[];
  });

export const createContact = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d) => contactSchema.extend({ sendEmail: z.boolean() }).parse(d))
  .handler(async ({ data, context }) => {
    await assertAdmin(context.supabase, context.userId);
    const { sendEmail, ...c } = data;
    const emailError = sendEmail ? await sendBookingEmail(c) : null;
    const { error } = await (context.supabase as any).from("customer_contacts").insert({
      ...clean(c), created_by: context.userId, email_sent: sendEmail && !emailError, email_error: emailError,
    });
    if (error) throw new Error(error.message);
    return { emailError };
  });

export const updateContact = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d) => contactSchema.extend({ id: z.string().uuid() }).parse(d))
  .handler(async ({ data, context }) => {
    await assertAdmin(context.supabase, context.userId);
    const { id, ...c } = data;
    const { error } = await (context.supabase as any).from("customer_contacts").update(clean(c)).eq("id", id);
    if (error) throw new Error(error.message);
    return { ok: true };
  });

export const deleteContact = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d) => z.object({ id: z.string().uuid() }).parse(d))
  .handler(async ({ data, context }) => {
    await assertAdmin(context.supabase, context.userId);
    const { error } = await (context.supabase as any).from("customer_contacts").delete().eq("id", data.id);
    if (error) throw new Error(error.message);
    return { ok: true };
  });
