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
              className="
                rounded-xl bg-white text-black
                px-6 py-3 text-sm font-medium
                hover:bg-gray-200 transition
              "
            >
              Request Demo
            </Link>

            <Link
              href="#solutions"
              className="
                rounded-xl border border-white/20
                px-6 py-3 text-sm text-gray-300
                hover:bg-white/5 transition
              "
            >
              Explore Solutions
            </Link>
          </div>
        </div>

        {/* Right visual */}
        <div className="relative">
          <div
            className="
              aspect-[4/3] rounded-2xl
              bg-gradient-to-br from-white/10 to-white/5
              border border-white/10
              shadow-2xl
            "
          />
        </div>
      </div>
    </section>
  );
}