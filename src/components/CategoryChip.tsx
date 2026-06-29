export function CategoryChip({ children }: { children: React.ReactNode }) {
  return (
    <span className="vacat-chip rounded-full px-2.5 py-1 text-xs">
      {children}
    </span>
  );
}
