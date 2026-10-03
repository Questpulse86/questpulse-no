# Low-cost website security checks

Scope: the QuestPulse marketing website in this repository, not the employee application/backend. There is no new AI service deployed with access to customer or employee data.

## Prepared in code

- CI uses the existing npm lockfile (the previous Bun job referenced a deleted lockfile).
- Security regression tests protect public/private cache boundaries, form validation and deployment headers.
- npm audit checks all installed dependencies; high/critical advisories fail the check.
- Vercel-targeted production build runs on every pull request and main push.
- GitHub Actions have read-only repository permission, no production secrets, pinned action revisions, cancellation of superseded runs and a 15-minute timeout.
- Existing weekly Dependabot update proposals remain enabled. This is not proof that all possible vulnerabilities are detected.
- AGENTS.md contains project-specific review instructions which Vercel Agent reads automatically once activated.

## Activation still required in the accounts

1. Use Vercel Pro with one developer seat; avoid optional Plus/Enterprise add-ons initially. Current advertised base price on 2026-10-02: USD 20/month excluding applicable taxes, with USD 20 usage credit. Usage and additional seats can increase the bill.
2. Restore Vercel connector access to the correct `quest-pulse` team. The connector currently lists no accessible teams; project access could not be verified.
3. Set billing alerts and agree a spend limit. If configuring automatic project pause at a spending limit, explicitly weigh downtime against cost protection before enabling it.
4. Enable Vercel Agent Code Review for this repository after its separate usage budget is approved. Start with manual reviews at release checkpoints, not automatic review of every small commit. The current pricing page bills provider inference plus USD 0.25 per million tokens. There is no reliable fixed price per review.
5. Request a review through the Vercel interface or `@vercel run a review` on the PR. Treat its findings as proposals. Do not grant automatic merge or production data access. This file and AGENTS.md alone do not activate the service.
6. Configure a branch rule requiring `build` and the Vercel deployment check before merging to main. Until that account rule is enabled, failed CI is a visible warning rather than an enforced publication block. Never claim deployment is gated solely because this workflow exists.
7. Monitor GitHub Actions usage as well as Vercel usage. These controls use included runner capacity when available, but are not guaranteed to be free on every repository plan.

## Verification

Run `node --test tests/security.test.mjs`, `npm audit --audit-level=high`, and `NITRO_PRESET=vercel npm run build`. Never submit test leads to production or use live personal data for verification without authorization. Infrastructure permissions, database RLS, rate limiting and recovery need separate account-level verification.

References:
- https://vercel.com/pricing
- https://vercel.com/docs/plans/hobby
- https://vercel.com/docs/agent/pricing
- https://vercel.com/docs/agent/pr-review

## Audit result, 2026-10-02

All eight local regression tests pass. The Vercel-targeted local build passes. Compatible lockfile updates resolve the high-severity brace-expansion finding and moderate fast-uri/ip-address findings. The npm high/critical gate now passes. One low-severity esbuild advisory remains (GHSA-g7r4-m6w7-qqqr, development server on Windows); it is not suppressed. Review upstream compatibility before changing its major/minor version. CI and Vercel will validate a clean installation of the updated lockfile.

## Connected-account verification, 2026-10-02 12:30 Europe/Oslo

- Reconnection resolved team/project listing. Confirmed team quest-pulse and project questpulse-no. Pro activation is reported by the owner; billing settings are not independently verified.
- Production 5xx log query for the previous 24 hours returned no records. This is not an uptime guarantee.
- Preview f910d616 is READY in arn1. Authorized fetch returns HTTP 200 with nosniff, referrer policy, permissions policy and noindex. Authenticated preview responses correctly use private/no-store; anonymous CDN HIT cannot be proven through that session.
- Public production homepage returned HTTP 200, approximately 0.70 seconds to first byte in one remote sample. This is not a mobile Core Web Vitals measurement. Production still lacks the new application security headers.
- Preview authentication is enabled. Do not disable protection to run checks.
- get_project fails with an adapter argument error (idOrName missing). The connector exposes no firewall/Agent/billing configuration operations, and no authenticated CLI is available. Dashboard inspection is still required for those settings.
- Removed full upstream CRM/mail error bodies and thrown error messages from CRM diagnostic storage/logging to avoid accidental personal-data disclosure. Status codes remain for troubleshooting.
- No paid Agent review, firewall change, spend policy, production merge or customer-message test was performed.
