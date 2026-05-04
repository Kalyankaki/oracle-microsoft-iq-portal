// Data for the "OD@A — The Anchor for Frontier Transformation" page.
// Establishes the typed model for anchor proof points, the 5-stage customer
// journey, the 4-step AI activation sub-journey, the cloud-path destinations,
// and the OD@A-specific consumption lines that supplement the existing
// CONSUMPTION_FLYWHEEL in how-we-enable.ts.

export type AnchorIconKey = "zap" | "shield" | "layers" | "trending-up";

export interface AnchorClaim {
  id: string;
  iconKey: AnchorIconKey;
  title: string;
  oneLiner: string;
  proof: string;
  accent: "azure" | "oracle" | "yellow" | "teal";
}

export const ANCHOR_CLAIMS: AnchorClaim[] = [
  {
    id: "lowest-latency",
    iconKey: "zap",
    title: "Lowest-latency Fabric mirror",
    oneLiner:
      "Native Fabric Mirroring for OD@A — announced at Ignite 2025 — gives the agent sub-second-fresh Oracle data without leaving Azure.",
    proof:
      "No replication tax, no extra hop, no third-party connector. The agent sees Oracle data as if it were native Azure data.",
    accent: "azure",
  },
  {
    id: "oracle-native",
    iconKey: "shield",
    title: "Oracle-native features preserved",
    oneLiner:
      "Exadata, Autonomous Database, RAC, Data Guard — all run unchanged on OD@A. The customer keeps the Oracle they invested in.",
    proof:
      "Same SQL, same DBA workflows, same backup and recovery, same licensing model. Migration is move-and-modernise, not rewrite.",
    accent: "oracle",
  },
  {
    id: "no-lift-shift",
    iconKey: "layers",
    title: "No lift-and-shift mental tax",
    oneLiner:
      "Workloads land in Azure datacentres on Oracle hardware operated jointly by Microsoft and Oracle. One support call, one bill, one SLA.",
    proof:
      "Azure Arc, single sign-on through Entra, network peering with the rest of the Azure estate. The seam between OD@A and the rest of Azure is invisible to the worker.",
    accent: "yellow",
  },
  {
    id: "consumption-flywheel",
    iconKey: "trending-up",
    title: "Consumption flywheel scales with depth",
    oneLiner:
      "Every modernised workload lights up Exadata ratecards, GoldenGate replication, Fabric capacity, Foundry tokens, and Copilot seats — five revenue lines per customer.",
    proof:
      "OD@A consumption is not a substitution play. It compounds with Fabric, Foundry, Purview, and M365 ARR rather than competing with them.",
    accent: "teal",
  },
];

// ---------------------------------------------------------------------------
// Customer journey — 5 stages from on-prem discovery to AI activation.
// ---------------------------------------------------------------------------

export type StageId = "discover" | "plan" | "migrate" | "modernise" | "activate";

export interface JourneyStage {
  id: StageId;
  index: number;
  label: string;
  shortLabel: string;
  oneLiner: string;
  whatHappens: string[];
  microsoftTooling: string[];
  oracleTooling: string[];
  outputs: string[];
  accent: "azure" | "oracle" | "yellow" | "teal" | "slate";
}

