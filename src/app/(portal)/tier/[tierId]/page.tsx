import { notFound } from "next/navigation";
import { Suspense } from "react";
import ArchitectureStrip from "@/components/ArchitectureStrip";
import ChatExchange from "@/components/ChatExchange";
import EnablementStack from "@/components/EnablementStack";
import ScenarioPicker from "@/components/ScenarioPicker";
import { RESPONSES } from "@/lib/data/responses";
import { SCENARIO_BY_ID, isScenarioId, type ScenarioId } from "@/lib/data/scenarios";
import { TIERS, TIER_BY_ID, isTierId } from "@/lib/data/tiers";

export function generateStaticParams() {
  return TIERS.map((t) => ({ tierId: t.id }));
}

export default function TierPage({
  params,
  searchParams,
}: {
  params: { tierId: string };
  searchParams: { scenario?: string };
}) {
  if (!isTierId(params.tierId)) notFound();
  const tier = TIER_BY_ID[params.tierId];

  const scenarioId: ScenarioId =
    searchParams.scenario && isScenarioId(searchParams.scenario)
      ? searchParams.scenario
      : "supply-chain";
  const scenario = SCENARIO_BY_ID[scenarioId];
  const response = RESPONSES[scenarioId][tier.id];

  return (
    <div className="space-y-5">
      <ArchitectureStrip tier={tier} />
      <EnablementStack tier={tier} />
      <Suspense
        fallback={<div className="h-32 rounded-xl border border-white/10 bg-white/[0.02]" />}
      >
        <ScenarioPicker selected={scenarioId} />
      </Suspense>
      <ChatExchange scenario={scenario} tier={tier} response={response} />
    </div>
  );
}
