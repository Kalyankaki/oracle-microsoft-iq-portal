export interface AIOpsAgent {
  id: string;
  title: string;
  description: string;
  category: string;
  microsoftComponents: string[];
  oracleComponents: string[];
  outcome: string;
  impactMetric: string;
  howItWorks: string[];
  featured?: boolean;
}

export const aiopsAgents: AIOpsAgent[] = [
  {
    id: "performance-auto-tuning",
    title: "Cross-Stack Database Performance Auto-Tuning Agent",
    description:
      "Continuously analyzes Oracle AWR/ASH snapshots and Azure Monitor telemetry to detect SQL regressions, index inefficiencies, and resource bottlenecks — then autonomously applies tuning recommendations across both stacks without DBA intervention.",
    category: "Performance",
    microsoftComponents: [
      "Azure Monitor Metrics",
      "Azure Log Analytics",
      "Azure OpenAI",
      "Azure Functions",
    ],
    oracleComponents: [
      "Oracle AWR / ASH",
      "Oracle SQL Tuning Advisor",
      "Oracle ADDM",
      "Autonomous DB Auto-Indexing",
      "Performance Hub",
    ],
    outcome:
      "Reduces mean time to resolution for SQL performance regressions from hours to minutes. Eliminates 80% of manual DBA tuning tasks by autonomously implementing SQL profiles, creating indexes, and adjusting memory parameters.",
    impactMetric: "70-85% reduction in manual DBA tuning effort",
    howItWorks: [
      "Azure Monitor detects anomalous database response times or ECPU spikes on OracleDB@Azure and triggers the agent via Azure Functions.",
      "The agent queries Oracle AWR snapshots and ASH data through Oracle Enterprise Manager 24ai, correlating SQL execution plan changes with Azure-side application latency metrics from Log Analytics.",
      "Azure OpenAI analyzes the combined telemetry to identify root causes — whether the issue is a SQL regression, missing index, stale statistics, or infrastructure contention.",
      "The agent invokes Oracle SQL Tuning Advisor and ADDM to generate specific recommendations, then applies approved changes: SQL profiles, Autonomous DB auto-indexing hints, or optimizer parameter adjustments.",
      "Results are verified against Azure Monitor baselines. If response times recover, the change is committed; otherwise, it is rolled back automatically and the DBA is alerted with a full diagnostic report.",
    ],
    featured: true,
  },
  {
    id: "predictive-capacity-planning",
    title: "Predictive Capacity Planning & Cost Optimization Agent",
    description:
      "Uses machine learning over historical Oracle resource metrics and Azure cost data to forecast ECPU, storage, and IOPS needs — automatically right-sizing Autonomous Database instances and scheduling scale events to minimize costs while meeting SLAs.",
    category: "Cost & Capacity",
    microsoftComponents: [
      "Azure Monitor Metrics",
      "Azure Cost Management",
      "Azure Advisor",
      "Azure Automation",
      "Azure Log Analytics",
    ],
    oracleComponents: [
      "OCI Monitoring Metrics",
      "Oracle Enterprise Manager 24ai AI Cloud Extensions",
      "Autonomous DB Auto-Scaling",
      "OCI Ops Insights — Capacity Planning",
    ],
    outcome:
      "Prevents capacity-related outages by forecasting resource exhaustion 14-30 days ahead. Reduces Oracle compute costs by 30-50% through intelligent auto-scaling schedules aligned with actual workload patterns.",
    impactMetric: "30-50% Oracle compute cost reduction",
    howItWorks: [
      "EM 24ai AI Cloud Extensions analyze up to 25 months of historical ECPU, storage, and I/O utilization data from OCI Ops Insights Capacity Planning to build forecasting models.",
      "Azure Monitor Metrics and Azure Cost Management data are correlated to map resource consumption to actual spend, identifying cost anomalies and waste patterns.",
      "The agent generates a 30-day capacity forecast and identifies optimal scaling schedules — pre-scaling ECPUs before predictable peak windows (batch jobs, month-end closes) and scaling down during idle periods.",
      "Azure Automation runbooks execute the scaling plan: adjusting Autonomous DB ECPU counts, enabling or disabling auto-scaling thresholds, and updating Azure Advisor recommendations.",
      "Weekly cost reports compare forecast accuracy against actuals and refine the model, with alerts to FinOps teams when spend exceeds predicted budgets by more than 10%.",
    ],
  },
  {
    id: "incident-response",
    title: "Automated Cross-Stack Incident Response Agent",
    description:
      "Correlates alerts from both Azure Monitor and Oracle Enterprise Manager to perform intelligent alert deduplication, root-cause triage, and automated remediation — resolving common database incidents before they page on-call engineers.",
    category: "Incident Response",
    microsoftComponents: [
      "Azure Monitor Alerts",
      "Azure Log Analytics",
      "Azure Automation Runbooks",
      "Azure Event Grid",
      "Azure DevOps Work Items",
    ],
    oracleComponents: [
      "Oracle Enterprise Manager Events",
      "Oracle ADDM",
      "Oracle AWR",
      "Autonomous DB Diagnostics",
      "OCI Notifications",
    ],
    outcome:
      "Reduces MTTR for database incidents from 45 minutes to under 5 minutes. Automatically resolves 60-70% of common incidents (tablespace pressure, session storms, connection pool exhaustion) without human intervention.",
    impactMetric: "90% reduction in MTTR, 65% fewer pages to on-call",
    howItWorks: [
      "Azure Monitor and Oracle EM events stream into Azure Event Grid, where the agent performs intelligent alert correlation — grouping related alerts (e.g., high CPU + slow SQL + app timeout) into a single incident rather than generating alert storms.",
      "The agent queries Oracle ADDM and AWR for database-level diagnostics while simultaneously pulling Azure Log Analytics for application and infrastructure context to build a unified incident timeline.",
      "An AI reasoning engine classifies the incident type and severity, then selects from a library of pre-approved remediation runbooks — killing runaway sessions, extending tablespace, restarting listener processes, or failing over connections.",
      "Azure Automation executes the remediation runbook, coordinating actions across both stacks: adjusting Oracle parameters via Enterprise Manager REST APIs and Azure infrastructure via ARM APIs.",
      "Post-incident, the agent creates an Azure DevOps work item with the full timeline, root cause, remediation steps taken, and prevention recommendations for the SRE team review.",
    ],
  },
  {
    id: "security-threat-detection",
    title: "Unified Security Threat Detection & Response Agent",
    description:
      "Combines Oracle Database audit logs and Data Safe security assessments with Microsoft Sentinel threat intelligence and Defender for Cloud alerts to detect, investigate, and respond to cross-stack security threats targeting database workloads.",
    category: "Security",
    microsoftComponents: [
      "Microsoft Sentinel",
      "Microsoft Defender for Cloud",
      "Azure Arc",
      "Azure Log Analytics",
      "Azure Logic Apps",
    ],
    oracleComponents: [
      "Oracle Data Safe",
      "Oracle Audit Vault",
      "Oracle Database Vault",
      "Oracle SQL Firewall",
      "OCI Logging",
    ],
    outcome:
      "Detects insider threats and SQL injection attacks that span application and database layers, reducing threat detection time from days to seconds. Automates containment — locking compromised accounts and blocking anomalous SQL patterns before data exfiltration occurs.",
    impactMetric: "95% faster threat detection, automated containment in <60 seconds",
    howItWorks: [
      "Oracle Audit Vault streams database audit logs (privileged access, DDL changes, failed logins, data exports) into Azure Log Analytics via OCI Functions, where Microsoft Sentinel ingests them alongside Azure AD sign-in logs and Defender for Cloud alerts.",
      "Sentinel analytics rules correlate cross-stack signals: an Azure AD impossible-travel alert + Oracle audit log showing bulk SELECT on sensitive tables from the same service account triggers a high-severity incident.",
      "Oracle Data Safe security assessments run on schedule, feeding risk scores (configuration drift, excessive privileges, unencrypted columns) into Sentinel workbooks for unified security posture visibility.",
      "When a threat is confirmed, Azure Logic Apps orchestrate the response: Oracle Database Vault locks down the compromised schema, Oracle SQL Firewall blocks the anomalous query pattern, and Defender for Cloud isolates the affected Arc-enabled VM.",
      "A forensic evidence package — including Oracle audit trail extracts, Sentinel investigation graphs, and Data Safe assessment deltas — is automatically assembled for the security team.",
    ],
  },
  {
    id: "dr-testing",
    title: "Automated Disaster Recovery Validation Agent",
    description:
      "Orchestrates end-to-end disaster recovery testing across Oracle Data Guard and Azure infrastructure on a recurring schedule — performing automated failover drills, validating data integrity, measuring RTO/RPO, and generating compliance-ready DR reports.",
    category: "HA/DR",
    microsoftComponents: [
      "Azure Automation",
      "Azure Monitor",
      "Azure Business Continuity Center",
      "Azure DevOps Pipelines",
      "Azure Log Analytics",
    ],
    oracleComponents: [
      "Oracle Data Guard",
      "Oracle Fast-Start Failover",
      "Oracle Data Guard Observer",
      "Oracle RMAN",
      "Autonomous Data Guard",
    ],
    outcome:
      "Ensures DR readiness is continuously validated — not just assumed. Transforms DR testing from a quarterly manual exercise into weekly automated validation, reducing RTO uncertainty from hours to verified minutes.",
    impactMetric: "DR confidence from quarterly manual tests to weekly automated validation",
    howItWorks: [
      "Azure DevOps Pipeline triggers a scheduled DR drill: the agent snapshots current replication lag from Data Guard and verifies Observer health on standby Azure VMs before proceeding.",
      "The agent initiates a controlled Data Guard switchover to the standby database, coordinating with Azure Automation to redirect application connection strings and update Azure Traffic Manager endpoints.",
      "Automated validation queries run against the standby-now-primary database to verify data integrity — checking row counts, recent transaction timestamps, and application health endpoints across both Oracle and Azure layers.",
      "RTO and RPO metrics are measured and recorded in Azure Log Analytics, comparing actual recovery times against SLA targets. Azure Business Continuity Center dashboards update with the test results.",
      "After validation, the agent performs a switchback to the original primary, verifies replication resynchronization, and generates a compliance-ready DR test report stored in Azure DevOps with pass/fail attestation.",
    ],
  },
  {
    id: "migration-orchestration",
    title: "Zero-Downtime Migration Orchestration Agent",
    description:
      "Manages the full lifecycle of Oracle database migrations to OracleDB@Azure — from pre-migration assessment through GoldenGate replication setup, cutover orchestration, and post-migration validation — with automated rollback capabilities at every stage.",
    category: "Migration",
    microsoftComponents: [
      "Azure DevOps Pipelines",
      "Azure Monitor",
      "Azure Log Analytics",
      "Azure Resource Manager",
      "Azure Event Grid",
    ],
    oracleComponents: [
      "Oracle Zero Downtime Migration (ZDM)",
      "Oracle GoldenGate",
      "Oracle Enterprise Manager",
      "Oracle Data Pump",
      "OCI Database Migration Service",
    ],
    outcome:
      "Reduces migration project timelines from months to weeks and eliminates manual cutover errors. Achieves true zero-downtime migrations with verified data consistency and automatic rollback on any validation failure.",
    impactMetric: "60% faster migration timelines, zero data loss",
    howItWorks: [
      "The agent runs Oracle Database Migration Assistant assessments and EM health checks, producing a migration readiness report with compatibility issues, estimated data transfer times, and required configuration changes — all tracked in Azure DevOps.",
      "Azure Resource Manager provisions the target OracleDB@Azure infrastructure (Exadata VM Clusters or Autonomous DB) via Terraform, while the agent configures Oracle GoldenGate replication from source to target.",
      "During active replication, Azure Monitor and EM track replication lag, apply rate, and conflict counts in real time. The agent maintains a migration dashboard in Log Analytics showing convergence toward cutover readiness.",
      "At cutover, the agent coordinates a synchronized sequence: quiescing source applications, confirming GoldenGate zero-lag, switching DNS and connection strings via Azure Traffic Manager, and validating application connectivity to the new target.",
      "Post-migration, automated validation compares row counts, checksums, and application test suites. If any validation fails, the agent triggers an automatic rollback via GoldenGate reverse replication — no data is lost.",
    ],
  },
  {
    id: "compliance-audit",
    title: "Compliance & Audit Automation Agent",
    description:
      "Continuously assesses compliance posture across Oracle Data Safe findings, Microsoft Purview data classifications, and Defender for Cloud regulatory benchmarks — auto-remediating drift, generating audit evidence, and maintaining continuous compliance for GDPR, SOX, HIPAA, and PCI-DSS.",
    category: "Security",
    microsoftComponents: [
      "Microsoft Purview",
      "Microsoft Defender for Cloud — Regulatory Compliance",
      "Azure Policy",
      "Azure Log Analytics",
      "Azure Automation",
    ],
    oracleComponents: [
      "Oracle Data Safe — Security Assessment",
      "Oracle Data Safe — Data Discovery",
      "Oracle Data Safe — Data Masking",
      "Oracle Audit Vault",
      "Oracle Database Vault",
    ],
    outcome:
      "Maintains continuous compliance instead of point-in-time audits. Reduces audit preparation from weeks to hours by automatically assembling evidence packages. Auto-remediates 80% of compliance drift before it becomes a finding.",
    impactMetric: "90% reduction in audit preparation time",
    howItWorks: [
      "Oracle Data Safe runs scheduled security assessments and sensitive data discovery scans, identifying configuration drift (unencrypted columns, excessive privileges, disabled auditing) and newly created sensitive data stores.",
      "Microsoft Purview scans Oracle databases via self-hosted integration runtimes, classifying sensitive data with 300+ built-in classifiers and applying sensitivity labels that sync with Data Safe's data discovery findings.",
      "The agent correlates Data Safe risk findings with Defender for Cloud regulatory compliance scores (SOX, HIPAA, PCI-DSS), creating a unified compliance dashboard that maps specific Oracle configurations to regulatory control requirements.",
      "Azure Automation runbooks execute auto-remediation for common drift: enabling TDE on unencrypted tablespaces, revoking excessive grants via Oracle Database Vault policy updates, and enabling fine-grained auditing on newly discovered sensitive columns.",
      "At audit time, the agent assembles a complete evidence package: Data Safe assessment history, Purview classification reports, Defender compliance scores, Oracle audit trails, and remediation action logs — all timestamped and ready for external auditors.",
    ],
  },
  {
    id: "cost-optimization",
    title: "Intelligent Cost Optimization Agent",
    description:
      "Analyzes Oracle ECPU utilization patterns, storage growth trends, and Azure spend data to identify waste, recommend reserved capacity purchases, schedule non-production shutdowns, and dynamically right-size database instances — saving 30-50% on Oracle cloud costs.",
    category: "Cost & Capacity",
    microsoftComponents: [
      "Azure Cost Management + Billing",
      "Azure Advisor",
      "Azure Automation",
      "Azure Monitor Metrics",
      "Azure Logic Apps",
    ],
    oracleComponents: [
      "Autonomous DB ECPU Auto-Scaling",
      "OCI Cost Analysis",
      "Oracle Enterprise Manager Resource Analytics",
      "OCI Monitoring",
    ],
    outcome:
      "Identifies and eliminates Oracle infrastructure waste: idle dev/test databases running 24/7, over-provisioned production ECPUs, and orphaned storage volumes. Typical savings of $500K-$2M annually for large Oracle estates.",
    impactMetric: "$500K-$2M annual savings on Oracle infrastructure",
    howItWorks: [
      "The agent collects 90 days of ECPU utilization from OCI Monitoring and Azure Monitor, identifying databases where peak utilization is consistently below 40% of provisioned capacity — prime candidates for right-sizing.",
      "Azure Cost Management data is correlated with Oracle resource tags to build a cost-per-workload model, revealing which applications are over-spending relative to their business value.",
      "For non-production environments, Azure Automation schedules database stop/start based on working hours and team calendars, eliminating 65% of dev/test compute costs with zero developer friction.",
      "The agent analyzes usage patterns to recommend reserved capacity vs. on-demand purchasing, modeling break-even points and projecting 1-year and 3-year savings scenarios for FinOps review.",
      "Weekly cost optimization reports are delivered via Azure Logic Apps with specific actionable recommendations, savings achieved to date, and trend analysis showing cost trajectory.",
    ],
  },
  {
    id: "patch-upgrade",
    title: "Patch & Upgrade Orchestration Agent",
    description:
      "Coordinates Oracle database patching and quarterly PSU/RU updates with Azure infrastructure maintenance windows — automating pre-patch validation, rolling patch application across Data Guard configurations, and post-patch regression testing across both stacks.",
    category: "Operations",
    microsoftComponents: [
      "Azure Update Manager",
      "Azure Automation",
      "Azure DevOps Pipelines",
      "Azure Monitor",
      "Azure Log Analytics",
    ],
    oracleComponents: [
      "Oracle OPatchAuto",
      "Oracle AutoUpgrade",
      "Oracle Enterprise Manager Patch Plans",
      "Oracle Data Guard (rolling upgrades)",
      "Oracle SQL Performance Analyzer (SPA)",
    ],
    outcome:
      "Reduces quarterly patching cycles from multi-day change windows to hours. Eliminates patching-related outages by validating every patch in a Data Guard rolling upgrade pattern with automated regression testing.",
    impactMetric: "80% reduction in patching window, zero patching-related outages",
    howItWorks: [
      "Oracle Enterprise Manager Patch Plans identify required patches (PSUs, security patches, one-offs) across the Oracle fleet. Azure Update Manager queues corresponding OS and infrastructure patches. The agent merges both into a unified maintenance calendar.",
      "Pre-patch validation runs automatically: Oracle SQL Performance Analyzer captures a baseline SQL workload, Azure Monitor records infrastructure baselines, and the agent verifies Data Guard standby synchronization health.",
      "The agent applies patches in a rolling fashion: patching the Data Guard standby first via OPatchAuto, performing a switchover, then patching the former primary — achieving zero downtime through the entire process.",
      "Post-patch, Oracle SPA replays the captured SQL workload against the patched database and compares execution plans. Azure DevOps Pipeline runs application integration tests. Any regression triggers automatic rollback before production traffic is restored.",
      "A patch compliance report is generated showing patch currency across the entire Oracle fleet, stored in Azure Log Analytics for governance dashboards and audit evidence.",
    ],
  },
  {
    id: "root-cause-analysis",
    title: "Cross-Stack Root Cause Analysis Agent",
    description:
      "When a complex outage spans Oracle database, Azure networking, and application layers, this agent automatically collects diagnostics from all three stacks, builds a causal event timeline, and pinpoints the root cause — turning hours-long war rooms into minutes-long investigations.",
    category: "Incident Response",
    microsoftComponents: [
      "Azure Log Analytics (KQL)",
      "Azure Monitor — Application Insights",
      "Azure Network Watcher",
      "Azure OpenAI",
      "Azure Dashboards",
    ],
    oracleComponents: [
      "Oracle AWR / ASH Reports",
      "Oracle ADDM Findings",
      "Oracle Alert Log",
      "Oracle Enterprise Manager Diagnostics",
      "OCI Logging Analytics",
    ],
    outcome:
      "Eliminates finger-pointing between infrastructure, DBA, and application teams during outages. Reduces root cause identification from hours of war-room debugging to an automated 3-5 minute diagnostic report with causal chain and evidence.",
    impactMetric: "95% faster root cause identification",
    howItWorks: [
      "When an incident is declared, the agent simultaneously collects Oracle AWR/ASH data (wait events, SQL execution plans, session activity), Azure Log Analytics queries (application errors, network latency, VM health), and Azure Network Watcher flow logs.",
      "All diagnostic data is normalized into a unified timeline in Azure Log Analytics using KQL, correlating Oracle wait events with Azure network drops, application error spikes, and infrastructure events to establish causation — not just correlation.",
      "Azure OpenAI analyzes the unified timeline to generate a natural-language root cause hypothesis, ranking potential causes by likelihood: e.g., 'Network micro-burst at 14:32 caused Oracle log writer stalls, which cascaded into application connection timeouts.'",
      "The agent generates an interactive Root Cause Analysis dashboard in Azure Dashboards, showing the causal chain from infrastructure event to database impact to application symptoms, with links to supporting evidence in both Oracle EM and Azure Monitor.",
      "Historical RCA reports are stored and indexed, building an organizational knowledge base that improves future diagnosis accuracy. The agent learns from past incidents to accelerate future triage of similar patterns.",
    ],
  },
];

export const aiopsCategories = [
  "Performance",
  "Cost & Capacity",
  "Incident Response",
  "Security",
  "HA/DR",
  "Migration",
  "Operations",
];
