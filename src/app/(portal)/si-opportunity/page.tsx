import Link from "next/link";
import {
  Brain,
  Briefcase,
  Building,
  Compass,
  Database,
  Network,
  Shield,
  TrendingUp,
  Users,
} from "lucide-react";
import SiTwoActArc from "@/components/SiTwoActArc";
import {
  FRONTIER_PILLARS,
  INDUSTRY_PLAYS,
  OPPORTUNITY_SIZES,
  PRACTICE_ASSETS,
  SI_ACTS,
  SI_ASKS,
  SI_ROSTER,
  STAGE_REVENUE,
  TIER_REVENUE,
  type FeeBand,
  type FrontierIconKey,
  type IndustryPlay,
  type PracticeAsset,
  type SiAct,
  type SizingIconKey,
} from "@/lib/data/si-opportunity";

const SIZING_ICON: Record<SizingIconKey, typeof Users> = {
  users: Users,
  database: Database,
  building: Building,
  "trending-up": TrendingUp,
};

const FRONTIER_ICON: Record<FrontierIconKey, typeof Brain> = {
  brain: Brain,
  shield: Shield,
  network: Network,
  compass: Compass,
};

type Accent = "azure" | "oracle" | "yellow" | "teal";

const ACCENT_BORDER: Record<Accent, string> = {
  azure: "border-azure-blue/40",
  oracle: "border-oracle-red/40",
  yellow: "border-iq-yellow/40",
  teal: "border-iq-teal/40",
};
const ACCENT_BG: Record<Accent, string> = {
  azure: "bg-azure-blue/[0.05]",
  oracle: "bg-oracle-red/[0.05]",
  yellow: "bg-iq-yellow/[0.05]",
  teal: "bg-iq-teal/[0.05]",
};
const ACCENT_TEXT: Record<Accent, string> = {
  azure: "text-azure-blue",
  oracle: "text-oracle-red",
  yellow: "text-iq-yellow",
  teal: "text-iq-teal",
};
const ACCENT_CHIP: Record<Accent, string> = {
  azure: "border-azure-blue/40 bg-azure-blue/10 text-azure-blue",
  oracle: "border-oracle-red/40 bg-oracle-red/10 text-oracle-red",
  yellow: "border-iq-yellow/40 bg-iq-yellow/10 text-iq-yellow",
  teal: "border-iq-teal/40 bg-iq-teal/10 text-iq-teal",
};

const FEE_BAND_LABEL: Record<FeeBand, string> = {
  $: "Modest",
  $$: "Material",
  $$$: "Significant",
  $$$$: "Marquee",
};
const FEE_BAND_TONE: Record<FeeBand, string> = {
  $: "text-muted",
  $$: "text-azure-blue",
  $$$: "text-iq-yellow",
  $$$$: "text-iq-teal",
};

function FeeBadge({ band }: { band: FeeBand }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-2 py-0.5 font-mono text-[9.5px] uppercase tracking-widest">
      <span className={`${FEE_BAND_TONE[band]} font-semibold tracking-tight`}>{band}</span>
      <span className="text-muted">{FEE_BAND_LABEL[band]}</span>
    </span>
  );
}

const BUILD_EFFORT_TONE: Record<PracticeAsset["effort"], string> = {
  Quick: "border-iq-teal/40 bg-iq-teal/10 text-iq-teal",
  Medium: "border-iq-yellow/40 bg-iq-yellow/10 text-iq-yellow",
  Deep: "border-oracle-red/40 bg-oracle-red/10 text-oracle-red",
};

