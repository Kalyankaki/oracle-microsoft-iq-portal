export interface Architecture {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  components: string[];
  featured?: boolean;
  details: string;
}

export const architectures: Architecture[] = [
  {
    id: "agentic-ai",
    title: "Agentic AI + OracleDB@Azure",
    description: "Autonomous AI agents leveraging Oracle Database on Azure for enterprise-grade retrieval, reasoning, and action execution.",
    category: "AI/ML",
    tags: ["AI", "Vector Search", "RAG", "23ai"],
    components: ["Oracle 23ai", "Azure OpenAI", "Azure Functions", "LangChain"],
    featured: true,
    details: "This architecture combines Oracle 23ai vector search with Azure OpenAI to build autonomous AI agents. The Oracle database serves as both the transactional store and vector database, enabling agents to perform semantic search over enterprise data, execute SQL-based tool calls, and maintain conversation history with ACID guarantees.",
  },
  {
    id: "ha-multi-region",
    title: "Multi-Region High Availability",
    description: "Active-passive HA architecture using Autonomous Data Guard across Azure regions for zero-RPO failover.",
    category: "HA/DR",
    tags: ["Data Guard", "Multi-Region", "Failover", "RPO"],
    components: ["Autonomous DB", "Data Guard", "Azure Traffic Manager", "Azure Front Door"],
    details: "Deploy primary Autonomous Database in one Azure region with a standby in another using Autonomous Data Guard. Azure Traffic Manager handles DNS failover. Application tier uses connection string switching with Oracle RAC connection pools for seamless failover with RPO=0 and RTO<30 seconds.",
  },
  {
    id: "hybrid-connectivity",
    title: "Hybrid Cloud Connectivity",
    description: "Secure connectivity between on-premises Oracle databases and OracleDB@Azure using ExpressRoute and VPN.",
    category: "Hybrid",
    tags: ["ExpressRoute", "VPN", "Hybrid", "Networking"],
    components: ["Azure ExpressRoute", "OracleDB@Azure", "On-Prem Oracle", "Azure VNet Gateway"],
    details: "Establish secure, low-latency connectivity between on-premises Oracle infrastructure and OracleDB@Azure. Use Azure ExpressRoute for dedicated private connections or site-to-site VPN for encrypted tunnel connectivity. Configure BGP routing for automatic failover between connectivity paths.",
  },
  {
    id: "zero-trust-security",
    title: "Zero Trust Security Architecture",
    description: "Defense-in-depth security model for Oracle workloads on Azure with end-to-end encryption and least-privilege access.",
    category: "Security",
    tags: ["Zero Trust", "Encryption", "IAM", "Compliance"],
    components: ["Azure AD", "Key Vault", "Database Vault", "Private Link", "NSGs"],
    details: "Implement zero trust principles: verify every access request, use least-privilege permissions, and assume breach. Layer network isolation with Private Link, encrypt data at rest with TDE using Azure Key Vault, enforce privileged access controls with Database Vault, and centralize identity with Azure AD integration.",
  },
  {
    id: "data-lakehouse",
    title: "Oracle + Azure Data Lakehouse",
    description: "Modern data lakehouse combining Oracle transactional data with Azure Synapse Analytics and Databricks.",
    category: "AI/ML",
    tags: ["Lakehouse", "Synapse", "Databricks", "Analytics"],
    components: ["Autonomous DB", "Azure Synapse", "Azure Data Lake", "Databricks"],
    details: "Stream change data from Oracle Autonomous Database to Azure Data Lake Storage using GoldenGate. Process and transform data with Azure Databricks or Synapse Spark pools. Serve analytics through Synapse serverless SQL pools. Maintain Oracle as the system of record while enabling modern analytics and ML workloads.",
  },
  {
    id: "migration-factory",
    title: "Enterprise Migration Factory",
    description: "Automated migration pipeline for moving multiple Oracle databases from on-premises to OracleDB@Azure at scale.",
    category: "Migration",
    tags: ["Migration", "Automation", "Terraform", "Pipeline"],
    components: ["Terraform", "Azure DevOps", "Oracle ZDM", "OCI Database Migration"],
    details: "Industrialize Oracle database migrations using a factory approach. Automate infrastructure provisioning with Terraform, orchestrate migration waves with Azure DevOps pipelines, use Oracle Zero Downtime Migration (ZDM) for data movement, and validate each migration with automated testing. Supports parallel migration of 5-10 databases per wave.",
  },
];

export const architectureCategories = ["AI/ML", "HA/DR", "Hybrid", "Security", "Migration"];
