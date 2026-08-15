import { useState } from "react";

import { ROLES, type RoleId } from "@/components/demo/demo-data";
import {
  DepartmentView,
  EmployeeView,
  ExecutiveView,
  TeamView,
} from "@/components/demo/DemoViews";
import { TeamsDialog } from "@/components/demo/TeamsDialog";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function DemoConsole() {
  const [rolle, setRolle] = useState<RoleId>("H1");
  const [teamsOpen, setTeamsOpen] = useState(false);
  const aktiv = ROLES.find((r) => r.id === rolle)!;

  return (
    <div className="rounded-lg border border-border bg-background shadow-sm">
      <div className="border-b border-border px-5 py-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="font-display text-lg font-bold text-navy">QuestPulse-visning</p>
            <p className="text-xs text-muted-foreground">
              People Risk Intelligence, levert passivt via Microsoft Teams
            </p>
          </div>
          <Button size="sm" variant="outline" onClick={() => setTeamsOpen(true)}>
            Se Teams-simulering
          </Button>
        </div>

        <div
          className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-4"
          role="tablist"
          aria-label="Velg rollenivå"
        >
          {ROLES.map((r) => {
            const active = rolle === r.id;
            return (
              <button
                key={r.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setRolle(r.id)}
                className={cn(
                  "rounded-md border px-3.5 py-2.5 text-left text-sm font-semibold transition-colors",
                  active
                    ? "border-transparent bg-navy text-navy-foreground shadow-sm"
                    : "border-border bg-card text-muted-foreground hover:text-navy",
                )}
              >
                <span className={cn("text-[11px] font-bold", active ? "text-teal" : "text-teal")}>
                  {r.id}
                </span>
                <span className="mt-0.5 block">{r.navn}</span>
              </button>
            );
          })}
        </div>
        <p className="mt-3 text-xs text-muted-foreground">{aktiv.beskrivelse}</p>
      </div>

      <div className="bg-muted/40 p-4 sm:p-6">
        {rolle === "H1" ? <ExecutiveView /> : null}
        {rolle === "H2" ? <DepartmentView /> : null}
        {rolle === "H3" ? <TeamView /> : null}
        {rolle === "H4" ? <EmployeeView /> : null}
      </div>

      <TeamsDialog open={teamsOpen} onOpenChange={setTeamsOpen} />
    </div>
  );
}
