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
import NoticeAndDates from '@/components/NoticeAndDates';

// 섹션 설정 - 여기서 한번에 제어
const SECTIONS_CONFIG = [
  { id: 'home', label: 'HOME', enabled: true },
  { id: 'notice-dates', label: 'NOTICE & DATES', enabled: true },
  { id: 'about', label: 'ABOUT', enabled: true },
  { id: 'call-for-papers', label: 'CALL FOR PAPERS', enabled: true },
  { id: 'accepted-papers', label: 'ACCEPTED PAPERS', enabled: false }, // 비활성화
  { id: 'submission-instructions', label: 'SUBMISSION INSTRUCTIONS', enabled: true },
  { id: 'committees', label: 'COMMITTEES', enabled: true },
  { id: 'registration', label: 'REGISTRATION', enabled: false },
  { id: 'venue', label: 'VENUE', enabled: false },
  { id: 'sponsors', label: 'SPONSORS', enabled: false },
];

// 활성화된 섹션만 필터링
const ENABLED_SECTIONS = SECTIONS_CONFIG.filter(section => section.enabled);

// 배경색을 동적으로 계산하는 함수
const getSectionClasses = (sectionId: string) => {
  const enabledSectionIds = ENABLED_SECTIONS.map(s => s.id);
  const index = enabledSectionIds.indexOf(sectionId);
  
  // home 섹션은 제외하고 계산 (Hero 컴포넌트가 별도 배경을 가짐)
  const actualIndex = index > 0 ? index - 1 : 0;
  
  // 기본 패딩 클래스
  const basePadding = 'py-20 md:py-28';
  
  // sponsors 섹션은 다른 패딩 사용
  if (sectionId === 'sponsors') {
    return `${basePadding.replace('py-20 md:py-28', 'py-8 md:py-12')} ${actualIndex % 2 === 0 ? 'bg-white' : 'bg-blue-50/50 backdrop-blur-sm'}`;
  }
  
  // 홀수/짝수에 따라 배경색 번갈아가며 적용
  return `${basePadding} ${actualIndex % 2 === 0 ? 'bg-white' : 'bg-blue-50/50 backdrop-blur-sm'}`;
};

// Section id to component mapping
const SECTION_COMPONENTS: Record<string, React.ComponentType<any>> = {
  'notice-dates': NoticeAndDates,
  about: About,
  'call-for-papers': CallForPapers,
  'accepted-papers': AcceptedPapers,
  'submission-instructions': SubmissionInstructions,
  committees: Committees,
  registration: Registration,
  venue: Venue,
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
      setIsScrolled(scrollPosition > 50);
      setShowScrollTop(scrollPosition > 300);

      // 활성화된 섹션들만 체크
      const enabledSectionIds = ENABLED_SECTIONS.map(section => section.id);
      let closestSection = enabledSectionIds[0];
      let minDistance = Number.POSITIVE_INFINITY;
      for (const sectionId of enabledSectionIds) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          const distance = Math.abs(rect.top - 100); // 100px 아래를 기준
          if (rect.top <= 120 && distance < minDistance) {
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
        navSections={ENABLED_SECTIONS}
      />

      {/* Main Content */}
      <main>
        <div id="home">
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