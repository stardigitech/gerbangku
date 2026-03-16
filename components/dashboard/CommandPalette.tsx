"use client";

import { Command } from "cmdk";
import { useEffect, useState } from "react";

export default function CommandPalette() {

  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {

      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((open) => !open);
      }

    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-start justify-center pt-40 z-50">

      <Command className="bg-white rounded-xl shadow-xl w-[600px] p-4">

        <Command.Input
          placeholder="Search anything..."
          className="w-full border-b pb-2 outline-none"
        />

        <Command.List className="mt-3">

          <Command.Item className="p-2 hover:bg-slate-100 rounded">
            Go to Dashboard
          </Command.Item>

          <Command.Item className="p-2 hover:bg-slate-100 rounded">
            Create Website
          </Command.Item>

          <Command.Item className="p-2 hover:bg-slate-100 rounded">
            Add Booking
          </Command.Item>

        </Command.List>

      </Command>

    </div>
  );
}