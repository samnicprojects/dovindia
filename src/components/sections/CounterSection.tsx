import React from 'react';
import { motion } from 'motion/react';
import { Zap, BatteryCharging, Gauge, IndianRupee, Award, ShieldCheck } from 'lucide-react';
import { CounterItem, SectionTitle } from '../ui/ReusableComponents';

export const CounterSection: React.FC = () => {
  return (
    <section id="counter" className="py-16 bg-white border-y border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionTitle
          badge="EVDov PERFORMANCE METRICS"
          badgeColor="bg-blue-50 text-[#0D6EFD] border-blue-200"
          title="Engineered for Superior EV Performance"
          subtitle="Real, verified statistics backing India's most dependable electric scooter fleet."
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <CounterItem
            target={16}
            suffix="+"
            label="Certified Scooter Models"
            icon={Zap}
          />
          <CounterItem
            target={145}
            suffix=" km"
            label="Peak Range Per Charge"
            icon={BatteryCharging}
          />
          <CounterItem
            target={45000}
            prefix="₹"
            suffix="+"
            label="Yearly Fuel Savings"
            icon={IndianRupee}
          />
          <CounterItem
            target={35000}
            suffix="+"
            label="Happy EV Riders"
            icon={ShieldCheck}
          />
        </div>
      </div>
    </section>
  );
};
