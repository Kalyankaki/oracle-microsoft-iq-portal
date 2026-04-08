// ─── Value Proposition ───────────────────────────────────────────

export interface ValueProp {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const valueProps: ValueProp[] = [
  {
    id: "native-azure",
    title: "True Azure-Native Experience",
    description:
      "Oracle Exadata infrastructure runs inside Azure datacenters — not cross-connected from OCI. Provision through the Azure portal, manage via Azure Resource Manager, and get unified billing on your Azure invoice with MACC decrement eligibility.",
    icon: "cloud",
  },
  {
    id: "low-latency",
    title: "Sub-Millisecond Latency to Azure Services",
    description:
      "Exadata hardware is co-located in Azure physical data centers with direct VNet integration via subnet delegation. Latency to Azure compute is within the Azure regional envelope — identical to any other Azure-native service, not a cross-cloud hop.",
    icon: "zap",
  },
  {
    id: "full-oracle-stack",
    title: "Full Oracle Database Portfolio",
    description:
      "7 Oracle services available: Exadata Dedicated Infrastructure, Autonomous DB Dedicated, Autonomous DB@Azure, Recovery Service, Exascale, Base Database, and GoldenGate. Run any Oracle Database version from 19c to 23ai with full feature parity to OCI.",
    icon: "database",
  },
  {
    id: "unified-identity",
    title: "Microsoft Entra ID Federation",
    description:
      "No separate Oracle identity management needed. Federated identity and access management through Microsoft Entra ID. Azure RBAC governs infrastructure access while Oracle Database Vault handles database-level security — seamless SSO across both stacks.",
    icon: "shield",
  },
  {
    id: "azure-monitor",
    title: "Native Azure Monitor Integration",
    description:
      "Database metrics, audit logs, events, and telemetry are published natively to Azure Monitor. Build unified dashboards combining Oracle database health with Azure application insights. No separate monitoring tools required.",
    icon: "activity",
  },
  {
    id: "33-regions",
    title: "33 Azure Regions, Global Coverage",
    description:
      "Available in 33 Azure regions across Americas, Europe, Asia Pacific, and Middle East. Multi-AZ deployments in 22 regions with Oracle Data Guard for cross-region disaster recovery over the Azure/OCI backbone — no egress charges.",
    icon: "globe",
  },
  {
    id: "oracle-managed",
    title: "Fully Oracle-Managed Operations",
    description:
      "Oracle's Cloud Infrastructure operations team handles software patching, infrastructure updates, and lifecycle management through a dedicated connection to Oracle Cloud. You get Exadata performance without the DBA overhead of infrastructure management.",
    icon: "settings",
  },
  {
    id: "byol-flexibility",
    title: "BYOL + License Included Flexibility",
    description:
      "Bring your existing Oracle Database licenses (BYOL) or choose License Included. Apply Oracle Support Rewards to reduce support bills. All billing flows through Azure — one invoice, one commitment, one procurement process.",
    icon: "dollar",
  },
];

// ─── Competitive Comparison ──────────────────────────────────────

export interface CompetitorComparison {
  feature: string;
  oracleAtAzure: string;
  awsRds: string;
  gcpBms: string;
  category: string;
}

export const competitors: CompetitorComparison[] = [
  {
    feature: "Infrastructure Location",
    oracleAtAzure: "Oracle Exadata inside Azure datacenters — true co-location",
    awsRds: "RDS Oracle runs on AWS EC2 instances — no Exadata, no RAC",
    gcpBms: "Bare Metal hardware in GCP facilities — separate from GCP services",
    category: "Architecture",
  },
  {
    feature: "Database Service Breadth",
    oracleAtAzure: "7 services: Exadata, Autonomous DB (Dedicated + Serverless), Exascale, Base DB, Recovery Service, GoldenGate",
    awsRds: "RDS Oracle only (Standard/Enterprise). No Autonomous DB, no Exadata, no RAC support",
    gcpBms: "Bare Metal for Oracle only. No managed Autonomous DB. No managed Exadata Cloud",
    category: "Architecture",
  },
  {
    feature: "Oracle RAC Support",
    oracleAtAzure: "Full Oracle RAC on Exadata. Multi-node clusters for HA and scale",
    awsRds: "No RAC support. Single-instance only with Multi-AZ standby",
    gcpBms: "RAC possible on Bare Metal — customer must install and manage",
    category: "Architecture",
  },
  {
    feature: "Autonomous Database",
    oracleAtAzure: "Fully managed Autonomous DB with auto-patching, auto-tuning, auto-scaling — same as OCI",
    awsRds: "Not available. Closest is Aurora, which is not Oracle-compatible",
    gcpBms: "Not available. Must manually manage Oracle Database instances",
    category: "Managed Services",
  },
  {
    feature: "Network Integration",
    oracleAtAzure: "Direct Azure VNet integration via subnet delegation. No cross-cloud network hops",
    awsRds: "Native VPC integration, but limited to RDS-supported features (no Exadata networking)",
    gcpBms: "Partner Interconnect required for some configurations. Higher latency path for GCP services",
    category: "Networking",
  },
  {
    feature: "Identity & Access",
    oracleAtAzure: "Microsoft Entra ID federation. Azure RBAC for infrastructure. Single identity plane",
    awsRds: "AWS IAM for RDS. No Oracle-specific identity federation",
    gcpBms: "Google Cloud IAM for infrastructure. Separate Oracle identity management",
    category: "Security",
  },
  {
    feature: "Monitoring",
    oracleAtAzure: "Native Azure Monitor metrics for all Oracle services. Unified dashboards out of the box",
    awsRds: "CloudWatch metrics for RDS. Limited Oracle-specific visibility",
    gcpBms: "Cloud Monitoring for infra only. No native Oracle DB metrics — must install agents",
    category: "Operations",
  },
  {
    feature: "Billing & Procurement",
    oracleAtAzure: "Single Azure invoice. MACC-eligible. BYOL or License Included. Oracle Support Rewards",
    awsRds: "AWS billing only. License Included only on RDS — BYOL requires self-managed EC2",
    gcpBms: "GCP billing + separate Oracle license agreement. No integrated Oracle licensing",
    category: "Commercial",
  },
  {
    feature: "Oracle Version Support",
    oracleAtAzure: "11g through 23ai — full version range with upgrade support. Parity with OCI",
    awsRds: "Limited versions (19c primarily). Lagging behind Oracle's latest releases",
    gcpBms: "Customer installs any version — but no managed upgrade or patching service",
    category: "Managed Services",
  },
  {
    feature: "Disaster Recovery",
    oracleAtAzure: "Oracle Data Guard + Autonomous Data Guard over Azure/OCI backbone. No egress charges for DR",
    awsRds: "RDS Multi-AZ (synchronous standby). Cross-region read replicas for DR — egress charges apply",
    gcpBms: "Customer-managed Data Guard on Bare Metal. Cross-region replication costs apply",
    category: "Operations",
  },
  {
    feature: "Exadata Performance",
    oracleAtAzure: "Full Exadata X9M with Smart Scan, Storage Indexes, RDMA — purpose-built for Oracle",
    awsRds: "General-purpose EC2 storage (EBS/gp3). No Exadata hardware acceleration",
    gcpBms: "Bare Metal servers — performant but no Exadata Smart Scan or storage offload",
    category: "Architecture",
  },
  {
    feature: "AI/ML Database Features",
    oracleAtAzure: "Oracle 23ai with AI Vector Search, Select AI, ML models in-database + Azure OpenAI integration",
    awsRds: "RDS Oracle 19c — no 23ai features. Must use SageMaker externally",
    gcpBms: "Customer-installed 23ai possible — but no managed integration with Google AI services",
    category: "AI/ML",
  },
];

export const comparisonCategories = [
  "Architecture",
  "Managed Services",
  "Networking",
  "Security",
  "Operations",
  "Commercial",
  "AI/ML",
];

// ─── Product Ideas ──────────────────────────────────────────────

export interface ProductIdea {
  id: string;
  title: string;
  description: string;
  oracleProducts: string[];
  azureProducts: string[];
  customerValue: string;
  category: string;
}

export const productIdeas: ProductIdea[] = [
  {
    id: "fabric-oracle-connector",
    title: "Microsoft Fabric Native Oracle Database Connector",
    description:
      "A first-class Oracle Database connector for Microsoft Fabric that enables zero-copy access to Oracle transactional data through OneLake shortcuts. Business analysts query live Oracle ERP/SCM/HCM data directly in Fabric without ETL, using T-SQL or PySpark.",
    oracleProducts: ["Oracle Autonomous Database 23ai", "Oracle ERP Cloud", "GoldenGate"],
    azureProducts: ["Microsoft Fabric", "OneLake", "Power BI", "Synapse Analytics"],
    customerValue: "Eliminates the $2-5M annual cost of Oracle-to-warehouse ETL pipelines and reduces data staleness from hours to seconds for real-time analytics.",
    category: "Analytics",
  },
  {
    id: "copilot-oracle-erp",
    title: "Microsoft 365 Copilot with Oracle ERP Deep Integration",
    description:
      "Extend Copilot for Microsoft 365 with Oracle ERP Graph API plugins so knowledge workers can ask questions like 'What's our AP aging over 90 days by vendor?' directly in Teams or Word and get live answers from Oracle Financials — no context switching.",
    oracleProducts: ["Oracle ERP Cloud — Financials", "Oracle ERP Cloud — Procurement", "Oracle APEX"],
    azureProducts: ["Microsoft 365 Copilot", "Copilot Studio", "Microsoft Teams", "Azure OpenAI"],
    customerValue: "Saves finance teams 10+ hours per week by eliminating Oracle ERP portal navigation and manual report generation. Answers arrive in the tools they already live in.",
    category: "Productivity",
  },
  {
    id: "azure-arc-oracle-em",
    title: "Azure Arc + Oracle Enterprise Manager Unified Operations Console",
    description:
      "Deep bidirectional integration between Azure Arc and Oracle Enterprise Manager 24ai that provides a truly unified operations console — manage Oracle database lifecycle, patching, and tuning directly from the Azure portal while EM intelligence feeds into Azure dashboards.",
    oracleProducts: ["Oracle Enterprise Manager 24ai", "Oracle Autonomous Database", "Exadata Cloud"],
    azureProducts: ["Azure Arc", "Azure Monitor", "Azure Automation", "Defender for Cloud"],
    customerValue: "Reduces operational tool sprawl from 5+ consoles to 1. DBAs and Azure admins work from the same pane of glass, cutting incident coordination time by 60%.",
    category: "Operations",
  },
  {
    id: "oracle-23ai-azure-openai",
    title: "Oracle 23ai Select AI + Azure OpenAI Service Bridge",
    description:
      "Native integration between Oracle 23ai's Select AI feature and Azure OpenAI Service, enabling business users to query Oracle databases in natural language directly from SQL*Plus, APEX, or any Oracle application — with Azure OpenAI handling the NL-to-SQL translation.",
    oracleProducts: ["Oracle Database 23ai — Select AI", "Oracle APEX", "Oracle AI Vector Search"],
    azureProducts: ["Azure OpenAI Service", "Azure API Management", "Azure Key Vault"],
    customerValue: "Democratizes database access for non-technical users. Business analysts query Oracle databases in plain English, reducing reliance on DBA teams for ad-hoc reporting by 70%.",
    category: "AI/ML",
  },
  {
    id: "power-platform-oracle",
    title: "Power Platform Premium Oracle Cloud Connectors",
    description:
      "Production-grade Power Automate and Power Apps connectors for Oracle ERP, HCM, and SCM Cloud that support complex transactions (not just reads) — enabling citizen developers to build Oracle-integrated workflows without middleware.",
    oracleProducts: ["Oracle ERP Cloud", "Oracle HCM Cloud", "Oracle SCM Cloud", "Oracle Integration Cloud"],
    azureProducts: ["Power Automate", "Power Apps", "Dataverse", "Azure API Management"],
    customerValue: "Unlocks the 30M+ Power Platform citizen developers to build Oracle-connected business apps. Reduces Oracle integration project timelines from months to days.",
    category: "Productivity",
  },
  {
    id: "sentinel-data-safe",
    title: "Microsoft Sentinel + Oracle Data Safe Unified Security",
    description:
      "Automated bi-directional integration where Oracle Data Safe security assessments flow into Microsoft Sentinel as structured alerts, and Sentinel SOAR playbooks can trigger Data Safe remediation actions — creating a closed-loop security automation across both stacks.",
    oracleProducts: ["Oracle Data Safe", "Oracle Database Vault", "Oracle Audit Vault"],
    azureProducts: ["Microsoft Sentinel", "Defender for Cloud", "Azure Logic Apps", "Microsoft Purview"],
    customerValue: "Closes the security gap between database and infrastructure layers. SOC teams detect and remediate Oracle-specific threats (privilege escalation, SQL injection, data exfiltration) in the same workflow as Azure infrastructure threats.",
    category: "Security",
  },
  {
    id: "teams-oracle-approvals",
    title: "Microsoft Teams as Oracle ERP Approval Hub",
    description:
      "Bring Oracle ERP approval workflows (PO approvals, expense reports, journal entries, requisitions) directly into Microsoft Teams via Adaptive Cards — approvers review, comment, and approve without ever opening the Oracle ERP portal.",
    oracleProducts: ["Oracle ERP Cloud — Procurement", "Oracle ERP Cloud — Expenses", "Oracle BPM"],
    azureProducts: ["Microsoft Teams", "Power Automate", "Adaptive Cards", "Azure Bot Service"],
    customerValue: "Reduces approval cycle times by 65% by meeting approvers where they work. CFO-level approvals that took 3 days via email now complete in hours via Teams notifications.",
    category: "Productivity",
  },
  {
    id: "goldengate-fabric-cdc",
    title: "Oracle GoldenGate → Microsoft Fabric Real-Time CDC Pipeline",
    description:
      "A managed, low-code integration that streams Oracle GoldenGate change data capture events directly into Microsoft Fabric Eventstream — enabling real-time operational analytics without impacting Oracle production database performance.",
    oracleProducts: ["Oracle GoldenGate", "Oracle Autonomous Database", "Exadata Cloud"],
    azureProducts: ["Microsoft Fabric Eventstream", "Real-Time Analytics", "KQL Database", "Power BI"],
    customerValue: "Enables real-time dashboards over Oracle transactional data with <5 second latency. Replaces nightly batch ETL jobs with streaming CDC, giving business users same-second visibility into Oracle ERP operations.",
    category: "Analytics",
  },
  {
    id: "azure-devops-oracle-liquibase",
    title: "Azure DevOps + Oracle Database CI/CD Pipeline Templates",
    description:
      "Pre-built Azure DevOps pipeline templates for Oracle Database schema CI/CD using Liquibase/Flyway, integrated with OracleDB@Azure provisioning — enabling full GitOps for database development with automated testing against Autonomous DB clones.",
    oracleProducts: ["Oracle Autonomous Database — Cloning", "Oracle SQLcl", "Oracle APEX"],
    azureProducts: ["Azure DevOps Pipelines", "Azure Repos", "Azure Test Plans", "Terraform"],
    customerValue: "Brings modern DevOps practices to Oracle database development. Schema changes go through the same PR review, automated testing, and deployment pipeline as application code — reducing database-related production incidents by 75%.",
    category: "DevOps",
  },
  {
    id: "purview-oracle-governance",
    title: "Microsoft Purview Oracle Data Governance Suite",
    description:
      "Deep Oracle metadata scanning for Microsoft Purview that catalogs Oracle database schemas, stored procedures, data lineage through GoldenGate replication chains, and sensitivity classifications — providing enterprise-wide data governance spanning both platforms.",
    oracleProducts: ["Oracle Autonomous Database", "Oracle GoldenGate", "Oracle Data Safe"],
    azureProducts: ["Microsoft Purview", "Azure Policy", "Defender for Cloud", "Compliance Manager"],
    customerValue: "Provides a single data governance platform across Oracle and Azure data assets. Regulatory compliance teams get unified lineage from Oracle source systems through GoldenGate to Azure analytics destinations — critical for GDPR, SOX, and HIPAA audits.",
    category: "Governance",
  },
];

export const productIdeaCategories = [
  "Analytics",
  "Productivity",
  "Operations",
  "AI/ML",
  "Security",
  "DevOps",
  "Governance",
];
