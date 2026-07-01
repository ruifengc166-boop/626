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
          eyebrow="VacaVaca Studio Services"
          title="Choose the type of original visual work you want to commission"
          description="These are service categories for new studio production. Select the output you need, then submit a brief with your approved materials and references."
        />

        <div className="mt-12">
          <TemplateGrid templates={activeTemplates} />
        </div>
      </div>
    </main>
  );
}
