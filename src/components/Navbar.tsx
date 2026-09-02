import React, { useState, useRef, useEffect } from 'react';
import { PageMode } from '../types';
import { PROGRAMMES_DATA } from '../data/programmes';
import { motion, AnimatePresence } from 'motion/react';
import {
  Zap,
  Gauge,
  HeartHandshake,
  Menu,
  X,
  MessageCircle,
  FileCode,
  ChevronDown,
  ChevronRight,
  ShieldCheck,
  Ambulance,
  GraduationCap,
  HeartPulse,
  ShieldAlert,
  BarChart3,
  Utensils,
  TreePine,
  Users,
  Smile,
  Home,
  Briefcase,
  Wrench,
  LifeBuoy,
  Stethoscope,
  Leaf,
  Landmark,
  PhoneCall,
  Sparkles,
  ArrowRight,
  User,
  LogOut
} from 'lucide-react';

interface NavbarProps {
  currentMode: PageMode;
  onNavigate: (mode: PageMode, programmeId?: string) => void;
  onOpenTestDrive: () => void;
  onOpenDonation: () => void;
  onOpenVolunteer: () => void;
  onOpenFranchise: () => void;
  onOpenWhatsApp: (intent?: string) => void;
}

const getProgrammeIcon = (iconName: string) => {
  switch (iconName) {
    case 'Ambulance': return <Ambulance className="w-4 h-4 text-rose-400" />;
    case 'GraduationCap': return <GraduationCap className="w-4 h-4 text-cyan-400" />;
    case 'HeartPulse': return <HeartPulse className="w-4 h-4 text-emerald-400" />;
    case 'ShieldAlert': return <ShieldAlert className="w-4 h-4 text-amber-400" />;
    case 'BarChart3': return <BarChart3 className="w-4 h-4 text-blue-400" />;
    case 'Utensils': return <Utensils className="w-4 h-4 text-orange-400" />;
    case 'TreePine': return <TreePine className="w-4 h-4 text-green-400" />;
    case 'Users': return <Users className="w-4 h-4 text-pink-400" />;
    case 'Smile': return <Smile className="w-4 h-4 text-purple-400" />;
    case 'Home': return <Home className="w-4 h-4 text-yellow-400" />;
    case 'Briefcase': return <Briefcase className="w-4 h-4 text-teal-400" />;
    case 'Wrench': return <Wrench className="w-4 h-4 text-indigo-400" />;
    case 'LifeBuoy': return <LifeBuoy className="w-4 h-4 text-red-400" />;
    case 'Stethoscope': return <Stethoscope className="w-4 h-4 text-cyan-300" />;
    case 'Leaf': return <Leaf className="w-4 h-4 text-emerald-300" />;
    default: return <Sparkles className="w-4 h-4 text-amber-400" />;
  }
};

