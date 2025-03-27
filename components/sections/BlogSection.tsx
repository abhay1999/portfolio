'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionHeader from '../ui/SectionHeader';

const blogPosts = [
  {
    id: 1,
    title: 'Advancements in Food Preservation Technologies',
    excerpt: 'Exploring the latest innovations in food preservation that extend shelf life without compromising nutritional value.',
    date: 'June 15, 2023',
    category: 'Food Technology',
    imageUrl: '/blog/food-preservation.jpg',
    readTime: '5 min read',
    slug: 'advancements-in-food-preservation-technologies'
  },
  {
    id: 2,
    title: 'Sustainable Packaging Solutions for Food Industry',
    excerpt: 'How biodegradable and compostable materials are revolutionizing food packaging to reduce environmental impact.',
    date: 'May 28, 2023',
    category: 'Sustainability',
    imageUrl: '/blog/sustainable-packaging.jpg',
    readTime: '7 min read',
    slug: 'sustainable-packaging-solutions'
  },
  {
    id: 3,
    title: 'The Role of Artificial Intelligence in Food Quality Assessment',
    excerpt: 'Investigating how AI and machine learning are being used to improve food safety and quality control processes.',
    date: 'April 10, 2023',
    category: 'Technology',
    imageUrl: '/blog/ai-food-quality.jpg',
    readTime: '6 min read',
    slug: 'ai-in-food-quality-assessment'
  },
  {
    id: 4,
    title: 'Plant-Based Alternatives: Innovations and Challenges',
    excerpt: 'A deep dive into the rapidly growing plant-based food sector and the technological hurdles being overcome.',
    date: 'March 5, 2023',
    category: 'Food Science',
    imageUrl: '/blog/plant-based-alternatives.jpg',
    readTime: '8 min read',
    slug: 'plant-based-alternatives-innovations'
  },
  {
    id: 5,
    title: 'Food Safety Management Systems: A Comprehensive Guide',
    excerpt: 'Understanding the implementation of effective HACCP and ISO 22000 systems in food processing facilities.',
    date: 'February 18, 2023',
    category: 'Food Safety',
    imageUrl: '/blog/food-safety.jpg',
    readTime: '10 min read',
    slug: 'food-safety-management-systems'
  },
  {
    id: 6,
    title: 'Emerging Trends in Functional Foods and Nutraceuticals',
    excerpt: 'How food technology is enabling the development of foods with enhanced health benefits and medical properties.',
    date: 'January 24, 2023',
    category: 'Nutrition',
    imageUrl: '/blog/functional-foods.jpg',
    readTime: '6 min read',
    slug: 'trends-in-functional-foods'
  }
];

const categories = [
  'All',
  'Food Technology',
  'Sustainability',
  'Technology',
  'Food Science',
  'Food Safety',
  'Nutrition'
];

const BlogSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="container mx-auto px-4 md:px-6">
      <SectionHeader
        title="Blog & Articles"
        subtitle="Sharing insights and knowledge about food technology, innovation, and industry trends."
      />

      <div className="mt-12">
        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 space-y-4 md:space-y-0">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-colors duration-300 ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 pl-10 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
            />
            <svg
              className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
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
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-2"
              >
                <div className="relative h-48 w-full">
                  <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    className="object-cover"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    onError={(e) => {
                      // Handle image load error
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium px-2 py-1 bg-primary-100 text-primary-800 dark:bg-primary-900/30 dark:text-primary-400 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-xs text-gray-500 dark:text-gray-400">{post.readTime}</span>
                    <a
                      href={`/blog/${post.slug}`}
                      className="text-primary-600 dark:text-primary-400 hover:underline text-sm font-medium flex items-center"
                    >
                      Read More
                      <svg
                        className="ml-1 h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
            </svg>
            <h3 className="mt-2 text-lg font-medium text-gray-900 dark:text-white">No articles found</h3>
            <p className="mt-1 text-gray-500 dark:text-gray-400">
              Try adjusting your search or filter to find what you&apos;re looking for.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchTerm('');
              }}
              className="mt-4 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-md transition-colors duration-300"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>

      {/* Newsletter Subscription */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-20 bg-gradient-to-r from-primary-600 to-primary-800 rounded-lg p-8 md:p-12"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
            Subscribe to My Newsletter
          </h3>
          <p className="text-primary-100 mb-8">
            Get the latest articles, research, and insights delivered directly to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full px-4 py-3 rounded-md border-0 focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-white text-primary-600 font-medium rounded-md hover:bg-gray-100 transition-colors duration-300 whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
          <p className="text-xs text-primary-100 mt-4">
            I respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default BlogSection; 