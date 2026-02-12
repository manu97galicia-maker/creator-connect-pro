import { useState, useEffect } from "react";
import { ArrowDown, Users, AlertTriangle, Calculator, Lock } from "lucide-react";

// --- COMPONENTES AUXILIARES ---

const AgeGateModal = ({ onConfirm, onCancel }: { onConfirm: () => void; onCancel: () => void }) => {
  return (
    <div className="fixed inset-0 bg-background/80 flex items-center justify-center z-[9999] p-4 backdrop-blur-sm">
      <div className="bg-card p-6 rounded-2xl text-center max-w-sm border border-primary/30 shadow-xl">
        <Lock className="w-8 h-8 text-primary mx-auto mb-3" />
        <p className="text-muted-foreground mb-5 text-xs leading-relaxed">
          Al continuar confirmas ser <span className="text-primary font-semibold">mayor de 18 años</span> y aceptas la{" "}
          <a href="/privacidad" target="_blank" className="text-primary underline underline-offset-2">Privacidad</a> y{" "}
          <a href="/terminos" target="_blank" className="text-primary underline underline-offset-2">Términos</a>.
        </p>
        <button 
          onClick={onConfirm}
          className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-bold hover:opacity-90 w-full transition-all uppercase tracking-wider shadow-lg shadow-primary/20 text-sm"
        >
          CONFIRMO Y CONTINÚO
        </button>
        <button 
          onClick={onCancel} 
          className="mt-3 text-muted-foreground underline text-xs block w-full hover:text-foreground transition-colors"
        >
          Cancelar
        </button>
      </div>
    </div>
  );
};

const LeadForm = () => {
  const stripePaymentLink = "https://buy.stripe.com/8x24gz8wS8k0d8h2mlfYY00";
  const [showAgeGate, setShowAgeGate] = useState(false);
  const [pendingEmail, setPendingEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const emailInput = form.querySelector('input[name="email"]') as HTMLInputElement;
    setPendingEmail(emailInput?.value || '');
    setShowAgeGate(true);
  };

  const handleConfirmAge = () => {
    // Datafast funnel
    if (typeof window !== 'undefined' && (window as any).datafast) {
      (window as any).datafast('acceptance');
      (window as any).datafast('preparing_buy', { email: pendingEmail });
    }
    // Meta Pixel
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead');
    }
    // Google Ads
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        'send_to': 'AW-17912865707/SUBMIT'
      });
    }
    window.location.href = stripePaymentLink;
  };

  return (
    <>
      {showAgeGate && <AgeGateModal onConfirm={handleConfirmAge} onCancel={() => setShowAgeGate(false)} />}
      <div id="registro" className="bg-card border border-border p-6 rounded-2xl shadow-xl">
        <h3 className="text-xl font-bold mb-2 text-center">Registro de Nueva Plaza</h3>
        <p className="text-sm text-muted-foreground text-center mb-4">Verificación + plaza reservada por solo <span className="text-primary font-bold">$4.99 USD</span></p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input 
            name="email" 
            type="email" 
            placeholder="Tu correo electrónico..." 
            required 
            className="p-3 bg-muted border border-border rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button className="bg-primary text-primary-foreground font-bold py-4 rounded-xl hover:opacity-90 transition-all shadow-lg shadow-primary/20">
            RESERVAR PLAZA Y PAGAR
          </button>
        </form>
        <p className="text-[10px] text-muted-foreground text-center mt-3">
          <a href="/privacidad" target="_blank" className="underline underline-offset-2 hover:text-foreground transition-colors">Privacidad</a>
          {" · "}
          <a href="/terminos" target="_blank" className="underline underline-offset-2 hover:text-foreground transition-colors">Términos</a>
        </p>
      </div>
    </>
  );
};

// --- DATOS Y CALCULADORA ---

const FAKE_NAMES = ["Yaneth J.", "María G.", "Camila R.", "Valentina S.", "Sofía M.", "Isabella P.", "Luciana T.", "Daniela V.", "Andrea F.", "Carolina H."];
const COUNTRIES = ["Colombia", "México", "Argentina", "Perú", "Chile", "Ecuador"];
const HOURLY_RATE = 20;

