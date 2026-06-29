export type StudioWork = {
  slug: string;
  title: string;
  creator: string;
  award: string;
  track: string;
  mark: string;
  summary: string;
  demoUrl: string;
};

export type StudioCreator = {
  name: string;
  level: "Creator" | "Dreamer" | "Explorer";
  focus: string;
  works: number;
  likes: string;
  initials: string;
};

export type StudioEvent = {
  date: string;
  title: string;
  text: string;
  image: string;
};

const asset = (path: string) => `https://raw.githubusercontent.com/ruifengc166-boop/vacavaca/master/${path}`;

export const studioMetrics = [
  { value: "4,646", label: "Second-edition submissions" },
  { value: "76", label: "Awarded and finalist works" },
  { value: "92", label: "Participating universities" },
  { value: "272", label: "Cooperation leads and orders" },
];

export const studioWorks: StudioWork[] = [
  { slug: "shanhaijing", title: "Shanhaijing", creator: "VACAT Gold Award Creator", award: "Gold Award", track: "AI mythic visual storytelling", mark: "S", summary: "A high-impact mythic visual work that proves AI-generated storytelling can break out beyond the creator circle.", demoUrl: "https://www.bilibili.com" },
  { slug: "anima", title: "ANIMA (Part I)", creator: "VACAT Narrative Creator", award: "Selected Work", track: "AI realistic narrative film", mark: "A", summary: "A cinematic reference for atmosphere, character scenes and emotionally grounded AI visual narratives.", demoUrl: "https://www.bilibili.com" },
  { slug: "green-screen", title: "Green Screen", creator: "VACAT Experimental Film Creator", award: "Selected Work", track: "AI realistic narrative film", mark: "G", summary: "An experimental screen-language reference for brands that need a more conceptual moving-image system.", demoUrl: "https://www.bilibili.com" },
  { slug: "longmen-inn-2067", title: "Longmen Inn 2067", creator: "VACAT IP Remix Creator", award: "Selected Work", track: "Classic IP reinterpretation", mark: "L", summary: "A future-world and IP adaptation reference for games, virtual characters and story-led campaigns.", demoUrl: "https://www.bilibili.com" },
  { slug: "bring-her-eyes", title: "Bring Her Eyes", creator: "VACAT Animation Creator", award: "Selected Work", track: "AI animated narrative film", mark: "E", summary: "A literary and animated storytelling reference for emotional short films and culture-led campaigns.", demoUrl: "https://www.bilibili.com" },
  { slug: "dunhuang-journey", title: "Dunhuang Journey Season 2", creator: "VACAT Culture Visual Creator", award: "Selected Work", track: "AI animated narrative film", mark: "D", summary: "A cultural-heritage visual reference for museums, tourism, cities and cultural product campaigns.", demoUrl: "https://www.bilibili.com" },
  { slug: "ink-style", title: "Ink Chinese Style", creator: "VACAT Art Direction Creator", award: "Selected Work", track: "AI animated narrative film", mark: "I", summary: "A stylized art-direction reference for brands that need a poetic, hand-crafted or Eastern visual identity.", demoUrl: "https://www.bilibili.com" },
  { slug: "ai-museum", title: "AI on Cultural Museum", creator: "VACAT Commercial Creative Creator", award: "Selected Work", track: "AI commercial creative film", mark: "M", summary: "A commercial creative reference for exhibitions, cultural institutions and knowledge-led brand communication.", demoUrl: "https://www.bilibili.com" },
  { slug: "dafen", title: "Smart Dafen Creative Infinity", creator: "VACAT City Promotion Creator", award: "Selected Work", track: "AI commercial creative film", mark: "D", summary: "A city and creative-industry promotion reference for parks, districts, exhibitions and public campaigns.", demoUrl: "https://www.bilibili.com" },
  { slug: "echo", title: "ECHO", creator: "VACAT Visual Art Creator", award: "Selected Work", track: "AI visual art film", mark: "E", summary: "An abstract visual-art reference for music visuals, installations and premium image films.", demoUrl: "https://www.bilibili.com" },
  { slug: "memory-on-the-run", title: "Memory on the Run", creator: "VACAT Poetic Film Creator", award: "Selected Work", track: "AI visual art film", mark: "M", summary: "A poetic moving-image reference for public-interest themes, emotional campaigns and concept films.", demoUrl: "https://www.bilibili.com" },
  { slug: "porcelain-realm", title: "Porcelain Realm", creator: "VACAT Poster Creator", award: "Selected Work", track: "AI art poster", mark: "P", summary: "A premium poster and heritage-visual reference for cultural products, luxury goods and exhibition identity.", demoUrl: "https://www.bilibili.com" },
];

