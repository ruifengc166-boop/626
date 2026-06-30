import { promises as fs } from "fs";
import path from "path";
import { defaultChecklist, type Order, type OrderPlan, type OrderSourceChannel, type OrderStatus, type OrderTargetFormat } from "@/lib/order-types";

const ordersPath = path.join(process.cwd(), "data", "orders.json");
const ONE_DAY_MS = 24 * 60 * 60 * 1000;

async function ensureStore() {
  await fs.mkdir(path.dirname(ordersPath), { recursive: true });
  try {
    await fs.access(ordersPath);
  } catch {
    await fs.writeFile(ordersPath, "[]\n", "utf8");
  }
}

function splitLinks(value: unknown): string[] {
  if (Array.isArray(value)) return value.map(String).filter(Boolean);
  return String(value || "")
    .split(/[\n,]+/)
    .map((item) => item.trim())
    .filter(Boolean)
    .slice(0, 10);
}

function cleanString(value: unknown, maxLength = 1200) {
  return String(value || "").trim().slice(0, maxLength);
}

function optionalString(value: unknown, maxLength = 1200) {
  const text = cleanString(value, maxLength);
  return text.length ? text : undefined;
}

function optionalNumber(value: unknown) {
  const text = String(value || "").trim();
  if (!text.length) return undefined;
  const parsed = Number(text);
  return Number.isFinite(parsed) ? parsed : undefined;
}

function toBool(value: unknown) {
  return value === true || value === "true" || value === "on" || value === "1";
}

async function readOrders(): Promise<Order[]> {
  await ensureStore();
  const raw = await fs.readFile(ordersPath, "utf8");
  if (!raw.trim()) return [];
  return JSON.parse(raw) as Order[];
}

async function writeOrders(orders: Order[]) {
  await ensureStore();
  await fs.writeFile(ordersPath, `${JSON.stringify(orders, null, 2)}\n`, "utf8");
}

export async function listOrders() {
  const orders = await readOrders();
  return orders.sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt));
}

export async function getOrder(id: string) {
  const orders = await readOrders();
  return orders.find((order) => order.id === id) || null;
}

export async function countRecentOrders({ email, clientIp }: { email?: string; clientIp?: string }) {
  const since = Date.now() - ONE_DAY_MS;
  const normalizedEmail = email?.trim().toLowerCase();
  const orders = await readOrders();
  const recent = orders.filter((order) => Date.parse(order.createdAt) >= since);

  return {
    byEmail: normalizedEmail ? recent.filter((order) => order.contactEmail.toLowerCase() === normalizedEmail).length : 0,
    byIp: clientIp ? recent.filter((order) => order.clientIp === clientIp).length : 0,
    total: recent.length,
  };
}

export async function createOrder(input: Record<string, unknown>, clientIp?: string) {
  const required = [
    "selectedTemplateId",
    "brandName",
    "productName",
    "productUrl",
    "productAssetLinks",
    "logoAssetLinks",
    "sellingPoint1",
    "targetPlatform",
    "targetLanguage",
    "ctaText",
    "contactEmail",
  ];

  const missing = required.filter((key) => !String(input[key] || "").trim());
  if (missing.length) {
    throw new Error(`Missing required fields: ${missing.join(", ")}`);
  }

  const now = new Date().toISOString();
  const id = `ORD-${Date.now()}-${Math.random().toString(36).slice(2, 7).toUpperCase()}`;
  const sourceReviewId = optionalString(input.sourceReviewId, 120);
  const sourceChannel = normalizeSourceChannel(input.sourceChannel, sourceReviewId);
  const creativeReferenceLinks = splitLinks(input.creativeReferenceLinks);

  const order: Order = {
    id,
    createdAt: now,
    updatedAt: now,
    status: "new",
    clientIp,
    sourceChannel,
    sourceReviewId,
    selectedTemplateId: cleanString(input.selectedTemplateId, 80),
    plan: normalizePlan(input.plan),
    brandName: cleanString(input.brandName, 160),
    productName: cleanString(input.productName, 160),
    productUrl: cleanString(input.productUrl, 1200),
    productAssetLinks: splitLinks(input.productAssetLinks),
    logoAssetLinks: splitLinks(input.logoAssetLinks),
    sellingPoint1: cleanString(input.sellingPoint1, 800),
    sellingPoint2: optionalString(input.sellingPoint2, 800),
    sellingPoint3: optionalString(input.sellingPoint3, 800),
    targetPlatform: normalizeTargetPlatform(input.targetPlatform),
    targetLanguage: cleanString(input.targetLanguage || "English", 80),
    ctaText: cleanString(input.ctaText, 160),
    contactEmail: cleanString(input.contactEmail, 240).toLowerCase(),
    contactHandle: optionalString(input.contactHandle, 240),
    brandColors: optionalString(input.brandColors, 500),
    existingAdsOrReferences: optionalString(input.existingAdsOrReferences, 2000),
    thingsToAvoid: optionalString(input.thingsToAvoid, 1200),
    budgetRange: optionalString(input.budgetRange, 240),
    vacaVacaReference: optionalString(input.vacaVacaReference, 120),
    creativeReferenceLinks: creativeReferenceLinks.length ? creativeReferenceLinks : undefined,
    creatorFitNotes: optionalString(input.creatorFitNotes, 1600),
    needHumanOptimization: toBool(input.needHumanOptimization),
    needMultipleVersions: toBool(input.needMultipleVersions),
    deliveryDeadline: optionalString(input.deliveryDeadline, 240),
    productFitsTemplate: "unchecked",
    canBePublicCase: false,
    checklist: defaultChecklist.map((item) => ({ ...item })),
  };

  const orders = await readOrders();
  orders.unshift(order);
  await writeOrders(orders);
  return order;
}

