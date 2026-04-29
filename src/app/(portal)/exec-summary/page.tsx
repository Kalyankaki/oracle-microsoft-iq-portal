import Link from "next/link";
import {
  ArrowRight,
  Boxes,
  ClipboardList,
  GitCompare,
  HeartPulse,
  Layers,
  Quote,
  UsersRound,
} from "lucide-react";
import { EXEC_SUMMARIES } from "@/lib/data/exec-summary";
import { SCENARIOS, type ScenarioId } from "@/lib/data/scenarios";
import { TIERS } from "@/lib/data/tiers";
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
    <div className="space-y-6">
      <section className="rounded-2xl border border-white/10 bg-gradient-to-br from-navy-900/80 via-navy-900/60 to-azure-blue/[0.06] p-6">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-iq-teal">
            <ClipboardList className="h-5 w-5" />
          </div>
          <div className="font-mono text-[10px] uppercase tracking-widest text-muted">
            Start here · executive summary
          </div>
          <div className="ml-auto hidden font-mono text-[10px] uppercase tracking-widest text-muted md:block">
            Oracle Fusion × Microsoft IQ
          </div>
        </div>

        <h1 className="mt-3 text-xl font-semibold tracking-tight md:text-2xl">
          Same Oracle data. Same prompt. Four very different answers.
        </h1>
        <p className="mt-3 max-w-3xl text-[13.5px] leading-relaxed text-white/85">
          This portal shows what happens when Oracle Fusion data is fronted by Microsoft Copilot
          and progressively layered with three Microsoft IQs — Fabric, Foundry, and Work. The
          same business question gets asked at every tier; the answer goes from generic, to
          quantified, to reasoned-with-actions, to a draft email already in your outbox.
        </p>
      </section>

      <section className="rounded-2xl border border-white/10 bg-navy-900/60 p-5">
        <div className="font-mono text-[10px] uppercase tracking-widest text-muted">
          The narrative
        </div>
        <div className="mt-1 text-base font-semibold tracking-tight">
          Each IQ layer changes what Copilot can do
        </div>
        <div className="mt-4 grid gap-3 md:grid-cols-4">
          {TIERS.map((tier) => (
            <div
              key={tier.id}
              className={cn(
                "rounded-xl border bg-white/[0.02] p-3",
                tier.accent === "slate" && "border-white/10",
                tier.accent === "azure" && "border-azure-blue/30",
                tier.accent === "yellow" && "border-iq-yellow/30",
                tier.accent === "teal" && "border-iq-teal/30",
              )}
            >
              <div className="flex items-center justify-between">
                <div className="font-mono text-[9px] uppercase tracking-widest text-muted">
                  T{tier.index} · {tier.shortLabel}
                </div>
              </div>
              <div className="mt-1 text-[13px] font-semibold tracking-tight">{tier.label}</div>
              <div className="mt-1 text-[11.5px] leading-snug text-white/75">{tier.tagline}</div>
            </div>
          ))}
        </div>
        <p className="mt-4 max-w-3xl text-[12.5px] leading-relaxed text-white/75">
          <span className="text-white/90">Baseline</span> describes the tables.
          <span className="text-azure-blue"> Fabric IQ</span> turns them into real numbers.
          <span className="text-iq-yellow"> Foundry IQ</span> reasons over those numbers and
          ranks the moves. <span className="text-iq-teal">Work IQ</span> personalizes everything
          to your calendar, your team, and your week — and drafts the follow-ups for you.
        </p>
      </section>

      <section className="rounded-2xl border border-white/10 bg-navy-900/60 p-5">
        <div className="font-mono text-[10px] uppercase tracking-widest text-muted">
          How to navigate
        </div>
        <div className="mt-1 text-base font-semibold tracking-tight">
          Three ways to walk through the demo
        </div>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          <Link
            href="/tier/baseline?scenario=supply-chain"
            className="group rounded-xl border border-white/10 bg-white/[0.02] p-4 transition hover:border-white/20 hover:bg-white/[0.04]"
          >
            <div className="flex items-center gap-2">
              <Layers className="h-4 w-4 text-muted" />
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted">
                Step 1
              </div>
            </div>
            <div className="mt-1 text-sm font-semibold">Walk the tiers</div>
            <p className="mt-1 text-[12px] leading-relaxed text-white/75">
              Open Baseline → Fabric IQ → Foundry IQ → Work IQ to see the answer evolve as
              each layer turns on.
            </p>
            <div className="mt-3 inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-widest text-azure-blue">
              Start at Baseline <ArrowRight className="h-3 w-3" />
            </div>
          </Link>

          <Link
            href="/compare?scenario=supply-chain"
            className="group rounded-xl border border-white/10 bg-white/[0.02] p-4 transition hover:border-white/20 hover:bg-white/[0.04]"
          >
            <div className="flex items-center gap-2">
              <GitCompare className="h-4 w-4 text-muted" />
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted">
                Step 2
              </div>
            </div>
            <div className="mt-1 text-sm font-semibold">Compare side-by-side</div>
            <p className="mt-1 text-[12px] leading-relaxed text-white/75">
              All four tier responses to the same prompt, on one screen — the cleanest way to
              see what each IQ adds.
            </p>
            <div className="mt-3 inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-widest text-iq-yellow">
              Open Compare All <ArrowRight className="h-3 w-3" />
            </div>
          </Link>

          <div className="rounded-xl border border-iq-teal/30 bg-iq-teal/[0.05] p-4">
            <div className="flex items-center gap-2">
              <ClipboardList className="h-4 w-4 text-iq-teal" />
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted">
                Step 3 · you are here
              </div>
            </div>
            <div className="mt-1 text-sm font-semibold">Read the bottom line</div>
            <p className="mt-1 text-[12px] leading-relaxed text-white/75">
              The cards below summarize what the full stack delivers across all three scenarios:
              numbers, top actions, and the decisions that need you.
            </p>
            <div className="mt-3 inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-widest text-iq-teal">
              Keep scrolling <ArrowRight className="h-3 w-3" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mb-3 flex items-end justify-between">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-muted">
              Bottom line · all three scenarios
            </div>
            <div className="text-base font-semibold tracking-tight">
              What the full stack produces — Foundry IQ view, grounded in Oracle Fusion
            </div>
          </div>
          <div className="hidden font-mono text-[10px] uppercase tracking-widest text-muted md:block">
            Synthetic data · no live systems queried
          </div>
        </div>

        <div className="space-y-4">
          {SCENARIOS.map((s) => {
            const summary = EXEC_SUMMARIES[s.id];
            const Icon = ICONS[s.id];
            return (
              <article
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
                  <div className="min-w-0 flex-1">
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
                  <Link
                    href={`/compare?scenario=${s.id}`}
                    className="hidden shrink-0 items-center gap-1 rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-muted transition hover:border-white/20 hover:text-white md:inline-flex"
                  >
                    See all tiers <ArrowRight className="h-3 w-3" />
                  </Link>
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
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}
