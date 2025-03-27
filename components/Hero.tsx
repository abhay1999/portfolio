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
      
      <div className="container mx-auto px-4 md:px-6 pt-32 pb-20 flex flex-col items-center justify-center min-h-screen relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
            href="https://www.linkedin.com/in/shubhangi-gupta-981219225/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
            aria-label="LinkedIn"
          >
            <svg
              className="w-6 h-6 text-blue-600"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          
          <a
            href="https://github.com/username"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
            aria-label="GitHub"
          >
            <svg
              className="w-6 h-6 text-gray-900 dark:text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
          </a>
          
          <a
            href="https://twitter.com/username"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
            aria-label="Twitter"
          >
            <svg
              className="w-6 h-6 text-blue-400"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
            </svg>
          </a>
          
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
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-sm text-gray-600 dark:text-gray-400 mb-2">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-gray-600 dark:border-gray-400 rounded-full flex justify-center p-1">
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-1.5 h-1.5 bg-gray-600 dark:bg-gray-400 rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero; 