import { useState } from "react";
import { Calculator } from "lucide-react";

const HOURLY_RATE = 20;

const EarningsCalculator = () => {
  const [hoursPerDay, setHoursPerDay] = useState(3);

  const dailyEarnings = hoursPerDay * HOURLY_RATE;
  const weeklyEarnings = dailyEarnings * 7;
  const monthlyEarnings = dailyEarnings * 30;

  return (
    <section className="py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
            <Calculator className="w-7 h-7 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-foreground">
            Calculadora de Ganancias
          </h2>
          <p className="text-muted-foreground">
            Estima cuánto podrías ganar a una tarifa de <span className="text-primary font-semibold">${HOURLY_RATE} USD/hora</span> de lunes a jueves
          </p>
        </div>

        <div className="bg-card border border-border rounded-2xl p-8">
          <div className="mb-8">
            <label className="block text-sm font-medium text-muted-foreground mb-3">
              Horas dedicadas por día: <span className="text-primary font-bold text-lg">{hoursPerDay}h</span>
            </label>
            <input
              type="range"
              min="1"
              max="8"
              value={hoursPerDay}
              onChange={(e) => setHoursPerDay(Number(e.target.value))}
              className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
            />
            <div className="flex justify-between text-xs text-muted-foreground mt-1">
              <span>1h</span>
              <span>8h</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="bg-muted rounded-xl p-4 text-center">
              <p className="text-xs text-muted-foreground mb-1">Diario</p>
              <p className="text-2xl font-bold text-primary">${dailyEarnings}</p>
            </div>
            <div className="bg-muted rounded-xl p-4 text-center">
              <p className="text-xs text-muted-foreground mb-1">Semanal</p>
              <p className="text-2xl font-bold text-primary">${weeklyEarnings}</p>
            </div>
            <div className="bg-muted rounded-xl p-4 text-center">
              <p className="text-xs text-muted-foreground mb-1">Mensual</p>
              <p className="text-2xl font-bold text-foreground">${monthlyEarnings}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarningsCalculator;
