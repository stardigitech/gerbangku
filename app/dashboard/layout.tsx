import Sidebar from "@/components/dashboard/Sidebar";
import Header from "@/components/dashboard/Header";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function DashboardLayout({ children }: Props) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white flex">

      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Header />

        <main className="p-8">
          {children}
        </main>
      </div>

    </div>
  );
}