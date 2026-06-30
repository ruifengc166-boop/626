import Link from "next/link";
import type { ReactNode } from "react";
import { awardAuthority, jury, studioEvents, studioMetrics, studioWorks } from "@/data/vacavaca-studio";

export const dynamic = "force-dynamic";

const featuredWorks = studioWorks.slice(0, 6);

const achievements = [
  {
    icon: "🏆",
    title: "Industry benchmark",
    body: "VACAT has been positioned as a leading AI visual creativity award and a visible benchmark for AI-native image, film and commercial creative work.",
  },
  {
    icon: "🎬",
    title: "Work influence",
    body: "The award has surfaced widely discussed AI visual works and continues to raise the technical and artistic expectations for the category.",
  },
  {
    icon: "🤝",
    title: "Industry conversion",
    body: "Previous editions generated cooperation leads, project conversations and commercial connection opportunities between creators, institutions and brands.",
  },
  {
    icon: "📚",
    title: "Research contribution",
    body: "The 2025 AI Visual Creativity Application Blue Book adds a research and standards layer to the award ecosystem.",
  },
  {
    icon: "🌍",
    title: "International reach",
    body: "VACAT connects creators, universities, judges and institutions across AI film, image, visual art, design and commercial creative fields.",
  },
];

const tracks = [
  {
    group: "AI Video",
    rows: [
      ["AI live-action narrative film", "ANIMA (Part I), Green Screen, Longmen Inn 2067 and other selected works"],
      ["AI animated narrative film", "Animated story works, stylized narrative films and worldbuilding shorts"],
      ["AI commercial creative film", "Cultural, product, city and brand-facing AI visual films"],
      ["AI visual art film", "ECHO, Memory on the Run and other experimental moving-image works"],
    ],
  },
  {
    group: "AI Image",
    rows: [
      ["AI art poster", "EVE NO.1, Human Machine and other key visual / poster works"],
    ],
  },
];

