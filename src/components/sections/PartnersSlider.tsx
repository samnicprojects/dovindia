import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Award } from 'lucide-react';

export const PartnersSlider: React.FC = () => {
  const partners = [
    { name: 'Tata Power Solar', role: '38 Solar Microgrids Partner' },
    { name: 'Mahindra Electric Mobility', role: 'EV Skilling Partner' },
    { name: 'HDFC Bank Parivartan', role: 'Clean Water Kiosks' },
    { name: 'NITI Aayog Darpan', role: 'Govt Portal Reg: MH/2021/0284719' },
    { name: 'PM E-DRIVE 2026', role: 'Government Subsidy Approved' },
    { name: 'Ministry of Environment', role: 'Afforestation Partner' }
  ];

  return (
    <section className="py-16 bg-white border-y border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-center">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-extrabold uppercase tracking-wider">
          <ShieldCheck className="w-3.5 h-3.5 text-[#165DFF]" />
          <span>OUR TRUSTED CORPORATE & INSTITUTIONAL PARTNERS</span>
        </div>

        {/* Grayscale-to-Color Logo Slider */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 shadow-2xs hover:border-[#165DFF]/40 hover:shadow-md transition-all text-center space-y-1 group cursor-pointer"
            >
              <h4 className="text-sm font-black text-[#0F172A] group-hover:text-[#165DFF] transition-colors">{partner.name}</h4>
              <p className="text-[10px] font-semibold text-slate-500 line-clamp-1">{partner.role}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
