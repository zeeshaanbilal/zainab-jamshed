import Link from 'next/link';
import Footer from '@/components/Footer';
import BookingSection from '@/components/BookingSection';

export default function ServicesPage() {
  return (
    <div className="w-full flex flex-col min-h-screen">
      {/* Hero Banner */}
      <section className="relative w-full h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 bg-zinc-900 overflow-hidden">
          <img
            src="/hero.jpg"
            alt="Glass Skyscraper"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/65"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center text-white px-4 mt-8">
          <h1 className="mb-4 text-5xl md:text-6xl lg:text-[5rem] font-bold tracking-tight animate-slide-down uppercase" style={{ fontFamily: 'var(--font-playfair)', textShadow: "2px 2px 4px rgba(0,0,0,0.6)" }}>
            OUR SERVICES
          </h1>
          <p className="text-lg md:text-[20px] font-medium mb-6 text-gray-100 animate-slide-down" style={{ animationDelay: '0.2s' }}>
            Practical insights from consultants and analysts on what actually moves the needle.
          </p>
          <div className="flex items-center gap-2 text-base md:text-[17px] font-medium animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Link href="/" className="text-[#A78BFA] hover:text-[#7749F8] font-bold transition-colors">
              Home
            </Link>
            <span className="text-white">/</span>
            <span className="text-white">Services</span>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="w-full bg-[#fcfcfc] py-24 px-4 sm:px-6 lg:px-8 flex-1">
        <div className="mx-auto max-w-[1300px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            
            {/* Card 1 */}
            <div className="bg-white rounded-[20px] p-6 shadow-[0_4px_25px_rgba(0,0,0,0.04)] flex flex-col h-full border border-gray-100 transition-shadow hover:shadow-xl opacity-0 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <img src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_900/u_https://assets.cdn.filesafe.space/FvYZfLVlit3Fj7f39f8X/media/692d866a82f4c55e74542730.webp" alt="Business Modeling" className="w-full h-[240px] object-cover rounded-xl mb-7" />
              <h3 className="text-[19px] lg:text-[20px] xl:text-[22px] font-bold text-gray-900 mb-6 px-1 whitespace-nowrap truncate tracking-tight opacity-0 animate-slide-right">Business Modeling & Strategy</h3>
              <ul className="space-y-5 mb-8 flex-1 px-1 opacity-0 animate-slide-right" style={{ animationDelay: '0.7s' }}>
                {[
                  "Scalable, profit-focused business models.",
                  "Streamlined operations and cost control.",
                  "Clear revenue and margin insights that guide smarter decisions.",
                  "Risk forecasting with Monte Carlo simulations.",
                  "Automated reporting and execution planning."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <svg className="w-[20px] h-[20px] text-[#7749F8] shrink-0 mt-[4px]" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" clipRule="evenodd" /></svg>
                    <span className="text-[16px] md:text-[17px] text-gray-500 leading-[1.6] font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex justify-end mt-auto pt-6 opacity-0 animate-slide-left">
                <Link href="#" className="bg-[#7749F8] text-white px-8 py-3 rounded-lg font-semibold text-[15px] hover:bg-[#59168B] transition-colors shadow-sm hover:shadow-md">Read More</Link>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-[20px] p-6 shadow-[0_4px_25px_rgba(0,0,0,0.04)] flex flex-col h-full border border-gray-100 transition-shadow hover:shadow-xl opacity-0 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <img src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_900/u_https://assets.cdn.filesafe.space/FvYZfLVlit3Fj7f39f8X/media/692d8fddd0116b1fa1069fb5.webp" alt="Decision Optimization" className="w-full h-[240px] object-cover rounded-xl mb-7" />
              <h3 className="text-[19px] lg:text-[20px] xl:text-[22px] font-bold text-gray-900 mb-6 px-1 whitespace-nowrap truncate tracking-tight opacity-0 animate-slide-right">Decision Optimization</h3>
              <ul className="space-y-5 mb-8 flex-1 px-1 opacity-0 animate-slide-right" style={{ animationDelay: '0.7s' }}>
                {[
                  "Turn decisions into a repeatable, high-ROI engine.",
                  "Optimize resources, schedules, and capacity.",
                  "Design efficient supply chain networks.",
                  "Solve logistics trade-offs across locations.",
                  "Advanced tools for allocation and transportation."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <svg className="w-[20px] h-[20px] text-[#7749F8] shrink-0 mt-[4px]" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" clipRule="evenodd" /></svg>
                    <span className="text-[16px] md:text-[17px] text-gray-500 leading-[1.6] font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex justify-end mt-auto pt-6 opacity-0 animate-slide-left">
                <Link href="#" className="bg-[#7749F8] text-white px-8 py-3 rounded-lg font-semibold text-[15px] hover:bg-[#59168B] transition-colors shadow-sm hover:shadow-md">Read More</Link>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-[20px] p-6 shadow-[0_4px_25px_rgba(0,0,0,0.04)] flex flex-col h-full border border-gray-100 transition-shadow hover:shadow-xl opacity-0 animate-slide-up" style={{ animationDelay: '0.6000000000000001s' }}>
              <img src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_900/u_https://assets.cdn.filesafe.space/FvYZfLVlit3Fj7f39f8X/media/692d91d3fd073a49a890e1e4.webp" alt="Financial Modeling" className="w-full h-[240px] object-cover rounded-xl mb-7" />
              <h3 className="text-[19px] lg:text-[20px] xl:text-[22px] font-bold text-gray-900 mb-6 px-1 whitespace-nowrap truncate tracking-tight opacity-0 animate-slide-right">Financial Modeling</h3>
              <ul className="space-y-5 mb-8 flex-1 px-1 opacity-0 animate-slide-right" style={{ animationDelay: '0.7s' }}>
                {[
                  "Make decisions with confidence using robust simulations.",
                  "Evaluate markets, pricing, and cost structures.",
                  "Plan cash flow and amortization effectively.",
                  "Explore scenarios for expansions and investments.",
                  "Strategic modeling for smarter financial decisions."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <svg className="w-[20px] h-[20px] text-[#7749F8] shrink-0 mt-[4px]" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" clipRule="evenodd" /></svg>
                    <span className="text-[16px] md:text-[17px] text-gray-500 leading-[1.6] font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex justify-end mt-auto pt-6 opacity-0 animate-slide-left">
                <Link href="#" className="bg-[#7749F8] text-white px-8 py-3 rounded-lg font-semibold text-[15px] hover:bg-[#59168B] transition-colors shadow-sm hover:shadow-md">Read More</Link>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-[20px] p-6 shadow-[0_4px_25px_rgba(0,0,0,0.04)] flex flex-col h-full border border-gray-100 transition-shadow hover:shadow-xl opacity-0 animate-slide-up" style={{ animationDelay: '0.8s' }}>
              <img src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_900/u_https://assets.cdn.filesafe.space/FvYZfLVlit3Fj7f39f8X/media/692d937373043a842ff881f7.webp" alt="Analytics" className="w-full h-[240px] object-cover rounded-xl mb-7" />
              <h3 className="text-[19px] lg:text-[20px] xl:text-[22px] font-bold text-gray-900 mb-6 px-1 whitespace-nowrap truncate tracking-tight opacity-0 animate-slide-right">Analytics</h3>
              <ul className="space-y-5 mb-8 flex-1 px-1 opacity-0 animate-slide-right" style={{ animationDelay: '0.7s' }}>
                {[
                  "Turn data into actionable decisions that drive real results.",
                  "Align KPIs and modernize BI systems for smarter performance.",
                  "Break silos with unified data dashboards.",
                  "Forecast demand and financial trends.",
                  "Deliver predictive analytics for smarter strategy."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <svg className="w-[20px] h-[20px] text-[#7749F8] shrink-0 mt-[4px]" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" clipRule="evenodd" /></svg>
                    <span className="text-[16px] md:text-[17px] text-gray-500 leading-[1.6] font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex justify-end mt-auto pt-6 opacity-0 animate-slide-left">
                <Link href="#" className="bg-[#7749F8] text-white px-8 py-3 rounded-lg font-semibold text-[15px] hover:bg-[#59168B] transition-colors shadow-sm hover:shadow-md">Read More</Link>
              </div>
            </div>

            {/* Card 5 */}
            <div className="bg-white rounded-[20px] p-6 shadow-[0_4px_25px_rgba(0,0,0,0.04)] flex flex-col h-full border border-gray-100 transition-shadow hover:shadow-xl opacity-0 animate-slide-up" style={{ animationDelay: '1s' }}>
              <img src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_900/u_https://assets.cdn.filesafe.space/FvYZfLVlit3Fj7f39f8X/media/692d9501d0116bffb3071cff.webp" alt="Churn Analysis" className="w-full h-[240px] object-cover rounded-xl mb-7" />
              <h3 className="text-[19px] lg:text-[20px] xl:text-[22px] font-bold text-gray-900 mb-6 px-1 whitespace-nowrap truncate tracking-tight opacity-0 animate-slide-right">Churn Analysis</h3>
              <ul className="space-y-5 mb-8 flex-1 px-1 opacity-0 animate-slide-right" style={{ animationDelay: '0.7s' }}>
                {[
                  "Identify at-risk customers early and improve retention.",
                  "Understand key churn drivers to reduce customer loss.",
                  "Design targeted retention strategies to keep customers engaged.",
                  "Use risk scoring and customer segmentation.",
                  "Execute retention playbooks and dashboards."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <svg className="w-[20px] h-[20px] text-[#7749F8] shrink-0 mt-[4px]" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" clipRule="evenodd" /></svg>
                    <span className="text-[16px] md:text-[17px] text-gray-500 leading-[1.6] font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex justify-end mt-auto pt-6 opacity-0 animate-slide-left">
                <Link href="#" className="bg-[#7749F8] text-white px-8 py-3 rounded-lg font-semibold text-[15px] hover:bg-[#59168B] transition-colors shadow-sm hover:shadow-md">Read More</Link>
              </div>
            </div>

            {/* Card 6 */}
            <div className="bg-white rounded-[20px] p-6 shadow-[0_4px_25px_rgba(0,0,0,0.04)] flex flex-col h-full border border-gray-100 transition-shadow hover:shadow-xl opacity-0 animate-slide-up" style={{ animationDelay: '1.2s' }}>
              <img src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_900/u_https://assets.cdn.filesafe.space/FvYZfLVlit3Fj7f39f8X/media/692d961782f4c5df5555bb1b.webp" alt="Monte Carlo Simulation" className="w-full h-[240px] object-cover rounded-xl mb-7" />
              <h3 className="text-[19px] lg:text-[20px] xl:text-[22px] font-bold text-gray-900 mb-6 px-1 whitespace-nowrap truncate tracking-tight opacity-0 animate-slide-right">Monte Carlo Simulation</h3>
              <ul className="space-y-5 mb-8 flex-1 px-1 opacity-0 animate-slide-right" style={{ animationDelay: '0.7s' }}>
                {[
                  "Quantify uncertainty with realistic scenario modeling.",
                  "Understand risk exposure and probability-weighted outcomes.",
                  "Simulate thousands of scenarios to guide confident decisions.",
                  "Stress-test business models under variable conditions.",
                  "Ongoing monitoring, sensitivity analysis, and scenario updates."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <svg className="w-[20px] h-[20px] text-[#7749F8] shrink-0 mt-[4px]" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" clipRule="evenodd" /></svg>
                    <span className="text-[16px] md:text-[17px] text-gray-500 leading-[1.6] font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex justify-end mt-auto pt-6 opacity-0 animate-slide-left">
                <Link href="#" className="bg-[#7749F8] text-white px-8 py-3 rounded-lg font-semibold text-[15px] hover:bg-[#59168B] transition-colors shadow-sm hover:shadow-md">Read More</Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      <BookingSection />
      <Footer />
    </div>
  );
}
