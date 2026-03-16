import "./global.css";
import type { Metadata } from "next";
import { OrganizationSchema } from "./schema";
import { Providers } from "@/components/Providers";

export const metadata: Metadata = {
  title: "Gerbangku – Unified Platform to Run Your Business",
  description:
    "Gerbangku is a unified digital platform to manage websites, operations, and workflows for businesses across industries."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
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
      </head>

      <body className="bg-[#0B0F14] text-white antialiased">
        <OrganizationSchema />

        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}