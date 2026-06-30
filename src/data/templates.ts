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
  serviceBasis: string;
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
  { slotName: "Visual Direction", slotType: "generated_scene" as const, required: true, notes: "Mood board, client-owned reference, authorized commercial example or original scene direction." },
  { slotName: "Identity", slotType: "logo" as const, required: false, notes: "Brand, event, city, IP or organization identity." },
  { slotName: "Key Message", slotType: "caption" as const, required: false },
  { slotName: "End Card", slotType: "end_card" as const, required: false },
];

const requiredAssets = [
  "Project background",
  "Client-owned or licensed reference images / links",
  "Brand / event / IP identity assets",
  "Target audience and platform",
  "Key message or story direction",
  "Preferred delivery format",
];

function visualThumb(mark: string, title: string) {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 760'><defs><radialGradient id='g' cx='30%' cy='20%' r='70%'><stop offset='0%' stop-color='%23cafe61' stop-opacity='.7'/><stop offset='42%' stop-color='%23153163'/><stop offset='100%' stop-color='%2323345f'/></radialGradient></defs><rect width='1200' height='760' fill='%23153163'/><rect width='1200' height='760' fill='url(%23g)'/><circle cx='970' cy='100' r='190' fill='%23cafe61' opacity='.16'/><text x='90' y='360' fill='%23cafe61' font-size='188' font-weight='800' font-family='Arial'>${mark}</text><text x='92' y='470' fill='%23f1f6db' font-size='56' font-weight='700' font-family='Arial'>${title}</text><text x='94' y='535' fill='%23c4cf9a' font-size='28' font-family='Arial'>Original commercial production direction</text></svg>`;
  return `data:image/svg+xml;utf8,${svg}`;
}

function item(
  id: string,
  title: string,
  slug: string,
  mark: string,
  category: string[],
  suitableProducts: string[],
  serviceBasis: string,
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
    serviceBasis,
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
  item("V001", "Cinematic Brand Film", "cinematic-brand-film", "CB", ["AI Film", "Narrative", "Cinematic"], ["brand stories", "short films", "character concepts", "premium image films"], "Original production by VacaVaca Studio and authorized creators", "premium_creator", 3500, "high", "high"),
  item("V002", "Experimental Visual Campaign", "experimental-visual-campaign", "EV", ["Visual Art", "Experimental", "Moving Image"], ["music visuals", "art campaigns", "installation videos", "festival visuals"], "Original art direction, not reuse of submitted award works", "multi_version", 1800, "medium", "medium"),
  item("V003", "Music / Stage Visual System", "music-stage-visual-system", "MV", ["Music Visual", "Visual Art", "Performance"], ["music releases", "concert visuals", "stage screens", "festival trailers"], "Original production for licensed music, stage or event use", "premium_creator", 2500, "high", "high"),
  item("V004", "Poetic Public-Interest Film", "poetic-public-interest-film", "PF", ["Poetic Film", "Public Interest", "Visual Art"], ["public-interest films", "documentary mood pieces", "emotional campaigns", "foundation films"], "Original concept development from the client brief", "multi_version", 1800, "medium", "medium"),
  item("V005", "Technology Key Visual", "technology-key-visual", "KV", ["Key Visual", "Technology", "Humanity"], ["technology brands", "AI products", "thought-leadership campaigns", "conference visuals"], "Original key visual system for commercial use", "fast_human_fixed", 900, "medium", "medium"),
  item("V006", "Virtual IP Identity", "virtual-ip-identity", "IP", ["Virtual IP", "Key Visual", "Character"], ["virtual characters", "brand worlds", "launch campaigns", "premium image systems"], "Original IP / character direction with usage rights confirmed per project", "multi_version", 1800, "medium", "medium"),
  item("V007", "Spatial Event Visuals", "spatial-event-visuals", "SV", ["Spatial Visual", "Event", "Installation"], ["event screens", "exhibitions", "immersive spaces", "brand installations"], "Original production for event and exhibition environments", "premium_creator", 2800, "high", "high"),
  item("V008", "Institution / Museum Film", "institution-museum-film", "IM", ["Institutional", "Exhibition", "Knowledge Brand"], ["museums", "institutions", "public programs", "knowledge brands"], "Original institutional film production", "fast_human_fixed", 900, "medium", "medium"),
  item("V009", "City Image Film", "city-image-film", "CI", ["City Image", "Architecture", "Destination"], ["district promotion", "technology parks", "creative campuses", "city campaigns"], "Original city and place-image production", "multi_version", 1800, "medium", "medium"),
  item("V010", "Nature-Tech Visual Direction", "nature-tech-visual-direction", "NT", ["Nature-Tech", "Art Direction", "Lifestyle"], ["fashion visuals", "beauty films", "sustainability campaigns", "premium lifestyle brands"], "Original visual direction with client-approved references", "multi_version", 1800, "medium", "medium"),
  item("V011", "Performance Visual System", "performance-visual-system", "PV", ["Performance", "Music Visual", "Stage"], ["concert visuals", "artist releases", "stage screens", "festival trailers"], "Original performance visual system for licensed use", "premium_creator", 2500, "high", "high"),
  item("V012", "Game / IP Concept Film", "game-ip-concept-film", "GI", ["Game", "Worldbuilding", "Concept Film"], ["game trailers", "virtual character reveals", "IP pitches", "Steam launch visuals"], "Original concept film production for client-owned or licensed IP", "premium_creator", 3500, "high", "high"),
];

export const templateCategories = Array.from(new Set(templates.flatMap((template) => template.category))).sort();

export function findTemplateById(id: string) {
  return templates.find((template) => template.id.toLowerCase() === id.toLowerCase());
}
