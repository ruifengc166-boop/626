export function SectionHeader({ eyebrow, title, description }: { eyebrow?: string; title: string; description?: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow ? <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-white/40">{eyebrow}</p> : null}
      <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-7 text-white/60 md:text-lg">{description}</p> : null}
    </div>
  );
}
