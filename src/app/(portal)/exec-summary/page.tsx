import {
  AlertTriangle,
  Boxes,
  Briefcase,
  ClipboardList,
  HeartPulse,
  LineChart,
  Sparkles,
  Target,
  UsersRound,
} from "lucide-react";
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
            The business case
          </div>
          <div className="ml-auto hidden font-mono text-[10px] uppercase tracking-widest text-muted md:block">
            Oracle data × Microsoft IQ
          </div>
        </div>

        <h2 className="mt-3 text-lg font-semibold tracking-tight md:text-xl">
          Each IQ layer turns Oracle data into a different — and more valuable — kind of agent.
        </h2>
        <p className="mt-3 max-w-3xl text-[13.5px] leading-relaxed text-white/85">
          The alliance unlocks four agent archetypes from the same Oracle Fusion source. Each
          tier compounds on the last; the value isn&apos;t additive, it&apos;s multiplicative. By
          Tier 3 the agent isn&apos;t reporting on the business — it&apos;s running parts of it.
        </p>

        <div className="mt-5 grid gap-3 md:grid-cols-4">
          <div className="flex flex-col rounded-xl border border-white/10 bg-white/[0.02] p-4">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[9px] uppercase tracking-widest text-muted">
                T0 · Baseline
              </span>
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-1.5 py-0.5 font-mono text-[8.5px] uppercase tracking-widest text-muted">
                Oracle data
              </span>
            </div>
            <div className="mt-1 text-[14px] font-semibold tracking-tight">Lookup agent</div>
            <p className="mt-2 text-[12px] leading-relaxed text-white/80">
              Knows where the data lives. Describes tables, fields, definitions. Cannot
              interpret.
            </p>
            <div className="mt-3 rounded-md border border-white/10 bg-white/[0.03] p-2.5">
              <div className="font-mono text-[9px] uppercase tracking-widest text-muted">
                Example
              </div>
              <p className="mt-1 text-[11.5px] leading-snug text-white/85">
                &ldquo;Here are the Oracle SCM tables that hold supplier and PO data.&rdquo;
              </p>
            </div>
            <div className="mt-3 border-t border-white/10 pt-2.5">
              <div className="font-mono text-[9px] uppercase tracking-widest text-muted">
                Value
              </div>
              <p className="mt-1 text-[11.5px] leading-snug text-white/70">
                Foundation only — table stakes. <span className="text-muted">$0 incremental decision value.</span>
              </p>
            </div>
          </div>

          <div className="flex flex-col rounded-xl border border-azure-blue/30 bg-azure-blue/[0.06] p-4">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[9px] uppercase tracking-widest text-azure-blue">
                T1 · + Fabric IQ
              </span>
              <span className="rounded-full border border-azure-blue/30 bg-azure-blue/10 px-1.5 py-0.5 font-mono text-[8.5px] uppercase tracking-widest text-azure-blue">
                Semantic
              </span>
            </div>
            <div className="mt-1 text-[14px] font-semibold tracking-tight">Insight agent</div>
            <p className="mt-2 text-[12px] leading-relaxed text-white/85">
              Joins Oracle&apos;s semantic model. Quantifies, aggregates, trends — answers
              &ldquo;what does the data say?&rdquo;
            </p>
            <div className="mt-3 rounded-md border border-azure-blue/20 bg-white/[0.03] p-2.5">
              <div className="font-mono text-[9px] uppercase tracking-widest text-muted">
                Example
              </div>
              <p className="mt-1 text-[11.5px] leading-snug text-white/85">
                &ldquo;EMEA Q3 exposure is $47.2M across 84 suppliers; on-time delivery has
                fallen to 87%.&rdquo;
              </p>
            </div>
            <div className="mt-3 border-t border-azure-blue/20 pt-2.5">
              <div className="font-mono text-[9px] uppercase tracking-widest text-muted">
                Value
              </div>
              <p className="mt-1 text-[11.5px] leading-snug text-azure-blue">
                Quarterly review prep: days → minutes. Defensible numbers, no SQL.
              </p>
            </div>
          </div>

          <div className="flex flex-col rounded-xl border border-iq-yellow/30 bg-iq-yellow/[0.06] p-4">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[9px] uppercase tracking-widest text-iq-yellow">
                T2 · + Foundry IQ
              </span>
              <span className="rounded-full border border-iq-yellow/30 bg-iq-yellow/10 px-1.5 py-0.5 font-mono text-[8.5px] uppercase tracking-widest text-iq-yellow">
                Reasoning
              </span>
            </div>
            <div className="mt-1 text-[14px] font-semibold tracking-tight">Decision agent</div>
            <p className="mt-2 text-[12px] leading-relaxed text-white/85">
              Reasons across the data. Ranks moves, projects $-impact, cites every claim back to
              Oracle source.
            </p>
            <div className="mt-3 rounded-md border border-iq-yellow/20 bg-white/[0.03] p-2.5">
              <div className="font-mono text-[9px] uppercase tracking-widest text-muted">
                Example
              </div>
              <p className="mt-1 text-[11.5px] leading-snug text-white/85">
                &ldquo;5 prioritized de-risk plays. $18.6M mitigatable in Q3. First move:
                dual-source 25% of Adriatica volume.&rdquo;
              </p>
            </div>
            <div className="mt-3 border-t border-iq-yellow/20 pt-2.5">
              <div className="font-mono text-[9px] uppercase tracking-widest text-muted">
                Value
              </div>
              <p className="mt-1 text-[11.5px] leading-snug text-iq-yellow">
                Replaces an analyst week with a conversation. $-grade decisions on demand.
              </p>
            </div>
          </div>

          <div className="flex flex-col rounded-xl border border-iq-teal/40 bg-iq-teal/[0.07] p-4">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[9px] uppercase tracking-widest text-iq-teal">
                T3 · + Work IQ
              </span>
              <span className="rounded-full border border-iq-teal/40 bg-iq-teal/10 px-1.5 py-0.5 font-mono text-[8.5px] uppercase tracking-widest text-iq-teal">
                Execution
              </span>
            </div>
            <div className="mt-1 text-[14px] font-semibold tracking-tight">Execution agent</div>
            <p className="mt-2 text-[12px] leading-relaxed text-white/85">
              Personalized to the worker via M365 Graph. Drafts the email, the Teams message,
              the meeting agenda — ready to send.
            </p>
            <div className="mt-3 rounded-md border border-iq-teal/30 bg-white/[0.03] p-2.5">
              <div className="font-mono text-[9px] uppercase tracking-widest text-muted">
                Example
              </div>
              <p className="mt-1 text-[11.5px] leading-snug text-white/85">
                &ldquo;Drafted: green-light email to Maria, Teams ping to Tomás, pre-filled
                10am ops-sync agenda — all in your queue.&rdquo;
              </p>
            </div>
            <div className="mt-3 border-t border-iq-teal/30 pt-2.5">
              <div className="font-mono text-[9px] uppercase tracking-widest text-muted">
                Value
              </div>
              <p className="mt-1 text-[11.5px] leading-snug text-iq-teal">
                The decision is in the calendar before the meeting starts. Hours back per
                worker, per week.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-5 rounded-xl border border-iq-teal/40 bg-iq-teal/[0.06] p-4">
          <div className="font-mono text-[10px] uppercase tracking-widest text-muted">
            The compounding effect
          </div>
          <p className="mt-1.5 text-[13px] leading-relaxed text-white/90">
            Most agentic projects ship at T1 and stall — they report, but never act. The
            alliance ships the full progression. Tier-3 execution agents are worth more than
            the sum of the lower tiers because they don&apos;t just inform decisions; they
            close them. That is the joint business case in one sentence.
          </p>
        </div>
      </section>

      <section className="rounded-2xl border border-iq-yellow/30 bg-navy-900/70 p-5">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-iq-yellow/30 bg-iq-yellow/10 text-iq-yellow">
            <LineChart className="h-5 w-5" />
          </div>
          <div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-muted">
              Size of the prize
            </div>
            <div className="text-base font-semibold tracking-tight">
              The opportunity sized for the alliance
            </div>
          </div>
        </div>
        <div className="mt-4 grid gap-2 md:grid-cols-4">
          <div className="rounded-lg border border-iq-yellow/30 bg-iq-yellow/[0.06] p-3">
            <div className="font-mono text-[9px] uppercase tracking-widest text-muted">
              Joint TAM by 2035
            </div>
            <div className="mt-1 text-xl font-semibold tracking-tight md:text-2xl">$450B+</div>
            <div className="mt-1 text-[11px] text-muted">Agentic enterprise software · Gartner</div>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
            <div className="font-mono text-[9px] uppercase tracking-widest text-muted">
              Customers in scope
            </div>
            <div className="mt-1 text-xl font-semibold tracking-tight md:text-2xl">~6,000</div>
            <div className="mt-1 text-[11px] text-muted">Oracle Fusion + M365 enterprise overlap</div>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
            <div className="font-mono text-[9px] uppercase tracking-widest text-muted">
              Reusable building blocks
            </div>
            <div className="mt-1 text-xl font-semibold tracking-tight md:text-2xl">9</div>
            <div className="mt-1 text-[11px] text-muted">3 patterns + 2 accelerators + 4 industry blueprints</div>
          </div>
          <div className="rounded-lg border border-iq-teal/30 bg-iq-teal/[0.06] p-3">
            <div className="font-mono text-[9px] uppercase tracking-widest text-muted">
              Time to first T2 agent
            </div>
            <div className="mt-1 text-xl font-semibold tracking-tight md:text-2xl">~12 wks</div>
            <div className="mt-1 text-[11px] text-muted">With accelerators; vs. 9–12 months bespoke</div>
          </div>
        </div>
        <p className="mt-4 max-w-3xl text-[12.5px] leading-relaxed text-white/80">
          The prize isn&apos;t just license revenue — it&apos;s consumption across both stacks.
          Every agent invocation drives Microsoft Fabric capacity, Foundry tokens, and Copilot
          seats <span className="text-muted">·</span> while compounding Oracle Database@Azure,
          OCI, and Fusion subscription consumption. See <span className="text-iq-yellow">Joint
          consumption flywheel</span> on the How We Enable This page.
        </p>
      </section>

      <section className="rounded-2xl border border-white/10 bg-navy-900/60 p-5">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-azure-blue/30 bg-azure-blue/10 text-azure-blue">
            <Briefcase className="h-5 w-5" />
          </div>
          <div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-muted">
              Investment &amp; commercial frame
            </div>
            <div className="text-base font-semibold tracking-tight">
              How the alliance gets paid for
            </div>
          </div>
        </div>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
            <div className="font-mono text-[10px] uppercase tracking-widest text-muted">
              Year 1
            </div>
            <div className="mt-1 text-[13.5px] font-semibold tracking-tight">
              Co-sell, separate billing
            </div>
            <p className="mt-2 text-[12px] leading-relaxed text-white/80">
              Lowest-friction path. Both sales orgs co-sell with shared pipeline credit; each
              vendor bills for its own consumption. Joint reference architecture and shared
              accelerators in market.
            </p>
          </div>
          <div className="rounded-xl border border-azure-blue/30 bg-azure-blue/[0.05] p-4">
            <div className="font-mono text-[10px] uppercase tracking-widest text-azure-blue">
              Year 2
            </div>
            <div className="mt-1 text-[13.5px] font-semibold tracking-tight">
              Joint SKU + marketplace
            </div>
            <p className="mt-2 text-[12px] leading-relaxed text-white/85">
              Single alliance SKU on Azure Marketplace and Oracle Cloud Marketplace; unified
              GTM with named field motion; co-marketed in industry events; ISV/SI program
              announced jointly.
            </p>
          </div>
          <div className="rounded-xl border border-iq-yellow/30 bg-iq-yellow/[0.05] p-4">
            <div className="font-mono text-[10px] uppercase tracking-widest text-iq-yellow">
              Co-funded build
            </div>
            <div className="mt-1 text-[13.5px] font-semibold tracking-tight">
              Accelerators &amp; blueprints
            </div>
            <p className="mt-2 text-[12px] leading-relaxed text-white/85">
              Ontology Bridge, Governance Bridge, and the four industry blueprints co-developed
              and co-owned. Shared engineering investment; shared roadmap; shared customer
              advisory board.
            </p>
          </div>
        </div>
      </section>

      <section className="rounded-2xl border border-iq-teal/40 bg-gradient-to-br from-navy-900/80 via-navy-900/60 to-iq-teal/[0.08] p-6">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-iq-teal/40 bg-iq-teal/10 text-iq-teal">
            <Target className="h-5 w-5" />
          </div>
          <div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-muted">
              The ask
            </div>
            <div className="text-base font-semibold tracking-tight">
              What we&apos;re asking the SLT to commit to
            </div>
          </div>
          <div className="ml-auto hidden font-mono text-[10px] uppercase tracking-widest text-muted md:block">
            Decision-grade
          </div>
        </div>
        <ul className="mt-4 grid gap-3 md:grid-cols-2">
          <li className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
            <div className="font-mono text-[10px] uppercase tracking-widest text-iq-teal">
              Commit 1 · Joint sponsorship
            </div>
            <p className="mt-1.5 text-[13px] leading-relaxed text-white/90">
              Both leadership teams publicly endorse the Enterprise Agent Alliance. Joint
              announcement at the next major event from each side.
            </p>
          </li>
          <li className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
            <div className="font-mono text-[10px] uppercase tracking-widest text-iq-teal">
              Commit 2 · Co-funded GTM
            </div>
            <p className="mt-1.5 text-[13px] leading-relaxed text-white/90">
              Named field organization with shared targets and pipeline credit. Co-marketing
              budget agreed for Year 1 with quarterly review cadence.
            </p>
          </li>
          <li className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
            <div className="font-mono text-[10px] uppercase tracking-widest text-iq-teal">
              Commit 3 · Accelerators GA
            </div>
            <p className="mt-1.5 text-[13px] leading-relaxed text-white/90">
              Ontology Bridge and Governance Bridge accelerators committed to GA by end of
              Phase 2. Co-owned engineering, co-owned roadmap.
            </p>
          </li>
          <li className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
            <div className="font-mono text-[10px] uppercase tracking-widest text-iq-teal">
              Commit 4 · Industry templates
            </div>
            <p className="mt-1.5 text-[13px] leading-relaxed text-white/90">
              Banking and Manufacturing blueprints co-developed in Phase 3, with named SI
              partners (Accenture, Deloitte, EY, Capgemini) brought into the alliance.
            </p>
          </li>
        </ul>
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
