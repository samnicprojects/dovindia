import React from 'react';
import { motion } from 'motion/react';
import { TreePine, Utensils, GraduationCap, Ambulance, ShieldCheck, HeartHandshake } from 'lucide-react';
import { CounterItem, SectionTitle } from '../ui/ReusableComponents';

export const CounterSection: React.FC = () => {
  return (
    <section id="counter" className="py-16 bg-white border-y border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionTitle
          badge="VERIFIED FIELD IMPACT"
          badgeColor="bg-emerald-50 text-[#22C55E] border-emerald-200"
          title="Transforming Lives Across India"
          subtitle="Real, measurable outcomes recorded across rural hamlets, tribal belts, and emergency medical corridors."
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <CounterItem
            target={50000}
            suffix="+"
            label="Native Trees Planted"
            icon={TreePine}
          />
          <CounterItem
            target={1200000}
            suffix="+"
            label="Meals Served"
            icon={Utensils}
          />
          <CounterItem
            target={35000}
            suffix="+"
            label="Students Educated"
            icon={GraduationCap}
          />
          <CounterItem
            target={12500}
            suffix="+"
            label="Emergency Patients"
            icon={Ambulance}
          />
        </div>
      </div>
    </section>
  );
};
