import React from 'react';
import { Wrench, MessageSquare, ArrowRight, ArrowLeft } from 'lucide-react';
import { Language } from '../types';
import { Translations } from '../translations';
import { SPARE_PARTS } from '../data';
import { SafeImage } from './SafeImage';

interface SparePartsProps {
  lang: Language;
  t: Translations;
  onAskAboutPart: (partName?: string) => void;
}

export const SpareParts: React.FC<SparePartsProps> = ({
  lang,
  t,
  onAskAboutPart,
}) => {
  const isRtl = lang === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section id="spare-parts" className="py-16 sm:py-20 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#102A43]/5 text-[#102A43] text-xs font-bold uppercase tracking-wider mb-3">
            <Wrench className="w-3.5 h-3.5 text-[#D6A84F]" />
            <span>OEM & Certified Quality</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#102A43] tracking-tight">
            {t.spareParts.sectionTitle}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#667085] leading-relaxed">
            {t.spareParts.sectionSubtitle}
          </p>
        </div>

        {/* Spare Parts Grid: 10 small, clean cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5">
          {SPARE_PARTS.map((part) => (
            <div
              key={part.id}
              onClick={() => onAskAboutPart(part.name[lang])}
              className="group cursor-pointer bg-[#F5F7FA] rounded-xl p-3 border border-slate-200/80 hover:border-[#1769AA]/40 hover:bg-white hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div className="relative aspect-square rounded-lg overflow-hidden bg-slate-200 mb-3">
                <SafeImage
                  src={part.image}
                  alt={part.name[lang]}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-[#102A43]/10 group-hover:bg-transparent transition-colors" />
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-bold text-[#102A43] group-hover:text-[#1769AA] transition-colors leading-snug">
                  {part.name[lang]}
                </h3>
                <span className="text-[11px] text-[#667085] block mt-0.5">
                  {part.category[lang]}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Action Banner & Button */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#102A43] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-1 text-center sm:text-start">
            <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white">
              {t.spareParts.inquireTitle}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              {t.spareParts.fastDeliveryNote}
            </p>
          </div>

          <button
            type="button"
            onClick={() => onAskAboutPart()}
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#1769AA] hover:bg-[#1f7ec8] text-white font-semibold text-sm sm:text-base shadow-sm transition-all shrink-0 active:scale-98"
          >
            <MessageSquare className="w-4 h-4 text-[#D6A84F]" />
            <span>{t.spareParts.askAboutPart}</span>
            <ArrowIcon className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
