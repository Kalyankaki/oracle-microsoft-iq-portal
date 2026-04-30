import { Building2, Cloud, Handshake, Microscope } from "lucide-react";

interface ValueLens {
  audience: string;
  audienceShort: string;
  headline: string;
  bullets: string[];
  accent: "teal" | "oracle" | "azure";
}

const LENSES: ValueLens[] = [
  {
    audience: "For the Customer",
    audienceShort: "The buyer",
    headline:
      "One stack, one governance model, one bill of materials — agents that work where the work happens.",
    bullets: [
      "One vendor stack — no integration tax, no finger-pointing when something breaks.",
      "Time-to-value in weeks, not quarters — the Ontology and Governance bridges do the heavy lifting.",
      "End-to-end governance — Oracle Data Safe classifications flow into Microsoft Purview, so security teams say yes.",
      "Agents run wherever the worker is — Outlook, Teams, Fusion, the field — no UI sprawl.",
      "Single bill of materials for the audit committee — clear lineage from Oracle source to Copilot answer.",
    ],
    accent: "teal",
  },
  {
    audience: "For Oracle",
    audienceShort: "Apps · OCI · Database",
    headline:
      "Make Oracle the highest-leverage source of record for agentic AI — Fusion AI Agents and the alliance stack interoperate, both win.",
    bullets: [
      "Reach the worker wherever they are — extend Fusion's surface beyond Fusion-native UIs into Microsoft 365 without a separate UI investment.",
      "Differentiation vs. SAP and Workday — Oracle is the system of record paired most deeply with the Microsoft worker stack.",
      "Deepens the Fusion moat — every agentic conversation reinforces Oracle as the source of record for the answer.",
      "Foundry agents pull from Oracle Database@Azure and OCI — consumption flows accrue to Oracle in lockstep with Fabric capacity on the Microsoft side.",
      "Fusion AI Agents and alliance agents interoperate — Oracle keeps strategic control of the agentic experience inside Fusion.",
    ],
    accent: "oracle",
  },
  {
    audience: "For Microsoft",
    audienceShort: "Copilot · Foundry · M365",
    headline:
      "Lead the joint-stack agentic category — close the largest unaddressed enterprise data segment for Copilot before it gets defined by competitors.",
    bullets: [
      "Closes the largest unaddressed enterprise data segment for Copilot — Oracle ERP, HCM, CX, Finance.",
      "Lead the joint-stack category before competitors define it — Salesforce Agentforce and other coalitions are racing to the same seam.",
      "Foundry, Microsoft Agent 365, and Purview each get a marquee anchor customer base — credibility for the whole platform.",
      "Joint enterprise GTM at SLT level — strongest co-sell signal Microsoft can send to the field.",
      "Hard differentiation vs. Google + AWS in the agent platform race — Oracle's data depth is a strategic asset neither hyperscaler can replicate.",
    ],
    accent: "azure",
  },
];

const ACCENT_BORDER = {
  teal: "border-iq-teal/30",
  oracle: "border-oracle-red/40",
  azure: "border-azure-blue/40",
};

const ACCENT_BG = {
  teal: "bg-iq-teal/[0.05]",
  oracle: "bg-oracle-red/[0.05]",
  azure: "bg-azure-blue/[0.05]",
};

const ACCENT_ICON = {
  teal: "border-iq-teal/30 bg-iq-teal/10 text-iq-teal",
  oracle: "border-oracle-red/40 bg-oracle-red/10 text-oracle-red",
  azure: "border-azure-blue/40 bg-azure-blue/10 text-azure-blue",
};

const ICONS = {
  teal: Building2,
  oracle: Cloud,
  azure: Microscope,
};

export default function JointValuePage() {
  return (
    <div className="space-y-6">
      <section className="rounded-2xl border border-white/10 bg-gradient-to-br from-navy-900/80 via-navy-900/60 to-iq-teal/[0.06] p-6">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-iq-teal">
            <Handshake className="h-5 w-5" />
          </div>
          <div className="font-mono text-[10px] uppercase tracking-widest text-muted">
            Joint value proposition
          </div>
          <div className="ml-auto hidden font-mono text-[10px] uppercase tracking-widest text-muted md:block">
            The Enterprise Agent Alliance
          </div>
        </div>
        <h1 className="mt-3 text-xl font-semibold tracking-tight md:text-2xl">
          Three audiences. One alliance. The case lands the same way for each.
        </h1>
        <p className="mt-3 max-w-3xl text-[13.5px] leading-relaxed text-white/85">
          The Enterprise Agent Alliance is only worth doing if it works for all three sides at
          once — the customer, Oracle, and Microsoft. Here&apos;s how the value lands for each.
        </p>
      </section>

      <div className="grid gap-4 md:grid-cols-3">
        {LENSES.map((lens) => {
          const Icon = ICONS[lens.accent];
          return (
            <article
              key={lens.audience}
              className={`flex flex-col rounded-2xl border ${ACCENT_BORDER[lens.accent]} ${ACCENT_BG[lens.accent]} p-5`}
            >
              <div className="flex items-start gap-3">
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border ${ACCENT_ICON[lens.accent]}`}
                >
                  <Icon className="h-5 w-5" strokeWidth={2} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-base font-semibold tracking-tight">{lens.audience}</div>
                  <div className="mt-0.5 font-mono text-[10px] uppercase tracking-widest text-muted">
                    {lens.audienceShort}
                  </div>
                </div>
              </div>
              <p className="mt-4 text-[13px] font-medium leading-relaxed text-white">
                {lens.headline}
              </p>
              <ul className="mt-4 space-y-2.5">
                {lens.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex gap-2 text-[12.5px] leading-relaxed text-white/85"
                  >
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-white/40" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>

      <section className="rounded-2xl border border-iq-yellow/40 bg-iq-yellow/[0.05] p-5">
        <div className="font-mono text-[10px] uppercase tracking-widest text-muted">
          The pitch in one line
        </div>
        <p className="mt-2 text-[14px] leading-relaxed text-white/90">
          <span className="text-oracle-red">Oracle</span> anchors the system of record.{" "}
          <span className="text-azure-blue">Microsoft</span> extends the system of work. Each
          side keeps strategic surface area in the other&apos;s domain — Oracle in Fusion-native
          experiences, Microsoft in Dynamics — and they meet in the agent layer to ship a stack
          neither can deliver alone.
        </p>
      </section>
    </div>
  );
}
