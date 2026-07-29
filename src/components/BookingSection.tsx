"use client";

import React from 'react';
import { InlineWidget } from 'react-calendly';
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

        <div className="mx-auto max-w-[950px] bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <InlineWidget url="https://calendly.com/zjlogix/30min" styles={{ height: '700px' }} />
        </div>
      </div>
    </section>
  );
}
