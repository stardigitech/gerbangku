export default function Topbar() {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-6">
      <h1 className="text-lg font-semibold text-gray-800">
        Dashboard
      </h1>

      <div className="flex items-center gap-4 text-sm text-gray-600">
        <span>Adi</span>
        <div className="h-8 w-8 rounded-full bg-gray-300" />
      </div>
    </header>
  );
}
