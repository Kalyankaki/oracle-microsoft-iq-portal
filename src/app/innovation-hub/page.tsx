"use client";

import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import TagFilter from "@/components/TagFilter";
import Badge from "@/components/Badge";
import { architectures, architectureCategories } from "@/data/architectures";
import { aiopsAgents, aiopsCategories } from "@/data/aiops-agents";
import {
  knowledgeWorkerAgents,
  knowledgeWorkerCategories,
} from "@/data/knowledge-worker-agents";
import {
  Layers,
  ChevronDown,
  ChevronUp,
  Bot,
  Zap,
  Shield,
  Activity,
  TrendingDown,
  Server,
  Briefcase,
  DollarSign,
  Users,
  Package,
  Gavel,
  ShoppingCart,
  Headphones,
  BarChart3,
  Wrench,
  Lightbulb,
} from "lucide-react";

const kwIcons: Record<string, typeof Bot> = {
  Finance: DollarSign,
  "HR & Talent": Users,
  "Supply Chain": Package,
  "Sales & CRM": BarChart3,
  "Legal & Compliance": Gavel,
  Procurement: ShoppingCart,
  "Customer Service": Headphones,
  "Executive Intelligence": Briefcase,
  "IT Operations": Wrench,
  "Product Development": Lightbulb,
};

const domainIcons: Record<string, typeof Bot> = {
  Performance: Activity,
  "Cost & Capacity": TrendingDown,
  "Incident Response": Zap,
  Security: Shield,
  "HA/DR": Server,
  Migration: Layers,
  Operations: Server,
};

