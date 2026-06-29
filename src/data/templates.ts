export type Template = {
  id: string;
  title: string;
  slug: string;
  status: "draft" | "active" | "paused" | "archived";
  category: string[];
  previewVideoUrl: string;
  thumbnailUrl: string;
  durationSec: number;
  aspectRatio: "9:16" | "1:1" | "16:9";
  difficulty: "low" | "medium" | "high";
  costLevel: "low" | "medium" | "high";
  recommendedPlan:
    | "auto_remix_draft"
    | "fast_human_fixed"
    | "multi_version"
    | "premium_creator";
  priceFrom: number;
  suitableProducts: string[];
  unsuitableProducts: string[];
  replaceableSlots: {
    slotName: string;
    slotType:
      | "product_image"
      | "logo"
      | "caption"
      | "cta"
      | "voiceover"
      | "end_card"
      | "background"
      | "generated_scene";
    required: boolean;
    notes?: string;
  }[];
  requiredAssets: string[];
  deliveryEstimate: string;
  internalNotes?: string;
  commonFailurePoints?: string[];
  averageProductionMinutes?: number;
  averageModelCostUsd?: number;
  averageHumanFixMinutes?: number;
  createdAt: string;
  updatedAt: string;
};

const now = "2026-06-29T00:00:00.000Z";

const visualSlots = [
  { slotName: "Core Subject", slotType: "product_image" as const, required: true, notes: "Product, IP, place, event or campaign subject." },
  { slotName: "Visual Reference", slotType: "generated_scene" as const, required: true, notes: "VACAT work reference, mood board or sample scene." },
  { slotName: "Identity", slotType: "logo" as const, required: false, notes: "Brand, event, city, IP or organization identity." },
  { slotName: "Key Message", slotType: "caption" as const, required: false },
  { slotName: "End Card", slotType: "end_card" as const, required: false },
];

const requiredAssets = [
  "Project background",
  "Reference images or links",
  "Brand / event / IP identity assets",
  "Target audience and platform",
  "Key message or story direction",
  "Preferred delivery format",
];

function visualThumb(mark: string, title: string) {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 760'><defs><radialGradient id='g' cx='30%' cy='20%' r='70%'><stop offset='0%' stop-color='%23cafe61' stop-opacity='.7'/><stop offset='42%' stop-color='%23153163'/><stop offset='100%' stop-color='%2323345f'/></radialGradient></defs><rect width='1200' height='760' fill='%23153163'/><rect width='1200' height='760' fill='url(%23g)'/><circle cx='970' cy='100' r='190' fill='%23cafe61' opacity='.16'/><text x='90' y='360' fill='%23cafe61' font-size='188' font-weight='800' font-family='Arial'>${mark}</text><text x='92' y='470' fill='%23f1f6db' font-size='56' font-weight='700' font-family='Arial'>${title}</text><text x='94' y='535' fill='%23c4cf9a' font-size='28' font-family='Arial'>VacaVaca Studio visual creative reference</text></svg>`;
  return `data:image/svg+xml;utf8,${svg}`;
}

function item(
  id: string,
  title: string,
  slug: string,
  mark: string,
  category: string[],
  suitableProducts: string[],
  recommendedPlan: Template["recommendedPlan"],
  priceFrom: number,
  difficulty: Template["difficulty"] = "medium",
  costLevel: Template["costLevel"] = "medium"
): Template {
  return {
    id,
    title,
    slug,
    status: "active",
    category,
    previewVideoUrl: "",
    thumbnailUrl: visualThumb(mark, title),
    durationSec: 30,
    aspectRatio: "16:9",
    difficulty,
    costLevel,
    recommendedPlan,
    priceFrom,
    suitableProducts,
    unsuitableProducts: ["Pure performance media buying", "Simple banner resizing", "Unscoped low-quality asset swaps"],
    replaceableSlots: visualSlots,
    requiredAssets,
    deliveryEstimate: "3-10 business days",
    commonFailurePoints: ["Unclear creative objective", "Insufficient visual references", "No approval owner"],
    averageProductionMinutes: 180,
    averageModelCostUsd: 30,
    averageHumanFixMinutes: 120,
    createdAt: now,
    updatedAt: now,
  };
}

