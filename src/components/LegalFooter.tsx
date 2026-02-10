import { Info } from "lucide-react";

const LegalFooter = () => {
  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="max-w-3xl mx-auto">
        <div className="bg-muted/50 border border-border rounded-xl p-6 mb-8">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-foreground mb-2">¿Qué hacemos exactamente?</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Gestión Pro Latam actúa como intermediaria de <span className="text-primary font-medium">referidos y generación de leads</span>. 
                Conectamos a creadoras digitales con plataformas internacionales de contenido. 
                La tasa de gestión de $19.99 USD cubre los costos administrativos de verificación, 
                registro en plataformas y acompañamiento personalizado durante el proceso. 
                No somos empleadores ni representantes legales. Las ganancias dependen exclusivamente 
                del esfuerzo y dedicación de cada creadora.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Gestión Pro Latam. Todos los derechos reservados.</p>
          <p className="mt-1">
            Las cifras mostradas son estimaciones y no garantizan ingresos específicos.
          </p>
          <p className="mt-2">
            Soporte: <a href="mailto:agencialeads@protonmail.com" className="text-primary hover:underline">agencialeads@protonmail.com</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default LegalFooter;
