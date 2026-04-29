import type { IqLayer } from "./tiers";

export type StageId = "copilot" | "foundry" | "fabric" | "oracle";

export interface ArchitectureStage {
  id: StageId;
  label: string;
  sublabel: string;
  description: string;
  iqLayer?: IqLayer;
}

export const STAGES: ArchitectureStage[] = [
  {
    id: "copilot",
    label: "Microsoft Copilot",
    sublabel: "Front door",
    description: "Excel, Outlook, Teams, M365 Chat",
    iqLayer: "work",
  },
  {
    id: "foundry",
    label: "Azure AI Foundry",
    sublabel: "Agent runtime",
    description: "Reasoning, retrieval, grounding",
    iqLayer: "foundry",
  },
  {
    id: "fabric",
    label: "Microsoft Fabric / OneLake",
    sublabel: "Mirrored data plane",
    description: "Semantic model over Oracle Fusion",
    iqLayer: "fabric",
  },
  {
    id: "oracle",
    label: "Oracle Fusion",
    sublabel: "System of record",
    description: "ERP · HCM · SCM · CX",
  },
];

export const PURVIEW = {
  id: "purview" as const,
  label: "Microsoft Purview",
  sublabel: "Governance, lineage, DLP across all stages",
};
