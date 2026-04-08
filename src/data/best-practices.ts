export interface BestPractice {
  id: string;
  title: string;
  category: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  description: string;
  tags: string[];
  content: string;
  source?: string;
}

// Content sourced from official Microsoft and Oracle documentation:
// - https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/scenarios/oracle-on-azure/
// - https://learn.microsoft.com/en-us/azure/oracle/oracle-db/
// - https://docs.oracle.com/en-us/iaas/Content/database-at-azure/

export const bestPractices: BestPractice[] = [
  {
    id: "subnet-ip-sizing",
    title: "Plan Subnet and IP Address Sizing for Exadata",
    category: "Networking",
    difficulty: "Intermediate",
    description: "Properly size delegated subnets for OracleDB@Azure Exadata infrastructure, accounting for SKU-specific IP requirements and future growth.",
    tags: ["Subnet", "IP Planning", "Exadata", "VNet"],
    content: "Oracle Database@Azure reserves 13 IP addresses for the client subnet (vs. 3 for standard OCI). Review SKU-specific sizing guidelines before provisioning. Account for Azure Key Vault Private Endpoint IPs if using TDE integration. Allocate extra IP addresses for future VM clusters, additional database nodes, or integration with other Azure services. Ensure the first 10 characters of VNet and subnet names are unique when using default DNS settings, as the private DNS zone combines 'oci' plus these characters.",
    source: "https://learn.microsoft.com/azure/cloud-adoption-framework/scenarios/oracle-on-azure/core-network-design",
  },
  {
    id: "nsg-dual-stack",
    title: "Configure NSGs Across Azure and OCI Layers",
    category: "Networking",
    difficulty: "Advanced",
    description: "Coordinate Network Security Group rules between Azure delegated subnets and OCI security lists to prevent access conflicts and operational disruptions.",
    tags: ["NSG", "Security", "OCI", "Firewall"],
    content: "OracleDB@Azure uses predefined TCP ports managed by OCI-side NSGs that are inaccessible from other subnets by default. When applying NSGs on the Azure-delegated subnet, review and coordinate with OCI security rules to avoid conflicts. Misaligned rules between platforms can cause access problems. If managing security from Azure, allow all traffic from OCI-side NSGs and enforce restrictions using Azure-side NSGs with least-privilege rules. Consider Azure Firewall or network virtual appliances for advanced threat protection, but minimize NVAs in the data path to reduce latency.",
    source: "https://learn.microsoft.com/azure/cloud-adoption-framework/scenarios/oracle-on-azure/oracle-security-overview-odaa",
  },
  {
    id: "dns-configuration",
    title: "Configure DNS for OracleDB@Azure with Azure Private DNS",
    category: "Networking",
    difficulty: "Intermediate",
    description: "Set up reliable DNS resolution using Azure Private DNS zones, with hybrid resolution for on-premises connectivity.",
    tags: ["DNS", "Private DNS", "Hybrid", "Name Resolution"],
    content: "Use Azure Private DNS zones linked to your hub VNet as the default DNS choice — this aligns with Azure-native services and reduces operational overhead. For on-premises integration, use Azure Private DNS Resolver to bridge resolution between on-premises and Azure-hosted Oracle databases. Use custom DNS only when strict namespace requirements or compliance demand it. When deploying many Exadata instances, centralize DNS in your hub network. Ensure the first 10 alphabetic characters of VNet and subnet names are unique to avoid DNS resolver conflicts.",
    source: "https://learn.microsoft.com/azure/cloud-adoption-framework/scenarios/oracle-on-azure/core-network-design",
  },
  {
    id: "azure-keyvault-tde",
    title: "Integrate TDE Encryption with Azure Key Vault",
    category: "Security",
    difficulty: "Advanced",
    description: "Manage Oracle Transparent Data Encryption master keys using Azure Key Vault or Managed HSM for centralized key management and compliance.",
    tags: ["TDE", "Key Vault", "Encryption", "Managed HSM"],
    content: "For production workloads, use Azure Key Vault Premium or Managed HSM. Keep the Key Vault and Exadata VM cluster in the same tenant and resource group. Use AES keys wherever possible — managing TDE MEKs with AES format requires Managed HSM. Private Link integration is mandatory for Managed HSM and recommended for all KV integrations. Use a dedicated key vault or dedicated key for each Oracle environment; each CDB must have its own TDE master key. Enable Azure diagnostic logs for monitoring key access events. Implement key rotation policies through Key Vault for automated rotation at specified intervals.",
    source: "https://learn.microsoft.com/azure/oracle/oracle-db/manage-oracle-transparent-data-encryption-azure-key-vault",
  },
  {
    id: "security-isolation",
    title: "Implement Security Isolation Between Environments",
    category: "Security",
    difficulty: "Advanced",
    description: "Apply logical isolation and least-privilege access across development, staging, and production OracleDB@Azure environments.",
    tags: ["RBAC", "Isolation", "Entra ID", "Subscriptions"],
    content: "Use Azure subscriptions as primary isolation boundaries between environments. Configure Microsoft Entra ID groups with environment-specific access. Enforce least-privilege principles so development teams cannot access production Oracle databases. Deploy VM clusters in separate virtual networks for workload-level security isolation, preventing lateral movement between environments. Enable Microsoft Defender for Cloud for unified security management. Configure Microsoft Sentinel for SIEM. Establish automated alerts for suspicious Oracle database access patterns or configuration changes.",
    source: "https://learn.microsoft.com/azure/cloud-adoption-framework/scenarios/oracle-on-azure/oracle-resource-organization-oracle-database-azure",
  },
  {
    id: "dual-platform-security",
    title: "Establish Dual-Platform Security Governance",
    category: "Security",
    difficulty: "Intermediate",
    description: "Define clear security ownership boundaries between Azure and OCI platforms to ensure comprehensive coverage without conflicts.",
    tags: ["Governance", "Azure Arc", "Defender", "OCI"],
    content: "Azure manages security policies for infrastructure (virtual networks, Azure Arc-enabled servers, Defender for Cloud). Oracle controls database security (TDE, Database Vault, OCI security features). Onboard OracleDB@Azure infrastructure to Azure Arc-enabled servers for centralized security management through Defender for Cloud — this provides visibility and threat protection without interfering with OCI management. Align Azure Policy best practices for Arc-enabled servers with Oracle security configuration standards. Security policies must complement, not override, existing Oracle security configurations.",
    source: "https://learn.microsoft.com/azure/cloud-adoption-framework/scenarios/oracle-on-azure/oracle-security-overview-odaa",
  },
  {
    id: "backup-recovery-strategy",
    title: "Design a Comprehensive Backup & Recovery Strategy",
    category: "Backup",
    difficulty: "Intermediate",
    description: "Choose between Autonomous Recovery Service, OCI Object Storage, and Azure Storage for backup based on RTO/RPO requirements.",
    tags: ["Backup", "RMAN", "Recovery Service", "Blob Storage"],
    content: "Oracle Autonomous Recovery Service (ARS) is designed for mission-critical workloads with stringent RTO/RPO requirements — during configuration, choose to store backup data in the same cloud provider as the database to use ARS in Azure. OCI Object Storage is suitable for less stringent requirements. For self-managed backups, you can stream RMAN backups to Azure Blob Storage, Azure Files (via private endpoints), or Azure NetApp Files. Use cron jobs at the database-node level to schedule backups. Use zone-redundant or geo-redundant Azure storage replication for additional protection. For long-term retention, use the ARS long-term backup feature or configure self-managed RMAN backups to Storage.",
    source: "https://learn.microsoft.com/azure/cloud-adoption-framework/scenarios/oracle-on-azure/oracle-disaster-recovery-oracle-database-azure",
  },
  {
    id: "ha-data-guard",
    title: "High Availability with Data Guard Across Availability Zones",
    category: "Deployment",
    difficulty: "Advanced",
    description: "Deploy Oracle Data Guard across Azure availability zones for mission-critical HA with 99.99% uptime SLA.",
    tags: ["Data Guard", "HA", "Availability Zones", "Failover"],
    content: "Deploy Oracle databases on multiple Azure availability zones with Data Guard for 99.99% uptime SLA. Use Data Guard Far Sync for long-distance replication — it introduces an intermediate server closer to the primary to reduce redo transport time. For disaster recovery, set up a standby in a paired Azure region. Business continuity and DR use the Azure/OCI backbone with no additional egress charges. Autonomous Data Guard provides backup-based recovery within the same region without extra ECPUs or storage. For cross-region Autonomous Data Guard, ensure equal resource allocation for production and standby databases.",
    source: "https://learn.microsoft.com/azure/virtual-machines/workloads/oracle/oracle-reference-architecture",
  },
  {
    id: "exadata-capacity-planning",
    title: "Capacity Planning for Exadata Infrastructure",
    category: "Performance",
    difficulty: "Advanced",
    description: "Right-size Exadata infrastructure starting from quarter-rack configuration with independent scaling of compute and storage.",
    tags: ["Exadata", "Sizing", "Scaling", "Quarter Rack"],
    content: "Start with a quarter rack configuration (2 database servers + 3 storage servers) — this is the minimum for OracleDB@Azure. Scale independently: add up to 32 database servers and 64 storage servers based on workload needs. Use online scaling to adjust infrastructure without downtime — scaling takes up to a few hours. After adding servers to infrastructure, explicitly add the capacity to VM clusters. Monitor scaling progress via the Work Requests section in the OCI console. OracleDB@Azure currently supports Exadata X9M shapes.",
    source: "https://learn.microsoft.com/azure/cloud-adoption-framework/scenarios/oracle-on-azure/oracle-capacity-planning-oracle-database-azure-exadata",
  },
  {
    id: "autonomous-db-sizing",
    title: "Capacity Planning for Autonomous Database on Azure",
    category: "Performance",
    difficulty: "Intermediate",
    description: "Configure Autonomous Database ECPU counts, storage capacity, and auto-scaling for optimal cost and performance.",
    tags: ["Autonomous DB", "ECPU", "Auto-Scaling", "Storage"],
    content: "Choose the correct workload type: Data Warehouse supports 1 TB to 384 TB storage; Transaction Processing/JSON/APEX supports 20 GB to 393,216 GB. Enable storage auto-scaling to expand up to 3x reserved capacity — disabled by default, so enable proactively. Manage compute (ECPUs) and storage independently via the Azure portal or OCI console without downtime. For DR, built-in local recovery across availability zones requires no extra ECPUs or storage. When using Autonomous Data Guard, allocate equal resources for production and standby (e.g., 12 ECPU production = 12 ECPU standby).",
    source: "https://learn.microsoft.com/azure/cloud-adoption-framework/scenarios/oracle-on-azure/oracle-capacity-planning-oracle-database-azure-autonomous-database",
  },
  {
    id: "azure-monitor-integration",
    title: "Monitor OracleDB@Azure with Azure Monitor",
    category: "Monitoring",
    difficulty: "Beginner",
    description: "Enable native Azure Monitor metrics for Exadata infrastructure, VM clusters, and Autonomous Database services.",
    tags: ["Azure Monitor", "Metrics", "Dashboards", "Alerts"],
    content: "OracleDB@Azure publishes metrics natively through Azure Monitor for Exadata Dedicated Infrastructure, Exascale Infrastructure, and Autonomous Database services. Database metrics are listed under VM cluster metrics. Create custom Azure Monitor dashboards combining Oracle database metrics with application telemetry for unified end-to-end visibility. Set up alerts for CPU utilization, storage capacity, connection counts, and performance anomalies. Azure Monitor integration provides comprehensive monitoring without additional tooling.",
    source: "https://learn.microsoft.com/azure/oracle/oracle-db/database-overview",
  },
  {
    id: "macc-billing",
    title: "Optimize Billing with MACC and BYOL",
    category: "Cost",
    difficulty: "Beginner",
    description: "Leverage Microsoft Azure Consumption Commitment (MACC) decrement and Bring Your Own License (BYOL) to optimize Oracle costs on Azure.",
    tags: ["MACC", "BYOL", "Billing", "Cost"],
    content: "OracleDB@Azure is purchased through Azure Marketplace and eligible for Microsoft Azure Consumption Commitment (MACC) decrement — Oracle spend counts toward your committed Azure consumption. Choose BYOL to bring existing Oracle Database licenses or use License Included option. Use Oracle Support Rewards to reduce Oracle tech license support bills. Pricing is at parity with Exadata Cloud costs in OCI — use the OCI Cloud Cost Estimator for pricing. Billing appears on regular Azure invoices alongside other Azure Marketplace services. Note: Azure Credits (ACO) cannot be used for OracleDB@Azure.",
    source: "https://learn.microsoft.com/azure/oracle/oracle-db/database-overview",
  },
  {
    id: "migration-tooling",
    title: "Migrate to OracleDB@Azure with Oracle Tooling",
    category: "Deployment",
    difficulty: "Intermediate",
    description: "Use Oracle Zero Downtime Migration, Data Guard, or GoldenGate to migrate existing Oracle databases to OracleDB@Azure.",
    tags: ["Migration", "ZDM", "GoldenGate", "Data Guard"],
    content: "Oracle Database@Azure supports migration with familiar Oracle tools: Zero Downtime Migration (ZDM) for automated, end-to-end migration orchestration; Data Guard for online migration with continuous replication; and GoldenGate for heterogeneous and real-time data replication scenarios. OCI Database Migration Service provides a managed migration experience. Oracle versions 11g through 19c are supported (versions earlier than 19c need upgrade support). Base Database Service now supports 19c and 23ai with version flexibility. Latency between Azure resources and OracleDB@Azure is within the Azure regional latency envelope since Exadata infrastructure is inside Azure datacenters.",
    source: "https://learn.microsoft.com/azure/oracle/oracle-db/faq-oracle-database-azure",
  },
  {
    id: "terraform-automation",
    title: "Automate Deployments with Terraform and OCI Landing Zone",
    category: "Deployment",
    difficulty: "Intermediate",
    description: "Use infrastructure-as-code with Terraform and the OCI Multicloud Landing Zone to standardize OracleDB@Azure provisioning.",
    tags: ["Terraform", "IaC", "Landing Zone", "DevOps"],
    content: "Use standardized deployment patterns to reduce errors and accelerate provisioning. The OCI Multicloud Landing Zone for Azure provides pre-built Terraform templates for deploying Exadata infrastructure following Azure best practices for reliability, security, and operational excellence. Terraform/OpenTofu examples are available for Exadata services including infrastructure provisioning, VM cluster creation, and database configuration. Combine Azure Resource Manager (ARM) templates with OCI Terraform providers for end-to-end automation across both platforms. Use Azure DevOps Pipelines or GitHub Actions for CI/CD of infrastructure deployments.",
    source: "https://learn.microsoft.com/azure/oracle/oracle-db/exadata-multicloud-landing-zone-azure-services",
  },
  {
    id: "network-performance",
    title: "Optimize Network Performance for Database Workloads",
    category: "Networking",
    difficulty: "Intermediate",
    description: "Minimize latency between applications and OracleDB@Azure by co-locating resources and reducing network hops.",
    tags: ["Latency", "Availability Zones", "NVA", "Performance"],
    content: "Place resources that interact with OracleDB@Azure Exadata within the same availability zone to optimize bandwidth and latency. Minimize network virtual appliances (NVAs) in the data path — each extra hop introduces latency that degrades database performance. Use NVAs only when required for traffic inspection or compliance. OracleDB@Azure integrates into Azure virtual networks through subnet delegation without default internet access. If outbound internet access is needed, configure NAT or use Azure Firewall. Ingress and egress for managed services occurs via the Azure/OCI backbone and does not incur charges.",
    source: "https://learn.microsoft.com/azure/cloud-adoption-framework/scenarios/oracle-on-azure/core-network-design",
  },
];

export const categories = [
  "Deployment",
  "Performance",
  "Security",
  "Networking",
  "Backup",
  "Monitoring",
  "Cost",
];
