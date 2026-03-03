import Link from 'next/link';
import {
  Sparkles,
  ArrowRight,
  Star,
  Target,
  Fingerprint,
  Shirt,
  Camera,
  Layers,
  Palette,
  Zap,
  Eye,
} from 'lucide-react';

const FEATURES = [
  {
    icon: Target,
    title: 'Preservacion Total',
    desc: 'Tu look original se mantiene intacto. Solo transformamos lo que elijas.',
    gradient: 'from-violet-500 to-fuchsia-500',
  },
  {
    icon: Fingerprint,
    title: 'Tu Imagen Real',
    desc: 'Agalaz respeta tu fisonomia real. Cada prenda se adapta a ti, no al reves.',
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    icon: Palette,
    title: 'Color & Tejido',
    desc: 'Capturamos la esencia de cada prenda y la fusionamos con tu silueta.',
    gradient: 'from-amber-500 to-orange-500',
  },
];

const STEPS = [
  {
    num: '01',
    icon: Camera,
    title: 'Tu Selfie',
    desc: 'Una foto de tu rostro para que el resultado sea 100% tu.',
    accent: 'from-indigo-500 to-violet-500',
    glow: 'shadow-indigo-500/20',
  },
  {
    num: '02',
    icon: Layers,
    title: 'Tu Outfit Actual',
    desc: 'Foto de cuerpo completo. Preservamos todo excepto la prenda que cambies.',
    accent: 'from-emerald-500 to-teal-500',
    glow: 'shadow-emerald-500/20',
  },
  {
    num: '03',
    icon: Shirt,
    title: 'La Prenda Deseada',
    desc: 'Sube la prenda que te gusta de cualquier tienda. Nosotros la ponemos sobre ti.',
    accent: 'from-rose-500 to-pink-500',
    glow: 'shadow-rose-500/20',
  },
];

