'use client';
import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);
  const backgroundControls = useAnimation();
  const gradientControls = useAnimation();
  
  const availableItems = [
    'Internship Opportunities',
    'Research Collaborations',
    'Project Partnerships',
    'Consulting Work',
  ];

  const listContainer = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.12 },
    },
  };

  const listItem = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0 },
  };
  
  useEffect(() => {
    setIsMounted(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const moveX = clientX / window.innerWidth - 0.5;
      const moveY = clientY / window.innerHeight - 0.5;
      setMousePosition({ x: moveX, y: moveY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  useEffect(() => {
    backgroundControls.start({
      x: mousePosition.x * 20,
      y: mousePosition.y * 20,
      transition: { type: 'spring', damping: 15 }
    });
    
    // Interactive gradient position based on mouse
    gradientControls.start({
      backgroundPosition: `${50 + mousePosition.x * 10}% ${50 + mousePosition.y * 10}%`,
      transition: { type: 'spring', damping: 25 }
    });
  }, [mousePosition, backgroundControls, gradientControls]);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Interactive gradient overlay */}
      <motion.div 
        animate={gradientControls}
        className="absolute inset-0 bg-gradient-to-br from-primary-50/30 via-white/0 to-secondary-50/30 dark:from-primary-900/30 dark:via-gray-900/0 dark:to-secondary-900/30"
        style={{
          backgroundSize: '200% 200%',
          filter: 'blur(0px)',
          mixBlendMode: 'multiply',
        }}
      />
      
      {/* Animated background elements */}
      <motion.div 
        animate={backgroundControls}
        className="absolute inset-0 bg-grid-pattern opacity-5"
      />
      
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -top-20 -left-20 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 10, 0],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div 
          className="absolute top-1/3 -right-20 w-80 h-80 bg-secondary-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, -20, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1,
          }}
        />
        <motion.div 
          className="absolute -bottom-40 left-1/3 w-72 h-72 bg-primary-700/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 2,
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 pt-32 pb-20 flex flex-col items-center justify-center min-h-screen relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-gray-900 dark:text-white leading-tight mb-6">
              Hi, I&apos;m{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-700">
                Shubhangi Gupta
              </span>
            </h1>
            
            <div className="text-xl sm:text-2xl font-medium text-gray-700 dark:text-gray-300 mb-8 h-16">
              {isMounted ? (
                <TypeAnimation
                  sequence={[
                    'Food Technologist',
                    2000,
                    'Food Safety Expert',
                    2000,
                    'Product Developer',
                    2000,
                    'Research Enthusiast',
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              ) : (
                <span>Food Technologist</span>
              )}
            </div>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-xl mx-auto lg:mx-0">
              Passionate about innovating in food technology, combining scientific knowledge
              with practical applications to develop safe, nutritious, and sustainable food products.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToContact}
                className="px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-md shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get in Touch
              </motion.button>
              
              <motion.a
                href="/Shubhangi_CV.pdf"
                download="Shubhangi_Gupta_CV.pdf"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-medium rounded-md shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                Download CV
              </motion.a>
            </div>

            {/* Availability panel */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '0px 0px -80px 0px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-10 relative"
            >
              {/* Glow background */}
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-primary-400/40 via-secondary-400/40 to-primary-400/40 blur-xl opacity-60" aria-hidden="true" />
              <div className="relative rounded-2xl border border-gray-200/70 dark:border-gray-800 bg-white/70 dark:bg-gray-900/60 backdrop-blur supports-[backdrop-filter]:backdrop-blur-sm p-5 text-left shadow-[0_2px_18px_rgba(2,132,199,0.06)]">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary-600 text-white shadow">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-2.59a.75.75 0 0 0-1.06-1.06l-4.72 4.72-1.69-1.69a.75.75 0 1 0-1.06 1.06l2.22 2.22c.293.293.767.293 1.06 0l5.25-5.25Z" clipRule="evenodd" /></svg>
                  </span>
                  <div>
                    <h3 className="text-lg font-display font-semibold text-gray-900 dark:text-white">Available For</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Open to impactful opportunities and collaborations</p>
                  </div>
                </div>
                <motion.ul
                  variants={listContainer}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-2"
                >
                  {availableItems.map((item) => (
                    <motion.li
                      key={item}
                      variants={listItem}
                      className="flex items-center gap-2 p-2 rounded-lg hover:bg-primary-50/70 dark:hover:bg-primary-900/20 transition-colors"
                    >
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary-100 text-primary-700 dark:bg-primary-900/40 dark:text-primary-300">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-2.59a.75.75 0 0 0-1.06-1.06l-4.72 4.72-1.69-1.69a.75.75 0 1 0-1.06 1.06l2.22 2.22c.293.293.767.293 1.06 0l5.25-5.25Z" clipRule="evenodd" /></svg>
                      </span>
                      <span className="text-gray-800 dark:text-gray-200 text-sm font-medium">{item}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
              {/* Outer shadow/glow effect */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: [0.3, 0.5, 0.3],
                  scale: 1.15,
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity, 
                  repeatType: "reverse" 
                }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-300 to-secondary-300 dark:from-primary-600 dark:to-secondary-600 blur-xl"
                style={{
                  transform: 'translate(-5%, -5%) scale(1.1)',
                }}
              />
              
              {/* Main background gradient */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: 0.2,
                  scale: 1.05,
                  rotate: [0, 5, 0, -5, 0],
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  repeatType: "reverse" 
                }}
                className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full blur-2xl transform -translate-y-4 translate-x-4"
              />
              
              {/* Inner shadow for depth */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 rounded-full bg-white dark:bg-gray-800 blur-md"
                style={{
                  transform: 'translate(5%, 5%) scale(0.85)',
                }}
              />
              
              {/* Profile container */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative z-10 bg-white dark:bg-gray-800 rounded-full overflow-hidden border-8 border-white dark:border-gray-800 shadow-[0_0_25px_rgba(0,0,0,0.1),inset_0_0_25px_rgba(0,0,0,0.05)]"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15), inset 0 0 20px rgba(0, 0, 0, 0.05)",
                  borderColor: "#f3f4f6",
                  transition: { 
                    type: "spring", 
                    stiffness: 300 
                  }
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                >
                  <Image
                    src="/images/profile.jpg"
                    alt="Shubhangi Gupta - Food Technologist"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                    priority
                  />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 flex flex-wrap justify-center gap-6"
        >
          <a
            href="mailto:shubhangigupta2002@gmail.com"
            className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
            aria-label="Email"
          >
            <svg
              className="w-6 h-6 text-red-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </a>
        </motion.div>
        
        
      </div>
    </div>
  );
};

export default Hero; 