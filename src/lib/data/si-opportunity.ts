// Data for the "SI Opportunity" exec page. Built for SI partner executives —
// the people who decide whether to stand up a joint Oracle + Microsoft
// Agentic Alliance practice and at what scale. Numbers are directional and
// drawn from public sources (Oracle Investor Day, IDC services forecasts,
// Microsoft Partner Network reporting); they are not internal estimates.

import type { ScenarioId } from "@/lib/data/scenarios";
import type { TierId } from "@/lib/data/tiers";

// ---------------------------------------------------------------------------
// §2 — Scale & opportunity sizing cards
// ---------------------------------------------------------------------------

export type SizingIconKey = "users" | "database" | "building" | "trending-up";

export interface OpportunitySize {
  id: string;
  iconKey: SizingIconKey;
  label: string;
  headlineValue: string;
  unit: string;
  source: string;
  caveat: string;
  accent: "azure" | "oracle" | "yellow" | "teal";
}

export const OPPORTUNITY_SIZES: OpportunitySize[] = [
  {
    id: "install-base",
    iconKey: "users",
    label: "Oracle install base",
    headlineValue: "430k+",
    unit: "customers worldwide",
    source: "Oracle public reporting",
    caveat: "~95% of Fortune 100 are Oracle customers somewhere in their estate.",
    accent: "oracle",
  },
  {
    id: "exadata-footprint",
    iconKey: "database",
    label: "On-prem Exadata + Database estate",
    headlineValue: "10k+",
    unit: "Exadata systems · billions of rows of business data",
    source: "Oracle Database market share data",
    caveat: "The largest unmodernised, agent-ready data estate left in enterprise IT.",
    accent: "azure",
  },
  {
    id: "fusion-footprint",
    iconKey: "building",
    label: "Oracle ERP + HCM + CX customers",
    headlineValue: "35k+",
    unit: "Fusion customers · plus a long EBS/PeopleSoft tail",
    source: "Oracle Fusion Apps reporting",
    caveat: "Every one of these is a Tier-0-through-Tier-3 agentic transformation candidate.",
    accent: "yellow",
  },
  {
    id: "services-tam",
    iconKey: "trending-up",
    label: "Modernisation + agentic services TAM",
    headlineValue: "$300B+",
    unit: "annual services spend across modernisation + AI",
    source: "IDC services forecasts (directional)",
    caveat: "Agentic-AI services pulling at $200B+ trajectory; Oracle estate is a disproportionate share.",
    accent: "teal",
  },
];

// ---------------------------------------------------------------------------
// §3 — The two-act opportunity
// ---------------------------------------------------------------------------

export type ActId = "modernise" | "activate";

export interface SiAct {
  id: ActId;
  index: number;
  label: string;
  subtitle: string;
  oneLiner: string;
  whatTheSiDoes: string[];
  revenueLines: string[];
  durationMonths: string;
  marginProfile: string;
  defenseMoat: string;
  accent: "azure" | "oracle" | "yellow" | "teal";
}

