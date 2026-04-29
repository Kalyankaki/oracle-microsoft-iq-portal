"use client";

import { motion } from "framer-motion";
import type { Scenario } from "@/lib/data/scenarios";
import { TIERS, type IqLayer } from "@/lib/data/tiers";
import { RESPONSES } from "@/lib/data/responses";
import IQBadge from "./IQBadge";
import ResponseBlocks from "./ResponseBlocks";
import { cn } from "@/lib/utils";

const ALL_LAYERS: IqLayer[] = ["fabric", "foundry", "work"];

export default function CompareGrid({ scenario }: { scenario: Scenario }) {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      {TIERS.map((tier, idx) => {
        const r = RESPONSES[scenario.id][tier.id];
        return (
          <motion.div
            key={tier.id}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: idx * 0.04 }}
            className={cn(
              "relative flex flex-col rounded-2xl border bg-navy-900/70 p-4",
              tier.accent === "slate" && "border-white/10",
              tier.accent === "azure" && "border-azure-blue/30",
              tier.accent === "yellow" && "border-iq-yellow/30",
              tier.accent === "teal" && "border-iq-teal/30",
            )}
          >
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <div className="font-mono text-[9px] uppercase tracking-widest text-muted">
                T{tier.index}
              </div>
              <div className="text-sm font-semibold">{tier.label}</div>
              <div className="ml-auto flex flex-wrap gap-1">
                {ALL_LAYERS.map((l) => (
                  <IQBadge key={l} layer={l} on={tier.enabledLayers.includes(l)} size="sm" />
                ))}
              </div>
            </div>
            <p className="mb-3 text-[13px] font-medium leading-relaxed text-white">
              {r.summary}
            </p>
            <div className="-mx-1 max-h-[460px] overflow-y-auto px-1 pr-1.5">
              <ResponseBlocks blocks={r.blocks} compact />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
