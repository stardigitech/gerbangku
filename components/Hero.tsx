import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="pt-36 pb-28 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#111827] to-[#0B0F14]" />

      <div className="relative mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Left content */}
        <div>
          <h1 className="text-5xl md:text-6xl font-semibold leading-tight tracking-tight">
            One Platform
            <span className="block text-gray-400">
              to Run Your Business
            </span>
          </h1>

          <p className="mt-6 text-gray-400 max-w-xl leading-relaxed">
            Gerbangku is a unified digital platform to manage your website,
            operations, and business growth — structured from day one,
            flexible across industries.
          </p>

          <div className="mt-8 flex gap-4">
            <Link
              href="#contact"
              className="rounded-xl bg-white text-black px-6 py-3 text-sm font-medium hover:bg-gray-200 transition"
            >
              Request Demo
            </Link>

            <Link
              href="#solutions"
              className="rounded-xl border border-white/20 px-6 py-3 text-sm text-gray-300 hover:bg-white/5 transition"
            >
              Explore Solutions
            </Link>
          </div>
        </div>

        {/* Right visual */}
        <div className="relative">
          <div className="absolute -inset-4 bg-white/10 blur-2xl rounded-3xl opacity-30" />

          <div className="relative rounded-2xl border border-white/10 bg-white/5 shadow-[0_30px_80px_rgba(0,0,0,0.6)] overflow-hidden">
            <Image
              src="/assets/images/hero-dashboard2-1.png"
              alt="Gerbangku platform dashboard"
              width={800}
              height={600}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}