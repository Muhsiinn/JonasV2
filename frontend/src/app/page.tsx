import { Header } from "@/components/layout/header";
import { HeroSection } from "@/components/features/hero-section";
import { FeaturesSection } from "@/components/features/features-section";
import { HowItWorks } from "@/components/features/how-it-works";
import { CTASection } from "@/components/features/cta-section";
import { FloatingLetters } from "@/components/features/floating-letters";

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <FloatingLetters />
      <Header />
      <main>
        <div className="mx-auto ">
          <HeroSection />
        </div>
        <FeaturesSection />
        <HowItWorks />
        <CTASection />
      </main>
    </div>
  );
}
