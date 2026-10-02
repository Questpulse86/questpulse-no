import { ContactForm } from "@/components/site/ContactForm";
import { RoleShowcase } from "@/components/site/RoleShowcase";
import { StepFlow } from "@/components/site/StepFlow";

import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { pageContent, pagePaths, type PageKey, type PageSection } from "@/lib/page-content";
import type { Locale, SiteContent } from "@/lib/site-content";

function Section({
  section,
  locale,
  content,
  support = false,
}: {
  support?: boolean;
  section: PageSection;
  locale: Locale;
  content: SiteContent;
}) {
  const header = (
    <div className="max-w-3xl">
      {section.eyebrow ? <p className="qp-eyebrow">{section.eyebrow}</p> : null}
      <h2 className="mt-4 text-3xl leading-tight sm:text-5xl">{section.title}</h2>
      {section.lead ? <p className="mt-5 text-lg text-muted-foreground">{section.lead}</p> : null}
    </div>
  );

  if (section.kind === "dark") {
    const light = section.tone === "light";
    return (
      <section
        className={
          light
            ? "border-b border-border bg-card py-24 text-navy"
            : "bg-navy py-24 text-navy-foreground"
        }
      >
        <div className="mx-auto max-w-6xl px-5">
          {section.eyebrow ? (
            <p className="text-xs font-bold tracking-[0.18em] text-teal-deep uppercase">
              {section.eyebrow}
            </p>
          ) : null}
          <h2
            className={
              light
                ? "mt-4 max-w-2xl text-3xl text-navy sm:text-5xl"
                : "mt-4 max-w-2xl text-3xl text-navy-foreground sm:text-5xl"
            }
          >
            {section.title}
          </h2>
          {section.lead ? (
            <p
              className={
                light
                  ? "mt-5 max-w-2xl text-muted-foreground"
                  : "mt-5 max-w-2xl text-navy-foreground/70"
              }
            >
              {section.lead}
            </p>
          ) : null}
          <div
            className={
              light
                ? `mt-14 grid gap-px overflow-hidden rounded-md border border-border bg-border ${section.items.length === 3 ? "lg:grid-cols-3" : "sm:grid-cols-2"}`
                : `mt-14 grid gap-px overflow-hidden rounded-md bg-navy-foreground/15 ${section.items.length === 3 ? "lg:grid-cols-3" : "sm:grid-cols-2"}`
            }
          >
            {section.items.map((item) => (
              <article key={item.title} className={light ? "bg-white p-8" : "bg-navy p-8"}>
                <h3
                  className={
                    light
                      ? "font-sans text-lg font-semibold text-navy"
                      : "font-sans text-lg font-semibold text-navy-foreground"
                  }
                >
                  {item.title}
                </h3>
                <p
                  className={
                    light
                      ? "mt-3 text-sm leading-relaxed text-muted-foreground"
                      : "mt-3 text-sm leading-relaxed text-navy-foreground/70"
                  }
                >
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (section.kind === "roles") {
    return (
      <RoleShowcase
        locale={locale}
        eyebrow={section.eyebrow}
        title={section.title}
        lead={section.lead}
      />
    );
  }

  if (section.kind === "logos") {
    return (
      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-6xl px-5 py-24">
          {header}
          <div className="mt-12 grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {section.items.map((item) => (
              <div
                key={item.alt}
                className="flex min-h-32 items-center justify-center bg-background p-7"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="max-h-16 max-w-[10rem] object-contain grayscale opacity-80 transition-all hover:grayscale-0 hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (section.kind === "contact") {
    return (
      <section id="kontakt" className="border-t border-border bg-card">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-24 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            {section.eyebrow ? <p className="qp-eyebrow">{section.eyebrow}</p> : null}
            <h2 className="mt-4 text-3xl leading-tight sm:text-5xl">{section.title}</h2>
            <p className="mt-5 text-muted-foreground">{locale === "no" ? "Velg kontaktformen som passer henvendelsen din." : "Choose the contact option that suits your enquiry."}</p>
            <p className="mt-8 text-sm text-muted-foreground">
              <a className="story-link" href={`mailto:${support ? "support@questpulse.no" : "hei@questpulse.no"}`}>
                {support ? "support@questpulse.no" : "hei@questpulse.no"}
              </a>
              <br />
              Digital Coach Hub AS
            </p>
          </div>
          <ContactForm locale={locale} support={support} />
        </div>
      </section>
    );
  }

  if (section.kind === "register") {
    return (
      <section className="mx-auto max-w-6xl px-5 py-24">
        {header}
        <dl className="mt-14 border-t border-border">
          {section.items.map((item, index) => (
            <div
              key={item.title}
              className="grid gap-3 border-b border-border py-7 md:grid-cols-[4rem_1fr_1.4fr] md:gap-8"
            >
              <span className="font-display text-sm text-teal-deep tabular-nums">
                {String(index + 1).padStart(2, "0")}
              </span>
              <dt className="font-sans text-lg font-semibold text-navy">{item.title}</dt>
              <dd className="text-sm leading-relaxed text-muted-foreground">{item.text}</dd>
            </div>
          ))}
        </dl>
      </section>
    );
  }

  if (section.kind === "prose") {
    return (
      <section className="mx-auto max-w-6xl px-5 py-24">
        {header}
        <div className="mt-8 max-w-3xl space-y-5">
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph} className="leading-relaxed text-muted-foreground">
              {paragraph}
            </p>
          ))}
        </div>
      </section>
    );
  }

  if (section.kind === "steps") {
    return (
      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-6xl px-5 py-24">
          {header}
          {section.visual === "flow" ? (
            <div className="mt-12">
              <StepFlow locale={locale} />
            </div>
          ) : null}
          <ol className="mt-14 grid gap-10 md:grid-cols-3">
            {section.items.map((item, index) => (
              <li key={item.title}>
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-teal text-sm font-bold text-white">
                  {index + 1}
                </div>
                <h3 className="mt-5 font-sans text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-6xl px-5 py-24">
      {header}
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {section.items.map((item) => (
          <article
            key={item.title}
            className="rounded-md border border-border border-l-2 border-l-teal bg-card p-7"
          >
            <h3 className="font-sans text-lg font-semibold">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function PageView({
  locale,
  pageKey,
  content,
}: {
  locale: Locale;
  pageKey: PageKey;
  content: SiteContent;
}) {
  const page = pageContent[locale][pageKey];
  const other: Locale = locale === "no" ? "en" : "no";

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader locale={locale} content={content} altHref={pagePaths[pageKey][other]} />

      <main>
        <section className="relative overflow-hidden bg-navy text-navy-foreground">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-40 -right-32 h-[30rem] w-[30rem] rounded-full bg-teal/20 blur-3xl"
          />
          <div className="relative mx-auto max-w-6xl px-5 py-20 lg:py-24">
            <p className="text-xs font-bold tracking-[0.18em] text-teal uppercase">
              {page.hero.eyebrow}
            </p>
            <h1 className="mt-5 max-w-3xl text-4xl leading-[1.05] font-semibold text-navy-foreground sm:text-5xl lg:text-6xl">
              {page.hero.title}
            </h1>
            <span className="qp-rule mt-7" />
            <p className="mt-7 max-w-2xl text-lg text-navy-foreground/75">{page.hero.lead}</p>
          </div>
        </section>

        {page.sections.map((section) => (
          <Section key={section.title} section={section} locale={locale} content={content} support={pageKey === "security"} />
        ))}
      </main>

      <SiteFooter locale={locale} content={content} />
    </div>
  );
}
