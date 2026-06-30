import Link from "next/link";
import { awardAuthority, jury, studioMetrics, studioWorks } from "@/data/vacavaca-studio";

export const dynamic = "force-dynamic";

const featuredWorks = studioWorks.slice(0, 4);

export default function VacaVacaOverviewPage() {
  return (
    <main className="vv-content-page">
      <section className="vv-content-hero" id="overview">
        <div className="vv-container">
          <p className="vacat-eyebrow">Learn about VACAT</p>
          <h1>VACAT is the award behind the VacaVaca Studio service.</h1>
          <p>
            VACAT is the AI visual creativity award. VacaVaca Studio is the creative service that uses VACAT's works, creators and professional credibility as references for commissioned visual projects.
          </p>
          <div className="vv-metric-row">
            {studioMetrics.map((metric) => <div key={metric.label} className="vv-data-card"><strong>{metric.value}</strong><span>{metric.label}</span></div>)}
          </div>
        </div>
      </section>

      <section className="vv-container vv-section" id="works">
        <SectionHeader title="Representative VACAT Works" more={<Link href="/vacavaca/works">View all works →</Link>} />
        <div className="vv-video-grid">
          {featuredWorks.map((work) => <WorkCard key={work.slug} work={work} />)}
        </div>
      </section>

      <section className="vv-container vv-section" id="award">
        <SectionHeader title="VACAT Influence and Authority" more="Why the award matters" />
        <div className="vv-award-intro">
          <div>
            <h2>Vision Arts Created by AI Technology.</h2>
            <p>
              VACAT is an AI visual creativity award and creator-community platform. It organizes AI film, AI image, commercial creative, visual-art and poster works into an industry-facing reference system.
            </p>
            <p>
              VacaVaca Studio uses that system as a creative foundation: works become visual references, creators become capability lanes, events become community proof, and expert judging strengthens client trust.
            </p>
          </div>
          <div className="vv-authority-panel">
            {awardAuthority.map((item) => <p key={item}>{item}</p>)}
          </div>
        </div>
      </section>

      <section className="vv-container vv-section" id="authority">
        <SectionHeader title="Expert Layer" more="Jury and professional credibility" />
        <div className="vv-judges">
          {jury.slice(0, 6).map((item) => {
            const [name, title] = item.split(" — ");
            return <div key={item} className="vv-judge"><div className="avatar">{name.slice(0, 1)}</div><div><div style={{ fontWeight: 700 }}>{name}</div><p>{title}</p></div></div>;
          })}
        </div>
      </section>

      <section className="vv-container vv-section">
        <SectionHeader title="Explore VACAT References" more="Works, creators and events live on focused pages" />
        <div className="vv-referral">
          <Link href="/vacavaca/works" className="vv-referral-step"><strong>Works</strong><h3>Representative work library</h3><p>Browse international-facing VACAT works with reference links and commission entry points.</p></Link>
          <Link href="/vacavaca/creators" className="vv-referral-step"><strong>Creators</strong><h3>Creator capability lanes</h3><p>See the creator roster and the production directions each lane supports.</p></Link>
          <Link href="/vacavaca/events" className="vv-referral-step"><strong>Events</strong><h3>Community and event proof</h3><p>Review award ceremony, workshop, Battle Day and exhibition formats.</p></Link>
          <Link href="/templates" className="vv-referral-step"><strong>Studio</strong><h3>Creative commission menu</h3><p>Choose a VACAT-inspired direction and start a VacaVaca Studio brief.</p></Link>
        </div>
      </section>

      <section className="vv-container vv-section">
        <div className="vv-final-panel">
          <h2>Commission a visual creative work from VacaVaca Studio.</h2>
          <p>Start from a representative VACAT work or creator lane, then submit a visual brief for a quote and production plan.</p>
          <Link href="/start" className="vacat-button-primary px-6 py-3 text-sm">Commission Work</Link>
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
