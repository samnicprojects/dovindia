import React from 'react';
import { PageMode } from '../types';
import { Zap, HeartHandshake, ShieldCheck, MessageCircle, FileCode, ArrowRight, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  onNavigate: (mode: PageMode) => void;
  onOpenTestDrive: () => void;
  onOpenDonation: () => void;
  onOpenWhatsApp: (intent?: string) => void;
  onOpenLegal: (type: 'terms' | 'privacy') => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenTestDrive,
  onOpenDonation,
  onOpenWhatsApp,
  onOpenLegal
}) => {
  return (
    <footer className="bg-[#1E3A8A] text-blue-100 text-xs border-t border-blue-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Top Dual Pillar Highlights */}
        <div className="grid md:grid-cols-2 gap-8 p-6 bg-white/10 rounded-2xl border border-white/10 backdrop-blur-md">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-white font-bold text-sm">
              <Zap className="w-4 h-4 text-blue-200" /> EVDov Electric Mobility
            </div>
            <p className="text-blue-100 text-xs leading-relaxed">
              Engineering India's leading high-speed electric scooters with LFP swappable batteries, 145km range, and PM E-DRIVE subsidies.
            </p>
            <button
              onClick={onOpenTestDrive}
              className="text-white hover:text-blue-200 font-bold text-xs flex items-center gap-1 underline underline-offset-4"
            >
              Book Free Test Drive <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="space-y-3 border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 md:pl-8">
            <div className="flex items-center gap-2 text-[#F97316] font-bold text-sm">
              <HeartHandshake className="w-4 h-4" /> DOV CSR Foundation (NGO)
            </div>
            <p className="text-blue-100 text-xs leading-relaxed">
              Registered 12A & 80G Non-Profit Foundation driving village afforestation, solar school microgrids, and women skilling.
            </p>
            <button
              onClick={onOpenDonation}
              className="text-[#F97316] hover:text-amber-300 font-bold text-xs flex items-center gap-1 underline underline-offset-4"
            >
              Donate & Get 80G Receipt <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <img
                src="/logo.webp"
                alt="DOV INDIA"
                className="h-9 w-auto object-contain bg-white/90 p-1 rounded-lg"
                referrerPolicy="no-referrer"
              />
              <span className="font-bold text-base text-white">DOV INDIA GROUP</span>
            </div>
            <p className="text-xs text-blue-200 leading-relaxed max-w-sm">
              Unified digital platform for EVDov Mobility and DOV Foundation. Uniting zero-emission sustainable transit with grassroots social transformation.
            </p>
            <div className="flex items-center gap-2 pt-1">
              <button
                onClick={() => onOpenWhatsApp('Footer Contact')}
                className="btn-whatsapp text-xs py-1.5 px-3"
              >
                <MessageCircle className="w-3.5 h-3.5" /> WhatsApp Support
              </button>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white text-xs mb-3 uppercase tracking-wider">EV Mobility</h4>
            <ul className="space-y-2">
              <li><button onClick={() => onNavigate('ev')} className="hover:text-white transition-colors">EVDov Velocity X</button></li>
              <li><button onClick={() => onNavigate('ev')} className="hover:text-white transition-colors">EVDov Spark Eco</button></li>
              <li><button onClick={() => onNavigate('ev')} className="hover:text-white transition-colors">EVDov Cruiser Pro</button></li>
              <li><button onClick={() => onNavigate('ev')} className="hover:text-white transition-colors">Savings Calculator</button></li>
              <li><button onClick={onOpenTestDrive} className="text-blue-200 hover:underline font-semibold">Book Test Drive</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white text-xs mb-3 uppercase tracking-wider">CSR NGO</h4>
            <ul className="space-y-2">
              <li><button onClick={() => onNavigate('csr')} className="hover:text-white transition-colors">Tree Plantation</button></li>
              <li><button onClick={() => onNavigate('csr')} className="hover:text-white transition-colors">Solar Village Schools</button></li>
              <li><button onClick={() => onNavigate('csr')} className="hover:text-white transition-colors">Clean Water Hubs</button></li>
              <li><button onClick={() => onNavigate('csr')} className="hover:text-white transition-colors">Women Skilling</button></li>
              <li><button onClick={onOpenDonation} className="text-[#F97316] hover:underline font-semibold">Donate (80G Tax Exemption)</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white text-xs mb-3 uppercase tracking-wider">Corporate & Info</h4>
            <ul className="space-y-2">
              <li><button onClick={() => onNavigate('about')} className="hover:text-white transition-colors">About Us</button></li>
              <li><button onClick={() => onNavigate('blogs')} className="hover:text-white transition-colors">Blogs & Policy Guides</button></li>
              <li><button onClick={() => onNavigate('media')} className="hover:text-white transition-colors">Media Coverage</button></li>
              <li><button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors">Contact Us</button></li>
              <li><button onClick={() => onNavigate('ux-blueprint')} className="text-blue-200 font-semibold flex items-center gap-1"><FileCode className="w-3 h-3" /> IA Blueprint</button></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-blue-900/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-blue-300">
          <div>
            © 2026 DOV India Group (www.dovindia.in). All rights reserved. Powered by ❤️ Samnic Tech
          </div>
          <div className="flex items-center gap-4">
            <button onClick={() => onOpenLegal('terms')} className="hover:text-white transition-colors">Terms & Conditions</button>
            <span>•</span>
            <button onClick={() => onOpenLegal('privacy')} className="hover:text-white transition-colors">Privacy Policy</button>
          </div>
        </div>
      </div>
    </footer>
  );
};
