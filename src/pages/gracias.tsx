import { useEffect } from "react";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Gracias = () => {
  useEffect(() => {
    // Meta Pixel - Purchase
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("track", "Purchase", {
        currency: "USD",
        value: 29.99,
      });
    }
    // Google Ads - Purchase conversion
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "conversion", {
        send_to: "AW-17912865707/PURCHASE",
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="bg-card border border-border rounded-2xl p-8 max-w-md text-center shadow-xl">
        <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-8 h-8 text-primary" />
        </div>
        <h1 className="text-3xl font-bold mb-4">¡Pago Exitoso!</h1>
        <p className="text-muted-foreground mb-6">
          Tu plaza ha sido reservada correctamente. Recibirás un correo con los próximos pasos.
        </p>
        <Link
          to="/"
          className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-xl font-bold hover:opacity-90 transition-all"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
};

export default Gracias;
