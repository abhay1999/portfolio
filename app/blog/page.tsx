'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SectionHeader from '../../components/ui/SectionHeader';
import Link from 'next/link';

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const blogPosts = [
    {
      id: 1,
      title: 'Innovations in Sustainable Food Packaging',
      excerpt: 'Exploring the latest advancements in eco-friendly food packaging solutions and their impact on reducing environmental footprint.',
      date: 'March 15, 2024',
      category: 'Sustainability',
      image: '/placeholder.jpg',
      author: 'Shubhangi Gupta',
    },
    {
      id: 2,
      title: 'The Science of Food Preservation',
      excerpt: 'A deep dive into modern food preservation techniques and how they maintain nutritional value while extending shelf life.',
      date: 'February 28, 2024',
      category: 'Food Science',
      image: '/placeholder.jpg',
      author: 'Shubhangi Gupta',
    },
    {
      id: 3,
      title: 'Plant-Based Alternatives: Trends and Innovations',
      excerpt: 'Analyzing the growing market for plant-based food alternatives and the technological innovations driving this sector.',
      date: 'January 20, 2024',
      category: 'Food Innovation',
      image: '/placeholder.jpg',
      author: 'Shubhangi Gupta',
    },
    {
      id: 4,
      title: 'Understanding Food Safety Management Systems',
      excerpt: 'A comprehensive guide to implementing robust food safety management systems in production environments.',
      date: 'December 10, 2023',
      category: 'Food Safety',
      image: '/placeholder.jpg',
      author: 'Shubhangi Gupta',
    },
    {
      id: 5,
      title: 'The Role of Technology in Modern Food Production',
      excerpt: 'How digital technology and automation are transforming traditional food production methods and improving efficiency.',
      date: 'November 5, 2023',
      category: 'Technology',
      image: '/placeholder.jpg',
      author: 'Shubhangi Gupta',
    },
    {
      id: 6,
      title: 'Nutritional Analysis: Methods and Importance',
      excerpt: 'Exploring the methods used for nutritional analysis of food products and why accurate information is crucial for consumers.',
      date: 'October 22, 2023',
      category: 'Nutrition',
      image: '/placeholder.jpg',
      author: 'Shubhangi Gupta',
    },
  ];

  // Extract unique categories from blog posts
  const categories = ['All', ...new Set(blogPosts.map((post) => post.category))];

  // Filter posts based on search term and active category
  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />

      <div className="container mx-auto px-4 md:px-6 pt-32 pb-16">
        <SectionHeader
          title="Blog"
          subtitle="Insights and articles on food technology, innovation, and industry trends."
        />

        {/* Search and Filter Section */}
        <div className="mt-12 mb-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            {/* Search */}
            <div className="w-full md:w-2/5">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 pl-10 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                />
                <svg
                  className="absolute left-3 top-3.5 h-5 w-5 text-gray-400 dark:text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>

            {/* Categories */}
            <div className="w-full md:w-3/5 overflow-x-auto">
              <div className="flex space-x-2 pb-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors duration-300 ${
                      activeCategory === category
                        ? 'bg-primary-600 text-white'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="relative h-48 bg-gray-200 dark:bg-gray-700">
                  <div className="absolute inset-0 flex items-center justify-center text-3xl text-gray-400 dark:text-gray-500">
                    Blog Image
                  </div>
                  {/* Uncomment when you have actual images */}
                  {/* <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  /> */}
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 px-2.5 py-0.5 rounded">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {post.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-display font-bold text-gray-900 dark:text-white mb-3">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      By {post.author}
                    </span>
                    <Link
                      href={`/blog/${post.id}`}
                      className="text-primary-600 dark:text-primary-400 font-medium hover:underline"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <svg
              className="mx-auto h-12 w-12 text-gray-400 dark:text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">
              No posts found
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Try adjusting your search or filter criteria.
            </p>
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
} 