export const SI_ACTS: SiAct[] = [
  {
    id: "modernise",
    index: 1,
    label: "Act I · Modernise",
    subtitle: "Move-and-modernise on the OD@A anchor",
    oneLiner:
      "Get every Oracle workload onto its right destination — OD@A as the anchor — on a compliant, supported version, with apps refactored and governance in place.",
    whatTheSiDoes: [
      "Productised discovery + assessment of the customer's on-prem Oracle estate (workloads, dependencies, sensitive data, licence posture).",
      "Joint architecture design across the four cloud paths — OD@A, OCI, Azure DB for PostgreSQL, hybrid — with a per-workload destination decision.",
      "ZDM-led migrations to OD@A; DMS-led re-platforms for PostgreSQL-bound workloads; in-flight upgrades to compliant versions.",
      "App refactor — Java / .NET workloads onto AKS, App Service, Functions; identity unified through Entra; observability through Application Insights.",
      "Governance Bridge implementation — Oracle Data Safe classifications flowing into Microsoft Purview, end-to-end lineage live before any agent ships.",
    ],
    revenueLines: [
      "Discovery + assessment fees",
      "Migration execution (ZDM + DMS)",
      "App refactor + cloud-native rebuild",
      "Governance bridge implementation",
      "Change management + adoption",
    ],
    durationMonths: "12 – 36 months per major customer",
    marginProfile:
      "Classic transformation services — high volume, durable, reuses existing cloud-modernisation capacity.",
    defenseMoat:
      "Repeatable industry landing-zone factories — capital-light IP that compounds across customers.",
    accent: "oracle",
  },
  {
    id: "activate",
    index: 2,
    label: "Act II · Activate",
    subtitle: "Build the frontier firm on top of the modernised estate",
    oneLiner:
      "Light up the agentic stack on the modernised estate. Take the customer from Tier 0 (Copilot + mirror) through Tier 3 (Work IQ) — agents grounded in Oracle data, surfaced in Microsoft Copilot, governed end-to-end.",
    whatTheSiDoes: [
      "Workload selection — pick the highest-leverage agentic use cases per industry (procurement, workforce, customer health, finance close, case management).",
      "Ontology Bridge build — translate Oracle's business model (supplier risk, requisition health, account health) into Fabric semantic models.",
      "Foundry agent factory — templated agent builds with eval pipelines, A/B tests, and human-in-the-loop guards.",
      "MCP loops back to Oracle Fusion AI Agents for write-backs, transactions, and policy-bound flows.",
      "Frontier-firm operating model — change management, role redesign, agent ops, and the new KPIs that come with agent-augmented work.",
    ],
    revenueLines: [
      "Agent design + build (per-agent pricing)",
      "Ontology + semantic model engineering",
      "AgentOps / MLOps managed services",
      "Vertical IP licensing (industry agents)",
      "Frontier-firm transformation consulting",
      "Outcome-based services (savings share)",
    ],
    durationMonths: "Ongoing 24+ months per customer · compounds indefinitely",
    marginProfile:
      "Higher than Act I — IP-leveraged, recurring, and partly outcome-based. The compounding line.",
    defenseMoat:
      "Vertical agent IP + ontologies built on real Oracle deployments — the highest-value, hardest-to-copy SI asset of the next decade.",
    accent: "teal",
  },
];

// ---------------------------------------------------------------------------
// §4 — Frontier firm pillars
// ---------------------------------------------------------------------------

export type FrontierIconKey = "brain" | "shield" | "network" | "compass";

export interface FrontierFirmPillar {
  id: string;
  iconKey: FrontierIconKey;
  label: string;
  oneLiner: string;
  whyOracleMicrosoft: string;
}

export const FRONTIER_PILLARS: FrontierFirmPillar[] = [
  {
    id: "agent-augmented",
    iconKey: "brain",
    label: "Agent-augmented work",
    oneLiner:
      "Every worker is paired with agents at every step — drafting, prioritising, executing — not just consulting a chatbot.",
    whyOracleMicrosoft:
      "Microsoft Copilot is the worker surface; Oracle Fusion AI Agents and Foundry agents do the work where the data lives. Together they cover the worker's day.",
  },
  {
    id: "data-grounded",
    iconKey: "shield",
    label: "Data-grounded decisions",
    oneLiner:
      "Every recommendation traces back to the system of record — no hallucinated answers, no orphan data, no untrusted output.",
    whyOracleMicrosoft:
      "Oracle Database@Azure is the anchor of record; Fabric Mirror keeps OneLake in sync; Foundry grounds every claim back to a citation. End-to-end traceability ships day one.",
  },
  {
    id: "cross-stack",
    iconKey: "network",
    label: "Cross-stack interoperability",
    oneLiner:
      "Agents work across SaaS boundaries — Fusion ERP, M365, Teams, custom apps — using open standards (MCP, A2A) instead of point-to-point integrations.",
    whyOracleMicrosoft:
      "The alliance ships A2A and MCP as the canonical patterns. Agents reach back into Oracle from the Microsoft side, and forward into Microsoft from the Oracle side. No other coalition has this.",
  },
  {
    id: "governed",
    iconKey: "compass",
    label: "Governed by default",
    oneLiner:
      "Lineage, sensitivity, and policy enforced from source to answer — security teams say yes from day one because the controls were built in, not retrofitted.",
    whyOracleMicrosoft:
      "Oracle Data Safe + Audit Vault on the source side, Microsoft Purview on the surface side, with the Governance Bridge between. Two of the three tier-1 enterprise governance stacks, fused.",
  },
];

