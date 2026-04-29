import type { ScenarioId } from "./scenarios";
import type { TierId } from "./tiers";

export type ResponseBlock =
  | { kind: "paragraph"; text: string }
  | { kind: "callout"; tone: "neutral" | "warn" | "info"; text: string }
  | { kind: "kpi-row"; items: { label: string; value: string; trend?: string }[] }
  | {
      kind: "table";
      caption?: string;
      columns: string[];
      rows: (string | number)[][];
      citation?: string;
    }
  | { kind: "list"; ordered?: boolean; items: string[]; title?: string }
  | { kind: "citations"; sources: string[] }
  | {
      kind: "action-card";
      title: string;
      detail: string;
      cta: string;
      icon: "mail" | "teams" | "calendar" | "doc";
    };

export interface TierResponse {
  summary: string;
  blocks: ResponseBlock[];
}

type ResponseMatrix = Record<ScenarioId, Record<TierId, TierResponse>>;

export const RESPONSES: ResponseMatrix = {
  // ───────────────────────────── Supply Chain ─────────────────────────────
  "supply-chain": {
    baseline: {
      summary:
        "I can see Q3 supply chain data is available in the Oracle mirror. Here's what's on hand to assess EMEA risk.",
      blocks: [
        {
          kind: "paragraph",
          text:
            "EMEA suppliers, purchase orders, and delivery records are mirrored from Oracle Fusion SCM into Microsoft Fabric. Risk assessment typically combines on-time delivery, lead-time variance, and spend concentration.",
        },
        {
          kind: "list",
          title: "Tables you'd likely query",
          items: [
            "Oracle Fusion SCM · Suppliers",
            "Oracle Fusion SCM · Purchase_Orders",
            "Oracle Fusion SCM · Delivery_Performance",
            "Oracle Fusion Procurement · Spend_Analytics",
          ],
        },
        {
          kind: "callout",
          tone: "neutral",
          text:
            "I don't yet have a semantic model that knows what supplier risk means in this org. Connect Fabric IQ to compute a real risk view.",
        },
      ],
    },
    fabric: {
      summary:
        "EMEA Q3 exposure is $47.2M across 84 suppliers. Concentration and on-time delivery are both moving in the wrong direction.",
      blocks: [
        {
          kind: "kpi-row",
          items: [
            { label: "Q3 EMEA exposure", value: "$47.2M", trend: "+6.1% QoQ" },
            { label: "Active suppliers", value: "84" },
            { label: "Top-3 concentration", value: "38%", trend: "+4 pts" },
            { label: "On-time delivery", value: "87%", trend: "↓ from 94%" },
          ],
        },
        {
          kind: "paragraph",
          text:
            "Three suppliers represent 38% of Q3 EMEA spend. On-time delivery has dropped 7 points QoQ, and lead-time variance widened from 3.1 to 6.4 days on average.",
        },
        {
          kind: "table",
          caption: "Top EMEA suppliers — Q3 spend share",
          columns: ["Supplier", "Category", "Q3 spend", "Share", "OTD"],
          rows: [
            ["Adriatica Components SpA", "Precision castings", "$8.4M", "17.8%", "81%"],
            ["Helvetia Polymers AG", "Specialty polymers", "$5.6M", "11.9%", "84%"],
            ["Nordic Forge AS", "Forged steel", "$4.0M", "8.5%", "88%"],
            ["Iberia Logistica SL", "Inbound logistics", "$3.1M", "6.6%", "79%"],
          ],
          citation: "Oracle Fusion SCM · Supplier_Risk_View (mirrored)",
        },
        {
          kind: "callout",
          tone: "info",
          text:
            "Numbers are real now — but I'm not yet ranking actions or quantifying impact. Foundry IQ will do the reasoning.",
        },
      ],
    },
    foundry: {
      summary:
        "EMEA Q3 exposure is $47.2M. Five suppliers drive most of the risk; here's the prioritized de-risk plan with projected impact.",
      blocks: [
        {
          kind: "kpi-row",
          items: [
            { label: "Q3 EMEA exposure", value: "$47.2M" },
            { label: "Risk score (avg)", value: "74 / 100", trend: "+11 QoQ" },
            { label: "Mitigatable by Q4", value: "$18.6M" },
            { label: "Suggested actions", value: "5" },
          ],
        },
        {
          kind: "paragraph",
          text:
            "Two suppliers — Adriatica and Helvetia — together carry 30% of EMEA spend with on-time delivery in the low 80s. Both have qualified secondary sources already in the supplier master, so the fastest moves are dual-sourcing and a contractual SLA refresh, not a re-bid.",
        },
        {
          kind: "table",
          caption: "Top-5 at-risk suppliers — recommended action and projected impact",
          columns: ["Supplier", "Risk", "Action", "Projected $ impact"],
          rows: [
            ["Adriatica Components SpA", "87", "Dual-source 25% of volume to Nordic Forge", "$2.1M risk averted"],
            ["Helvetia Polymers AG", "79", "SLA refresh + 60-day buffer stock", "$1.4M risk averted"],
            ["Iberia Logistica SL", "68", "Re-route Iberian inbound through Rotterdam hub", "$0.7M risk averted"],
            ["Levant Electronics Ltd", "64", "Qualify Polish secondary by end of Q3", "$0.5M risk averted"],
            ["Nordic Forge AS", "72", "Hold — performance trending up", "—"],
          ],
          citation: "Oracle Fusion SCM · Supplier_Risk_View · Supplier_Master",
        },
        {
          kind: "list",
          title: "Reasoning trace",
          ordered: true,
          items: [
            "Pulled Q3 EMEA spend, OTD, and lead-time variance from the Fabric semantic model.",
            "Joined to Supplier_Master to find qualified secondary sources by category.",
            "Scored each supplier with the org's risk model (concentration · OTD · variance).",
            "Ranked actions by projected $ impact, filtered to those executable inside Q3.",
          ],
        },
        {
          kind: "citations",
          sources: [
            "Oracle Fusion SCM · Supplier_Risk_View",
            "Oracle Fusion SCM · Supplier_Master",
            "Oracle Fusion Procurement · Contracts",
            "Oracle Fusion Finance · Q3_Spend_Actuals",
          ],
        },
      ],
    },
    work: {
      summary:
        "Based on your supplier review with Maria Chen last Thursday and the EMEA ops sync tomorrow at 10am, here's what to bring — already drafted.",
      blocks: [
        {
          kind: "callout",
          tone: "info",
          text:
            "Personalized for you, Priya. You own EMEA operations, your last 1:1 with Maria Chen (Procurement Lead) covered Adriatica, and your 10am tomorrow with the EMEA ops team has 'Q3 risk' on the agenda.",
        },
        {
          kind: "paragraph",
          text:
            "Of the $47.2M EMEA exposure, the two items that matter most for tomorrow's sync are Adriatica (which Maria already flagged) and the Iberia inbound re-route — that one needs your sign-off before purchasing can move on it.",
        },
        {
          kind: "table",
          caption: "Bring to the 10am EMEA ops sync",
          columns: ["Item", "Owner", "Decision needed from you"],
          rows: [
            ["Adriatica dual-source plan", "Maria Chen", "Approve 25% volume shift to Nordic Forge"],
            ["Iberia → Rotterdam re-route", "Tomás Ruiz", "Approve 6-week pilot starting Q3 W10"],
            ["Helvetia SLA refresh", "Legal · Procurement", "Confirm escalation thresholds"],
          ],
        },
        {
          kind: "action-card",
          title: "Draft email to Maria Chen",
          detail:
            "Subject: Adriatica dual-source — green-light for tomorrow. Body summarizes the 25% shift to Nordic Forge, $2.1M risk averted, and the two items needing her input before 10am.",
          cta: "Open in Outlook",
          icon: "mail",
        },
        {
          kind: "action-card",
          title: "Teams message to Tomás Ruiz",
          detail:
            "Heads-up that you'll be asking for the Iberia re-route pilot at the 10am sync. Includes the projected $0.7M impact and the carrier short-list from Procurement.",
          cta: "Send via Teams",
          icon: "teams",
        },
        {
          kind: "action-card",
          title: "Pre-fill the 10am agenda",
          detail:
            "Three decision items, each with the supporting numbers, owner, and the specific ask. Adds a follow-up slot for the Helvetia SLA refresh after Legal review.",
          cta: "Update meeting",
          icon: "calendar",
        },
        {
          kind: "citations",
          sources: [
            "Oracle Fusion SCM · Supplier_Risk_View",
            "Microsoft Graph · Calendar (EMEA ops sync, tomorrow 10:00)",
            "Microsoft Graph · Recent 1:1 with Maria Chen (last Thursday)",
            "Microsoft Purview · Lineage verified",
          ],
        },
      ],
    },
  },

  // ───────────────────────────── Workforce ─────────────────────────────
  workforce: {
    baseline: {
      summary:
        "Open requisitions and recruiting pipeline data are mirrored from Oracle HCM. Here's what's available to summarize.",
      blocks: [
        {
          kind: "paragraph",
          text:
            "Oracle Fusion HCM mirrors requisition headers, pipeline counts, and offer stages into Fabric. To flag fiscal-year-close risk, you would typically combine days-open, pipeline depth, and stage progression.",
        },
        {
          kind: "list",
          title: "Tables you'd likely query",
          items: [
            "Oracle Fusion HCM · Requisitions",
            "Oracle Fusion HCM · Recruiting_Pipeline",
            "Oracle Fusion HCM · Offers",
          ],
        },
        {
          kind: "callout",
          tone: "neutral",
          text:
            "I don't yet know which reqs are 'on your team' — that needs role and org context. Add Fabric IQ to compute a clean view.",
        },
      ],
    },
    fabric: {
      summary:
        "You have 14 open reqs across Platform Eng, Applied AI, and Design. Average days-open is 47; five reqs trip the FY-close risk threshold.",
      blocks: [
        {
          kind: "kpi-row",
          items: [
            { label: "Open reqs", value: "14" },
            { label: "Avg days open", value: "47", trend: "+9 vs target" },
            { label: "At-risk for FY close", value: "5" },
            { label: "Pipeline coverage", value: "3.4×", trend: "↓ from 4.6×" },
          ],
        },
        {
          kind: "table",
          caption: "Open reqs sorted by FY-close risk",
          columns: ["Req", "Title", "Org", "Days open", "Stage"],
          rows: [
            ["REQ-44188", "Staff Data Scientist", "Applied AI", 89, "Screening"],
            ["REQ-44120", "Senior Platform Engineer", "Platform Eng", 71, "Onsite"],
            ["REQ-44260", "Engineering Manager", "Platform Eng", 54, "Onsite"],
            ["REQ-44211", "Product Designer", "Design", 33, "Offer Out"],
            ["REQ-44301", "Solutions Architect", "Platform Eng", 18, "Screening"],
          ],
          citation: "Oracle Fusion HCM · Recruiting_Pipeline (mirrored)",
        },
        {
          kind: "callout",
          tone: "info",
          text:
            "Fabric IQ now resolves 'my team' to the right org rollup. Foundry IQ will reason about which reqs to push and which to re-scope.",
        },
      ],
    },
    foundry: {
      summary:
        "Two reqs will almost certainly miss FY close unless action is taken this week. Here's the recommendation per req with projected close date.",
      blocks: [
        {
          kind: "kpi-row",
          items: [
            { label: "At-risk for FY close", value: "5 of 14" },
            { label: "Recoverable with action", value: "3" },
            { label: "Recommended re-scopes", value: "2" },
            { label: "Projected close rate", value: "79%", trend: "+18 pts with plan" },
          ],
        },
        {
          kind: "table",
          caption: "Per-req recommendation",
          columns: ["Req", "Risk", "Recommendation", "Projected close"],
          rows: [
            ["REQ-44188 · Staff Data Scientist", "91", "Re-scope to two P5 hires; current pipeline can't fill P6 in time", "Q4 W4 (split)"],
            ["REQ-44120 · Sr. Platform Eng", "78", "Push to offer this week; add a backup onsite", "Q3 W12"],
            ["REQ-44260 · Eng Manager", "64", "Open to internal mobility from Platform Eng tech leads", "Q4 W1"],
            ["REQ-44211 · Product Designer", "22", "On track — offer out, decision expected this week", "Q3 W11"],
            ["REQ-44301 · Solutions Architect", "31", "Healthy pipeline; no intervention needed", "Q4 W2"],
          ],
          citation: "Oracle Fusion HCM · Recruiting_Pipeline · Offers · Talent_Marketplace",
        },
        {
          kind: "list",
          title: "Reasoning trace",
          ordered: true,
          items: [
            "Pulled open reqs scoped to your org rollup from the semantic model.",
            "Combined days-open, pipeline depth, and historical stage-to-close conversion by level.",
            "Cross-checked Talent_Marketplace for internal candidates qualified at M3 / P5.",
            "Recommended re-scope only where pipeline math doesn't close in available weeks.",
          ],
        },
        {
          kind: "citations",
          sources: [
            "Oracle Fusion HCM · Recruiting_Pipeline",
            "Oracle Fusion HCM · Offers",
            "Oracle Fusion HCM · Talent_Marketplace",
          ],
        },
      ],
    },
    work: {
      summary:
        "You have a hiring review with your skip Diego on Friday and a 1:1 with Aisha (your Eng Manager candidate) tomorrow. Here's the plan, drafts ready.",
      blocks: [
        {
          kind: "callout",
          tone: "info",
          text:
            "Personalized for you, David. You own Platform Eng hiring, your Friday review with Diego covers FY-close commits, and Aisha — already on your calendar tomorrow — is the strongest internal candidate for REQ-44260.",
        },
        {
          kind: "paragraph",
          text:
            "Two reqs need your decision before Friday's review with Diego: the Staff DS re-scope and the Eng Manager internal-mobility move. The Sr. Platform Eng offer is a green-light — pipeline is strong and the candidate is at offer prep.",
        },
        {
          kind: "table",
          caption: "Bring to Friday's hiring review with Diego",
          columns: ["Req", "Decision needed", "Who else"],
          rows: [
            ["REQ-44188 · Staff DS", "Approve split into 2× P5", "Talent partner: Janelle"],
            ["REQ-44260 · Eng Manager", "Approve internal mobility for Aisha", "Skip-level: Diego"],
            ["REQ-44120 · Sr. Platform Eng", "FYI — extending offer this week", "Recruiter: Marco"],
          ],
        },
        {
          kind: "action-card",
          title: "Draft 1:1 agenda for Aisha (tomorrow 14:00)",
          detail:
            "Three items: confirm interest in REQ-44260, walk through scope and team, and outline the internal-mobility timeline. Includes a one-paragraph role summary pulled from the req.",
          cta: "Update meeting",
          icon: "calendar",
        },
        {
          kind: "action-card",
          title: "Draft email to Diego",
          detail:
            "Pre-read for Friday's review: the 5 at-risk reqs, the recommended action per req, and the two decisions you need from him. Three paragraphs.",
          cta: "Open in Outlook",
          icon: "mail",
        },
        {
          kind: "action-card",
          title: "Teams message to Janelle (Talent)",
          detail:
            "Asks her to re-post REQ-44188 as two P5 reqs by Wednesday so the pipeline math closes by FY end.",
          cta: "Send via Teams",
          icon: "teams",
        },
        {
          kind: "citations",
          sources: [
            "Oracle Fusion HCM · Recruiting_Pipeline",
            "Microsoft Graph · 1:1 with Aisha (tomorrow 14:00)",
            "Microsoft Graph · Hiring review with Diego (Friday 09:30)",
            "Microsoft Purview · Lineage verified",
          ],
        },
      ],
    },
  },

  // ───────────────────────────── Customer Health ─────────────────────────────
  "customer-health": {
    baseline: {
      summary:
        "Account health, support, and usage data are mirrored from Oracle CX. Here's what's available to scan for churn signals.",
      blocks: [
        {
          kind: "paragraph",
          text:
            "Oracle Fusion CX mirrors account health scores, open service requests, and usage telemetry into Fabric. Churn signals typically combine usage trend, sponsor changes, support pressure, and renewal proximity.",
        },
        {
          kind: "list",
          title: "Tables you'd likely query",
          items: [
            "Oracle Fusion CX · Accounts",
            "Oracle Fusion CX · Account_Health",
            "Oracle Fusion CX · Service_Requests",
            "Oracle Fusion CX · Usage_Telemetry",
          ],
        },
        {
          kind: "callout",
          tone: "neutral",
          text:
            "Without Fabric IQ I can't yet resolve 'your book of business' to the right account list — let alone score churn.",
        },
      ],
    },
    fabric: {
      summary:
        "Your book has 32 accounts. Four are flagged as Watch or High churn risk, with $6.0M ARR exposed.",
      blocks: [
        {
          kind: "kpi-row",
          items: [
            { label: "Accounts in book", value: "32" },
            { label: "At-risk accounts", value: "4" },
            { label: "ARR at risk", value: "$6.0M" },
            { label: "Avg health score", value: "62 / 100", trend: "↓ 5 QoQ" },
          ],
        },
        {
          kind: "table",
          caption: "At-risk accounts",
          columns: ["Account", "ARR", "Health", "Signal", "Renews in"],
          rows: [
            ["Northwind Manufacturing", "$2.4M", 38, "High", "62 days"],
            ["Contoso Logistics", "$1.8M", 47, "High", "88 days"],
            ["Fabrikam Retail", "$1.2M", 58, "Watch", "121 days"],
            ["Tailwind Traders", "$0.6M", 64, "Watch", "54 days"],
          ],
          citation: "Oracle Fusion CX · Account_Health (mirrored)",
        },
        {
          kind: "callout",
          tone: "info",
          text:
            "Fabric IQ scoped to your book of business. Foundry IQ will recommend the right next play per account.",
        },
      ],
    },
    foundry: {
      summary:
        "Four accounts need attention this quarter. Here's the recommended next play per account, with the projected ARR impact of each move.",
      blocks: [
        {
          kind: "kpi-row",
          items: [
            { label: "ARR at risk", value: "$6.0M" },
            { label: "Recoverable with plays", value: "$4.6M" },
            { label: "Plays recommended", value: "4" },
            { label: "Confidence (avg)", value: "0.78" },
          ],
        },
        {
          kind: "table",
          caption: "Recommended next play per account",
          columns: ["Account", "Signal", "Next play", "Projected impact"],
          rows: [
            ["Northwind Manufacturing", "Sponsor moved; usage –41%", "Exec sponsor intro + value review with new VP Ops", "Save $2.0M of $2.4M"],
            ["Contoso Logistics", "2× Sev-1 > 14 days; NPS 12", "Joint resolution plan with CS; CXO escalation", "Save $1.5M of $1.8M"],
            ["Fabrikam Retail", "Utilization 41%; QBR slipped", "Adoption sprint targeted at procurement workflow", "Save $0.7M of $1.2M"],
            ["Tailwind Traders", "Champion left in March", "Champion replacement plan; offer onboarding workshop", "Save $0.4M of $0.6M"],
          ],
          citation: "Oracle Fusion CX · Account_Health · Service_Requests · Usage_Telemetry",
        },
        {
          kind: "list",
          title: "Reasoning trace",
          ordered: true,
          items: [
            "Scoped to your owned accounts via the CX semantic model.",
            "Combined health score, primary signal, support pressure, and renewal proximity.",
            "Matched signal pattern to the play library that's worked for similar accounts.",
            "Estimated impact using historical save-rates for each play type at this segment.",
          ],
        },
        {
          kind: "citations",
          sources: [
            "Oracle Fusion CX · Account_Health",
            "Oracle Fusion CX · Service_Requests",
            "Oracle Fusion CX · Usage_Telemetry",
            "Internal · CS Plays_Library",
          ],
        },
      ],
    },
    work: {
      summary:
        "Your QBR with Northwind is on Thursday and you have the Contoso CXO call Friday morning. Northwind is the one to lead on — drafts are ready.",
      blocks: [
        {
          kind: "callout",
          tone: "info",
          text:
            "Personalized for you, Sam. You own these four accounts, your Thursday QBR with Northwind already has 'value review' on the agenda, and Liam (your CS partner) is on both Northwind and Contoso.",
        },
        {
          kind: "paragraph",
          text:
            "Northwind is the highest-value save and you're already in the room Thursday — bring the new VP Ops introduction. Contoso needs Liam in the loop before Friday's CXO call. Fabrikam and Tailwind are quieter — they can wait a week if you need the space.",
        },
        {
          kind: "table",
          caption: "This week, in priority order",
          columns: ["Account", "When", "Your move"],
          rows: [
            ["Northwind", "Thu 11:00 — QBR", "Lead with value review; offer exec sponsor intro to new VP Ops"],
            ["Contoso", "Fri 09:00 — CXO call", "Joint resolution plan ready; align with Liam Wed"],
            ["Tailwind", "Next week", "Schedule champion replacement workshop"],
            ["Fabrikam", "Next week", "Send adoption sprint proposal to procurement lead"],
          ],
        },
        {
          kind: "action-card",
          title: "Draft email to Northwind's new VP Ops",
          detail:
            "Subject: A value review ahead of Thursday's QBR. Three short paragraphs: what we've delivered, where adoption stalled, and a 30-minute exec sponsor intro proposal.",
          cta: "Open in Outlook",
          icon: "mail",
        },
        {
          kind: "action-card",
          title: "Teams message to Liam (CS)",
          detail:
            "Loops Liam in on the Contoso joint resolution plan and proposes a 30-minute prep Wednesday before Friday's CXO call.",
          cta: "Send via Teams",
          icon: "teams",
        },
        {
          kind: "action-card",
          title: "Pre-fill Thursday's Northwind QBR",
          detail:
            "Adds the value review section, the exec sponsor intro, and a closing slot for the renewal conversation. Pulls usage and ROI numbers straight from the CX semantic model.",
          cta: "Update meeting",
          icon: "calendar",
        },
        {
          kind: "citations",
          sources: [
            "Oracle Fusion CX · Account_Health",
            "Microsoft Graph · Northwind QBR (Thu 11:00)",
            "Microsoft Graph · Contoso CXO call (Fri 09:00)",
            "Microsoft Purview · Lineage verified",
          ],
        },
      ],
    },
  },
};
