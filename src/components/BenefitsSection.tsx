import { Globe, DollarSign, Users, Sparkles } from "lucide-react";

const benefits = [
  {
    icon: Globe,
    title: "Captación de Leads",
    description: "Captamos tu perfil y lo conectamos con partners internacionales para agilizar tu acceso a plataformas globales.",
  },
  {
    icon: DollarSign,
    title: "Cobros en Dólares",
    description: "Facilitamos la conexión con métodos de pago en USD a través de nuestros partners.",
  },
  {
    icon: Users,
    title: "Red de Partners",
    description: "Trabajamos con una red de colaboradores verificados que buscan perfiles como el tuyo.",
  },
  {
    icon: Sparkles,
    title: "Gestión Administrativa",
    description: "Nos encargamos de la intermediación técnica y administrativa entre tú y los partners interesados.",
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
