"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import LanguageSwitcher from './LanguageSwitcher';
import BookingButtonClient from './BookingButtonClient';

export default function MobileMenuClient({ dict, lang }: { dict: any, lang: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <button 
        className="text-gray-600 hover:text-gray-900 focus:outline-none"
        onClick={() => setIsOpen(true)}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
      </button>

      {/* Overlay & Side drawer - Rendered in Portal */}
      {mounted && isOpen && typeof document !== 'undefined' && (
        require('react-dom').createPortal(
          <>
            <div 
              className="fixed inset-0 bg-black/50 z-[100] lg:hidden"
              onClick={() => setIsOpen(false)}
            />
            <div 
              className={`fixed top-0 right-0 h-[100dvh] w-[280px] bg-white z-[110] transform transition-transform duration-300 ease-in-out lg:hidden flex flex-col overflow-y-auto ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
              <div className="flex items-center justify-between p-4 border-b border-gray-100 shrink-0">
                <img src="/logo.png" alt="ZJ Logix" className="h-8 w-auto" />
                <button 
                  className="text-gray-500 hover:text-gray-800 focus:outline-none"
                  onClick={() => setIsOpen(false)}
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              </div>

              <div className="flex flex-col py-4 px-6 space-y-4 font-medium text-gray-700">
                <Link href={`/${lang}`} onClick={() => setIsOpen(false)} className="hover:text-[#7749F8]">{dict.navbar.home}</Link>
                <Link href={`/${lang}/about`} onClick={() => setIsOpen(false)} className="hover:text-[#7749F8]">{dict.navbar.aboutUs}</Link>
                
                <div className="flex flex-col space-y-3">
                  <div 
                    className="flex items-center justify-between cursor-pointer hover:text-[#7749F8]"
                    onClick={() => setServicesOpen(!servicesOpen)}
                  >
                    <span>{dict.navbar.services}</span>
                    <svg className={`w-4 h-4 transform transition-transform ${servicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </div>
                  {servicesOpen && (
                    <div className="flex flex-col space-y-3 pl-4 border-l-2 border-gray-100 text-sm text-gray-600">
                      <Link href={`/${lang}/services/business-modeling`} onClick={() => setIsOpen(false)} className="hover:text-[#7749F8]">{dict.navbar.businessModeling}</Link>
                      <Link href={`/${lang}/services/decision-optimization`} onClick={() => setIsOpen(false)} className="hover:text-[#7749F8]">{dict.navbar.decisionOptimization}</Link>
                      <Link href={`/${lang}/services/financial-modeling`} onClick={() => setIsOpen(false)} className="hover:text-[#7749F8]">{dict.navbar.financialModeling}</Link>
                      <Link href={`/${lang}/services/analytics`} onClick={() => setIsOpen(false)} className="hover:text-[#7749F8]">{dict.navbar.analytics}</Link>
                      <Link href={`/${lang}/services/churn-analysis`} onClick={() => setIsOpen(false)} className="hover:text-[#7749F8]">{dict.navbar.churnAnalysis}</Link>
                      <Link href={`/${lang}/services/monte-carlo-simulation`} onClick={() => setIsOpen(false)} className="hover:text-[#7749F8]">{dict.navbar.monteCarlo}</Link>
                    </div>
                  )}
                </div>

                <Link href={`/${lang}/blogs`} onClick={() => setIsOpen(false)} className="hover:text-[#7749F8]">{dict.navbar.blogs}</Link>
                <Link href={`/${lang}/contact`} onClick={() => setIsOpen(false)} className="hover:text-[#7749F8]">{dict.navbar.contactUs}</Link>
              </div>

              <div className="mt-auto p-6 flex flex-col space-y-4 border-t border-gray-100 shrink-0">
                <BookingButtonClient isMobile={true} text={dict.navbar.bookConsultation} />
              </div>
            </div>
          </>,
          document.body
        )
      )}
    </>
  );
}
