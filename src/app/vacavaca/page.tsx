import Link from "next/link";
import type { ReactNode } from "react";
import { jury, studioMetrics } from "@/data/vacavaca-studio";

export const dynamic = "force-dynamic";

const asset = (path: string) => `https://raw.githubusercontent.com/ruifengc166-boop/vacavaca/master/${path}`;

const navItems = [
  ["Overview", "#overview"],
  ["About", "#about"],
  ["Achievements", "#achievements"],
  ["Moments", "#moments"],
  ["Organization", "#organization"],
  ["Jury", "#jury"],
  ["Tracks", "#tracks"],
  ["Schedule", "#schedule"],
];

const publicSections = [
  { label: "Award Archive", href: "/vacavaca/works", tag: "Records", mark: "01", body: "Selected VACAT award records and representative works." },
  { label: "Award Events", href: "/vacavaca/events", tag: "Events", mark: "02", body: "Ceremony, workshop, Battle Day and exhibition context." },
  { label: "Studio Services", href: "/templates", tag: "Production", mark: "03", body: "Original AI visual production categories from VacaVaca Studio." },
];

const achievements = [
  {
    icon: "🏆",
    title: "Industry benchmark",
    body: "VACAT has been described by major media as a leading AI creativity competition in China and has become a benchmark platform for AI visual creativity.",
  },
  {
    icon: "🎬",
    title: "Work influence",
    body: "The first-edition gold-award work Classic of Mountains and Seas reached more than 50 million views across the web and entered the top ranks of Weibo trending topics.",
  },
  {
    icon: "🤝",
    title: "Industry connection",
    body: "The first edition generated 272 intended cooperation leads and project opportunities, helping shape an AI visual creativity ecosystem in Longgang.",
  },
  {
    icon: "📚",
    title: "Research contribution",
    body: "The 2025 AI Visual Creativity Application Blue Book added a research and standards layer to the AI visual creativity field.",
  },
  {
    icon: "🌍",
    title: "International reach",
    body: "The second edition received invited submissions from Beijing Film Academy and the International Student Media Art Festival, strengthening VACAT as an international exchange platform.",
  },
];

const organization = [
  { title: "Guidance", body: "Publicity, cyberspace, culture, tourism, radio, television and sports authorities in Shenzhen." },
  { title: "Hosts", body: "Longgang District Government of Shenzhen, Shanghai Film Co., Ltd. and Bilibili." },
  { title: "Operator", body: "Longgang District Culture, Radio, Television, Tourism and Sports Bureau." },
  { title: "Co-organizers", body: "Cultural-technology, digital-industry and AI visual creative partners in Shenzhen." },
];

const tracks = [
  {
    group: "AI Video",
    rows: [
      ["AI live-action narrative film", "ANIMA, Green Screen, Longmen Inn 2067 and 15 selected works"],
      ["AI animated narrative film", "Bring Her Eyes, Dunhuang Journey, Ink-Wash Style and 15 selected works"],
      ["AI commercial creative film", "AI Meets Cultural Heritage, Ferrari Purosangue, Creative Dafen and 15 selected works"],
      ["AI visual art film", "ECHO, Memory on the Run, Yangtze River Gap and more than 11 selected works"],
    ],
  },
  {
    group: "AI Image",
    rows: [["AI art poster", "EVE NO.1, Human Machine, Lily, Porcelain Realm and 14 selected works"]],
  },
];

const schedule = [
  ["06.16 - 07.31", "Open call for submissions"],
  ["08.01 - 09.30", "Technical screening and professional review"],
  ["10.17 - 10.19", "Award ceremony and supporting programs"],
  ["10.17 - 11.16", "AI visual creativity exhibition"],
];

