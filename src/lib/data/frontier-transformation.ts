// Data for the "Frontier Transformation of Biz Ops + Infra Ops" page.
// Three coordinated workstreams that together make Azure the best place to
// run Oracle workloads: Data Estate (anchored on OD@A), Business Ops
// (apps + agents), and Infrastructure Ops (AIOps via a Workload Virtual
// Instance abstraction).

// ---------------------------------------------------------------------------
// §2 — The three workstreams (one-frame view)
// ---------------------------------------------------------------------------

export type WorkstreamId = "data-estate" | "biz-ops" | "infra-ops";

export interface Workstream {
  id: WorkstreamId;
  index: number;
  label: string;
  shortLabel: string;
  oneLiner: string;
  outcome: string;
  primaryAgentsOn: "Microsoft" | "Oracle" | "Joint";
  accent: "oracle" | "azure" | "yellow" | "teal";
}

export const WORKSTREAMS: Workstream[] = [
  {
    id: "data-estate",
    index: 1,
    label: "Data Estate Modernisation",
    shortLabel: "Data Estate",
    oneLiner:
      "Move every Oracle workload to its right destination on Azure — OD@A as the anchor, with peer paths for OCI, Azure Database for PostgreSQL, and hybrid mirror.",
    outcome:
      "Every workload on a compliant, supported version. Oracle-native features preserved. Data of record anchored on Azure for the agentic stack to ground on.",
    primaryAgentsOn: "Joint",
    accent: "oracle",
  },
  {
    id: "biz-ops",
    index: 2,
    label: "Business Ops Modernisation",
    shortLabel: "Biz Ops",
    oneLiner:
      "Modernise the app stack to cloud standards. Build agents on the Microsoft Agent Framework, deeply rooted in the Microsoft ecosystem — IQ layer, A365, Purview — interoperating with Oracle agents over MCP, A2A, and Fabric Mirror.",
    outcome:
      "Worker-facing agents that draft, decide, and execute across the modernised app surface. Cross-stack workflows that don't require a separate UI investment.",
    primaryAgentsOn: "Microsoft",
    accent: "azure",
  },
  {
    id: "infra-ops",
    index: 3,
    label: "Infrastructure Ops Modernisation",
    shortLabel: "Infra Ops",
    oneLiner:
      "Define the Workload Virtual Instance (WVI) — a cross-resource-group construct that becomes the unit of AIOps. Spin up Proactive and Reactive agents on a Common Agent Platform anchored on Quality, Resiliency, and Security.",
    outcome:
      "Operator-facing AIOps agents that detect config drift before incidents, run RCA at machine speed, and keep workload health green by default. Operational efficiency at frontier scale.",
    primaryAgentsOn: "Joint",
    accent: "teal",
  },
];

// ---------------------------------------------------------------------------
// §4 — Biz Ops modernisation layers
// ---------------------------------------------------------------------------

export interface BizOpsLayer {
  id: string;
  index: number;
  label: string;
  description: string;
  components: string[];
  accent: "azure" | "yellow" | "teal" | "oracle";
}

export const BIZ_OPS_LAYERS: BizOpsLayer[] = [
  {
    id: "app-stack",
    index: 1,
    label: "App stack modernisation to cloud standards",
    description:
      "Re-architect Oracle-adjacent apps onto cloud-native services. Compute moves to Azure-native; data of record stays anchored on OD@A.",
    components: [
      "Azure Kubernetes Service",
      "Azure App Service · Functions",
      "Microsoft Entra ID",
      "Azure Key Vault",
      "Application Insights",
      "Azure Service Bus · Event Grid",
    ],
    accent: "yellow",
  },
  {
    id: "agent-framework",
    index: 2,
    label: "Microsoft Agent Framework",
    description:
      "Build agents using Microsoft's primary agent framework — first-class tool-use, planning, evaluation, and human-in-the-loop guards. Templated builds with eval pipelines and A/B harnesses.",
    components: [
      "Microsoft Agent Framework",
      "Azure AI Foundry",
      "Microsoft Copilot Studio",
      "Agent evals + tracing",
    ],
    accent: "azure",
  },
  {
    id: "iq-layer",
    index: 3,
    label: "IQ layer — Fabric IQ · Foundry IQ · Work IQ",
    description:
      "Agents grounded on the certified semantic model. Reasoning, retrieval, and citations powered by Foundry IQ. Personalised through Microsoft Graph via Work IQ.",
    components: [
      "Microsoft Fabric (semantic + OneLake)",
      "Azure AI Foundry (Foundry IQ)",
      "Microsoft Graph (Work IQ)",
      "Native Fabric Mirroring for OD@A",
    ],
    accent: "teal",
  },
  {
    id: "a365",
    index: 4,
    label: "Microsoft Agent 365 + Copilot",
    description:
      "Agents reach the worker where the work happens — Outlook, Teams, Word, Copilot Chat. A365 is the control plane: identity, lifecycle, observability, governance for every agent.",
    components: [
      "Microsoft Agent 365 (control plane)",
      "Microsoft Copilot (worker surface)",
      "Outlook · Teams · Word",
      "Copilot Studio (low-code agent build)",
    ],
    accent: "azure",
  },
  {
    id: "governance",
    index: 5,
    label: "Governance — Purview ↔ Data Safe",
    description:
      "End-to-end governance from Oracle source to Copilot answer. Source classifications flow into Purview; lineage, sensitivity, and policy enforced at every step.",
    components: [
      "Microsoft Purview",
      "Oracle Data Safe + Audit Vault",
      "Governance Bridge accelerator",
      "End-to-end lineage",
    ],
    accent: "oracle",
  },
];

