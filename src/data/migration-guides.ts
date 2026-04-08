export interface MigrationGuide {
  id: string;
  title: string;
  source: string;
  target: string;
  complexity: "Low" | "Medium" | "High";
  estimatedEffort: string;
  description: string;
  steps: string[];
  tags: string[];
}

export const migrationGuides: MigrationGuide[] = [
  {
    id: "onprem-to-adb",
    title: "On-Premises Oracle to Autonomous Database",
    source: "On-Premises",
    target: "Autonomous Database",
    complexity: "Medium",
    estimatedEffort: "2-6 weeks",
    description: "Migrate from on-premises Oracle Database (11g/12c/19c) to fully managed Autonomous Database on Azure.",
    steps: [
      "Run Oracle Database Migration Assistant for compatibility assessment",
      "Provision target Autonomous Database in Azure",
      "Configure network connectivity (ExpressRoute or VPN)",
      "Use Oracle Data Pump for initial data load",
      "Set up GoldenGate for ongoing replication during cutover",
      "Validate application connectivity and performance",
      "Execute cutover with minimal downtime",
    ],
    tags: ["Data Pump", "GoldenGate", "Assessment"],
  },
  {
    id: "onprem-to-exadata",
    title: "On-Premises Oracle to Exadata Cloud@Azure",
    source: "On-Premises",
    target: "Exadata Cloud@Azure",
    complexity: "Medium",
    estimatedEffort: "3-8 weeks",
    description: "Lift and shift from on-premises Exadata or standard Oracle to Exadata Cloud Infrastructure on Azure.",
    steps: [
      "Inventory databases and assess Exadata sizing requirements",
      "Provision Exadata infrastructure in Azure",
      "Configure networking and DNS resolution",
      "Use RMAN or Zero Downtime Migration for data transfer",
      "Migrate PDBs using PDB relocation or RMAN restore",
      "Update application connection strings",
      "Validate and performance test",
    ],
    tags: ["Exadata", "RMAN", "ZDM", "Lift & Shift"],
  },
  {
    id: "aws-rds-to-adb",
    title: "AWS RDS Oracle to Autonomous Database",
    source: "AWS",
    target: "Autonomous Database",
    complexity: "High",
    estimatedEffort: "4-10 weeks",
    description: "Migrate from Amazon RDS for Oracle to Oracle Autonomous Database on Azure.",
    steps: [
      "Export RDS Oracle using Data Pump to S3",
      "Transfer dump files to Azure Blob Storage",
      "Provision Autonomous Database on Azure",
      "Import using Data Pump from Object Storage",
      "Resolve any compatibility differences (custom parameters, options)",
      "Update application tier for new connection details",
      "Test and validate all database functionality",
    ],
    tags: ["AWS", "RDS", "Data Pump", "Cross-Cloud"],
  },
  {
    id: "gcp-to-adb",
    title: "GCP Bare Metal Oracle to OracleDB@Azure",
    source: "GCP",
    target: "Autonomous Database",
    complexity: "High",
    estimatedEffort: "4-12 weeks",
    description: "Migrate from Google Cloud Bare Metal Solution for Oracle to OracleDB@Azure.",
    steps: [
      "Assess current GCP Oracle configuration and dependencies",
      "Plan network connectivity between GCP and Azure (Cloud Interconnect)",
      "Provision target OracleDB@Azure infrastructure",
      "Set up GoldenGate for cross-cloud replication",
      "Perform parallel run and validation",
      "Cutover DNS and application connections",
      "Decommission GCP infrastructure",
    ],
    tags: ["GCP", "Bare Metal", "GoldenGate", "Cross-Cloud"],
  },
  {
    id: "oci-to-azure",
    title: "OCI Oracle to OracleDB@Azure",
    source: "Other Cloud",
    target: "Autonomous Database",
    complexity: "Low",
    estimatedEffort: "1-3 weeks",
    description: "Move from Oracle Cloud Infrastructure (OCI) to OracleDB@Azure for Azure-native management and billing.",
    steps: [
      "Assess OCI database configuration and version",
      "Provision matching Autonomous Database on Azure",
      "Use OCI Database Migration service or Data Pump",
      "Configure Azure networking and access controls",
      "Update application endpoints",
      "Validate and test",
    ],
    tags: ["OCI", "Data Pump", "Quick Migration"],
  },
  {
    id: "sql-server-to-oracle",
    title: "Azure SQL to Oracle Autonomous Database",
    source: "Other Cloud",
    target: "Autonomous Database",
    complexity: "High",
    estimatedEffort: "6-16 weeks",
    description: "Heterogeneous migration from Microsoft SQL Server on Azure to Oracle Autonomous Database for advanced Oracle features.",
    steps: [
      "Use Oracle SQL Developer Migration Workbench for schema conversion",
      "Resolve T-SQL to PL/SQL conversion issues",
      "Migrate stored procedures, triggers, and functions",
      "Transfer data using Oracle SQL Developer or custom ETL",
      "Rewrite application data access layer for Oracle",
      "Comprehensive testing of all application paths",
      "Performance tuning and optimization",
    ],
    tags: ["SQL Server", "Heterogeneous", "Schema Conversion"],
  },
];

export const sourcePlatforms = ["On-Premises", "AWS", "GCP", "Other Cloud"];
