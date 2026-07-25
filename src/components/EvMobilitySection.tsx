import React, { useState } from 'react';
import { SCOOTERS_DATA } from '../data/scooters';
import { ScooterModel } from '../types';
import { 
  Zap, 
  BatteryCharging, 
  Gauge, 
  ShieldCheck, 
  CheckCircle2, 
  Building2, 
  Calculator, 
  Smartphone, 
  MapPin, 
  MessageCircle, 
  ArrowRight,
  Sparkles,
  ChevronRight,
  IndianRupee,
  RefreshCw,
  Award,
  Layers,
  Phone,
  Mail,
  Factory,
  Check,
  Wrench,
  Truck,
  TrendingUp,
  Clock,
  Shield,
  Star,
  FileText,
  User,
  LogIn,
  LogOut,
  Lock,
  Instagram
} from 'lucide-react';
import { EvAuthModal, EvUser } from './EvAuthModal';

interface EvMobilitySectionProps {
  onOpenTestDrive: (scooterId?: string) => void;
  onOpenFranchise: () => void;
  onOpenWhatsApp: (intent?: string) => void;
}

export const EvMobilitySection: React.FC<EvMobilitySectionProps> = ({
  onOpenTestDrive,
  onOpenFranchise,
  onOpenWhatsApp
}) => {
  const [selectedScooterId, setSelectedScooterId] = useState<string>(SCOOTERS_DATA[0].id);
  const [selectedColorIdx, setSelectedColorIdx] = useState<number>(0);
  
  // Auth Modal & User State for EV Scooter Page
  const [isAuthModalOpen, setIsAuthModalOpen] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<EvUser | null>(() => {
    try {
      const saved = localStorage.getItem('dov_ev_current_user');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const handleLogout = () => {
    localStorage.removeItem('dov_ev_current_user');
    setCurrentUser(null);
  };
  
  // Savings Calculator State
  const [dailyKm, setDailyKm] = useState<number>(40);
  const [petrolPrice, setPetrolPrice] = useState<number>(106);
  const [petrolMileage, setPetrolMileage] = useState<number>(42);

  // Active Tab for Dealership Process or Models
  const [activeStep, setActiveStep] = useState<number>(1);

  const selectedScooter = SCOOTERS_DATA.find(s => s.id === selectedScooterId) || SCOOTERS_DATA[0];
  const currentColor = selectedScooter.colors[selectedColorIdx] || selectedScooter.colors[0];

  // Calculation Math
  const monthlyPetrolCost = Math.round((dailyKm * 30 / petrolMileage) * petrolPrice);
  const monthlyEvCost = Math.round((dailyKm * 30 / selectedScooter.rangePerCharge) * 30); // ~₹30 per full charge
  const monthlySavings = monthlyPetrolCost - monthlyEvCost;
  const annualSavings = monthlySavings * 12;

  const DEALERSHIP_STEPS = [
    {
      step: 1,
      title: 'Enquiry',
      desc: 'Submit online dealership interest application form with territory and investment details.',
      icon: FileText
    },
    {
      step: 2,
      title: 'First Round of Discussion',
      desc: 'Initial telephone or virtual alignment meeting with regional franchise director.',
      icon: MessageCircle
    },
    {
      step: 3,
      title: 'Showing Eligibility',
      desc: 'Verification of proposed showroom space (400-1500 sq ft) & financial investment capacity.',
      icon: CheckCircle2
    },
    {
      step: 4,
      title: 'Assessment by Our Team',
      desc: 'Catchment area feasibility study, footfall audit & exclusive territory reservation.',
      icon: ShieldCheck
    },
    {
      step: 5,
      title: 'Factory Visit',
      desc: 'Visit Chakan MIDC manufacturing hub, R&D testing lab & experience test drive fleet.',
      icon: Factory
    },
    {
      step: 6,
      title: 'Allotment of Agency',
      desc: 'Signing formal franchise agreement, showroom branding setup & initial stock dispatch.',
      icon: Award
    }
  ];

  // GATED VIEW: If user is not logged in, require Login / Register to view page
  if (!currentUser) {
    return (
      <div className="bg-[#F8FAFC] text-slate-800 py-16 px-4 sm:px-6 lg:px-8 min-h-[75vh] flex items-center justify-center relative">
        <div className="max-w-2xl w-full bg-white border border-slate-200 p-8 sm:p-12 rounded-3xl shadow-xl text-center space-y-8 relative z-10">
          
          <div className="w-16 h-16 rounded-2xl bg-orange-50 text-[#EA580C] border border-orange-200 flex items-center justify-center mx-auto shadow-sm">
            <Lock className="w-8 h-8" />
          </div>

          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-[#EA580C] text-xs font-extrabold uppercase tracking-wider">
              <Zap className="w-4 h-4 text-[#EA580C]" />
              <span>DOV INDIA A-STAR EV PORTAL</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
              EV Scooter & Dealership Portal is Locked
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto leading-relaxed font-medium">
              Please login or create a free EV account to access EV Scooter models, battery specifications, savings calculator, and dealership application.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-[11px] font-bold text-slate-700 uppercase tracking-wider">
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">⚡ 100+ KM Range</div>
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">🔋 Swappable Battery</div>
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">🏬 Franchise Info</div>
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">📜 80G / PM Subsidy</div>
          </div>

          <div className="pt-2">
            <button
              onClick={() => setIsAuthModalOpen(true)}
              className="w-full sm:w-auto px-10 py-4 bg-[#EA580C] hover:bg-[#C2410C] text-white font-extrabold text-xs rounded-xl shadow-lg transition-all hover:scale-105 cursor-pointer uppercase tracking-wider flex items-center justify-center gap-2 mx-auto"
            >
              <LogIn className="w-4 h-4" /> Login / Register to Unlock
            </button>
          </div>

        </div>

        {/* EV Login & Registration Modal */}
        <EvAuthModal
          isOpen={isAuthModalOpen}
          onClose={() => setIsAuthModalOpen(false)}
          onLoginSuccess={(user) => setCurrentUser(user)}
        />
      </div>
    );
  }

  return (
    <div className="bg-[#F8FAFC] text-[#1F2937] min-h-screen">
      
      {/* 1. Hero Banner matching DOV INDIA A-STAR screenshot header */}
      <div className="relative bg-gradient-to-br from-[#8B0000] via-[#0E0C4D] to-[#0A0836] text-white overflow-hidden border-b border-red-900/40">
        
        {/* Subtle background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-red-600/20 via-transparent to-transparent pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Brand Tagline Banner */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/20 border border-red-400/30 text-amber-300 text-xs font-black uppercase tracking-wider backdrop-blur-md">
                <Zap className="w-4 h-4 text-amber-400 animate-pulse" />
                <span>DOV INDIA A-STAR ELECTRIC SCOOTERS</span>
              </div>

              {/* Title */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
                Open For <span className="text-[#FF3B30] underline decoration-amber-400 underline-offset-8">Dealership</span>
              </h1>

              <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-2xl font-medium">
                India's fastest growing EV brand is now expanding across all states & districts. Partner with us for high-margin electric 2-wheelers with German tech, zero emissions, and PM E-DRIVE subsidies.
              </p>

              {/* Core Features Pill Line */}
              <div className="flex flex-wrap gap-2 text-[11px] font-extrabold uppercase text-amber-300 tracking-wider">
                <span className="bg-white/10 px-3 py-1 rounded-md border border-white/10">RENEWABLE POWER</span>
                <span className="bg-white/10 px-3 py-1 rounded-md border border-white/10">ENERGY-EFFICIENT</span>
                <span className="bg-white/10 px-3 py-1 rounded-md border border-white/10">ENVIRONMENT-FRIENDLY</span>
                <span className="bg-white/10 px-3 py-1 rounded-md border border-white/10">FAST CHARGING</span>
              </div>

              {/* Contact Helpline Callout */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <div className="bg-white/10 border border-white/20 rounded-2xl p-4 flex items-center gap-3 backdrop-blur-md">
                  <div className="w-10 h-10 rounded-xl bg-red-600 text-white flex items-center justify-center font-bold">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-300 font-bold uppercase">Dealership Hotline</div>
                    <a href="tel:+917098555333" className="text-base font-black text-white hover:text-amber-300 transition-colors">
                      7098555333
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => onOpenWhatsApp('Dealership Inquiry for DOV INDIA A-STAR')}
                  className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-5 py-4 rounded-2xl flex items-center gap-2 shadow-lg transition-all cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
                </button>
              </div>

              {/* Quick Action CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={onOpenFranchise}
                  className="bg-red-600 hover:bg-red-700 text-white font-black text-xs px-7 py-3.5 rounded-xl shadow-xl transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Building2 className="w-4 h-4" /> Apply for Dealership
                </button>

                <a
                  href="https://www.instagram.com/dov_ebike/?hl=en"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-gradient-to-r from-purple-600 via-pink-600 to-rose-500 hover:from-purple-500 hover:to-rose-400 text-white font-black text-xs px-5 py-3.5 rounded-xl shadow-xl transition-all flex items-center gap-2 cursor-pointer hover:scale-105"
                >
                  <Instagram className="w-4 h-4" /> Follow EV Instagram
                </a>
              </div>

            </div>

            {/* Right Hero Image Gallery */}
            <div className="lg:col-span-5 relative flex justify-center items-center">
              <div className="relative w-full max-w-md bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-md shadow-2xl space-y-4">
                <div className="absolute -top-3 -right-3 bg-red-600 text-white text-[10px] font-black uppercase px-3 py-1 rounded-full shadow-md">
                  GERMAN TECH EV
                </div>
                
                <div className="w-full h-64 sm:h-72 rounded-2xl overflow-hidden bg-white p-3 shadow-xl border border-white/20 flex items-center justify-center">
                  <img 
                    src={currentColor.image} 
                    alt="DOV INDIA A-STAR Electric Scooter" 
                    className="w-full h-full object-contain transform hover:scale-105 transition-transform duration-500" 
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="bg-[#0E0C4D] p-3.5 rounded-xl border border-white/10 flex items-center justify-between text-xs text-white">
                  <div>
                    <div className="font-bold text-amber-300">{selectedScooter.name}</div>
                    <div className="text-[10px] text-slate-300">{selectedScooter.category} • {selectedScooter.topSpeed} km/h</div>
                  </div>
                  <div className="text-right font-black text-emerald-400 text-sm">
                    ₹{selectedScooter.price.toLocaleString('en-IN')}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* 2. Welcome to DOV INDIA A-STAR ELECTRIC SCOOTERS Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto space-y-3">
          <span className="text-xs font-black text-red-600 uppercase tracking-widest">ABOUT DOV A-STAR MOBILITY</span>
          <h2 className="text-2xl sm:text-4xl font-black text-[#0E0C4D] uppercase">
            Welcome to <span className="text-red-600">DOV INDIA A-STAR</span> ELECTRIC SCOOTERS
          </h2>
          <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            RENEWABLE POWER | ENERGY-EFFICIENT | ENVIRONMENT-FRIENDLY | FAST CHARGING | CLEAN & GREEN MOBILITY
          </p>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-2">
            DOV INDIA A-STAR ELECTRIC SCOOTERS is taking the lead to bring high-speed electric scooters designed with advanced German electric drive technology. Offering ultra-low running cost (₹0.15/km), zero carbon emissions, long swappable LFP battery life, stylish aerodynamic bodywork, and smart telemetry.
          </p>
        </div>

        {/* Dealer Benefits Grid */}
        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center font-bold">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="text-base font-extrabold text-[#0E0C4D]">Higher Margins & ROI</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Attractive unit margins, quarterly volume performance bonuses, and fast payback break-even within 12-18 months.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0E0C4D] flex items-center justify-center font-bold">
              <Wrench className="w-6 h-6" />
            </div>
            <h3 className="text-base font-extrabold text-[#0E0C4D]">Technical & Sales Support</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              360° training for dealership staff, master technician certification, and diagnostic software setup.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-base font-extrabold text-[#0E0C4D]">Fast Charging Setup</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Installation of fast charging station at your dealership premises and regional charging network connectivity.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-base font-extrabold text-[#0E0C4D]">IP67 & Smart BMS</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              IP67 waterproof motor & battery packs with 2000+ LFP battery cycles and PM E-DRIVE subsidy approval.
            </p>
          </div>
        </div>

      </div>

      {/* 3. Types of Vehicles / Variety of Electric Scooters */}
      <div className="bg-white border-y border-slate-200 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-black text-red-600 uppercase tracking-widest">PRODUCT RANGE</span>
              <h2 className="text-2xl sm:text-4xl font-black text-[#0E0C4D]">Types of Vehicles / Variety of Electric Scooters</h2>
            </div>

            {/* Model Selector Tabs */}
            <div className="flex items-center gap-1.5 p-1.5 bg-slate-100 rounded-xl border border-slate-200 overflow-x-auto">
              {SCOOTERS_DATA.map((model) => (
                <button
                  key={model.id}
                  onClick={() => {
                    setSelectedScooterId(model.id);
                    setSelectedColorIdx(0);
                  }}
                  className={`px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                    selectedScooterId === model.id
                      ? 'bg-[#0E0C4D] text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200'
                  }`}
                >
                  {model.name}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Model Showcase */}
          <div className="grid lg:grid-cols-12 gap-8 items-center bg-[#F8FAFC] p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-lg">
            
            {/* Visual Display */}
            <div className="lg:col-span-7">
              <div className="relative bg-white rounded-2xl p-6 border border-slate-200 flex flex-col items-center justify-center min-h-[340px] shadow-sm">
                <span className="absolute top-4 left-4 z-10 bg-red-100 text-red-700 text-[10px] font-black px-3 py-1 rounded-full uppercase">
                  {selectedScooter.category}
                </span>

                <div className="w-full h-72 sm:h-80 bg-white p-2 flex items-center justify-center">
                  <img 
                    src={currentColor.image} 
                    alt={selectedScooter.name} 
                    className="w-full h-full object-contain" 
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>

            {/* Spec Details */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-[#0E0C4D]">{selectedScooter.name}</h3>
                <p className="text-xs text-red-600 font-bold mt-1">{selectedScooter.tagline}</p>
              </div>

              {/* Price Tag */}
              <div className="bg-red-50 p-4 rounded-2xl border border-red-200 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-500 font-bold uppercase block">Ex-Showroom Price</span>
                  <span className="text-2xl font-black text-red-600">₹{selectedScooter.price.toLocaleString('en-IN')}</span>
                </div>
                <div className="text-right border-l border-red-200 pl-4">
                  <span className="text-[10px] text-slate-500 font-bold uppercase block">EMI From</span>
                  <span className="text-base font-extrabold text-[#0E0C4D]">₹{selectedScooter.emiStarting.toLocaleString('en-IN')}/mo</span>
                </div>
              </div>

              {/* Grid Metrics */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="bg-white p-3 rounded-xl border border-slate-200">
                  <div className="text-slate-400 font-bold text-[10px] uppercase">Top Speed</div>
                  <div className="font-black text-[#0E0C4D] text-lg">{selectedScooter.topSpeed} km/h</div>
                </div>
                <div className="bg-white p-3 rounded-xl border border-slate-200">
                  <div className="text-slate-400 font-bold text-[10px] uppercase">Max Range</div>
                  <div className="font-black text-emerald-600 text-lg">{selectedScooter.rangePerCharge} km</div>
                </div>
                <div className="bg-white p-3 rounded-xl border border-slate-200">
                  <div className="text-slate-400 font-bold text-[10px] uppercase">Charging Time</div>
                  <div className="font-bold text-slate-800">{selectedScooter.chargingTime}</div>
                </div>
                <div className="bg-white p-3 rounded-xl border border-slate-200">
                  <div className="text-slate-400 font-bold text-[10px] uppercase">Motor Output</div>
                  <div className="font-bold text-slate-800">{selectedScooter.motorPower}</div>
                </div>
              </div>

              {/* CTAs */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <button
                  onClick={onOpenFranchise}
                  className="bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs py-3 rounded-xl flex items-center justify-center gap-1 shadow-md cursor-pointer"
                >
                  <Building2 className="w-4 h-4" /> Apply Dealership
                </button>
                <button
                  onClick={() => onOpenWhatsApp(`Inquiry for model: ${selectedScooter.name}`)}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs py-3 rounded-xl flex items-center justify-center gap-1 shadow-md cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" /> Get Quote
                </button>
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* 4. How It Works — 6-Step Dealership Process (Matching Screenshot) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-black text-red-600 uppercase tracking-widest">TRANSPARENT ONBOARDING</span>
          <h2 className="text-2xl sm:text-4xl font-black text-[#0E0C4D] uppercase">How It Works</h2>
          <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">6-STEP DEALERSHIP PROCESS</p>
        </div>

        {/* 6 Steps Roadmap */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {DEALERSHIP_STEPS.map((s) => {
            const IconComp = s.icon;
            return (
              <div 
                key={s.step}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all space-y-4 relative overflow-hidden group"
              >
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center font-bold border border-red-100 group-hover:bg-red-600 group-hover:text-white transition-colors">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <span className="text-3xl font-black text-slate-200 group-hover:text-red-200 transition-colors">
                    0{s.step}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-black text-[#0E0C4D]">{s.title}</h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 5. What We Offer — Dealership Models (Matching Screenshot Cards) */}
      <div className="bg-[#0E0C4D] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-black text-amber-400 uppercase tracking-widest">PARTNERSHIP TIERS</span>
            <h2 className="text-2xl sm:text-4xl font-black text-white uppercase">What We Offer</h2>
            <p className="text-xs font-bold text-slate-300 uppercase tracking-wider">DEALERSHIP MODELS</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Master Dealership Card */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 space-y-6 relative flex flex-col justify-between hover:border-red-500/50 transition-all">
              <div className="space-y-4">
                <span className="inline-block px-3 py-1 rounded-full bg-red-600 text-white text-[10px] font-black uppercase">
                  DISTRICT EXCLUSIVE
                </span>
                <h3 className="text-2xl font-black text-white">Master Dealership</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Full district territorial rights with sub-dealer network management rights across all towns in the district.
                </p>

                <div className="space-y-2 text-xs text-slate-200 pt-2 border-t border-white/10">
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Entire District Territory Rights</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Showroom Size: 1500+ Sq. Ft. + Spare Hub</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Sub-Dealer Network Revenue Royalty</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Investment: ~₹25 Lakhs+</div>
                </div>
              </div>

              <button
                onClick={onOpenFranchise}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs py-3.5 rounded-xl shadow-lg transition-colors cursor-pointer"
              >
                Apply for Master Dealership
              </button>
            </div>

            {/* Standard Dealership Card */}
            <div className="bg-white/10 border-2 border-amber-400 rounded-3xl p-8 space-y-6 relative flex flex-col justify-between shadow-2xl scale-105">
              <div className="space-y-4">
                <span className="inline-block px-3 py-1 rounded-full bg-amber-400 text-slate-900 text-[10px] font-black uppercase">
                  MOST POPULAR TIER
                </span>
                <h3 className="text-2xl font-black text-white">Standard Dealership</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Complete city/town exclusive rights with dedicated sales, spare parts & 2-bay service workstation.
                </p>

                <div className="space-y-2 text-xs text-slate-200 pt-2 border-t border-white/10">
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" /> Entire City / Town Exclusivity</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" /> Showroom Size: 800 - 1000 Sq. Ft.</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" /> Dedicated Technical & Sales Training</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" /> Investment: ~₹15 Lakhs</div>
                </div>
              </div>

              <button
                onClick={onOpenFranchise}
                className="w-full bg-amber-400 hover:bg-amber-300 text-slate-900 font-extrabold text-xs py-3.5 rounded-xl shadow-lg transition-colors cursor-pointer"
              >
                Apply for Standard Dealership
              </button>
            </div>

            {/* Economy Dealership Card */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 space-y-6 relative flex flex-col justify-between hover:border-red-500/50 transition-all">
              <div className="space-y-4">
                <span className="inline-block px-3 py-1 rounded-full bg-blue-600 text-white text-[10px] font-black uppercase">
                  FAST SETUP
                </span>
                <h3 className="text-2xl font-black text-white">Economy Dealership</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Ideal entry model for sub-agencies & satellite towns requiring low capital and rapid 21-day setup.
                </p>

                <div className="space-y-2 text-xs text-slate-200 pt-2 border-t border-white/10">
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Town / Sub-Agency Territory</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Showroom Size: 400 - 600 Sq. Ft.</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Rapid ROI Payback within 12 Months</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Investment: ~₹8 - 10 Lakhs</div>
                </div>
              </div>

              <button
                onClick={onOpenFranchise}
                className="w-full bg-white/10 hover:bg-white/20 text-white font-extrabold text-xs py-3.5 rounded-xl shadow-lg transition-colors cursor-pointer"
              >
                Apply for Economy Dealership
              </button>
            </div>

          </div>

        </div>
      </div>

      {/* 6. Smart Petrol vs EV Savings Calculator */}
      <div className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-black text-red-600 uppercase tracking-widest">SMART COST COMPARISON</span>
          <h2 className="text-2xl sm:text-4xl font-black text-[#0E0C4D]">Why Choose Us & Calculate Savings</h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-center bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-md">
          {/* Sliders */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-bold">
                <span>Daily Travel Distance:</span>
                <span className="text-red-600 text-base font-black">{dailyKm} KM / day</span>
              </div>
              <input
                type="range"
                min="10"
                max="120"
                step="5"
                value={dailyKm}
                onChange={(e) => setDailyKm(Number(e.target.value))}
                className="w-full accent-red-600 h-2 bg-slate-200 rounded-lg cursor-pointer"
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-bold">
                <span>Current Petrol Rate:</span>
                <span className="text-slate-800 font-bold">₹{petrolPrice} / L</span>
              </div>
              <input
                type="range"
                min="90"
                max="120"
                step="1"
                value={petrolPrice}
                onChange={(e) => setPetrolPrice(Number(e.target.value))}
                className="w-full accent-slate-800 h-2 bg-slate-200 rounded-lg cursor-pointer"
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-bold">
                <span>Petrol Mileage:</span>
                <span className="text-slate-800 font-bold">{petrolMileage} KM / L</span>
              </div>
              <input
                type="range"
                min="25"
                max="60"
                step="1"
                value={petrolMileage}
                onChange={(e) => setPetrolMileage(Number(e.target.value))}
                className="w-full accent-emerald-600 h-2 bg-slate-200 rounded-lg cursor-pointer"
              />
            </div>
          </div>

          {/* Results Box */}
          <div className="lg:col-span-5 bg-gradient-to-br from-red-50 to-amber-50 p-6 rounded-2xl border border-red-200 text-center space-y-4">
            <span className="text-xs font-black text-red-600 uppercase tracking-widest">ANNUAL FUEL SAVINGS</span>
            <div className="text-3xl sm:text-5xl font-black text-emerald-600">
              ₹{annualSavings.toLocaleString('en-IN')}
            </div>
            <p className="text-xs text-slate-600">
              In 3 years, your total savings of <strong className="text-emerald-700">₹{(annualSavings * 3).toLocaleString('en-IN')}</strong> will fully recover your scooter cost!
            </p>
          </div>
        </div>
      </div>

      {/* 7. What's New & News Section (Matching Screenshot) */}
      <div className="bg-slate-50 border-t border-slate-200 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-black text-red-600 uppercase tracking-widest">MEDIA COVERAGE</span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#0E0C4D]">What's New</h2>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">READ OUR LATEST DISPATCH</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm space-y-4">
              <img src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=800&q=80" alt="News 1" className="w-full h-56 object-cover" referrerPolicy="no-referrer" />
              <div className="p-6 space-y-2">
                <span className="text-[10px] text-red-600 font-bold uppercase">PRESS RELEASE • 2026</span>
                <h3 className="text-lg font-bold text-[#0E0C4D]">DOV India A-Star Announces 50 New Dealership Centers in Maharashtra</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Expanding our high-speed electric 2-wheeler footprint with localized battery swapping & service hubs across tier-2 and tier-3 cities.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm space-y-4">
              <img src="https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=800&q=80" alt="News 2" className="w-full h-56 object-cover" referrerPolicy="no-referrer" />
              <div className="p-6 space-y-2">
                <span className="text-[10px] text-red-600 font-bold uppercase">EV MOBILITY EXPO • 2026</span>
                <h3 className="text-lg font-bold text-[#0E0C4D]">Launch of High-Performance German Tech LFP Battery Architecture</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Engineered for Indian extreme summer temperatures with IP67 waterproofing and 2,000+ charge lifecycle durability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 8. Our Offices & Factory Address Section (Matching Screenshot) */}
      <div className="bg-white border-t border-slate-200 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-black text-red-600 uppercase tracking-widest">GET IN TOUCH</span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#0E0C4D]">Our Offices & Facilities</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            
            {/* Head Office */}
            <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-red-100 text-red-600 flex items-center justify-center font-bold">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-extrabold text-[#0E0C4D]">Head Office</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                DOV India EV Tower, Sector 62, Commercial Hub, Pune / New Delhi, India.
              </p>
              <div className="text-xs font-mono text-slate-700 font-bold pt-2">
                Phone: 7098555333
              </div>
            </div>

            {/* Factory Address */}
            <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#0E0C4D] flex items-center justify-center font-bold">
                <Factory className="w-5 h-5" />
              </div>
              <h3 className="text-base font-extrabold text-[#0E0C4D]">Factory Address</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Plot No. 42, Chakan Industrial Hub, MIDC Phase 2, Pune, Maharashtra - 410501.
              </p>
              <div className="text-xs font-mono text-slate-700 font-bold pt-2">
                Phone: 7098555333
              </div>
            </div>

            {/* Sample Showroom */}
            <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-base font-extrabold text-[#0E0C4D]">Sample Showroom</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                DOV A-Star Experience Hub, Central Arterial Highway, Pune, MH.
              </p>
              <div className="text-xs font-mono text-slate-700 font-bold pt-2">
                Phone: 7098555333
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* EV Login & Registration Modal */}
      <EvAuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onLoginSuccess={(user) => setCurrentUser(user)}
      />
    </div>
  );
};
