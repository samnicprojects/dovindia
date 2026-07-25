import React, { useState } from 'react';
import { CSR_INITIATIVES } from '../data/mockData';
import { CSRInitiative } from '../types';
import { 
  HeartHandshake, 
  Trees, 
  Sun, 
  Droplets, 
  Users, 
  CheckCircle2, 
  ShieldCheck, 
  FileText, 
  ArrowRight, 
  MessageCircle, 
  Building, 
  Sparkles,
  Download,
  Award,
  Globe
} from 'lucide-react';

interface CsrNgoSectionProps {
  onOpenDonation: (initiativeId?: string) => void;
  onOpenWhatsApp: (intent?: string) => void;
}

export const CsrNgoSection: React.FC<CsrNgoSectionProps> = ({
  onOpenDonation,
  onOpenWhatsApp
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Environment', 'Solar Energy', 'Clean Water', 'Empowerment'];

  const filteredInitiatives = activeCategory === 'All'
    ? CSR_INITIATIVES
    : CSR_INITIATIVES.filter(i => i.category === activeCategory);

  return (
    <div className="bg-[#F8FAFC] text-[#1F2937] min-h-screen">
      {/* CSR Hero Header - Deep Blue (#1E3A8A) */}
      <div className="relative bg-[#1E3A8A] text-white border-b border-blue-900/40 pt-10 pb-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs text-blue-100 font-semibold">
                <HeartHandshake className="w-3.5 h-3.5 text-orange-300" />
                DOV FOUNDATION • NON-PROFIT CSR ENTITY
              </div>
              <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
                Empowering Rural India Through <br />
                <span className="text-[#F97316]">
                  Sustainable Social & Green Action
                </span>
              </h1>
              <p className="text-sm text-blue-100 leading-relaxed">
                Registered 12A & 80G Non-Profit Foundation. Driving afforestation, solar school electrification, clean drinking water filtration, and women tech skilling across India.
              </p>
            </div>

            {/* Quick Action Group */}
            <div className="flex flex-wrap sm:flex-nowrap gap-3">
              <button
                onClick={() => onOpenDonation()}
                className="btn-donate w-full sm:w-auto px-6 py-3.5 text-xs shadow-md"
              >
                <HeartHandshake className="w-4 h-4" />
                Donate & Save Tax (80G)
              </button>
              <button
                onClick={() => onOpenWhatsApp('Corporate CSR Tie-Up Inquiry')}
                className="w-full sm:w-auto bg-white hover:bg-blue-50 text-[#1E3A8A] font-bold px-5 py-3.5 rounded-2xl text-xs flex items-center justify-center gap-2 transition-colors shadow-md"
              >
                <Building className="w-4 h-4 text-[#0D6EFD]" />
                Corporate CSR Tie-Up
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Live Impact Counters Ticker */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white border border-[#E5E7EB] rounded-2xl p-5 text-center hover:border-[#22C55E] transition-colors shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-green-50 text-[#22C55E] mx-auto flex items-center justify-center mb-3">
              <Trees className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-[#22C55E]">54,200+</div>
            <div className="text-xs text-[#6B7280] font-medium mt-1">Native Trees Planted</div>
          </div>

          <div className="bg-white border border-[#E5E7EB] rounded-2xl p-5 text-center hover:border-[#F97316] transition-colors shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#F97316] mx-auto flex items-center justify-center mb-3">
              <Sun className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-[#F97316]">38 Schools</div>
            <div className="text-xs text-[#6B7280] font-medium mt-1">Solar Microgrids Installed</div>
          </div>

          <div className="bg-white border border-[#E5E7EB] rounded-2xl p-5 text-center hover:border-[#0D6EFD] transition-colors shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0D6EFD] mx-auto flex items-center justify-center mb-3">
              <Droplets className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-[#0D6EFD]">8.5 Million</div>
            <div className="text-xs text-[#6B7280] font-medium mt-1">Liters Clean Water Delivered</div>
          </div>

          <div className="bg-white border border-[#E5E7EB] rounded-2xl p-5 text-center hover:border-purple-500 transition-colors shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 mx-auto flex items-center justify-center mb-3">
              <Users className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-purple-600">640 Women</div>
            <div className="text-xs text-[#6B7280] font-medium mt-1">Certified EV Technicians</div>
          </div>
        </div>
      </div>

      {/* CSR Initiatives & Funding Progress Hub */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1E3A8A]">
              Active CSR Initiatives & Impact Projects
            </h2>
            <p className="text-xs text-[#6B7280] mt-1">Every rupee contributed is backed by 100% transparent tracking and 80G tax exemption.</p>
          </div>

          {/* Filter Categories */}
          <div className="flex items-center gap-1.5 overflow-x-auto p-1.5 bg-white rounded-xl border border-[#E5E7EB] shadow-sm">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
                  activeCategory === cat
                    ? 'bg-[#0D6EFD] text-white shadow-sm'
                    : 'text-[#6B7280] hover:text-[#1F2937] hover:bg-gray-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Initiatives Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {filteredInitiatives.map((item) => {
            const percentRaised = Math.min(100, Math.round((item.raisedAmount / item.targetAmount) * 100));

            return (
              <div
                key={item.id}
                className="card-ngo overflow-hidden flex flex-col justify-between"
              >
                <div>
                  {/* Card Image */}
                  <div className="relative h-48 sm:h-56 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur border border-gray-200 text-[#0D6EFD] font-bold text-[10px] uppercase px-3 py-1 rounded-full shadow-sm">
                      {item.category}
                    </div>
                    <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur text-[#1F2937] text-[11px] font-medium px-2.5 py-1 rounded-lg shadow-sm">
                      📍 {item.location}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-bold text-[#1E3A8A] hover:text-[#0D6EFD] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#6B7280] leading-relaxed">
                      {item.shortDesc}
                    </p>

                    {/* Funding Progress Bar */}
                    <div className="space-y-1.5 pt-2">
                      <div className="flex justify-between text-xs font-semibold">
                        <span className="text-[#6B7280]">Funded: <strong className="text-[#22C55E]">₹{item.raisedAmount.toLocaleString('en-IN')}</strong></span>
                        <span className="text-[#F97316] font-bold">{percentRaised}%</span>
                      </div>
                      <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden p-0.5 border border-[#E5E7EB]">
                        <div
                          className="h-full bg-gradient-to-r from-[#F97316] to-[#22C55E] rounded-full transition-all duration-500"
                          style={{ width: `${percentRaised}%` }}
                        />
                      </div>
                      <div className="text-[10px] text-[#6B7280] text-right">Target Goal: ₹{item.targetAmount.toLocaleString('en-IN')}</div>
                    </div>

                    {/* Impact Metrics Pills */}
                    <div className="grid grid-cols-3 gap-2 pt-2">
                      {item.impactMetrics.map((m, i) => (
                        <div key={i} className="bg-[#F8FAFC] p-2 rounded-xl text-center border border-[#E5E7EB]">
                          <div className="text-xs font-extrabold text-[#0D6EFD]">{m.value}</div>
                          <div className="text-[9px] text-[#6B7280] mt-0.5">{m.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer CTAs */}
                <div className="p-6 pt-0 space-y-2 border-t border-gray-100 mt-4">
                  <button
                    onClick={() => onOpenDonation(item.id)}
                    className="btn-donate w-full py-3 text-xs"
                  >
                    <HeartHandshake className="w-4 h-4" />
                    Donate to This Project & Get 80G Tax Exemption
                  </button>

                  <button
                    onClick={() => onOpenWhatsApp(`Volunteer inquiry for ${item.title}`)}
                    className="btn-whatsapp w-full py-2 text-xs justify-center"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    Inquire as Volunteer / Partner
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 80G Tax Exemption Info Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-[#1E3A8A] text-white border border-blue-900/40 rounded-3xl p-6 sm:p-8 grid md:grid-cols-12 gap-6 items-center shadow-xl">
          <div className="md:col-span-8 space-y-2">
            <div className="flex items-center gap-2 text-orange-300 font-bold text-xs uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-[#F97316]" />
              100% Tax Deductible Under Section 80G
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              Instant 80G Tax Exemption Receipts Delivered to Your Email
            </h3>
            <p className="text-xs text-blue-100 leading-relaxed">
              All financial donations to DOV Foundation are eligible for 50% tax deduction under Section 80G of the Indian Income Tax Act. Every online transaction generates an instant PDF tax receipt with your PAN number.
            </p>
          </div>
          <div className="md:col-span-4 flex justify-end">
            <button
              onClick={() => onOpenDonation()}
              className="btn-donate w-full sm:w-auto px-6 py-3.5 text-xs shadow-md"
            >
              <Download className="w-4 h-4" />
              Donate Now & Download Receipt
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
