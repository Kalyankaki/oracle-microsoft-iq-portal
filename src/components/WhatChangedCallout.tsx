import { CheckCircle2, Sparkles } from "lucide-react";
import type { Tier } from "@/lib/data/tiers";
import { cn } from "@/lib/utils";

const ACCENT: Record<Tier["accent"], string> = {
  slate: "border-white/10 bg-white/[0.03]",
  azure: "border-azure-blue/40 bg-azure-blue/[0.08]",
  yellow: "border-iq-yellow/40 bg-iq-yellow/[0.06]",
  teal: "border-iq-teal/40 bg-iq-teal/[0.08]",
};

const ICON_TINT: Record<Tier["accent"], string> = {
  slate: "text-muted",
  azure: "text-azure-blue",
  yellow: "text-iq-yellow",
  teal: "text-iq-teal",
};

export default function WhatChangedCallout({ tier }: { tier: Tier }) {
  return (
    <div className={cn("flex gap-3 rounded-xl border p-4", ACCENT[tier.accent])}>
      <div
        className={cn(
          "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5",
          ICON_TINT[tier.accent],
        )}
      >
        <Sparkles className="h-4 w-4" />
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <div className="font-mono text-[10px] uppercase tracking-widest text-muted">
            What this tier added
          </div>
          <div className="rounded-full border border-white/10 bg-white/[0.04] px-2 py-0.5 font-mono text-[9px] uppercase tracking-widest text-white/85">
            {tier.label}
          </div>
        </div>
        <div className="mt-1 text-sm font-semibold">{tier.added.title}</div>
        <ul className="mt-2 space-y-1.5">
          {tier.added.bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-2 text-[12.5px] leading-relaxed text-white/85">
              <CheckCircle2 className={cn("mt-0.5 h-3.5 w-3.5 shrink-0", ICON_TINT[tier.accent])} />
              {b}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
