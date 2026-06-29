export type VacaVacaMetric = {
  value: string;
  label: string;
  note: string;
};

export type VacaVacaAchievement = {
  icon: string;
  title: string;
  description: string;
};

export type VacaVacaCaseReference = {
  id: string;
  title: string;
  lane: string;
  bestFor: string;
  signal: string;
};

export type VacaVacaRepresentativeWork = {
  title: string;
  category: string;
  track: string;
  signal: string;
};

export type VacaVacaJudge = {
  name: string;
  title: string;
  initial: string;
};

export type VacaVacaTrack = {
  group: string;
  name: string;
  representativeWorks: string;
};

export type VacaVacaEvent = {
  date: string;
  title: string;
  description: string;
};

export type VacaVacaWorkflowBridge = {
  step: string;
  title: string;
  description: string;
};

export const vacaVacaSupport = {
  name: "VacaVaca / VACAT",
  eyebrow: "VacaVaca creator ecosystem",
  headline: "Backed by the VacaVaca / VACAT AI visual creator ecosystem.",
  description:
    "AI REMIX shows VacaVaca as a major content and credibility layer: award history, selected works, creator capability, event record, judging authority and project-intake method. The commercial path still stays studio-managed: users choose a style, submit a product brief, and the team scopes delivery before production.",
  positioning: [
    "AI visual creator tribe supported by the VACAT award committee.",
    "Global AI visual creativity competition and creator community.",
    "A discovery layer for creators, works, events and project referral, now adapted as the trust engine behind AI REMIX.",
  ],
  metrics: [
    { value: "4,646", label: "second-edition submissions", note: "A visible pool of AI visual experiments and creator output." },
    { value: "76", label: "finalist / awarded works", note: "A curated reference layer for premium visual direction." },
    { value: "92", label: "participating universities", note: "Useful ecosystem signal for international trust-building." },
    { value: "272", label: "cooperation leads / orders", note: "Evidence that award traffic can convert into industry collaboration." },
    { value: "50M+", label: "views for Shanhaijing", note: "Breakout mass-attention proof for an AI visual award work." },
    { value: "2025", label: "AI visual creativity blue book", note: "A systematic research asset for AI visual creative application." },
  ] satisfies VacaVacaMetric[],
  achievements: [
    { icon: "🏆", title: "Industry benchmark", description: "VacaVaca positions VACAT as a flagship AI visual creativity award and a high-recognition industry platform." },
    { icon: "🎬", title: "Breakout work influence", description: "Shanhaijing, the first-edition gold-award work, became a public attention case and proves that AI visual works can travel outside the creator circle." },
    { icon: "🤝", title: "Industry conversion", description: "The award has generated cooperation intentions and production demand, which supports AI REMIX's service-business direction." },
    { icon: "📚", title: "Research authority", description: "The AI Visual Creativity Application Blue Book gives the platform a standards and knowledge layer beyond simple prompt services." },
    { icon: "🌍", title: "International reach", description: "Submissions and collaborators across universities and media-art communities make VacaVaca useful for overseas credibility." },
  ] satisfies VacaVacaAchievement[],
  proofPoints: [
    "Use the VacaVaca award/community story as credibility before the user chooses a template.",
    "Show representative works and tracks as a public inspiration layer, not hidden backend notes.",
    "Use creator capability lanes internally when scoping production and estimating human-fix effort.",
    "Adapt VacaVaca's referral idea into AI REMIX's managed studio order flow.",
    "Return finished client-approved ads into the public case layer only after permission.",
  ],
  caseReferences: [
    { id: "VV-PREMIUM-VISUAL", title: "Premium visual atmosphere", lane: "Luxury / beauty / fragrance", bestFor: "Brands that need mood, texture and high-end product perception.", signal: "Use as inspiration for T015 and premium_creator requests." },
    { id: "VV-GAME-CHARACTER", title: "Game world and character reveal", lane: "Games / IP / virtual characters", bestFor: "Steam wishlist, game trailer and character-launch briefs.", signal: "Use as inspiration for T018-T020 and multi_version / premium_creator requests." },
    { id: "VV-MUSIC-VISUAL", title: "Music visual and event teaser", lane: "Music / event / visual performance", bestFor: "Music releases, concerts and AI visual events.", signal: "Use as inspiration for T016-T017 and premium_creator requests." },
    { id: "VV-PRODUCT-DEMO", title: "Product demo remix", lane: "DTC / ecommerce / app demos", bestFor: "Clear conversion ads where the product and CTA must stay obvious.", signal: "Use as inspiration for T001-T014 and fast_human_fixed requests." },
  ] satisfies VacaVacaCaseReference[],
  representativeWorks: [
    { title: "Shanhaijing / 山海经", category: "Breakout award work", track: "AI mythic visual storytelling", signal: "Mass-reach proof for high-impact launch storytelling." },
    { title: "ANIMA (Part I)", category: "Award reference", track: "AI realistic narrative film", signal: "Cinematic mood and character-led reference." },
    { title: "Green Screen / 绿幕", category: "Award reference", track: "AI realistic narrative film", signal: "Screen-language and experimental visual grammar." },
    { title: "Longmen Inn 2067 / 龙门客栈 2067", category: "Award reference", track: "AI realistic narrative film", signal: "IP reinterpretation and world-building." },
    { title: "Bring Her Eyes / 带上她的眼睛", category: "Award reference", track: "AI animated narrative film", signal: "Literary adaptation and emotional short film direction." },
    { title: "Dunhuang Journey S2 / 敦煌行 第二季", category: "Award reference", track: "AI animated narrative film", signal: "Cultural, heritage and tourism visuals." },
    { title: "Ink Chinese Style / 水墨国风", category: "Award reference", track: "AI animated narrative film", signal: "Chinese-style visual identity and art direction." },
    { title: "AI on Cultural Museum / AI 上文博", category: "Commercial creative reference", track: "AI commercial creative film", signal: "Cultural institutions and exhibition promotion." },
    { title: "Smart Dafen Creative Infinity / 智绘大芬创艺无限", category: "Commercial creative reference", track: "AI commercial creative film", signal: "City, park and creative-industry promotion." },
    { title: "ECHO", category: "Visual art reference", track: "AI visual art film", signal: "Abstract, music and installation-style visuals." },
    { title: "Memory on the Run / 记忆在逃", category: "Visual art reference", track: "AI visual art film", signal: "Poetic and concept-driven brand films." },
    { title: "Yangtze River Gaps / 长江缝隙", category: "Visual art reference", track: "AI visual art film", signal: "Documentary and public-interest mood." },
    { title: "EVE NO.1", category: "Poster reference", track: "AI art poster", signal: "Character poster and virtual-IP identity." },
    { title: "Human Machine", category: "Poster reference", track: "AI art poster", signal: "AI, technology and future-human themes." },
    { title: "Lily / 百合", category: "Poster reference", track: "AI art poster", signal: "Delicate, poetic and feminine product visuals." },
    { title: "Porcelain Realm / 国瓷幻境", category: "Poster reference", track: "AI art poster", signal: "Premium cultural product and heritage campaigns." },
  ] satisfies VacaVacaRepresentativeWork[],
  judges: [
    { name: "Li Ge / 李舸", initial: "李", title: "Vice Chairman of China Federation of Literary and Art Circles; Chairman of China Photographers Association" },
    { name: "Zhu Jun / 朱军", initial: "朱", title: "Vice Dean of Tsinghua Institute for AI Industry Research; Chief Scientist of Shengshu Technology" },
    { name: "Victoria Lu / 陆蓉之", initial: "陆", title: "Curator, art critic and creative-industry doctoral supervisor" },
    { name: "Cao Ting / 曹颋", initial: "曹", title: "Dean of Image Media School, Beijing Film Academy; Chairman of Youth Film Studio" },
    { name: "Takeshi Ishikawa / 石川武志", initial: "石", title: "Founder of BitSummit Kyoto International Indie Game Festival; co-founder of UNKNOWN ASIA" },
    { name: "Felipe Franco", initial: "F", title: "Founder and creative director of FF&CO.; international design-award winner" },
    { name: "Ingo Offermanns", initial: "I", title: "Vice Dean of University of Fine Arts Hamburg; AGI member" },
  ] satisfies VacaVacaJudge[],
  tracks: [
    { group: "AI Video", name: "AI realistic narrative film", representativeWorks: "ANIMA, Green Screen, Longmen Inn 2067 and other selected works" },
    { group: "AI Video", name: "AI animated narrative film", representativeWorks: "Bring Her Eyes, Dunhuang Journey S2, Ink Chinese Style and other selected works" },
    { group: "AI Video", name: "AI commercial creative film", representativeWorks: "AI on Cultural Museum, Smart Dafen Creative Infinity and other selected works" },
    { group: "AI Video", name: "AI visual art film", representativeWorks: "ECHO, Memory on the Run, Yangtze River Gaps and other selected works" },
    { group: "AI Image", name: "AI art poster", representativeWorks: "EVE NO.1, Human Machine, Lily, Porcelain Realm and other selected works" },
  ] satisfies VacaVacaTrack[],
  events: [
    { date: "06.16 - 07.31", title: "Open call", description: "Work submission and creator mobilization for the second VACAT award cycle." },
    { date: "08.01 - 09.30", title: "Technical screening and expert judging", description: "Professional review process that turns open submissions into a credible reference library." },
    { date: "10.17", title: "Award ceremony and project signing", description: "Public recognition and industry project connection." },
    { date: "10.18", title: "AI visual technology workshop", description: "Workshop format for creator education and technical exchange." },
    { date: "10.19", title: "AI Battle Day", description: "Competitive creation day, useful as an AI REMIX community activation format." },
    { date: "10.17 - 11.16", title: "AI visual creativity exhibition", description: "Offline exhibition layer for works, tools and industry communication." },
  ] satisfies VacaVacaEvent[],
  referralModel: [
    { step: "1", title: "Requirement intake", description: "Describe project direction, budget, cycle and desired creator reference." },
    { step: "2", title: "Admin confirmation", description: "The original VacaVaca model confirms the request quickly; AI REMIX converts this into managed studio scoping." },
    { step: "3", title: "Creator capability mapping", description: "Match the brief to creator directions or internal production lanes." },
    { step: "4", title: "Scoped production", description: "AI REMIX produces a scoped quote and delivery plan before production." },
  ],
  workflowBridge: [
    { step: "01", title: "VacaVaca content discovery", description: "Show award background, selected works, creator lanes, judges, events and referral logic as the main trust content of AI REMIX." },
    { step: "02", title: "Template and reference choice", description: "Map the client to a narrow ad style or award-reference lane, keeping the request structured enough for production." },
    { step: "03", title: "Brief intake", description: "Collect product assets, platform, selling points, CTA and optional VacaVaca reference notes in the existing /start form." },
    { step: "04", title: "Backstage fulfillment", description: "Admin reviews fit, cost, human-fix needs and whether a creator-lane reference should guide production." },
    { step: "05", title: "Case return", description: "Only approved finished ads flow back into the case layer, strengthening the next round of VacaVaca-backed proof." },
  ] satisfies VacaVacaWorkflowBridge[],
} as const;
