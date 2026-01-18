import "./globals.css";
import { ReactNode } from "react";
import { Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata = {
  title: "Gerbangku — Satu Gerbang Digital untuk Semua Bisnis",
  description:
    "Platform digital terpadu untuk membantu bisnis tradisional, UMKM, hospitality, dan usaha menengah berkembang secara modern.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id" className={inter.className}>
      <body className="bg-neutral-950 text-neutral-100">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
