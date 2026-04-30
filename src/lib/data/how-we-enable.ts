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
      "Custom agents built in Azure AI Foundry are managed and governed through Microsoft Agent 365, then presented inside Microsoft Copilot. Multiple agents collaborate via Agent-to-Agent (A2A) protocols and are powered by Fabric IQ for data, Foundry IQ for reasoning and retrieval, and Work IQ for personalization through Microsoft Graph.",
    components: [
      "Azure AI Foundry",
      "Microsoft Agent 365",
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

export interface OracleDataLocation {
  id: string;
  name: string;
  description: string;
  ingestPattern: string;
  unlockedFor: string;
  isFlagship?: boolean;
}

export const ORACLE_DATA_LOCATIONS: OracleDataLocation[] = [
  {
    id: "fusion-saas",
    name: "Oracle Fusion (SaaS)",
    description:
      "Fusion ERP, HCM, SCM, CX — the system of record for most of the Fortune 2000.",
    ingestPattern: "Fabric Mirroring · GoldenGate Free",
    unlockedFor: "Out-of-the-box for Fusion modules; the demo today.",
    isFlagship: true,
  },
  {
    id: "database-azure",
    name: "Oracle Database@Azure",
    description:
      "Oracle databases running natively in Azure data centres — Exadata, Autonomous, Database Service.",
    ingestPattern: "Native Fabric Mirroring (announced Ignite 2025)",
    unlockedFor: "Lowest-latency path; preserves Oracle-native features.",
  },
  {
    id: "oci",
    name: "Oracle on OCI / Exadata Cloud",
    description:
      "Oracle databases on Oracle Cloud Infrastructure — Exadata Cloud, Autonomous Database, Database Cloud Service.",
    ingestPattern: "Fabric Shortcuts · GoldenGate · OCI Object Storage",
    unlockedFor: "Multicloud customers without lift-and-shift.",
  },
  {
    id: "on-prem",
    name: "Oracle on-premises (Exadata, RAC)",
    description:
      "Oracle databases in customer data centres — Exadata, RAC, Database Appliances. Heavily-regulated industries.",
    ingestPattern: "GoldenGate replication · Fabric Data Factory · OneLake hybrid",
    unlockedFor: "Banks, public sector, sovereign workloads, hybrid estates.",
  },
];

export interface FlywheelStep {
  step: string;
  workerAction: string;
  microsoft: string[];
  oracle: string[];
}

export const CONSUMPTION_FLYWHEEL: FlywheelStep[] = [
  {
    step: "1",
    workerAction: "Worker asks question in Copilot or Fusion",
    microsoft: ["Copilot for M365 (per-seat ARR)"],
    oracle: ["Oracle Fusion (per-user subscription)"],
  },
  {
    step: "2",
    workerAction: "Foundry agent reasons, retrieves, plans",
    microsoft: ["Azure AI Foundry (token consumption)", "Microsoft Agent 365 (control plane)"],
    oracle: ["Fusion AI Agents (when invoked)"],
  },
  {
    step: "3",
    workerAction: "Reads from Fabric semantic model",
    microsoft: ["Microsoft Fabric capacity (CU)", "OneLake storage"],
    oracle: ["Oracle GoldenGate (replication metering)"],
  },
  {
    step: "4",
    workerAction: "Source data lives in Oracle (Fusion / DB@Azure / OCI / on-prem)",
    microsoft: ["Database@Azure passthrough"],
    oracle: ["Database@Azure consumption", "OCI compute & storage", "Fusion Apps (subscription)"],
  },
  {
    step: "5",
    workerAction: "Governance, lineage, and audit flow back",
    microsoft: ["Microsoft Purview"],
    oracle: ["Oracle Data Safe", "Oracle Audit Vault"],
  },
];

export interface MigrationPattern {
  id: string;
  from: string;
  to: string;
  whatStays: string;
  whatChanges: string;
  effort: "low" | "medium" | "high";
}

export const MIGRATION_PATTERNS: MigrationPattern[] = [
  {
    id: "salesforce",
    from: "Salesforce + Agentforce",
    to: "Alliance stack with Oracle CX as system of record",
    whatStays:
      "Sales-rep UI, CRM record patterns, sales-process; CRM data mirrored into OneLake.",
    whatChanges:
      "Agent runtime moves to Foundry; reasoning grounds in Oracle source; agent surface in Copilot.",
    effort: "medium",
  },
  {
    id: "servicenow",
    from: "ServiceNow + Now Assist",
    to: "Coexistence — ServiceNow workflows + Alliance agents via MCP",
    whatStays:
      "ITSM workflows, case routing, ServiceNow as workflow engine — kept intact.",
    whatChanges:
      "ServiceNow becomes a tool participant via MCP; agentic decisions grounded in Oracle data.",
    effort: "low",
  },
  {
    id: "sap",
    from: "SAP + Joule",
    to: "Coexist with SAP; new agentic workloads on Alliance stack",
    whatStays:
      "SAP ERP for existing modules; Joule for SAP-native flows.",
    whatChanges:
      "New cross-domain agents on Alliance stack; SAP data via Fabric where licensed; Oracle modules go alliance-first.",
    effort: "high",
  },
];

export interface DevExStep {
  step: number;
  label: string;
  description: string;
  tooling: string[];
}

export const DEVEX_JOURNEY: DevExStep[] = [
  {
    step: 1,
    label: "Choose runtime",
    description:
      "Pick P1, P2, or P3 — based on whether the agent is read-only, multi-agent, or writes back to Oracle.",
    tooling: ["Reference architecture", "Decision tree", "Bicep / Terraform templates"],
  },
  {
    step: 2,
    label: "Build agent in Foundry",
    description:
      "Author with Foundry SDK; wire to Fabric semantic model; add MCP tools for Oracle write-backs.",
    tooling: ["Foundry SDK (Python · TypeScript)", "MCP server templates", "Sample repos"],
  },
  {
    step: 3,
    label: "Govern & evaluate",
    description:
      "Run prompts and golden datasets through Foundry evals; sensitivity labels via Purview; policies via Data Safe.",
    tooling: ["Foundry evals", "Purview labels", "CI/CD pipelines"],
  },
  {
    step: 4,
    label: "Publish & monitor",
    description:
      "Publish to Microsoft Agent 365; surface in Copilot; observe via Application Insights + Foundry traces.",
    tooling: ["Microsoft Agent 365", "Copilot Studio", "Application Insights"],
  },
];

export interface PerformanceTarget {
  metric: string;
  target: string;
  notes: string;
}

export const PERFORMANCE_TARGETS: PerformanceTarget[] = [
  {
    metric: "Question → grounded answer",
    target: "< 8s p95",
    notes: "Across Fabric mirror with Foundry retrieval; varies by query complexity.",
  },
  {
    metric: "Mirror replication lag",
    target: "< 60s p95",
    notes: "Oracle Fusion → OneLake via Fabric Mirroring (Ignite 2025 GA).",
  },
  {
    metric: "Composite agent uptime",
    target: "99.9% monthly",
    notes: "Foundry + Agents 365 + Copilot composite SLA target.",
  },
  {
    metric: "Cross-region failover",
    target: "< 5min RTO",
    notes: "Active-active for Database@Azure regions; cold standby for Fusion-mirrored data.",
  },
];

export type ComplianceStatus = "covered" | "in-scope" | "roadmap";

export interface ComplianceFramework {
  id: string;
  framework: string;
  scope: string;
  status: ComplianceStatus;
}

export const COMPLIANCE_FRAMEWORKS: ComplianceFramework[] = [
  { id: "soc2", framework: "SOC 2 Type II", scope: "Microsoft + Oracle", status: "covered" },
  { id: "iso27001", framework: "ISO 27001 / 27017 / 27018", scope: "Both clouds", status: "covered" },
  { id: "fedramp", framework: "FedRAMP High", scope: "Azure Gov + Oracle Gov Cloud", status: "covered" },
  { id: "gdpr", framework: "GDPR", scope: "Both clouds; EU regions", status: "covered" },
  { id: "eu-data-boundary", framework: "EU Data Boundary", scope: "Microsoft Cloud (M365, Azure, Power Platform)", status: "covered" },
  { id: "hipaa", framework: "HIPAA / HITRUST", scope: "Healthcare data flows", status: "covered" },
  { id: "fips", framework: "FIPS 140-3", scope: "Encryption at rest + in transit", status: "covered" },
  { id: "ms-sov", framework: "Microsoft Sovereign Cloud", scope: "Sovereign / regulated workloads on Azure", status: "in-scope" },
  { id: "oracle-eu-sov", framework: "Oracle EU Sovereign Cloud", scope: "Sovereign / regulated workloads on OCI", status: "in-scope" },
  { id: "il5", framework: "DoD IL5 / IL6", scope: "Azure Gov + Oracle Gov", status: "in-scope" },
];

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
    capability: "P2 · Foundry agents in Copilot via Microsoft Agent 365 + A2A",
    status: "in-flight",
    ships: "Phase 2 · H2",
    notes: "Microsoft Agent 365 control plane in preview from Ignite 2025; A2A protocol stable, multi-agent flows in pilot.",
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
