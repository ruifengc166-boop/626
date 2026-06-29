import Link from "next/link";
import { studioWorks } from "@/data/vacavaca-studio";

export const dynamic = "force-dynamic";

export default function VacaVacaWorksPage() {
  return (
    <main className="vv-content-page">
      <section className="vv-content-hero">
        <div className="vv-container">
          <p className="vacat-eyebrow">VACAT Works</p>
          <h1>Representative AI visual creative works.</h1>
          <p>Browse selected works that define VacaVaca Studio's visual references: mythic film, cinematic narrative, IP remix, culture visuals, commercial creative, visual art and poster systems.</p>
        </div>
      </section>
      <section className="vv-container vv-section">
        <div className="vv-video-grid">
          {studioWorks.map((work) => (
            <article key={work.slug} className="vv-video-card">
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
          ))}
        </div>
      </section>
    </main>
  );
}
