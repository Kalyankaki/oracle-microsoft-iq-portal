import { Boxes, ClipboardList, HeartPulse, Quote, UsersRound } from "lucide-react";
import { EXEC_SUMMARIES } from "@/lib/data/exec-summary";
import { SCENARIOS, type ScenarioId } from "@/lib/data/scenarios";
import { cn } from "@/lib/utils";

const ICONS: Record<ScenarioId, typeof Boxes> = {
  "supply-chain": Boxes,
  workforce: UsersRound,
  "customer-health": HeartPulse,
};

const ACCENT: Record<ScenarioId, string> = {
  "supply-chain": "border-azure-blue/30 text-azure-blue",
  workforce: "border-iq-yellow/30 text-iq-yellow",
  "customer-health": "border-iq-teal/30 text-iq-teal",
};

export default function ExecSummaryPage() {
  return (
    <div className="space-y-5">
      <div className="rounded-2xl border border-white/10 bg-navy-900/60 p-5">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-iq-teal">
            <ClipboardList className="h-5 w-5" />
          </div>
          <div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-muted">
              Executive summary
            </div>
            <div className="text-base font-semibold tracking-tight">
              All three scenarios — bottom line, top moves, decisions needed
            </div>
          </div>
          <div className="ml-auto hidden font-mono text-[10px] uppercase tracking-widest text-muted md:block">
            Foundry IQ view · grounded in Oracle Fusion
          </div>
        </div>
        <p className="mt-4 text-[13px] leading-relaxed text-white/85">
          A one-page read across Supply Chain, Workforce, and Customer Health. Each card shows the
          headline finding, the numbers behind it, the top three actions with owners and projected
          impact, and the specific decisions you need to make.
        </p>
      </div>

      <div className="space-y-4">
        {SCENARIOS.map((s) => {
          const summary = EXEC_SUMMARIES[s.id];
          const Icon = ICONS[s.id];
          return (
            <section
              key={s.id}
              className={cn(
                "rounded-2xl border bg-navy-900/70 p-5",
                s.id === "supply-chain" && "border-azure-blue/30",
                s.id === "workforce" && "border-iq-yellow/30",
                s.id === "customer-health" && "border-iq-teal/30",
              )}
            >
              <div className="flex flex-wrap items-start gap-3">
                <div
                  className={cn(
                    "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border bg-white/5",
                    ACCENT[s.id],
                  )}
                >
                  <Icon className="h-5 w-5" strokeWidth={2} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-muted">
                    {s.domain}
                  </div>
                  <div className="text-base font-semibold tracking-tight">{s.label}</div>
                  <p className="mt-2 text-[13.5px] font-medium leading-relaxed text-white">
                    {summary.headline}
                  </p>
                  <p className="mt-2 text-[12.5px] leading-relaxed text-white/80">
                    {summary.bottomLine}
                  </p>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-2 md:grid-cols-4">
                {summary.kpis.map((kpi, idx) => (
                  <div
                    key={idx}
                    className="rounded-lg border border-white/10 bg-white/[0.03] p-3"
                  >
                    <div className="font-mono text-[9px] uppercase tracking-widest text-muted">
                      {kpi.label}
                    </div>
                    <div className="mt-1 text-base font-semibold tracking-tight md:text-lg">
                      {kpi.value}
                    </div>
                    {kpi.trend && (
                      <div className="mt-0.5 text-[11px] text-muted">{kpi.trend}</div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-4 grid gap-4 md:grid-cols-[1.4fr,1fr]">
                <div className="overflow-hidden rounded-lg border border-white/10">
                  <div className="border-b border-white/10 bg-white/[0.03] px-3 py-2 font-mono text-[10px] uppercase tracking-widest text-muted">
                    Top actions
                  </div>
                  <table className="w-full text-left">
                    <thead>
                      <tr className="bg-white/[0.02]">
                        <th className="border-b border-white/10 px-3 py-2 font-mono text-[10px] uppercase tracking-widest text-muted">
                          Action
                        </th>
                        <th className="border-b border-white/10 px-3 py-2 font-mono text-[10px] uppercase tracking-widest text-muted">
                          Owner
                        </th>
                        <th className="border-b border-white/10 px-3 py-2 font-mono text-[10px] uppercase tracking-widest text-muted">
                          Impact
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {summary.topActions.map((a, idx) => (
                        <tr
                          key={idx}
                          className="border-t border-white/5 odd:bg-white/[0.015]"
                        >
                          <td className="px-3 py-2 align-top text-[12.5px] font-medium">
                            {a.label}
                          </td>
                          <td className="px-3 py-2 align-top text-[12.5px] text-white/85">
                            {a.owner}
                          </td>
                          <td className="px-3 py-2 align-top text-[12.5px] text-white/85">
                            {a.impact}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="rounded-lg border border-white/10 bg-white/[0.02] p-3">
                  <div className="mb-2 font-mono text-[10px] uppercase tracking-widest text-muted">
                    Decisions needed from you
                  </div>
                  <ul className="space-y-1.5 pl-5 text-[12.5px] leading-relaxed text-white/85 marker:text-muted">
                    {summary.decisionsNeeded.map((d, idx) => (
                      <li key={idx} className="list-disc">
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-3 flex items-center gap-1.5 font-mono text-[10px] text-muted">
                <Quote className="h-3 w-3" />
                Source · {summary.citation}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
