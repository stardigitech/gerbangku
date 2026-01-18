export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-gray-800">
          Ringkasan
        </h2>
        <p className="text-sm text-gray-500">
          Overview aktivitas bisnis Anda
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {["Bisnis Aktif", "Transaksi", "Pendapatan"].map(
          (item) => (
            <div
              key={item}
              className="rounded-xl border bg-white p-6"
            >
              <p className="text-sm text-gray-500">{item}</p>
              <p className="mt-2 text-2xl font-semibold">
                —
              </p>
            </div>
          )
        )}
      </div>
    </div>
  );
}
