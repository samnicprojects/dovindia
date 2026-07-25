import React, { useState, useEffect } from 'react';
import { PageMode } from '../types';
import { HOME_HERO_SLIDES, EMERGENCY_ALERT } from '../data/home';
import { PROGRAMMES_DATA } from '../data/programmes';
import { IMPACT_STATS, SUCCESS_STORIES } from '../data/impact';
import { WhatWeDoGrid } from './WhatWeDoSection';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Zap, 
  HeartHandshake, 
  ArrowRight, 
  ShieldAlert, 
  CheckCircle2, 
  Sparkles, 
  Award, 
  ChevronLeft, 
  ChevronRight,
  Sun,
  TreePine,
  Users,
  GraduationCap,
  Ambulance,
  Utensils,
  Leaf,
  Landmark
} from 'lucide-react';

interface HomeSectionProps {
  onNavigate: (mode: PageMode, programmeId?: string) => void;
  onOpenTestDrive: () => void;
  onOpenDonation: (initiativeId?: string) => void;
  onOpenWhatsApp: (intent?: string) => void;
}

export const HomeSection: React.FC<HomeSectionProps> = ({
  onNavigate,
  onOpenTestDrive,
  onOpenDonation,
  onOpenWhatsApp
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HOME_HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const featuredProgrammes = PROGRAMMES_DATA.filter(p => p.featured).slice(0, 6);

  return (
    <div className="space-y-12 bg-white text-[#1F2937] pb-12">
      {/* Hero Carousel Banner - Full Width */}
      <div className="w-full bg-[#1E3A8A] min-h-[500px] sm:min-h-[560px] relative flex items-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 z-0"
          >
            <img 
              src={HOME_HERO_SLIDES[currentSlide].image} 
              alt="Hero banner" 
              className="w-full h-full object-cover opacity-30 mix-blend-overlay"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A8A] via-[#1E3A8A]/90 to-[#1E3A8A]/40"></div>
          </motion.div>
        </AnimatePresence>

        {/* Hero Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 relative z-10 flex flex-col justify-center">
          <div className="max-w-2xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/15 border border-white/20 text-xs text-amber-300 font-bold backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5" />
              <span>DOV INDIA GROUP • DUAL ENGINE VISION</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
              {HOME_HERO_SLIDES[currentSlide].title}
            </h1>

            <p className="text-sm sm:text-base text-blue-100 leading-relaxed font-normal">
              {HOME_HERO_SLIDES[currentSlide].subtitle}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onOpenTestDrive}
                className="btn-primary py-3.5 px-7 text-xs font-bold shadow-lg"
              >
                <Zap className="w-4 h-4" />
                {HOME_HERO_SLIDES[currentSlide].ctaEvText}
              </button>

              <button
                onClick={() => onOpenDonation()}
                className="btn-donate py-3.5 px-7 text-xs font-bold shadow-lg"
              >
                <HeartHandshake className="w-4 h-4" />
                {HOME_HERO_SLIDES[currentSlide].ctaCsrText}
              </button>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="absolute bottom-6 right-6 sm:right-12 z-20 flex items-center gap-2">
          <button
            onClick={() => setCurrentSlide((prev) => (prev - 1 + HOME_HERO_SLIDES.length) % HOME_HERO_SLIDES.length)}
            className="p-3 rounded-xl bg-white/20 hover:bg-white/30 text-white border border-white/20 backdrop-blur-md transition-all"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % HOME_HERO_SLIDES.length)}
            className="p-3 rounded-xl bg-white/20 hover:bg-white/30 text-white border border-white/20 backdrop-blur-md transition-all"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Impact Statistics Counters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {IMPACT_STATS.map((stat) => (
            <div key={stat.id} className="bg-white border border-[#E5E7EB] rounded-2xl p-6 space-y-2 text-center shadow-xs hover:border-[#0D6EFD]/40 transition-all">
              <div className="text-2xl sm:text-4xl font-black text-[#0D6EFD]">
                {stat.number}
              </div>
              <div className="text-xs font-bold text-[#1E3A8A] uppercase tracking-wider">{stat.label}</div>
              <p className="text-[11px] text-[#6B7280] leading-tight">{stat.subtext}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Dual Pillar Gateways (EVDov + NGO) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* EVDov Mobility Card */}
          <div className="bg-white border border-[#E5E7EB] rounded-2xl p-8 space-y-6 relative overflow-hidden shadow-sm hover:shadow-md transition-all">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 text-[#0D6EFD] flex items-center justify-center font-bold">
                <Zap className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-black text-[#1E3A8A]">EVDov Electric Mobility</h2>
              <p className="text-xs text-[#6B7280] leading-relaxed">
                India's high-speed electric 2-wheelers with swappable LFP batteries, 145km real-world range, and PM E-DRIVE subsidy.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs text-[#1F2937] pt-2">
              <div className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#22C55E]" /> PM E-DRIVE Approved</div>
              <div className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#22C55E]" /> ₹0.15 / km Running Cost</div>
              <div className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#22C55E]" /> 120+ Dealerships</div>
              <div className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#22C55E]" /> 3.2 Hrs Fast Charge</div>
            </div>

            <button
              onClick={() => onNavigate('ev')}
              className="btn-primary w-full text-xs py-3"
            >
              Explore Scooter Models & Pricing <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* DOV CSR Foundation Card */}
          <div className="bg-white border border-[#E5E7EB] rounded-2xl p-8 space-y-6 relative overflow-hidden shadow-sm hover:shadow-md transition-all">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-100 text-[#F97316] flex items-center justify-center font-bold">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-black text-[#1E3A8A]">DOV CSR Foundation (NGO)</h2>
              <p className="text-xs text-[#6B7280] leading-relaxed">
                Registered 12A & 80G non-profit organization running 15 grassroots social programmes with 100% tax exemption receipts.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs text-[#1F2937] pt-2">
              <div className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#22C55E]" /> 50,000+ Native Trees</div>
              <div className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#22C55E]" /> 38 Solar Microgrids</div>
              <div className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#22C55E]" /> 100% 80G Tax Deductible</div>
              <div className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#22C55E]" /> Instant PDF Receipt</div>
            </div>

            <button
              onClick={() => onNavigate('programmes')}
              className="btn-donate w-full text-xs py-3"
            >
              Explore 15 NGO Programmes <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* WHAT WE DO Section (Matches user uploaded design) */}
      <WhatWeDoGrid onNavigate={onNavigate} onOpenDonation={onOpenDonation} />

      {/* Featured Programmes Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs text-[#0D6EFD] font-bold uppercase tracking-widest">Grassroots Impact</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1E3A8A]">Featured NGO Programmes</h2>
          </div>
          <button
            onClick={() => onNavigate('programmes')}
            className="text-[#F97316] hover:text-[#EA580C] font-bold text-xs flex items-center gap-1"
          >
            View All 15 Programmes <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {featuredProgrammes.map((prog) => (
            <div key={prog.id} className="bg-white border border-[#E5E7EB] rounded-2xl overflow-hidden hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <img src={prog.image} alt={prog.title} className="w-full h-48 object-cover" referrerPolicy="no-referrer" />
                <div className="p-6 space-y-3">
                  <div className="inline-block px-2.5 py-0.5 rounded bg-blue-50 border border-blue-100 text-[#0D6EFD] text-[10px] font-bold uppercase">
                    {prog.category}
                  </div>
                  <h3 className="text-lg font-bold text-[#1E3A8A]">{prog.title}</h3>
                  <p className="text-xs text-[#6B7280] leading-relaxed">{prog.shortDesc}</p>
                </div>
              </div>

              <div className="p-6 pt-0 space-y-3">
                <div className="text-[11px] text-[#6B7280] font-mono">
                  Impact: <span className="text-[#22C55E] font-bold">{prog.beneficiaries}</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => onNavigate('programmes', prog.id)}
                    className="btn-secondary text-xs py-2 px-3"
                  >
                    Learn More
                  </button>
                  <button
                    onClick={() => onOpenDonation(prog.id)}
                    className="btn-donate text-xs py-2 px-3"
                  >
                    Donate
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Success Stories & Testimonials */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs text-[#0D6EFD] font-bold uppercase tracking-widest">Grassroots Voices</span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1E3A8A]">Verified Impact Stories</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {SUCCESS_STORIES.map((story) => (
            <div key={story.id} className="bg-white border border-[#E5E7EB] rounded-2xl p-6 space-y-4 flex flex-col justify-between shadow-xs hover:shadow-md transition-all">
              <div className="space-y-3">
                <div className="text-[#F97316] text-xs font-bold uppercase tracking-wider">{story.programmeTitle}</div>
                <p className="text-xs text-[#1F2937] italic leading-relaxed">"{story.story}"</p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <img src={story.image} alt={story.name} className="w-10 h-10 rounded-full object-cover border border-gray-200" referrerPolicy="no-referrer" />
                <div>
                  <div className="text-xs font-bold text-[#1E3A8A]">{story.name}</div>
                  <div className="text-[10px] text-[#6B7280]">{story.roleLocation}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