export const JOURNEY_STAGES: JourneyStage[] = [
  {
    id: "discover",
    index: 1,
    label: "Discover",
    shortLabel: "Discover",
    oneLiner:
      "Inventory the on-prem Oracle estate — workloads, versions, dependencies, sensitive data, licence posture.",
    whatHappens: [
      "Automated discovery agents crawl the customer's on-prem and OCI estate, cataloguing Exadata clusters, RAC nodes, Database Appliances, and Oracle Apps deployments.",
      "Workload signature analysis classifies each database by criticality, version, patch level, regulatory scope, and active feature usage (Spatial, RAC, Data Guard, GoldenGate).",
      "Sensitive data is auto-tagged via Oracle Data Safe so downstream landing-zone choices respect classification.",
    ],
    microsoftTooling: [
      "Azure Migrate — Oracle assessment",
      "Microsoft Purview — discovery scan",
      "Azure Arc — out-of-Azure inventory",
    ],
    oracleTooling: [
      "Oracle Data Safe — classification",
      "Oracle Cloud Lift Services",
      "Database upgrade assistant",
    ],
    outputs: [
      "Workload inventory with version + dependency graph",
      "Sensitivity-classified data catalogue",
      "Licence-posture report (BYOL, Universal Credits options)",
    ],
    accent: "slate",
  },
  {
    id: "plan",
    index: 2,
    label: "Plan the cloud path",
    shortLabel: "Plan",
    oneLiner:
      "Decide the right destination per workload across four legitimate paths — OD@A as the anchor, OCI, Azure Database for PostgreSQL, or stay on-prem.",
    whatHappens: [
      "Per-workload decision tree: Oracle-faithful → OD@A; multicloud-bound or sovereign → OCI; open-source-compatible re-platform → Azure Database for PostgreSQL; regulated-stranded → stay on-prem with Fabric hybrid mirror.",
      "Cost modelling across the four paths — three-year TCO including licence, ops, modernisation, and downstream agent enablement.",
      "Architecture review with Oracle and Microsoft joint architects to ratify per-workload destinations.",
    ],
    microsoftTooling: [
      "Azure Database for PostgreSQL — flexible server",
      "Azure pricing calculator",
      "Joint reference architectures",
    ],
    oracleTooling: [
      "Oracle Database@Azure — Exadata · Autonomous · DB Service",
      "Oracle Cloud Infrastructure",
      "Oracle Universal Cloud Credits",
    ],
    outputs: [
      "Per-workload destination decision",
      "Three-year TCO model",
      "Signed-off joint architecture",
    ],
    accent: "azure",
  },
  {
    id: "migrate",
    index: 3,
    label: "Migrate & upgrade",
    shortLabel: "Migrate",
    oneLiner:
      "Move every workload to its chosen destination on a compliant, supported version — zero-downtime where the business demands it.",
    whatHappens: [
      "Oracle Zero Downtime Migration (ZDM) handles Exadata-to-OD@A and on-prem-to-OD@A moves; rolling upgrades in flight where required.",
      "Azure Database Migration Service handles workload re-platforms (e.g. Oracle → Azure Database for PostgreSQL with schema-conversion workflows).",
      "Upgrade manager enforces target compliance versions (FedRAMP, IL5, EU Sovereign Cloud) and patches workloads to the supported baseline as part of the move.",
      "Licence posture optimised at landing — BYOL on OD@A, Universal Cloud Credits where they reduce cost, fresh subscription for re-platformed workloads.",
    ],
    microsoftTooling: [
      "Azure Database Migration Service",
      "Azure Site Recovery",
      "Microsoft Sovereign Cloud landing zones",
    ],
    oracleTooling: [
      "Oracle Zero Downtime Migration",
      "Oracle GoldenGate",
      "Oracle Cloud Lift Services",
    ],
    outputs: [
      "Workloads live on chosen destinations",
      "All workloads on compliant, supported versions",
      "Optimised licence + consumption posture",
    ],
    accent: "oracle",
  },
  {
    id: "modernise",
    index: 4,
    label: "Modernise apps",
    shortLabel: "Modernise",
    oneLiner:
      "Re-architect the apps that ride on the database. Compute moves to Azure-native services. Data stays anchored on OD@A.",
    whatHappens: [
      "Java / .NET apps containerised onto Azure Kubernetes Service or refactored onto Azure App Service.",
      "Long-tail batch jobs converted to Azure Functions; integration moved to Azure Service Bus + Event Grid.",
      "Identity unified through Microsoft Entra ID; secrets centralised in Azure Key Vault; observability via Application Insights.",
      "Apps stay tightly coupled to OD@A through low-latency private peering — no data egress tax, no architectural seam.",
    ],
    microsoftTooling: [
      "Azure Kubernetes Service",
      "Azure App Service · Functions",
      "Microsoft Entra ID · Key Vault",
      "Application Insights",
    ],
    oracleTooling: [
      "OD@A native networking",
      "Oracle WebLogic on Azure",
      "Oracle GoldenGate (CDC for new apps)",
    ],
    outputs: [
      "Apps run on Azure-native compute",
      "Data of record stays on OD@A — single source of truth",
      "Unified identity, secrets, and telemetry",
    ],
    accent: "yellow",
  },
  {
    id: "activate",
    index: 5,
    label: "Activate AI",
    shortLabel: "Activate AI",
    oneLiner:
      "Light up the agentic stack on the modernised estate — discovery, semantic understanding, data-ready, agent recommendation.",
    whatHappens: [
      "Workload discovery and definition: pick the highest-leverage workloads for agentic value (typically procurement, workforce, customer health, finance close).",
      "Automated metadata understanding: Fabric semantic model auto-derives measures, dimensions, and joins from OD@A schemas; Ontology Bridge translates Oracle's business model.",
      "Data-ready for analytics + AI: native Fabric Mirror keeps OneLake in sync; Foundry agents are grounded on the certified semantic model with end-to-end Purview + Data Safe lineage.",
      "Agent recommendation: choose Oracle-native agents via MCP for Oracle-side write-backs, or build custom Foundry agents using Fabric IQ + Foundry IQ + Work IQ for cross-domain workflows in Microsoft Copilot.",
    ],
    microsoftTooling: [
      "Microsoft Fabric — Mirror · OneLake · semantic model",
      "Azure AI Foundry · Microsoft Agent 365 · A2A",
      "Microsoft Copilot · Microsoft Graph (Work IQ)",
    ],
    oracleTooling: [
      "Oracle Fusion AI Agents",
      "Oracle Database AI agents",
      "Oracle Data Safe + Audit Vault (lineage)",
    ],
    outputs: [
      "Production agents grounded on OD@A",
      "End-to-end lineage from Oracle source to Copilot answer",
      "Tier 0 → Tier 3 progression live for the chosen workloads",
    ],
    accent: "teal",
  },
];

