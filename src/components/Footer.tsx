"use client";

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

type FooterDict = {
  description: string;
  company: string;
  aboutUs: string;
  whyChooseUs: string;
  testimonials: string;
  services: string;
  businessModeling: string;
  decisionOptimization: string;
  financialModeling: string;
  analytics: string;
  churnAnalysis: string;
  monteCarlo: string;
  support: string;
  memberFaq: string;
  contactUs: string;
  allRightsReserved: string;
  developedBy: string;
};

export default function Footer({ footer }: { footer: FooterDict }) {
  const params = useParams();
  const lang = params?.lang as string || 'en';

  return (
    <footer className="w-full bg-[#21272A] pt-24 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          {/* Column 1: Logo & Info */}
          <div className="lg:col-span-4 flex flex-col pr-8">
            <div className="flex items-center mb-6">
              <img src="/logo.png" alt="ZJ LOGIX Logo" className="h-10 w-auto brightness-0 invert" />
            </div>
            <p className="text-white font-medium text-[16px] md:text-[18px] leading-relaxed mb-8 max-w-[280px]">
              {footer.description}
            </p>
            <div className="flex items-center gap-4">
              {/* LinkedIn */}
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#7749F8] transition-colors">
                <svg className="w-[22px] h-[22px]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              {/* Facebook */}
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#7749F8] transition-colors">
                <svg className="w-[22px] h-[22px]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Company */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-extrabold text-[20px] mb-6">{footer.company}</h3>
            <ul className="flex flex-col gap-4">
              <li><Link href={`/${lang}/about`} className="text-white hover:text-[#7749F8] text-[16px] font-medium transition-colors">{footer.aboutUs}</Link></li>
              <li><Link href={`/${lang}`} className="text-white hover:text-[#7749F8] text-[16px] font-medium transition-colors">{footer.whyChooseUs}</Link></li>
              <li><Link href={`/${lang}`} className="text-white hover:text-[#7749F8] text-[16px] font-medium transition-colors">{footer.testimonials}</Link></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="lg:col-span-4">
            <h3 className="text-white font-extrabold text-[20px] mb-6">{footer.services}</h3>
            <ul className="flex flex-col gap-4">
              <li><Link href={`/${lang}/services/business-modeling`} className="text-white hover:text-[#7749F8] text-[16px] font-medium transition-colors">{footer.businessModeling}</Link></li>
              <li><Link href={`/${lang}/services/decision-optimization`} className="text-white hover:text-[#7749F8] text-[16px] font-medium transition-colors">{footer.decisionOptimization}</Link></li>
              <li><Link href={`/${lang}/services/financial-modeling`} className="text-white hover:text-[#7749F8] text-[16px] font-medium transition-colors">{footer.financialModeling}</Link></li>
              <li><Link href={`/${lang}/services/analytics`} className="text-white hover:text-[#7749F8] text-[16px] font-medium transition-colors">{footer.analytics}</Link></li>
              <li><Link href={`/${lang}/services/churn-analysis`} className="text-white hover:text-[#7749F8] text-[16px] font-medium transition-colors">{footer.churnAnalysis}</Link></li>
              <li><Link href={`/${lang}/services/monte-carlo-simulation`} className="text-white hover:text-[#7749F8] text-[16px] font-medium transition-colors">{footer.monteCarlo}</Link></li>
            </ul>
          </div>

          {/* Column 4: Support */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-extrabold text-[20px] mb-6">{footer.support}</h3>
            <ul className="flex flex-col gap-4">
              <li><Link href={`/${lang}`} className="text-white hover:text-[#7749F8] text-[16px] font-medium transition-colors">{footer.memberFaq}</Link></li>
              <li><Link href={`/${lang}/contact`} className="text-white hover:text-[#7749F8] text-[16px] font-medium transition-colors">{footer.contactUs}</Link></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t-2 border-gray-700 w-full mb-6"></div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 font-medium text-[15px]">
            <span className="font-bold text-white">ZJLOGIX 2025.</span> {footer.allRightsReserved}
          </p>
          <p className="text-white/60 font-medium text-[15px]">
            {footer.developedBy} <span className="font-bold text-[#7749F8] hover:text-[#59168B] cursor-pointer transition-colors">Hash Turn</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
