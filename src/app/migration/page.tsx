"use client";

import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import TagFilter from "@/components/TagFilter";
import Badge from "@/components/Badge";
import { migrationGuides, sourcePlatforms } from "@/data/migration-guides";
import { ArrowRight, CheckCircle, ClipboardCheck } from "lucide-react";

const complexityVariant = {
  Low: "green" as const,
  Medium: "yellow" as const,
  High: "oracle" as const,
};

export default function MigrationPage() {
  const [source, setSource] = useState("All");
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered = migrationGuides.filter(
    (g) => source === "All" || g.source === source
  );

  return (
    <>
      <PageHeader
        title="Migration Guides"
        description="Step-by-step guides for migrating Oracle Database workloads to Azure from any source platform."
      />

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <TagFilter
          tags={sourcePlatforms}
          selected={source}
          onChange={setSource}
        />

        <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-2">
          {filtered.map((guide) => {
            const isExpanded = expanded === guide.id;
            return (
              <div
                key={guide.id}
                className="flex flex-col rounded-xl border border-white/10 bg-surface p-6 transition-all hover:border-white/20"
              >
                {/* Source → Target */}
                <div className="flex items-center gap-2 text-sm">
                  <span className="rounded-md bg-white/10 px-2 py-1 font-medium text-white">
                    {guide.source}
                  </span>
                  <ArrowRight className="h-4 w-4 text-muted" />
                  <span className="rounded-md bg-azure-blue/20 px-2 py-1 font-medium text-azure-blue">
                    {guide.target}
                  </span>
                </div>

                <h3 className="mt-3 font-semibold text-white">{guide.title}</h3>
                <p className="mt-1.5 text-sm text-muted">{guide.description}</p>

                <div className="mt-3 flex items-center gap-3">
                  <Badge variant={complexityVariant[guide.complexity]}>
                    {guide.complexity} Complexity
                  </Badge>
                  <span className="text-xs text-muted">
                    Est. {guide.estimatedEffort}
                  </span>
                </div>

                {isExpanded && (
                  <div className="mt-4 border-t border-white/10 pt-4">
                    <p className="text-xs font-medium uppercase tracking-wider text-azure-blue">
                      Migration Steps
                    </p>
                    <ol className="mt-2 space-y-2">
                      {guide.steps.map((step, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-400" />
                          <span className="text-muted">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                )}

                <div className="mt-3 flex flex-wrap gap-1.5">
                  {guide.tags.map((tag) => (
                    <span key={tag} className="rounded-md bg-white/5 px-2 py-0.5 text-xs text-muted">
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setExpanded(isExpanded ? null : guide.id)}
                  className="mt-4 text-left text-sm font-medium text-azure-blue transition-colors hover:text-white"
                >
                  {isExpanded ? "Collapse ↑" : "View Steps →"}
                </button>
              </div>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <div className="mt-12 text-center">
            <p className="text-muted">No migration guides match the selected filter.</p>
          </div>
        )}

        {/* Migration Assessment CTA */}
        <div className="mt-12 rounded-xl border border-white/10 bg-gradient-to-br from-oracle-red/10 via-surface to-azure-blue/10 p-8 text-center">
          <ClipboardCheck className="mx-auto h-8 w-8 text-azure-blue" />
          <h2 className="mt-4 text-xl font-bold text-white">
            Need a Migration Assessment?
          </h2>
          <p className="mt-2 text-sm text-muted">
            Get a detailed assessment of your Oracle workloads and a customized
            migration plan for OracleDB@Azure.
          </p>
          <a
            href="mailto:migration@oracledatabase-azure.com"
            className="mt-4 inline-flex items-center gap-2 rounded-lg bg-azure-blue px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-azure-blue/25 transition-all hover:bg-azure-blue/90"
          >
            Request Assessment
          </a>
        </div>
      </div>
    </>
  );
}
