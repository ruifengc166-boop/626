import Link from "next/link";

export default async function ThankYouPage({ searchParams }: { searchParams: Promise<{ order?: string; template?: string; brand?: string }> }) {
  const params = await searchParams;
  const order = params.order;
  const template = params.template;
  const brand = params.brand;

  return (
    <main className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-6 text-center">
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-white/40">Submitted</p>
      <h1 className="text-4xl font-semibold tracking-[-0.04em] text-white md:text-6xl">Thanks. Your request has been submitted.</h1>
      <p className="mt-5 text-lg leading-8 text-white/60">
        We will review whether the selected video style fits your product and contact you with the next step.
      </p>
      {order || template || brand ? (
        <div className="mt-8 rounded-[1.5rem] border border-white/[0.08] bg-white/[0.04] px-5 py-4 text-sm text-white/62">
          {order ? <p>Order ID: <span className="text-white">{order}</span></p> : null}
          {template ? <p className="mt-1">Selected style: <span className="text-white">{template}</span></p> : null}
          {brand ? <p className="mt-1">Brand: <span className="text-white">{brand}</span></p> : null}
        </div>
      ) : null}
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/templates" className="rounded-full border border-white/10 bg-white/[0.06] px-6 py-3 text-sm font-medium text-white transition hover:border-white/25 hover:bg-white/[0.1]">
          Browse More Styles
        </Link>
        <Link href="/" className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/85">
          Back Home
        </Link>
      </div>
    </main>
  );
}