export default function InnovationHubPage() {
  const [category, setCategory] = useState("All");
  const [kwCategory, setKwCategory] = useState("All");
  const [archCategory, setArchCategory] = useState("All");
  const [expanded, setExpanded] = useState<string | null>(null);
  const [expandedAgent, setExpandedAgent] = useState<string | null>(null);
  const [expandedKw, setExpandedKw] = useState<string | null>(null);

  const featured = architectures.find((a) => a.featured);
  const filtered = architectures.filter(
    (a) => archCategory === "All" || a.category === archCategory
  );

  const featuredAgent = aiopsAgents.find((a) => a.featured);
  const filteredAgents = aiopsAgents.filter(
    (a) => category === "All" || a.category === category
  );

  const featuredKw = knowledgeWorkerAgents.find((a) => a.featured);
  const filteredKw = knowledgeWorkerAgents.filter(
    (a) => kwCategory === "All" || a.category === kwCategory
  );

  return (
    <>
      <PageHeader
        title="Innovation Hub"
        description="AIOps agentic AI use cases, reference architectures, and forward-looking patterns for Oracle Database on Azure."
      />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* ============================================================= */}
        {/* AIOps Agentic AI Section                                       */}
        {/* ============================================================= */}
        <div className="mb-4 flex items-center gap-3">
          <Bot className="h-7 w-7 text-purple-400" />
          <h2 className="text-2xl font-bold text-white">
            AIOps Agentic AI Use Cases
          </h2>
        </div>
        <p className="mb-8 max-w-3xl text-sm leading-relaxed text-muted">
          Autonomous agents that span both the Microsoft operations stack (Azure
          Monitor, Sentinel, Defender, Log Analytics) and the Oracle operations
          stack (Enterprise Manager, Data Safe, Data Guard, AWR/ASH) to
          automate complex operational scenarios across OracleDB@Azure.
        </p>

        {/* Featured Agent */}
        {featuredAgent && (
          <div className="mb-10 overflow-hidden rounded-xl border border-purple-500/20 bg-gradient-to-br from-purple-500/5 via-surface to-azure-blue/5">
            <div className="flex flex-col lg:flex-row">
              {/* Visual */}
              <div className="relative h-64 w-full lg:h-auto lg:min-h-[340px] lg:w-5/12">
                <div className="absolute inset-0 bg-gradient-to-br from-oracle-red/20 via-purple-600/30 to-azure-blue/20" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,_var(--tw-gradient-stops))] from-oracle-red/15 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,_var(--tw-gradient-stops))] from-azure-blue/15 via-transparent to-transparent" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                  <Bot className="mb-3 h-12 w-12 text-purple-400" />
                  <div className="font-mono text-xs uppercase tracking-widest text-purple-300/70">
                    Featured AIOps Agent
                  </div>
                  <div className="mt-2 text-lg font-bold text-white">
                    {featuredAgent.title}
                  </div>
                  <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
                    <span className="text-xs font-medium text-green-400">
                      {featuredAgent.impactMetric}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center p-8 lg:w-7/12">
                <div className="flex items-center gap-2">
                  <Badge variant="purple">AIOps Agent</Badge>
                  <Badge variant="oracle">Featured</Badge>
                </div>
                <h3 className="mt-4 text-xl font-bold text-white">
                  {featuredAgent.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {featuredAgent.description}
                </p>

                <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div>
                    <div className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-oracle-red">
                      Oracle Stack
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {featuredAgent.oracleComponents.map((c) => (
                        <span
                          key={c}
                          className="rounded-md border border-oracle-red/20 bg-oracle-red/5 px-2 py-0.5 text-xs text-oracle-red/80"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-azure-blue">
                      Microsoft Stack
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {featuredAgent.microsoftComponents.map((c) => (
                        <span
                          key={c}
                          className="rounded-md border border-azure-blue/20 bg-azure-blue/5 px-2 py-0.5 text-xs text-azure-blue/80"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-4 rounded-lg border border-green-500/20 bg-green-500/5 p-3">
                  <div className="text-xs font-semibold uppercase tracking-wider text-green-400">
                    Operational Impact
                  </div>
                  <p className="mt-1 text-sm text-green-300/80">
                    {featuredAgent.outcome}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Agent Filter */}
        <TagFilter
          tags={aiopsCategories}
          selected={category}
          onChange={setCategory}
        />

        {/* Agent Grid */}
        <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {filteredAgents.map((agent) => {
            const isExpanded = expandedAgent === agent.id;
            const DomainIcon = domainIcons[agent.category] || Bot;
            return (
              <div
                key={agent.id}
                className="flex flex-col rounded-xl border border-white/10 bg-surface transition-all hover:border-purple-500/30"
              >
                {/* Header */}
                <div className="flex items-start gap-4 p-6 pb-0">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-purple-500/10">
                    <DomainIcon className="h-5 w-5 text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge variant="purple">{agent.category}</Badge>
                      {agent.featured && <Badge variant="oracle">Featured</Badge>}
                    </div>
                    <h3 className="mt-2 font-semibold text-white">
                      {agent.title}
                    </h3>
                  </div>
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col p-6 pt-3">
                  <p className="text-sm leading-relaxed text-muted">
                    {agent.description}
                  </p>

                  {/* Impact pill */}
                  <div className="mt-3 inline-flex self-start items-center gap-2 rounded-full border border-green-500/20 bg-green-500/5 px-3 py-1">
                    <Zap className="h-3 w-3 text-green-400" />
                    <span className="text-xs font-medium text-green-400">
                      {agent.impactMetric}
                    </span>
                  </div>

                  {/* Component tags */}
                  <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                    <div>
                      <div className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-oracle-red/70">
                        Oracle
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {agent.oracleComponents.slice(0, 3).map((c) => (
                          <span
                            key={c}
                            className="rounded bg-oracle-red/5 px-1.5 py-0.5 text-[10px] text-oracle-red/70"
                          >
                            {c}
                          </span>
                        ))}
                        {agent.oracleComponents.length > 3 && (
                          <span className="rounded bg-oracle-red/5 px-1.5 py-0.5 text-[10px] text-oracle-red/70">
                            +{agent.oracleComponents.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                    <div>
                      <div className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-azure-blue/70">
                        Azure
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {agent.microsoftComponents.slice(0, 3).map((c) => (
                          <span
                            key={c}
                            className="rounded bg-azure-blue/5 px-1.5 py-0.5 text-[10px] text-azure-blue/70"
                          >
                            {c}
                          </span>
                        ))}
                        {agent.microsoftComponents.length > 3 && (
                          <span className="rounded bg-azure-blue/5 px-1.5 py-0.5 text-[10px] text-azure-blue/70">
                            +{agent.microsoftComponents.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Expanded: How it works */}
                  {isExpanded && (
                    <div className="mt-4 space-y-4 border-t border-white/10 pt-4">
                      {/* Full component lists */}
                      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        <div>
                          <div className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-oracle-red">
                            Oracle Components
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {agent.oracleComponents.map((c) => (
                              <span
                                key={c}
                                className="rounded-md border border-oracle-red/20 bg-oracle-red/5 px-2 py-0.5 text-xs text-oracle-red/80"
                              >
                                {c}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <div className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-azure-blue">
                            Microsoft Components
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {agent.microsoftComponents.map((c) => (
                              <span
                                key={c}
                                className="rounded-md border border-azure-blue/20 bg-azure-blue/5 px-2 py-0.5 text-xs text-azure-blue/80"
                              >
                                {c}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Outcome */}
                      <div className="rounded-lg border border-green-500/20 bg-green-500/5 p-3">
                        <div className="text-xs font-semibold uppercase tracking-wider text-green-400">
                          Operational Impact
                        </div>
                        <p className="mt-1 text-sm text-green-300/80">
                          {agent.outcome}
                        </p>
                      </div>

                      {/* How it works */}
                      <div>
                        <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-purple-400">
                          How It Works
                        </div>
                        <ol className="space-y-2">
                          {agent.howItWorks.map((step, i) => (
                            <li key={i} className="flex gap-3 text-sm text-muted">
                              <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-purple-500/20 text-xs font-bold text-purple-400">
                                {i + 1}
                              </span>
                              <span className="leading-relaxed">{step}</span>
                            </li>
                          ))}
                        </ol>
                      </div>
                    </div>
                  )}

                  {/* Toggle */}
                  <button
                    onClick={() =>
                      setExpandedAgent(isExpanded ? null : agent.id)
                    }
                    className="mt-4 inline-flex items-center gap-1 self-start text-sm font-medium text-purple-400 transition-colors hover:text-white"
                  >
                    {isExpanded ? (
                      <>
                        Collapse <ChevronUp className="h-3 w-3" />
                      </>
                    ) : (
                      <>
                        How it works <ChevronDown className="h-3 w-3" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* ============================================================= */}
        {/* Divider                                                        */}
        {/* ============================================================= */}
        <div className="my-16 border-t border-white/10" />

        {/* ============================================================= */}
        {/* Knowledge Worker Agentic AI Section                            */}
        {/* ============================================================= */}
        <div className="mb-4 flex items-center gap-3">
          <Briefcase className="h-7 w-7 text-azure-blue" />
          <h2 className="text-2xl font-bold text-white">
            Knowledge Worker Agent Use Cases
          </h2>
        </div>
        <p className="mb-8 max-w-3xl text-sm leading-relaxed text-muted">
          Agents that span the Microsoft productivity stack (Copilot, M365,
          Fabric, Dynamics 365, Power Platform) and the Oracle applications stack
          (ERP Cloud, HCM Cloud, SCM Cloud, CX Cloud, Autonomous Database 23ai)
          to drive transformational business outcomes.
        </p>

        {/* Featured KW Agent */}
        {featuredKw && (
          <div className="mb-10 overflow-hidden rounded-xl border border-azure-blue/20 bg-gradient-to-br from-azure-blue/5 via-surface to-oracle-red/5">
            <div className="flex flex-col lg:flex-row">
              <div className="relative h-64 w-full lg:h-auto lg:min-h-[340px] lg:w-5/12">
                <div className="absolute inset-0 bg-gradient-to-br from-azure-blue/20 via-purple-600/15 to-oracle-red/20" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,_var(--tw-gradient-stops))] from-azure-blue/15 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,_var(--tw-gradient-stops))] from-oracle-red/15 via-transparent to-transparent" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                  <Briefcase className="mb-3 h-12 w-12 text-azure-blue" />
                  <div className="font-mono text-xs uppercase tracking-widest text-azure-blue/70">
                    Featured Knowledge Worker Agent
                  </div>
                  <div className="mt-2 text-lg font-bold text-white">
                    {featuredKw.title}
                  </div>
                  <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
                    <span className="text-xs font-medium text-green-400">
                      {featuredKw.impactMetric}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center p-8 lg:w-7/12">
                <div className="flex items-center gap-2">
                  <Badge variant="azure">Knowledge Worker</Badge>
                  <Badge variant="oracle">Featured</Badge>
                </div>
                <h3 className="mt-4 text-xl font-bold text-white">
                  {featuredKw.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {featuredKw.description}
                </p>
                <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div>
                    <div className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-oracle-red">
                      Oracle Stack
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {featuredKw.oracleComponents.map((c) => (
                        <span key={c} className="rounded-md border border-oracle-red/20 bg-oracle-red/5 px-2 py-0.5 text-xs text-oracle-red/80">
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-azure-blue">
                      Microsoft Stack
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {featuredKw.microsoftComponents.map((c) => (
                        <span key={c} className="rounded-md border border-azure-blue/20 bg-azure-blue/5 px-2 py-0.5 text-xs text-azure-blue/80">
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-4 rounded-lg border border-green-500/20 bg-green-500/5 p-3">
                  <div className="text-xs font-semibold uppercase tracking-wider text-green-400">
                    Business Outcome
                  </div>
                  <p className="mt-1 text-sm text-green-300/80">{featuredKw.businessOutcome}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* KW Filter */}
        <TagFilter
          tags={knowledgeWorkerCategories}
          selected={kwCategory}
          onChange={setKwCategory}
        />

        {/* KW Agent Grid */}
        <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {filteredKw.map((agent) => {
            const isExp = expandedKw === agent.id;
            const KwIcon = kwIcons[agent.category] || Briefcase;
            return (
              <div key={agent.id} className="flex flex-col rounded-xl border border-white/10 bg-surface transition-all hover:border-azure-blue/30">
                <div className="flex items-start gap-4 p-6 pb-0">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-azure-blue/10">
                    <KwIcon className="h-5 w-5 text-azure-blue" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge variant="azure">{agent.category}</Badge>
                      {agent.featured && <Badge variant="oracle">Featured</Badge>}
                    </div>
                    <h3 className="mt-2 font-semibold text-white">{agent.title}</h3>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6 pt-3">
                  <p className="text-sm leading-relaxed text-muted">{agent.description}</p>
                  <div className="mt-3 inline-flex self-start items-center gap-2 rounded-full border border-green-500/20 bg-green-500/5 px-3 py-1">
                    <Zap className="h-3 w-3 text-green-400" />
                    <span className="text-xs font-medium text-green-400">{agent.impactMetric}</span>
                  </div>

                  <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                    <div>
                      <div className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-oracle-red/70">Oracle</div>
                      <div className="flex flex-wrap gap-1">
                        {agent.oracleComponents.slice(0, 3).map((c) => (
                          <span key={c} className="rounded bg-oracle-red/5 px-1.5 py-0.5 text-[10px] text-oracle-red/70">{c}</span>
                        ))}
                        {agent.oracleComponents.length > 3 && (
                          <span className="rounded bg-oracle-red/5 px-1.5 py-0.5 text-[10px] text-oracle-red/70">+{agent.oracleComponents.length - 3} more</span>
                        )}
                      </div>
                    </div>
                    <div>
                      <div className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-azure-blue/70">Azure</div>
                      <div className="flex flex-wrap gap-1">
                        {agent.microsoftComponents.slice(0, 3).map((c) => (
                          <span key={c} className="rounded bg-azure-blue/5 px-1.5 py-0.5 text-[10px] text-azure-blue/70">{c}</span>
                        ))}
                        {agent.microsoftComponents.length > 3 && (
                          <span className="rounded bg-azure-blue/5 px-1.5 py-0.5 text-[10px] text-azure-blue/70">+{agent.microsoftComponents.length - 3} more</span>
                        )}
                      </div>
                    </div>
                  </div>

                  {isExp && (
                    <div className="mt-4 space-y-4 border-t border-white/10 pt-4">
                      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        <div>
                          <div className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-oracle-red">Oracle Components</div>
                          <div className="flex flex-wrap gap-1">{agent.oracleComponents.map((c) => (<span key={c} className="rounded-md border border-oracle-red/20 bg-oracle-red/5 px-2 py-0.5 text-xs text-oracle-red/80">{c}</span>))}</div>
                        </div>
                        <div>
                          <div className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-azure-blue">Microsoft Components</div>
                          <div className="flex flex-wrap gap-1">{agent.microsoftComponents.map((c) => (<span key={c} className="rounded-md border border-azure-blue/20 bg-azure-blue/5 px-2 py-0.5 text-xs text-azure-blue/80">{c}</span>))}</div>
                        </div>
                      </div>
                      <div className="rounded-lg border border-green-500/20 bg-green-500/5 p-3">
                        <div className="text-xs font-semibold uppercase tracking-wider text-green-400">Business Outcome</div>
                        <p className="mt-1 text-sm text-green-300/80">{agent.businessOutcome}</p>
                      </div>
                      <div>
                        <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-azure-blue">How It Works</div>
                        <ol className="space-y-2">
                          {agent.howItWorks.map((step, i) => (
                            <li key={i} className="flex gap-3 text-sm text-muted">
                              <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-azure-blue/20 text-xs font-bold text-azure-blue">{i + 1}</span>
                              <span className="leading-relaxed">{step}</span>
                            </li>
                          ))}
                        </ol>
                      </div>
                    </div>
                  )}

                  <button onClick={() => setExpandedKw(isExp ? null : agent.id)} className="mt-4 inline-flex items-center gap-1 self-start text-sm font-medium text-azure-blue transition-colors hover:text-white">
                    {isExp ? (<>Collapse <ChevronUp className="h-3 w-3" /></>) : (<>How it works <ChevronDown className="h-3 w-3" /></>)}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* ============================================================= */}
        {/* Divider                                                        */}
        {/* ============================================================= */}
        <div className="my-16 border-t border-white/10" />

        {/* ============================================================= */}
        {/* Reference Architectures Section (existing)                     */}
        {/* ============================================================= */}
        <div className="mb-4 flex items-center gap-3">
          <Layers className="h-7 w-7 text-azure-blue" />
          <h2 className="text-2xl font-bold text-white">
            Reference Architectures
          </h2>
        </div>
        <p className="mb-8 max-w-3xl text-sm text-muted">
          Proven architecture patterns for deploying Oracle Database on Azure
          across AI/ML, high availability, security, and migration scenarios.
        </p>

        {/* Featured Architecture */}
        {featured && (
          <div className="mb-10 overflow-hidden rounded-xl border border-white/10 bg-surface">
            <div className="flex flex-col lg:flex-row">
              <div className="relative h-64 w-full lg:h-auto lg:min-h-[280px] lg:w-1/2">
                <div className="absolute inset-0 bg-gradient-to-br from-oracle-red/30 via-purple-600/20 to-azure-blue/30" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_var(--tw-gradient-stops))] from-oracle-red/20 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,_var(--tw-gradient-stops))] from-azure-blue/20 via-transparent to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="font-mono text-xs uppercase tracking-widest text-white/60">
                      Featured Architecture
                    </div>
                    <div className="mt-2 text-lg font-bold text-white">
                      {featured.title}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center p-8 lg:w-1/2">
                <Badge variant="oracle">Featured</Badge>
                <h2 className="mt-4 text-xl font-bold text-white">
                  {featured.title}
                </h2>
                <p className="mt-2 text-sm text-muted">
                  {featured.description}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {featured.details}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {featured.components.map((c) => (
                    <span
                      key={c}
                      className="rounded-md bg-white/5 px-2 py-0.5 text-xs text-muted"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Architecture Filter */}
        <TagFilter
          tags={architectureCategories}
          selected={archCategory}
          onChange={setArchCategory}
        />

        {/* Architecture grid */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((arch) => {
            const isExpanded = expanded === arch.id;
            return (
              <div
                key={arch.id}
                className="flex flex-col rounded-xl border border-white/10 bg-surface transition-all hover:border-white/20"
              >
                {/* Gradient thumbnail */}
                <div className="relative h-40 w-full overflow-hidden rounded-t-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-oracle-red/20 via-surface to-azure-blue/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Layers className="h-8 w-8 text-white/40" />
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center gap-2">
                    <Badge variant="azure">{arch.category}</Badge>
                    {arch.featured && <Badge variant="oracle">Featured</Badge>}
                  </div>
                  <h3 className="mt-3 font-semibold text-white">
                    {arch.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-muted">
                    {arch.description}
                  </p>

                  {isExpanded && (
                    <div className="mt-3 border-t border-white/10 pt-3">
                      <p className="text-sm leading-relaxed text-muted">
                        {arch.details}
                      </p>
                    </div>
                  )}

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {arch.components.map((c) => (
                      <span
                        key={c}
                        className="rounded-md bg-white/5 px-2 py-0.5 text-xs text-muted"
                      >
                        {c}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setExpanded(isExpanded ? null : arch.id)}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-azure-blue transition-colors hover:text-white"
                  >
                    {isExpanded ? (
                      <>
                        Collapse <ChevronUp className="h-3 w-3" />
                      </>
                    ) : (
                      <>
                        Explore <ChevronDown className="h-3 w-3" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
