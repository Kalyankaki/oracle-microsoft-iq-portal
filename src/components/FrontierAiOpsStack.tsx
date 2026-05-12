// AIOps stack diagram for the Workload Virtual Instance. Mirrors the
// stakeholder reference image: top-down stack of {issue-prevention band,
// two agents, Common Agent Platform band, three pillars, proactive/reactive
// split, Quality/Resiliency/Security foundation} — wrapped in a dashed WVI
// envelope to signal "everything inside one workload boundary".

const W = 920;
const H = 560;

export default function FrontierAiOpsStack() {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-navy-900/70">
      <div className="border-b border-white/10 bg-white/[0.03] px-5 py-3 font-mono text-[10px] uppercase tracking-widest text-muted">
        AIOps agents for customers + operators · scoped to a Workload Virtual Instance
      </div>
      <div className="p-4 md:p-6">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          role="img"
          aria-label="AIOps stack for customers and operators inside a Workload Virtual Instance: a Proactive and Reactive issue-prevention band, with a Config Drift Agent (proactive, blue) and a Troubleshooting and RCA Agent (reactive, red) sitting on top of a Common Agent Platform. The platform exposes Configuration Validation, Workload Health, and Contextual Support pillars, split between Proactive and Reactive modes, anchored on a Quality, Resiliency, Security foundation."
          className="block h-auto w-full"
        >
          <defs>
            {/* Gradient bands — proactive (azure) to reactive (oracle red) */}
            <linearGradient id="aiops-gradient" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="#0078D4" stopOpacity="0.85" />
              <stop offset="55%" stopColor="#5A55C8" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#C74634" stopOpacity="0.85" />
            </linearGradient>
            <linearGradient id="aiops-band-fill" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="#0078D4" stopOpacity="0.18" />
              <stop offset="55%" stopColor="#5A55C8" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#C74634" stopOpacity="0.18" />
            </linearGradient>
            {/* Soft glow for the WVI envelope */}
            <filter id="wvi-glow" x="-10%" y="-10%" width="120%" height="120%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* WVI envelope (dashed border around the whole stack) */}
          <rect
            x="20"
            y="20"
            width={W - 40}
            height={H - 40}
            rx="18"
            fill="rgba(45,212,191,0.04)"
            stroke="rgba(45,212,191,0.45)"
            strokeWidth="1.5"
            strokeDasharray="8 5"
          />
          {/* WVI label */}
          <rect
            x="42"
            y="34"
            width="280"
            height="22"
            rx="5"
            fill="rgba(11,18,32,0.95)"
            stroke="#2DD4BF"
            strokeOpacity="0.55"
            strokeWidth="1"
          />
          <text
            x="182"
            y="49"
            textAnchor="middle"
            fontFamily="JetBrains Mono, monospace"
            fontSize="10"
            letterSpacing="1.8"
            fill="#2DD4BF"
          >
            WORKLOAD VIRTUAL INSTANCE (WVI)
          </text>

          {/* Top band — Proactive and reactive issue prevention */}
          <g>
            <rect
              x="60"
              y="78"
              width={W - 120}
              height="58"
              rx="14"
              fill="url(#aiops-gradient)"
            />
            <text
              x={W / 2}
              y="113"
              textAnchor="middle"
              fontFamily="Inter, sans-serif"
              fontSize="18"
              fontWeight="700"
              fill="#fff"
            >
              Proactive + reactive issue prevention &amp; response
            </text>
          </g>

          {/* Two agent boxes */}
          <g>
            {/* Config Drift Agent (Proactive — blue) */}
            <rect
              x="60"
              y="156"
              width={(W - 132) / 2}
              height="70"
              rx="10"
              fill="rgba(0,120,212,0.18)"
              stroke="#0078D4"
              strokeOpacity="0.75"
              strokeWidth="1.5"
            />
            <text
              x={60 + (W - 132) / 4}
              y="190"
              textAnchor="middle"
              fontFamily="Inter, sans-serif"
              fontSize="16"
              fontWeight="600"
              fill="#fff"
            >
              Config Drift Agent
            </text>
            <text
              x={60 + (W - 132) / 4}
              y="210"
              textAnchor="middle"
              fontFamily="JetBrains Mono, monospace"
              fontSize="10"
              letterSpacing="1.5"
              fill="#0078D4"
            >
              PROACTIVE · DETECT BEFORE INCIDENT
            </text>

            {/* Troubleshooting + RCA Agent (Reactive — oracle red as alert tone) */}
            <rect
              x={W / 2 + 6}
              y="156"
              width={(W - 132) / 2}
              height="70"
              rx="10"
              fill="rgba(199,70,52,0.18)"
              stroke="#C74634"
              strokeOpacity="0.75"
              strokeWidth="1.5"
            />
            <text
              x={W / 2 + 6 + (W - 132) / 4}
              y="190"
              textAnchor="middle"
              fontFamily="Inter, sans-serif"
              fontSize="16"
              fontWeight="600"
              fill="#fff"
            >
              Troubleshooting &amp; RCA Agent
            </text>
            <text
              x={W / 2 + 6 + (W - 132) / 4}
              y="210"
              textAnchor="middle"
              fontFamily="JetBrains Mono, monospace"
              fontSize="10"
              letterSpacing="1.5"
              fill="#C74634"
            >
              REACTIVE · RCA AT MACHINE SPEED
            </text>
          </g>

          {/* Common Agent Platform band */}
          <g>
            <rect
              x="60"
              y="248"
              width={W - 120}
              height="58"
              rx="14"
              fill="url(#aiops-gradient)"
            />
            <text
              x={W / 2}
              y="284"
              textAnchor="middle"
              fontFamily="Inter, sans-serif"
              fontSize="18"
              fontWeight="700"
              fill="#fff"
            >
              Common Agent Platform
            </text>
          </g>

          {/* Three pillar boxes */}
          {(() => {
            const pillarLabels = [
              "Configuration Validation",
              "Workload Health",
              "Contextual Support",
            ];
            const pillarTotal = W - 120;
            const pillarGap = 12;
            const pillarW = (pillarTotal - 2 * pillarGap) / 3;
            return pillarLabels.map((label, i) => {
              const x = 60 + i * (pillarW + pillarGap);
              return (
                <g key={label}>
                  <rect
                    x={x}
                    y="326"
                    width={pillarW}
                    height="64"
                    rx="10"
                    fill="rgba(255,255,255,0.06)"
                    stroke="rgba(255,255,255,0.18)"
                    strokeWidth="1.2"
                  />
                  <text
                    x={x + pillarW / 2}
                    y="364"
                    textAnchor="middle"
                    fontFamily="Inter, sans-serif"
                    fontSize="14"
                    fontWeight="600"
                    fill="#0078D4"
                  >
                    {label}
                  </text>
                </g>
              );
            });
          })()}

          {/* Proactive | Reactive split bar */}
          <g>
            <rect
              x="60"
              y="406"
              width={(W - 132) / 2}
              height="38"
              rx="8"
              fill="rgba(0,120,212,0.85)"
            />
            <text
              x={60 + (W - 132) / 4}
              y="431"
              textAnchor="middle"
              fontFamily="Inter, sans-serif"
              fontSize="14"
              fontWeight="700"
              fill="#fff"
            >
              Proactive
            </text>

            <rect
              x={W / 2 + 6}
              y="406"
              width={(W - 132) / 2}
              height="38"
              rx="8"
              fill="rgba(199,70,52,0.85)"
            />
            <text
              x={W / 2 + 6 + (W - 132) / 4}
              y="431"
              textAnchor="middle"
              fontFamily="Inter, sans-serif"
              fontSize="14"
              fontWeight="700"
              fill="#fff"
            >
              Reactive
            </text>
          </g>

          {/* Bottom band — Quality, Resiliency, Security */}
          <g>
            <rect
              x="60"
              y="460"
              width={W - 120}
              height="58"
              rx="14"
              fill="url(#aiops-gradient)"
            />
            <text
              x={W / 2}
              y="496"
              textAnchor="middle"
              fontFamily="Inter, sans-serif"
              fontSize="18"
              fontWeight="700"
              fill="#fff"
            >
              Quality &nbsp;·&nbsp; Resiliency &nbsp;·&nbsp; Security
            </text>
          </g>
        </svg>

        <div className="mt-4 grid gap-2 text-[11.5px] text-white/70 md:grid-cols-3">
          <div className="rounded-md border border-azure-blue/40 bg-azure-blue/[0.05] px-3 py-2">
            <span className="font-mono text-[9px] uppercase tracking-widest text-azure-blue">
              Proactive lane
            </span>
            <div className="mt-0.5">
              Config Drift Agent watches the WVI baseline — drift caught before it becomes an incident.
            </div>
          </div>
          <div className="rounded-md border border-oracle-red/40 bg-oracle-red/[0.05] px-3 py-2">
            <span className="font-mono text-[9px] uppercase tracking-widest text-oracle-red">
              Reactive lane
            </span>
            <div className="mt-0.5">
              Troubleshooting &amp; RCA Agent correlates signals across the WVI and pinpoints root cause.
            </div>
          </div>
          <div className="rounded-md border border-iq-teal/40 bg-iq-teal/[0.05] px-3 py-2">
            <span className="font-mono text-[9px] uppercase tracking-widest text-iq-teal">
              Foundation
            </span>
            <div className="mt-0.5">
              Quality, Resiliency, Security baked into the Common Agent Platform — not bolted on.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
