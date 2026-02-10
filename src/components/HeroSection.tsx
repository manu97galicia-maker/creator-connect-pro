import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-up">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="text-foreground">Gestión Pro</span>{" "}
          <span className="text-primary">Latam</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-4 max-w-2xl mx-auto">
          Agencia de gestión para creadoras digitales en Latinoamérica
        </p>
        <p className="text-base md:text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
          Te conectamos con las mejores plataformas internacionales para que cobres en dólares desde cualquier país de LATAM.
        </p>
        <a
          href="#beneficios"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition-opacity animate-pulse-glow"
        >
          Comienza Ahora
          <ArrowDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
