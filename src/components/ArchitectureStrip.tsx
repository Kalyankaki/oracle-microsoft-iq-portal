"use client";

import { motion } from "framer-motion";
import { ArrowRight, BotMessageSquare, Database, Network, ShieldCheck, Sparkles } from "lucide-react";
import { STAGES, PURVIEW, type StageId } from "@/lib/data/architecture";
import type { IqLayer, Tier } from "@/lib/data/tiers";
import IQBadge from "./IQBadge";
import { cn } from "@/lib/utils";

const ICONS: Record<StageId, typeof Database> = {
  copilot: Sparkles,
  foundry: BotMessageSquare,
  fabric: Network,
  oracle: Database,
};

const STAGE_HIGHLIGHT: Record<IqLayer, string> = {
  fabric: "ring-azure-blue/50 shadow-[0_0_28px_rgba(0,120,212,0.18)]",
  foundry: "ring-iq-yellow/50 shadow-iq-glow",
  work: "ring-iq-teal/50 shadow-teal-glow",
};

export default function ArchitectureStrip({ tier }: { tier: Tier }) {
  const enabled = (l: IqLayer) => tier.enabledLayers.includes(l);

  return (
    <div className="rounded-2xl border border-white/10 bg-navy-900/60 p-5">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <div className="font-mono text-[10px] uppercase tracking-widest text-muted">
            Reference architecture
          </div>
          <div className="text-sm font-semibold tracking-tight">
            Microsoft Copilot → Foundry → Fabric → Oracle Fusion
          </div>
        </div>
        <motion.div
          key={tier.id}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="hidden font-mono text-[10px] uppercase tracking-widest text-muted md:block"
        >
          Active tier · {tier.label}
        </motion.div>
      </div>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr]">
        {STAGES.map((stage, i) => {
          const Icon = ICONS[stage.id];
          const layer = stage.iqLayer;
          const on = layer ? enabled(layer) : false;
          return (
            <div key={stage.id} className="contents">
              <motion.div
                layout
                animate={{
                  borderColor: on ? "rgba(255,255,255,0.18)" : "rgba(255,255,255,0.10)",
                }}
                transition={{ duration: 0.3 }}
                className={cn(
                  "relative flex flex-col gap-2 rounded-xl border bg-navy-850/80 p-4 ring-1 ring-transparent transition-all",
                  on && layer ? STAGE_HIGHLIGHT[layer] : "",
                )}
              >
                {layer ? (
                  <div className="absolute -top-3 right-3">
                    <IQBadge layer={layer} on={on} size="sm" />
                  </div>
                ) : null}
                <div className="flex items-center gap-2">
                  <div
                    className={cn(
                      "flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5",
                      on && layer === "fabric" && "text-azure-blue",
                      on && layer === "foundry" && "text-iq-yellow",
                      on && layer === "work" && "text-iq-teal",
                    )}
                  >
                    <Icon className="h-4 w-4" strokeWidth={2} />
                  </div>
                  <div className="leading-tight">
                    <div className="text-sm font-semibold">{stage.label}</div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-muted">
                      {stage.sublabel}
                    </div>
                  </div>
                </div>
                <p className="text-[11px] text-muted">{stage.description}</p>
              </motion.div>

              {i < STAGES.length - 1 && (
                <div className="flex items-center justify-center md:py-0">
                  <ArrowRight className="h-4 w-4 text-muted" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-4 flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-md border border-white/10 bg-white/5">
          <ShieldCheck className="h-4 w-4 text-iq-purple" />
        </div>
        <div className="flex-1">
          <div className="text-xs font-semibold">{PURVIEW.label}</div>
          <div className="text-[11px] text-muted">{PURVIEW.sublabel}</div>
        </div>
        <span className="hidden font-mono text-[10px] uppercase tracking-widest text-iq-purple md:inline">
          Always on
        </span>
      </div>
    </div>
  );
}