// ---------------------------------------------------------------------------
// §5 — Joint agent ecosystem (Microsoft × Oracle agent interop)
// ---------------------------------------------------------------------------

export interface AgentInteropLane {
  id: string;
  label: string;
  protocol: string;
  direction: "MS → Oracle" | "Oracle → MS" | "Bidirectional";
  whatItDoes: string;
  example: string;
  accent: "azure" | "oracle" | "teal";
}

export const AGENT_INTEROP_LANES: AgentInteropLane[] = [
  {
    id: "mcp-loop",
    label: "MCP loop back to Oracle",
    protocol: "Model Context Protocol",
    direction: "MS → Oracle",
    whatItDoes:
      "Microsoft-side agent (in Copilot / Foundry / A365) hands off to an Oracle Fusion AI Agent to execute a write-back, transaction, or policy-bound flow inside the Oracle estate.",
    example:
      "Foundry agent recommends 'dual-source 25% of Adriatica volume'. With user approval, hands off via MCP to Oracle Fusion AI Agent which executes the PO change in Fusion SCM.",
    accent: "teal",
  },
  {
    id: "fabric-mirror",
    label: "Fabric Mirror (data plane)",
    protocol: "Native Fabric Mirroring + GoldenGate",
    direction: "Oracle → MS",
    whatItDoes:
      "Oracle data of record streams into OneLake in near-real-time. Microsoft-side agents ground on the Fabric semantic model without ever copying the underlying tables.",
    example:
      "Foundry agent answers 'what's our Q3 supply-chain exposure?' by reading the mirrored Fusion SCM tables via Direct Lake — sub-second-fresh, fully governed.",
    accent: "azure",
  },
  {
    id: "a2a",
    label: "Agent-to-Agent (A2A) handoff",
    protocol: "A2A · OpenLineage · OAuth 2.0",
    direction: "Bidirectional",
    whatItDoes:
      "Microsoft agents and Oracle Fusion AI Agents call each other as peers. Cross-domain workflows that span Microsoft surfaces (M365, Copilot) and Oracle surfaces (Fusion UIs, Database AI agents) without point-to-point integration.",
    example:
      "Workforce-planning workflow: Work IQ agent (M365 Graph) + Foundry decision agent + Fusion HCM agent collaborate to fill an open req, draft the offer, and update the requisition state — all in one chat thread.",
    accent: "oracle",
  },
];

// ---------------------------------------------------------------------------
// §6 — Workload Virtual Instance (WVI) definition + AIOps stack
// ---------------------------------------------------------------------------

export interface WviProperty {
  id: string;
  label: string;
  body: string;
}

export const WVI_PROPERTIES: WviProperty[] = [
  {
    id: "cross-rg",
    label: "Spans resource groups",
    body:
      "A WVI is the logical envelope around everything one business workload needs — VMs, databases, networks, secrets, identities — even when those resources live across multiple Azure resource groups and subscriptions.",
  },
  {
    id: "unit-of-aiops",
    label: "Unit of AIOps",
    body:
      "AIOps agents target the WVI, not individual resources. Health, drift, RCA, and remediation are reasoned about at the workload boundary, not the box.",
  },
  {
    id: "policy-anchor",
    label: "Policy + governance anchor",
    body:
      "Compliance baselines, sovereign-cloud overlays, FedRAMP / IL5 profiles, and per-workload SLAs attach to the WVI. Drift away from the baseline is detected at the workload level.",
  },
  {
    id: "ownership-clarity",
    label: "Ownership clarity",
    body:
      "Each WVI has a single accountable owner team, a single business workload, a single business SLA. No ambiguity about who responds when an agent flags an incident.",
  },
];

export interface AiOpsAgent {
  id: string;
  label: string;
  mode: "Proactive" | "Reactive";
  description: string;
  signals: string[];
}

