export function SectionHeader({ eyebrow, title, description }: { eyebrow?: string; title: string; description?: string }) {
  return (
    <div className="mx-auto max-w-4xl text-center">
      {eyebrow ? <p className="vacat-eyebrow mb-4">{eyebrow}</p> : null}
      <h2 className="vacat-title text-3xl font-semibold md:text-5xl">{title}</h2>
      {description ? <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-white/58 md:text-lg">{description}</p> : null}
    </div>
  );
}
