import Link from 'next/link';
import Footer from '@/components/Footer';
import BookingSection from '@/components/BookingSection';
import { getDictionary } from '@/lib/getDictionary';

export default async function ServicesPage({ params }: { params: { lang: string } | Promise<{ lang: string }> }) {
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
            alt="ZJ Logix Office"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/65"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center text-white px-4 mt-8">
          <h1 className="mb-4 text-5xl md:text-6xl lg:text-[5rem] font-bold tracking-tight animate-slide-down uppercase" style={{ fontFamily: 'var(--font-playfair)', textShadow: "2px 2px 4px rgba(0,0,0,0.6)" }}>
            {dict.servicesPage.hero.title}
          </h1>
          <p className="text-lg md:text-[20px] font-medium mb-6 text-gray-100 animate-slide-down" style={{ animationDelay: '0.2s' }}>
            {dict.servicesPage.hero.subtitle}
          </p>
          <div className="flex items-center gap-2 text-base md:text-[17px] font-medium animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Link href="/" className="text-[#A78BFA] hover:text-[#7749F8] font-bold transition-colors">
              {dict.servicesPage.hero.breadcrumbsHome}
            </Link>
            <span className="text-white">/</span>
            <span className="text-white">{dict.servicesPage.hero.breadcrumbsServices}</span>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="w-full bg-[#fcfcfc] py-24 px-4 sm:px-6 lg:px-8 flex-1">
        <div className="mx-auto max-w-full max-w-[1300px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            
            {dict.servicesPage.cards.items.map((card, index) => {
              const images = [
                "https://images.leadconnectorhq.com/image/f_webp/q_80/r_900/u_https://assets.cdn.filesafe.space/FvYZfLVlit3Fj7f39f8X/media/692d866a82f4c55e74542730.webp",
                "https://images.leadconnectorhq.com/image/f_webp/q_80/r_900/u_https://assets.cdn.filesafe.space/FvYZfLVlit3Fj7f39f8X/media/692d8fddd0116b1fa1069fb5.webp",
                "https://images.leadconnectorhq.com/image/f_webp/q_80/r_900/u_https://assets.cdn.filesafe.space/FvYZfLVlit3Fj7f39f8X/media/692d91d3fd073a49a890e1e4.webp",
                "https://images.leadconnectorhq.com/image/f_webp/q_80/r_900/u_https://assets.cdn.filesafe.space/FvYZfLVlit3Fj7f39f8X/media/692d937373043a842ff881f7.webp",
                "https://images.leadconnectorhq.com/image/f_webp/q_80/r_900/u_https://assets.cdn.filesafe.space/FvYZfLVlit3Fj7f39f8X/media/692d9501d0116bffb3071cff.webp",
                "https://images.leadconnectorhq.com/image/f_webp/q_80/r_900/u_https://assets.cdn.filesafe.space/FvYZfLVlit3Fj7f39f8X/media/692d961782f4c5df5555bb1b.webp"
              ];
              const delays = ["0.2s", "0.4s", "0.6s", "0.8s", "1s", "1.2s"];
              const slugs = [
                "business-modeling",
                "decision-optimization",
                "financial-modeling",
                "analytics",
                "churn-analysis",
                "monte-carlo-simulation"
              ];
              
              return (
                <div key={index} className="bg-white rounded-[20px] p-6 shadow-[0_4px_25px_rgba(0,0,0,0.04)] flex flex-col h-full border border-gray-100 transition-shadow hover:shadow-xl opacity-0 animate-slide-up" style={{ animationDelay: delays[index] }}>
                  <img src={images[index]} alt={card.title} className="w-full h-[240px] object-cover rounded-xl mb-7" />
                  <h3 className="text-[19px] lg:text-[20px] xl:text-[22px] font-bold text-gray-900 mb-6 px-1 leading-tight tracking-tight opacity-0 animate-slide-right">{card.title}</h3>
                  <ul className="space-y-5 mb-8 flex-1 px-1 opacity-0 animate-slide-right" style={{ animationDelay: '0.7s' }}>
                    {card.features.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-4">
                        <svg className="w-[20px] h-[20px] text-[#7749F8] shrink-0 mt-[4px]" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" clipRule="evenodd" /></svg>
                        <span className="text-[16px] md:text-[17px] text-gray-500 leading-[1.6] font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-end mt-auto pt-6 opacity-0 animate-slide-left">
                    <Link href={`/${resolvedParams.lang}/services/${slugs[index]}`} className="bg-[#7749F8] text-white px-8 py-3 rounded-lg font-semibold text-[15px] hover:bg-[#59168B] transition-colors shadow-sm hover:shadow-md">{dict.servicesPage.cards.readMore}</Link>
                  </div>
                </div>
              );
            })}

          </div>
        </div>
      </section>

      <BookingSection booking={dict.booking} />
      <Footer footer={dict.footer} />
    </div>
  );
}
