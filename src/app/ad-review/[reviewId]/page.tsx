import Link from "next/link";
import { notFound } from "next/navigation";
import { getAdReview } from "@/lib/ad-reviews";

export const dynamic = "force-dynamic";

export default async function CreativeReviewResultPage({ params }: { params: Promise<{ reviewId: string }> }) {
  const { reviewId } = await params;
  const review = await getAdReview(reviewId);
  if (!review) notFound();

  const { input, report } = review;
  const startHref = `/start?plan=${encodeURIComponent(report.recommendedService)}&review=${encodeURIComponent(review.id)}`;

  return (
    <main className="vacat-container px-6 py-16">
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <aside className="vacat-card rounded-[28px] p-6 lg:sticky lg:top-24">
          <p className="vacat-eyebrow">Creative Review</p>
          <h1 className="vacat-title mt-4 text-4xl font-medium md:text-5xl">Your creative review is ready.</h1>
          <div className="vacat-card mt-7 rounded-[24px] p-5">
            <p className="text-sm text-[var(--text3)]">Creative Readiness Score</p>
            <p className="mt-2 text-6xl font-semibold tracking-[-0.06em] text-[var(--text)]">{report.creativeReadinessScore}</p>
            <p className="mt-3 text-sm leading-6 text-[var(--text3)]">{report.scoreSummary}</p>
          </div>
          <div className="mt-5 space-y-2 text-sm text-[var(--text3)]">
            <p><span className="text-[var(--text2)]">Project:</span> {input.productName}</p>
            <p><span className="text-[var(--text2)]">Format:</span> {input.targetPlatform}</p>
            <p><span className="text-[var(--text2)]">Recommended:</span> {report.recommendedService}</p>
            <p><span className="text-[var(--text2)]">Review ID:</span> {review.id}</p>
          </div>
          <div className="mt-7 grid gap-3">
            <Link href={startHref} className="vacat-button-primary px-6 py-3 text-center text-sm">
              Commission Next Step
            </Link>
            <Link href="/free-ad-review" className="vacat-button-secondary px-6 py-3 text-center text-sm">
              Review Another Visual
            </Link>
          </div>
        </aside>

        <section className="space-y-5">
          <ReportCard title="Main Issue"><p>{report.mainIssue}</p></ReportCard>
          <div className="grid gap-5 md:grid-cols-2">
            <ReportCard title="What Works"><List items={report.whatWorks} /></ReportCard>
            <ReportCard title="What to Improve"><List items={report.whatToFix} /></ReportCard>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            <ReportCard title="Opening Moment"><p>{report.firstThreeSecondsReview}</p></ReportCard>
            <ReportCard title="Subject Clarity"><p>{report.productClarityReview}</p></ReportCard>
            <ReportCard title="Pacing"><p>{report.pacingReview}</p></ReportCard>
            <ReportCard title="Caption and Ending"><p>{report.captionCtaReview}</p></ReportCard>
          </div>
          <ReportCard title="Format Fit"><p>{report.platformFit}</p></ReportCard>
          <div className="grid gap-5 md:grid-cols-2">
            <ReportCard title="Suggested Opening"><p className="text-xl leading-8 text-[var(--text)]">“{report.suggestedHook}”</p></ReportCard>
            <ReportCard title="Priority"><p>{report.fixPriority}</p></ReportCard>
          </div>
          <ReportCard title="Recommended Next Step"><p>{report.nextStepReason}</p></ReportCard>
          <p className="vacat-card rounded-2xl p-4 text-xs leading-5 text-[var(--text3)]">
            {report.disclaimer} This instant review is based on the submitted link, caption and project context. Request a VacaVaca Studio review if you need a frame-by-frame diagnosis.
          </p>
        </section>
      </div>
    </main>
  );
}

function ReportCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <article className="vacat-card rounded-[24px] p-6">
      <h2 className="text-xl font-medium tracking-[-0.03em] text-[var(--text)]">{title}</h2>
      <div className="mt-4 text-sm leading-7 text-[var(--text3)]">{children}</div>
    </article>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[var(--gold)]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
