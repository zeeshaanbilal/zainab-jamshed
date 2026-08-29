"use client";

import { useState } from "react";

type FAQ = {
  question: string;
  answer: string;
};

export default function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-full max-w-[1000px] mx-auto flex flex-col gap-3 md:gap-4">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div 
            key={index} 
            className="border border-slate-200 rounded-[10px] bg-white overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full cursor-pointer flex items-center justify-between p-4 md:px-6 md:py-4 text-left focus:outline-none"
            >
              <span className={`font-bold text-[15px] md:text-[17px] transition-opacity duration-[400ms] ${isOpen ? 'text-[#111827]/70' : 'text-[#111827]'}`}>
                {faq.question}
              </span>
              <svg 
                className={`w-[12px] h-[12px] text-black transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-180' : ''}`} 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M6 9l6 6 6-6z" />
              </svg>
            </button>
            
            <div 
              className={`grid transition-[grid-template-rows] duration-[500ms] ease-[cubic-bezier(0.22,0.9,0.32,1)] ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
            >
              <div className="overflow-hidden">
                <div className={`p-4 md:px-6 md:pb-6 pt-0 text-gray-600 text-[15px] md:text-[16px] leading-relaxed text-left transition-opacity duration-[500ms] delay-100 ${isOpen ? 'opacity-75' : 'opacity-0'}`}>
                  {faq.answer}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
