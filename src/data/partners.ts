export interface Partner {
  id: string;
  name: string;
  tier: "Strategic" | "Technology" | "Community";
  description: string;
  color: string;
  url: string;
}

export const partners: Partner[] = [
  {
    id: "oracle",
    name: "Oracle",
    tier: "Strategic",
    description: "Co-engineering partner providing Oracle Database services natively on Azure infrastructure through the OracleDB@Azure partnership.",
    color: "bg-oracle-red",
    url: "https://oracle.com/cloud/azure",
  },
  {
    id: "microsoft",
    name: "Microsoft",
    tier: "Strategic",
    description: "Azure cloud platform provider enabling Oracle Database workloads to run in Azure datacenters with unified management and billing.",
    color: "bg-azure-blue",
    url: "https://azure.microsoft.com/solutions/oracle",
  },
  {
    id: "accenture",
    name: "Accenture",
    tier: "Technology",
    description: "Global systems integrator with a dedicated Oracle-on-Azure migration practice, helping enterprises modernize database workloads.",
    color: "bg-purple-600",
    url: "#",
  },
  {
    id: "deloitte",
    name: "Deloitte",
    tier: "Technology",
    description: "Advisory and implementation partner specializing in cloud strategy, migration assessment, and managed services for Oracle on Azure.",
    color: "bg-green-600",
    url: "#",
  },
  {
    id: "rackspace",
    name: "Rackspace Technology",
    tier: "Technology",
    description: "Managed cloud services provider offering 24/7 operations support for Oracle Database workloads running on Azure.",
    color: "bg-red-600",
    url: "#",
  },
  {
    id: "community-forum",
    name: "Oracle Community Forum",
    tier: "Community",
    description: "Official community discussion forum for Oracle Database practitioners, featuring dedicated Azure topics and expert Q&A.",
    color: "bg-yellow-600",
    url: "#",
  },
];

export const partnerTiers = ["Strategic", "Technology", "Community"] as const;
