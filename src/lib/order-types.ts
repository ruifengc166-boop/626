export type OrderStatus =
  | "new"
  | "reviewed"
  | "need_more_assets"
  | "quoted"
  | "paid"
  | "in_production"
  | "human_fixing"
  | "delivered"
  | "revision_requested"
  | "completed"
  | "rejected"
  | "archived";

export type OrderPlan =
  | "auto_remix_draft"
  | "fast_human_fixed"
  | "multi_version"
  | "premium_creator"
  | "not_sure";

export type OrderSourceChannel = "direct" | "template" | "free_ad_review" | "manual";

export type ChecklistItem = {
  label: string;
  done: boolean;
};

export type Order = {
  id: string;
  createdAt: string;
  updatedAt: string;
  status: OrderStatus;
  clientIp?: string;
  sourceChannel?: OrderSourceChannel;
  sourceReviewId?: string;
  selectedTemplateId: string;
  plan: OrderPlan;
  brandName: string;
  productName: string;
  productUrl: string;
  productAssetLinks: string[];
  logoAssetLinks: string[];
  sellingPoint1: string;
  sellingPoint2?: string;
  sellingPoint3?: string;
  targetPlatform: "tiktok" | "instagram_reels" | "youtube_shorts" | "meta_ads" | "other";
  targetLanguage: string;
  ctaText: string;
  contactEmail: string;
  contactHandle?: string;
  brandColors?: string;
  existingAdsOrReferences?: string;
  thingsToAvoid?: string;
  budgetRange?: string;
  needHumanOptimization: boolean;
  needMultipleVersions: boolean;
  deliveryDeadline?: string;
  productFitsTemplate?: "good" | "acceptable" | "poor" | "unchecked";
  recommendedTemplateId?: string;
  recommendedPlan?: OrderPlan;
  estimatedDeliveryTime?: string;
  estimatedModelCostUsd?: number;
  estimatedHumanMinutes?: number;
  quoteUsd?: number;
  internalNotes?: string;
  modelRuns?: number;
  modelCostUsd?: number;
  humanFixMinutes?: number;
  revisionCount?: number;
  finalDeliveryUrl?: string;
  clientFeedback?: string;
  canBePublicCase: boolean;
  checklist: ChecklistItem[];
};

export const orderStatuses: OrderStatus[] = [
  "new",
  "reviewed",
  "need_more_assets",
  "quoted",
  "paid",
  "in_production",
  "human_fixing",
  "delivered",
  "revision_requested",
  "completed",
  "rejected",
  "archived",
];

export const orderPlans: OrderPlan[] = [
  "auto_remix_draft",
  "fast_human_fixed",
  "multi_version",
  "premium_creator",
  "not_sure",
];

export const defaultChecklist: ChecklistItem[] = [
  "Check product assets",
  "Check logo asset",
  "Check selected template fit",
  "Replace product image",
  "Replace logo",
  "Replace captions",
  "Replace CTA",
  "Generate voiceover",
  "Export 9:16",
  "Check product accuracy",
  "Check logo accuracy",
  "Check caption spelling",
  "Check audio",
  "Check visual errors",
  "Deliver preview",
  "Record cost",
  "Ask for upgrade",
].map((label) => ({ label, done: false }));