// ---------------------------------------------------------------------------
// §5 — SI revenue map by stage and by tier
// ---------------------------------------------------------------------------

export type FeeBand = "$" | "$$" | "$$$" | "$$$$";

export interface StageRevenue {
  id: string;
  stageLabel: string;
  siRevenueLine: string;
  example: string;
  feeBand: FeeBand;
  act: ActId;
}

export const STAGE_REVENUE: StageRevenue[] = [
  {
    id: "discover",
    stageLabel: "Discover",
    siRevenueLine: "Productised assessment + sensitivity scan",
    example: "30-day discovery sprint, fixed price, repeatable kit per industry.",
    feeBand: "$$",
    act: "modernise",
  },
  {
    id: "plan",
    stageLabel: "Plan",
    siRevenueLine: "Joint architecture + per-workload destination decision",
    example: "Cloud-path matrix applied per workload; signed-off architecture as deliverable.",
    feeBand: "$$",
    act: "modernise",
  },
  {
    id: "migrate",
    stageLabel: "Migrate & upgrade",
    siRevenueLine: "ZDM-led migration · DMS re-platform · upgrade to compliant version",
    example: "Per-workload migration fee, scaled across the estate. The biggest line.",
    feeBand: "$$$$",
    act: "modernise",
  },
  {
    id: "modernise",
    stageLabel: "Modernise apps",
    siRevenueLine: "App refactor · cloud-native rebuild · identity + observability unification",
    example: "Long-tail ERP + Java + .NET refactor. Multi-year, multi-wave engagement.",
    feeBand: "$$$$",
    act: "modernise",
  },
  {
    id: "activate",
    stageLabel: "Activate AI",
    siRevenueLine: "Ontology · agent factory · AgentOps · frontier-firm transformation",
    example: "Per-agent build + ongoing managed services + vertical IP licensing.",
    feeBand: "$$$",
    act: "activate",
  },
];

export interface TierRevenue {
  tierId: TierId;
  tierLabel: string;
  siRevenueLine: string;
  example: string;
  feeBand: FeeBand;
}

export const TIER_REVENUE: TierRevenue[] = [
  {
    tierId: "baseline",
    tierLabel: "Tier 0 · Baseline",
    siRevenueLine: "Copilot enablement + Fabric Mirror setup + Governance Bridge baseline",
    example: "Copilot rollout + initial OneLake mirror live. Quick wins, first revenue.",
    feeBand: "$$",
  },
  {
    tierId: "fabric",
    tierLabel: "Tier 1 · Fabric IQ",
    siRevenueLine: "Ontology + semantic model build (per-domain)",
    example: "Supplier-risk model · requisition-health model · account-health model.",
    feeBand: "$$$",
  },
  {
    tierId: "foundry",
    tierLabel: "Tier 2 · Foundry IQ",
    siRevenueLine: "Foundry agent build + grounding + retrieval pipelines",
    example: "Per-agent design + build + eval pipeline. Multi-agent orchestration in industry workflows.",
    feeBand: "$$$$",
  },
  {
    tierId: "work",
    tierLabel: "Tier 3 · Work IQ",
    siRevenueLine: "Cross-stack workflow orchestration + frontier-firm operating model",
    example: "Embed agents in the worker's calendar, drafts, decisions; redesign roles + KPIs.",
    feeBand: "$$$$",
  },
];

// ---------------------------------------------------------------------------
// §6 — Industry plays at summary depth (links into existing scenarios)
// ---------------------------------------------------------------------------

export interface IndustryPlay {
  id: string;
  industry: string;
  topAgenticUseCase: string;
  scenarioRef?: ScenarioId;
  topSiOpportunity: string;
  revenueProfile: string;
  accent: "azure" | "oracle" | "yellow" | "teal";
}

