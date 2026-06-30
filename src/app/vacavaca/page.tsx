import Link from "next/link";
import { awardAuthority, jury, studioEvents, studioMetrics, studioWorks } from "@/data/vacavaca-studio";

export const dynamic = "force-dynamic";

const featuredWorks = studioWorks.slice(0, 6);

export default function VacaVacaOverviewPage() {
  return (
    <main className="vv-content-page">
      <section className="vv-content-hero" id="overview">
        <div className="vv-container">
          <p className="vacat-eyebrow">Why VACAT matters</p>
          <h1>VACAT is the proof layer behind VacaVaca Studio.</h1>
          <p>
            VACAT stands for Vision Arts Created by AI Technology. It gives VacaVaca Studio award-backed references, creator capability signals and professional credibility for commercial AI visual commissions.
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
            <h2>An award system that turns visual works into client references.</h2>
            <p>
              VACAT organizes AI film, AI image, commercial creative, visual art and poster works into a visible reference system. It is not the commercial service itself; it is the foundation that supports the VacaVaca Studio service.
            </p>
            <p>
              VacaVaca Studio uses VACAT's awarded works, creators, events and jury credibility to help clients choose a stronger visual direction before commissioning custom work.
            </p>
          </div>
          <div className="vv-authority-panel">
            {awardAuthority.map((item) => <p key={item}>{item}</p>)}
          </div>
        </div>
      </section>

      <section className="vv-container vv-section" id="works">
        <SectionHeader title="Representative Reference Works" more={<Link href="/vacavaca/works">View all works →</Link>} />
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
            <Link href="/templates" className="vacat-button-secondary px-6 py-3 text-sm">Browse Creative Directions</Link>
            <Link href="/start" className="vacat-button-primary px-6 py-3 text-sm">Submit Creative Brief</Link>
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
