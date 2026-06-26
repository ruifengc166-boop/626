import { promises as fs } from "fs";
import path from "path";
import { templates } from "@/data/templates";
import type { Template } from "@/data/templates";

export type TemplateAdminRecord = {
  id: string;
  status?: Template["status"];
  priceFrom?: number;
  previewVideoUrl?: string;
  thumbnailUrl?: string;
  recommendedPlan?: Template["recommendedPlan"];
  featured?: boolean;
  internalNotes?: string;
  productionNotes?: string;
  updatedAt: string;
};

const storePath = path.join(process.cwd(), "data", "template-admin.json");
const defaultFeaturedIds = ["T001", "T002", "T007", "T011", "T015", "T018"];

async function ensureStore() {
  await fs.mkdir(path.dirname(storePath), { recursive: true });
  try {
    await fs.access(storePath);
  } catch {
    await fs.writeFile(storePath, "[]\n", "utf8");
  }
}

async function readRecords(): Promise<TemplateAdminRecord[]> {
  await ensureStore();
  const raw = await fs.readFile(storePath, "utf8");
  if (!raw.trim()) return [];
  return JSON.parse(raw) as TemplateAdminRecord[];
}

async function writeRecords(records: TemplateAdminRecord[]) {
  await ensureStore();
  await fs.writeFile(storePath, `${JSON.stringify(records, null, 2)}\n`, "utf8");
}

function text(value: unknown) {
  return String(value || "").trim();
}

function optionalText(value: unknown) {
  const result = text(value);
  return result || undefined;
}

function optionalNumber(value: unknown) {
  const result = text(value);
  if (!result) return undefined;
  const parsed = Number(result);
  return Number.isFinite(parsed) ? parsed : undefined;
}

function bool(value: unknown) {
  return value === true || value === "true" || value === "on" || value === "1";
}

export async function listTemplateAdminRows() {
  const records = await readRecords();
  return templates.map((template) => {
    const record = records.find((item) => item.id === template.id);
    return {
      ...template,
      admin: record || null,
      effectiveStatus: record?.status || template.status,
      effectivePriceFrom: record?.priceFrom ?? template.priceFrom,
      effectiveThumbnailUrl: record?.thumbnailUrl || template.thumbnailUrl,
      effectivePreviewVideoUrl: record?.previewVideoUrl || template.previewVideoUrl,
      effectiveRecommendedPlan: record?.recommendedPlan || template.recommendedPlan,
      featured: record?.featured ?? defaultFeaturedIds.includes(template.id),
    };
  });
}

export async function listEffectiveTemplates() {
  const rows = await listTemplateAdminRows();
  return rows.map((row) => ({
    ...row,
    status: row.effectiveStatus,
    priceFrom: row.effectivePriceFrom,
    thumbnailUrl: row.effectiveThumbnailUrl,
    previewVideoUrl: row.effectivePreviewVideoUrl,
    recommendedPlan: row.effectiveRecommendedPlan,
  })) satisfies Array<Template & { featured: boolean }>;
}

export async function getEffectiveTemplateById(id: string) {
  const effectiveTemplates = await listEffectiveTemplates();
  return effectiveTemplates.find((template) => template.id.toLowerCase() === id.toLowerCase()) || null;
}

export async function saveTemplateAdmin(input: Record<string, unknown>) {
  const id = text(input.id);
  if (!id) throw new Error("Template id is required");

  const template = templates.find((item) => item.id === id);
  if (!template) throw new Error(`Unknown template: ${id}`);

  const records = await readRecords();
  const index = records.findIndex((item) => item.id === id);
  const current = index >= 0 ? records[index] : null;

  const next: TemplateAdminRecord = {
    id,
    status: (optionalText(input.status) as Template["status"]) || current?.status || template.status,
    priceFrom: optionalNumber(input.priceFrom) ?? current?.priceFrom ?? template.priceFrom,
    previewVideoUrl: optionalText(input.previewVideoUrl),
    thumbnailUrl: optionalText(input.thumbnailUrl),
    recommendedPlan: (optionalText(input.recommendedPlan) as Template["recommendedPlan"]) || current?.recommendedPlan || template.recommendedPlan,
    featured: bool(input.featured),
    internalNotes: optionalText(input.internalNotes),
    productionNotes: optionalText(input.productionNotes),
    updatedAt: new Date().toISOString(),
  };

  if (index >= 0) {
    records[index] = next;
  } else {
    records.unshift(next);
  }

  await writeRecords(records);
  return next;
}
