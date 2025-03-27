'use client';
import { motion } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader';
import Image from 'next/image';

const SkillsSection = () => {
  const technicalSkills = [
    { name: 'Food Science', percentage: 92 },
    { name: 'Food Processing Technology', percentage: 88 },
    { name: 'Food Safety Management', percentage: 85 },
    { name: 'Product Development', percentage: 90 },
    { name: 'Nutrition Analysis', percentage: 80 },
    { name: 'Quality Control', percentage: 87 },
    { name: 'Laboratory Techniques', percentage: 84 },
    { name: 'Food Chemistry', percentage: 82 },
  ];

  const softSkills = [
    { name: 'Team Leadership', percentage: 90 },
    { name: 'Problem Solving', percentage: 88 },
    { name: 'Communication', percentage: 92 },
    { name: 'Research', percentage: 86 },
    { name: 'Project Management', percentage: 84 },
    { name: 'Time Management', percentage: 88 },
  ];

  const certifications = [
    {
      title: 'Food Safety Management Systems - ISO 22000',
      issuer: 'International Organization for Standardization',
      date: 'November 2023',
      image: '/placeholder.jpg',
    },
    {
      title: 'HACCP Certification',
      issuer: 'Food Safety and Standards Authority of India',
      date: 'August 2023',
      image: '/placeholder.jpg',
    },
    {
      title: 'Advanced Food Product Development',
      issuer: 'Food Technology Institute',
      date: 'May 2023',
      image: '/placeholder.jpg',
    },
    {
      title: 'Nutrition and Health: Food Risks',
      issuer: 'Wageningen University & Research',
      date: 'February 2023',
      image: '/placeholder.jpg',
    },
  ];

  const tools = [
    { name: 'HACCP Management Software', icon: '🛡️' },
    { name: 'Food Formulation Tools', icon: '🧪' },
    { name: 'Sensory Analysis Software', icon: '👁️' },
    { name: 'Quality Control Systems', icon: '✓' },
    { name: 'Nutritional Analysis Tools', icon: '🥗' },
    { name: 'Food Safety Databases', icon: '🔍' },
    { name: 'Laboratory Information Management Systems', icon: '💻' },
    { name: 'Statistical Analysis Software', icon: '📊' },
  ];

  return (
    <div className="container mx-auto px-4 md:px-6">
      <SectionHeader
        title="Skills & Certifications"
        subtitle="A comprehensive overview of my technical skills, soft skills, and certifications in food technology."
      />

      {/* Technical Skills Section */}
      <div className="mb-20">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between mt-16 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:w-1/3"
          >
            <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-4">
              Technical Skills
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Specialized knowledge and expertise in food technology, developed through academic studies and practical applications.
            </p>
            <div className="hidden md:block relative w-full h-64 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-3xl text-gray-400 dark:text-gray-500">
                Skill Illustration
              </div>
              {/* Uncomment when you have actual images */}
              <Image
                src="/images/technical-skills.jpeg"
                alt="Technical Skills"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {technicalSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="mb-4"
              >
                <div className="flex justify-between mb-2">
                  <h4 className="text-gray-900 dark:text-white font-medium">{skill.name}</h4>
                  <span className="text-gray-600 dark:text-gray-400">{skill.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.05 }}
                    className="bg-primary-600 dark:bg-primary-500 h-2.5 rounded-full"
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Soft Skills Section */}
      <div className="mb-20">
        <div className="flex flex-col md:flex-row-reverse items-center md:items-start justify-between mt-16 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:w-1/3"
          >
            <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-4">
              Soft Skills
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Professional attributes that enable effective collaboration, communication, and project management in food technology settings.
            </p>
            <div className="hidden md:block relative w-full h-64 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-3xl text-gray-400 dark:text-gray-500">
                Soft Skills Illustration
              </div>
              {/* Uncomment when you have actual images */}
              <Image
                src="/images/soft-skills.jpeg"
                alt="Soft Skills"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {softSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="mb-4"
              >
                <div className="flex justify-between mb-2">
                  <h4 className="text-gray-900 dark:text-white font-medium">{skill.name}</h4>
                  <span className="text-gray-600 dark:text-gray-400">{skill.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.05 }}
                    className="bg-secondary-600 dark:bg-secondary-500 h-2.5 rounded-full"
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Tools & Technologies */}
      <div className="mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-4">
            Tools & Technologies
          </h3>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Specialized software, systems, and tools used in food technology applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm flex flex-col items-center text-center"
            >
              <span className="text-4xl mb-4">{tool.icon}</span>
              <h4 className="text-gray-900 dark:text-white font-medium">{tool.name}</h4>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certifications Section */}
      <div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-4">
            Certifications
          </h3>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Professional certifications and credentials in food technology and related fields.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col md:flex-row"
            >
              <div className="md:w-1/3 relative bg-gray-200 dark:bg-gray-700 h-48 md:h-auto">
                <div className="absolute inset-0 flex items-center justify-center text-3xl text-gray-400 dark:text-gray-500">
                  Certificate
                </div>
                {/* Uncomment when you have actual images */}
                {/* <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  style={{ objectFit: 'cover' }}
                /> */}
              </div>
              <div className="p-6 md:w-2/3">
                <h4 className="text-xl font-display font-bold text-gray-900 dark:text-white mb-2">
                  {cert.title}
                </h4>
                <p className="text-gray-700 dark:text-gray-300 mb-2">{cert.issuer}</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{cert.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection; 