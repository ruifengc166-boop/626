import { cn } from "@/lib/utils";

export function PricingCard({ title, price, lines, featured = false }: { title: string; price: string; lines: string[]; featured?: boolean }) {
  return (
    <div
      className={cn(
        "vacat-card relative rounded-[1.75rem] p-6 text-white",
        featured ? "ring-1 ring-lime-200/40" : ""
      )}
    >
      {featured ? <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-lime-200">Most Popular</p> : null}
      <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
      <p className="mt-4 text-3xl font-semibold text-lime-200">{price}</p>
      <ul className="mt-6 space-y-3 text-sm text-white/58">
        {lines.map((line) => (
          <li key={line} className="flex gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-lime-200" />
            <span>{line}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