export async function updateOrder(id: string, input: Record<string, unknown>) {
  const orders = await readOrders();
  const index = orders.findIndex((order) => order.id === id);
  if (index === -1) return null;

  const current = orders[index];
  const updated: Order = {
    ...current,
    updatedAt: new Date().toISOString(),
    status: (optionalString(input.status) as OrderStatus) || current.status,
    productFitsTemplate: (optionalString(input.productFitsTemplate) as Order["productFitsTemplate"]) || current.productFitsTemplate,
    recommendedTemplateId: optionalString(input.recommendedTemplateId),
    recommendedPlan: (optionalString(input.recommendedPlan) as OrderPlan) || undefined,
    estimatedDeliveryTime: optionalString(input.estimatedDeliveryTime),
    estimatedModelCostUsd: optionalNumber(input.estimatedModelCostUsd),
    estimatedHumanMinutes: optionalNumber(input.estimatedHumanMinutes),
    quoteUsd: optionalNumber(input.quoteUsd),
    internalNotes: optionalString(input.internalNotes, 4000),
    modelRuns: optionalNumber(input.modelRuns),
    modelCostUsd: optionalNumber(input.modelCostUsd),
    humanFixMinutes: optionalNumber(input.humanFixMinutes),
    revisionCount: optionalNumber(input.revisionCount),
    finalDeliveryUrl: optionalString(input.finalDeliveryUrl),
    clientFeedback: optionalString(input.clientFeedback, 4000),
    canBePublicCase: toBool(input.canBePublicCase),
    checklist: current.checklist.map((item, itemIndex) => ({
      ...item,
      done: toBool(input[`checklist-${itemIndex}`]),
    })),
  };

  orders[index] = updated;
  await writeOrders(orders);
  return updated;
}

function normalizePlan(value: unknown): OrderPlan {
  const plan = optionalString(value) as OrderPlan | undefined;
  const allowed: OrderPlan[] = ["auto_remix_draft", "fast_human_fixed", "multi_version", "premium_creator", "not_sure"];
  return plan && allowed.includes(plan) ? plan : "not_sure";
}

function normalizeSourceChannel(value: unknown, sourceReviewId?: string): OrderSourceChannel | undefined {
  const channel = optionalString(value) as OrderSourceChannel | undefined;
  const allowed: OrderSourceChannel[] = ["direct", "template", "free_ad_review", "manual"];
  if (channel && allowed.includes(channel)) return channel;
  return sourceReviewId ? "free_ad_review" : undefined;
}

function normalizeTargetPlatform(value: unknown): OrderTargetFormat {
  const platform = String(value || "").trim().toLowerCase().replace(/[\s-]+/g, "_");
  switch (platform) {
    case "tiktok":
      return "tiktok";
    case "instagram_reels":
      return "instagram_reels";
    case "youtube_shorts":
      return "youtube_shorts";
    case "meta_ads":
      return "meta_ads";
    case "website":
      return "website";
    case "exhibition":
    case "exhibition_screen":
      return "exhibition_screen";
    case "event":
    case "event_screen":
      return "event_screen";
    case "pitch_deck":
      return "pitch_deck";
    case "brand_film":
      return "brand_film";
    case "key_visual":
      return "key_visual";
    default:
      return "other";
  }
}
