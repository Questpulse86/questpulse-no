import { Link } from "@tanstack/react-router";
import { Menu } from "lucide-react";

import { HUBSPOT_BOOKING_URL } from "@/components/site/HubSpotForm";
import { Logo } from "@/components/site/Logo";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";
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
  altHref:
    | "/"
    | "/en"
    | (typeof pagePaths)[keyof typeof pagePaths][Locale]
    | "/forskning"
    | "/en/research";
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
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">
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
        <div className="flex items-center gap-3 sm:gap-4">
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
          <Sheet>
            <SheetTrigger asChild>
              <button
                type="button"
                aria-label={locale === "no" ? "Åpne meny" : "Open menu"}
                className={cn(
                  "inline-flex size-9 items-center justify-center rounded-md border lg:hidden",
                  dark
                    ? "border-navy-foreground/20 text-navy-foreground hover:bg-navy-foreground/10"
                    : "border-border text-navy hover:bg-secondary",
                )}
              >
                <Menu className="size-4" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[min(88vw,24rem)] border-0 bg-navy px-7 pt-16 text-navy-foreground"
            >
              <nav
                aria-label={locale === "no" ? "Mobilmeny" : "Mobile navigation"}
                className="flex flex-col"
              >
                {navKeys.map((key) => (
                  <SheetClose asChild key={key}>
                    <Link
                      to={pagePaths[key][locale]}
                      className="border-b border-navy-foreground/15 py-5 text-lg font-semibold text-navy-foreground transition-colors hover:text-teal"
                    >
                      {navLabels[locale][key]}
                    </Link>
                  </SheetClose>
                ))}
                <Button asChild className="mt-8 justify-center">
                  <a href={HUBSPOT_BOOKING_URL} target="_blank" rel="noreferrer">
                    {content.nav.cta}
                  </a>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
