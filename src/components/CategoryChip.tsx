export function CategoryChip({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-white/[0.1] bg-white/[0.04] px-2.5 py-1 text-xs text-white/58">
      {children}
    </span>
  );
}
