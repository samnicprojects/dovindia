import React, { useState, useMemo } from 'react';
import { BIKES_DATA, BikeProduct } from '../data/bikesData';
import { BikeOrderModal } from './BikeOrderModal';
import { 
  Zap, 
  BatteryCharging, 
  Gauge, 
  ShieldCheck, 
  CheckCircle2, 
  Search, 
  Filter, 
  MessageCircle, 
  ArrowRight, 
  Sparkles, 
  IndianRupee, 
  Award, 
  Truck, 
  Clock, 
  Shield, 
  SlidersHorizontal,
  ChevronRight,
  Eye,
  CreditCard,
  Phone,
  Flame,
  Check,
  Building2,
  Calculator,
  RefreshCw,
  X
} from 'lucide-react';

interface ProductsSectionProps {
  onOpenTestDrive: (bikeId?: string) => void;
  onOpenFranchise: () => void;
  onOpenWhatsApp: (intent?: string) => void;
  isHomePage?: boolean;
  onNavigateProducts?: () => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({
  onOpenTestDrive,
  onOpenFranchise,
  onOpenWhatsApp,
  isHomePage = false,
  onNavigateProducts
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'popular' | 'price-low' | 'price-high' | 'range-max' | 'speed-fast'>('popular');
  
  // Bike Order Modal State
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [selectedBikeId, setSelectedBikeId] = useState<string | undefined>(undefined);
  const [initialOrderType, setInitialOrderType] = useState<'token' | 'full' | 'enquiry'>('token');

  // Quick View Detail Modal State
  const [quickViewBike, setQuickViewBike] = useState<BikeProduct | null>(null);

  // EMI Calculator State inside Quick View / Page
  const [downPayment, setDownPayment] = useState<number>(10000);
  const [tenureMonths, setTenureMonths] = useState<number>(36);



  const categories = [
    { label: 'All Bikes', value: 'All' },
    { label: 'High-Speed Flagship', value: 'High-Speed' },
    { label: 'City Commuter', value: 'City Commuter' },
    { label: 'Long Range Tourer', value: 'Long Range' },
    { label: 'Commercial Cargo', value: 'Cargo / Commercial' },
    { label: 'Sport Edition', value: 'Sport Edition' }
  ];

  const filteredBikes = useMemo(() => {
    return BIKES_DATA.filter((bike) => {
      const matchesCategory = selectedCategory === 'All' || bike.category === selectedCategory;
      const matchesSearch = 
        bike.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        bike.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        bike.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        bike.keyFeatures.some(f => f.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'range-max') return b.rangePerCharge - a.rangePerCharge;
      if (sortBy === 'speed-fast') return b.topSpeed - a.topSpeed;
      // Default: Popular & New first
      return (b.isPopular ? 1 : 0) - (a.isPopular ? 1 : 0);
    });
  }, [selectedCategory, searchQuery, sortBy]);

  const handleOpenBooking = (bikeId: string, type: 'token' | 'full' | 'enquiry') => {
    setSelectedBikeId(bikeId);
    setInitialOrderType(type);
    setIsOrderModalOpen(true);
  };



  return (
    <div className="bg-[#F8FAFC] min-h-screen text-slate-800 pb-20">
      
      {!isHomePage ? (
        <>
          {/* 1. CREATIVE HERO HEADER */}
          <section className="relative bg-gradient-to-b from-[#0F172A] via-[#1E3A8A] to-[#1E3A8A] text-white pt-12 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* Decorative Grid & Glow Background Effects */}
            <div className="absolute inset-0 opacity-10 bg-[radial-[#38bdf8]_1px,transparent_1px] [background-size:16px_16px] pointer-events-none"></div>
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#0D6EFD]/30 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#EA580C]/20 rounded-full blur-3xl pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10 text-center space-y-6">
              
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full text-xs font-bold text-amber-300 uppercase tracking-wider shadow-inner">
                <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
                PM E-DRIVE 2026 Certified • Govt Subsidies Ready
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight max-w-4xl mx-auto leading-tight">
                Next-Generation <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-amber-300">EVDov Electric Bikes</span> & Scooters
              </h1>

              <p className="text-slate-200 text-sm sm:text-base max-w-2xl mx-auto font-medium leading-relaxed">
                Explore India's most advanced smart electric bikes equipped with swappable LFP battery technology, 190km range, and instant online booking deposit gateway.
              </p>

              {/* Key Value Badges */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto pt-4 text-xs">
                <div className="bg-white/10 backdrop-blur-md border border-white/10 p-3 rounded-2xl flex items-center gap-2.5 text-left">
                  <div className="w-9 h-9 rounded-xl bg-cyan-500/20 text-cyan-300 flex items-center justify-center shrink-0">
                    <BatteryCharging className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-extrabold text-white">LFP Swappable Tech</div>
                    <div className="text-[11px] text-blue-200">2,500+ Charge Cycles</div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-md border border-white/10 p-3 rounded-2xl flex items-center gap-2.5 text-left">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center shrink-0">
                    <IndianRupee className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-extrabold text-white">₹0.15 / km Running</div>
                    <div className="text-[11px] text-blue-200">Save ₹45,000+ Yearly</div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-md border border-white/10 p-3 rounded-2xl flex items-center gap-2.5 text-left">
                  <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-300 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-extrabold text-white">3-Year Warranty</div>
                    <div className="text-[11px] text-blue-200">Battery & Motor Guard</div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-md border border-white/10 p-3 rounded-2xl flex items-center gap-2.5 text-left">
                  <div className="w-9 h-9 rounded-xl bg-orange-500/20 text-orange-300 flex items-center justify-center shrink-0">
                    <CreditCard className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-extrabold text-white">Online Token ₹999</div>
                    <div className="text-[11px] text-blue-200">Instant Booking Gateway</div>
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* 2. FILTER & SEARCH CONTROL BAR */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
            <div className="bg-white border border-slate-200 rounded-3xl p-4 sm:p-5 shadow-xl space-y-4">
              
              {/* Top Bar: Search + Sort dropdown */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                
                {/* Search input */}
                <div className="relative w-full sm:w-80">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search bike name, features, specs..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl pl-10 pr-4 py-2.5 text-xs text-slate-900 font-semibold focus:outline-none focus:border-[#1E3A8A] placeholder-slate-400"
                  />
                  {searchQuery && (
                    <button onClick={() => setSearchQuery('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                {/* Sort options */}
                <div className="flex items-center gap-2 w-full sm:w-auto justify-end text-xs font-bold">
                  <SlidersHorizontal className="w-4 h-4 text-slate-500 shrink-0" />
                  <span className="text-slate-500 hidden sm:inline">Sort By:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)}
                    className="bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-800 font-extrabold focus:outline-none focus:border-[#1E3A8A]"
                  >
                    <option value="popular">Popular & Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="range-max">Range: Highest First</option>
                    <option value="speed-fast">Top Speed: Fastest First</option>
                  </select>
                </div>

              </div>

              {/* Category Tabs */}
              <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none text-xs font-extrabold">
                {categories.map((cat) => (
                  <button
                    key={cat.value}
                    onClick={() => setSelectedCategory(cat.value)}
                    className={`px-4 py-2 rounded-2xl whitespace-nowrap transition-all cursor-pointer ${
                      selectedCategory === cat.value
                        ? 'bg-[#1E3A8A] text-white shadow-md'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

            </div>
          </section>
        </>
      ) : (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EA580C]/10 border border-[#EA580C]/20 text-xs font-black text-[#EA580C]">
            <Zap className="w-4 h-4 text-[#EA580C]" />
            <span>FEATURED EV SCOOTERS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
            Popular EVDov Electric Bikes
          </h2>
          <p className="text-sm text-slate-500 max-w-xl mx-auto font-medium">
            Explore India's top PM E-DRIVE subsidy certified electric scooters.
          </p>
        </div>
      )}

      {/* 3. PRODUCT CARDS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        
        {!isHomePage && (
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                {selectedCategory === 'All' ? 'All EVDov Electric Bikes' : `${selectedCategory} Bikes`}
              </h2>
              <p className="text-xs text-slate-500 font-medium">
                Showing {filteredBikes.length} electric scooter models
              </p>
            </div>
            
            <button
              onClick={() => onOpenWhatsApp('General Bike Inquiry')}
              className="hidden sm:flex items-center gap-1.5 text-xs font-extrabold text-[#25D366] hover:text-emerald-700 bg-emerald-50 border border-emerald-200 px-3.5 py-2 rounded-xl transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              Ask EV Expert on WhatsApp
            </button>
          </div>
        )}

        {filteredBikes.length === 0 ? (
          <div className="bg-white border border-slate-200 rounded-3xl p-12 text-center space-y-4">
            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto text-slate-400">
              <Search className="w-8 h-8" />
            </div>
            <h3 className="font-extrabold text-lg text-slate-800">No bike models found</h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              Try adjusting your search keywords or clearing the category filter to view all electric bikes.
            </p>
            <button
              onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
              className="px-4 py-2 bg-[#1E3A8A] text-white font-extrabold text-xs rounded-xl shadow-md"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {(isHomePage ? filteredBikes.slice(0, 4) : filteredBikes).map((bike) => {
              const currentImg = bike.image;

              return (
                <div
                  key={bike.id}
                  className="bg-white border border-slate-200/90 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col group relative"
                >
                  
                  {/* Card Top Badges */}
                  <div className="p-4 flex items-center justify-between relative z-10">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      {bike.isPopular && (
                        <span className="bg-[#EA580C] text-white text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider shadow-xs flex items-center gap-1">
                          <Flame className="w-3 h-3" /> Top Seller
                        </span>
                      )}
                      {bike.isNew && (
                        <span className="bg-[#0D6EFD] text-white text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider shadow-xs flex items-center gap-1">
                          <Sparkles className="w-3 h-3" /> 2026 Model
                        </span>
                      )}
                      {bike.subsidyApproved && (
                        <span className="bg-emerald-100 text-emerald-800 text-[10px] font-black px-2 py-0.5 rounded-full border border-emerald-300">
                          Subsidy Approved
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Bike Image Display with Smooth Hover Zoom */}
                  <div 
                    className="relative px-6 py-4 bg-gradient-to-b from-slate-50 to-white flex items-center justify-center cursor-pointer min-h-[220px]"
                    onClick={() => setQuickViewBike(bike)}
                  >
                    <img
                      src={currentImg}
                      alt={bike.name}
                      className="h-44 w-auto object-contain transition-transform duration-500 group-hover:scale-105 filter drop-shadow-lg"
                    />
                    
                    <button
                      onClick={(e) => { e.stopPropagation(); setQuickViewBike(bike); }}
                      className="absolute bottom-2 right-4 bg-white/90 backdrop-blur-md border border-slate-200 text-slate-700 hover:text-[#1E3A8A] text-[11px] font-extrabold px-3 py-1 rounded-full shadow-xs flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Eye className="w-3.5 h-3.5" /> Quick View
                    </button>
                  </div>

                  {/* Card Content & Details */}
                  <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                    
                    <div>
                      <div className="text-[10px] font-extrabold text-[#0D6EFD] uppercase tracking-wider">
                        {bike.category}
                      </div>
                      <h3 
                        onClick={() => setQuickViewBike(bike)}
                        className="text-lg font-black text-slate-900 group-hover:text-[#1E3A8A] transition-colors cursor-pointer"
                      >
                        {bike.name}
                      </h3>
                      <p className="text-xs text-slate-500 line-clamp-1 mt-0.5 font-medium">
                        {bike.tagline}
                      </p>
                    </div>

                    {/* Key Specs Pill Grid directly from official brochure image */}
                    <div className="grid grid-cols-2 gap-2 text-xs pt-1">
                      <div className="bg-slate-50 border border-slate-200/80 p-2 rounded-xl flex items-center gap-2">
                        <Gauge className="w-4 h-4 text-cyan-600 shrink-0" />
                        <div>
                          <div className="text-[9px] text-slate-400 uppercase font-bold">Max Speed</div>
                          <div className="font-black text-slate-800 text-xs">{bike.topSpeedText || `${bike.topSpeed} km/h`}</div>
                        </div>
                      </div>

                      <div className="bg-slate-50 border border-slate-200/80 p-2 rounded-xl flex items-center gap-2">
                        <Zap className="w-4 h-4 text-amber-600 shrink-0" />
                        <div>
                          <div className="text-[9px] text-slate-400 uppercase font-bold">Controller</div>
                          <div className="font-black text-slate-800 text-xs truncate">{bike.controller}</div>
                        </div>
                      </div>

                      <div className="bg-slate-50 border border-slate-200/80 p-2 rounded-xl flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-orange-600 shrink-0" />
                        <div>
                          <div className="text-[9px] text-slate-400 uppercase font-bold">Motor Power</div>
                          <div className="font-black text-slate-800 text-xs truncate">{bike.motorPower}</div>
                        </div>
                      </div>

                      <div className="bg-slate-50 border border-slate-200/80 p-2 rounded-xl flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                        <div>
                          <div className="text-[9px] text-slate-400 uppercase font-bold">Brake System</div>
                          <div className="font-black text-slate-800 text-xs truncate">{bike.brakes}</div>
                        </div>
                      </div>
                    </div>

                    {/* Pricing Box */}
                    <div className="bg-gradient-to-r from-blue-50/70 to-slate-50 border border-blue-100 p-3.5 rounded-2xl flex items-center justify-between">
                      <div>
                        <div className="text-[10px] text-slate-400 uppercase font-bold">Offer Price</div>
                        <div className="flex items-baseline gap-1.5">
                          <span className="font-black text-xl text-[#1E3A8A]">₹{bike.price.toLocaleString('en-IN')}</span>
                          <span className="text-xs text-slate-400 line-through">₹{bike.originalPrice.toLocaleString('en-IN')}</span>
                        </div>
                        <div className="text-[10px] text-emerald-600 font-extrabold mt-0.5">
                          EMI from ₹{bike.emiStarting.toLocaleString('en-IN')}/mo
                        </div>
                      </div>

                      <div className="text-right">
                        <span className="bg-orange-100 text-[#EA580C] text-[10px] font-extrabold px-2.5 py-1 rounded-full border border-orange-200 block">
                          Token Deposit: ₹{bike.tokenDeposit}
                        </span>
                      </div>
                    </div>

                    {/* Action CTAs: Book Deposit vs Full Payment vs Enquiry */}
                    <div className="space-y-2 pt-1">
                      
                      {/* Primary CTA: Book Token Deposit Online */}
                      <button
                        onClick={() => handleOpenBooking(bike.id, 'token')}
                        className="w-full py-3 bg-gradient-to-r from-[#1E3A8A] to-[#0D6EFD] hover:from-[#1e3a8a] hover:to-[#0284c7] text-white font-extrabold text-xs rounded-2xl shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer uppercase tracking-wider"
                      >
                        <Zap className="w-4 h-4 text-amber-300" />
                        Book Now (Token ₹{bike.tokenDeposit})
                      </button>

                      <div className="grid grid-cols-2 gap-2">
                        {/* Full Payment Button */}
                        <button
                          onClick={() => handleOpenBooking(bike.id, 'full')}
                          className="py-2 px-2 bg-orange-50 hover:bg-orange-100 text-[#EA580C] border border-orange-200 font-bold text-[11px] rounded-xl flex items-center justify-center gap-1 transition-all cursor-pointer"
                        >
                          <CreditCard className="w-3.5 h-3.5" /> Full Payment
                        </button>

                        {/* WhatsApp Enquiry */}
                        <button
                          onClick={() => onOpenWhatsApp(`Inquiry for ${bike.name}`)}
                          className="py-2 px-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 font-bold text-[11px] rounded-xl flex items-center justify-center gap-1 transition-all cursor-pointer"
                        >
                          <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" /> Enquiry
                        </button>
                      </div>

                    </div>

                  </div>

                </div>
              );
            })}
          </div>
        )}

        {/* Home Page View All 16+ Models Redirect Button */}
        {isHomePage && (
          <div className="pt-12 text-center">
            <button
              onClick={onNavigateProducts}
              className="px-8 py-4 bg-gradient-to-r from-[#1E3A8A] via-[#0D6EFD] to-[#1E3A8A] hover:from-[#162d6d] hover:to-[#0284c7] text-white font-black text-sm rounded-2xl shadow-xl hover:shadow-2xl flex items-center justify-center gap-3 mx-auto transition-all transform hover:-translate-y-0.5 cursor-pointer uppercase tracking-wider group"
            >
              <Zap className="w-5 h-5 text-amber-300 animate-pulse" />
              <span>View All 16+ EV Scooter Models</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        )}

      </section>

      {/* 4. EMI & PETROL SAVINGS CALCULATOR BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="bg-gradient-to-r from-[#0F172A] via-[#1E3A8A] to-[#0F172A] rounded-3xl p-6 sm:p-10 text-white shadow-2xl relative overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 bg-white/10 text-amber-300 text-xs font-bold px-3 py-1 rounded-full border border-white/10">
                <Calculator className="w-4 h-4" /> Live ROI Savings Calculator
              </div>
              <h3 className="text-2xl sm:text-4xl font-black text-white leading-tight">
                Switch to EVDov & Save up to <span className="text-amber-300">₹45,000 Every Year</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                Petrol prices are rising, while EVDov electric scooters cost just ₹0.15 per km. Calculate how fast your electric bike pays for itself!
              </p>
              
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onOpenTestDrive()}
                  className="px-6 py-3 bg-[#EA580C] hover:bg-[#c2410c] text-white font-extrabold text-xs rounded-2xl shadow-lg flex items-center gap-2 transition-all cursor-pointer uppercase tracking-wider"
                >
                  <Zap className="w-4 h-4" /> Book Free Test Drive
                </button>
                <button
                  onClick={() => onOpenFranchise()}
                  className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-extrabold text-xs rounded-2xl transition-all cursor-pointer flex items-center gap-2"
                >
                  <Building2 className="w-4 h-4 text-cyan-300" /> Apply Dealership
                </button>
              </div>
            </div>

            {/* Visual Calculator Result Card */}
            <div className="bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-3xl space-y-4">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-white/10 p-4 rounded-2xl border border-white/10">
                  <div className="text-[10px] text-slate-300 uppercase font-bold">Monthly Petrol Cost</div>
                  <div className="text-xl sm:text-2xl font-black text-rose-300 mt-1">₹3,800</div>
                  <div className="text-[10px] text-slate-400">@ 40 km daily travel</div>
                </div>

                <div className="bg-emerald-500/20 p-4 rounded-2xl border border-emerald-400/30">
                  <div className="text-[10px] text-emerald-200 uppercase font-bold">Monthly EVDov Cost</div>
                  <div className="text-xl sm:text-2xl font-black text-emerald-300 mt-1">₹180</div>
                  <div className="text-[10px] text-emerald-300">Just ~₹6 / full charge</div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-400/30 p-4 rounded-2xl text-center">
                <div className="text-xs text-amber-200 font-extrabold uppercase tracking-wider">Your Estimated Annual Savings</div>
                <div className="text-3xl font-black text-amber-300 mt-1">₹43,440 / Year</div>
                <div className="text-[11px] text-slate-300 font-medium mt-1">
                  Your new electric scooter completely recovers its purchase price in under 2 years!
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. QUICK VIEW DETAIL MODAL */}
      {quickViewBike && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-white border border-slate-200 rounded-3xl w-full max-w-3xl overflow-hidden shadow-2xl relative max-h-[90vh] flex flex-col">
            
            {/* Header */}
            <div className="bg-[#1E3A8A] p-5 text-white flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2">
                <span className="bg-cyan-500/20 text-cyan-300 px-3 py-0.5 rounded-full text-xs font-extrabold uppercase border border-cyan-400/30">
                  {quickViewBike.category}
                </span>
                <h3 className="font-extrabold text-base sm:text-lg text-white">{quickViewBike.name}</h3>
              </div>
              <button
                onClick={() => setQuickViewBike(null)}
                className="p-2 text-white/80 hover:text-white rounded-xl bg-white/10 hover:bg-white/20 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 space-y-6 overflow-y-auto flex-grow text-xs text-slate-800">
              
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-center">
                  <img
                    src={quickViewBike.image}
                    alt={quickViewBike.name}
                    className="h-52 w-auto object-contain mx-auto filter drop-shadow-md"
                  />
                  <div className="mt-3 font-extrabold text-slate-900 text-sm">{quickViewBike.tagline}</div>
                </div>

                <div className="space-y-3">
                  <div className="text-2xl font-black text-[#1E3A8A]">
                    ₹{quickViewBike.price.toLocaleString('en-IN')}{' '}
                    <span className="text-xs text-slate-400 line-through font-normal">₹{quickViewBike.originalPrice.toLocaleString('en-IN')}</span>
                  </div>

                  <p className="text-slate-600 font-medium leading-relaxed">
                    {quickViewBike.description}
                  </p>

                  <div className="bg-blue-50 border border-blue-200 p-3 rounded-xl space-y-1">
                    <div className="font-extrabold text-[#1E3A8A]">Key Specifications:</div>
                    <div className="grid grid-cols-2 gap-1 text-[11px] text-slate-700">
                      <div>⚡ <strong>Top Speed:</strong> {quickViewBike.topSpeed} km/h</div>
                      <div>🔋 <strong>Range:</strong> {quickViewBike.rangePerCharge} km</div>
                      <div>⏱️ <strong>Charging:</strong> {quickViewBike.chargingTime}</div>
                      <div>🔌 <strong>Motor:</strong> {quickViewBike.motorPower}</div>
                    </div>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-2">
                    <button
                      onClick={() => {
                        setQuickViewBike(null);
                        handleOpenBooking(quickViewBike.id, 'token');
                      }}
                      className="flex-1 py-3 bg-[#1E3A8A] text-white font-extrabold text-xs rounded-xl shadow-md uppercase tracking-wider flex items-center justify-center gap-1.5"
                    >
                      <Zap className="w-4 h-4 text-amber-300" /> Book Token (₹{quickViewBike.tokenDeposit})
                    </button>
                    
                    <button
                      onClick={() => {
                        setQuickViewBike(null);
                        onOpenTestDrive(quickViewBike.id);
                      }}
                      className="py-3 px-4 bg-slate-100 hover:bg-slate-200 text-slate-800 font-extrabold text-xs rounded-xl"
                    >
                      Test Drive
                    </button>
                  </div>

                </div>
              </div>

              {/* Technical Specifications Table */}
              <div className="space-y-2 pt-2 border-t border-slate-100">
                <h4 className="font-extrabold text-sm text-slate-900">Official Brochure Technical Specifications</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">Controller Rating</span>
                    <span className="font-bold text-slate-800">{quickViewBike.specs.controller}</span>
                  </div>
                  <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">Motor Power</span>
                    <span className="font-bold text-slate-800">{quickViewBike.specs.motorPower}</span>
                  </div>
                  <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">Max Speed</span>
                    <span className="font-bold text-slate-800">{quickViewBike.specs.maxSpeed}</span>
                  </div>
                  <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">Brake System</span>
                    <span className="font-bold text-slate-800">{quickViewBike.specs.brakes}</span>
                  </div>
                  <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">Wheel & Tyre Size</span>
                    <span className="font-bold text-slate-800">{quickViewBike.specs.tyres}</span>
                  </div>
                  <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">Warranty</span>
                    <span className="font-bold text-slate-800">{quickViewBike.specs.warranty}</span>
                  </div>
                </div>
              </div>

              {/* Key Features List */}
              <div className="space-y-2 pt-2 border-t border-slate-100">
                <h4 className="font-extrabold text-sm text-slate-900">Standard Features</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {quickViewBike.keyFeatures.map((feat) => (
                    <li key={feat} className="flex items-center gap-2 font-medium text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

          </div>
        </div>
      )}

      {/* 6. BIKE ORDER & PAYMENT MODAL (SBI QR CODE + WHATSAPP SCREENSHOT) */}
      <BikeOrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        selectedBikeId={selectedBikeId}
        initialType={initialOrderType}
      />

    </div>
  );
};
