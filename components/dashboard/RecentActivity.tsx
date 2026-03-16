import Card from "../ui/Card";

export default function RecentActivity() {
  return (
    <Card>

      <h3 className="text-lg font-semibold mb-4">
        Recent Activity
      </h3>

      <ul className="space-y-3 text-sm">

        <li className="text-slate-600">
          New booking received
        </li>

        <li className="text-slate-600">
          Website published
        </li>

        <li className="text-slate-600">
          New business created
        </li>

      </ul>

    </Card>
  );
}