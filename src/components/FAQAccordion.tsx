"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What services does ZJ Logix offer?",
    answer: "ZJ Logix specializes in data analytics, business intelligence, financial modeling, and strategic consulting. We help businesses make data-driven decisions through advanced analytics and custom solutions."
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on complexity and scope. Most analytics projects take 2-4 weeks, while comprehensive business intelligence implementations can take 6-12 weeks. We provide detailed timelines during our initial consultation."
  },
  {
    question: "What data sources do you work with?",
    answer: "We work with diverse data sources including ERP, CRM, financial, operational, supply chain, and marketing systems. We also integrate IoT data, cloud databases, survey results, web analytics, and third-party APIs to deliver comprehensive, data-driven insights."
  },
  {
    question: "How do you ensure data security?",
    answer: "Data security is our top priority. We follow industry best practices including encryption, secure data transmission, access controls, and compliance with relevant regulations. All team members sign NDAs and undergo security training."
  },
  {
    question: "Can you help with ongoing support?",
    answer: "Absolutely! We offer ongoing support and maintenance services to ensure your analytics solutions continue to deliver value. This includes system monitoring, updates, user training, and strategic guidance."
  },
  {
    question: "What makes ZJ Logix different?",
    answer: "Our team combines deep technical expertise with business acumen. We don't just build solutions - we ensure they drive real business value. Our approach is collaborative, transparent, and focused on your long-term success."
  }
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-[1000px] mx-auto flex flex-col gap-3 md:gap-4">
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
