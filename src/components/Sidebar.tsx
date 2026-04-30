"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Boxes, ClipboardList, HeartPulse, Sparkles, UsersRound } from "lucide-react";
import { SCENARIOS, type ScenarioId } from "@/lib/data/scenarios";
import { cn } from "@/lib/utils";

const ICONS: Record<ScenarioId, typeof Boxes> = {
  "supply-chain": Boxes,
  workforce: UsersRound,
  "customer-health": HeartPulse,
};

const SCENARIO_ACCENT: Record<ScenarioId, string> = {
  "supply-chain": "before:bg-azure-blue",
  workforce: "before:bg-iq-yellow",
  "customer-health": "before:bg-iq-teal",
};

const SCENARIO_ICON_TINT: Record<ScenarioId, string> = {
  "supply-chain": "text-azure-blue",
  workforce: "text-iq-yellow",
  "customer-health": "text-iq-teal",
};

export default function Sidebar() {
  const pathname = usePathname() ?? "";
  const activeScenario = pathname.startsWith("/scenario/") ? pathname.split("/")[2] : null;
  const isExecSummary = pathname.startsWith("/exec-summary");

  return (
    <aside className="flex w-72 shrink-0 flex-col border-r border-white/10 bg-navy-900/60">
      <div className="px-5 pb-2 pt-5">
        <div className="font-mono text-[10px] uppercase tracking-widest text-muted">
          Start here
        </div>
      </div>

      <div className="px-3">
        <Link
          href="/exec-summary"
          className={cn(
            "group flex items-center gap-2 rounded-lg border px-3 py-3 text-sm font-semibold transition",
            isExecSummary
              ? "border-iq-teal/40 bg-iq-teal/[0.08]"
              : "border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]",
          )}
        >
          <ClipboardList className="h-4 w-4 text-iq-teal" />
          Exec Summary
          <span className="ml-auto font-mono text-[9px] uppercase tracking-widest text-muted">
            Overview
          </span>
        </Link>
        <div className="mt-1 px-3 text-[11px] text-muted">
          The narrative across all three scenarios.
        </div>
      </div>

      <div className="mx-3 my-3 h-px bg-white/10" />

      <div className="px-5 pb-3">
        <div className="font-mono text-[10px] uppercase tracking-widest text-muted">
          Scenarios
        </div>
        <div className="mt-1 flex items-center gap-2 text-sm font-semibold">
          <Sparkles className="h-4 w-4 text-muted" />
          One prompt, four answers
        </div>
      </div>

      <nav className="flex flex-col gap-1.5 px-3">
        {SCENARIOS.map((s) => {
          const Icon = ICONS[s.id];
          const isActive = activeScenario === s.id;
          return (
            <Link
              key={s.id}
              href={`/scenario/${s.id}`}
              className={cn(
                "group relative rounded-lg border border-transparent px-3 py-3 transition",
                "before:absolute before:left-0 before:top-3 before:h-[calc(100%-1.5rem)] before:w-[3px] before:rounded-r-full before:opacity-0 before:transition-opacity",
                SCENARIO_ACCENT[s.id],
                isActive
                  ? "border-white/10 bg-white/5 before:opacity-100"
                  : "hover:border-white/10 hover:bg-white/[0.03]",
              )}
            >
              <div className="flex items-center gap-2">
                <Icon className={cn("h-4 w-4", SCENARIO_ICON_TINT[s.id])} strokeWidth={2} />
                <div className="text-sm font-semibold tracking-tight">{s.label}</div>
              </div>
              <div className="mt-1 font-mono text-[9px] uppercase tracking-widest text-muted">
                {s.domain}
              </div>
              <div className="mt-1.5 text-[11px] leading-snug text-white/70">{s.blurb}</div>
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto border-t border-white/10 p-5">
        <div className="font-mono text-[10px] uppercase tracking-widest text-muted">
          Reference architecture
        </div>
        <p className="mt-2 text-[11px] leading-relaxed text-muted">
          Copilot fronts the worker. Oracle Fusion is mirrored into Fabric. The agent runs in
          Foundry. Purview governs every stage.
        </p>
      </div>
    </aside>
  );
}
