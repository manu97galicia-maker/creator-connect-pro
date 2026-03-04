'use client';

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
  ArrowDown,
} from 'lucide-react';
import { useLanguage } from '@/components/LanguageProvider';
import { LanguageToggle } from '@/components/LanguageToggle';

const FEATURE_META = [
  { icon: Target, gradient: 'from-violet-500 to-fuchsia-500' },
  { icon: Fingerprint, gradient: 'from-cyan-500 to-blue-500' },
  { icon: Palette, gradient: 'from-amber-500 to-orange-500' },
];

const STEP_META = [
  { icon: Camera, accent: 'from-indigo-500 to-violet-500', glow: 'shadow-indigo-500/20' },
  { icon: Layers, accent: 'from-emerald-500 to-teal-500', glow: 'shadow-emerald-500/20' },
  { icon: Shirt, accent: 'from-rose-500 to-pink-500', glow: 'shadow-rose-500/20' },
];

const STAT_ICONS = [Eye, Zap, Target];
const STAT_VALUES = ['10K+', '<5s', '99%'];

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-[#030303] overflow-hidden">
      {/* Subtle ambient */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-indigo-600/[0.04] rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-fuchsia-600/[0.03] rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10">
        {/* Nav */}
        <nav className="flex items-center justify-between px-6 md:px-12 py-6 max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-2xl flex items-center justify-center">
              <span className="text-black font-black text-xl italic">A</span>
            </div>
            <span className="text-xl font-black text-white tracking-tight">{t.nav.brand}</span>
          </div>
          <div className="flex items-center gap-4">
            <LanguageToggle variant="dark" />
            <Link
              href="/try-on"
              className="px-6 py-2.5 text-white/60 text-xs font-bold uppercase tracking-widest hover:text-white transition-colors"
            >
              {t.nav.tryNow}
            </Link>
          </div>
        </nav>

        {/* Hero — editorial fashion */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 pt-12 pb-8 md:pt-20 md:pb-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="animate-fade-in">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 mb-10">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse-slow" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">
                  {t.hero.badge}
                </span>
              </div>

              {/* Serif editorial headline */}
              <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] text-white leading-[0.85] tracking-tight">
                <span className="font-black">{t.hero.titleLine1}</span>
                <br />
                <span className="italic font-normal text-white/50">
                  {t.hero.titleLine2}
                </span>
                <br />
                <span className="font-black">{t.hero.titleLine3}</span>
              </h1>

              <p className="text-sm md:text-base text-white/30 leading-relaxed mt-8 max-w-sm font-light">
                {t.hero.subtitle}
              </p>

              {/* Primary CTA — very prominent */}
              <div className="mt-12 flex flex-col sm:flex-row items-start gap-4">
                <Link
                  href="/try-on"
                  className="group relative inline-flex items-center gap-3 px-12 py-5 bg-white text-black font-black uppercase tracking-[0.2em] text-sm rounded-full hover:scale-[1.03] hover:shadow-2xl hover:shadow-white/20 transition-all"
                >
                  <Sparkles size={18} className="group-hover:rotate-12 transition-transform" />
                  {t.hero.ctaFree}
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/onboarding"
                  className="inline-flex items-center gap-2 px-6 py-5 text-white/30 font-medium text-sm hover:text-white/60 transition-colors"
                >
                  {t.hero.ctaSecondary}
                  <ArrowDown size={14} />
                </Link>
              </div>

              {/* Social proof */}
              <div className="flex items-center gap-4 mt-16 pt-8 border-t border-white/5">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={10} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <span className="text-[11px] text-white/20 font-medium">{t.hero.socialProof}</span>
              </div>
            </div>

            {/* Phone mockup */}
            <div className="animate-fade-in-delay hidden lg:flex justify-center">
              <div className="relative">
                <div className="relative w-72 h-[520px] bg-gradient-to-b from-white/[0.06] to-white/[0.02] rounded-[3rem] border border-white/[0.08] p-3 shadow-2xl shadow-black/50">
                  <div className="w-full h-full rounded-[2.4rem] bg-gradient-to-br from-[#0a0a0a] to-[#111118] overflow-hidden flex flex-col items-center justify-center gap-5 p-5">
                    <div className="grid grid-cols-3 gap-2.5 w-full">
                      {[
                        { icon: Camera, label: t.mockup.selfie, color: 'from-indigo-500/20 to-violet-500/20', border: 'border-indigo-500/20' },
                        { icon: Layers, label: t.mockup.outfit, color: 'from-emerald-500/20 to-teal-500/20', border: 'border-emerald-500/20' },
                        { icon: Shirt, label: t.mockup.garment, color: 'from-rose-500/20 to-pink-500/20', border: 'border-rose-500/20' },
                      ].map((card, i) => (
                        <div key={i} className={`aspect-[3/4] rounded-xl bg-gradient-to-b ${card.color} border ${card.border} flex flex-col items-center justify-center gap-2`}>
                          <card.icon size={16} className="text-white/50" />
                          <span className="text-[7px] font-bold text-white/30 uppercase">{card.label}</span>
                        </div>
                      ))}
                    </div>
                    <div className="w-full py-3 bg-white/10 rounded-xl flex items-center justify-center gap-2 border border-white/10">
                      <Sparkles size={12} className="text-indigo-400" />
                      <span className="text-[10px] font-bold text-white/50">{t.mockup.render}</span>
                    </div>
                    <div className="w-full flex-1 rounded-xl bg-gradient-to-br from-indigo-500/5 via-transparent to-fuchsia-500/5 border border-white/5 flex items-center justify-center">
                      <div className="text-center">
                        <Sparkles size={20} className="text-white/15 mx-auto mb-2" />
                        <span className="text-[9px] text-white/15 font-medium">{t.mockup.resultPlaceholder}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-3 -right-3 px-3 py-1.5 bg-emerald-500/20 border border-emerald-500/30 rounded-full backdrop-blur-sm animate-float">
                  <span className="text-[10px] font-bold text-emerald-400">{t.mockup.aiBadge}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats bar */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 pb-24 md:pb-32">
          <div className="grid grid-cols-3 gap-4 md:gap-8 p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
            {[t.stats.users, t.stats.perRender, t.stats.precision].map((label, i) => {
              const Icon = STAT_ICONS[i];
              return (
                <div key={i} className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <Icon size={14} className="text-white/30" />
                    <span className="text-2xl md:text-4xl font-black text-white tracking-tight">{STAT_VALUES[i]}</span>
                  </div>
                  <span className="text-[9px] md:text-[10px] font-bold text-white/20 uppercase tracking-widest">{label}</span>
                </div>
              );
            })}
          </div>
        </section>

        {/* Features — editorial grid */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 pb-32 md:pb-40">
          <div className="text-center mb-20">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/20 mb-6 block">
              {t.features.sectionLabel}
            </span>
            <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white tracking-tight leading-[0.9]">
              {t.features.title}{' '}
              <span className="italic text-white/40">{t.features.titleHighlight}</span>
            </h2>
            <p className="text-white/20 mt-6 max-w-md mx-auto text-sm font-light">
              {t.features.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-white/[0.05] rounded-3xl overflow-hidden">
            {t.features.items.map((f, i) => {
              const meta = FEATURE_META[i];
              return (
                <div
                  key={i}
                  className="group bg-[#030303] p-10 md:p-12 hover:bg-white/[0.02] transition-colors"
                >
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${meta.gradient} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                    <meta.icon size={22} className="text-white" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-white mb-3 italic">{f.title}</h3>
                  <p className="text-white/25 font-light leading-relaxed text-sm">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* How it works — editorial steps */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 pb-32 md:pb-40">
          <div className="text-center mb-20">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/20 mb-6 block">
              {t.steps.sectionLabel}
            </span>
            <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white tracking-tight leading-[0.9]">
              {t.steps.title}{' '}
              <span className="italic text-white/40">{t.steps.titleHighlight}</span>
            </h2>
            <p className="text-white/20 mt-6 max-w-sm mx-auto text-sm font-light">
              {t.steps.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {t.steps.items.map((item, i) => {
              const meta = STEP_META[i];
              const num = String(i + 1).padStart(2, '0');
              return (
                <div key={i} className="relative group">
                  <div className="p-8 md:p-10 rounded-3xl bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.1] transition-all">
                    <div className="flex items-center justify-between mb-8">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${meta.accent} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                        <meta.icon size={24} className="text-white" />
                      </div>
                      <span className="font-serif text-6xl font-black text-white/[0.04] italic">{num}</span>
                    </div>
                    <h3 className="font-serif text-xl font-bold text-white mb-3 italic tracking-tight">{item.title}</h3>
                    <p className="text-white/25 text-sm leading-relaxed font-light">{item.desc}</p>
                  </div>
                  {i < 2 && (
                    <div className="hidden md:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-10 w-8 h-8 bg-white/[0.03] rounded-full items-center justify-center border border-white/[0.08]">
                      <ArrowRight size={12} className="text-white/20" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Mid-page CTA */}
          <div className="text-center mt-20">
            <Link
              href="/try-on"
              className="group inline-flex items-center gap-3 px-14 py-5 bg-white text-black font-black uppercase tracking-[0.2em] text-sm rounded-full hover:scale-[1.03] hover:shadow-2xl hover:shadow-white/20 transition-all"
            >
              <Sparkles size={18} className="group-hover:rotate-12 transition-transform" />
              {t.hero.ctaFree}
            </Link>
          </div>
        </section>

        {/* Final CTA — editorial full-width */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 pb-24">
          <div className="relative rounded-[2rem] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-transparent to-fuchsia-600/15" />
            <div className="absolute inset-0 bg-[#030303]/70" />
            <div className="relative px-8 py-24 md:py-32 text-center">
              <h2 className="font-serif text-4xl md:text-6xl text-white tracking-tight leading-[0.9] mb-4">
                {t.cta.title}
              </h2>
              <p className="text-white/25 text-sm mb-12 max-w-md mx-auto font-light">
                {t.cta.subtitle}
              </p>
              <Link
                href="/try-on"
                className="group inline-flex items-center gap-3 px-14 py-5 bg-white text-black font-black uppercase tracking-[0.2em] text-sm rounded-full hover:scale-[1.03] hover:shadow-2xl hover:shadow-white/20 transition-all"
              >
                <Sparkles size={18} className="group-hover:rotate-12 transition-transform" />
                {t.cta.button}
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* Footer — minimal editorial */}
        <footer className="border-t border-white/[0.04] py-10 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 bg-white rounded-lg flex items-center justify-center">
                <span className="text-black font-black italic text-xs">A</span>
              </div>
              <span className="font-black text-white/30 text-sm tracking-tight">{t.nav.brand}</span>
            </div>
            <p className="text-white/10 text-xs font-light">
              {t.footer.copyright}
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}
