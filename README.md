# questpulse.no

Kildekode for nettstedene til QuestPulse og Digital Coach Hub AS (org.nr. 936 265 634).

Ett kodebase, to domener. Vertsbasert ruting i `vercel.json` sender `questpulse.no` til `/` og `digitalcoachub.no` til `/dchub`.

QuestPulse er People Intelligence-infrastruktur som kobler lederhandling til effekt i organisasjoner.

## Utvikling

Krever Node.js og npm. Se [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) for installasjon.

```sh
git clone <repo-url>
cd questpulse-no
npm i
npm run dev
```

## Miljøvariabler

`.env` er sporet i repoet med vilje og skal kun inneholde publiserbare verdier: Supabase prosjekt-ID, URL og publishable key. Disse ligger uansett i nettleserbundlen.

Legg aldri service role-nøkler, API-nøkler eller tokens i `.env`. Servernøkler hører hjemme i Vercel environment variables eller GitHub Actions secrets.

## Bygg og deploy

CI kjører `bun install --frozen-lockfile` og `bun run build` ved hver pull request og push til `main`. Vercel deployer fra `main` med autodetektert framework-oppsett. Build settings skal ikke overstyres manuelt.

Oppsett av repo, beskyttelse av `main` og deploy er dokumentert i [docs/github-setup.md](docs/github-setup.md).

## Sikkerhet

Sårbarheter meldes til support@questpulse.no. Ikke opprett offentlige issues for sikkerhetsforhold. Se [SECURITY.md](SECURITY.md).

## Bygget med Lovable

Prosjektet utvikles i [Lovable](https://lovable.dev). Endringer i Lovable committes rett til `main`, og push til `main` synkes tilbake til Lovable.
