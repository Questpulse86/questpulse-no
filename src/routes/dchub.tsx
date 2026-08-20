import { createFileRoute, Link } from "@tanstack/react-router";

const title = "Digital Coach Hub AS | Utvikling av ledere og organisasjoner";
const description =
  "Digital Coach Hub AS hjelper virksomheter med lederutvikling, endringsarbeid og organisatorisk utvikling, og står bak People Intelligence-plattformen QuestPulse.";

export const Route = createFileRoute("/dchub")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "nb_NO" },
      { property: "og:url", content: "https://digitalcoachub.no/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://digitalcoachub.no/" }],
  }),
  component: DcHub,
});

const services = [
  {
    title: "Lederutvikling",
    text: "Praktisk utvikling av ledere som står i krevende endringer, forankret i etablert metodikk som ADKAR og Kotter.",
  },
  {
    title: "Endring og omstilling",
    text: "Strukturert støtte gjennom omstilling, med tydelig rekkefølge, eierskap og oppfølging av effekt.",
  },
  {
    title: "Organisatorisk utvikling",
    text: "Arbeid med samhandling, kapasitet og arbeidsform, slik at strukturen støtter oppdraget virksomheten har.",
  },
];

function DcHub() {
  return (
    <div className="min-h-screen bg-[#FBF7F1] text-[#2B2118]">
      <header className="border-b border-[#E4D9C9]">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5">
          <span className="font-display text-lg font-bold">Digital Coach Hub</span>
          <a
            href="mailto:hei@questpulse.no"
            className="text-sm font-semibold text-[#8A5A2B] underline-offset-4 hover:underline"
          >
            Ta kontakt
          </a>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-5xl px-5 py-24">
          <p className="text-xs font-bold tracking-[0.18em] text-[#8A5A2B] uppercase">
            Digital Coach Hub AS
          </p>
          <h1 className="mt-6 max-w-3xl font-display text-4xl leading-[1.1] font-bold sm:text-5xl">
            Vi utvikler ledere og organisasjoner som skal stå i endring over tid
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-[#5A4A3A]">
            Vi kombinerer erfaring fra ledelse, omstilling og organisasjonsutvikling med et tydelig
            fokus på hva som faktisk endrer praksis i hverdagen.
          </p>
        </section>

        <section className="border-y border-[#E4D9C9] bg-[#F4ECE1]">
          <div className="mx-auto max-w-5xl px-5 py-20">
            <h2 className="font-display text-3xl">Det vi jobber med</h2>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {services.map((service) => (
                <article key={service.title} className="border-l-2 border-[#8A5A2B] pl-5">
                  <h3 className="text-lg font-bold">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#5A4A3A]">{service.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-5 py-20">
          <h2 className="font-display text-3xl">QuestPulse</h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-[#5A4A3A]">
            Digital Coach Hub AS står bak QuestPulse, en People Intelligence-plattform som gir
            ledelsen løpende innsikt i hva som utvikler seg i organisasjonen.
          </p>
          <p className="mt-6">
            <a
              href="https://questpulse.no"
              className="text-sm font-semibold text-[#8A5A2B] underline-offset-4 hover:underline"
            >
              Les mer om QuestPulse
            </a>
          </p>
        </section>
      </main>

      <footer className="border-t border-[#E4D9C9] py-10">
        <div className="mx-auto max-w-5xl px-5 text-sm text-[#5A4A3A]">
          <p>Digital Coach Hub AS. Org.nr. 936 265 634.</p>
          <p className="mt-2">
            <a className="underline-offset-4 hover:underline" href="mailto:hei@questpulse.no">
              hei@questpulse.no
            </a>
          </p>
          <p className="mt-4 text-xs">
            <Link to="/" className="underline-offset-4 hover:underline">
              questpulse.no
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
