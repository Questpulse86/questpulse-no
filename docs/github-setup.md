# GitHub Security, Branching and Deployment Setup

This guide configures `questpulse-no` as the single source of truth for both the QuestPulse and Digital Coach Hub sites. One codebase, one repo, two domains routed by `vercel.json`.

---

## 1. Confirm the active repository

Use this repo as the single source of truth:

```text
https://github.com/Questpulse86/questpulse-no
```

The older `brand-beyond-hubspot` repo can be archived once this setup is verified. Do not keep two active repos with the same code.

---

## 2. Repository visibility and access

1. Go to **Settings → General → Danger Zone**.
2. Confirm visibility is **Public** or **Private** based on your needs.
   - Public: anyone can see the marketing site code. Secrets remain protected.
   - Private: only invited collaborators can see the code.
3. Go to **Settings → Manage access → Direct access**.
4. Invite team members with the **least privilege** role:
   - Most developers: `Write`
   - Reviewers / leads: `Maintain`
   - Only the owner: `Admin`

---

## 3. Branch protection for `main` (Lovable-compatible)

Important: this project is synced by Lovable. All commits arrive as direct pushes to `main` from `lovable-dev[bot]` / `gpt-engineer-app[bot]`. A classic "require pull request + 1 approval + do not allow bypassing" rule silently blocks those pushes: edits look fine in the Lovable preview but never reach GitHub, and therefore never reach Vercel.

Use a ruleset instead:

1. Go to **Settings → Rules → Rulesets → New branch ruleset**.
2. Name: `main protection`. Enforcement: **Active**. Target branch: `main`.
3. Under **Bypass list**, add the **Lovable GitHub App** (and any other sync bot pushing to `main`).
4. Enable:
   - [x] **Require status checks to pass** → select `build`
   - [x] **Block force pushes**
   - [x] **Restrict deletions**
5. Pull requests: either leave **Require a pull request** off, or enable it with **Required approvals: 0**. With a single developer, requiring 1 approval means every text change waits on another person.
6. Do **not** enable "do not allow bypassing" until Lovable no longer pushes to `main`.

This keeps CI as a real gate while leaving the Lovable to GitHub to Vercel flow intact.

---

## 4. Security settings

1. Go to **Settings → Code security** and enable:
   - [x] **Dependency graph**
   - [x] **Dependabot alerts**
   - [x] **Dependabot security updates**
   - [x] **Grouped security updates**
2. **Secret scanning** and **push protection** require either a public repo or a paid GitHub plan. On a private repo without one, the section is not even visible in settings.
   - This repo holds marketing site code only, no secrets. Making it public unlocks secret scanning and push protection at no cost.
   - Decide first: public repo (recommended here), or accept no secret scanning. Paying for GitHub Team for this alone is not worth it.
3. Go to **Settings → Secrets and variables → Actions** and add only what CI actually needs. CI runs `bun run build` and nothing else.

| Secret name | Needed by CI? | Notes |
|-------------|---------------|-------|
| `VITE_SUPABASE_URL` | Yes, if the build reads it | Browser client |
| `VITE_SUPABASE_ANON_KEY` | Yes, if the build reads it | Publishable key, safe in the browser |
| `HUBSPOT_API_KEY` | No | Runtime only, belongs in the hosting env |
| `LOVABLE_API_KEY` | No | Runtime only |
| `SUPABASE_SERVICE_ROLE_KEY` | No | Never needed by a build step. Do not add it. |
| `VERCEL_TOKEN` | No | Vercel deploys through its own Git integration. A deploy token adds a key to rotate and no benefit. |

Never commit these values to code. The existing `.gitignore` already excludes `.env` and local secrets.

---

## 5. CI/CD verification

The repo already contains `.github/workflows/ci.yml`. It runs on every pull request and push to `main`.

What it does:
- Installs dependencies with `bun install --frozen-lockfile`
- Runs `bun run build`

To verify it works:
1. Open any recent pull request.
2. Look for the **Checks** tab.
3. Confirm the `build` job is green.

If the build fails, fix the error before merging. Branch protection will block merges until the check passes.

---

## 6. Vercel deployment setup

Do not change build settings. Vercel already auto-detects this project as a TanStack Start project and the latest production deploy is green. TanStack Start does not build to `dist`, so setting framework preset "Other", build command `bun run build` and output directory `dist` would break a working setup.

1. Confirm the Vercel project is linked to the `questpulse-no` repo, branch `main`.
2. Leave **Framework preset**, **Build command** and **Output directory** on auto-detect.
3. Add runtime environment variables (Supabase, HubSpot) under **Settings → Environment Variables**.
4. Domains are a separate operation, not a checkbox. Current reality:
   - `digitalcoachub.no`, `www.digitalcoachub.no` and `dchub.no` currently sit on a different Vercel project (`lkprivate`, Next.js).
   - `questpulse.no` is not attached to any Vercel project yet.
   - Moving `digitalcoachub.no` is a live cutover with downtime risk. Plan it separately, with a rollback path.
   - `dchub.no` is the email domain. Do not touch its DNS before the MX records are verified and documented.
5. Order of operations: attach `questpulse.no` to this project first and verify it, then plan the `digitalcoachub.no` cutover.
6. Vercel reads `vercel.json` from the repo for host-based routing:
   - `questpulse.no` → `/`
   - `digitalcoachub.no` → `/dchub`

Do not deploy the same code from two different repos. Always deploy from `questpulse-no`.

---

## 7. Dependabot configuration

The repo already contains `.github/dependabot.yml`. It checks for npm and GitHub Actions updates weekly.

To verify:
1. Go to **Settings → Code security → Dependabot**.
2. Confirm **Dependabot version updates** is enabled.
3. Dependabot will open pull requests for minor and patch updates grouped together.

Review and merge these PRs regularly. Do not ignore security updates.

---

## 8. Security policy

The repo already contains `SECURITY.md`. It tells researchers how to report vulnerabilities privately.

To verify:
1. Go to **Security → Security policy**.
2. Confirm the policy is displayed.

---

## 9. Archiving the old repo

Once you confirm `questpulse-no` has the latest code and deploys correctly:

1. Go to `https://github.com/Questpulse86/brand-beyond-hubspot`.
2. Go to **Settings → General → Danger Zone**.
3. Click **Archive this repository**.
4. Type the repo name and confirm.

Archiving keeps the history but makes the repo read-only. It prevents confusion about which repo is active.

---

## 10. Verification checklist

Before considering the setup complete, verify each item:

- [ ] `questpulse-no` is the only active repo
- [ ] `main` ruleset requires the `build` check, with Lovable App on the bypass list
- [ ] Secret scanning and push protection are enabled (requires public repo or paid plan)
- [ ] Only build-required secrets are added to GitHub Actions
- [ ] CI `build` job passes on pull requests
- [ ] Vercel deploys from `questpulse-no`
- [ ] `questpulse.no` resolves correctly; `digitalcoachub.no` cutover planned separately
- [ ] Old `brand-beyond-hubspot` repo is archived
- [ ] Team members have only the access they need

---

## 11. Ongoing maintenance

- Review Dependabot alerts weekly.
- Rotate API keys every 90 days or immediately after a team member leaves.
- Never store secrets in code, issues, or pull request comments.
- Keep `main` deployable at all times.

---

## Need help?

If a setting is missing or a check fails, open an issue in this repo and tag the person responsible for infrastructure.
