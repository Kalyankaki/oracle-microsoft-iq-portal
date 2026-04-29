"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Hammer, CircleDashed, Sparkles } from "lucide-react";
import {
  ENABLEMENT_LAYERS,
  enabledLayerIdsForTier,
  type EnablementLayer,
} from "@/lib/data/enablement";
import type { Tier } from "@/lib/data/tiers";
import { cn } from "@/lib/utils";

const ACCENT_BORDER: Record<EnablementLayer["accent"], string> = {
  slate: "border-white/15",
  azure: "border-azure-blue/45",
  yellow: "border-iq-yellow/45",
  teal: "border-iq-teal/45",
};

const ACCENT_GLOW: Record<EnablementLayer["accent"], string> = {
  slate: "",
  azure: "shadow-[0_0_24px_rgba(0,120,212,0.18)]",
  yellow: "shadow-iq-glow",
  teal: "shadow-teal-glow",
};

const ACCENT_TEXT: Record<EnablementLayer["accent"], string> = {
  slate: "text-white/85",
  azure: "text-azure-blue",
  yellow: "text-iq-yellow",
  teal: "text-iq-teal",
};

export default function EnablementStack({ tier }: { tier: Tier }) {
  const enabledIds = enabledLayerIdsForTier(tier.id);
  const justEnabledId = enabledIds[enabledIds.length - 1];

  return (
    <div className="rounded-2xl border border-white/10 bg-navy-900/60 p-5">
      <div className="mb-4 flex items-end justify-between gap-4">
        <div>
          <div className="font-mono text-[10px] uppercase tracking-widest text-muted">
            Stack enablement
          </div>
          <div className="text-sm font-semibold tracking-tight">
            What it took to light up{" "}
            <span className="text-white">{tier.label}</span>
          </div>
        </div>
        <div className="hidden items-center gap-3 font-mono text-[10px] uppercase tracking-widest text-muted md:flex">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="h-3.5 w-3.5 text-iq-teal" /> Active
          </span>
          <span className="flex items-center gap-1.5">
            <CircleDashed className="h-3.5 w-3.5 text-muted" /> Not yet enabled
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4">
        {ENABLEMENT_LAYERS.map((layer) => {
          const active = enabledIds.includes(layer.id);
          const justEnabled = active && layer.id === justEnabledId;
          return (
            <motion.div
              key={layer.id}
              layout
              animate={{
                opacity: active ? 1 : 0.55,
              }}
              transition={{ duration: 0.3 }}
              className={cn(
                "relative flex flex-col gap-3 rounded-xl border bg-navy-850/80 p-4 transition-all",
                active ? ACCENT_BORDER[layer.accent] : "border-white/10",
                justEnabled ? ACCENT_GLOW[layer.accent] : "",
                !active && "grayscale",
              )}
            >
              <div className="flex items-start gap-2">
                <div
                  className={cn(
                    "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5",
                    active && ACCENT_TEXT[layer.accent],
                  )}
                >
                  <Hammer className="h-4 w-4" strokeWidth={2} />
                </div>
                <div className="flex-1 leading-tight">
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-semibold">{layer.label}</span>
                    {justEnabled && (
                      <span
                        className={cn(
                          "inline-flex items-center gap-1 rounded-full border px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-widest",
                          layer.accent === "slate" &&
                            "border-white/20 bg-white/[0.04] text-white/80",
                          layer.accent === "azure" &&
                            "border-azure-blue/40 bg-azure-blue/10 text-azure-blue",
                          layer.accent === "yellow" &&
                            "border-iq-yellow/40 bg-iq-yellow/10 text-iq-yellow",
                          layer.accent === "teal" &&
                            "border-iq-teal/40 bg-iq-teal/10 text-iq-teal",
                        )}
                      >
                        <Sparkles className="h-2.5 w-2.5" /> Just enabled
                      </span>
                    )}
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-muted">
                    {layer.subtitle}
                  </div>
                </div>
                <div
                  className={cn(
                    "ml-auto rounded-full border px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-widest",
                    active
                      ? "border-iq-teal/40 bg-iq-teal/10 text-iq-teal"
                      : "border-white/10 bg-white/[0.03] text-muted",
                  )}
                >
                  {active ? "Active" : "Pending"}
                </div>
              </div>

              <p className="text-[12px] leading-relaxed text-white/80">
                {layer.blurb}
              </p>

              <ul className="space-y-1.5">
                {layer.steps.map((step, i) => (
                  <li
                    key={i}
                    className="flex gap-2 text-[12px] leading-relaxed text-white/85"
                  >
                    {active ? (
                      <CheckCircle2
                        className={cn(
                          "mt-0.5 h-3.5 w-3.5 shrink-0",
                          ACCENT_TEXT[layer.accent],
                        )}
                      />
                    ) : (
                      <CircleDashed className="mt-0.5 h-3.5 w-3.5 shrink-0 text-muted" />
                    )}
                    <span>{step}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex flex-wrap gap-1 pt-1">
                {layer.services.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-widest text-muted"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
