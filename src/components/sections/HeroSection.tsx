import React from 'react';
import { motion } from 'motion/react';
import { Heart, Users, ShieldCheck, ChevronDown, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { Button } from '../ui/ReusableComponents';

interface HeroSectionProps {
  onOpenDonation: () => void;
  onOpenVolunteer: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenDonation,
  onOpenVolunteer,
  onNavigateSection
}) => {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-16 lg:py-24 bg-mesh-gradient">
      
      {/* Background Cinematic Image with Soft Mesh Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=2000&q=80"
          alt="Underprivileged children smiling"
          className="w-full h-full object-cover object-center opacity-15 filter blur-[2px]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFC]/90 via-[#F8FAFC]/75 to-[#F8FAFC]"></div>
      </div>

      {/* Floating Blurred Shapes for Depth */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-[#165DFF]/15 rounded-full blur-3xl animate-glow pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-[#FF7A00]/15 rounded-full blur-3xl animate-glow pointer-events-none" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">

          {/* Left Text Content */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 border border-slate-200 shadow-xs text-xs font-extrabold text-[#165DFF] backdrop-blur-md"
            >
              <Sparkles className="w-4 h-4 text-[#FF7A00]" />
              <span>DOV INDIA FOUNDATION • REGISTERED SEC-8 NGO</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#0F172A] tracking-tight leading-[1.1]"
            >
              Every Helping Hand <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#165DFF] via-[#7C3AED] to-[#FF7A00]">
                Creates a Better Future
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal"
            >
              We are a team of change-makers dedicated to village development, emergency healthcare, quality education, hunger relief, and environmental sustainability across rural India.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2"
            >
              <Button
                variant="secondary"
                size="lg"
                icon={Heart}
                onClick={onOpenDonation}
              >
                Donate Now
              </Button>

              <Button
                variant="outline"
                size="lg"
                icon={Users}
                onClick={onOpenVolunteer}
              >
                Become a Volunteer
              </Button>
            </motion.div>

            {/* Micro Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-4 text-xs font-bold text-slate-600"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#22C55E]" />
                <span>Instant 80G Tax Receipt</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#165DFF]" />
                <span>Transparent Financial Audit</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FF7A00]" />
                <span>100% Direct Impact</span>
              </div>
            </motion.div>
          </div>

          {/* Right Floating Image & Impact Cards */}
          <div className="lg:col-span-5 relative flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative w-full max-w-md aspect-[4/5] rounded-[36px] overflow-hidden shadow-2xl border-4 border-white"
            >
              <img
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80"
                alt="Rural school student"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="bg-[#FF7A00] px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider">Education Initiative</span>
                <h3 className="text-lg font-bold">Empowering 35,000+ Students</h3>
                <p className="text-xs text-slate-200">Solar smart classrooms installed across 85 village schools.</p>
              </div>
            </motion.div>

            {/* Floating Glass Statistic Card 1 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute -bottom-6 -left-6 sm:left-0 bg-white/90 backdrop-blur-xl p-4 rounded-2xl border border-slate-200/80 shadow-xl flex items-center gap-3 z-20"
            >
              <div className="w-12 h-12 rounded-xl bg-[#22C55E]/10 text-[#22C55E] flex items-center justify-center font-bold">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <span className="text-lg font-black text-[#0F172A] block leading-tight">100% 80G</span>
                <span className="text-[11px] font-bold text-slate-500 uppercase">Tax Deductible</span>
              </div>
            </motion.div>

            {/* Floating Glass Statistic Card 2 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute top-10 -right-4 bg-white/90 backdrop-blur-xl p-4 rounded-2xl border border-slate-200/80 shadow-xl flex items-center gap-3 z-20 hidden sm:flex"
            >
              <div className="w-12 h-12 rounded-xl bg-[#165DFF]/10 text-[#165DFF] flex items-center justify-center font-bold">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <span className="text-lg font-black text-[#0F172A] block leading-tight">12,500+</span>
                <span className="text-[11px] font-bold text-slate-500 uppercase">Emergency Patients</span>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          onClick={() => onNavigateSection('counter')}
          className="flex flex-col items-center justify-center gap-1 pt-12 cursor-pointer opacity-60 hover:opacity-100 transition-opacity"
        >
          <span className="text-[11px] font-extrabold uppercase tracking-widest text-slate-500">Scroll to Explore</span>
          <ChevronDown className="w-4 h-4 text-slate-500" />
        </motion.div>
      </div>
    </section>
  );
};
