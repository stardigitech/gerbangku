"use client";

import Link from "next/link";
import { LayoutDashboard, Building, Globe, Settings } from "lucide-react";

export default function DashboardSidebar() {
  return (
    <aside className="w-64 border-r border-white/10 bg-black/40 backdrop-blur-xl p-6 hidden md:flex flex-col">

      <h2 className="text-xl font-semibold mb-10">
        Gerbangku
      </h2>

      <nav className="flex flex-col gap-4 text-sm">

        <Link href="/dashboard" className="flex items-center gap-3 text-gray-300 hover:text-white transition">
          <LayoutDashboard size={18}/>
          Dashboard
        </Link>

        <Link href="#" className="flex items-center gap-3 text-gray-300 hover:text-white transition">
          <Building size={18}/>
          Businesses
        </Link>

        <Link href="#" className="flex items-center gap-3 text-gray-300 hover:text-white transition">
          <Globe size={18}/>
          Websites
        </Link>

        <Link href="#" className="flex items-center gap-3 text-gray-300 hover:text-white transition">
          <Settings size={18}/>
          Settings
        </Link>

      </nav>

      <div className="mt-auto text-xs text-gray-500">
        Gerbangku Platform
      </div>

    </aside>
  );
}