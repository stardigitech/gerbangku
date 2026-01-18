export default function CTA() {
  return (
    <section className="bg-neutral-950 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900 px-8 py-16 text-center">
          {/* subtle glow */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent" />

          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            Siap Membawa Bisnis Anda ke Tahap Berikutnya?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-neutral-400">
            Mulai digitalisasi bisnis Anda bersama Gerbangku.
            Sederhana untuk digunakan, fleksibel untuk berkembang.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <button className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-blue-500 transition">
              Mulai Gratis
            </button>
            <button className="rounded-xl border border-neutral-700 px-6 py-3 text-sm text-neutral-300 hover:border-neutral-500 transition">
              Konsultasi
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
