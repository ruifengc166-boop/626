export type VacaVacaMetric = {
  value: string;
  label: string;
  note: string;
};

export type VacaVacaCaseReference = {
  id: string;
  title: string;
  lane: string;
  bestFor: string;
  signal: string;
};

export type VacaVacaWorkflowBridge = {
  step: string;
  title: string;
  description: string;
};

export const vacaVacaSupport = {
  name: "VacaVaca / VACAT",
  eyebrow: "VacaVaca creator ecosystem",
  headline: "Backed by an AI visual creator community, routed through one studio workflow.",
  description:
    "VacaVaca is used inside AI REMIX as trust proof, style intelligence and creator-capability support. It does not turn this MVP into an open marketplace; every request still enters the same studio-reviewed order flow.",
  metrics: [
    {
      value: "4,646",
      label: "second-edition submissions",
      note: "A visible pool of AI visual experiments and creator output.",
    },
    {
      value: "76",
      label: "finalist / awarded works",
      note: "A curated reference layer for premium visual direction.",
    },
    {
      value: "92",
      label: "participating universities",
      note: "Useful ecosystem signal for international trust-building.",
    },
  ] satisfies VacaVacaMetric[],
  proofPoints: [
    "Use the VacaVaca award/community story as credibility before the user chooses a template.",
    "Use selected award-style references to help clients express taste without opening creator bidding.",
    "Use creator capability lanes internally when scoping production and estimating human-fix effort.",
    "Return finished client-approved ads into the public case layer only after permission.",
  ],
  caseReferences: [
    {
      id: "VV-PREMIUM-VISUAL",
      title: "Premium visual atmosphere",
      lane: "Luxury / beauty / fragrance",
      bestFor: "Brands that need mood, texture and high-end product perception.",
      signal: "Use as inspiration for T015 and premium_creator requests.",
    },
    {
      id: "VV-GAME-CHARACTER",
      title: "Game world and character reveal",
      lane: "Games / IP / virtual characters",
      bestFor: "Steam wishlist, game trailer and character-launch briefs.",
      signal: "Use as inspiration for T018-T020 and multi_version / premium_creator requests.",
    },
    {
      id: "VV-MUSIC-VISUAL",
      title: "Music visual and event teaser",
      lane: "Music / event / visual performance",
      bestFor: "Music releases, concerts and AI visual events.",
      signal: "Use as inspiration for T016-T017 and premium_creator requests.",
    },
    {
      id: "VV-PRODUCT-DEMO",
      title: "Product demo remix",
      lane: "DTC / ecommerce / app demos",
      bestFor: "Clear conversion ads where the product and CTA must stay obvious.",
      signal: "Use as inspiration for T001-T014 and fast_human_fixed requests.",
    },
  ] satisfies VacaVacaCaseReference[],
  workflowBridge: [
    {
      step: "01",
      title: "Trust backing",
      description: "Show the VacaVaca proof layer before asking for a brief, so overseas brands see creator depth instead of a generic AI tool.",
    },
    {
      step: "02",
      title: "Template choice",
      description: "Map the client to a narrow ad style or award-reference lane, keeping the request structured enough for production.",
    },
    {
      step: "03",
      title: "Brief intake",
      description: "Collect product assets, platform, selling points, CTA and optional VacaVaca reference notes in the existing /start form.",
    },
    {
      step: "04",
      title: "Backstage fulfillment",
      description: "Admin reviews fit, cost, human-fix needs and whether a creator-lane reference should guide production.",
    },
    {
      step: "05",
      title: "Case return",
      description: "Only approved finished ads flow back into the case layer, strengthening the next round of trust backing.",
    },
  ] satisfies VacaVacaWorkflowBridge[],
} as const;
