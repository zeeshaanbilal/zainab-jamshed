import Link from 'next/link';
import Footer from '@/components/Footer';
import BookingSection from '@/components/BookingSection';
import BlogListClient from '@/components/BlogListClient';
import { prisma } from '@/lib/prisma';

// Revalidate occasionally, or leave it dynamic since we revalidatePath on mutation
export const dynamic = 'force-dynamic';

export default async function BlogsPage() {
  const blogs = await prisma.blog.findMany({
    orderBy: { createdAt: 'asc' }
  });

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
          <h1 className="mb-4 text-4xl md:text-5xl lg:text-[4rem] font-bold tracking-tight animate-slide-down uppercase" style={{ fontFamily: 'var(--font-playfair)', textShadow: "2px 2px 4px rgba(0,0,0,0.6)" }}>
            OUR BLOGS
          </h1>
          <p className="text-lg md:text-[20px] font-medium mb-6 text-gray-100 animate-slide-down" style={{ animationDelay: '0.2s' }}>
            Practical insights from consultants and analysts on what actually moves the needle.
          </p>
          <div className="flex items-center gap-2 text-base md:text-[17px] font-medium animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Link href="/" className="text-[#A78BFA] hover:text-[#7749F8] font-bold transition-colors">
              Home
            </Link>
            <span className="text-white">/</span>
            <span className="text-white">Blogs</span>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="w-full bg-[#fcfcfc] py-24 px-4 sm:px-6 lg:px-8 flex-1">
        <div className="mx-auto max-w-7xl">
          
          <div className="mb-16 flex flex-col items-center text-center animate-slide-down">
            <h2 className="text-2xl md:text-3xl font-bold uppercase text-[#59168B]">
              Latest Insights
            </h2>
            <div className="h-[3px] w-16 bg-[#7749F8] mt-3 mb-6 rounded-full"></div>
            <p className="text-gray-500 max-w-2xl text-base md:text-lg font-medium">
              Read our latest thoughts on optimization, strategy, and data analytics.
            </p>
          </div>

          <BlogListClient blogs={blogs} />
          
        </div>
      </section>

      {/* Booking Section */}
      <BookingSection />
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
