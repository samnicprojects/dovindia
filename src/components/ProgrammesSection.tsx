import React, { useState, useEffect } from 'react';
import { PROGRAMMES_DATA } from '../data/programmes';
import { ProgrammeItem } from '../types';
import { 
  Sparkles, 
  Search, 
  HeartHandshake, 
  ArrowRight, 
  CheckCircle2, 
  MapPin, 
  Users, 
  Ambulance, 
  GraduationCap, 
  HeartPulse, 
  ShieldAlert, 
  BarChart3, 
  Utensils, 
  TreePine, 
  Smile, 
  Home, 
  Briefcase, 
  Wrench, 
  LifeBuoy, 
  Stethoscope, 
  Leaf,
  ChevronLeft,
  Share2,
  ShieldCheck,
  Building2,
  Quote
} from 'lucide-react';

interface ProgrammesSectionProps {
  initialProgrammeId?: string;
  onOpenDonation: (initiativeId?: string) => void;
  onOpenWhatsApp: (intent?: string) => void;
}

const getProgrammeIcon = (iconName: string) => {
  switch (iconName) {
    case 'Ambulance': return <Ambulance className="w-5 h-5 text-rose-500" />;
    case 'GraduationCap': return <GraduationCap className="w-5 h-5 text-cyan-500" />;
    case 'HeartPulse': return <HeartPulse className="w-5 h-5 text-emerald-500" />;
    case 'ShieldAlert': return <ShieldAlert className="w-5 h-5 text-amber-500" />;
    case 'BarChart3': return <BarChart3 className="w-5 h-5 text-blue-500" />;
    case 'Utensils': return <Utensils className="w-5 h-5 text-orange-500" />;
    case 'TreePine': return <TreePine className="w-5 h-5 text-green-500" />;
    case 'Users': return <Users className="w-5 h-5 text-pink-500" />;
    case 'Smile': return <Smile className="w-5 h-5 text-purple-500" />;
    case 'Home': return <Home className="w-5 h-5 text-yellow-500" />;
    case 'Briefcase': return <Briefcase className="w-5 h-5 text-teal-500" />;
    case 'Wrench': return <Wrench className="w-5 h-5 text-indigo-500" />;
    case 'LifeBuoy': return <LifeBuoy className="w-5 h-5 text-red-500" />;
    case 'Stethoscope': return <Stethoscope className="w-5 h-5 text-cyan-400" />;
    case 'Leaf': return <Leaf className="w-5 h-5 text-emerald-400" />;
    default: return <Sparkles className="w-5 h-5 text-amber-500" />;
  }
};

