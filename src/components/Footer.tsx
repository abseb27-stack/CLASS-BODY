import React from 'react';
import { MessageCircle, Phone, Mail, Facebook, ArrowUp } from 'lucide-react';
import { Language } from '../types';
import { Translations } from '../translations';
import { CONTACT_INFO } from '../data';

interface FooterProps {
  lang: Language;
  t: Translations;
  onScrollTo: (id: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, t, onScrollTo }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0b1d30] text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#1769AA] flex items-center justify-center text-white">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-2">
                  <rect x="3" y="3" width="18" height="18" rx="2" className="stroke-white" />
                  <path d="M7 14l5-5 5 5" className="stroke-[#D6A84F]" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <span className="text-xl font-extrabold tracking-tight text-white leading-none block">
                  LIFTEX
                </span>
                <span className="text-[11px] font-semibold text-[#D6A84F] tracking-wide uppercase">
                  Elevators & Parts
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-300 max-w-sm leading-relaxed">
              {t.footer.description}
            </p>

            <div className="text-xs text-slate-400">
              {t.footer.demoDisclaimer}
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <button
                  type="button"
                  onClick={() => onScrollTo('#hero')}
                  className="hover:text-white transition-colors"
                >
                  {t.nav.home}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onScrollTo('#elevators')}
                  className="hover:text-white transition-colors"
                >
                  {t.nav.elevators}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onScrollTo('#spare-parts')}
                  className="hover:text-white transition-colors"
                >
                  {t.nav.spareParts}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onScrollTo('#services')}
                  className="hover:text-white transition-colors"
                >
                  {t.nav.services}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onScrollTo('#faq')}
                  className="hover:text-white transition-colors"
                >
                  {t.nav.faq}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onScrollTo('#contact')}
                  className="hover:text-white transition-colors"
                >
                  {t.nav.contact}
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Direct Summary */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              {t.footer.contactInfo}
            </h4>
            <div className="space-y-2 text-sm text-slate-300">
              <a
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-[#25D366] transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>{t.contact.whatsapp}: {CONTACT_INFO.whatsapp}</span>
              </a>
              <a
                href={CONTACT_INFO.phoneUrl}
                className="flex items-center gap-2.5 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-[#1769AA]" />
                <span>{t.contact.phone}: {CONTACT_INFO.phone}</span>
              </a>
              <a
                href={CONTACT_INFO.emailUrl}
                className="flex items-center gap-2.5 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-[#1769AA]" />
                <span>{t.contact.email}: {CONTACT_INFO.email}</span>
              </a>
              <a
                href={CONTACT_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-[#1877F2] transition-colors"
              >
                <Facebook className="w-4 h-4 text-[#1877F2]" />
                <span>{t.contact.facebook}: {CONTACT_INFO.facebook}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Rights & Back to Top */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>{t.footer.rights}</div>
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
