import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-4 flex h-14 items-center justify-between rounded-2xl border border-neutral-800 bg-neutral-900/70 px-6 backdrop-blur">
          {/* Logo */}
          <Link href="/" className="text-sm font-semibold text-white">
            Gerbangku
          </Link>

          {/* Menu */}
          <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-300">
            <Link href="#fitur" className="hover:text-white transition">
              Fitur
            </Link>
            <Link href="#solusi" className="hover:text-white transition">
              Solusi
            </Link>
            <Link href="#harga" className="hover:text-white transition">
              Harga
            </Link>
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-4">
            <Link
              href="/login"
              className="text-sm text-neutral-300 hover:text-white transition"
            >
              Masuk
            </Link>
            <Link
              href="/daftar"
              className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-black hover:bg-neutral-200 transition"
            >
              Mulai
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