export const ProgrammesSection: React.FC<ProgrammesSectionProps> = ({
  initialProgrammeId,
  onOpenDonation,
  onOpenWhatsApp
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedProgramme, setSelectedProgramme] = useState<ProgrammeItem | null>(
    initialProgrammeId ? PROGRAMMES_DATA.find(p => p.id === initialProgrammeId) || null : null
  );

  // Sync selected programme if initialProgrammeId prop changes from parent
  useEffect(() => {
    if (initialProgrammeId) {
      const prog = PROGRAMMES_DATA.find(p => p.id === initialProgrammeId);
      if (prog) {
        setSelectedProgramme(prog);
      }
    }
  }, [initialProgrammeId]);

  const categories = ['All', 'Healthcare', 'Education', 'Environment', 'Food Security', 'Livelihood', 'Disaster Relief', 'Clean Water', 'Solar Energy'];

  const filteredProgrammes = PROGRAMMES_DATA.filter((p) => {
    const matchesCategory = selectedCategory === 'All' || p.category.toLowerCase().includes(selectedCategory.toLowerCase());
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || p.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-[#F8FAFC] text-[#1F2937] min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

        {/* DETAILED PROGRAMME PAGE VIEW */}
        {selectedProgramme ? (
          <div className="space-y-8 animate-in fade-in duration-300">
            {/* Top Navigation Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-gray-200 shadow-xs">
              <button
                onClick={() => setSelectedProgramme(null)}
                className="inline-flex items-center gap-2 text-xs font-bold text-[#1E3A8A] hover:text-[#0D6EFD] transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                Back to All Programmes
              </button>
              <div className="flex items-center gap-2 text-xs">
                <span className="bg-emerald-50 text-[#22C55E] px-3 py-1 rounded-full font-bold border border-emerald-200 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" /> 80G Certified Tax Deductible
                </span>
                <button 
                  onClick={() => onOpenWhatsApp(`Share Program: ${selectedProgramme.title}`)}
                  className="p-2 hover:bg-gray-100 rounded-xl text-gray-500 transition-colors"
                  title="Share Programme"
                >
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Main Hero Header Card */}
            <div className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden grid lg:grid-cols-12 gap-0">
              <div className="lg:col-span-5 relative min-h-[320px] lg:min-h-full">
                <img 
                  src={selectedProgramme.image} 
                  alt={selectedProgramme.title} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full border border-gray-200 text-xs font-bold text-[#0D6EFD] flex items-center gap-2 shadow-sm">
                  {getProgrammeIcon(selectedProgramme.iconName)}
                  <span>{selectedProgramme.category}</span>
                </div>
              </div>

              <div className="lg:col-span-7 p-6 sm:p-10 space-y-6 flex flex-col justify-between">
                <div className="space-y-4">
                  <h1 className="text-3xl sm:text-4xl font-black text-[#1E3A8A] leading-tight">
                    {selectedProgramme.title}
                  </h1>

                  <p className="text-sm text-[#4B5563] leading-relaxed">
                    {selectedProgramme.fullDesc}
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                    <div className="bg-[#F8FAFC] p-3 rounded-xl border border-gray-200">
                      <span className="text-[10px] text-gray-500 font-bold block uppercase">Verified Impact</span>
                      <strong className="text-xs text-[#22C55E] font-extrabold">{selectedProgramme.beneficiaries}</strong>
                    </div>
                    <div className="bg-[#F8FAFC] p-3 rounded-xl border border-gray-200">
                      <span className="text-[10px] text-gray-500 font-bold block uppercase">Active Locations</span>
                      <strong className="text-xs text-[#0D6EFD] font-extrabold">{selectedProgramme.locationsCount} Districts</strong>
                    </div>
                    <div className="bg-[#F8FAFC] p-3 rounded-xl border border-gray-200 col-span-2 sm:col-span-1">
                      <span className="text-[10px] text-gray-500 font-bold block uppercase">Tax Benefit</span>
                      <strong className="text-xs text-[#F97316] font-extrabold">100% 80G Exempt</strong>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => onOpenDonation(selectedProgramme.id)}
                    className="btn-donate py-3.5 px-6 text-sm flex-1 sm:flex-initial"
                  >
                    <HeartHandshake className="w-4 h-4" />
                    Donate to This Programme & Get 80G Receipt
                  </button>
                  <button
                    onClick={() => onOpenWhatsApp(`Inquiry regarding ${selectedProgramme.title}`)}
                    className="btn-whatsapp py-3.5 px-5 text-sm"
                  >
                    WhatsApp Query
                  </button>
                </div>
              </div>
            </div>

            {/* Core Objectives & Impact Breakdown Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Objectives List */}
              {selectedProgramme.objectives && selectedProgramme.objectives.length > 0 && (
                <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-xs space-y-4">
                  <h3 className="text-xl font-extrabold text-[#1E3A8A] flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#0D6EFD]" />
                    Key Objectives & Action Pillars
                  </h3>
                  <div className="space-y-3 pt-2">
                    {selectedProgramme.objectives.map((obj, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3 rounded-2xl bg-[#F8FAFC] border border-gray-100">
                        <span className="w-6 h-6 rounded-full bg-[#0D6EFD]/10 text-[#0D6EFD] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <p className="text-xs font-semibold text-[#374151] leading-relaxed">{obj}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Verified Quantitative Metrics */}
              {selectedProgramme.impactMetrics && selectedProgramme.impactMetrics.length > 0 && (
                <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-xs space-y-4">
                  <h3 className="text-xl font-extrabold text-[#1E3A8A] flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-[#22C55E]" />
                    Quantified Field Impact Metrics
                  </h3>
                  <div className="grid grid-cols-2 gap-4 pt-2">
                    {selectedProgramme.impactMetrics.map((m, idx) => (
                      <div key={idx} className="bg-gradient-to-br from-blue-50/50 to-emerald-50/50 p-4 rounded-2xl border border-blue-100 space-y-1">
                        <span className="text-xs text-gray-500 font-medium block">{m.label}</span>
                        <span className="text-xl font-black text-[#1E3A8A]">{m.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Beneficiary Story Section */}
            {selectedProgramme.beneficiaryStory && (
              <div className="bg-gradient-to-r from-[#1E3A8A] to-blue-900 text-white rounded-3xl p-6 sm:p-10 shadow-md relative overflow-hidden">
                <Quote className="w-24 h-24 absolute -bottom-6 -right-6 text-white/10" />
                <div className="max-w-3xl space-y-4 relative z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-blue-200 text-xs font-semibold border border-white/20">
                    <HeartPulse className="w-3.5 h-3.5 text-pink-400" />
                    <span>Real Field Beneficiary Story</span>
                  </div>
                  <p className="text-base sm:text-xl italic font-serif leading-relaxed text-blue-50">
                    "{selectedProgramme.beneficiaryStory.quote}"
                  </p>
                  <div className="pt-2">
                    <strong className="block text-sm font-bold text-white">{selectedProgramme.beneficiaryStory.name}</strong>
                    <span className="text-xs text-blue-200 flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3.5 h-3.5 text-blue-300" /> {selectedProgramme.beneficiaryStory.location}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Bottom Quick Switcher Bar for All 15 Programmes */}
            <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-extrabold text-[#1E3A8A]">Explore Other NGO Programmes</h4>
                <button onClick={() => setSelectedProgramme(null)} className="text-xs text-[#0D6EFD] font-bold hover:underline">
                  View Full Grid
                </button>
              </div>
              <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-thin">
                {PROGRAMMES_DATA.map((prog) => (
                  <button
                    key={prog.id}
                    onClick={() => setSelectedProgramme(prog)}
                    className={`p-3 rounded-2xl border text-left shrink-0 w-64 transition-all ${
                      selectedProgramme.id === prog.id 
                        ? 'border-[#0D6EFD] bg-blue-50/50 shadow-xs ring-1 ring-[#0D6EFD]' 
                        : 'border-gray-200 bg-[#F8FAFC] hover:border-gray-300 hover:bg-white'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      {getProgrammeIcon(prog.iconName)}
                      <span className="text-[10px] font-bold text-gray-500 uppercase">{prog.category}</span>
                    </div>
                    <h5 className="text-xs font-bold text-[#1E3A8A] truncate">{prog.title}</h5>
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* ALL 15 PROGRAMMES GRID VIEW */
          <div className="space-y-10">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <h1 className="text-3xl sm:text-5xl font-black text-[#1E3A8A]">
                Grassroots CSR Initiatives & Social Impact
              </h1>

              <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed">
                Click any CSR initiative to open its detailed page. Every donor contribution qualifies for <strong className="text-[#0D6EFD]">100% 80G Tax Deductibility</strong> under Section 80G of the Income Tax Act, 1961.
              </p>
            </div>

            {/* Filters & Search Bar */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white border border-[#E5E7EB] p-4 rounded-2xl shadow-sm">
              <div className="relative w-full md:w-80">
                <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#6B7280]" />
                <input
                  type="text"
                  placeholder="Search programmes..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl pl-10 pr-4 py-2.5 text-xs text-[#1F2937] focus:outline-none focus:border-[#0D6EFD]"
                />
              </div>

              <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 text-xs">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-xl font-bold transition-all whitespace-nowrap ${
                      selectedCategory === cat 
                        ? 'bg-[#0D6EFD] text-white shadow-sm' 
                        : 'bg-[#F8FAFC] text-[#6B7280] hover:text-[#1F2937] border border-[#E5E7EB]'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* 15 Programmes Cards Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProgrammes.map((prog) => (
                <div
                  key={prog.id}
                  className="card-ngo overflow-hidden flex flex-col justify-between group hover:border-blue-300 transition-all duration-200"
                >
                  <div>
                    <div className="relative h-48 overflow-hidden cursor-pointer" onClick={() => setSelectedProgramme(prog)}>
                      <img
                        src={prog.image}
                        alt={prog.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur border border-gray-200 text-[10px] font-bold text-[#0D6EFD] flex items-center gap-1.5 shadow-sm">
                        {getProgrammeIcon(prog.iconName)}
                        <span>{prog.category}</span>
                      </div>
                    </div>

                    <div className="p-6 space-y-3">
                      <h3 
                        onClick={() => setSelectedProgramme(prog)}
                        className="text-lg font-bold text-[#1E3A8A] group-hover:text-[#0D6EFD] transition-colors cursor-pointer"
                      >
                        {prog.title}
                      </h3>
                      <p className="text-xs text-[#6B7280] leading-relaxed line-clamp-3">
                        {prog.shortDesc}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0 space-y-3">
                    <div className="text-[11px] text-[#6B7280] font-mono flex items-center justify-between border-t border-gray-100 pt-3">
                      <span>Impact: <strong className="text-[#22C55E]">{prog.beneficiaries}</strong></span>
                      <span>{prog.locationsCount} Centers</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => setSelectedProgramme(prog)}
                        className="btn-secondary py-2.5 text-xs justify-center font-bold"
                      >
                        View Page
                      </button>
                      <button
                        onClick={() => onOpenDonation(prog.id)}
                        className="btn-donate py-2.5 text-xs justify-center"
                      >
                        <HeartHandshake className="w-3.5 h-3.5" /> Donate
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
