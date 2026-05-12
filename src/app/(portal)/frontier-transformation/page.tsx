import Link from "next/link";
import {
  Boxes,
  Brain,
  Briefcase,
  Compass,
  Layers,
  Network,
  Server,
  Shield,
  TrendingUp,
  Users,
  Workflow,
} from "lucide-react";
import FrontierAiOpsStack from "@/components/FrontierAiOpsStack";
import FrontierThreePillars from "@/components/FrontierThreePillars";
import {
  AGENT_INTEROP_LANES,
  AIOPS_AGENTS,
  AIOPS_PILLARS,
  ASK_COMMITS,
  BIZ_OPS_LAYERS,
  FRONTIER_OUTCOMES,
  WORKSTREAMS,
  WVI_PROPERTIES,
  type AgentInteropLane,
  type BizOpsLayer,
  type FrontierOutcome,
  type Workstream,
} from "@/lib/data/frontier-transformation";

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

const OUTCOME_ICON: Record<FrontierOutcome["iconKey"], typeof Users> = {
  users: Users,
  shield: Shield,
  "trending-up": TrendingUp,
  compass: Compass,
};

const OUTCOME_ACCENT: Record<FrontierOutcome["iconKey"], Accent> = {
  users: "yellow",
  shield: "azure",
  "trending-up": "teal",
  compass: "oracle",
};

const WORKSTREAM_ICON: Record<Workstream["id"], typeof Layers> = {
  "data-estate": Layers,
  "biz-ops": Workflow,
  "infra-ops": Server,
};

const LAYER_ICON: Record<BizOpsLayer["id"], typeof Boxes> = {
  "app-stack": Boxes,
  "agent-framework": Brain,
  "iq-layer": Layers,
  a365: Workflow,
  governance: Shield,
};

