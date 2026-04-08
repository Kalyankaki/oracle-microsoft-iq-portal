"use client";

import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import TagFilter from "@/components/TagFilter";
import RegionCard from "@/components/RegionCard";
import { regions, geographies } from "@/data/regions";

export default function AvailabilityPage() {
  const [filter, setFilter] = useState("All");

  const totalRegions = regions.length;
  const dualAzCount = regions.filter((r) => r.availability === "Dual").length;
  const fullServiceCount = regions.filter((r) => r.services.length >= 6).length;

  const filtered =
    filter === "All"
      ? regions
      : filter === "Multi-AZ"
        ? regions.filter((r) => r.availability === "Dual")
        : filter === "Full Service"
          ? regions.filter((r) => r.services.length >= 6)
          : geographies.includes(filter)
            ? regions.filter((r) => r.geography === filter)
            : regions;

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
        description="Oracle Database@Azure is generally available across 33 Azure regions worldwide, co-located in Azure datacenters with low-latency VNet connectivity."
      />

      {/* Status summary */}
      <div className="border-b border-white/10 bg-surface">
        <div className="mx-auto grid max-w-7xl grid-cols-3 gap-4 px-4 py-6 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-2xl font-bold text-white">{totalRegions}</div>
            <div className="text-xs text-muted">Total Regions (All GA)</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-azure-blue">{dualAzCount}</div>
            <div className="text-xs text-muted">Multi-AZ Regions</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400">{fullServiceCount}</div>
            <div className="text-xs text-muted">Full Service Regions</div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Services legend */}
        <div className="mb-6 rounded-lg border border-white/10 bg-surface p-4">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-muted">Services available on OracleDB@Azure</h3>
          <div className="mt-2 flex flex-wrap gap-2 text-xs text-muted">
            <span className="rounded bg-white/5 px-2 py-1">Exadata Dedicated</span>
            <span className="rounded bg-white/5 px-2 py-1">Autonomous DB Dedicated</span>
            <span className="rounded bg-white/5 px-2 py-1">Autonomous DB@Azure</span>
            <span className="rounded bg-white/5 px-2 py-1">Recovery Service</span>
            <span className="rounded bg-white/5 px-2 py-1">Exascale</span>
            <span className="rounded bg-white/5 px-2 py-1">Base DB</span>
            <span className="rounded bg-white/5 px-2 py-1">GoldenGate</span>
          </div>
        </div>

        <TagFilter
          tags={["Multi-AZ", "Full Service", ...geographies]}
          selected={filter}
          onChange={setFilter}
        />

        <div className="mt-8 space-y-10">
          {groupedByGeo.map((group) => (
            <div key={group.geography}>
              <h2 className="mb-4 text-lg font-semibold text-white">
                {group.geography}
                <span className="ml-2 text-sm font-normal text-muted">
                  ({group.regions.length} region{group.regions.length !== 1 ? "s" : ""})
                </span>
              </h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {group.regions.map((region) => (
                  <RegionCard
                    key={region.name}
                    name={region.name}
                    ociRegion={region.ociRegion}
                    location={region.location}
                    status={region.status}
                    services={region.services}
                    availability={region.availability}
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

        {/* Source attribution */}
        <div className="mt-8 text-center text-xs text-muted">
          Source:{" "}
          <a
            href="https://learn.microsoft.com/en-us/azure/oracle/oracle-db/oracle-database-regions"
            target="_blank"
            rel="noopener noreferrer"
            className="text-azure-blue hover:text-white"
          >
            Microsoft Learn — Region availability for Oracle Database@Azure
          </a>
        </div>
      </div>
    </>
  );
}
