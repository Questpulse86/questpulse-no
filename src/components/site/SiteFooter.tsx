import { Link } from "@tanstack/react-router";

import { footerKeys, navLabels, pagePaths } from "@/lib/page-content";
import type { Locale, SiteContent } from "@/lib/site-content";

export function SiteFooter({ locale, content }: { locale: Locale; content: SiteContent }) {
  return (
    <footer className="bg-navy py-14 text-navy-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="font-display text-lg">{content.brand.name}</p>
          <p className="mt-2 max-w-md text-sm text-navy-foreground/60">{content.footer.text}</p>
        </div>
        <nav className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm sm:grid-cols-2">
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
      <div className="mx-auto mt-10 max-w-6xl border-t border-navy-foreground/15 px-5 pt-6">
        <p className="text-xs text-navy-foreground/50">
          &copy; {new Date().getFullYear()} Digital Coach Hub AS. {content.footer.rights}
        </p>
      </div>
    </footer>
  );
}
