import { StartForm } from "@/app/start/StartForm";
import { listEffectiveTemplates } from "@/lib/template-admin";

export const dynamic = "force-dynamic";

export default async function StartPage() {
  const templates = (await listEffectiveTemplates()).filter((template) => template.status === "active");

  return <StartForm templates={templates} />;
}
