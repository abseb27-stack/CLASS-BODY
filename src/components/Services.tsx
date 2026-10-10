import React from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Language } from '../types';
import { Translations } from '../translations';
import { SERVICES } from '../data';
import { SafeImage } from './SafeImage';

interface ServicesProps {
  lang: Language;
  t: Translations;
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({
  lang,
  t,
  onSelectService,
}) => {
  const isRtl = lang === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section id="services" className="py-16 sm:py-20 bg-[#F5F7FA] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1769AA]/10 text-[#1769AA] text-xs font-bold uppercase tracking-wider mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1769AA]" />
            <span>End-to-End Engineering</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#102A43] tracking-tight">
            {t.services.sectionTitle}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#667085] leading-relaxed">
            {t.services.sectionSubtitle}
          </p>
        </div>

        {/* 4 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col"
            >
              {/* Photo */}
              <div className="relative aspect-[16/11] overflow-hidden bg-slate-900">
                <SafeImage
                  src={service.image}
                  alt={service.title[lang]}
                  className="w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 end-3 px-2.5 py-1 rounded bg-[#102A43]/85 text-white text-[11px] font-semibold backdrop-blur-xs border border-white/10">
                  {service.badge[lang]}
                </div>
              </div>

              {/* Text & Action */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-bold text-[#1769AA] mb-1">
                    0{index + 1}
                  </div>
                  <h3 className="text-lg font-bold text-[#102A43] group-hover:text-[#1769AA] transition-colors">
                    {service.title[lang]}
                  </h3>
                  <p className="mt-2 text-sm text-[#667085] leading-relaxed">
                    {service.description[lang]}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => onSelectService(service.title[lang])}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1769AA] hover:text-[#102A43] transition-colors"
                  >
                    <span>{t.services.learnMore}</span>
                    <ArrowIcon className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
