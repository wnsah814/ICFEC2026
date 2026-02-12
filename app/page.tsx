'use client';

import React, { useState, useEffect, FC } from 'react';
import Header from '@/components/Header';
import About from '@/components/About';
import CallForPapers from '@/components/CallForPapers';
import AcceptedPapers from '@/components/AcceptedPapers';
import SubmissionInstructions from '@/components/SubmissionInstructions';
import Committees from '@/components/Committees';
import Sponsors from '@/components/Sponsors';
import Footer from '@/components/Footer';
import { scrollToSection } from '@/utils/scrollToSection';
import Hero from '@/components/Hero';
import NoticeAndDates from '@/components/NoticeAndDates';

const HEADER_SCROLL_THRESHOLD = 50;
const SCROLL_TOP_BUTTON_THRESHOLD = 300;
const ACTIVE_SECTION_OFFSET = 100;
const ACTIVE_SECTION_TOP_BOUND = 120;
const MD_BREAKPOINT = 768;

const SECTIONS_CONFIG = [
  { id: 'home', label: 'HOME', enabled: true },
  { id: 'notice-dates', label: 'IMPORTANT DATES', enabled: true },
  { id: 'about', label: 'ABOUT', enabled: true },
  { id: 'call-for-papers', label: 'CALL FOR PAPERS', enabled: true },
  { id: 'accepted-papers', label: 'ACCEPTED PAPERS', enabled: false },
  { id: 'submission-instructions', label: 'SUBMISSION INSTRUCTIONS', enabled: true },
  { id: 'committees', label: 'COMMITTEES', enabled: true },
  { id: 'sponsors', label: 'SPONSORS', enabled: false },
];

const ENABLED_SECTIONS = SECTIONS_CONFIG.filter(section => section.enabled);

const getSectionClasses = (sectionId: string) => {
  const enabledSectionIds = ENABLED_SECTIONS.map(s => s.id);
  const index = enabledSectionIds.indexOf(sectionId);
  const actualIndex = index > 0 ? index - 1 : 0;
  const bgClass = actualIndex % 2 === 0 ? 'bg-white' : 'bg-blue-50/50 backdrop-blur-sm';
  const padding = sectionId === 'notice-dates' ? 'py-16 md:py-20' : 'py-20 md:py-28';

  return `${padding} ${bgClass}`;
};

// Section id to component mapping
const SECTION_COMPONENTS: Record<string, FC> = {
  'notice-dates': NoticeAndDates,
  about: About,
  'call-for-papers': CallForPapers,
  'accepted-papers': AcceptedPapers,
  'submission-instructions': SubmissionInstructions,
  committees: Committees,
  sponsors: Sponsors,
};

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > HEADER_SCROLL_THRESHOLD);
      setShowScrollTop(scrollPosition > SCROLL_TOP_BUTTON_THRESHOLD);

      const enabledSectionIds = ENABLED_SECTIONS.map(section => section.id);
      let closestSection = enabledSectionIds[0];
      let minDistance = Number.POSITIVE_INFINITY;
      for (const sectionId of enabledSectionIds) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          const distance = Math.abs(rect.top - ACTIVE_SECTION_OFFSET);
          if (rect.top <= ACTIVE_SECTION_TOP_BOUND && distance < minDistance) {
            minDistance = distance;
            closestSection = sectionId;
          }
        }
      }
      setActiveSection(closestSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= MD_BREAKPOINT && mobileMenuOpen) {
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
        navSections={ENABLED_SECTIONS}
      />

      {/* Main Content */}
      <main>
        <div id="home" className='h-lvh'>
          <Hero handleNavClick={handleNavClick} />
        </div>
        {SECTIONS_CONFIG.filter(s => s.id !== 'home' && s.enabled).map(section => {
          const SectionComponent = SECTION_COMPONENTS[section.id];
          if (!SectionComponent) return null;
          return (
            <section key={section.id} id={section.id} className={getSectionClasses(section.id)}>
              <SectionComponent />
            </section>
          );
        })}
      </main>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          type="button"
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