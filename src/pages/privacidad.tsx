import React from 'react';

const Privacidad = () => (
  <div className="min-h-screen bg-black text-white p-8 max-w-4xl mx-auto pt-24">
    <h1 className="text-4xl font-extrabold mb-8 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
      Política de Privacidad
    </h1>
    
    <div className="space-y-6 text-base leading-relaxed text-gray-300">
      <div className="bg-zinc-900/50 p-4 rounded-lg border border-zinc-800">
        <p><strong>Última actualización:</strong> 10 de febrero de 2026</p>
        <p className="mt-2">En <strong>Captación de modelos online</strong>, la seguridad de nuestras creadoras es prioridad. Esta política detalla el tratamiento de tus datos personales.</p>
      </div>

      <section>
        <h2 className="text-xl font-semibold text-white mb-2">1. Información que recopilamos</h2>
        <p>Capturamos únicamente tu <strong>correo electrónico</strong> con el fin de automatizar el envío de tu enlace de referido tras el pago. Los datos bancarios son gestionados íntegramente por <strong>Stripe</strong> bajo sus protocolos de seguridad; nosotros nunca tenemos acceso a tu información financiera.</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white mb-2">2. Uso y Finalidad de los Datos</h2>
        <p>Al proporcionar tu email, consientes expresamente que sea utilizado para gestionar tu alta en plataformas de streaming externas y para recibir soporte directo de nuestra agencia. No vendemos tus datos a terceros ajenos al servicio solicitado.</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white mb-2">3. Google Ads y Cumplimiento Legal</h2>
        <p>Utilizamos cookies de seguimiento para optimizar nuestras campañas en <strong>Google Ads</strong> y verificar el cumplimiento de la restricción de edad (+18 años). Este sitio cumple con las normativas internacionales de protección de datos.</p>
      </section>

      <div className="mt-10 p-6 border-t border-zinc-800 text-sm italic">
        <p>Para ejercer tus derechos de acceso, rectificación o eliminación, contacta con nosotros en: 
          <span className="text-purple-400 ml-2 font-mono">agencialeads@protonmail.com</span>
        </p>
      </div>
    </div>
  </div>
);

export default Privacidad;
