import type { TierId } from "./tiers";

export type EnablementLayerId = "foundation" | "fabric" | "foundry" | "work";

export interface EnablementLayer {
  id: EnablementLayerId;
  label: string;
  subtitle: string;
  blurb: string;
  steps: string[];
  services: string[];
  accent: "slate" | "azure" | "yellow" | "teal";
}

export const ENABLEMENT_LAYERS: EnablementLayer[] = [
  {
    id: "foundation",
    label: "Foundation",
    subtitle: "Baseline plumbing",
    blurb:
      "Mirror Oracle Fusion into Fabric, route Copilot through it, govern with Purview.",
    steps: [
      "Configured Oracle Fusion ERP / HCM / SCM / CX mirroring into Microsoft Fabric / OneLake via near-real-time CDC.",
      "Connected Microsoft Copilot to the OneLake mirror as a grounded data source for M365.",
      "Catalogued the mirrored datasets in Microsoft Purview with sensitivity labels and access policies.",
    ],
    services: ["Oracle Fusion", "Fabric Mirroring", "OneLake", "Copilot", "Purview"],
    accent: "slate",
  },
  {
    id: "fabric",
    label: "Fabric IQ",
    subtitle: "Semantic intelligence",
    blurb:
      "Teach Fabric what supplier risk, requisition health, and account health mean in our org.",
    steps: [
      "Built a Fabric semantic model over the Oracle mirror with measures, dimensions, and joins across SCM, Procurement, HCM, and CX.",
      "Certified business measures — supplier risk score, FY-close risk, account health — as reusable assets reusable by Copilot and Foundry.",
      "Published row-level security, sensitivity, and lineage to Purview so every aggregate is traceable to the source row.",
    ],
    services: [
      "Fabric Semantic Model",
      "OneLake shortcuts",
      "Direct Lake mode",
      "Purview lineage",
    ],
    accent: "azure",
  },
  {
    id: "foundry",
    label: "Foundry IQ",
    subtitle: "Agent reasoning",
    blurb:
      "Stand up the Azure AI Foundry agent and ground it on the Fabric semantic model.",
    steps: [
      "Created the agent in Azure AI Foundry with the Fabric semantic model registered as a grounded knowledge source.",
      "Configured multi-step retrieval, ranked recommendations, and projected-impact reasoning with mandatory citations.",
      "Registered the agent and its tools in Purview for end-to-end lineage, prompt logging, and DLP enforcement.",
    ],
    services: [
      "Azure AI Foundry",
      "Frontier reasoning model",
      "Tool calling",
      "Purview DLP",
    ],
    accent: "yellow",
  },
  {
    id: "work",
    label: "Work IQ",
    subtitle: "Personalized via Microsoft Graph",
    blurb:
      "Give the agent scoped access to the user's work context — calendar, meetings, collaborators.",
    steps: [
      "Granted the agent scoped delegated access to Microsoft Graph: calendar, recent meetings, mail metadata, and Teams threads.",
      "Wired user identity, role, org rollup, and key collaborators into the agent's grounding so 'my team' and 'my book of business' resolve correctly.",
      "Authored draft / action templates — Outlook email, Teams message, meeting agenda — with Purview-governed redaction at the seams.",
    ],
    services: ["Microsoft Graph", "Entra ID", "Outlook · Teams · Calendar", "Purview"],
    accent: "teal",
  },
];

const STACK_BY_TIER: Record<TierId, EnablementLayerId[]> = {
  baseline: ["foundation"],
  fabric: ["foundation", "fabric"],
  foundry: ["foundation", "fabric", "foundry"],
  work: ["foundation", "fabric", "foundry", "work"],
};

export function enabledLayerIdsForTier(tierId: TierId): EnablementLayerId[] {
  return STACK_BY_TIER[tierId];
}
