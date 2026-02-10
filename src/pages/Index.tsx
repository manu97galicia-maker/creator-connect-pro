import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import CheckoutSection from "@/components/CheckoutSection";
import EarningsCalculator from "@/components/EarningsCalculator";
import LegalFooter from "@/components/LegalFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <BenefitsSection />
      <CheckoutSection />
      <EarningsCalculator />
      <LegalFooter />
    </div>
  );
};

export default Index;
