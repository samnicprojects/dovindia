import React, { useState } from 'react';
import { Zap, Mail, Phone, MapPin, ShieldCheck, Facebook, Twitter, Linkedin, MessageCircle, ArrowUp, Gauge, Building2 } from 'lucide-react';
import { PrivacyPolicyModal } from '../PrivacyPolicyModal';
import { TermsModal } from '../TermsModal';

interface FooterSectionProps {
  onNavigateSection: (sectionId: string) => void;
  onOpenTestDrive?: () => void;
  onOpenFranchise?: () => void;
}

export const FooterSection: React.FC<FooterSectionProps> = ({ onNavigateSection, onOpenTestDrive, onOpenFranchise }) => {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0F172A] text-slate-300 text-xs border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">

        {/* Top Highlight Banner */}
        <div className="bg-slate-800/60 p-6 rounded-3xl border border-slate-700/60 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#0D6EFD]/20 text-[#0D6EFD] flex items-center justify-center font-bold">
              <ShieldCheck className="w-6 h-6 text-[#22C55E]" />
            </div>
            <div>
              <h4 className="text-sm font-black text-white">EVDov Electric Mobility Portal</h4>
              <p className="text-xs text-slate-400">PM E-DRIVE 2026 Subsidy Approved • 3-Year Battery & Motor Warranty • Swappable LFP Tech</p>
            </div>
          </div>
          <button
            onClick={onOpenTestDrive}
            className="bg-[#EA580C] hover:bg-[#c2410c] text-white font-extrabold px-6 py-2.5 rounded-xl shadow-md transition-all text-xs flex items-center gap-2 cursor-pointer uppercase tracking-wider"
          >
            <Gauge className="w-4 h-4 text-amber-300" /> Book Free Test Drive
          </button>
        </div>

        {/* Multi-Column Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">

          {/* Col 1 & 2: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div>
              <img src="/logo.webp" alt="EVDov Electric Mobility" className="h-16 w-auto object-contain bg-white/5 p-2 rounded-xl border border-slate-700/50" />
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm font-medium">
              EVDov Electric Mobility is India's leading smart electric scooter manufacturer, empowering 35,000+ happy riders with high-performance 1200W electric scooters and ultra-low running costs of ₹0.15/km.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a href="https://www.facebook.com/Develop-Our-Villages-102760469224992/?ref=pages_you_manage" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-slate-800 hover:bg-[#1877F2] text-slate-300 hover:text-white flex items-center justify-center transition-colors" title="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://x.com/dov_india" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors" title="Twitter / X">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://www.linkedin.com/in/dov-india-foundation-434a12229/" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-slate-800 hover:bg-[#0A66C2] text-slate-300 hover:text-white flex items-center justify-center transition-colors" title="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://api.whatsapp.com/send/?phone=917098555333&text&type=phone_number&app_absent=0" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-slate-800 hover:bg-[#25D366] text-slate-300 hover:text-white flex items-center justify-center transition-colors" title="WhatsApp">
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 3: Quick Navigation */}
          <div className="space-y-3">
            <h4 className="font-extrabold text-white text-xs uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2 font-medium">
              <li><button onClick={() => onNavigateSection('hero')} className="hover:text-white transition-colors cursor-pointer">Home</button></li>
              <li><button onClick={() => onNavigateSection('about')} className="hover:text-white transition-colors cursor-pointer">About EVDov</button></li>
              <li><button onClick={() => onNavigateSection('focus')} className="hover:text-white transition-colors cursor-pointer">EV Tech Pillars</button></li>
              <li><button onClick={() => onNavigateSection('products')} className="hover:text-white transition-colors cursor-pointer">⚡ 16+ EV Scooter Models</button></li>
              <li><button onClick={() => onNavigateSection('faq')} className="hover:text-white transition-colors cursor-pointer">EV FAQ</button></li>
            </ul>
          </div>

          {/* Col 4: Top Models */}
          <div className="space-y-3">
            <h4 className="font-extrabold text-white text-xs uppercase tracking-wider">Featured EV Models</h4>
            <ul className="space-y-2 font-medium">
              <li><button onClick={() => onNavigateSection('products')} className="hover:text-white transition-colors cursor-pointer">CS 01 (SCROOT)</button></li>
              <li><button onClick={() => onNavigateSection('products')} className="hover:text-white transition-colors cursor-pointer">ZL3002 (MARS)</button></li>
              <li><button onClick={() => onNavigateSection('products')} className="hover:text-white transition-colors cursor-pointer">CS3 (ELITE)</button></li>
              <li><button onClick={() => onNavigateSection('products')} className="hover:text-white transition-colors cursor-pointer">VSP 6 (Dual Disc)</button></li>
              <li><button onClick={() => onNavigateSection('products')} className="hover:text-white transition-colors cursor-pointer">NINE (55 km/h High Speed)</button></li>
            </ul>
          </div>

          {/* Col 5: Contact Info */}
          <div className="space-y-3">
            <h4 className="font-extrabold text-white text-xs uppercase tracking-wider">Corporate HQ</h4>
            <ul className="space-y-2.5 text-xs text-slate-400 font-medium">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#0D6EFD] shrink-0 mt-0.5" />
                <span>569/169, Near PICCADILY Hotel, Kanpur Road, Singar Nagar Metro Station, Lucknow, UP 226012</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#EA580C] shrink-0" />
                <span>Helpline: +91 7098555333</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#22C55E] shrink-0" />
                <span>sales@dovindia.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4 text-[11px] text-slate-500 font-medium">
          <div>
            © {new Date().getFullYear()} EVDov Electric Mobility Group. All rights reserved. PM E-DRIVE Subsidy Certified.
          </div>
          <div className="flex items-center gap-6">
            <button onClick={() => setIsPrivacyOpen(true)} className="hover:text-slate-300 transition-colors cursor-pointer">Privacy Policy</button>
            <button onClick={() => setIsTermsOpen(true)} className="hover:text-slate-300 transition-colors cursor-pointer">Terms of Service</button>
            <button onClick={scrollToTop} className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer bg-slate-800 px-3 py-1 rounded-lg">
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>

      <PrivacyPolicyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
      <TermsModal isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} />
    </footer>
  );
};
