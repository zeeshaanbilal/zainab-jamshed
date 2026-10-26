import { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/Footer';
import ResearchListClient from '@/components/ResearchListClient';
import { prisma } from '@/lib/prisma';
import { getDictionary } from '@/lib/getDictionary';

export const dynamic = 'force-dynamic';

export async function generateMetadata({
  params,
}: {
  params: { lang: string } | Promise<{ lang: string }>;
}): Promise<Metadata> {
  const resolvedParams = await Promise.resolve(params);
  const isPt = resolvedParams.lang === 'pt';

  return {
    title: isPt
      ? 'Pesquisa & Publicações - ZJ Logix'
      : 'Research & Publications - ZJ Logix',
    description: isPt
      ? 'Explore nossos artigos de pesquisa, whitepapers analíticos e modelos preditivos em PDF.'
      : 'Explore analytical research papers, decision science whitepapers, and predictive modeling publications by ZJ Logix.',
  };
}

export default async function ResearchPage({
  params,
}: {
  params: { lang: string } | Promise<{ lang: string }>;
}) {
  const resolvedParams = await Promise.resolve(params);
  const dict = await getDictionary(resolvedParams.lang);

  const researchList = await prisma.research.findMany({
    orderBy: { createdAt: 'desc' },
    select: {
      id: true,
      slug: true,
      title: true,
      author: true,
      date: true,
      category: true,
      excerpt: true,
      description: true,
      pdfUrl: true,
      pdfFileName: true,
      fileSize: true,
      titlePt: true,
      excerptPt: true,
      descriptionPt: true,
      // Omit large base64 pdfData for listing performance; it is streamed via /api/research/[slug]/pdf
    },
  });

  return (
    <div className="w-full flex flex-col min-h-screen">
      {/* Hero Banner */}
      <section className="relative w-full h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 bg-zinc-900 overflow-hidden">
          <img
            src="/hero.jpg"
            alt="ZJ Logix Research"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/65"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center text-white px-4 mt-8 max-w-4xl">
          <h1
            className="mb-4 text-4xl md:text-5xl lg:text-[4rem] font-bold tracking-tight animate-slide-down uppercase"
            style={{
              fontFamily: 'var(--font-playfair)',
              textShadow: '2px 2px 4px rgba(0,0,0,0.6)',
            }}
          >
            {dict.researchPage.hero.title}
          </h1>
          <p
            className="text-lg md:text-[20px] font-medium mb-6 text-gray-100 animate-slide-down"
            style={{ animationDelay: '0.2s' }}
          >
            {dict.researchPage.hero.subtitle}
          </p>
          <div
            className="flex items-center gap-2 text-base md:text-[17px] font-medium animate-slide-up"
            style={{ animationDelay: '0.4s' }}
          >
            <Link
              href={`/${resolvedParams.lang}`}
              className="text-[#A78BFA] hover:text-[#7749F8] font-bold transition-colors"
            >
              {dict.researchPage.hero.breadcrumbsHome}
            </Link>
            <span className="text-white">/</span>
            <span className="text-white">
              {dict.researchPage.hero.breadcrumbsResearch}
            </span>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="w-full bg-[#fcfcfc] py-20 px-4 sm:px-6 lg:px-8 flex-1">
        <div className="mx-auto max-w-7xl">
          <ResearchListClient
            researchList={researchList as any}
            dict={dict}
            lang={resolvedParams.lang}
          />
        </div>
      </section>

      {/* Footer */}
      <Footer footer={dict.footer} />
    </div>
  );
}
