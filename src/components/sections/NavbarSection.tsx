import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Menu, X, ChevronDown, Sparkles, MessageCircle, Phone, ArrowRight, ShieldCheck, ChevronRight, User, LogIn, LogOut } from 'lucide-react';
import { PageMode } from '../../types';
import { PROGRAMMES_DATA } from '../../data/programmes';
import { Button } from '../ui/ReusableComponents';

interface NavbarSectionProps {
  currentMode: PageMode;
  onNavigate: (mode: PageMode, optionId?: string) => void;
  onOpenDonation: (amount?: number) => void;
  onOpenVolunteer: () => void;
}

export const NavbarSection: React.FC<NavbarSectionProps> = ({
  currentMode,
  onNavigate,
  onOpenDonation,
  onOpenVolunteer
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [programmesDropdownOpen, setProgrammesDropdownOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileProgrammesOpen, setMobileProgrammesOpen] = useState(false);

  const aboutRef = useRef<HTMLDivElement>(null);
  const programmesRef = useRef<HTMLDivElement>(null);

  const [evUser, setEvUser] = useState<{ name: string; email: string } | null>(() => {
    try {
      const saved = localStorage.getItem('dov_ev_current_user');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  useEffect(() => {
    const checkEvUser = () => {
      try {
        const saved = localStorage.getItem('dov_ev_current_user');
        setEvUser(saved ? JSON.parse(saved) : null);
      } catch {
        setEvUser(null);
      }
    };

    window.addEventListener('storage', checkEvUser);
    const interval = setInterval(checkEvUser, 1000);
    return () => {
      window.removeEventListener('storage', checkEvUser);
      clearInterval(interval);
    };
  }, []);

  const handleEvLogout = () => {
    localStorage.removeItem('dov_ev_current_user');
    setEvUser(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (aboutRef.current && !aboutRef.current.contains(e.target as Node)) {
        setAboutDropdownOpen(false);
      }
      if (programmesRef.current && !programmesRef.current.contains(e.target as Node)) {
        setProgrammesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (mode: PageMode, optionId?: string) => {
    onNavigate(mode, optionId);
    setMobileMenuOpen(false);
    setAboutDropdownOpen(false);
    setProgrammesDropdownOpen(false);
    setMobileAboutOpen(false);
    setMobileProgrammesOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const aboutSubMenu = [
    { label: 'WHO ARE WE', id: 'who-are-we', isPage: false },
    { label: 'OUR FOUNDERS', id: 'founders', isPage: false },
    { label: 'OUR MANAGEMENT TEAM', id: 'management', isPage: false },
    { label: 'OUR JOURNEY', id: 'journey', isPage: false },
    { label: 'LEGAL DOCUMENTS', id: 'legal-docs', isPage: false },
    { label: 'Contact', id: 'contact', isPage: true },
    { label: 'AWARDS', id: 'awards', isPage: false }
  ];

  return (
    <>
      {/* Top Banner Notice */}
      <div className="bg-[#0F172A] text-white text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="bg-[#22C55E]/20 text-[#22C55E] px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider border border-[#22C55E]/30">
              PM E-DRIVE 2026 & 80G Certified
            </span>
            <span className="hidden sm:inline text-slate-300">
              Registered Section 8 Non-Profit Foundation • 100% Tax Deductible Receipts
            </span>
          </div>

          <div className="flex items-center gap-4 text-slate-300">
            {evUser ? (
              <div className="flex items-center gap-2 bg-[#EA580C]/20 border border-[#EA580C]/40 px-3 py-1 rounded-full text-[11px] text-amber-300 font-bold">
                <User className="w-3.5 h-3.5 text-amber-400" />
                <span>Welcome, {evUser.name}</span>
                <button
                  onClick={handleEvLogout}
                  className="ml-1 text-[10px] bg-red-600/80 hover:bg-red-600 text-white px-2 py-0.5 rounded font-extrabold transition-colors cursor-pointer"
                >
                  Logout
                </button>
              </div>
            ) : (
              <button
                onClick={() => onNavigate('ev-mobility')}
                className="flex items-center gap-1.5 bg-[#EA580C] hover:bg-[#C2410C] text-white px-3 py-1 rounded-full text-[11px] font-extrabold transition-all cursor-pointer shadow-xs"
              >
                <User className="w-3.5 h-3.5" />
                <span>EV Login / Register</span>
              </button>
            )}

            <span className="text-slate-600 hidden md:inline">|</span>
            <a href="https://api.whatsapp.com/send/?phone=917098555333&text&type=phone_number&app_absent=0" target="_blank" rel="noreferrer" className="hover:text-[#22C55E] transition-colors flex items-center gap-1">
              <MessageCircle className="w-3.5 h-3.5 text-[#22C55E]" />
              <span className="hidden sm:inline font-medium">WhatsApp Helpdesk</span>
            </a>
            <span className="text-slate-600 hidden md:inline">|</span>
            <span className="hidden md:inline font-mono text-[11px]">Helpline: 7098555333</span>
          </div>
        </div>
      </div>

      {/* Clean Modern Main Navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm py-3'
            : 'bg-white border-b border-slate-100 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-6">

          {/* Brand Logo */}
          <div
            onClick={() => handleNavClick('home')}
            className="flex items-center cursor-pointer group shrink-0"
          >
            <img
              src="/logo.webp"
              alt="DOV INDIA"
              className="h-16 sm:h-18 w-auto object-contain transition-transform group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Desktop Navigation Links (Exact ordered uppercase labels) */}
          <nav className="hidden xl:flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-slate-700">
            {/* 1. HOME */}
            <button
              onClick={() => handleNavClick('home')}
              className={`px-2.5 py-2 rounded-lg transition-colors cursor-pointer ${
                currentMode === 'home'
                  ? 'text-[#165DFF] bg-blue-50/80'
                  : 'hover:text-[#165DFF] hover:bg-slate-50'
              }`}
            >
              HOME
            </button>

            {/* 2. EV DOVINDIA */}
            <button
              onClick={() => handleNavClick('ev')}
              className={`px-2.5 py-2 rounded-lg transition-colors cursor-pointer ${
                currentMode === 'ev'
                  ? 'text-[#165DFF] bg-blue-50/80'
                  : 'hover:text-[#165DFF] hover:bg-slate-50'
              }`}
            >
              EV DOVINDIA
            </button>

            {/* 3. CSR */}
            <div
              className="relative"
              ref={programmesRef}
              onMouseEnter={() => setProgrammesDropdownOpen(true)}
              onMouseLeave={() => setProgrammesDropdownOpen(false)}
            >
              <button
                onClick={() => setProgrammesDropdownOpen(!programmesDropdownOpen)}
                className={`px-2.5 py-2 rounded-lg transition-colors flex items-center gap-1 cursor-pointer ${
                  currentMode === 'programmes' || programmesDropdownOpen
                    ? 'text-[#165DFF] bg-blue-50/80'
                    : 'hover:text-[#165DFF] hover:bg-slate-50'
                }`}
              >
                <span>CSR</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${programmesDropdownOpen ? 'rotate-180 text-[#165DFF]' : 'text-slate-400'}`} />
              </button>

              <AnimatePresence>
                {programmesDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-1 w-72 bg-white border border-slate-200 rounded-2xl shadow-xl p-2 z-50 normal-case"
                  >
                    <div className="flex flex-col space-y-1">
                      {PROGRAMMES_DATA.map((prog) => (
                        <button
                          key={prog.id}
                          onClick={() => handleNavClick('programmes', prog.id)}
                          className="w-full text-left px-3.5 py-2 text-xs font-bold text-slate-700 hover:text-[#165DFF] hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
                        >
                          {prog.title}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 4. ABOUT */}
            <div
              className="relative"
              ref={aboutRef}
              onMouseEnter={() => setAboutDropdownOpen(true)}
              onMouseLeave={() => setAboutDropdownOpen(false)}
            >
              <button
                onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
                className={`px-2.5 py-2 rounded-lg transition-colors flex items-center gap-1 cursor-pointer ${
                  currentMode === 'about' || aboutDropdownOpen
                    ? 'text-[#165DFF] bg-blue-50/80'
                    : 'hover:text-[#165DFF] hover:bg-slate-50'
                }`}
              >
                <span>ABOUT</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${aboutDropdownOpen ? 'rotate-180 text-[#165DFF]' : 'text-slate-400'}`} />
              </button>

              <AnimatePresence>
                {aboutDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-1 w-64 bg-white border border-slate-200 rounded-2xl shadow-xl p-2 z-50 uppercase"
                  >
                    <div className="flex flex-col space-y-1">
                      {aboutSubMenu.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => handleNavClick(item.isPage ? 'contact' : 'about', item.id)}
                          className="w-full text-left px-3.5 py-2 text-xs font-bold text-slate-700 hover:text-[#165DFF] hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 5. WHAT WE DO */}
            <button
              onClick={() => handleNavClick('what-we-do')}
              className={`px-2.5 py-2 rounded-lg transition-colors cursor-pointer ${
                currentMode === 'what-we-do'
                  ? 'text-[#165DFF] bg-blue-50/80'
                  : 'hover:text-[#165DFF] hover:bg-slate-50'
              }`}
            >
              WHAT WE DO
            </button>

            {/* 6. EMERGENCY CASE */}
            <button
              onClick={() => handleNavClick('emergency')}
              className={`px-2.5 py-2 rounded-lg transition-colors cursor-pointer ${
                currentMode === 'emergency'
                  ? 'text-[#165DFF] bg-blue-50/80'
                  : 'hover:text-[#165DFF] hover:bg-slate-50'
              }`}
            >
              EMERGENCY CASE
            </button>

            {/* 7. BANK DETAILS */}
            <button
              onClick={() => handleNavClick('bank-details')}
              className={`px-2.5 py-2 rounded-lg transition-colors cursor-pointer ${
                currentMode === 'bank-details'
                  ? 'text-[#165DFF] bg-blue-50/80'
                  : 'hover:text-[#165DFF] hover:bg-slate-50'
              }`}
            >
              BANK DETAILS
            </button>

            {/* 8. CONTACT */}
            <button
              onClick={() => handleNavClick('contact')}
              className={`px-2.5 py-2 rounded-lg transition-colors cursor-pointer ${
                currentMode === 'contact'
                  ? 'text-[#165DFF] bg-blue-50/80'
                  : 'hover:text-[#165DFF] hover:bg-slate-50'
              }`}
            >
              CONTACT
            </button>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <Button
              variant="secondary"
              size="md"
              icon={Heart}
              onClick={() => onOpenDonation()}
            >
              Donate Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2.5 rounded-2xl bg-slate-100 text-slate-800 border border-slate-200 cursor-pointer"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>

        {/* Mobile Menu Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="xl:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 overflow-hidden text-xs font-black uppercase tracking-wider"
            >
              <div className="space-y-1">
                <button onClick={() => handleNavClick('home')} className="w-full text-left px-3 py-2.5 rounded-xl font-bold text-slate-800 hover:bg-slate-50 flex items-center justify-between">
                  <span>HOME</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </button>

                <button onClick={() => handleNavClick('ev')} className="w-full text-left px-3 py-2.5 rounded-xl font-bold text-slate-800 hover:bg-slate-50 flex items-center justify-between">
                  <span>EV DOVINDIA</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </button>

                {/* Mobile Programmes Accordion */}
                <div>
                  <button onClick={() => setMobileProgrammesOpen(!mobileProgrammesOpen)} className="w-full text-left px-3 py-2.5 rounded-xl font-bold text-slate-800 hover:bg-slate-50 flex items-center justify-between">
                    <span>CSR</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileProgrammesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {mobileProgrammesOpen && (
                    <div className="mt-1 pl-3 space-y-1 bg-slate-50 p-2 rounded-xl border border-slate-200 font-bold max-h-48 overflow-y-auto normal-case">
                      {PROGRAMMES_DATA.map((prog) => (
                        <button key={prog.id} onClick={() => handleNavClick('programmes', prog.id)} className="w-full text-left p-2 rounded-lg hover:bg-white text-slate-700">
                          {prog.title}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Mobile About Accordion */}
                <div>
                  <button onClick={() => setMobileAboutOpen(!mobileAboutOpen)} className="w-full text-left px-3 py-2.5 rounded-xl font-bold text-slate-800 hover:bg-slate-50 flex items-center justify-between">
                    <span>ABOUT</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileAboutOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {mobileAboutOpen && (
                    <div className="mt-1 pl-3 space-y-1 bg-slate-50 p-2 rounded-xl border border-slate-200 font-bold uppercase">
                      {aboutSubMenu.map((item) => (
                        <button key={item.id} onClick={() => handleNavClick(item.isPage ? 'contact' : 'about', item.id)} className="w-full text-left p-2 rounded-lg hover:bg-white text-slate-700">
                          {item.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <button onClick={() => handleNavClick('what-we-do')} className="w-full text-left px-3 py-2.5 rounded-xl font-bold text-slate-800 hover:bg-slate-50 flex items-center justify-between">
                  <span>WHAT WE DO</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </button>

                <button onClick={() => handleNavClick('emergency')} className="w-full text-left px-3 py-2.5 rounded-xl font-bold text-slate-800 hover:bg-slate-50 flex items-center justify-between">
                  <span>EMERGENCY CASE</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </button>

                <button onClick={() => handleNavClick('bank-details')} className="w-full text-left px-3 py-2.5 rounded-xl font-bold text-slate-800 hover:bg-slate-50 flex items-center justify-between">
                  <span>BANK DETAILS</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </button>

                <button onClick={() => handleNavClick('contact')} className="w-full text-left px-3 py-2.5 rounded-xl font-bold text-slate-800 hover:bg-slate-50 flex items-center justify-between">
                  <span>CONTACT</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </button>
              </div>

              <div className="pt-2 grid grid-cols-2 gap-2">
                <Button variant="outline" size="sm" onClick={() => { setMobileMenuOpen(false); onOpenVolunteer(); }}>
                  Volunteer
                </Button>
                <Button variant="secondary" size="sm" icon={Heart} onClick={() => { setMobileMenuOpen(false); onOpenDonation(); }}>
                  Donate Now
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};
