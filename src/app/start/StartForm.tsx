"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import type { Template } from "@/data/templates";
import { studioWorks } from "@/data/vacavaca-studio";
import { formatCurrency } from "@/lib/utils";
import type { OrderPlan } from "@/lib/order-types";

const platforms = ["TikTok", "Instagram Reels", "YouTube Shorts", "Website", "Exhibition Screen", "Event Screen", "Pitch Deck", "Brand Film", "Key Visual", "Other"];

export function StartForm({ templates }: { templates: Template[] }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialReference = searchParams.get("vacaVacaReference") || "";
  const [templateId, setTemplateId] = useState(() => searchParams.get("template") || inferTemplateIdFromReference(initialReference, templates));
  const [vacaVacaReference, setVacaVacaReference] = useState(initialReference);
  const recommendedPlan = searchParams.get("plan") || "";
  const sourceReviewId = searchParams.get("review") || "";
  const mappedOrderPlan = useMemo(() => mapRecommendedServiceToOrderPlan(recommendedPlan), [recommendedPlan]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const selectedTemplate = useMemo(
    () => templates.find((template) => template.id.toLowerCase() === templateId.toLowerCase()),
    [templateId, templates]
  );

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setError("");

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());
    payload.needHumanOptimization = formData.get("needHumanOptimization") === "on" ? "true" : "false";
    payload.needMultipleVersions = formData.get("needMultipleVersions") === "on" ? "true" : "false";

    try {
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Failed to submit brief");
      router.push(`/thank-you?order=${encodeURIComponent(result.order.id)}&template=${encodeURIComponent(String(payload.selectedTemplateId))}&brand=${encodeURIComponent(String(payload.brandName))}`);
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : "Failed to submit brief");
      setIsSubmitting(false);
    }
  }

  return (
    <main className="vacat-shell px-6 py-16 md:py-20">
      <div className="vacat-container relative z-10 max-w-5xl">
        <div className="mb-10 max-w-3xl">
          <p className="vacat-eyebrow mb-3">VacaVaca Studio Commission</p>
          <h1 className="vacat-title text-4xl font-semibold md:text-6xl">Commission a visual creative work.</h1>
          <p className="mt-5 text-lg leading-8 text-[var(--text3)]">
            Send the project background, target format, core subject and VACAT reference. VacaVaca Studio replies with the creative route, timeline and quote before payment.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="vacat-card vacat-card-glow rounded-[1.75rem] p-6 md:p-8">
          <input type="hidden" name="sourceReviewId" value={sourceReviewId} />
          <input type="hidden" name="sourceChannel" value={sourceReviewId ? "free_ad_review" : templateId ? "template" : "direct"} />
          <input type="hidden" name="plan" value={mappedOrderPlan} />
          {recommendedPlan ? <div className="mb-6 rounded-2xl border border-[rgba(202,254,97,0.18)] bg-[rgba(202,254,97,0.07)] p-4 text-sm text-[var(--text3)]">Recommended route: <span className="text-[var(--text)]">{recommendedPlan}</span></div> : null}
          {sourceReviewId ? <div className="mb-6 rounded-2xl border border-[rgba(202,254,97,0.18)] bg-[rgba(202,254,97,0.07)] p-4 text-sm text-[var(--text3)]">Source review: <span className="text-[var(--text)]">{sourceReviewId}</span></div> : null}
          {selectedTemplate ? <SelectedTemplateCard template={selectedTemplate} /> : null}
          <div className="mb-8 rounded-[1.5rem] border border-[rgba(202,254,97,0.18)] bg-[rgba(202,254,97,0.07)] p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--gold)]">VACAT reference layer</p>
            <p className="mt-3 text-sm leading-6 text-[var(--text3)]">
              VACAT is the award-backed reference system. VacaVaca Studio uses its works to understand visual ambition, creator-lane fit and production complexity.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            <Field label="Preferred Creative Direction">
              <select name="selectedTemplateId" value={templateId} onChange={(event) => setTemplateId(event.target.value)} className="input" required>
                <option value="">Select a direction</option>
                {templates.map((template) => <option key={template.id} value={template.id}>{template.title}</option>)}
              </select>
            </Field>
            <Input label="Organization / Brand / Project Name" name="brandName" required />
            <Input label="Work Title or Campaign Name" name="productName" required />
            <Input label="Project Link" name="productUrl" type="url" required />
            <Input label="Asset Links" name="productAssetLinks" placeholder="Drive, Dropbox, website, deck, references" required />
            <Input label="Identity Asset Link" name="logoAssetLinks" placeholder="Logo, event identity, visual guideline" />
            <Input label="Core Message" name="sellingPoint1" required />
            <Input label="Visual Story / Scene Direction" name="sellingPoint2" />
            <Input label="Audience or Use Scenario" name="sellingPoint3" />
            <Field label="Target Format">
              <select name="targetPlatform" className="input" required>
                {platforms.map((platform) => <option key={platform} value={platform}>{platform}</option>)}
              </select>
            </Field>
            <Field label="VACAT Work Reference">
              <select name="vacaVacaReference" className="input" value={vacaVacaReference} onChange={(event) => setVacaVacaReference(event.target.value)}>
                <option value="">Let the studio choose if useful</option>
                {studioWorks.map((work) => (
                  <option key={work.slug} value={work.slug}>{work.title}</option>
                ))}
              </select>
            </Field>
            <Input label="Target Language" name="targetLanguage" defaultValue="English" required />
            <Input label="Desired Action / Ending" name="ctaText" placeholder="Visit site / Join event / Apply / Watch full film" />
            <Input label="Contact Email" name="contactEmail" type="email" required />
            <Input label="Contact Handle" name="contactHandle" placeholder="Optional" />
            <Input label="Expected Budget" name="budgetRange" defaultValue={recommendedPlan} placeholder="$300 concept / $900 key visual / $3,500 premium visual film" />
            <Input label="Anything to Avoid" name="thingsToAvoid" />
          </div>
          <div className="mt-5 grid gap-5 md:grid-cols-2">
            <Textarea label="Creative Reference Links" name="creativeReferenceLinks" placeholder="VACAT work, competitor film, exhibition reference, mood board, video link" />
            <Textarea label="Creator / Style Fit Notes" name="creatorFitNotes" placeholder="Creator lane, visual energy, art direction, story atmosphere or event context" />
          </div>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            <label className="vacat-card flex items-center gap-3 rounded-2xl p-4 text-sm text-[var(--text3)]"><input type="checkbox" name="needHumanOptimization" />I need art-direction review</label>
            <label className="vacat-card flex items-center gap-3 rounded-2xl p-4 text-sm text-[var(--text3)]"><input type="checkbox" name="needMultipleVersions" />I need multiple visual directions</label>
          </div>
          <p className="mt-6 text-sm text-[var(--text3)]">No payment is required now. VacaVaca Studio will reply with a quote before production starts.</p>
          {error ? <div className="mt-6 rounded-2xl border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-100">{error}</div> : null}
          <button type="submit" disabled={isSubmitting} className="vacat-button-primary mt-8 px-6 py-3 text-sm disabled:cursor-not-allowed disabled:opacity-60">
            {isSubmitting ? "Submitting..." : "Submit Creative Brief"}
          </button>
        </form>
      </div>
    </main>
  );
}

