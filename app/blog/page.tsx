'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogSection from '@/components/sections/BlogSection';

export default function Blog() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <div className="container mx-auto px-4 md:px-6 pt-32 pb-16">
        <BlogSection />
      </div>
      <Footer />
    </main>
  );
}
