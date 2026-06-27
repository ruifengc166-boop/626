import { TemplateCard } from "@/components/TemplateCard";
import type { Template } from "@/data/templates";

export function FeaturedTemplates({ templates }: { templates: Template[] }) {
  return (
    <section className="mx-auto max-w-[1200px] px-6 py-24">
      <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-white/38">Ad styles for testing</p>
          <h2 className="text-3xl font-medium tracking-[-0.035em] text-white md:text-5xl">Pick the ad format closest to your sales goal.</h2>
          <p className="mt-4 text-base leading-7 text-white/60">
            Product demo, UGC hook, app workflow, premium launch, game wishlist or social offer — choose the format that best matches what you want customers to do.
          </p>
        </div>
        <p className="max-w-sm text-sm leading-6 text-white/42">
          These are starting points for faster ad production, not generic video templates.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {templates.map((template) => (
          <TemplateCard key={template.id} template={template} />
        ))}
      </div>
    </section>
  );
}
