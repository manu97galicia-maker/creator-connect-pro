import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import CheckoutSection from "@/components/CheckoutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import LegalFooter from "@/components/LegalFooter";
import ExitIntentPopup from "@/components/ExitIntentPopup";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ExitIntentPopup />
      <HeroSection />
      <BenefitsSection />
      <TestimonialsSection />
      <CheckoutSection />
      <LegalFooter />
      <footer className="mt-20 py-10 border-t border-border text-center">
  <div className="flex justify-center gap-6 mb-4">
    <a href="/privacidad" className="text-muted-foreground hover:text-primary text-sm transition-colors">
      Política de Privacidad
    </a>
    <a href="/terminos" className="text-muted-foreground hover:text-primary text-sm transition-colors">
      Términos y Condiciones
    </a>
  </div>
  <p className="text-muted-foreground/60 text-xs">
    © 2026 Captación de modelos online. Todos los derechos reservados.
  </p>
</footer>
    </div>
  );
};

export default Index;
