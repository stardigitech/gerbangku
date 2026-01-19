export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-bg">
      <div className="mx-auto max-w-7xl px-6 pt-44 pb-32 text-center">

        {/* Badge */}
        <span className="inline-flex items-center rounded-full bg-accent/10 px-4 py-1 text-sm font-medium text-accent">
          Platform Digital Terpadu
        </span>

        {/* Heading */}
        <h1 className="mt-8 text-4xl md:text-5xl font-bold tracking-tight text-primary">
          Satu Platform untuk
          <br className="hidden md:block" />
          Mengelola Semua Bisnis Anda
        </h1>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted">
          Gerbangku membantu bisnis tradisional, UMKM, hingga hospitality
          beroperasi lebih rapi, efisien, dan terukur.
        </p>

        {/* CTA */}
        <div className="mt-10 flex justify-center gap-4">
          <button className="rounded-xl bg-accent px-6 py-3 text-base font-semibold text-white shadow-soft hover:opacity-90">
            Mulai Gratis
          </button>

          <button className="rounded-xl border border-muted/30 px-6 py-3 text-base font-medium text-primary hover:bg-bg">
            Lihat Demo
          </button>
        </div>

      </div>
    </section>
  );
}
