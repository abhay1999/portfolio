'use client';
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SectionHeader from '../../components/ui/SectionHeader';
import Image from 'next/image';

export default function About() {
  const skills = [
    { name: 'Food Science', percentage: 92 },
    { name: 'Food Processing Technology', percentage: 88 },
    { name: 'Food Safety Management', percentage: 85 },
    { name: 'Product Development', percentage: 90 },
    { name: 'Nutrition Analysis', percentage: 80 },
    { name: 'Quality Control', percentage: 87 },
  ];

  const educationTimeline = [
    {
      degree: 'B.Tech in Food Technology',
      institution: 'University Name',
      period: '2020 - 2024',
      description: 'Specializing in food processing, product development, and food safety management systems.',
    },
    {
      degree: 'Higher Secondary Education',
      institution: 'School Name',
      period: '2018 - 2020',
      description: 'Focused on Science stream with emphasis on Biology, Chemistry, and Physics.',
    },
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />

      <div className="container mx-auto px-4 md:px-6 pt-32 pb-16">
        {/* About Section */}
        <div className="mb-20">
          <SectionHeader
            title="About Me"
            subtitle="Learn more about my background, education, and passion for food technology."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
            {/* Image Column */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex justify-center md:justify-start"
            >
              <div className="relative w-64 h-80 bg-gradient-to-tr from-primary-500 to-secondary-500 p-1 rounded-lg">
                <div className="w-full h-full bg-gray-200 dark:bg-gray-800 rounded-lg flex items-center justify-center overflow-hidden">
                  <span className="text-7xl text-primary-500">SG</span>
                  {/* Uncomment and update once you have an actual image */}
                  <Image
                    src="/images/about.jpg"
                    alt="Shubhangi Gupta"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
            </motion.div>

            {/* Content Column */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col space-y-6"
            >
              <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white">
                B.Tech Food Technology Student
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                I am a passionate and dedicated food technology student with a keen interest in food innovation and sustainable food solutions. My academic journey has equipped me with comprehensive knowledge in food processing, product development, and quality assurance.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                My goal is to contribute to the food industry by applying technology and research to create healthier food options and reduce food waste. I believe in the power of innovation to transform how we produce, process, and consume food.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div>
                  <p className="text-gray-900 dark:text-white font-medium">Name:</p>
                  <p className="text-gray-600 dark:text-gray-400">Shubhangi Gupta</p>
                </div>
                <div>
                  <p className="text-gray-900 dark:text-white font-medium">Email:</p>
                  <p className="text-gray-600 dark:text-gray-400">info@example.com</p>
                </div>
                <div>
                  <p className="text-gray-900 dark:text-white font-medium">Location:</p>
                  <p className="text-gray-600 dark:text-gray-400">India</p>
                </div>
                <div>
                  <p className="text-gray-900 dark:text-white font-medium">Degree:</p>
                  <p className="text-gray-600 dark:text-gray-400">B.Tech Food Technology</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-20">
          <SectionHeader
            title="Skills"
            subtitle="Technical and professional skills developed through education and practical experience."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-6"
              >
                <div className="flex justify-between mb-2">
                  <h4 className="text-gray-900 dark:text-white font-medium">{skill.name}</h4>
                  <span className="text-gray-600 dark:text-gray-400">{skill.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="bg-primary-600 dark:bg-primary-500 h-2.5 rounded-full"
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div>
          <SectionHeader
            title="Education"
            subtitle="My academic journey and qualifications."
          />

          <div className="mt-16 space-y-12">
            {educationTimeline.map((education, index) => (
              <motion.div
                key={education.degree}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-10 border-l-2 border-gray-200 dark:border-gray-800"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary-600 dark:bg-primary-400"></div>
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                    <h3 className="text-xl font-display font-bold text-gray-900 dark:text-white">
                      {education.degree}
                    </h3>
                    <span className="inline-block mt-2 md:mt-0 px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 text-sm rounded-full">
                      {education.period}
                    </span>
                  </div>
                  <h4 className="text-gray-700 dark:text-gray-300 font-medium mb-2">
                    {education.institution}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    {education.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
} 