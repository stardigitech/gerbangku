export default function Topbar() {
  return (
    <header className="flex items-center justify-between border-b border-gray-200 bg-white px-6 py-4">
      <h1 className="text-lg font-semibold text-gray-900">
        Dashboard
      </h1>

      <div className="flex items-center gap-4">
        <button className="rounded-lg border border-gray-300 px-3 py-1 text-sm">
          Trial
        </button>
        <div className="h-8 w-8 rounded-full bg-gray-200" />
      </div>
    </header>
  );
}
