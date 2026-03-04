"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  X,
  LayoutDashboard,
  Layers,
  DollarSign,
  Mail,
} from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinkStyle = `
    relative flex items-center gap-2 transition duration-200
    after:absolute after:-bottom-1 after:left-0
    after:h-[2px] after:w-0 after:bg-current
    after:transition-all after:duration-300
    hover:after:w-full
  `;

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <header
        className={`
          fixed inset-x-0 top-0 z-50
          transition-all duration-300
          ${
            scrolled
              ? "bg-white/90 backdrop-blur-xl text-gray-900 shadow-sm"
              : "bg-primary/80 backdrop-blur-xl text-white"
          }
        `}
      >
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3 text-lg font-semibold tracking-wide">
            <Image
              src="/assets/icon/gerbangku-icon.png"
              alt="Gerbangku Logo"
              width={32}
              height={32}
              priority
              className="object-contain"
            />
            Gerbangku
          </div>

          {/* Desktop Nav */}
          <nav
            className={`
              hidden md:flex gap-8 text-sm items-center
              ${scrolled ? "text-gray-700" : "text-gray-200"}
            `}
          >
            <Link href="#features" className={navLinkStyle}>
              <LayoutDashboard size={16} />
              Features
            </Link>

            <Link href="#solutions" className={navLinkStyle}>
              <Layers size={16} />
              Solutions
            </Link>

            <Link href="#pricing" className={navLinkStyle}>
              <DollarSign size={16} />
              Pricing
            </Link>

            <Link href="#contact" className={navLinkStyle}>
              <Mail size={16} />
              Contact
            </Link>

            {/* CTA Button */}
            <Link
              href="/login"
              className={`
                ml-4 px-4 py-2 rounded-xl transition
                ${
                  scrolled
                    ? "bg-black text-white hover:opacity-90"
                    : "bg-white text-black hover:opacity-90"
                }
              `}
            >
              Get Started
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden rounded-lg p-2 hover:bg-white/10 transition"
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </header>

      {/* ================= MOBILE MENU ================= */}
      {open && (
        <div className="fixed inset-0 z-50 md:hidden">
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
            "
          >
            <div className="flex items-center justify-between mb-10">
              <span className="flex items-center gap-3 text-lg font-semibold">
                <Image
                  src="/assets/icon/gerbangku-icon.png"
                  alt="Gerbangku Logo"
                  width={28}
                  height={28}
                  className="object-contain"
                />
                Gerbangku
              </span>

              <button
                onClick={() => setOpen(false)}
                className="opacity-70 hover:opacity-100"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            <nav className="flex flex-col gap-6 text-base">
              <Link
                onClick={() => setOpen(false)}
                href="#features"
                className="flex items-center gap-3 hover:opacity-80 transition"
              >
                <LayoutDashboard size={18} />
                Features
              </Link>

              <Link
                onClick={() => setOpen(false)}
                href="#solutions"
                className="flex items-center gap-3 hover:opacity-80 transition"
              >
                <Layers size={18} />
                Solutions
              </Link>

              <Link
                onClick={() => setOpen(false)}
                href="#pricing"
                className="flex items-center gap-3 hover:opacity-80 transition"
              >
                <DollarSign size={18} />
                Pricing
              </Link>

              <Link
                onClick={() => setOpen(false)}
                href="#contact"
                className="flex items-center gap-3 hover:opacity-80 transition"
              >
                <Mail size={18} />
                Contact
              </Link>
            </nav>

            <div className="mt-auto pt-10 text-sm text-gray-300">
              Unified platform for modern businesses
            </div>
          </div>
        </div>
      )}
    </>
  );
}
