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
    <main className="vacat-shell admin-shell px-6 pb-20">
      <div className="vacat-container relative z-10">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="admin-kicker mb-3">Lead Funnel</p>
            <h1 className="admin-title">Free Reviews</h1>
            <p className="admin-copy mt-5 max-w-2xl">Free creative reviews become a lead pool here. Prioritize by lead score, service fit and client concern.</p>
          </div>
          <Link href="/admin" className="admin-button">Dashboard</Link>
        </div>

        <section className="mt-8 grid gap-4 md:grid-cols-3">
          <StatCard label="All Reviews" value={String(reviews.length)} />
          <StatCard label="Hot Leads" value={String(hotReviews.length)} />
          <StatCard label="Last 24h" value={String(reviewsToday.length)} />
        </section>

        <section className="admin-panel mt-8 overflow-hidden rounded-[1.75rem]">
          {reviews.length ? (
            <div className="divide-y divide-white/[0.08]">
              {reviews.map((review) => (
                <Link key={review.id} href={`/admin/ad-reviews/${review.id}`} className="admin-row-link grid gap-3 p-5 md:grid-cols-[1.1fr_0.9fr_0.8fr_0.8fr_0.8fr] md:items-center">
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
                  <div><span className="admin-status rounded-full px-3 py-1 text-xs">{review.report.recommendedService}</span></div>
                  <div className="text-sm font-medium text-white">Lead {review.report.leadScore}</div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="p-8 text-sm text-white/52">No free reviews yet.</div>
          )}
        </section>
      </div>
    </main>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="admin-stat rounded-[1.5rem] p-6">
      <p className="text-xs uppercase tracking-[0.2em]">{label}</p>
      <h2 className="mt-3 text-3xl font-semibold">{value}</h2>
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
