import React from 'react';

export default function ContactSection() {
  return (
    <section className="w-full bg-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1000px]">
        {/* Section Headers */}
        <div className="mb-16 flex flex-col items-center text-center">
          <h2 className="text-2xl md:text-3xl font-bold uppercase text-[#59168B]">
            CONTACT US
          </h2>
          <div className="h-[3px] w-12 bg-[#7749F8] mt-3 mb-4 rounded-full"></div>
          <p className="text-gray-500 max-w-2xl text-[15px] md:text-base font-medium">
            Tell us your challenges, we'll map the fastest path to impact.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10">
          {/* Left Column: Contact Info */}
          <div className="lg:col-span-4 flex flex-col gap-10">
            {/* Address */}
            <div className="flex items-start gap-4 overflow-hidden">
              <div className="flex-shrink-0 w-12 h-12 bg-[#F3EBFF] rounded-xl flex items-center justify-center text-[#7749F8] animate-slide-right">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              </div>
              <div className="pt-1 animate-slide-up">
                <h3 className="text-[#111827] font-bold text-[16px] mb-1 leading-tight">Address</h3>
                <p className="text-gray-500 text-[14px] leading-relaxed">
                  WAPDA Town, Phase-2, Multan Pakistan
                </p>
              </div>
            </div>

            {/* Call Us */}
            <div className="flex items-start gap-4 overflow-hidden">
              <div className="flex-shrink-0 w-12 h-12 bg-[#F3EBFF] rounded-xl flex items-center justify-center text-[#7749F8] animate-slide-right" style={{ animationDelay: '0.2s' }}>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.03 21c.73 0 .96-.64.96-1.18V16.37c0-.54-.45-.99-.99-.99z" />
                </svg>
              </div>
              <div className="pt-1 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <h3 className="text-[#111827] font-bold text-[16px] mb-1 leading-tight">Call Us</h3>
                <p className="text-gray-500 text-[14px]">
                  +92 306 0707490
                </p>
              </div>
            </div>

            {/* Email Us */}
            <div className="flex items-start gap-4 overflow-hidden">
              <div className="flex-shrink-0 w-12 h-12 bg-[#F3EBFF] rounded-xl flex items-center justify-center text-[#7749F8] animate-slide-right" style={{ animationDelay: '0.4s' }}>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </div>
              <div className="pt-1 animate-slide-up" style={{ animationDelay: '0.4s' }}>
                <h3 className="text-[#111827] font-bold text-[16px] mb-1 leading-tight">Email Us</h3>
                <p className="text-gray-500 text-[14px]">
                  contact@zjlogix.com
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-8">
            <form className="flex flex-col gap-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input 
                  type="text" 
                  placeholder="Your Name*" 
                  className="w-full px-4 py-3.5 rounded-lg border border-gray-200 bg-[#FAFAFA] text-[15px] focus:outline-none focus:border-[#7749F8] focus:ring-1 focus:ring-[#7749F8] transition-colors placeholder:text-gray-400"
                />
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg className="h-[18px] w-[18px] text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <input 
                    type="email" 
                    placeholder="Your Email*" 
                    className="w-full pl-11 pr-4 py-3.5 rounded-lg border border-gray-200 bg-[#FAFAFA] text-[15px] focus:outline-none focus:border-[#7749F8] focus:ring-1 focus:ring-[#7749F8] transition-colors placeholder:text-gray-400"
                  />
                </div>
              </div>
              
              <input 
                type="text" 
                placeholder="Subject*" 
                className="w-full px-4 py-3.5 rounded-lg border border-gray-200 bg-[#FAFAFA] text-[15px] focus:outline-none focus:border-[#7749F8] focus:ring-1 focus:ring-[#7749F8] transition-colors placeholder:text-gray-400"
              />
              
              <textarea 
                placeholder="Message*" 
                rows={5}
                className="w-full px-4 py-3.5 rounded-lg border border-gray-200 bg-[#FAFAFA] text-[15px] focus:outline-none focus:border-[#7749F8] focus:ring-1 focus:ring-[#7749F8] transition-colors placeholder:text-gray-400 resize-none"
              ></textarea>
              
              <div className="flex justify-end mt-2">
                <button 
                  type="submit" 
                  className="bg-[#7749F8] hover:bg-[#59168B] text-white font-medium py-[14px] px-8 rounded-lg transition-colors duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
