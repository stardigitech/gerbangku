"use client";

import { useState } from "react";
import {
  LayoutDashboard,
  Building2,
  Globe,
  Calendar,
  Settings,
  Menu,
  ChevronDown
} from "lucide-react";

export default function Sidebar() {

  const [collapsed, setCollapsed] = useState(false);

  const menu = [
    { name: "Dashboard", icon: LayoutDashboard },
    { name: "Businesses", icon: Building2 },
    { name: "Websites", icon: Globe },
    { name: "Booking", icon: Calendar },
    { name: "Settings", icon: Settings },
  ];

  return (
    <aside
      className={`fixed top-0 left-0 h-screen
      bg-slate-900 text-slate-300
      border-r border-slate-800
      transition-all duration-300
      ${collapsed ? "w-20" : "w-64"}`}
    >

      {/* Logo */}
      <div className="h-16 flex items-center justify-between px-4 border-b border-slate-800">

        {!collapsed && (
          <span className="text-white font-semibold">
            Gerbangku
          </span>
        )}

        <button
          onClick={() => setCollapsed(!collapsed)}
          className="text-slate-400 hover:text-white"
        >
          <Menu size={20} />
        </button>

      </div>


      {/* Workspace */}
      {!collapsed && (
        <div className="px-4 py-3 border-b border-slate-800">

          <button className="w-full flex items-center justify-between
          bg-slate-800 hover:bg-slate-700
          px-3 py-2 rounded-lg text-sm">
            Villa Group
            <ChevronDown size={16} />
          </button>

        </div>
      )}


      {/* Menu */}
      <nav className="p-3 space-y-1">

        {menu.map((item, i) => {

          const Icon = item.icon;

          return (
            <a
              key={i}
              className={`flex items-center
              ${collapsed ? "justify-center" : "gap-3"}
              px-3 py-2 rounded-lg
              hover:bg-slate-800
              transition`}
            >

              <Icon size={18} />

              {!collapsed && (
                <span className="text-sm">
                  {item.name}
                </span>
              )}

            </a>
          );

        })}

      </nav>

    </aside>
  );
}