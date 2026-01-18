export default function Features() {
  return (
    <section id="fitur" className="bg-neutral-950 py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            Fitur yang Membantu Bisnis Anda Tumbuh
          </h2>
          <p className="mt-4 text-neutral-400">
            Gerbangku menyediakan fitur inti yang dibutuhkan
            untuk mengelola operasional bisnis secara modern,
            tanpa kompleksitas berlebihan.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Manajemen Operasional",
              desc: "Kelola aktivitas bisnis harian dengan sistem yang rapi dan terstruktur.",
            },
            {
              title: "Pencatatan & Laporan",
              desc: "Pantau performa bisnis melalui laporan yang mudah dipahami dan akurat.",
            },
            {
              title: "Manajemen Pelanggan",
              desc: "Simpan dan kelola data pelanggan untuk meningkatkan pelayanan.",
            },
            {
              title: "Booking & Order",
              desc: "Kelola pemesanan dan transaksi secara terpusat dan real-time.",
            },
            {
              title: "Multi-Perangkat",
              desc: "Akses Gerbangku dari desktop, tablet, atau smartphone kapan saja.",
            },
            {
              title: "Siap Dikembangkan",
              desc: "Fitur modular yang dapat disesuaikan dengan kebutuhan bisnis Anda.",
            },
          ].map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6 transition hover:border-neutral-700"
            >
              <h3 className="text-lg font-medium text-white">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-400">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
