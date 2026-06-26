import { promises as fs } from "fs";
import path from "path";
import { defaultChecklist, type Order, type OrderPlan, type OrderStatus } from "@/lib/order-types";

const ordersPath = path.join(process.cwd(), "data", "orders.json");

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
    .filter(Boolean);
}

function optionalString(value: unknown) {
  const text = String(value || "").trim();
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

export async function createOrder(input: Record<string, unknown>) {
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

  const order: Order = {
    id,
    createdAt: now,
    updatedAt: now,
    status: "new",
    selectedTemplateId: String(input.selectedTemplateId).trim(),
    plan: (optionalString(input.plan) as OrderPlan) || "not_sure",
    brandName: String(input.brandName).trim(),
    productName: String(input.productName).trim(),
    productUrl: String(input.productUrl).trim(),
    productAssetLinks: splitLinks(input.productAssetLinks),
    logoAssetLinks: splitLinks(input.logoAssetLinks),
    sellingPoint1: String(input.sellingPoint1).trim(),
    sellingPoint2: optionalString(input.sellingPoint2),
    sellingPoint3: optionalString(input.sellingPoint3),
    targetPlatform: String(input.targetPlatform || "other") as Order["targetPlatform"],
    targetLanguage: String(input.targetLanguage || "English").trim(),
    ctaText: String(input.ctaText).trim(),
    contactEmail: String(input.contactEmail).trim(),
    contactHandle: optionalString(input.contactHandle),
    brandColors: optionalString(input.brandColors),
    existingAdsOrReferences: optionalString(input.existingAdsOrReferences),
    thingsToAvoid: optionalString(input.thingsToAvoid),
    budgetRange: optionalString(input.budgetRange),
    needHumanOptimization: toBool(input.needHumanOptimization),
    needMultipleVersions: toBool(input.needMultipleVersions),
    deliveryDeadline: optionalString(input.deliveryDeadline),
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
    internalNotes: optionalString(input.internalNotes),
    modelRuns: optionalNumber(input.modelRuns),
    modelCostUsd: optionalNumber(input.modelCostUsd),
    humanFixMinutes: optionalNumber(input.humanFixMinutes),
    revisionCount: optionalNumber(input.revisionCount),
    finalDeliveryUrl: optionalString(input.finalDeliveryUrl),
    clientFeedback: optionalString(input.clientFeedback),
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
