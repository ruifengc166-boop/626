import { isAdminAuthDisabled } from "@/lib/admin-auth";

export default async function AdminLoginPage({ searchParams }: { searchParams: Promise<{ error?: string }> }) {
  const params = await searchParams;
  const authDisabled = isAdminAuthDisabled();

  return (
    <main className="mx-auto flex min-h-[70vh] max-w-md flex-col justify-center px-6 py-16">
      <h1 className="text-4xl font-semibold tracking-[-0.04em] text-white">Admin Login</h1>
      {authDisabled ? (
        <div className="mt-6 rounded-2xl border border-red-500/20 bg-red-500/10 p-4 text-sm leading-6 text-red-100">
          Admin login is disabled because `ADMIN_PASSWORD` is not configured for production. Set a strong password in the deployment environment, then redeploy.
        </div>
      ) : null}
      {params.error ? (
        <div className="mt-6 rounded-2xl border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-100">
          Incorrect password.
        </div>
      ) : null}
      <form action="/api/admin/login" method="post" className="mt-8 rounded-[1.75rem] border border-white/[0.08] bg-[#0d0d0d] p-6 shadow-2xl shadow-black/20">
        <input name="password" type="password" className="input" required disabled={authDisabled} />
        <button type="submit" disabled={authDisabled} className="mt-6 rounded-full bg-white px-6 py-3 text-sm font-medium text-black disabled:cursor-not-allowed disabled:opacity-50">Login</button>
      </form>
    </main>
  );
}
