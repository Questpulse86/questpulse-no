# Sikkerhetspolicy

Digital Coach Hub AS (org.nr. 936 265 634) drifter QuestPulse.

## Rapportering av sårbarheter

Send funn til support@questpulse.no. Ikke opprett offentlige issues for
sikkerhetsforhold. Vi bekrefter mottak innen fem virkedager.

## Prinsipper for tilgang og hemmeligheter

- Ingen hemmeligheter i kode eller i versjonskontroll. Nøkler ligger i
  hostingmiljøets miljøvariabler og i prosjektets hemmelighetslager.
- Minst privilegium for alle tokens, tjenestekontoer og GitHub Actions.
- Tilgangskontroll til databasen håndheves med rad-nivå-sikkerhet.
- Pseudonymisering: direkte identifikatorer sendes aldri til
  analysekomponenter, og koblingstabellen er isolert med egen tilgangskontroll.
- Datalagring i EØS.

## Nøkler som er trygge i kode

Publiserbare nøkler (frontend-nøkkel til backend-API) er ment å eksponeres i
klienten. Servernøkler og API-nøkler til tredjepart er det aldri.
