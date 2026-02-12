import { useState, useEffect } from "react";
import { X, MessageSquare } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const EXIT_REASONS = [
  { id: "no_interest", label: "No me interesa" },
  { id: "too_expensive", label: "Muy caro" },
  { id: "other", label: "Otro" },
];

const ExitIntentPopup = () => {
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const [comment, setComment] = useState("");
  const [sent, setSent] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;

    const alreadyShown = sessionStorage.getItem("exit-popup-shown");
    if (alreadyShown) return;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setShow(true);
        sessionStorage.setItem("exit-popup-shown", "true");
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [dismissed]);

  const handleSubmit = async () => {
    if (!selected) return;

    const reason = EXIT_REASONS.find((r) => r.id === selected)?.label || selected;

    try {
      await supabase.functions.invoke("send-exit-feedback", {
        body: { reason, comment: selected === "other" ? comment : undefined },
      });
    } catch (e) {
      console.error("Feedback error:", e);
    }

    setSent(true);
    setTimeout(() => {
      setShow(false);
      setDismissed(true);
    }, 2000);
  };

  const handleClose = () => {
    setShow(false);
    setDismissed(true);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[9998] p-4">
      <div className="bg-card border border-border rounded-2xl p-6 max-w-sm w-full shadow-2xl relative animate-fade-up">
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {sent ? (
          <div className="text-center py-4">
            <p className="text-lg font-semibold text-primary">¡Gracias por tu feedback!</p>
            <p className="text-sm text-muted-foreground mt-2">Tu opinión nos ayuda a mejorar.</p>
          </div>
        ) : (
          <>
            <div className="flex items-center gap-2 mb-4">
              <MessageSquare className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-bold">¿Nos das tu opinión?</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-5">
              Tu feedback nos ayuda a mejorar. ¿Por qué te vas?
            </p>

            <div className="flex flex-col gap-2 mb-4">
              {EXIT_REASONS.map((reason) => (
                <button
                  key={reason.id}
                  onClick={() => setSelected(reason.id)}
                  className={`text-left px-4 py-3 rounded-xl border text-sm font-medium transition-all ${
                    selected === reason.id
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border bg-muted/50 text-foreground hover:border-primary/50"
                  }`}
                >
                  {reason.label}
                </button>
              ))}
            </div>

            {selected === "other" && (
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value.slice(0, 60))}
                placeholder="Cuéntanos brevemente..."
                maxLength={60}
                className="w-full p-3 bg-muted border border-border rounded-xl text-sm text-foreground resize-none h-20 focus:outline-none focus:ring-2 focus:ring-primary mb-1"
              />
            )}
            {selected === "other" && (
              <p className="text-[10px] text-muted-foreground text-right mb-3">{comment.length}/60</p>
            )}

            <button
              onClick={handleSubmit}
              disabled={!selected || (selected === "other" && !comment.trim())}
              className="w-full bg-primary text-primary-foreground font-bold py-3 rounded-xl hover:opacity-90 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Enviar feedback
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ExitIntentPopup;
