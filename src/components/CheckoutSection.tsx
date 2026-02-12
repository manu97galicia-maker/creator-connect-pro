import { Shield, CheckCircle } from "lucide-react";

const CheckoutSection = () => {
  return (
    <section id="checkout" className="py-20 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
          Déjanos tu link
        </h2>
        <p className="text-muted-foreground mb-8">
          Completa tu verificación y empieza a trabajar con nosotras.
        </p>

        <div className="bg-card border border-border rounded-2xl p-8 mb-8">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Shield className="w-6 h-6 text-primary" />
            <span className="text-lg font-semibold text-foreground">Tasa única de gestión</span>
          </div>

          <div className="text-5xl font-bold text-primary mb-2">$4.99</div>
          <p className="text-muted-foreground mb-8">USD — Pago único</p>

          <ul className="text-left space-y-3 mb-8 max-w-sm mx-auto">
            {[
              "Registro en plataformas internacionales",
              "Verificación de identidad completa",
              "Configuración de métodos de cobro",
              "Acompañamiento personalizado",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-muted-foreground">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <a
            href="#"
            className="inline-block w-full bg-primary text-primary-foreground py-4 rounded-xl font-semibold text-lg hover:opacity-90 transition-opacity mb-4"
          >
            Pagar y Verificarme
          </a>

          <div className="border border-border rounded-xl p-4 bg-muted/50">
            <p className="text-sm font-semibold text-foreground mb-1">Verificar contacto</p>
            <p className="text-xs text-muted-foreground">
              Te enviaremos un mail en menos de una semana para confirmar tu registro.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutSection;
