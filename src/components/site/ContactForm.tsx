import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { leadSchema } from "@/lib/site-schemas";
import { submitLead } from "@/lib/site.functions";
import type { Locale } from "@/lib/site-content";

const copy = {
  no: {
    name: "Navn",
    email: "E-post",
    company: "Virksomhet",
    role: "Rolle",
    message: "Melding",
    messagePlaceholder: "Skriv noen ord om hva du ønsker å vite mer om.",
    submit: "Send melding",
    sending: "Sender …",
    success: "Takk. Meldingen er sendt, og du får svar fra Linda innen én virkedag.",
    error: "Noe gikk galt. Prøv igjen, eller send e-post til hei@questpulse.no.",
    invalid: "Fyll inn navn, gyldig e-post og en melding.",
    consent: "Opplysningene brukes kun til å svare på henvendelsen.",
  },
  en: {
    name: "Name",
    email: "Email",
    company: "Organisation",
    role: "Role",
    message: "Message",
    messagePlaceholder: "Write a few words about what you would like to know more about.",
    submit: "Send message",
    sending: "Sending …",
    success: "Thank you. Your message has been sent, and Linda replies within one working day.",
    error: "Something went wrong. Please try again, or email hei@questpulse.no.",
    invalid: "Please enter your name, a valid email and a message.",
    consent: "The information is used only to answer your enquiry.",
  },
} as const;

export function ContactForm({ locale, className }: { locale: Locale; className?: string }) {
  const t = copy[locale];
  const send = useServerFn(submitLead);
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [problem, setProblem] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const parsed = leadSchema.safeParse({
      name: String(form.get("name") ?? ""),
      email: String(form.get("email") ?? ""),
      company: String(form.get("company") ?? ""),
      role: String(form.get("role") ?? ""),
      inquiryType: "kartlegging",
      message: String(form.get("message") ?? ""),
      locale,
    });

    if (!parsed.success || parsed.data.message.length === 0) {
      setState("error");
      setProblem(t.invalid);
      return;
    }

    setState("sending");
    setProblem("");
    try {
      await send({ data: parsed.data });
      setState("done");
    } catch {
      setState("error");
      setProblem(t.error);
    }
  }

  if (state === "done") {
    return (
      <div className={className}>
        <div className="rounded-md border border-teal/40 bg-teal/5 p-8">
          <p className="text-base text-navy">{t.success}</p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className={className} noValidate>
      <div className="grid gap-5 rounded-md border border-border bg-background p-7 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="cf-name">{t.name}</Label>
          <Input id="cf-name" name="name" required maxLength={120} autoComplete="name" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="cf-email">{t.email}</Label>
          <Input
            id="cf-email"
            name="email"
            type="email"
            required
            maxLength={200}
            autoComplete="email"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="cf-company">{t.company}</Label>
          <Input id="cf-company" name="company" maxLength={160} autoComplete="organization" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="cf-role">{t.role}</Label>
          <Input id="cf-role" name="role" maxLength={160} autoComplete="organization-title" />
        </div>
        <div className="grid gap-2 sm:col-span-2">
          <Label htmlFor="cf-message">{t.message}</Label>
          <Textarea
            id="cf-message"
            name="message"
            required
            rows={6}
            maxLength={4000}
            placeholder={t.messagePlaceholder}
          />
        </div>
        <div className="sm:col-span-2">
          {problem ? <p className="mb-4 text-sm text-destructive">{problem}</p> : null}
          <Button type="submit" size="lg" disabled={state === "sending"}>
            {state === "sending" ? t.sending : t.submit}
          </Button>
          <p className="mt-4 text-xs text-muted-foreground">{t.consent}</p>
        </div>
      </div>
    </form>
  );
}
