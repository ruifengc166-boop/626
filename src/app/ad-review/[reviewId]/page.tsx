import Link from "next/link";
import { notFound } from "next/navigation";
import { getAdReview } from "@/lib/ad-reviews";

export default async function AdReviewResultPage({ params }: { params: Promise<{ reviewId: string }> }) {
  const { reviewId } = await params;
  const review = await getAdReview(reviewId);
  if (!review) notFound();

  const { input, report } = review;

  return (
    <main className="mx-auto max-w-[1200px] px-6 py-16">
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <aside className="rounded-[28px] border border-white/[0.08] bg-[#0d0d0d] p-6 lg:sticky lg:top-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/38">Creative Review</p>
          <h1 className="mt-4 text-4xl font-medium tracking-[-0.045em] text-white md:text-5xl">Your ad review is ready.</h1>
          <div className="mt-7 rounded-[24px] border border-white/[0.08] bg-white/[0.04] p-5">
            <p className="text-sm text-white/44">Creative Readiness Score</p>
            <p className="mt-2 text-6xl font-semibold tracking-[-0.06em] text-white">{report.creativeReadinessScore}</p>
            <p className="mt-3 text-sm leading-6 text-white/54">{report.scoreSummary}</p>
          </div>
          <div className="mt-5 space-y-2 text-sm text-white/50">
            <p><span className="text-white/72">Product:</span> {input.productName}</p>
            <p><span className="text-white/72">Platform:</span> {input.targetPlatform}</p>
            <p><span className="text-white/72">Recommended:</span> {report.recommendedService}</p>
          </div>
          <div className="mt-7 grid gap-3">
            <Link href={`/start?plan=${encodeURIComponent(report.recommendedService)}`} className="rounded-full bg-white px-6 py-3 text-center text-sm font-medium text-black transition hover:bg-white/85">
              Request Fix or Remake
            </Link>
            <Link href="/free-ad-review" className="rounded-full border border-white/[0.12] bg-white/[0.06] px-6 py-3 text-center text-sm font-medium text-white transition hover:bg-white/[0.1]">
              Review Another Ad
            </Link>
          </div>
        </aside>

        <section className="space-y-5">
          <ReportCard title="Main Issue">
            <p>{report.mainIssue}</p>
          </ReportCard>

          <div className="grid gap-5 md:grid-cols-2">
            <ReportCard title="What Works">
              <List items={report.whatWorks} />
            </ReportCard>
            <ReportCard title="What to Fix">
              <List items={report.whatToFix} />
            </ReportCard>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <ReportCard title="First 3 Seconds">
              <p>{report.firstThreeSecondsReview}</p>
            </ReportCard>
            <ReportCard title="Product Clarity">
              <p>{report.productClarityReview}</p>
            </ReportCard>
            <ReportCard title="Pacing">
              <p>{report.pacingReview}</p>
            </ReportCard>
            <ReportCard title="Caption & CTA">
              <p>{report.captionCtaReview}</p>
            </ReportCard>
          </div>

          <ReportCard title="Platform Fit">
            <p>{report.platformFit}</p>
          </ReportCard>

          <div className="grid gap-5 md:grid-cols-2">
            <ReportCard title="Suggested Hook">
              <p className="text-xl leading-8 text-white">“{report.suggestedHook}”</p>
            </ReportCard>
            <ReportCard title="Fix Priority">
              <p>{report.fixPriority}</p>
            </ReportCard>
          </div>

          <ReportCard title="Recommended Next Step">
            <p>{report.nextStepReason}</p>
          </ReportCard>

          <p className="rounded-2xl border border-white/[0.08] bg-white/[0.035] p-4 text-xs leading-5 text-white/38">
            {report.disclaimer}
          </p>
        </section>
      </div>
    </main>
  );
}

function ReportCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <article className="rounded-[24px] border border-white/[0.08] bg-[#0d0d0d] p-6">
      <h2 className="text-xl font-medium tracking-[-0.03em] text-white">{title}</h2>
      <div className="mt-4 text-sm leading-7 text-white/58">{children}</div>
    </article>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-white/40" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
