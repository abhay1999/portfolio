'use client';
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SectionHeader from '../../components/ui/SectionHeader';

export default function Experience() {
  const experiences = [
    {
      title: 'Food Technology Intern',
      company: 'ABC Food Products',
      period: 'Jun 2023 - Aug 2023',
      description: 'Assisted in quality control procedures and product development. Conducted sensory analysis and shelf-life studies for new product lines. Prepared technical documentation for food safety compliance.',
      skills: ['Quality Control', 'Product Development', 'Food Safety'],
    },
    {
      title: 'Research Assistant',
      company: 'Food Science Laboratory, University Name',
      period: 'Jan 2023 - May 2023',
      description: 'Participated in research on novel food preservation techniques. Collected and analyzed data for food stability studies. Assisted in preparing scientific reports and presentations.',
      skills: ['Research Methods', 'Data Analysis', 'Food Preservation'],
    },
    {
      title: 'Food Product Developer (Project)',
      company: 'University Innovation Hub',
      period: 'Sep 2022 - Dec 2022',
      description: 'Led a team in developing a sustainable plant-based food product. Conducted market research and competitor analysis. Created formulations and tested prototypes for sensory and nutritional parameters.',
      skills: ['Project Management', 'Product Formulation', 'Sensory Analysis'],
    },
  ];

  const projects = [
    {
      title: 'Sustainable Food Packaging Solution',
      description: 'Developed a biodegradable food packaging material from agricultural waste. Conducted tests for durability, food safety, and environmental impact.',
      image: '/placeholder.jpg',
      technologies: ['Sustainable Materials', 'Food Safety', 'Packaging Technology'],
    },
    {
      title: 'Functional Food Product Development',
      description: 'Created a fortified food product with enhanced nutritional properties targeted at addressing specific dietary deficiencies.',
      image: '/placeholder.jpg',
      technologies: ['Food Formulation', 'Nutrition', 'Product Development'],
    },
    {
      title: 'Food Processing Efficiency Analysis',
      description: 'Analyzed and optimized food processing operations to reduce waste and energy consumption while maintaining product quality.',
      image: '/placeholder.jpg',
      technologies: ['Process Optimization', 'Food Technology', 'Sustainability'],
    },
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />

      <div className="container mx-auto px-4 md:px-6 pt-32 pb-16">
        {/* Experience Section */}
        <div className="mb-20">
          <SectionHeader
            title="Work Experience"
            subtitle="My professional journey in the field of food technology."
          />

          <div className="mt-16 relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-800 transform md:translate-x-0"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {experiences.map((experience, index) => (
                <motion.div
                  key={experience.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row md:items-center gap-8 ${
                    index % 2 === 0
                      ? 'md:flex-row-reverse text-left md:text-right'
                      : 'text-left'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-[-8px] md:left-1/2 top-0 w-4 h-4 rounded-full bg-primary-600 dark:bg-primary-400 transform md:translate-x-[-50%]"></div>

                  {/* Date for mobile */}
                  <div className="md:hidden pl-8 text-sm font-medium text-primary-600 dark:text-primary-400">
                    {experience.period}
                  </div>

                  {/* Content */}
                  <div className={`md:w-1/2 pl-8 md:pl-0 ${
                    index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'
                  }`}>
                    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                      {/* Date for desktop */}
                      <div className="hidden md:block mb-2 text-sm font-medium text-primary-600 dark:text-primary-400">
                        {experience.period}
                      </div>

                      <h3 className="text-xl font-display font-bold text-gray-900 dark:text-white mb-1">
                        {experience.title}
                      </h3>
                      <h4 className="text-gray-700 dark:text-gray-300 font-medium mb-4">
                        {experience.company}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        {experience.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {experience.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Empty space for alignment */}
                  <div className="hidden md:block md:w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div>
          <SectionHeader
            title="Projects"
            subtitle="Notable projects in food technology and innovation."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative h-48 bg-gray-200 dark:bg-gray-700">
                  <div className="absolute inset-0 flex items-center justify-center text-3xl text-gray-400 dark:text-gray-500">
                    Project Image
                  </div>
                  {/* Uncomment when you have actual images */}
                  {/* <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  /> */}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-bold text-gray-900 dark:text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
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