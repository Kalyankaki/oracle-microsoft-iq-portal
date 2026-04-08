export interface KnowledgeWorkerAgent {
  id: string;
  title: string;
  description: string;
  category: string;
  microsoftComponents: string[];
  oracleComponents: string[];
  businessOutcome: string;
  impactMetric: string;
  howItWorks: string[];
  featured?: boolean;
}

export const knowledgeWorkerAgents: KnowledgeWorkerAgent[] = [
  {
    id: "financial-close-accelerator",
    title: "Autonomous Financial Close & Reporting Agent",
    description:
      "Orchestrates the month-end financial close across Oracle ERP Cloud and Microsoft 365, automatically reconciling sub-ledgers, generating variance analyses in Excel via Copilot, flagging anomalies using Azure OpenAI, and producing board-ready financial narratives — reducing close cycles from 10 days to 3.",
    category: "Finance",
    microsoftComponents: [
      "Microsoft Copilot for Finance",
      "Azure OpenAI (GPT-4o)",
      "Microsoft Excel + Copilot",
      "Power Automate",
      "Microsoft Teams",
    ],
    oracleComponents: [
      "Oracle ERP Cloud — General Ledger",
      "Oracle ERP Cloud — Subledger Accounting",
      "Oracle Autonomous Database 23ai",
      "Oracle Analytics Cloud",
      "Oracle APEX",
    ],
    businessOutcome:
      "Compresses month-end close from 10+ days to 3 days. Eliminates 85% of manual journal entry reconciliations. Surfaces financial anomalies before they become audit findings.",
    impactMetric: "70% faster financial close cycle",
    howItWorks: [
      "At period-end, the agent triggers Oracle ERP Cloud subledger close processes and monitors completion, pulling real-time status from Oracle GL into an APEX dashboard visible to the controller team.",
      "Azure OpenAI analyzes transaction patterns in Oracle Autonomous Database 23ai using AI Vector Search over historical close data, automatically flagging unusual journal entries, intercompany mismatches, and variance outliers that exceed learned thresholds.",
      "Copilot for Finance generates variance analysis workbooks in Excel, pulling live data from Oracle ERP Cloud via Power Automate connectors and auto-populating commentary templates with natural-language explanations of material variances.",
      "The agent posts close status updates and blocker alerts to Microsoft Teams channels, tagging the appropriate accountant when their reconciliation task is pending, and auto-escalating overdue items to the CFO's Copilot summary.",
      "Once all reconciliations clear, Oracle Analytics Cloud produces the board reporting package while Azure OpenAI generates the executive financial narrative — both auto-assembled into a PowerPoint deck via Copilot.",
    ],
    featured: true,
  },
  {
    id: "talent-intelligence",
    title: "Cross-Platform Talent Intelligence & Retention Agent",
    description:
      "Combines Oracle HCM Cloud workforce data with Microsoft 365 collaboration signals and Viva Insights engagement metrics to predict flight risk, recommend personalized retention actions, and automate talent reviews — turning HR from reactive to predictive.",
    category: "HR & Talent",
    microsoftComponents: [
      "Microsoft Viva Insights",
      "Microsoft Copilot for M365",
      "Azure OpenAI",
      "Microsoft Teams",
      "Power BI",
    ],
    oracleComponents: [
      "Oracle HCM Cloud — Talent Management",
      "Oracle HCM Cloud — Workforce Compensation",
      "Oracle Autonomous Database 23ai",
      "Oracle AI Vector Search",
    ],
    businessOutcome:
      "Reduces voluntary attrition by 25-35% in high-value roles by surfacing flight risk signals 90 days before resignation. Saves $15K-$50K per prevented departure in replacement costs.",
    impactMetric: "25-35% reduction in voluntary attrition",
    howItWorks: [
      "Oracle HCM Cloud provides structured workforce data — tenure, compensation benchmarks, performance ratings, promotion velocity, and skills inventory — stored in Oracle Autonomous Database 23ai.",
      "Microsoft Viva Insights contributes behavioral signals — meeting overload, after-hours work patterns, network breadth changes, and manager 1:1 frequency — all anonymized and aggregated to protect privacy.",
      "Azure OpenAI builds a multi-factor flight-risk model combining both data streams, using AI Vector Search to find similar historical patterns of employees who left, generating a risk score and top contributing factors for each individual.",
      "When risk exceeds threshold, the agent generates personalized retention recommendations (compensation adjustment, role change, learning opportunity) and surfaces them to the HRBP via Teams with one-click action buttons connected to Oracle HCM workflows.",
      "Power BI dashboards provide executive visibility into retention health by department, role, and geography — with drill-through from Oracle HCM compensation data to Viva engagement metrics for evidence-based talent reviews.",
    ],
  },
  {
    id: "supply-chain-resilience",
    title: "Predictive Supply Chain Resilience Agent",
    description:
      "Monitors Oracle SCM Cloud supply chain data alongside Azure AI-powered external risk signals (geopolitical, weather, supplier financial health) to predict disruptions before they hit, automatically triggering alternative sourcing workflows and updating demand plans.",
    category: "Supply Chain",
    microsoftComponents: [
      "Azure OpenAI",
      "Azure Maps",
      "Microsoft Copilot for M365",
      "Power Automate",
      "Microsoft Fabric",
    ],
    oracleComponents: [
      "Oracle SCM Cloud — Supply Planning",
      "Oracle SCM Cloud — Procurement",
      "Oracle SCM Cloud — Order Management",
      "Oracle Autonomous Database 23ai",
      "Oracle GoldenGate",
    ],
    businessOutcome:
      "Prevents $10M-$50M in annual revenue loss from supply disruptions by detecting risks 2-4 weeks earlier than traditional monitoring. Reduces emergency procurement costs by 40%.",
    impactMetric: "2-4 weeks earlier disruption detection",
    howItWorks: [
      "Oracle GoldenGate streams real-time supply chain events (PO status changes, shipment delays, inventory level alerts) from Oracle SCM Cloud into Microsoft Fabric for unified analytics alongside external data sources.",
      "Azure OpenAI continuously analyzes external risk signals — news feeds for geopolitical events, weather APIs via Azure Maps for logistics routes, and supplier financial filings — correlating them with Oracle SCM supplier and route data.",
      "When the agent identifies a high-probability disruption (port closure, supplier insolvency, weather event), it queries Oracle SCM Supply Planning for alternative suppliers and routes, scoring options by cost, lead time, and reliability.",
      "Power Automate triggers alternative sourcing workflows in Oracle Procurement Cloud, creating emergency POs with pre-approved suppliers. The procurement team receives a Teams notification with the disruption analysis and recommended actions.",
      "Copilot generates an executive supply risk briefing combining Fabric analytics with Oracle SCM impact assessment — showing affected orders, revenue at risk, and mitigation status in real time.",
    ],
  },
  {
    id: "revenue-intelligence",
    title: "Revenue Intelligence & Deal Acceleration Agent",
    description:
      "Unifies Oracle CX Cloud opportunity data with Microsoft Dynamics 365 Sales insights and Teams communication signals to score deals, identify stalled opportunities, auto-generate proposals, and coach sales reps with AI-driven next-best-actions.",
    category: "Sales & CRM",
    microsoftComponents: [
      "Microsoft Copilot for Sales",
      "Dynamics 365 Sales Insights",
      "Azure OpenAI",
      "Microsoft Teams",
      "Power BI",
    ],
    oracleComponents: [
      "Oracle CX Cloud — Sales",
      "Oracle CPQ Cloud",
      "Oracle Autonomous Database 23ai",
      "Oracle AI Vector Search",
    ],
    businessOutcome:
      "Increases win rates by 15-20% through AI-guided selling. Accelerates average deal cycle by 25% through automated proposal generation and proactive stall detection.",
    impactMetric: "15-20% increase in win rates",
    howItWorks: [
      "Oracle CX Cloud provides the deal pipeline — opportunity stages, product configurations, pricing history, and customer interaction logs — while Dynamics 365 Sales Insights contributes email engagement analytics and relationship health scores.",
      "Oracle AI Vector Search matches the current deal against the corpus of historical won/lost deals stored in Autonomous Database 23ai, identifying which deal characteristics and engagement patterns correlate with winning outcomes.",
      "Azure OpenAI generates a deal health score combining both data streams, flagging stalled deals (no customer engagement in 14+ days, champion gone silent, competitor mentions in emails) and recommending specific next-best-actions for the rep.",
      "When a deal advances to proposal stage, the agent pulls product configurations from Oracle CPQ Cloud and auto-generates a customized proposal document via Copilot, pre-populated with competitive positioning and ROI calculations.",
      "Sales leadership gets Power BI dashboards showing pipeline health, forecast accuracy (comparing Oracle CX pipeline to Dynamics 365 predictive forecasts), and coaching insights — identifying which rep behaviors drive the highest conversion rates.",
    ],
  },
  {
    id: "contract-compliance",
    title: "Intelligent Contract Compliance & Risk Agent",
    description:
      "Analyzes contracts stored across Oracle ERP Cloud and Microsoft SharePoint using Azure OpenAI to extract obligations, monitor compliance deadlines, detect unfavorable terms, and auto-route renewals — preventing revenue leakage and compliance penalties.",
    category: "Legal & Compliance",
    microsoftComponents: [
      "Azure OpenAI (GPT-4o)",
      "Microsoft SharePoint",
      "Microsoft Purview",
      "Power Automate",
      "Microsoft Teams",
    ],
    oracleComponents: [
      "Oracle ERP Cloud — Contracts",
      "Oracle Procurement Cloud",
      "Oracle Autonomous Database 23ai",
      "Oracle AI Vector Search",
      "Oracle APEX",
    ],
    businessOutcome:
      "Recovers 2-5% of contract value through proactive obligation tracking and penalty avoidance. Reduces contract review time by 60% through AI-powered clause analysis.",
    impactMetric: "2-5% contract value recovery, 60% faster reviews",
    howItWorks: [
      "The agent ingests contracts from Oracle ERP Cloud Contracts module and SharePoint document libraries, using Azure OpenAI to extract key clauses, obligations, SLA commitments, penalty triggers, and renewal terms into structured data in Oracle Autonomous Database 23ai.",
      "Oracle AI Vector Search enables semantic matching — finding similar clauses across thousands of contracts to identify inconsistencies, detect non-standard terms, and benchmark pricing against historical agreements.",
      "Microsoft Purview classifies contracts by sensitivity and regulatory relevance, while the agent monitors compliance deadlines and SLA metrics from Oracle ERP, alerting stakeholders via Teams 30/60/90 days before critical dates.",
      "When obligations are at risk (e.g., delivery SLA approaching threshold), Power Automate triggers remediation workflows in Oracle ERP or Procurement Cloud and escalates to the legal team with a Copilot-generated risk summary.",
      "An Oracle APEX dashboard provides the CLO with portfolio-wide contract health: total obligation value, upcoming renewals, detected risks, and auto-renewal opt-out deadlines — all sourced from the unified Oracle + Microsoft data layer.",
    ],
  },
  {
    id: "procurement-optimization",
    title: "Autonomous Procurement & Spend Intelligence Agent",
    description:
      "Analyzes spend patterns across Oracle Procurement Cloud and Azure cost data, identifies maverick spending, recommends consolidated purchasing opportunities, auto-generates RFQs, and negotiates with suppliers using AI-powered insights.",
    category: "Procurement",
    microsoftComponents: [
      "Microsoft Copilot for M365",
      "Azure OpenAI",
      "Power BI",
      "Power Automate",
      "Microsoft Teams",
    ],
    oracleComponents: [
      "Oracle Procurement Cloud",
      "Oracle ERP Cloud — Accounts Payable",
      "Oracle Supplier Qualification Mgmt",
      "Oracle Autonomous Database 23ai",
    ],
    businessOutcome:
      "Reduces procurement costs by 8-15% through spend consolidation and maverick spend elimination. Cuts RFQ cycle time by 50% through AI-generated specifications and automated supplier matching.",
    impactMetric: "8-15% procurement cost reduction",
    howItWorks: [
      "Oracle Procurement Cloud and AP data flows into Autonomous Database 23ai for unified spend analytics — categorizing spend by supplier, commodity, business unit, and contract compliance status.",
      "Azure OpenAI analyzes spend patterns to identify consolidation opportunities (multiple BUs buying the same commodity from different suppliers), maverick spending (purchases outside negotiated contracts), and price anomalies.",
      "When a consolidation opportunity is identified, the agent auto-generates an RFQ in Oracle Procurement Cloud with AI-drafted specifications, leveraging Copilot to pull market intelligence and benchmark pricing data.",
      "Power BI dashboards give the CPO real-time spend visibility with drill-through from high-level category spend to individual Oracle PO line items, with Teams alerts when spend categories exceed budget thresholds.",
      "Post-award, the agent monitors supplier performance in Oracle Supplier Qualification Management, triggering automated scorecards and escalation workflows when delivery or quality KPIs fall below contractual targets.",
    ],
  },
  {
    id: "customer-experience",
    title: "Omnichannel Customer Experience Orchestration Agent",
    description:
      "Unifies customer context from Oracle CX Service Cloud with Microsoft Teams, Dynamics 365 Customer Service, and Azure Bot Service to provide agents with a 360-degree customer view, predict case escalations, and automate resolutions — increasing CSAT by 20+ points.",
    category: "Customer Service",
    microsoftComponents: [
      "Azure Bot Service",
      "Azure OpenAI",
      "Dynamics 365 Customer Service",
      "Microsoft Teams",
      "Power Virtual Agents",
    ],
    oracleComponents: [
      "Oracle CX Cloud — Service",
      "Oracle Autonomous Database 23ai",
      "Oracle AI Vector Search",
      "Oracle Digital Assistant",
      "Oracle APEX",
    ],
    businessOutcome:
      "Increases first-contact resolution by 35%. Reduces average handle time by 40% through AI-powered agent assist. Predicts escalations with 85% accuracy, enabling proactive intervention.",
    impactMetric: "35% increase in first-contact resolution",
    howItWorks: [
      "When a customer contacts support, the agent assembles a 360-degree context view: Oracle CX Service history (past cases, entitlements, SLAs), order data from Oracle ERP, and recent digital interactions from Dynamics 365 Customer Service — all in under 2 seconds.",
      "Oracle AI Vector Search finds semantically similar past cases in Autonomous Database 23ai, surfacing resolution steps that worked for similar issues. Azure OpenAI generates a recommended response draft for the service agent, adapted to the customer's specific context.",
      "Azure Bot Service and Oracle Digital Assistant handle Tier-0 inquiries across channels (web, Teams, voice), escalating to human agents with full conversation context when complexity exceeds the bot's confidence threshold.",
      "The agent predicts likely escalation using signals from both platforms — customer sentiment from conversation analysis, SLA proximity from Oracle CX, and account health from Dynamics 365 — alerting supervisors before the customer asks to escalate.",
      "An APEX-powered service operations dashboard provides real-time queue health, agent performance, and CSAT trends, while Power Virtual Agents enable internal IT support across Microsoft Teams using the same AI knowledge base.",
    ],
  },
  {
    id: "executive-decision-copilot",
    title: "CEO/CFO Decision Intelligence Copilot",
    description:
      "Synthesizes enterprise data from Oracle ERP/HCM/SCM Cloud with Microsoft Fabric analytics and Azure OpenAI to give executives natural-language answers to complex business questions, real-time KPI dashboards, and scenario modeling — replacing months of analyst work with instant insights.",
    category: "Executive Intelligence",
    microsoftComponents: [
      "Microsoft Fabric",
      "Azure OpenAI (GPT-4o)",
      "Microsoft Copilot for Power BI",
      "Microsoft Teams",
      "Microsoft Excel",
    ],
    oracleComponents: [
      "Oracle ERP Cloud — Financials",
      "Oracle HCM Cloud",
      "Oracle SCM Cloud",
      "Oracle Analytics Cloud",
      "Oracle Autonomous Database 23ai",
    ],
    businessOutcome:
      "Enables executives to get answers to complex cross-functional questions in seconds instead of requesting analyst reports that take days. Improves strategic decision speed by 10x.",
    impactMetric: "10x faster strategic decision-making",
    howItWorks: [
      "Oracle GoldenGate streams real-time transactional data from Oracle ERP, HCM, and SCM Cloud into Microsoft Fabric's OneLake, creating a unified semantic model spanning financial, workforce, and supply chain domains.",
      "Azure OpenAI provides a natural-language interface: the CEO asks 'What's our profitability by product line excluding the China region, and how would a 15% tariff impact margins?' — the agent decomposes this into queries across Fabric and Oracle Analytics Cloud.",
      "Oracle Autonomous Database 23ai handles complex analytical queries (multi-dimensional aggregations, historical trend analysis) while Fabric handles cross-source joins and real-time streaming analytics — each system plays to its strengths.",
      "Copilot for Power BI auto-generates interactive dashboards and scenario models, embedding live Oracle ERP data alongside Fabric-computed metrics. Executives can ask follow-up questions in natural language directly within the Power BI interface.",
      "Key decisions and their supporting analyses are automatically documented in Teams, creating an auditable trail of data-driven decision-making for the board and regulatory requirements.",
    ],
  },
  {
    id: "itsm-resolution",
    title: "Intelligent IT Service Management Agent",
    description:
      "Automates IT service desk operations by correlating Oracle-powered business application context with Azure DevOps work items, auto-diagnosing issues using AI analysis of logs from both stacks, and resolving common incidents without human intervention.",
    category: "IT Operations",
    microsoftComponents: [
      "Azure DevOps",
      "Azure Monitor — Application Insights",
      "Azure OpenAI",
      "Microsoft Teams",
      "Power Automate",
    ],
    oracleComponents: [
      "Oracle Enterprise Manager",
      "Oracle APEX (self-service portal)",
      "Oracle Autonomous Database 23ai",
      "Oracle Cloud Infrastructure Logging",
    ],
    businessOutcome:
      "Resolves 45% of IT tickets automatically without human intervention. Reduces mean time to resolution by 65%. Frees IT staff from repetitive troubleshooting to focus on strategic initiatives.",
    impactMetric: "45% tickets auto-resolved, 65% faster MTTR",
    howItWorks: [
      "When a user reports an issue via Teams, the agent classifies it using Azure OpenAI and correlates with Oracle Enterprise Manager health data and Application Insights telemetry to determine if it's a database, application, or infrastructure issue.",
      "For Oracle application issues, the agent queries Enterprise Manager for recent changes (deployments, patches, config changes) and Autonomous Database 23ai for slow-query logs, building a causal timeline visible in Azure DevOps.",
      "Common resolutions are automated: resetting passwords via Power Automate + Oracle identity workflows, restarting application services, clearing Oracle session locks, or scaling Azure resources — all with full audit trail in DevOps work items.",
      "For novel issues, Azure OpenAI searches the knowledge base in Oracle Autonomous Database 23ai using AI Vector Search to find similar past incidents and resolutions, presenting the IT analyst with ranked diagnostic suggestions and resolution playbooks.",
      "An Oracle APEX self-service portal gives users real-time ticket status and AI-recommended self-help articles, reducing inbound ticket volume by 30% while Teams integration keeps requestors informed of resolution progress.",
    ],
  },
  {
    id: "product-innovation",
    title: "Product Innovation & Market Intelligence Agent",
    description:
      "Mines customer feedback from Oracle CX Cloud, support case patterns in Autonomous Database, and market signals via Azure OpenAI to identify product improvement opportunities, predict feature demand, and generate data-driven product roadmap recommendations.",
    category: "Product Development",
    microsoftComponents: [
      "Azure OpenAI",
      "Microsoft Fabric",
      "Azure Cognitive Services",
      "Power BI",
      "Microsoft Teams",
    ],
    oracleComponents: [
      "Oracle CX Cloud — Service (case data)",
      "Oracle Autonomous Database 23ai",
      "Oracle AI Vector Search",
      "Oracle Analytics Cloud",
      "Oracle APEX",
    ],
    businessOutcome:
      "Accelerates product innovation cycles by 40% through data-driven prioritization. Surfaces unmet customer needs 6 months earlier than traditional feedback loops, increasing product-market fit.",
    impactMetric: "40% faster innovation cycles",
    howItWorks: [
      "Oracle CX Cloud service cases, feature requests, and NPS survey data are streamed into Autonomous Database 23ai. Azure Cognitive Services processes unstructured feedback (call transcripts, email sentiment, social mentions) and stores embeddings for vector search.",
      "Oracle AI Vector Search clusters similar feedback themes across thousands of cases, identifying recurring pain points and feature gaps that individual case reviews would miss — e.g., 'users in manufacturing vertical repeatedly struggle with batch scheduling.'",
      "Azure OpenAI synthesizes the clustered feedback with competitive intelligence (patent filings, competitor release notes, analyst reports in Fabric) to generate opportunity scores: how big is the unmet need, how many customers are affected, what's the revenue impact.",
      "The agent produces a data-driven product roadmap recommendation in Power BI, ranking features by customer impact × revenue potential × development effort, with direct links to supporting Oracle CX cases and Fabric market analyses.",
      "Product managers receive weekly innovation briefings in Teams with Copilot-generated summaries of emerging customer needs, competitive moves, and recommended prioritization changes — all traceable back to real customer data in Oracle CX.",
    ],
  },
];

export const knowledgeWorkerCategories = [
  "Finance",
  "HR & Talent",
  "Supply Chain",
  "Sales & CRM",
  "Legal & Compliance",
  "Procurement",
  "Customer Service",
  "Executive Intelligence",
  "IT Operations",
  "Product Development",
];
