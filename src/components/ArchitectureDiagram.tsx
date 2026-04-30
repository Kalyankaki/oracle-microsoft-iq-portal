export default function ArchitectureDiagram() {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-navy-900/70">
      <div className="border-b border-white/10 bg-white/[0.03] px-5 py-3 font-mono text-[10px] uppercase tracking-widest text-muted">
        Reference architecture · data flow + governance
      </div>
      <div className="p-4 md:p-6">
        <svg
          viewBox="0 0 920 380"
          role="img"
          aria-label="Oracle Fusion data flows through Fabric mirroring into OneLake, then through Fabric IQ semantic, Foundry IQ agent runtime, and Work IQ before reaching Microsoft Copilot. Governance flows in both directions between Oracle Data Safe and Microsoft Purview."
          className="block h-auto w-full"
        >
          <defs>
            <marker
              id="arrow"
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
              id="arrow-teal"
              viewBox="0 0 10 10"
              refX="9"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#2DD4BF" />
            </marker>
          </defs>

          {/* Top label */}
          <text
            x="460"
            y="22"
            textAnchor="middle"
            fontFamily="JetBrains Mono, monospace"
            fontSize="10"
            letterSpacing="2"
            fill="#94A3B8"
          >
            DATA + AGENT FLOW
          </text>

          {/* Box 1: Oracle Fusion */}
          <g>
            <rect x="20" y="60" width="160" height="90" rx="10" fill="rgba(199,70,52,0.10)" stroke="#C74634" strokeOpacity="0.55" strokeWidth="1.5" />
            <text x="100" y="92" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="14" fontWeight="600" fill="#fff">Oracle Fusion</text>
            <text x="100" y="112" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fill="rgba(255,255,255,0.75)">SCM · HCM · CX · Finance</text>
            <text x="100" y="130" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="9" letterSpacing="2" fill="#C74634">SYSTEM OF RECORD</text>
          </g>

          {/* Arrow 1 */}
          <line x1="183" y1="105" x2="217" y2="105" stroke="#94A3B8" strokeWidth="1.5" markerEnd="url(#arrow)" />

          {/* Box 2: OneLake / Fabric Mirror */}
          <g>
            <rect x="220" y="60" width="160" height="90" rx="10" fill="rgba(0,120,212,0.10)" stroke="#0078D4" strokeOpacity="0.55" strokeWidth="1.5" />
            <text x="300" y="92" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="14" fontWeight="600" fill="#fff">Fabric Mirror</text>
            <text x="300" y="112" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fill="rgba(255,255,255,0.75)">OneLake · GoldenGate</text>
            <text x="300" y="130" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="9" letterSpacing="2" fill="#0078D4">PATTERN P1</text>
          </g>

          {/* Arrow 2 */}
          <line x1="383" y1="105" x2="417" y2="105" stroke="#94A3B8" strokeWidth="1.5" markerEnd="url(#arrow)" />

          {/* Box 3: Fabric IQ + Foundry IQ */}
          <g>
            <rect x="420" y="60" width="180" height="90" rx="10" fill="rgba(255,214,0,0.08)" stroke="#FFD600" strokeOpacity="0.55" strokeWidth="1.5" />
            <text x="510" y="88" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="13" fontWeight="600" fill="#fff">Fabric IQ + Foundry IQ</text>
            <text x="510" y="107" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fill="rgba(255,255,255,0.75)">Semantic + agent runtime</text>
            <text x="510" y="125" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fill="rgba(255,255,255,0.75)">Azure AI Foundry</text>
            <text x="510" y="142" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="9" letterSpacing="2" fill="#FFD600">PATTERN P2 · A2A</text>
          </g>

          {/* Arrow 3 */}
          <line x1="603" y1="105" x2="637" y2="105" stroke="#94A3B8" strokeWidth="1.5" markerEnd="url(#arrow)" />

          {/* Box 4: Work IQ + Copilot */}
          <g>
            <rect x="640" y="60" width="180" height="90" rx="10" fill="rgba(45,212,191,0.10)" stroke="#2DD4BF" strokeOpacity="0.6" strokeWidth="1.5" />
            <text x="730" y="88" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="13" fontWeight="600" fill="#fff">Work IQ + Copilot</text>
            <text x="730" y="107" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fill="rgba(255,255,255,0.75)">M365 Graph · Agents 365</text>
            <text x="730" y="125" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fill="rgba(255,255,255,0.75)">Outlook · Teams · Copilot</text>
            <text x="730" y="142" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="9" letterSpacing="2" fill="#2DD4BF">SYSTEM OF WORK</text>
          </g>

          {/* P3: MCP loop back to Oracle (dashed, top arc) */}
          <path
            d="M 730 60 C 730 10, 100 10, 100 60"
            fill="none"
            stroke="#2DD4BF"
            strokeOpacity="0.6"
            strokeWidth="1.5"
            strokeDasharray="6 5"
            markerEnd="url(#arrow-teal)"
          />
          <rect x="378" y="6" width="164" height="22" rx="5" fill="rgba(11,18,32,0.95)" stroke="#2DD4BF" strokeOpacity="0.5" strokeWidth="1" />
          <text x="460" y="21" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="10" letterSpacing="2" fill="#2DD4BF">PATTERN P3 · MCP HANDOFF</text>

          {/* Accelerator labels */}
          <g>
            <rect x="195" y="170" width="60" height="20" rx="4" fill="rgba(255,214,0,0.10)" stroke="#FFD600" strokeOpacity="0.45" strokeWidth="1" />
            <text x="225" y="184" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="9" letterSpacing="1.5" fill="#FFD600">ONTOLOGY</text>
            <line x1="225" y1="170" x2="225" y2="150" stroke="#FFD600" strokeOpacity="0.4" strokeWidth="1" strokeDasharray="3 3" />
          </g>

          {/* Governance overlay */}
          <line x1="50" y1="240" x2="870" y2="240" stroke="rgba(255,255,255,0.10)" strokeWidth="1" />
          <text x="460" y="232" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="10" letterSpacing="2" fill="#94A3B8">
            GOVERNANCE LAYER · END-TO-END
          </text>

          {/* Box 5: Oracle Data Safe */}
          <g>
            <rect x="100" y="270" width="220" height="80" rx="10" fill="rgba(199,70,52,0.10)" stroke="#C74634" strokeOpacity="0.55" strokeWidth="1.5" />
            <text x="210" y="298" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="13" fontWeight="600" fill="#fff">Oracle Data Safe</text>
            <text x="210" y="318" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fill="rgba(255,255,255,0.75)">Classifications · masking · audit</text>
            <text x="210" y="338" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="9" letterSpacing="2" fill="#C74634">SOURCE CONTROLS</text>
          </g>

          {/* Bidirectional governance arrow */}
          <line x1="325" y1="310" x2="595" y2="310" stroke="#94A3B8" strokeWidth="1.5" markerStart="url(#arrow)" markerEnd="url(#arrow)" />
          <rect x="395" y="295" width="160" height="22" rx="5" fill="rgba(11,18,32,0.95)" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
          <text x="475" y="310" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="9.5" letterSpacing="1.5" fill="#fff">GOVERNANCE BRIDGE</text>

          {/* Box 6: Microsoft Purview */}
          <g>
            <rect x="600" y="270" width="220" height="80" rx="10" fill="rgba(0,120,212,0.10)" stroke="#0078D4" strokeOpacity="0.55" strokeWidth="1.5" />
            <text x="710" y="298" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="13" fontWeight="600" fill="#fff">Microsoft Purview</text>
            <text x="710" y="318" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fill="rgba(255,255,255,0.75)">Lineage · sensitivity · enforcement</text>
            <text x="710" y="338" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="9" letterSpacing="2" fill="#0078D4">SURFACE CONTROLS</text>
          </g>

          {/* Connecting lines from data plane to governance plane (subtle) */}
          <line x1="100" y1="150" x2="180" y2="270" stroke="rgba(199,70,52,0.30)" strokeWidth="1" strokeDasharray="3 4" />
          <line x1="730" y1="150" x2="700" y2="270" stroke="rgba(0,120,212,0.30)" strokeWidth="1" strokeDasharray="3 4" />
        </svg>

        <div className="mt-4 grid gap-2 text-[11.5px] text-white/70 md:grid-cols-3">
          <div className="rounded-md border border-white/10 bg-white/[0.02] px-3 py-2">
            <span className="font-mono text-[9px] uppercase tracking-widest text-muted">
              Data flow
            </span>
            <div className="mt-0.5">Oracle Fusion → Fabric → IQ stack → Copilot</div>
          </div>
          <div className="rounded-md border border-iq-teal/30 bg-iq-teal/[0.04] px-3 py-2">
            <span className="font-mono text-[9px] uppercase tracking-widest text-iq-teal">
              Pattern P3 · MCP loop
            </span>
            <div className="mt-0.5">Copilot can hand off back to Oracle agents via MCP.</div>
          </div>
          <div className="rounded-md border border-white/10 bg-white/[0.02] px-3 py-2">
            <span className="font-mono text-[9px] uppercase tracking-widest text-muted">
              Governance
            </span>
            <div className="mt-0.5">Data Safe ↔ Purview, lineage end-to-end.</div>
          </div>
        </div>
      </div>
    </div>
  );
}
