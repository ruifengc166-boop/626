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
  { value: "4,646", label: "VACAT second-edition submissions" },
  { value: "76", label: "Awarded and finalist works" },
  { value: "92", label: "Participating universities" },
  { value: "272", label: "Industry cooperation leads" },
];

export const studioWorks: StudioWork[] = [
  { slug: "anima", title: "ANIMA (Part I)", creator: "VACAT Narrative Creator", award: "Selected Work", track: "AI cinematic narrative", mark: "A", summary: "A cinematic reference for atmosphere, character presence and emotionally grounded AI visual storytelling.", demoUrl: "https://www.bilibili.com" },
  { slug: "green-screen", title: "Green Screen", creator: "VACAT Experimental Film Creator", award: "Selected Work", track: "AI experimental film", mark: "G", summary: "A screen-language reference for brands, artists and institutions that need a more conceptual moving-image system.", demoUrl: "https://www.bilibili.com" },
  { slug: "echo", title: "ECHO", creator: "VACAT Visual Art Creator", award: "Selected Work", track: "AI visual art film", mark: "E", summary: "An abstract visual-art reference for music visuals, installations and premium image films.", demoUrl: "https://www.bilibili.com" },
  { slug: "memory-on-the-run", title: "Memory on the Run", creator: "VACAT Poetic Film Creator", award: "Selected Work", track: "AI poetic moving image", mark: "M", summary: "A poetic moving-image reference for emotional campaigns, concept films and public-interest themes.", demoUrl: "https://www.bilibili.com" },
  { slug: "human-machine", title: "Human Machine", creator: "VACAT Poster Creator", award: "Selected Work", track: "AI art poster", mark: "H", summary: "A global technology-and-humanity visual reference for posters, product launches and thought-leadership campaigns.", demoUrl: "https://www.bilibili.com" },
  { slug: "eve-no-1", title: "EVE NO.1", creator: "VACAT Key Visual Creator", award: "Selected Work", track: "AI key visual", mark: "E1", summary: "A futuristic character and identity reference for virtual IP, brand worlds and premium campaign imagery.", demoUrl: "https://www.bilibili.com" },
  { slug: "signal-room", title: "Signal Room", creator: "VACAT Spatial Visual Creator", award: "Reference Direction", track: "AI spatial visual system", mark: "SR", summary: "A spatial screen and installation reference for events, exhibitions and immersive brand spaces.", demoUrl: "https://www.bilibili.com" },
  { slug: "future-museum", title: "Future Museum", creator: "VACAT Commercial Creative Creator", award: "Reference Direction", track: "AI institutional visual film", mark: "FM", summary: "An international museum and institution reference for knowledge-led communication and exhibition trailers.", demoUrl: "https://www.bilibili.com" },
  { slug: "mirror-city", title: "Mirror City", creator: "VACAT City Image Creator", award: "Reference Direction", track: "AI city image film", mark: "MC", summary: "A city and architecture reference for districts, creative parks, technology campuses and destination campaigns.", demoUrl: "https://www.bilibili.com" },
  { slug: "synthetic-nature", title: "Synthetic Nature", creator: "VACAT Art Direction Creator", award: "Reference Direction", track: "AI nature-tech visual", mark: "SN", summary: "A nature-and-technology reference for sustainability, fashion, beauty and premium lifestyle stories.", demoUrl: "https://www.bilibili.com" },
  { slug: "after-image", title: "After Image", creator: "VACAT Music Visual Creator", award: "Reference Direction", track: "AI music visual", mark: "AI", summary: "A performance and music-visual reference for stage screens, teasers and audiovisual releases.", demoUrl: "https://www.bilibili.com" },
  { slug: "open-world", title: "Open World", creator: "VACAT Game Visual Creator", award: "Reference Direction", track: "AI game concept film", mark: "OW", summary: "A future-world reference for games, virtual characters, IP trailers and concept pitches.", demoUrl: "https://www.bilibili.com" },
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
  "VACAT is the AI visual creativity award; VacaVaca Studio is the commercial creative studio built on that award ecosystem.",
  "VACAT has produced public breakout works and a large pool of awarded and finalist references.",
  "The award has generated 272 industry cooperation leads, proving demand beyond creator showcases.",
  "The 2025 AI Visual Creativity Application Blue Book adds a research and standards layer to the platform.",
  "University participation and media-art submissions give VACAT international-facing credibility.",
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
