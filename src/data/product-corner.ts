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

// ─── Competitive Comparison: OracleDB@Azure vs OracleDB@AWS vs OracleDB@GCP ──

export interface CompetitorComparison {
  feature: string;
  oracleAtAzure: string;
  oracleAtAws: string;
  oracleAtGcp: string;
  category: string;
}

// Sources:
// - OracleDB@Azure: https://learn.microsoft.com/en-us/azure/oracle/oracle-db/
// - OracleDB@AWS: https://www.oracle.com/cloud/aws/ (GA July 2025)
// - OracleDB@GCP: https://www.oracle.com/cloud/google/ (GA 2025)

export const competitors: CompetitorComparison[] = [
  {
    feature: "General Availability",
    oracleAtAzure: "GA since December 2023. Most mature multicloud Oracle offering with 2+ years of production deployments.",
    oracleAtAws: "GA July 2025 in initial regions. Newest of the three multicloud offerings, still expanding.",
    oracleAtGcp: "GA in 2025. Expanding from initial regions with planned additions in Europe and Asia.",
    category: "Maturity",
  },
  {
    feature: "Region Coverage",
    oracleAtAzure: "33 Azure regions across Americas, Europe, APAC, and Middle East. 22 Multi-AZ regions. Broadest coverage.",
    oracleAtAws: "9 AWS regions live (US East, West, Ohio, Canada, Frankfurt, Ireland, London, Tokyo, Sydney). More coming soon.",
    oracleAtGcp: "~12 GCP regions live (US, Canada, Frankfurt, London, Tokyo, Sydney, Melbourne, Mumbai, São Paulo). Expanding.",
    category: "Maturity",
  },
  {
    feature: "Database Services Breadth",
    oracleAtAzure: "7 services: Exadata Dedicated, Autonomous DB Dedicated, Autonomous DB Serverless, Exascale, Base DB, Recovery Service, GoldenGate.",
    oracleAtAws: "2 services: Exadata Database Service on Dedicated Infrastructure, Autonomous AI Database on Dedicated Exadata.",
    oracleAtGcp: "2 services: Oracle Autonomous AI Database, Oracle Exadata Database Service.",
    category: "Services",
  },
  {
    feature: "Oracle Base Database Service",
    oracleAtAzure: "Available. ECPU-based, pay-as-you-go managed Oracle DB on virtual machines. Supports 19c and 23ai.",
    oracleAtAws: "Not yet available. Only Exadata-based services offered at launch.",
    oracleAtGcp: "Not yet available. Only Exadata and Autonomous DB offered.",
    category: "Services",
  },
  {
    feature: "Exascale Infrastructure",
    oracleAtAzure: "Available. Multitenant hyper-elastic Exadata with up to 95% lower minimum infrastructure costs vs dedicated.",
    oracleAtAws: "Not yet available at launch.",
    oracleAtGcp: "Not yet available.",
    category: "Services",
  },
  {
    feature: "Oracle GoldenGate",
    oracleAtAzure: "Available in select regions. Managed real-time data replication and CDC for hybrid and migration scenarios.",
    oracleAtAws: "Not listed as a standalone managed service at launch. Available through OCI integration.",
    oracleAtGcp: "Not listed as a standalone managed service. Available through OCI integration.",
    category: "Services",
  },
  {
    feature: "Cloud-Native Identity Integration",
    oracleAtAzure: "Microsoft Entra ID federation with OCI IAM. SSO, automated user/group provisioning, Azure RBAC for infrastructure. Deepest identity integration.",
    oracleAtAws: "AWS IAM integration. Access management through AWS native identity. Integration depth being expanded.",
    oracleAtGcp: "Google Cloud IAM integration. Single sign-on via Google Cloud identity services.",
    category: "Integration",
  },
  {
    feature: "Native Monitoring",
    oracleAtAzure: "Azure Monitor publishes Exadata, VM Cluster, and Autonomous DB metrics natively. Custom dashboards out of the box. Deepest monitoring integration.",
    oracleAtAws: "AWS CloudWatch and CloudTrail integration. Amazon EventBridge for event streaming. Monitoring expanding.",
    oracleAtGcp: "Google Cloud monitoring integration. Logging and metrics through Google Cloud Operations suite.",
    category: "Integration",
  },
  {
    feature: "AI/ML Platform Integration",
    oracleAtAzure: "Azure OpenAI Service + Oracle 23ai AI Vector Search + Select AI. Microsoft Fabric, Copilot, and Azure ML integration paths.",
    oracleAtAws: "Amazon SageMaker, Amazon Bedrock, and Amazon Q integration. Zero-ETL connectors with AWS analytics services.",
    oracleAtGcp: "Google Vertex AI and Gemini foundation models integration. AutoML and Google AI Platform connectivity.",
    category: "Integration",
  },
  {
    feature: "Billing & Procurement",
    oracleAtAzure: "Single Azure invoice. MACC-eligible (counts toward Azure committed spend). BYOL + License Included. Oracle Support Rewards.",
    oracleAtAws: "Single AWS invoice. Qualifies for existing AWS spending commitments. BYOL + License Included. Oracle Support Rewards.",
    oracleAtGcp: "Single Google Cloud Marketplace invoice. Unified billing through GCP. BYOL + License Included.",
    category: "Commercial",
  },
  {
    feature: "Network Architecture",
    oracleAtAzure: "Direct VNet integration via Azure subnet delegation. No cross-cloud network hops. Advanced networking features with ExpressRoute FastPath.",
    oracleAtAws: "VPC integration within AWS data centers. Low-latency connectivity to AWS services. VPC Lattice support.",
    oracleAtGcp: "VPC integration within Google Cloud data centers. Connectivity to GKE, Cloud Run, and Compute Engine.",
    category: "Networking",
  },
  {
    feature: "Security & Compliance",
    oracleAtAzure: "Azure Arc + Defender for Cloud. Azure Key Vault TDE integration (Premium + Managed HSM). Microsoft Sentinel SIEM. Microsoft Purview governance. Most security integrations.",
    oracleAtAws: "AWS CloudTrail audit logging. AWS security service integration expanding. Standard encryption with customer-managed keys.",
    oracleAtGcp: "Google Cloud security services integration. Encryption and access management through Google Cloud KMS.",
    category: "Security",
  },
  {
    feature: "Infrastructure Automation",
    oracleAtAzure: "Terraform + OCI Landing Zone templates. Azure DevOps + ARM integration. Azure Automation runbooks for lifecycle management.",
    oracleAtAws: "AWS CloudFormation support. Terraform providers. Infrastructure-as-Code for provisioning and management.",
    oracleAtGcp: "Terraform providers. Google Cloud Developer Portal integration. Kubernetes-native deployment options.",
    category: "Operations",
  },
  {
    feature: "Disaster Recovery",
    oracleAtAzure: "Oracle Data Guard + Autonomous Data Guard over Azure/OCI backbone. No egress charges for DR. 22 Multi-AZ regions for cross-zone HA.",
    oracleAtAws: "Oracle Data Guard with cross-region replication. DR region pairing within AWS. Network charges may apply.",
    oracleAtGcp: "Oracle Data Guard for HA/DR. Cross-region standby support. Growing region coverage for DR pairs.",
    category: "Operations",
  },
];

export const comparisonCategories = [
  "Maturity",
  "Services",
  "Integration",
  "Networking",
  "Security",
  "Operations",
  "Commercial",
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
