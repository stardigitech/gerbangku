"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <header
        className={`
          fixed inset-x-0 top-0 z-50
          transition-all duration-300
          ${
            scrolled
              ? "bg-white text-gray-900 shadow-md"
              : "bg-primary/80 backdrop-blur-xl text-white"
          }
        `}
      >
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="text-lg font-semibold tracking-wide">
            Gerbangku
          </div>

          {/* Desktop Nav */}
          <nav
            className={`
              hidden md:flex gap-8 text-sm
              ${scrolled ? "text-gray-700" : "text-gray-300"}
            `}
          >
            <Link href="#features">Features</Link>
            <Link href="#solutions">Solutions</Link>
            <Link href="#pricing">Pricing</Link>
            <Link href="#contact">Contact</Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden rounded-lg p-2 hover:bg-white/10 transition"
            aria-label="Open menu"
          >
            <span className="block w-5 h-0.5 bg-current mb-1" />
            <span className="block w-5 h-0.5 bg-current mb-1" />
            <span className="block w-5 h-0.5 bg-current" />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {open && (
        <div className="fixed inset-0 z-50">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          {/* Drawer */}
          <div
            className="
              absolute right-0 top-0 h-full w-[85%] max-w-sm
              bg-primary text-white
              shadow-2xl
              px-6 py-6
              flex flex-col
              animate-slideIn
            "
          >
            <div className="flex items-center justify-between mb-8">
              <span className="text-lg font-semibold">Gerbangku</span>
              <button
                onClick={() => setOpen(false)}
                className="text-2xl leading-none opacity-70 hover:opacity-100"
                aria-label="Close menu"
              >
                ×
              </button>
            </div>

            <nav className="flex flex-col gap-6 text-base">
              <Link onClick={() => setOpen(false)} href="#features">
                Features
              </Link>
              <Link onClick={() => setOpen(false)} href="#solutions">
                Solutions
              </Link>
              <Link onClick={() => setOpen(false)} href="#pricing">
                Pricing
              </Link>
              <Link onClick={() => setOpen(false)} href="#contact">
                Contact
              </Link>
            </nav>

            {/* Optional footer hint */}
            <div className="mt-auto pt-10 text-sm text-gray-400">
              Unified platform for modern businesses
            </div>
          </div>
        </div>
      )}
    </>
  );
}