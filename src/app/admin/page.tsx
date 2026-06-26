export default function AdminPage() {
  return (
    <main className="mx-auto max-w-[1200px] px-6 py-16">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-white/40">Internal</p>
      <h1 className="text-4xl font-semibold tracking-[-0.04em] text-white md:text-6xl">Admin Dashboard</h1>
      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {["Orders", "Templates", "Cases", "Cost Log"].map((item) => (
          <div key={item} className="rounded-[1.5rem] border border-white/[0.08] bg-[#0d0d0d] p-6 shadow-2xl shadow-black/20">
            <h2 className="text-xl font-semibold text-white">{item}</h2>
            <p className="mt-3 text-sm text-white/56">Coming in the next development step.</p>
          </div>
        ))}
      </div>
      <section className="mt-10 rounded-[1.5rem] border border-white/[0.08] bg-[#0d0d0d] p-6 shadow-2xl shadow-black/20">
        <h2 className="text-xl font-semibold text-white">Next steps</h2>
        <ul className="mt-4 space-y-2 text-sm text-white/56">
          <li>- Orders</li>
          <li>- Templates</li>
          <li>- Cases</li>
          <li>- Cost Log</li>
        </ul>
      </section>
    </main>
  );
}
