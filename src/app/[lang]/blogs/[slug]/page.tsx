import { prisma } from '@/lib/prisma';
import Link from 'next/link';
import Footer from '@/components/Footer';
import BookingSection from '@/components/BookingSection';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import { getDictionary } from '@/lib/getDictionary';

export default async function BlogDetailsPage({ params }: { params: Promise<{ slug: string, lang: string }> }) {
  const resolvedParams = await params;
  const dict = await getDictionary(resolvedParams.lang);
  
  const blog = await prisma.blog.findUnique({
    where: { slug: resolvedParams.slug }
  });

  if (!blog) {
    notFound();
  }

  return (
    <div className="w-full flex flex-col min-h-screen">
      {/* Hero Banner */}
      <section className="relative w-full h-[55vh] min-h-[450px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 bg-zinc-900 overflow-hidden">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center text-white px-4 mt-16 max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-sm md:text-base font-medium mb-6">
            <Link href="/" className="text-[#A78BFA] hover:text-[#7749F8] transition-colors">
              {dict.navbar.home}
            </Link>
            <span className="text-gray-400">/</span>
            <Link href={`/${resolvedParams.lang}/blogs`} className="text-[#A78BFA] hover:text-[#7749F8] transition-colors">
              {dict.navbar.blogs}
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-200">{dict.blogsPage.detail.article}</span>
          </div>
          
          <h1 className="mb-6 text-3xl md:text-5xl lg:text-[3.5rem] font-bold tracking-tight leading-tight" style={{ fontFamily: 'var(--font-playfair)', textShadow: "2px 2px 8px rgba(0,0,0,0.8)" }}>
            {resolvedParams.lang === 'pt' && blog.titlePt ? blog.titlePt : blog.title}
          </h1>
          
          <div className="flex items-center gap-4 text-sm md:text-base text-gray-200 font-medium">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#A78BFA]" fill="currentColor" viewBox="0 0 20 20"><path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" fillRule="evenodd"></path></svg>
              <span>{blog.author}</span>
            </div>
            <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#A78BFA]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path></svg>
              <span>{blog.date}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8 flex-1">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12">
            <p className="text-xl md:text-2xl text-gray-500 font-medium leading-relaxed italic border-l-4 border-[#7749F8] pl-6">
              {resolvedParams.lang === 'pt' && blog.excerptPt ? blog.excerptPt : blog.excerpt}
            </p>
          </div>
          
          <div className="prose prose-lg md:prose-xl prose-indigo max-w-none text-gray-700 leading-relaxed">
            <ReactMarkdown>{resolvedParams.lang === 'pt' && blog.contentPt ? blog.contentPt : blog.content}</ReactMarkdown>
          </div>
          
          <div className="mt-16 pt-8 border-t border-gray-200">
            <Link 
              href={`/${resolvedParams.lang}/blogs`}
              className="inline-flex items-center gap-2 text-[#7749F8] hover:text-[#59168B] font-semibold transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
              {dict.blogsPage.detail.backToBlogs}
            </Link>
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
