import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, HeartHandshake, CheckCircle2, ArrowRight, Building, FileText, MapPin, Target, Compass } from 'lucide-react';
import { Button, SectionTitle } from '../ui/ReusableComponents';

interface AboutSectionProps {
  onOpenDonation: () => void;
  onOpenVolunteer: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenDonation, onOpenVolunteer }) => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#F8FAFC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        <SectionTitle
          badge="ABOUT DOV INDIA FOUNDATION"
          badgeColor="bg-[#165DFF]/10 text-[#165DFF] border-[#165DFF]/20"
          title="Village Development Centric National NGO"
          subtitle="Registered under Section-8 of The Companies Act 2013, base in Mumbai. Dedicated to bringing rural India into the mainstream of sustainable development."
        />

        {/* Split Layout */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image Stack */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-[32px] overflow-hidden shadow-2xl border-4 border-white aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1000&q=80"
                alt="DOV Foundation field work"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="bg-[#22C55E] px-3 py-1 rounded-full text-[10px] font-bold uppercase">Section-8 Non-Profit</span>
                <h3 className="text-xl font-bold">100% Transparent Financial Operations</h3>
              </div>
            </div>

            {/* Overlapping Secondary Card */}
            <div className="absolute -bottom-8 -right-6 bg-white p-6 rounded-[24px] border border-slate-200 shadow-xl max-w-xs hidden sm:block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#FF7A00]/10 text-[#FF7A00] flex items-center justify-center font-bold">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0F172A]">80G Certified</h4>
                  <p className="text-xs text-slate-500">Income Tax Act Section 80G(5)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Mission Narrative & Registration Cards */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] leading-tight">
                Empowering Rural Communities Through Direct Interventions
              </h3>
              <p className="text-base text-slate-600 leading-relaxed">
                We started extending help to needy children and youth who were eager to study and work for a better life. Today, our team spans multiple Indian states, running shelter homes, solar smart school microgrids, and mobile emergency ambulance lines.
              </p>
            </div>

            {/* Official Credentials Box */}
            <div className="bg-white p-6 rounded-[24px] border border-slate-200/80 shadow-xs space-y-3">
              <h4 className="text-xs font-extrabold text-[#165DFF] uppercase tracking-wider flex items-center gap-2">
                <Building className="w-4 h-4" /> Official Registration Credentials
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 font-medium pt-1">
                <div><strong>Reg No:</strong> U85300MH2021NPL374053</div>
                <div><strong>PAN No:</strong> AAICD9879P</div>
                <div><strong>Establishment:</strong> 28/12/2021</div>
                <div><strong>Type:</strong> Sec-8 Non-Profit NGO</div>
                <div className="sm:col-span-2 text-slate-500 pt-1">
                  <strong>Headquarters:</strong> B227, 2nd Floor, Eastern Business District, LBS Rd, Bhandup West, Mumbai, MH 400078
                </div>
              </div>
            </div>

            {/* Vision & Mission Cards Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-blue-50/60 p-5 rounded-2xl border border-blue-100 space-y-2">
                <div className="flex items-center gap-2 text-[#165DFF] font-extrabold text-sm">
                  <Compass className="w-4 h-4" /> OUR VISION
                </div>
                <p className="text-xs text-slate-700 font-semibold leading-relaxed">
                  To make rural villages self-dependent for their core health, education, and livelihood needs.
                </p>
              </div>

              <div className="bg-amber-50/60 p-5 rounded-2xl border border-amber-100 space-y-2">
                <div className="flex items-center gap-2 text-[#FF7A00] font-extrabold text-sm">
                  <Target className="w-4 h-4" /> OUR MISSION
                </div>
                <p className="text-xs text-slate-700 font-semibold leading-relaxed">
                  Reach rural hamlets, formulate policies, implement sustainable solar & water infrastructure.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button variant="primary" icon={HeartHandshake} onClick={onOpenDonation}>
                Support Our Mission
              </Button>
              <Button variant="outline" icon={ArrowRight} onClick={onOpenVolunteer}>
                Join as Volunteer
              </Button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
