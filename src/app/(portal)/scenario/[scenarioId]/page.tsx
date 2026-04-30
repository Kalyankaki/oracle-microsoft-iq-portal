import { notFound } from "next/navigation";
import { Boxes, HeartPulse, UsersRound } from "lucide-react";
import IQBadge from "@/components/IQBadge";
import ResponseBlocks from "@/components/ResponseBlocks";
import { RESPONSES } from "@/lib/data/responses";
import {
  SCENARIOS,
  SCENARIO_BY_ID,
  isScenarioId,
  type ScenarioId,
} from "@/lib/data/scenarios";
import { TIERS, type IqLayer } from "@/lib/data/tiers";
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

const ALL_LAYERS: IqLayer[] = ["fabric", "foundry", "work"];

export function generateStaticParams() {
  return SCENARIOS.map((s) => ({ scenarioId: s.id }));
}

export default function ScenarioPage({
  params,
}: {
  params: { scenarioId: string };
}) {
  if (!isScenarioId(params.scenarioId)) notFound();
  const scenario = SCENARIO_BY_ID[params.scenarioId];
  const Icon = ICONS[scenario.id];

  return (
    <div className="space-y-5">
      <section
        className={cn(
          "rounded-2xl border bg-navy-900/70 p-5",
          SCENARIO_BORDER[scenario.id],
        )}
      >
        <div className="flex flex-wrap items-start gap-3">
          <div
            className={cn(
              "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border bg-white/5",
              SCENARIO_ICON_TINT[scenario.id],
            )}
          >
            <Icon className="h-5 w-5" strokeWidth={2} />
          </div>
          <div className="min-w-0 flex-1">
            <div className="font-mono text-[10px] uppercase tracking-widest text-muted">
              {scenario.domain}
            </div>
            <div className="text-base font-semibold tracking-tight">{scenario.label}</div>
            <p className="mt-2 text-[13.5px] italic leading-relaxed text-white/85">
              “{scenario.prompt}”
            </p>
          </div>
        </div>
        <p className="mt-3 max-w-3xl text-[12.5px] leading-relaxed text-white/75">
          One question, four answers — scroll down to see how Copilot improves as each Microsoft
          IQ layer is added on top of the same Oracle Fusion data.
        </p>
      </section>

      <div className="space-y-4">
        {TIERS.map((tier) => {
          const r = RESPONSES[scenario.id][tier.id];
          return (
            <section
              key={tier.id}
              className={cn(
                "rounded-2xl border bg-navy-900/70 p-5",
                tier.accent === "slate" && "border-white/10",
                tier.accent === "azure" && "border-azure-blue/30",
                tier.accent === "yellow" && "border-iq-yellow/30",
                tier.accent === "teal" && "border-iq-teal/30",
              )}
            >
              <div className="mb-4 flex flex-wrap items-center gap-2">
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted">
                  T{tier.index}
                </div>
                <div className="text-sm font-semibold tracking-tight">{tier.label}</div>
                <div className="hidden text-[11px] text-muted md:block">· {tier.tagline}</div>
                <div className="ml-auto flex flex-wrap gap-1">
                  {ALL_LAYERS.map((layer) => (
                    <IQBadge
                      key={layer}
                      layer={layer}
                      on={tier.enabledLayers.includes(layer)}
                      size="sm"
                    />
                  ))}
                </div>
              </div>
              <p className="mb-4 text-[14px] font-medium leading-relaxed text-white">
                {r.summary}
              </p>
              <ResponseBlocks blocks={r.blocks} />
            </section>
          );
        })}
      </div>
    </div>
  );
}
