import { TemplateCard } from "@/components/TemplateCard";
import type { Template } from "@/data/templates";

export function FeaturedTemplates({ templates }: { templates: Template[] }) {
  return (
    <section className="mx-auto max-w-[1200px] px-6 py-24">
      <div className="mb-10 max-w-2xl">
        <h2 className="text-3xl font-medium tracking-[-0.035em] text-white md:text-5xl">Featured AI Ad Styles</h2>
        <p className="mt-4 text-base leading-7 text-white/60">
          Choose a ready-made video style and we will adapt it to your product.
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