// ---------------------------------------------------------------------------
// AI activation sub-steps — the four steps inside Stage 5.
// ---------------------------------------------------------------------------

export interface AIActivationStep {
  id: string;
  index: number;
  label: string;
  whatItDoes: string;
  microsoftTools: string[];
  oracleTools: string[];
}

export const AI_ACTIVATION_STEPS: AIActivationStep[] = [
  {
    id: "workload-discovery",
    index: 1,
    label: "Workload discovery & definition",
    whatItDoes:
      "Identify which workloads on the modernised estate carry the highest agentic leverage. Score by data depth, decision frequency, and worker-surface fit.",
    microsoftTools: [
      "Azure AI Foundry — workload templates",
      "Microsoft 365 Adoption Score",
    ],
    oracleTools: [
      "Fusion AI Agent catalogue",
      "Oracle industry blueprints",
    ],
  },
  {
    id: "metadata-understanding",
    index: 2,
    label: "Automated metadata understanding",
    whatItDoes:
      "Fabric auto-derives measures, dimensions, and joins from OD@A schemas. The Ontology Bridge translates Oracle's business model into Fabric's semantic layer — supplier risk, requisition health, account health — without hand-written SQL.",
    microsoftTools: [
      "Fabric semantic model",
      "Ontology Bridge accelerator",
      "Microsoft Purview — lineage",
    ],
    oracleTools: [
      "Oracle data dictionary",
      "Fusion business object metadata",
    ],
  },
  {
    id: "data-ready",
    index: 3,
    label: "Data ready for analytics + AI",
    whatItDoes:
      "Native Fabric Mirror keeps OneLake in sync with OD@A in near-real-time. Direct Lake mode lets agents query without copying. Governance Bridge flows Oracle Data Safe classifications into Purview so security teams say yes.",
    microsoftTools: [
      "Fabric Mirroring (native, GA)",
      "OneLake — Direct Lake mode",
      "Microsoft Purview — sensitivity labels",
    ],
    oracleTools: [
      "Oracle GoldenGate — CDC fallback",
      "Oracle Data Safe — classifications",
    ],
  },
  {
    id: "agent-recommendation",
    index: 4,
    label: "Agent recommendation & build",
    whatItDoes:
      "Choose Oracle-native agents via MCP when the action must execute inside Oracle (write-backs, transactions, policy-bound flows), or build custom Foundry agents grounded on the Fabric semantic model for cross-domain workflows surfaced in Microsoft Copilot.",
    microsoftTools: [
      "Azure AI Foundry · Microsoft Agent 365",
      "Microsoft Copilot Studio",
      "MCP server templates",
    ],
    oracleTools: [
      "Fusion AI Agents (P3 · MCP)",
      "Oracle Database AI agents",
    ],
  },
];

// ---------------------------------------------------------------------------
// Cloud-path destinations — the 4 legitimate paths in Stage 2.
// ---------------------------------------------------------------------------

export type CloudPathId = "oda" | "oci" | "azure-pg" | "on-prem";

export interface CloudPath {
  id: CloudPathId;
  destination: string;
  bestFor: string;
  whatItPreserves: string;
  whatItChanges: string;
  azureRevenueLine: string;
  isAnchor: boolean;
  accent: "oracle" | "azure" | "yellow" | "slate";
}

