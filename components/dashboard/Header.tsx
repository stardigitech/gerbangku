"use client";

import { Bell, Search } from "lucide-react";

export default function DashboardHeader() {
  return (
    <header className="h-16 border-b border-white/10 bg-black/40 backdrop-blur-xl flex items-center justify-between px-8">

      <div className="flex items-center gap-4">

        <div className="flex items-center bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm">
          <Search size={16} className="mr-2 text-gray-400"/>
          <input
            placeholder="Search..."
            className="bg-transparent outline-none"
          />
        </div>

      </div>

      <div className="flex items-center gap-6">

        <Bell size={18} className="text-gray-400"/>

        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-sm">
          A
        </div>

      </div>

    </header>
  );
}