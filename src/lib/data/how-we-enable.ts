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

export type MaturityStatus = "ga" | "in-flight" | "planned";

export interface MaturityRow {
  id: string;
  capability: string;
  status: MaturityStatus;
  ships: string;
  notes: string;
}

export const MATURITY_ROWS: MaturityRow[] = [
  {
    id: "p1",
    capability: "P1 · Oracle → OneLake mirror (Fabric Mirroring + GoldenGate)",
    status: "ga",
    ships: "Available now",
    notes: "Generally available with Oracle Database@Azure; native Fabric integration shipped at Ignite 2025.",
  },
  {
    id: "ontology",
    capability: "Ontology Bridge accelerator",
    status: "in-flight",
    ships: "Phase 1 · next 2 quarters",
    notes: "First three domains (SCM, HCM, CX) targeted for Phase 1; pilot underway with reference customers.",
  },
  {
    id: "p2",
    capability: "P2 · Foundry agents in Copilot via Agents 365 (A365) + A2A",
    status: "in-flight",
    ships: "Phase 2 · H2",
    notes: "A365 control plane in preview from Ignite 2025; A2A protocol stable, multi-agent flows in pilot.",
  },
  {
    id: "governance",
    capability: "Governance Bridge (Oracle Data Safe ↔ Microsoft Purview)",
    status: "in-flight",
    ships: "Phase 2 · H2",
    notes: "Sensitivity-label flow and lineage interop in private preview. Joint reference architecture targeted for GA.",
  },
  {
    id: "p3",
    capability: "P3 · Oracle agents via MCP servers",
    status: "planned",
    ships: "Phase 3 · Year 2",
    notes: "Reference MCP server templates for Fusion Apps planned. Early-access design partners being onboarded.",
  },
  {
    id: "blueprints",
    capability: "Industry blueprints (Banking · Mfg · Retail · Public Sector)",
    status: "planned",
    ships: "Phase 3 · Year 2",
    notes: "Vertical templates packaged with SI partners (Accenture, Deloitte, EY, Capgemini).",
  },
];

export interface CrossCuttingCapability {
  id: string;
  title: string;
  oneLiner: string;
  oracle: string;
  microsoft: string;
}

export const CROSS_CUTTING: CrossCuttingCapability[] = [
  {
    id: "identity",
    title: "Identity & access",
    oneLiner: "One identity, least-privilege scope, end-to-end.",
    oracle: "Oracle IAM · Fusion roles",
    microsoft: "Microsoft Entra ID · Conditional Access · M365 Graph permissions",
  },
  {
    id: "observability",
    title: "Observability & telemetry",
    oneLiner: "See what every agent did, why, and on whose data.",
    oracle: "Oracle audit trails · Database activity",
    microsoft: "Foundry traces · Application Insights · Purview audit",
  },
  {
    id: "quality",
    title: "Quality & evals",
    oneLiner: "Production agents need golden datasets and regression suites.",
    oracle: "Oracle reference datasets · Fusion test fixtures",
    microsoft: "Foundry evals · prompt regression · A/B traffic splits",
  },
  {
    id: "cost",
    title: "Cost & FinOps",
    oneLiner: "Predict and control agent spend before it surprises Finance.",
    oracle: "OCI cost analytics · Database@Azure metering",
    microsoft: "Azure Cost Management · Foundry token billing · Copilot per-seat",
  },
  {
    id: "reliability",
    title: "Reliability & SLA",
    oneLiner: "Joint SLA with single point of accountability per workflow.",
    oracle: "Oracle Cloud SLAs · GoldenGate replication SLAs",
    microsoft: "Azure SLA · Copilot availability commitments · Foundry uptime",
  },
  {
    id: "standards",
    title: "Open standards",
    oneLiner: "Built on open protocols — not a proprietary lock-in.",
    oracle: "OData · OpenAPI · OAuth 2.0",
    microsoft: "MCP · A2A · OpenLineage · OAuth 2.0",
  },
];

export interface IndustryBlueprint {
  id: string;
  industry: string;
  flagship: string;
  oracleAnchor: string;
  microsoftSurface: string;
  signature: string;
}

export const INDUSTRY_BLUEPRINTS: IndustryBlueprint[] = [
  {
    id: "banking",
    industry: "Banking & Capital Markets",
    flagship: "Loan-portfolio risk agent",
    oracleAnchor: "Oracle Financial Services Analytical Apps · Fusion ERP",
    microsoftSurface: "Copilot in Teams for relationship managers; Outlook drafts to risk committee",
    signature:
      "Concentration, covenant breaches, and refinancing risk surfaced with grounded citations to OFSAA — actions queued for the Friday risk-committee meeting.",
  },
  {
    id: "manufacturing",
    industry: "Manufacturing & Supply Chain",
    flagship: "Plant performance + supplier-risk agent",
    oracleAnchor: "Oracle Fusion SCM · Procurement · IoT Cloud",
    microsoftSurface: "Copilot on Teams Walls in plant ops rooms; Outlook to supplier owners",
    signature:
      "OEE drift, yield drops, and supplier delivery risk merged into one prioritized worklist, with corrective actions pre-drafted for the line lead.",
  },
  {
    id: "retail",
    industry: "Retail & Consumer",
    flagship: "Inventory + customer-health agent",
    oracleAnchor: "Oracle Retail Suite · Fusion CX · Loyalty",
    microsoftSurface: "Copilot for store managers; Teams escalations to district leadership",
    signature:
      "Stock-out risk by SKU + segment churn signals stitched together; replenishment requests and CRM plays drafted in one place, ready to ship.",
  },
  {
    id: "public-sector",
    industry: "Public Sector",
    flagship: "Citizen-service + grants agent",
    oracleAnchor: "Oracle Public Sector Cloud · Fusion HCM",
    microsoftSurface: "Copilot for caseworkers; M365 Graph for case routing and SLA",
    signature:
      "Case priority, SLA risk, and grant-eligibility logic computed end-to-end. Outputs respect Oracle Data Safe classifications enforced through Purview.",
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
