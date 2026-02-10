const Privacidad = () => (
  <div className="min-h-screen bg-background text-foreground p-8 max-w-3xl mx-auto pt-20">
    <h1 className="text-3xl font-bold mb-6">Política de Privacidad</h1>
    <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
      <p><strong>Última actualización:</strong> 10 de febrero de 2026</p>
      <p>En <strong>Gestión Pro Latam</strong>, valoramos tu privacidad. Esta política explica cómo manejamos tu información al usar nuestro sitio.</p>
      
      <h2 className="text-xl font-semibold text-foreground">1. Información que recopilamos</h2>
      <p>Solo recopilamos tu correo electrónico para enviarte el enlace de referido una vez confirmado el pago. Los datos de pago son procesados externamente por <strong>Stripe</strong>; nosotros no almacenamos datos de tarjetas.</p>
      
      <h2 className="text-xl font-semibold text-foreground">2. Uso y Compartición de Datos</h2>
      <p>Al registrarte, aceptas que tu email sea compartido con nuestros socios de plataformas de streaming para procesar tu acceso y registro como creadora digital.</p>
      
      <h2 className="text-xl font-semibold text-foreground">3. Google Ads y Cookies</h2>
      <p>Utilizamos cookies para medir el rendimiento de nuestras campañas de Google Ads y asegurar que el sitio se muestra a usuarios mayores de 18 años.</p>
      
      <p className="pt-4">Contacto: <span className="text-primary">agencialeads@protonmail.com</span></p>
    </div>
  </div>
);

export default Privacidad;
