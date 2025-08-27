'use client';
import { useRef } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import AboutSection from '@/components/sections/AboutSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ContactSection from '@/components/sections/ContactSection';
import BlogSection from '@/components/sections/BlogSection';

export default function Home() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const blogRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home">
        <Hero />
      </section>
      
      {/* About Section */}
      <section id="about" ref={aboutRef} className="py-16 md:py-24">
        <AboutSection />
      </section>
      
      {/* Experience Section */}
      <section id="experience" ref={experienceRef} className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
        <ExperienceSection />
      </section>
      
      {/* Skills Section */}
      <section id="skills" ref={skillsRef} className="py-16 md:py-24">
        <SkillsSection />
      </section>
      
      {/* Blog Section */}
      <section id="blog" ref={blogRef} className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
        <BlogSection />
      </section>
      
      {/* Contact Section */}
      <section id="contact" ref={contactRef} className="py-16 md:py-24">
        <ContactSection />
      </section>
      
      <Footer />
    </main>
  );
}
