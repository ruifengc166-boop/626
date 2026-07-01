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
    { label: "Quoted", value: formatCurrency(totalQuote) },
    { label: "Paid / Active", value: String(paidOrders.length) },
    { label: "Services", value: String(templates.length) },
    { label: "Cases", value: String(cases.length) },
    { label: "Free Reviews", value: String(reviews.length) },
    { label: "Hot Leads", value: String(hotReviews.length) },
    { label: "Avg Human Time", value: `${avgHumanMinutes} min` },
    { label: "Avg Model Cost", value: formatCurrency(avgModelCost) },
  ];

  return (
    <main className="vacat-shell admin-shell px-6 pb-20">
      <div className="vacat-container relative z-10">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="admin-kicker mb-3">Studio Operations</p>
            <h1 className="admin-title">Admin Dashboard</h1>
            <p className="admin-copy mt-5 max-w-2xl">Manage briefs, service categories, cases and free creative review leads from one studio operations panel.</p>
          </div>
          <form action="/api/admin/logout" method="post">
            <button className="admin-button">Logout</button>
          </form>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {stats.map((item) => (
            <div key={item.label} className="admin-stat rounded-[1.5rem] p-6">
              <p className="text-xs uppercase tracking-[0.2em]">{item.label}</p>
              <h2 className="mt-3 text-3xl font-semibold">{item.value}</h2>
            </div>
          ))}
        </div>

        <section className="mt-10 grid gap-4 md:grid-cols-4">
          <AdminLink href="/admin/orders" title="Orders" description="Review briefs, quote projects and track production." />
          <AdminLink href="/admin/templates" title="Studio Services" description="Manage service status, pricing, assets and production notes." />
          <AdminLink href="/admin/cases" title="Cases" description="Manage public case previews and case-study assets." />
          <AdminLink href="/admin/ad-reviews" title="Free Reviews" description="Review lead scores, project context and recommended next steps." />
        </section>
      </div>
    </main>
  );
}

function AdminLink({ href, title, description }: { href: string; title: string; description: string }) {
  return (
    <Link href={href} className="admin-panel rounded-[1.5rem] p-6 transition hover:-translate-y-1 hover:border-[rgba(202,254,97,0.28)]">
      <h2 className="text-xl font-semibold text-white">{title}</h2>
      <p className="mt-3 text-sm leading-6 text-white/56">{description}</p>
    </Link>
  );
}
