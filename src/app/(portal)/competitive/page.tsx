import { Check, Minus, Swords, X } from "lucide-react";

type Coverage = "yes" | "partial" | "no";

interface Competitor {
  name: string;
  positioning: string;
  ours?: boolean;
  coverage: {
    erp: Coverage;
    hcm: Coverage;
    cx: Coverage;
    finance: Coverage;
    productivity: Coverage;
    agentRuntime: Coverage;
    governance: Coverage;
    multiCloud: Coverage;
  };
  whyShort: string;
}

const COMPETITORS: Competitor[] = [
  {
    name: "Salesforce Agentforce",
    positioning: "CRM-led agents inside the Salesforce ecosystem.",
    coverage: {
      erp: "no",
      hcm: "no",
      cx: "yes",
      finance: "no",
      productivity: "partial",
      agentRuntime: "yes",
      governance: "partial",
      multiCloud: "no",
    },
    whyShort:
      "Strong CRM agent story, but no system-of-record breadth and no native Microsoft 365 surface. Customers still buy a second agentic stack for ERP, HCM, and Finance.",
  },
  {
    name: "SAP Joule",
    positioning: "ERP-led agents inside SAP, with the existing SAP × Microsoft Copilot partnership.",
    coverage: {
      erp: "yes",
      hcm: "yes",
      cx: "partial",
      finance: "yes",
      productivity: "partial",
      agentRuntime: "partial",
      governance: "partial",
      multiCloud: "partial",
    },
    whyShort:
      "SAP and Microsoft already partner on Joule + Copilot. The Enterprise Agent Alliance is complementary — it adds Oracle's data depth where SAP doesn't reach, and gives Microsoft a second strategic system-of-record relationship.",
  },
  {
    name: "ServiceNow Now Assist",
    positioning: "Workflow-led agents inside ServiceNow's platform.",
    coverage: {
      erp: "no",
      hcm: "partial",
      cx: "partial",
      finance: "no",
      productivity: "partial",
      agentRuntime: "yes",
      governance: "partial",
      multiCloud: "partial",
    },
    whyShort:
      "Strong for IT, HR ops, and workflows. Complementary, not competitive — alliance agents call ServiceNow workflows via MCP, ServiceNow stays the workflow engine, the alliance grounds reasoning in Oracle's data of record.",
  },
  {
    name: "Oracle × Microsoft (this alliance)",
    positioning: "System of record + system of work + agent runtime, end-to-end.",
    ours: true,
    coverage: {
      erp: "yes",
      hcm: "yes",
      cx: "yes",
      finance: "yes",
      productivity: "yes",
      agentRuntime: "yes",
      governance: "yes",
      multiCloud: "yes",
    },
    whyShort:
      "The deepest combination of Oracle's data breadth (ERP/HCM/CX/Finance) with Microsoft's worker ubiquity (Copilot, Teams, Outlook) and a full agent runtime (Foundry + Microsoft Agent 365 + Purview) — across both clouds.",
  },
];

const DIMENSIONS: { key: keyof Competitor["coverage"]; label: string; group: string }[] = [
  { key: "erp", label: "ERP", group: "System of record" },
  { key: "hcm", label: "HCM", group: "System of record" },
  { key: "cx", label: "CX / Service", group: "System of record" },
  { key: "finance", label: "Finance", group: "System of record" },
  { key: "productivity", label: "Microsoft 365 surface", group: "System of work" },
  { key: "agentRuntime", label: "Agent runtime", group: "Platform" },
  { key: "governance", label: "End-to-end governance", group: "Platform" },
  { key: "multiCloud", label: "Multi-cloud freedom", group: "Platform" },
];

function CoverageCell({ value }: { value: Coverage }) {
  if (value === "yes")
    return (
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-iq-teal/40 bg-iq-teal/15 text-iq-teal">
        <Check className="h-3.5 w-3.5" strokeWidth={3} />
      </span>
    );
  if (value === "partial")
    return (
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-iq-yellow/40 bg-iq-yellow/15 text-iq-yellow">
        <Minus className="h-3.5 w-3.5" strokeWidth={3} />
      </span>
    );
  return (
    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-muted">
      <X className="h-3.5 w-3.5" strokeWidth={2.5} />
    </span>
  );
}