function inferTemplateIdFromReference(reference: string, templates: Template[]) {
  if (!reference) return "";
  return templates.find((template) => template.slug.startsWith(reference))?.id || "";
}

function mapRecommendedServiceToOrderPlan(service: string): OrderPlan {
  switch (service) {
    case "Polished Visual":
      return "fast_human_fixed";
    case "Visual Sprint":
      return "multi_version";
    case "Launch-Grade":
      return "premium_creator";
    case "Founder Pilot":
    case "Direction Draft":
      return "auto_remix_draft";
    default:
      return "not_sure";
  }
}

function SelectedTemplateCard({ template }: { template: Template }) {
  return (
    <div className="vacat-card mb-8 grid gap-5 rounded-[1.5rem] p-4 md:grid-cols-[160px_1fr]">
      <img src={template.thumbnailUrl} alt={template.title} className="aspect-[9/12] w-full rounded-[1rem] object-cover" />
      <div className="flex flex-col justify-center">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--gold)]">Selected creative direction</p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[var(--text)]">{template.title}</h2>
        <div className="mt-4 flex flex-wrap gap-2 text-sm text-[var(--text3)]">
          <span className="vacat-chip rounded-full px-3 py-1">VACAT-inspired</span>
          <span className="vacat-chip rounded-full px-3 py-1">From {formatCurrency(template.priceFrom)}</span>
        </div>
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return <label className="block"><span className="mb-2 block text-sm font-medium text-[var(--text2)]">{label}</span>{children}</label>;
}

function Input({ label, ...props }: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return <Field label={label}><input {...props} className="input" /></Field>;
}

function Textarea({ label, ...props }: React.TextareaHTMLAttributes<HTMLTextAreaElement> & { label: string }) {
  return <Field label={label}><textarea {...props} className="input min-h-28" /></Field>;
}