const STATS = [
  { value: '10K+', label: 'Usuarios', icon: Eye },
  { value: '<5s', label: 'Por render', icon: Zap },
  { value: '99%', label: 'Precision', icon: Target },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#050505] overflow-hidden">
      {/* Ambient background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-indigo-600/[0.07] rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-fuchsia-600/[0.05] rounded-full blur-[120px] animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute top-[40%] right-[20%] w-[300px] h-[300px] bg-cyan-600/[0.04] rounded-full blur-[100px] animate-float" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="relative z-10">
        {/* Nav */}
        <nav className="flex items-center justify-between px-6 py-5 max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-white to-white/80 rounded-2xl flex items-center justify-center shadow-lg shadow-white/10">
              <span className="text-black font-black text-xl italic">A</span>
            </div>
            <span className="text-xl font-black text-white tracking-tight">Agalaz</span>
          </div>
          <Link
            href="/try-on"
            className="group relative px-7 py-2.5 bg-white/10 backdrop-blur-sm text-white text-xs font-black uppercase tracking-widest rounded-full border border-white/10 hover:bg-white/20 hover:border-white/20 transition-all"
          >
            <span className="relative z-10">Probar Ahora</span>
          </Link>
        </nav>

        {/* Hero */}
        <section className="max-w-7xl mx-auto px-6 pt-16 pb-24 md:pt-24 md:pb-36">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 mb-8">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse-slow" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/50">
                  Probador Virtual con IA
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-[0.9]">
                PRUEBA
                <br />
                <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent italic">
                  ANTES DE
                </span>
                <br />
                COMPRAR
              </h1>

              <p className="text-base md:text-lg text-white/40 font-medium leading-relaxed mt-8 max-w-md">
                Sube tu foto, elige cualquier prenda y ve como te queda al instante.
                Tu cuerpo real, tu nuevo look.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-10">
                <Link
                  href="/try-on"
                  className="group flex items-center justify-center gap-3 px-10 py-4 bg-white text-black font-black uppercase tracking-widest text-xs rounded-full hover:shadow-xl hover:shadow-white/10 hover:scale-[1.02] transition-all"
                >
                  <Sparkles size={16} className="group-hover:rotate-12 transition-transform" />
                  Empieza Gratis
                </Link>
                <Link
                  href="/onboarding"
                  className="flex items-center justify-center gap-2 px-10 py-4 text-white/50 font-bold text-sm rounded-full hover:text-white/80 transition-colors"
                >
                  Como funciona
                  <ArrowRight size={14} />
                </Link>
              </div>

              {/* Social proof */}
              <div className="flex items-center gap-5 mt-12 pt-8 border-t border-white/5">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={12} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <span className="text-xs text-white/30 font-medium">
                  +10,000 usuarios ya prueban ropa con IA
                </span>
              </div>
            </div>

            {/* Visual mockup */}
            <div className="animate-fade-in-delay hidden lg:block">
              <div className="relative">
                {/* Phone mockup */}
                <div className="relative mx-auto w-72 h-[520px] bg-gradient-to-b from-white/[0.08] to-white/[0.02] rounded-[3rem] border border-white/10 p-3 shadow-2xl shadow-black/50">
                  <div className="w-full h-full rounded-[2.4rem] bg-gradient-to-br from-[#0f0f0f] to-[#1a1a2e] overflow-hidden flex flex-col items-center justify-center gap-6 p-6">
                    {/* Mini upload cards */}
                    <div className="grid grid-cols-3 gap-3 w-full">
                      {[
                        { icon: Camera, label: 'Selfie', color: 'from-indigo-500/20 to-violet-500/20', border: 'border-indigo-500/30' },
                        { icon: Layers, label: 'Outfit', color: 'from-emerald-500/20 to-teal-500/20', border: 'border-emerald-500/30' },
                        { icon: Shirt, label: 'Prenda', color: 'from-rose-500/20 to-pink-500/20', border: 'border-rose-500/30' },
                      ].map((card, i) => (
                        <div key={i} className={`aspect-[3/4] rounded-2xl bg-gradient-to-b ${card.color} border ${card.border} flex flex-col items-center justify-center gap-2`}>
                          <card.icon size={18} className="text-white/60" />
                          <span className="text-[8px] font-bold text-white/40 uppercase">{card.label}</span>
                        </div>
                      ))}
                    </div>
                    {/* Render button mockup */}
                    <div className="w-full py-3 bg-white/10 rounded-2xl flex items-center justify-center gap-2 border border-white/10">
                      <Sparkles size={14} className="text-indigo-400" />
                      <span className="text-xs font-bold text-white/60">Renderizar</span>
                    </div>
                    {/* Result placeholder */}
                    <div className="w-full flex-1 rounded-2xl bg-gradient-to-br from-indigo-500/10 via-transparent to-fuchsia-500/10 border border-white/5 flex items-center justify-center">
                      <div className="text-center">
                        <Sparkles size={24} className="text-white/20 mx-auto mb-2" />
                        <span className="text-[10px] text-white/20 font-medium">Tu resultado aqui</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Floating badge */}
                <div className="absolute -top-4 -right-4 px-4 py-2 bg-emerald-500/20 border border-emerald-500/30 rounded-2xl backdrop-blur-sm animate-float">
                  <span className="text-xs font-bold text-emerald-400">IA Activa</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats bar */}
        <section className="max-w-7xl mx-auto px-6 pb-24">
          <div className="grid grid-cols-3 gap-4 md:gap-8 p-6 md:p-8 rounded-3xl bg-white/[0.02] border border-white/[0.06]">
            {STATS.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <stat.icon size={14} className="text-indigo-400" />
                  <span className="text-2xl md:text-4xl font-black text-white tracking-tight">{stat.value}</span>
                </div>
                <span className="text-[10px] md:text-xs font-bold text-white/30 uppercase tracking-widest">{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="max-w-7xl mx-auto px-6 pb-32">
          <div className="text-center mb-16">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-400/60 mb-4 block">Tecnologia</span>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
              Moda que se{' '}
              <span className="bg-gradient-to-r from-indigo-400 to-fuchsia-400 bg-clip-text text-transparent italic">
                Adapta a Ti
              </span>
            </h2>
            <p className="text-white/30 mt-5 max-w-lg mx-auto text-sm">
              Composicion editorial con IA que respeta cada detalle de tu imagen.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {FEATURES.map((f, i) => (
              <div
                key={i}
                className={`stagger-${i + 1} group relative p-8 rounded-3xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12] transition-all hover:bg-white/[0.04]`}
              >
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${f.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                  <f.icon size={22} className="text-white" />
                </div>
                <h3 className="text-lg font-black text-white mb-3 tracking-tight">{f.title}</h3>
                <p className="text-white/35 font-medium leading-relaxed text-sm">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section className="max-w-7xl mx-auto px-6 pb-32">
          <div className="text-center mb-16">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-400/60 mb-4 block">Proceso</span>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
              3 Pasos.{' '}
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent italic">
                Tu Nuevo Look.
              </span>
            </h2>
            <p className="text-white/30 mt-5 max-w-md mx-auto text-sm">
              Tan facil como hacerte un selfie.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {STEPS.map((item, i) => (
              <div key={i} className="relative group">
                <div className={`p-8 rounded-3xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12] transition-all hover:shadow-2xl ${item.glow}`}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.accent} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                      <item.icon size={24} className="text-white" />
                    </div>
                    <span className="text-5xl font-black text-white/[0.06] tracking-tighter">{item.num}</span>
                  </div>
                  <h3 className="text-xl font-black text-white mb-3 tracking-tight">{item.title}</h3>
                  <p className="text-white/35 text-sm leading-relaxed">{item.desc}</p>
                </div>
                {i < 2 && (
                  <div className="hidden md:flex absolute top-1/2 -right-3 transform -translate-y-1/2 z-10 w-6 h-6 bg-white/5 rounded-full items-center justify-center border border-white/10">
                    <ArrowRight size={10} className="text-white/30" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              href="/try-on"
              className="group inline-flex items-center gap-3 px-12 py-5 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-black uppercase tracking-widest text-xs rounded-full hover:shadow-xl hover:shadow-indigo-500/20 hover:scale-[1.02] transition-all"
            >
              <Sparkles size={16} className="group-hover:rotate-12 transition-transform" />
              Empieza Gratis
            </Link>
          </div>
        </section>

        {/* Final CTA */}
        <section className="max-w-7xl mx-auto px-6 pb-24">
          <div className="relative rounded-[2.5rem] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-violet-600/10 to-fuchsia-600/20" />
            <div className="absolute inset-0 bg-[#050505]/60" />
            <div className="relative px-8 py-20 md:py-28 text-center">
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-4">
                Tu proximo look te espera
              </h2>
              <p className="text-white/40 text-sm mb-10 max-w-md mx-auto">
                Prueba cualquier prenda de cualquier tienda. Sin compromiso, sin registro.
              </p>
              <Link
                href="/try-on"
                className="group inline-flex items-center gap-3 px-12 py-5 bg-white text-black font-black uppercase tracking-widest text-xs rounded-full hover:shadow-xl hover:shadow-white/10 hover:scale-[1.02] transition-all"
              >
                <Sparkles size={16} className="group-hover:rotate-12 transition-transform" />
                Probar Ahora
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/5 py-8 px-6 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-white to-white/80 rounded-xl flex items-center justify-center">
                <span className="text-black font-black italic text-sm">A</span>
              </div>
              <span className="font-black text-white/50 text-sm">Agalaz</span>
            </div>
            <p className="text-white/15 text-xs">
              &copy; 2025 Agalaz. Probador virtual con IA.
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}
