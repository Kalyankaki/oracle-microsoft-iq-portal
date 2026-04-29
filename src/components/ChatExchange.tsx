"use client";

import { motion } from "framer-motion";
import { Bot, User } from "lucide-react";
import type { Scenario } from "@/lib/data/scenarios";
import type { Tier } from "@/lib/data/tiers";
import type { TierResponse } from "@/lib/data/responses";
import ResponseBlocks from "./ResponseBlocks";
import WhatChangedCallout from "./WhatChangedCallout";

export default function ChatExchange({
  scenario,
  tier,
  response,
}: {
  scenario: Scenario;
  tier: Tier;
  response: TierResponse;
}) {
  return (
    <motion.div
      key={`${scenario.id}-${tier.id}`}
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="space-y-4"
    >
      {/* User bubble */}
      <div className="flex items-start gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-azure-blue to-iq-teal text-white">
          <User className="h-4 w-4" />
        </div>
        <div className="flex-1 rounded-2xl rounded-tl-sm border border-white/10 bg-white/[0.04] px-4 py-3">
          <div className="font-mono text-[10px] uppercase tracking-widest text-muted">
            Priya · 09:42
          </div>
          <p className="mt-1 leading-relaxed">{scenario.prompt}</p>
        </div>
      </div>

      {/* Assistant bubble */}
      <div className="flex items-start gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-oracle-red to-iq-yellow text-white">
          <Bot className="h-4 w-4" />
        </div>
        <div className="flex-1 rounded-2xl rounded-tl-sm border border-white/10 bg-navy-900/80 p-4">
          <div className="mb-2 flex items-center gap-2">
            <div className="font-mono text-[10px] uppercase tracking-widest text-muted">
              Copilot · grounded on {tier.label}
            </div>
            <div className="ml-auto rounded-full border border-white/10 bg-white/[0.04] px-2 py-0.5 font-mono text-[9px] uppercase tracking-widest text-muted">
              {scenario.domain}
            </div>
          </div>
          <p className="mb-3 text-[15px] font-medium leading-relaxed text-white">
            {response.summary}
          </p>
          <ResponseBlocks blocks={response.blocks} />
        </div>
      </div>

      <WhatChangedCallout tier={tier} />
    </motion.div>
  );
}
