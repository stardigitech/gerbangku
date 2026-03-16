import { Building2, Globe, Calendar, DollarSign } from "lucide-react";
import Card from "../ui/Card";

export default function Metrics() {

  const metrics = [
    { name: "Total Businesses", value: "12", growth: "+12%", icon: Building2 },
    { name: "Active Websites", value: "8", growth: "+4%", icon: Globe },
    { name: "Bookings Today", value: "23", growth: "+18%", icon: Calendar },
    { name: "Monthly Revenue", value: "$3,240", growth: "+9%", icon: DollarSign },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      {metrics.map((item, i) => {

        const Icon = item.icon;

        return (
          <Card key={i}>

            <div className="flex justify-between items-center">

              <div>
                <p className="text-sm text-slate-500">
                  {item.name}
                </p>

                <h2 className="text-3xl font-semibold mt-2">
                  {item.value}
                </h2>

                <p className="text-green-600 text-sm mt-1">
                  {item.growth} this month
                </p>
              </div>

              <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded-lg">
                <Icon size={20} />
              </div>

            </div>

          </Card>
        );

      })}

    </div>
  );
}