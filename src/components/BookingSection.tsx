"use client";

import React from 'react';
import { InlineWidget } from 'react-calendly';

type BookingDict = {
  title: string;
  subtitle: string;
};

export default function BookingSection({ booking }: { booking: BookingDict }) {
  return (
    <section className="w-full bg-[#F5F1FA] py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-3xl md:text-[34px] font-bold text-black mb-4">
          {booking.title}
        </h2>
        <p className="text-gray-500 max-w-3xl mx-auto text-[14px] md:text-[15px] leading-relaxed mb-8">
          {booking.subtitle}
        </p>

        <div className="mx-auto max-w-[1060px] w-full">
          <InlineWidget 
            url="https://calendly.com/zjlogix/30min" 
            styles={{ minWidth: '320px', height: '1000px', overflow: 'hidden' }}
          />
        </div>
      </div>
    </section>
  );
}
