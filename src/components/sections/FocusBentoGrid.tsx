import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Ambulance, TreePine, Users, ShieldAlert, Utensils, Smile, Home, ArrowRight, Heart } from 'lucide-react';
import { SectionTitle } from '../ui/ReusableComponents';

interface FocusBentoGridProps {
  onSelectFocus: (focusId: string) => void;
  onOpenDonation: () => void;
}

export const FocusBentoGrid: React.FC<FocusBentoGridProps> = ({ onSelectFocus, onOpenDonation }) => {
  const focusAreas = [
    {
      id: 'education',
      title: 'Quality Education',
      category: 'Education',
      desc: 'Digital smart classrooms, solar powered labs, and girl child STEM scholarships.',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
      icon: GraduationCap,
      colSpan: 'md:col-span-2 lg:col-span-8',
      stats: '35,000+ Students Educated'
    },
    {
      id: 'healthcare',
      title: 'Emergency Healthcare',
      category: 'Healthcare',
      desc: '24/7 ICU beds, emergency ambulance dispatch, and pediatric surgery aid.',
      image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80',
      icon: Ambulance,
      colSpan: 'md:col-span-1 lg:col-span-4',
      stats: '12,500+ Patients Saved'
    },
    {
      id: 'environment',
      title: 'Life on Land & Forestry',
      category: 'Environment',
      desc: 'Miyawaki afforestation, native saplings, and carbon sink biodiversity corridors.',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80',
      icon: TreePine,
      colSpan: 'md:col-span-1 lg:col-span-4',
      stats: '50,000+ Trees Planted'
    },
    {
      id: 'food',
      title: 'Zero Hunger & Ration Vans',
      category: 'Food Security',
      desc: 'Free cooked meal vans serving daily wage earners & hospital caretakers.',
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80',
      icon: Utensils,
      colSpan: 'md:col-span-2 lg:col-span-4',
      stats: '1.2 Million Meals Served'
    },
    {
      id: 'women',
      title: 'Women Empowerment',
      category: 'Livelihood',
      desc: 'EV assembly training, battery diagnostics certification, and micro-loan access.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
      icon: Users,
      colSpan: 'md:col-span-1 lg:col-span-4',
      stats: '6,200+ Women Certified'
    },
    {
      id: 'relief',
      title: 'Disaster Emergency Relief',
      category: 'Disaster Aid',
      desc: '72-hour rapid rescue boats, dry ration hampers, and flood medical kits.',
      image: 'https://images.unsplash.com/photo-1547683905-f686c993aae5?auto=format&fit=crop&w=800&q=80',
      icon: ShieldAlert,
      colSpan: 'md:col-span-1 lg:col-span-4',
      stats: '95,000+ Calamity Victims'
    },
    {
      id: 'child',
      title: 'Child Disability Rehab',
      category: 'Child Welfare',
      desc: 'Custom prosthetic limbs, wheelchair donations, and corrective surgeries.',
      image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80',
      icon: Smile,
      colSpan: 'md:col-span-1 lg:col-span-4',
      stats: '4,800+ Children Aided'
    },
    {
      id: 'rural',
      title: 'Rural Microgrids & Water',
      category: 'Infrastructure',
      desc: 'Solar micro-grids and community RO water purification kiosks.',
      image: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80',
      icon: Home,
      colSpan: 'md:col-span-1 lg:col-span-4',
      stats: '38 Solar Microgrids'
    }
  ];

  return (
    <section id="focus" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        <SectionTitle
          badge="OUR FOCUS AREAS"
          badgeColor="bg-[#FF7A00]/10 text-[#FF7A00] border-[#FF7A00]/20"
          title="Holistic Social Development Pillars"
          subtitle="Explore our 8 core development sectors empowering communities across India."
        />

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-6">
          {focusAreas.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                onClick={onOpenDonation}
                className={`${item.colSpan} relative rounded-[32px] overflow-hidden group cursor-pointer border border-slate-200/80 shadow-xs hover:shadow-2xl hover:border-slate-300 transition-all duration-500 min-h-[300px] flex flex-col justify-end p-8`}
              >
                {/* Background Image with Zoom */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-[#0F172A]/40 to-transparent group-hover:from-[#0F172A]/95 transition-all"></div>

                {/* Top Badge */}
                <div className="absolute top-6 left-6 flex items-center gap-2">
                  <span className="bg-white/90 backdrop-blur-md px-3.5 py-1 rounded-full text-[11px] font-extrabold text-[#165DFF] border border-white/50 flex items-center gap-1.5 shadow-sm">
                    <Icon className="w-3.5 h-3.5 text-[#165DFF]" />
                    <span>{item.category}</span>
                  </span>
                </div>

                {/* Bottom Content */}
                <div className="relative z-10 space-y-2 text-white">
                  <span className="text-xs font-mono font-bold text-[#22C55E] tracking-wider uppercase">{item.stats}</span>
                  <h3 className="text-2xl font-extrabold text-white leading-tight group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed max-w-xl opacity-90 line-clamp-2">
                    {item.desc}
                  </p>

                  <div className="pt-2 flex items-center gap-2 text-xs font-bold text-white group-hover:translate-x-2 transition-transform">
                    <span>Donate to this cause</span>
                    <ArrowRight className="w-4 h-4 text-amber-400" />
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
