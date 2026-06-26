import Link from "next/link";
import type { Template } from "@/data/templates";
import { formatCurrency } from "@/lib/utils";

export function VideoFrame({ template }: { template: Template }) {
  return (
    <Link href={`/templates/${template.id}`} className="group block">
      <div className="relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-[#0d0d0d] p-3 shadow-2xl shadow-black/30">
        <div className="relative aspect-[9/16] overflow-hidden rounded-[22px] bg-black video-shell">
          <img src={template.thumbnailUrl} alt={template.title} className="h-full w-full object-cover opacity-95" />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />
          <div className="absolute right-4 top-4 rounded-full border border-white/10 bg-black/50 px-3 py-1 text-xs text-white/70 backdrop-blur">
            Featured Style
          </div>
          <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/10 bg-black/45 p-4 backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/42">{template.id}</p>
            <p className="mt-2 text-lg font-semibold tracking-tight text-white">{template.title}</p>
            <p className="mt-2 text-sm text-white/56">From {formatCurrency(template.priceFrom)}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
