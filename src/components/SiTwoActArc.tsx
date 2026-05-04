// SI services revenue over time across the two-act journey. Act I — the
// modernisation arc — peaks during migration and tails off. Act II — the
// agentic activation arc — starts later, compounds, and continues past
// month 36+. The combined area is the SI services TAM per customer.

const W = 960;
const H = 380;

// Plot coordinates (the inner chart area inside W × H).
const PLOT_X0 = 60;
const PLOT_Y0 = 60;
const PLOT_X1 = 900;
const PLOT_Y1 = 320;
const PLOT_W = PLOT_X1 - PLOT_X0;
const PLOT_H = PLOT_Y1 - PLOT_Y0;

// Months on the x-axis (0 to 42, with a "→ continues" suffix).
const X_MAX = 42;
const xFor = (month: number) => PLOT_X0 + (month / X_MAX) * PLOT_W;
const yFor = (rev: number) => PLOT_Y1 - rev * PLOT_H; // rev in [0, 1]

// Act I — modernisation services. Bell-shaped: ramps to peak around month
// 18, then tails off as the migration completes. Tail floor (~0.12) is
// ongoing modernisation services — never quite zero.
function actIY(month: number): number {
  const peak = 18;
  const sigma = 9;
  const bell = Math.exp(-((month - peak) ** 2) / (2 * sigma * sigma));
  const tail = month > 30 ? Math.max(0.12, 0.12 + (40 - month) * 0.005) : 0;
  return Math.min(0.78, 0.78 * bell + tail);
}

// Act II — agentic services. Slow start, compounding curve. Crosses Act I
// around month 30, continues climbing through month 42+.
function actIIY(month: number): number {
  if (month < 8) return 0;
  // Logistic growth with no plateau in this window.
  const x = (month - 8) / 12;
  const compound = 0.85 / (1 + Math.exp(-x * 1.4 + 1.2));
  // Add a slow linear ramp on top to suggest "compounds indefinitely".
  return Math.min(0.96, compound + Math.max(0, (month - 24) * 0.012));
}

function buildPath(fn: (m: number) => number): string {
  const points: string[] = [];
  for (let m = 0; m <= X_MAX; m += 0.5) {
    const x = xFor(m);
    const y = yFor(fn(m));
    points.push(`${m === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`);
  }
  return points.join(" ");
}

function buildArea(fn: (m: number) => number): string {
  const path = buildPath(fn);
  return `${path} L${PLOT_X1.toFixed(1)},${PLOT_Y1.toFixed(1)} L${PLOT_X0.toFixed(1)},${PLOT_Y1.toFixed(1)} Z`;
}

const X_TICKS: { month: number; label: string }[] = [
  { month: 0, label: "0" },
  { month: 6, label: "6m" },
  { month: 12, label: "12m" },
  { month: 18, label: "18m" },
  { month: 24, label: "24m" },
  { month: 30, label: "30m" },
  { month: 36, label: "36m" },
  { month: 42, label: "→ continues" },
];

