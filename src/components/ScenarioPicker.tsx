"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { Boxes, UsersRound, HeartPulse } from "lucide-react";
import { SCENARIOS, type ScenarioId } from "@/lib/data/scenarios";
import { cn } from "@/lib/utils";

const ICONS: Record<ScenarioId, typeof Boxes> = {
  "supply-chain": Boxes,
  workforce: UsersRound,
  "customer-health": HeartPulse,
};

export default function ScenarioPicker({
  selected,
}: {
  selected: ScenarioId;
}) {
  const router = useRouter();
  const pathname = usePathname() ?? "";
  const sp = useSearchParams();

  function pick(id: ScenarioId) {
    const next = new URLSearchParams(sp?.toString() ?? "");
    next.set("scenario", id);
    router.push(`${pathname}?${next.toString()}`, { scroll: false });
  }

  return (
    <div>
      <div className="mb-3 flex items-end justify-between">
        <div>
          <div className="font-mono text-[10px] uppercase tracking-widest text-muted">
            Scenario
          </div>
          <div className="text-sm font-semibold tracking-tight">
            Pick a prompt — same prompt runs on every tier
          </div>
        </div>
        <div className="hidden text-[11px] text-muted md:block">
          Synthetic Oracle Fusion data · no live systems queried
        </div>
      </div>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
        {SCENARIOS.map((s) => {
          const Icon = ICONS[s.id];
          const active = s.id === selected;
          return (
            <button
              key={s.id}
              onClick={() => pick(s.id)}
              className={cn(
                "group rounded-xl border p-4 text-left transition",
                active
                  ? "border-azure-blue/50 bg-azure-blue/[0.08] shadow-[0_0_28px_rgba(0,120,212,0.18)]"
                  : "border-white/10 bg-navy-900/60 hover:border-white/20 hover:bg-white/[0.04]",
              )}
            >
              <div className="flex items-center gap-2">
                <div
                  className={cn(
                    "flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5",
                    active && "text-azure-blue",
                  )}
                >
                  <Icon className="h-4 w-4" strokeWidth={2} />
                </div>
                <div className="text-sm font-semibold">{s.label}</div>
                {active && (
                  <span className="ml-auto font-mono text-[9px] uppercase tracking-widest text-azure-blue">
                    Loaded
                  </span>
                )}
              </div>
              <div className="mt-2 font-mono text-[10px] uppercase tracking-widest text-muted">
                {s.domain}
              </div>
              <p className="mt-2 text-[12.5px] leading-relaxed text-white/85">{s.blurb}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
}
