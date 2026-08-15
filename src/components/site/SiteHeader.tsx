import { Link } from "@tanstack/react-router";

import { Logo } from "@/components/site/Logo";
import { Button } from "@/components/ui/button";
import { navKeys, navLabels, pagePaths } from "@/lib/page-content";
import type { Locale, SiteContent } from "@/lib/site-content";

export function SiteHeader({
  locale,
  content,
  altHref,
}: {
  locale: Locale;
  content: SiteContent;
  altHref: "/" | "/en" | (typeof pagePaths)[keyof typeof pagePaths][Locale];
}) {
  const other: Locale = locale === "no" ? "en" : "no";

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link to={locale === "no" ? "/" : "/en"} className="inline-flex items-center">
          <Logo variant="onLight" width={148} />
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-muted-foreground lg:flex">
          {navKeys.map((key) => (
            <Link
              key={key}
              to={pagePaths[key][locale]}
              className="transition-colors hover:text-navy"
              activeProps={{ className: "text-navy font-semibold" }}
            >
              {navLabels[locale][key]}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            to={altHref}
            className="text-xs font-semibold tracking-widest text-muted-foreground uppercase transition-colors hover:text-navy"
          >
            {other === "no" ? "NO" : "EN"}
          </Link>
          <Button asChild size="sm">
            <Link to={pagePaths.contact[locale]}>{content.nav.cta}</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
