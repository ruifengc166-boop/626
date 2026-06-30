import Link from "next/link";
import { notFound } from "next/navigation";
import { templates } from "@/data/templates";
import { getEffectiveTemplateById } from "@/lib/template-admin";
import { formatCurrency, formatPlan } from "@/lib/utils";

export const dynamic = "force-dynamic";

export function generateStaticParams() {
  return templates.map((template) => ({ templateId: template.id }));
}

export default async function TemplateDetailPage({ params }: { params: Promise<{ templateId: string }> }) {
  const { templateId } = await params;
  const template = await getEffectiveTemplateById(templateId);
  if (!template) return notFound();

  return (
    <main className="mx-auto max-w-[1200px] px-6 py-12 md:py-16">
      <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="rounded-[2rem] border border-white/10 bg-[#0d0d0d] p-3 shadow-2xl shadow-black/30">
          {template.previewVideoUrl ? (
            <video
              src={template.previewVideoUrl}
              poster={template.thumbnailUrl}
              className="aspect-[9/16] w-full rounded-[1.5rem] bg-black object-cover lg:max-h-[78vh]"
              autoPlay
              controls
              muted
              loop
              playsInline
              preload="metadata"
            />
          ) : (
            <img src={template.thumbnailUrl} alt={template.title} className="aspect-[9/16] w-full rounded-[1.5rem] bg-black object-cover lg:max-h-[78vh]" />
          )}
        </div>
        <div className="py-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/40">{template.id} · Commercial Direction</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white md:text-6xl">{template.title}</h1>
          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--gold)]">{template.serviceBasis}</p>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/60">
            A service lane for {template.suitableProducts.slice(0, 4).join(", ")}. Commercial projects are produced independently from submitted award works, using original briefs and properly authorized creators or client-owned assets.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <Info label="Price From" value={`${formatCurrency(template.priceFrom)}+`} />
            <Info label="Recommended Plan" value={formatPlan(template.recommendedPlan)} />
            <Info label="Difficulty" value={template.difficulty} />
            <Info label="Delivery" value={template.deliveryEstimate} />
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={`/start?template=${template.id}`} className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/85">
              Use This Direction
            </Link>
            <Link href="/templates" className="rounded-full border border-white/10 bg-white/[0.06] px-6 py-3 text-sm font-medium text-white transition hover:border-white/25 hover:bg-white/[0.1]">
              Back to Directions
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-16 grid gap-6 lg:grid-cols-3">
        <DetailBlock title="Good For" items={template.suitableProducts} />
        <DetailBlock title="Not Suitable For" items={template.unsuitableProducts} />
        <DetailBlock title="Needed Brief Materials" items={template.requiredAssets} />
      </div>

      <section className="mt-8 rounded-[1.75rem] border border-white/[0.08] bg-[#0d0d0d] p-7 shadow-2xl shadow-black/20">
        <h2 className="text-2xl font-semibold tracking-tight text-white">Brief Elements</h2>
        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {template.replaceableSlots.map((slot) => (
            <div key={slot.slotName} className="rounded-2xl border border-white/[0.08] bg-white/[0.04] p-4">
              <div className="flex items-center justify-between gap-3">
                <p className="font-medium text-white">{slot.slotName}</p>
                <span className="rounded-full bg-white px-2.5 py-1 text-xs text-black">{slot.slotType}</span>
              </div>
              <p className="mt-2 text-sm text-white/48">{slot.required ? "Required" : "Optional"}{slot.notes ? ` · ${slot.notes}` : ""}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/[0.08] bg-white/[0.04] p-4">
      <p className="text-xs uppercase tracking-[0.2em] text-white/38">{label}</p>
      <p className="mt-2 font-semibold text-white">{value}</p>
    </div>
  );
}

function DetailBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="rounded-[1.75rem] border border-white/[0.08] bg-[#0d0d0d] p-7 shadow-2xl shadow-black/20">
      <h2 className="text-xl font-semibold tracking-tight text-white">{title}</h2>
      <ul className="mt-5 space-y-3 text-sm text-white/58">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-white/70" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
