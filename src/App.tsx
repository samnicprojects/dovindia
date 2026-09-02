import React, { useState } from 'react';
import { PageMode } from './types';
import { NavbarSection } from './components/sections/NavbarSection';
import { HeroSection } from './components/sections/HeroSection';
import { CounterSection } from './components/sections/CounterSection';
import { AboutSection } from './components/sections/AboutSection';
import { FocusBentoGrid } from './components/sections/FocusBentoGrid';
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
import { ProductsSection } from './components/ProductsSection';
import { ContactUsSection } from './components/ContactUsSection';
import { FranchiseModal } from './components/FranchiseModal';
import { TestDriveModal } from './components/TestDriveModal';
import { PrivacyPolicyPage } from './components/PrivacyPolicyPage';
import { TermsPage } from './components/TermsPage';
import { MaintenancePage } from './components/MaintenancePage';
import { maintenanceConfig } from './data/Maintenance';

export default function App() {
  const [isBypassed, setIsBypassed] = useState<boolean>(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const bypassParam = urlParams.get('bypass')?.toLowerCase();
    const adminParam = urlParams.get('admin');

    if (urlParams.get('clear') === 'true' || bypassParam === 'false' || bypassParam === 'off') {
      sessionStorage.removeItem('dov_maintenance_bypass');
      localStorage.removeItem('dov_maintenance_bypass');
      return false;
    }

    if (bypassParam === maintenanceConfig.bypassSecret.toLowerCase() || bypassParam === 'true' || adminParam === 'true') {
      sessionStorage.setItem('dov_maintenance_bypass', 'true');
      return true;
    }
    return sessionStorage.getItem('dov_maintenance_bypass') === 'true' || localStorage.getItem('dov_maintenance_bypass') === 'true';
  });

  const [currentMode, setCurrentMode] = useState<PageMode>('home');
  const [activeOptionId, setActiveOptionId] = useState<string | undefined>(undefined);
  const [isFranchiseOpen, setIsFranchiseOpen] = useState(false);
  const [isTestDriveOpen, setIsTestDriveOpen] = useState(false);
  const [testDriveScooterId, setTestDriveScooterId] = useState<string | undefined>(undefined);

  if (maintenanceConfig.isEnabled && !isBypassed) {
    return <MaintenancePage onBypass={() => setIsBypassed(true)} />;
  }

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
      } else if (path === '/products' || path === '/bikes' || hash === '#products' || hash === '#bikes') {
        setCurrentMode('products');
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

  const handleOpenTestDrive = (scooterId?: string) => {
    if (scooterId) setTestDriveScooterId(scooterId);
    setIsTestDriveOpen(true);
  };

  const handleOpenWhatsApp = (intent?: string) => {
    const text = intent ? encodeURIComponent(intent) : encodeURIComponent('Hello! I would like to inquire about EVDov Electric Scooters.');
    window.open(`https://api.whatsapp.com/send/?phone=917098555333&text=${text}&type=phone_number&app_absent=0`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#475569] font-sans antialiased selection:bg-[#0D6EFD] selection:text-white flex flex-col justify-between">
      {/* 1. Header Navigation */}
      <NavbarSection
        currentMode={currentMode}
        onNavigate={handleNavigate}
        onOpenDonation={() => handleNavigate('products')}
        onOpenVolunteer={() => handleOpenTestDrive()}
      />

      <main className="flex-grow">
        {currentMode === 'home' && (
          <>
            {/* 2. Full-Screen EV Scooter Hero */}
            <HeroSection
              onOpenTestDrive={() => handleOpenTestDrive()}
              onOpenFranchise={() => setIsFranchiseOpen(true)}
              onNavigateProducts={() => handleNavigate('products')}
            />

            {/* 3. EV Performance Statistics */}
            <CounterSection />

            {/* 4. Featured Top 4 EV Scooter Products Catalog */}
            <ProductsSection
              isHomePage={true}
              onNavigateProducts={() => handleNavigate('products')}
              onOpenTestDrive={handleOpenTestDrive}
              onOpenFranchise={() => setIsFranchiseOpen(true)}
              onOpenWhatsApp={handleOpenWhatsApp}
            />

            {/* 5. About EVDov Electric Mobility */}
            <AboutSection
              onOpenTestDrive={() => handleOpenTestDrive()}
              onOpenFranchise={() => setIsFranchiseOpen(true)}
            />

            {/* 6. EV Core Pillars Bento Grid */}
            <FocusBentoGrid
              onSelectFocus={() => handleOpenTestDrive()}
              onOpenTestDrive={() => handleOpenTestDrive()}
              onOpenFranchise={() => setIsFranchiseOpen(true)}
            />

            {/* 7. Customer Reviews & Testimonials */}
            <TestimonialsSection />

            {/* 8. Partner Logo Slider */}
            <PartnersSlider />

            {/* 9. EV Subsidies & Battery FAQ */}
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
            onOpenDonation={() => handleNavigate('products')}
          />
        )}

        {currentMode === 'programmes' && (
          <ProgrammesSection
            initialProgrammeId={activeOptionId}
            onOpenDonation={() => handleNavigate('products')}
            onOpenWhatsApp={handleOpenWhatsApp}
          />
        )}

        {currentMode === 'emergency' && (
          <EmergencyCasesSection
            onOpenDonation={() => handleNavigate('products')}
            onOpenWhatsApp={handleOpenWhatsApp}
          />
        )}

        {currentMode === 'bank-details' && (
          <BankDetailsSection
            onOpenDonation={() => handleNavigate('products')}
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

        {currentMode === 'products' && (
          <ProductsSection
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

      {/* Footer */}
      <FooterSection
        onNavigateSection={handleNavigateSection}
        onOpenTestDrive={() => handleOpenTestDrive()}
        onOpenFranchise={() => setIsFranchiseOpen(true)}
      />

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
