import { Link } from "@tanstack/react-router";

import { Logo } from "@/components/site/Logo";
import { footerKeys, navLabels, pagePaths } from "@/lib/page-content";
import type { Locale, SiteContent } from "@/lib/site-content";

export function SiteFooter({ locale, content }: { locale: Locale; content: SiteContent }) {
  return (
    <footer className="bg-navy py-16 text-navy-foreground">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-[1.2fr_1fr]">
        <div>
          <Logo variant="onDark" width={132} />
          <p className="mt-3 max-w-md text-sm text-navy-foreground/60">{content.footer.text}</p>
          <address className="mt-6 text-sm not-italic text-navy-foreground/60">
            Digital Coach Hub AS
            <br />
            Org.nr. 936 265 634
            <br />
            <a className="hover:text-navy-foreground" href="mailto:hei@questpulse.no">
              hei@questpulse.no
            </a>
          </address>
        </div>
        <nav
          aria-label={locale === "no" ? "Bunnmeny" : "Footer navigation"}
          className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm"
        >
          {footerKeys.map((key) => (
            <Link
              key={key}
              to={pagePaths[key][locale]}
              className="text-navy-foreground/70 transition-colors hover:text-navy-foreground"
            >
              {navLabels[locale][key]}
            </Link>
          ))}
        </nav>
      </div>
      <div className="mx-auto mt-12 max-w-6xl border-t border-navy-foreground/15 px-5 pt-6">
        <p className="text-xs text-navy-foreground/50">
          &copy; {new Date().getFullYear()} Digital Coach Hub AS. {content.footer.rights}
        </p>
      </div>
    </footer>
  );
}
