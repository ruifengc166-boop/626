import Link from "next/link";
import { revalidatePath } from "next/cache";
import { requireAdmin } from "@/lib/admin-auth";
import { deleteCase, listCases, saveCase } from "@/lib/cases";
import { templates } from "@/data/templates";

export const dynamic = "force-dynamic";

async function saveCaseAction(formData: FormData) {
  "use server";
  await requireAdmin();
  await saveCase(Object.fromEntries(formData.entries()));
  revalidatePath("/admin/cases");
  revalidatePath("/");
}

async function deleteCaseAction(formData: FormData) {
  "use server";
  await requireAdmin();
  await deleteCase(String(formData.get("id") || ""));
  revalidatePath("/admin/cases");
  revalidatePath("/");
}

export default async function AdminCasesPage() {
  await requireAdmin();
  const cases = await listCases();

  return (
    <main className="vacat-shell admin-shell px-6 pb-20">
      <div className="vacat-container relative z-10">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="admin-kicker mb-3">Case Management</p>
            <h1 className="admin-title">Cases</h1>
            <p className="admin-copy mt-5 max-w-2xl">
              Manage public case previews and internal case notes. Add authorized Studio cases only.
            </p>
          </div>
          <Link href="/admin" className="admin-button">Dashboard</Link>
        </div>

        <section className="admin-panel mt-10 rounded-[1.75rem] p-5">
          <h2 className="text-xl font-semibold text-white">Add New Case</h2>
          <CaseForm action={saveCaseAction} templates={templates} submitLabel="Create Case" />
        </section>

        <section className="mt-10 space-y-5">
          {cases.map((caseItem) => (
            <article key={caseItem.id} className="admin-panel rounded-[1.75rem] p-5">
              <div className="grid gap-5 lg:grid-cols-[280px_1fr]">
                <div className="overflow-hidden rounded-[1.25rem] border border-white/[0.08] bg-black">
                  {caseItem.afterVideoUrl ? (
                    <video src={caseItem.afterVideoUrl} poster={caseItem.thumbnailUrl} muted loop playsInline className="aspect-[4/3] h-full w-full object-cover" />
                  ) : (
                    <img src={caseItem.thumbnailUrl} alt={caseItem.title} className="aspect-[4/3] h-full w-full object-cover" />
                  )}
                </div>
                <div>
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.22em] text-[var(--gold)]">{caseItem.id}</p>
                      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white">{caseItem.title}</h2>
                      <p className="mt-2 text-sm text-white/50">{caseItem.templateId} · {caseItem.productCategory} · {caseItem.public ? "Public" : "Hidden"}</p>
                    </div>
                    <form action={deleteCaseAction}>
                      <input type="hidden" name="id" value={caseItem.id} />
                      <button className="rounded-full border border-red-400/20 bg-red-500/10 px-4 py-2 text-xs font-medium text-red-100">Delete</button>
                    </form>
                  </div>
                  <CaseForm action={saveCaseAction} templates={templates} caseItem={caseItem} submitLabel="Save Case" />
                </div>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}

function CaseForm({ action, templates, caseItem, submitLabel }: { action: (formData: FormData) => void; templates: typeof import("@/data/templates").templates; caseItem?: Awaited<ReturnType<typeof listCases>>[number]; submitLabel: string }) {
  return (
    <form action={action} className="mt-5 grid gap-4">
      <input type="hidden" name="id" value={caseItem?.id || ""} />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Input label="Title" name="title" defaultValue={caseItem?.title || ""} required />
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-white/74">Service</span>
          <select name="templateId" defaultValue={caseItem?.templateId || "V001"} className="input">
            {templates.map((template) => <option key={template.id} value={template.id}>{template.id} · {template.title}</option>)}
          </select>
        </label>
        <Input label="Project Category" name="productCategory" defaultValue={caseItem?.productCategory || ""} />
        <label className="flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.04] px-4 py-3 text-sm text-white/70">
          <input type="checkbox" name="public" defaultChecked={caseItem?.public ?? true} /> Public
        </label>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        <Input label="Before Asset URL" name="beforeAssetUrl" defaultValue={caseItem?.beforeAssetUrl || ""} placeholder="https://..." />
        <Input label="After Video URL" name="afterVideoUrl" defaultValue={caseItem?.afterVideoUrl || ""} placeholder="https://..." />
        <Input label="Thumbnail URL" name="thumbnailUrl" defaultValue={caseItem?.thumbnailUrl || ""} placeholder="https://..." />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <Textarea label="Description" name="description" defaultValue={caseItem?.description || ""} />
        <Textarea label="Result Notes" name="resultNotes" defaultValue={caseItem?.resultNotes || ""} />
      </div>
      <button type="submit" className="admin-button-primary w-fit">{submitLabel}</button>
    </form>
  );
}

function Input({ label, ...props }: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return <label className="block"><span className="mb-2 block text-sm font-medium text-white/74">{label}</span><input {...props} className="input" /></label>;
}

function Textarea({ label, ...props }: React.TextareaHTMLAttributes<HTMLTextAreaElement> & { label: string }) {
  return <label className="block"><span className="mb-2 block text-sm font-medium text-white/74">{label}</span><textarea {...props} className="input min-h-24" /></label>;
}
