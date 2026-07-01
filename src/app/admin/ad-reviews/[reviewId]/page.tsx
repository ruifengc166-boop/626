import Link from "next/link";
import { notFound } from "next/navigation";
import { requireAdmin } from "@/lib/admin-auth";
import { getAdReview } from "@/lib/ad-reviews";

export const dynamic = "force-dynamic";

export default async function AdminAdReviewDetailPage({ params }: { params: Promise<{ reviewId: string }> }) {
  await requireAdmin();
  const { reviewId } = await params;
  const review = await getAdReview(reviewId);
  if (!review) notFound();

  const { input, report } = review;
  const startHref = `/start?plan=${encodeURIComponent(report.recommendedService)}&review=${encodeURIComponent(review.id)}`;

  return (
    <main className="vacat-shell admin-shell px-6 pb-20">
      <div className="vacat-container relative z-10">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="admin-kicker mb-3">Free Review Detail</p>
            <h1 className="admin-title">{input.productName}</h1>
            <p className="admin-copy mt-4">{review.id} · {formatDate(review.createdAt)}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href={`/ad-review/${review.id}`} className="admin-button">Public Result</Link>
            <Link href={startHref} className="admin-button-primary">Create Order Path</Link>
            <Link href="/admin/ad-reviews" className="admin-button">Back</Link>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <section className="space-y-6">
            <Card title="Lead Summary">
              <div className="grid gap-4 md:grid-cols-2">
                <Metric label="Creative Score" value={String(report.creativeReadinessScore)} />
                <Metric label="Lead Score" value={String(report.leadScore)} />
                <Metric label="Recommended" value={report.recommendedService} />
                <Metric label="Format" value={input.targetPlatform} />
              </div>
            </Card>

            <Card title="Submitted Context">
              <div className="space-y-4 text-sm">
                <Info label="Email" value={input.contactEmail} />
                <Info label="Reference URL" value={input.adUrl} />
                <Info label="Project Category" value={input.productCategory || "Not provided"} />
                <Info label="Creative Goal" value={input.campaignGoal} />
                <Info label="Client Concern" value={input.currentConcern || "Not provided"} />
                <Info label="Transcript / Caption" value={input.transcriptOrCaption || "Not provided"} />
                <Info label="Client IP" value={review.clientIp || "Not captured"} />
              </div>
            </Card>

            <Card title="Internal Signals">
              <List items={report.internalSignals} />
            </Card>
          </section>

          <section className="space-y-6">
            <Card title="Main Issue">
              <p>{report.mainIssue}</p>
            </Card>

            <div className="grid gap-6 md:grid-cols-2">
              <Card title="What Works">
                <List items={report.whatWorks} />
              </Card>
              <Card title="What to Fix">
                <List items={report.whatToFix} />
              </Card>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Card title="First 3 Seconds">
                <p>{report.firstThreeSecondsReview}</p>
              </Card>
              <Card title="Project Clarity">
                <p>{report.productClarityReview}</p>
              </Card>
              <Card title="Pacing">
                <p>{report.pacingReview}</p>
              </Card>
              <Card title="Caption & CTA">
                <p>{report.captionCtaReview}</p>
              </Card>
            </div>

            <Card title="Format Fit">
              <p>{report.platformFit}</p>
            </Card>

            <Card title="Follow-up Angle">
              <p className="text-white">Suggested hook: “{report.suggestedHook}”</p>
              <p className="mt-4">Fix priority: {report.fixPriority}</p>
              <p className="mt-4">Next step reason: {report.nextStepReason}</p>
            </Card>
          </section>
        </div>
      </div>
    </main>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <article className="admin-panel rounded-[1.75rem] p-6">
      <h2 className="text-xl font-semibold text-white">{title}</h2>
      <div className="mt-5 text-sm leading-7 text-white/58">{children}</div>
    </article>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/[0.08] bg-white/[0.04] p-4">
      <p className="text-xs uppercase tracking-[0.18em] text-white/36">{label}</p>
      <p className="mt-2 text-lg font-semibold text-white">{value}</p>
    </div>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return <div><p className="text-xs uppercase tracking-[0.2em] text-white/36">{label}</p><p className="mt-1 whitespace-pre-wrap break-words text-white/72">{value}</p></div>;
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

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(value));
}
