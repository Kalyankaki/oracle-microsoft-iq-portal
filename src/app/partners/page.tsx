import PageHeader from "@/components/PageHeader";
import Badge from "@/components/Badge";
import { partners, partnerTiers } from "@/data/partners";
import { ExternalLink, Handshake } from "lucide-react";

const tierVariant = {
  Strategic: "oracle" as const,
  Technology: "azure" as const,
  Community: "green" as const,
};

export default function PartnersPage() {
  return (
    <>
      <PageHeader
        title="Partners"
        description="Organizations and communities powering the Oracle Database on Azure ecosystem."
      />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {partnerTiers.map((tier) => {
          const tierPartners = partners.filter((p) => p.tier === tier);
          if (tierPartners.length === 0) return null;
          return (
            <div key={tier} className="mb-12">
              <div className="flex items-center gap-3">
                <h2 className="text-xl font-bold text-white">{tier} Partners</h2>
                <Badge variant={tierVariant[tier]}>{tierPartners.length}</Badge>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {tierPartners.map((partner) => (
                  <a
                    key={partner.id}
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col rounded-xl border border-white/10 bg-surface p-6 transition-all hover:border-white/20 hover:bg-white/5"
                  >
                    {/* Logo placeholder */}
                    <div
                      className={`flex h-12 w-full items-center justify-center rounded-lg ${partner.color}`}
                    >
                      <span className="text-sm font-bold text-white">
                        {partner.name}
                      </span>
                    </div>

                    <h3 className="mt-4 font-semibold text-white">
                      {partner.name}
                    </h3>
                    <p className="mt-1.5 flex-1 text-sm text-muted">
                      {partner.description}
                    </p>

                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-azure-blue transition-colors group-hover:text-white">
                      Visit <ExternalLink className="h-3 w-3" />
                    </span>
                  </a>
                ))}
              </div>
            </div>
          );
        })}

        {/* Become a Partner CTA */}
        <div className="mt-4 rounded-xl border border-white/10 bg-gradient-to-br from-azure-blue/10 via-surface to-oracle-red/10 p-8 text-center">
          <Handshake className="mx-auto h-8 w-8 text-azure-blue" />
          <h2 className="mt-4 text-xl font-bold text-white">Become a Partner</h2>
          <p className="mt-2 text-sm text-muted">
            Interested in joining the OracleDB@Azure ecosystem? We welcome
            technology providers, system integrators, and community organizations.
          </p>
          <a
            href="mailto:partners@oracledatabase-azure.com"
            className="mt-4 inline-flex items-center gap-2 rounded-lg bg-azure-blue px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-azure-blue/25 transition-all hover:bg-azure-blue/90"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </>
  );
}
