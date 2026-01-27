import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Solutions } from "@/components/Solutions";
import { WhyGerbangku } from "@/components/WhyGerbangku";
import { HowItWorks } from "@/components/HowItWorks";
import { Pricing } from "@/components/Pricing";
import { CTA } from "@/components/CTA";

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
