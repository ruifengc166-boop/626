export type StudioWork = {
  slug: string;
  title: string;
  creator: string;
  award: string;
  track: string;
  mark: string;
  summary: string;
  posterUrl: string;
  previewVideoUrl?: string;
  fullVideoUrl?: string;
  bilibiliUrl?: string;
  commercialUseCases: string[];
  referenceValue: string;
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
const bilibili = "https://www.bilibili.com";

function workPoster(mark: string, title: string) {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1280 720'><defs><radialGradient id='g' cx='24%' cy='18%' r='70%'><stop offset='0%' stop-color='%23cafe61' stop-opacity='.78'/><stop offset='44%' stop-color='%23153163'/><stop offset='100%' stop-color='%23050505'/></radialGradient><linearGradient id='s' x1='0' y1='0' x2='1' y2='1'><stop offset='0%' stop-color='%23ffffff' stop-opacity='.12'/><stop offset='100%' stop-color='%23ffffff' stop-opacity='0'/></linearGradient></defs><rect width='1280' height='720' fill='%23050505'/><rect width='1280' height='720' fill='url(%23g)'/><circle cx='1080' cy='120' r='220' fill='%23cafe61' opacity='.16'/><rect x='54' y='54' width='1172' height='612' rx='38' fill='url(%23s)' stroke='%23ffffff' stroke-opacity='.14'/><text x='92' y='318' fill='%23cafe61' font-size='172' font-weight='800' font-family='Arial'>${mark}</text><text x='96' y='430' fill='%23f4f6e9' font-size='58' font-weight='700' font-family='Arial'>${title}</text><text x='98' y='500' fill='%23d8e2b7' font-size='28' font-family='Arial'>VACAT Award reference · VacaVaca Studio</text></svg>`;
  return `data:image/svg+xml;utf8,${svg}`;
}

function work(
  slug: string,
  title: string,
  creator: string,
  award: string,
  track: string,
  mark: string,
  summary: string,
  commercialUseCases: string[],
  referenceValue: string,
  bilibiliUrl = bilibili
): StudioWork {
  return {
    slug,
    title,
    creator,
    award,
    track,
    mark,
    summary,
    posterUrl: workPoster(mark, title),
    bilibiliUrl,
    commercialUseCases,
    referenceValue,
  };
}

export const studioMetrics = [
  { value: "4,646", label: "VACAT second-edition submissions" },
  { value: "76", label: "Awarded and finalist works" },
  { value: "92", label: "Participating universities" },
  { value: "272", label: "Industry cooperation leads" },
];

export const studioWorks: StudioWork[] = [
  work("anima", "ANIMA (Part I)", "VACAT Narrative Creator", "Selected Work", "AI cinematic narrative", "A", "A cinematic reference for atmosphere, character presence and emotionally grounded AI visual storytelling.", ["brand story films", "premium image films", "character-led campaigns"], "Use this work when a client needs cinematic atmosphere, emotional structure and a stronger narrative opening."),
  work("green-screen", "Green Screen", "VACAT Experimental Film Creator", "Selected Work", "AI experimental film", "G", "A screen-language reference for brands, artists and institutions that need a more conceptual moving-image system.", ["art campaigns", "festival visuals", "installation videos"], "Use this reference when the project needs a sharper conceptual language rather than a conventional ad structure."),
  work("echo", "ECHO", "VACAT Visual Art Creator", "Selected Work", "AI visual art film", "E", "An abstract visual-art reference for music visuals, installations and premium image films.", ["music visuals", "stage screens", "artist releases"], "Use this reference when sound, rhythm and abstract visual memory matter more than literal product explanation."),
  work("memory-on-the-run", "Memory on the Run", "VACAT Poetic Film Creator", "Selected Work", "AI poetic moving image", "M", "A poetic moving-image reference for emotional campaigns, concept films and public-interest themes.", ["public-interest films", "foundation campaigns", "emotional brand stories"], "Use this reference when the brief needs a poetic tone, restrained pacing and a stronger emotional aftertaste."),
  work("human-machine", "Human Machine", "VACAT Poster Creator", "Selected Work", "AI art poster", "H", "A global technology-and-humanity visual reference for posters, product launches and thought-leadership campaigns.", ["technology launches", "conference visuals", "AI product campaigns"], "Use this reference when the client needs a key visual system that makes technology feel human, sharp and premium."),
  work("eve-no-1", "EVE NO.1", "VACAT Key Visual Creator", "Selected Work", "AI key visual", "E1", "A futuristic character and identity reference for virtual IP, brand worlds and premium campaign imagery.", ["virtual IP", "character identity", "brand worldbuilding"], "Use this reference when a project needs a recognizable virtual figure or a more complete image-world direction."),
  work("signal-room", "Signal Room", "VACAT Spatial Visual Creator", "Reference Direction", "AI spatial visual system", "SR", "A spatial screen and installation reference for events, exhibitions and immersive brand spaces.", ["event screens", "exhibition visuals", "immersive spaces"], "Use this reference when the output will live on large screens, spatial media or event environments."),
  work("future-museum", "Future Museum", "VACAT Commercial Creative Creator", "Reference Direction", "AI institutional visual film", "FM", "An international museum and institution reference for knowledge-led communication and exhibition trailers.", ["museum trailers", "institutional films", "knowledge-brand campaigns"], "Use this reference when an institution needs visual authority without looking like a conventional corporate video."),
  work("mirror-city", "Mirror City", "VACAT City Image Creator", "Reference Direction", "AI city image film", "MC", "A city and architecture reference for districts, creative parks, technology campuses and destination campaigns.", ["city image films", "district promotion", "creative park campaigns"], "Use this reference when place, architecture and future identity need to become a visual story."),
  work("synthetic-nature", "Synthetic Nature", "VACAT Art Direction Creator", "Reference Direction", "AI nature-tech visual", "SN", "A nature-and-technology reference for sustainability, fashion, beauty and premium lifestyle stories.", ["sustainability campaigns", "fashion visuals", "beauty films"], "Use this reference when the project needs a premium balance between organic feeling and technological imagination."),
  work("after-image", "After Image", "VACAT Music Visual Creator", "Reference Direction", "AI music visual", "AI", "A performance and music-visual reference for stage screens, teasers and audiovisual releases.", ["concert visuals", "performance teasers", "stage screen loops"], "Use this reference when the deliverable must support performance energy and rhythm-driven visuals."),
  work("open-world", "Open World", "VACAT Game Visual Creator", "Reference Direction", "AI game concept film", "OW", "A future-world reference for games, virtual characters, IP trailers and concept pitches.", ["game trailers", "IP pitches", "worldbuilding films"], "Use this reference when the client needs a world, not just a single visual asset."),
];

export const studioCreators: StudioCreator[] = [
  { name: "WildPusa Studio", level: "Creator", focus: "AI visual direction, campaign films, product storytelling and VacaVaca Studio production", works: 28, likes: "3.6k", initials: "WP" },
  { name: "VACAT Narrative Unit", level: "Creator", focus: "Cinematic AI narrative, character scenes, short films and story-led visual campaigns", works: 15, likes: "2.1k", initials: "VN" },
  { name: "VACAT Motion Unit", level: "Creator", focus: "AI animation, motion design, international campaign visuals and stylized short films", works: 15, likes: "1.8k", initials: "VM" },
  { name: "VACAT Commercial Creative Unit", level: "Dreamer", focus: "Institutions, technology brands, city image films and product launch visuals", works: 15, likes: "1.5k", initials: "VC" },
  { name: "VACAT Visual Art Unit", level: "Dreamer", focus: "Experimental film, music visuals, installation-style image systems and art films", works: 11, likes: "1.2k", initials: "VV" },
  { name: "VACAT Key Visual Unit", level: "Explorer", focus: "AI poster, virtual character identity, campaign key visuals and mood-board development", works: 14, likes: "980", initials: "VK" },
  { name: "Battle Day Creator Pool", level: "Creator", focus: "Prompt battle, fast ideation, live creation and rapid visual exploration", works: 8, likes: "860", initials: "BD" },
  { name: "VacaVaca Studio", level: "Creator", focus: "Client-facing creative direction and delivery built on VACAT references", works: 20, likes: "1.9k", initials: "VS" },
];

export const studioEvents: StudioEvent[] = [
  { date: "Oct 17", title: "VACAT Award Ceremony and Project Signing", text: "A public recognition and industry-connection moment for awarded works, creators and commercial partners.", image: asset("assets/events/day1-schedule.png") },
  { date: "Oct 18", title: "AI Visual Technology Workshop", text: "A learning and exchange format around AI video, AI image, short drama production and commercial creative workflows.", image: asset("assets/events/day2-workshop.png") },
  { date: "Oct 19", title: "AI Battle Day", text: "A live creation format built around prompt battles, time-limited production and creator visibility.", image: asset("assets/events/day3-competition.png") },
  { date: "Oct 17 - Nov 16", title: "AI Visual Creativity Exhibition", text: "An offline exhibition layer for works, tools, creators and industry communication.", image: asset("assets/events/exhibition.png") },
];

export const awardAuthority = [
  "VACAT provides award-backed visual references that clients can use before commissioning custom work.",
  "Awarded and finalist works show the studio's taste range across AI film, key visual, music visual, city image and spatial media.",
  "Creator participation gives VacaVaca Studio a stronger production bench than a single freelancer portfolio.",
  "The 2025 AI Visual Creativity Application Blue Book adds a research and standards layer to the platform.",
  "University participation, jury credibility and event activity turn the award into a trust layer for commercial briefs.",
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