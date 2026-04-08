"use client";

import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import TagFilter from "@/components/TagFilter";
import Badge from "@/components/Badge";
import {
  valueProps,
  competitors,
  comparisonCategories,
  productIdeas,
  productIdeaCategories,
} from "@/data/product-corner";
import {
  Cloud,
  Zap,
  Database,
  Shield,
  Activity,
  Globe,
  Settings,
  DollarSign,
  Lightbulb,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const vpIcons: Record<string, typeof Cloud> = {
  cloud: Cloud,
  zap: Zap,
  database: Database,
  shield: Shield,
  activity: Activity,
  globe: Globe,
  settings: Settings,
  dollar: DollarSign,
};

export default function ProductCornerPage() {
  const [compCategory, setCompCategory] = useState("All");
  const [ideaCategory, setIdeaCategory] = useState("All");
  const [expandedIdea, setExpandedIdea] = useState<string | null>(null);

  const filteredComps = competitors.filter(
    (c) => compCategory === "All" || c.category === compCategory
  );

  const filteredIdeas = productIdeas.filter(
    (i) => ideaCategory === "All" || i.category === ideaCategory
  );

  return (
    <>
      <PageHeader
        title="Product Corner"
        description="Why OracleDB@Azure, how it compares, and where the Oracle + Microsoft partnership can go next."
      />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* ============================================================= */}
        {/* Value Proposition                                               */}
        {/* ============================================================= */}
        <h2 className="text-2xl font-bold text-white">
          Why Oracle Database@Azure?
        </h2>
        <p className="mt-2 max-w-3xl text-sm text-muted">
          The only Oracle Database service running on Exadata hardware inside
          Azure datacenters — with native Azure integration, unified billing,
          and Entra ID federation.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {valueProps.map((vp) => {
            const Icon = vpIcons[vp.icon] || Cloud;
            return (
              <div
                key={vp.id}
                className="rounded-xl border border-white/10 bg-surface p-6 transition-all hover:border-oracle-red/30"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-oracle-red/10">
                  <Icon className="h-5 w-5 text-oracle-red" />
                </div>
                <h3 className="mt-4 font-semibold text-white">{vp.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {vp.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* ============================================================= */}
        {/* Competitive Comparison                                         */}
        {/* ============================================================= */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold text-white">
            Oracle Multicloud Comparison
          </h2>
          <p className="mt-2 max-w-3xl text-sm text-muted">
            How Oracle Database@Azure compares with Oracle Database@AWS and
            Oracle Database@Google Cloud — all three are Oracle-managed Exadata
            services co-located in the respective cloud provider&apos;s datacenters.
          </p>

          <div className="mt-6">
            <TagFilter
              tags={comparisonCategories}
              selected={compCategory}
              onChange={setCompCategory}
            />
          </div>

          {/* Comparison table */}
          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[800px] border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-3 pr-4 text-left text-xs font-semibold uppercase tracking-wider text-muted">
                    Feature
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-oracle-red">
                    OracleDB@Azure
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-yellow-500">
                    OracleDB@AWS
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-blue-400">
                    OracleDB@Google Cloud
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredComps.map((comp, i) => (
                  <tr
                    key={i}
                    className="border-b border-white/5 hover:bg-white/[0.02]"
                  >
                    <td className="py-4 pr-4">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-white">
                          {comp.feature}
                        </span>
                        <Badge>{comp.category}</Badge>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-sm text-green-300/90">
                      {comp.oracleAtAzure}
                    </td>
                    <td className="px-4 py-4 text-sm text-muted">
                      {comp.oracleAtAws}
                    </td>
                    <td className="px-4 py-4 text-sm text-muted">
                      {comp.oracleAtGcp}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-xs text-muted/60">
            Comparison based on publicly available documentation as of April
            2026. Features and availability may change.
          </p>
        </div>

        {/* ============================================================= */}
        {/* Product Ideas                                                  */}
        {/* ============================================================= */}
        <div className="mt-20">
          <div className="flex items-center gap-3">
            <Lightbulb className="h-7 w-7 text-yellow-400" />
            <h2 className="text-2xl font-bold text-white">
              Product Ideas: Better Together
            </h2>
          </div>
          <p className="mt-2 max-w-3xl text-sm text-muted">
            Opportunities for deeper Oracle + Microsoft integration that would
            unlock transformational value for joint customers. These ideas
            represent the community&apos;s vision for where the partnership
            should go next.
          </p>

          <div className="mt-6">
            <TagFilter
              tags={productIdeaCategories}
              selected={ideaCategory}
              onChange={setIdeaCategory}
            />
          </div>

          <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-2">
            {filteredIdeas.map((idea) => {
              const isExpanded = expandedIdea === idea.id;
              return (
                <div
                  key={idea.id}
                  className="flex flex-col rounded-xl border border-white/10 bg-surface transition-all hover:border-yellow-500/30"
                >
                  <div className="flex-1 p-6">
                    <div className="flex items-center gap-2">
                      <Badge variant="yellow">{idea.category}</Badge>
                      <Lightbulb className="h-3.5 w-3.5 text-yellow-400" />
                    </div>

                    <h3 className="mt-3 font-semibold text-white">
                      {idea.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {idea.description}
                    </p>

                    {/* Quick tags */}
                    <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                      <div>
                        <div className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-oracle-red/70">
                          Oracle Products
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {idea.oracleProducts.slice(0, 2).map((p) => (
                            <span
                              key={p}
                              className="rounded bg-oracle-red/5 px-1.5 py-0.5 text-[10px] text-oracle-red/70"
                            >
                              {p}
                            </span>
                          ))}
                          {idea.oracleProducts.length > 2 && (
                            <span className="rounded bg-oracle-red/5 px-1.5 py-0.5 text-[10px] text-oracle-red/70">
                              +{idea.oracleProducts.length - 2}
                            </span>
                          )}
                        </div>
                      </div>
                      <div>
                        <div className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-azure-blue/70">
                          Azure Products
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {idea.azureProducts.slice(0, 2).map((p) => (
                            <span
                              key={p}
                              className="rounded bg-azure-blue/5 px-1.5 py-0.5 text-[10px] text-azure-blue/70"
                            >
                              {p}
                            </span>
                          ))}
                          {idea.azureProducts.length > 2 && (
                            <span className="rounded bg-azure-blue/5 px-1.5 py-0.5 text-[10px] text-azure-blue/70">
                              +{idea.azureProducts.length - 2}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {isExpanded && (
                      <div className="mt-4 space-y-3 border-t border-white/10 pt-4">
                        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                          <div>
                            <div className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-oracle-red">
                              Oracle Products
                            </div>
                            <div className="flex flex-wrap gap-1">
                              {idea.oracleProducts.map((p) => (
                                <span
                                  key={p}
                                  className="rounded-md border border-oracle-red/20 bg-oracle-red/5 px-2 py-0.5 text-xs text-oracle-red/80"
                                >
                                  {p}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div>
                            <div className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-azure-blue">
                              Azure Products
                            </div>
                            <div className="flex flex-wrap gap-1">
                              {idea.azureProducts.map((p) => (
                                <span
                                  key={p}
                                  className="rounded-md border border-azure-blue/20 bg-azure-blue/5 px-2 py-0.5 text-xs text-azure-blue/80"
                                >
                                  {p}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="rounded-lg border border-green-500/20 bg-green-500/5 p-3">
                          <div className="text-xs font-semibold uppercase tracking-wider text-green-400">
                            Customer Value
                          </div>
                          <p className="mt-1 text-sm text-green-300/80">
                            {idea.customerValue}
                          </p>
                        </div>
                      </div>
                    )}

                    <button
                      onClick={() =>
                        setExpandedIdea(isExpanded ? null : idea.id)
                      }
                      className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-yellow-400 transition-colors hover:text-white"
                    >
                      {isExpanded ? (
                        <>
                          Collapse <ChevronUp className="h-3 w-3" />
                        </>
                      ) : (
                        <>
                          See details <ChevronDown className="h-3 w-3" />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-xl border border-white/10 bg-gradient-to-br from-oracle-red/10 via-surface to-azure-blue/10 p-8 text-center">
          <Lightbulb className="mx-auto h-8 w-8 text-yellow-400" />
          <h2 className="mt-4 text-xl font-bold text-white">
            Have a Product Idea?
          </h2>
          <p className="mt-2 text-sm text-muted">
            Share your ideas for how Oracle and Azure products can work better
            together for customers.
          </p>
          <a
            href="mailto:ideas@oracledatabase-azure.com"
            className="mt-4 inline-flex items-center gap-2 rounded-lg bg-oracle-red px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-oracle-red/25 transition-all hover:bg-oracle-red/90"
          >
            Submit an Idea
          </a>
        </div>
      </div>
    </>
  );
}
