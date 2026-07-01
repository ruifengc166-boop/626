import { isAdminAuthDisabled } from "@/lib/admin-auth";

export default async function AdminLoginPage({ searchParams }: { searchParams: Promise<{ error?: string }> }) {
  const params = await searchParams;
  const authDisabled = isAdminAuthDisabled();

  return (
    <main className="vacat-shell admin-shell flex min-h-screen items-center px-6 pb-20">
      <section className="vacat-container relative z-10 grid gap-8 lg:grid-cols-[0.95fr_0.75fr] lg:items-center">
        <div>
          <p className="admin-kicker mb-3">VacaVaca Studio</p>
          <h1 className="admin-title">Admin Access</h1>
          <p className="admin-copy mt-5 max-w-xl">Sign in to manage studio briefs, service categories, public cases and free creative review leads.</p>
        </div>
        <div className="admin-panel rounded-[1.75rem] p-6 md:p-8">
          <h2 className="text-2xl font-semibold tracking-[-0.04em] text-white">Operations Login</h2>
          {authDisabled ? (
            <div className="mt-6 rounded-2xl border border-red-500/20 bg-red-500/10 p-4 text-sm leading-6 text-red-100">
              Admin login is disabled because the production password is not configured.
            </div>
          ) : null}
          {params.error ? (
            <div className="mt-6 rounded-2xl border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-100">
              Incorrect password.
            </div>
          ) : null}
          <form action="/api/admin/login" method="post" className="mt-8">
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-white/74">Password</span>
              <input name="password" type="password" className="input" required disabled={authDisabled} />
            </label>
            <button type="submit" disabled={authDisabled} className="admin-button-primary mt-6 disabled:cursor-not-allowed disabled:opacity-50">Login</button>
          </form>
        </div>
      </section>
    </main>
  );
}
