import { useState } from "react";

import { WEEK_CALENDAR } from "@/components/demo/demo-data";
import { SectionLabel } from "@/components/demo/DemoPrimitives";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

function Melding({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex animate-fade-in items-start gap-2">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal text-xs font-bold text-navy-foreground">
        QP
      </span>
      <div className="max-w-md rounded-lg rounded-tl-none bg-card px-4 py-2 text-sm shadow-sm">
        {children}
      </div>
    </div>
  );
}

export function TeamsDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  const [steg, setSteg] = useState<0 | 1 | 2>(0);

  return (
    <Dialog
      open={open}
      onOpenChange={(v) => {
        onOpenChange(v);
        if (!v) setSteg(0);
      }}
    >
      <DialogContent className="max-h-[88vh] overflow-y-auto sm:max-w-3xl">
        <DialogHeader>
          <DialogTitle className="font-display text-lg text-navy">
            QuestPulse i Microsoft Teams
          </DialogTitle>
          <DialogDescription>
            Visuell simulering med fiktive data. Ingen ekte Teams-tilkobling.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 pt-2">
          <div>
            <SectionLabel>Din uke, mønster oppdaget</SectionLabel>
            <div className="flex gap-2">
              {WEEK_CALENDAR.map((d) => (
                <div
                  key={d.dag}
                  className="flex-1 rounded-md border p-3 text-center"
                  style={{
                    borderColor: d.tung ? "var(--signal-high-soft)" : "var(--border)",
                    background: d.tung ? "var(--signal-high-soft)" : "transparent",
                  }}
                >
                  <p className="text-xs font-semibold text-muted-foreground">{d.dag}</p>
                  <p className="font-display text-xl font-bold text-navy">{d.moter}</p>
                  <p className="text-[10px] text-muted-foreground">møter</p>
                </div>
              ))}
            </div>
            <p className="mt-2 text-xs text-muted-foreground">
              Løsningen leser møtemønstre, ikke innholdet i møter eller e-post. Torsdag peker seg ut
              som en tung dag.
            </p>
          </div>

          <div>
            <SectionLabel>Samtale i Teams</SectionLabel>
            <div className="space-y-3 rounded-lg bg-muted p-4">
              <Melding>
                Hei. Jeg ser at torsdagen din er ganske tett, seks møter på rad. Har du to minutter
                til et pusterom, eller vil du heller ta en rask sjekk-inn nå?
              </Melding>

              {steg === 0 ? (
                <div className="flex flex-wrap gap-2 pl-10">
                  <Button size="sm" onClick={() => setSteg(1)}>
                    Ja, gjerne
                  </Button>
                  <Button size="sm" variant="outline" onClick={() => setSteg(2)}>
                    Ikke nå, takk
                  </Button>
                </div>
              ) : null}

              {steg === 1 ? (
                <>
                  <Melding>
                    Bra. Ett spørsmål: hva trenger du mest akkurat nå, litt ro eller litt retning før
                    dagen starter?
                  </Melding>
                  <Melding>
                    Forslag: legg inn 15 minutter uten møte før den tredje samtalen. Jeg minner deg
                    på det i morgen tidlig, hvis du vil.
                  </Melding>
                </>
              ) : null}

              {steg === 2 ? (
                <Melding>
                  Ingen stress. Jeg tar en ny sjekk neste uke. Du kan alltid starte samtalen selv når
                  det passer bedre.
                </Melding>
              ) : null}

              {steg !== 0 ? (
                <div className="pl-10">
                  <Button size="sm" variant="ghost" onClick={() => setSteg(0)}>
                    Spill av på nytt
                  </Button>
                </div>
              ) : null}
            </div>
            <p className="mt-2 text-xs text-muted-foreground">
              Samtalen er privat for medarbeideren. Innholdet deles aldri med leder eller HR, og
              inngår ikke i aggregerte tall på individnivå.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
