import { SectionHeader } from "@/components/SectionHeader";
import { TemplateGrid } from "@/components/TemplateGrid";
import { templates } from "@/data/templates";

export default function TemplatesPage() {
  const activeTemplates = templates.filter((template) => template.status === "active");

  return (
    <main className="px-5 py-16 md:py-20">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeader
          eyebrow="Template Library"
          title="Choose an AI Ad Style"
          description="Select a ready-made video ad style and we will adapt it to your product."
        />
        <div className="mt-12">
          <TemplateGrid templates={activeTemplates} />
        </div>
      </div>
    </main>
  );
}
