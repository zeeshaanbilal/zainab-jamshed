import Image from "next/image";
import Link from "next/link";
import TestimonialSlider from "@/components/TestimonialSlider";
import FAQAccordion from "@/components/FAQAccordion";
import ContactSection from "@/components/ContactSection";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";
import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/i18n-config";

export default async function Home(props: { params: Promise<{ lang: string }> }) {
  const params = await props.params;
  const lang = params.lang as Locale;
  const dict = await getDictionary(lang);

  return (
    <div className="flex w-full flex-1 flex-col">
      {/* Hero Section */}
      <section className="relative flex min-h-[600px] w-full items-center justify-center py-32 px-4 overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0 bg-zinc-900 overflow-hidden">
          <img
            src="/hero.jpg"
            alt="Glass Skyscraper"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex w-full flex-col items-center text-center text-white mt-10 px-4">
          <h1 className="mb-6 font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[3.8rem] font-semibold tracking-wide animate-slide-down" style={{ fontVariant: "small-caps", textShadow: "2px 2px 4px rgba(0,0,0,0.6)" }}>
            {dict.hero.title}
          </h1>
          <p className="mb-10 text-lg md:text-2xl lg:text-[24px] text-gray-200 animate-slide-up" style={{ textShadow: "1px 1px 4px rgba(0,0,0,0.8)" }}>
            {dict.hero.subtitle}
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-5">
            <Link
              href={`/${params.lang}/contact`}
              className="inline-flex items-center justify-center rounded-lg bg-[#7749F8] px-8 py-3.5 text-[15.5px] font-bold text-white transition-all hover:bg-[#A78BFA] hover:-translate-y-0.5 animate-slide-right"
            >
              {dict.hero.cta_primary}
            </Link>
            <Link
              href={`/${params.lang}/services`}
              className="inline-flex items-center justify-center rounded-lg border-2 border-[#7749F8] bg-black/20 px-8 py-3.5 text-[15.5px] font-bold text-white transition-all hover:bg-[#7749F8] hover:border-[#7749F8] hover:-translate-y-0.5 backdrop-blur-md animate-slide-left"
            >
              {dict.hero.cta_secondary}
            </Link>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="w-full bg-white py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Section Headers */}
          <div className="mb-16 flex flex-col items-center text-center">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-widest text-[#59168B] animate-slide-down">
              ABOUT US
            </h2>
            <div className="h-[3px] w-28 bg-[#7749F8] mt-5 mb-6 rounded-full"></div>
            <p className="text-gray-500 max-w-2xl text-base md:text-lg font-medium animate-slide-up">
              Helping businesses turn complex challenges into growth opportunities.
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="flex flex-col space-y-6">
              <h3 className="text-3xl md:text-4xl lg:text-[2.15rem] font-black leading-[1.25] text-black animate-slide-right">
                We turn Operational Complexity into Clarity and Growth
              </h3>
              <p className="text-gray-600 text-lg md:text-xl leading-relaxed animate-slide-up">
                At ZJ Logix, we help businesses turn complex challenges into growth opportunities. By combining innovative strategies with advanced analytics and modeling, we enable organizations to make smarter, risk-aware decisions. Here's why leading organizations choose to work with us:
              </p>

              <ul className="flex flex-col space-y-5 pt-4 animate-slide-up" style={{ animationDelay: '0.45s' }}>
                <li className="flex items-center gap-4">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#7749F8] text-white">
                    <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-[#3b3b58] font-bold text-base md:text-[1.05rem]">Proven track record of delivering measurable ROI</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#7749F8] text-white">
                    <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-[#3b3b58] font-bold text-base md:text-[1.05rem]">Expertise across multiple industries and markets</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#7749F8] text-white">
                    <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-[#3b3b58] font-bold text-base md:text-[1.05rem]">Tailored strategies for your unique business challenges</span>
                </li>
              </ul>

              <div className="pt-6">
                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#7749F8] px-8 py-3.5 text-base font-bold text-white transition-all hover:bg-[#A78BFA] hover:-translate-y-1 w-fit"
                >
                  Read More &gt;
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative h-[450px] w-full overflow-hidden rounded-2xl shadow-2xl transition-transform duration-500 hover:scale-[1.02] border border-gray-100 animate-slide-left">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
                alt="Dashboard on Laptop"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full bg-white py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Section Headers */}
          <div className="mb-16 flex flex-col items-center text-center animate-slide-up">
            <h2 className="text-2xl md:text-3xl font-bold uppercase text-[#59168B]">
              SERVICES
            </h2>
            <div className="h-[3px] w-24 bg-[#7749F8] mt-3 mb-6 rounded-full"></div>
            <p className="text-gray-600 max-w-2xl text-base md:text-lg font-medium">
              Optimization, simulation, analytics, and strategy – built to deliver ROI.
            </p>
          </div>

          {/* Three Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-12 text-center items-start">
            {/* Service 1 */}
            <div className="flex flex-col items-center">
              <div className="mb-6 h-40 w-full flex justify-center items-center animate-slide-right">
                <img src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_900/u_https://assets.cdn.filesafe.space/FvYZfLVlit3Fj7f39f8X/media/6983507ed017c3bf58636016.webp" alt="Business Modeling" className="h-full w-auto object-contain" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-black mb-3 animate-slide-right" style={{ animationDelay: '0.8s' }}>
                Business Modeling
              </h3>
              <p className="text-gray-600 text-sm md:text-base font-medium leading-relaxed px-4 animate-slide-right" style={{ animationDelay: '1s' }}>
                Developing robust business models for growth
              </p>
            </div>

            {/* Service 2 */}
            <div className="flex flex-col items-center">
              <div className="mb-6 h-40 w-full flex justify-center items-center animate-slide-up" style={{ animationDelay: '0.45s' }}>
                <img src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_900/u_https://assets.cdn.filesafe.space/FvYZfLVlit3Fj7f39f8X/media/691747201c143af6750861c6.svg" alt="Decision Optimization" className="h-full w-auto object-contain" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-black mb-3 animate-slide-up" style={{ animationDelay: '0.65s' }}>
                Decision Optimization
              </h3>
              <p className="text-gray-600 text-sm md:text-base font-medium leading-relaxed px-4 animate-slide-up" style={{ animationDelay: '0.85s' }}>
                Solving complex problems for better strategic choice
              </p>
            </div>

            {/* Service 3 */}
            <div className="flex flex-col items-center">
              <div className="mb-6 h-40 w-full flex justify-center items-center animate-slide-left">
                <img src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_900/u_https://assets.cdn.filesafe.space/FvYZfLVlit3Fj7f39f8X/media/692ad8c92b865e0c84ac37dc.svg" alt="Financial Modeling" className="h-full w-auto object-contain" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-black mb-3 animate-slide-left" style={{ animationDelay: '0.8s' }}>
                Financial Modeling
              </h3>
              <p className="text-gray-600 text-sm md:text-base font-medium leading-relaxed px-4 animate-slide-left" style={{ animationDelay: '1s' }}>
                Decisions with confidence—grounded in robust financial simulations
              </p>
            </div>
          </div>

          {/* View All Button */}
          <div className="mt-16 flex justify-center animate-slide-up">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#7749F8] px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-[#A78BFA] w-fit"
            >
              View all Services &gt;
            </a>
          </div>
        </div>
      </section>

      {/* Blogs Section */}
      <section className="w-full bg-white py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Section Headers */}
          <div className="mb-16 flex flex-col items-center text-center animate-slide-down">
            <h2 className="text-2xl md:text-3xl font-bold uppercase text-[#59168B]">
              BLOGS
            </h2>
            <div className="h-[3px] w-16 bg-[#7749F8] mt-3 mb-6 rounded-full"></div>
            <p className="text-gray-500 max-w-2xl text-base md:text-lg font-medium">
              Optimization, simulation, analytics, and strategy – built to deliver ROI.
            </p>
          </div>

          {/* Two Column Blog Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {/* Blog Card 1 */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 rounded-[24px] border border-gray-100 p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] bg-white animate-pop-in">
              <div className="h-36 w-full sm:w-44 flex-shrink-0 overflow-hidden rounded-xl">
                <img src="/blog1.png" alt="Blog 1" className="h-full w-full object-cover" />
              </div>
              <div className="flex flex-col justify-between h-full py-1 text-left">
                <div>
                  <h3 className="text-[22px] font-black text-black leading-tight mb-3">
                    Financial Modeling Best Practices
                  </h3>
                  <p className="text-gray-500 text-[16px] leading-relaxed mb-5 pr-2">
                    Essential techniques for building robust financial models that drive better business outcomes.
                  </p>
                </div>
                <a href="#" className="text-[14px] font-bold text-[#59168B] hover:text-[#7749F8]">
                  Read more &rarr;
                </a>
              </div>
            </div>

            {/* Blog Card 2 */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 rounded-[24px] border border-gray-100 p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] bg-white animate-pop-in" style={{ animationDelay: '0.5s' }}>
              <div className="h-36 w-full sm:w-44 flex-shrink-0 overflow-hidden rounded-xl">
                <img src="/blog2.png" alt="Blog 2" className="h-full w-full object-cover" />
              </div>
              <div className="flex flex-col justify-between h-full py-1 text-left">
                <div>
                  <h3 className="text-[22px] font-black text-black leading-tight mb-3">
                    Leveraging Data for Strategic Decision Making
                  </h3>
                  <p className="text-gray-500 text-[16px] leading-relaxed mb-5 pr-2">
                    Driving business transformation for creating into diverse field of opportunities and growth.
                  </p>
                </div>
                <a href="#" className="text-[14px] font-bold text-[#59168B] hover:text-[#7749F8]">
                  Read more &rarr;
                </a>
              </div>
            </div>
          </div>

          {/* View All Button */}
          <div className="mt-12 flex justify-center animate-slide-up" style={{ animationDelay: '0.7s' }}>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#7749F8] px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-[#A78BFA] w-fit"
            >
              View all Blogs &gt;
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full bg-white py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          {/* Section Headers */}
          <div className="mb-12 flex flex-col items-center">
            <h2 className="text-2xl md:text-3xl font-bold uppercase text-[#59168B]">
              TESTIMONIALS
            </h2>
            <div className="h-[3px] w-16 bg-[#7749F8] mt-3 mb-6 rounded-full"></div>
            <p className="text-gray-500 max-w-2xl text-base md:text-lg font-medium animate-slide-up">
              Results and relationships that keep clients coming back.
            </p>
          </div>

          <TestimonialSlider />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="w-full bg-white py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl text-center">
          {/* Section Headers */}
          <div className="mb-16 flex flex-col items-center animate-slide-up">
            <h2 className="text-2xl md:text-3xl font-black uppercase text-[#59168B]">
              WHY CHOOSE US
            </h2>
            <div className="h-[3px] w-16 bg-[#7749F8] mt-3 mb-6 rounded-full"></div>
            <p className="text-gray-500 max-w-2xl text-base md:text-lg font-medium">
              Proven outcomes, rigorous methods, and end-to-end execution.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5">
            {/* Card 1 */}
            <div className="flex flex-col items-start justify-between border-2 border-slate-400 rounded-[18px] py-6 px-6 bg-white hover:shadow-md transition-shadow min-h-[140px]">
              <p className="text-slate-400 text-[13px] md:text-sm font-medium animate-slide-down">Client Satisfaction</p>
              <h3 className="text-[#364153] font-bold text-[36px] md:text-[40px] leading-none tracking-tight animate-slide-up" style={{ animationDelay: '0.2s' }}>95%</h3>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col items-start justify-between border-2 border-slate-400 rounded-[18px] py-6 px-6 bg-white hover:shadow-md transition-shadow min-h-[140px]">
              <p className="text-slate-400 text-[13px] md:text-sm font-medium animate-slide-down">Revenue Growth</p>
              <h3 className="text-[#364153] font-bold text-[36px] md:text-[40px] leading-none tracking-tight animate-slide-up" style={{ animationDelay: '0.2s' }}>+18%</h3>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col items-start justify-between border-2 border-slate-400 rounded-[18px] py-6 px-6 bg-white hover:shadow-md transition-shadow min-h-[140px]">
              <p className="text-slate-400 text-[13px] md:text-sm font-medium animate-slide-down">Operational Cost</p>
              <h3 className="text-[#364153] font-bold text-[36px] md:text-[40px] leading-none tracking-tight animate-slide-up" style={{ animationDelay: '0.2s' }}>-27%</h3>
            </div>

            {/* Card 4 */}
            <div className="flex flex-col items-start justify-between border-2 border-slate-400 rounded-[18px] py-6 px-6 bg-white hover:shadow-md transition-shadow min-h-[140px]">
              <p className="text-slate-400 text-[13px] md:text-sm font-medium animate-slide-down">Projects Done</p>
              <h3 className="text-[#364153] font-bold text-[36px] md:text-[40px] leading-none tracking-tight animate-slide-up" style={{ animationDelay: '0.2s' }}>120+</h3>
            </div>

            {/* Card 5 */}
            <div className="flex flex-col items-start justify-between border-2 border-slate-400 rounded-[18px] py-6 px-6 bg-white hover:shadow-md transition-shadow min-h-[140px]">
              <p className="text-slate-400 text-[13px] md:text-sm font-medium animate-slide-down">Years of Trust</p>
              <h3 className="text-[#364153] font-bold text-[36px] md:text-[40px] leading-none tracking-tight animate-slide-up" style={{ animationDelay: '0.2s' }}>12+</h3>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full bg-white py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          {/* Section Headers */}
          <div className="mb-12 flex flex-col items-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[#59168B]">
              FAQ's
            </h2>
            <div className="h-[3px] w-12 bg-[#7749F8] mt-3 mb-4 rounded-full"></div>
            <p className="text-gray-500 max-w-2xl text-[15px] md:text-base font-medium animate-slide-up">
              Quick answers about scope, process, pricing, data, and timelines.
            </p>
          </div>

          <FAQAccordion />
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />

      {/* Booking Section */}
      <BookingSection 
        title={dict.booking.title} 
        description={dict.booking.description} 
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
