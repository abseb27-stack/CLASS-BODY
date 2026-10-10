import React from 'react';
import { ShieldCheck, Award, Wrench, Headphones } from 'lucide-react';
import { Language } from '../types';
import { Translations } from '../translations';
import { WHY_LIFTEX } from '../data';

interface WhyLiftexProps {
  lang: Language;
  t: Translations;
}

export const WhyLiftex: React.FC<WhyLiftexProps> = ({ lang, t }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#1769AA]" />;
      case 'Award':
        return <Award className="w-6 h-6 text-[#D6A84F]" />;
      case 'Wrench':
        return <Wrench className="w-6 h-6 text-[#1769AA]" />;
      case 'Headphones':
        return <Headphones className="w-6 h-6 text-[#1769AA]" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-[#1769AA]" />;
    }
  };

  return (
    <section id="why-us" className="py-16 sm:py-20 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#102A43]/5 text-[#102A43] text-xs font-bold uppercase tracking-wider mb-3">
            <span className="w-2 h-2 rounded-full bg-[#D6A84F]" />
            <span>{t.company.fullName}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#102A43] tracking-tight">
            {t.whyUs.sectionTitle}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#667085] leading-relaxed">
            {t.whyUs.sectionSubtitle}
          </p>
        </div>

        {/* 4 Clean Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_LIFTEX.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-[#F5F7FA] border border-slate-200/80 hover:border-[#1769AA]/30 hover:bg-white hover:shadow-md transition-all duration-200 flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl bg-white shadow-xs border border-slate-200 flex items-center justify-center mb-5">
                {getIcon(item.icon)}
              </div>
              <h3 className="text-lg font-bold text-[#102A43] mb-2">
                {item.title[lang]}
              </h3>
              <p className="text-sm text-[#667085] leading-relaxed">
                {item.description[lang]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