export default function SiOpportunityPage() {
  return (
    <div className="space-y-6">
      {/* ============================== HERO ============================== */}
      <section className="rounded-2xl border border-iq-yellow/40 bg-gradient-to-br from-navy-900/80 via-navy-900/60 to-iq-yellow/[0.07] p-6">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-iq-yellow/40 bg-iq-yellow/10 text-iq-yellow">
            <Briefcase className="h-5 w-5" />
          </div>
          <div className="font-mono text-[10px] uppercase tracking-widest text-muted">
            The SI opportunity · Become the frontier-firm builder
          </div>
          <div className="ml-auto hidden font-mono text-[10px] uppercase tracking-widest text-muted md:block">
            Built for SI practice executives
          </div>
        </div>
        <h1 className="mt-3 text-xl font-semibold tracking-tight md:text-2xl">
          The Oracle estate is the largest unmodernised, agent-ready opportunity in enterprise IT.
        </h1>
        <p className="mt-3 max-w-3xl text-[13.5px] leading-relaxed text-white/85">
          Tens of thousands of customers run their business on Oracle and their workforce on
          Microsoft. The agentic alliance fuses both stacks. The SIs that build the joint
          Oracle + Microsoft practice <em>now</em> — productised assets, certified architects,
          industry IP — define the frontier-firm category for the next decade. This page sizes
          the opportunity, frames the two-act revenue model, and lays out what to build.
        </p>
      </section>

      {/* ============================ §2 SCALE ============================ */}
      <section className="rounded-2xl border border-white/10 bg-navy-900/70 p-6">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-iq-yellow">
            <TrendingUp className="h-5 w-5" />
          </div>
          <div className="font-mono text-[10px] uppercase tracking-widest text-muted">
            The scale
          </div>
        </div>
        <h2 className="mt-3 text-lg font-semibold tracking-tight md:text-xl">
          Four directional sizing cards — the opportunity at a glance.
        </h2>

        <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {OPPORTUNITY_SIZES.map((s) => {
            const Icon = SIZING_ICON[s.iconKey];
            return (
              <article
                key={s.id}
                className={`flex flex-col rounded-xl border ${ACCENT_BORDER[s.accent]} ${ACCENT_BG[s.accent]} p-4`}
              >
                <div
                  className={`flex h-9 w-9 items-center justify-center rounded-lg border ${ACCENT_BORDER[s.accent]} bg-white/[0.04] ${ACCENT_TEXT[s.accent]}`}
                >
                  <Icon className="h-4 w-4" strokeWidth={2} />
                </div>
                <div className="mt-3 font-mono text-[9.5px] uppercase tracking-widest text-muted">
                  {s.label}
                </div>
                <div
                  className={`mt-1 text-3xl font-semibold tracking-tight ${ACCENT_TEXT[s.accent]}`}
                >
                  {s.headlineValue}
                </div>
                <div className="mt-1 text-[11.5px] leading-snug text-white/85">{s.unit}</div>
                <p className="mt-3 text-[11px] leading-relaxed text-white/70">{s.caveat}</p>
                <div className={`mt-auto border-t ${ACCENT_BORDER[s.accent]} pt-2.5`}>
                  <div className="font-mono text-[9px] uppercase tracking-widest text-muted">
                    Source
                  </div>
                  <p className="mt-0.5 text-[10.5px] leading-snug text-white/65">{s.source}</p>
                </div>
              </article>
            );
          })}
        </div>

        {/* Partner roster band */}
        <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.02] p-4">
          <div className="flex flex-wrap items-center gap-3">
            <div className="font-mono text-[10px] uppercase tracking-widest text-muted">
              Top 8 strategic SIs · context
            </div>
            <p className="text-[12px] text-white/70">
              The narrative is written generically — every partner reads themselves into it.
            </p>
          </div>
          <div className="mt-3 grid gap-2 md:grid-cols-2 xl:grid-cols-4">
            {SI_ROSTER.map((p) => (
              <div
                key={p.id}
                className="rounded-lg border border-white/10 bg-navy-900/60 p-3"
              >
                <div className="flex items-baseline justify-between gap-2">
                  <div className="text-[12.5px] font-semibold tracking-tight">{p.name}</div>
                  <div className="font-mono text-[9px] uppercase tracking-widest text-muted">
                    {p.hq}
                  </div>
                </div>
                <p className="mt-1 text-[11px] leading-snug text-white/75">{p.superpower}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-[10.5px] leading-relaxed text-muted">
            Order is not a ranking. Tier-1 alliances with both Oracle and Microsoft tend to
            include Accenture, Deloitte, EY, and Capgemini at the front; the global Indian-heritage
            SIs are tier-1 in delivery scale and are increasingly tier-1 in agentic IP.
          </p>
        </div>
      </section>

      {/* ===================== §3 TWO-ACT OPPORTUNITY ====================== */}
      <section className="rounded-2xl border border-white/10 bg-navy-900/70 p-6">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-iq-teal">
            <TrendingUp className="h-5 w-5" />
          </div>
          <div className="font-mono text-[10px] uppercase tracking-widest text-muted">
            The two-act opportunity
          </div>
          <div className="ml-auto hidden font-mono text-[10px] uppercase tracking-widest text-muted md:block">
            Modernise → Activate · per customer
          </div>
        </div>
        <h2 className="mt-3 text-lg font-semibold tracking-tight md:text-xl">
          Two acts, two arcs. Together: the SI services TAM per customer engagement.
        </h2>
        <p className="mt-3 max-w-3xl text-[13px] leading-relaxed text-white/80">
          Act I peaks during migration and tails off. Act II starts later, compounds, and keeps
          growing past month 36. Customers think they&apos;re buying Act I; the SIs that win Act II
          define the next decade.
        </p>

        <div className="mt-5">
          <SiTwoActArc />
        </div>

        <div className="mt-5 grid gap-4 lg:grid-cols-2">
          {SI_ACTS.map((act: SiAct) => (
            <article
              key={act.id}
              className={`rounded-2xl border ${ACCENT_BORDER[act.accent]} ${ACCENT_BG[act.accent]} p-5`}
            >
              <div className="flex flex-wrap items-center gap-3">
                <div
                  className={`flex h-9 w-9 items-center justify-center rounded-lg border font-mono text-[12px] font-semibold ${ACCENT_CHIP[act.accent]}`}
                >
                  {act.index}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-base font-semibold tracking-tight">{act.label}</div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-muted">
                    {act.subtitle}
                  </div>
                </div>
              </div>
              <p className="mt-3 text-[13px] font-medium leading-relaxed text-white">
                {act.oneLiner}
              </p>

              <div className="mt-4 grid gap-3 md:grid-cols-2">
                <div>
                  <div className="font-mono text-[9px] uppercase tracking-widest text-muted">
                    What the SI does
                  </div>
                  <ul className="mt-2 space-y-1.5 text-[11.5px] leading-relaxed text-white/85">
                    {act.whatTheSiDoes.map((s, i) => (
                      <li key={i} className="flex gap-2">
                        <span className={ACCENT_TEXT[act.accent]}>·</span>
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="font-mono text-[9px] uppercase tracking-widest text-muted">
                    Revenue lines
                  </div>
                  <ul className="mt-2 space-y-1 text-[11.5px] leading-relaxed text-white/85">
                    {act.revenueLines.map((r, i) => (
                      <li key={i}>{r}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-4 grid gap-3 text-[11px] md:grid-cols-3">
                <div className="rounded-lg border border-white/10 bg-navy-900/60 p-2.5">
                  <div className="font-mono text-[9px] uppercase tracking-widest text-muted">
                    Duration
                  </div>
                  <p className="mt-1 leading-snug text-white/85">{act.durationMonths}</p>
                </div>
                <div className="rounded-lg border border-white/10 bg-navy-900/60 p-2.5">
                  <div className="font-mono text-[9px] uppercase tracking-widest text-muted">
                    Margin profile
                  </div>
                  <p className="mt-1 leading-snug text-white/85">{act.marginProfile}</p>
                </div>
                <div className="rounded-lg border border-white/10 bg-navy-900/60 p-2.5">
                  <div className="font-mono text-[9px] uppercase tracking-widest text-muted">
                    Defensive moat
                  </div>
                  <p className="mt-1 leading-snug text-white/85">{act.defenseMoat}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ====================== §4 FRONTIER FIRM =========================== */}
      <section className="rounded-2xl border border-iq-teal/30 bg-iq-teal/[0.04] p-6">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-iq-teal/40 bg-iq-teal/10 text-iq-teal">
            <Compass className="h-5 w-5" />
          </div>
          <div className="font-mono text-[10px] uppercase tracking-widest text-muted">
            What a frontier firm is
          </div>
        </div>
        <h2 className="mt-3 text-lg font-semibold tracking-tight md:text-xl">
          Four pillars. Oracle + Microsoft together is the only stack that delivers all four for the Oracle install base.
        </h2>
        <p className="mt-3 max-w-3xl text-[13px] leading-relaxed text-white/85">
          A frontier firm runs on agent-augmented work, data-grounded decisions, cross-stack
          interoperability, and governed-by-default security. Not aspirational — operational. The
          SI&apos;s job in Act II is to take the customer there workload by workload.
        </p>

        <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {FRONTIER_PILLARS.map((p) => {
            const Icon = FRONTIER_ICON[p.iconKey];
            return (
              <article
                key={p.id}
                className="flex flex-col rounded-xl border border-white/10 bg-navy-900/60 p-4"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-iq-teal/40 bg-iq-teal/10 text-iq-teal">
                  <Icon className="h-4 w-4" strokeWidth={2} />
                </div>
                <div className="mt-3 text-[14px] font-semibold tracking-tight">{p.label}</div>
                <p className="mt-1.5 text-[12px] leading-relaxed text-white/85">{p.oneLiner}</p>
                <div className="mt-3 border-t border-white/10 pt-2.5">
                  <div className="font-mono text-[9px] uppercase tracking-widest text-iq-teal">
                    Why Oracle + Microsoft
                  </div>
                  <p className="mt-1 text-[11px] leading-snug text-white/80">
                    {p.whyOracleMicrosoft}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* ====================== §5 SI REVENUE MAP ========================== */}
      <section className="rounded-2xl border border-white/10 bg-navy-900/70 p-6">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-azure-blue">
            <TrendingUp className="h-5 w-5" />
          </div>
          <div className="font-mono text-[10px] uppercase tracking-widest text-muted">
            SI revenue map
          </div>
        </div>
        <h2 className="mt-3 text-lg font-semibold tracking-tight md:text-xl">
          Where the money sits — by journey stage and by IQ tier.
        </h2>

        <div className="mt-5 grid gap-4 lg:grid-cols-2">
          {/* By stage */}
          <div className="rounded-xl border border-white/10 bg-navy-900/60 p-4">
            <div className="flex items-center justify-between gap-3">
              <div className="font-mono text-[10px] uppercase tracking-widest text-oracle-red">
                By journey stage
              </div>
              <div className="font-mono text-[9.5px] uppercase tracking-widest text-muted">
                discover → activate
              </div>
            </div>
            <ul className="mt-3 space-y-3">
              {STAGE_REVENUE.map((s) => (
                <li
                  key={s.id}
                  className="rounded-lg border border-white/10 bg-white/[0.02] p-3"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <div className="text-[12.5px] font-semibold tracking-tight">
                      {s.stageLabel}
                    </div>
                    <FeeBadge band={s.feeBand} />
                    <span
                      className={`ml-auto font-mono text-[9px] uppercase tracking-widest ${
                        s.act === "modernise" ? "text-oracle-red" : "text-iq-teal"
                      }`}
                    >
                      {s.act === "modernise" ? "Act I" : "Act II"}
                    </span>
                  </div>
                  <p className="mt-1 text-[12px] leading-relaxed text-white/85">
                    {s.siRevenueLine}
                  </p>
                  <p className="mt-1 text-[11px] leading-snug text-muted">{s.example}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* By tier */}
          <div className="rounded-xl border border-white/10 bg-navy-900/60 p-4">
            <div className="flex items-center justify-between gap-3">
              <div className="font-mono text-[10px] uppercase tracking-widest text-iq-teal">
                By IQ tier
              </div>
              <div className="font-mono text-[9.5px] uppercase tracking-widest text-muted">
                tier 0 → tier 3
              </div>
            </div>
            <ul className="mt-3 space-y-3">
              {TIER_REVENUE.map((t) => (
                <li
                  key={t.tierId}
                  className="rounded-lg border border-white/10 bg-white/[0.02] p-3"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <div className="text-[12.5px] font-semibold tracking-tight">{t.tierLabel}</div>
                    <FeeBadge band={t.feeBand} />
                    <Link
                      href={`/tier/${t.tierId}`}
                      className="ml-auto font-mono text-[9px] uppercase tracking-widest text-azure-blue hover:underline"
                    >
                      View tier ↗
                    </Link>
                  </div>
                  <p className="mt-1 text-[12px] leading-relaxed text-white/85">
                    {t.siRevenueLine}
                  </p>
                  <p className="mt-1 text-[11px] leading-snug text-muted">{t.example}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-4 max-w-3xl text-[11.5px] leading-relaxed text-muted">
          Fee bands are directional indicators of SI engagement size, not pricing guidance.
          Tier-3 engagements compound across both axes — they&apos;re late-stage in the journey
          and the deepest tier of agentic activation.
        </p>
      </section>

      {/* ===================== §6 INDUSTRY PLAYS =========================== */}
      <section className="rounded-2xl border border-white/10 bg-navy-900/70 p-6">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-azure-blue">
            <Building className="h-5 w-5" />
          </div>
          <div className="font-mono text-[10px] uppercase tracking-widest text-muted">
            Industry plays
          </div>
          <div className="ml-auto hidden font-mono text-[10px] uppercase tracking-widest text-muted md:block">
            Summary depth · scenario links
          </div>
        </div>
        <h2 className="mt-3 text-lg font-semibold tracking-tight md:text-xl">
          Four industries where the joint stack lands first — pick where you have practice gravity.
        </h2>

        <div className="mt-5 grid gap-3 md:grid-cols-2">
          {INDUSTRY_PLAYS.map((play: IndustryPlay) => (
            <article
              key={play.id}
              className={`flex flex-col rounded-xl border ${ACCENT_BORDER[play.accent]} ${ACCENT_BG[play.accent]} p-4`}
            >
              <div className="flex flex-wrap items-center gap-2">
                <div className="text-[14px] font-semibold tracking-tight">{play.industry}</div>
                {play.scenarioRef && (
                  <Link
                    href={`/scenario/${play.scenarioRef}`}
                    className={`ml-auto font-mono text-[9px] uppercase tracking-widest hover:underline ${ACCENT_TEXT[play.accent]}`}
                  >
                    See scenario ↗
                  </Link>
                )}
              </div>

              <div className="mt-3 space-y-2.5 text-[11.5px] leading-relaxed text-white/85">
                <div>
                  <div className="font-mono text-[9px] uppercase tracking-widest text-muted">
                    Top agentic use case
                  </div>
                  <p className="mt-0.5">{play.topAgenticUseCase}</p>
                </div>
                <div>
                  <div className="font-mono text-[9px] uppercase tracking-widest text-muted">
                    Top SI opportunity
                  </div>
                  <p className="mt-0.5">{play.topSiOpportunity}</p>
                </div>
                <div className={`mt-2 border-t pt-2.5 ${ACCENT_BORDER[play.accent]}`}>
                  <div className="font-mono text-[9px] uppercase tracking-widest text-muted">
                    Revenue profile
                  </div>
                  <p className={`mt-0.5 ${ACCENT_TEXT[play.accent]}`}>{play.revenueProfile}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ===================== §7 PRACTICE ASSETS ========================== */}
      <section className="rounded-2xl border border-iq-yellow/30 bg-iq-yellow/[0.04] p-6">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-iq-yellow/40 bg-iq-yellow/10 text-iq-yellow">
            <Briefcase className="h-5 w-5" />
          </div>
          <div className="font-mono text-[10px] uppercase tracking-widest text-muted">
            What to build
          </div>
        </div>
        <h2 className="mt-3 text-lg font-semibold tracking-tight md:text-xl">
          Six practice assets. Build them within 6 – 9 months and the rest of the field is chasing you.
        </h2>
        <p className="mt-3 max-w-3xl text-[13px] leading-relaxed text-white/85">
          The compounding moat is internal IP — productised assets that turn every customer
          engagement into a faster, cheaper, more defensible delivery. Build for repeatability,
          not just delivery.
        </p>

        <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {PRACTICE_ASSETS.map((a: PracticeAsset) => (
            <article
              key={a.id}
              className={`rounded-xl border ${ACCENT_BORDER[a.accent]} ${ACCENT_BG[a.accent]} p-4`}
            >
              <div className="flex items-center justify-between gap-2">
                <div className="font-mono text-[9.5px] uppercase tracking-widest text-muted">
                  {a.category}
                </div>
                <span
                  className={`rounded-full border px-2 py-0.5 font-mono text-[9px] uppercase tracking-widest ${BUILD_EFFORT_TONE[a.effort]}`}
                >
                  {a.effort}
                </span>
              </div>
              <div className="mt-2 text-[14px] font-semibold tracking-tight">{a.asset}</div>
              <p className="mt-2 text-[11.5px] leading-relaxed text-white/85">{a.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ============================ §8 ASK =============================== */}
      <section className="rounded-2xl border border-iq-yellow/40 bg-iq-yellow/[0.05] p-6">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-iq-yellow/40 bg-iq-yellow/10 text-iq-yellow">
            <Briefcase className="h-5 w-5" />
          </div>
          <div className="font-mono text-[10px] uppercase tracking-widest text-muted">
            The ask
          </div>
        </div>
        <h2 className="mt-3 text-lg font-semibold tracking-tight md:text-xl">
          What committing to the joint Oracle + Microsoft Agentic Alliance practice looks like.
        </h2>

        <ul className="mt-4 grid gap-3 md:grid-cols-2">
          {SI_ASKS.map((ask) => (
            <li
              key={ask.id}
              className="rounded-xl border border-white/10 bg-navy-900/60 p-4"
            >
              <div className="text-[13.5px] font-semibold tracking-tight text-white">
                {ask.title}
              </div>
              <p className="mt-1.5 text-[12px] leading-relaxed text-white/80">{ask.body}</p>
            </li>
          ))}
        </ul>

        <div className="mt-5 rounded-xl border border-iq-yellow/40 bg-iq-yellow/[0.07] p-4">
          <div className="font-mono text-[10px] uppercase tracking-widest text-iq-yellow">
            The bet
          </div>
          <p className="mt-1.5 text-[13px] leading-relaxed text-white/90">
            The SIs that lead the joint Oracle + Microsoft practice over the next 24 months
            capture two compounding waves at once — modernisation revenue from the Oracle estate
            converging on OD@A, and frontier-firm activation revenue from agents grounded on
            that estate. Together, that is the largest enterprise services arc of the decade.
            The price of admission is committing to build the practice now, with intent.
          </p>
        </div>
      </section>
    </div>
  );
}
