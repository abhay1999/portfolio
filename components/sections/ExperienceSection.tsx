'use client';
import { motion } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader';

const ExperienceSection = () => {
  const experiences = [
    {
      title: 'Research and Development Intern',
      company: 'NuttyVillage (CSIR_IITR) Lucknow',
      period: 'Jun 2025 - July 2025',
      description: 'Performed sensory and lab analyses on peanut butter samples, developed a new flavour variant, and collaborated with R&D to enhance quality, shelf life, and sensory attributes.',
      skills: ['Research Methods', 'Data Analysis', 'Food Preservation'],
    },
    {
      title: 'Food Technology Entrepreneurship Development And Operation of Food Processing Pilot Plants ',
      company: 'NIFTEM Sonipat, Haryana',
      period: 'Dec 2024',
      description: 'Gained comprehensive hands-on experience across diverse food plants (fruit/veg, dairy, bakery, RTE, meat), advancing skills in processing, preservation, and quality control. This multifaceted exposure enhanced practical industry insights and technical understanding of food production systems.',
      skills: ['Quality Control', 'Product Development', 'Food Safety'],
    },
  
    // {
    //   title: 'Food Product Developer (Project)',
    //   company: 'University Innovation Hub',
    //   period: 'Sep 2022 - Dec 2022',
    //   description: 'Led a team in developing a sustainable plant-based food product. Conducted market research and competitor analysis. Created formulations and tested prototypes for sensory and nutritional parameters.',
    //   skills: ['Project Management', 'Product Formulation', 'Sensory Analysis'],
    // },
  ];

  // const projects = [
  //   {
  //     title: 'Sustainable Food Packaging Solution',
  //     description: 'Developed a biodegradable food packaging material from agricultural waste. Conducted tests for durability, food safety, and environmental impact.',
  //     image: '/placeholder.jpg',
  //     technologies: ['Sustainable Materials', 'Food Safety', 'Packaging Technology'],
  //   },
  //   {
  //     title: 'Functional Food Product Development',
  //     description: 'Created a fortified food product with enhanced nutritional properties targeted at addressing specific dietary deficiencies.',
  //     image: '/placeholder.jpg',
  //     technologies: ['Food Formulation', 'Nutrition', 'Product Development'],
  //   },
  //   {
  //     title: 'Food Processing Efficiency Analysis',
  //     description: 'Analyzed and optimized food processing operations to reduce waste and energy consumption while maintaining product quality.',
  //     image: '/placeholder.jpg',
  //     technologies: ['Process Optimization', 'Food Technology', 'Sustainability'],
  //   },
  // ];

  const containerVariants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.12 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8">
      {/* Experience Section */}
      <div className="mb-16 md:mb-20">
        <SectionHeader
          title="Work Experience"
          subtitle="My professional journey in the field of food technology."
        />

        <div className="mt-12 md:mt-16 relative">
          {/* Timeline Line */}
          <div className="pointer-events-none absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-200/40 via-gray-200 to-primary-200/40 dark:from-primary-900/20 dark:via-gray-800 dark:to-primary-900/20 transform md:translate-x-0"></div>

          {/* Timeline Items */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '0px 0px -80px 0px' }}
            className="space-y-10 md:space-y-16"
          >
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.title}
                variants={itemVariants}
                className={`relative flex flex-col md:flex-row md:items-stretch gap-8 ${
                  index % 2 === 0
                    ? 'text-left'
                    : 'md:flex-row-reverse text-left md:text-right'
                }`}
                aria-label={`Experience: ${experience.title} at ${experience.company}`}
              >
                {/* Timeline Marker */}
                <div className="absolute left-[-12px] md:left-1/2 top-3 w-6 h-6 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 shadow-lg ring-4 ring-white dark:ring-gray-900 transform md:-translate-x-1/2"></div>

                {/* Content */}
                <div
                  className={`md:w-1/2 pl-8 md:pl-0 ${
                    index % 2 === 0 ? 'md:pl-16' : 'md:pr-16'
                  }`}
                >
                  <div className="group bg-white/70 dark:bg-gray-900/60 backdrop-blur supports-[backdrop-filter]:backdrop-blur-sm border border-gray-200/70 dark:border-gray-800 rounded-xl p-6 shadow-[0_2px_18px_rgba(2,132,199,0.06)] hover:shadow-[0_10px_36px_rgba(2,132,199,0.18)] transition-all duration-300">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div className="min-w-0">
                        <h3 className="text-lg md:text-xl font-display font-bold text-gray-900 dark:text-white group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors">
                          {experience.title}
                        </h3>
                        <h4 className="text-gray-700 dark:text-gray-300 font-medium truncate">
                          {experience.company}
                        </h4>
                      </div>
                      <span className="shrink-0 px-3 py-1 rounded-full text-xs md:text-sm bg-primary-100 text-primary-800 dark:bg-primary-900/40 dark:text-primary-300 border border-primary-200/60 dark:border-primary-800/60">
                        {experience.period}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {experience.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {experience.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 rounded-full text-sm bg-primary-50 text-primary-900 dark:bg-primary-900/30 dark:text-primary-200 border border-primary-200/60 dark:border-primary-800/60"
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
          </motion.div>
        </div>
      </div>

      {/* Projects Section (commented out for future use)
      <div>
        <SectionHeader
          title="Projects"
          subtitle="Notable projects in food technology and innovation."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 md:mt-16">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-xl border border-gray-200/70 dark:border-gray-800 bg-white/70 dark:bg-gray-900/60 backdrop-blur supports-[backdrop-filter]:backdrop-blur-sm overflow-hidden shadow-[0_2px_18px_rgba(2,132,199,0.06)] hover:shadow-[0_10px_36px_rgba(2,132,199,0.18)] transition-all duration-300"
            >
              <div className="relative h-44 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700">
                <div className="absolute inset-0 flex items-center justify-center text-base md:text-lg tracking-wide text-gray-400 dark:text-gray-500">
                  Project Image
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg md:text-xl font-display font-bold text-gray-900 dark:text-white group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-sm bg-primary-50 text-primary-900 dark:bg-primary-900/30 dark:text-primary-200 border border-primary-200/60 dark:border-primary-800/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
      */}
    </div>
  );
};

export default ExperienceSection; 