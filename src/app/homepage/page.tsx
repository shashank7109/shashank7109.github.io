import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import OpenSourceSection from './components/OpenSourceSection';
import BlogSection from './components/BlogSection';
import ContactSection from './components/ContactSection';

export default function Homepage() {
  return (
    <>
      {/* Noise texture overlay */}
      <div className="noise-overlay" aria-hidden="true" />

      {/* Custom cursor (client-side only via HeroSection) */}
      <Header />

      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <OpenSourceSection />
        <BlogSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}