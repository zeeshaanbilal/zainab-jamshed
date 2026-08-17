"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function LanguageSwitcher() {
  const pathname = usePathname();

  // Detect current language from the URL (e.g., /en/about -> en)
  const currentLocale = pathname ? pathname.split('/')[1] : 'en'; 
  
  // Helper to generate the URL for a specific language
  const getUrl = (locale: string) => {
    if (!pathname) return `/${locale}`;
    const segments = pathname.split('/');
    segments[1] = locale; // Replace the first segment (which is the locale)
    return segments.join('/') || '/';
  };

  return (
    <div className="flex items-center gap-1 border border-gray-200 rounded-lg p-1 bg-gray-50">
      <Link 
        href={getUrl('en')}
        className={`flex items-center gap-2 px-3 py-1.5 text-sm font-semibold rounded-md transition-all ${
          currentLocale === 'en' 
            ? 'bg-white text-[#7749F8] shadow-sm ring-1 ring-black/5' 
            : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
        }`}
        title="English"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" className="w-5 h-auto rounded-sm overflow-hidden shadow-sm">
          <clipPath id="s">
            <path d="M0,0 v30 h60 v-30 z"/>
          </clipPath>
          <clipPath id="t">
            <path d="M30,15 h30 v15 z v-15 h-30 z h-30 v-15 z v15 h30 z"/>
          </clipPath>
          <g clipPath="url(#s)">
            <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
            <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
            <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t)" stroke="#C8102E" strokeWidth="4"/>
            <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10"/>
            <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6"/>
          </g>
        </svg>
        EN
      </Link>
      <Link 
        href={getUrl('pt')}
        className={`flex items-center gap-2 px-3 py-1.5 text-sm font-semibold rounded-md transition-all ${
          currentLocale === 'pt' 
            ? 'bg-white text-[#7749F8] shadow-sm ring-1 ring-black/5' 
            : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
        }`}
        title="Português"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 700" className="w-5 h-auto rounded-sm overflow-hidden shadow-sm">
          <rect width="1000" height="700" fill="#009c3b"/>
          <polygon points="500,85 915,350 500,615 85,350" fill="#ffdf00"/>
          <circle cx="500" cy="350" r="175" fill="#002776"/>
          <path d="M 325,350 A 350,350 0 0,0 675,350 A 370,370 0 0,1 325,350 Z" fill="#fff"/>
        </svg>
        PT
      </Link>
    </div>
  );
}
