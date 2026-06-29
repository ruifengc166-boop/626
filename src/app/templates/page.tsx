import { SectionHeader } from "@/components/SectionHeader";
import { TemplateGrid } from "@/components/TemplateGrid";
import { vacaVacaSupport } from "@/data/vacavaca-support";
import { listEffectiveTemplates } from "@/lib/template-admin";

export const dynamic = "force-dynamic";

export default async function TemplatesPage() {
  const templates = await listEffectiveTemplates();
  const activeTemplates = templates.filter((template) => template.status === "active");

  return (
    <main className="px-5 py-16 md:py-20">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeader
          eyebrow="Template Library"
          title="Choose an AI Ad Style"
          description="Select a ready-made video ad style and we will adapt it to your product. VacaVaca references can guide taste and creator-lane fit, but the order still enters one studio-reviewed production flow."
        />

        <div className="mt-10 grid gap-3 md:grid-cols-4">
          {vacaVacaSupport.caseReferences.map((reference) => (
            <div key={reference.id} className="rounded-2xl border border-white/[0.08] bg-white/[0.035] p-4">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-white/34">{reference.lane}</p>
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
