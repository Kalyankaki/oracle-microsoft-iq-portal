export interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: "Product Update" | "Community" | "Event" | "Blog Post";
  summary: string;
  link?: string;
}

export const news: NewsItem[] = [
  {
    id: "regions-14",
    title: "Oracle Database@Azure now available in 14+ Azure regions",
    date: "2026-03-15",
    category: "Product Update",
    summary: "OracleDB@Azure expands to 14+ Azure regions worldwide, including new availability in Brazil South and UAE North as preview regions.",
  },
  {
    id: "adb-backup-bp",
    title: "New best practice: Autonomous Database backup strategies on Azure",
    date: "2026-03-10",
    category: "Blog Post",
    summary: "Comprehensive guide covering automatic backups, cross-region Autonomous Data Guard, and Azure Blob Storage archival for long-term retention.",
    link: "/best-practices",
  },
  {
    id: "ama-recap",
    title: "Community AMA with Oracle & Microsoft PMs — March 2026 recap",
    date: "2026-03-08",
    category: "Community",
    summary: "Highlights from the monthly AMA session covering roadmap updates, feature requests, and community questions about OracleDB@Azure.",
    link: "/community",
  },
  {
    id: "agentic-ai-arch",
    title: "Agentic AI reference architecture published in Innovation Hub",
    date: "2026-02-28",
    category: "Blog Post",
    summary: "New reference architecture showing how to build autonomous AI agents using Oracle 23ai vector search and Azure OpenAI on OracleDB@Azure.",
    link: "/innovation-hub",
  },
  {
    id: "exadata-x11m",
    title: "OracleDB@Azure Exadata X11M support announced",
    date: "2026-02-20",
    category: "Product Update",
    summary: "The latest Exadata X11M hardware is now available on Azure, offering up to 2x performance improvement for database workloads.",
  },
  {
    id: "ha-session",
    title: "Session recording: High availability patterns for mission-critical workloads",
    date: "2026-02-15",
    category: "Event",
    summary: "Watch the deep-dive session on HA patterns including Autonomous Data Guard, cross-region failover, and application-level resilience.",
    link: "/sessions",
  },
  {
    id: "terraform-modules",
    title: "Open-source Terraform modules for OracleDB@Azure provisioning",
    date: "2026-02-10",
    category: "Community",
    summary: "Community-contributed Terraform modules for automated provisioning of Autonomous Database and Exadata Cloud on Azure.",
  },
  {
    id: "23ai-vector",
    title: "Oracle 23ai vector search now GA on OracleDB@Azure",
    date: "2026-01-30",
    category: "Product Update",
    summary: "AI Vector Search in Oracle Database 23ai is now generally available on Azure, enabling native vector similarity search alongside SQL queries.",
  },
  {
    id: "cloudworld-cfp",
    title: "Oracle CloudWorld 2026: Call for Papers now open",
    date: "2026-01-25",
    category: "Event",
    summary: "Submit your OracleDB@Azure sessions for Oracle CloudWorld 2026. Topics include migration, AI/ML, security, and performance optimization.",
  },
  {
    id: "mvp-q1",
    title: "Q1 2026 MVP recognition: 3 new community MVPs announced",
    date: "2026-01-15",
    category: "Community",
    summary: "Congratulations to our newest MVPs recognized for their outstanding contributions to the Oracle on Azure community.",
    link: "/mvp-corner",
  },
];

export const newsCategories = ["Product Update", "Community", "Event", "Blog Post"];
