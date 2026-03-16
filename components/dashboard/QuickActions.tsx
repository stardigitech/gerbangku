import Card from "../ui/Card";

export default function QuickActions() {
  return (
     <Card>

      <h3 className="text-lg font-semibold mb-4">
        Quick Actions
      </h3>

      <div className="flex gap-3">

        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm">
          Add Business
        </button>

        <button className="px-4 py-2 bg-slate-100 rounded-lg text-sm">
          Create Website
        </button>

        <button className="px-4 py-2 bg-slate-100 rounded-lg text-sm">
          New Booking
        </button>

      </div>

    </Card>
  );
}