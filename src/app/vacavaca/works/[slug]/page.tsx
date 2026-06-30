import Link from "next/link";
import { notFound } from "next/navigation";
import { studioWorks } from "@/data/vacavaca-studio";

export const dynamic = "force-dynamic";

export function generateStaticParams() {
  return studioWorks.map((work) => ({ slug: work.slug }));
}

export default async function VacaVacaWorkDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const work = studioWorks.find((item) => item.slug === slug);
  if (!work) notFound();

  const onsiteVideoUrl = work.fullVideoUrl || work.previewVideoUrl;

  return (
    <main className="vv-content-page">
      <section className="vv-content-hero">
        <div className="vv-container">
          <p className="vacat-eyebrow">VACAT Reference Work</p>
          <h1>{work.title}</h1>
          <p>{work.summary}</p>
        </div>
      </section>

      <section className="vv-container vv-section">
        <div className="grid gap-10 lg:grid-cols-[1.12fr_0.88fr] lg:items-start">
          <div className="vacat-card overflow-hidden rounded-[28px] p-3">
            {onsiteVideoUrl ? (
              <video
                src={onsiteVideoUrl}
                poster={work.posterUrl}
                className="aspect-video w-full rounded-[22px] bg-black object-cover"
                controls
                playsInline
                preload="metadata"
              />
            ) : (
              <img src={work.posterUrl} alt={work.title} className="aspect-video w-full rounded-[22px] bg-black object-cover" />
            )}
          </div>

          <aside className="vacat-card rounded-[28px] p-6 lg:sticky lg:top-24">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--gold)]">{work.award}</p>
            <h2 className="mt-3 text-3xl font-medium tracking-[-0.04em] text-[var(--text)]">{work.track}</h2>
            <div className="mt-5 space-y-3 text-sm leading-6 text-[var(--text3)]">
              <p><span className="text-[var(--text2)]">Creator lane:</span> {work.creator}</p>
              <p><span className="text-[var(--text2)]">Reference value:</span> {work.referenceValue}</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {work.commercialUseCases.map((item) => (
                <span key={item} className="vacat-chip rounded-full px-3 py-1.5 text-xs">{item}</span>
              ))}
            </div>
            <div className="mt-8 grid gap-3">
              <Link href={`/start?vacaVacaReference=${work.slug}`} className="vacat-button-primary px-6 py-3 text-center text-sm">
                Use This Reference
              </Link>
              <Link href="/templates" className="vacat-button-secondary px-6 py-3 text-center text-sm">
                Browse Creative Directions
              </Link>
              {work.bilibiliUrl ? (
                <a href={work.bilibiliUrl} target="_blank" rel="noreferrer" className="vv-btn-nav text-center">
                  Also published on Bilibili
                </a>
              ) : null}
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
