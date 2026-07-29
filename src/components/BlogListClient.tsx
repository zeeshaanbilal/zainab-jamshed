"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function BlogListClient({ blogs }: { blogs: any[] }) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Prevent background scrolling when a modal is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  return (
    <>
      {/* 3-Column Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
        {blogs.map((blog, idx) => (
          <div 
            key={blog.id || idx} 
            className="bg-white rounded-3xl border border-gray-100 p-5 shadow-[0_4px_25px_rgba(0,0,0,0.03)] flex flex-col h-full opacity-0 animate-slide-up hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all group"
            style={{ animationDelay: blog.delay || '0.2s' }}
          >
            <div 
              className="w-full h-[220px] rounded-2xl overflow-hidden mb-5 relative cursor-zoom-in"
              onClick={() => setSelectedImage(blog.image)}
            >
              <img src={blog.image} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>

            <div className="flex flex-col flex-1 px-1">
              <Link href={`/blogs/${blog.id}`} className="block">
                <h3 className="text-[19px] lg:text-[21px] font-bold text-gray-900 leading-snug mb-3 group-hover:text-[#7749F8] transition-colors">
                  {blog.title}
                </h3>
              </Link>
              
              {/* Meta Information (Author & Date) */}
              <div className="flex items-center gap-4 text-[13px] text-gray-400 font-medium mb-4">
                <div className="flex items-center gap-1.5">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                  <span>{blog.author}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path></svg>
                  <span>{blog.date}</span>
                </div>
              </div>
              
              <p className="text-gray-500 text-[15px] leading-relaxed mb-6 flex-1">
                {blog.excerpt}
              </p>

              <div className="flex justify-end mt-auto">
                <Link 
                  href={`/blogs/${blog.id}`} 
                  className="bg-[#7749F8] text-white px-6 py-2.5 rounded-lg font-medium text-[14px] hover:bg-[#59168B] transition-colors"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        ))}
        {blogs.length === 0 && (
          <div className="col-span-full py-12 text-center text-gray-500 text-lg">
            No blogs available yet. Please add some from the admin dashboard.
          </div>
        )}
      </div>

      {/* Image Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[110] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-pop-in"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white hover:text-gray-300 z-10"
            onClick={() => setSelectedImage(null)}
          >
            <svg className="w-10 h-10 drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
          <img 
            src={selectedImage} 
            alt="Expanded view" 
            className="max-w-[95vw] max-h-[90vh] object-contain rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()} 
          />
        </div>
      )}
    </>
  );
}
