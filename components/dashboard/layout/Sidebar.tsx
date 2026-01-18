export default function Sidebar() {
  return (
    <aside className="w-64 border-r bg-white">
      <div className="px-6 py-5 text-lg font-semibold text-teal-700">
        Gerbangku
      </div>

      <nav className="space-y-1 px-4 text-sm text-gray-600">
        <a className="block rounded-lg px-3 py-2 hover:bg-gray-100">
          Dashboard
        </a>
        <a className="block rounded-lg px-3 py-2 hover:bg-gray-100">
          Bisnis
        </a>
        <a className="block rounded-lg px-3 py-2 hover:bg-gray-100">
          Laporan
        </a>
        <a className="block rounded-lg px-3 py-2 hover:bg-gray-100">
          Pengaturan
        </a>
      </nav>
    </aside>
  );
}
