import Badge from "@/components/Badge";
import { MapPin } from "lucide-react";

interface RegionCardProps {
  name: string;
  ociRegion?: string;
  location: string;
  status: "GA" | "Preview" | "Coming Soon";
  services: string[];
  availability?: "Dual" | "Single" | "DR";
}

const statusVariant = {
  GA: "green" as const,
  Preview: "yellow" as const,
  "Coming Soon": "purple" as const,
};

export default function RegionCard({
  name,
  ociRegion,
  location,
  status,
  services,
  availability,
}: RegionCardProps) {
  return (
    <div className="rounded-xl border border-white/10 bg-surface p-5 transition-all hover:border-white/20">
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-azure-blue" />
          <h3 className="font-semibold text-white">{name}</h3>
        </div>
        <div className="flex items-center gap-1.5">
          {availability && (
            <Badge variant={availability === "Dual" ? "azure" : "default"}>
              {availability === "Dual" ? "Multi-AZ" : availability === "Single" ? "Single AZ" : "DR"}
            </Badge>
          )}
          <Badge variant={statusVariant[status]}>{status}</Badge>
        </div>
      </div>
      <p className="mt-1 text-xs text-muted">{location}</p>
      {ociRegion && (
        <p className="mt-0.5 text-xs text-muted/60">
          OCI: {ociRegion}
        </p>
      )}
      <div className="mt-3 flex flex-wrap gap-1.5">
        {services.map((service) => (
          <span
            key={service}
            className="rounded-md bg-white/5 px-2 py-0.5 text-xs text-muted"
          >
            {service}
          </span>
        ))}
      </div>
    </div>
  );
}
