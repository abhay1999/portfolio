'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactSection from '@/components/sections/ContactSection';

export default function Contact() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <div className="container mx-auto px-4 md:px-6 pt-32 pb-16">
        <ContactSection />
      </div>
      <Footer />
    </main>
  );
}
