// Three-workstream frame for the Frontier Transformation page.
// Top band: the goal. Below: three vertical workstream columns (Data Estate,
// Biz Ops, Infra Ops) that converge on a bottom outcome band.

import { WORKSTREAMS } from "@/lib/data/frontier-transformation";

const W = 960;
const H = 480;

const ACCENT_HEX: Record<string, { stroke: string; fill: string; chip: string }> = {
  oracle: { stroke: "rgba(199,70,52,0.7)", fill: "rgba(199,70,52,0.10)", chip: "#C74634" },
  azure: { stroke: "rgba(0,120,212,0.7)", fill: "rgba(0,120,212,0.10)", chip: "#0078D4" },
  yellow: { stroke: "rgba(255,214,0,0.7)", fill: "rgba(255,214,0,0.10)", chip: "#FFD600" },
  teal: { stroke: "rgba(45,212,191,0.7)", fill: "rgba(45,212,191,0.10)", chip: "#2DD4BF" },
};

export default function FrontierThreePillars() {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-navy-900/70">
      <div className="border-b border-white/10 bg-white/[0.03] px-5 py-3 font-mono text-[10px] uppercase tracking-widest text-muted">
        Three workstreams · one outcome · make Azure the best place to run Oracle workloads
      </div>
      <div className="p-4 md:p-6">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          role="img"
          aria-label="Three workstreams converging on a single goal: make Azure the best place to run Oracle workloads. From left to right: Data Estate Modernisation (anchored on Oracle Database@Azure), Business Ops Modernisation (apps plus Microsoft Agent Framework), and Infrastructure Ops Modernisation (Workload Virtual Instance + AIOps). All three converge on a unified frontier-firm outcome."
          className="block h-auto w-full"
        >
          <defs>
            <marker
              id="three-arrow"
              viewBox="0 0 10 10"
              refX="9"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#94A3B8" />
            </marker>
          </defs>

          {/* Goal band at the top */}
          <rect
            x="40"
            y="30"
            width={W - 80}
            height="58"
            rx="10"
            fill="rgba(255,214,0,0.10)"
            stroke="#FFD600"
            strokeOpacity="0.7"
            strokeWidth="1.75"
          />
          <text
            x={W / 2}
            y="58"
            textAnchor="middle"
            fontFamily="JetBrains Mono, monospace"
            fontSize="10"
            letterSpacing="2"
            fill="#FFD600"
          >
            THE GOAL
          </text>
          <text
            x={W / 2}
            y="80"
            textAnchor="middle"
            fontFamily="Inter, sans-serif"
            fontSize="16"
            fontWeight="700"
            fill="#fff"
          >
            Make Azure the best place to run Oracle workloads.
          </text>

          {/* Three workstream columns */}
          {WORKSTREAMS.map((w, i) => {
            const colW = (W - 100) / 3 - 10;
            const colX = 40 + i * (colW + 15);
            const accent = ACCENT_HEX[w.accent];
            return (
              <g key={w.id}>
                {/* Column card */}
                <rect
                  x={colX}
                  y="120"
                  width={colW}
                  height="230"
                  rx="12"
                  fill={accent.fill}
                  stroke={accent.stroke}
                  strokeWidth="1.5"
                />
                {/* Number chip */}
                <circle
                  cx={colX + 28}
                  cy="146"
                  r="14"
                  fill="rgba(11,18,32,0.95)"
                  stroke={accent.chip}
                  strokeWidth="1.5"
                />
                <text
                  x={colX + 28}
                  y="151"
                  textAnchor="middle"
                  fontFamily="JetBrains Mono, monospace"
                  fontSize="12"
                  fontWeight="600"
                  fill={accent.chip}
                >
                  {w.index}
                </text>
                {/* Workstream label */}
                <text
                  x={colX + 52}
                  y="145"
                  fontFamily="Inter, sans-serif"
                  fontSize="11"
                  letterSpacing="1.5"
                  fill={accent.chip}
                  fontWeight="700"
                >
                  WORKSTREAM {w.index}
                </text>
                <text
                  x={colX + 52}
                  y="162"
                  fontFamily="Inter, sans-serif"
                  fontSize="16"
                  fontWeight="700"
                  fill="#fff"
                >
                  {w.shortLabel}
                </text>

                {/* One-liner wrapped */}
                <foreignObject x={colX + 16} y="180" width={colW - 32} height="100">
                  <div
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "11.5px",
                      lineHeight: "1.45",
                      color: "rgba(255,255,255,0.85)",
                    }}
                  >
                    {w.oneLiner}
                  </div>
                </foreignObject>

                {/* Outcome strip */}
                <line
                  x1={colX + 16}
                  y1="290"
                  x2={colX + colW - 16}
                  y2="290"
                  stroke={accent.chip}
                  strokeOpacity="0.45"
                  strokeWidth="1"
                />
                <text
                  x={colX + 16}
                  y="304"
                  fontFamily="JetBrains Mono, monospace"
                  fontSize="9"
                  letterSpacing="1.5"
                  fill={accent.chip}
                >
                  OUTCOME
                </text>
                <foreignObject x={colX + 16} y="310" width={colW - 32} height="40">
                  <div
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "10.5px",
                      lineHeight: "1.4",
                      color: accent.chip,
                      fontWeight: 600,
                    }}
                  >
                    {w.outcome.split(".")[0]}.
                  </div>
                </foreignObject>

                {/* Bottom accent strip */}
                <rect
                  x={colX}
                  y="345"
                  width={colW}
                  height="5"
                  rx="0"
                  fill={accent.chip}
                />

                {/* Convergence arrow down to outcome band */}
                <line
                  x1={colX + colW / 2}
                  y1="360"
                  x2={W / 2}
                  y2="395"
                  stroke="#94A3B8"
                  strokeOpacity="0.5"
                  strokeWidth="1.25"
                  strokeDasharray="4 3"
                  markerEnd="url(#three-arrow)"
                />
              </g>
            );
          })}

          {/* Bottom outcome band */}
          <rect
            x="40"
            y="402"
            width={W - 80}
            height="58"
            rx="10"
            fill="rgba(45,212,191,0.12)"
            stroke="#2DD4BF"
            strokeOpacity="0.85"
            strokeWidth="2"
          />
          <text
            x={W / 2}
            y="425"
            textAnchor="middle"
            fontFamily="Inter, sans-serif"
            fontSize="14"
            fontWeight="700"
            fill="#fff"
          >
            The frontier firm — agent-augmented, data-grounded, cross-stack, governed by default
          </text>
          <text
            x={W / 2}
            y="448"
            textAnchor="middle"
            fontFamily="JetBrains Mono, monospace"
            fontSize="10"
            letterSpacing="2"
            fill="#2DD4BF"
          >
            UNIFIED FRONTIER-TRANSFORMATION OUTCOME
          </text>
        </svg>
      </div>
    </div>
  );
}