export const INDUSTRY_PLAYS: IndustryPlay[] = [
  {
    id: "fsi",
    industry: "Financial Services",
    topAgenticUseCase:
      "Agent-augmented compliance, regulatory reporting, and customer health on Oracle Financial Services + Fusion CX.",
    scenarioRef: "customer-health",
    topSiOpportunity:
      "Vertical agents for KYC remediation, audit response, and account-health triage. Highest regulatory bar means highest defensibility.",
    revenueProfile:
      "Highest fee bands; multi-year programmes; outcome-based services where measurable (e.g. case-resolution time).",
    accent: "azure",
  },
  {
    id: "manufacturing",
    industry: "Manufacturing & Industrial",
    topAgenticUseCase:
      "Frontier-firm operations on Oracle SCM + Procurement — supplier risk, lead-time variance, plant-level decisioning.",
    scenarioRef: "supply-chain",
    topSiOpportunity:
      "Industry-specific ontologies (supplier graph, BOM hierarchy, plant topology) and agent libraries for procurement + supply chain.",
    revenueProfile:
      "Largest physical estate · longest tail of integration work · highest IP-licensing potential (vertical agents).",
    accent: "oracle",
  },
  {
    id: "retail",
    industry: "Retail & Consumer",
    topAgenticUseCase:
      "Workforce planning, store ops, and customer health on Oracle HCM + Fusion CX.",
    scenarioRef: "workforce",
    topSiOpportunity:
      "Store-manager Copilot extensions, fast-cycle workforce planning agents, agent-augmented merchandising.",
    revenueProfile:
      "Faster cycles; lower per-engagement fees but high volume; agent-as-a-service plays compound.",
    accent: "yellow",
  },
  {
    id: "public-sector",
    industry: "Public Sector",
    topAgenticUseCase:
      "Case management + workforce + citizen services on Oracle Fusion + the agentic stack — under sovereign-cloud and FedRAMP / IL5 controls.",
    scenarioRef: "workforce",
    topSiOpportunity:
      "Sovereign-cloud reference architectures, accredited delivery teams, and citizen-services agent libraries.",
    revenueProfile:
      "Long sales cycles, durable contracts, high accreditation barriers — favours SIs with sovereign delivery muscle.",
    accent: "teal",
  },
];

// ---------------------------------------------------------------------------
// §7 — Practice asset stack to build internally
// ---------------------------------------------------------------------------

export type BuildEffort = "Quick" | "Medium" | "Deep";

export interface PracticeAsset {
  id: string;
  category: "Discover" | "Modernise" | "Activate" | "Govern";
  asset: string;
  description: string;
  effort: BuildEffort;
  accent: "azure" | "oracle" | "yellow" | "teal";
}

export const PRACTICE_ASSETS: PracticeAsset[] = [
  {
    id: "discovery-accelerator",
    category: "Discover",
    asset: "Discovery accelerator kit",
    description:
      "Productised assessment that returns a workload inventory, sensitivity catalogue, and per-workload destination recommendation in under 30 days.",
    effort: "Quick",
    accent: "azure",
  },
  {
    id: "landing-zone-factory",
    category: "Modernise",
    asset: "OD@A landing-zone factory",
    description:
      "Repeatable IaC + governance baseline + network peering pattern, productised per industry vertical (FSI, Mfg, Retail, Public Sector).",
    effort: "Medium",
    accent: "oracle",
  },
  {
    id: "ontology-bridge",
    category: "Activate",
    asset: "Ontology Bridge per industry",
    description:
      "Vertical Oracle-data semantic models — supplier risk, requisition health, account health, claims posture — pre-built on Fabric.",
    effort: "Deep",
    accent: "yellow",
  },
  {
    id: "foundry-agent-factory",
    category: "Activate",
    asset: "Foundry agent factory",
    description:
      "Templated agent builds with eval pipelines, A/B test harnesses, human-in-the-loop guards, and AgentOps observability stack.",
    effort: "Deep",
    accent: "teal",
  },
  {
    id: "governance-bridge",
    category: "Govern",
    asset: "Governance Bridge playbook",
    description:
      "Reference implementation of Oracle Data Safe ↔ Microsoft Purview integration, with industry-specific classification taxonomies.",
    effort: "Medium",
    accent: "oracle",
  },
  {
    id: "copilot-extensions",
    category: "Activate",
    asset: "Copilot extension catalogue",
    description:
      "Off-the-shelf vertical Copilot extensions — store manager, plant supervisor, claims adjuster, case worker — productised at the SKU level.",
    effort: "Medium",
    accent: "azure",
  },
];

