export default function DashboardPage() {
  return (
    <>
      <h1 className="text-2xl font-semibold mb-8">
        Dashboard Overview
      </h1>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">

        <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-xl p-6">
          <p className="text-gray-400 text-sm">Total Businesses</p>
          <h2 className="text-3xl font-semibold mt-2">12</h2>
        </div>

        <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-xl p-6">
          <p className="text-gray-400 text-sm">Active Modules</p>
          <h2 className="text-3xl font-semibold mt-2">4</h2>
        </div>

        <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-xl p-6">
          <p className="text-gray-400 text-sm">Monthly Revenue</p>
          <h2 className="text-3xl font-semibold mt-2">$3,240</h2>
        </div>

      </div>

      {/* Activity */}
      <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-xl">

        <h2 className="text-lg font-medium mb-6">
          Recent Activity
        </h2>

        <div className="space-y-4 text-sm text-gray-300">

          <div className="flex justify-between">
            <span>New business registered</span>
            <span className="text-gray-500">2 hours ago</span>
          </div>

          <div className="flex justify-between">
            <span>Villa booking created</span>
            <span className="text-gray-500">5 hours ago</span>
          </div>

          <div className="flex justify-between">
            <span>New website published</span>
            <span className="text-gray-500">1 day ago</span>
          </div>

        </div>

      </div>
    </>
  );
}