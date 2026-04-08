export interface Session {
  id: string;
  title: string;
  speaker: string;
  speakerTitle: string;
  event: string;
  date: string;
  duration: string;
  category: string;
  tags: string[];
  description: string;
  videoUrl?: string;
}

export const sessions: Session[] = [
  {
    id: "oracle-azure-ga",
    title: "Oracle Database@Azure: General Availability Deep Dive",
    speaker: "Karan Batta",
    speakerTitle: "VP Product Management, Oracle",
    event: "Oracle CloudWorld 2024",
    date: "2024-09-12",
    duration: "45 min",
    category: "Conference Talk",
    tags: ["GA", "Overview", "Architecture"],
    description: "Comprehensive overview of OracleDB@Azure capabilities, architecture, and customer use cases since general availability.",
  },
  {
    id: "adb-azure-workshop",
    title: "Hands-On: Deploying Autonomous Database on Azure",
    speaker: "Jenny Tsai",
    speakerTitle: "Principal Cloud Architect, Microsoft",
    event: "Microsoft Ignite 2024",
    date: "2024-11-20",
    duration: "60 min",
    category: "Workshop",
    tags: ["ADB", "Hands-On", "Deployment"],
    description: "Step-by-step workshop walking through provisioning, configuring, and connecting to Oracle Autonomous Database from Azure services.",
  },
  {
    id: "ha-dr-patterns",
    title: "High Availability & Disaster Recovery Patterns for OracleDB@Azure",
    speaker: "Anil Mahadev",
    speakerTitle: "Distinguished Engineer, Oracle",
    event: "KubeCon + CloudNativeCon 2024",
    date: "2024-03-22",
    duration: "35 min",
    category: "Deep Dive",
    tags: ["HA", "DR", "Data Guard", "Architecture"],
    description: "Deep dive into HA and DR architecture patterns using Autonomous Data Guard, cross-region replication, and Azure availability zones.",
  },
  {
    id: "migration-strategies",
    title: "Migrating Enterprise Oracle Workloads to Azure",
    speaker: "Priya Ramanathan",
    speakerTitle: "Cloud Solutions Architect, Microsoft",
    event: "Azure Summit 2024",
    date: "2024-06-15",
    duration: "50 min",
    category: "Conference Talk",
    tags: ["Migration", "Enterprise", "Strategy"],
    description: "Real-world migration strategies and lessons learned from moving large-scale Oracle databases to OracleDB@Azure.",
  },
  {
    id: "security-deep-dive",
    title: "Security Architecture for Oracle on Azure",
    speaker: "David Chen",
    speakerTitle: "Security Architect, Oracle",
    event: "RSA Conference 2024",
    date: "2024-05-08",
    duration: "40 min",
    category: "Deep Dive",
    tags: ["Security", "Compliance", "Encryption"],
    description: "Security architecture deep dive covering encryption, network isolation, identity management, and compliance for regulated industries.",
  },
  {
    id: "exadata-azure-perf",
    title: "Exadata Performance on Azure: Benchmarks and Best Practices",
    speaker: "Mark Rakhmilevich",
    speakerTitle: "Senior Director, Oracle",
    event: "Oracle DevLive 2024",
    date: "2024-07-18",
    duration: "30 min",
    category: "Conference Talk",
    tags: ["Exadata", "Performance", "Benchmarks"],
    description: "Performance benchmarks and optimization techniques for Exadata Cloud Infrastructure running on Azure.",
  },
  {
    id: "ai-vector-search",
    title: "Building AI Applications with Oracle 23ai Vector Search on Azure",
    speaker: "Sanjay Narvekar",
    speakerTitle: "Director of Product, Oracle",
    event: "Microsoft Build 2025",
    date: "2025-05-20",
    duration: "45 min",
    category: "Workshop",
    tags: ["AI", "Vector Search", "23ai", "RAG"],
    description: "Hands-on workshop building RAG applications using Oracle 23ai vector search capabilities with Azure OpenAI and LangChain.",
  },
  {
    id: "networking-masterclass",
    title: "Networking Masterclass: OracleDB@Azure Connectivity",
    speaker: "Sarah Kim",
    speakerTitle: "Network Architect, Microsoft",
    event: "Webinar Series",
    date: "2025-01-10",
    duration: "55 min",
    category: "Webinar",
    tags: ["Networking", "VNet", "Private Link", "DNS"],
    description: "Comprehensive walkthrough of networking options, VNet configuration, private endpoints, and DNS resolution for OracleDB@Azure.",
  },
  {
    id: "cost-management",
    title: "Oracle on Azure: Cost Management and Optimization",
    speaker: "Michael Torres",
    speakerTitle: "FinOps Lead, Accenture",
    event: "FinOps Summit 2025",
    date: "2025-02-28",
    duration: "35 min",
    category: "Conference Talk",
    tags: ["Cost", "FinOps", "Optimization"],
    description: "Practical strategies for managing and optimizing Oracle Database costs on Azure, including reserved capacity and auto-scaling patterns.",
  },
  {
    id: "multicloud-governance",
    title: "Multi-Cloud Governance: Oracle + Azure Unified Operations",
    speaker: "Lisa Wang",
    speakerTitle: "CTO, Rackspace",
    event: "Gartner IT Symposium 2024",
    date: "2024-10-23",
    duration: "40 min",
    category: "Conference Talk",
    tags: ["Multi-Cloud", "Governance", "Operations"],
    description: "How enterprises manage Oracle and Azure as a unified platform, covering governance, operations, and organizational models.",
  },
];

export const sessionCategories = [
  "Conference Talk",
  "Webinar",
  "Workshop",
  "Deep Dive",
];
