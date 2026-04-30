import {
  ArrowRight,
  CheckCircle2,
  CircleDashed,
  Clock,
  Database,
  Factory,
  Landmark,
  Network,
  Plug,
  Rocket,
  Shield,
  ShoppingBag,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import ArchitectureDiagram from "@/components/ArchitectureDiagram";
import {
  ACCELERATORS,
  CROSS_CUTTING,
  INDUSTRY_BLUEPRINTS,
  INTEGRATION_PATTERNS,
  MATURITY_ROWS,
  type MaturityStatus,
} from "@/lib/data/how-we-enable";

const PATTERN_ICONS = [Database, Workflow, Plug];
const ACCELERATOR_ICONS = [Network, Shield];

const STATUS_LABEL: Record<MaturityStatus, string> = {
  ga: "GA",
  "in-flight": "In-flight",
  planned: "Planned",
};

const STATUS_PILL: Record<MaturityStatus, string> = {
  ga: "border-iq-teal/40 bg-iq-teal/15 text-iq-teal",
  "in-flight": "border-iq-yellow/40 bg-iq-yellow/15 text-iq-yellow",
  planned: "border-white/15 bg-white/[0.04] text-white/70",
};

const STATUS_ICON: Record<MaturityStatus, typeof CheckCircle2> = {
  ga: CheckCircle2,
  "in-flight": Clock,
  planned: CircleDashed,
};

const INDUSTRY_ICONS = [Landmark, Factory, ShoppingBag, ShieldCheck];

export default function HowWeEnablePage() {
  return (
    <div className="space-y-6">
      <section className="rounded-2xl border border-white/10 bg-gradient-to-br from-navy-900/80 via-navy-900/60 to-iq-yellow/[0.06] p-6">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-iq-yellow">
            <Rocket className="h-5 w-5" />
          </div>
          <div className="font-mono text-[10px] uppercase tracking-widest text-muted">
            How we enable this
          </div>
          <div className="ml-auto hidden font-mono text-[10px] uppercase tracking-widest text-muted md:block">
            The technology behind the demo
          </div>
        </div>
        <h1 className="mt-3 text-xl font-semibold tracking-tight md:text-2xl">
          Three integration patterns and two accelerators that make this work in production.
        </h1>
        <p className="mt-3 max-w-3xl text-[13.5px] leading-relaxed text-white/85">
          The portal demo is one shape of the architecture. Real customers reach for one of three
          integration patterns — sometimes all three together — and lean on a pair of
          accelerators to shorten the build.
        </p>
      </section>

      <ArchitectureDiagram />

      <section>
        <div className="mb-3 flex items-end justify-between">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-muted">
              Three integration patterns
            </div>
            <div className="text-base font-semibold tracking-tight">
              How Oracle and Microsoft connect
            </div>
          </div>
          <div className="hidden font-mono text-[10px] uppercase tracking-widest text-muted md:block">
            Pick one or combine them
          </div>
        </div>

        <div className="space-y-4">
          {INTEGRATION_PATTERNS.map((p, idx) => {
            const Icon = PATTERN_ICONS[idx] ?? Database;
            return (
              <article
                key={p.id}
                className="rounded-2xl border border-white/10 bg-navy-900/70 p-5"
              >
                <div className="flex flex-wrap items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-azure-blue/30 bg-azure-blue/10 text-azure-blue">
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-muted">
                        {p.number}
                      </span>
                      <h3 className="text-base font-semibold tracking-tight">{p.title}</h3>
                    </div>
                    <p className="mt-1 text-[13px] font-medium leading-relaxed text-white/90">
                      {p.oneLiner}
                    </p>
                    <p className="mt-2 text-[12.5px] leading-relaxed text-white/75">
                      {p.description}
                    </p>
                  </div>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-[1.4fr,1fr]">
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-muted">
                      Stack involved
                    </div>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {p.components.map((c) => (
                        <span
                          key={c}
                          className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 font-mono text-[10px] tracking-wide text-white/85"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-lg border border-iq-teal/30 bg-iq-teal/[0.05] p-3">
                    <div className="font-mono text-[10px] uppercase tracking-widest text-muted">
                      When to use
                    </div>
                    <p className="mt-1 text-[12px] leading-relaxed text-white/85">
                      {p.whenToUse}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section>
        <div className="mb-3 flex items-end justify-between">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-muted">
              Accelerators
            </div>
            <div className="text-base font-semibold tracking-tight">
              Two reusable bridges that shorten every build
            </div>
          </div>
          <div className="hidden font-mono text-[10px] uppercase tracking-widest text-muted md:block">
            Build once, ship to every customer
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {ACCELERATORS.map((a, idx) => {
            const Icon = ACCELERATOR_ICONS[idx] ?? Network;
            return (
              <article
                key={a.id}
                className="flex flex-col rounded-2xl border border-iq-yellow/30 bg-navy-900/70 p-5"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-iq-yellow/30 bg-iq-yellow/10 text-iq-yellow">
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-base font-semibold tracking-tight">{a.title}</h3>
                    <p className="mt-1 text-[13px] font-medium leading-relaxed text-white/90">
                      {a.oneLiner}
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2">
                  <span className="font-mono text-[10.5px] tracking-wide text-oracle-red">
                    {a.bridges.from}
                  </span>
                  <ArrowRight className="h-3.5 w-3.5 text-muted" />
                  <span className="font-mono text-[10.5px] tracking-wide text-azure-blue">
                    {a.bridges.to}
                  </span>
                </div>

                <div className="mt-4">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-muted">
                    What it does
                  </div>
                  <p className="mt-1 text-[12.5px] leading-relaxed text-white/85">
                    {a.whatItDoes}
                  </p>
                </div>

                <div className="mt-3 border-t border-white/10 pt-3">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-muted">
                    Why it matters
                  </div>
                  <p className="mt-1 text-[12px] leading-relaxed text-iq-yellow">
                    {a.whyItMatters}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="overflow-hidden rounded-2xl border border-white/10 bg-navy-900/70">
        <div className="flex flex-wrap items-center gap-3 border-b border-white/10 bg-white/[0.03] px-5 py-3">
          <div className="font-mono text-[10px] uppercase tracking-widest text-muted">
            Maturity &amp; roadmap
          </div>
          <div className="text-base font-semibold tracking-tight">
            What ships when — what&rsquo;s real today
          </div>
          <div className="ml-auto hidden font-mono text-[10px] uppercase tracking-widest text-muted md:block">
            Phased to de-risk the build
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-white/[0.02]">
                <th className="border-b border-white/10 px-3 py-2.5 font-mono text-[10px] uppercase tracking-widest text-muted">
                  Capability
                </th>
                <th className="border-b border-white/10 px-3 py-2.5 font-mono text-[10px] uppercase tracking-widest text-muted">
                  Status
                </th>
                <th className="border-b border-white/10 px-3 py-2.5 font-mono text-[10px] uppercase tracking-widest text-muted">
                  Ships
                </th>
                <th className="border-b border-white/10 px-3 py-2.5 font-mono text-[10px] uppercase tracking-widest text-muted">
                  Notes
                </th>
              </tr>
            </thead>
            <tbody>
              {MATURITY_ROWS.map((row) => {
                const StatusIcon = STATUS_ICON[row.status];
                return (
                  <tr key={row.id} className="border-t border-white/5 odd:bg-white/[0.015]">
                    <td className="px-3 py-3 align-top text-[12.5px] font-medium text-white/90">
                      {row.capability}
                    </td>
                    <td className="px-3 py-3 align-top">
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest ${STATUS_PILL[row.status]}`}
                      >
                        <StatusIcon className="h-3 w-3" strokeWidth={2.5} />
                        {STATUS_LABEL[row.status]}
                      </span>
                    </td>
                    <td className="px-3 py-3 align-top text-[12px] text-white/85">{row.ships}</td>
                    <td className="px-3 py-3 align-top text-[12px] text-white/70">{row.notes}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <div className="mb-3 flex items-end justify-between">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-muted">
              Cross-cutting capabilities
            </div>
            <div className="text-base font-semibold tracking-tight">
              The non-negotiables that move agents from demo to production
            </div>
          </div>
          <div className="hidden font-mono text-[10px] uppercase tracking-widest text-muted md:block">
            Oracle ↔ Microsoft, paired
          </div>
        </div>
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {CROSS_CUTTING.map((c) => (
            <article
              key={c.id}
              className="flex flex-col rounded-xl border border-white/10 bg-navy-900/70 p-4"
            >
              <div className="text-[13px] font-semibold tracking-tight">{c.title}</div>
              <p className="mt-1.5 text-[12px] leading-snug text-white/80">{c.oneLiner}</p>
              <div className="mt-3 flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.02] px-2.5 py-1.5">
                <span className="font-mono text-[10px] tracking-wide text-oracle-red">
                  {c.oracle}
                </span>
                <ArrowRight className="h-3 w-3 text-muted" />
                <span className="font-mono text-[10px] tracking-wide text-azure-blue">
                  {c.microsoft}
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section>
        <div className="mb-3 flex items-end justify-between">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-muted">
              Industry blueprints
            </div>
            <div className="text-base font-semibold tracking-tight">
              Vertical templates that SI partners can take to market on day one
            </div>
          </div>
          <div className="hidden font-mono text-[10px] uppercase tracking-widest text-muted md:block">
            Banking · Mfg · Retail · Public Sector
          </div>
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          {INDUSTRY_BLUEPRINTS.map((b, idx) => {
            const Icon = INDUSTRY_ICONS[idx] ?? Landmark;
            return (
              <article
                key={b.id}
                className="rounded-2xl border border-white/10 bg-navy-900/70 p-5"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-iq-yellow/30 bg-iq-yellow/10 text-iq-yellow">
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[13.5px] font-semibold tracking-tight">{b.industry}</div>
                    <div className="mt-0.5 font-mono text-[10px] uppercase tracking-widest text-muted">
                      Flagship: {b.flagship}
                    </div>
                  </div>
                </div>
                <p className="mt-3 text-[12px] leading-relaxed text-white/85">{b.signature}</p>
                <div className="mt-3 grid gap-2 text-[11px] md:grid-cols-2">
                  <div className="rounded-md border border-oracle-red/30 bg-oracle-red/[0.05] px-2.5 py-1.5">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-oracle-red">
                      Oracle anchor
                    </span>
                    <div className="mt-0.5 text-white/85">{b.oracleAnchor}</div>
                  </div>
                  <div className="rounded-md border border-azure-blue/30 bg-azure-blue/[0.05] px-2.5 py-1.5">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-azure-blue">
                      Microsoft surface
                    </span>
                    <div className="mt-0.5 text-white/85">{b.microsoftSurface}</div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}