// ---------------------------------------------------------------------------
// §2 — Visual band: top 8 strategic SIs (named for orientation)
// ---------------------------------------------------------------------------

export interface SiPartner {
  id: string;
  name: string;
  hq: string;
  superpower: string;
}

export const SI_ROSTER: SiPartner[] = [
  {
    id: "accenture",
    name: "Accenture",
    hq: "Dublin",
    superpower: "Largest Oracle + Microsoft alliance practice; deepest Fortune 500 reach.",
  },
  {
    id: "deloitte",
    name: "Deloitte",
    hq: "London",
    superpower: "Industry depth across FSI and Public Sector; consulting-led transformation muscle.",
  },
  {
    id: "ey",
    name: "EY",
    hq: "London",
    superpower: "Tax + audit gravity into Oracle ERP modernisation; risk + compliance lens.",
  },
  {
    id: "capgemini",
    name: "Capgemini",
    hq: "Paris",
    superpower: "Engineering + manufacturing depth in EMEA; strong industrial ontology IP.",
  },
  {
    id: "infosys",
    name: "Infosys",
    hq: "Bengaluru",
    superpower: "Scale delivery + AI-first platforms (Topaz); aggressive agent-factory investment.",
  },
  {
    id: "tcs",
    name: "TCS",
    hq: "Mumbai",
    superpower: "Largest delivery base; Oracle install-base coverage second to none.",
  },
  {
    id: "wipro",
    name: "Wipro",
    hq: "Bengaluru",
    superpower: "Strong CX + utilities; agent factory partnerships across hyperscalers.",
  },
  {
    id: "hcltech",
    name: "HCLTech",
    hq: "Noida",
    superpower: "Engineering services + Oracle infrastructure depth; ER&D adjacency.",
  },
];

// ---------------------------------------------------------------------------
// §8 — The ask
// ---------------------------------------------------------------------------

export interface SiAsk {
  id: string;
  title: string;
  body: string;
}

export const SI_ASKS: SiAsk[] = [
  {
    id: "certified-architects",
    title: "Certified architects to ramp the practice",
    body: "Tier-1 partners commit 250+ jointly-certified architects (OD@A + Fabric + Foundry + Purview); Tier-2 partners commit 100+; Tier-3 partners 50+. Joint Oracle / Microsoft curriculum, joint exam.",
  },
  {
    id: "lighthouse-customers",
    title: "Lighthouse customers per industry, co-funded",
    body: "Three named lighthouse customers per industry per partner — co-funded by Oracle Cloud Lift, Microsoft MAPS funds, and the SI's own go-to-market budget. Reference architecture rights in exchange.",
  },
  {
    id: "joint-gtm",
    title: "Integrated joint GTM motion",
    body: "Single co-sell registration that lights up Oracle PartnerNetwork incentives + Microsoft commerce incentives in one motion. Aligned account planning between SI vertical leads and the alliance field.",
  },
  {
    id: "practice-ip",
    title: "Practice IP investment within 6 – 9 months",
    body: "Build the asset stack — discovery kit, landing-zone factory, ontology bridge per industry, agent factory, governance playbook, Copilot extensions — productised, priced, and ready to ship by month 9.",
  },
];

// ---------------------------------------------------------------------------
// Lookups
// ---------------------------------------------------------------------------

export const ACT_BY_ID: Record<ActId, SiAct> = SI_ACTS.reduce(
  (acc, a) => {
    acc[a.id] = a;
    return acc;
  },
  {} as Record<ActId, SiAct>,
);
