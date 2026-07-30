import type { Metadata } from "next";
import { Inter, Geist_Mono, Playfair_Display } from "next/font/google";
import BookingButtonClient from "@/components/BookingButtonClient";
import "../globals.css";
import ScrollObserver from "@/components/ScrollObserver";
import Link from "next/link";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/i18n-config";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ZJ Logix",
  description: "Optimize Beyond Limits",
};

export default async function RootLayout(
  props: {
    children: React.ReactNode;
    params: Promise<{ lang: string }>;
  }
) {
  const params = await props.params;
  const { children } = props;
  const lang = params.lang as Locale;
  const dict = await getDictionary(lang);

  return (
    <html lang={lang} className={`${inter.variable} ${geistMono.variable} ${playfair.variable} antialiased`} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col bg-background text-foreground font-sans selection:bg-indigo-100 selection:text-indigo-900" suppressHydrationWarning>
        <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/95 backdrop-blur-md shadow-sm">
          <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
            {/* Logo */}
            <div className="flex items-center cursor-pointer transition-transform hover:scale-105">
              <Link href={`/${lang}`}>
                <img src="/logo.png" alt="ZJ Logix" className="h-12 w-auto object-contain" />
              </Link>
            </div>

            {/* Nav Links */}
            <div className="hidden md:flex items-center gap-8 text-lg font-medium text-gray-700">
              <Link href={`/${lang}`} className="hover:text-[#7749F8] transition-colors">{dict.navigation.home}</Link>
              <Link href={`/${lang}/about`} className="hover:text-[#7749F8] transition-colors">{dict.navigation.about}</Link>
              <div className="relative group">
                <Link href={`/${lang}/services`} className="flex items-center gap-1 hover:text-[#7749F8] transition-colors py-6 -my-6">
                  {dict.navigation.services}
                  <svg className="w-4 h-4 transform group-hover:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </Link>
                
                {/* Dropdown Menu */}
                <div className="absolute top-full -left-4 w-[240px] pt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="bg-white border border-gray-100 shadow-xl rounded-lg flex flex-col py-1">
                    <Link href={`/${lang}/services/business-modeling`} className="px-5 py-2.5 text-[16px] text-gray-600 hover:bg-gray-50 hover:text-[#7749F8] border-b border-gray-100 last:border-0 transition-colors">Business Modeling</Link>
                    <Link href={`/${lang}/services/decision-optimization`} className="px-5 py-2.5 text-[16px] text-gray-600 hover:bg-gray-50 hover:text-[#7749F8] border-b border-gray-100 last:border-0 transition-colors">Decision Optimization</Link>
                    <Link href={`/${lang}/services/financial-modeling`} className="px-5 py-2.5 text-[16px] text-gray-600 hover:bg-gray-50 hover:text-[#7749F8] border-b border-gray-100 last:border-0 transition-colors">Financial Modeling</Link>
                    <Link href={`/${lang}/services/analytics`} className="px-5 py-2.5 text-[16px] text-gray-600 hover:bg-gray-50 hover:text-[#7749F8] border-b border-gray-100 last:border-0 transition-colors">Analytics</Link>
                    <Link href={`/${lang}/services/churn-analysis`} className="px-5 py-2.5 text-[16px] text-gray-600 hover:bg-gray-50 hover:text-[#7749F8] border-b border-gray-100 last:border-0 transition-colors">Churn Analysis</Link>
                    <Link href={`/${lang}/services/monte-carlo-simulation`} className="px-5 py-2.5 text-[16px] text-gray-600 hover:bg-gray-50 hover:text-[#7749F8] border-b border-gray-100 last:border-0 transition-colors">Monte Carlo Simulation</Link>
                  </div>
                </div>
              </div>
              <Link href={`/${lang}/blogs`} className="hover:text-[#7749F8] transition-colors">{dict.navigation.blogs}</Link>
              <Link href={`/${lang}/contact`} className="hover:text-[#7749F8] transition-colors">{dict.navigation.contact}</Link>
            </div>

            <div className="hidden md:flex items-center gap-4">
              {/* Language Switcher */}
              <LanguageSwitcher currentLang={lang} />
              
              {/* CTA Button */}
              <BookingButtonClient />
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <LanguageSwitcher currentLang={lang} />
              <button className="text-gray-600 hover:text-gray-900 focus:outline-none ml-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
              </button>
            </div>
          </nav>
        </header>
        <main className="flex flex-1 flex-col">
          <ScrollObserver />
          {children}
        </main>
      </body>
    </html>
  );
}
