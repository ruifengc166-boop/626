import Link from "next/link";
import type { Template } from "@/data/templates";
import { formatCurrency } from "@/lib/utils";

export function VideoFrame({ template }: { template: Template }) {
  return (
    <div className="group block">
      <div className="relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-[#0d0d0d] p-3 shadow-2xl shadow-black/30">
        <div className="relative aspect-[9/16] overflow-hidden rounded-[22px] bg-black video-shell">
          {template.previewVideoUrl ? (
            <video
              src={template.previewVideoUrl}
              poster={template.thumbnailUrl}
              className="h-full w-full object-cover opacity-95"
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
          {!template.previewVideoUrl ? <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 via-black/35 to-transparent" /> : null}
          <div className="pointer-events-none absolute right-4 top-4 rounded-full border border-white/10 bg-black/50 px-3 py-1 text-xs text-white/70 backdrop-blur">
            Featured Style
          </div>
          {template.previewVideoUrl ? (
            <Link href={`/templates/${template.id}`} className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/50 px-3 py-1 text-xs text-white/70 backdrop-blur transition hover:bg-black/70">
              Details
            </Link>
          ) : (
            <Link href={`/templates/${template.id}`} className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/10 bg-black/45 p-4 backdrop-blur transition hover:bg-black/60">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/42">{template.id}</p>
              <p className="mt-2 text-lg font-semibold tracking-tight text-white">{template.title}</p>
              <p className="mt-2 text-sm text-white/56">From {formatCurrency(template.priceFrom)}</p>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
