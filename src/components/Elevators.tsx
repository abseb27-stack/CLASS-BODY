import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, Eye, MessageSquare } from 'lucide-react';
import { ElevatorItem, Language } from '../types';
import { Translations } from '../translations';
import { ELEVATORS } from '../data';
import { SafeImage } from './SafeImage';
import { ElevatorModal } from './ElevatorModal';

interface ElevatorsProps {
  lang: Language;
  t: Translations;
  onSelectInquiry: (subject: string) => void;
}

export const Elevators: React.FC<ElevatorsProps> = ({
  lang,
  t,
  onSelectInquiry,
}) => {
  const [selectedElevator, setSelectedElevator] = useState<ElevatorItem | null>(null);

  const isRtl = lang === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section id="elevators" className="py-16 sm:py-20 bg-[#F5F7FA] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1769AA]/10 text-[#1769AA] text-xs font-bold uppercase tracking-wider mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1769AA]" />
            <span>LIFTEX Systems</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#102A43] tracking-tight">
            {t.elevators.sectionTitle}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#667085] leading-relaxed">
            {t.elevators.sectionSubtitle}
          </p>
        </div>

        {/* Elevators Grid (6 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {ELEVATORS.map((elevator) => (
            <div
              key={elevator.id}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                <SafeImage
                  src={elevator.image}
                  alt={elevator.title[lang]}
                  className="w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
                {/* Subtle gradient overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              </div>

              {/* Card Content */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#102A43] group-hover:text-[#1769AA] transition-colors">
                    {elevator.title[lang]}
                  </h3>
                  <p className="mt-2 text-sm text-[#667085] leading-relaxed line-clamp-2">
                    {elevator.description[lang]}
                  </p>
                </div>

                {/* Card Action Buttons */}
                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedElevator(elevator)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-[#1769AA] hover:bg-[#1769AA]/10 transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>{t.elevators.viewDetails}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => onSelectInquiry(elevator.title[lang])}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#102A43] hover:bg-[#1769AA] text-white transition-colors"
                  >
                    <span>{t.elevators.inquireNow}</span>
                    <ArrowIcon className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Details Modal */}
      <ElevatorModal
        elevator={selectedElevator}
        isOpen={Boolean(selectedElevator)}
        onClose={() => setSelectedElevator(null)}
        lang={lang}
        t={t}
        onInquire={(title) => onSelectInquiry(title)}
      />
    </section>
  );
};
