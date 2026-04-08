"use client";

import { useState } from "react";
import { BookOpen, Shield, Cpu, Network, Database, Activity } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import SearchBar from "@/components/SearchBar";
import TagFilter from "@/components/TagFilter";
import Badge from "@/components/Badge";
import { bestPractices, categories } from "@/data/best-practices";

const categoryIcons: Record<string, typeof BookOpen> = {
  Deployment: Database,
  Performance: Cpu,
  Security: Shield,
  Networking: Network,
  Backup: Database,
  Monitoring: Activity,
};

const difficultyVariant = {
  Beginner: "green" as const,
  Intermediate: "yellow" as const,
  Advanced: "oracle" as const,
};

export default function BestPracticesPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered = bestPractices.filter((bp) => {
    const matchesSearch =
      search === "" ||
      bp.title.toLowerCase().includes(search.toLowerCase()) ||
      bp.description.toLowerCase().includes(search.toLowerCase()) ||
      bp.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
    const matchesCategory = category === "All" || bp.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <PageHeader
        title="Best Practices"
        description="Curated guides for deploying, securing, and optimizing Oracle Database on Azure."
      />
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="w-full sm:max-w-sm">
            <SearchBar
              value={search}
              onChange={setSearch}
              placeholder="Search best practices..."
            />
          </div>
          <TagFilter tags={categories} selected={category} onChange={setCategory} />
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((bp) => {
            const Icon = categoryIcons[bp.category] || BookOpen;
            const isExpanded = expanded === bp.id;
            return (
              <div
                key={bp.id}
                onClick={() => setExpanded(isExpanded ? null : bp.id)}
                className="group flex cursor-pointer flex-col rounded-xl border border-white/10 bg-surface p-6 transition-all hover:border-white/20 hover:bg-white/5"
              >
                <div className="flex items-center gap-3">
                  <Icon className="h-5 w-5 flex-shrink-0 text-azure-blue" />
                  <Badge variant={difficultyVariant[bp.difficulty]}>
                    {bp.difficulty}
                  </Badge>
                  <Badge>{bp.category}</Badge>
                </div>
                <h3 className="mt-3 font-semibold text-white">{bp.title}</h3>
                <p className="mt-1.5 text-sm text-muted">{bp.description}</p>

                {isExpanded && (
                  <div className="mt-4 border-t border-white/10 pt-4">
                    <p className="text-sm leading-relaxed text-muted">
                      {bp.content}
                    </p>
                  </div>
                )}

                <div className="mt-3 flex flex-wrap gap-1.5">
                  {bp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-white/5 px-2 py-0.5 text-xs text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="mt-4 text-sm font-medium text-azure-blue transition-colors group-hover:text-white">
                  {isExpanded ? "Collapse ↑" : "Read more →"}
                </span>
              </div>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <div className="mt-12 text-center">
            <p className="text-muted">No best practices match your search.</p>
          </div>
        )}
      </div>
    </>
  );
}
