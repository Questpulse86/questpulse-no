# QuestPulse nettstedsovervåking

Dette er en trygg førsteversjon av en autonom **Monitor → Reason → Act**-loop.

## Hva den gjør nå
- Kjører daglig og kan startes manuelt fra **Actions → Site health monitor**.
- Scanner inntil 25 interne sider.
- Kontrollerer tilgjengelighet, title, meta description, Open Graph, språk-attributt, bilders alt-tekst og om GA4/GTM-tag synes i den leverte HTML-en.
- Lagrer en rapport som Actions-artifact.
- Oppretter eller oppdaterer én GitHub Issue når avvik finnes.

## Hva den ikke gjør
Den endrer aldri nettsiden, oppretter aldri kodeendringer og publiserer aldri noe. Det er bevisst. Neste trinn er at agenten foreslår en PR som du godkjenner.

## Oppsett
1. Gå til repoets **Settings → Secrets and variables → Actions → Variables**.
2. Opprett `SITE_URL` med produksjonsadressen om den avviker fra `https://questpulse.no`.
3. Under **Issues → Labels**, opprett labelene `site-health` og `automated-report`. Workflowen virker også uten dem dersom GitHub har rett til å lage labels i repoet.
4. Velg **Actions → Site health monitor → Run workflow** for første sjekk.

## Neste sikkerhetsnivå
Før AI-genererte rettelser aktiveres bør vi legge inn:
- Google PageSpeed Insights API-nøkkel som GitHub Secret.
- GA4 service-account som GitHub Secret og riktig property-ID.
- Preview-/staging-sjekk via Vercel.
- PR-policy: kun dokumenterte, små endringer; aldri endring av layout, sporing eller publisering uten godkjenning.
