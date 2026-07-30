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
        className={`px-3 py-1.5 text-sm font-semibold rounded-md transition-all ${
          currentLocale === 'en' 
            ? 'bg-white text-[#7749F8] shadow-sm ring-1 ring-black/5' 
            : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
        }`}
      >
        EN
      </Link>
      <Link 
        href={getUrl('pt')}
        className={`px-3 py-1.5 text-sm font-semibold rounded-md transition-all ${
          currentLocale === 'pt' 
            ? 'bg-white text-[#7749F8] shadow-sm ring-1 ring-black/5' 
            : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
        }`}
      >
        PT
      </Link>
    </div>
  );
}
