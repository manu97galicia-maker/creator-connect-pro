const testimonials = [
  {
    name: "Elizabeth S.",
    country: "Colombia",
    text: "Yo buscaba algo flexible, la verdad iba muy nerviosa pero al final no me costó para nada. De hecho me entretengo y me da para pagarme mis cosas y las de mi pequeño por unas pocas horas. No me lo esperaba.",
  },
  {
    name: "Camila R.",
    country: "México",
    text: "Al principio dudé mucho, pero una amiga me animó. Llevo 3 meses y ya pude ahorrar para el cumpleaños de mi hija. Lo mejor es que manejo mis propios horarios.",
  },
  {
    name: "Valentina M.",
    country: "Perú",
    text: "Trabajo desde mi cuarto mientras mi bebé duerme. Nunca pensé que podría ganar en dólares sin salir de casa. Es real y se puede.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          Lo que dicen nuestras modelos
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-card border border-border rounded-2xl p-6 flex flex-col gap-4"
            >
              <p className="text-muted-foreground text-sm leading-relaxed italic">
                "{t.text}"
              </p>
              <div className="mt-auto pt-4 border-t border-border">
                <p className="font-semibold text-foreground text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.country}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
