import Link from "next/link";
import { Boxes, ClipboardList, HeartPulse, UsersRound } from "lucide-react";
import { SCENARIO_PROGRESSIONS } from "@/lib/data/exec-summary";
import { SCENARIOS, isScenarioId, type ScenarioId } from "@/lib/data/scenarios";
import { TIERS, type TierId } from "@/lib/data/tiers";
import { cn } from "@/lib/utils";

const ICONS: Record<ScenarioId, typeof Boxes> = {
  "supply-chain": Boxes,
  workforce: UsersRound,
  "customer-health": HeartPulse,
};

const SCENARIO_BORDER: Record<ScenarioId, string> = {
  "supply-chain": "border-azure-blue/30",
  workforce: "border-iq-yellow/30",
  "customer-health": "border-iq-teal/30",
};

const SCENARIO_ICON_TINT: Record<ScenarioId, string> = {
  "supply-chain": "border-azure-blue/30 text-azure-blue",
  workforce: "border-iq-yellow/30 text-iq-yellow",
  "customer-health": "border-iq-teal/30 text-iq-teal",
};

const SCENARIO_TAB_ACTIVE: Record<ScenarioId, string> = {
  "supply-chain":
    "border-azure-blue/50 bg-azure-blue/[0.08] text-white shadow-[0_0_28px_rgba(0,120,212,0.18)]",
  workforce:
    "border-iq-yellow/50 bg-iq-yellow/[0.08] text-white shadow-[0_0_28px_rgba(255,204,0,0.15)]",
  "customer-health":
    "border-iq-teal/50 bg-iq-teal/[0.08] text-white shadow-[0_0_28px_rgba(0,194,168,0.18)]",
};

const TIER_BORDER: Record<TierId, string> = {
  baseline: "border-white/10",
  fabric: "border-azure-blue/30",
  foundry: "border-iq-yellow/30",
  work: "border-iq-teal/30",
};

const TIER_BENEFIT_TEXT: Record<TierId, string> = {
  baseline: "text-white/70",
  fabric: "text-azure-blue",
  foundry: "text-iq-yellow",
  work: "text-iq-teal",
};

export default function ExecSummaryPage({
  searchParams,
}: {
  searchParams: { scenario?: string };
}) {
  const activeId: ScenarioId =
    searchParams.scenario && isScenarioId(searchParams.scenario)
      ? searchParams.scenario
      : "supply-chain";
  const scenario = SCENARIOS.find((s) => s.id === activeId)!;
  const progression = SCENARIO_PROGRESSIONS[activeId];
  const Icon = ICONS[activeId];

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
                TIER_BORDER[tier.id],
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

      <section>
        <div className="mb-3">
          <div className="font-mono text-[10px] uppercase tracking-widest text-muted">
            See it for a scenario
          </div>
          <div className="text-base font-semibold tracking-tight">
            Pick a scenario — the same progression plays out in each one
          </div>
        </div>
        <div role="tablist" className="grid grid-cols-1 gap-2 md:grid-cols-3">
          {SCENARIOS.map((s) => {
            const TabIcon = ICONS[s.id];
            const isActive = s.id === activeId;
            return (
              <Link
                key={s.id}
                href={`/exec-summary?scenario=${s.id}`}
                role="tab"
                aria-selected={isActive}
                className={cn(
                  "group rounded-xl border px-4 py-3 transition",
                  isActive
                    ? SCENARIO_TAB_ACTIVE[s.id]
                    : "border-white/10 bg-navy-900/60 hover:border-white/20 hover:bg-white/[0.04]",
                )}
              >
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-md border border-white/10 bg-white/5">
                    <TabIcon className="h-4 w-4" strokeWidth={2} />
                  </div>
                  <div className="text-sm font-semibold">{s.label}</div>
                  {isActive && (
                    <span className="ml-auto font-mono text-[9px] uppercase tracking-widest text-white/70">
                      Showing
                    </span>
                  )}
                </div>
                <div className="mt-1.5 font-mono text-[10px] uppercase tracking-widest text-muted">
                  {s.domain}
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section
        className={cn(
          "rounded-2xl border bg-navy-900/70 p-5",
          SCENARIO_BORDER[activeId],
        )}
      >
        <div className="flex flex-wrap items-start gap-3">
          <div
            className={cn(
              "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border bg-white/5",
              SCENARIO_ICON_TINT[activeId],
            )}
          >
            <Icon className="h-5 w-5" strokeWidth={2} />
          </div>
          <div className="min-w-0 flex-1">
            <div className="font-mono text-[10px] uppercase tracking-widest text-muted">
              {scenario.domain}
            </div>
            <div className="text-base font-semibold tracking-tight">{scenario.label}</div>
            <p className="mt-1.5 text-[12.5px] italic leading-relaxed text-white/75">
              “{progression.question}”
            </p>
          </div>
        </div>

        <div className="mt-4 grid gap-3 md:grid-cols-4">
          {TIERS.map((tier) => {
            const step = progression.steps[tier.id];
            return (
              <div
                key={tier.id}
                className={cn(
                  "flex flex-col rounded-xl border bg-white/[0.02] p-3",
                  TIER_BORDER[tier.id],
                )}
              >
                <div className="font-mono text-[9px] uppercase tracking-widest text-muted">
                  T{tier.index} · {tier.shortLabel}
                </div>
                <div className="mt-1 text-[13px] font-semibold tracking-tight">{tier.label}</div>
                <p className="mt-2 text-[12px] leading-relaxed text-white/85">
                  {step.delivers}
                </p>
                <div className="mt-3 border-t border-white/10 pt-2">
                  <div className="font-mono text-[9px] uppercase tracking-widest text-muted">
                    Business benefit
                  </div>
                  <p
                    className={cn(
                      "mt-1 text-[11.5px] leading-snug",
                      TIER_BENEFIT_TEXT[tier.id],
                    )}
                  >
                    {step.benefit}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
