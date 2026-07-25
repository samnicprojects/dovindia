import React, { useState } from 'react';
import { Heart, Mail, Phone, MapPin, ShieldCheck, Facebook, Twitter, Linkedin, MessageCircle, ArrowUp } from 'lucide-react';
import { PrivacyPolicyModal } from '../PrivacyPolicyModal';
import { TermsModal } from '../TermsModal';

interface FooterSectionProps {
  onNavigateSection: (sectionId: string) => void;
  onOpenDonation: () => void;
}

export const FooterSection: React.FC<FooterSectionProps> = ({ onNavigateSection, onOpenDonation }) => {
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
            <div className="w-10 h-10 rounded-xl bg-[#165DFF]/20 text-[#165DFF] flex items-center justify-center font-bold">
              <ShieldCheck className="w-6 h-6 text-[#22C55E]" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Registered Section 8 Non-Profit Organization</h4>
              <p className="text-xs text-slate-400">Reg No: U85300MH2021NPL374053 • PAN: AAICD9879P • 80G Certified</p>
            </div>
          </div>
          <button
            onClick={onOpenDonation}
            className="bg-[#FF7A00] hover:bg-[#E06B00] text-white font-bold px-6 py-2.5 rounded-xl shadow-md transition-all text-xs flex items-center gap-2 cursor-pointer"
          >
            <Heart className="w-4 h-4 fill-current" /> Donate & Save Tax
          </button>
        </div>

        {/* Multi-Column Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">

          {/* Col 1 & 2: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div>
              <img src="/logo.webp" alt="DOV INDIA FOUNDATION" className="h-16 w-auto object-contain bg-white/5 p-2 rounded-xl border border-slate-700/50" />
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              We are a team of change-makers dedicated to village development, emergency healthcare, quality education, zero hunger, and Miyawaki afforestation across rural India.
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
            <ul className="space-y-2">
              <li><button onClick={() => onNavigateSection('hero')} className="hover:text-white transition-colors cursor-pointer">Home</button></li>
              <li><button onClick={() => onNavigateSection('about')} className="hover:text-white transition-colors cursor-pointer">About Us</button></li>
              <li><button onClick={() => onNavigateSection('focus')} className="hover:text-white transition-colors cursor-pointer">Focus Areas</button></li>
              <li><button onClick={() => onNavigateSection('stories')} className="hover:text-white transition-colors cursor-pointer">Impact Stories</button></li>
              <li><button onClick={() => onNavigateSection('timeline')} className="hover:text-white transition-colors cursor-pointer">Our Timeline</button></li>
            </ul>
          </div>

          {/* Col 4: Focus Sectors */}
          <div className="space-y-3">
            <h4 className="font-extrabold text-white text-xs uppercase tracking-wider">Core Sectors</h4>
            <ul className="space-y-2">
              <li><button onClick={() => onNavigateSection('focus')} className="hover:text-white transition-colors cursor-pointer">Quality Education</button></li>
              <li><button onClick={() => onNavigateSection('focus')} className="hover:text-white transition-colors cursor-pointer">Emergency Healthcare</button></li>
              <li><button onClick={() => onNavigateSection('focus')} className="hover:text-white transition-colors cursor-pointer">Life on Land Forestry</button></li>
              <li><button onClick={() => onNavigateSection('focus')} className="hover:text-white transition-colors cursor-pointer">Zero Hunger Vans</button></li>
              <li><button onClick={() => onNavigateSection('focus')} className="hover:text-white transition-colors cursor-pointer">Women Empowerment</button></li>
            </ul>
          </div>

          {/* Col 5: Contact Info */}
          <div className="space-y-3">
            <h4 className="font-extrabold text-white text-xs uppercase tracking-wider">Contact HQ</h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#165DFF] shrink-0 mt-0.5" />
                <span>569/169, Near PICCADILY Hotel, Kanpur Road, Singar Nagar Metro Station, Lucknow, UP 226012</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#22C55E] shrink-0" />
                <span>7098555333 / 09136520193 / 9026325402</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#FF7A00] shrink-0" />
                <span>care@dovindia.in</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Rights & Back to Top */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © 2026 DOV INDIA FOUNDATION. All rights reserved. Registered under Sec-8 of The Companies Act 2013.
          </div>
          <div className="flex items-center gap-4">
            <a 
              href="/terms-and-conditions"
              onClick={(e) => {
                e.preventDefault();
                window.history.pushState({}, '', '/terms-and-conditions');
                window.dispatchEvent(new Event('popstate'));
              }} 
              className="hover:text-[#EA580C] transition-colors cursor-pointer underline"
            >
              Terms & Conditions
            </a>
            <span>•</span>
            <a 
              href="/privacy-policy"
              onClick={(e) => {
                e.preventDefault();
                window.history.pushState({}, '', '/privacy-policy');
                window.dispatchEvent(new Event('popstate'));
              }} 
              className="hover:text-[#EA580C] transition-colors cursor-pointer underline"
            >
              Privacy Policy
            </a>
            <span>•</span>
            <button onClick={scrollToTop} className="hover:text-white transition-colors flex items-center gap-1 cursor-pointer">
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>

      <PrivacyPolicyModal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
      />

      <TermsModal
        isOpen={isTermsOpen}
        onClose={() => setIsTermsOpen(false)}
      />
    </footer>
  );
};