export default function SiTwoActArc() {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-navy-900/70">
      <div className="border-b border-white/10 bg-white/[0.03] px-5 py-3 font-mono text-[10px] uppercase tracking-widest text-muted">
        SI services revenue · two-act arc per customer engagement
      </div>
      <div className="p-4 md:p-6">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          role="img"
          aria-label="A two-act revenue arc showing SI services revenue over time per customer engagement. Act I modernisation peaks around month 18 and tails off. Act II agentic activation starts around month 8, compounds, crosses Act I around month 30, and continues climbing past month 42."
          className="block h-auto w-full"
        >
          <defs>
            <linearGradient id="act1-fill" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#C74634" stopOpacity="0.32" />
              <stop offset="100%" stopColor="#C74634" stopOpacity="0.02" />
            </linearGradient>
            <linearGradient id="act2-fill" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#2DD4BF" stopOpacity="0.32" />
              <stop offset="100%" stopColor="#2DD4BF" stopOpacity="0.02" />
            </linearGradient>
            <marker
              id="si-arrow"
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

          {/* Title */}
          <text
            x={W / 2}
            y="24"
            textAnchor="middle"
            fontFamily="JetBrains Mono, monospace"
            fontSize="10"
            letterSpacing="2"
            fill="#94A3B8"
          >
            ACT I PEAKS · ACT II COMPOUNDS · COMBINED AREA = SI SERVICES TAM PER CUSTOMER
          </text>

          {/* Y-axis */}
          <line
            x1={PLOT_X0}
            y1={PLOT_Y0}
            x2={PLOT_X0}
            y2={PLOT_Y1}
            stroke="rgba(255,255,255,0.18)"
            strokeWidth="1"
          />
          <text
            x="22"
            y={PLOT_Y0 + PLOT_H / 2}
            transform={`rotate(-90, 22, ${PLOT_Y0 + PLOT_H / 2})`}
            textAnchor="middle"
            fontFamily="JetBrains Mono, monospace"
            fontSize="10"
            letterSpacing="1.5"
            fill="#94A3B8"
          >
            SI SERVICES REVENUE →
          </text>

          {/* X-axis */}
          <line
            x1={PLOT_X0}
            y1={PLOT_Y1}
            x2={PLOT_X1}
            y2={PLOT_Y1}
            stroke="rgba(255,255,255,0.18)"
            strokeWidth="1"
          />
          {X_TICKS.map((t) => (
            <g key={t.month}>
              <line
                x1={xFor(t.month)}
                y1={PLOT_Y1}
                x2={xFor(t.month)}
                y2={PLOT_Y1 + 4}
                stroke="rgba(255,255,255,0.25)"
                strokeWidth="1"
              />
              <text
                x={xFor(t.month)}
                y={PLOT_Y1 + 18}
                textAnchor={t.month === X_MAX ? "end" : "middle"}
                fontFamily="JetBrains Mono, monospace"
                fontSize="10"
                fill="rgba(255,255,255,0.55)"
              >
                {t.label}
              </text>
            </g>
          ))}
          <text
            x={(PLOT_X0 + PLOT_X1) / 2}
            y={PLOT_Y1 + 36}
            textAnchor="middle"
            fontFamily="JetBrains Mono, monospace"
            fontSize="10"
            letterSpacing="1.5"
            fill="#94A3B8"
          >
            MONTHS FROM ENGAGEMENT KICK-OFF
          </text>

          {/* Faint horizontal gridlines */}
          {[0.25, 0.5, 0.75].map((g) => (
            <line
              key={g}
              x1={PLOT_X0}
              y1={yFor(g)}
              x2={PLOT_X1}
              y2={yFor(g)}
              stroke="rgba(255,255,255,0.05)"
              strokeWidth="1"
            />
          ))}

          {/* Act I — area + line */}
          <path d={buildArea(actIY)} fill="url(#act1-fill)" />
          <path d={buildPath(actIY)} fill="none" stroke="#C74634" strokeWidth="2" />

          {/* Act II — area + line */}
          <path d={buildArea(actIIY)} fill="url(#act2-fill)" />
          <path d={buildPath(actIIY)} fill="none" stroke="#2DD4BF" strokeWidth="2" />

          {/* Continues-arrow off the right edge */}
          <line
            x1={PLOT_X1 - 6}
            y1={yFor(actIIY(X_MAX))}
            x2={PLOT_X1 + 30}
            y2={yFor(actIIY(X_MAX)) - 6}
            stroke="#2DD4BF"
            strokeWidth="2"
            markerEnd="url(#si-arrow)"
          />

          {/* Annotation: Act I label + peak */}
          <g>
            <rect
              x={xFor(18) - 70}
              y="78"
              width="140"
              height="24"
              rx="5"
              fill="rgba(11,18,32,0.95)"
              stroke="#C74634"
              strokeOpacity="0.5"
              strokeWidth="1"
            />
            <text
              x={xFor(18)}
              y="94"
              textAnchor="middle"
              fontFamily="Inter, sans-serif"
              fontSize="11"
              fontWeight="600"
              fill="#fff"
            >
              Act I — modernisation
            </text>
            <line
              x1={xFor(18)}
              y1="102"
              x2={xFor(18)}
              y2={yFor(actIY(18)) - 4}
              stroke="#C74634"
              strokeOpacity="0.5"
              strokeWidth="1"
              strokeDasharray="3 3"
            />
            <circle cx={xFor(18)} cy={yFor(actIY(18))} r="4" fill="#C74634" />
            <text
              x={xFor(18) + 10}
              y={yFor(actIY(18)) + 4}
              fontFamily="JetBrains Mono, monospace"
              fontSize="10"
              fill="#C74634"
            >
              Migration peak
            </text>
          </g>

          {/* Annotation: Act II label */}
          <g>
            <rect
              x={xFor(34) - 88}
              y="118"
              width="176"
              height="24"
              rx="5"
              fill="rgba(11,18,32,0.95)"
              stroke="#2DD4BF"
              strokeOpacity="0.55"
              strokeWidth="1"
            />
            <text
              x={xFor(34)}
              y="134"
              textAnchor="middle"
              fontFamily="Inter, sans-serif"
              fontSize="11"
              fontWeight="600"
              fill="#fff"
            >
              Act II — frontier-firm activation
            </text>
            <line
              x1={xFor(34)}
              y1="142"
              x2={xFor(34)}
              y2={yFor(actIIY(34)) - 4}
              stroke="#2DD4BF"
              strokeOpacity="0.55"
              strokeWidth="1"
              strokeDasharray="3 3"
            />
            <circle cx={xFor(34)} cy={yFor(actIIY(34))} r="4" fill="#2DD4BF" />
          </g>

          {/* Crossover annotation around month 30 */}
          {(() => {
            const m = 30;
            return (
              <g>
                <circle
                  cx={xFor(m)}
                  cy={yFor(actIIY(m))}
                  r="6"
                  fill="rgba(11,18,32,0.95)"
                  stroke="#fff"
                  strokeOpacity="0.85"
                  strokeWidth="1.5"
                />
                <text
                  x={xFor(m) - 6}
                  y={yFor(actIIY(m)) - 14}
                  textAnchor="end"
                  fontFamily="JetBrains Mono, monospace"
                  fontSize="10"
                  fill="rgba(255,255,255,0.85)"
                >
                  Crossover · Act II overtakes Act I
                </text>
              </g>
            );
          })()}

          {/* Tier markers along the X-axis (Tier 0, 1, 2, 3 progression) */}
          {[
            { m: 12, tier: "Tier 0" },
            { m: 18, tier: "Tier 1" },
            { m: 24, tier: "Tier 2" },
            { m: 36, tier: "Tier 3" },
          ].map((t) => (
            <g key={t.tier}>
              <line
                x1={xFor(t.m)}
                y1={PLOT_Y1}
                x2={xFor(t.m)}
                y2={PLOT_Y0}
                stroke="rgba(255,255,255,0.06)"
                strokeWidth="1"
                strokeDasharray="2 4"
              />
              <rect
                x={xFor(t.m) - 24}
                y={PLOT_Y0 - 24}
                width="48"
                height="18"
                rx="4"
                fill="rgba(45,212,191,0.10)"
                stroke="#2DD4BF"
                strokeOpacity="0.5"
                strokeWidth="1"
              />
              <text
                x={xFor(t.m)}
                y={PLOT_Y0 - 10}
                textAnchor="middle"
                fontFamily="JetBrains Mono, monospace"
                fontSize="9.5"
                letterSpacing="1"
                fill="#2DD4BF"
              >
                {t.tier}
              </text>
            </g>
          ))}
        </svg>

        <div className="mt-4 grid gap-2 text-[11.5px] text-white/70 md:grid-cols-3">
          <div className="rounded-md border border-oracle-red/40 bg-oracle-red/[0.05] px-3 py-2">
            <span className="font-mono text-[9px] uppercase tracking-widest text-oracle-red">
              Act I · Modernise
            </span>
            <div className="mt-0.5">
              Bell-curve services arc — assessment, migration, app refactor. Big, durable, classic.
            </div>
          </div>
          <div className="rounded-md border border-iq-teal/40 bg-iq-teal/[0.05] px-3 py-2">
            <span className="font-mono text-[9px] uppercase tracking-widest text-iq-teal">
              Act II · Activate
            </span>
            <div className="mt-0.5">
              Compounding agentic arc — ontology, agent factory, AgentOps. IP-leveraged, recurring.
            </div>
          </div>
          <div className="rounded-md border border-white/10 bg-white/[0.02] px-3 py-2">
            <span className="font-mono text-[9px] uppercase tracking-widest text-muted">
              The pitch
            </span>
            <div className="mt-0.5">
              Combined area is your SI services TAM per customer. Act II keeps growing past month 36.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
