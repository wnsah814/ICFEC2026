'use client';

import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import About from '@/components/About';
import CallForPapers from '@/components/CallForPapers';
import AcceptedPapers from '@/components/AcceptedPapers';
import SubmissionInstructions from '@/components/SubmissionInstructions';
import Committees from '@/components/Committees';
import Registration from '@/components/Registration';
import Venue from '@/components/Venue';
import Sponsors from '@/components/Sponsors';
import Footer from '@/components/Footer';
import { scrollToSection } from '@/utils/scrollToSection';
import Hero from '@/components/Hero';

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
      setShowScrollTop(scrollPosition > 300);

      // Determine which section is in view
      const sections = [
        'home',
        'about', 
        'call-for-papers', 
        'accepted-papers', 
        'submission-instructions', 
        'committees',
        'registration',
        'venue',
        'sponsors'
      ];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      // Close mobile menu when window width is greater than md breakpoint (768px)
      if (window.innerWidth >= 768 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setMobileMenuOpen(false);
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header 
        activeSection={activeSection} 
        isScrolled={isScrolled} 
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        handleNavClick={handleNavClick}
      />

      {/* Main Content */}
      <main>
        <div id="home">
          <Hero handleNavClick={handleNavClick} />
        </div>
        
        <section id="about" className="py-20 md:py-28 bg-white">
          <About />
        </section>
        
        <section id="call-for-papers" className="py-20 md:py-28 bg-blue-50/50 backdrop-blur-sm">
          <CallForPapers />
        </section>
        
        <section id="accepted-papers" className="py-20 md:py-28 bg-white">
          <AcceptedPapers />
        </section>
        
        <section id="submission-instructions" className="py-20 md:py-28 bg-blue-50/50 backdrop-blur-sm">
          <SubmissionInstructions />
        </section>
        
        <section id="committees" className="py-20 md:py-28 bg-white">
          <Committees />
        </section>
        
        <section id="registration" className="py-20 md:py-28 bg-blue-50/50 backdrop-blur-sm">
          <Registration />
        </section>
        
        <section id="venue" className="py-20 md:py-28 bg-white">
          <Venue />
        </section>
        
        <section id="sponsors" className="py-8 md:py-12 bg-blue-50/50 backdrop-blur-sm">
          <Sponsors />
        </section>
      </main>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={handleScrollToTop}
          className="fixed bottom-6 right-6 bg-blue-600 text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-opacity hover:bg-blue-700 focus:outline-none z-50 cursor-pointer"
          aria-label="Scroll to top"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </button>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
}