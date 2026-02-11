import React from 'react';

const Terminos = () => (
  <div className="min-h-screen bg-black text-white p-8 max-w-4xl mx-auto pt-24">
    <h1 className="text-4xl font-extrabold mb-8 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
      Términos y Condiciones
    </h1>
    
    <div className="space-y-6 text-base leading-relaxed text-gray-300">
      <div className="bg-zinc-900/50 p-4 rounded-lg border border-zinc-800">
        <p><strong>Última actualización:</strong> 10 de febrero de 2026</p>
        <p className="mt-2">Al acceder a <strong>agalaz.com</strong>, aceptas cumplir con los siguientes términos de servicio para creadoras digitales.</p>
      </div>

      <section>
        <h2 className="text-xl font-semibold text-white mb-2">1. Requisito de Edad (+18)</h2>
        <p>Este sitio ofrece servicios de gestión para plataformas de contenido adulto. Es estrictamente obligatorio ser mayor de <strong>18 años</strong> para registrarse. Cualquier cuenta que no cumpla este requisito será eliminada inmediatamente sin derecho a reembolso.</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white mb-2">2. El Servicio de Referido</h2>
        <p>Captación de modelos online proporciona un servicio de intermediación. Una vez confirmado el pago a través de <strong>Stripe</strong>, recibirás automáticamente en tu correo electrónico el enlace de referido y las instrucciones para el registro en las plataformas correspondientes.</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white mb-2">3. Política de Pagos y Devoluciones</h2>
        <p>Debido a la naturaleza digital del servicio (acceso inmediato a información de referidos), no se realizarán devoluciones una vez que el enlace haya sido enviado al correo electrónico proporcionado, salvo error técnico demostrable en nuestro sistema.</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white mb-2">4. Exención de Responsabilidad</h2>
        <p>Nuestra agencia no garantiza ingresos específicos ni se hace responsable del cumplimiento de las normas de las plataformas externas por parte de la creadora. Actuamos únicamente como facilitadores de acceso y soporte estratégico.</p>
      </section>

      <div className="mt-10 p-6 border-t border-zinc-800 text-sm italic">
        <p>Para soporte técnico o consultas legales: 
          <span className="text-purple-400 ml-2 font-mono">agencialeads@protonmail.com</span>
        </p>
      </div>
    </div>
  </div>
);

export default Terminos;
