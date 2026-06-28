import { promises as fs } from "fs";
import path from "path";
import type { AdCreativeReview, AdCreativeReviewInput, AdCreativeReviewReport } from "@/lib/ad-review-types";

const reviewsPath = path.join(process.cwd(), "data", "ad-reviews.json");

async function ensureStore() {
  await fs.mkdir(path.dirname(reviewsPath), { recursive: true });
  try {
    await fs.access(reviewsPath);
  } catch {
    await fs.writeFile(reviewsPath, "[]\n", "utf8");
  }
}

async function readReviews(): Promise<AdCreativeReview[]> {
  await ensureStore();
  const raw = await fs.readFile(reviewsPath, "utf8");
  if (!raw.trim()) return [];
  return JSON.parse(raw) as AdCreativeReview[];
}

async function writeReviews(reviews: AdCreativeReview[]) {
  await ensureStore();
  await fs.writeFile(reviewsPath, `${JSON.stringify(reviews, null, 2)}\n`, "utf8");
}

export async function listAdReviews() {
  const reviews = await readReviews();
  return reviews.sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt));
}

export async function getAdReview(id: string) {
  const reviews = await readReviews();
  return reviews.find((review) => review.id === id) || null;
}

export async function createAdReview(input: AdCreativeReviewInput, report: AdCreativeReviewReport, clientIp?: string) {
  const now = new Date().toISOString();
  const id = `REV-${Date.now()}-${Math.random().toString(36).slice(2, 7).toUpperCase()}`;
  const review: AdCreativeReview = {
    id,
    createdAt: now,
    updatedAt: now,
    status: "generated",
    clientIp,
    input,
    report,
  };

  const reviews = await readReviews();
  reviews.unshift(review);
  await writeReviews(reviews);
  return review;
}

export async function countRecentReviews({ email, clientIp }: { email?: string; clientIp?: string }) {
  const reviews = await readReviews();
  const since = Date.now() - 24 * 60 * 60 * 1000;
  const emailKey = String(email || "").trim().toLowerCase();
  const byEmail = emailKey
    ? reviews.filter((review) => review.input.contactEmail.toLowerCase() === emailKey && Date.parse(review.createdAt) >= since).length
    : 0;
  const byIp = clientIp
    ? reviews.filter((review) => review.clientIp === clientIp && Date.parse(review.createdAt) >= since).length
    : 0;

  return { byEmail, byIp };
}
