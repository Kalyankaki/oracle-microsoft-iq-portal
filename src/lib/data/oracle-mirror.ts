// Synthetic Oracle Fusion-style records mirrored into Microsoft Fabric / OneLake.
// All values are illustrative and used only by the demo responses.

export interface SupplierRecord {
  id: string;
  name: string;
  region: "EMEA" | "AMER" | "APAC";
  category: string;
  q3SpendUsdM: number;
  spendSharePct: number;
  onTimeDeliveryPct: number;
  leadTimeVarianceDays: number;
  riskScore: number; // 0-100
  concentrationFlag: boolean;
  source: string;
}

export const SUPPLIERS: SupplierRecord[] = [
  {
    id: "SUP-10241",
    name: "Adriatica Components SpA",
    region: "EMEA",
    category: "Precision castings",
    q3SpendUsdM: 8.4,
    spendSharePct: 17.8,
    onTimeDeliveryPct: 81,
    leadTimeVarianceDays: 9.2,
    riskScore: 87,
    concentrationFlag: true,
    source: "Oracle Fusion SCM · Supplier_Risk_View",
  },
  {
    id: "SUP-10398",
    name: "Helvetia Polymers AG",
    region: "EMEA",
    category: "Specialty polymers",
    q3SpendUsdM: 5.6,
    spendSharePct: 11.9,
    onTimeDeliveryPct: 84,
    leadTimeVarianceDays: 6.8,
    riskScore: 79,
    concentrationFlag: true,
    source: "Oracle Fusion SCM · Supplier_Risk_View",
  },
  {
    id: "SUP-10712",
    name: "Nordic Forge AS",
    region: "EMEA",
    category: "Forged steel",
    q3SpendUsdM: 4.0,
    spendSharePct: 8.5,
    onTimeDeliveryPct: 88,
    leadTimeVarianceDays: 4.4,
    riskScore: 72,
    concentrationFlag: false,
    source: "Oracle Fusion SCM · Supplier_Risk_View",
  },
  {
    id: "SUP-10915",
    name: "Iberia Logistica SL",
    region: "EMEA",
    category: "Inbound logistics",
    q3SpendUsdM: 3.1,
    spendSharePct: 6.6,
    onTimeDeliveryPct: 79,
    leadTimeVarianceDays: 7.1,
    riskScore: 68,
    concentrationFlag: false,
    source: "Oracle Fusion Procurement · Logistics_Performance",
  },
  {
    id: "SUP-11022",
    name: "Levant Electronics Ltd",
    region: "EMEA",
    category: "Control boards",
    q3SpendUsdM: 2.7,
    spendSharePct: 5.7,
    onTimeDeliveryPct: 86,
    leadTimeVarianceDays: 5.0,
    riskScore: 64,
    concentrationFlag: false,
    source: "Oracle Fusion SCM · Supplier_Risk_View",
  },
];

export interface RequisitionRecord {
  id: string;
  title: string;
  level: string;
  org: string;
  daysOpen: number;
  pipelineCount: number;
  offerStage: "Sourcing" | "Screening" | "Onsite" | "Offer Out" | "Offer Accepted";
  fyCloseRiskScore: number; // 0-100
  source: string;
}

export const REQUISITIONS: RequisitionRecord[] = [
  {
    id: "REQ-44120",
    title: "Senior Platform Engineer",
    level: "P5",
    org: "Platform Eng",
    daysOpen: 71,
    pipelineCount: 4,
    offerStage: "Onsite",
    fyCloseRiskScore: 78,
    source: "Oracle Fusion HCM · Recruiting_Pipeline",
  },
  {
    id: "REQ-44188",
    title: "Staff Data Scientist",
    level: "P6",
    org: "Applied AI",
    daysOpen: 89,
    pipelineCount: 2,
    offerStage: "Screening",
    fyCloseRiskScore: 91,
    source: "Oracle Fusion HCM · Recruiting_Pipeline",
  },
  {
    id: "REQ-44211",
    title: "Product Designer",
    level: "P4",
    org: "Design",
    daysOpen: 33,
    pipelineCount: 9,
    offerStage: "Offer Out",
    fyCloseRiskScore: 22,
    source: "Oracle Fusion HCM · Recruiting_Pipeline",
  },
  {
    id: "REQ-44260",
    title: "Engineering Manager",
    level: "M3",
    org: "Platform Eng",
    daysOpen: 54,
    pipelineCount: 3,
    offerStage: "Onsite",
    fyCloseRiskScore: 64,
    source: "Oracle Fusion HCM · Recruiting_Pipeline",
  },
  {
    id: "REQ-44301",
    title: "Solutions Architect",
    level: "P5",
    org: "Platform Eng",
    daysOpen: 18,
    pipelineCount: 6,
    offerStage: "Screening",
    fyCloseRiskScore: 31,
    source: "Oracle Fusion HCM · Recruiting_Pipeline",
  },
];

export interface AccountRecord {
  id: string;
  name: string;
  segment: "Enterprise" | "Mid-Market";
  arrUsdM: number;
  healthScore: number; // 0-100, higher is healthier
  churnSignal: "Low" | "Watch" | "High";
  primarySignal: string;
  renewalInDays: number;
  source: string;
}

export const ACCOUNTS: AccountRecord[] = [
  {
    id: "ACC-7781",
    name: "Northwind Manufacturing",
    segment: "Enterprise",
    arrUsdM: 2.4,
    healthScore: 38,
    churnSignal: "High",
    primarySignal: "Active usage down 41% QoQ; sponsor moved to new role",
    renewalInDays: 62,
    source: "Oracle Fusion CX · Account_Health",
  },
  {
    id: "ACC-7902",
    name: "Contoso Logistics",
    segment: "Enterprise",
    arrUsdM: 1.8,
    healthScore: 47,
    churnSignal: "High",
    primarySignal: "Two open Sev-1 cases > 14 days; NPS dropped to 12",
    renewalInDays: 88,
    source: "Oracle Fusion CX · Account_Health",
  },
  {
    id: "ACC-8014",
    name: "Fabrikam Retail",
    segment: "Enterprise",
    arrUsdM: 1.2,
    healthScore: 58,
    churnSignal: "Watch",
    primarySignal: "License utilization at 41%; QBR slipped twice",
    renewalInDays: 121,
    source: "Oracle Fusion CX · Account_Health",
  },
  {
    id: "ACC-8127",
    name: "Tailwind Traders",
    segment: "Mid-Market",
    arrUsdM: 0.6,
    healthScore: 64,
    churnSignal: "Watch",
    primarySignal: "Champion left in March; replacement not yet engaged",
    renewalInDays: 54,
    source: "Oracle Fusion CX · Account_Health",
  },
  {
    id: "ACC-8233",
    name: "Adventure Works",
    segment: "Enterprise",
    arrUsdM: 2.1,
    healthScore: 81,
    churnSignal: "Low",
    primarySignal: "Expansion conversation opened; new use case in pilot",
    renewalInDays: 184,
    source: "Oracle Fusion CX · Account_Health",
  },
];

export const EMEA_TOTALS = {
  q3ExposureUsdM: 47.2,
  supplierCount: 84,
  topThreeConcentrationPct: 38,
  onTimeDeliveryPct: 87,
  onTimeDeliveryPriorPct: 94,
};

export const PORTFOLIO_TOTALS = {
  openReqs: 14,
  atRiskFyClose: 5,
  avgDaysOpen: 47,
  bookOfBusinessAccounts: 32,
  atRiskArrUsdM: 6.0,
};
