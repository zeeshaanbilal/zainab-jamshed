import Link from 'next/link';
import Footer from '@/components/Footer';
import BookingSection from '@/components/BookingSection';
import { getDictionary } from '@/lib/getDictionary';

export const metadata = {
  title: 'Portfolio | ZJ Logix',
  description: 'View our portfolio of successful projects and case studies.',
};

export default async function PortfolioPage({ params }: { params: { lang: string } | Promise<{ lang: string }> }) {
  const resolvedParams = await Promise.resolve(params);
  const dict = await getDictionary(resolvedParams.lang);
  const p = dict.portfolioPage;

  return (
    <div className="w-full flex flex-col min-h-screen">
      {/* Hero Banner */}
      <section className="relative w-full h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 bg-zinc-900 overflow-hidden">
          <img
            src="/hero.jpg"
            alt="ZJ Logix Office"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/65"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center text-white px-4 mt-8">
          <h1 className="mb-4 text-4xl md:text-5xl lg:text-[4rem] font-bold tracking-tight animate-slide-down uppercase" style={{ fontFamily: 'var(--font-playfair)', textShadow: "2px 2px 4px rgba(0,0,0,0.6)" }}>
            {p.hero.title}
          </h1>
          <p className="text-lg md:text-[20px] font-medium mb-6 text-gray-100 animate-slide-down max-w-2xl" style={{ animationDelay: '0.2s' }}>
            {p.hero.subtitle}
          </p>
          <div className="flex items-center gap-2 text-base md:text-[17px] font-medium animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Link href={`/${resolvedParams.lang}`} className="text-[#A78BFA] hover:text-[#7749F8] font-bold transition-colors">
              {p.hero.breadcrumbsHome}
            </Link>
            <span className="text-white">/</span>
            <span className="text-white">{p.hero.breadcrumbsPortfolio}</span>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="w-full bg-[#fcfcfc] py-24 px-4 sm:px-6 lg:px-8 flex-1">
        <div className="mx-auto max-w-7xl space-y-24">
          
          {/* Project 1: Mezan Beverages */}
          <div className="flex flex-col lg:flex-row gap-12 items-start animate-slide-up">
            <div className="w-full lg:w-1/3 sticky top-28">
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                <div className="w-16 h-16 bg-[#F3E8FF] rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-[#7749F8]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2 font-serif">{p.projects.mezan.title}</h2>
                <h3 className="text-lg font-medium text-[#7749F8] mb-6">{p.projects.mezan.subtitle}</h3>
                <div className="h-1 w-12 bg-[#7749F8] rounded"></div>
              </div>
            </div>
            
            <div className="w-full lg:w-2/3 space-y-10">
              <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100 transition-all hover:shadow-md">
                <h4 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2 border-gray-100">{p.overviewTitle}</h4>
                <p className="text-gray-600 text-lg leading-relaxed">{p.projects.mezan.overview}</p>
              </div>
              
              <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100 transition-all hover:shadow-md">
                <h4 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2 border-gray-100">{p.projects.mezan.methodologyTitle}</h4>
                <ul className="space-y-4">
                  {p.projects.mezan.methodologyList.map((item: string, index: number) => (
                    <li key={index} className="flex gap-4">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#F3E8FF] text-[#7749F8] flex items-center justify-center mt-1">✓</span>
                      <span className="text-gray-600 text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong class="text-gray-900">$1</strong>') }}></span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-[#7749F8] to-[#59168B] p-8 rounded-2xl shadow-lg text-white">
                  <h4 className="text-xl font-bold mb-4">{p.projects.mezan.techStackTitle}</h4>
                  <p className="text-gray-100 leading-relaxed">{p.projects.mezan.techStack}</p>
                </div>
                
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#7749F8]/20">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">{p.projects.mezan.impactTitle}</h4>
                  <p className="text-gray-600 leading-relaxed">{p.projects.mezan.impact}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent my-12"></div>

          {/* Project 2: Bayer Pharmaceuticals */}
          <div className="flex flex-col lg:flex-row-reverse gap-12 items-start animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="w-full lg:w-1/3 sticky top-28">
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                <div className="w-16 h-16 bg-[#F3E8FF] rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-[#7749F8]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2 font-serif">{p.projects.bayer.title}</h2>
                <h3 className="text-lg font-medium text-[#7749F8] mb-6">{p.projects.bayer.subtitle}</h3>
                <div className="h-1 w-12 bg-[#7749F8] rounded"></div>
              </div>
            </div>
            
            <div className="w-full lg:w-2/3 space-y-10">
              <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100 transition-all hover:shadow-md">
                <h4 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2 border-gray-100">{p.overviewTitle}</h4>
                <p className="text-gray-600 text-lg leading-relaxed">{p.projects.bayer.overview}</p>
              </div>
              
              <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100 transition-all hover:shadow-md">
                <h4 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2 border-gray-100">{p.projects.bayer.methodologyTitle}</h4>
                <ul className="space-y-4">
                  {p.projects.bayer.methodologyList.map((item: string, index: number) => (
                    <li key={index} className="flex gap-4">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#F3E8FF] text-[#7749F8] flex items-center justify-center mt-1">✓</span>
                      <span className="text-gray-600 text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong class="text-gray-900">$1</strong>') }}></span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-[#7749F8] to-[#59168B] p-8 rounded-2xl shadow-lg text-white">
                  <h4 className="text-xl font-bold mb-4">{p.projects.bayer.techStackTitle}</h4>
                  <p className="text-gray-100 leading-relaxed">{p.projects.bayer.techStack}</p>
                </div>
                
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#7749F8]/20">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">{p.projects.bayer.impactTitle}</h4>
                  <p className="text-gray-600 leading-relaxed">{p.projects.bayer.impact}</p>
                </div>
              </div>
            </div>
</div>

          {/* NFL Project */}
          <div className="flex flex-col lg:flex-row gap-12 items-start animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="w-full lg:w-1/3 sticky top-28">
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                <div className="w-16 h-16 bg-[#F3E8FF] rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-[#7749F8]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2 font-serif">{p.projects.nfl.title}</h2>
                <h3 className="text-lg font-medium text-[#7749F8] mb-6">{p.projects.nfl.subtitle}</h3>
                <div className="h-1 w-12 bg-[#7749F8] rounded"></div>
              </div>
            </div>
            
            <div className="w-full lg:w-2/3 space-y-10">
              <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100 transition-all hover:shadow-md">
                <h4 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2 border-gray-100">{p.overviewTitle}</h4>
                <p className="text-gray-600 text-lg leading-relaxed">{p.projects.nfl.overview}</p>
              </div>
              
              <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100 transition-all hover:shadow-md">
                <h4 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2 border-gray-100">{p.projects.nfl.methodologyTitle}</h4>
                <ul className="space-y-4">
                  {p.projects.nfl.methodologyList.map((item: string, index: number) => (
                    <li key={index} className="flex gap-4">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#F3E8FF] text-[#7749F8] flex items-center justify-center mt-1">✓</span>
                      <span className="text-gray-600 text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong class="text-gray-900">$1</strong>') }}></span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-[#7749F8] to-[#59168B] p-8 rounded-2xl shadow-lg text-white">
                  <h4 className="text-xl font-bold mb-4">{p.projects.nfl.techStackTitle}</h4>
                  <p className="text-gray-100 leading-relaxed">{p.projects.nfl.techStack}</p>
                </div>
                
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#7749F8]/20">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">{p.projects.nfl.impactTitle}</h4>
                  <p className="text-gray-600 leading-relaxed">{p.projects.nfl.impact}</p>
                </div>
              </div>
            </div>
          </div>


          {/* Coca Cola Project */}
          <div className="flex flex-col lg:flex-row-reverse gap-12 items-start animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="w-full lg:w-1/3 sticky top-28">
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                <div className="w-16 h-16 bg-[#F3E8FF] rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-[#7749F8]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2 font-serif">{p.projects.cocaCola.title}</h2>
                <h3 className="text-lg font-medium text-[#7749F8] mb-6">{p.projects.cocaCola.subtitle}</h3>
                <div className="h-1 w-12 bg-[#7749F8] rounded"></div>
              </div>
            </div>
            
            <div className="w-full lg:w-2/3 space-y-10">
              <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100 transition-all hover:shadow-md">
                <h4 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2 border-gray-100">{p.overviewTitle}</h4>
                <p className="text-gray-600 text-lg leading-relaxed">{p.projects.cocaCola.overview}</p>
              </div>
              
              <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100 transition-all hover:shadow-md">
                <h4 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2 border-gray-100">{p.projects.cocaCola.methodologyTitle}</h4>
                <ul className="space-y-4">
                  {p.projects.cocaCola.methodologyList.map((item: string, index: number) => (
                    <li key={index} className="flex gap-4">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#F3E8FF] text-[#7749F8] flex items-center justify-center mt-1">✓</span>
                      <span className="text-gray-600 text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong class="text-gray-900">$1</strong>') }}></span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-[#7749F8] to-[#59168B] p-8 rounded-2xl shadow-lg text-white">
                  <h4 className="text-xl font-bold mb-4">{p.projects.cocaCola.techStackTitle}</h4>
                  <p className="text-gray-100 leading-relaxed">{p.projects.cocaCola.techStack}</p>
                </div>
                
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#7749F8]/20">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">{p.projects.cocaCola.impactTitle}</h4>
                  <p className="text-gray-600 leading-relaxed">{p.projects.cocaCola.impact}</p>
                </div>
              </div>
            </div>
          </div>

</div>
</section>

      {/* Booking Section */}
      <BookingSection booking={dict.booking} />
      
      {/* Footer */}
      <Footer footer={dict.footer} />
    </div>
  );
}
