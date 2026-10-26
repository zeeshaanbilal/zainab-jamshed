"use client";

import { useState, useMemo, useEffect, useRef } from 'react';
import Link from 'next/link';
import { quickUploadPdf } from '@/app/actions/researchActions';

interface ResearchItem {
  id: string;
  slug: string;
  title: string;
  author: string;
  date: string;
  category: string;
  excerpt: string;
  description?: string | null;
  pdfUrl?: string | null;
  pdfData?: string | null;
  pdfFileName?: string | null;
  fileSize?: string | null;
  titlePt?: string | null;
  excerptPt?: string | null;
  descriptionPt?: string | null;
}

export default function ResearchListClient({
  researchList,
  dict,
  lang,
}: {
  researchList: ResearchItem[];
  dict: any;
  lang: string;
}) {
  const [items, setItems] = useState<ResearchItem[]>(researchList);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [previewPdf, setPreviewPdf] = useState<{ url: string; title: string; filename?: string } | null>(null);

  // Direct upload states
  const [isUploading, setIsUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState<string | null>(null);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    setItems(researchList);
  }, [researchList]);

  // Prevent background scrolling when preview modal is open
  useEffect(() => {
    if (previewPdf) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [previewPdf]);

  // Handle direct file selection from gallery / device documents
  async function handleFileSelect(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    setUploadError(null);
    setUploadSuccess(null);

    try {
      const formData = new FormData();
      formData.append('pdfFile', file);

      const result = await quickUploadPdf(formData);
      if (result?.error) {
        setUploadError(result.error);
      } else if (result?.item) {
        setItems((prev) => [result.item as ResearchItem, ...prev]);
        setUploadSuccess(`"${file.name}" uploaded successfully!`);
        setTimeout(() => setUploadSuccess(null), 5000);
      }
    } catch (err: any) {
      console.error('Upload failed:', err);
      setUploadError(err.message || 'Failed to upload document.');
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  }

  // Extract unique categories
  const categories = useMemo(() => {
    const set = new Set<string>();
    items.forEach((item) => {
      if (item.category) set.add(item.category);
    });
    return Array.from(set);
  }, [items]);

  // Filtered research items
  const filteredList = useMemo(() => {
    return items.filter((item) => {
      const title = lang === 'pt' && item.titlePt ? item.titlePt : item.title;
      const excerpt = lang === 'pt' && item.excerptPt ? item.excerptPt : item.excerpt;
      const author = item.author || '';
      const category = item.category || '';

      const matchesCategory =
        selectedCategory === 'ALL' ||
        category.toLowerCase() === selectedCategory.toLowerCase();

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        title.toLowerCase().includes(q) ||
        excerpt.toLowerCase().includes(q) ||
        author.toLowerCase().includes(q) ||
        category.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [items, selectedCategory, searchQuery, lang]);

  function getPdfUrl(item: ResearchItem) {
    if (item.pdfUrl) return item.pdfUrl;
    if (item.pdfData) return `/api/research/${item.slug}/pdf`;
    return null;
  }

  return (
    <>
      {/* Hidden File Input that opens native document / gallery picker directly */}
      <input
        ref={fileInputRef}
        type="file"
        accept="application/pdf,.pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        onChange={handleFileSelect}
        className="hidden"
      />

      {/* Section Header with Direct "Upload PDF" Button */}
      <div className="mb-12 flex flex-col md:flex-row items-start md:items-end justify-between gap-6 pb-6 border-b border-gray-200/80 animate-slide-down">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold uppercase text-[#59168B]">
            {dict.researchPage?.header?.title || 'Publications & Case Studies'}
          </h2>
          <div className="h-[3px] w-16 bg-[#7749F8] mt-3 mb-3 rounded-full"></div>
          <p className="text-gray-500 max-w-2xl text-base md:text-lg font-medium">
            {dict.researchPage?.header?.subtitle || 'Explore and upload research papers, mathematical models, and operational frameworks in PDF.'}
          </p>
        </div>

        {/* The One-Click Direct Upload Button */}
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          disabled={isUploading}
          className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-gradient-to-r from-[#7749F8] to-[#9065FF] hover:from-[#6537E8] hover:to-[#7E51F7] text-white font-bold rounded-2xl shadow-lg shadow-[#7749F8]/25 hover:shadow-[#7749F8]/40 hover:-translate-y-0.5 active:translate-y-0 transition-all text-sm md:text-base shrink-0 group disabled:opacity-60 cursor-pointer"
        >
          {isUploading ? (
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin shrink-0" />
          ) : (
            <div className="p-1 bg-white/20 rounded-lg group-hover:scale-110 transition-transform">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l4-4m0 0l4 4m-4-4v12" />
              </svg>
            </div>
          )}
          <span>{isUploading ? 'Uploading PDF...' : (dict.researchPage?.header?.uploadPdf || 'Upload PDF')}</span>
        </button>
      </div>

      {/* Uploading Status Banner */}
      {isUploading && (
        <div className="mb-8 p-4 bg-purple-50 border-2 border-dashed border-[#7749F8]/40 rounded-2xl flex items-center justify-center gap-3 animate-pulse">
          <div className="w-5 h-5 border-2 border-[#7749F8] border-t-transparent rounded-full animate-spin" />
          <p className="text-sm font-bold text-[#7749F8]">
            Uploading document from your files / gallery... Please wait a moment.
          </p>
        </div>
      )}

      {/* Upload Success Alert */}
      {uploadSuccess && (
        <div className="mb-8 p-4 bg-emerald-50 border border-emerald-300 rounded-2xl flex items-center justify-between gap-3 animate-slide-down">
          <div className="flex items-center gap-2 text-emerald-800 text-sm font-semibold">
            <span className="p-1 bg-emerald-200 text-emerald-900 rounded-full text-xs">✓</span>
            <span>{uploadSuccess}</span>
          </div>
          <button onClick={() => setUploadSuccess(null)} className="text-emerald-600 hover:text-emerald-900 font-bold">✕</button>
        </div>
      )}

      {/* Upload Error Alert */}
      {uploadError && (
        <div className="mb-8 p-4 bg-red-50 border border-red-300 rounded-2xl flex items-center justify-between gap-3 animate-slide-down">
          <div className="flex items-center gap-2 text-red-700 text-sm font-semibold">
            <span>⚠</span>
            <span>{uploadError}</span>
          </div>
          <button onClick={() => setUploadError(null)} className="text-red-500 hover:text-red-800 font-bold">✕</button>
        </div>
      )}

      {/* Search and Filters Bar */}
      <div className="mb-12 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        {/* Search Input */}
        <div className="relative flex-1 max-w-xl">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={dict.researchPage?.searchPlaceholder || 'Search research papers by title, author, or keyword...'}
            className="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-xl shadow-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7749F8] focus:border-transparent transition-all text-sm md:text-base"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>
          )}
        </div>

        {/* Categories Pills & Action Button */}
        <div className="flex items-center gap-3 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setSelectedCategory('ALL')}
              className={`px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all whitespace-nowrap shadow-sm ${
                selectedCategory === 'ALL'
                  ? 'bg-[#7749F8] text-white shadow-[#7749F8]/25 shadow-md'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-gray-300 hover:bg-gray-50'
              }`}
            >
              {dict.researchPage?.filters?.all || 'All Topics'}
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all whitespace-nowrap shadow-sm ${
                  selectedCategory.toLowerCase() === cat.toLowerCase()
                    ? 'bg-[#7749F8] text-white shadow-[#7749F8]/25 shadow-md'
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Secondary Quick Upload Button */}
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            disabled={isUploading}
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#7749F8] hover:bg-[#59168B] text-white text-xs md:text-sm font-semibold rounded-xl shadow-sm transition-all whitespace-nowrap shrink-0 hover:shadow-md cursor-pointer disabled:opacity-50"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l4-4m0 0l4 4m-4-4v12" />
            </svg>
            <span>{dict.researchPage?.header?.uploadPdf || 'Upload PDF'}</span>
          </button>
        </div>
      </div>

      {/* Research Papers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredList.map((item, idx) => {
          const pdfLink = getPdfUrl(item);
          const title = lang === 'pt' && item.titlePt ? item.titlePt : item.title;
          const excerpt = lang === 'pt' && item.excerptPt ? item.excerptPt : item.excerpt;

          return (
            <div
              key={item.id || idx}
              className="bg-white rounded-2xl border border-gray-100 p-6 shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_35px_rgba(119,73,248,0.1)] transition-all duration-300 flex flex-col h-full group relative overflow-hidden"
            >
              {/* Top Accent Strip */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#7749F8] to-[#9065FF] opacity-80 group-hover:opacity-100 transition-opacity" />

              {/* Badges: Category & Document Type */}
              <div className="flex items-center justify-between gap-2 mb-4 mt-1">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-purple-50 text-[#7749F8] border border-purple-100">
                  {item.category || 'Research'}
                </span>
                {item.fileSize && (
                  <span className="inline-flex items-center gap-1 text-[11px] font-medium text-gray-500 bg-gray-50 px-2 py-0.5 rounded-md border border-gray-100">
                    <svg className="w-3.5 h-3.5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                    </svg>
                    PDF • {item.fileSize}
                  </span>
                )}
              </div>

              {/* Title */}
              <Link href={`/${lang}/research/${item.slug}`} className="block mb-3">
                <h3 className="text-lg lg:text-xl font-bold text-gray-900 group-hover:text-[#7749F8] transition-colors leading-snug line-clamp-2">
                  {title}
                </h3>
              </Link>

              {/* Metadata: Author & Date */}
              <div className="flex items-center flex-wrap gap-y-1 gap-x-4 text-xs text-gray-400 mb-4 pb-3 border-b border-gray-100">
                <div className="flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span className="font-medium text-gray-600">{item.author}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>{item.date}</span>
                </div>
              </div>

              {/* Excerpt */}
              <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3 flex-1">
                {excerpt}
              </p>

              {/* Action Buttons */}
              <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between gap-2">
                {pdfLink ? (
                  <>
                    <button
                      onClick={() => setPreviewPdf({ url: pdfLink, title, filename: item.pdfFileName || undefined })}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#7749F8] hover:text-[#59168B] bg-purple-50 hover:bg-purple-100 px-3 py-2 rounded-lg transition-colors cursor-pointer"
                      title={dict.researchPage?.list?.previewPdf || 'Preview Document'}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      {dict.researchPage?.list?.previewPdf || 'Preview'}
                    </button>

                    <a
                      href={pdfLink}
                      download={item.pdfFileName || `${item.slug}.pdf`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-[#7749F8] hover:bg-[#59168B] px-3.5 py-2 rounded-lg shadow-sm transition-colors"
                      title={dict.researchPage?.list?.downloadPdf || 'Download PDF'}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      {dict.researchPage?.list?.downloadPdf || 'PDF'}
                    </a>
                  </>
                ) : (
                  <Link
                    href={`/${lang}/research/${item.slug}`}
                    className="text-xs font-semibold text-[#7749F8] hover:underline"
                  >
                    {dict.researchPage?.list?.readMore || 'View Details'} →
                  </Link>
                )}

                <Link
                  href={`/${lang}/research/${item.slug}`}
                  className="text-xs font-medium text-gray-400 hover:text-gray-700 transition-colors ml-auto"
                >
                  {dict.researchPage?.list?.readMore || 'Details'} →
                </Link>
              </div>
            </div>
          );
        })}

        {filteredList.length === 0 && (
          <div className="col-span-full py-16 bg-white rounded-2xl border border-dashed border-gray-200 text-center px-4">
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-purple-50 flex items-center justify-center text-[#7749F8]">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h4 className="text-lg font-bold text-gray-800 mb-1">
              {dict.researchPage?.list?.noResearch || 'No publications found'}
            </h4>
            <p className="text-sm text-gray-500 max-w-md mx-auto mb-4">
              {searchQuery
                ? `No documents matched "${searchQuery}".`
                : 'Click "Upload PDF" above to upload your document directly from your files.'}
            </p>
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#7749F8] text-white text-xs font-semibold rounded-xl shadow-sm hover:bg-[#59168B] transition-colors cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l4-4m0 0l4 4m-4-4v12" />
              </svg>
              <span>{dict.researchPage?.header?.uploadPdf || 'Upload PDF'}</span>
            </button>
          </div>
        )}
      </div>

      {/* Interactive PDF Modal Previewer */}
      {previewPdf && (
        <div
          className="fixed inset-0 z-[120] flex items-center justify-center bg-black/80 backdrop-blur-sm p-2 sm:p-4 md:p-6"
          onClick={() => setPreviewPdf(null)}
        >
          <div
            className="bg-zinc-900 border border-zinc-700 text-white rounded-2xl shadow-2xl w-full max-w-5xl h-[90vh] flex flex-col overflow-hidden animate-slide-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="px-5 py-3.5 bg-zinc-800/90 border-b border-zinc-700 flex items-center justify-between gap-3 shrink-0">
              <div className="flex items-center gap-2.5 overflow-hidden">
                <div className="p-1.5 bg-red-500/20 rounded-md text-red-400">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="text-sm md:text-base font-semibold truncate text-zinc-100" title={previewPdf.title}>
                  {previewPdf.title}
                </h4>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                {/* Direct Download Button */}
                <a
                  href={previewPdf.url}
                  download={previewPdf.filename || 'research-paper.pdf'}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#7749F8] hover:bg-[#59168B] text-white text-xs font-semibold rounded-lg transition-colors shadow-sm"
                  title="Download PDF"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  <span className="hidden sm:inline">Download</span>
                </a>

                {/* Open in New Window Button */}
                <a
                  href={previewPdf.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-zinc-700 hover:bg-zinc-600 text-zinc-200 text-xs font-semibold rounded-lg transition-colors"
                  title="Open in new window"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  <span className="hidden sm:inline">New Tab</span>
                </a>

                {/* Close Button */}
                <button
                  onClick={() => setPreviewPdf(null)}
                  className="p-1.5 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-700 transition-colors cursor-pointer"
                  aria-label="Close PDF preview"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Embedded PDF Viewer */}
            <div className="flex-1 w-full bg-zinc-950 relative">
              <iframe
                src={`${previewPdf.url}#toolbar=1&view=FitH`}
                className="w-full h-full border-0"
                title={previewPdf.title}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
