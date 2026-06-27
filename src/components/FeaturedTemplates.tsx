import { TemplateCard } from "@/components/TemplateCard";
import type { Template } from "@/data/templates";

export function FeaturedTemplates({ templates }: { templates: Template[] }) {
  return (
    <section className="mx-auto max-w-[1200px] px-6 py-24">
      <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-white/38">Ad styles by goal</p>
          <h2 className="text-3xl font-medium tracking-[-0.035em] text-white md:text-5xl">Choose the look your product needs.</h2>
          <p className="mt-4 text-base leading-7 text-white/60">
            Product demo, UGC hook, app walkthrough, premium launch or game teaser — start from the format closest to your campaign goal.
          </p>
        </div>
        <p className="max-w-sm text-sm leading-6 text-white/42">
          Each style can be adapted with your product visuals, logo, captions, offer and call-to-action.
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
