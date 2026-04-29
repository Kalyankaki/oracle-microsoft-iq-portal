import { Suspense } from "react";
import CompareGrid from "@/components/CompareGrid";
import ScenarioPicker from "@/components/ScenarioPicker";
import { SCENARIO_BY_ID, isScenarioId, type ScenarioId } from "@/lib/data/scenarios";
import { GitCompare } from "lucide-react";

export default function ComparePage({
  searchParams,
}: {
  searchParams: { scenario?: string };
}) {
  const scenarioId: ScenarioId =
    searchParams.scenario && isScenarioId(searchParams.scenario)
      ? searchParams.scenario
      : "supply-chain";
  const scenario = SCENARIO_BY_ID[scenarioId];

  return (
    <div className="space-y-5">
      <div className="rounded-2xl border border-white/10 bg-navy-900/60 p-5">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-iq-yellow">
            <GitCompare className="h-5 w-5" />
          </div>
          <div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-muted">
              Compare all tiers
            </div>
            <div className="text-base font-semibold tracking-tight">
              The same prompt — Baseline → Fabric IQ → Foundry IQ → Work IQ
            </div>
          </div>
          <div className="ml-auto hidden font-mono text-[10px] uppercase tracking-widest text-muted md:block">
            {scenario.label}
          </div>
        </div>
      </div>
      <Suspense
        fallback={<div className="h-32 rounded-xl border border-white/10 bg-white/[0.02]" />}
      >
        <ScenarioPicker selected={scenarioId} />
      </Suspense>
      <CompareGrid scenario={scenario} />
    </div>
  );
}
