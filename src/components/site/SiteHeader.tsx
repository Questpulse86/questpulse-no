import { Link } from "@tanstack/react-router";

import { HUBSPOT_BOOKING_URL } from "@/components/site/HubSpotForm";
import { Logo } from "@/components/site/Logo";
import { Button } from "@/components/ui/button";
import { navKeys, navLabels, pagePaths } from "@/lib/page-content";
import type { Locale, SiteContent } from "@/lib/site-content";
import { cn } from "@/lib/utils";

export function SiteHeader({
  locale,
  content,
  altHref,
  theme = "light",
}: {
  locale: Locale;
  content: SiteContent;
  altHref: "/" | "/en" | (typeof pagePaths)[keyof typeof pagePaths][Locale] | "/forskning" | "/en/research";
  theme?: "light" | "dark";
}) {
  const other: Locale = locale === "no" ? "en" : "no";
  const dark = theme === "dark";

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b backdrop-blur",
        dark ? "border-navy-foreground/10 bg-navy/95" : "border-border bg-background/95",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link to={locale === "no" ? "/" : "/en"} className="inline-flex items-center">
          <Logo variant={dark ? "onDark" : "onLight"} width={148} />
        </Link>
        <nav
          aria-label={locale === "no" ? "Hovedmeny" : "Main navigation"}
          className={cn(
            "hidden items-center gap-7 text-sm lg:flex",
            dark ? "text-navy-foreground/60" : "text-muted-foreground",
          )}
        >
          {navKeys.map((key) => (
            <Link
              key={key}
              to={pagePaths[key][locale]}
              className={cn(
                "transition-colors",
                dark ? "hover:text-navy-foreground" : "hover:text-navy",
              )}
              activeProps={{
                className: dark ? "text-navy-foreground font-semibold" : "text-navy font-semibold",
              }}
            >
              {navLabels[locale][key]}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <Link
            to={altHref}
            className={cn(
              "text-xs font-semibold tracking-widest uppercase transition-colors",
              dark
                ? "text-navy-foreground/60 hover:text-navy-foreground"
                : "text-muted-foreground hover:text-navy",
            )}
          >
            {other === "no" ? "NO" : "EN"}
          </Link>
          <Button asChild size="sm">
            <a href={HUBSPOT_BOOKING_URL} target="_blank" rel="noreferrer">
              {content.nav.cta}
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
