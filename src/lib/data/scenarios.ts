export type ScenarioId = "supply-chain" | "workforce" | "customer-health";

export interface Scenario {
  id: ScenarioId;
  label: string;
  domain: string;
  prompt: string;
  blurb: string;
}

export const SCENARIOS: Scenario[] = [
  {
    id: "supply-chain",
    label: "Supply Chain Risk",
    domain: "Oracle Fusion SCM · Procurement",
    prompt:
      "What's our Q3 supply chain risk exposure in EMEA, and which suppliers should we de-risk first?",
    blurb: "EMEA Q3 exposure across suppliers, lead-time variance, and concentration risk.",
  },
  {
    id: "workforce",
    label: "Workforce Planning",
    domain: "Oracle Fusion HCM · Recruiting",
    prompt:
      "Summarize open requisitions on my team and flag any that are at risk of missing the fiscal-year close.",
    blurb: "Open reqs on your team, slip risk, and what to do before fiscal-year close.",
  },
  {
    id: "customer-health",
    label: "Customer Health",
    domain: "Oracle Fusion CX · Service",
    prompt:
      "Which accounts in my book of business are showing churn signals, and what's the recommended next play for each?",
    blurb: "Churn signals across your book, with the recommended next play per account.",
  },
];

export const SCENARIO_BY_ID: Record<ScenarioId, Scenario> = SCENARIOS.reduce(
  (acc, s) => {
    acc[s.id] = s;
    return acc;
  },
  {} as Record<ScenarioId, Scenario>,
);

export function isScenarioId(v: string): v is ScenarioId {
  return v === "supply-chain" || v === "workforce" || v === "customer-health";
}