export const templates: Template[] = [
  item("V001", "Shanhaijing Mythic Visual Film", "shanhaijing-mythic-visual-film", "S", ["AI Film", "Mythic Visual", "Campaign Film"], ["IP films", "game worldbuilding", "heritage campaigns", "launch films"], "premium_creator", 3500, "high", "high"),
  item("V002", "ANIMA Cinematic Narrative", "anima-cinematic-narrative", "A", ["AI Film", "Narrative", "Cinematic"], ["brand stories", "short films", "character concepts", "premium image films"], "premium_creator", 3500, "high", "high"),
  item("V003", "Green Screen Experimental Visual", "green-screen-experimental-visual", "G", ["Visual Art", "Experimental", "Moving Image"], ["music visuals", "art campaigns", "installation videos", "festival visuals"], "multi_version", 1800, "medium", "medium"),
  item("V004", "Longmen Inn 2067 IP Remix", "longmen-inn-2067-ip-remix", "L", ["IP Remix", "Game", "Worldbuilding"], ["game trailers", "virtual character reveals", "IP reinterpretation", "Steam launch visuals"], "premium_creator", 3500, "high", "high"),
  item("V005", "Dunhuang Culture Visual Journey", "dunhuang-culture-visual-journey", "D", ["Culture", "Tourism", "Animated Film"], ["museums", "tourism bureaus", "cultural products", "city campaigns"], "premium_creator", 2800, "high", "high"),
  item("V006", "Ink Style Art Direction", "ink-style-art-direction", "I", ["Art Direction", "Animated Film", "Culture"], ["fashion visuals", "beauty mood films", "heritage brands", "poetic campaign films"], "multi_version", 1800, "medium", "medium"),
  item("V007", "AI Museum Commercial Creative", "ai-museum-commercial-creative", "M", ["Commercial Creative", "Exhibition", "Institutional"], ["exhibitions", "cultural institutions", "public programs", "knowledge brands"], "fast_human_fixed", 900, "medium", "medium"),
  item("V008", "Smart Dafen City Promotion", "smart-dafen-city-promotion", "D", ["City Promotion", "Creative Industry", "Commercial Film"], ["district promotion", "creative parks", "industry events", "public campaigns"], "multi_version", 1800, "medium", "medium"),
  item("V009", "ECHO Music Visual System", "echo-music-visual-system", "E", ["Music Visual", "Visual Art", "Performance"], ["music releases", "concert visuals", "stage screens", "festival trailers"], "premium_creator", 2500, "high", "high"),
  item("V010", "Memory on the Run Poetic Film", "memory-on-the-run-poetic-film", "M", ["Poetic Film", "Public Interest", "Visual Art"], ["public-interest films", "documentary mood pieces", "emotional campaigns", "foundation films"], "multi_version", 1800, "medium", "medium"),
  item("V011", "Porcelain Realm Key Visual", "porcelain-realm-key-visual", "P", ["Poster", "Key Visual", "Heritage"], ["premium posters", "cultural products", "luxury mood boards", "exhibition identity"], "fast_human_fixed", 900, "low", "medium"),
  item("V012", "Battle Day Rapid Visual Concept", "battle-day-rapid-visual-concept", "B", ["Prompt Battle", "Concept Sprint", "Rapid Prototype"], ["early concept exploration", "pitch visuals", "campaign mood testing", "visual direction workshops"], "auto_remix_draft", 300, "low", "low"),
];

export const templateCategories = Array.from(new Set(templates.flatMap((template) => template.category))).sort();

export function findTemplateById(id: string) {
  return templates.find((template) => template.id.toLowerCase() === id.toLowerCase());
}