export default function VacaVacaOverviewPage() {
  return (
    <main className="vv-content-page">
      <section className="vv-content-hero" id="overview">
        <div className="vv-container">
          <p className="vacat-eyebrow">About VACAT Award</p>
          <h1>VACAT is the award engine behind VacaVaca Studio.</h1>
          <p>
            VACAT stands for Vision Arts Created by AI Technology. It is a global AI visual creativity award platform that discovers works, creators and new production directions for AI-native visual culture.
          </p>
          <div className="vv-metric-row">
            {studioMetrics.map((metric) => <div key={metric.label} className="vv-data-card"><strong>{metric.value}</strong><span>{metric.label}</span></div>)}
          </div>
        </div>
      </section>

      <section className="vv-container vv-section" id="about">
        <SectionHeader title="What is VACAT?" more="Vision Arts Created by AI Technology" />
        <div className="vv-award-intro">
          <div>
            <h2>A competition platform for AI visual creativity.</h2>
            <p>
              VACAT is not only a showcase of AI-generated images and videos. It is an award system built around evaluation, creator discovery, public exhibition, professional judging, industry connection and applied research.
            </p>
            <p>
              For VacaVaca Studio, VACAT provides the proof layer: awarded works, creator capability signals, judging authority, university participation, exhibition activity and industry cooperation context.
            </p>
          </div>
          <div className="vv-authority-panel">
            {awardAuthority.map((item) => <p key={item}>{item}</p>)}
          </div>
        </div>
      </section>

      <section className="vv-container vv-section" id="achievements">
        <SectionHeader title="Core Achievements" more="Why the award matters" />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {achievements.map((item) => (
            <div key={item.title} className="vacat-card rounded-2xl p-5">
              <div className="text-3xl">{item.icon}</div>
              <h3 className="mt-4 text-lg font-semibold tracking-[-0.03em] text-[var(--text)]">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[var(--text3)]">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="vv-container vv-section" id="data">
        <SectionHeader title="Second Edition Data" more="Submissions, awards and participation" />
        <div className="grid gap-4 md:grid-cols-4">
          {studioMetrics.map((metric) => (
            <div key={metric.label} className="vacat-card rounded-2xl p-5 text-center">
              <div className="text-4xl font-semibold tracking-[-0.05em] text-[var(--gold)]">{metric.value}</div>
              <p className="mt-2 text-xs uppercase leading-5 tracking-[0.14em] text-[var(--text3)]">{metric.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="vv-container vv-section" id="works">
        <SectionHeader title="Representative Award Works" more={<Link href="/vacavaca/works">View all works →</Link>} />
        <div className="vv-video-grid">
          {featuredWorks.map((work) => <WorkCard key={work.slug} work={work} />)}
        </div>
      </section>

      <section className="vv-container vv-section" id="organization">
        <SectionHeader title="Organizing Structure" more="Public authority and industry support" />
        <div className="grid gap-4 md:grid-cols-2">
          <OrgCard title="Guidance" body="Shenzhen publicity, cyberspace and cultural authorities have supported the broader award and event context." />
          <OrgCard title="Hosts and operators" body="The award has connected local government, film and media platforms, cultural-technology operators and AI visual creative organizations." />
          <OrgCard title="Industry partners" body="VACAT works as a bridge between creators, universities, institutions, technology companies and commercial project demand." />
          <OrgCard title="Studio connection" body="VacaVaca Studio uses the award ecosystem as a reference and talent layer for managed commercial creative work." />
        </div>
      </section>

      <section className="vv-container vv-section" id="jury">
        <SectionHeader title="Expert Jury" more="Professional credibility behind the award" />
        <div className="vv-judges">
          {jury.map((item) => {
            const [name, title] = item.split(" — ");
            return <div key={item} className="vv-judge"><div className="avatar">{name.slice(0, 1)}</div><div><div style={{ fontWeight: 700 }}>{name}</div><p>{title}</p></div></div>;
          })}
        </div>
      </section>

      <section className="vv-container vv-section" id="tracks">
        <SectionHeader title="Award Tracks" more="How works are evaluated and grouped" />
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

      <section className="vv-container vv-section" id="events">
        <SectionHeader title="Award Events" more={<Link href="/vacavaca/events">View events →</Link>} />
        <div className="vv-referral">
          {studioEvents.map((event) => (
            <Link key={event.title} href="/vacavaca/events" className="vv-referral-step">
              <strong>{event.date}</strong>
              <h3>{event.title}</h3>
              <p>{event.text}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="vv-container vv-section">
        <div className="vv-final-panel">
          <h2>Use VACAT references in a VacaVaca Studio brief.</h2>
          <p>Explore the award context here, then choose a creative direction or submit a commission brief for custom AI visual work.</p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/templates" className="vacat-button-secondary px-6 py-3 text-sm">Browse Creative Directions</Link>
            <Link href="/start" className="vacat-button-primary px-6 py-3 text-sm">Submit Creative Brief</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function SectionHeader({ title, more }: { title: string; more: ReactNode }) {
  return <div className="vv-section-header"><h2>{title}</h2><span className="more">{more}</span></div>;
}

function OrgCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="vacat-card rounded-2xl p-5">
      <h3 className="text-lg font-semibold tracking-[-0.03em] text-[var(--text)]">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-[var(--text3)]">{body}</p>
    </div>
  );
}

function WorkCard({ work }: { work: typeof studioWorks[number] }) {
  return (
    <article className="vv-video-card">
      <Link href={`/vacavaca/works/${work.slug}`} className="thumb">
        {work.previewVideoUrl ? (
          <video src={work.previewVideoUrl} poster={work.posterUrl} className="h-full w-full object-cover" muted loop playsInline preload="metadata" />
        ) : (
          <img src={work.posterUrl} alt={work.title} className="h-full w-full object-cover" />
        )}
      </Link>
      <div className="body">
        <h4>{work.title}<span className="vv-tag">{work.award}</span></h4>
        <div className="meta"><span>{work.creator}</span><span>{work.track}</span></div>
        <p className="mt-3 text-xs leading-5 text-[var(--text3)]">{work.summary}</p>
        <div className="vv-card-actions">
          <Link href={`/vacavaca/works/${work.slug}`} className="vv-btn-nav">View work</Link>
          <Link href={`/start?vacaVacaReference=${work.slug}`} className="vv-btn-reg">Use reference</Link>
        </div>
      </div>
    </article>
  );
}
