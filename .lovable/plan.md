# HubSpot-synk: riktige omfang og verifisering

## Hvilke omfang du trenger

Nøkkelen trenger svært få omfang. Velg disse:

- `crm.objects.contacts.read`
- `crm.objects.contacts.write`
- `crm.schemas.contacts.read` (for å lese hvilke kontaktfelt som finnes, brukes til å treffe riktig felt)

Legg til i tillegg bare hvis du vil ha det:

- `crm.lists.read` + `crm.lists.write` — hvis nye leads skal legges automatisk i en bestemt HubSpot-liste
- `crm.objects.companies.read` + `crm.objects.companies.write` — hvis selskapsnavnet skal opprettes som eget selskapsobjekt og kobles til kontakten

Alt annet i listen din (avtaler, tilbud, ordrer, prosjekter, kampanjer, CMS, sekvenser) kan fjernes. En nøkkel med veldig mange omfang er både et sikkerhetsproblem og en vanlig årsak til at opprettelsen feiler, fordi noen omfang krever abonnement eller tilganger porteføljen din ikke har.

## Sannsynlig årsak til at det feilet

To mulige årsaker, som må bekreftes:

1. Du valgte omfang som HubSpot-kontoen din ikke har lisens for (for eksempel sekvenser, prosjekter, handel, partnerobjekter). Da nektes opprettelsen.
2. Selve lead-sendingen kan feile senere av en annen grunn: koden sender i dag feltet `message` på kontakten. `message` er ikke et standard kontaktfelt i HubSpot, og et ukjent felt gir feil ved oppretting.

## Hva som gjøres

1. Du oppretter en ny servicenøkkel med kun omfangene over, og kobler HubSpot til prosjektet via koblingskortet i chatten.
2. Jeg leser hvilke kontaktfelt som faktisk finnes i din portal, og kartlegger skjemafeltene mot ekte HubSpot-felt:
   - navn til `firstname` / `lastname`
   - e-post til `email`
   - selskap til `company`
   - rolle til `jobtitle`
   - melding og henvendelsestype til felt som finnes; hvis de ikke finnes, foreslår jeg to egendefinerte kontaktfelt (`questpulse_henvendelsestype`, `questpulse_melding`) som du oppretter i HubSpot, eventuelt sammenslått til notatfeltet i stedet
3. Hvis du vil ha leads i en egen liste, henter jeg liste-ID-en og legger kontakten inn i listen etter oppretting.
4. Feil fra HubSpot logges og lagres på leadet som i dag, slik at ingen henvendelse går tapt selv om synkingen feiler.

## Verifisering

- Sender en testhenvendelse gjennom skjemaet på nettsiden
- Bekrefter at kontakten dukker opp i HubSpot med riktige verdier i hvert felt
- Bekrefter at leadet er lagret i databasen med `hubspot_synced = true` og uten feilmelding
- Rydder bort testkontakten etterpå

## Teknisk

- `src/lib/hubspot.server.ts`: feltkartlegging oppdateres, valgfri listeinnmelding legges til, feilhåndtering beholdes
- Alle kall går server-side via connector-gateway, aldri fra nettleseren
- Ingen endringer i skjema eller design
