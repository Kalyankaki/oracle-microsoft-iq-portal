"use client";

import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import TagFilter from "@/components/TagFilter";
import Badge from "@/components/Badge";
import { architectures, architectureCategories } from "@/data/architectures";
import { Layers, ChevronDown, ChevronUp } from "lucide-react";

export default function InnovationHubPage() {
  const [category, setCategory] = useState("All");
  const [expanded, setExpanded] = useState<string | null>(null);

  const featured = architectures.find((a) => a.featured);
  const filtered = architectures.filter(
    (a) => category === "All" || a.category === category
  );

  return (
    <>
      <PageHeader
        title="Innovation Hub"
        description="Reference architectures, experiments, and forward-looking patterns for Oracle Database on Azure."
      />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Featured Architecture */}
        {featured && (
          <div className="mb-12 overflow-hidden rounded-xl border border-white/10 bg-surface">
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
                <h2 className="mt-4 text-xl font-bold text-white">{featured.title}</h2>
                <p className="mt-2 text-sm text-muted">{featured.description}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted">{featured.details}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {featured.components.map((c) => (
                    <span key={c} className="rounded-md bg-white/5 px-2 py-0.5 text-xs text-muted">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Filter */}
        <TagFilter
          tags={architectureCategories}
          selected={category}
          onChange={setCategory}
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
                  <h3 className="mt-3 font-semibold text-white">{arch.title}</h3>
                  <p className="mt-1.5 text-sm text-muted">{arch.description}</p>

                  {isExpanded && (
                    <div className="mt-3 border-t border-white/10 pt-3">
                      <p className="text-sm leading-relaxed text-muted">{arch.details}</p>
                    </div>
                  )}

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {arch.components.map((c) => (
                      <span key={c} className="rounded-md bg-white/5 px-2 py-0.5 text-xs text-muted">
                        {c}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setExpanded(isExpanded ? null : arch.id)}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-azure-blue transition-colors hover:text-white"
                  >
                    {isExpanded ? (
                      <>Collapse <ChevronUp className="h-3 w-3" /></>
                    ) : (
                      <>Explore <ChevronDown className="h-3 w-3" /></>
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
