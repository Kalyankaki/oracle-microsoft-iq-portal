"use client";

import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import TagFilter from "@/components/TagFilter";
import RegionCard from "@/components/RegionCard";
import { regions, geographies } from "@/data/regions";

export default function AvailabilityPage() {
  const [filter, setFilter] = useState("All");

  const gaCount = regions.filter((r) => r.status === "GA").length;
  const previewCount = regions.filter((r) => r.status === "Preview").length;

  const filtered =
    filter === "All"
      ? regions
      : filter === "GA" || filter === "Preview" || filter === "Coming Soon"
        ? regions.filter((r) => r.status === filter)
        : regions.filter((r) => r.geography === filter);

  const groupedByGeo = geographies
    .map((geo) => ({
      geography: geo,
      regions: filtered.filter((r) => r.geography === geo),
    }))
    .filter((g) => g.regions.length > 0);

  return (
    <>
      <PageHeader
        title="Region Availability"
        description="Check Oracle Database@Azure availability across Azure regions worldwide."
      />

      {/* Status summary */}
      <div className="border-b border-white/10 bg-surface">
        <div className="mx-auto grid max-w-7xl grid-cols-3 gap-4 px-4 py-6 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-2xl font-bold text-white">{regions.length}</div>
            <div className="text-xs text-muted">Total Regions</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400">{gaCount}</div>
            <div className="text-xs text-muted">Generally Available</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-400">{previewCount}</div>
            <div className="text-xs text-muted">Preview</div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <TagFilter
          tags={["GA", "Preview", "Coming Soon", ...geographies]}
          selected={filter}
          onChange={setFilter}
        />

        <div className="mt-8 space-y-10">
          {groupedByGeo.map((group) => (
            <div key={group.geography}>
              <h2 className="mb-4 text-lg font-semibold text-white">
                {group.geography}
              </h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {group.regions.map((region) => (
                  <RegionCard
                    key={region.name}
                    name={region.name}
                    location={region.location}
                    status={region.status}
                    services={region.services}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="mt-12 text-center">
            <p className="text-muted">No regions match the selected filter.</p>
          </div>
        )}
      </div>
    </>
  );
}
