"use client";

import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

export default function LanguageSwitcher({ currentLang }: { currentLang: string }) {
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = (newLang: string) => {
    // Set cookie
    document.cookie = `NEXT_LOCALE=${newLang}; path=/; max-age=31536000`;
    
    // Redirect
    if (!pathname) return '/';
    const segments = pathname.split('/');
    segments[1] = newLang; // Replace the language segment
    const newPath = segments.join('/');
    router.push(newPath);
    router.refresh(); // Refresh to ensure layout updates
  };

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => switchLanguage('en')}
        className={`px-2 py-1 rounded-md text-sm font-medium transition-colors ${
          currentLang === 'en' ? 'bg-[#7749F8] text-white' : 'text-gray-600 hover:bg-gray-100'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => switchLanguage('pt')}
        className={`px-2 py-1 rounded-md text-sm font-medium transition-colors ${
          currentLang === 'pt' ? 'bg-[#7749F8] text-white' : 'text-gray-600 hover:bg-gray-100'
        }`}
      >
        PT
      </button>
    </div>
  );
}
