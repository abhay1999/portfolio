'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
// import BlogSection from '@/components/sections/BlogSection';

export default function Blog() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <div className="container mx-auto px-4 md:px-6 pt-32 pb-16">
        {/* Blog disabled temporarily */}
        <div className="text-center py-24">
          <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-2">Blog coming soon</h2>
          <p className="text-gray-600 dark:text-gray-400">This section is currently disabled.</p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
