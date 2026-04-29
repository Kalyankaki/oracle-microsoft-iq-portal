"use client";

import { motion } from "framer-motion";
import type { IqLayer } from "@/lib/data/tiers";
import { cn } from "@/lib/utils";

const LABEL: Record<IqLayer, string> = {
  fabric: "Fabric IQ",
  foundry: "Foundry IQ",
  work: "Work IQ",
};

const ON_STYLES: Record<IqLayer, string> = {
  fabric: "border-azure-blue/60 bg-azure-blue/15 text-white shadow-[0_0_24px_rgba(0,120,212,0.35)]",
  foundry: "border-iq-yellow/60 bg-iq-yellow/15 text-white shadow-iq-glow",
  work: "border-iq-teal/60 bg-iq-teal/15 text-white shadow-teal-glow",
};

const ON_DOT: Record<IqLayer, string> = {
  fabric: "bg-azure-blue",
  foundry: "bg-iq-yellow",
  work: "bg-iq-teal",
};

export default function IQBadge({
  layer,
  on,
  size = "md",
}: {
  layer: IqLayer;
  on: boolean;
  size?: "sm" | "md";
}) {
  return (
    <motion.div
      layout
      animate={{ opacity: on ? 1 : 0.45 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border font-mono uppercase tracking-widest",
        size === "sm" ? "px-2 py-0.5 text-[9px]" : "px-2.5 py-1 text-[10px]",
        on ? ON_STYLES[layer] : "border-white/10 bg-white/[0.03] text-muted grayscale",
      )}
    >
      <span
        className={cn(
          "h-1.5 w-1.5 rounded-full",
          on ? `${ON_DOT[layer]} animate-pulse-soft` : "bg-white/20",
        )}
      />
      {LABEL[layer]}
      <span className={cn("opacity-70", on ? "text-white" : "text-muted")}>
        · {on ? "ON" : "OFF"}
      </span>
    </motion.div>
  );
}
