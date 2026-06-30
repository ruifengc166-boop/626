import { NextResponse } from "next/server";
import type { AdCreativeReviewInput, AdReviewPlatform } from "@/lib/ad-review-types";
import { generateAdCreativeReview, generateFallbackAdCreativeReview } from "@/lib/ad-review-ai";
import { countRecentReviews, createAdReview, findReusableAdReview } from "@/lib/ad-reviews";

const platforms: AdReviewPlatform[] = ["TikTok", "Instagram Reels", "YouTube Shorts", "Meta Ads", "Website", "Event Screen", "Exhibition Screen", "Pitch Deck", "Other"];

export async function POST(request: Request) {
  try {
    const raw = await request.json();
    const input = normalizeInput(raw);
    const clientIp = getClientIp(request);
    const counts = await countRecentReviews({ email: input.contactEmail, clientIp });

    if (counts.byEmail >= 3) {
      return NextResponse.json({ error: "Daily review limit reached for this email." }, { status: 429 });
    }
    if (clientIp && counts.byIp >= 5) {
      return NextResponse.json({ error: "Daily review limit reached. Please try again later." }, { status: 429 });
    }

    const reusableReview = await findReusableAdReview(input);
    if (reusableReview) {
      return NextResponse.json({ reviewId: reusableReview.id, reused: true }, { status: 200 });
    }

    const dailyAiLimit = readPositiveIntegerEnv("FREE_REVIEW_DAILY_AI_LIMIT", 100);
    const shouldUseFallback = process.env.FREE_REVIEW_AI_ENABLED === "false" || counts.total >= dailyAiLimit;
    const report = shouldUseFallback ? generateFallbackAdCreativeReview(input) : await generateAdCreativeReview(input);
    const saved = await createAdReview(input, report, clientIp);

    return NextResponse.json({ reviewId: saved.id, aiGenerated: !shouldUseFallback }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to generate creative review" },
      { status: 400 }
    );
  }
}

function normalizeInput(raw: Record<string, unknown>): AdCreativeReviewInput {
  const adUrl = requiredString(raw.adUrl, "Video, draft or reference link");
  const productName = requiredString(raw.productName, "Project name");
  const campaignGoal = requiredString(raw.campaignGoal, "Creative goal");
  const contactEmail = requiredString(raw.contactEmail, "Contact email").toLowerCase();
  const platformText = requiredString(raw.targetPlatform, "Target format");
  const targetPlatform = platforms.includes(platformText as AdReviewPlatform) ? (platformText as AdReviewPlatform) : "Other";

  if (!/^https?:\/\//i.test(adUrl)) throw new Error("Video, draft or reference link must start with http:// or https://");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactEmail)) throw new Error("Please enter a valid email.");

  return {
    adUrl,
    productName,
    productCategory: optionalString(raw.productCategory),
    targetPlatform,
    campaignGoal,
    currentConcern: optionalString(raw.currentConcern),
    transcriptOrCaption: optionalString(raw.transcriptOrCaption, 2000),
    contactEmail,
  };
}

function requiredString(value: unknown, label: string) {
  const text = String(value || "").trim();
  if (!text) throw new Error(`${label} is required.`);
  return text.slice(0, 1200);
}

function optionalString(value: unknown, maxLength = 4000) {
  const text = String(value || "").trim();
  return text ? text.slice(0, maxLength) : undefined;
}

function readPositiveIntegerEnv(name: string, fallback: number) {
  const parsed = Number(process.env[name]);
  return Number.isFinite(parsed) && parsed > 0 ? Math.floor(parsed) : fallback;
}

function getClientIp(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  const realIp = request.headers.get("x-real-ip")?.trim();
  return forwarded || realIp || undefined;
}
