import {
  Anchor,
  Layers,
  Map as MapIcon,
  Shield,
  TrendingUp,
  Workflow,
  Zap,
} from "lucide-react";
import OdaArchitectureDiagram from "@/components/OdaArchitectureDiagram";
import OdaJourneyMap from "@/components/OdaJourneyMap";
import {
  AI_ACTIVATION_STEPS,
  ANCHOR_CLAIMS,
  CLOUD_PATHS,
  CONSUMPTION_BY_STAGE,
  JOURNEY_STAGES,
  type AnchorIconKey,
  type CloudPath,
  type JourneyStage,
} from "@/lib/data/oda-frontier";

const ANCHOR_ICON: Record<AnchorIconKey, typeof Zap> = {
  zap: Zap,
  shield: Shield,
  layers: Layers,
  "trending-up": TrendingUp,
};

const ANCHOR_BORDER: Record<NonNullable<(typeof ANCHOR_CLAIMS)[number]["accent"]>, string> = {
  azure: "border-azure-blue/40",
  oracle: "border-oracle-red/40",
  yellow: "border-iq-yellow/40",
  teal: "border-iq-teal/40",
};
const ANCHOR_BG: Record<NonNullable<(typeof ANCHOR_CLAIMS)[number]["accent"]>, string> = {
  azure: "bg-azure-blue/[0.05]",
  oracle: "bg-oracle-red/[0.05]",
  yellow: "bg-iq-yellow/[0.05]",
  teal: "bg-iq-teal/[0.05]",
};
const ANCHOR_TEXT: Record<NonNullable<(typeof ANCHOR_CLAIMS)[number]["accent"]>, string> = {
  azure: "text-azure-blue",
  oracle: "text-oracle-red",
  yellow: "text-iq-yellow",
  teal: "text-iq-teal",
};

const STAGE_BORDER: Record<JourneyStage["accent"], string> = {
  azure: "border-azure-blue/40",
  oracle: "border-oracle-red/40",
  yellow: "border-iq-yellow/40",
  teal: "border-iq-teal/40",
  slate: "border-white/15",
};
const STAGE_BG: Record<JourneyStage["accent"], string> = {
  azure: "bg-azure-blue/[0.05]",
  oracle: "bg-oracle-red/[0.05]",
  yellow: "bg-iq-yellow/[0.05]",
  teal: "bg-iq-teal/[0.05]",
  slate: "bg-white/[0.02]",
};
const STAGE_CHIP: Record<JourneyStage["accent"], string> = {
  azure: "border-azure-blue/40 bg-azure-blue/10 text-azure-blue",
  oracle: "border-oracle-red/40 bg-oracle-red/10 text-oracle-red",
  yellow: "border-iq-yellow/40 bg-iq-yellow/10 text-iq-yellow",
  teal: "border-iq-teal/40 bg-iq-teal/10 text-iq-teal",
  slate: "border-white/15 bg-white/[0.04] text-muted",
};
const STAGE_ACCENT_TEXT: Record<JourneyStage["accent"], string> = {
  azure: "text-azure-blue",
  oracle: "text-oracle-red",
  yellow: "text-iq-yellow",
  teal: "text-iq-teal",
  slate: "text-muted",
};

const PATH_BORDER: Record<CloudPath["accent"], string> = {
  oracle: "border-oracle-red/50",
  azure: "border-azure-blue/40",
  yellow: "border-iq-yellow/40",
  slate: "border-white/15",
};
const PATH_BG: Record<CloudPath["accent"], string> = {
  oracle: "bg-oracle-red/[0.07]",
  azure: "bg-azure-blue/[0.05]",
  yellow: "bg-iq-yellow/[0.05]",
  slate: "bg-white/[0.02]",
};
const PATH_TEXT: Record<CloudPath["accent"], string> = {
  oracle: "text-oracle-red",
  azure: "text-azure-blue",
  yellow: "text-iq-yellow",
  slate: "text-muted",
};

