import PageHeader from "@/components/PageHeader";
import { mvps } from "@/data/mvps";
import { Trophy, AtSign, Briefcase, Code2, CheckCircle } from "lucide-react";

export default function MVPCornerPage() {
  const featured = mvps.find((m) => m.featured);
  const others = mvps.filter((m) => !m.featured);

  return (
    <>
      <PageHeader
        title="MVP Corner"
        description="Recognizing the outstanding contributors who shape the Oracle Database on Azure community."
      />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Featured MVP */}
        {featured && (
          <div className="rounded-xl border border-white/10 bg-surface p-8">
            <div className="flex items-center gap-2 text-sm font-medium text-yellow-400">
              <Trophy className="h-4 w-4" />
              Featured MVP
            </div>
            <div className="mt-6 flex flex-col gap-6 lg:flex-row">
              <div
                className={`flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${featured.gradientFrom} ${featured.gradientTo}`}
              >
                <span className="text-2xl font-bold text-white">
                  {featured.initials}
                </span>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-white">{featured.name}</h2>
                <p className="text-sm text-muted">
                  {featured.title} at {featured.organization}
                </p>
                <p className="mt-3 leading-relaxed text-muted">{featured.bio}</p>

                <div className="mt-4 space-y-2">
                  {featured.contributions.map((c) => (
                    <div key={c} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 flex-shrink-0 text-green-400" />
                      <span className="text-muted">{c}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 flex gap-3">
                  {featured.links.twitter && (
                    <a href={featured.links.twitter} className="text-muted hover:text-white">
                      <AtSign className="h-4 w-4" />
                    </a>
                  )}
                  {featured.links.linkedin && (
                    <a href={featured.links.linkedin} className="text-muted hover:text-white">
                      <Briefcase className="h-4 w-4" />
                    </a>
                  )}
                  {featured.links.github && (
                    <a href={featured.links.github} className="text-muted hover:text-white">
                      <Code2 className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* MVP Grid */}
        <h2 className="mt-12 text-xl font-bold text-white">All MVPs</h2>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((mvp) => (
            <div
              key={mvp.id}
              className="rounded-xl border border-white/10 bg-surface p-6 transition-all hover:border-white/20"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${mvp.gradientFrom} ${mvp.gradientTo}`}
                >
                  <span className="text-lg font-bold text-white">{mvp.initials}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-white">{mvp.name}</h3>
                  <p className="text-xs text-muted">
                    {mvp.title} at {mvp.organization}
                  </p>
                </div>
              </div>
              <p className="mt-3 text-sm text-muted">{mvp.bio}</p>

              <div className="mt-3 space-y-1.5">
                {mvp.contributions.map((c) => (
                  <div key={c} className="flex items-center gap-2 text-xs">
                    <CheckCircle className="h-3 w-3 flex-shrink-0 text-green-400" />
                    <span className="text-muted">{c}</span>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex gap-3">
                {mvp.links.twitter && (
                  <a href={mvp.links.twitter} className="text-muted hover:text-white">
                    <AtSign className="h-3.5 w-3.5" />
                  </a>
                )}
                {mvp.links.linkedin && (
                  <a href={mvp.links.linkedin} className="text-muted hover:text-white">
                    <Briefcase className="h-3.5 w-3.5" />
                  </a>
                )}
                {mvp.links.github && (
                  <a href={mvp.links.github} className="text-muted hover:text-white">
                    <Code2 className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Nominate CTA */}
        <div className="mt-12 rounded-xl border border-white/10 bg-gradient-to-br from-yellow-500/10 via-surface to-oracle-red/10 p-8 text-center">
          <Trophy className="mx-auto h-8 w-8 text-yellow-400" />
          <h2 className="mt-4 text-xl font-bold text-white">Nominate an MVP</h2>
          <p className="mt-2 text-sm text-muted">
            Know someone who&apos;s making a difference in the OracleDB@Azure community?
            Nominate them for MVP recognition.
          </p>
          <a
            href="mailto:mvp@oracledatabase-azure.com"
            className="mt-4 inline-flex items-center gap-2 rounded-lg bg-oracle-red px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-oracle-red/25 transition-all hover:bg-oracle-red/90"
          >
            Nominate Now
          </a>
        </div>
      </div>
    </>
  );
}
