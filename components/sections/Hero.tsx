export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-neutral-950">
      {/* subtle background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/60 via-neutral-950 to-black" />
      <div className="absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 py-32 text-center">
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white">
          Satu Gerbang Digital
          <br />
          <span className="text-neutral-300">
            untuk Semua Bisnis
          </span>
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-neutral-400">
          Gerbangku membantu bisnis tradisional, UMKM, hospitality,
          hingga usaha menengah mengelola dan mengembangkan bisnis
          secara digital — sederhana, terpadu, dan siap tumbuh.
        </p>

        <div className="mt-12 flex justify-center gap-4">
          <button className="rounded-xl bg-white px-6 py-3 text-sm font-medium text-black hover:bg-neutral-200 transition">
            Mulai Gratis
          </button>

          <button className="rounded-xl border border-neutral-700 px-6 py-3 text-sm text-neutral-300 hover:border-neutral-500 transition">
            Lihat Solusi
          </button>
        </div>
      </div>
    </section>
  );
}
