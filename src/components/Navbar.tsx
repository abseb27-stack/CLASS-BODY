import React, { useState } from 'react';
import { Menu, X, Globe, ArrowUpRight } from 'lucide-react';
import { Language } from '../types';
import { Translations } from '../translations';

interface NavbarProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  t: Translations;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onLanguageChange,
  t,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#hero', label: t.nav.home },
    { href: '#elevators', label: t.nav.elevators },
    { href: '#spare-parts', label: t.nav.spareParts },
    { href: '#services', label: t.nav.services },
    { href: '#why-us', label: t.nav.whyUs },
    { href: '#faq', label: t.nav.faq },
    { href: '#contact', label: t.nav.contact },
  ];

  const handleScroll = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleScroll('#hero');
            }}
            className="flex items-center gap-3 group focus:outline-none"
          >
            {/* Logo Graphic: Architectural Elevator Hoistway */}
            <div className="w-11 h-11 rounded-xl bg-[#102A43] flex items-center justify-center p-2 shadow-sm text-white group-hover:bg-[#1769AA] transition-colors">
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-current stroke-2">
                <rect x="3" y="3" width="18" height="18" rx="2" className="stroke-white" />
                <line x1="12" y1="3" x2="12" y2="21" className="stroke-white/40" />
                <path d="M7 14l5-5 5 5" className="stroke-[#D6A84F]" strokeLinecap="round" strokeLinejoin="round" />
                <line x1="8" y1="18" x2="16" y2="18" className="stroke-[#D6A84F]" strokeLinecap="round" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-[#102A43] group-hover:text-[#1769AA] transition-colors leading-none">
                LIFTEX
              </span>
              <span className="text-[11px] font-semibold text-[#667085] tracking-wide mt-1 uppercase">
                Elevators & Parts
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 rtl:space-x-reverse">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll(link.href);
                }}
                className="px-3 py-2 rounded-lg text-sm font-medium text-[#102A43] hover:text-[#1769AA] hover:bg-slate-50 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action: Language Switcher & Contact Button */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language Switcher */}
            <div className="flex items-center bg-[#F5F7FA] p-1 rounded-lg border border-slate-200 text-xs font-semibold">
              <span className="px-1.5 text-slate-400">
                <Globe className="w-3.5 h-3.5" />
              </span>
              <button
                type="button"
                onClick={() => onLanguageChange('en')}
                className={`px-2.5 py-1 rounded transition-all ${
                  currentLang === 'en'
                    ? 'bg-[#102A43] text-white shadow-xs'
                    : 'text-[#667085] hover:text-[#102A43]'
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => onLanguageChange('fr')}
                className={`px-2.5 py-1 rounded transition-all ${
                  currentLang === 'fr'
                    ? 'bg-[#102A43] text-white shadow-xs'
                    : 'text-[#667085] hover:text-[#102A43]'
                }`}
              >
                FR
              </button>
              <button
                type="button"
                onClick={() => onLanguageChange('ar')}
                className={`px-2.5 py-1 rounded transition-all font-bold ${
                  currentLang === 'ar'
                    ? 'bg-[#102A43] text-white shadow-xs'
                    : 'text-[#667085] hover:text-[#102A43]'
                }`}
              >
                العربية
              </button>
            </div>

            {/* Contact Us CTA Button */}
            <button
              type="button"
              onClick={() => handleScroll('#contact')}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-[#1769AA] hover:bg-[#125388] text-white text-sm font-semibold shadow-xs transition-all active:scale-98"
            >
              <span>{t.nav.contactUs}</span>
              <ArrowUpRight className="w-4 h-4 rtl:rotate-270" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            {/* Mobile Compact Language Toggle */}
            <div className="flex items-center bg-[#F5F7FA] p-0.5 rounded-lg border border-slate-200 text-xs font-semibold">
              <button
                type="button"
                onClick={() => onLanguageChange('en')}
                className={`px-2 py-1 rounded ${
                  currentLang === 'en' ? 'bg-[#102A43] text-white' : 'text-slate-600'
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => onLanguageChange('fr')}
                className={`px-2 py-1 rounded ${
                  currentLang === 'fr' ? 'bg-[#102A43] text-white' : 'text-slate-600'
                }`}
              >
                FR
              </button>
              <button
                type="button"
                onClick={() => onLanguageChange('ar')}
                className={`px-2 py-1 rounded ${
                  currentLang === 'ar' ? 'bg-[#102A43] text-white' : 'text-slate-600'
                }`}
              >
                عربي
              </button>
            </div>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#102A43] hover:bg-slate-100 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll(link.href);
                }}
                className="px-3 py-2.5 rounded-lg text-base font-medium text-[#102A43] hover:text-[#1769AA] hover:bg-[#F5F7FA] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2 border-t border-slate-100">
            <button
              type="button"
              onClick={() => handleScroll('#contact')}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#1769AA] text-white font-semibold shadow-xs"
            >
              <span>{t.nav.contactUs}</span>
              <ArrowUpRight className="w-4 h-4 rtl:rotate-270" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
