import { SectionHeader } from "@/components/SectionHeader";
import { TemplateGrid } from "@/components/TemplateGrid";
import { listEffectiveTemplates } from "@/lib/template-admin";

export const dynamic = "force-dynamic";

export default async function TemplatesPage() {
  const templates = await listEffectiveTemplates();
  const activeTemplates = templates.filter((template) => template.status === "active");

  return (
    <main className="vacat-shell px-5 py-16 md:py-20">
      <div className="vacat-container relative z-10">
        <SectionHeader
          eyebrow="VacaVaca Studio Creative Directions"
          title="Choose the type of visual work you want to commission"
          description="Creative Directions are service lanes, not an award archive. Each lane is inspired by selected VACAT works and adapted for commercial commissioning."
        />

        <div className="mt-12">
          <TemplateGrid templates={activeTemplates} />
        </div>
      </div>
    </main>
  );
}
