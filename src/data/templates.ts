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
  { slotName: "Visual Reference", slotType: "generated_scene" as const, required: true, notes: "VACAT Award work reference, mood board or sample scene." },
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
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 760'><defs><radialGradient id='g' cx='30%' cy='20%' r='70%'><stop offset='0%' stop-color='%23cafe61' stop-opacity='.7'/><stop offset='42%' stop-color='%23153163'/><stop offset='100%' stop-color='%2323345f'/></radialGradient></defs><rect width='1200' height='760' fill='%23153163'/><rect width='1200' height='760' fill='url(%23g)'/><circle cx='970' cy='100' r='190' fill='%23cafe61' opacity='.16'/><text x='90' y='360' fill='%23cafe61' font-size='188' font-weight='800' font-family='Arial'>${mark}</text><text x='92' y='470' fill='%23f1f6db' font-size='56' font-weight='700' font-family='Arial'>${title}</text><text x='94' y='535' fill='%23c4cf9a' font-size='28' font-family='Arial'>VacaVaca Studio creative reference</text></svg>`;
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
    unsuitableProducts: ["Pure performance media buying", "Simple banner resizing", "Low-quality asset swaps without creative direction"],
    replaceableSlots: visualSlots,
    requiredAssets,
    deliveryEstimate: "3-10 business days",
    commonFailurePoints: ["Unclear creative objective", "Insufficient visual references", "No clear decision maker"],
    averageProductionMinutes: 180,
    averageModelCostUsd: 30,
    averageHumanFixMinutes: 120,
    createdAt: now,
    updatedAt: now,
  };
}

export const templates: Template[] = [
  item("V001", "ANIMA Cinematic Narrative", "anima-cinematic-narrative", "A", ["AI Film", "Narrative", "Cinematic"], ["brand stories", "short films", "character concepts", "premium image films"], "premium_creator", 3500, "high", "high"),
  item("V002", "Green Screen Experimental Visual", "green-screen-experimental-visual", "G", ["Visual Art", "Experimental", "Moving Image"], ["music visuals", "art campaigns", "installation videos", "festival visuals"], "multi_version", 1800, "medium", "medium"),
  item("V003", "ECHO Music Visual System", "echo-music-visual-system", "E", ["Music Visual", "Visual Art", "Performance"], ["music releases", "concert visuals", "stage screens", "festival trailers"], "premium_creator", 2500, "high", "high"),
  item("V004", "Memory on the Run Poetic Film", "memory-on-the-run-poetic-film", "M", ["Poetic Film", "Public Interest", "Visual Art"], ["public-interest films", "documentary mood pieces", "emotional campaigns", "foundation films"], "multi_version", 1800, "medium", "medium"),
  item("V005", "Human Machine Key Visual", "human-machine-key-visual", "H", ["Key Visual", "Technology", "Humanity"], ["technology brands", "AI products", "thought-leadership campaigns", "conference visuals"], "fast_human_fixed", 900, "medium", "medium"),
  item("V006", "EVE NO.1 Virtual Identity", "eve-no-1-virtual-identity", "E1", ["Virtual IP", "Key Visual", "Character"], ["virtual characters", "brand worlds", "launch campaigns", "premium image systems"], "multi_version", 1800, "medium", "medium"),
  item("V007", "Signal Room Spatial Visual", "signal-room-spatial-visual", "SR", ["Spatial Visual", "Event", "Installation"], ["event screens", "exhibitions", "immersive spaces", "brand installations"], "premium_creator", 2800, "high", "high"),
  item("V008", "Future Museum Institutional Film", "future-museum-institutional-film", "FM", ["Institutional", "Exhibition", "Knowledge Brand"], ["museums", "institutions", "public programs", "knowledge brands"], "fast_human_fixed", 900, "medium", "medium"),
  item("V009", "Mirror City Image Film", "mirror-city-image-film", "MC", ["City Image", "Architecture", "Destination"], ["district promotion", "technology parks", "creative campuses", "city campaigns"], "multi_version", 1800, "medium", "medium"),
  item("V010", "Synthetic Nature Visual Direction", "synthetic-nature-visual-direction", "SN", ["Nature-Tech", "Art Direction", "Lifestyle"], ["fashion visuals", "beauty films", "sustainability campaigns", "premium lifestyle brands"], "multi_version", 1800, "medium", "medium"),
  item("V011", "After Image Performance Visual", "after-image-performance-visual", "AI", ["Performance", "Music Visual", "Stage"], ["concert visuals", "artist releases", "stage screens", "festival trailers"], "premium_creator", 2500, "high", "high"),
  item("V012", "Open World Concept Film", "open-world-concept-film", "OW", ["Game", "Worldbuilding", "Concept Film"], ["game trailers", "virtual character reveals", "IP pitches", "Steam launch visuals"], "premium_creator", 3500, "high", "high"),
];

export const templateCategories = Array.from(new Set(templates.flatMap((template) => template.category))).sort();

export function findTemplateById(id: string) {
  return templates.find((template) => template.id.toLowerCase() === id.toLowerCase());
}
