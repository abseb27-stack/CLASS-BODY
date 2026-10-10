/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Language } from './types';
import { translations } from './translations';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Elevators } from './components/Elevators';
import { SpareParts } from './components/SpareParts';
import { Services } from './components/Services';
import { WhyLiftex } from './components/WhyLiftex';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [inquiryTopic, setInquiryTopic] = useState<string>('');

  const t = translations[lang];

  useEffect(() => {
    // Update HTML lang and dir attributes for correct RTL / LTR typography
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  const handleScrollTo = (selector: string) => {
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectElevatorInquiry = (elevatorTitle: string) => {
    setInquiryTopic(elevatorTitle);
    handleScrollTo('#contact');
  };

  const handleAskAboutPart = (partName?: string) => {
    if (partName) {
      setInquiryTopic(partName);
    } else {
      setInquiryTopic(t.contact.interestOptions.parts);
    }
    handleScrollTo('#contact');
  };

  const handleSelectServiceInquiry = (serviceTitle: string) => {
    setInquiryTopic(serviceTitle);
    handleScrollTo('#contact');
  };

  return (
    <div className="min-h-screen bg-[#F5F7FA] text-[#102A43] overflow-x-hidden flex flex-col font-sans">
      {/* Top Navigation */}
      <Navbar
        currentLang={lang}
        onLanguageChange={setLang}
        t={t}
      />

      {/* Main One-Page Content in exact ordered sequence */}
      <main className="flex-1">
        {/* 1. Hero */}
        <Hero
          lang={lang}
          t={t}
          onScrollTo={handleScrollTo}
        />

        {/* 2. Elevators */}
        <Elevators
          lang={lang}
          t={t}
          onSelectInquiry={handleSelectElevatorInquiry}
        />

        {/* 3. Spare Parts */}
        <SpareParts
          lang={lang}
          t={t}
          onAskAboutPart={handleAskAboutPart}
        />

        {/* 4. Services */}
        <Services
          lang={lang}
          t={t}
          onSelectService={handleSelectServiceInquiry}
        />

        {/* 5. Why LIFTEX */}
        <WhyLiftex
          lang={lang}
          t={t}
        />

        {/* 5.1 Collapsible Frequently Asked Questions */}
        <FAQ
          lang={lang}
          t={t}
          onAskQuestion={() => handleScrollTo('#contact')}
        />

        {/* 6. Contact */}
        <Contact
          lang={lang}
          t={t}
          initialInquiryTopic={inquiryTopic}
        />
      </main>

      {/* 7. Footer */}
      <Footer
        lang={lang}
        t={t}
        onScrollTo={handleScrollTo}
      />
    </div>
  );
}
