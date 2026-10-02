import { Link } from "@tanstack/react-router";

import { Logo } from "@/components/site/Logo";
import { footerKeys, navLabels, pagePaths } from "@/lib/page-content";
import type { Locale, SiteContent } from "@/lib/site-content";

export function SiteFooter({ locale, content }: { locale: Locale; content: SiteContent }) {
  return (
    <footer className="border-t-4 border-teal bg-white py-16 text-navy">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-[1.2fr_1fr]">
        <div>
          <Logo variant="onLight" width={132} />
          <p className="mt-3 max-w-md text-sm text-muted-foreground">{content.footer.text}</p>
          <address className="mt-6 text-sm not-italic text-muted-foreground">
            Digital Coach Hub AS
            <br />
            Org.nr. 936 265 634
            <br />
            {locale === "no" ? "Salg: " : "Sales: "}<a className="text-navy hover:text-teal-deep" href="mailto:hei@questpulse.no">hei@questpulse.no</a><br />
            {locale === "no" ? "Teknisk og juridisk: " : "Technical and legal: "}<a className="text-navy hover:text-teal-deep" href="mailto:support@questpulse.no">
              support@questpulse.no
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
              className="text-muted-foreground transition-colors hover:text-teal-deep"
            >
              {navLabels[locale][key]}
            </Link>
          ))}
          <Link
            to={locale === "no" ? "/forskning" : "/en/research"}
            className="text-muted-foreground transition-colors hover:text-teal-deep"
          >
            {locale === "no" ? "Forskning" : "Research"}
          </Link>
        </nav>
      </div>
      <div className="mx-auto mt-12 max-w-6xl border-t border-border px-5 pt-6">
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Digital Coach Hub AS. {content.footer.rights}
        </p>
      </div>
    </footer>
  );
}
