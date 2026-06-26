import Link from "next/link";
import type { Template } from "@/data/templates";
import { formatCurrency, formatPlan } from "@/lib/utils";
import { CategoryChip } from "@/components/CategoryChip";

export function TemplateCard({ template, showSuitableProducts = false }: { template: Template; showSuitableProducts?: boolean }) {
  return (
    <article className="group flex min-h-full flex-col overflow-hidden rounded-[24px] border border-white/[0.08] bg-[#0d0d0d] shadow-2xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-white/[0.18]">
      <div className="relative aspect-[16/11] overflow-hidden bg-black video-shell">
        {template.previewVideoUrl ? (
          <video
            src={template.previewVideoUrl}
            poster={template.thumbnailUrl}
            className="h-full w-full object-cover opacity-90"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
        ) : (
          <Link href={`/templates/${template.id}`} className="block h-full">
            <img src={template.thumbnailUrl} alt={template.title} className="h-full w-full object-cover opacity-90 transition duration-500 group-hover:scale-105" />
          </Link>
        )}
        {!template.previewVideoUrl ? <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent" /> : null}
        <div className="pointer-events-none absolute left-4 top-4 rounded-full border border-white/10 bg-black/55 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
          {template.id}
        </div>
        {!template.previewVideoUrl ? (
          <div className="pointer-events-none absolute bottom-4 left-4 rounded-full border border-white/10 bg-white/[0.12] px-3 py-1 text-xs text-white backdrop-blur">
            From {formatCurrency(template.priceFrom)}
          </div>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <Link href={`/templates/${template.id}`} className="transition hover:text-white/72">
          <h3 className="text-lg font-semibold tracking-tight text-white">{template.title}</h3>
        </Link>
        <div className="mt-4 flex flex-wrap gap-2">
          {template.category.slice(0, 2).map((cat) => (
            <CategoryChip key={cat}>{cat}</CategoryChip>
          ))}
        </div>
        {showSuitableProducts ? (
          <p className="mt-4 line-clamp-2 text-sm leading-6 text-white/52">
            Best for {template.suitableProducts.slice(0, 3).join(", ")}.
          </p>
        ) : null}
        <div className="mt-auto flex items-center justify-between gap-3 pt-5">
          <span className="text-sm font-medium text-white/70">
            {showSuitableProducts ? formatPlan(template.recommendedPlan) : `From ${formatCurrency(template.priceFrom)}`}
          </span>
          <Link href={`/start?template=${template.id}`} className="shrink-0 rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-white/85">
            Use This Style
          </Link>
        </div>
      </div>
    </article>
  );
}
