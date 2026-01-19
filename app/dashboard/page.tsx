import StatCard from "@/components/dashboard/StatCard";

export default function DashboardPage() {
  return (
    <>
      <div className="grid gap-6 md:grid-cols-3">
        <StatCard title="Total Bisnis" value="1" />
        <StatCard title="Transaksi Bulan Ini" value="24" />
        <StatCard title="Pendapatan" value="Rp 2.500.000" />
      </div>

      <div className="mt-8 rounded-2xl border border-dashed border-gray-300 bg-white p-10 text-center text-gray-500">
        Area konten utama (grafik, tabel, dll)
      </div>
    </>
  );
}
