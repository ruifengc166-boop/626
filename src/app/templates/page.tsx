import { SectionHeader } from "@/components/SectionHeader";
import { TemplateGrid } from "@/components/TemplateGrid";
import { listEffectiveTemplates } from "@/lib/template-admin";

export const dynamic = "force-dynamic";

export default async function TemplatesPage() {
  const templates = await listEffectiveTemplates();
  const activeTemplates = templates.filter((template) => template.status === "active");

  return (
    <main className="px-5 py-16 md:py-20">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeader
          eyebrow="VACAVACA Style Library"
          title="Choose an Ad Remix Style"
          description="Select a reusable visual direction inspired by creator-network output. Ad Remix Studio will adapt it to your product assets, platform and market."
        />
        <div className="mt-12">
          <TemplateGrid templates={activeTemplates} />
        </div>
      </div>
    </main>
  );
}