const MiniCalculator = () => {
  const [hours, setHours] = useState(4);
  const daily = hours * HOURLY_RATE;
  const weekly = daily * 4;
  const monthly = weekly * 4;

  return (
    <div className="animate-fade-up mt-10 max-w-lg mx-auto">
      <div className="bg-card border border-border rounded-2xl p-6">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Calculator className="w-5 h-5 text-primary" />
          <h3 className="text-lg font-semibold">Calculadora de Ganancias</h3>
        </div>
        <div className="mb-5">
          <label className="block text-sm text-muted-foreground mb-2">
            Horas por día: <span className="text-primary font-bold">{hours}h</span>
          </label>
          <input
            type="range" min="1" max="8" value={hours}
            onChange={(e) => setHours(Number(e.target.value))}
            className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
          />
        </div>
        <div className="grid grid-cols-3 gap-3 text-center">
          <div className="bg-muted rounded-xl p-3">
            <p className="text-[10px] text-muted-foreground mb-1">Diario</p>
            <p className="text-xl font-bold text-primary">${daily}</p>
          </div>
          <div className="bg-muted rounded-xl p-3">
            <p className="text-[10px] text-muted-foreground mb-1">Semanal</p>
            <p className="text-xl font-bold text-primary">${weekly}</p>
          </div>
          <div className="bg-muted rounded-xl p-3">
            <p className="text-[10px] text-muted-foreground mb-1">Mensual</p>
            <p className="text-xl font-bold">${monthly}</p>
          </div>
        </div>
        <p className="text-[10px] text-muted-foreground/70 text-center mt-4 leading-relaxed">
          ⚠️ Estas cifras son meramente orientativas y no constituyen una promesa de ingresos. Los resultados reales pueden variar significativamente según múltiples factores. No nos hacemos responsables de las expectativas generadas por esta estimación.
        </p>
      </div>
    </div>
  );
};

// --- COMPONENTE PRINCIPAL ---

const HeroSection = () => {
  const [spotsLeft, setSpotsLeft] = useState(200);
  const [notification, setNotification] = useState<{ name: string; country: string } | null>(null);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setSpotsLeft((prev) => {
        if (prev <= 1) return 1;
        const randomName = FAKE_NAMES[Math.floor(Math.random() * FAKE_NAMES.length)];
        const randomCountry = COUNTRIES[Math.floor(Math.random() * COUNTRIES.length)];
        setNotification({ name: randomName, country: randomCountry });
        setShowNotification(true);
        setTimeout(() => setShowNotification(false), 4000);
        return prev - 1;
      });
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-12">

      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted" />
      
      <div className="relative z-10 w-full px-4 max-w-4xl mx-auto">
        <div className="animate-fade-up text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-destructive/10 border border-destructive/30 text-destructive px-5 py-2.5 rounded-full text-sm font-semibold mb-6">
            <AlertTriangle className="w-4 h-4" /> ⚡ Alta urgencia debido a la demanda
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
            <span className="text-foreground">Menos de</span>{" "}
            <span className="text-primary">250 vacantes</span>
          </h1>

          <div className="flex items-center justify-center gap-3 my-4">
            <Users className="w-6 h-6 text-primary" />
            <span className="text-2xl md:text-3xl font-bold">
              Quedan <span className="text-destructive">{spotsLeft}</span> plazas
            </span>
          </div>

          {/* CTA Form first - most visible */}
          <div className="max-w-md mx-auto mt-6 mb-10">
            <LeadForm />
          </div>

          {/* Content below */}
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-muted-foreground mb-6">
              Trabajando de lunes a jueves puedes ganar hasta <span className="text-primary font-semibold">$20 USD/hora</span> en nuestra plataforma de streaming.
            </p>
            <MiniCalculator />
          </div>
        </div>
      </div>

      {/* Notificación flotante */}
      <div className={`fixed bottom-6 left-4 right-4 md:left-auto md:right-6 md:w-80 z-50 transition-all duration-500 ${showNotification ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
        <div className="bg-card border border-primary/30 rounded-xl p-4 shadow-lg">
          <p className="text-sm font-semibold">{notification?.name} de {notification?.country}</p>
          <p className="text-xs text-muted-foreground">se ha registrado hace un momento — quedan <span className="text-destructive font-bold">{spotsLeft}</span> plazas</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
