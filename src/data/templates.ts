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
  referenceWork: string;
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
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 760'><defs><radialGradient id='g' cx='30%' cy='20%' r='70%'><stop offset='0%' stop-color='%23cafe61' stop-opacity='.7'/><stop offset='42%' stop-color='%23153163'/><stop offset='100%' stop-color='%2323345f'/></radialGradient></defs><rect width='1200' height='760' fill='%23153163'/><rect width='1200' height='760' fill='url(%23g)'/><circle cx='970' cy='100' r='190' fill='%23cafe61' opacity='.16'/><text x='90' y='360' fill='%23cafe61' font-size='188' font-weight='800' font-family='Arial'>${mark}</text><text x='92' y='470' fill='%23f1f6db' font-size='56' font-weight='700' font-family='Arial'>${title}</text><text x='94' y='535' fill='%23c4cf9a' font-size='28' font-family='Arial'>VacaVaca Studio creative direction</text></svg>`;
  return `data:image/svg+xml;utf8,${svg}`;
}

function item(
  id: string,
  title: string,
  slug: string,
  mark: string,
  category: string[],
  suitableProducts: string[],
  referenceWork: string,
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
    referenceWork,
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
  item("V001", "Cinematic Brand Film", "anima-cinematic-narrative", "CB", ["AI Film", "Narrative", "Cinematic"], ["brand stories", "short films", "character concepts", "premium image films"], "Inspired by ANIMA (Part I)", "premium_creator", 3500, "high", "high"),
  item("V002", "Experimental Visual Campaign", "green-screen-experimental-visual", "EV", ["Visual Art", "Experimental", "Moving Image"], ["music visuals", "art campaigns", "installation videos", "festival visuals"], "Inspired by Green Screen", "multi_version", 1800, "medium", "medium"),
  item("V003", "Music / Stage Visual System", "echo-music-visual-system", "MV", ["Music Visual", "Visual Art", "Performance"], ["music releases", "concert visuals", "stage screens", "festival trailers"], "Inspired by ECHO", "premium_creator", 2500, "high", "high"),
  item("V004", "Poetic Public-Interest Film", "memory-on-the-run-poetic-film", "PF", ["Poetic Film", "Public Interest", "Visual Art"], ["public-interest films", "documentary mood pieces", "emotional campaigns", "foundation films"], "Inspired by Memory on the Run", "multi_version", 1800, "medium", "medium"),
  item("V005", "Technology Key Visual", "human-machine-key-visual", "KV", ["Key Visual", "Technology", "Humanity"], ["technology brands", "AI products", "thought-leadership campaigns", "conference visuals"], "Inspired by Human Machine", "fast_human_fixed", 900, "medium", "medium"),
  item("V006", "Virtual IP Identity", "eve-no-1-virtual-identity", "IP", ["Virtual IP", "Key Visual", "Character"], ["virtual characters", "brand worlds", "launch campaigns", "premium image systems"], "Inspired by EVE NO.1", "multi_version", 1800, "medium", "medium"),
  item("V007", "Spatial Event Visuals", "signal-room-spatial-visual", "SV", ["Spatial Visual", "Event", "Installation"], ["event screens", "exhibitions", "immersive spaces", "brand installations"], "Inspired by Signal Room", "premium_creator", 2800, "high", "high"),
  item("V008", "Institution / Museum Film", "future-museum-institutional-film", "IM", ["Institutional", "Exhibition", "Knowledge Brand"], ["museums", "institutions", "public programs", "knowledge brands"], "Inspired by Future Museum", "fast_human_fixed", 900, "medium", "medium"),
  item("V009", "City Image Film", "mirror-city-image-film", "CI", ["City Image", "Architecture", "Destination"], ["district promotion", "technology parks", "creative campuses", "city campaigns"], "Inspired by Mirror City", "multi_version", 1800, "medium", "medium"),
  item("V010", "Nature-Tech Visual Direction", "synthetic-nature-visual-direction", "NT", ["Nature-Tech", "Art Direction", "Lifestyle"], ["fashion visuals", "beauty films", "sustainability campaigns", "premium lifestyle brands"], "Inspired by Synthetic Nature", "multi_version", 1800, "medium", "medium"),
  item("V011", "Performance Visual System", "after-image-performance-visual", "PV", ["Performance", "Music Visual", "Stage"], ["concert visuals", "artist releases", "stage screens", "festival trailers"], "Inspired by After Image", "premium_creator", 2500, "high", "high"),
  item("V012", "Game / IP Concept Film", "open-world-concept-film", "GI", ["Game", "Worldbuilding", "Concept Film"], ["game trailers", "virtual character reveals", "IP pitches", "Steam launch visuals"], "Inspired by Open World", "premium_creator", 3500, "high", "high"),
];

export const templateCategories = Array.from(new Set(templates.flatMap((template) => template.category))).sort();

export function findTemplateById(id: string) {
  return templates.find((template) => template.id.toLowerCase() === id.toLowerCase());
}
