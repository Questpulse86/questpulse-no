import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { pagePaths } from "@/lib/page-content";
import { researchContent, researchPaths } from "@/lib/research-content";
import type { Locale, SiteContent } from "@/lib/site-content";

export function ResearchPage({ locale, content }: { locale: Locale; content: SiteContent }) {
  const page = researchContent[locale];
  const other: Locale = locale === "no" ? "en" : "no";

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader locale={locale} content={content} altHref={researchPaths[other]} />

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

        {page.groups.map((group, groupIndex) => (
          <section
            key={group.id}
            className={groupIndex % 2 === 1 ? "border-y border-border bg-card" : ""}
          >
            <div className="mx-auto max-w-6xl px-5 py-24">
              <div className="max-w-3xl">
                <p className="qp-eyebrow">{group.eyebrow}</p>
                <h2 className="mt-4 text-3xl leading-tight sm:text-5xl">{group.title}</h2>
                <p className="mt-5 text-lg text-muted-foreground">{group.lead}</p>
              </div>
              <div className="mt-14 grid gap-6 md:grid-cols-2">
                {group.sources.map((source) => (
                  <article
                    key={source.title}
                    className="flex flex-col rounded-md border border-border border-l-2 border-l-teal bg-background p-7"
                  >
                    <p className="text-xs font-bold tracking-[0.14em] text-teal-deep uppercase">
                      {source.publisher} · {source.year}
                    </p>
                    <h3 className="mt-3 font-sans text-lg font-semibold">{source.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {source.finding}
                    </p>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-deep transition-colors hover:text-navy"
                    >
                      {page.readSource}
                      <ArrowUpRight className="h-4 w-4" aria-hidden />
                    </a>
                  </article>
                ))}
              </div>
            </div>
          </section>
        ))}

        <section className="bg-navy py-24 text-navy-foreground">
          <div className="mx-auto max-w-6xl px-5">
            <p className="text-xs font-bold tracking-[0.18em] text-teal uppercase">
              {page.quotesTitle}
            </p>
            <p className="mt-4 max-w-2xl text-navy-foreground/70">{page.quotesLead}</p>
            <div className="mt-14 grid gap-px overflow-hidden rounded-md bg-navy-foreground/15 md:grid-cols-3">
              {page.quotes.map((quote) => (
                <figure key={quote.author} className="flex flex-col bg-navy p-8">
                  <blockquote className="flex-1 font-display text-lg leading-relaxed text-navy-foreground">
                    “{quote.text}”
                  </blockquote>
                  <figcaption className="mt-6">
                    <a
                      href={quote.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-teal hover:underline"
                    >
                      {quote.author}
                    </a>
                    <p className="mt-1 text-xs text-navy-foreground/60">{quote.role}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-24">
          <div className="max-w-3xl">
            <h2 className="text-3xl leading-tight sm:text-5xl">{page.closing.title}</h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">{page.closing.text}</p>
            <Link
              to={pagePaths.contact[locale]}
              className="mt-8 inline-flex items-center rounded-md bg-teal px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-teal-deep"
            >
              {page.closing.cta}
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter locale={locale} content={content} />
    </div>
  );
}
