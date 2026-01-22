import "./globals.css";
import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata = {
  metadataBase: new URL("https://gerbangku.com"),
  title: {
    default: "Gerbangku — Unified Digital Platform",
    template: "%s | Gerbangku"
  },
  description:
    "Gerbangku adalah platform SaaS untuk hospitality dan service business: booking engine, website, dan operasional dalam satu sistem.",
  openGraph: {
    title: "Gerbangku",
    description:
      "Unified digital platform untuk booking, website, dan operasional bisnis modern.",
    url: "https://gerbangku.com",
    siteName: "Gerbangku",
    locale: "id_ID",
    type: "website"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="bg-[#0B0F14] text-white antialiased">
        <Navbar />
        {children}
        <Footer />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Gerbangku",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web",
              description:
                "Unified SaaS platform untuk booking, website, dan operasional hospitality & service business.",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "IDR"
              }
            })
          }}
        />
      </body>
    </html>
  );
}
