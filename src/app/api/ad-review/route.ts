import { NextResponse } from "next/server";
import type { AdCreativeReviewInput, AdReviewPlatform } from "@/lib/ad-review-types";
import { generateAdCreativeReview } from "@/lib/ad-review-ai";
import { countRecentReviews, createAdReview } from "@/lib/ad-reviews";

const platforms: AdReviewPlatform[] = ["TikTok", "Instagram Reels", "YouTube Shorts", "Meta Ads", "Other"];

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

    const report = await generateAdCreativeReview(input);
    const saved = await createAdReview(input, report, clientIp);

    return NextResponse.json({ reviewId: saved.id }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to generate ad review" },
      { status: 400 }
    );
  }
}

function normalizeInput(raw: Record<string, unknown>): AdCreativeReviewInput {
  const adUrl = requiredString(raw.adUrl, "Ad or video link");
  const productName = requiredString(raw.productName, "Product name");
  const campaignGoal = requiredString(raw.campaignGoal, "Campaign goal");
  const contactEmail = requiredString(raw.contactEmail, "Contact email").toLowerCase();
  const platformText = requiredString(raw.targetPlatform, "Target platform");
  const targetPlatform = platforms.includes(platformText as AdReviewPlatform) ? (platformText as AdReviewPlatform) : "Other";

  if (!/^https?:\/\//i.test(adUrl)) throw new Error("Ad or video link must start with http:// or https://");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactEmail)) throw new Error("Please enter a valid email.");

  return {
    adUrl,
    productName,
    productCategory: optionalString(raw.productCategory),
    targetPlatform,
    campaignGoal,
    currentConcern: optionalString(raw.currentConcern),
    transcriptOrCaption: optionalString(raw.transcriptOrCaption),
    contactEmail,
  };
}

function requiredString(value: unknown, label: string) {
  const text = String(value || "").trim();
  if (!text) throw new Error(`${label} is required.`);
  return text.slice(0, 1200);
}

function optionalString(value: unknown) {
  const text = String(value || "").trim();
  return text ? text.slice(0, 4000) : undefined;
}

function getClientIp(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  const realIp = request.headers.get("x-real-ip")?.trim();
  return forwarded || realIp || undefined;
}
