import { AlertTriangle, Boxes, ClipboardList, HeartPulse, LineChart, Sparkles, UsersRound } from "lucide-react";
import { SCENARIO_PROGRESSIONS } from "@/lib/data/exec-summary";
import { SCENARIOS, type ScenarioId } from "@/lib/data/scenarios";
import { TIERS, type TierId } from "@/lib/data/tiers";
import { cn } from "@/lib/utils";

const ICONS: Record<ScenarioId, typeof Boxes> = {
  "supply-chain": Boxes,
  workforce: UsersRound,
  "customer-health": HeartPulse,
};

const TIER_BORDER: Record<TierId, string> = {
  baseline: "border-white/10",
  fabric: "border-azure-blue/30",
  foundry: "border-iq-yellow/30",
  work: "border-iq-teal/30",
};

const TIER_BENEFIT_TEXT: Record<TierId, string> = {
  baseline: "text-white/70",
  fabric: "text-azure-blue",
  foundry: "text-iq-yellow",
  work: "text-iq-teal",
};

export default function ExecSummaryPage() {
  return (
    <div className="space-y-6">
      <section className="rounded-2xl border border-white/10 bg-gradient-to-br from-navy-900/80 via-navy-900/60 to-oracle-red/[0.06] p-6">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-iq-yellow">
            <Sparkles className="h-5 w-5" />
          </div>
          <div className="font-mono text-[10px] uppercase tracking-widest text-muted">
            The Enterprise Agent Alliance
          </div>
          <div className="ml-auto hidden font-mono text-[10px] uppercase tracking-widest text-muted md:block">
            Oracle × Microsoft · proposed
          </div>
        </div>

        <h1 className="mt-3 text-xl font-semibold tracking-tight md:text-2xl">
          Agentic AI is the next platform shift — Microsoft and Oracle can lead it together.
        </h1>
        <p className="mt-2 text-[13px] font-medium leading-relaxed text-white/85">
          Oracle data. Microsoft agents. The complete agentic stack for the enterprise.
        </p>

        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
            <div className="font-mono text-[10px] uppercase tracking-widest text-muted">
              The shift
            </div>
            <div className="mt-1 text-[13px] font-semibold tracking-tight">
              From answering to acting
            </div>
            <p className="mt-2 text-[12.5px] leading-relaxed text-white/80">
              Agentic AI moves past chat. Agents reason over enterprise data, plan multi-step
              work, and execute with grounded citations — they draft the email, update the
              record, and close the loop. Every platform vendor is racing to be where these
              agents live.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
            <div className="font-mono text-[10px] uppercase tracking-widest text-muted">
              The seam
            </div>
            <div className="mt-1 text-[13px] font-semibold tracking-tight">
              Where the work actually happens
            </div>
            <p className="mt-2 text-[12.5px] leading-relaxed text-white/80">
              The system of record sits in <span className="text-oracle-red">Oracle Fusion</span>
              {" "}— SCM, HCM, CX, Finance. The system of work sits in{" "}
              <span className="text-azure-blue">Microsoft 365</span> — Outlook, Teams, Copilot.
              Whoever closes the seam between them owns agentic transformation in the
              enterprise.
            </p>
          </div>

          <div className="rounded-xl border border-iq-teal/30 bg-iq-teal/[0.06] p-4">
            <div className="font-mono text-[10px] uppercase tracking-widest text-muted">
              The opportunity
            </div>
            <div className="mt-1 text-[13px] font-semibold tracking-tight">
              Lead it together
            </div>
            <p className="mt-2 text-[12.5px] leading-relaxed text-white/85">
              Oracle&rsquo;s depth of business data plus Microsoft&rsquo;s agent runtime (Foundry),
              governance (Purview), and worker surface (Copilot, Teams) is the only complete
              agentic stack in the enterprise. No other partnership covers data, reasoning, and
              the worker end-to-end.
            </p>
          </div>
        </div>
      </section>

      <section className="rounded-2xl border border-white/10 bg-navy-900/60 p-5">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-azure-blue">
            <LineChart className="h-5 w-5" />
          </div>
          <div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-muted">
              Market signals
            </div>
            <div className="text-base font-semibold tracking-tight">
              The numbers say move now
            </div>
          </div>
          <div className="ml-auto hidden font-mono text-[10px] uppercase tracking-widest text-muted md:block">
            Independent research · public sources
          </div>
        </div>

        <div className="mt-4 grid gap-3 md:grid-cols-3">
          <div className="rounded-xl border border-azure-blue/30 bg-azure-blue/[0.06] p-4">
            <div className="text-2xl font-semibold tracking-tight text-white">33%</div>
            <div className="mt-1 text-[12.5px] leading-snug text-white/85">
              of enterprise software applications will include agentic AI by 2028, up from less
              than 1% in 2024.
            </div>
            <div className="mt-2 font-mono text-[10px] uppercase tracking-widest text-muted">
              Source · Gartner, 2024
            </div>
          </div>

          <div className="rounded-xl border border-iq-yellow/30 bg-iq-yellow/[0.06] p-4">
            <div className="text-2xl font-semibold tracking-tight text-white">15%</div>
            <div className="mt-1 text-[12.5px] leading-snug text-white/85">
              of day-to-day work decisions will be made autonomously by agentic AI by 2028 — up
              from 0% in 2024.
            </div>
            <div className="mt-2 font-mono text-[10px] uppercase tracking-widest text-muted">
              Source · Gartner, 2024
            </div>
          </div>

          <div className="rounded-xl border border-iq-teal/30 bg-iq-teal/[0.06] p-4">
            <div className="text-2xl font-semibold tracking-tight text-white">$450B+</div>
            <div className="mt-1 text-[12.5px] leading-snug text-white/85">
              projected agentic enterprise software market by 2035 — ~30% of total enterprise
              app revenue, up from 2% in 2025.
            </div>
            <div className="mt-2 font-mono text-[10px] uppercase tracking-widest text-muted">
              Source · Gartner, 2025
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
            <div className="text-2xl font-semibold tracking-tight text-white">82%</div>
            <div className="mt-1 text-[12.5px] leading-snug text-white/85">
              of leaders plan to use agents to expand workforce capacity in the next 12–18
              months. 81% expect agents integrated into operations.
            </div>
            <div className="mt-2 font-mono text-[10px] uppercase tracking-widest text-muted">
              Source · Microsoft Work Trend Index, 2025
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
            <div className="text-2xl font-semibold tracking-tight text-white">88%</div>
            <div className="mt-1 text-[12.5px] leading-snug text-white/85">
              of organizations now use AI in at least one function — but only 5.5% see real
              financial returns. The gap is data and integration.
            </div>
            <div className="mt-2 font-mono text-[10px] uppercase tracking-widest text-muted">
              Source · McKinsey State of AI, 2025
            </div>
          </div>

          <div className="rounded-xl border border-oracle-red/40 bg-oracle-red/[0.07] p-4">
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-oracle-red" />
              <div className="text-2xl font-semibold tracking-tight text-white">40%+</div>
            </div>
            <div className="mt-1 text-[12.5px] leading-snug text-white/85">
              of agentic AI projects will be canceled by end of 2027 — escalating costs, unclear
              value, weak governance. Architecture matters.
            </div>
            <div className="mt-2 font-mono text-[10px] uppercase tracking-widest text-muted">
              Source · Gartner, 2025
            </div>
          </div>
        </div>

        <p className="mt-4 max-w-3xl text-[12px] leading-relaxed text-muted">
          Cited from public Gartner press releases (Oct 2024, Jun 2025, Aug 2025), Microsoft 2025
          Annual Work Trend Index, and McKinsey State of AI 2025.
        </p>

        <div className="mt-5 rounded-xl border border-iq-yellow/40 bg-iq-yellow/[0.06] p-4">
          <div className="font-mono text-[10px] uppercase tracking-widest text-muted">
            Why now
          </div>
          <p className="mt-1.5 text-[13px] leading-relaxed text-white/90">
            Adoption is mass-market — but value capture is rare and 40%+ of agentic projects
            will be cancelled by 2027. The pattern is clear: orgs that bolt agents onto
            disconnected data stacks fail; orgs that pair the system of record with the system
            of work win. That seam — Oracle Fusion to Microsoft 365 — is the largest unaddressed
            opportunity in enterprise software, and the window to coordinate a stack closes the
            moment a competitor announces theirs.
          </p>
        </div>
      </section>

      <section className="rounded-2xl border border-white/10 bg-gradient-to-br from-navy-900/80 via-navy-900/60 to-azure-blue/[0.06] p-6">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-iq-teal">
            <ClipboardList className="h-5 w-5" />
          </div>
          <div className="font-mono text-[10px] uppercase tracking-widest text-muted">
            What this portal shows
          </div>
          <div className="ml-auto hidden font-mono text-[10px] uppercase tracking-widest text-muted md:block">
            Oracle Fusion × Microsoft IQ
          </div>
        </div>

        <h2 className="mt-3 text-lg font-semibold tracking-tight md:text-xl">
          Same Oracle data. Same prompt. Four very different answers.
        </h2>
        <p className="mt-3 max-w-3xl text-[13.5px] leading-relaxed text-white/85">
          This portal shows what happens when Oracle Fusion data is fronted by Microsoft Copilot
          and progressively layered with three Microsoft IQs — Fabric, Foundry, and Work. The
          same business question gets asked at every tier; the answer goes from generic, to
          quantified, to reasoned-with-actions, to a draft email already in your outbox.
        </p>
      </section>

      <section className="rounded-2xl border border-white/10 bg-navy-900/60 p-5">
        <div className="font-mono text-[10px] uppercase tracking-widest text-muted">
          The narrative
        </div>
        <div className="mt-1 text-base font-semibold tracking-tight">
          Each IQ layer changes what Copilot can do
        </div>
        <div className="mt-4 grid gap-3 md:grid-cols-4">
          {TIERS.map((tier) => (
            <div
              key={tier.id}
              className={cn(
                "rounded-xl border bg-white/[0.02] p-3",
                TIER_BORDER[tier.id],
              )}
            >
              <div className="flex items-center justify-between">
                <div className="font-mono text-[9px] uppercase tracking-widest text-muted">
                  T{tier.index} · {tier.shortLabel}
                </div>
              </div>
              <div className="mt-1 text-[13px] font-semibold tracking-tight">{tier.label}</div>
              <div className="mt-1 text-[11.5px] leading-snug text-white/75">{tier.tagline}</div>
            </div>
          ))}
        </div>
        <p className="mt-4 max-w-3xl text-[12.5px] leading-relaxed text-white/75">
          <span className="text-white/90">Baseline</span> describes the tables.
          <span className="text-azure-blue"> Fabric IQ</span> turns them into real numbers.
          <span className="text-iq-yellow"> Foundry IQ</span> reasons over those numbers and
          ranks the moves. <span className="text-iq-teal">Work IQ</span> personalizes everything
          to your calendar, your team, and your week — and drafts the follow-ups for you.
        </p>
      </section>

      <section className="rounded-2xl border border-white/10 bg-navy-900/60 p-5">
        <div className="font-mono text-[10px] uppercase tracking-widest text-muted">
          Across all three scenarios
        </div>
        <div className="mt-1 text-base font-semibold tracking-tight">
          The Copilot experience improves the same way every time
        </div>
        <p className="mt-2 max-w-3xl text-[12.5px] leading-relaxed text-white/75">
          One row per scenario, one card per IQ layer. Each card shows what Copilot delivers at
          that tier — and the business benefit it unlocks.
        </p>
      </section>

      <div className="space-y-4">
        {SCENARIOS.map((s) => {
          const progression = SCENARIO_PROGRESSIONS[s.id];
          const Icon = ICONS[s.id];
          return (
            <section
              key={s.id}
              className={cn(
                "rounded-2xl border bg-navy-900/70 p-5",
                s.id === "supply-chain" && "border-azure-blue/30",
                s.id === "workforce" && "border-iq-yellow/30",
                s.id === "customer-health" && "border-iq-teal/30",
              )}
            >
              <div className="flex flex-wrap items-start gap-3">
                <div
                  className={cn(
                    "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border bg-white/5",
                    s.id === "supply-chain" && "border-azure-blue/30 text-azure-blue",
                    s.id === "workforce" && "border-iq-yellow/30 text-iq-yellow",
                    s.id === "customer-health" && "border-iq-teal/30 text-iq-teal",
                  )}
                >
                  <Icon className="h-5 w-5" strokeWidth={2} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-muted">
                    {s.domain}
                  </div>
                  <div className="text-base font-semibold tracking-tight">{s.label}</div>
                  <p className="mt-1.5 text-[12.5px] italic leading-relaxed text-white/75">
                    “{progression.question}”
                  </p>
                </div>
              </div>

              <div className="mt-4 grid gap-3 md:grid-cols-4">
                {TIERS.map((tier) => {
                  const step = progression.steps[tier.id];
                  return (
                    <div
                      key={tier.id}
                      className={cn(
                        "flex flex-col rounded-xl border bg-white/[0.02] p-3",
                        TIER_BORDER[tier.id],
                      )}
                    >
                      <div className="font-mono text-[9px] uppercase tracking-widest text-muted">
                        T{tier.index} · {tier.shortLabel}
                      </div>
                      <div className="mt-1 text-[13px] font-semibold tracking-tight">
                        {tier.label}
                      </div>
                      <p className="mt-2 text-[12px] leading-relaxed text-white/85">
                        {step.delivers}
                      </p>
                      <div className="mt-3 border-t border-white/10 pt-2">
                        <div className="font-mono text-[9px] uppercase tracking-widest text-muted">
                          Business benefit
                        </div>
                        <p
                          className={cn(
                            "mt-1 text-[11.5px] leading-snug",
                            TIER_BENEFIT_TEXT[tier.id],
                          )}
                        >
                          {step.benefit}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
