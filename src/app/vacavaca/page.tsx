import Link from "next/link";

export const dynamic = "force-dynamic";

const asset = (path: string) => `https://raw.githubusercontent.com/ruifengc166-boop/vacavaca/master/${path}`;
const carousel = asset("assets/carousel/carousel-01.jpg");

const metrics = [
  ["4,646", "Second-edition submissions"],
  ["76", "Awarded / finalist works"],
  ["92", "Participating universities"],
  ["272", "Cooperation leads and orders"],
];

const works = [
  { slug: "shanhaijing", title: "Shanhaijing", creator: "VACAT Gold Award Creator", award: "Gold Award", track: "AI mythic visual storytelling", mark: "S", demo: "#demo-shanhaijing" },
  { slug: "anima", title: "ANIMA (Part I)", creator: "VACAT Narrative Creator", award: "Selected Work", track: "AI realistic narrative film", mark: "A", demo: "#demo-anima" },
  { slug: "green-screen", title: "Green Screen", creator: "VACAT Experimental Film Creator", award: "Selected Work", track: "AI realistic narrative film", mark: "G", demo: "#demo-green-screen" },
  { slug: "longmen-inn-2067", title: "Longmen Inn 2067", creator: "VACAT IP Remix Creator", award: "Selected Work", track: "Classic IP reinterpretation", mark: "L", demo: "#demo-longmen" },
  { slug: "bring-her-eyes", title: "Bring Her Eyes", creator: "VACAT Animation Creator", award: "Selected Work", track: "AI animated narrative film", mark: "E", demo: "#demo-eyes" },
  { slug: "dunhuang-journey", title: "Dunhuang Journey Season 2", creator: "VACAT Culture Visual Creator", award: "Selected Work", track: "AI animated narrative film", mark: "D", demo: "#demo-dunhuang" },
  { slug: "ink-style", title: "Ink Chinese Style", creator: "VACAT Art Direction Creator", award: "Selected Work", track: "AI animated narrative film", mark: "I", demo: "#demo-ink" },
  { slug: "ai-museum", title: "AI on Cultural Museum", creator: "VACAT Commercial Creative Creator", award: "Selected Work", track: "AI commercial creative film", mark: "M", demo: "#demo-museum" },
  { slug: "dafen", title: "Smart Dafen Creative Infinity", creator: "VACAT City Promotion Creator", award: "Selected Work", track: "AI commercial creative film", mark: "D", demo: "#demo-dafen" },
  { slug: "echo", title: "ECHO", creator: "VACAT Visual Art Creator", award: "Selected Work", track: "AI visual art film", mark: "E", demo: "#demo-echo" },
  { slug: "memory-on-the-run", title: "Memory on the Run", creator: "VACAT Poetic Film Creator", award: "Selected Work", track: "AI visual art film", mark: "M", demo: "#demo-memory" },
  { slug: "porcelain-realm", title: "Porcelain Realm", creator: "VACAT Poster Creator", award: "Selected Work", track: "AI art poster", mark: "P", demo: "#demo-porcelain" },
];

const creators = [
  { name: "WildPusa Studio", level: "Creator", focus: "AI product videos, short-form brand films, cinematic remix workflows", works: 28, likes: "3.6k", initials: "WP" },
  { name: "VACAT Narrative Unit", level: "Creator", focus: "Realistic AI narrative, character scenes, cinematic short films", works: 15, likes: "2.1k", initials: "VN" },
  { name: "VACAT Animation Unit", level: "Creator", focus: "AI animation, literary adaptation, culture-led visual storytelling", works: 15, likes: "1.8k", initials: "VA" },
  { name: "VACAT Commercial Creative Unit", level: "Dreamer", focus: "Cultural institutions, city promotion, product launch visuals", works: 15, likes: "1.5k", initials: "VC" },
  { name: "VACAT Visual Art Unit", level: "Dreamer", focus: "Experimental film, music visuals, installation-style moving image", works: 11, likes: "1.2k", initials: "VV" },
  { name: "VACAT Poster Unit", level: "Explorer", focus: "AI poster, virtual character identity, premium visual mood boards", works: 14, likes: "980", initials: "VP" },
  { name: "Battle Day Creator Pool", level: "Creator", focus: "Prompt battle, fast ideation, real-time AI visual production", works: 8, likes: "860", initials: "BD" },
  { name: "AI Remix Studio Desk", level: "Creator", focus: "Studio-managed adaptation from VacaVaca references to product ads", works: 20, likes: "1.9k", initials: "AR" },
];

const awardResults = [
  ["Industry benchmark", "VACAT is positioned as a flagship AI visual creativity award and a high-recognition industry platform."],
  ["Breakout work influence", "The first-edition gold-award work Shanhaijing reached mass public attention and proved that AI visual works can travel outside the creator circle."],
  ["Industry conversion", "The award has generated cooperation intentions and production demand, which supports the AI REMIX service direction."],
  ["Research authority", "The 2025 AI Visual Creativity Application Blue Book gives the platform a knowledge layer beyond simple prompt services."],
  ["International reach", "Submissions and collaborators across universities and media-art communities make VacaVaca useful for overseas credibility."],
];

