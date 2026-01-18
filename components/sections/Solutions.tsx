export default function Solutions() {
  return (
    <section id="solusi" className="bg-neutral-950 py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            Solusi untuk Semua Jenis Bisnis
          </h2>
          <p className="mt-4 text-neutral-400">
            Dari bisnis tradisional hingga usaha menengah,
            Gerbangku membantu Anda mengelola dan mengembangkan
            bisnis secara digital.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Bisnis Tradisional",
              desc: "Digitalisasi pencatatan, laporan, dan operasional tanpa mengubah cara kerja utama.",
            },
            {
              title: "UMKM",
              desc: "Kelola order, pelanggan, dan laporan bisnis dalam satu sistem terpadu.",
            },
            {
              title: "Hospitality",
              desc: "Manajemen booking, operasional, dan channel online untuk properti Anda.",
            },
            {
              title: "Usaha Menengah",
              desc: "Kontrol bisnis multi-cabang dengan dashboard terpusat dan aman.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6 transition hover:border-neutral-700"
            >
              <h3 className="text-lg font-medium text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-400">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
