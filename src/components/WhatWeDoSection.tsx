import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Heart, Search, GraduationCap, HeartHandshake, Users, Building, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';
import { PageMode } from '../types';
import { SectionTitle, Button, Card } from './ui/ReusableComponents';

interface WhatWeDoSectionProps {
  onNavigate?: (mode: PageMode) => void;
  onOpenTestDrive?: () => void;
  onOpenDonation?: () => void;
}

export const WHAT_WE_DO_ITEMS = [
  {
    id: 'find-fund',
    title: 'We Find & Fund',
    description: 'We maintain secret databases in order to reach as many youth as possible. We approach and fund all those who are in need.',
    icon: Search,
    color: 'from-[#165DFF] to-[#3B82F6]'
  },
  {
    id: 'educate',
    title: 'We Educate',
    description: "Today's youth match dynamic talents and require guidance at every step. That's where we take care of them like our own.",
    icon: GraduationCap,
    color: 'from-[#7C3AED] to-[#9333EA]'
  },
  {
    id: 'provide-care',
    title: 'We Provide Care',
    description: 'We build schools for the underprivileged children so they are encouraged to attend school with their friends.',
    icon: HeartHandshake,
    color: 'from-[#FF7A00] to-[#EA580C]'
  },
  {
    id: 'consult',
    title: 'We Consult',
    description: 'We run small scale schools for the underprivileged children and youth at daily wage rates for a better future.',
    icon: Users,
    color: 'from-[#059669] to-[#10B981]'
  },
  {
    id: 'build-schools',
    title: 'We Build Schools',
    description: 'We run organizations where we employ youngsters so they can live micro dreams for themselves and their families.',
    icon: Building,
    color: 'from-[#2563EB] to-[#1D4ED8]'
  },
  {
    id: 'strengthen',
    title: 'We Strengthen',
    description: 'We believe that education and employment allow people to discover their potential and a better life.',
    icon: ShieldCheck,
    color: 'from-[#D97706] to-[#F59E0B]'
  }
];

export const WhatWeDoGrid: React.FC<{ onNavigate?: (mode: PageMode) => void; onOpenDonation?: () => void }> = ({ onNavigate, onOpenDonation }) => {
  const careForItems = [
    {
      title: 'New life for children, in a new land',
      desc: 'We have built shelter homes in different regions so children can move out of underdeveloped areas to live, study and work in bigger and better cities.',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80',
      badge: 'Shelter & Migration'
    },
    {
      title: 'A new future for exploited children',
      desc: 'Children and youngsters who are exploited in their early days need a helping hand and support for their mental health. We take them out of this environment and give them a better life.',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
      badge: 'Child Rehabilitation'
    },
    {
      title: 'Bringing dreams within reach for children',
      desc: 'The underprivileged children do not have access to required financial help and resources needed to live the life of their dreams. We help them with everything they\'ll need to live their dreams.',
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80',
      badge: 'Financial & Resource Aid'
    }
  ];

  return (
    <div className="space-y-20">
      
      {/* 1. Header Title */}
      <div className="text-center">
        <h1 className="text-3xl sm:text-5xl font-black text-[#0F172A] tracking-tight uppercase inline-block relative pb-3">
          WHAT WE DO
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1.5 bg-gradient-to-r from-[#165DFF] to-[#FF7A00] rounded-full"></span>
        </h1>
      </div>

      {/* 2. Top Intro Split Banner */}
      <div className="bg-white p-8 sm:p-12 rounded-[36px] border border-slate-200/80 shadow-md grid md:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
        <div className="md:col-span-7 space-y-6">
          <span className="bg-emerald-50 text-[#22C55E] px-3.5 py-1 rounded-full text-xs font-extrabold border border-emerald-200 inline-flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4" /> Empowering Youth & Children
          </span>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0F172A] leading-tight">
            We support children and youth to reach their full potential!
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            We run shelter homes, schools and a reasonable mess that helps such needy young people. We also have our helpline offices that can be approached at any time.
          </p>

          {onOpenDonation && (
            <Button variant="primary" size="md" icon={Heart} onClick={onOpenDonation}>
              Support Our Youth Programs
            </Button>
          )}
        </div>

        <div className="md:col-span-5 relative rounded-[28px] overflow-hidden shadow-xl aspect-[4/3]">
          <img
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80"
            alt="Children smiling"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/40 to-transparent"></div>
        </div>
      </div>

      {/* 3. 6 Core Action Cards Grid */}
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A]">Our 6 Strategic Pillars of Action</h2>
          <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto">How DOV India Foundation identifies, educates, and sustains vulnerable children across regions.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHAT_WE_DO_ITEMS.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white p-8 rounded-[28px] border border-slate-200/80 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between space-y-6 group"
              >
                <div className="space-y-4">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${item.color} text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-[#0F172A] tracking-tight group-hover:text-[#165DFF] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-extrabold text-[#165DFF] uppercase tracking-wider">DOV Action Pillar</span>
                  <div className="w-6 h-1 bg-gradient-to-r from-[#165DFF] to-[#FF7A00] rounded-full"></div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* 4. "What we care for" Section */}
      <div className="max-w-6xl mx-auto space-y-12 pt-6">
        <div className="text-center space-y-2">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            What we care for
          </h2>
          <p className="text-sm text-slate-500 max-w-2xl mx-auto">
            Dedicated interventions aimed at creating long-term impact for every child in our care.
          </p>
        </div>

        <div className="space-y-12">
          {careForItems.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 sm:p-10 rounded-[32px] border border-slate-200/80 shadow-md grid md:grid-cols-12 gap-8 items-center"
              >
                <div className={`md:col-span-6 relative rounded-[28px] overflow-hidden aspect-[4/3] ${isEven ? '' : 'md:order-2'}`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-extrabold text-[#165DFF] shadow-xs">
                    {item.badge}
                  </div>
                </div>

                <div className={`md:col-span-6 space-y-4 ${isEven ? '' : 'md:order-1'}`}>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                  {onOpenDonation && (
                    <div className="pt-2">
                      <Button variant="secondary" size="sm" icon={Heart} onClick={onOpenDonation}>
                        Sponsor This Cause
                      </Button>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

    </div>
  );
};

export const WhatWeDoSection: React.FC<WhatWeDoSectionProps> = ({ onNavigate, onOpenDonation }) => {
  return (
    <div className="bg-[#F8FAFC] text-[#475569] min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <WhatWeDoGrid onNavigate={onNavigate} onOpenDonation={onOpenDonation} />
      </div>
    </div>
  );
};
