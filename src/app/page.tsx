import Hero from "@/components/personal/Hero";
import PricingTab from "@/components/personal/Pricing";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    

      <Hero />
      <PricingTab />
    </main>
  );
}
