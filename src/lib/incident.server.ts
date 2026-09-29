// Server-only: analyserer et sikkerhetsavvik via Lovable AI Gateway (Anthropic Claude, /v1/messages).
const MODEL = "anthropic/claude-sonnet-5";
const URL = "https://ai.gateway.lovable.dev/v1/messages";

export type IncidentAction = {
  priority: "kritisk" | "høy" | "middels" | "lav";
  title: string;
  why: string;
  owner: string;
  timeframe: string;
};
export type IncidentAdvice = { summary: string; severity: string; actions: IncidentAction[]; redacted: boolean };

const SYSTEM = `Du er en rådgiver for informasjonssikkerhet i en norsk virksomhet (People Intelligence-plattform, data lagret i EØS).
En administrator beskriver et sikkerhetsavvik. Foreslå konkrete, prioriterte tiltak.
Regler:
- Svar kun på korrekt norsk bokmål. Ingen tankestreker.
- Gi aldri medisinske råd, kliniske vurderinger eller psykologisk diagnostikk.
- Vurder behov for varsel til Datatilsynet innen 72 timer (GDPR art. 33) når personopplysninger kan være berørt.
- Forslagene er beslutningsstøtte. Et menneske tar alltid endelig beslutning.
- Svar KUN med gyldig JSON på formen:
{"summary": string, "severity": "kritisk"|"høy"|"middels"|"lav", "actions": [{"priority": "kritisk"|"høy"|"middels"|"lav", "title": string, "why": string, "owner": string, "timeframe": string}]}
- Maks 8 tiltak, sortert etter prioritet. "why" forklarer kort begrunnelsen.`;

// Pseudonymisering: fjern direkte identifikatorer før teksten sendes til modellen.
export function redact(text: string) {
  const out = text
    .replace(/[\w.+-]+@[\w-]+\.[\w.-]+/g, "[e-post]")
    .replace(/\b\d{11}\b/g, "[fødselsnummer]")
    .replace(/(\+?\d[\d\s]{7,}\d)/g, "[telefon]")
    .replace(/\b(?:\d{1,3}\.){3}\d{1,3}\b/g, "[ip]");
  return { text: out, changed: out !== text };
}

export async function analyzeIncident(description: string): Promise<IncidentAdvice> {
  const apiKey = process.env["LOVABLE_API_KEY"];
  if (!apiKey) throw new Error("AI-tjenesten er ikke konfigurert.");
  const { text, changed } = redact(description);

  const res = await fetch(URL, {
    method: "POST",
    headers: {
      "Lovable-API-Key": apiKey,
      "X-Lovable-AIG-SDK": "fetch",
      "anthropic-version": "2023-06-01",
      "content-type": "application/json",
    },
    body: JSON.stringify({
      model: MODEL,
      max_tokens: 3000,
      stream: true,
      system: SYSTEM,
      messages: [{ role: "user", content: `Avviksbeskrivelse:\n${text}` }],
    }),
  });

  if (!res.ok || !res.body) {
    const body = await res.text().catch(() => "");
    let msg = "";
    try { msg = JSON.parse(body)?.error?.message ?? JSON.parse(body)?.message ?? ""; } catch { /* ignore */ }
    if (res.status === 429) throw new Error("For mange forespørsler akkurat nå. Prøv igjen om litt.");
    if (res.status === 402) throw new Error(msg || "Tomt for AI-kreditter i arbeidsområdet.");
    throw new Error(msg || `Analysen feilet (${res.status}).`);
  }

  // Les SSE-strømmen og samle teksten.
  const reader = res.body.getReader();
  const decoder = new TextDecoder();
  let buf = "";
  let full = "";
  for (;;) {
    const { done, value } = await reader.read();
    if (done) break;
    buf += decoder.decode(value, { stream: true });
    const lines = buf.split("\n");
    buf = lines.pop() ?? "";
    for (const line of lines) {
      if (!line.startsWith("data:")) continue;
      try {
        const evt = JSON.parse(line.slice(5).trim());
        if (evt.type === "content_block_delta" && evt.delta?.type === "text_delta") full += evt.delta.text;
        if (evt.type === "error") throw new Error(evt.error?.message ?? "Analysen feilet.");
      } catch (e) {
        if (e instanceof Error && e.message.startsWith("Analysen")) throw e;
      }
    }
  }

  const match = full.match(/\{[\s\S]*\}/);
  if (!match) throw new Error("Modellen returnerte ikke et gyldig svar.");
  const parsed = JSON.parse(match[0]) as Omit<IncidentAdvice, "redacted">;
  return {
    summary: String(parsed.summary ?? ""),
    severity: String(parsed.severity ?? ""),
    actions: (parsed.actions ?? []).slice(0, 8),
    redacted: changed,
  };
}
