export default function Features() {
  return (
    <section id="fitur" className="bg-white py-32">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-20 text-center">
          <h2 className="text-3xl font-semibold text-gray-900">
            Fitur Inti Gerbangku
          </h2>
          <p className="mt-4 text-gray-600">
            Dirancang untuk mendukung pertumbuhan bisnis Anda.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-3">
          {/* card */}
          <div className="rounded-2xl border border-gray-200 p-10">
            <h3 className="text-lg font-medium text-gray-900">
              Manajemen Operasional
            </h3>
            <p className="mt-4 text-gray-600">
              Kelola aktivitas bisnis harian secara terstruktur dan efisien.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 p-10">
            <h3 className="text-lg font-medium text-gray-900">
              Pelanggan & Transaksi
            </h3>
            <p className="mt-4 text-gray-600">
              Data pelanggan dan transaksi tersimpan rapi dalam satu sistem.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 p-10">
            <h3 className="text-lg font-medium text-gray-900">
              Laporan & Insight
            </h3>
            <p className="mt-4 text-gray-600">
              Pantau performa bisnis melalui laporan yang mudah dipahami.
            </p>
          </div>
        </div>
      </div>
    </section>

  );
}
