import type { AdCreativeReviewInput, AdCreativeReviewReport, RecommendedService } from "@/lib/ad-review-types";

const reviewSchema = {
  type: "object",
  additionalProperties: false,
  required: [
    "creativeReadinessScore",
    "scoreSummary",
    "mainIssue",
    "whatWorks",
    "whatToFix",
    "firstThreeSecondsReview",
    "productClarityReview",
    "pacingReview",
    "captionCtaReview",
    "platformFit",
    "suggestedHook",
    "fixPriority",
    "recommendedService",
    "nextStepReason",
    "leadScore",
    "internalSignals",
    "disclaimer",
  ],
  properties: {
    creativeReadinessScore: { type: "number", minimum: 0, maximum: 100 },
    scoreSummary: { type: "string" },
    mainIssue: { type: "string" },
    whatWorks: { type: "array", minItems: 2, maxItems: 4, items: { type: "string" } },
    whatToFix: { type: "array", minItems: 3, maxItems: 5, items: { type: "string" } },
    firstThreeSecondsReview: { type: "string" },
    productClarityReview: { type: "string" },
    pacingReview: { type: "string" },
    captionCtaReview: { type: "string" },
    platformFit: { type: "string" },
    suggestedHook: { type: "string" },
    fixPriority: { type: "string" },
    recommendedService: { type: "string", enum: ["Founder Pilot", "Direction Draft", "Polished Ad", "Testing Pack", "Launch-Grade"] },
    nextStepReason: { type: "string" },
    leadScore: { type: "number", minimum: 0, maximum: 100 },
    internalSignals: { type: "array", minItems: 2, maxItems: 5, items: { type: "string" } },
    disclaimer: { type: "string" },
  },
} as const;

export async function generateAdCreativeReview(input: AdCreativeReviewInput): Promise<AdCreativeReviewReport> {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) return fallbackReview(input);

  try {
    const linkContext = await fetchLinkContext(input.adUrl);
    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: process.env.OPENAI_MODEL || "gpt-4.1-mini",
        input: [
          {
            role: "system",
            content: [
              {
                type: "input_text",
                text: [
                  "You are an ad creative strategist for a creator-led product ad studio.",
                  "Review the ad creative itself, not the product business potential.",
                  "Do not predict ROAS, conversion rate, revenue, virality, or guaranteed performance.",
                  "Do not create a full production plan or complete script for free.",
                  "Focus on hook strength, product clarity, benefit clarity, pacing, captions, CTA, and target platform fit.",
                  "Give practical, concise feedback a brand can understand.",
                  "The report is a free diagnostic that should identify the first paid next step when appropriate.",
                ].join("\n"),
              },
            ],
          },
          {
            role: "user",
            content: [
              {
                type: "input_text",
                text: buildPrompt(input, linkContext),
              },
            ],
          },
        ],
        text: {
          format: {
            type: "json_schema",
            name: "ad_creative_review_report",
            schema: reviewSchema,
            strict: true,
          },
        },
      }),
    });

    if (!response.ok) return fallbackReview(input);
    const data = await response.json();
    const text = extractOutputText(data);
    if (!text) return fallbackReview(input);

    const parsed = JSON.parse(text) as AdCreativeReviewReport;
    return normalizeReport(parsed, input);
  } catch {
    return fallbackReview(input);
  }
}

function buildPrompt(input: AdCreativeReviewInput, linkContext: string) {
  return [
    `Ad or video URL: ${input.adUrl}`,
    `Product name: ${input.productName}`,
    `Product category: ${input.productCategory || "Not provided"}`,
    `Target platform: ${input.targetPlatform}`,
    `Campaign goal: ${input.campaignGoal}`,
    `Client concern: ${input.currentConcern || "Not provided"}`,
    `Transcript / caption / ad copy: ${input.transcriptOrCaption || "Not provided"}`,
    `Link context: ${linkContext || "No reliable link context extracted."}`,
    "",
    "Generate a free ad creative review. Judge the ad material itself. If the URL cannot be inspected, use the transcript, caption, campaign goal, and provided context to infer the likely review. Be transparent and avoid performance guarantees.",
  ].join("\n");
}

async function fetchLinkContext(url: string) {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 4500);
    const response = await fetch(url, {
      signal: controller.signal,
      headers: { "User-Agent": "Mozilla/5.0 AdCreativeReviewBot" },
    });
    clearTimeout(timeout);
    if (!response.ok) return "";
    const html = await response.text();
    const title = html.match(/<title>(.*?)<\/title>/i)?.[1]?.replace(/\s+/g, " ").trim() || "";
    const description = html.match(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']+)["']/i)?.[1] ||
      html.match(/<meta[^>]+property=["']og:description["'][^>]+content=["']([^"']+)["']/i)?.[1] ||
      "";
    const text = html
      .replace(/<script[\s\S]*?<\/script>/gi, " ")
      .replace(/<style[\s\S]*?<\/style>/gi, " ")
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " ")
      .trim()
      .slice(0, 3000);
    return [`Title: ${title}`, `Description: ${description}`, `Visible text: ${text}`].join("\n").slice(0, 3600);
  } catch {
    return "";
  }
}

