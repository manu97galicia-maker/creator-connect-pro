import { useState } from "react";
import { Sparkles, Heart, Globe, Clock, TrendingUp, ArrowRight, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const QUESTIONS = [
  {
    icon: Sparkles,
    question: "¿Sabías que puedes vivir del modelaje online?",
    subtitle: "Miles de mujeres en Latinoamérica ya lo hacen desde casa.",
  },
  {
    icon: Globe,
    question: "¿Alguna vez has soñado con trabajar desde donde quieras?",
    subtitle: "Sin jefes, sin horarios fijos, sin oficinas.",
  },
  {
    icon: Clock,
    question: "¿Te gustaría elegir cuándo y cuánto trabajar?",
    subtitle: "Tú decides tu horario. Lunes a jueves, las horas que quieras.",
  },
  {
    icon: TrendingUp,
    question: "¿Quieres generar ingresos en dólares desde tu celular?",
    subtitle: "Gana en USD sin importar en qué país estés.",
  },
  {
    icon: Heart,
    question: "¿Estás lista para dar el primer paso hacia tu libertad financiera?",
    subtitle: "Únete a cientos de modelos que ya cambiaron su vida.",
  },
  {
    icon: Sparkles,
    question: "Por solo $19.99 USD te verificamos y reservamos tu plaza con nuestras webs de contacto.",
    subtitle: "Se amortiza con tu primera hora de trabajo. ¡Es una inversión mínima!",
    customAnswers: ["¡Genial! 😍", "Me interesa 🤔"],
  },
];

const ANSWERS = ["¡Sí! 🙌", "Quizás 🤔", "No por ahora"];

const OnboardingQuiz = ({ onComplete }: { onComplete: () => void }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    // Track each quiz answer in Datafast
    if (typeof window !== 'undefined' && (window as any).datafast) {
      (window as any).datafast('quiz_answer', {
        question: String(currentStep + 1),
        answer: answer,
      });
    }

    if (currentStep < QUESTIONS.length - 1) {
      setTimeout(() => setCurrentStep((prev) => prev + 1), 400);
    } else {
      // Track quiz completion
      if (typeof window !== 'undefined' && (window as any).datafast) {
        (window as any).datafast('quiz_complete');
      }
      setTimeout(() => onComplete(), 600);
    }
  };

  const q = QUESTIONS[currentStep];
  const Icon = q.icon;
  const progress = ((currentStep + 1) / QUESTIONS.length) * 100;

  return (
    <div className="fixed inset-0 bg-background/95 backdrop-blur-xl flex items-center justify-center z-[9998] p-4">
      <motion.div
        key={currentStep}
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="w-full max-w-md"
      >
        {/* Progress bar */}
        <div className="mb-8">
          <div className="flex justify-between text-xs text-muted-foreground mb-2">
            <span>Pregunta {currentStep + 1} de {QUESTIONS.length}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
              initial={{ width: `${((currentStep) / QUESTIONS.length) * 100}%` }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        {/* Card */}
        <div className="bg-card border border-border rounded-3xl p-8 shadow-2xl shadow-primary/5">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
              <Icon className="w-8 h-8 text-primary" />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-center text-foreground mb-3 leading-tight">
            {q.question}
          </h2>
          <p className="text-center text-muted-foreground text-sm mb-8">
            {q.subtitle}
          </p>

          <div className="flex flex-col gap-3">
            {((q as any).customAnswers || ANSWERS).map((answer: string, i: number) => (
              <button
                key={answer}
                onClick={() => handleAnswer(answer)}
                className={`
                  w-full py-4 px-6 rounded-2xl font-semibold text-base transition-all duration-200
                  flex items-center justify-between group
                  ${i === 0
                    ? "bg-gradient-to-r from-primary to-primary/80 text-primary-foreground hover:shadow-lg hover:shadow-primary/30 hover:scale-[1.02]"
                    : i === 1
                    ? "bg-muted border border-border text-foreground hover:border-primary/50 hover:bg-muted/80"
                    : "bg-transparent border border-border/50 text-muted-foreground hover:border-border hover:text-foreground"
                  }
                `}
              >
                <span>{answer}</span>
                <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${i === 0 ? "text-primary-foreground" : "text-muted-foreground"}`} />
              </button>
            ))}
          </div>
        </div>

        {/* Motivational footer */}
        <p className="text-center text-xs text-muted-foreground/60 mt-6">
          🔒 Tu información está segura. Sin compromisos.
        </p>
      </motion.div>
    </div>
  );
};

export default OnboardingQuiz;
