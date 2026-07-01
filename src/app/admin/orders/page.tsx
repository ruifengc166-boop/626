import Link from "next/link";
import { requireAdmin } from "@/lib/admin-auth";
import { listOrders } from "@/lib/orders";
import { orderStatuses } from "@/lib/order-types";
import { formatCurrency } from "@/lib/utils";

export const dynamic = "force-dynamic";

export default async function AdminOrdersPage({ searchParams }: { searchParams: Promise<{ status?: string }> }) {
  await requireAdmin();
  const params = await searchParams;
  const orders = await listOrders();
  const visibleOrders = params.status ? orders.filter((order) => order.status === params.status) : orders;

  return (
    <main className="vacat-shell admin-shell px-6 pb-20">
      <div className="vacat-container relative z-10">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="admin-kicker mb-3">Studio Orders</p>
            <h1 className="admin-title">Orders</h1>
            <p className="admin-copy mt-5 max-w-2xl">Review submitted briefs, confirm references, quote projects and track production status.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="/api/admin/orders/export" className="admin-button">Export CSV</a>
            <Link href="/admin" className="admin-button">Dashboard</Link>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-2 text-sm">
          <FilterLink href="/admin/orders" active={!params.status}>All</FilterLink>
          {orderStatuses.map((status) => (
            <FilterLink key={status} href={`/admin/orders?status=${status}`} active={params.status === status}>{status}</FilterLink>
          ))}
        </div>

        <section className="admin-panel mt-8 overflow-hidden rounded-[1.75rem]">
          {visibleOrders.length ? (
            <div className="divide-y divide-white/[0.08]">
              {visibleOrders.map((order) => (
                <Link key={order.id} href={`/admin/orders/${order.id}`} className="admin-row-link grid gap-3 p-5 md:grid-cols-[1.2fr_0.75fr_0.8fr_1fr_0.75fr_0.75fr_0.7fr] md:items-center">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/38">{order.id}</p>
                    <p className="mt-2 font-semibold text-white">{order.brandName}</p>
                    <p className="mt-1 text-sm text-white/48">{order.productName}</p>
                  </div>
                  <div>
                    <p className="text-sm text-white/70">{formatPlatform(order.targetPlatform)}</p>
                    <p className="mt-1 text-xs text-white/36">{order.selectedTemplateId}</p>
                  </div>
                  <div>
                    <p className="text-sm text-white/58">{order.sourceChannel || "direct"}</p>
                    {order.sourceReviewId ? <p className="mt-1 text-xs text-white/36">{order.sourceReviewId}</p> : null}
                  </div>
                  <div className="break-words text-sm text-white/58">{order.contactEmail}</div>
                  <div><span className="admin-status rounded-full px-3 py-1 text-xs">{order.status}</span></div>
                  <div className="text-sm font-medium text-white">{order.quoteUsd ? formatCurrency(order.quoteUsd) : "No quote"}</div>
                  <div className="text-sm text-white/44">{formatDate(order.createdAt)}</div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="p-8 text-sm text-white/52">No orders yet.</div>
          )}
        </section>
      </div>
    </main>
  );
}

function FilterLink({ href, active, children }: { href: string; active: boolean; children: React.ReactNode }) {
  return <Link href={href} className={active ? "rounded-full bg-[var(--gold)] px-4 py-2 text-black" : "rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-white/58 transition hover:border-[rgba(202,254,97,.24)] hover:text-[var(--gold)]"}>{children}</Link>;
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(value));
}

function formatPlatform(value: string) {
  switch (value) {
    case "tiktok":
      return "TikTok";
    case "instagram_reels":
      return "Instagram Reels";
    case "youtube_shorts":
      return "YouTube Shorts";
    case "meta_ads":
      return "Meta Ads";
    case "website":
      return "Website";
    case "exhibition_screen":
      return "Exhibition Screen";
    case "event_screen":
      return "Event Screen";
    case "pitch_deck":
      return "Pitch Deck";
    case "brand_film":
      return "Brand Film";
    case "key_visual":
      return "Key Visual";
    default:
      return "Other";
  }
}
