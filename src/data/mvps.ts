export interface MVP {
  id: string;
  name: string;
  title: string;
  organization: string;
  bio: string;
  contributions: string[];
  initials: string;
  gradientFrom: string;
  gradientTo: string;
  featured?: boolean;
  links: { twitter?: string; linkedin?: string; github?: string };
}

export const mvps: MVP[] = [
  {
    id: "alex-r",
    name: "Alex Rodriguez",
    title: "Principal Cloud Architect",
    organization: "Deloitte",
    bio: "Alex has been instrumental in shaping the OracleDB@Azure community since its preview launch. With over 15 years of Oracle experience and deep Azure expertise, he has authored 24 best practice guides, delivered 8 conference talks, and mentored dozens of engineers transitioning Oracle workloads to Azure. His migration framework has become the de facto standard for enterprise customers.",
    contributions: [
      "24 best practice guides authored",
      "8 conference talks delivered",
      "Migration framework adopted by 50+ enterprises",
      "Monthly office hours for community Q&A",
    ],
    initials: "AR",
    gradientFrom: "from-oracle-red",
    gradientTo: "to-orange-600",
    featured: true,
    links: { twitter: "#", linkedin: "#", github: "#" },
  },
  {
    id: "mei-l",
    name: "Mei Lin Chen",
    title: "Senior DBA",
    organization: "JPMorgan Chase",
    bio: "Oracle ACE Associate specializing in performance tuning and HA patterns for financial services on OracleDB@Azure.",
    contributions: [
      "18 technical articles published",
      "Performance benchmarking toolkit",
      "HA reference architecture for finance",
    ],
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
    bio: "Bridges the Oracle and Microsoft communities through technical content, workshops, and joint customer engagements.",
    contributions: [
      "31 deployment guides written",
      "Weekly community webinar host",
      "Azure Marketplace template contributor",
    ],
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
    bio: "Leads the Oracle-to-Azure migration practice and is a regular speaker at industry conferences.",
    contributions: [
      "22 migration case studies documented",
      "Speaker at CloudWorld & Ignite",
      "Migration assessment tool author",
    ],
    initials: "SK",
    gradientFrom: "from-purple-500",
    gradientTo: "to-violet-600",
    links: { twitter: "#", linkedin: "#", github: "#" },
  },
  {
    id: "priya-s",
    name: "Priya Sharma",
    title: "DevOps Engineer",
    organization: "Infosys",
    bio: "IaC advocate who automates Oracle provisioning on Azure using Terraform and contributes open-source tooling.",
    contributions: [
      "Terraform modules for OracleDB@Azure",
      "CI/CD pipeline templates",
      "19 automation guides published",
    ],
    initials: "PS",
    gradientFrom: "from-pink-500",
    gradientTo: "to-rose-600",
    links: { github: "#", linkedin: "#" },
  },
  {
    id: "yuki-t",
    name: "Yuki Tanaka",
    title: "Database Reliability Engineer",
    organization: "Rakuten",
    bio: "Runs mission-critical Oracle workloads on Azure in Asia Pacific with expertise in Data Guard configurations.",
    contributions: [
      "Data Guard automation scripts",
      "APAC region deployment guides",
      "Monitoring dashboard templates",
    ],
    initials: "YT",
    gradientFrom: "from-teal-500",
    gradientTo: "to-teal-700",
    links: { github: "#", linkedin: "#" },
  },
];
