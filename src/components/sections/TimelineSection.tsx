import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Award, CheckCircle2, Sparkles, Milestone } from 'lucide-react';
import { SectionTitle } from '../ui/ReusableComponents';

export const TimelineSection: React.FC = () => {
  const milestones = [
    {
      year: '2021',
      title: 'Foundation Incorporation',
      desc: 'Registered under Section-8 of The Companies Act 2013 in Mumbai (Reg No: U85300MH2021NPL374053).'
    },
    {
      year: '2022',
      title: 'Emergency Medical Hotline',
      desc: 'Launched 24/7 critical ambulance dispatch and zero-cost ICU hospital bed support network.'
    },
    {
      year: '2023',
      title: 'Miyawaki Afforestation Launch',
      desc: 'Planted 50,000+ native saplings across degraded hill slopes in Maharashtra bio-zones.'
    },
    {
      year: '2024',
      title: '38 Solar School Microgrids',
      desc: 'Equipped village schools with 5kW rooftop solar panels & battery storage for digital learning.'
    },
    {
      year: '2025',
      title: '1.2M+ Meals & Women Skilling',
      desc: 'Crossed 1.2 million meals served to hospital caretakers & certified 6,200+ women technicians.'
    },
    {
      year: '2026',
      title: 'National Green Impact Award',
      desc: 'Honored in New Delhi for national leadership in grassroots village development & 80G transparency.'
    }
  ];

  return (
    <section id="timeline" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        <SectionTitle
          badge="OUR JOURNEY"
          badgeColor="bg-[#165DFF]/10 text-[#165DFF] border-[#165DFF]/20"
          title="Milestones of Grassroots Growth"
          subtitle="How DOV India Foundation expanded from local relief into a national social impact engine."
        />

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 -translate-x-1/2 hidden sm:block"></div>

          <div className="space-y-12">
            {milestones.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col sm:flex-row items-center gap-6 ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Badge/Dot */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#165DFF] text-white flex items-center justify-center font-black text-xs shadow-md border-4 border-white z-10 hidden sm:flex">
                    {index + 1}
                  </div>

                  {/* Card Content */}
                  <div className="w-full sm:w-1/2 sm:px-8">
                    <div className="bg-[#F8FAFC] p-6 sm:p-8 rounded-[28px] border border-slate-200/80 shadow-xs hover:shadow-md transition-all space-y-2">
                      <span className="inline-block px-3 py-1 rounded-full bg-[#165DFF]/10 text-[#165DFF] text-xs font-mono font-extrabold">
                        {item.year}
                      </span>
                      <h3 className="text-lg font-extrabold text-[#0F172A]">{item.title}</h3>
                      <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
