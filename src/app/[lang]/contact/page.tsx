import Link from 'next/link';
import Footer from '@/components/Footer';
import BookingSection from '@/components/BookingSection';
import ContactSection from '@/components/ContactSection';
import { getDictionary } from '@/lib/getDictionary';

export default async function ContactUsPage({ params }: { params: { lang: string } | Promise<{ lang: string }> }) {
  const resolvedParams = await Promise.resolve(params);
  const dict = await getDictionary(resolvedParams.lang);

  return (
    <div className="w-full flex flex-col min-h-screen">
      {/* Main Content Area - Contact Section */}
      <ContactSection contact={dict.contact} />

      {/* Booking Section */}
      <BookingSection booking={dict.booking} />
      
      {/* Footer */}
      <Footer footer={dict.footer} />
    </div>
  );
}
