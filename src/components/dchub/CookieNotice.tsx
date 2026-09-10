import { useEffect, useState } from "react";

import { useDchHref } from "@/lib/dchub-href";
import { cookieNotice } from "@/lib/dchub-privacy";

const STORAGE_KEY = "dch-cookie-consent";

type Consent = "all" | "necessary";

declare global {
  interface Window {
    _hsq?: unknown[];
  }
}

function applyConsent(consent: Consent) {
  window._hsq = window._hsq || [];
  window._hsq.push(consent === "all" ? ["doNotTrack", { track: true }] : ["doNotTrack"]);
}

/** Samtykkebanner for informasjonskapsler på Digital Coach Hub. */
export function CookieNotice() {
  const [visible, setVisible] = useState(false);
  const privacyHref = useDchHref("/personvern");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Consent | null;
    if (stored === "all" || stored === "necessary") {
      applyConsent(stored);
      return;
    }
    applyConsent("necessary");
    setVisible(true);
  }, []);

  function choose(consent: Consent) {
    window.localStorage.setItem(STORAGE_KEY, consent);
    applyConsent(consent);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label={cookieNotice.heading}
      className="fixed inset-x-0 bottom-0 z-[60] border-t border-dch-line bg-white p-4 shadow-[0_-8px_24px_rgba(19,33,47,0.08)] sm:bottom-4 sm:left-4 sm:max-w-md sm:rounded-2xl sm:border"
    >
      <p className="font-display text-[17px] font-bold text-dch-ink">{cookieNotice.heading}</p>
      <p className="mt-2 text-[14px] leading-[1.7] text-dch-muted">{cookieNotice.text}</p>
      <div className="mt-4 flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={() => choose("all")}
          className="inline-flex min-h-[44px] items-center rounded-md bg-dch-accent-strong px-5 text-[14px] font-bold text-white transition-colors hover:bg-dch-ink"
        >
          {cookieNotice.accept}
        </button>
        <button
          type="button"
          onClick={() => choose("necessary")}
          className="inline-flex min-h-[44px] items-center rounded-md border-2 border-dch-ink px-5 text-[14px] font-bold text-dch-ink transition-colors hover:bg-dch-ink hover:text-white"
        >
          {cookieNotice.reject}
        </button>
        <a
          href={privacyHref}
          className="ml-1 text-[13px] font-semibold text-dch-accent-strong underline underline-offset-4"
        >
          {cookieNotice.link}
        </a>
      </div>
    </div>
  );
}

/** Knapp for å gjøre om valget, brukes i personvernerklæringen. */
export function CookieSettingsButton({ className = "" }: { className?: string }) {
  const [done, setDone] = useState(false);

  return (
    <button
      type="button"
      onClick={() => {
        window.localStorage.removeItem(STORAGE_KEY);
        setDone(true);
        window.location.reload();
      }}
      className={`inline-flex min-h-[44px] items-center rounded-md border-2 border-dch-ink px-5 text-[14px] font-bold text-dch-ink transition-colors hover:bg-dch-ink hover:text-white ${className}`}
    >
      {done ? "Oppdaterer …" : "Endre valg for informasjonskapsler"}
    </button>
  );
}