const judges = [
  ["Li Ge", "Vice Chairman of the China Federation of Literary and Art Circles; Chairman of the China Photographers Association"],
  ["Zhu Jun", "Vice Dean of Tsinghua Institute for AI Industry Research; Chief Scientist of Shengshu Technology"],
  ["Victoria Lu", "Curator, art critic and creative-industry doctoral supervisor"],
  ["Cao Ting", "Dean of the Image Media School, Beijing Film Academy; Chairman of Youth Film Studio"],
  ["Takeshi Ishikawa", "Founder of BitSummit Kyoto International Indie Game Festival; co-founder of UNKNOWN ASIA"],
  ["Felipe Franco", "Founder and creative director of FF&CO.; international design-award winner"],
  ["Ingo Offermanns", "Vice Dean of the University of Fine Arts Hamburg; AGI member"],
];

const events = [
  { date: "Oct 17", title: "Award Ceremony and Project Signing", text: "A public recognition and industry-connection moment for awarded works, creators and commercial partners.", image: asset("assets/events/day1-schedule.png") },
  { date: "Oct 18", title: "AI Visual Technology Workshop", text: "A learning and exchange format around AI video, AI image, short drama production and commercial creative workflows.", image: asset("assets/events/day2-workshop.png") },
  { date: "Oct 19", title: "AI Battle Day", text: "A live creation format built around prompt battles, time-limited production and creator visibility.", image: asset("assets/events/day3-competition.png") },
  { date: "Oct 17 - Nov 16", title: "AI Visual Creativity Exhibition", text: "An offline exhibition layer for works, tools, creators and industry communication.", image: asset("assets/events/exhibition.png") },
];

const referralSteps = [
  ["01", "Submit requirement", "Describe project direction, budget range, timeline, target platform and preferred VacaVaca reference."],
  ["02", "Admin confirmation", "The team confirms scope and avoids mismatching creator capability with commercial expectations."],
  ["03", "Creator / style mapping", "The brief is mapped to creator directions, work references or AI REMIX production lanes."],
  ["04", "Studio-managed delivery", "The project moves into quote, production, review and approved case return."],
];

