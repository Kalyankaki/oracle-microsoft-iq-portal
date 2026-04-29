import type { ScenarioId } from "./scenarios";

export interface ExecKpi {
  label: string;
  value: string;
  trend?: string;
}

export interface ExecAction {
  label: string;
  owner: string;
  impact: string;
}

export interface ExecSummary {
  scenarioId: ScenarioId;
  headline: string;
  bottomLine: string;
  kpis: ExecKpi[];
  topActions: ExecAction[];
  decisionsNeeded: string[];
  citation: string;
}

export const EXEC_SUMMARIES: Record<ScenarioId, ExecSummary> = {
  "supply-chain": {
    scenarioId: "supply-chain",
    headline: "EMEA Q3 supply risk is concentrated in two suppliers — $18.6M is mitigatable inside the quarter.",
    bottomLine:
      "Adriatica and Helvetia together carry 30% of EMEA spend with on-time delivery in the low 80s. Qualified secondary sources already exist in the supplier master, so the fastest moves are dual-sourcing and an SLA refresh — no re-bid required.",
    kpis: [
      { label: "Q3 EMEA exposure", value: "$47.2M", trend: "+6.1% QoQ" },
      { label: "Risk score (avg)", value: "74 / 100", trend: "+11 QoQ" },
      { label: "Mitigatable by Q4", value: "$18.6M" },
      { label: "On-time delivery", value: "87%", trend: "↓ from 94%" },
    ],
    topActions: [
      {
        label: "Dual-source 25% of Adriatica volume to Nordic Forge",
        owner: "Maria Chen · Procurement",
        impact: "$2.1M risk averted",
      },
      {
        label: "SLA refresh + 60-day buffer stock with Helvetia",
        owner: "Legal · Procurement",
        impact: "$1.4M risk averted",
      },
      {
        label: "Re-route Iberian inbound through Rotterdam hub",
        owner: "Tomás Ruiz · Logistics",
        impact: "$0.7M risk averted",
      },
    ],
    decisionsNeeded: [
      "Approve 25% volume shift from Adriatica to Nordic Forge",
      "Approve 6-week pilot for the Iberia → Rotterdam re-route",
      "Confirm escalation thresholds in the Helvetia SLA refresh",
    ],
    citation: "Oracle Fusion SCM · Supplier_Risk_View · Supplier_Master",
  },
  workforce: {
    scenarioId: "workforce",
    headline: "5 of 14 open reqs are at risk of missing FY close — 3 are recoverable with action this week.",
    bottomLine:
      "Two reqs need a re-scope or internal-mobility move now; the rest can close on plan if offers move this week. The Staff DS req can't fill a P6 in time — splitting it into two P5s clears the FY math.",
    kpis: [
      { label: "Open reqs", value: "14" },
      { label: "At-risk for FY close", value: "5" },
      { label: "Recoverable with action", value: "3" },
      { label: "Projected close rate", value: "79%", trend: "+18 pts with plan" },
    ],
    topActions: [
      {
        label: "Re-scope REQ-44188 (Staff DS) into 2× P5 reqs",
        owner: "Janelle · Talent",
        impact: "Closes by Q4 W4",
      },
      {
        label: "Open REQ-44260 (Eng Mgr) to internal mobility",
        owner: "Diego · Skip-level",
        impact: "Closes by Q4 W1",
      },
      {
        label: "Push REQ-44120 (Sr. Platform Eng) to offer",
        owner: "Marco · Recruiter",
        impact: "Closes by Q3 W12",
      },
    ],
    decisionsNeeded: [
      "Approve splitting REQ-44188 into two P5 reqs",
      "Approve internal-mobility path for Aisha (REQ-44260)",
      "Green-light the Sr. Platform Eng offer this week",
    ],
    citation: "Oracle Fusion HCM · Recruiting_Pipeline · Talent_Marketplace",
  },
  "customer-health": {
    scenarioId: "customer-health",
    headline: "$6.0M ARR is at risk across 4 accounts — $4.6M is recoverable with the right play per account.",
    bottomLine:
      "Northwind is the highest-value save and the QBR is already on the calendar — lead with a value review and an exec sponsor intro. Contoso needs a joint resolution plan with CS before the Friday CXO call.",
    kpis: [
      { label: "ARR at risk", value: "$6.0M" },
      { label: "Recoverable with plays", value: "$4.6M" },
      { label: "At-risk accounts", value: "4 of 32" },
      { label: "Avg health score", value: "62 / 100", trend: "↓ 5 QoQ" },
    ],
    topActions: [
      {
        label: "Northwind: exec sponsor intro + value review",
        owner: "Sam (you) + Liam · CS",
        impact: "Save $2.0M of $2.4M",
      },
      {
        label: "Contoso: joint resolution plan + CXO escalation",
        owner: "Sam (you) + Liam · CS",
        impact: "Save $1.5M of $1.8M",
      },
      {
        label: "Fabrikam: targeted adoption sprint on procurement workflow",
        owner: "CS · Solutions",
        impact: "Save $0.7M of $1.2M",
      },
    ],
    decisionsNeeded: [
      "Approve exec sponsor intro for Northwind's new VP Ops",
      "Confirm CXO talking points for Friday's Contoso call",
      "Sequence Fabrikam adoption sprint vs. Tailwind champion replacement",
    ],
    citation: "Oracle Fusion CX · Account_Health · Service_Requests",
  },
};
