import Link from 'next/link';
import Footer from '@/components/Footer';
import BookingSection from '@/components/BookingSection';

export default function AboutPage() {
  return (
    <div className="w-full flex flex-col min-h-screen">
      {/* Hero Banner */}
      <section className="relative w-full h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        {/* Background Image - Matching Home Page exactly */}
        <div className="absolute inset-0 z-0 bg-zinc-900 overflow-hidden">
          <img
            src="/hero.jpg"
            alt="Glass Skyscraper"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/65"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center text-white px-4">
          <h1 className="mb-4 text-5xl md:text-6xl lg:text-[5rem] font-bold tracking-tight animate-slide-down" style={{ fontFamily: 'var(--font-playfair)', fontVariant: 'small-caps', textShadow: "2px 2px 4px rgba(0,0,0,0.6)" }}>
            About Us
          </h1>
          <p className="text-lg md:text-[22px] font-medium mb-6 text-gray-100 animate-slide-down" style={{ animationDelay: '0.2s' }}>
            Driving measurable growth through data, strategy, and innovation.
          </p>
          <div className="flex items-center gap-2 text-base md:text-lg font-bold animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Link href="/" className="text-[#A78BFA] hover:text-[#7749F8] transition-colors">
              Home
            </Link>
            <span className="text-white">/</span>
            <span className="text-white">About Us</span>
          </div>
        </div>
      </section>

      {/* Main Content Area - Our Story Section */}
      <section className="w-full bg-white py-20 px-4 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1350px]">
          {/* Section Heading */}
          <div className="flex flex-col items-center text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold uppercase text-[#59168B] mb-2 tracking-wide">
              OUR STORY
            </h2>
            <img 
              src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_900/u_https://assets.cdn.filesafe.space/FvYZfLVlit3Fj7f39f8X/media/6929c2e28f155a0eab6a5ea9.svg" 
              alt="Decorative underline" 
              className="w-48 md:w-56 h-auto"
            />
          </div>

          {/* Layout matching screenshot proportions */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
            {/* Left Content (Wider) */}
            <div className="lg:col-span-8 flex flex-col gap-6 animate-slide-right">
              <h3 className="text-2xl md:text-[28px] lg:text-[32px] font-bold text-[#111827] leading-[1.3]">
                We began with a vision<br />
                to make consulting measurable and<br />
                impactful.
              </h3>
              
              <div className="text-gray-700 font-medium text-[15px] md:text-base leading-relaxed space-y-6">
                <p>
                  Founded with a vision to make business decisions smarter and faster, ZJ Logix was built on the idea that data is the new<br className="hidden lg:block" />
                  competitive edge. Unlike traditional consulting, which often stops at recommendations, we go further building models, simulations,<br className="hidden lg:block" />
                  and dashboards that empower leaders to act with confidence.
                </p>
                <p>
                  Over the years, we've worked with organizations of all sizes from agile startups to global enterprises helping them unlock<br className="hidden lg:block" />
                  efficiency, accelerate growth, and future-proof their strategies.
                </p>
              </div>
            </div>

            {/* Right Image (Narrower) */}
            <div className="lg:col-span-4 flex justify-center lg:justify-end animate-slide-left">
              <img 
                src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_900/u_https://assets.cdn.filesafe.space/FvYZfLVlit3Fj7f39f8X/media/6929c3956a32b285a69c5a0e.webp" 
                alt="Building the vision illustration" 
                className="w-full max-w-[350px] lg:max-w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="w-full bg-white py-20 px-4 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1350px]">
          {/* Section Heading */}
          <div className="flex flex-col items-center text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold uppercase text-[#59168B] mb-2 tracking-wide">
              OUR MISSION
            </h2>
            <img 
              src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_900/u_https://assets.cdn.filesafe.space/FvYZfLVlit3Fj7f39f8X/media/6929c2e28f155a0eab6a5ea9.svg" 
              alt="Decorative underline" 
              className="w-48 md:w-56 h-auto"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            {/* Left Image (Narrower) */}
            <div className="lg:col-span-3 flex justify-center lg:justify-start animate-slide-right">
              <img 
                src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_900/u_https://assets.cdn.filesafe.space/FvYZfLVlit3Fj7f39f8X/media/6929c7f88f155a4b836b28fc.svg" 
                alt="Our Mission illustration" 
                className="w-full max-w-[340px] lg:max-w-[90%] h-auto object-contain"
              />
            </div>

            {/* Right Content (Wider) */}
            <div className="lg:col-span-9 flex flex-col gap-6 animate-slide-left">
              <h3 className="text-2xl md:text-[28px] lg:text-[32px] font-bold text-[#111827] leading-[1.3] whitespace-nowrap overflow-visible">
                We help business grow smarter with data-driven strategies.
              </h3>
              
              <div className="text-gray-700 font-medium text-[15px] md:text-base leading-relaxed space-y-6 max-w-[95%]">
                <p>
                  To empower organizations with the tools, insights, and strategies needed to optimize operations, minimize risks, and maximize opportunities turning complexity into clarity and strategy into measurable success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="w-full bg-white py-20 px-4 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1350px]">
          {/* Section Heading */}
          <div className="flex flex-col items-center text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold uppercase text-[#59168B] mb-2 tracking-wide">
              WHAT WE DO
            </h2>
            <img 
              src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_900/u_https://assets.cdn.filesafe.space/FvYZfLVlit3Fj7f39f8X/media/6929c2e28f155a0eab6a5ea9.svg" 
              alt="Decorative underline" 
              className="w-48 md:w-56 h-auto"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start mt-8">
            {/* Left Image (Narrower) */}
            <div className="lg:col-span-3 flex justify-center lg:justify-start animate-slide-right pt-2">
              <img 
                src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_900/u_https://assets.cdn.filesafe.space/FvYZfLVlit3Fj7f39f8X/media/692ad8c92b865e0c84ac37dc.svg" 
                alt="What We Do illustration" 
                className="w-full max-w-[300px] h-auto object-contain"
              />
            </div>

            {/* Right Content (Wider) */}
            <div className="lg:col-span-9 flex flex-col gap-5 animate-slide-left">
              <h3 className="text-[26px] md:text-[30px] font-black text-black leading-[1.2] tracking-tight">
                We turn complex challenges<br className="hidden lg:block" />
                into growth opportunities
              </h3>
              
              <div className="text-gray-600 font-medium text-[14px] md:text-[15px] leading-relaxed">
                <p>
                  We help organizations transform operations into engines of growth by combining advanced technology, proven methodologies, and deep business expertise.
                </p>

                <ul className="space-y-2.5 mt-6">
                  {[
                    { title: "Business Modeling:", text: "Lean processes, revenue growth strategies, and risk management." },
                    { title: "Decision Optimization:", text: "Supply chain design, logistics, and resource allocation." },
                    { title: "Financial Modeling:", text: "Strategic scenario planning and amortization analysis." },
                    { title: "Analytics:", text: "KPIs, dashboards, predictive insights, and digital transformation." },
                    { title: "Churn Analysis:", text: "Identifying and retaining high-value customers." },
                    { title: "Data Annotation:", text: "Reliable labeling for machine learning outcomes." }
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <div className="mt-1 flex-shrink-0">
                        <svg className="w-[16px] h-[16px] text-[#7749F8]" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                        </svg>
                      </div>
                      <p className="text-[13px] md:text-[14px] leading-snug">
                        <span className="font-bold text-gray-700">{item.title}</span> <span className="text-gray-500">{item.text}</span>
                      </p>
                    </li>
                  ))}
                </ul>

                <div className="pt-6">
                  <Link href="/services" className="inline-flex items-center justify-center rounded-md bg-[#7749F8] px-6 py-2.5 text-[13px] font-semibold text-white transition-all hover:bg-[#59168B]">
                    View Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="w-full bg-white py-20 px-4 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1350px]">
          {/* Section Heading */}
          <div className="flex flex-col items-center text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold uppercase text-[#59168B] mb-2 tracking-wide">
              OUR VISION
            </h2>
            <img 
              src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_900/u_https://assets.cdn.filesafe.space/FvYZfLVlit3Fj7f39f8X/media/6929c2e28f155a0eab6a5ea9.svg" 
              alt="Decorative underline" 
              className="w-48 md:w-56 h-auto"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            {/* Left Content (Wider) */}
            <div className="lg:col-span-9 flex flex-col gap-6 animate-slide-right">
              <h3 className="text-[26px] md:text-[30px] font-black text-black leading-[1.3]">
                We imagine a future where every decision is clear and precise.
              </h3>
              
              <div className="text-gray-600 font-medium text-[14px] md:text-[15px] leading-relaxed">
                <p>
                  A world where every business decision is backed by precision analytics, enabling organizations to grow sustainably and create lasting impact.
                </p>
              </div>
            </div>

            {/* Right Image (Narrower) */}
            <div className="lg:col-span-3 flex justify-center lg:justify-end animate-slide-left">
              <img 
                src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_900/u_https://assets.cdn.filesafe.space/FvYZfLVlit3Fj7f39f8X/media/692ad850aaad91b93dacc999.svg" 
                alt="Our Vision illustration" 
                className="w-full max-w-[300px] h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="w-full bg-white py-20 px-4 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1350px]">
          {/* Section Heading */}
          <div className="flex flex-col items-center text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold uppercase text-[#59168B] mb-2 tracking-wide">
              OUR VALUES
            </h2>
            <img 
              src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_900/u_https://assets.cdn.filesafe.space/FvYZfLVlit3Fj7f39f8X/media/6929c2e28f155a0eab6a5ea9.svg" 
              alt="Decorative underline" 
              className="w-48 md:w-56 h-auto"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            {/* Left Content (Wider) */}
            <div className="lg:col-span-9 flex flex-col gap-6 animate-slide-right">
              <h3 className="text-[26px] md:text-[30px] font-black text-black leading-[1.3]">
                What we stand for
              </h3>
              
              <div className="text-gray-600 font-medium text-[14px] md:text-[15px] leading-relaxed">
                <ul className="space-y-2.5">
                  {[
                    { title: "Integrity:", text: "Transparent and ethical in every engagement." },
                    { title: "Innovation:", text: "Leveraging advanced tools and methods for breakthrough results." },
                    { title: "Impact:", text: "Focused on measurable, sustainable outcomes." },
                    { title: "Collaboration:", text: "Working side by side with clients as trusted partners." }
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <div className="mt-1 flex-shrink-0">
                        <svg className="w-[16px] h-[16px] text-[#7749F8]" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                        </svg>
                      </div>
                      <p className="text-[13px] md:text-[14px] leading-snug">
                        <span className="font-bold text-gray-700">{item.title}</span> <span className="text-gray-500">{item.text}</span>
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Image (Narrower) */}
            <div className="lg:col-span-3 flex justify-center lg:justify-end animate-slide-left">
              <img 
                src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_900/u_https://assets.cdn.filesafe.space/FvYZfLVlit3Fj7f39f8X/media/691747201c143af6750861c6.svg" 
                alt="Our Values illustration" 
                className="w-full max-w-[300px] h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <BookingSection />
      <Footer />
    </div>
  );
}