export default function VacaVacaPage() {
  return (
    <main className="vv-content-page">
      <section className="vv-content-hero" id="overview">
        <div className="vv-container">
          <p className="vacat-eyebrow">VACAT / VacaVaca Content Layer</p>
          <h1>VacaVaca is the creator and work library behind AI REMIX.</h1>
          <p>
            This page keeps the VacaVaca content structure—creators, works, award background, events and referral model—while serving AI REMIX's product-ad order flow.
          </p>
          <div className="vv-metric-row">
            {metrics.map(([value, label]) => <div key={label} className="vv-data-card"><strong>{value}</strong><span>{label}</span></div>)}
          </div>
        </div>
      </section>

      <section className="vv-container vv-section" id="award">
        <SectionHeader title="What is the VACAT Award?" more="Award background" />
        <div className="vv-award-intro">
          <div>
            <h2>Vision Arts Created by AI Technology.</h2>
            <p>
              VACAT is an AI visual creativity award and creator-community platform. It organizes AI video, AI image, commercial creative, visual-art and poster works into an industry-facing reference system. For AI REMIX, this award layer is not decoration: it supplies credibility, taste, creator capability and concrete visual references for product-ad production.
            </p>
            <p>
              The award connects open submissions, expert judging, public exhibitions, creator education, technology workshops, project signing and commercial referral. AI REMIX adapts that structure into a simpler business path: browse the content, choose a reference direction, submit a product brief, and let the studio scope delivery.
            </p>
          </div>
          <img src={carousel} alt="VACAT award scene" />
        </div>
        <div className="vv-achievements">
          {awardResults.map(([title, body]) => <div key={title} className="vv-achievement-card"><h3>{title}</h3><p>{body}</p></div>)}
        </div>
      </section>

      <section className="vv-container vv-section" id="works">
        <SectionHeader title="Representative Works" more="Works, demos and reference links" />
        <div className="vv-video-grid">
          {works.map((work) => <WorkCard key={work.slug} work={work} />)}
        </div>
      </section>

      <section className="vv-container vv-section" id="demos">
        <SectionHeader title="Demo References" more="Use these as visual brief anchors" />
        <div className="vv-demo-grid">
          {works.slice(0, 6).map((work) => (
            <article key={`demo-${work.slug}`} id={work.demo.replace("#", "")} className="vv-demo-card">
              <div className="vv-thumb-art">{work.mark}</div>
              <div>
                <p className="vacat-eyebrow">Demo frame</p>
                <h3>{work.title}</h3>
                <p>{work.track}. Use this reference to explain pacing, atmosphere, art direction and creator-lane fit.</p>
                <div className="vv-card-actions">
                  <Link href={`/start?vacaVacaReference=${work.slug}`} className="vv-btn-reg">Use as reference</Link>
                  <a href="#works" className="vv-btn-nav">Back to works</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="vv-container vv-section" id="creators">
        <SectionHeader title="Creator Roster" more="Creator names and capability lanes" />
        <div className="vv-creators-grid">
          {creators.map((creator) => <CreatorCard key={creator.name} creator={creator} />)}
        </div>
      </section>

      <section className="vv-container vv-section" id="tracks">
        <SectionHeader title="Award Tracks" more="How VacaVaca content maps into AI REMIX" />
        <div className="vv-referral">
          <div className="vv-referral-step"><strong>AI Video</strong><h3>Realistic narrative</h3><p>Character scenes, cinematic shorts and product stories with live-action mood.</p></div>
          <div className="vv-referral-step"><strong>AI Video</strong><h3>Animated narrative</h3><p>Stylized animation, literary adaptation, culture and tourism storytelling.</p></div>
          <div className="vv-referral-step"><strong>Commercial</strong><h3>Brand creative</h3><p>Product launch, city promotion, exhibition and institutional communication.</p></div>
          <div className="vv-referral-step"><strong>Visual Art</strong><h3>Experimental film</h3><p>Music visuals, abstract image systems and installation-style visual language.</p></div>
        </div>
      </section>

      <section className="vv-container vv-section" id="judges">
        <SectionHeader title="Jury and Expert Layer" more="Authority behind the award" />
        <div className="vv-judges">
          {judges.map(([name, title]) => <div key={name} className="vv-judge"><div className="avatar">{name.slice(0, 1)}</div><div><div style={{ fontWeight: 700 }}>{name}</div><p>{title}</p></div></div>)}
        </div>
      </section>

      <section className="vv-container vv-section" id="events">
        <SectionHeader title="Events and Community Activation" more="Award ceremony, workshop, battle and exhibition" />
        <div>
          {events.map((event) => <div key={event.title} className="vv-event-item"><div className="vv-event-row"><div className="vv-event-copy"><div className="vv-event-date">{event.date}</div><div className="vv-event-title">{event.title}</div><p>{event.text}</p></div><img src={event.image} alt={event.title} /></div></div>)}
        </div>
      </section>

      <section className="vv-container vv-section" id="referral">
        <SectionHeader title="Referral and Commercial Intake" more="Keep the business flow managed" />
        <div className="vv-referral">
          {referralSteps.map(([step, title, body]) => <div key={step} className="vv-referral-step"><strong>{step}</strong><h3>{title}</h3><p>{body}</p></div>)}
        </div>
        <div className="vv-final-panel">
          <h2>Bring a VacaVaca reference into an AI REMIX brief.</h2>
          <p>Use the works, creator lanes and event proof above as context, then submit one structured product-ad brief for studio review.</p>
          <Link href="/start" className="vacat-button-primary px-6 py-3 text-sm">Submit Product Brief</Link>
        </div>
      </section>
    </main>
  );
}

function SectionHeader({ title, more }: { title: string; more: string }) {
  return <div className="vv-section-header"><h2>{title}</h2><span className="more">{more}</span></div>;
}

function WorkCard({ work }: { work: { slug: string; title: string; creator: string; award: string; track: string; mark: string; demo: string } }) {
  return (
    <article className="vv-video-card">
      <div className="thumb"><div className="vv-thumb-art">{work.mark}</div></div>
      <div className="body">
        <h4>{work.title}<span className="vv-tag">{work.award}</span></h4>
        <div className="meta"><span>{work.creator}</span><span>{work.track}</span></div>
        <div className="vv-card-actions">
          <a href={work.demo} className="vv-btn-nav">View demo</a>
          <Link href={`/start?vacaVacaReference=${work.slug}`} className="vv-btn-reg">Use reference</Link>
        </div>
      </div>
    </article>
  );
}

function CreatorCard({ creator }: { creator: { name: string; level: string; focus: string; works: number; likes: string; initials: string } }) {
  const levelClass = creator.level === "Creator" ? "badge-creator" : creator.level === "Dreamer" ? "badge-dreamer" : "badge-explorer";
  return (
    <article className="vv-creator-card">
      <div className="av">{creator.initials}</div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}><h4>{creator.name}</h4><span style={{ fontSize: 11, color: "#34D399" }}>● Available</span></div>
        <div style={{ fontSize: 12, color: "var(--text3)", margin: "6px 0" }}><span className={`badge-sm ${levelClass}`}>{creator.level}</span><span style={{ marginLeft: 8 }}>{creator.works} works</span><span style={{ marginLeft: 6 }}>{creator.likes} likes</span></div>
        <p>{creator.focus}</p>
      </div>
    </article>
  );
}
