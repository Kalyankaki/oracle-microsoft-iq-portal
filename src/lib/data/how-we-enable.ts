export interface IntegrationPattern {
  id: string;
  number: string;
  title: string;
  oneLiner: string;
  description: string;
  components: string[];
  whenToUse: string;
}

export interface Accelerator {
  id: string;
  title: string;
  oneLiner: string;
  bridges: { from: string; to: string };
  whatItDoes: string;
  whyItMatters: string;
}

export const INTEGRATION_PATTERNS: IntegrationPattern[] = [
  {
    id: "data-into-onelake",
    number: "P1",
    title: "Bring Oracle data into OneLake",
    oneLiner: "Mirror Oracle Fusion into Microsoft Fabric so Copilot can reason over it.",
    description:
      "Oracle Fusion (SCM, HCM, CX, Finance) is mirrored into Microsoft Fabric / OneLake. Fabric IQ builds the semantic model; Foundry IQ reasons over it; Copilot delivers the answer in the worker's flow. No live API calls into Oracle on the read path.",
    components: [
      "Oracle Fusion",
      "Fabric Mirroring",
      "OneLake",
      "Fabric IQ (semantic)",
      "Foundry IQ (agent)",
      "Microsoft Copilot",
    ],
    whenToUse:
      "Default starting point for analytical, cross-domain questions where read latency tolerates near-real-time mirroring.",
  },
  {
    id: "agents-foundry-a2a",
    number: "P2",
    title: "Agents in Foundry, A2A through Microsoft 365",
    oneLiner: "Build the agent in Foundry, manage it in Agents 365, present it in Copilot.",
    description:
      "Custom agents built in Azure AI Foundry are managed and governed through Microsoft 365 Agents (A365), then presented inside Microsoft Copilot. Multiple agents collaborate via Agent-to-Agent (A2A) protocols and are powered by Fabric IQ for data, Foundry IQ for reasoning and retrieval, and Work IQ for personalization through Microsoft Graph.",
    components: [
      "Azure AI Foundry",
      "Microsoft 365 Agents (A365)",
      "Microsoft Copilot",
      "A2A protocol",
      "Fabric IQ",
      "Foundry IQ",
      "Work IQ",
    ],
    whenToUse:
      "When you need a custom, specialized agent (e.g. supplier-risk agent, churn-save agent) that participates in multi-agent flows and lives where the worker already is.",
  },
  {
    id: "oracle-agents-mcp",
    number: "P3",
    title: "Oracle-native agents connected through MCP",
    oneLiner: "Let Oracle agents participate in Copilot workflows via MCP servers.",
    description:
      "Agents built natively inside Oracle (e.g. Fusion-resident copilots) expose their tools and context through Model Context Protocol (MCP) servers. Microsoft Copilot and Foundry agents can invoke them, hand off work, and incorporate their results — keeping the system of record authoritative while extending reach into the Microsoft worker surface.",
    components: [
      "Oracle Fusion Agents",
      "MCP server",
      "Azure AI Foundry",
      "Microsoft Copilot",
    ],
    whenToUse:
      "When the action must execute inside Oracle (write-backs, transactions, policy-bound workflows) and you want Copilot to orchestrate it.",
  },
];

export const ACCELERATORS: Accelerator[] = [
  {
    id: "ontology-bridge",
    title: "Ontology Bridge",
    oneLiner: "Map Oracle's business model into Fabric's semantic layer.",
    bridges: { from: "Oracle Fusion semantic", to: "Microsoft Fabric semantic model" },
    whatItDoes:
      "Translates Oracle's data dictionary — supplier risk, requisition health, account health, spend categories — into the Fabric semantic model, with measure definitions, hierarchies, and joins preserved. Copilot answers in the business's own language without hand-written SQL.",
    whyItMatters:
      "Cuts months of semantic-modeling work out of every deployment. Without it, every customer rebuilds the same supplier-risk view from scratch.",
  },
  {
    id: "governance-bridge",
    title: "Governance Bridge",
    oneLiner: "End-to-end lineage and policy from Oracle Data Safe to Microsoft Purview.",
    bridges: { from: "Oracle Data Safe", to: "Microsoft Purview" },
    whatItDoes:
      "Flows classifications, masking rules, access policies, and lineage from Oracle Data Safe through the mirror into Microsoft Purview. Sensitivity labels travel with the data; Purview enforces them at the agent and Copilot surface; auditors get a single lineage view from Oracle source to Copilot answer.",
    whyItMatters:
      "Makes the architecture defensible. Without governance flowing both ways, security teams block the rollout — or worse, the rollout ships without controls.",
  },
];
