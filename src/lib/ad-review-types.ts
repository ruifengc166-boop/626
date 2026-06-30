export type AdReviewPlatform = "TikTok" | "Instagram Reels" | "YouTube Shorts" | "Meta Ads" | "Website" | "Event Screen" | "Exhibition Screen" | "Pitch Deck" | "Brand Film" | "Key Visual" | "Other";

export type RecommendedService = "Founder Pilot" | "Direction Draft" | "Polished Visual" | "Visual Sprint" | "Launch-Grade";

export type AdCreativeReviewInput = {
  adUrl: string;
  productName: string;
  productCategory?: string;
  targetPlatform: AdReviewPlatform;
  campaignGoal: string;
  currentConcern?: string;
  transcriptOrCaption?: string;
  contactEmail: string;
};

export type AdCreativeReviewReport = {
  creativeReadinessScore: number;
  scoreSummary: string;
  mainIssue: string;
  whatWorks: string[];
  whatToFix: string[];
  firstThreeSecondsReview: string;
  productClarityReview: string;
  pacingReview: string;
  captionCtaReview: string;
  platformFit: string;
  suggestedHook: string;
  fixPriority: string;
  recommendedService: RecommendedService;
  nextStepReason: string;
  leadScore: number;
  internalSignals: string[];
  disclaimer: string;
};

export type AdCreativeReview = {
  id: string;
  createdAt: string;
  updatedAt: string;
  status: "generated" | "failed";
  clientIp?: string;
  input: AdCreativeReviewInput;
  report: AdCreativeReviewReport;
};