export default function OdaFrontierPage() {
  return (
    <div className="space-y-6">
      {/* ============================== HERO ============================== */}
      <section className="rounded-2xl border border-oracle-red/40 bg-gradient-to-br from-navy-900/80 via-navy-900/60 to-oracle-red/[0.07] p-6">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-oracle-red/40 bg-oracle-red/10 text-oracle-red">
            <Anchor className="h-5 w-5" />
          </div>
          <div className="font-mono text-[10px] uppercase tracking-widest text-muted">
            OD@A · Anchor for Frontier Transformation
          </div>
          <div className="ml-auto hidden font-mono text-[10px] uppercase tracking-widest text-muted md:block">
            Azure as the destination for Oracle workloads
          </div>
        </div>
        <h1 className="mt-3 text-xl font-semibold tracking-tight md:text-2xl">
          Oracle Database@Azure is where every Oracle workload&apos;s modernisation lands.
        </h1>
        <p className="mt-3 max-w-3xl text-[13.5px] leading-relaxed text-white/85">
          The agentic alliance compounds value from a stable anchor — and OD@A is the anchor.
          Every on-prem Oracle estate has a path to it. Every modernised workload feeds the
          Microsoft IQ stack on top of it. Every Tier-0-through-Tier-3 agent grounds on the
          data of record it holds. This page walks the end-to-end customer journey — from on-prem
          discovery to agentic activation — with OD@A at the gravitational centre.
        </p>
      </section>

      {/* ====================== WHY OD@A IS THE ANCHOR ===================== */}
      <section className="rounded-2xl border border-white/10 bg-navy-900/70 p-6">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-iq-yellow">
            <Anchor className="h-5 w-5" />
          </div>
          <div className="font-mono text-[10px] uppercase tracking-widest text-muted">
            Why OD@A is the anchor
          </div>
        </div>
        <h2 className="mt-3 text-lg font-semibold tracking-tight md:text-xl">
          Four anchor properties — together, they make OD@A inevitable for the Oracle install base.
        </h2>

        <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {ANCHOR_CLAIMS.map((claim) => {
            const Icon = ANCHOR_ICON[claim.iconKey];
            return (
              <article
                key={claim.id}
                className={`flex flex-col rounded-xl border ${ANCHOR_BORDER[claim.accent]} ${ANCHOR_BG[claim.accent]} p-4`}
              >
                <div
                  className={`flex h-9 w-9 items-center justify-center rounded-lg border ${ANCHOR_BORDER[claim.accent]} bg-white/[0.04] ${ANCHOR_TEXT[claim.accent]}`}
                >
                  <Icon className="h-4 w-4" strokeWidth={2} />
                </div>
                <div className="mt-3 text-[14px] font-semibold tracking-tight">{claim.title}</div>
                <p className="mt-2 text-[12px] leading-relaxed text-white/85">{claim.oneLiner}</p>
                <div
                  className={`mt-3 border-t pt-2.5 ${ANCHOR_BORDER[claim.accent]}`}
                >
                  <div className="font-mono text-[9px] uppercase tracking-widest text-muted">
                    Proof
                  </div>
                  <p className={`mt-1 text-[11.5px] leading-snug ${ANCHOR_TEXT[claim.accent]}`}>
                    {claim.proof}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* ===================== CUSTOMER JOURNEY DIAGRAM ==================== */}
      <section className="rounded-2xl border border-white/10 bg-navy-900/70 p-6">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-iq-teal">
            <MapIcon className="h-5 w-5" />
          </div>
          <div className="font-mono text-[10px] uppercase tracking-widest text-muted">
            The customer journey
          </div>
          <div className="ml-auto hidden font-mono text-[10px] uppercase tracking-widest text-muted md:block">
            Five stages · OD@A at the centre
          </div>
        </div>
        <h2 className="mt-3 text-lg font-semibold tracking-tight md:text-xl">
          From on-prem estate to agentic AI — five stages, one anchor.
        </h2>
        <p className="mt-3 max-w-3xl text-[13px] leading-relaxed text-white/80">
          The journey is linear at the surface — discover, plan, migrate, modernise, activate — but
          the gravitational pull of OD@A is felt at every stage. Workloads either land on it,
          interoperate with it, or feed the agentic stack that runs on top of it.
        </p>
        <div className="mt-5">
          <OdaJourneyMap />
        </div>
      </section>

      {/* =================== STAGE DETAIL CARDS (5 STAGES) ================= */}
      <section className="space-y-4">
        {JOURNEY_STAGES.map((stage) => (
          <article
            key={stage.id}
            className={`rounded-2xl border ${STAGE_BORDER[stage.accent]} ${STAGE_BG[stage.accent]} p-5`}
          >
            <div className="flex flex-wrap items-center gap-3">
              <div
                className={`flex h-9 w-9 items-center justify-center rounded-lg border ${STAGE_CHIP[stage.accent]}`}
              >
                <span className="font-mono text-[12px] font-semibold">{stage.index}</span>
              </div>
              <div className="min-w-0 flex-1">
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted">
                  Stage {stage.index} · {stage.shortLabel}
                </div>
                <div className="text-base font-semibold tracking-tight">{stage.label}</div>
              </div>
              <div
                className={`hidden rounded-full border px-2.5 py-1 font-mono text-[9px] uppercase tracking-widest md:block ${STAGE_CHIP[stage.accent]}`}
              >
                {stage.id === "activate" ? "AI activation" : stage.id}
              </div>
            </div>

            <p className="mt-3 text-[13.5px] font-medium leading-relaxed text-white">
              {stage.oneLiner}
            </p>

            <div className="mt-4 grid gap-3 md:grid-cols-3">
              <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3">
                <div className="font-mono text-[9px] uppercase tracking-widest text-muted">
                  What happens
                </div>
                <ul className="mt-2 space-y-1.5 text-[11.5px] leading-relaxed text-white/85">
                  {stage.whatHappens.map((step, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-muted">·</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-azure-blue/30 bg-azure-blue/[0.05] p-3">
                <div className="font-mono text-[9px] uppercase tracking-widest text-azure-blue">
                  Microsoft tooling
                </div>
                <ul className="mt-2 space-y-1 text-[11.5px] leading-relaxed text-white/85">
                  {stage.microsoftTooling.map((t, i) => (
                    <li key={i}>{t}</li>
                  ))}
                </ul>
                <div className="mt-3 font-mono text-[9px] uppercase tracking-widest text-oracle-red">
                  Oracle tooling
                </div>
                <ul className="mt-2 space-y-1 text-[11.5px] leading-relaxed text-white/85">
                  {stage.oracleTooling.map((t, i) => (
                    <li key={i}>{t}</li>
                  ))}
                </ul>
              </div>
              <div
                className={`rounded-xl border ${STAGE_BORDER[stage.accent]} ${STAGE_BG[stage.accent]} p-3`}
              >
                <div className="font-mono text-[9px] uppercase tracking-widest text-muted">
                  Outputs
                </div>
                <ul className="mt-2 space-y-1.5 text-[11.5px] leading-relaxed text-white/85">
                  {stage.outputs.map((o, i) => (
                    <li key={i} className="flex gap-2">
                      <span className={STAGE_ACCENT_TEXT[stage.accent]}>→</span>
                      <span>{o}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* AI activation sub-steps live inside Stage 5 */}
            {stage.id === "activate" && (
              <div className="mt-5 rounded-xl border border-iq-teal/30 bg-iq-teal/[0.04] p-4">
                <div className="font-mono text-[10px] uppercase tracking-widest text-iq-teal">
                  Inside Stage 5 · the four AI activation sub-steps
                </div>
                <p className="mt-1.5 text-[12.5px] leading-relaxed text-white/85">
                  Activating AI on the modernised estate is itself a four-step motion that the
                  alliance ships end-to-end.
                </p>
                <div className="mt-3 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
                  {AI_ACTIVATION_STEPS.map((step) => (
                    <div
                      key={step.id}
                      className="rounded-lg border border-white/10 bg-navy-900/60 p-3"
                    >
                      <div className="font-mono text-[9px] uppercase tracking-widest text-iq-teal">
                        Step {step.index}
                      </div>
                      <div className="mt-1 text-[12.5px] font-semibold tracking-tight">
                        {step.label}
                      </div>
                      <p className="mt-2 text-[11px] leading-relaxed text-white/80">
                        {step.whatItDoes}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-1">
                        {[...step.microsoftTools, ...step.oracleTools].map((t) => (
                          <span
                            key={t}
                            className="rounded-full border border-white/10 bg-white/[0.03] px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-widest text-muted"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </article>
        ))}
      </section>

      {/* ====================== CLOUD-PATH MATRIX ========================== */}
      <section className="rounded-2xl border border-white/10 bg-navy-900/70 p-6">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-azure-blue">
            <Workflow className="h-5 w-5" />
          </div>
          <div className="font-mono text-[10px] uppercase tracking-widest text-muted">
            Cloud-path matrix
          </div>
        </div>
        <h2 className="mt-3 text-lg font-semibold tracking-tight md:text-xl">
          Four legitimate destinations. OD@A is the anchor; the other three are honest peer paths.
        </h2>
        <p className="mt-3 max-w-3xl text-[13px] leading-relaxed text-white/80">
          Not every Oracle workload should stay Oracle. The honest framing — and the only credible
          way Microsoft positions Azure as <em>the</em> destination for Oracle workloads — is to
          give every workload a destination that actually fits, including Azure Database for
          PostgreSQL where re-platform is the right answer.
        </p>

        <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {CLOUD_PATHS.map((p) => (
            <article
              key={p.id}
              className={`flex flex-col rounded-xl border ${PATH_BORDER[p.accent]} ${PATH_BG[p.accent]} p-4 ${
                p.isAnchor ? "shadow-[0_0_24px_rgba(199,70,52,0.18)]" : ""
              }`}
            >
              <div className="flex items-center justify-between gap-2">
                <span
                  className={`font-mono text-[9px] uppercase tracking-widest ${PATH_TEXT[p.accent]}`}
                >
                  {p.isAnchor ? "Anchor" : "Peer path"}
                </span>
                {p.isAnchor && (
                  <span className="rounded-full border border-oracle-red/50 bg-oracle-red/10 px-1.5 py-0.5 font-mono text-[8.5px] uppercase tracking-widest text-oracle-red">
                    OD@A
                  </span>
                )}
              </div>
              <div className="mt-1 text-[14px] font-semibold tracking-tight">{p.destination}</div>

              <div className="mt-3 space-y-2.5 text-[11.5px] leading-relaxed text-white/85">
                <div>
                  <div className="font-mono text-[9px] uppercase tracking-widest text-muted">
                    Best for
                  </div>
                  <p className="mt-0.5">{p.bestFor}</p>
                </div>
                <div>
                  <div className="font-mono text-[9px] uppercase tracking-widest text-muted">
                    What&apos;s preserved
                  </div>
                  <p className="mt-0.5">{p.whatItPreserves}</p>
                </div>
                <div>
                  <div className="font-mono text-[9px] uppercase tracking-widest text-muted">
                    What changes
                  </div>
                  <p className="mt-0.5">{p.whatItChanges}</p>
                </div>
              </div>

              <div className={`mt-auto border-t ${PATH_BORDER[p.accent]} pt-2.5`}>
                <div className="font-mono text-[9px] uppercase tracking-widest text-muted">
                  Azure revenue line
                </div>
                <p className={`mt-1 text-[11.5px] leading-snug ${PATH_TEXT[p.accent]}`}>
                  {p.azureRevenueLine}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ===================== TECHNICAL ARCHITECTURE ====================== */}
      <section className="rounded-2xl border border-white/10 bg-navy-900/70 p-6">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-azure-blue">
            <Layers className="h-5 w-5" />
          </div>
          <div className="font-mono text-[10px] uppercase tracking-widest text-muted">
            Technical architecture
          </div>
          <div className="ml-auto hidden font-mono text-[10px] uppercase tracking-widest text-muted md:block">
            Estate → OD@A → IQ stack
          </div>
        </div>
        <h2 className="mt-3 text-lg font-semibold tracking-tight md:text-xl">
          The end-to-end stack — Oracle estate at the bottom, the agentic IQ stack at the top, OD@A in the middle.
        </h2>
        <div className="mt-5">
          <OdaArchitectureDiagram />
        </div>
      </section>

      {/* ====================== CONSUMPTION STORY ========================== */}
      <section className="rounded-2xl border border-iq-teal/30 bg-iq-teal/[0.04] p-6">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-iq-teal/30 bg-iq-teal/10 text-iq-teal">
            <TrendingUp className="h-5 w-5" />
          </div>
          <div className="font-mono text-[10px] uppercase tracking-widest text-muted">
            The consumption story
          </div>
          <div className="ml-auto hidden font-mono text-[10px] uppercase tracking-widest text-muted md:block">
            How OD@A drives Azure ARR at every stage
          </div>
        </div>
        <h2 className="mt-3 text-lg font-semibold tracking-tight md:text-xl">
          Each stage of the journey lights up a distinct revenue line on both sides.
        </h2>
        <p className="mt-3 max-w-3xl text-[13px] leading-relaxed text-white/85">
          The runtime flywheel (per-workflow, five revenue lines per side) is on the exec-summary
          page. This is its mirror — the per-stage flywheel along the modernisation journey itself.
          Both compound.
        </p>

        <div className="mt-5 overflow-x-auto rounded-xl border border-white/10 bg-navy-900/60">
          <table className="w-full text-left text-[12px]">
            <thead className="border-b border-white/10 bg-white/[0.03]">
              <tr>
                <th className="px-4 py-3 font-mono text-[9.5px] uppercase tracking-widest text-muted">
                  Stage
                </th>
                <th className="px-4 py-3 font-mono text-[9.5px] uppercase tracking-widest text-muted">
                  Layer
                </th>
                <th className="px-4 py-3 font-mono text-[9.5px] uppercase tracking-widest text-azure-blue">
                  Microsoft revenue
                </th>
                <th className="px-4 py-3 font-mono text-[9.5px] uppercase tracking-widest text-oracle-red">
                  Oracle revenue
                </th>
                <th className="px-4 py-3 font-mono text-[9.5px] uppercase tracking-widest text-muted">
                  Notes
                </th>
              </tr>
            </thead>
            <tbody>
              {CONSUMPTION_BY_STAGE.map((line, i) => (
                <tr
                  key={line.stageId}
                  className={i % 2 === 0 ? "bg-white/[0.01]" : ""}
                >
                  <td className="px-4 py-3 align-top text-[11.5px] font-semibold tracking-tight text-white">
                    {i + 1}. {line.stageId.charAt(0).toUpperCase() + line.stageId.slice(1)}
                  </td>
                  <td className="px-4 py-3 align-top text-[11.5px] text-white/85">{line.layer}</td>
                  <td className="px-4 py-3 align-top text-[11.5px] text-azure-blue">
                    {line.azureRevenue}
                  </td>
                  <td className="px-4 py-3 align-top text-[11.5px] text-oracle-red">
                    {line.oracleRevenue}
                  </td>
                  <td className="px-4 py-3 align-top text-[11px] text-white/70">{line.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-4 max-w-3xl text-[12px] leading-relaxed text-muted">
          Stages 4 and 5 — modernise + activate — are the compounding lines. OD@A consumption
          increases as more apps modernise on top of it; the IQ stack consumption increases as
          more workloads activate agentically. Neither cannibalises the other.
        </p>
      </section>

      {/* =========================== EXEC ASK ============================== */}
      <section className="rounded-2xl border border-iq-yellow/40 bg-iq-yellow/[0.05] p-6">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-iq-yellow/40 bg-iq-yellow/10 text-iq-yellow">
            <Anchor className="h-5 w-5" />
          </div>
          <div className="font-mono text-[10px] uppercase tracking-widest text-muted">
            The exec ask
          </div>
        </div>
        <h2 className="mt-3 text-lg font-semibold tracking-tight md:text-xl">
          What lighting up OD@A as the anchor requires from Microsoft leadership.
        </h2>

        <ul className="mt-4 grid gap-3 md:grid-cols-2">
          {[
            {
              title: "Name an OD@A landing-zone owner per industry",
              body: "FSI, Manufacturing, Retail, Public Sector — one named technical sponsor each, accountable for the per-vertical reference architecture and the first three customer landings.",
            },
            {
              title: "Fund the discovery accelerator",
              body: "Co-funded with Oracle Cloud Lift; productised assessment that returns a workload inventory, sensitivity catalogue, and per-workload destination recommendation in under 30 days.",
            },
            {
              title: "Lock the cloud-path decision tree as the standard sales asset",
              body: "Make the four-path matrix (OD@A · OCI · Azure PG · hybrid) the canonical answer when the field is asked 'what does Microsoft recommend?' for an Oracle workload.",
            },
            {
              title: "Partner co-funded migration motion",
              body: "Accenture, Deloitte, EY, Capgemini packaged offers for ZDM-led migrations — bundle with Cloud Lift credits and Universal Cloud Credits where they apply.",
            },
          ].map((ask, i) => (
            <li
              key={i}
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
            Make OD@A the default destination Microsoft recommends for Oracle workloads, and the
            agentic IQ stack the default activation layer on top. Every other path remains
            available — but OD@A is the anchor that compounds with Fabric, Foundry, Copilot, and
            Purview rather than competing with them. That is how Azure becomes the destination
            for Oracle workloads.
          </p>
        </div>
      </section>
    </div>
  );
}
