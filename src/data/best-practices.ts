export interface BestPractice {
  id: string;
  title: string;
  category: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  description: string;
  tags: string[];
  content: string;
}

export const bestPractices: BestPractice[] = [
  {
    id: "adb-provisioning",
    title: "Provisioning Autonomous Database on Azure",
    category: "Deployment",
    difficulty: "Beginner",
    description: "Step-by-step guide to deploying Oracle Autonomous Database through the Azure portal using OracleDB@Azure.",
    tags: ["ADB", "Azure Portal", "Getting Started"],
    content: "Oracle Autonomous Database on Azure can be provisioned directly from the Azure Marketplace. Start by navigating to the Oracle Database@Azure service in the Azure portal, select your subscription, choose the workload type (ATP or ADW), configure networking with your existing VNet, and deploy. The service handles patching, tuning, and backups automatically.",
  },
  {
    id: "vnet-peering",
    title: "VNet Peering for OracleDB@Azure Connectivity",
    category: "Networking",
    difficulty: "Intermediate",
    description: "Configure virtual network peering between Oracle Database subnets and your Azure application workloads.",
    tags: ["VNet", "Networking", "Connectivity"],
    content: "OracleDB@Azure provisions Oracle infrastructure in a delegated subnet within your Azure VNet. To enable connectivity from your application tier, configure VNet peering or use the same VNet with proper subnet segmentation. Ensure NSG rules allow traffic on ports 1521-1522 for database connections and 443 for HTTPS management APIs.",
  },
  {
    id: "backup-strategy",
    title: "Backup and Recovery Strategies for ADB on Azure",
    category: "Backup",
    difficulty: "Intermediate",
    description: "Design a comprehensive backup strategy leveraging automatic backups and cross-region redundancy.",
    tags: ["Backup", "Recovery", "ADB", "DR"],
    content: "Autonomous Database provides automatic daily backups retained for 60 days. For additional protection, configure cross-region Autonomous Data Guard for RPO near zero. Use the DBMS_CLOUD package to export data to Azure Blob Storage for long-term retention. Test recovery procedures regularly using point-in-time restore capabilities.",
  },
  {
    id: "exadata-sizing",
    title: "Exadata Infrastructure Sizing on Azure",
    category: "Performance",
    difficulty: "Advanced",
    description: "Right-size your Exadata infrastructure for optimal performance and cost efficiency on Azure.",
    tags: ["Exadata", "Sizing", "Performance", "Cost"],
    content: "Start with the quarter-rack Exadata X11M configuration and scale based on workload needs. Monitor key metrics: IOPS, storage throughput, CPU utilization, and memory pressure. Use Oracle Enterprise Manager or Azure Monitor integration to track resource consumption. Scale OCPU count dynamically for ADB or add storage servers for Exadata Cloud@Azure.",
  },
  {
    id: "security-hardening",
    title: "Security Hardening for Oracle Database on Azure",
    category: "Security",
    difficulty: "Advanced",
    description: "Implement defense-in-depth security across network, identity, and data layers.",
    tags: ["Security", "Encryption", "IAM", "Network"],
    content: "Layer security controls: use Azure Private Link for network isolation, configure Oracle Database Vault for privileged access controls, enable TDE with customer-managed keys stored in Azure Key Vault, implement Oracle Audit Vault for compliance logging, and use Azure AD integration for centralized identity management. Enable Data Safe for security posture assessment.",
  },
  {
    id: "monitoring-setup",
    title: "Monitoring OracleDB@Azure with Azure Monitor",
    category: "Monitoring",
    difficulty: "Intermediate",
    description: "Set up comprehensive monitoring using Azure Monitor, OCI metrics, and custom dashboards.",
    tags: ["Monitoring", "Azure Monitor", "OCI", "Alerts"],
    content: "OracleDB@Azure exposes metrics through both Azure Monitor and OCI Monitoring. Configure Azure Monitor alerts for CPU utilization, storage capacity, and connection counts. Use Log Analytics workspace to collect diagnostic logs. Create Azure Dashboards combining Oracle database metrics with application telemetry for end-to-end visibility.",
  },
  {
    id: "ha-architecture",
    title: "High Availability Architecture Patterns",
    category: "Deployment",
    difficulty: "Advanced",
    description: "Design highly available database architectures using Data Guard and Azure availability zones.",
    tags: ["HA", "Data Guard", "Availability Zones"],
    content: "For mission-critical workloads, deploy Autonomous Data Guard across Azure availability zones within a region. Configure automatic failover with RPO=0 and RTO<30s. For cross-region DR, set up standby databases in a secondary Azure region. Combine with Azure Traffic Manager and application-level retry logic for seamless failover.",
  },
  {
    id: "cost-optimization",
    title: "Cost Optimization for Oracle Workloads on Azure",
    category: "Performance",
    difficulty: "Intermediate",
    description: "Reduce costs through right-sizing, auto-scaling, and reserved capacity planning.",
    tags: ["Cost", "Optimization", "Auto-scaling"],
    content: "Leverage ADB auto-scaling to match compute to workload demands — scale up during peak and down during off-hours. Use OCPU-based billing to align costs with actual usage. Consider reserved capacity for steady-state workloads. Tag resources for cost allocation and use Azure Cost Management to track Oracle spending alongside other Azure services.",
  },
  {
    id: "migration-assessment",
    title: "Pre-Migration Assessment Checklist",
    category: "Deployment",
    difficulty: "Beginner",
    description: "Evaluate your Oracle workloads for migration readiness to OracleDB@Azure.",
    tags: ["Migration", "Assessment", "Planning"],
    content: "Run Oracle Database Migration Assistant to identify compatibility issues. Check for unsupported features in ADB (e.g., certain PL/SQL packages). Assess storage requirements and IOPS needs. Evaluate network latency requirements between application and database tiers. Document current HA/DR requirements and map to OracleDB@Azure equivalents.",
  },
  {
    id: "private-endpoint",
    title: "Private Endpoints and Network Isolation",
    category: "Networking",
    difficulty: "Intermediate",
    description: "Configure private endpoints to ensure all database traffic stays within the Azure backbone.",
    tags: ["Private Endpoint", "Network Security", "VNet"],
    content: "Deploy OracleDB@Azure in a delegated subnet with no public IP. Use Azure Private Link to access management APIs privately. Configure DNS resolution for Oracle service endpoints using Azure Private DNS zones. Implement NSGs to restrict database access to specific application subnets and management jump boxes only.",
  },
  {
    id: "tde-key-management",
    title: "TDE Key Management with Azure Key Vault",
    category: "Security",
    difficulty: "Advanced",
    description: "Manage Transparent Data Encryption keys using Azure Key Vault for compliance and control.",
    tags: ["TDE", "Key Vault", "Encryption", "Compliance"],
    content: "Configure Oracle TDE to use customer-managed encryption keys stored in Azure Key Vault. Set up key rotation policies, enable soft delete and purge protection. Use managed identities for the Oracle service to access Key Vault without credential management. Monitor key usage through Key Vault diagnostics and set alerts for expiring keys.",
  },
  {
    id: "perf-tuning",
    title: "Performance Tuning for OLTP Workloads",
    category: "Performance",
    difficulty: "Advanced",
    description: "Optimize Oracle Database performance for transactional workloads running on Azure infrastructure.",
    tags: ["OLTP", "Performance", "Tuning", "SQL"],
    content: "Use Autonomous Database performance features: automatic indexing, SQL plan management, and automatic SQL tuning advisor. Monitor with Performance Hub for real-time SQL analysis. For Exadata, leverage Smart Scan, Storage Indexes, and Hybrid Columnar Compression. Ensure application connection pooling is configured properly with UCP or Azure-side connection pools.",
  },
];

export const categories = [
  "Deployment",
  "Performance",
  "Security",
  "Networking",
  "Backup",
  "Monitoring",
];
