"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const platforms = ["TikTok", "Instagram Reels", "YouTube Shorts", "Meta Ads", "Other"];

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
    <main className="mx-auto max-w-6xl px-6 py-16">
      <section className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div className="pt-6">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-white/40">Instant Free Ad Review</p>
          <h1 className="text-4xl font-semibold tracking-[-0.045em] text-white md:text-6xl">Generate your ad review now.</h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-white/60">
            Paste your current ad or video link. Your creative review opens immediately on the next page, with checks on hook, product clarity, pacing, captions and CTA.
          </p>
          <div className="mt-8 grid max-w-xl gap-3 sm:grid-cols-3">
            <Badge title="Instant result" body="Opens next page" />
            <Badge title="Email saved" body="Not required to wait" />
            <Badge title="Creative only" body="No ROAS claims" />
          </div>
          <p className="mt-5 max-w-xl text-sm leading-6 text-white/42">
            Email is used to save the review record and contact you only if you request production. The review itself is not delayed for email delivery.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="rounded-[28px] border border-white/[0.08] bg-[#0d0d0d] p-6 shadow-2xl shadow-black/20 md:p-8">
          <div className="mb-6 rounded-2xl border border-white/[0.08] bg-white/[0.04] p-4 text-sm leading-6 text-white/58">
            After you submit, we generate the review and take you directly to the result page.
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            <Input label="Ad or Video Link" name="adUrl" type="url" placeholder="TikTok, Reels, YouTube, Drive, Dropbox..." required />
            <Input label="Product Name" name="productName" required />
            <Input label="Product Category" name="productCategory" placeholder="Skincare, app, game, gadget..." />
            <Field label="Target Platform">
              <select name="targetPlatform" className="input" required defaultValue="TikTok">
                {platforms.map((platform) => <option key={platform} value={platform}>{platform}</option>)}
              </select>
            </Field>
            <Input label="Campaign Goal" name="campaignGoal" placeholder="More clicks / app installs / product launch" required />
            <Input label="Email to Save Review" name="contactEmail" type="email" placeholder="Used to save the review and follow up if needed" required />
          </div>
          <div className="mt-5 grid gap-5">
            <Field label="What worries you about this ad?">
              <textarea name="currentConcern" className="input min-h-28" placeholder="Example: It looks good but the first 3 seconds feel weak." />
            </Field>
            <Field label="Caption, voiceover, or rough transcript">
              <textarea name="transcriptOrCaption" className="input min-h-32" placeholder="Paste the ad caption, voiceover, subtitles or script if available. This makes the review more accurate." />
            </Field>
          </div>
          <p className="mt-5 text-sm leading-6 text-white/42">
            This is a creative review only. It does not predict ROAS, conversion rate or campaign performance.
          </p>
          {error ? <div className="mt-5 rounded-2xl border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-100">{error}</div> : null}
          <button type="submit" disabled={isSubmitting} className="mt-7 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/85 disabled:cursor-not-allowed disabled:opacity-60">
            {isSubmitting ? "Generating review..." : "Generate Instant Review"}
          </button>
        </form>
      </section>
    </main>
  );
}

function Badge({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-white/[0.08] bg-white/[0.04] p-4">
      <p className="text-sm font-medium text-white">{title}</p>
      <p className="mt-1 text-xs text-white/46">{body}</p>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return <label className="block"><span className="mb-2 block text-sm font-medium text-white/74">{label}</span>{children}</label>;
}

function Input({ label, ...props }: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return <Field label={label}><input {...props} className="input" /></Field>;
}
