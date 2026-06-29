import { SectionHeader } from "@/components/SectionHeader";
import { TemplateGrid } from "@/components/TemplateGrid";
import { vacaVacaSupport } from "@/data/vacavaca-support";
import { listEffectiveTemplates } from "@/lib/template-admin";

export const dynamic = "force-dynamic";

export default async function TemplatesPage() {
  const templates = await listEffectiveTemplates();
  const activeTemplates = templates.filter((template) => template.status === "active");

  return (
    <main className="vacat-shell px-5 py-16 md:py-20">
      <div className="vacat-container relative z-10">
        <SectionHeader
          eyebrow="VacaVaca Style Library"
          title="Choose an AI visual remix direction"
          description="Select a product-ad style backed by VacaVaca works, creator lanes and award-grade visual references. Every style still flows into one studio-reviewed production process."
        />

        <div className="mt-10 grid gap-3 md:grid-cols-4">
          {vacaVacaSupport.caseReferences.map((reference) => (
            <div key={reference.id} className="vacat-card vacat-card-glow rounded-2xl p-4">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-lime-200">{reference.lane}</p>
              <h2 className="mt-3 text-base font-semibold tracking-[-0.03em] text-white">{reference.title}</h2>
              <p className="mt-3 text-xs leading-5 text-white/44">{reference.signal}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <TemplateGrid templates={activeTemplates} />
        </div>
      </div>
    </main>
  );
}
