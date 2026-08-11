import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { submitLead } from "@/lib/site.functions";
import { inquiryTypes, type Locale, type SiteContent } from "@/lib/site-content";

export function LeadForm({ locale, copy }: { locale: Locale; copy: SiteContent["contact"] }) {
  const send = useServerFn(submitLead);
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const values = new FormData(form);
    setStatus("sending");
    try {
      await send({
        data: {
          name: String(values.get("name") ?? ""),
          email: String(values.get("email") ?? ""),
          company: String(values.get("company") ?? ""),
          role: String(values.get("role") ?? ""),
          inquiryType: String(values.get("inquiryType") ?? "demo"),
          message: String(values.get("message") ?? ""),
          locale,
        },
      });
      form.reset();
      setStatus("done");
      toast.success(copy.success);
    } catch {
      setStatus("idle");
      toast.error(copy.error);
    }
  }

  if (status === "done") {
    return (
      <div className="rounded-md border border-teal/40 bg-teal-soft p-8 text-center">
        <p className="font-display text-xl text-navy">{copy.success}</p>
        <Button variant="ghost" className="mt-4" onClick={() => setStatus("idle")}>
          {locale === "no" ? "Send en ny henvendelse" : "Send another enquiry"}
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5 rounded-md border border-border bg-card p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">{copy.nameLabel}</Label>
          <Input id="name" name="name" required maxLength={120} autoComplete="name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">{copy.emailLabel}</Label>
          <Input id="email" name="email" type="email" required autoComplete="email" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="company">{copy.companyLabel}</Label>
          <Input id="company" name="company" autoComplete="organization" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="role">{copy.roleLabel}</Label>
          <Input id="role" name="role" autoComplete="organization-title" />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="inquiryType">{copy.typeLabel}</Label>
        <select
          id="inquiryType"
          name="inquiryType"
          defaultValue="demo"
          className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
        >
          {inquiryTypes[locale].map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">{copy.messageLabel}</Label>
        <Textarea id="message" name="message" rows={4} maxLength={4000} />
      </div>

      <Button type="submit" size="lg" disabled={status === "sending"} className="w-full sm:w-auto">
        {status === "sending" ? copy.sending : copy.submit}
      </Button>
      <p className="text-xs text-muted-foreground">{copy.privacy}</p>
    </form>
  );
}
