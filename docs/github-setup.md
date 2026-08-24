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

## 3. Branch protection for `main`

Protect `main` so all changes go through pull requests and CI.

1. Go to **Settings → Branches**.
2. Click **Add rule**.
3. Branch name pattern: `main`
4. Enable these options:
   - [x] **Require a pull request before merging**
     - [x] **Require approvals**: set to at least `1`
     - [x] **Dismiss stale pull request approvals when new commits are pushed**
   - [x] **Require status checks to pass before merging**
     - Search for and select `build`
   - [x] **Require conversation resolution before merging**
   - [x] **Do not allow bypassing the above settings**
5. Click **Create** or **Save changes**.

This enforces: every change to `main` needs a PR, one approval, and a passing CI build.

---

## 4. Security settings

1. Go to **Settings → Code security**.
2. Enable:
   - [x] **Dependency graph**
   - [x] **Dependabot alerts**
   - [x] **Dependabot security updates**
   - [x] **Secret scanning**
   - [x] **Push protection for secrets**
3. Go to **Settings → Secrets and variables → Actions**.
4. Add the following repository secrets. These are encrypted and only available to GitHub Actions.

| Secret name | Value / source | Purpose |
|-------------|----------------|---------|
| `LOVABLE_API_KEY` | From Lovable project settings | Lovable connector gateway |
| `HUBSPOT_API_KEY` | From HubSpot private app | HubSpot CRM sync |
| `SUPABASE_URL` | From Lovable Cloud settings | Database URL |
| `SUPABASE_SERVICE_ROLE_KEY` | From Lovable Cloud settings | Server-side database access |
| `VITE_SUPABASE_URL` | Same as `SUPABASE_URL` | Browser client |
| `VITE_SUPABASE_ANON_KEY` | Publishable anon key | Browser client |
| `VERCEL_TOKEN` | From Vercel dashboard | Deployment token |

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

1. Go to [vercel.com](https://vercel.com) and import `questpulse-no`.
2. In project settings, set:
   - **Framework preset**: Other (or leave blank if using custom build)
   - **Build command**: `bun run build`
   - **Output directory**: `dist`
3. Add all environment variables from the secrets table above.
4. Under **Domains**, add both:
   - `questpulse.no`
   - `digitalcoachub.no`
5. Set `questpulse.no` as the primary domain.
6. Vercel reads `vercel.json` from the repo for host-based routing:
   - `questpulse.no` → `/`
   - `digitalcoachub.no` → `/dchub`

Do not deploy from two different repos to the same Vercel project. Always deploy from `questpulse-no`.

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
- [ ] `main` branch is protected with PR + approval + CI required
- [ ] Secret scanning and push protection are enabled
- [ ] All required secrets are added to GitHub Actions
- [ ] CI `build` job passes on pull requests
- [ ] Vercel deploys from `questpulse-no`
- [ ] Both `questpulse.no` and `digitalcoachub.no` resolve correctly
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
