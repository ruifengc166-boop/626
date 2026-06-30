import Link from "next/link";
import { awardAuthority, jury, studioEvents, studioMetrics, studioWorks } from "@/data/vacavaca-studio";

export const dynamic = "force-dynamic";

const featuredWorks = studioWorks.slice(0, 6);

export default function VacaVacaOverviewPage() {
  return (
    <main className="vv-content-page">
      <section className="vv-content-hero" id="overview">
        <div className="vv-container">
          <p className="vacat-eyebrow">Learn about VACAT</p>
          <h1>VACAT is the AI visual creativity award behind VacaVaca Studio.</h1>
          <p>
            VACAT stands for Vision Arts Created by AI Technology. It is the award and creator ecosystem that gives VacaVaca Studio its reference works, creator capability signals and professional credibility.
          </p>
          <div className="vv-metric-row">
            {studioMetrics.map((metric) => <div key={metric.label} className="vv-data-card"><strong>{metric.value}</strong><span>{metric.label}</span></div>)}
          </div>
        </div>
      </section>

      <section className="vv-container vv-section" id="award">
        <SectionHeader title="What VACAT Proves" more="Award authority and industry credibility" />
        <div className="vv-award-intro">
          <div>
            <h2>An award system for AI visual creativity.</h2>
            <p>
              VACAT organizes AI film, AI image, commercial creative, visual art and poster works into a visible industry reference system. It is not the service itself; it is the award foundation that supports the VacaVaca Studio service.
            </p>
            <p>
              VacaVaca Studio uses VACAT's awarded works, creators, events and jury credibility to help clients choose a stronger visual direction before commissioning a custom creative work.
            </p>
          </div>
          <div className="vv-authority-panel">
            {awardAuthority.map((item) => <p key={item}>{item}</p>)}
          </div>
        </div>
      </section>

      <section className="vv-container vv-section" id="works">
        <SectionHeader title="Representative VACAT Works" more={<Link href="/vacavaca/works">View all works →</Link>} />
        <div className="vv-video-grid">
          {featuredWorks.map((work) => <WorkCard key={work.slug} work={work} />)}
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

      <section className="vv-container vv-section" id="authority">
        <SectionHeader title="Expert Jury" more="Professional credibility behind the award" />
        <div className="vv-judges">
          {jury.slice(0, 6).map((item) => {
            const [name, title] = item.split(" — ");
            return <div key={item} className="vv-judge"><div className="avatar">{name.slice(0, 1)}</div><div><div style={{ fontWeight: 700 }}>{name}</div><p>{title}</p></div></div>;
          })}
        </div>
      </section>

      <section className="vv-container vv-section">
        <div className="vv-final-panel">
          <h2>Use VACAT references in a VacaVaca Studio brief.</h2>
          <p>Browse the award context here, then return to VacaVaca Studio to choose a direction or submit a commission brief.</p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/templates" className="vacat-button-secondary px-6 py-3 text-sm">Browse Creative Menu</Link>
            <Link href="/start" className="vacat-button-primary px-6 py-3 text-sm">Submit Commission Brief</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function SectionHeader({ title, more }: { title: string; more: React.ReactNode }) {
  return <div className="vv-section-header"><h2>{title}</h2><span className="more">{more}</span></div>;
}

function WorkCard({ work }: { work: typeof studioWorks[number] }) {
  return (
    <article className="vv-video-card">
      <div className="thumb"><div className="vv-thumb-art">{work.mark}</div></div>
      <div className="body">
        <h4>{work.title}<span className="vv-tag">{work.award}</span></h4>
        <div className="meta"><span>{work.creator}</span><span>{work.track}</span></div>
        <p className="mt-3 text-xs leading-5 text-[var(--text3)]">{work.summary}</p>
        <div className="vv-card-actions">
          <a href={work.demoUrl} target="_blank" rel="noreferrer" className="vv-btn-nav">Demo link</a>
          <Link href={`/start?vacaVacaReference=${work.slug}`} className="vv-btn-reg">Use reference</Link>
        </div>
      </div>
    </article>
  );
}