export const studioCreators: StudioCreator[] = [
  { name: "WildPusa Studio", level: "Creator", focus: "AI visual creative direction, product films, short-form visual storytelling and studio production workflows", works: 28, likes: "3.6k", initials: "WP" },
  { name: "VACAT Narrative Unit", level: "Creator", focus: "Realistic AI narrative, character scenes, cinematic shorts and story-led visual campaigns", works: 15, likes: "2.1k", initials: "VN" },
  { name: "VACAT Animation Unit", level: "Creator", focus: "AI animation, literary adaptation, cultural tourism visuals and stylized short films", works: 15, likes: "1.8k", initials: "VA" },
  { name: "VACAT Commercial Creative Unit", level: "Dreamer", focus: "Cultural institutions, city promotion, brand films and product launch visuals", works: 15, likes: "1.5k", initials: "VC" },
  { name: "VACAT Visual Art Unit", level: "Dreamer", focus: "Experimental film, music visuals, installation-style image systems and art films", works: 11, likes: "1.2k", initials: "VV" },
  { name: "VACAT Poster Unit", level: "Explorer", focus: "AI poster, virtual character identity, campaign key visuals and mood-board development", works: 14, likes: "980", initials: "VP" },
  { name: "Battle Day Creator Pool", level: "Creator", focus: "Prompt battle, fast ideation, live creation and rapid visual exploration", works: 8, likes: "860", initials: "BD" },
  { name: "VacaVaca Studio Desk", level: "Creator", focus: "Studio-managed adaptation from VACAT references to commissioned visual creative works", works: 20, likes: "1.9k", initials: "VS" },
];

export const studioEvents: StudioEvent[] = [
  { date: "Oct 17", title: "Award Ceremony and Project Signing", text: "A public recognition and industry-connection moment for awarded works, creators and commercial partners.", image: asset("assets/events/day1-schedule.png") },
  { date: "Oct 18", title: "AI Visual Technology Workshop", text: "A learning and exchange format around AI video, AI image, short drama production and commercial creative workflows.", image: asset("assets/events/day2-workshop.png") },
  { date: "Oct 19", title: "AI Battle Day", text: "A live creation format built around prompt battles, time-limited production and creator visibility.", image: asset("assets/events/day3-competition.png") },
  { date: "Oct 17 - Nov 16", title: "AI Visual Creativity Exhibition", text: "An offline exhibition layer for works, tools, creators and industry communication.", image: asset("assets/events/exhibition.png") },
];

export const awardAuthority = [
  "Recognized as a leading AI visual creativity award platform.",
  "The first-edition gold-award work Shanhaijing reached mass public attention with more than 50 million views.",
  "The award has generated 272 cooperation leads and orders, proving a bridge from creator attention to industry demand.",
  "The 2025 AI Visual Creativity Application Blue Book adds a research and standards layer to the platform.",
  "Submissions from universities and media-art communities give VacaVaca international-facing credibility.",
];

export const jury = [
  "Li Ge — Vice Chairman of the China Federation of Literary and Art Circles; Chairman of the China Photographers Association",
  "Zhu Jun — Vice Dean of Tsinghua Institute for AI Industry Research; Chief Scientist of Shengshu Technology",
  "Victoria Lu — Curator, art critic and creative-industry doctoral supervisor",
  "Cao Ting — Dean of the Image Media School, Beijing Film Academy; Chairman of Youth Film Studio",
  "Takeshi Ishikawa — Founder of BitSummit Kyoto International Indie Game Festival; co-founder of UNKNOWN ASIA",
  "Felipe Franco — Founder and creative director of FF&CO.; international design-award winner",
  "Ingo Offermanns — Vice Dean of the University of Fine Arts Hamburg; AGI member",
];
