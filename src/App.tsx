import React, { useState } from 'react';
import { PageMode } from './types';
import { NavbarSection } from './components/sections/NavbarSection';
import { HeroSection } from './components/sections/HeroSection';
import { CounterSection } from './components/sections/CounterSection';
import { AboutSection } from './components/sections/AboutSection';
import { FocusBentoGrid } from './components/sections/FocusBentoGrid';
import { ImpactStoriesSection } from './components/sections/ImpactStoriesSection';
import { VolunteerCTASection } from './components/sections/VolunteerCTASection';
import { DonationSection } from './components/sections/DonationSection';
import { TestimonialsSection } from './components/sections/TestimonialsSection';
import { PartnersSlider } from './components/sections/PartnersSlider';
import { FAQSection } from './components/sections/FAQSection';
import { FooterSection } from './components/sections/FooterSection';
import { AboutUsSection } from './components/AboutUsSection';
import { WhatWeDoSection } from './components/WhatWeDoSection';
import { ProgrammesSection } from './components/ProgrammesSection';
import { EmergencyCasesSection } from './components/EmergencyCasesSection';
import { BankDetailsSection } from './components/BankDetailsSection';
import { EvMobilitySection } from './components/EvMobilitySection';
import { ContactUsSection } from './components/ContactUsSection';
import { DonationModal } from './components/DonationModal';
import { FranchiseModal } from './components/FranchiseModal';
import { TestDriveModal } from './components/TestDriveModal';
import { PrivacyPolicyPage } from './components/PrivacyPolicyPage';
import { TermsPage } from './components/TermsPage';

