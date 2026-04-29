export type IqLayer = "fabric" | "foundry" | "work";

export type TierId = "baseline" | "fabric" | "foundry" | "work";

export interface Tier {
  id: TierId;
  index: number;
  label: string;
  shortLabel: string;
  tagline: string;
  enabledLayers: IqLayer[];
  added: {
    title: string;
    bullets: string[];
  };
  accent: "slate" | "azure" | "yellow" | "teal";
}

export const TIERS: Tier[] = [
  {
    id: "baseline",
    index: 0,
    label: "Baseline",
    shortLabel: "Baseline",
    tagline: "Copilot + mirrored Oracle data",
    enabledLayers: [],
    accent: "slate",
    added: {
      title: "Foundation in place",
      bullets: [
        "Oracle Fusion data mirrored into Microsoft Fabric / OneLake.",
        "Microsoft Copilot is the front door, but has no semantic model or agent reasoning.",
        "Answers stay generic — the agent can describe the data, not interpret it.",
      ],
    },
  },
  {
    id: "fabric",
    index: 1,
    label: "+ Fabric IQ",
    shortLabel: "Fabric IQ",
    tagline: "Semantic intelligence over the Oracle mirror",
    enabledLayers: ["fabric"],
    accent: "azure",
    added: {
      title: "Fabric IQ lights up the data",
      bullets: [
        "Semantic model knows what supplier risk, requisition health, and churn signal mean.",
        "Joins SCM, Procurement, HCM, and CX without hand-written SQL.",
        "Answers now carry concrete numbers, aggregates, and quarter-over-quarter trends.",
      ],
    },
  },
  {
    id: "foundry",
    index: 2,
    label: "+ Foundry IQ",
    shortLabel: "Foundry IQ",
    tagline: "Agent reasoning, retrieval, and grounding",
    enabledLayers: ["fabric", "foundry"],
    accent: "yellow",
    added: {
      title: "Foundry IQ adds reasoning",
      bullets: [
        "Multi-step retrieval across the semantic model with grounded citations.",
        "Ranks, prioritizes, and recommends — with projected $ impact and trade-offs.",
        "Every claim links back to the underlying Oracle Fusion record.",
      ],
    },
  },
  {
    id: "work",
    index: 3,
    label: "+ Work IQ",
    shortLabel: "Work IQ",
    tagline: "Personalized through Microsoft Graph",
    enabledLayers: ["fabric", "foundry", "work"],
    accent: "teal",
    added: {
      title: "Work IQ makes it yours",
      bullets: [
        "Knows your role, calendar, recent meetings, and key collaborators via Microsoft Graph.",
        "Tailors recommendations to what's already on your plate this week.",
        "Drafts the email, the Teams message, and the meeting agenda — ready to send.",
      ],
    },
  },
];

export const TIER_BY_ID: Record<TierId, Tier> = TIERS.reduce(
  (acc, t) => {
    acc[t.id] = t;
    return acc;
  },
  {} as Record<TierId, Tier>,
);

export function isTierId(value: string): value is TierId {
  return value === "baseline" || value === "fabric" || value === "foundry" || value === "work";
}
