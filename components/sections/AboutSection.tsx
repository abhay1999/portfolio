'use client';
import { motion } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader';
import Image from 'next/image';
import dynamic from 'next/dynamic';

// The main AboutSection component
const AboutSectionContent = () => {
  const educationTimeline = [
    {
      degree: 'B.Tech in Food Technology',
      institution: 'Nims University, Jaipur',
      period: '2023 - Present',
      description: 'Specializing in Food Processing, Product Development, and Research and Development.',
    },
    {
      degree: 'Higher Secondary Education',
      institution: 'Little Flower School, Gorakhpur',
      period: '2018 - 2020',
      description: 'Focused on Science stream with emphasis on Biology, Chemistry, and Physics.',
    },
  ];

  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8">
      {/* About Section */}
      <div className="mb-16 md:mb-20">
        <SectionHeader
          title="About Me"
          subtitle="Learn more about my background, education, and passion for food technology."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-12 md:mt-16">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center md:justify-start"
          >
            <motion.div 
              className="relative w-64 h-80 rounded-lg perspective-1000"
              initial={{ scale: 0.95, boxShadow: "0px 0px 0px rgba(0,0,0,0)" }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                rotateX: -5,
                z: 20,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 40px rgba(79, 70, 229, 0.15)",
                transition: { 
                  duration: 0.4, 
                  type: "spring", 
                  stiffness: 300,
                  damping: 15
                }
              }}
            >
              {/* Pulsating background glow */}
              <motion.div 
                className="absolute -inset-4 rounded-xl opacity-0"
                initial={{ background: "radial-gradient(circle, rgba(79, 70, 229, 0.3) 0%, transparent 70%)" }}
                whileHover={{ 
                  opacity: 1,
                  scale: [1, 1.05, 1],
                  transition: { 
                    opacity: { duration: 0.2 },
                    scale: { 
                      repeat: Infinity, 
                      duration: 2.5,
                      repeatType: "reverse" 
                    }
                  }
                }}
              />
              
              {/* Animated gradient border */}
              <motion.div 
                className="absolute -inset-1 rounded-lg bg-gradient-to-tr from-primary-500 via-secondary-400 to-primary-600 opacity-75"
                animate={{ 
                  background: [
                    "linear-gradient(to right top, var(--tw-gradient-from), var(--tw-gradient-via), var(--tw-gradient-to))",
                    "linear-gradient(to right bottom, var(--tw-gradient-from), var(--tw-gradient-via), var(--tw-gradient-to))",
                    "linear-gradient(to left bottom, var(--tw-gradient-from), var(--tw-gradient-via), var(--tw-gradient-to))",
                    "linear-gradient(to left top, var(--tw-gradient-from), var(--tw-gradient-via), var(--tw-gradient-to))",
                  ]
                }}
                transition={{ 
                  duration: 10, 
                  repeat: Infinity,
                  repeatType: "loop"
                }}
                style={{ filter: "blur(8px)" }}
                whileHover={{ 
                  opacity: 0.9,
                  scale: 1.05,
                  filter: "blur(4px)",
                  transition: { duration: 0.3 }
                }}
              />
              
              <motion.div 
                className="relative z-10 w-full h-full bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden"
                whileHover={{ 
                  boxShadow: "0px 10px 30px rgba(0,0,0,0.3), inset 0 0 15px rgba(255,255,255,0.5)", 
                  transition: { duration: 0.3 }
                }}
              >
                {/* Animated overlay with moving gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-tr from-primary-500/10 to-secondary-500/10 z-20 opacity-0 rounded-lg"
                  whileHover={{ 
                    opacity: 1,
                    background: "linear-gradient(45deg, rgba(79, 70, 229, 0.2) 0%, rgba(168, 85, 247, 0.2) 35%, rgba(217, 70, 239, 0.1) 100%)",
                    backgroundSize: "200% 200%",
                    backgroundPosition: ["0% 0%", "100% 100%"],
                    transition: { 
                      opacity: { duration: 0.3 },
                      backgroundPosition: {
                        duration: 4,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }
                    }
                  }}
                />
                
                {/* Shine effect on hover */}
                <motion.div 
                  className="absolute inset-0 z-30 opacity-0 overflow-hidden rounded-lg"
                  whileHover={{
                    opacity: 1,
                    background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
                    backgroundSize: "200% 100%",
                    backgroundPosition: ["100%", "-100%"],
                    transition: {
                      opacity: { duration: 0.1 },
                      backgroundPosition: { 
                        duration: 1.5, 
                        repeat: Infinity,
                        repeatDelay: 1
                      }
                    }
                  }}
                />
                
                <motion.div
                  className="w-full h-full relative"
                  whileHover={{ 
                    scale: 1.1,
                    transition: { duration: 0.7, ease: [0.19, 1, 0.22, 1] }
                  }}
                >
                  <Image
                    src="/images/about.jpg"
                    alt="Shubhangi Gupta"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg"
                  />
                </motion.div>
              </motion.div>
            </motion.div>
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
                <p className="text-gray-600 dark:text-gray-400">shubhangigupta250102@gmail.com</p>
              </div>
              <div>
                <p className="text-gray-900 dark:text-white font-medium">Location:</p>
                <p className="text-gray-600 dark:text-gray-400">Jaipur, Rajasthan, India</p>
              </div>
              <div>
                <p className="text-gray-900 dark:text-white font-medium">Degree:</p>
                <p className="text-gray-600 dark:text-gray-400">B.Tech Food Technology</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Education Section */}
      <div>
        <SectionHeader
          title="Education"
          subtitle="My academic journey and qualifications."
        />

        <div className="mt-12 md:mt-16 space-y-8 md:space-y-12">
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
  );
};

// Use dynamic import with { ssr: false } to completely avoid SSR for this component
const AboutSection = dynamic(() => Promise.resolve(AboutSectionContent), { ssr: false });

export default AboutSection; 