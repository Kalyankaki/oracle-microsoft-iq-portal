export interface CommunityMember {
  id: string;
  name: string;
  title: string;
  organization: string;
  bio: string;
  contributions: number;
  initials: string;
  gradientFrom: string;
  gradientTo: string;
  links: { twitter?: string; linkedin?: string; github?: string };
}

export const communityMembers: CommunityMember[] = [
  {
    id: "alex-r",
    name: "Alex Rodriguez",
    title: "Principal Cloud Architect",
    organization: "Deloitte",
    bio: "15+ years of Oracle experience. Specializes in large-scale migrations from on-premises to OracleDB@Azure.",
    contributions: 24,
    initials: "AR",
    gradientFrom: "from-oracle-red",
    gradientTo: "to-orange-600",
    links: { twitter: "#", linkedin: "#", github: "#" },
  },
  {
    id: "mei-l",
    name: "Mei Lin Chen",
    title: "Senior DBA",
    organization: "JPMorgan Chase",
    bio: "Oracle ACE Associate. Focused on performance tuning and high availability patterns for financial services.",
    contributions: 18,
    initials: "MC",
    gradientFrom: "from-azure-blue",
    gradientTo: "to-cyan-500",
    links: { linkedin: "#", github: "#" },
  },
  {
    id: "james-o",
    name: "James Okafor",
    title: "Cloud Solutions Engineer",
    organization: "Microsoft",
    bio: "Helps enterprises adopt OracleDB@Azure. Author of multiple deployment best practices guides.",
    contributions: 31,
    initials: "JO",
    gradientFrom: "from-green-500",
    gradientTo: "to-emerald-600",
    links: { twitter: "#", linkedin: "#" },
  },
  {
    id: "sarah-k",
    name: "Sarah Krishnamurthy",
    title: "Data Platform Lead",
    organization: "Accenture",
    bio: "Leads Oracle-to-Azure migration practice. Speaker at Oracle CloudWorld and Microsoft Ignite.",
    contributions: 22,
    initials: "SK",
    gradientFrom: "from-purple-500",
    gradientTo: "to-violet-600",
    links: { twitter: "#", linkedin: "#", github: "#" },
  },
  {
    id: "hans-m",
    name: "Hans Mueller",
    title: "Infrastructure Architect",
    organization: "SAP",
    bio: "Specializes in Exadata Cloud@Azure for ERP workloads. Contributor to networking best practices.",
    contributions: 15,
    initials: "HM",
    gradientFrom: "from-yellow-500",
    gradientTo: "to-amber-600",
    links: { linkedin: "#" },
  },
  {
    id: "priya-s",
    name: "Priya Sharma",
    title: "DevOps Engineer",
    organization: "Infosys",
    bio: "Automates Oracle provisioning on Azure using Terraform and ARM templates. IaC advocate.",
    contributions: 19,
    initials: "PS",
    gradientFrom: "from-pink-500",
    gradientTo: "to-rose-600",
    links: { github: "#", linkedin: "#" },
  },
  {
    id: "tom-w",
    name: "Tom Watkins",
    title: "Security Architect",
    organization: "EY",
    bio: "Focuses on security and compliance for regulated Oracle workloads on Azure. CISSP certified.",
    contributions: 12,
    initials: "TW",
    gradientFrom: "from-red-500",
    gradientTo: "to-red-700",
    links: { twitter: "#", linkedin: "#" },
  },
  {
    id: "yuki-t",
    name: "Yuki Tanaka",
    title: "Database Reliability Engineer",
    organization: "Rakuten",
    bio: "Runs mission-critical Oracle workloads on Azure in Asia Pacific. Expert in Data Guard configurations.",
    contributions: 16,
    initials: "YT",
    gradientFrom: "from-teal-500",
    gradientTo: "to-teal-700",
    links: { github: "#", linkedin: "#" },
  },
];
