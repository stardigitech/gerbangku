import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { Solutions } from "@/components/landing/Solutions";
import { WhyGerbangku } from "@/components/landing/WhyGerbangku";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Pricing } from "@/components/landing/Pricing";
import { CTA } from "@/components/landing/CTA";

export const metadata = {
  title: "All-in-One Business Platform",
  description:
    "Run your business with one unified platform – websites, workflows, and operations in one place."
};

export default function Page() {
  return (
    <main className="bg-[#0B0F14] text-white">
      <Hero />
      <Features />
      <Solutions />
      <WhyGerbangku />
      <HowItWorks />
      <Pricing />
      <CTA />
    </main>
  );
}
