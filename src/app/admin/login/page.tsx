export default function AdminLoginPage() {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-md flex-col justify-center px-6 py-16">
      <h1 className="text-4xl font-semibold tracking-[-0.04em] text-white">Admin Login</h1>
      <form action="/api/admin/login" method="post" className="mt-8 rounded-[1.75rem] border border-white/[0.08] bg-[#0d0d0d] p-6 shadow-2xl shadow-black/20">
        <input name="password" type="password" className="input" required />
        <button type="submit" className="mt-6 rounded-full bg-white px-6 py-3 text-sm font-medium text-black">Login</button>
      </form>
    </main>
  );
}
