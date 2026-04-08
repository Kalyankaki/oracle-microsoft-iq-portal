"use client";

import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import TagFilter from "@/components/TagFilter";
import Badge from "@/components/Badge";
import { Network, Database, Shield, Cloud, MonitorDot } from "lucide-react";

const patternCategories = ["Networking", "Compute", "Storage", "Identity", "Monitoring"];

const categoryIcons: Record<string, typeof Network> = {
  Networking: Network,
  Compute: Cloud,
  Storage: Database,
  Identity: Shield,
  Monitoring: MonitorDot,
};

interface Pattern {
  id: string;
  name: string;
  category: string;
  whenToUse: string;
  components: string[];
  description: string;
}

const patterns: Pattern[] = [
  {
    id: "hub-spoke-vnet",
    name: "Hub-Spoke VNet Topology",
    category: "Networking",
    whenToUse: "When you need centralized network management with isolated Oracle workloads in spoke VNets.",
    components: ["Azure VNet", "VNet Peering", "Azure Firewall", "OracleDB@Azure Delegated Subnet"],
    description: "Deploy OracleDB@Azure in a spoke VNet peered to a central hub. The hub contains shared services like Azure Firewall, VPN Gateway, and DNS. This pattern isolates Oracle traffic while enabling centralized security and connectivity management.",
  },
  {
    id: "private-only-access",
    name: "Private-Only Database Access",
    category: "Networking",
    whenToUse: "When all database access must stay on the Azure backbone with no public internet exposure.",
    components: ["Private Link", "Private DNS Zones", "NSGs", "Service Endpoints"],
    description: "Ensure all Oracle database traffic flows over private networks. Use Azure Private Link for management APIs, configure Private DNS zones for name resolution, and apply NSG rules to restrict access to specific application subnets.",
  },
  {
    id: "auto-scaling-compute",
    name: "Auto-Scaling Autonomous Database",
    category: "Compute",
    whenToUse: "When workloads have variable compute demands and you want cost-optimized OCPU allocation.",
    components: ["Autonomous Database", "Auto-Scaling", "Azure Monitor", "Alerts"],
    description: "Enable auto-scaling on Autonomous Database to automatically adjust OCPU count based on workload demand. Configure Azure Monitor alerts to track scaling events. Set maximum OCPU limits to control costs while ensuring performance during peak periods.",
  },
  {
    id: "tiered-storage",
    name: "Tiered Storage Strategy",
    category: "Storage",
    whenToUse: "When you need to optimize storage costs across hot, warm, and cold data tiers.",
    components: ["Autonomous DB", "Azure Blob Storage", "DBMS_CLOUD", "Object Storage"],
    description: "Keep frequently accessed data in Autonomous Database for low-latency queries. Archive historical data to Azure Blob Storage using DBMS_CLOUD package. Use external tables to query archived data directly from object storage without loading it back into the database.",
  },
  {
    id: "azure-ad-sso",
    name: "Azure AD Single Sign-On",
    category: "Identity",
    whenToUse: "When you want centralized identity management and SSO for Oracle database access.",
    components: ["Azure AD", "Oracle Database", "OAuth2", "Token-Based Auth"],
    description: "Integrate Oracle Database authentication with Azure Active Directory. Users authenticate via Azure AD and receive OAuth2 tokens that are validated by the database. This eliminates database-local passwords and enables MFA, conditional access, and centralized audit logging.",
  },
  {
    id: "unified-monitoring",
    name: "Unified Monitoring Dashboard",
    category: "Monitoring",
    whenToUse: "When you need a single pane of glass for Oracle database and Azure infrastructure metrics.",
    components: ["Azure Monitor", "Log Analytics", "Oracle Enterprise Manager", "Grafana"],
    description: "Combine Oracle database metrics from OCI Monitoring with Azure infrastructure metrics in Azure Monitor. Create unified dashboards in Azure Workbooks or Grafana. Configure cross-platform alerts for database performance, availability, and capacity thresholds.",
  },
];

export default function ArchitecturePage() {
  const [category, setCategory] = useState("All");

  const filtered = patterns.filter(
    (p) => category === "All" || p.category === category
  );

  return (
    <>
      <PageHeader
        title="Architecture Patterns"
        description="Proven architecture patterns and decision records for Oracle Database on Azure deployments."
      />

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <TagFilter
          tags={patternCategories}
          selected={category}
          onChange={setCategory}
        />

        <div className="mt-8 space-y-4">
          {filtered.map((pattern) => {
            const Icon = categoryIcons[pattern.category] || Network;
            return (
              <div
                key={pattern.id}
                className="rounded-xl border border-white/10 bg-surface p-6 transition-all hover:border-white/20"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-azure-blue/10">
                    <Icon className="h-5 w-5 text-azure-blue" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-white">{pattern.name}</h3>
                      <Badge>{pattern.category}</Badge>
                    </div>
                    <p className="mt-2 text-sm text-muted">{pattern.description}</p>

                    <div className="mt-3 rounded-lg bg-charcoal p-3">
                      <p className="text-xs font-medium text-azure-blue">When to use</p>
                      <p className="mt-1 text-sm text-muted">{pattern.whenToUse}</p>
                    </div>

                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {pattern.components.map((c) => (
                        <span key={c} className="rounded-md bg-white/5 px-2 py-0.5 text-xs text-muted">
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <div className="mt-12 text-center">
            <p className="text-muted">No patterns match the selected filter.</p>
          </div>
        )}

        {/* Link to Innovation Hub */}
        <div className="mt-12 rounded-xl border border-white/10 bg-surface p-6 text-center">
          <p className="text-muted">
            Looking for complete reference architectures?
          </p>
          <a
            href="/innovation-hub"
            className="mt-2 inline-block text-sm font-medium text-azure-blue hover:text-white"
          >
            Visit the Innovation Hub →
          </a>
        </div>
      </div>
    </>
  );
}
