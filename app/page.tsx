import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Solutions from "@/components/sections/Solutions";
import Pricing from "@/components/sections/Pricing";
import CTA from "@/components/sections/CTA";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Features />
      <Solutions />
      <Pricing />
      <CTA />
    </main>
  );
}