export default function App() {
  const [currentMode, setCurrentMode] = useState<PageMode>('home');
  const [activeOptionId, setActiveOptionId] = useState<string | undefined>(undefined);
  const [isDonationOpen, setIsDonationOpen] = useState(false);
  const [isVolunteerOpen, setIsVolunteerOpen] = useState(false);
  const [isFranchiseOpen, setIsFranchiseOpen] = useState(false);
  const [isTestDriveOpen, setIsTestDriveOpen] = useState(false);
  const [testDriveScooterId, setTestDriveScooterId] = useState<string | undefined>(undefined);

  const handleNavigate = (mode: PageMode, optionId?: string) => {
    setCurrentMode(mode);
    if (optionId) setActiveOptionId(optionId);

    let path = '/';
    if (mode === 'privacy-policy') path = '/privacy-policy';
    else if (mode === 'terms-and-conditions') path = '/terms-and-conditions';
    else if (mode === 'ev') path = '/ev-mobility';
    else if (mode !== 'home') path = `/${mode}`;

    if (window.location.pathname !== path) {
      window.history.pushState({}, '', path);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  React.useEffect(() => {
    const handleUrlChange = () => {
      const path = window.location.pathname.toLowerCase().replace(/\/$/, '');
      const hash = window.location.hash.toLowerCase();

      if (path === '/privacy-policy' || hash === '#privacy-policy' || hash === '#privacy') {
        setCurrentMode('privacy-policy');
      } else if (path === '/terms-and-conditions' || hash === '#terms-and-conditions' || hash === '#terms') {
        setCurrentMode('terms-and-conditions');
      } else if (path === '/ev-mobility' || path === '/ev' || hash === '#ev') {
        setCurrentMode('ev');
      } else if (path === '/about' || hash === '#about') {
        setCurrentMode('about');
      } else if (path === '/what-we-do' || hash === '#what-we-do') {
        setCurrentMode('what-we-do');
      } else if (path === '/programmes' || hash === '#programmes') {
        setCurrentMode('programmes');
      } else if (path === '/emergency' || hash === '#emergency') {
        setCurrentMode('emergency');
      } else if (path === '/bank-details' || hash === '#bank-details') {
        setCurrentMode('bank-details');
      } else if (path === '/contact' || hash === '#contact') {
        setCurrentMode('contact');
      } else if (path === '/donate' || hash === '#donate') {
        setCurrentMode('donate');
      } else if (path === '' || path === '/') {
        setCurrentMode('home');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    handleUrlChange();
    window.addEventListener('popstate', handleUrlChange);
    return () => window.removeEventListener('popstate', handleUrlChange);
  }, []);

  const handleNavigateSection = (sectionId: string) => {
    if (currentMode !== 'home') {
      setCurrentMode('home');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenDonation = () => {
    if (currentMode === 'home') {
      const donateSection = document.getElementById('donate');
      if (donateSection) {
        donateSection.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    setIsDonationOpen(true);
  };

  const handleOpenVolunteer = () => {
    if (currentMode === 'home') {
      const volunteerSection = document.getElementById('volunteer');
      if (volunteerSection) {
        volunteerSection.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    setIsVolunteerOpen(true);
  };

  const handleOpenTestDrive = (scooterId?: string) => {
    if (scooterId) setTestDriveScooterId(scooterId);
    setIsTestDriveOpen(true);
  };

  const handleOpenWhatsApp = (intent?: string) => {
    const text = intent ? encodeURIComponent(intent) : encodeURIComponent('Hello! I would like to inquire about DOV India.');
    window.open(`https://api.whatsapp.com/send/?phone=917098555333&text=${text}&type=phone_number&app_absent=0`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#475569] font-sans antialiased selection:bg-[#165DFF] selection:text-white flex flex-col justify-between">
      {/* 1. Floating Glassmorphism Navbar with Full Menus & Submenus */}
      <NavbarSection
        currentMode={currentMode}
        onNavigate={handleNavigate}
        onOpenDonation={handleOpenDonation}
        onOpenVolunteer={handleOpenVolunteer}
      />

      <main className="flex-grow">
        {currentMode === 'home' && (
          <>
            {/* 2. Full-Screen Hero */}
            <HeroSection
              onOpenDonation={handleOpenDonation}
              onOpenVolunteer={handleOpenVolunteer}
              onNavigateSection={handleNavigateSection}
            />

            {/* 3. Animated Impact Statistics Counters */}
            <CounterSection />

            {/* 4. About the Organization Section (Split Layout) */}
            <AboutSection
              onOpenDonation={handleOpenDonation}
              onOpenVolunteer={handleOpenVolunteer}
            />

            {/* 5. Focus Areas Bento Grid */}
            <FocusBentoGrid
              onSelectFocus={(id) => handleOpenDonation()}
              onOpenDonation={handleOpenDonation}
            />

            {/* 6. Featured Impact Stories */}
            <ImpactStoriesSection onOpenDonation={handleOpenDonation} />

            {/* 7. Volunteer Call-to-Action Section */}
            <VolunteerCTASection />

            {/* 9. Donation Section with Preset Amounts */}
            <DonationSection />

            {/* 10. Testimonials Carousel */}
            <TestimonialsSection />

            {/* 13. Partner Logo Slider */}
            <PartnersSlider />

            {/* 14. FAQ Accordion */}
            <FAQSection />
          </>
        )}

        {currentMode === 'about' && (
          <AboutUsSection
            activeSubSection={activeOptionId}
            onNavigate={handleNavigate}
          />
        )}

        {currentMode === 'what-we-do' && (
          <WhatWeDoSection
            onNavigate={handleNavigate}
            onOpenTestDrive={handleOpenTestDrive}
            onOpenDonation={handleOpenDonation}
          />
        )}

        {currentMode === 'programmes' && (
          <ProgrammesSection
            initialProgrammeId={activeOptionId}
            onOpenDonation={() => handleOpenDonation()}
            onOpenWhatsApp={handleOpenWhatsApp}
          />
        )}

        {currentMode === 'emergency' && (
          <EmergencyCasesSection
            onOpenDonation={() => handleOpenDonation()}
            onOpenWhatsApp={handleOpenWhatsApp}
          />
        )}

        {currentMode === 'bank-details' && (
          <BankDetailsSection
            onOpenDonation={() => handleOpenDonation()}
            onOpenWhatsApp={handleOpenWhatsApp}
          />
        )}

        {currentMode === 'ev' && (
          <EvMobilitySection
            onOpenTestDrive={handleOpenTestDrive}
            onOpenFranchise={() => setIsFranchiseOpen(true)}
            onOpenWhatsApp={handleOpenWhatsApp}
          />
        )}

        {currentMode === 'contact' && (
          <ContactUsSection />
        )}

        {currentMode === 'privacy-policy' && (
          <PrivacyPolicyPage onNavigate={handleNavigate} />
        )}

        {currentMode === 'terms-and-conditions' && (
          <TermsPage onNavigate={handleNavigate} />
        )}
      </main>

      {/* 16. Premium Multi-Column Footer */}
      <FooterSection
        onNavigateSection={handleNavigateSection}
        onOpenDonation={handleOpenDonation}
      />

      {/* Backup Modal for Quick Donation */}
      {isDonationOpen && (
        <DonationModal
          isOpen={isDonationOpen}
          onClose={() => setIsDonationOpen(false)}
        />
      )}

      {/* Dealership / Franchise Application Modal */}
      {isFranchiseOpen && (
        <FranchiseModal
          isOpen={isFranchiseOpen}
          onClose={() => setIsFranchiseOpen(false)}
          onOpenWhatsApp={handleOpenWhatsApp}
        />
      )}

      {/* Test Drive Booking Modal */}
      {isTestDriveOpen && (
        <TestDriveModal
          isOpen={isTestDriveOpen}
          onClose={() => setIsTestDriveOpen(false)}
          preSelectedScooterId={testDriveScooterId}
        />
      )}
    </div>
  );
}

