import Link from "next/link";
import type { Template } from "@/data/templates";
import { formatCurrency, formatPlan } from "@/lib/utils";
import { CategoryChip } from "@/components/CategoryChip";

export function TemplateCard({ template, showSuitableProducts = false }: { template: Template; showSuitableProducts?: boolean }) {
  return (
    <article className="vacat-card vacat-card-glow group flex min-h-full flex-col overflow-hidden rounded-[24px]">
      <div className="relative aspect-[16/11] overflow-hidden video-shell">
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
            <img src={template.thumbnailUrl} alt={template.title} className="h-full w-full object-cover opacity-95" />
          </Link>
        )}
        <div className="pointer-events-none absolute left-4 top-4 rounded-full border border-[rgba(202,254,97,0.26)] bg-[rgba(35,52,95,0.72)] px-3 py-1 text-xs font-semibold text-[var(--gold)] backdrop-blur">
          {template.id}
        </div>
        <div className="pointer-events-none absolute bottom-4 left-4 rounded-full border border-[rgba(202,254,97,0.18)] bg-[rgba(202,254,97,0.10)] px-3 py-1 text-xs text-[var(--text)] backdrop-blur">
          From {formatCurrency(template.priceFrom)}
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[var(--gold)]">Studio service</p>
        <Link href={`/templates/${template.id}`} className="mt-2 transition hover:text-[var(--gold)]">
          <h3 className="text-xl font-semibold tracking-[-0.035em] text-[var(--text)]">{template.title}</h3>
        </Link>
        <p className="mt-3 line-clamp-2 text-xs leading-5 text-[var(--text3)]">{template.serviceBasis}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {template.category.slice(0, 2).map((cat) => (
            <CategoryChip key={cat}>{cat}</CategoryChip>
          ))}
        </div>
        {showSuitableProducts ? (
          <p className="mt-4 line-clamp-2 text-sm leading-6 text-[var(--text3)]">
            Suitable for {template.suitableProducts.slice(0, 3).join(", ")}.
          </p>
        ) : null}
        <div className="mt-auto flex items-center justify-between gap-3 pt-5">
          <span className="text-sm font-medium text-[var(--text3)]">
            {showSuitableProducts ? formatPlan(template.recommendedPlan) : `From ${formatCurrency(template.priceFrom)}`}
          </span>
          <Link href={`/start?template=${template.id}`} className="vacat-button-primary shrink-0 px-4 py-2 text-sm">
            Start Brief
          </Link>
        </div>
      </div>
    </article>
  );
}
