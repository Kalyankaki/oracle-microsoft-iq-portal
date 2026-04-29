import type { ScenarioId } from "./scenarios";
import type { TierId } from "./tiers";

export interface ScenarioTierStep {
  delivers: string;
  benefit: string;
}

export interface ScenarioProgression {
  scenarioId: ScenarioId;
  question: string;
  steps: Record<TierId, ScenarioTierStep>;
}

export const SCENARIO_PROGRESSIONS: Record<ScenarioId, ScenarioProgression> = {
  "supply-chain": {
    scenarioId: "supply-chain",
    question:
      "What's our Q3 supply chain risk exposure in EMEA, and which suppliers should we de-risk first?",
    steps: {
      baseline: {
        delivers: "Lists the Oracle SCM tables that hold suppliers, POs, and delivery records.",
        benefit: "Foundation in place — Oracle data is mirrored and ready, but answers stay generic.",
      },
      fabric: {
        delivers: "$47.2M EMEA exposure quantified across 84 suppliers; OTD ↓ to 87%.",
        benefit: "Risk visibility moves from anecdotes to a defensible number, instantly.",
      },
      foundry: {
        delivers: "5 prioritized de-risk plays with $18.6M mitigatable inside Q3.",
        benefit: "Action plan with projected savings — no analyst week required.",
      },
      work: {
        delivers: "Email to Maria, Teams ping to Tomás, and tomorrow's 10am agenda — drafted.",
        benefit: "Decisions executed at the speed of a chat; supplier risk doesn't wait a week.",
      },
    },
  },
  workforce: {
    scenarioId: "workforce",
    question:
      "Summarize open requisitions on my team and flag any that are at risk of missing the fiscal-year close.",
    steps: {
      baseline: {
        delivers: "Names the HCM tables for requisitions, pipeline, and offers.",
        benefit: "Knows the data exists — but can't yet resolve which reqs are 'on your team.'",
      },
      fabric: {
        delivers: "14 open reqs · 5 at FY-close risk · pipeline coverage ↓ to 3.4×.",
        benefit: "FY hiring health visible on one screen, scoped to your org rollup.",
      },
      foundry: {
        delivers: "Per-req recommendation: re-scope, push to offer, or open to internal mobility.",
        benefit: "Hiring plan that actually closes by FY end — projected close rate +18 pts.",
      },
      work: {
        delivers: "Friday review with Diego pre-filled; 1:1 agenda for Aisha drafted.",
        benefit: "Manager time goes to deciding, not to prepping pre-reads.",
      },
    },
  },
  "customer-health": {
    scenarioId: "customer-health",
    question:
      "Which accounts in my book are showing churn signals, and what's the recommended next play for each?",
    steps: {
      baseline: {
        delivers: "Points at the CX tables for accounts, health, and service requests.",
        benefit: "Foundation only — can't yet score churn or scope to your book of business.",
      },
      fabric: {
        delivers: "32 accounts · 4 at risk · $6.0M ARR exposed.",
        benefit: "Churn risk surfaces early, with the dollars attached.",
      },
      foundry: {
        delivers: "Right play per account; $4.6M of the $6.0M is recoverable.",
        benefit: "CSMs lead with the highest-yield save play, not a generic check-in.",
      },
      work: {
        delivers: "Northwind QBR pre-loaded; Contoso CXO call prep with Liam ready.",
        benefit: "The save motion is in the calendar before the customer calls you.",
      },
    },
  },
};
