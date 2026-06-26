import { cn } from "@/lib/utils";

export function PricingCard({ title, price, lines, featured = false }: { title: string; price: string; lines: string[]; featured?: boolean }) {
  return (
    <div
      className={cn(
        "relative rounded-[1.75rem] border bg-[#0d0d0d] p-6 shadow-2xl shadow-black/20",
        featured ? "border-white/[0.24] bg-white text-black" : "border-white/[0.08] text-white"
      )}
    >
      {featured ? <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-black/45">Most Popular</p> : null}
      <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
      <p className="mt-4 text-3xl font-semibold">{price}</p>
      <ul className={cn("mt-6 space-y-3 text-sm", featured ? "text-black/62" : "text-white/58")}>
        {lines.map((line) => (
          <li key={line} className="flex gap-2">
            <span className={cn("mt-1.5 h-1.5 w-1.5 rounded-full", featured ? "bg-black" : "bg-white/70")} />
            <span>{line}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
