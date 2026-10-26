import { prisma } from '@/lib/prisma';
import Link from 'next/link';
import Footer from '@/components/Footer';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import { getDictionary } from '@/lib/getDictionary';
import { Metadata } from 'next';

export const dynamic = 'force-dynamic';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; lang: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const research = await prisma.research.findUnique({
    where: { slug: resolvedParams.slug },
  });

  if (!research) return { title: 'Research Not Found - ZJ Logix' };

  const isPt = resolvedParams.lang === 'pt';
  const title = isPt && research.titlePt ? research.titlePt : research.title;
  const excerpt = isPt && research.excerptPt ? research.excerptPt : research.excerpt;

  return {
    title: `${title} - ZJ Logix Research`,
    description: excerpt,
  };
}

export default async function ResearchDetailsPage({
  params,
}: {
  params: Promise<{ slug: string; lang: string }>;
}) {
  const resolvedParams = await params;
  const dict = await getDictionary(resolvedParams.lang);

  const research = await prisma.research.findUnique({
    where: { slug: resolvedParams.slug },
  });

  if (!research) {
    notFound();
  }

  const isPt = resolvedParams.lang === 'pt';
  const title = isPt && research.titlePt ? research.titlePt : research.title;
  const excerpt = isPt && research.excerptPt ? research.excerptPt : research.excerpt;
  const description = isPt && research.descriptionPt ? research.descriptionPt : research.description;

  const pdfUrl = research.pdfUrl || (research.pdfData ? `/api/research/${research.slug}/pdf` : null);

  return (
    <div className="w-full flex flex-col min-h-screen">
      {/* Hero Banner */}
      <section className="relative w-full h-[55vh] min-h-[450px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 bg-zinc-900 overflow-hidden">
          <img
            src="/hero.jpg"
            alt="ZJ Logix Research"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/40"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center text-white px-4 mt-16 max-w-4xl mx-auto">
          {/* Breadcrumbs */}
          <div className="flex items-center flex-wrap justify-center gap-2 text-sm md:text-base font-medium mb-6">
            <Link href={`/${resolvedParams.lang}`} className="text-[#A78BFA] hover:text-[#7749F8] transition-colors">
              {dict.researchPage.hero.breadcrumbsHome}
            </Link>
            <span className="text-gray-400">/</span>
            <Link href={`/${resolvedParams.lang}/research`} className="text-[#A78BFA] hover:text-[#7749F8] transition-colors">
              {dict.researchPage.hero.breadcrumbsResearch}
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-300 truncate max-w-xs">{title}</span>
          </div>

          {/* Category Badge */}
          <div className="mb-4">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold bg-[#7749F8]/30 text-[#A78BFA] border border-[#7749F8]/50 backdrop-blur-md">
              {research.category}
            </span>
          </div>

          {/* Title */}
          <h1
            className="mb-6 text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight"
            style={{ fontFamily: 'var(--font-playfair)', textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}
          >
            {title}
          </h1>

          {/* Metadata */}
          <div className="flex items-center flex-wrap justify-center gap-4 text-xs md:text-sm text-gray-200 font-medium">
            <div className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-[#A78BFA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span>{dict.researchPage.detail.publishedBy}: <strong className="text-white">{research.author}</strong></span>
            </div>
            <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
            <div className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-[#A78BFA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{dict.researchPage.detail.publishedDate}: <strong className="text-white">{research.date}</strong></span>
            </div>
            {research.fileSize && (
              <>
                <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                <div className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                  </svg>
                  <span>PDF ({research.fileSize})</span>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="w-full bg-[#fcfcfc] py-16 px-4 sm:px-6 lg:px-8 flex-1">
        <div className="mx-auto max-w-5xl">
          {/* Document Download & Quick Action Card */}
          {pdfUrl && (
            <div className="mb-12 bg-white rounded-2xl border border-gray-100 p-6 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-purple-50 text-[#7749F8] flex items-center justify-center shrink-0">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-base font-bold text-gray-900">
                    {research.pdfFileName || `${research.slug}.pdf`}
                  </h4>
                  <p className="text-xs text-gray-500 mt-0.5">
                    {research.fileSize ? `Document Size: ${research.fileSize}` : 'Full Research Publication PDF'}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 w-full md:w-auto">
                <a
                  href={pdfUrl}
                  download={research.pdfFileName || `${research.slug}.pdf`}
                  className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#7749F8] hover:bg-[#59168B] text-white font-medium text-sm rounded-xl transition-all shadow-md shadow-[#7749F8]/20"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  {dict.researchPage.detail.downloadBtn}
                </a>

                <a
                  href={pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium text-sm rounded-xl transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  <span className="hidden sm:inline">{dict.researchPage.detail.openNewTab}</span>
                </a>
              </div>
            </div>
          )}

          {/* Executive Abstract */}
          <div className="mb-12 bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-4 pb-3 border-b border-gray-100 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#7749F8]" />
              {dict.researchPage.detail.abstractTitle}
            </h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed italic">
              {excerpt}
            </p>
          </div>

          {/* Detailed Content / Methodology if present */}
          {description && (
            <div className="mb-12 bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-100 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#7749F8]" />
                {dict.researchPage.detail.findingsTitle}
              </h2>
              <div className="prose prose-lg prose-indigo max-w-none text-gray-700 leading-relaxed">
                <ReactMarkdown>{description}</ReactMarkdown>
              </div>
            </div>
          )}

          {/* Interactive Document Preview Section */}
          {pdfUrl && (
            <div className="mb-12 bg-white rounded-2xl border border-gray-100 p-6 md:p-8 shadow-sm">
              <div className="flex items-center justify-between mb-6 pb-3 border-b border-gray-100">
                <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#7749F8]" />
                  {dict.researchPage.detail.pdfViewerTitle}
                </h2>
                <a
                  href={pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-[#7749F8] hover:underline"
                >
                  {dict.researchPage.detail.openNewTab} ↗
                </a>
              </div>

              <div className="w-full h-[650px] md:h-[800px] rounded-xl overflow-hidden border border-gray-200 bg-zinc-900 shadow-inner">
                <iframe
                  src={`${pdfUrl}#toolbar=1&view=FitH`}
                  className="w-full h-full border-0"
                  title={title}
                />
              </div>
            </div>
          )}

          {/* Back to Research */}
          <div className="pt-6 border-t border-gray-200 flex justify-between items-center">
            <Link
              href={`/${resolvedParams.lang}/research`}
              className="inline-flex items-center gap-2 text-[#7749F8] hover:text-[#59168B] font-semibold transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              {dict.researchPage.detail.backToResearch}
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer footer={dict.footer} />
    </div>
  );
}
