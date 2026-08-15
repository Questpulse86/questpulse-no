import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { Link, createFileRoute } from "@tanstack/react-router";

import { DemoConsole } from "@/components/demo/DemoConsole";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { Button } from "@/components/ui/button";
import { getSiteContent } from "@/lib/site.functions";

const title = "Interaktiv demo | QuestPulse People Risk Intelligence";
const description =
  "Utforsk QuestPulse på fire nivåer: toppleder, avdelingsleder, teamleder og medarbeider. Interaktiv demo med fiktive eksempeldata.";

const contentQuery = queryOptions({
  queryKey: ["site-content", "no"],
  queryFn: () => getSiteContent({ data: { locale: "no" as const } }),
});

export const Route = createFileRoute("/demo")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "nb_NO" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  loader: ({ context }) => context.queryClient.ensureQueryData(contentQuery),
  component: DemoPage,
});

function DemoPage() {
  const { data } = useSuspenseQuery(contentQuery);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader locale="no" content={data} altHref="/" />

      <main>
        <section className="border-b border-border bg-navy text-navy-foreground">
          <div className="mx-auto max-w-6xl px-5 py-16 lg:py-20">
            <p className="text-xs font-bold tracking-[0.18em] text-teal uppercase">
              Interaktiv demo
            </p>
            <h1 className="mt-4 max-w-3xl text-3xl leading-tight text-navy-foreground sm:text-4xl">
              Se hva hvert nivå faktisk får se
            </h1>
            <p className="mt-5 max-w-2xl text-navy-foreground/75">
              QuestPulse leveres passivt gjennom Microsoft Teams og gir løpende innsikt i
              organisatoriske signaler. Bytt mellom de fire nivåene under. Ledernivåene ser kun
              aggregerte tall, mens medarbeiderens rom er privat.
            </p>
            <p className="mt-6 inline-flex rounded-full border border-navy-foreground/25 px-3 py-1 text-[11px] font-semibold tracking-[0.12em] text-navy-foreground/70 uppercase">
              Demo med fiktive eksempeldata
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-14">
          <DemoConsole />
          <p className="mt-6 text-xs text-muted-foreground">
            Alle tall, team og navn i demoen er konstruert for illustrasjon. Ingen ekte kundedata
            eller personopplysninger vises.
          </p>
        </section>

        <section className="border-t border-border bg-card">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 px-5 py-14">
            <div className="max-w-xl">
              <h2 className="text-2xl leading-tight sm:text-3xl">
                Vil du se dette på egne data i en pilot?
              </h2>
              <p className="mt-3 text-muted-foreground">
                Vi går gjennom oppsett, personvern og forventet effekt i en kartleggingssamtale.
              </p>
            </div>
            <Button asChild size="lg">
              <Link to="/kontakt">Book kartleggingssamtale</Link>
            </Button>
          </div>
        </section>
      </main>

      <SiteFooter locale="no" content={data} />
    </div>
  );
}
