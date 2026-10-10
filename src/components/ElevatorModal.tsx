import React, { useEffect } from 'react';
import { X, CheckCircle2, MessageCircle, ArrowRight, ArrowLeft } from 'lucide-react';
import { ElevatorItem, Language } from '../types';
import { Translations } from '../translations';
import { SafeImage } from './SafeImage';
import { CONTACT_INFO } from '../data';

interface ElevatorModalProps {
  elevator: ElevatorItem | null;
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  t: Translations;
  onInquire: (elevatorTitle: string) => void;
}

export const ElevatorModal: React.FC<ElevatorModalProps> = ({
  elevator,
  isOpen,
  onClose,
  lang,
  t,
  onInquire,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !elevator) return null;

  const isRtl = lang === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const specsList = [
    { label: t.elevators.capacity, value: elevator.specs.capacity[lang] },
    { label: t.elevators.speed, value: elevator.specs.speed[lang] },
    { label: t.elevators.stops, value: elevator.specs.floors[lang] },
    { label: t.elevators.idealFor, value: elevator.specs.applications[lang] },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#102A43]/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden z-10 my-8">
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-[#102A43] text-white">
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <span className="w-2.5 h-2.5 rounded-full bg-[#D6A84F]" />
            <h3 className="font-bold text-lg text-white tracking-wide">
              {elevator.title[lang]}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-slate-300 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
            aria-label={t.elevators.close}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Image */}
          <div className="relative h-64 sm:h-72 rounded-xl overflow-hidden shadow-inner border border-slate-200">
            <SafeImage
              src={elevator.image}
              alt={elevator.title[lang]}
              className="w-full h-full"
            />
            <div className="absolute top-3 end-3 bg-[#102A43]/85 text-white backdrop-blur-md px-3 py-1 rounded-md text-xs font-semibold border border-white/20">
              LIFTEX Verified
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xl font-bold text-[#102A43] mb-2">
              {elevator.title[lang]}
            </h4>
            <p className="text-[#667085] leading-relaxed text-sm sm:text-base">
              {elevator.detailText[lang]}
            </p>
          </div>

          {/* Specifications Table */}
          <div className="bg-[#F5F7FA] rounded-xl p-4 sm:p-5 border border-slate-200/80">
            <h5 className="text-xs font-bold uppercase tracking-wider text-[#102A43] mb-3.5 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#1769AA]" />
              {t.elevators.specifications}
            </h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-sm">
              {specsList.map((spec, index) => (
                <div key={index} className="bg-white p-3 rounded-lg border border-slate-200/60 shadow-xs">
                  <span className="block text-xs font-medium text-[#667085] mb-0.5">
                    {spec.label}
                  </span>
                  <span className="font-semibold text-[#102A43]">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-end gap-3 px-6 py-4 bg-slate-50 border-t border-slate-100">
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 rounded-lg border border-slate-300 text-[#667085] text-sm font-semibold hover:bg-slate-100 transition-colors"
          >
            {t.elevators.close}
          </button>
          <button
            type="button"
            onClick={() => {
              onInquire(elevator.title[lang]);
              onClose();
            }}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-[#1769AA] hover:bg-[#125388] text-white text-sm font-semibold shadow-sm transition-all"
          >
            <MessageCircle className="w-4 h-4 text-[#D6A84F]" />
            <span>{t.elevators.inquireNow}</span>
            <ArrowIcon className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
