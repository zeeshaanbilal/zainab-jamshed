import Link from 'next/link';
import { getDictionary } from '@/lib/getDictionary';
import Footer from '@/components/Footer';
import BookingSection from '@/components/BookingSection';

export default async function ChurnAnalysisPage({ params }: { params: { lang: string } | Promise<{ lang: string }> }) {
  const resolvedParams = await Promise.resolve(params);
  const dict = await getDictionary(resolvedParams.lang);
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
          <h1 className="mb-4 text-4xl md:text-5xl lg:text-[4rem] font-bold tracking-tight animate-slide-down uppercase" style={{ fontFamily: 'var(--font-playfair)', textShadow: "2px 2px 4px rgba(0,0,0,0.6)" }}>{dict.servicesPage.hero.title}</h1>
          <p className="text-lg md:text-[20px] font-medium mb-6 text-gray-100 animate-slide-down" style={{ animationDelay: '0.2s' }}>{dict.servicesPage.hero.subtitle}</p>
          <div className="flex items-center gap-2 text-base md:text-[17px] font-medium animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Link href="/" className="text-[#A78BFA] hover:text-[#7749F8] font-bold transition-colors">{dict.navbar.home}</Link>
            <span className="text-white">/</span>
            <Link href="/services" className="text-[#A78BFA] hover:text-[#7749F8] font-bold transition-colors">{dict.navbar.services}</Link>
            <span className="text-white">/</span>
            <span className="text-white">Churn Analysis</span>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="w-full bg-[#fcfcfc] py-24 px-4 sm:px-8 lg:px-12 flex-1">
        <div className="mx-auto max-w-[950px]">
          <div className="bg-white rounded-[24px] shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 p-5 sm:p-8 md:p-12 flex flex-col gap-10">
            
            {/* Main Image */}
            <div className="w-full flex justify-center mb-2">
              <div className="w-full max-w-[700px] rounded-[16px] overflow-hidden border border-gray-100 shadow-sm opacity-0 animate-pop-in" style={{ animationDelay: '0.2s' }}>
                <img 
                  src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_900/u_https://assets.cdn.filesafe.space/FvYZfLVlit3Fj7f39f8X/media/692d9501d0116bffb3071cff.webp" 
                  alt="Churn Analysis Workspace"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Text Content */}
            
          <div className="flex flex-col gap-8 text-gray-800">
            {/* Title & Subtitle */}
            <div className="opacity-0 animate-slide-right" style={{ animationDelay: '0.4s' }}>
              <h2 className="text-[17px] sm:text-[19px] md:text-[21px] lg:text-[22px] tracking-tight leading-tight font-bold text-black mb-4">{dict.servicesDetails.churnAnalysis.title}</h2>
              <p className="text-black text-[17px] leading-relaxed">
                {dict.servicesDetails.churnAnalysis.subtitle}
              </p>
            </div>

            {/* Who it's for */}
            <div className="opacity-0 animate-slide-left" style={{ animationDelay: '0.6s' }}>
              <h3 className="text-[20px] font-bold text-black mb-3">{dict.servicesDetails.churnAnalysis.whoItsForTitle}</h3>
              <p className="text-[#64748b] text-[16px] leading-relaxed">
                {dict.servicesDetails.churnAnalysis.whoItsForText}
              </p>
            </div>

            {/* Challenges we solve */}
            <div className="opacity-0 animate-slide-up" style={{ animationDelay: '0.8s' }}>
              <h3 className="text-[20px] font-bold text-black mb-5">{dict.servicesDetails.churnAnalysis.challengesTitle}</h3>
              <ul className="space-y-4">
                {dict.servicesDetails.churnAnalysis.challenges.map((item: string, idx: number) => (
                  <li key={idx} className="flex items-center gap-3">
                    <svg className="w-[20px] h-[20px] text-[#7749F8] shrink-0" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" clipRule="evenodd" /></svg>
                    <span className="text-[17px] text-[#475569]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What we deliver */}
            <div className="opacity-0 animate-slide-up" style={{ animationDelay: '1.0s' }}>
              <h3 className="text-[20px] font-bold text-black mb-5">{dict.servicesDetails.churnAnalysis.whatWeDeliverTitle}</h3>
              <ul className="space-y-4">
                {dict.servicesDetails.churnAnalysis.whatWeDeliver.map((item: string, idx: number) => (
                  <li key={idx} className="flex items-center gap-3">
                    <svg className="w-[20px] h-[20px] text-[#7749F8] shrink-0" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" clipRule="evenodd" /></svg>
                    <span className="text-[17px] text-[#475569] italic">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          </div>
        </div>
      </section>

      <BookingSection booking={dict.booking} />
      <Footer footer={dict.footer} />
    </div>
  );
}
