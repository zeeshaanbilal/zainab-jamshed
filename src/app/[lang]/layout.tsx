import type { Metadata } from "next";
import { Inter, Geist_Mono, Playfair_Display } from "next/font/google";
import BookingButtonClient from "@/components/BookingButtonClient";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import MobileMenuClient from "@/components/MobileMenuClient";
import { getDictionary } from "@/lib/getDictionary";
import "../globals.css";

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

import ScrollObserver from "@/components/ScrollObserver";
import Link from "next/link";

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: string } | Promise<{ lang: string }>;
}>) {
  const resolvedParams = await Promise.resolve(params);
  const dict = await getDictionary(resolvedParams.lang);

  return (
    <html lang={resolvedParams.lang} className={`${inter.variable} ${geistMono.variable} ${playfair.variable} antialiased`} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col bg-background text-foreground font-sans selection:bg-indigo-100 selection:text-indigo-900 overflow-x-hidden" suppressHydrationWarning>
        <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/95 backdrop-blur-md shadow-sm">
          <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            {/* Logo */}
            <div className="flex items-center cursor-pointer transition-transform hover:scale-105">
              <img src="/logo.png" alt="ZJ Logix" className="h-12 w-auto object-contain" />
            </div>

            {/* Nav Links */}
            <div className="hidden md:flex items-center gap-8 text-lg font-medium text-gray-700">
              <Link href={`/${resolvedParams.lang}`} className="hover:text-[#7749F8] transition-colors">{dict.navbar.home}</Link>
              <Link href={`/${resolvedParams.lang}/about`} className="hover:text-[#7749F8] transition-colors">{dict.navbar.aboutUs}</Link>
              <div className="relative group">
                <Link href={`/${resolvedParams.lang}/services`} className="flex items-center gap-1 hover:text-[#7749F8] transition-colors py-6 -my-6">
                  {dict.navbar.services}
                  <svg className="w-4 h-4 transform group-hover:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </Link>
                
                {/* Dropdown Menu */}
                <div className="absolute top-full -left-4 w-[240px] pt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="bg-white border border-gray-100 shadow-xl rounded-lg flex flex-col py-1">
                    <Link href={`/${resolvedParams.lang}/services/business-modeling`} className="px-5 py-2.5 text-[16px] text-gray-600 hover:bg-gray-50 hover:text-[#7749F8] border-b border-gray-100 last:border-0 transition-colors">{dict.navbar.businessModeling}</Link>
                    <Link href={`/${resolvedParams.lang}/services/decision-optimization`} className="px-5 py-2.5 text-[16px] text-gray-600 hover:bg-gray-50 hover:text-[#7749F8] border-b border-gray-100 last:border-0 transition-colors">{dict.navbar.decisionOptimization}</Link>
                    <Link href={`/${resolvedParams.lang}/services/financial-modeling`} className="px-5 py-2.5 text-[16px] text-gray-600 hover:bg-gray-50 hover:text-[#7749F8] border-b border-gray-100 last:border-0 transition-colors">{dict.navbar.financialModeling}</Link>
                    <Link href={`/${resolvedParams.lang}/services/analytics`} className="px-5 py-2.5 text-[16px] text-gray-600 hover:bg-gray-50 hover:text-[#7749F8] border-b border-gray-100 last:border-0 transition-colors">{dict.navbar.analytics}</Link>
                    <Link href={`/${resolvedParams.lang}/services/churn-analysis`} className="px-5 py-2.5 text-[16px] text-gray-600 hover:bg-gray-50 hover:text-[#7749F8] border-b border-gray-100 last:border-0 transition-colors">{dict.navbar.churnAnalysis}</Link>
                    <Link href={`/${resolvedParams.lang}/services/monte-carlo-simulation`} className="px-5 py-2.5 text-[16px] text-gray-600 hover:bg-gray-50 hover:text-[#7749F8] border-b border-gray-100 last:border-0 transition-colors">{dict.navbar.monteCarlo}</Link>
                  </div>
                </div>
              </div>
              <Link href={`/${resolvedParams.lang}/blogs`} className="hover:text-[#7749F8] transition-colors">{dict.navbar.blogs}</Link>
              <Link href={`/${resolvedParams.lang}/contact`} className="hover:text-[#7749F8] transition-colors">{dict.navbar.contactUs}</Link>
            </div>

            {/* Right Side Controls */}
            <div className="hidden md:flex items-center gap-4">
              <BookingButtonClient text={dict.navbar.bookConsultation} />
              <LanguageSwitcher />
            </div>

            {/* Mobile Menu Button & Drawer */}
            <div className="md:hidden flex items-center">
              <MobileMenuClient dict={dict} lang={resolvedParams.lang} />
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