export default function CompetitivePage() {
  return (
    <div className="space-y-6">
      <section className="rounded-2xl border border-white/10 bg-gradient-to-br from-navy-900/80 via-navy-900/60 to-oracle-red/[0.06] p-6">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-oracle-red">
            <Swords className="h-5 w-5" />
          </div>
          <div className="font-mono text-[10px] uppercase tracking-widest text-muted">
            Competitive landscape
          </div>
          <div className="ml-auto hidden font-mono text-[10px] uppercase tracking-widest text-muted md:block">
            Why nobody else can credibly ship this
          </div>
        </div>
        <h1 className="mt-3 text-xl font-semibold tracking-tight md:text-2xl">
          Three credible adjacents. The Enterprise Agent Alliance pairs the deepest combination
          of system of record + system of work + agent runtime.
        </h1>
        <p className="mt-3 max-w-3xl text-[13.5px] leading-relaxed text-white/85">
          Most agentic-enterprise stories today are single-ecosystem (Salesforce, ServiceNow)
          or built around one system of record (SAP + Microsoft). The Enterprise Agent Alliance
          is the only one that pairs Oracle&apos;s data breadth with Microsoft&apos;s worker
          ubiquity and a full agent runtime — first-mover lead time compounds every quarter
          the alliance is shipping.
        </p>
      </section>

      <section className="overflow-hidden rounded-2xl border border-white/10 bg-navy-900/70">
        <div className="border-b border-white/10 bg-white/[0.03] px-5 py-3 font-mono text-[10px] uppercase tracking-widest text-muted">
          Coverage matrix
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-white/[0.02]">
                <th className="border-b border-white/10 px-3 py-3 font-mono text-[10px] uppercase tracking-widest text-muted">
                  Capability
                </th>
                {COMPETITORS.map((c) => (
                  <th
                    key={c.name}
                    className={`border-b border-white/10 px-3 py-3 text-left font-mono text-[10px] uppercase tracking-widest ${c.ours ? "text-iq-teal" : "text-muted"}`}
                  >
                    {c.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {DIMENSIONS.map((d, idx) => {
                const prevGroup = idx > 0 ? DIMENSIONS[idx - 1].group : null;
                const isGroupStart = d.group !== prevGroup;
                return (
                  <tr
                    key={d.key}
                    className={`border-t border-white/5 ${isGroupStart ? "border-t-white/15" : ""} odd:bg-white/[0.015]`}
                  >
                    <td className="px-3 py-2.5 align-middle">
                      {isGroupStart && (
                        <div className="font-mono text-[9px] uppercase tracking-widest text-muted">
                          {d.group}
                        </div>
                      )}
                      <div className="text-[12.5px] font-medium text-white/90">{d.label}</div>
                    </td>
                    {COMPETITORS.map((c) => (
                      <td
                        key={c.name}
                        className={`px-3 py-2.5 align-middle ${c.ours ? "bg-iq-teal/[0.04]" : ""}`}
                      >
                        <CoverageCell value={c.coverage[d.key]} />
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="flex flex-wrap gap-3 border-t border-white/10 bg-white/[0.02] px-5 py-2.5 font-mono text-[10px] uppercase tracking-widest text-muted">
          <span className="flex items-center gap-1.5">
            <CoverageCell value="yes" /> First-class
          </span>
          <span className="flex items-center gap-1.5">
            <CoverageCell value="partial" /> Partial / via partner
          </span>
          <span className="flex items-center gap-1.5">
            <CoverageCell value="no" /> Not covered
          </span>
        </div>
      </section>

      <section>
        <div className="mb-3">
          <div className="font-mono text-[10px] uppercase tracking-widest text-muted">
            Why each competitor falls short
          </div>
          <div className="text-base font-semibold tracking-tight">
            Strong stories, structurally incomplete
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {COMPETITORS.filter((c) => !c.ours).map((c) => (
            <article
              key={c.name}
              className="rounded-2xl border border-white/10 bg-navy-900/70 p-5"
            >
              <div className="text-base font-semibold tracking-tight">{c.name}</div>
              <div className="mt-1 font-mono text-[10px] uppercase tracking-widest text-muted">
                {c.positioning}
              </div>
              <p className="mt-3 text-[12.5px] leading-relaxed text-white/85">{c.whyShort}</p>
            </article>
          ))}
          <article className="rounded-2xl border border-iq-teal/40 bg-iq-teal/[0.06] p-5">
            <div className="font-mono text-[10px] uppercase tracking-widest text-iq-teal">
              The differentiator
            </div>
            <div className="mt-1 text-base font-semibold tracking-tight">
              The deepest combination of record, work, and reasoning
            </div>
            <p className="mt-3 text-[12.5px] leading-relaxed text-white/85">
              No other coalition pairs a full enterprise system of record with the worker
              surface 4 in 5 enterprises already use. The asymmetry holds — Salesforce
              doesn&apos;t ship Office, SAP and Microsoft already partner but on a narrower
              scope, ServiceNow doesn&apos;t ship ERP. The alliance is the most complete play
              for all four quadrants.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}
