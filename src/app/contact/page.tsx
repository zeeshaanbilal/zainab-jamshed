import Link from 'next/link';
import Footer from '@/components/Footer';
import BookingSection from '@/components/BookingSection';
import ContactSection from '@/components/ContactSection';

export default function ContactUsPage() {
  return (
    <div className="w-full flex flex-col min-h-screen">
      {/* Main Content Area - Contact Section */}
      <ContactSection />

      {/* Booking Section */}
      <BookingSection />
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
