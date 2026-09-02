import React from 'react';
import { motion } from 'motion/react';
import { BatteryCharging, Zap, Truck, Building2, ArrowRight, ShieldCheck, IndianRupee, Gauge } from 'lucide-react';
import { SectionTitle } from '../ui/ReusableComponents';

interface FocusBentoGridProps {
  onSelectFocus: (focusId: string) => void;
  onOpenTestDrive: () => void;
  onOpenFranchise: () => void;
}

export const FocusBentoGrid: React.FC<FocusBentoGridProps> = ({ onSelectFocus, onOpenTestDrive, onOpenFranchise }) => {
  const evPillars = [
    {
      id: 'battery-tech',
      title: 'Swappable LFP Battery Technology',
      category: 'Battery Innovation',
      desc: 'High-density LFP cells offering 2,500+ charge cycles, 7-year battery lifespan, and 60-second hot swapping.',
      image: '/product (1).png',
      icon: BatteryCharging,
      colSpan: 'md:col-span-2 lg:col-span-8',
      stats: '2,500+ Charge Cycles • 7 Year Life'
    },
    {
      id: 'subsidies',
      title: 'PM E-DRIVE 2026 Subsidies',
      category: 'Govt Incentives',
      desc: 'Certified subsidy eligibility providing instant ₹15,000 discount directly on ex-showroom pricing.',
      image: '/product (2).png',
      icon: IndianRupee,
      colSpan: 'md:col-span-1 lg:col-span-4',
      stats: 'Instant ₹15,000 Subsidy'
    },
    {
      id: 'cargo-fleets',
      title: 'Commercial Cargo & Last-Mile Fleets',
      category: 'Commercial Logistics',
      desc: 'Heavy-duty 250kg payload capacity electric scooters built for enterprise e-commerce & delivery fleets.',
      image: '/product (4).png',
      icon: Truck,
      colSpan: 'md:col-span-1 lg:col-span-4',
      stats: '250 kg Payload Capacity'
    },
    {
      id: 'dealerships',
      title: 'Pan-India Dealership Network',
      category: 'Franchise Partner',
      desc: 'Join the EV revolution with exclusive dealership territories, showroom support, and high profit margins.',
      image: '/product (16).png',
      icon: Building2,
      colSpan: 'md:col-span-2 lg:col-span-8',
      stats: 'Pan-India Franchise Expansion'
    }
  ];

  return (
    <section id="focus" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        <SectionTitle
          badge="OUR CORE EV PILLARS"
          badgeColor="bg-[#EA580C]/10 text-[#EA580C] border-[#EA580C]/20"
          title="Engineered for Performance, Savings & Scalability"
          subtitle="Explore the four core engineering & business pillars driving EVDov Electric Mobility."
        />

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-6">
          {evPillars.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                onClick={() => {
                  if (item.id === 'dealerships') onOpenFranchise();
                  else onOpenTestDrive();
                }}
                className={`${item.colSpan} relative rounded-[32px] overflow-hidden group cursor-pointer border border-slate-200/80 shadow-xs hover:shadow-2xl hover:border-slate-300 transition-all duration-500 min-h-[300px] flex flex-col justify-end p-8 bg-gradient-to-br from-slate-900 via-[#1E3A8A] to-slate-900`}
              >
                {/* Background Scooter Graphic */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute right-4 bottom-4 w-72 h-auto object-contain group-hover:scale-105 transition-transform duration-700 opacity-30 group-hover:opacity-50"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-[#0F172A]/50 to-transparent group-hover:from-[#0F172A]/95 transition-all"></div>

                {/* Top Badge */}
                <div className="absolute top-6 left-6 flex items-center gap-2 z-10">
                  <span className="bg-white/90 backdrop-blur-md px-3.5 py-1 rounded-full text-[11px] font-black text-[#1E3A8A] border border-white/50 flex items-center gap-1.5 shadow-sm">
                    <Icon className="w-3.5 h-3.5 text-[#EA580C]" />
                    <span>{item.category}</span>
                  </span>
                </div>

                {/* Bottom Content */}
                <div className="relative z-10 space-y-2 text-white">
                  <span className="text-xs font-mono font-extrabold text-cyan-300 tracking-wider uppercase">{item.stats}</span>
                  <h3 className="text-2xl font-black text-white leading-tight group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed max-w-xl font-medium opacity-90 line-clamp-2">
                    {item.desc}
                  </p>

                  <div className="pt-2 flex items-center gap-2 text-xs font-black text-amber-300 group-hover:translate-x-2 transition-transform">
                    <span>Explore details</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
