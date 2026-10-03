<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## QuestPulse website review requirements

This repository hosts the public QuestPulse website and Digital Coach Hub pages. It is not the employee-reflection product backend. Keep the two brands and their canonical URLs separate.

For code reviews, including Vercel Agent:

- Prioritize concrete security findings: missing server-side authorization, lost CSRF protection, private data in public caches, exposed secrets, unsafe HTML and unvalidated input. Give file, impact, reproduction and a minimal fix. Distinguish confirmed defects from unverified risks.
- Public marketing caches must never include cookies, bearer tokens, admin data, leads or employee reflections. Respect upstream no-store/private directives and visitor-dependent Vary headers.
- Keep Supabase service keys and other credentials on the server. VITE variables are public. Never print secret values, contact records or tokens in reports/logs.
- Preserve the existing server-side role checks and CSRF middleware. robots.txt and noindex are not authorization.
- Keep the Norwegian and English page metadata, document language and canonical/hreflang links correct. Preview deployments remain noindex.
- Preserve keyboard navigation, form labels, reduced-motion behavior and the existing shared typography. Report inaccessible interactions or avoidable loading work.
- Use npm and package-lock.json consistently. Run `node --test tests/security.test.mjs`, `npm audit --audit-level=high` and `NITRO_PRESET=vercel npm run build`. Report unavailable checks as unverified, never passed.
- Propose changes through a pull request. Do not automatically merge, publish, broaden permissions, modify production data or enable paid services. Review instructions are guidance, not enforceable access control.
- Use Vercel Agent only for an explicitly requested review until a recurring agent budget is approved. Do not trigger other agents recursively.
