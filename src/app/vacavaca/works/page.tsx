import Link from "next/link";
import { studioWorks } from "@/data/vacavaca-studio";

export const dynamic = "force-dynamic";

export default function VacaVacaWorksPage() {
  return (
    <main className="vv-content-page">
      <section className="vv-content-hero">
        <div className="vv-container">
          <p className="vacat-eyebrow">VACAT Reference Works</p>
          <h1>Watch the works before choosing a direction.</h1>
          <p>These selected VACAT works are the proof layer behind VacaVaca Studio. Use them as references for AI films, key visuals, music visuals, event screens, city image films and IP concept projects.</p>
        </div>
      </section>
      <section className="vv-container vv-section">
        <div className="vv-video-grid">
          {studioWorks.map((work) => (
            <article key={work.slug} className="vv-video-card">
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
          ))}
        </div>
      </section>
    </main>
  );
}
