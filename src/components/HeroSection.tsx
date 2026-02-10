import { useState, useEffect } from "react";
import { ArrowDown, Users, AlertTriangle, Calculator } from "lucide-react";

const FAKE_NAMES = [
  "Yaneth J.", "María G.", "Camila R.", "Valentina S.", "Sofía M.",
  "Isabella P.", "Luciana T.", "Daniela V.", "Andrea F.", "Carolina H.",
  "Gabriela L.", "Fernanda Q.", "Paola N.", "Natalia B.", "Alejandra D.",
  "Laura C.", "Diana K.", "Mariana E.", "Paula A.", "Catalina O.",
  "Juliana W.", "Adriana Z.", "Mónica R.", "Vanessa U.", "Tatiana I.",
];

const COUNTRIES = [
  "Colombia", "México", "Argentina", "Perú", "Chile",
  "Ecuador", "Venezuela", "Bolivia", "Paraguay", "Uruguay",
  "Costa Rica", "Panamá", "Rep. Dominicana", "Guatemala", "Honduras",
];

const HOURLY_RATE = 20;

const MiniCalculator = () => {
  const [hours, setHours] = useState(4);
  const daily = hours * HOURLY_RATE;
  const weekly = daily * 4; // L-J
  const monthly = weekly * 4;

  return (
    <div className="animate-fade-up mt-10 max-w-lg mx-auto">
      <div className="bg-card border border-border rounded-2xl p-6">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Calculator className="w-5 h-5 text-primary" />
          <h3 className="text-lg font-semibold text-foreground">Calculadora de Ganancias</h3>
        </div>
        <div className="mb-5">
          <label className="block text-sm text-muted-foreground mb-2">
            Horas por día: <span className="text-primary font-bold">{hours}h</span>
          </label>
          <input
            type="range"
            min="1"
            max="8"
            value={hours}
            onChange={(e) => setHours(Number(e.target.value))}
            className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
          />
          <div className="flex justify-between text-xs text-muted-foreground mt-1">
            <span>1h</span>
            <span>8h</span>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3 text-center">
          <div className="bg-muted rounded-xl p-3">
            <p className="text-[10px] text-muted-foreground mb-1">Diario</p>
            <p className="text-xl font-bold text-primary">${daily}</p>
          </div>
          <div className="bg-muted rounded-xl p-3">
            <p className="text-[10px] text-muted-foreground mb-1">Semanal (L-J)</p>
            <p className="text-xl font-bold text-primary">${weekly}</p>
          </div>
          <div className="bg-muted rounded-xl p-3">
            <p className="text-[10px] text-muted-foreground mb-1">Mensual</p>
            <p className="text-xl font-bold text-foreground">${monthly}</p>
          </div>
        </div>
        <p className="text-[10px] text-muted-foreground text-center mt-3 leading-relaxed">
          Estas cifras son orientativas y <strong>no constituyen una promesa ni garantía de resultados financieros</strong>. 
          Las ganancias reales dependen del esfuerzo, dedicación y condiciones de cada plataforma.
        </p>
      </div>
    </div>
  );
};

const HeroSection = () => {
  const [spotsLeft, setSpotsLeft] = useState(200);
  const [notification, setNotification] = useState<{ name: string; country: string } | null>(null);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setSpotsLeft((prev) => {
        if (prev <= 1) return 1;
        const newSpots = prev - 1;

        // Show notification
        const randomName = FAKE_NAMES[Math.floor(Math.random() * FAKE_NAMES.length)];
        const randomCountry = COUNTRIES[Math.floor(Math.random() * COUNTRIES.length)];
        setNotification({ name: randomName, country: randomCountry });
        setShowNotification(true);

        setTimeout(() => setShowNotification(false), 4000);

        return newSpots;
      });
    }, 15000);

    // Show first notification after 5 seconds
    const firstTimeout = setTimeout(() => {
      setSpotsLeft((prev) => {
        const newSpots = prev - 1;
        const randomName = FAKE_NAMES[Math.floor(Math.random() * FAKE_NAMES.length)];
        const randomCountry = COUNTRIES[Math.floor(Math.random() * COUNTRIES.length)];
        setNotification({ name: randomName, country: randomCountry });
        setShowNotification(true);
        setTimeout(() => setShowNotification(false), 4000);
        return newSpots;
      });
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(firstTimeout);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-12">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />

      <div className="relative z-10 w-full px-4 max-w-4xl mx-auto">
        {/* Urgency banner */}
        <div className="animate-fade-up text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-destructive/10 border border-destructive/30 text-destructive px-5 py-2.5 rounded-full text-sm font-semibold mb-6">
            <AlertTriangle className="w-4 h-4" />
            ⚡ Alta demanda — Plazas limitadas
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
            <span className="text-foreground">Buscamos a las</span>{" "}
            <span className="text-primary">200 primeras</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-2 max-w-2xl mx-auto">
            creadoras digitales en Latinoamérica debido a la alta demanda
          </p>

          {/* Spots counter */}
          <div className="flex items-center justify-center gap-3 my-6">
            <Users className="w-6 h-6 text-primary" />
            <span className="text-2xl md:text-3xl font-bold text-foreground">
              Quedan{" "}
              <span className={`text-primary ${spotsLeft <= 20 ? "text-destructive" : ""}`}>
                {spotsLeft}
              </span>{" "}
              plazas en tu país
            </span>
          </div>

          <p className="text-base text-muted-foreground mb-8 max-w-xl mx-auto">
            Trabajando de lunes a jueves puedes ganar hasta <span className="text-primary font-semibold">$20 USD/hora</span>
          </p>

          <a
            href="#beneficios"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition-opacity animate-pulse-glow"
          >
            Quiero mi plaza
            <ArrowDown className="w-5 h-5" />
          </a>
        </div>

        {/* Interactive earnings calculator */}
        <MiniCalculator />
      </div>

      {/* Floating notification */}
      <div
        className={`fixed bottom-6 left-4 right-4 md:left-auto md:right-6 md:w-80 z-50 transition-all duration-500 ${
          showNotification ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0 pointer-events-none"
        }`}
      >
        <div className="bg-card border border-primary/30 rounded-xl p-4 shadow-lg shadow-primary/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
              <Users className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">
                {notification?.name} de {notification?.country}
              </p>
              <p className="text-xs text-muted-foreground">se ha registrado hace un momento</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
