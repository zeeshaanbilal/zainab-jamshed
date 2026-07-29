"use client";

import React from 'react';
import Script from 'next/script';

export default function BookingSection() {
  return (
    <section className="w-full bg-[#F5F1FA] py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-3xl md:text-[34px] font-bold text-black mb-4">
          Ready to Optimize Your Business?
        </h2>
        <p className="text-gray-500 max-w-3xl mx-auto text-[14px] md:text-[15px] leading-relaxed mb-8">
          Turn insights into impact. Our experts are here to help you cut costs, unlock growth, and make smarter decisions backed by data. Let's design a strategy tailored to your business goals.
        </p>

        <div className="mx-auto w-full max-w-[1060px] overflow-hidden flex justify-center">
          {/* Calendly inline widget begin */}
          <div 
            className="calendly-inline-widget w-full" 
            data-url="https://calendly.com/zjlogix/30min" 
            style={{ minWidth: '320px', height: '750px', overflow: 'hidden' }}
          ></div>
          <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
          {/* Calendly inline widget end */}
        </div>
      </div>
    </section>
  );
}
