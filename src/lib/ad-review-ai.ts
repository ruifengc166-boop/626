import type { AdCreativeReviewInput, AdCreativeReviewReport, RecommendedService } from "@/lib/ad-review-types";
import { AD_REVIEW_SYSTEM_PROMPT, buildAdReviewPrompt, reviewSchema } from "@/lib/ad-review-prompts";

export async function generateAdCreativeReview(input: AdCreativeReviewInput): Promise<AdCreativeReviewReport> {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey || process.env.FREE_REVIEW_AI_ENABLED === "false") return generateFallbackAdCreativeReview(input);

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
          { role: "system", content: [{ type: "input_text", text: AD_REVIEW_SYSTEM_PROMPT }] },
          { role: "user", content: [{ type: "input_text", text: buildAdReviewPrompt(input, linkContext) }] },
        ],
        text: {
          format: {
            type: "json_schema",
            name: "creative_review_report",
            schema: reviewSchema,
            strict: true,
          },
        },
      }),
    });

    if (!response.ok) return generateFallbackAdCreativeReview(input);
    const data = await response.json();
    const text = extractOutputText(data);
    if (!text) return generateFallbackAdCreativeReview(input);

    const parsed = JSON.parse(text) as AdCreativeReviewReport;
    return normalizeReport(parsed, input);
  } catch {
    return generateFallbackAdCreativeReview(input);
  }
}

async function fetchLinkContext(url: string) {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 4500);
    const response = await fetch(url, { signal: controller.signal, headers: { "User-Agent": "Mozilla/5.0 VacaVacaCreativeReviewBot" } });
    clearTimeout(timeout);
    if (!response.ok) return "";
    const html = await response.text();
    const title = html.match(/<title>(.*?)<\/title>/i)?.[1]?.replace(/\s+/g, " ").trim() || "";
    const description = html.match(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']+)["']/i)?.[1] ||
      html.match(/<meta[^>]+property=["']og:description["'][^>]+content=["']([^"']+)["']/i)?.[1] ||
      "";
    const text = html.replace(/<script[\s\S]*?<\/script>/gi, " ").replace(/<style[\s\S]*?<\/style>/gi, " ").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim().slice(0, 3000);
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
  const allowed: RecommendedService[] = ["Founder Pilot", "Direction Draft", "Polished Visual", "Visual Sprint", "Launch-Grade"];
  return allowed.includes(service as RecommendedService) ? (service as RecommendedService) : "Direction Draft";
}

function clampScore(value: number) {
  if (!Number.isFinite(value)) return 65;
  return Math.max(0, Math.min(100, Math.round(value)));
}

export function generateFallbackAdCreativeReview(input: AdCreativeReviewInput): AdCreativeReviewReport {
  const hasTranscript = Boolean(input.transcriptOrCaption?.trim());
  const hasConcern = Boolean(input.currentConcern?.trim());
  const hasCategory = Boolean(input.productCategory?.trim());
  const score = hasTranscript ? 72 : 64;
  const recommendedService: RecommendedService = hasTranscript || hasConcern ? "Polished Visual" : "Direction Draft";
  const leadScore = clampScore((hasTranscript ? 28 : 12) + (hasConcern ? 24 : 10) + (hasCategory ? 10 : 4) + 28);

  return {
    creativeReadinessScore: score,
    scoreSummary: hasTranscript
      ? "The visual work has enough submitted context to review message, opening, pacing and format fit, but it still needs a sharper creative structure."
      : "The visual work can be reviewed at a high level from the link and project goal, but adding a script or outline would make the review more precise.",
    mainIssue: "The first improvement area is likely the opening moment: the core subject and visual promise should become clear faster.",
    whatWorks: [
      "The project goal gives a clear starting point for creative feedback.",
      "The target format helps judge pacing and visual hierarchy.",
      "The submitted material can be reviewed before committing to full production.",
    ],
    whatToFix: [
      "Show the core subject, world or visual promise earlier.",
      "Make the main idea readable through image structure, not only through text.",
      "End with a clearer action, emotional beat or project conclusion.",
      "Cut setup shots that do not support the visual concept.",
    ],
    firstThreeSecondsReview: "The opening should establish subject, atmosphere and reason to keep watching immediately. Avoid starting with slow setup unless the visual language is already compelling.",
    productClarityReview: "The project subject should be identifiable early, with a simple visual or text cue explaining what it is and why it matters.",
    pacingReview: "The piece should move from visual hook to concept proof to ending beat. Any scene that does not clarify the idea should be shortened.",
    captionCtaReview: "Use short captions only where they strengthen the idea. The ending should match the intended use case, such as event entry, website visit, application or full-film viewing.",
    platformFit: `${input.targetPlatform} usually rewards strong openings, clear visual hierarchy and memorable endings. This instant review is based on the submitted link, caption and project context rather than a full frame-by-frame inspection.`,
    suggestedHook: `Open with the clearest visual promise behind ${input.productName}, then build toward ${input.campaignGoal.toLowerCase()}.`,
    fixPriority: "Fix the opening sequence first: subject, atmosphere and viewer reason to continue.",
    recommendedService,
    nextStepReason: recommendedService === "Direction Draft"
      ? "A Direction Draft is enough if you need a clearer creative route before production."
      : "A studio-scoped production route is the right next step if you want the current material developed into a finished visual work.",
    leadScore,
    internalSignals: [
      hasTranscript ? "User provided script or transcript" : "User did not provide script or transcript",
      hasConcern ? "User has a stated creative concern" : "No stated creative concern",
      hasCategory ? `Project category: ${input.productCategory}` : "No project category provided",
      `Target format: ${input.targetPlatform}`,
    ],
    disclaimer: defaultDisclaimer(input.targetPlatform),
  };
}

function defaultDisclaimer(platform: string) {
  return `This is a creative review for ${platform}. It does not predict conversion rate, distribution performance or media results.`;
}
