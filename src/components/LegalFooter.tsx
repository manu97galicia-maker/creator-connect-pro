import { Info, ShieldCheck } from "lucide-react";

const LegalFooter = () => {
  return (
    <footer className="py-12 px-4 border-t border-border bg-background">
      <div className="max-w-3xl mx-auto">
        {/* Bloque Informativo de Gestión */}
        <div className="bg-muted/50 border border-border rounded-xl p-6 mb-8">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-foreground mb-2">¿Qué hacemos exactamente?</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Captación de modelos online actúa como intermediaria de <span className="text-primary font-medium">referidos y generación de leads</span>. 
                Conectamos a creadoras digitales con plataformas internacionales de contenido. 
                La tasa de gestión de $19.99 USD cubre los costos administrativos de verificación, 
                registro en plataformas y acompañamiento personalizado durante el proceso. 
                No somos empleadores ni representantes legales. Las ganancias dependen exclusivamente 
                del esfuerzo y dedicación de cada creadora.
              </p>
            </div>
          </div>
        </div>

        {/* Enlaces Legales (Obligatorios para Google Ads) */}
        <div className="flex justify-center gap-6 mb-8 text-sm">
          <a href="/privacidad" className="text-muted-foreground hover:text-primary underline underline-offset-4 transition-colors">
            Política de Privacidad
          </a>
          <a href="/terminos" className="text-muted-foreground hover:text-primary underline underline-offset-4 transition-colors">
            Términos de Servicio
          </a>
        </div>

        {/* Avisos de Seguridad y Edad */}
        <div className="text-center text-xs text-muted-foreground space-y-3">
          <div className="flex justify-center items-center gap-2 mb-2">
            <ShieldCheck className="w-4 h-4 text-primary" />
            <span className="uppercase tracking-widest text-[10px]">Sitio Verificado +18</span>
          </div>
          
          <p className="italic">
            <strong>Aviso de Mayoría de Edad:</strong> Este servicio es exclusivo para personas mayores de 18 años. Al utilizar este sitio, confirmas tu mayoría de edad legal.
          </p>

          <p>© {new Date().getFullYear()} Captación de modelos online. Todos los derechos reservados.</p>
          
          <p>
            Las cifras mostradas son estimaciones y no garantizan ingresos específicos.
          </p>
          
          <p className="pt-2">
            Soporte: <a href="mailto:agencialeads@protonmail.com" className="text-primary hover:underline font-medium">agencialeads@protonmail.com</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default LegalFooter;
