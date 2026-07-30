"use client";

import { useState, useEffect } from "react";

type Testimonial = {
  text: string;
  name: string;
  title: string;
  image: string;
};

export default function TestimonialSlider({ testimonials }: { testimonials: Testimonial[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  // Auto-scroll every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col items-center mt-8">
      <div className="flex items-center justify-center w-full gap-5 md:gap-10 px-2">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className="flex-shrink-0 w-10 h-10 rounded-full border-2 border-[#AE4AFF] flex items-center justify-center text-black bg-white hover:bg-[#AE4AFF] hover:text-white transition-all duration-300 shadow-sm hover:shadow"
          aria-label="Previous Testimonial"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" /></svg>
        </button>

        {/* Testimonial Content Container with Smooth Sliding */}
        <div className="flex-1 overflow-hidden relative bg-white min-h-[240px]">
          {/* Purple Line with perfectly straight middle and razor-sharp curved crescent tips (matching screenshot exactly) */}
          <svg className="absolute z-10 left-0 top-0 bottom-0 w-4 h-full text-[#AE4AFF]" preserveAspectRatio="none" viewBox="0 0 16 100" fill="currentColor">
            <path d="M 16 0 C 6 2 0 8 0 15 L 0 85 C 0 92 6 98 16 100 C 8 96 5 90 5 85 L 5 15 C 5 10 8 4 16 0 Z" />
          </svg>

          <div
            className="flex transition-transform duration-[550ms] ease-[cubic-bezier(0.22,0.9,0.32,1)] w-full h-full"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((item, index) => (
              <div key={index} className="w-full flex-shrink-0 relative flex items-center min-h-[240px]">
                <div className="flex flex-col md:flex-row items-center justify-between w-full pl-12 pr-2 md:pr-4 py-8">
                  <div className="flex-1 text-left pr-4 md:pr-8">
                    <p className="text-black text-[15px] md:text-[16px] leading-[1.8] mb-6 font-normal">
                      <span className="text-[#AE4AFF] font-serif font-black pr-1 text-xl inline-block">“</span>
                      {item.text}
                      <span className="text-[#AE4AFF] font-serif font-black pl-1 text-xl inline-block">”</span>
                    </p>

                    <div>
                      <h4 className="text-black font-bold text-[17px]">{item.name}</h4>
                      <p className="text-gray-500 text-xs mt-0.5">{item.title}</p>
                      <div className="flex items-center gap-1 mt-2 text-[#FACC15]">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg key={star} className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex-shrink-0 mt-6 md:mt-0">
                    <div className="w-24 h-24 md:w-[110px] md:h-[110px] rounded-full overflow-hidden border border-gray-100 shadow-sm">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="flex-shrink-0 w-10 h-10 rounded-full border-2 border-[#AE4AFF] flex items-center justify-center text-black bg-white hover:bg-[#AE4AFF] hover:text-white transition-all duration-300 shadow-sm hover:shadow"
          aria-label="Next Testimonial"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
        </button>
      </div>

      {/* Dots */}
      <div className="flex items-center gap-2 mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`rounded-full transition-all duration-300 ${currentIndex === index ? "w-2.5 h-2.5 bg-[#AE4AFF]" : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
