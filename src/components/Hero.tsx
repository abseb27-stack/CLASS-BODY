import React from 'react';
import { ArrowDown, ArrowRight, ArrowLeft, Shield, Wrench, CheckCircle } from 'lucide-react';
import { Language } from '../types';
import { Translations } from '../translations';
import { SafeImage } from './SafeImage';

interface HeroProps {
  lang: Language;
  t: Translations;
  onScrollTo: (id: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, t, onScrollTo }) => {
  const isRtl = lang === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section id="hero" className="relative bg-white pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden">
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#102A4308_1px,transparent_1px),linear-gradient(to_bottom,#102A4308_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-6 space-y-6 lg:space-y-8">
            {/* Subtle Brand Tagline Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#102A43]/5 border border-[#102A43]/10 text-xs sm:text-sm font-semibold text-[#102A43]">
              <span className="w-2 h-2 rounded-full bg-[#D6A84F]" />
              <span className="text-[#1769AA] font-bold tracking-wide">LIFTEX</span>
              <span className="text-[#667085]">•</span>
              <span>{t.company.tagline}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#102A43] tracking-tight leading-[1.15]">
              {t.hero.title}
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#667085] leading-relaxed max-w-xl font-normal">
              {t.hero.subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <button
                type="button"
                onClick={() => onScrollTo('#elevators')}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#1769AA] hover:bg-[#125388] text-white font-semibold text-base shadow-sm transition-all active:scale-98"
              >
                <span>{t.hero.viewElevators}</span>
                <ArrowIcon className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => onScrollTo('#contact')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#F5F7FA] hover:bg-slate-200/80 text-[#102A43] font-semibold text-base border border-slate-200 transition-all active:scale-98"
              >
                <span>{t.hero.contactUs}</span>
              </button>
            </div>

            {/* Trust Highlights Strip */}
            <div className="pt-4 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="flex items-center gap-2 text-xs font-medium text-[#667085]">
                <Shield className="w-4 h-4 text-[#1769AA] shrink-0" />
                <span>EN 81 / CE Certified</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-[#667085]">
                <Wrench className="w-4 h-4 text-[#1769AA] shrink-0" />
                <span>Genuine Spare Parts</span>
              </div>
              <div className="col-span-2 sm:col-span-1 flex items-center gap-2 text-xs font-medium text-[#667085]">
                <CheckCircle className="w-4 h-4 text-[#D6A84F] shrink-0" />
                <span>Supply & Full Support</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero High-End Image Showcase */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200/90 bg-[#102A43]">
              {/* Main Image */}
              <div className="aspect-[4/3] sm:aspect-[16/11] w-full">
                <SafeImage
                  src="https://images.unsplash.com/photo-1541888946425-d0fbb186c5f3?q=80&w=1200&auto=format&fit=crop"
                  alt="LIFTEX Modern Elevator Architectural Installation"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Elegant floating overlay badge */}
              <div className="absolute bottom-4 start-4 end-4 sm:start-auto sm:end-4 bg-[#102A43]/90 text-white backdrop-blur-md px-4 py-3 rounded-xl border border-white/20 shadow-lg flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#1769AA] flex items-center justify-center shrink-0">
                  <span className="text-[#D6A84F] font-black text-sm">LX</span>
                </div>
                <div>
                  <div className="text-xs font-bold text-white tracking-wide uppercase">
                    LIFTEX Engineering
                  </div>
                  <div className="text-[11px] text-slate-300">
                    {t.hero.specSummary}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
