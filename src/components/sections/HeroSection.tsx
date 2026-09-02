import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Zap, 
  ShieldCheck, 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  BatteryCharging, 
  Gauge, 
  Building2, 
  Flame,
  Award,
  IndianRupee
} from 'lucide-react';

interface HeroSectionProps {
  onOpenTestDrive: () => void;
  onOpenFranchise: () => void;
  onNavigateProducts: () => void;
}

const HERO_SLIDES = [
  {
    id: 1,
    badge: 'FLAGSHIP SERIES • DEDICATED TO INDIAN ARMY',
    titleLine1: 'Drive the Future of',
    titleGradient: 'Zero-Emission Mobility',
    subtitle: 'Engineering India\'s most advanced electric scooters with LFP swappable batteries, 145km range, PM E-DRIVE government subsidies, and running costs of just ₹0.15/km.',
    image: '/product (1).png',
    modelName: 'CS 01 (SCROOT)',
    price: '₹84,999',
    specsPill: '1200W Motor • 60V/72V 45Amp • 55 Km/h',
    badgeTag: 'INDIAN ARMY EDITION',
    primaryCta: 'Explore 16+ EV Scooter Models',
    primaryAction: 'products',
    statVal: '145 km Range',
    statDesc: 'Per Single Charge',
    badgesList: ['Instant ₹15,000 Govt Subsidy', 'Swappable LFP Smart Battery', '3-Year Warranty']
  },
  {
    id: 2,
    badge: 'HIGH-SPEED HIGHWAY EDITION • 55 KM/H',
    titleLine1: 'Experience Supreme Speed &',
    titleGradient: 'Dual Disc Braking Power',
    subtitle: 'Unmatched 50-55 Km/h top speed powered by high torque 1200W motors and dual hydraulic disc brakes for ultimate highway safety.',
    image: '/product (13).png',
    modelName: 'NINE (CYBER EDITION)',
    price: '₹96,999',
    specsPill: '50-55 Km/h • Dual Disc • 1200W Engine',
    badgeTag: 'HIGH-SPEED SERIES',
    primaryCta: 'View High Speed Scooters',
    primaryAction: 'products',
    statVal: '55 Km/h',
    statDesc: 'Top Speed Acceleration',
    badgesList: ['Dual Wheel Hydraulic Disc Brakes', 'Cyber Aero Paneling', '3.0 Hour Fast Charging']
  },
  {
    id: 3,
    badge: 'GOVERNMENT SUBSIDY CERTIFIED • PM E-DRIVE',
    titleLine1: 'Save Big With Instant',
    titleGradient: '₹15,000 Govt EV Subsidy',
    subtitle: 'PM E-DRIVE 2026 certified green electric mobility. Slash your monthly fuel expenditure and save up to ₹45,000 every single year!',
    image: '/product (4).png',
    modelName: 'CS3 (ELITE)',
    price: '₹88,999',
    specsPill: 'PM E-DRIVE Certified • ₹0.15/km Running Cost',
    badgeTag: 'INSTANT ₹15,000 OFF',
    primaryCta: 'Calculate Your Fuel Savings',
    primaryAction: 'products',
    statVal: '₹45,000 / yr',
    statDesc: 'Average Petrol Savings',
    badgesList: ['Zero Carbon Footprint', 'Low Maintenance Hub Motor', 'Token Deposit ₹999']
  },
  {
    id: 4,
    badge: 'PAN-INDIA FRANCHISE & DEALERSHIP',
    titleLine1: 'Join India\'s Fastest Growing',
    titleGradient: 'EV Dealership Network',
    subtitle: 'Partner with EVDov Electric Mobility. Unlock exclusive territory dealership rights, high profit margins on 16+ models, and complete marketing support.',
    image: '/product (10).png',
    modelName: 'IGOR (KEAGLE PRO) RTO APPROVED',
    price: '₹89,999',
    specsPill: 'Official RTO Approved • Heavy Duty Frame',
    badgeTag: 'DEALERSHIP FRANCHISE',
    primaryCta: 'Apply Dealership Franchise',
    primaryAction: 'franchise',
    statVal: '100% Support',
    statDesc: 'Showroom & Marketing Assistance',
    badgesList: ['Pan-India Territory Rights', 'High Profit Margins', 'Complete Spare Parts Backup']
  }
];

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenTestDrive,
  onOpenFranchise,
  onNavigateProducts
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const activeSlide = HERO_SLIDES[currentSlide];

  return (
    <section 
      id="hero" 
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-16 lg:py-24 bg-[#0F172A] text-white"
    >
      
      {/* Dynamic Background Glow & Grid */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A] via-[#1E3A8A]/90 to-[#0F172A]"></div>
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
      </div>

      {/* Floating Blurred Light Orbs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#0D6EFD]/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#EA580C]/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Animated Slide Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlide.id}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="grid lg:grid-cols-12 gap-12 items-center"
          >

            {/* Left Text Content */}
            <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
              
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 shadow-xs text-xs font-extrabold text-amber-300 backdrop-blur-md"
              >
                <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
                <span>{activeSlide.badge}</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.1]"
              >
                {activeSlide.titleLine1} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-amber-300">
                  {activeSlide.titleGradient}
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium"
              >
                {activeSlide.subtitle}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2"
              >
                <button
                  onClick={() => {
                    if (activeSlide.primaryAction === 'franchise') onOpenFranchise();
                    else onNavigateProducts();
                  }}
                  className="px-7 py-4 bg-gradient-to-r from-[#EA580C] to-[#f97316] hover:from-[#c2410c] hover:to-[#ea580c] text-white font-black text-sm rounded-2xl shadow-xl flex items-center gap-2 transition-all cursor-pointer uppercase tracking-wider group"
                >
                  <Zap className="w-5 h-5 text-amber-300" />
                  <span>{activeSlide.primaryCta}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={onOpenTestDrive}
                  className="px-7 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-black text-sm rounded-2xl backdrop-blur-md transition-all cursor-pointer flex items-center gap-2"
                >
                  <Gauge className="w-5 h-5 text-cyan-300" />
                  <span>Book Free Test Drive</span>
                </button>
              </motion.div>

              {/* Micro Badges */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-4 text-xs font-bold text-slate-300"
              >
                {activeSlide.badgesList.map((badgeText, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>{badgeText}</span>
                  </div>
                ))}
              </motion.div>

            </div>

            {/* Right Floating Scooter Display Image */}
            <div className="lg:col-span-5 relative flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative w-full max-w-md bg-gradient-to-b from-white/10 to-white/5 border border-white/20 rounded-[36px] p-6 shadow-2xl backdrop-blur-xl"
              >
                <img
                  src={activeSlide.image}
                  alt={activeSlide.modelName}
                  className="w-full h-auto object-contain filter drop-shadow-2xl transition-transform hover:scale-105 duration-500 min-h-[220px]"
                />
                
                <div className="mt-4 pt-4 border-t border-white/10 text-white space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="bg-[#EA580C] px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider">
                      {activeSlide.badgeTag}
                    </span>
                    <span className="text-amber-300 font-black text-base">{activeSlide.price}</span>
                  </div>
                  <h3 className="text-xl font-black">{activeSlide.modelName}</h3>
                  <p className="text-xs text-slate-300 font-medium">{activeSlide.specsPill}</p>
                </div>
              </motion.div>

              {/* Floating Glass Stat Card */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute -bottom-6 -left-6 bg-slate-900/90 backdrop-blur-xl p-4 rounded-2xl border border-slate-700/80 shadow-2xl flex items-center gap-3 z-20"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                  <BatteryCharging className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-black text-white">{activeSlide.statVal}</div>
                  <div className="text-[10px] text-slate-400 font-medium">{activeSlide.statDesc}</div>
                </div>
              </motion.div>

            </div>

          </motion.div>
        </AnimatePresence>

        {/* Carousel Navigation Controls & Slide Dots */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          
          {/* Slide Dots Indicator */}
          <div className="flex items-center gap-2">
            {HERO_SLIDES.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentSlide === index ? 'w-10 bg-amber-400' : 'w-2.5 bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
            <span className="ml-3 text-xs font-mono font-bold text-slate-400">
              0{currentSlide + 1} / 0{HERO_SLIDES.length}
            </span>
          </div>

          {/* Previous / Next Arrow Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              aria-label="Previous Slide"
              className="p-3 rounded-2xl bg-white/10 hover:bg-white/20 text-white border border-white/15 backdrop-blur-md transition-all cursor-pointer shadow-md"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next Slide"
              className="p-3 rounded-2xl bg-[#EA580C] hover:bg-[#c2410c] text-white transition-all cursor-pointer shadow-md"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
