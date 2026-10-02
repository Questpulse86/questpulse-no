# QuestPulse website operations

## Release prepared 2026-10-02

The enterprise refresh is in PR #4 (`enterprise-site-refresh`). The public domain was still serving the older homepage during this review. Main has since received Lovable and dependency updates; these are merged forward without rewriting history.

### Performance

- Cache only allowlisted public QuestPulse responses for 60 seconds at Vercel's CDN, with up to 60 seconds of stale revalidation.
- Never cache admin, authentication, demo, API, mutations, responses with cookies, authenticated requests or errors.
- Public CMS reads are shared per language for 60 seconds per server instance. Database queries abort after 1.5 seconds and fall back to last good or bundled copy. Brief failure cache prevents retry storms. This is not a distributed cache.
- Browser public-content queries remain fresh for 60 seconds, avoiding an immediate repeat after hydration.
- CMS changes can take several minutes to reach every CDN and browser cache. Redeployment invalidates the deployment cache. Private data is outside these caches.
- Homepage hero is a 1200 x 900 WebP, explicitly prioritized with reserved dimensions. Other homepage photographs are already lazy-loaded WebP.

### Discoverability

- Page-specific titles/descriptions, canonical URLs, Norwegian/English alternates and social images.
- Server-rendered page content and structured data remain available without JavaScript.
- Correct document language on English routes; reciprocal homepage hreflang.
- Sitemap URLs match canonical slash conventions and contain language alternates.
- Search crawling is permitted, including OAI-SearchBot. Preview hosts and private/error routes return noindex headers. robots.txt is crawler guidance, not access control.

### Security scope

- Existing CSRF middleware and server-side admin authorization retained.
- Add nosniff, referrer policy, disabled camera/microphone/geolocation, and minimal CSP restricting base URLs and plugins. This is deliberately not a complete script allowlist: it must preserve Lovable, form and OAuth functionality.
- Preserve main's dependency patch (js-yaml 4.3.2).
- No penetration test, database-policy audit or proof of product-level compliance is implied by these website changes.

## Account tasks before production sign-off

1. Restore Vercel connector access to team `quest-pulse`. On 2026-10-02, list_projects returned 403 and list_teams returned no accessible teams. Account plan, firewall, analytics, logs and production settings could not be verified.
2. If still on Hobby, move this commercial site to an eligible plan. Hobby is restricted to personal, non-commercial use. Approve subscription cost before purchase; set a spending limit and alerts.
3. Review the consolidated preview, merge PR #4, then verify questpulse.no, www redirect, English pages, sitemap, robots, cache HIT, and lead delivery. Test lead delivery only with explicit authorization for the resulting email/CRM record.
4. Connect the verified domain in Google Search Console and Bing Webmaster Tools; submit https://questpulse.no/sitemap.xml. Requires account/DNS access. Inspect indexing and the actual search queries; track qualified enquiries rather than impressions alone.
5. Enable real-user Core Web Vitals and availability monitoring in the authorized hosting account. Targets at mobile p75: LCP <=2.5s, INP <=200ms, CLS <=0.1. Raw curl timings are not Core Web Vitals or guaranteed visitor performance.
6. Confirm production form abuse controls/rate limits, recovery access, MFA, environment secret scope and Supabase policies using authorized account access.
7. ChatGPT organic visibility and paid ads are separate. Ads need an advertiser account, approved creative, conversion/privacy configuration and an explicit budget. No campaign or charge is authorized by SEO work alone. Ads do not influence organic ChatGPT answers.

## Content priorities after launch

Build on the existing Norwegian and English pages for leadership support, preventive HR, employee listening follow-up, organisational development and workplace dialogue. Use original research summaries with clear sources and dates, and add verified customer cases when permission and results are available. Do not invent outcomes, testimonials or search-volume estimates.

## Official references

- https://vercel.com/docs/plans/hobby
- https://vercel.com/docs/caching/cache-control-headers
- https://developers.google.com/search/docs/appearance/ai-features
- https://developers.openai.com/api/docs/bots
- https://openai.com/index/chatgpt-ads-expands-across-europe/

## Connected-account verification, 2026-10-02 12:30 Europe/Oslo

- Reconnection resolved team/project listing. Confirmed team quest-pulse and project questpulse-no. Pro activation is reported by the owner; billing settings are not independently verified.
- Production 5xx log query for the previous 24 hours returned no records. This is not an uptime guarantee.
- Preview f910d616 is READY in arn1. Authorized fetch returns HTTP 200 with nosniff, referrer policy, permissions policy and noindex. Authenticated preview responses correctly use private/no-store; anonymous CDN HIT cannot be proven through that session.
- Public production homepage returned HTTP 200, approximately 0.70 seconds to first byte in one remote sample. This is not a mobile Core Web Vitals measurement. Production still lacks the new application security headers.
- Preview authentication is enabled. Do not disable protection to run checks.
- get_project fails with an adapter argument error (idOrName missing). The connector exposes no firewall/Agent/billing configuration operations, and no authenticated CLI is available. Dashboard inspection is still required for those settings.
- Removed full upstream CRM/mail error bodies and thrown error messages from CRM diagnostic storage/logging to avoid accidental personal-data disclosure. Status codes remain for troubleshooting.
- No paid Agent review, firewall change, spend policy, production merge or customer-message test was performed.

## Speed Insights consolidation, 2026-10-02

PR #9 was reviewed but not merged: its old Bun lockfile conflicts with the current npm setup. Its React integration is adapted into PR #4 with @vercel/speed-insights pinned to 2.0.0 and the npm lock updated. Do not merge #9 separately.

Telemetry loads only on allowlisted public questpulse.no pages. beforeSend rechecks the current page (the vendor script survives client-side navigation), drops unknown/private/preview/DCH URLs, removes query strings/fragments and resets route labels to the approved pathname. Debug output is disabled. Privacy filtering is covered by regression tests. No form fields or custom user identifiers are added. Public NO/EN security pages explain the measurement.

No Speed Insights Plus upgrade or billing change was made. The dashboard previously showed basic setup enabled but no events. Real-user metrics can only be confirmed after production deployment and traffic; preview is deliberately excluded.

Browser audit confirmed Pro, enabled system mitigations, no custom WAF rules, AI Bots Allow and Bot Protection Off. Billing displayed a USD 200 extra-usage budget with pause disabled; automatic investigations covered all projects. Owner subsequently reported completing the recommended cost/Agent changes; those new values have not been independently rechecked. Cost settings and high-risk actions remain owner-controlled.
