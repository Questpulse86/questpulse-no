import { useEffect, useRef, useState } from "react";

export const HUBSPOT_PORTAL_ID = "146982049";
export const HUBSPOT_REGION = "eu1";

/** Digital Coach Hub: «Kontakt oss»-skjema i HubSpot. */
export const DCH_FORM_ID = "1e06e913-4a73-4088-b1bf-b18c49856ffa";

/** QuestPulse: delt lenke til «Kontakt oss for demo»-skjemaet i HubSpot. */
export const QP_FORM_SHARE_URL =
  "https://2fic2p.share-eu1.hsforms.com/2kMkML_0-RC2Iw0_umTW9Dw";

const EMBED_SRC = `https://js-${HUBSPOT_REGION}.hsforms.net/forms/embed/${HUBSPOT_PORTAL_ID}.js`;

/**
 * Native HubSpot-skjema. Leads går direkte inn i HubSpot CRM,
 * ingen data lagres i egen database.
 */
export function HubSpotForm({
  formId,
  className,
}: {
  formId: string;
  className?: string;
}) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const existing = document.querySelector<HTMLScriptElement>(
      `script[src="${EMBED_SRC}"]`,
    );
    if (existing) {
      setReady(true);
      return;
    }
    const script = document.createElement("script");
    script.src = EMBED_SRC;
    script.defer = true;
    script.addEventListener("load", () => setReady(true));
    document.body.appendChild(script);
  }, []);

  return (
    <div className={className}>
      <div
        className="hs-form-frame"
        data-region={HUBSPOT_REGION}
        data-form-id={formId}
        data-portal-id={HUBSPOT_PORTAL_ID}
      />
      {!ready ? (
        <p className="text-sm text-muted-foreground">Laster skjema …</p>
      ) : null}
    </div>
  );
}

/**
 * HubSpot-skjema via delt lenke, vist i iframe. Brukes når skjemaet
 * kun finnes som share-lenke og ikke som embed-ID.
 */
export function HubSpotShareForm({
  url,
  title,
  className,
  minHeight = 720,
}: {
  url: string;
  title: string;
  className?: string;
  minHeight?: number;
}) {
  const ref = useRef<HTMLIFrameElement>(null);

  return (
    <div className={className}>
      <iframe
        ref={ref}
        src={url}
        title={title}
        loading="lazy"
        className="w-full rounded-md border border-border bg-card"
        style={{ minHeight }}
      />
    </div>
  );
}