export const CLOUD_PATHS: CloudPath[] = [
  {
    id: "oda",
    destination: "Oracle Database@Azure",
    bestFor:
      "Oracle-faithful workloads — Exadata, Autonomous, RAC, Data Guard — where the customer wants Azure as the home but no Oracle re-platform.",
    whatItPreserves:
      "All Oracle-native features, DBA workflows, licensing model, backup/recovery posture.",
    whatItChanges:
      "Datacentre is now Microsoft-operated; integrated billing, identity, and networking with the rest of Azure.",
    azureRevenueLine:
      "OD@A consumption (Exadata ratecards) + downstream Fabric, Foundry, Copilot pull-through.",
    isAnchor: true,
    accent: "oracle",
  },
  {
    id: "oci",
    destination: "Oracle Database on OCI / Exadata Cloud",
    bestFor:
      "Multicloud customers, sovereign workloads, or customers with deep OCI investments who want Microsoft-side agentic on top.",
    whatItPreserves:
      "OCI-native services and tooling; Oracle's full second-cloud SLA.",
    whatItChanges:
      "Reads flow into Fabric via shortcuts or GoldenGate; agents still surface in Microsoft Copilot.",
    azureRevenueLine:
      "Fabric capacity + Foundry tokens + Copilot seats. OD@A pull-through follows when workloads consolidate.",
    isAnchor: false,
    accent: "azure",
  },
  {
    id: "azure-pg",
    destination: "Azure Database for PostgreSQL",
    bestFor:
      "Open-source-compatible workloads suitable for re-platform — typically smaller, less Oracle-feature-bound apps where licence cost outweighs migration friction.",
    whatItPreserves:
      "Application logic (with schema conversion); cloud-native operational model; licence-cost reduction.",
    whatItChanges:
      "SQL dialect; some advanced Oracle features (PL/SQL specifics, partitioning, RAC) are re-engineered or dropped.",
    azureRevenueLine:
      "Azure Database for PostgreSQL consumption + downstream Fabric, Foundry, Copilot pull-through.",
    isAnchor: false,
    accent: "yellow",
  },
  {
    id: "on-prem",
    destination: "Stay on-prem (with hybrid Fabric mirror)",
    bestFor:
      "Stranded, regulated, or sovereign workloads that cannot leave the customer datacentre — yet still need to feed agentic AI.",
    whatItPreserves:
      "Existing on-prem investment, data-residency posture, regulatory scope.",
    whatItChanges:
      "Adds Fabric Data Factory + GoldenGate hybrid mirror so the data is still reachable from the agentic stack.",
    azureRevenueLine:
      "Fabric capacity + GoldenGate replication + Foundry tokens + Copilot seats. OD@A pull-through arrives when policy allows.",
    isAnchor: false,
    accent: "slate",
  },
];

// ---------------------------------------------------------------------------
// Consumption lines — OD@A-specific revenue per stage. Supplements the
// existing CONSUMPTION_FLYWHEEL in how-we-enable.ts (which describes the
// per-workflow flywheel at runtime). This describes the per-stage revenue
// across the modernisation journey itself.
// ---------------------------------------------------------------------------

export interface ConsumptionLine {
  stageId: StageId;
  layer: string;
  azureRevenue: string;
  oracleRevenue: string;
  notes: string;
}

export const CONSUMPTION_BY_STAGE: ConsumptionLine[] = [
  {
    stageId: "discover",
    layer: "Discovery + assessment",
    azureRevenue: "Azure Migrate · Purview scan capacity",
    oracleRevenue: "Cloud Lift Services engagement",
    notes:
      "Low-friction pre-revenue motion; primarily commercial enablement.",
  },
  {
    stageId: "plan",
    layer: "Architecture + planning",
    azureRevenue: "Microsoft + partner architecture services",
    oracleRevenue: "Joint architecture council engagement",
    notes:
      "Locks the per-workload destination — drives all downstream consumption.",
  },
  {
    stageId: "migrate",
    layer: "Migration + upgrade",
    azureRevenue: "Azure DMS · Azure Site Recovery · target compute on landing",
    oracleRevenue: "ZDM · GoldenGate replication metering · Cloud Lift",
    notes:
      "First consumption tick — workloads land and start consuming on Day 1.",
  },
  {
    stageId: "modernise",
    layer: "App modernisation",
    azureRevenue: "AKS · App Service · Functions · Entra · Key Vault · Application Insights",
    oracleRevenue: "OD@A consumption (Exadata · Autonomous · DB Service ratecards)",
    notes:
      "The biggest compounding line — every modernised app drives both Azure compute and OD@A.",
  },
  {
    stageId: "activate",
    layer: "Agentic activation",
    azureRevenue: "Fabric capacity · OneLake · Foundry tokens · Agent 365 · Copilot per-seat · Purview",
    oracleRevenue: "Fusion AI Agents · Audit Vault · Data Safe",
    notes:
      "Five-line Microsoft revenue lift on top of OD@A; reinforces every prior stage.",
  },
];

// ---------------------------------------------------------------------------
// Lookup helpers — same convention as scenarios.ts and tiers.ts.
// ---------------------------------------------------------------------------

export const STAGE_BY_ID: Record<StageId, JourneyStage> = JOURNEY_STAGES.reduce(
  (acc, s) => {
    acc[s.id] = s;
    return acc;
  },
  {} as Record<StageId, JourneyStage>,
);

export const CLOUD_PATH_BY_ID: Record<CloudPathId, CloudPath> = CLOUD_PATHS.reduce(
  (acc, p) => {
    acc[p.id] = p;
    return acc;
  },
  {} as Record<CloudPathId, CloudPath>,
);
