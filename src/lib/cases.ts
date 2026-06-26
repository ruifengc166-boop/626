import { promises as fs } from "fs";
import path from "path";

export type CaseStudy = {
  id: string;
  title: string;
  templateId: string;
  productCategory: string;
  beforeAssetUrl?: string;
  afterVideoUrl: string;
  thumbnailUrl: string;
  description: string;
  resultNotes?: string;
  public: boolean;
  createdAt: string;
  updatedAt: string;
};

const casesPath = path.join(process.cwd(), "data", "cases.json");

async function ensureStore() {
  await fs.mkdir(path.dirname(casesPath), { recursive: true });
  try {
    await fs.access(casesPath);
  } catch {
    await fs.writeFile(casesPath, "[]\n", "utf8");
  }
}

async function readCases(): Promise<CaseStudy[]> {
  await ensureStore();
  const raw = await fs.readFile(casesPath, "utf8");
  if (!raw.trim()) return [];
  return JSON.parse(raw) as CaseStudy[];
}

async function writeCases(cases: CaseStudy[]) {
  await ensureStore();
  await fs.writeFile(casesPath, `${JSON.stringify(cases, null, 2)}\n`, "utf8");
}

function text(value: unknown) {
  return String(value || "").trim();
}

function optionalText(value: unknown) {
  const result = text(value);
  return result || undefined;
}

function bool(value: unknown) {
  return value === true || value === "true" || value === "on" || value === "1";
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "") || `case-${Date.now()}`;
}

export async function listCases(options?: { publicOnly?: boolean }) {
  const cases = await readCases();
  const visible = options?.publicOnly ? cases.filter((item) => item.public) : cases;
  return visible.sort((a, b) => Date.parse(b.updatedAt) - Date.parse(a.updatedAt));
}

export async function getCase(id: string) {
  const cases = await readCases();
  return cases.find((item) => item.id === id) || null;
}

export async function saveCase(input: Record<string, unknown>) {
  const now = new Date().toISOString();
  const title = text(input.title);
  if (!title) throw new Error("Case title is required");

  const id = text(input.id) || slugify(title);
  const cases = await readCases();
  const existingIndex = cases.findIndex((item) => item.id === id);
  const existing = existingIndex >= 0 ? cases[existingIndex] : null;

  const next: CaseStudy = {
    id,
    title,
    templateId: text(input.templateId) || existing?.templateId || "T001",
    productCategory: text(input.productCategory) || existing?.productCategory || "General",
    beforeAssetUrl: optionalText(input.beforeAssetUrl),
    afterVideoUrl: text(input.afterVideoUrl) || existing?.afterVideoUrl || "",
    thumbnailUrl: text(input.thumbnailUrl) || existing?.thumbnailUrl || "",
    description: text(input.description) || existing?.description || "",
    resultNotes: optionalText(input.resultNotes),
    public: bool(input.public),
    createdAt: existing?.createdAt || now,
    updatedAt: now,
  };

  if (existingIndex >= 0) {
    cases[existingIndex] = next;
  } else {
    cases.unshift(next);
  }
  await writeCases(cases);
  return next;
}

export async function deleteCase(id: string) {
  const cases = await readCases();
  await writeCases(cases.filter((item) => item.id !== id));
}
