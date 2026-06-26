import Link from "next/link";
import { revalidatePath } from "next/cache";
import { requireAdmin } from "@/lib/admin-auth";
import { listTemplateAdminRows, saveTemplateAdmin } from "@/lib/template-admin";
import { formatCurrency, formatPlan } from "@/lib/utils";

export const dynamic = "force-dynamic";

async function saveTemplateAction(formData: FormData) {
  "use server";
  await requireAdmin();
  await saveTemplateAdmin(Object.fromEntries(formData.entries()));
  revalidatePath("/admin/templates");
}

export default async function AdminTemplatesPage() {
  await requireAdmin();
  const rows = await listTemplateAdminRows();
  const activeCount = rows.filter((item) => item.effectiveStatus === "active").length;
  const featuredCount = rows.filter((item) => item.featured).length;

  return (
    <main className="mx-auto max-w-[1200px] px-6 py-16">
      <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-white/40">Management</p>
          <h1 className="text-4xl font-semibold tracking-[-0.04em] text-white md:text-6xl">Templates</h1>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-white/56">
            Manage operational fields for template pricing, preview asset paths, status and production notes.
          </p>
        </div>
        <Link href="/admin" className="rounded-full border border-white/10 bg-white/[0.06] px-5 py-3 text-sm font-medium text-white">Dashboard</Link>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <Stat label="Total templates" value={String(rows.length)} />
        <Stat label="Active" value={String(activeCount)} />
        <Stat label="Featured" value={String(featuredCount)} />
      </div>

      <section className="mt-10 space-y-5">
        {rows.map((template) => (
          <form key={template.id} action={saveTemplateAction} className="rounded-[1.75rem] border border-white/[0.08] bg-[#0d0d0d] p-5 shadow-2xl shadow-black/20">
            <input type="hidden" name="id" value={template.id} />
            <div className="grid gap-5 lg:grid-cols-[180px_1fr]">
              <div className="overflow-hidden rounded-[1.25rem] border border-white/[0.08] bg-black">
                {template.effectivePreviewVideoUrl ? (
                  <video src={template.effectivePreviewVideoUrl} poster={template.effectiveThumbnailUrl} muted loop playsInline className="aspect-[9/12] h-full w-full object-cover" />
                ) : (
                  <img src={template.effectiveThumbnailUrl} alt={template.title} className="aspect-[9/12] h-full w-full object-cover" />
                )}
              </div>
              <div>
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-white/36">{template.id}</p>
                    <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white">{template.title}</h2>
                    <p className="mt-2 text-sm text-white/50">
                      {formatPlan(template.effectiveRecommendedPlan)} · {formatCurrency(template.effectivePriceFrom)} · {template.category.slice(0, 3).join(" / ")}
                    </p>
                  </div>
                  <Link href={`/templates/${template.id}`} className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs font-medium text-white/70">View public page</Link>
                </div>

                <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  <Select label="Status" name="status" defaultValue={template.effectiveStatus} options={["draft", "active", "paused", "archived"]} />
                  <Select label="Plan" name="recommendedPlan" defaultValue={template.effectiveRecommendedPlan} options={["auto_remix_draft", "fast_human_fixed", "multi_version", "premium_creator"]} />
                  <Input label="Price From" name="priceFrom" type="number" defaultValue={template.effectivePriceFrom} />
                  <label className="flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.04] px-4 py-3 text-sm text-white/70">
                    <input type="checkbox" name="featured" defaultChecked={template.featured} /> Featured
                  </label>
                </div>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <Input label="Preview Video URL" name="previewVideoUrl" defaultValue={template.admin?.previewVideoUrl || ""} placeholder="/assets/templates/t001_preview.mp4" />
                  <Input label="Thumbnail URL" name="thumbnailUrl" defaultValue={template.admin?.thumbnailUrl || ""} placeholder="/assets/thumbnails/t001_thumbnail.jpg" />
                </div>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <Textarea label="Internal Notes" name="internalNotes" defaultValue={template.admin?.internalNotes || template.internalNotes || ""} />
                  <Textarea label="Production Notes" name="productionNotes" defaultValue={template.admin?.productionNotes || template.commonFailurePoints?.join("\n") || ""} />
                </div>
                <button type="submit" className="mt-5 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:bg-white/85">Save Template</button>
              </div>
            </div>
          </form>
        ))}
      </section>
    </main>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return <div className="rounded-[1.5rem] border border-white/[0.08] bg-[#0d0d0d] p-5"><p className="text-xs uppercase tracking-[0.2em] text-white/36">{label}</p><p className="mt-2 text-3xl font-semibold text-white">{value}</p></div>;
}

function Input({ label, ...props }: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return <label className="block"><span className="mb-2 block text-sm font-medium text-white/74">{label}</span><input {...props} className="input" /></label>;
}

function Textarea({ label, ...props }: React.TextareaHTMLAttributes<HTMLTextAreaElement> & { label: string }) {
  return <label className="block"><span className="mb-2 block text-sm font-medium text-white/74">{label}</span><textarea {...props} className="input min-h-24" /></label>;
}

function Select({ label, name, defaultValue, options }: { label: string; name: string; defaultValue: string; options: string[] }) {
  return <label className="block"><span className="mb-2 block text-sm font-medium text-white/74">{label}</span><select name={name} defaultValue={defaultValue} className="input">{options.map((option) => <option key={option} value={option}>{option}</option>)}</select></label>;
}