function extractOutputText(data: any): string {
  if (typeof data?.output_text === "string") return data.output_text;
  const output = Array.isArray(data?.output) ? data.output : [];
  for (const item of output) {
    const content = Array.isArray(item?.content) ? item.content : [];
    for (const part of content) {
      if (typeof part?.text === "string") return part.text;
    }
  }
  return "";
}

function normalizeReport(report: AdCreativeReviewReport, input: AdCreativeReviewInput): AdCreativeReviewReport {
  return {
    ...report,
    creativeReadinessScore: clampScore(report.creativeReadinessScore),
    leadScore: clampScore(report.leadScore),
    recommendedService: normalizeService(report.recommendedService),
    disclaimer: report.disclaimer || defaultDisclaimer(input.targetPlatform),
  };
}

function normalizeService(service: string): RecommendedService {
  const allowed: RecommendedService[] = ["Founder Pilot", "Direction Draft", "Polished Ad", "Testing Pack", "Launch-Grade"];
  return allowed.includes(service as RecommendedService) ? (service as RecommendedService) : "Polished Ad";
}

function clampScore(value: number) {
  if (!Number.isFinite(value)) return 65;
  return Math.max(0, Math.min(100, Math.round(value)));
}

function fallbackReview(input: AdCreativeReviewInput): AdCreativeReviewReport {
  const hasTranscript = Boolean(input.transcriptOrCaption?.trim());
  const hasConcern = Boolean(input.currentConcern?.trim());
  const score = hasTranscript ? 72 : 64;
  const recommendedService: RecommendedService = hasTranscript || hasConcern ? "Polished Ad" : "Direction Draft";

  return {
    creativeReadinessScore: score,
    scoreSummary: hasTranscript
      ? "The ad has enough creative context to review the message, hook and platform fit, but it still needs a sharper short-form structure."
      : "The ad can be reviewed at a high level from the link and campaign goal, but adding captions or transcript would make the review more precise.",
    mainIssue: "The first improvement area is likely the opening hook: the product benefit should be clearer before the viewer scrolls away.",
    whatWorks: [
      "The campaign goal gives a clear starting point for creative feedback.",
      "The ad has a defined target platform, which helps judge pacing and format.",
      "The product can be reviewed for short-form ad clarity before committing to production.",
    ],
    whatToFix: [
      "Show the product or outcome earlier in the first 1-3 seconds.",
      "Make the main benefit readable as a short caption, not only implied by visuals.",
      "End with a clearer CTA tied to the campaign goal.",
      "Cut any setup shots that do not explain the product or benefit.",
    ],
    firstThreeSecondsReview: "The opening should state or show the core product benefit immediately. Avoid starting with mood, abstract visuals or slow setup unless the brand is already known.",
    productClarityReview: "The product should be visually identifiable early, with a simple caption explaining what it does or why it matters.",
    pacingReview: "For short-form social, the ad should move quickly from hook to product proof to CTA. Any scene that does not clarify the offer should be shortened.",
    captionCtaReview: "Use short captions that carry the selling point even when sound is off. The CTA should be direct and platform-appropriate.",
    platformFit: `${input.targetPlatform} usually rewards fast hooks, clear visuals and simple captions. The ad should be evaluated against those basics before polishing.`,
    suggestedHook: `Still looking for a better way to ${input.campaignGoal.toLowerCase()}? Try ${input.productName}.`,
    fixPriority: "Fix the first three seconds first: product, benefit and viewer reason to keep watching.",
    recommendedService,
    nextStepReason: recommendedService === "Direction Draft"
      ? "A Direction Draft is enough if you only need a clearer creative route before production."
      : "A Polished Ad is the right next step if you want the current material reworked into a cleaner social ad.",
    leadScore: hasTranscript || hasConcern ? 76 : 58,
    internalSignals: [
      hasTranscript ? "User provided ad copy/transcript" : "User did not provide transcript",
      hasConcern ? "User has a stated creative concern" : "No stated creative concern",
      `Target platform: ${input.targetPlatform}`,
    ],
    disclaimer: defaultDisclaimer(input.targetPlatform),
  };
}

function defaultDisclaimer(platform: string) {
  return `This is a creative review for ${platform}. It does not predict ROAS, conversion rate or campaign performance.`;
}
