import { CardData } from "@/components/personal/Card";
import Hero from "@/components/personal/Hero";
import Newsletter from "@/components/personal/Newsletter";
import PricingTab from "@/components/personal/Pricing";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 md:p-24">
    

      <Hero />
      <PricingTab />
      {/* <CardData /> */}
      <Newsletter />
    </main>
  );
}
