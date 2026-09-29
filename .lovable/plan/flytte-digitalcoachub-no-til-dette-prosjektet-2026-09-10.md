# Flytte digitalcoachub.no til dette prosjektet

Målet: digitalcoachub.no viser DCH-innholdet på rot, uten avbrudd i e-post.

## Det jeg har sjekket i dag

- Domenet styres hos Hyp (ns1/ns2/ns3.hyp.net). Alle DNS-endringer gjøres der.
- Domenet peker i dag på det gamle nettstedet (A-poster 199.60.103.150 og 199.60.103.50).
- E-post går til Microsoft 365 (MX: digitalcoachub-no.mail.protection.outlook.com).
- Det ligger flere verifiseringsposter der (Microsoft, Google, Facebook, OpenAI, Anthropic).

Viktig: MX og verifiseringsposter skal ikke røres. Bare A-postene som peker nettsiden byttes.

## Én feil du bør rette samtidig

SPF-posten er i dag slått sammen til én ulovlig linje:
`v=spf1 include:spf.protection.outlook.com include:146982049.spf06.hubspotemail.net -allv=spf1 ip4:60.200.100.30 ...`

Den skal være én ren linje:
`v=spf1 include:spf.protection.outlook.com include:146982049.spf06.hubspotemail.net -all`

Slik den står nå kan e-post fra Microsoft 365 og HubSpot havne i søppelpost. Dette er uavhengig av flyttingen, men bør fikses i samme operasjon.

## Rekkefølge

1. Koble digitalcoachub.no og www.digitalcoachub.no til dette prosjektet i Lovable. Du får da et verifiseringsnavn og de nye adressene.
2. Legg inn verifiseringsposten hos Hyp først. Den påvirker ingenting som er live.
3. Sett kort levetid (TTL 300 sekunder) på A-postene for digitalcoachub.no og www. Vent til gammel TTL har gått ut, typisk 1 til 24 timer. Dette gjør tilbakerulling rask.
4. Bytt A-postene til de nye adressene. Bare disse to navnene.
5. Vent på at sikkerhetssertifikat blir utstedt automatisk, vanligvis noen minutter.
6. Sett digitalcoachub.no som primærdomene, slik at www videresendes dit.
7. Sett TTL tilbake til normalt nivå etter et døgn uten feil.

## Kontroll etter bytte

- digitalcoachub.no viser DCH-forsiden, ikke QuestPulse.
- www.digitalcoachub.no havner på digitalcoachub.no.
- digitalcoachub.no/personvern virker.
- digitalcoachub.no/robots.txt og /sitemap.xml viser DCH-adresser.
- Send og motta en e-post til en adresse på domenet.
- Book en samtale via skjemaet og se at den kommer inn i HubSpot.

## Tilbakerulling

Sett A-postene tilbake til 199.60.103.150 og 199.60.103.50. Med TTL på 300 sekunder er siden tilbake på gammel løsning innen fem minutter. MX røres ikke, så e-post er aldri i risiko.

## Tidspunkt

Gjør byttet på en hverdag formiddag, ikke fredag ettermiddag, slik at det er tid til å oppdage feil.

## Etter flyttingen

- Meld digitalcoachub.no/sitemap.xml inn i Google Search Console.
- Fjern det gamle nettstedet fra hosting først når det nye har vært stabilt i noen dager.
- Legg til delingsbilde for DCH, som fortsatt mangler.
