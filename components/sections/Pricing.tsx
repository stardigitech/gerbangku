export default function Pricing() {
  return (
    <section
      id="harga"
      className="bg-gray-50 py-32"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-brand/10 px-4 py-1 text-sm font-medium text-brand">
            Harga Transparan
          </span>

          <h2 className="mt-6 text-3xl md:text-4xl font-semibold text-gray-900">
            Paket yang Tumbuh Bersama Bisnis Anda
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Mulai gratis, upgrade kapan saja sesuai kebutuhan bisnis Anda.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-10 md:grid-cols-3">

          {/* Starter */}
          <div className="rounded-2xl border border-gray-200 bg-white p-10">
            <h3 className="text-lg font-medium text-gray-900">
              Starter
            </h3>

            <p className="mt-2 text-gray-600">
              Untuk bisnis kecil & tahap awal.
            </p>

            <div className="mt-6 text-4xl font-semibold text-gray-900">
              Gratis
            </div>

            <ul className="mt-8 space-y-3 text-gray-600">
              <li>✔ 1 bisnis</li>
              <li>✔ Manajemen dasar</li>
              <li>✔ Laporan sederhana</li>
            </ul>

            <button className="mt-10 w-full rounded-xl border border-gray-300 py-3 text-sm font-medium">
              Mulai Gratis
            </button>
          </div>

          {/* Business (highlight) */}
          <div className="relative rounded-2xl border-2 border-brand bg-white p-10 shadow-sm">
            <span className="absolute -top-3 right-6 rounded-full bg-brand px-3 py-1 text-xs font-medium text-white">
              Paling Populer
            </span>

            <h3 className="text-lg font-medium text-gray-900">
              Business
            </h3>

            <p className="mt-2 text-gray-600">
              Untuk UMKM yang ingin tumbuh.
            </p>

            <div className="mt-6 text-4xl font-semibold text-gray-900">
              Rp149.000
              <span className="text-base font-normal text-gray-600">
                /bulan
              </span>
            </div>

            <ul className="mt-8 space-y-3 text-gray-600">
              <li>✔ Hingga 3 bisnis</li>
              <li>✔ Semua fitur inti</li>
              <li>✔ Laporan lengkap</li>
              <li>✔ Support prioritas</li>
            </ul>

            <button className="mt-10 w-full rounded-xl bg-brand py-3 text-sm font-medium text-white">
              Mulai Trial
            </button>
          </div>

          {/* Pro */}
          <div className="rounded-2xl border border-gray-200 bg-white p-10">
            <h3 className="text-lg font-medium text-gray-900">
              Pro / Hospitality
            </h3>

            <p className="mt-2 text-gray-600">
              Untuk hotel, villa, dan bisnis menengah.
            </p>

            <div className="mt-6 text-4xl font-semibold text-gray-900">
              Custom
            </div>

            <ul className="mt-8 space-y-3 text-gray-600">
              <li>✔ Multi properti</li>
              <li>✔ Modul hospitality</li>
              <li>✔ Integrasi lanjutan</li>
              <li>✔ Dedicated support</li>
            </ul>

            <button className="mt-10 w-full rounded-xl border border-gray-300 py-3 text-sm font-medium">
              Hubungi Kami
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
