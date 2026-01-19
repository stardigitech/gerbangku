export default function Sidebar() {
  return (
    <aside className="hidden lg:flex w-64 flex-col border-r border-gray-200 bg-white">
      <div className="px-6 py-6 text-lg font-semibold text-gray-900">
        Gerbangku
      </div>

      <nav className="flex-1 px-4 space-y-1 text-sm text-gray-600">
        <a className="flex items-center rounded-lg bg-gray-100 px-3 py-2 text-gray-900">
          Dashboard
        </a>
        <a className="flex items-center rounded-lg px-3 py-2 hover:bg-gray-100">
          Bisnis
        </a>
        <a className="flex items-center rounded-lg px-3 py-2 hover:bg-gray-100">
          Transaksi
        </a>
        <a className="flex items-center rounded-lg px-3 py-2 hover:bg-gray-100">
          Laporan
        </a>
        <a className="flex items-center rounded-lg px-3 py-2 hover:bg-gray-100">
          Pengaturan
        </a>
      </nav>
    </aside>
  );
}