export const AIOPS_AGENTS: AiOpsAgent[] = [
  {
    id: "config-drift",
    label: "Config Drift Agent",
    mode: "Proactive",
    description:
      "Watches the WVI for any deviation from the policy baseline — security posture, network rules, identity grants, patch level, version compliance. Flags drift before it becomes an incident.",
    signals: [
      "Policy baseline diff",
      "Patch / version compliance drift",
      "Identity-grant changes",
      "Network-rule changes",
    ],
  },
  {
    id: "troubleshooting-rca",
    label: "Troubleshooting & RCA Agent",
    mode: "Reactive",
    description:
      "Triggers on incident signals across the WVI. Correlates telemetry, traces, and logs across resources; pinpoints root cause at machine speed and proposes a remediation with a citation trail.",
    signals: [
      "Service health alerts",
      "Application Insights anomalies",
      "Database wait-event spikes",
      "Network latency excursions",
    ],
  },
];

export interface AiOpsPillar {
  id: string;
  label: string;
  description: string;
}

export const AIOPS_PILLARS: AiOpsPillar[] = [
  {
    id: "configuration-validation",
    label: "Configuration Validation",
    description:
      "Continuous compliance check against the workload baseline. Every change is validated against policy before it lands.",
  },
  {
    id: "workload-health",
    label: "Workload Health",
    description:
      "End-to-end health rollup at the WVI level — availability, latency, error rate, and business-SLA proxies all in one place.",
  },
  {
    id: "contextual-support",
    label: "Contextual Support",
    description:
      "Grounded support agent that knows this customer's WVI, this workload's history, this team's runbooks. No ticket left to start from scratch.",
  },
];

// ---------------------------------------------------------------------------
// §7 — The unified frontier-firm outcome
// ---------------------------------------------------------------------------

export interface FrontierOutcome {
  id: string;
  iconKey: "users" | "shield" | "trending-up" | "compass";
  label: string;
  whoBenefits: string;
  whatChanges: string;
}

export const FRONTIER_OUTCOMES: FrontierOutcome[] = [
  {
    id: "knowledge-worker",
    iconKey: "users",
    label: "For the knowledge worker",
    whoBenefits: "Operators, planners, finance, supply-chain, HR, sales",
    whatChanges:
      "Agents draft the email, the Teams message, the PO change. The decision is in the calendar before the meeting starts. Hours back per worker, per week.",
  },
  {
    id: "infra-operator",
    iconKey: "shield",
    label: "For the infra operator",
    whoBenefits: "SREs, platform engineers, ops leads, security",
    whatChanges:
      "Drift is caught before incidents. RCA runs at machine speed. WVI-level rollups replace dashboard sprawl. The on-call rotation is quieter — and what fires is grounded.",
  },
  {
    id: "business-leader",
    iconKey: "trending-up",
    label: "For the business leader",
    whoBenefits: "CEOs, COOs, CIOs, business-unit leaders",
    whatChanges:
      "A frontier firm: agent-augmented work, data-grounded decisions, cross-stack interop, governed by default. Measurable productivity, measurable cost-to-serve, measurable risk reduction.",
  },
  {
    id: "regulator-auditor",
    iconKey: "compass",
    label: "For the regulator / auditor",
    whoBenefits: "Risk, compliance, audit, sovereign authorities",
    whatChanges:
      "End-to-end lineage from Oracle source to Copilot answer. Data Safe classifications flow into Purview. Every agent action carries a citation trail and policy evidence.",
  },
];

// ---------------------------------------------------------------------------
// §8 — The ask
// ---------------------------------------------------------------------------

export interface AskCommit {
  id: string;
  workstream: WorkstreamId | "joint";
  title: string;
  body: string;
}

export const ASK_COMMITS: AskCommit[] = [
  {
    id: "data-estate",
    workstream: "data-estate",
    title: "Commit · Data estate landing zones",
    body:
      "Productised OD@A landing zones per industry. Joint Oracle Cloud Lift + Microsoft funding for the first three lighthouse customers per vertical.",
  },
  {
    id: "biz-ops",
    workstream: "biz-ops",
    title: "Commit · Microsoft Agent Framework adoption",
    body:
      "Microsoft Agent Framework as the canonical build path; A2A + MCP as the canonical interop standards with Oracle Fusion AI Agents. Reference architectures co-published.",
  },
  {
    id: "infra-ops",
    workstream: "infra-ops",
    title: "Commit · WVI + AIOps platform",
    body:
      "Workload Virtual Instance as a productised Azure construct. Common Agent Platform shipping Config Drift, Troubleshooting & RCA agents on a Quality / Resiliency / Security foundation.",
  },
  {
    id: "joint-cab",
    workstream: "joint",
    title: "Commit · Joint customer advisory board",
    body:
      "Standing CAB across all three workstreams. Quarterly cadence, 10+ named customers across FSI, Manufacturing, Retail, and Public Sector by end of Year 1.",
  },
];

// ---------------------------------------------------------------------------
// Lookups
// ---------------------------------------------------------------------------

export const WORKSTREAM_BY_ID: Record<WorkstreamId, Workstream> = WORKSTREAMS.reduce(
  (acc, w) => {
    acc[w.id] = w;
    return acc;
  },
  {} as Record<WorkstreamId, Workstream>,
);
