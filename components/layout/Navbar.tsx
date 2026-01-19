export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-6 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between rounded-2xl bg-white/80 px-6 py-3 shadow-sm backdrop-blur ring-1 ring-black/5">

          {/* Logo */}
          <div className="font-jakarta text-lg font-bold text-slate-900">
            Gerbangku
          </div>

          {/* Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#fitur" className="hover:text-slate-900 transition">
              Fitur
            </a>
            <a href="#solusi" className="hover:text-slate-900 transition">
              Solusi
            </a>
            <a href="#harga" className="hover:text-slate-900 transition">
              Harga
            </a>
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-4">
            <a
              href="/login"
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition"
            >
              Masuk
            </a>

            <a
              href="/register"
              className="inline-flex items-center rounded-xl bg-accent px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 transition"
            >
              Mulai
            </a>
          </div>

        </div>
      </div>
    </header>
  );
}
