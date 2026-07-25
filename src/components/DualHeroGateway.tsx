import React from 'react';
import { PageMode } from '../types';
import { Zap, HeartHandshake, ShieldCheck, ArrowRight, Sparkles, Award, MapPin, Users, BatteryCharging, Trees, FileCode, CheckCircle2 } from 'lucide-react';

interface DualHeroGatewayProps {
  onSelectMode: (mode: PageMode) => void;
  onOpenTestDrive: () => void;
  onOpenDonation: () => void;
}

export const DualHeroGateway: React.FC<DualHeroGatewayProps> = ({
  onSelectMode,
  onOpenTestDrive,
  onOpenDonation
}) => {
  return (
    <div className="relative overflow-hidden bg-white text-[#1F2937] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Intro Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs text-[#0D6EFD] font-bold">
            <Sparkles className="w-3.5 h-3.5 text-[#0D6EFD]" />
            <span>DOV INDIA GROUP PORTAL</span>
            <span>•</span>
            <span>Sustainable Mobility & Social Impact</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-[#1E3A8A] leading-tight">
            One Unified Platform. <br />
            <span className="text-[#0D6EFD]">
              Two Pillars of Change.
            </span>
          </h1>

          <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed font-normal">
            Select your journey below: Explore our cutting-edge <strong className="text-[#0D6EFD] font-semibold">EVDov Electric Scooters</strong> or contribute to our <strong className="text-[#F97316] font-semibold">DOV CSR Foundation</strong> environmental & community initiatives.
          </p>
        </div>

        {/* Dual Split Cards Gateway */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {/* Card 1: EVDov Electric Mobility */}
          <div className="group relative card-ngo p-6 sm:p-8 transition-all duration-300 hover:shadow-xl flex flex-col justify-between overflow-hidden">
            {/* Corner Badge */}
            <div className="absolute top-0 right-0 bg-[#0D6EFD] text-white font-black text-[10px] uppercase tracking-wider px-4 py-1 rounded-bl-xl shadow-xs">
              ELECTRIC MOBILITY
            </div>

            <div>
              <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#0D6EFD] mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-8 h-8" />
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1E3A8A] mb-3 tracking-tight group-hover:text-[#0D6EFD] transition-colors">
                EVDov Electric Mobility
              </h2>

              <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed mb-6">
                Redefining Indian urban commuting with high-speed LFP swappable battery scooters, smart connectivity, 145km real-world range, and zero operating emissions.
              </p>

              {/* Key Highlights Pill Grid */}
              <div className="grid grid-cols-2 gap-2.5 mb-8">
                <div className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl p-3">
                  <div className="text-[11px] text-[#6B7280] font-medium">Top Speed</div>
                  <div className="text-lg font-black text-[#0D6EFD]">95 km/h</div>
                </div>
                <div className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl p-3">
                  <div className="text-[11px] text-[#6B7280] font-medium">Max Range</div>
                  <div className="text-lg font-black text-emerald-600">145 km</div>
                </div>
                <div className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl p-3">
                  <div className="text-[11px] text-[#6B7280] font-medium">Battery Type</div>
                  <div className="text-xs font-bold text-[#1F2937] mt-1">LFP Swappable</div>
                </div>
                <div className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl p-3">
                  <div className="text-[11px] text-[#6B7280] font-medium">Running Cost</div>
                  <div className="text-xs font-bold text-emerald-600 mt-1">₹0.15 / km</div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2.5 pt-4 border-t border-gray-100">
              <button
                onClick={() => onSelectMode('ev')}
                className="w-full btn-primary py-3.5 px-6 text-xs font-bold shadow-md flex items-center justify-center gap-2"
              >
                Explore Electric Scooters
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenTestDrive}
                className="w-full bg-[#F8FAFC] hover:bg-gray-100 border border-[#E5E7EB] text-[#0D6EFD] font-bold py-2.5 px-4 rounded-xl text-xs flex items-center justify-center gap-2 transition-colors"
              >
                <Zap className="w-3.5 h-3.5 text-[#0D6EFD]" />
                Book Free Test Drive Near You
              </button>
            </div>
          </div>

          {/* Card 2: DOV CSR Foundation (NGO) */}
          <div className="group relative card-ngo p-6 sm:p-8 transition-all duration-300 hover:shadow-xl flex flex-col justify-between overflow-hidden">
            {/* Corner Badge */}
            <div className="absolute top-0 right-0 bg-[#F97316] text-white font-black text-[10px] uppercase tracking-wider px-4 py-1 rounded-bl-xl shadow-xs">
              NON-PROFIT & NGO
            </div>

            <div>
              <div className="w-14 h-14 rounded-2xl bg-orange-50 border border-orange-200 flex items-center justify-center text-[#F97316] mb-6 group-hover:scale-110 transition-transform">
                <HeartHandshake className="w-8 h-8" />
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1E3A8A] mb-3 tracking-tight group-hover:text-[#F97316] transition-colors">
                DOV CSR Foundation
              </h2>

              <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed mb-6">
                Creating lasting social impact through village afforestation, solar-powered school microgrids, clean drinking water filtration hubs, and women technical empowerment.
              </p>

              {/* Key Highlights Pill Grid */}
              <div className="grid grid-cols-2 gap-2.5 mb-8">
                <div className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl p-3">
                  <div className="text-[11px] text-[#6B7280] font-medium">Trees Planted</div>
                  <div className="text-lg font-black text-[#F97316]">54,200+</div>
                </div>
                <div className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl p-3">
                  <div className="text-[11px] text-[#6B7280] font-medium">Solar Schools</div>
                  <div className="text-lg font-black text-emerald-600">38 Schools</div>
                </div>
                <div className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl p-3">
                  <div className="text-[11px] text-[#6B7280] font-medium">Clean Water Hubs</div>
                  <div className="text-xs font-bold text-[#1F2937] mt-1">22 Villages</div>
                </div>
                <div className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl p-3">
                  <div className="text-[11px] text-[#6B7280] font-medium">Tax Benefit</div>
                  <div className="text-xs font-bold text-[#F97316] mt-1">100% 80G Exempt</div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2.5 pt-4 border-t border-gray-100">
              <button
                onClick={() => onSelectMode('csr')}
                className="w-full btn-donate py-3.5 px-6 text-xs font-bold shadow-md flex items-center justify-center gap-2"
              >
                View CSR Projects & Impact
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenDonation}
                className="w-full bg-[#F8FAFC] hover:bg-gray-100 border border-[#E5E7EB] text-[#F97316] font-bold py-2.5 px-4 rounded-xl text-xs flex items-center justify-center gap-2 transition-colors"
              >
                <HeartHandshake className="w-3.5 h-3.5 text-[#F97316]" />
                Make Tax-Deductible Donation (80G)
              </button>
            </div>
          </div>
        </div>

        {/* Global Key Proof Metrics Banner */}
        <div className="mt-14 max-w-6xl mx-auto card-ngo p-4 sm:p-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-2 border-r border-gray-100 last:border-0">
            <div className="text-2xl font-black text-[#0D6EFD]">120+</div>
            <div className="text-[11px] text-[#6B7280] font-medium mt-0.5">Authorized Dealerships</div>
          </div>
          <div className="p-2 border-r border-gray-100 last:border-0">
            <div className="text-2xl font-black text-emerald-600">100%</div>
            <div className="text-[11px] text-[#6B7280] font-medium mt-0.5">Clean Green Mobility</div>
          </div>
          <div className="p-2 border-r border-gray-100 last:border-0">
            <div className="text-2xl font-black text-[#F97316]">₹8.5 Cr+</div>
            <div className="text-[11px] text-[#6B7280] font-medium mt-0.5">CSR Capital Deployed</div>
          </div>
          <div className="p-2">
            <div className="text-2xl font-black text-purple-600">80G</div>
            <div className="text-[11px] text-[#6B7280] font-medium mt-0.5">Certified Tax Exemption</div>
          </div>
        </div>

        {/* Blueprint & Wireframe Link Footer Banner */}
        <div className="mt-8 text-center">
          <button
            onClick={() => onSelectMode('ux-blueprint')}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-50 border border-blue-200 text-[#0D6EFD] text-xs font-semibold hover:bg-blue-100 transition-all"
          >
            <FileCode className="w-4 h-4 text-[#0D6EFD]" />
            <span>Looking for Sitemap, UX Strategy & Wireframe Blueprint? Click here to view management specs</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
