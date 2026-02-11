import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import CheckoutSection from "@/components/CheckoutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import LegalFooter from "@/components/LegalFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <BenefitsSection />
      <TestimonialsSection />
      <CheckoutSection />
      <LegalFooter />
      <footer className="mt-20 py-10 border-t border-zinc-900 text-center">
  <div className="flex justify-center gap-6 mb-4">
    <a href="/privacidad" className="text-gray-500 hover:text-purple-400 text-sm transition-colors">
      Política de Privacidad
    </a>
    <a href="/terminos" className="text-gray-500 hover:text-purple-400 text-sm transition-colors">
      Términos y Condiciones
    </a>
  </div>
  <p className="text-gray-600 text-xs">
    © 2026 Gestión Pro Latam. Todos los derechos reservados.
  </p>
</footer>
    </div>
  );
};

export default Index;
