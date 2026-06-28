import Link from "next/link";
import { requireAdmin } from "@/lib/admin-auth";
import { listAdReviews } from "@/lib/ad-reviews";

export const dynamic = "force-dynamic";

export default async function AdminAdReviewsPage() {
  await requireAdmin();
  const reviews = await listAdReviews();
  const hotReviews = reviews.filter((review) => review.report.leadScore >= 75);
  const todayStart = Date.now() - 24 * 60 * 60 * 1000;
  const reviewsToday = reviews.filter((review) => Date.parse(review.createdAt) >= todayStart);

  return (
    <main className="mx-auto max-w-[1200px] px-6 py-16">
      <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-white/40">Lead Funnel</p>
          <h1 className="text-4xl font-semibold tracking-[-0.04em] text-white md:text-6xl">Free Reviews</h1>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-white/50">Instant ad diagnostics become a lead pool here. Sort manually by lead score, recommended service and user concern.</p>
        </div>
        <Link href="/admin" className="rounded-full border border-white/10 bg-white/[0.06] px-5 py-3 text-sm font-medium text-white">Dashboard</Link>
      </div>

      <section className="mt-8 grid gap-4 md:grid-cols-3">
        <StatCard label="All Reviews" value={String(reviews.length)} />
        <StatCard label="Hot Leads" value={String(hotReviews.length)} />
        <StatCard label="Last 24h" value={String(reviewsToday.length)} />
      </section>

      <section className="mt-8 overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-[#0d0d0d] shadow-2xl shadow-black/20">
        {reviews.length ? (
          <div className="divide-y divide-white/[0.08]">
            {reviews.map((review) => (
              <Link key={review.id} href={`/admin/ad-reviews/${review.id}`} className="grid gap-3 p-5 transition hover:bg-white/[0.04] md:grid-cols-[1.1fr_0.9fr_0.8fr_0.8fr_0.8fr] md:items-center">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-white/38">{review.id}</p>
                  <p className="mt-2 font-semibold text-white">{review.input.productName}</p>
                  <p className="mt-1 line-clamp-1 text-sm text-white/48">{review.input.currentConcern || review.report.mainIssue}</p>
                </div>
                <div className="text-sm text-white/58">
                  <p>{review.input.contactEmail}</p>
                  <p className="mt-1 text-white/36">{formatDate(review.createdAt)}</p>
                </div>
                <div className="text-sm text-white/58">{review.input.targetPlatform}</div>
                <div><span className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs text-white/64">{review.report.recommendedService}</span></div>
                <div className="text-sm font-medium text-white">Lead {review.report.leadScore}</div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="p-8 text-sm text-white/52">No free reviews yet.</div>
        )}
      </section>
    </main>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[1.5rem] border border-white/[0.08] bg-[#0d0d0d] p-6 shadow-2xl shadow-black/20">
      <p className="text-xs uppercase tracking-[0.2em] text-white/36">{label}</p>
      <h2 className="mt-3 text-3xl font-semibold text-white">{value}</h2>
    </div>
  );
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(value));
}