export default function FrontierTransformationPage() {
  return (
    <div className="space-y-6">
      {/* ============================== HERO ============================== */}
      <section className="rounded-2xl border border-white/10 bg-gradient-to-br from-navy-900/80 via-navy-900/60 to-iq-teal/[0.07] p-6">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-iq-teal/40 bg-iq-teal/10 text-iq-teal">
            <Compass className="h-5 w-5" />
          </div>
          <div className="font-mono text-[10px] uppercase tracking-widest text-muted">
            Frontier Transformation · Biz Ops + Infra Ops
          </div>
          <div className="ml-auto hidden font-mono text-[10px] uppercase tracking-widest text-muted md:block">
            Make Azure the best place to run Oracle workloads
          </div>
        </div>
        <h1 className="mt-3 text-xl font-semibold tracking-tight md:text-2xl">
          Three coordinated workstreams. One outcome: the frontier firm running on Azure.
        </h1>
        <p className="mt-3 max-w-3xl text-[13.5px] leading-relaxed text-white/85">
          OD@A anchors the data estate. The Microsoft Agent Framework — deeply rooted in the
          Microsoft ecosystem (Fabric IQ, Foundry IQ, Work IQ, Microsoft Agent 365, Purview) —
          modernises business operations on top of it. The Workload Virtual Instance becomes the
          unit for AIOps, with proactive and reactive agents on a Common Agent Platform anchored
          on Quality, Resiliency, and Security. Microsoft and Oracle agents interoperate over MCP,
          A2A, and Fabric Mirror across all three workstreams.
        </p>
      </section>

      {/* ===================== §2 THREE WORKSTREAMS ======================== */}
      <section className="rounded-2xl border border-white/10 bg-navy-900/70 p-6">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-iq-yellow">
            <Layers className="h-5 w-5" />
          </div>
          <div className="font-mono text-[10px] uppercase tracking-widest text-muted">
            The frame
          </div>
          <div className="ml-auto hidden font-mono text-[10px] uppercase tracking-widest text-muted md:block">
            Data · Biz · Infra
          </div>
        </div>
        <h2 className="mt-3 text-lg font-semibold tracking-tight md:text-xl">
          Three workstreams in one frame.
        </h2>
        <p className="mt-3 max-w-3xl text-[13px] leading-relaxed text-white/80">
          Each workstream lands a partial outcome on its own. Together they land the frontier-firm
          outcome — the customer can&apos;t get there from one workstream alone.
        </p>
        <div className="mt-5">
          <FrontierThreePillars />
        </div>

        {/* Workstream summary cards */}
        <div className="mt-5 grid gap-3 md:grid-cols-3">
          {WORKSTREAMS.map((w) => {
            const Icon = WORKSTREAM_ICON[w.id];
            return (
              <article
                key={w.id}
                className={`flex flex-col rounded-xl border ${ACCENT_BORDER[w.accent]} ${ACCENT_BG[w.accent]} p-4`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-9 w-9 items-center justify-center rounded-lg border ${ACCENT_BORDER[w.accent]} bg-white/[0.04] ${ACCENT_TEXT[w.accent]}`}
                  >
                    <Icon className="h-4 w-4" strokeWidth={2} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-mono text-[9.5px] uppercase tracking-widest text-muted">
                      Workstream {w.index}
                    </div>
                    <div className="text-[14px] font-semibold tracking-tight">{w.shortLabel}</div>
                  </div>
                  <span
                    className={`rounded-full border px-2 py-0.5 font-mono text-[9px] uppercase tracking-widest ${ACCENT_CHIP[w.accent]}`}
                  >
                    {w.primaryAgentsOn}
                  </span>
                </div>
                <p className="mt-3 text-[12px] leading-relaxed text-white/85">{w.oneLiner}</p>
                <div className={`mt-3 border-t pt-2.5 ${ACCENT_BORDER[w.accent]}`}>
                  <div className="font-mono text-[9px] uppercase tracking-widest text-muted">
                    Outcome
                  </div>
                  <p className={`mt-1 text-[11.5px] leading-snug ${ACCENT_TEXT[w.accent]}`}>
                    {w.outcome}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* ============== §3 WORKSTREAM 1 · DATA ESTATE (recap) ============== */}
      <section className="rounded-2xl border border-oracle-red/40 bg-oracle-red/[0.05] p-6">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-oracle-red/40 bg-oracle-red/10 text-oracle-red">
            <Layers className="h-5 w-5" />
          </div>
          <div className="font-mono text-[10px] uppercase tracking-widest text-muted">
            Workstream 1 · Data Estate Modernisation
          </div>
          <Link
            href="/oda-frontier"
            className="ml-auto font-mono text-[10px] uppercase tracking-widest text-oracle-red hover:underline"
          >
            Full detail · /oda-frontier ↗
          </Link>
        </div>
        <h2 className="mt-3 text-lg font-semibold tracking-tight md:text-xl">
          OD@A is the anchor. Three peer paths cover everything else.
        </h2>
        <p className="mt-3 max-w-3xl text-[13px] leading-relaxed text-white/85">
          Every Oracle workload has a destination — Oracle Database@Azure (the anchor), Oracle DB
          on OCI, Azure Database for PostgreSQL, or stay-on-prem hybrid. The customer journey
          (Discover → Plan → Migrate → Modernise → Activate) lands every workload on a compliant,
          supported version. The agentic stack grounds on whatever lives where it lands. Full
          architecture, journey diagram, and consumption story live on the OD@A Frontier page.
        </p>
        <div className="mt-5 grid gap-3 text-[12px] md:grid-cols-4">
          <div className="rounded-lg border border-oracle-red/50 bg-oracle-red/[0.10] p-3">
            <div className="font-mono text-[9px] uppercase tracking-widest text-oracle-red">
              Anchor
            </div>
            <div className="mt-1 text-[13px] font-semibold tracking-tight">
              Oracle Database@Azure
            </div>
            <p className="mt-1 text-[11px] leading-snug text-white/80">
              Exadata · Autonomous · Database Service. Native Fabric Mirror.
            </p>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/[0.02] p-3">
            <div className="font-mono text-[9px] uppercase tracking-widest text-muted">
              Peer path
            </div>
            <div className="mt-1 text-[13px] font-semibold tracking-tight">Oracle DB on OCI</div>
            <p className="mt-1 text-[11px] leading-snug text-white/80">
              Multicloud · sovereign · OCI-deep customers.
            </p>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/[0.02] p-3">
            <div className="font-mono text-[9px] uppercase tracking-widest text-muted">
              Peer path
            </div>
            <div className="mt-1 text-[13px] font-semibold tracking-tight">
              Azure DB for PostgreSQL
            </div>
            <p className="mt-1 text-[11px] leading-snug text-white/80">
              Re-platform target for open-source-compatible workloads.
            </p>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/[0.02] p-3">
            <div className="font-mono text-[9px] uppercase tracking-widest text-muted">
              Peer path
            </div>
            <div className="mt-1 text-[13px] font-semibold tracking-tight">
              Stay on-prem (hybrid)
            </div>
            <p className="mt-1 text-[11px] leading-snug text-white/80">
              Stranded / regulated workloads with hybrid Fabric mirror.
            </p>
          </div>
        </div>
      </section>

      {/* =============== §4 WORKSTREAM 2 · BIZ OPS MODERNISATION =========== */}
      <section className="rounded-2xl border border-azure-blue/30 bg-azure-blue/[0.04] p-6">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-azure-blue/40 bg-azure-blue/10 text-azure-blue">
            <Workflow className="h-5 w-5" />
          </div>
          <div className="font-mono text-[10px] uppercase tracking-widest text-muted">
            Workstream 2 · Business Ops Modernisation
          </div>
        </div>
        <h2 className="mt-3 text-lg font-semibold tracking-tight md:text-xl">
          App stack to cloud standards. Agents on the Microsoft Agent Framework.
        </h2>
        <p className="mt-3 max-w-3xl text-[13px] leading-relaxed text-white/85">
          Modernise the apps that ride on the Oracle data of record. Then build agents on the
          Microsoft Agent Framework — deeply rooted in the IQ layer, Microsoft Agent 365, and
          Purview. The agents interoperate with Oracle Fusion AI Agents via MCP, A2A, and Fabric
          Mirror. The worker sees one Copilot surface; under the hood, the right agent does the
          right thing.
        </p>

        <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {BIZ_OPS_LAYERS.map((layer) => {
            const Icon = LAYER_ICON[layer.id];
            return (
              <article
                key={layer.id}
                className={`flex flex-col rounded-xl border ${ACCENT_BORDER[layer.accent]} bg-navy-900/60 p-4`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-9 w-9 items-center justify-center rounded-lg border ${ACCENT_BORDER[layer.accent]} bg-white/[0.04] ${ACCENT_TEXT[layer.accent]}`}
                  >
                    <Icon className="h-4 w-4" strokeWidth={2} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-mono text-[9px] uppercase tracking-widest text-muted">
                      Layer {layer.index}
                    </div>
                    <div className="text-[13px] font-semibold tracking-tight">{layer.label}</div>
                  </div>
                </div>
                <p className="mt-2 text-[12px] leading-relaxed text-white/85">
                  {layer.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-1">
                  {layer.components.map((c) => (
                    <span
                      key={c}
                      className={`rounded-full border px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-widest ${ACCENT_CHIP[layer.accent]}`}
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* ========== §5 JOINT AGENT ECOSYSTEM (Microsoft × Oracle) ========== */}
      <section className="rounded-2xl border border-white/10 bg-navy-900/70 p-6">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-iq-teal">
            <Network className="h-5 w-5" />
          </div>
          <div className="font-mono text-[10px] uppercase tracking-widest text-muted">
            Joint agent ecosystem
          </div>
          <div className="ml-auto hidden font-mono text-[10px] uppercase tracking-widest text-muted md:block">
            MCP · A2A · Fabric Mirror
          </div>
        </div>
        <h2 className="mt-3 text-lg font-semibold tracking-tight md:text-xl">
          Microsoft and Oracle agents call each other as peers.
        </h2>
        <p className="mt-3 max-w-3xl text-[13px] leading-relaxed text-white/85">
          Three interop lanes carry agent traffic between the two stacks. MCP for tool-style
          handoffs, Fabric Mirror for the data plane, A2A for true peer-to-peer agent
          orchestration. Together they make a single chat thread span both ecosystems without the
          worker ever leaving Microsoft Copilot.
        </p>

        <div className="mt-5 grid gap-3 md:grid-cols-3">
          {AGENT_INTEROP_LANES.map((lane: AgentInteropLane) => (
            <article
              key={lane.id}
              className={`flex flex-col rounded-xl border ${ACCENT_BORDER[lane.accent]} ${ACCENT_BG[lane.accent]} p-4`}
            >
              <div className="flex items-center justify-between gap-2">
                <div className={`font-mono text-[9px] uppercase tracking-widest ${ACCENT_TEXT[lane.accent]}`}>
                  {lane.direction}
                </div>
                <div className="font-mono text-[9px] uppercase tracking-widest text-muted">
                  {lane.protocol}
                </div>
              </div>
              <div className="mt-1 text-[14px] font-semibold tracking-tight">{lane.label}</div>
              <p className="mt-2 text-[11.5px] leading-relaxed text-white/85">{lane.whatItDoes}</p>
              <div className={`mt-3 border-t pt-2.5 ${ACCENT_BORDER[lane.accent]}`}>
                <div className="font-mono text-[9px] uppercase tracking-widest text-muted">
                  Example
                </div>
                <p className={`mt-1 text-[11px] leading-snug ${ACCENT_TEXT[lane.accent]}`}>
                  {lane.example}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* =============== §6 WORKSTREAM 3 · INFRA OPS + WVI ================ */}
      <section className="rounded-2xl border border-iq-teal/40 bg-iq-teal/[0.05] p-6">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-iq-teal/40 bg-iq-teal/10 text-iq-teal">
            <Server className="h-5 w-5" />
          </div>
          <div className="font-mono text-[10px] uppercase tracking-widest text-muted">
            Workstream 3 · Infrastructure Ops Modernisation
          </div>
        </div>
        <h2 className="mt-3 text-lg font-semibold tracking-tight md:text-xl">
          The Workload Virtual Instance is the new unit of AIOps.
        </h2>
        <p className="mt-3 max-w-3xl text-[13px] leading-relaxed text-white/85">
          A Workload Virtual Instance (WVI) is a cross-resource-group construct that wraps
          everything one business workload needs into a single envelope — and becomes the unit
          AIOps agents reason about. Health, drift, RCA, remediation: all scoped to the WVI, not
          individual resources.
        </p>

        {/* WVI properties */}
        <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {WVI_PROPERTIES.map((p) => (
            <div
              key={p.id}
              className="rounded-xl border border-white/10 bg-navy-900/60 p-4"
            >
              <div className="font-mono text-[9.5px] uppercase tracking-widest text-iq-teal">
                {p.label}
              </div>
              <p className="mt-1.5 text-[11.5px] leading-relaxed text-white/85">{p.body}</p>
            </div>
          ))}
        </div>

        {/* AIOps stack diagram */}
        <div className="mt-6">
          <FrontierAiOpsStack />
        </div>

        {/* AIOps agents detail */}
        <div className="mt-5 grid gap-3 md:grid-cols-2">
          {AIOPS_AGENTS.map((agent) => {
            const accent: Accent = agent.mode === "Proactive" ? "azure" : "oracle";
            return (
              <article
                key={agent.id}
                className={`rounded-xl border ${ACCENT_BORDER[accent]} ${ACCENT_BG[accent]} p-4`}
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="text-[14px] font-semibold tracking-tight">{agent.label}</div>
                  <span
                    className={`rounded-full border px-2 py-0.5 font-mono text-[9px] uppercase tracking-widest ${ACCENT_CHIP[accent]}`}
                  >
                    {agent.mode}
                  </span>
                </div>
                <p className="mt-2 text-[12px] leading-relaxed text-white/85">
                  {agent.description}
                </p>
                <div className={`mt-3 border-t pt-2.5 ${ACCENT_BORDER[accent]}`}>
                  <div className="font-mono text-[9px] uppercase tracking-widest text-muted">
                    Signals it watches
                  </div>
                  <div className="mt-1.5 flex flex-wrap gap-1">
                    {agent.signals.map((s) => (
                      <span
                        key={s}
                        className={`rounded-full border px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-widest ${ACCENT_CHIP[accent]}`}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* AIOps pillars detail */}
        <div className="mt-5 grid gap-3 md:grid-cols-3">
          {AIOPS_PILLARS.map((p) => (
            <div
              key={p.id}
              className="rounded-xl border border-white/10 bg-navy-900/60 p-4"
            >
              <div className="font-mono text-[9.5px] uppercase tracking-widest text-azure-blue">
                Pillar
              </div>
              <div className="mt-1 text-[13px] font-semibold tracking-tight">{p.label}</div>
              <p className="mt-2 text-[11.5px] leading-relaxed text-white/85">{p.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===================== §7 UNIFIED OUTCOME ========================== */}
      <section className="rounded-2xl border border-iq-yellow/40 bg-iq-yellow/[0.05] p-6">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-iq-yellow/40 bg-iq-yellow/10 text-iq-yellow">
            <Compass className="h-5 w-5" />
          </div>
          <div className="font-mono text-[10px] uppercase tracking-widest text-muted">
            The unified outcome
          </div>
        </div>
        <h2 className="mt-3 text-lg font-semibold tracking-tight md:text-xl">
          What the frontier firm looks like — across four stakeholder lenses.
        </h2>
        <p className="mt-3 max-w-3xl text-[13px] leading-relaxed text-white/85">
          Every workstream lands a piece. Together they land a firm where work, ops, and
          governance all run agent-augmented and data-grounded by default.
        </p>

        <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {FRONTIER_OUTCOMES.map((o: FrontierOutcome) => {
            const Icon = OUTCOME_ICON[o.iconKey];
            const accent = OUTCOME_ACCENT[o.iconKey];
            return (
              <article
                key={o.id}
                className={`flex flex-col rounded-xl border ${ACCENT_BORDER[accent]} bg-navy-900/60 p-4`}
              >
                <div
                  className={`flex h-9 w-9 items-center justify-center rounded-lg border ${ACCENT_BORDER[accent]} bg-white/[0.04] ${ACCENT_TEXT[accent]}`}
                >
                  <Icon className="h-4 w-4" strokeWidth={2} />
                </div>
                <div className="mt-3 text-[13.5px] font-semibold tracking-tight">{o.label}</div>
                <div className="mt-1 font-mono text-[9px] uppercase tracking-widest text-muted">
                  {o.whoBenefits}
                </div>
                <p className="mt-2 text-[11.5px] leading-relaxed text-white/85">{o.whatChanges}</p>
              </article>
            );
          })}
        </div>
      </section>

      {/* ============================ §8 ASK =============================== */}
      <section className="rounded-2xl border border-iq-teal/40 bg-gradient-to-br from-navy-900/80 via-navy-900/60 to-iq-teal/[0.08] p-6">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-iq-teal/40 bg-iq-teal/10 text-iq-teal">
            <Briefcase className="h-5 w-5" />
          </div>
          <div className="font-mono text-[10px] uppercase tracking-widest text-muted">
            The ask
          </div>
        </div>
        <h2 className="mt-3 text-lg font-semibold tracking-tight md:text-xl">
          Four commits — one per workstream, one joint — to ship this in the next 12 months.
        </h2>

        <ul className="mt-4 grid gap-3 md:grid-cols-2">
          {ASK_COMMITS.map((c) => (
            <li key={c.id} className="rounded-xl border border-white/10 bg-navy-900/60 p-4">
              <div className="font-mono text-[10px] uppercase tracking-widest text-iq-teal">
                {c.title}
              </div>
              <p className="mt-1.5 text-[12.5px] leading-relaxed text-white/85">{c.body}</p>
            </li>
          ))}
        </ul>

        <div className="mt-5 rounded-xl border border-iq-teal/40 bg-iq-teal/[0.08] p-4">
          <div className="font-mono text-[10px] uppercase tracking-widest text-iq-teal">
            The bet
          </div>
          <p className="mt-1.5 text-[13px] leading-relaxed text-white/90">
            Make Azure the destination Oracle workloads land on, the place their apps modernise
            on top of, and the surface their agents run from. Three workstreams, one bet — a
            frontier-firm operating model where Oracle data, Microsoft agents, and AIOps all
            speak the same language inside a Workload Virtual Instance.
          </p>
        </div>
      </section>
    </div>
  );
}
