import React from 'react';
import { PageMode } from '../types';
import { Zap, ShieldCheck, MessageCircle, FileCode, ArrowRight, Mail, Phone, MapPin, Gauge, Building2 } from 'lucide-react';

interface FooterProps {
  onNavigate: (mode: PageMode) => void;
  onOpenTestDrive: () => void;
  onOpenWhatsApp: (intent?: string) => void;
  onOpenLegal: (type: 'terms' | 'privacy') => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenTestDrive,
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
              <Zap className="w-4 h-4 text-[#EA580C]" /> EVDov Electric Mobility
            </div>
            <p className="text-blue-100 text-xs leading-relaxed">
              Engineering India's leading high-speed electric scooters with LFP swappable batteries, 145km range, and PM E-DRIVE subsidies.
            </p>
            <button
              onClick={onOpenTestDrive}
              className="text-amber-300 hover:text-white font-extrabold text-xs flex items-center gap-1 underline underline-offset-4 cursor-pointer"
            >
              Book Free Test Drive <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="space-y-3 border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 md:pl-8">
            <div className="flex items-center gap-2 text-amber-300 font-bold text-sm">
              <Building2 className="w-4 h-4 text-cyan-300" /> Pan-India Dealership Expansion
            </div>
            <p className="text-blue-100 text-xs leading-relaxed">
              Become an authorized EVDov dealer in your territory. Unlock high margins, complete marketing support, and exclusive rights.
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="text-cyan-300 hover:text-white font-extrabold text-xs flex items-center gap-1 underline underline-offset-4 cursor-pointer"
            >
              Apply Dealership Franchise <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <img
                src="/logo.webp"
                alt="EVDov INDIA"
                className="h-9 w-auto object-contain bg-white/90 p-1 rounded-lg"
                referrerPolicy="no-referrer"
              />
              <span className="font-black text-base text-white">EVDov MOBILITY GROUP</span>
            </div>
            <p className="text-xs text-blue-200 leading-relaxed max-w-sm font-medium">
              India's premier electric scooter platform. Empowering riders across the nation with zero-emission, low-cost, high-performance electric vehicles.
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
            <h4 className="font-black text-white text-xs mb-3 uppercase tracking-wider">EV Scooter Models</h4>
            <ul className="space-y-2 font-medium">
              <li><button onClick={() => onNavigate('products')} className="text-amber-300 font-bold hover:underline transition-colors flex items-center gap-1">⚡ All 16+ EV Models</button></li>
              <li><button onClick={() => onNavigate('products')} className="hover:text-white transition-colors">CS 01 (SCROOT)</button></li>
              <li><button onClick={() => onNavigate('products')} className="hover:text-white transition-colors">ZL3002 (MARS)</button></li>
              <li><button onClick={() => onNavigate('products')} className="hover:text-white transition-colors">CS3 (ELITE)</button></li>
              <li><button onClick={onOpenTestDrive} className="text-cyan-300 hover:underline font-bold">Book Test Drive</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-white text-xs mb-3 uppercase tracking-wider">Top Features</h4>
            <ul className="space-y-2 font-medium">
              <li><button onClick={() => onNavigate('products')} className="hover:text-white transition-colors">Swappable LFP Batteries</button></li>
              <li><button onClick={() => onNavigate('products')} className="hover:text-white transition-colors">PM E-DRIVE Subsidies</button></li>
              <li><button onClick={() => onNavigate('products')} className="hover:text-white transition-colors">Dual Disc Brakes</button></li>
              <li><button onClick={() => onNavigate('products')} className="hover:text-white transition-colors">55 km/h Top Speed</button></li>
              <li><button onClick={() => onNavigate('products')} className="hover:text-white transition-colors">₹0.15/km Running Cost</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-white text-xs mb-3 uppercase tracking-wider">Corporate & Info</h4>
            <ul className="space-y-2 font-medium">
              <li><button onClick={() => onNavigate('about')} className="hover:text-white transition-colors">About Us</button></li>
              <li><button onClick={() => onNavigate('blogs')} className="hover:text-white transition-colors">Blogs & EV Guides</button></li>
              <li><button onClick={() => onNavigate('media')} className="hover:text-white transition-colors">Media Coverage</button></li>
              <li><button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors">Contact Us</button></li>
              <li><button onClick={() => onNavigate('ux-blueprint')} className="text-blue-200 font-bold flex items-center gap-1"><FileCode className="w-3 h-3" /> IA Blueprint</button></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-blue-900/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-blue-300 font-medium">
          <div>
            © {new Date().getFullYear()} EVDov Electric Mobility Group (www.dovindia.in). All rights reserved.
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
