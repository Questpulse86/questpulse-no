import heroImage from "@/assets/hero-questpulse.jpg";
import { ImagePlaceholder } from "@/components/site/ImagePlaceholder";
import { LeadForm } from "@/components/site/LeadForm";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { Button } from "@/components/ui/button";
import type { Locale, SiteContent } from "@/lib/site-content";


function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="qp-eyebrow">{children}</p>;
}

export function Landing({ locale, content }: { locale: Locale; content: SiteContent }) {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader locale={locale} content={content} altHref={locale === "no" ? "/en" : "/"} />


      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-navy text-navy-foreground">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-40 -right-32 h-[30rem] w-[30rem] rounded-full bg-teal/20 blur-3xl"
          />
          <div className="relative mx-auto grid max-w-6xl gap-12 px-5 py-24 lg:grid-cols-[1.15fr_0.85fr] lg:py-32">
            <div>
              <p className="text-xs font-bold tracking-[0.18em] text-teal uppercase">
                {content.hero.eyebrow}
              </p>
              <h1 className="mt-5 max-w-2xl text-4xl leading-[1.08] font-bold text-navy-foreground sm:text-5xl lg:text-6xl">
                {content.hero.title}
              </h1>
              <span className="qp-rule mt-7" />
              <p className="mt-7 max-w-xl text-lg text-navy-foreground/75">{content.hero.lead}</p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <a href="#kontakt">{content.hero.cta1}</a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-navy-foreground/30 bg-transparent text-navy-foreground hover:bg-navy-foreground/10 hover:text-navy-foreground"
                >
                  <a href="#hvordan">{content.hero.cta2}</a>
                </Button>
              </div>
            </div>
            <div className="flex flex-col justify-end gap-8">
              <img
                src={heroImage}
                alt={
                  locale === "no"
                    ? "Organisatoriske signaler visualisert som løpende kurver"
                    : "Organisational signals visualised as continuous curves"
                }
                width={1600}
                height={1200}
                className="w-full rounded-md border border-navy-foreground/15 object-cover shadow-lg"
              />
              <blockquote className="border-l-2 border-teal pl-6">
                <p className="font-display text-2xl leading-snug text-navy-foreground sm:text-3xl">
                  {content.hero.short}
                </p>
                <footer className="mt-3 text-sm text-navy-foreground/60">
                  {content.brand.name} &middot; {content.brand.category}
                </footer>
              </blockquote>
            </div>

          </div>
        </section>

        {/* Trust bar */}
        <section id="sikkerhet" className="border-b border-border bg-card">
          <div className="mx-auto max-w-6xl px-5 py-8">
            <p className="text-center text-sm text-muted-foreground">{content.trust.title}</p>
            <ul className="mt-6 grid gap-6 sm:grid-cols-3 lg:grid-cols-5">
              {content.trust.items.map((item) => (
                <li key={item.title} className="text-center">
                  <p className="text-sm font-semibold text-navy">{item.title}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Problem */}
        <section className="mx-auto max-w-6xl px-5 py-24">
          <div className="max-w-3xl">
            <Eyebrow>{content.problem.eyebrow}</Eyebrow>
            <h2 className="mt-4 text-3xl leading-tight sm:text-4xl">{content.problem.title}</h2>
            <p className="mt-5 text-lg text-muted-foreground">{content.problem.lead}</p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {content.problem.items.map((item, index) => (
              <article
                key={item.title}
                className="rounded-md border border-border border-l-2 border-l-teal bg-card p-7"
              >
                <span className="font-display text-3xl text-teal-soft">0{index + 1}</span>
                <h3 className="mt-3 text-lg font-bold">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section id="hvordan" className="border-y border-border bg-card">
          <div className="mx-auto max-w-6xl px-5 py-24">
            <div className="max-w-3xl">
              <Eyebrow>{content.how.eyebrow}</Eyebrow>
              <h2 className="mt-4 text-3xl leading-tight sm:text-4xl">{content.how.title}</h2>
              <p className="mt-5 text-lg text-muted-foreground">{content.how.lead}</p>
            </div>
            <ol className="mt-14 grid gap-10 md:grid-cols-3">
              {content.how.steps.map((step, index) => (
                <li key={step.title}>
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-teal text-sm font-bold text-white">
                    {index + 1}
                  </div>
                  <h3 className="mt-5 text-xl font-bold">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
                </li>
              ))}
            </ol>
            <div className="mt-14">
              <ImagePlaceholder
                ratio="16/9"
                label={
                  locale === "no"
                    ? "Skjermbilde av lederdashboard"
                    : "Screenshot of the leadership dashboard"
                }
                hint={
                  locale === "no"
                    ? "Anbefalt format: 1600 x 900 px"
                    : "Recommended format: 1600 x 900 px"
                }
              />
            </div>
          </div>

        </section>

        {/* Compliance */}
        <section className="mx-auto max-w-6xl px-5 py-24">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <Eyebrow>{content.compliance.eyebrow}</Eyebrow>
              <h2 className="mt-4 text-3xl leading-tight sm:text-4xl">{content.compliance.title}</h2>
              <p className="mt-5 text-muted-foreground">{content.compliance.lead}</p>
              <p className="mt-8 border-l-2 border-teal pl-5 font-display text-xl text-navy">
                {content.compliance.note}
              </p>
            </div>
            <div className="grid gap-5">
              {content.compliance.points.map((point) => (
                <article key={point.title} className="rounded-md bg-card p-7 shadow-sm">
                  <h3 className="text-lg font-bold">{point.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{point.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Roles */}
        <section id="roller" className="bg-navy py-24 text-navy-foreground">
          <div className="mx-auto max-w-6xl px-5">
            <p className="text-xs font-bold tracking-[0.18em] text-teal uppercase">
              {content.roles.eyebrow}
            </p>
            <h2 className="mt-4 max-w-2xl text-3xl text-navy-foreground sm:text-4xl">
              {content.roles.title}
            </h2>
            <div className="mt-14 grid gap-px overflow-hidden rounded-md bg-navy-foreground/15 sm:grid-cols-2">
              {content.roles.items.map((item) => (
                <article key={item.role} className="bg-navy p-8">
                  <h3 className="text-lg text-navy-foreground">{item.role}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-navy-foreground/70">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Market */}
        <section className="mx-auto max-w-6xl px-5 py-24">
          <div className="max-w-3xl">
            <Eyebrow>{content.market.eyebrow}</Eyebrow>
            <h2 className="mt-4 text-3xl leading-tight sm:text-4xl">{content.market.title}</h2>
            <p className="mt-5 text-lg text-muted-foreground">{content.market.lead}</p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {content.market.points.map((point) => (
              <article key={point.title} className="rounded-md border border-border bg-card p-7">
                <h3 className="text-lg font-bold">{point.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{point.text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="kontakt" className="border-t border-border bg-card">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-24 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <Eyebrow>{content.contact.eyebrow}</Eyebrow>
              <h2 className="mt-4 text-3xl leading-tight sm:text-4xl">{content.contact.title}</h2>
              <p className="mt-5 text-muted-foreground">{content.contact.lead}</p>
              <p className="mt-8 text-sm text-muted-foreground">
                linda@dchub.no
                <br />
                Digital Coach Hub AS
              </p>
            </div>
            <LeadForm locale={locale} copy={content.contact} />
          </div>
        </section>
      </main>

      <SiteFooter locale={locale} content={content} />

    </div>
  );
}