export const Navbar: React.FC<NavbarProps> = ({
  currentMode,
  onNavigate,
  onOpenTestDrive,
  onOpenDonation,
  onOpenWhatsApp
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [aboutMenuOpen, setAboutMenuOpen] = useState(false);
  const [mobileProgrammesOpen, setMobileProgrammesOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const megaMenuRef = useRef<HTMLDivElement>(null);
  const aboutMenuRef = useRef<HTMLDivElement>(null);

  // Close menus on outside click or Escape key
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (megaMenuRef.current && !megaMenuRef.current.contains(event.target as Node)) {
        setMegaMenuOpen(false);
      }
      if (aboutMenuRef.current && !aboutMenuRef.current.contains(event.target as Node)) {
        setAboutMenuOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMegaMenuOpen(false);
        setAboutMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleNavClick = (mode: PageMode, optionId?: string) => {
    onNavigate(mode, optionId);
    setMobileMenuOpen(false);
    setMegaMenuOpen(false);
    setAboutMenuOpen(false);
    setMobileProgrammesOpen(false);
    setMobileAboutOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E5E7EB] text-[#1F2937] transition-colors duration-300 shadow-xs">
      {/* Top Banner Notice - Secondary Deep Blue (#1E3A8A) */}
      <div className="bg-[#1E3A8A] px-4 py-1.5 text-xs font-medium text-white border-b border-blue-900/50">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="bg-[#22C55E]/20 text-[#22C55E] px-2 py-0.5 rounded-full border border-[#22C55E]/30 text-[10px] font-semibold uppercase tracking-wider bg-emerald-950/40">
              PM E-DRIVE 2026 Subsidy Approved
            </span>

          </div>
          <div className="flex items-center gap-4 text-blue-100 text-[11px] ml-auto">
            {localStorage.getItem('dov_ev_current_user') ? (
              <div className="flex items-center gap-2 bg-white/10 border border-white/20 px-3 py-1 rounded-full text-[11px] text-amber-300 font-bold">
                <User className="w-3.5 h-3.5 text-amber-300" />
                <span>Welcome, {JSON.parse(localStorage.getItem('dov_ev_current_user')!).name}</span>
                <button
                  onClick={() => {
                    localStorage.removeItem('dov_ev_current_user');
                    window.location.reload();
                  }}
                  className="ml-1 text-[10px] bg-red-600 hover:bg-red-500 text-white px-2 py-0.5 rounded font-extrabold transition-colors cursor-pointer"
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

            <span className="text-blue-300 hidden md:inline">|</span>
            <button onClick={() => onOpenWhatsApp('General Inquiry')} className="hover:text-[#22C55E] transition-colors flex items-center gap-1 font-medium">
              <MessageCircle className="w-3 h-3 text-[#22C55E]" />
              WhatsApp Helpdesk
            </button>
            <span className="text-blue-300 hidden md:inline">|</span>
            <span className="hidden md:inline font-mono">Helpline: 7098555333</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4 relative">
        {/* Brand Logo */}
        <div className="flex items-center cursor-pointer" onClick={() => handleNavClick('home')}>
          <img
            src="/logo.webp"
            alt="DOV INDIA"
            className="h-18 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Desktop Global Navigation Menu */}
        <nav className="hidden xl:flex items-center gap-1.5 text-sm font-semibold text-[#374151]">
          {/* 1. HOME */}
          <button
            onClick={() => handleNavClick('home')}
            className={`px-2.5 py-2 rounded-lg transition-colors text-xs font-black uppercase tracking-wider ${currentMode === 'home' ? 'text-[#1E3A8A] bg-gray-100' : 'hover:text-[#1E3A8A] hover:bg-gray-50'}`}
          >
            HOME
          </button>

          {/* 2. EV DOVINDIA */}
          <button
            onClick={() => handleNavClick('ev')}
            className={`px-2.5 py-2 rounded-lg transition-colors text-xs font-black uppercase tracking-wider ${currentMode === 'ev' ? 'text-[#1E3A8A] bg-gray-100' : 'hover:text-[#1E3A8A] hover:bg-gray-50'}`}
          >
            EV DOVINDIA
          </button>

          {/* PRODUCTS (BIKES) */}
          <button
            onClick={() => handleNavClick('products')}
            className={`px-2.5 py-2 rounded-lg transition-colors text-xs font-black uppercase tracking-wider flex items-center gap-1 ${currentMode === 'products' ? 'text-[#1E3A8A] bg-gray-100' : 'hover:text-[#1E3A8A] hover:bg-gray-50'}`}
          >
            <span>PRODUCTS</span>
            <span className="bg-orange-500 text-white text-[9px] px-1.5 py-0.2 rounded-full font-extrabold">NEW</span>
          </button>

          {/* 3. CSR */}
          <div
            className="relative"
            ref={megaMenuRef}
            onMouseEnter={() => setMegaMenuOpen(true)}
            onMouseLeave={() => setMegaMenuOpen(false)}
          >
            <button
              onClick={() => {
                setMegaMenuOpen(!megaMenuOpen);
              }}
              className={`px-2.5 py-2 rounded-lg transition-all flex items-center gap-1 text-xs font-black uppercase tracking-wider ${currentMode === 'programmes' || currentMode === 'what-we-do' || currentMode === 'emergency' || megaMenuOpen
                ? 'text-[#1E3A8A] bg-gray-100'
                : 'hover:text-[#1E3A8A] hover:bg-gray-50'
                }`}
              aria-expanded={megaMenuOpen}
            >
              <span>CSR</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${megaMenuOpen ? 'rotate-180 text-[#1E3A8A]' : 'text-gray-400'}`} />
            </button>

            {/* Dropdown Panel with All 15 Programmes */}
            <AnimatePresence>
              {megaMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.98 }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                  className="absolute top-full left-0 mt-1 w-72 bg-white border border-gray-200 rounded-xl shadow-lg p-2 z-50 text-[#1F2937] normal-case"
                >
                  <div className="flex flex-col space-y-0.5">
                    <button
                      onClick={() => handleNavClick('what-we-do')}
                      className={`w-full text-left px-3 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-colors ${
                        currentMode === 'what-we-do' ? 'text-[#1E3A8A] bg-gray-100' : 'text-[#374151] hover:text-[#1E3A8A] hover:bg-gray-100'
                      }`}
                    >
                      WHAT WE DO
                    </button>
                    <button
                      onClick={() => handleNavClick('emergency')}
                      className={`w-full text-left px-3 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-colors ${
                        currentMode === 'emergency' ? 'text-[#1E3A8A] bg-gray-100' : 'text-[#374151] hover:text-[#1E3A8A] hover:bg-gray-100'
                      }`}
                    >
                      EMERGENCY CASE
                    </button>
                    <div className="border-t border-gray-100 my-1"></div>
                    <div className="px-3 py-1 text-[10px] font-extrabold text-gray-400 uppercase tracking-wider">CSR Initiatives</div>
                    {PROGRAMMES_DATA.map((prog) => (
                      <button
                        key={prog.id}
                        onClick={() => handleNavClick('programmes', prog.id)}
                        className="w-full text-left px-3 py-2 text-xs font-semibold text-[#374151] hover:text-[#1E3A8A] hover:bg-gray-100 rounded-lg transition-colors"
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
            ref={aboutMenuRef}
            onMouseEnter={() => setAboutMenuOpen(true)}
            onMouseLeave={() => setAboutMenuOpen(false)}
          >
            <button
              onClick={() => setAboutMenuOpen(!aboutMenuOpen)}
              className={`px-2.5 py-2 rounded-lg transition-all flex items-center gap-1 text-xs font-black uppercase tracking-wider ${
                currentMode === 'about' || aboutMenuOpen
                  ? 'text-[#1E3A8A] bg-gray-100'
                  : 'hover:text-[#1E3A8A] hover:bg-gray-50'
              }`}
              aria-expanded={aboutMenuOpen}
            >
              <span>ABOUT</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${aboutMenuOpen ? 'rotate-180 text-[#1E3A8A]' : 'text-gray-400'}`} />
            </button>

            {/* About Us Dropdown Panel */}
            <AnimatePresence>
              {aboutMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.98 }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                  className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-200 rounded-xl shadow-lg p-2 z-50 text-[#1F2937] uppercase"
                >
                  <div className="flex flex-col space-y-0.5">
                    <button
                      onClick={() => handleNavClick('about', 'who-are-we')}
                      className="w-full text-left px-3 py-2 text-xs font-semibold text-[#374151] hover:text-[#1E3A8A] hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      WHO ARE WE
                    </button>
                    <button
                      onClick={() => handleNavClick('about', 'founders')}
                      className="w-full text-left px-3 py-2 text-xs font-semibold text-[#374151] hover:text-[#1E3A8A] hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      OUR FOUNDERS
                    </button>
                    <button
                      onClick={() => handleNavClick('about', 'management')}
                      className="w-full text-left px-3 py-2 text-xs font-semibold text-[#374151] hover:text-[#1E3A8A] hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      OUR MANAGEMENT TEAM
                    </button>
                    <button
                      onClick={() => handleNavClick('about', 'legal-docs')}
                      className="w-full text-left px-3 py-2 text-xs font-semibold text-[#374151] hover:text-[#1E3A8A] hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      LEGAL DOCUMENTS
                    </button>
                    <button
                      onClick={() => handleNavClick('contact')}
                      className="w-full text-left px-3 py-2 text-xs font-semibold text-[#374151] hover:text-[#1E3A8A] hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      CONTACT
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>



          {/* 7. BANK DETAILS */}
          <button
            onClick={() => handleNavClick('bank-details')}
            className={`px-2.5 py-2 rounded-lg transition-colors text-xs font-black uppercase tracking-wider ${currentMode === 'bank-details' ? 'text-[#1E3A8A] bg-gray-100' : 'hover:text-[#1E3A8A] hover:bg-gray-50'}`}
          >
            BANK DETAILS
          </button>

          {/* 8. CONTACT */}
          <button
            onClick={() => handleNavClick('contact')}
            className={`px-2.5 py-2 rounded-lg transition-colors text-xs font-black uppercase tracking-wider ${currentMode === 'contact' ? 'text-[#1E3A8A] bg-gray-100' : 'hover:text-[#1E3A8A] hover:bg-gray-50'}`}
          >
            CONTACT
          </button>
        </nav>

        {/* Action CTAs (Desktop) */}
        <div className="hidden lg:flex items-center gap-2">
          <button
            onClick={() => onNavigate('products')}
            className="px-4 py-2 bg-gradient-to-r from-[#EA580C] to-[#f97316] hover:from-[#c2410c] hover:to-[#ea580c] text-white font-black text-xs rounded-xl shadow-sm flex items-center gap-1.5 transition-all cursor-pointer uppercase tracking-wider"
          >
            <Zap className="w-4 h-4 text-amber-300" />
            Reserve Scooter (₹999)
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex xl:hidden items-center gap-2">
          <button
            onClick={() => onNavigate('products')}
            className="px-3 py-1.5 bg-[#EA580C] text-white text-xs font-black rounded-lg flex items-center gap-1 uppercase"
          >
            <Zap className="w-3.5 h-3.5 text-amber-300" /> Reserve
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#1F2937] hover:bg-slate-100 rounded-xl border border-gray-200"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="xl:hidden bg-white border-b border-[#E5E7EB] px-4 pt-3 pb-6 space-y-3 overflow-hidden text-sm"
          >
            <div className="space-y-1">
              <button
                onClick={() => handleNavClick('home')}
                className="w-full text-left px-3 py-2 rounded-lg text-[#1F2937] hover:bg-slate-50 flex items-center justify-between"
              >
                <span>Home</span>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </button>

              <button
                onClick={() => handleNavClick('about')}
                className="w-full text-left px-3 py-2 rounded-lg text-[#1F2937] hover:bg-slate-50 flex items-center justify-between"
              >
                <span>About Us</span>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </button>

              {/* Mobile Programmes Accordion */}
              <div>
                <button
                  onClick={() => setMobileProgrammesOpen(!mobileProgrammesOpen)}
                  className="w-full text-left px-3 py-2 rounded-lg text-[#1F2937] hover:bg-slate-50 flex items-center justify-between font-bold"
                >
                  <span>CSR</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileProgrammesOpen ? 'rotate-180' : ''}`} />
                </button>

                {mobileProgrammesOpen && (
                  <div className="mt-2 pl-3 space-y-1 bg-[#F8FAFC] p-2 rounded-xl border border-gray-200 text-xs max-h-60 overflow-y-auto">
                    <button
                      onClick={() => handleNavClick('what-we-do')}
                      className="w-full text-left p-2 rounded-lg hover:bg-gray-100 text-[#1F2937] font-bold uppercase"
                    >
                      What We Do
                    </button>
                    <button
                      onClick={() => handleNavClick('emergency')}
                      className="w-full text-left p-2 rounded-lg hover:bg-gray-100 text-[#1F2937] font-bold uppercase"
                    >
                      Emergency Case
                    </button>
                    <div className="border-t border-gray-200 my-1"></div>
                    <div className="px-2 py-0.5 text-[10px] font-extrabold text-gray-400 uppercase tracking-wider">CSR Initiatives</div>
                    {PROGRAMMES_DATA.map((prog) => (
                      <button
                        key={prog.id}
                        onClick={() => handleNavClick('programmes', prog.id)}
                        className="w-full text-left p-2 rounded-lg hover:bg-gray-100 text-[#1F2937]"
                      >
                        <span className="truncate">{prog.title}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <button
                onClick={() => handleNavClick('bank-details')}
                className="w-full text-left px-3 py-2 rounded-lg text-[#1F2937] hover:bg-slate-50 flex items-center justify-between"
              >
                <span>Bank Details</span>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </button>

              <button
                onClick={() => handleNavClick('ev')}
                className="w-full text-left px-3 py-2 rounded-lg text-[#1F2937] hover:bg-slate-50 flex items-center justify-between"
              >
                <span>Electric Scooters</span>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </button>

              <button
                onClick={() => handleNavClick('products')}
                className="w-full text-left px-3 py-2 rounded-lg text-[#1F2937] hover:bg-slate-50 flex items-center justify-between"
              >
                <div className="flex items-center gap-1.5">
                  <span className="font-bold">Products (Bikes)</span>
                  <span className="bg-orange-500 text-white text-[9px] px-1.5 py-0.2 rounded-full font-extrabold">NEW</span>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </button>

              <button
                onClick={() => handleNavClick('contact')}
                className="w-full text-left px-3 py-2 rounded-lg text-[#1F2937] hover:bg-slate-50 flex items-center justify-between"
              >
                <span>Contact Us</span>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </button>
            </div>

            <div className="pt-2 grid grid-cols-2 gap-2">
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenTestDrive(); }}
                className="btn-primary w-full text-xs py-2.5"
              >
                <Gauge className="w-4 h-4" /> Book Test Drive
              </button>
              <button
                onClick={() => { setMobileMenuOpen(false); onNavigate('products'); }}
                className="w-full py-2.5 bg-[#EA580C] text-white font-extrabold text-xs rounded-xl flex items-center justify-center gap-1 uppercase"
              >
                <Zap className="w-4 h-4 text-amber-300" /> Reserve ₹999
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
