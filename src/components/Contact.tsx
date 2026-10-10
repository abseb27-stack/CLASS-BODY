import React, { useState } from 'react';
import {
  MessageCircle,
  Phone,
  Mail,
  Facebook,
  Check,
  Copy,
  ExternalLink,
  Sparkles,
  Send,
  HelpCircle,
} from 'lucide-react';
import { Language } from '../types';
import { Translations } from '../translations';
import { CONTACT_INFO } from '../data';

interface ContactProps {
  lang: Language;
  t: Translations;
  initialInquiryTopic?: string;
}

export const Contact: React.FC<ContactProps> = ({
  lang,
  t,
  initialInquiryTopic = '',
}) => {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<string>(
    initialInquiryTopic || t.contact.interestOptions.elevators
  );

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(label);
    setTimeout(() => setCopiedItem(null), 2500);
  };

  const getWhatsAppMessage = () => {
    const topic = selectedTopic || initialInquiryTopic || t.contact.interestOptions.elevators;
    if (lang === 'ar') {
      return encodeURIComponent(
        `مرحباً فريق LIFTEX، أود الاستفسار بخصوص: ${topic}. يرجى تزويدي بالمعلومات والأسعار.`
      );
    }
    if (lang === 'fr') {
      return encodeURIComponent(
        `Bonjour l'équipe LIFTEX, je souhaite me renseigner concernant : ${topic}. Merci de me contacter.`
      );
    }
    return encodeURIComponent(
      `Hello LIFTEX Team, I would like to inquire about: ${topic}. Please provide information and consultation.`
    );
  };

  const getEmailSubject = () => {
    const topic = selectedTopic || initialInquiryTopic || t.contact.interestOptions.elevators;
    return encodeURIComponent(`LIFTEX Inquiry: ${topic}`);
  };

  const whatsappLink = `https://wa.me/213550000000?text=${getWhatsAppMessage()}`;
  const emailLink = `mailto:${CONTACT_INFO.email}?subject=${getEmailSubject()}`;

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#102A43] text-white relative overflow-hidden">
      {/* Subtle Background Geometry */}
      <div className="absolute inset-0 bg-[radial-gradient(#1769AA20_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#D6A84F] text-xs font-bold uppercase tracking-wider mb-3">
            <span className="w-2 h-2 rounded-full bg-[#D6A84F]" />
            <span>{t.contact.directChannels}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            {t.contact.sectionTitle}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            {t.contact.sectionSubtitle}
          </p>
        </div>

        {/* Quick One-Click Intent Selector */}
        <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-5 sm:p-6 mb-10 shadow-lg">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold tracking-wider text-slate-300 uppercase block mb-1">
                {t.contact.interestLabel}
              </span>
              <div className="flex flex-wrap gap-2">
                {Object.values(t.contact.interestOptions).map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setSelectedTopic(option)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      selectedTopic === option
                        ? 'bg-[#1769AA] text-white ring-2 ring-[#D6A84F]'
                        : 'bg-white/10 text-slate-200 hover:bg-white/20'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-sm shadow-md transition-all shrink-0 active:scale-98"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>{t.contact.sendQuickMsg}</span>
            </a>
          </div>
        </div>

        {/* Direct Channels Cards (WhatsApp, Phone, Email, Facebook) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {/* WhatsApp Card */}
          <div className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-6 transition-all duration-200 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#25D366]/20 text-[#25D366] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <MessageCircle className="w-6 h-6 fill-current" />
              </div>
              <h3 className="font-bold text-lg text-white">
                {t.contact.whatsapp}
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                {t.contact.whatsappAction}
              </p>
              <div className="mt-3 font-mono text-sm text-[#D6A84F] tracking-wider">
                {CONTACT_INFO.whatsapp}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between gap-2">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-[#25D366] transition-colors"
              >
                <span>{t.contact.whatsappAction}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <button
                type="button"
                onClick={() => handleCopy(CONTACT_INFO.whatsapp, 'whatsapp')}
                className="p-1 text-slate-400 hover:text-white rounded transition-colors"
                title="Copy phone"
              >
                {copiedItem === 'whatsapp' ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          {/* Phone Card */}
          <div className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-6 transition-all duration-200 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#1769AA]/30 text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-white">
                {t.contact.phone}
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                {t.contact.phoneAction}
              </p>
              <div className="mt-3 font-mono text-sm text-[#D6A84F] tracking-wider">
                {CONTACT_INFO.phone}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between gap-2">
              <a
                href={CONTACT_INFO.phoneUrl}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-[#1769AA] transition-colors"
              >
                <span>{t.contact.phoneAction}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <button
                type="button"
                onClick={() => handleCopy(CONTACT_INFO.phone, 'phone')}
                className="p-1 text-slate-400 hover:text-white rounded transition-colors"
                title="Copy phone"
              >
                {copiedItem === 'phone' ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          {/* Email Card */}
          <div className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-6 transition-all duration-200 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#1769AA]/30 text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-white">
                {t.contact.email}
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                {t.contact.emailAction}
              </p>
              <div className="mt-3 font-mono text-xs text-[#D6A84F] break-all">
                {CONTACT_INFO.email}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between gap-2">
              <a
                href={emailLink}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-[#1769AA] transition-colors"
              >
                <span>{t.contact.emailAction}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <button
                type="button"
                onClick={() => handleCopy(CONTACT_INFO.email, 'email')}
                className="p-1 text-slate-400 hover:text-white rounded transition-colors"
                title="Copy email"
              >
                {copiedItem === 'email' ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          {/* Facebook Card */}
          <div className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-6 transition-all duration-200 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#1877F2]/20 text-[#1877F2] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Facebook className="w-6 h-6 fill-current" />
              </div>
              <h3 className="font-bold text-lg text-white">
                {t.contact.facebook}
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                {t.contact.facebookAction}
              </p>
              <div className="mt-3 font-mono text-sm text-[#D6A84F]">
                {CONTACT_INFO.facebook}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between gap-2">
              <a
                href={CONTACT_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-[#1877F2] transition-colors"
              >
                <span>{t.contact.facebookAction}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Demo Website Notice Badge */}
        <div className="mt-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>{t.contact.demoNotice}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
