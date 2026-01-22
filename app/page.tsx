import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Solutions } from "@/components/Solutions";
import { Pricing } from "@/components/Pricing";

export default function Page() {
  return (
    <main className="bg-[#0B0F14] text-white">
      <Hero />
      <Features />
      <Solutions />
      <Pricing />
    </main>
  );
}
