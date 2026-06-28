import Link from "next/link";
import { notFound } from "next/navigation";
import { revalidatePath } from "next/cache";
import { requireAdmin } from "@/lib/admin-auth";
import { getOrder, updateOrder } from "@/lib/orders";
import { orderPlans, orderStatuses } from "@/lib/order-types";

export const dynamic = "force-dynamic";

async function saveOrderAction(formData: FormData) {
  "use server";
  await requireAdmin();
  const id = String(formData.get("id") || "");
  await updateOrder(id, Object.fromEntries(formData.entries()));
  revalidatePath(`/admin/orders/${id}`);
  revalidatePath("/admin/orders");
}

export default async function AdminOrderDetailPage({ params }: { params: Promise<{ orderId: string }> }) {
  await requireAdmin();
  const { orderId } = await params;
  const order = await getOrder(orderId);
  if (!order) notFound();

  return (
    <main className="mx-auto max-w-[1200px] px-6 py-16">
      <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-white/40">Order</p>
          <h1 className="text-4xl font-semibold tracking-[-0.04em] text-white md:text-6xl">{order.brandName}</h1>
          <p className="mt-3 text-white/56">{order.id}</p>
        </div>
        <Link href="/admin/orders" className="rounded-full border border-white/10 bg-white/[0.06] px-5 py-3 text-sm font-medium text-white">Back to Orders</Link>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <section className="rounded-[1.75rem] border border-white/[0.08] bg-[#0d0d0d] p-6 shadow-2xl shadow-black/20">
          <h2 className="text-xl font-semibold text-white">Client Brief</h2>
          <div className="mt-6 space-y-4 text-sm">
            <Info label="Product" value={order.productName} />
            <Info label="Template" value={order.selectedTemplateId} />
            <Info label="Source" value={order.sourceChannel || "direct"} />
            {order.sourceReviewId ? (
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-white/36">Source Review</p>
                <Link href={`/admin/ad-reviews/${order.sourceReviewId}`} className="mt-1 inline-block text-white underline decoration-white/30 underline-offset-4">{order.sourceReviewId}</Link>
              </div>
            ) : null}
            <Info label="Website" value={order.productUrl} />
            <Info label="Product Assets" value={order.productAssetLinks.join("\n")} />
            <Info label="Logo Assets" value={order.logoAssetLinks.join("\n")} />
            <Info label="Selling Points" value={[order.sellingPoint1, order.sellingPoint2, order.sellingPoint3].filter(Boolean).join("\n")} />
            <Info label="Platform" value={formatPlatform(order.targetPlatform)} />
            <Info label="Language" value={order.targetLanguage} />
            <Info label="CTA" value={order.ctaText} />
            <Info label="Contact" value={`${order.contactEmail}${order.contactHandle ? ` / ${order.contactHandle}` : ""}`} />
            <Info label="Budget" value={order.budgetRange || "Not provided"} />
            <Info label="Things to Avoid" value={order.thingsToAvoid || "None"} />
          </div>
        </section>

        <form action={saveOrderAction} className="rounded-[1.75rem] border border-white/[0.08] bg-[#0d0d0d] p-6 shadow-2xl shadow-black/20">
          <input type="hidden" name="id" value={order.id} />
          <h2 className="text-xl font-semibold text-white">Internal Review</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <Select label="Status" name="status" defaultValue={order.status} options={orderStatuses} />
            <Select label="Product Fit" name="productFitsTemplate" defaultValue={order.productFitsTemplate || "unchecked"} options={["unchecked", "good", "acceptable", "poor"]} />
            <Input label="Recommended Template" name="recommendedTemplateId" defaultValue={order.recommendedTemplateId || ""} />
            <Select label="Recommended Plan" name="recommendedPlan" defaultValue={order.recommendedPlan || "not_sure"} options={orderPlans} />
            <Input label="Estimated Delivery" name="estimatedDeliveryTime" defaultValue={order.estimatedDeliveryTime || ""} />
            <Input label="Quote USD" name="quoteUsd" type="number" defaultValue={order.quoteUsd || ""} />
            <Input label="Model Cost USD" name="modelCostUsd" type="number" defaultValue={order.modelCostUsd || ""} />
            <Input label="Human Fix Minutes" name="humanFixMinutes" type="number" defaultValue={order.humanFixMinutes || ""} />
            <Input label="Revision Count" name="revisionCount" type="number" defaultValue={order.revisionCount || ""} />
            <Input label="Final Delivery URL" name="finalDeliveryUrl" defaultValue={order.finalDeliveryUrl || ""} />
          </div>
          <div className="mt-4 grid gap-4">
            <Textarea label="Internal Notes" name="internalNotes" defaultValue={order.internalNotes || ""} />
            <Textarea label="Client Feedback" name="clientFeedback" defaultValue={order.clientFeedback || ""} />
            <label className="flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.04] p-4 text-sm text-white/70">
              <input type="checkbox" name="canBePublicCase" defaultChecked={order.canBePublicCase} />
              Can be public case
            </label>
          </div>

          <section className="mt-8">
            <h3 className="text-lg font-semibold text-white">Checklist</h3>
            <div className="mt-4 grid gap-2 md:grid-cols-2">
              {order.checklist.map((item, index) => (
                <label key={item.label} className="flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.04] p-3 text-sm text-white/70">
                  <input type="checkbox" name={`checklist-${index}`} defaultChecked={item.done} />
                  {item.label}
                </label>
              ))}
            </div>
          </section>

          <button type="submit" className="mt-8 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/85">Save Order</button>
        </form>
      </div>
    </main>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return <div><p className="text-xs uppercase tracking-[0.2em] text-white/36">{label}</p><p className="mt-1 whitespace-pre-wrap text-white/72">{value}</p></div>;
}

function Input({ label, ...props }: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return <label className="block"><span className="mb-2 block text-sm font-medium text-white/74">{label}</span><input {...props} className="input" /></label>;
}

function Textarea({ label, ...props }: React.TextareaHTMLAttributes<HTMLTextAreaElement> & { label: string }) {
  return <label className="block"><span className="mb-2 block text-sm font-medium text-white/74">{label}</span><textarea {...props} className="input min-h-28" /></label>;
}

function Select({ label, name, defaultValue, options }: { label: string; name: string; defaultValue: string; options: string[] }) {
  return <label className="block"><span className="mb-2 block text-sm font-medium text-white/74">{label}</span><select name={name} defaultValue={defaultValue} className="input">{options.map((option) => <option key={option} value={option}>{option}</option>)}</select></label>;
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
    default:
      return "Other";
  }
}
