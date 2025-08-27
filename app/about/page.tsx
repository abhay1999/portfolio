'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AboutSection from '@/components/sections/AboutSection';

export default function About() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <div className="container mx-auto px-4 md:px-6 pt-32 pb-16">
        <AboutSection />
      </div>
      <Footer />
    </main>
  );
}
