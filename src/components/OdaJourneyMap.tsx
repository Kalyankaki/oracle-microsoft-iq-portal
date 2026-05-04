import { JOURNEY_STAGES } from "@/lib/data/oda-frontier";

// Visual constants — five stages, evenly spaced along a 960-wide track.
const STAGE_WIDTH = 168;
const STAGE_GAP = 12;
const STAGE_HEIGHT = 122;
const TRACK_X = 30;
const TRACK_TOP = 70;
const TOTAL_WIDTH = 960;
const TOTAL_HEIGHT = 360;

const ACCENT_HEX: Record<string, { stroke: string; fill: string; chip: string }> = {
  slate: {
    stroke: "rgba(148,163,184,0.55)",
    fill: "rgba(148,163,184,0.10)",
    chip: "#94A3B8",
  },
  azure: {
    stroke: "rgba(0,120,212,0.65)",
    fill: "rgba(0,120,212,0.10)",
    chip: "#0078D4",
  },
  oracle: {
    stroke: "rgba(199,70,52,0.65)",
    fill: "rgba(199,70,52,0.10)",
    chip: "#C74634",
  },
  yellow: {
    stroke: "rgba(255,214,0,0.65)",
    fill: "rgba(255,214,0,0.10)",
    chip: "#FFD600",
  },
  teal: {
    stroke: "rgba(45,212,191,0.65)",
    fill: "rgba(45,212,191,0.10)",
    chip: "#2DD4BF",
  },
};

