// End-to-end technical architecture for the OD@A frontier-transformation
// motion. Layered from bottom (on-prem Oracle estate) up through migration,
// landing zones (with OD@A as the visually-emphasised anchor), app
// modernisation, and the agentic IQ stack — with governance running as a
// lateral band beneath. Pattern lifted from ArchitectureDiagram.tsx.

const W = 960;
const H = 660;

export default function OdaArchitectureDiagram() {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-navy-900/70">
      <div className="border-b border-white/10 bg-white/[0.03] px-5 py-3 font-mono text-[10px] uppercase tracking-widest text-muted">
        Technical architecture · estate → OD@A anchor → agentic stack
      </div>
      <div className="p-4 md:p-6">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          role="img"
          aria-label="Technical architecture stacking five layers from bottom to top: on-prem Oracle estate, migration and upgrade tooling, four cloud landing destinations with Oracle Database@Azure as the anchor, app modernisation layer, and the agentic IQ stack of Fabric Mirror, Fabric IQ, Foundry IQ, Work IQ, and Microsoft Copilot. Governance band runs laterally between Oracle Data Safe and Microsoft Purview."
          className="block h-auto w-full"
        >
          <defs>
            <marker
              id="oda-arch-arrow"
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
              id="oda-arch-arrow-oracle"
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

          {/* Title */}
          <text
            x={W / 2}
            y="20"
            textAnchor="middle"
            fontFamily="JetBrains Mono, monospace"
            fontSize="10"
            letterSpacing="2"
            fill="#94A3B8"
          >
            ORACLE ESTATE → OD@A ANCHOR → MICROSOFT IQ STACK
          </text>

          {/* ============================================================ */}
          {/* BAND 1 — TOP — AGENTIC IQ STACK                              */}
          {/* ============================================================ */}
          <text
            x="20"
            y="50"
            fontFamily="JetBrains Mono, monospace"
            fontSize="9.5"
            letterSpacing="1.5"
            fill="#2DD4BF"
          >
            VALUE LAYER · AGENTIC IQ STACK
          </text>
          {[
            { label: "Fabric Mirror", sub: "OneLake" },
            { label: "Fabric IQ", sub: "Semantic" },
            { label: "Foundry IQ", sub: "Reasoning" },
            { label: "Work IQ", sub: "M365 Graph" },
            { label: "Microsoft Copilot", sub: "Worker surface" },
          ].map((b, i) => {
            const bx = 30 + i * 184;
            return (
              <g key={`iq-${i}`}>
                <rect
                  x={bx}
                  y="60"
                  width="170"
                  height="60"
                  rx="8"
                  fill="rgba(45,212,191,0.10)"
                  stroke="#2DD4BF"
                  strokeOpacity="0.55"
                  strokeWidth="1.5"
                />
                <text
                  x={bx + 85}
                  y="84"
                  textAnchor="middle"
                  fontFamily="Inter, sans-serif"
                  fontSize="12.5"
                  fontWeight="600"
                  fill="#fff"
                >
                  {b.label}
                </text>
                <text
                  x={bx + 85}
                  y="103"
                  textAnchor="middle"
                  fontFamily="Inter, sans-serif"
                  fontSize="10.5"
                  fill="rgba(255,255,255,0.72)"
                >
                  {b.sub}
                </text>
                {i < 4 && (
                  <line
                    x1={bx + 170}
                    y1="90"
                    x2={bx + 184}
                    y2="90"
                    stroke="#2DD4BF"
                    strokeOpacity="0.55"
                    strokeWidth="1.5"
                    markerEnd="url(#oda-arch-arrow)"
                  />
                )}
              </g>
            );
          })}

          {/* Up-flow connector from app modernisation band to value layer */}
          <line
            x1={W / 2}
            y1="170"
            x2={W / 2}
            y2="120"
            stroke="#94A3B8"
            strokeOpacity="0.6"
            strokeWidth="1.5"
            markerEnd="url(#oda-arch-arrow)"
          />

          {/* ============================================================ */}
          {/* BAND 2 — APP MODERNISATION (slim horizontal strip)            */}
          {/* ============================================================ */}
          <text
            x="20"
            y="155"
            fontFamily="JetBrains Mono, monospace"
            fontSize="9.5"
            letterSpacing="1.5"
            fill="#FFD600"
          >
            APP MODERNISATION · COMPUTE ON AZURE, DATA ON OD@A
          </text>
          <rect
            x="30"
            y="170"
            width="900"
            height="38"
            rx="8"
            fill="rgba(255,214,0,0.08)"
            stroke="#FFD600"
            strokeOpacity="0.45"
            strokeWidth="1.5"
          />
          {[
            "Azure Kubernetes Service",
            "Azure App Service",
            "Functions",
            "Entra ID",
            "Key Vault",
            "Application Insights",
          ].map((label, i) => {
            const cx = 30 + 75 + i * 145;
            return (
              <text
                key={`mod-${i}`}
                x={cx}
                y="195"
                textAnchor="middle"
                fontFamily="Inter, sans-serif"
                fontSize="11"
                fontWeight="500"
                fill="rgba(255,255,255,0.85)"
              >
                {label}
              </text>
            );
          })}

          {/* Connector from cloud destinations up to modernisation */}
          <line
            x1={W / 2}
            y1="300"
            x2={W / 2}
            y2="208"
            stroke="#94A3B8"
            strokeOpacity="0.6"
            strokeWidth="1.5"
            markerEnd="url(#oda-arch-arrow)"
          />

          {/* ============================================================ */}
          {/* BAND 3 — CLOUD DESTINATIONS (OD@A anchor emphasised)          */}
          {/* ============================================================ */}
          <text
            x="20"
            y="240"
            fontFamily="JetBrains Mono, monospace"
            fontSize="9.5"
            letterSpacing="1.5"
            fill="#C74634"
          >
            LANDING ZONES · OD@A AS THE ANCHOR
          </text>

          {/* Azure DB for PostgreSQL — left peer */}
          <g>
            <rect
              x="30"
              y="250"
              width="200"
              height="80"
              rx="10"
              fill="rgba(255,214,0,0.08)"
              stroke="#FFD600"
              strokeOpacity="0.55"
              strokeWidth="1.5"
            />
            <text
              x="130"
              y="276"
              textAnchor="middle"
              fontFamily="Inter, sans-serif"
              fontSize="12.5"
              fontWeight="600"
              fill="#fff"
            >
              Azure DB for PostgreSQL
            </text>
            <text
              x="130"
              y="294"
              textAnchor="middle"
              fontFamily="Inter, sans-serif"
              fontSize="10.5"
              fill="rgba(255,255,255,0.72)"
            >
              Re-platform target
            </text>
            <text
              x="130"
              y="318"
              textAnchor="middle"
              fontFamily="JetBrains Mono, monospace"
              fontSize="9"
              letterSpacing="1.5"
              fill="#FFD600"
            >
              PEER PATH
            </text>
          </g>

          {/* OD@A — anchor (centre, emphasised: larger, bolder border) */}
          <g>
            <rect
              x="270"
              y="232"
              width="420"
              height="116"
              rx="14"
              fill="rgba(199,70,52,0.18)"
              stroke="#C74634"
              strokeOpacity="0.95"
              strokeWidth="2.5"
            />
            <text
              x="480"
              y="262"
              textAnchor="middle"
              fontFamily="Inter, sans-serif"
              fontSize="17"
              fontWeight="700"
              fill="#fff"
            >
              Oracle Database@Azure
            </text>
            <text
              x="480"
              y="284"
              textAnchor="middle"
              fontFamily="Inter, sans-serif"
              fontSize="11.5"
              fill="rgba(255,255,255,0.85)"
            >
              Exadata · Autonomous · Database Service
            </text>
            <text
              x="480"
              y="302"
              textAnchor="middle"
              fontFamily="Inter, sans-serif"
              fontSize="11"
              fill="rgba(255,255,255,0.7)"
            >
              Native Fabric Mirroring · Oracle-native features preserved
            </text>
            <text
              x="480"
              y="332"
              textAnchor="middle"
              fontFamily="JetBrains Mono, monospace"
              fontSize="10"
              letterSpacing="2"
              fill="#C74634"
            >
              ANCHOR · FRONTIER TRANSFORMATION
            </text>
          </g>

          {/* OCI — right peer */}
          <g>
            <rect
              x="730"
              y="250"
              width="200"
              height="80"
              rx="10"
              fill="rgba(0,120,212,0.10)"
              stroke="#0078D4"
              strokeOpacity="0.55"
              strokeWidth="1.5"
            />
            <text
              x="830"
              y="276"
              textAnchor="middle"
              fontFamily="Inter, sans-serif"
              fontSize="12.5"
              fontWeight="600"
              fill="#fff"
            >
              Oracle DB on OCI
            </text>
            <text
              x="830"
              y="294"
              textAnchor="middle"
              fontFamily="Inter, sans-serif"
              fontSize="10.5"
              fill="rgba(255,255,255,0.72)"
            >
              Multicloud · sovereign
            </text>
            <text
              x="830"
              y="318"
              textAnchor="middle"
              fontFamily="JetBrains Mono, monospace"
              fontSize="9"
              letterSpacing="1.5"
              fill="#0078D4"
            >
              PEER PATH
            </text>
          </g>

          {/* On-prem hybrid pill (small, below the band) */}
          <g>
            <rect
              x="370"
              y="358"
              width="220"
              height="28"
              rx="6"
              fill="rgba(148,163,184,0.10)"
              stroke="#94A3B8"
              strokeOpacity="0.55"
              strokeWidth="1.2"
              strokeDasharray="4 3"
            />
            <text
              x="480"
              y="377"
              textAnchor="middle"
              fontFamily="Inter, sans-serif"
              fontSize="11"
              fill="rgba(255,255,255,0.78)"
            >
              Stay on-prem · Fabric hybrid mirror
            </text>
          </g>

          {/* Connectors from migration band up to OD@A */}
          <line
            x1="230"
            y1="455"
            x2="350"
            y2="350"
            stroke="rgba(199,70,52,0.55)"
            strokeWidth="1.4"
            markerEnd="url(#oda-arch-arrow-oracle)"
          />
          <line
            x1={W / 2}
            y1="455"
            x2={W / 2}
            y2="386"
            stroke="rgba(199,70,52,0.55)"
            strokeWidth="1.4"
            markerEnd="url(#oda-arch-arrow-oracle)"
          />
          <line
            x1="730"
            y1="455"
            x2="610"
            y2="350"
            stroke="rgba(199,70,52,0.55)"
            strokeWidth="1.4"
            markerEnd="url(#oda-arch-arrow-oracle)"
          />

          {/* ============================================================ */}
          {/* BAND 4 — MIGRATION + UPGRADE TOOLING                          */}
          {/* ============================================================ */}
          <text
            x="20"
            y="412"
            fontFamily="JetBrains Mono, monospace"
            fontSize="9.5"
            letterSpacing="1.5"
            fill="#0078D4"
          >
            MIGRATION + UPGRADE · COMPLIANT VERSION TARGETS
          </text>
          {[
            { label: "Azure Migrate", sub: "Discovery" },
            { label: "Oracle ZDM", sub: "Zero-downtime" },
            { label: "GoldenGate", sub: "CDC + replication" },
            { label: "Azure DMS", sub: "Re-platform" },
          ].map((b, i) => {
            const bx = 30 + i * 230;
            return (
              <g key={`mig-${i}`}>
                <rect
                  x={bx}
                  y="420"
                  width="210"
                  height="60"
                  rx="8"
                  fill="rgba(0,120,212,0.08)"
                  stroke="#0078D4"
                  strokeOpacity="0.55"
                  strokeWidth="1.5"
                />
                <text
                  x={bx + 105}
                  y="446"
                  textAnchor="middle"
                  fontFamily="Inter, sans-serif"
                  fontSize="12.5"
                  fontWeight="600"
                  fill="#fff"
                >
                  {b.label}
                </text>
                <text
                  x={bx + 105}
                  y="464"
                  textAnchor="middle"
                  fontFamily="Inter, sans-serif"
                  fontSize="10.5"
                  fill="rgba(255,255,255,0.72)"
                >
                  {b.sub}
                </text>
              </g>
            );
          })}

          {/* Connectors from on-prem band up to migration band */}
          <line
            x1={W / 2}
            y1="570"
            x2={W / 2}
            y2="480"
            stroke="#94A3B8"
            strokeOpacity="0.6"
            strokeWidth="1.5"
            markerEnd="url(#oda-arch-arrow)"
          />

          {/* ============================================================ */}
          {/* BAND 5 — ON-PREM ORACLE ESTATE                                */}
          {/* ============================================================ */}
          <text
            x="20"
            y="510"
            fontFamily="JetBrains Mono, monospace"
            fontSize="9.5"
            letterSpacing="1.5"
            fill="#94A3B8"
          >
            CUSTOMER ESTATE · WHERE THE JOURNEY BEGINS
          </text>
          {[
            { label: "Exadata", sub: "On-prem" },
            { label: "RAC + Data Guard", sub: "HA clusters" },
            { label: "Database Appliance", sub: "Branch / edge" },
            { label: "On-prem Fusion Apps", sub: "Legacy ERP / HCM" },
          ].map((b, i) => {
            const bx = 30 + i * 230;
            return (
              <g key={`onprem-${i}`}>
                <rect
                  x={bx}
                  y="520"
                  width="210"
                  height="50"
                  rx="8"
                  fill="rgba(199,70,52,0.10)"
                  stroke="#C74634"
                  strokeOpacity="0.5"
                  strokeWidth="1.4"
                />
                <text
                  x={bx + 105}
                  y="544"
                  textAnchor="middle"
                  fontFamily="Inter, sans-serif"
                  fontSize="12.5"
                  fontWeight="600"
                  fill="#fff"
                >
                  {b.label}
                </text>
                <text
                  x={bx + 105}
                  y="560"
                  textAnchor="middle"
                  fontFamily="Inter, sans-serif"
                  fontSize="10.5"
                  fill="rgba(255,255,255,0.72)"
                >
                  {b.sub}
                </text>
              </g>
            );
          })}

          {/* ============================================================ */}
          {/* GOVERNANCE LATERAL BAND                                        */}
          {/* ============================================================ */}
          <line
            x1="50"
            y1="600"
            x2={W - 50}
            y2="600"
            stroke="rgba(255,255,255,0.10)"
            strokeWidth="1"
          />
          <text
            x={W / 2}
            y="592"
            textAnchor="middle"
            fontFamily="JetBrains Mono, monospace"
            fontSize="10"
            letterSpacing="2"
            fill="#94A3B8"
          >
            GOVERNANCE BAND · END-TO-END LINEAGE
          </text>
          {/* Data Safe (left) */}
          <g>
            <rect
              x="60"
              y="612"
              width="220"
              height="40"
              rx="8"
              fill="rgba(199,70,52,0.10)"
              stroke="#C74634"
              strokeOpacity="0.55"
              strokeWidth="1.3"
            />
            <text
              x="170"
              y="630"
              textAnchor="middle"
              fontFamily="Inter, sans-serif"
              fontSize="11.5"
              fontWeight="600"
              fill="#fff"
            >
              Oracle Data Safe + Audit Vault
            </text>
            <text
              x="170"
              y="645"
              textAnchor="middle"
              fontFamily="Inter, sans-serif"
              fontSize="10"
              fill="rgba(255,255,255,0.72)"
            >
              Source classifications · masking · audit
            </text>
          </g>
          {/* Bidirectional governance flow */}
          <line
            x1="285"
            y1="632"
            x2="675"
            y2="632"
            stroke="#94A3B8"
            strokeWidth="1.5"
            markerStart="url(#oda-arch-arrow)"
            markerEnd="url(#oda-arch-arrow)"
          />
          <rect
            x="395"
            y="618"
            width="170"
            height="22"
            rx="5"
            fill="rgba(11,18,32,0.95)"
            stroke="rgba(255,255,255,0.20)"
            strokeWidth="1"
          />
          <text
            x="480"
            y="633"
            textAnchor="middle"
            fontFamily="JetBrains Mono, monospace"
            fontSize="9.5"
            letterSpacing="1.5"
            fill="#fff"
          >
            GOVERNANCE BRIDGE
          </text>
          {/* Purview (right) */}
          <g>
            <rect
              x="680"
              y="612"
              width="220"
              height="40"
              rx="8"
              fill="rgba(0,120,212,0.10)"
              stroke="#0078D4"
              strokeOpacity="0.55"
              strokeWidth="1.3"
            />
            <text
              x="790"
              y="630"
              textAnchor="middle"
              fontFamily="Inter, sans-serif"
              fontSize="11.5"
              fontWeight="600"
              fill="#fff"
            >
              Microsoft Purview
            </text>
            <text
              x="790"
              y="645"
              textAnchor="middle"
              fontFamily="Inter, sans-serif"
              fontSize="10"
              fill="rgba(255,255,255,0.72)"
            >
              Lineage · sensitivity · enforcement
            </text>
          </g>
        </svg>

        <div className="mt-4 grid gap-2 text-[11.5px] text-white/70 md:grid-cols-3">
          <div className="rounded-md border border-oracle-red/40 bg-oracle-red/[0.05] px-3 py-2">
            <span className="font-mono text-[9px] uppercase tracking-widest text-oracle-red">
              The anchor
            </span>
            <div className="mt-0.5">
              OD@A is where Oracle-faithful workloads land. Three peer paths (OCI, Azure PG, hybrid) handle the rest.
            </div>
          </div>
          <div className="rounded-md border border-iq-yellow/40 bg-iq-yellow/[0.05] px-3 py-2">
            <span className="font-mono text-[9px] uppercase tracking-widest text-iq-yellow">
              Modernisation
            </span>
            <div className="mt-0.5">
              Compute moves to Azure-native services. Data of record stays anchored on OD@A.
            </div>
          </div>
          <div className="rounded-md border border-iq-teal/40 bg-iq-teal/[0.05] px-3 py-2">
            <span className="font-mono text-[9px] uppercase tracking-widest text-iq-teal">
              Activation
            </span>
            <div className="mt-0.5">
              Native Fabric Mirror lights up the IQ stack on top of the OD@A anchor with end-to-end lineage.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
