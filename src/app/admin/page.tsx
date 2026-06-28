import Link from "next/link";
import { requireAdmin } from "@/lib/admin-auth";
import { listOrders } from "@/lib/orders";
import { listAdReviews } from "@/lib/ad-reviews";
import { listCases } from "@/lib/cases";
import { templates } from "@/data/templates";
import { formatCurrency } from "@/lib/utils";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  await requireAdmin();
  const orders = await listOrders();
  const reviews = await listAdReviews();
  const cases = await listCases();
  const paidOrders = orders.filter((order) => ["paid", "in_production", "human_fixing", "delivered", "completed"].includes(order.status));
  const totalQuote = orders.reduce((sum, order) => sum + (order.quoteUsd || 0), 0);
  const avgHumanMinutes = orders.length ? Math.round(orders.reduce((sum, order) => sum + (order.humanFixMinutes || 0), 0) / orders.length) : 0;
  const avgModelCost = orders.length ? orders.reduce((sum, order) => sum + (order.modelCostUsd || 0), 0) / orders.length : 0;
  const hotReviews = reviews.filter((review) => review.report.leadScore >= 75);

  const stats = [
    { label: "Orders", value: String(orders.length) },
    { label: "New", value: String(orders.filter((order) => order.status === "new").length) },
    { label: "Free Reviews", value: String(reviews.length) },
    { label: "Hot Reviews", value: String(hotReviews.length) },
    { label: "Paid / Active", value: String(paidOrders.length) },
    { label: "Templates", value: String(templates.length) },
    { label: "Cases", value: String(cases.length) },
    { label: "Quoted", value: formatCurrency(totalQuote) },
    { label: "Avg Human Time", value: `${avgHumanMinutes} min` },
    { label: "Avg Model Cost", value: formatCurrency(avgModelCost) },
  ];

  return (
    <main className="mx-auto max-w-[1200px] px-6 py-16">
      <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-white/40">Internal</p>
          <h1 className="text-4xl font-semibold tracking-[-0.04em] text-white md:text-6xl">Admin Dashboard</h1>
        </div>
        <form action="/api/admin/logout" method="post">
          <button className="rounded-full border border-white/10 bg-white/[0.06] px-5 py-3 text-sm font-medium text-white">Logout</button>
        </form>
      </div>
      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
        {stats.map((item) => (
          <div key={item.label} className="rounded-[1.5rem] border border-white/[0.08] bg-[#0d0d0d] p-6 shadow-2xl shadow-black/20">
            <p className="text-xs uppercase tracking-[0.2em] text-white/36">{item.label}</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">{item.value}</h2>
          </div>
        ))}
      </div>
      <section className="mt-10 grid gap-4 md:grid-cols-4">
        <AdminLink href="/admin/ad-reviews" title="Free Reviews" description="Review instant diagnostics, lead scores, emails, and recommended services." />
        <AdminLink href="/admin/orders" title="Orders" description="Review submissions, quote projects, and track delivery." />
        <AdminLink href="/admin/templates" title="Templates" description="Manage template status, prices, asset URLs and production notes." />
        <AdminLink href="/admin/cases" title="Cases" description="Manage homepage case previews and case-study video assets." />
      </section>
    </main>
  );
}

function AdminLink({ href, title, description }: { href: string; title: string; description: string }) {
  return (
    <Link href={href} className="rounded-[1.5rem] border border-white/[0.08] bg-[#0d0d0d] p-6 shadow-2xl shadow-black/20 transition hover:border-white/[0.18] hover:bg-white/[0.04]">
      <h2 className="text-xl font-semibold text-white">{title}</h2>
      <p className="mt-3 text-sm text-white/56">{description}</p>
    </Link>
  );
}
