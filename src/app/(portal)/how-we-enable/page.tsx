import { ArrowRight, Database, Network, Plug, Rocket, Shield, Workflow } from "lucide-react";
import { ACCELERATORS, INTEGRATION_PATTERNS } from "@/lib/data/how-we-enable";

const PATTERN_ICONS = [Database, Workflow, Plug];
const ACCELERATOR_ICONS = [Network, Shield];

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
    </div>
  );
}
