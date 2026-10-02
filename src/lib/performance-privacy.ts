// Only the public QuestPulse marketing pages may emit performance measurements.
const publicPages = new Set([
  '/', '/en', '/om-selskapet', '/en/about', '/slik-fungerer-det', '/en/how-it-works',
  '/bruksomrader', '/en/use-cases', '/for-bank-og-finans', '/en/banking-and-finance',
  '/for-hr-og-ledelse', '/en/hr-and-leadership', '/enterprise-evaluering',
  '/en/enterprise-evaluation', '/kontakt', '/en/contact', '/sikkerhet-og-personvern',
  '/en/security-and-privacy', '/partnere', '/en/partners', '/forskning', '/en/research',
  '/historier-fra-arbeidslivet', '/en/workplace-stories',
]);

export function publicPerformanceUrl(value: string): string | null {
  try {
    const url = new URL(value);
    const path = url.pathname.replace(/\/+$/, '') || '/';
    if (url.protocol !== 'https:' || !['questpulse.no', 'www.questpulse.no'].includes(url.hostname)
      || url.port || url.username || url.password || !publicPages.has(path)) return null;
    return `https://questpulse.no${path}`;
  } catch {
    return null;
  }
}

export function sanitizePerformanceEvent(event: { type: 'vital'; url: string; route?: string }) {
  const url = publicPerformanceUrl(event.url);
  // Rebuild rather than spread: future fields cannot accidentally forward private data.
  return url ? { type: event.type, url, route: new URL(url).pathname } : null;
}
