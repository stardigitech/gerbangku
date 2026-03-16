"use client";

import { Sun, Moon, Bell } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [dark, setDark] = useState(false);
  const [openNotif, setOpenNotif] = useState(false);

  return (
    <header className="sticky top-0 z-40 h-16 
      bg-white dark:bg-slate-900
      border-b border-slate-200 dark:border-slate-800
      flex items-center justify-between px-6">

      {/* Search */}
      <input
        type="text"
        placeholder="Search..."
        className="w-72 border border-slate-200 dark:border-slate-700
        bg-white dark:bg-slate-800
        rounded-lg px-3 py-2 text-sm
        focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Right */}
      <div className="flex items-center gap-4">

        {/* Notification */}
        <div className="relative">

          <button
            onClick={() => setOpenNotif(!openNotif)}
            className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 relative"
          >
            <Bell size={20} />

            <span className="absolute -top-1 -right-1 w-4 h-4 text-[10px] flex items-center justify-center bg-red-500 text-white rounded-full">
              3
            </span>
          </button>

          {openNotif && (
            <div className="absolute right-0 mt-2 w-64 
            bg-white dark:bg-slate-900
            border border-slate-200 dark:border-slate-800
            rounded-lg shadow-lg">

              <div className="p-3 text-sm font-medium border-b dark:border-slate-800">
                Notifications
              </div>

              <ul className="text-sm">

                <li className="p-3 hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer">
                  New booking received
                </li>

                <li className="p-3 hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer">
                  Website published
                </li>

                <li className="p-3 hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer">
                  New user joined
                </li>

              </ul>
            </div>
          )}
        </div>

        {/* Dark Mode */}
        <button
          onClick={() => {
            document.documentElement.classList.toggle("dark");
            setDark(!dark);
          }}
          className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
        >
          {dark ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        {/* User */}
        <div className="flex items-center gap-2 cursor-pointer">

          <div className="w-8 h-8 bg-slate-300 rounded-full"></div>

          <span className="text-sm text-slate-700 dark:text-slate-200">
            Adi
          </span>

        </div>

      </div>

    </header>
  );
}