export default function OdaJourneyMap() {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-navy-900/70">
      <div className="border-b border-white/10 bg-white/[0.03] px-5 py-3 font-mono text-[10px] uppercase tracking-widest text-muted">
        Customer journey · five stages · OD@A as the gravitational anchor
      </div>
      <div className="p-4 md:p-6">
        <svg
          viewBox={`0 0 ${TOTAL_WIDTH} ${TOTAL_HEIGHT}`}
          role="img"
          aria-label="Five-stage customer journey from on-prem Oracle estate discovery through cloud-path planning, migration and upgrade, app modernisation, and AI activation. Oracle Database@Azure sits at the bottom as the gravitational anchor that workloads from every stage flow toward."
          className="block h-auto w-full"
        >
          <defs>
            <marker
              id="oda-arrow"
              viewBox="0 0 10 10"
              refX="9"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#94A3B8" />
            </marker>
            <marker
              id="oda-arrow-oracle"
              viewBox="0 0 10 10"
              refX="9"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#C74634" />
            </marker>
          </defs>

          {/* Top label */}
          <text
            x={TOTAL_WIDTH / 2}
            y="22"
            textAnchor="middle"
            fontFamily="JetBrains Mono, monospace"
            fontSize="10"
            letterSpacing="2"
            fill="#94A3B8"
          >
            ON-PREM ORACLE ESTATE → AGENTIC TRANSFORMATION
          </text>

          {/* The track itself — a faint horizontal line connecting all stages */}
          <line
            x1={TRACK_X}
            y1={TRACK_TOP + STAGE_HEIGHT / 2}
            x2={TRACK_X + 5 * STAGE_WIDTH + 4 * STAGE_GAP}
            y2={TRACK_TOP + STAGE_HEIGHT / 2}
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="1"
          />

          {/* Five stage cards */}
          {JOURNEY_STAGES.map((stage, idx) => {
            const x = TRACK_X + idx * (STAGE_WIDTH + STAGE_GAP);
            const accent = ACCENT_HEX[stage.accent];
            const numCircleX = x + 22;
            const numCircleY = TRACK_TOP + 22;
            return (
              <g key={stage.id}>
                {/* Card */}
                <rect
                  x={x}
                  y={TRACK_TOP}
                  width={STAGE_WIDTH}
                  height={STAGE_HEIGHT}
                  rx="10"
                  fill={accent.fill}
                  stroke={accent.stroke}
                  strokeWidth="1.5"
                />
                {/* Number circle */}
                <circle
                  cx={numCircleX}
                  cy={numCircleY}
                  r="13"
                  fill="rgba(11,18,32,0.95)"
                  stroke={accent.chip}
                  strokeWidth="1.5"
                />
                <text
                  x={numCircleX}
                  y={numCircleY + 4}
                  textAnchor="middle"
                  fontFamily="JetBrains Mono, monospace"
                  fontSize="11"
                  fontWeight="600"
                  fill={accent.chip}
                >
                  {stage.index}
                </text>
                {/* Stage label */}
                <text
                  x={x + 44}
                  y={TRACK_TOP + 26}
                  fontFamily="Inter, sans-serif"
                  fontSize="13"
                  fontWeight="600"
                  fill="#fff"
                >
                  {stage.shortLabel}
                </text>
                {/* One-liner — wrapped manually into 3 lines */}
                <foreignObject
                  x={x + 12}
                  y={TRACK_TOP + 44}
                  width={STAGE_WIDTH - 24}
                  height={STAGE_HEIGHT - 56}
                >
                  <div
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "10.5px",
                      lineHeight: "1.45",
                      color: "rgba(255,255,255,0.78)",
                    }}
                  >
                    {stage.oneLiner}
                  </div>
                </foreignObject>
                {/* Accent strip at the bottom */}
                <rect
                  x={x}
                  y={TRACK_TOP + STAGE_HEIGHT - 4}
                  width={STAGE_WIDTH}
                  height="4"
                  rx="0"
                  fill={accent.chip}
                  fillOpacity="0.85"
                />
                {/* Connector arrow to next stage */}
                {idx < JOURNEY_STAGES.length - 1 && (
                  <line
                    x1={x + STAGE_WIDTH}
                    y1={TRACK_TOP + STAGE_HEIGHT / 2}
                    x2={x + STAGE_WIDTH + STAGE_GAP}
                    y2={TRACK_TOP + STAGE_HEIGHT / 2}
                    stroke="#94A3B8"
                    strokeWidth="1.5"
                    markerEnd="url(#oda-arrow)"
                  />
                )}
              </g>
            );
          })}

          {/* Anchor band — OD@A at the bottom, with workloads gravitating down */}
          <text
            x={TOTAL_WIDTH / 2}
            y={TRACK_TOP + STAGE_HEIGHT + 36}
            textAnchor="middle"
            fontFamily="JetBrains Mono, monospace"
            fontSize="9.5"
            letterSpacing="1.5"
            fill="#94A3B8"
          >
            EVERY STAGE CONVERGES ON THE ANCHOR
          </text>

          {/* Gravity lines from each stage down to OD@A */}
          {JOURNEY_STAGES.map((stage, idx) => {
            const x = TRACK_X + idx * (STAGE_WIDTH + STAGE_GAP) + STAGE_WIDTH / 2;
            const accent = ACCENT_HEX[stage.accent];
            return (
              <line
                key={`gravity-${stage.id}`}
                x1={x}
                y1={TRACK_TOP + STAGE_HEIGHT}
                x2={TOTAL_WIDTH / 2}
                y2={TOTAL_HEIGHT - 90}
                stroke={accent.chip}
                strokeOpacity="0.32"
                strokeWidth="1"
                strokeDasharray="3 4"
              />
            );
          })}

          {/* OD@A anchor box */}
          <g>
            <rect
              x={TOTAL_WIDTH / 2 - 180}
              y={TOTAL_HEIGHT - 90}
              width="360"
              height="74"
              rx="12"
              fill="rgba(199,70,52,0.16)"
              stroke="#C74634"
              strokeOpacity="0.85"
              strokeWidth="2"
            />
            <text
              x={TOTAL_WIDTH / 2}
              y={TOTAL_HEIGHT - 60}
              textAnchor="middle"
              fontFamily="Inter, sans-serif"
              fontSize="15"
              fontWeight="700"
              fill="#fff"
            >
              Oracle Database@Azure
            </text>
            <text
              x={TOTAL_WIDTH / 2}
              y={TOTAL_HEIGHT - 41}
              textAnchor="middle"
              fontFamily="Inter, sans-serif"
              fontSize="11"
              fill="rgba(255,255,255,0.82)"
            >
              Exadata · Autonomous · Database Service — Oracle on Azure datacentres
            </text>
            <text
              x={TOTAL_WIDTH / 2}
              y={TOTAL_HEIGHT - 24}
              textAnchor="middle"
              fontFamily="JetBrains Mono, monospace"
              fontSize="9.5"
              letterSpacing="2"
              fill="#C74634"
            >
              ANCHOR · FRONTIER TRANSFORMATION
            </text>
          </g>
        </svg>

        <div className="mt-4 grid gap-2 text-[11.5px] text-white/70 md:grid-cols-3">
          <div className="rounded-md border border-white/10 bg-white/[0.02] px-3 py-2">
            <span className="font-mono text-[9px] uppercase tracking-widest text-muted">
              Direction of travel
            </span>
            <div className="mt-0.5">
              On-prem estate → Azure-anchored modern estate, with the agentic stack lit on top.
            </div>
          </div>
          <div className="rounded-md border border-oracle-red/40 bg-oracle-red/[0.05] px-3 py-2">
            <span className="font-mono text-[9px] uppercase tracking-widest text-oracle-red">
              The anchor
            </span>
            <div className="mt-0.5">
              OD@A is the gravitational centre — every stage either lands on it or amplifies its consumption.
            </div>
          </div>
          <div className="rounded-md border border-white/10 bg-white/[0.02] px-3 py-2">
            <span className="font-mono text-[9px] uppercase tracking-widest text-muted">
              Outcome
            </span>
            <div className="mt-0.5">
              Tier-3 execution agents grounded on Oracle data, surfaced in Microsoft Copilot.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
