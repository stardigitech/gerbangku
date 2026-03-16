import Metrics from "@/components/dashboard/Metrics";
import RevenueChart from "@/components/dashboard/RevenueChart";
import RecentActivity from "@/components/dashboard/RecentActivity";
import QuickActions from "@/components/dashboard/QuickActions";

export default function DashboardPage() {

  return (
    <div className="space-y-6">

      <Metrics />

      <div className="grid gap-6 lg:grid-cols-3">

        <div className="lg:col-span-2">
          <RevenueChart />
        </div>

        <RecentActivity />

      </div>

      <QuickActions />

    </div>
  );
}