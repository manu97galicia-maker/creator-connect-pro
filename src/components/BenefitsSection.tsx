import { Globe, DollarSign, Users, Sparkles } from "lucide-react";

const benefits = [
  {
    icon: Globe,
    title: "Acceso Internacional",
    description: "Te registramos en las mejores plataformas de contenido a nivel mundial.",
  },
  {
    icon: DollarSign,
    title: "Cobros en Dólares",
    description: "Recibe tus pagos en USD directamente, sin complicaciones bancarias.",
  },
  {
    icon: Users,
    title: "Comunidad Exclusiva",
    description: "Forma parte de una red de creadoras que se apoyan mutuamente.",
  },
  {
    icon: Sparkles,
    title: "Acompañamiento Personalizado",
    description: "Te guiamos paso a paso en todo el proceso de registro y verificación.",
  },
];

const BenefitsSection = () => {
  return (
    <section id="beneficios" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
          ¿Por qué elegirnos?
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
          Todo lo que necesitas para empezar a generar ingresos como creadora digital.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary/50 transition-colors"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