const moments = [
  { title: "Award ceremony and project signing", image: asset("assets/events/day1-schedule.png") },
  { title: "AI visual technology workshop", image: asset("assets/events/day2-workshop.png") },
  { title: "AI Battle Day", image: asset("assets/events/day3-competition.png") },
  { title: "AI visual creativity exhibition", image: asset("assets/events/exhibition.png") },
  { title: "About VACAT", image: asset("assets/about/vacat-about.png") },
  { title: "VACAT key visual", image: asset("assets/carousel/carousel-01.jpg") },
];

export default function VacaVacaOverviewPage() {
  return (
    <main className="vv-content-page">
      <section className="vv-content-hero" id="overview">
        <div className="vv-container">
          <p className="vacat-eyebrow">VACAT Award</p>
          <h1>Global AI Visual Creativity Award</h1>
          <p>
            Vision Arts Created by AI Technology. VACAT is the award and public archive context behind the VacaVaca ecosystem, while VacaVaca Studio handles new commissioned production separately.
          </p>
          <div className="vv-metric-row">
            {studioMetrics.map((metric) => <div key={metric.label} className="vv-data-card"><strong>{metric.value}</strong><span>{metric.label}</span></div>)}
          </div>
        </div>
        <div className="mt-14 h-[340px] w-full overflow-hidden border-y border-[rgba(255,255,255,0.08)] md:h-[560px]">
          <img src={asset("assets/carousel/carousel-01.jpg")} alt="VACAT Award" className="h-full w-full object-cover" />
        </div>
      </section>

      <nav className="vv-container py-5">
        <div className="flex flex-wrap gap-2 rounded-2xl border border-[rgba(202,254,97,0.14)] bg-[rgba(35,52,95,0.42)] p-2">
          {navItems.map(([label, href]) => (
            <a key={href} href={href} className="rounded-full px-4 py-2 text-sm text-[var(--text3)] transition hover:bg-[rgba(202,254,97,0.08)] hover:text-[var(--gold)]">
              {label}
            </a>
          ))}
        </div>
      </nav>

      <section className="vv-container vv-section" id="about">
        <SectionHeader title="About VACAT" more="Vision Arts Created by AI Technology" />
        <div className="vv-award-intro">
          <div>
            <h2>A competition platform for AI visual creativity.</h2>
            <p>
              VACAT is built around AI video, AI image, visual art, applied visual communication, creator discovery, professional judging, exhibition and industry exchange.
            </p>
            <p>
              Award records are presented as public context. Studio commissions are produced through separate briefs, authorized contributors and approved materials.
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)]">
            <img src={asset("assets/about/vacat-about.png")} alt="About VACAT" className="h-full w-full object-cover" />
          </div>
        </div>
        <RightsNotice />
      </section>

      <section className="vv-container vv-section" id="sections">
        <SectionHeader title="Explore" more="Award records, events and studio services" />
        <div className="grid gap-4 md:grid-cols-3">
          {publicSections.map((item) => (
            <a key={item.label} href={item.href} className="vacat-link-card overflow-hidden rounded-2xl">
              <div className="aspect-video border-b border-[rgba(255,255,255,0.08)] bg-[radial-gradient(circle_at_24%_18%,rgba(202,254,97,0.28),rgba(35,52,95,0.42)_42%,rgba(5,5,5,0.92)_100%)] p-5">
                <div className="flex h-full items-end justify-between rounded-2xl border border-[rgba(255,255,255,0.1)] bg-[rgba(0,0,0,0.18)] p-5">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--gold)]">{item.tag}</span>
                  <span className="text-5xl font-semibold tracking-[-0.08em] text-white/18">{item.mark}</span>
                </div>
              </div>
              <div className="p-5">
                <p className="tag">{item.tag}</p>
                <h3 className="mt-3 text-xl font-semibold tracking-[-0.035em] text-[var(--text)]">{item.label}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--text3)]">{item.body}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="vv-container vv-section" id="achievements">
        <SectionHeader title="Core Achievements" more="Award impact" />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {achievements.map((item) => (
            <div key={item.title} className="vacat-card rounded-2xl p-5">
              <div className="text-3xl">{item.icon}</div>
              <h3 className="mt-4 text-lg font-semibold tracking-[-0.03em] text-[var(--text)]">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--text3)]">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="vv-container vv-section" id="moments">
        <SectionHeader title="Event Moments" more={<Link href="/vacavaca/events">View event page →</Link>} />
        <div className="grid gap-3 md:grid-cols-3">
          {moments.map((moment) => (
            <div key={moment.title} className="vacat-card overflow-hidden rounded-2xl">
              <img src={moment.image} alt={moment.title} className="aspect-video w-full object-cover" />
              <p className="p-4 text-sm text-[var(--text2)]">{moment.title}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="vv-container vv-section" id="organization">
        <SectionHeader title="Organizing Structure" more="Award institutions and partners" />
        <div className="grid gap-4 md:grid-cols-2">
          {organization.map((item) => <OrgCard key={item.title} title={item.title} body={item.body} />)}
        </div>
      </section>

      <section className="vv-container vv-section" id="jury">
        <SectionHeader title="Expert Jury" more="Professional credibility" />
        <div className="vv-judges">
          {jury.map((item) => {
            const [name, title] = item.split(" — ");
            return <div key={item} className="vv-judge"><div className="avatar">{name.slice(0, 1)}</div><div><div style={{ fontWeight: 700 }}>{name}</div><p>{title}</p></div></div>;
          })}
        </div>
      </section>

      <section className="vv-container vv-section" id="tracks">
        <SectionHeader title="Award Tracks" more="Competition categories" />
        <div className="grid gap-8">
          {tracks.map((track) => (
            <div key={track.group} className="vacat-card rounded-[24px] p-6">
              <h3 className="text-2xl font-medium tracking-[-0.04em] text-[var(--text)]">{track.group}</h3>
              <div className="mt-5 grid gap-3">
                {track.rows.map(([name, examples]) => (
                  <div key={name} className="grid gap-2 border-t border-[rgba(255,255,255,0.08)] pt-3 text-sm md:grid-cols-[220px_1fr]">
                    <span className="font-medium text-[var(--text)]">{name}</span>
                    <span className="text-[var(--text3)]">{examples}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="vv-container vv-section" id="schedule">
        <SectionHeader title="Second Edition Schedule" more={<Link href="/vacavaca/events">View event details →</Link>} />
        <div className="grid gap-3">
          {schedule.map(([date, text]) => (
            <div key={date} className="vacat-card grid gap-3 rounded-2xl p-5 text-sm md:grid-cols-[180px_1fr]">
              <strong className="text-[var(--text)]">{date}</strong>
              <span className="text-[var(--text3)]">{text}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="vv-container vv-section">
        <div className="vv-final-panel">
          <h2>Explore the award archive or start a new studio brief.</h2>
          <p>Award records and studio commissions now live in separate paths to avoid reuse confusion.</p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/vacavaca/works" className="vacat-button-secondary px-6 py-3 text-sm">View Award Archive</Link>
            <Link href="/templates" className="vacat-button-primary px-6 py-3 text-sm">View Studio Services</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function SectionHeader({ title, more }: { title: string; more: ReactNode }) {
  return <div className="vv-section-header"><h2>{title}</h2><span className="more">{more}</span></div>;
}

function RightsNotice() {
  return (
    <div className="mt-6 rounded-2xl border border-[rgba(202,254,97,0.16)] bg-[rgba(202,254,97,0.06)] p-5 text-sm leading-7 text-[var(--text3)]">
      VACAT works are presented as award records. They are not offered for reuse, adaptation, licensing or client production by VacaVaca Studio unless the original creator provides separate written authorization.
    </div>
  );
}

function OrgCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="vacat-card rounded-2xl p-5">
      <h3 className="text-lg font-semibold tracking-[-0.03em] text-[var(--text)]">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-[var(--text3)]">{body}</p>
    </div>
  );
}
