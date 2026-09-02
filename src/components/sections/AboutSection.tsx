import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, CheckCircle2, ArrowRight, Building, BatteryCharging, Gauge, Zap, Compass, Target } from 'lucide-react';
import { Button, SectionTitle } from '../ui/ReusableComponents';

interface AboutSectionProps {
  onOpenTestDrive: () => void;
  onOpenFranchise: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenTestDrive, onOpenFranchise }) => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#F8FAFC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        <SectionTitle
          badge="ABOUT EV DOVINDIA GROUP"
          badgeColor="bg-[#0D6EFD]/10 text-[#0D6EFD] border-[#0D6EFD]/20"
          title="Pioneering Indian Electric Mobility & LFP Battery Technology"
          subtitle="Engineered to provide reliable, zero-emission urban & rural EV scooters backed by PM E-DRIVE subsidies."
        />

        {/* Split Layout */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image Display */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-[32px] overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] bg-gradient-to-b from-slate-900 to-[#1E3A8A] flex items-center justify-center p-6">
              <img
                src="/product (16).png"
                alt="EVDov Electric Mobility E 4 Flagship Scooter"
                className="w-full h-full object-contain filter drop-shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="bg-cyan-500 px-3 py-1 rounded-full text-[10px] font-black uppercase">PM E-DRIVE APPROVED</span>
                <h3 className="text-xl font-black">E 4 High Speed Flagship</h3>
              </div>
            </div>

            {/* Overlapping Badge Card */}
            <div className="absolute -bottom-8 -right-6 bg-white p-6 rounded-[24px] border border-slate-200 shadow-xl max-w-xs hidden sm:block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#EA580C]/10 text-[#EA580C] flex items-center justify-center font-bold">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-black text-[#0F172A]">3-Year Warranty</h4>
                  <p className="text-xs text-slate-500 font-medium">Battery & Motor Guard</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Credentials */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-black text-[#0F172A] leading-tight">
                Empowering India's Transition to Zero-Emission Transit
              </h3>
              <p className="text-base text-slate-600 leading-relaxed font-medium">
                EVDov Electric Mobility is committed to democratizing sustainable electric transport. From high-speed daily commuters to heavy-duty commercial cargo vehicles, our scooters feature swappable LFP batteries and ultra-low running costs of ₹0.15/km.
              </p>
            </div>

            {/* Official Credentials Box */}
            <div className="bg-white p-6 rounded-[24px] border border-slate-200/80 shadow-xs space-y-3">
              <h4 className="text-xs font-black text-[#1E3A8A] uppercase tracking-wider flex items-center gap-2">
                <Building className="w-4 h-4" /> EV Group Core Highlights
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 font-bold pt-1">
                <div><strong>Approved:</strong> PM E-DRIVE 2026 Subsidy</div>
                <div><strong>Battery Tech:</strong> Swappable LFP Cells</div>
                <div><strong>Running Cost:</strong> ₹0.15 / km</div>
                <div><strong>Warranty:</strong> 3 Years / 50,000 km</div>
                <div className="sm:col-span-2 text-slate-500 pt-1 font-medium">
                  <strong>Corporate Helpline:</strong> 7098555333 | WhatsApp Active Support
                </div>
              </div>
            </div>

            {/* Vision & Mission Cards Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-blue-50/60 p-5 rounded-2xl border border-blue-100 space-y-2">
                <div className="flex items-center gap-2 text-[#1E3A8A] font-black text-sm">
                  <Compass className="w-4 h-4" /> OUR VISION
                </div>
                <p className="text-xs text-slate-700 font-semibold leading-relaxed">
                  Make zero-emission electric mobility accessible, affordable, and dependable for every Indian household.
                </p>
              </div>

              <div className="bg-amber-50/60 p-5 rounded-2xl border border-amber-100 space-y-2">
                <div className="flex items-center gap-2 text-[#EA580C] font-black text-sm">
                  <Target className="w-4 h-4" /> OUR MISSION
                </div>
                <p className="text-xs text-slate-700 font-semibold leading-relaxed">
                  Deploy 100,000+ electric scooters, establish battery swapping hubs, and build a nationwide dealership network.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenTestDrive}
                className="px-6 py-3 bg-[#1E3A8A] hover:bg-blue-900 text-white font-extrabold text-xs rounded-xl shadow-md flex items-center gap-2 transition-all cursor-pointer uppercase tracking-wider"
              >
                <Gauge className="w-4 h-4 text-cyan-300" /> Book Free Test Drive
              </button>
              <button
                onClick={onOpenFranchise}
                className="px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-extrabold text-xs rounded-xl border border-slate-200 transition-all cursor-pointer flex items-center gap-2"
              >
                <ArrowRight className="w-4 h-4 text-[#EA580C]" /> Apply Dealership
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
