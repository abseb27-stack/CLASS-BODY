import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare, ArrowRight, ArrowLeft } from 'lucide-react';
import { Language } from '../types';
import { Translations } from '../translations';
import { FAQ_ITEMS } from '../data';

interface FAQProps {
  lang: Language;
  t: Translations;
  onAskQuestion?: () => void;
}

export const FAQ: React.FC<FAQProps> = ({ lang, t, onAskQuestion }) => {
  // First item open by default for immediate discoverability
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    'installation-timeline': true,
  });

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const isRtl = lang === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section id="faq" className="py-16 sm:py-20 bg-[#F5F7FA] border-t border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1769AA]/10 text-[#1769AA] text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{t.faq.sectionTitle}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#102A43] tracking-tight">
            {t.faq.sectionTitle}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#667085] leading-relaxed">
            {t.faq.sectionSubtitle}
          </p>
        </div>

        {/* Collapsible Accordion List */}
        <div className="space-y-3.5">
          {FAQ_ITEMS.map((item) => {
            const isOpen = Boolean(openItems[item.id]);

            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-xs overflow-hidden transition-all duration-200 hover:border-[#1769AA]/40"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  className="w-full px-5 py-4 sm:px-6 sm:py-5 flex items-center justify-between gap-4 text-start focus:outline-none cursor-pointer select-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-[#102A43] text-sm sm:text-base leading-snug">
                    {item.question[lang]}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'bg-[#1769AA] text-white rotate-180'
                        : 'bg-[#F5F7FA] text-[#667085]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm sm:text-base text-[#667085] leading-relaxed border-t border-slate-100 pt-4 animate-in fade-in duration-200">
                    <p>{item.answer[lang]}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Optional Quick Assistance Strip */}
        {onAskQuestion && (
          <div className="mt-10 p-5 rounded-xl bg-white border border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-start shadow-xs">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#102A43]/5 text-[#1769AA] flex items-center justify-center shrink-0">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#102A43]">
                  {t.faq.stillHaveQuestions}
                </h4>
                <p className="text-xs text-[#667085]">
                  {t.hero.subtitle}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={onAskQuestion}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-[#1769AA] hover:bg-[#125388] text-white text-xs sm:text-sm font-semibold transition-colors shrink-0 shadow-xs"
            >
              <span>{t.faq.contactSupport}</span>
              <ArrowIcon className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
