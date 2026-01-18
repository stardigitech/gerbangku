import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-neutral-950 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="text-lg font-semibold text-white">
              Gerbangku
            </div>
            <p className="mt-4 text-sm leading-relaxed text-neutral-400">
              Platform digital terpadu untuk membantu bisnis
              tradisional, UMKM, hingga usaha menengah berkembang
              secara modern dan terstruktur.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-sm font-medium text-white">
              Produk
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-neutral-400">
              <li>
                <Link href="#fitur" className="hover:text-white transition">
                  Fitur
                </Link>
              </li>
              <li>
                <Link href="#solusi" className="hover:text-white transition">
                  Solusi
                </Link>
              </li>
              <li>
                <Link href="#harga" className="hover:text-white transition">
                  Harga
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-medium text-white">
              Perusahaan
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-neutral-400">
              <li>
                <Link href="/tentang" className="hover:text-white transition">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="/kontak" className="hover:text-white transition">
                  Kontak
                </Link>
              </li>
              <li>
                <Link href="/kebijakan-privasi" className="hover:text-white transition">
                  Kebijakan Privasi
                </Link>
              </li>
              <li>
                <Link href="/syarat-ketentuan" className="hover:text-white transition">
                  Syarat & Ketentuan
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-medium text-white">
              Hubungi
            </h4>
            <p className="mt-4 text-sm text-neutral-400">
              Email: support@gerbangku.com
            </p>
            <p className="mt-2 text-sm text-neutral-400">
              WhatsApp: +62 xxx-xxxx-xxxx
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 border-t border-neutral-800 pt-6 text-center text-sm text-neutral-500">
          © {new Date().getFullYear()} Gerbangku. Semua hak dilindungi.
        </div>
      </div>
    </footer>
  );
}
