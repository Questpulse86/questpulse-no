# QuestPulse nettside: forside først

## Hvorfor Lovable som plattform

Du får en ekte kodebase (React) i stedet for en HubSpot-mal. Det betyr full kontroll over design, fart og SEO, innebygd database og innlogging via Lovable Cloud, og at koden kan eksporteres til GitHub og hostes hos hvilken som helst ekstern leverandør senere. HubSpot beholdes som CRM: nettsiden sender leads dit via HubSpot-koblingen du allerede har.

## Hva som bygges nå

En komplett forside på norsk og engelsk, bygget på QuestPulse-merkevaren fra dokumentene dine:

- QP Navy #13212F, QP Teal #1A9A8E, grå #6B7F8E, bakgrunn #F4F6F8
- Playfair Display i overskrifter, DM Sans i brødtekst
- Kategori: People Intelligence (ikke People Risk Intelligence)
- Ord som bevisst utelates i kundevendt tekst: AI, coaching, sanntid

Seksjoner på forsiden, i tråd med budskapshierarkiet i vekstplanen:

1. Hero: "Vi gir arbeidsgivere innsikt i tide" med kortversjonen "Se det tidligere. Handle bedre." og to CTA-er (Book demo, Se hvordan det fungerer)
2. Problemet: innsikten kommer sent, viktige forhold er vanskelige å se, tiltak blir svakt fulgt opp
3. Slik fungerer QuestPulse: innsikt, prioritering, oppfølging av effekt
4. Compliance-inngangen: arbeidsmiljøloven som risikostyring, ikke HR-tiltak
5. Verdi per rolle: ansatt, leder, HR, ledelse og styre
6. Tillitsbånd: Azure Norway East, GDPR art. 25, EU AI Act-prinsipper, SSO, Teams og Google Workspace
7. Bank og finans som første bevismarked (pilot omtales anonymisert, aldri navngitt kunde)
8. Avsluttende CTA med kontakt- og demoskjema
9. Header og footer som gjenbrukes på alle fremtidige sider

## Skjema og leads

Ett skjema (navn, e-post, selskap, rolle, melding, type henvendelse: demo, pilot, partner, investor).

- Lagres i egen database i Lovable Cloud, så dere eier dataene
- Sendes samtidig til HubSpot CRM som kontakt via HubSpot-koblingen
- Feiler HubSpot, går innsendingen likevel gjennom og lagres, slik at ingen lead mistes

## Redigering uten kode

Enkelt innholdspanel med innlogging på /admin:

- Alle tekster på forsiden hentes fra databasen, ikke fra kode
- Du redigerer overskrifter, ingresser, punktlister og CTA-tekster per språk
- Oversikt over innkomne leads
- Kun brukere med admin-rolle får tilgang (rolle lagres i egen tabell, ikke på brukerprofilen)

Første versjon av innholdet legges inn ferdig utfylt, så siden er komplett fra dag én.

## Språk

Norsk er standard på /, engelsk på /en. Språkvelger i header. Alle tekstfelt finnes i begge språk i innholdspanelet.

## Teknisk

- TanStack Start med filbasert ruting, Tailwind. Designtokens legges i src/styles.css som semantiske variabler i oklch
- Lovable Cloud aktiveres for database, innlogging og lagring av innsendinger
- Tabeller: site_content (nøkkel, språk, verdi), leads, user_roles med has_role-funksjon, RLS på alt. Offentlig lesetilgang kun til site_content
- HubSpot-kall skjer server-side via connector-gateway, aldri fra nettleseren
- SEO per side: title, meta description, H1, Open Graph. Forsidens title: "QuestPulse | Løpende innsikt i organisasjonen"

## Neste steg etter forsiden

Slik fungerer QuestPulse, For HR og ledelse, For bank og finans, Pilot, Partnere, Sikkerhet og personvern, Kundeerfaringer, Om selskapet. Alle bygges på samme moduler og samme innholdspanel.
