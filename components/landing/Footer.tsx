import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0B0F14] text-gray-400">
      <div className="mx-auto max-w-7xl px-6 py-20 grid gap-16 md:grid-cols-4">

        {/* Brand */}
        <div>
          <div className="text-lg font-semibold text-white">Gerbangku</div>
          <p className="mt-4 text-sm leading-relaxed max-w-sm">
            A unified digital platform to manage websites, operations,
            and workflows for modern businesses across industries.
          </p>
          <p className="mt-4 text-xs uppercase tracking-wide text-gray-500">
            Built for scale • Modular • Secure
          </p>
        </div>

        {/* Product */}
        <div>
          <p className="text-sm font-medium text-white">Product</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href="#features" className="hover:text-white transition">
                Core Capabilities
              </Link>
            </li>
            <li>
              <Link href="#solutions" className="hover:text-white transition">
                Solutions by Industry
              </Link>
            </li>
            <li>
              <Link href="#how-it-works" className="hover:text-white transition">
                How It Works
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:text-white transition">
                Request Demo
              </Link>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <p className="text-sm font-medium text-white">Company</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href="/about" className="hover:text-white transition">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition">
                Contact
              </Link>
            </li>
            <li>
              <span className="text-gray-500">Careers (Coming Soon)</span>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <p className="text-sm font-medium text-white">Legal</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href="/privacy-policy" className="hover:text-white transition">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms-of-service" className="hover:text-white transition">
                Terms of Service
              </Link>
            </li>
            <li className="text-gray-500">
              Security & Compliance
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col md:flex-row gap-4 justify-between text-xs text-gray-500">
          <span>
            © {new Date().getFullYear()} Gerbangku. All rights reserved.
          </span>
          <span>
            Early Access Platform · Designed in Indonesia
          </span>
        </div>
      </div>
    </footer>
  );
}