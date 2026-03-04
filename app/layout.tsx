import "./global.css";
import type { Metadata } from "next";
import { OrganizationSchema } from "./schema";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Providers } from "@/components/Providers";

export const metadata: Metadata = {
  description:
    "Gerbangku is a unified digital platform to manage websites, operations, and workflows for businesses across industries.",
  keywords: [
    "business platform",
    "business management software",
    "workflow management",
    "booking system",
    "UMKM software",
    "hospitality software",
    "SaaS platform"
  ],
  openGraph: {
    title: "Gerbangku – Unified Platform to Run Your Business",
    description:
      "Manage your website, operations, and business growth in one flexible platform.",
    url: "https://gerbangku.com",
    siteName: "Gerbangku",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Gerbangku Platform"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Gerbangku – Unified Platform to Run Your Business",
    description:
      "A flexible SaaS platform designed for businesses across industries.",
    images: ["/og-image.png"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
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
        <OrganizationSchema />
        <Navbar />
        {children}
        <Footer />

        <Providers />

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
