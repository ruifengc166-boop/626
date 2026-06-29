"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const platforms = ["TikTok", "Instagram Reels", "YouTube Shorts", "Website", "Event Screen", "Exhibition", "Other"];

export default function FreeAdReviewPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setError("");

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/ad-review", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Failed to generate review");
      router.push(`/ad-review/${encodeURIComponent(result.reviewId)}`);
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : "Failed to generate review");
      setIsSubmitting(false);
    }
  }

  return (
    <main className="vacat-shell px-6 py-16">
      <section className="vacat-container relative z-10 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div className="pt-6">
          <p className="vacat-eyebrow mb-4">Instant Creative Review</p>
          <h1 className="vacat-title text-4xl font-semibold md:text-6xl">Review a visual work before commissioning production.</h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-[var(--text3)]">
            Paste a current video, concept, mood reference or draft visual. The review checks hook, clarity, pacing, visual consistency and fit for the intended format.
          </p>
          <div className="mt-8 grid max-w-xl gap-3 sm:grid-cols-3">
            <Badge title="Instant result" body="Opens next page" />
            <Badge title="Creative only" body="No media-buying claims" />
            <Badge title="Studio path" body="Can become a brief" />
          </div>
        </div>

        <form onSubmit={handleSubmit} className="vacat-card rounded-[28px] p-6 md:p-8">
          <div className="mb-6 rounded-2xl border border-[rgba(202,254,97,0.18)] bg-[rgba(202,254,97,0.07)] p-4 text-sm leading-6 text-[var(--text3)]">
            After submission, VacaVaca Studio generates the review and opens the result page directly.
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            <Input label="Video / Draft / Reference Link" name="adUrl" type="url" placeholder="TikTok, Reels, YouTube, Drive, Dropbox..." required />
            <Input label="Project Name" name="productName" required />
            <Input label="Project Category" name="productCategory" placeholder="film, event, city, game, exhibition, product, music..." />
            <Field label="Target Format">
              <select name="targetPlatform" className="input" required defaultValue="TikTok">
                {platforms.map((platform) => <option key={platform} value={platform}>{platform}</option>)}
              </select>
            </Field>
            <Input label="Creative Goal" name="campaignGoal" placeholder="launch film / exhibition visual / event teaser / concept pitch" required />
            <Input label="Email to Save Review" name="contactEmail" type="email" placeholder="Used to save the review and follow up if needed" required />
          </div>
          <div className="mt-5 grid gap-5">
            <Field label="What worries you about this visual work?">
              <textarea name="currentConcern" className="input min-h-28" placeholder="Example: The concept is strong but the pacing and visual hierarchy feel weak." />
            </Field>
            <Field label="Caption, voiceover, story outline or rough transcript">
              <textarea name="transcriptOrCaption" className="input min-h-32" placeholder="Paste the caption, voiceover, subtitles, story outline or script if available." />
            </Field>
          </div>
          <p className="mt-5 text-sm leading-6 text-[var(--text3)]">
            This is a creative review only. It does not predict conversion rate, distribution performance or media results.
          </p>
          {error ? <div className="mt-5 rounded-2xl border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-100">{error}</div> : null}
          <button type="submit" disabled={isSubmitting} className="vacat-button-primary mt-7 px-6 py-3 text-sm disabled:cursor-not-allowed disabled:opacity-60">
            {isSubmitting ? "Generating review..." : "Generate Creative Review"}
          </button>
        </form>
      </section>
    </main>
  );
}

function Badge({ title, body }: { title: string; body: string }) {
  return (
    <div className="vacat-card rounded-2xl p-4">
      <p className="text-sm font-medium text-[var(--text)]">{title}</p>
      <p className="mt-1 text-xs text-[var(--text3)]">{body}</p>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return <label className="block"><span className="mb-2 block text-sm font-medium text-[var(--text2)]">{label}</span>{children}</label>;
}

function Input({ label, ...props }: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return <Field label={label}><input {...props} className="input" /></Field>;
}
