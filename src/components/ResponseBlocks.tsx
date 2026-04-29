import {
  AlertTriangle,
  CalendarClock,
  CheckCircle2,
  FileText,
  Info,
  Mail,
  MessagesSquare,
  Quote,
} from "lucide-react";
import type { ResponseBlock } from "@/lib/data/responses";
import { cn } from "@/lib/utils";

const ACTION_ICONS = {
  mail: Mail,
  teams: MessagesSquare,
  calendar: CalendarClock,
  doc: FileText,
};

export default function ResponseBlocks({
  blocks,
  compact = false,
}: {
  blocks: ResponseBlock[];
  compact?: boolean;
}) {
  return (
    <div className={cn("space-y-3", compact ? "text-[12.5px]" : "text-sm")}>
      {blocks.map((b, i) => (
        <Block key={i} block={b} compact={compact} />
      ))}
    </div>
  );
}

function Block({ block, compact }: { block: ResponseBlock; compact: boolean }) {
  switch (block.kind) {
    case "paragraph":
      return <p className="leading-relaxed text-white/90">{block.text}</p>;

    case "callout": {
      const Icon = block.tone === "warn" ? AlertTriangle : block.tone === "info" ? Info : Info;
      const tone =
        block.tone === "warn"
          ? "border-oracle-red/40 bg-oracle-red/10 text-white"
          : block.tone === "info"
            ? "border-iq-teal/40 bg-iq-teal/10 text-white"
            : "border-white/10 bg-white/[0.04] text-white/85";
      return (
        <div className={cn("flex gap-2.5 rounded-lg border p-3", tone)}>
          <Icon className="mt-0.5 h-4 w-4 shrink-0" />
          <p className="leading-relaxed">{block.text}</p>
        </div>
      );
    }

    case "kpi-row":
      return (
        <div
          className={cn(
            "grid gap-2",
            block.items.length === 4
              ? "grid-cols-2 md:grid-cols-4"
              : block.items.length === 3
                ? "grid-cols-3"
                : "grid-cols-2",
          )}
        >
          {block.items.map((kpi, idx) => (
            <div
              key={idx}
              className="rounded-lg border border-white/10 bg-white/[0.03] p-3"
            >
              <div className="font-mono text-[9px] uppercase tracking-widest text-muted">
                {kpi.label}
              </div>
              <div className="mt-1 text-base font-semibold tracking-tight md:text-lg">
                {kpi.value}
              </div>
              {kpi.trend && (
                <div className="mt-0.5 text-[11px] text-muted">{kpi.trend}</div>
              )}
            </div>
          ))}
        </div>
      );

    case "table":
      return (
        <div className="overflow-hidden rounded-lg border border-white/10">
          {block.caption && (
            <div className="border-b border-white/10 bg-white/[0.03] px-3 py-2 font-mono text-[10px] uppercase tracking-widest text-muted">
              {block.caption}
            </div>
          )}
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-white/[0.02]">
                  {block.columns.map((c) => (
                    <th
                      key={c}
                      className="border-b border-white/10 px-3 py-2 font-mono text-[10px] uppercase tracking-widest text-muted"
                    >
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row, rIdx) => (
                  <tr
                    key={rIdx}
                    className="border-t border-white/5 odd:bg-white/[0.015]"
                  >
                    {row.map((cell, cIdx) => (
                      <td
                        key={cIdx}
                        className={cn(
                          "px-3 py-2 align-top",
                          compact ? "text-[12px]" : "text-[12.5px]",
                          cIdx === 0 ? "font-medium" : "text-white/85",
                        )}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {block.citation && (
            <div className="flex items-center gap-1.5 border-t border-white/10 bg-white/[0.02] px-3 py-1.5 font-mono text-[10px] text-muted">
              <Quote className="h-3 w-3" />
              Source · {block.citation}
            </div>
          )}
        </div>
      );

    case "list": {
      const Tag = block.ordered ? "ol" : "ul";
      return (
        <div>
          {block.title && (
            <div className="mb-1.5 font-mono text-[10px] uppercase tracking-widest text-muted">
              {block.title}
            </div>
          )}
          <Tag
            className={cn(
              "space-y-1.5 pl-5",
              block.ordered ? "list-decimal" : "list-disc",
            )}
          >
            {block.items.map((it, idx) => (
              <li key={idx} className="leading-relaxed text-white/85 marker:text-muted">
                {it}
              </li>
            ))}
          </Tag>
        </div>
      );
    }

    case "citations":
      return (
        <div className="rounded-lg border border-white/10 bg-white/[0.02] p-3">
          <div className="mb-1.5 flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-muted">
            <Quote className="h-3 w-3" /> Grounding sources
          </div>
          <ul className="space-y-1">
            {block.sources.map((s, idx) => (
              <li
                key={idx}
                className="flex items-center gap-2 font-mono text-[11px] text-white/75"
              >
                <CheckCircle2 className="h-3 w-3 text-iq-teal" />
                {s}
              </li>
            ))}
          </ul>
        </div>
      );

    case "action-card": {
      const Icon = ACTION_ICONS[block.icon];
      return (
        <div className="flex items-start gap-3 rounded-lg border border-iq-teal/30 bg-gradient-to-br from-iq-teal/[0.08] to-transparent p-3">
          <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-iq-teal/40 bg-iq-teal/10 text-iq-teal">
            <Icon className="h-4 w-4" />
          </div>
          <div className="flex-1">
            <div className="text-sm font-semibold">{block.title}</div>
            <div className="mt-1 text-[12.5px] leading-relaxed text-white/80">
              {block.detail}
            </div>
          </div>
          <div className="self-center rounded-md border border-iq-teal/40 bg-iq-teal/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-iq-teal">
            {block.cta}
          </div>
        </div>
      );
    }

    default:
      return null;
  }
}
