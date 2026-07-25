import React from 'react';
import { motion } from 'motion/react';
import { Quote, MapPin, Heart, CheckCircle2, ArrowRight } from 'lucide-react';
import { SectionTitle, Button } from '../ui/ReusableComponents';

interface ImpactStoriesSectionProps {
  onOpenDonation: () => void;
}

export const ImpactStoriesSection: React.FC<ImpactStoriesSectionProps> = ({ onOpenDonation }) => {
  const stories = [
    {
      name: 'Sunita Sharma (Mother of 6yo Rohan)',
      location: 'Pune, Maharashtra',
      initiative: 'Emergency Medical Support',
      quote: 'When my son collapsed with acute heart failure, DOV Foundation funded his cardiac surgery within 4 hours. They gave my child a second life.',
      image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80',
      badge: 'Medical Emergency Saved'
    },
    {
      name: 'Priya Rathod (10th Standard Topper)',
      location: 'Satara District, Maharashtra',
      initiative: 'Quality Education Programme',
      quote: 'With DOV solar digital classroom in our village school, I cleared my board exams with 94% marks and secured an engineering scholarship.',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
      badge: 'Education Excellence'
    },
    {
      name: 'Baliram Gowda (Forest Steward)',
      location: 'Western Ghats Bio-Zone',
      initiative: 'Life on Land Forestry',
      quote: 'We planted 5,000 native trees on barren hill slopes. Now birds have returned, and ground water level in our village wells went up by 8 feet.',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80',
      badge: 'Afforestation Impact'
    }
  ];

  return (
    <section id="stories" className="py-20 lg:py-28 bg-[#F8FAFC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        <SectionTitle
          badge="REAL BENEFICIARY STORIES"
          badgeColor="bg-emerald-50 text-[#22C55E] border-emerald-200"
          title="Voices of Transformation"
          subtitle="Real stories from real lives touched by your generous contributions."
        />

        <div className="space-y-16">
          {stories.map((story, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-12 gap-8 items-center bg-white p-8 sm:p-10 rounded-[36px] border border-slate-200/80 shadow-md ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}
              >
                <div className={`lg:col-span-5 relative rounded-[28px] overflow-hidden aspect-[4/3] ${isEven ? '' : 'lg:order-2'}`}>
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-bold text-[#165DFF] shadow-xs">
                    {story.badge}
                  </div>
                </div>

                <div className={`lg:col-span-7 space-y-6 ${isEven ? '' : 'lg:order-1'}`}>
                  <Quote className="w-12 h-12 text-[#165DFF]/20" />
                  
                  <p className="text-lg sm:text-xl font-medium italic text-[#0F172A] leading-relaxed">
                    "{story.quote}"
                  </p>

                  <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <h4 className="text-base font-extrabold text-[#0F172A]">{story.name}</h4>
                      <p className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3.5 h-3.5 text-[#165DFF]" /> {story.location}
                      </p>
                    </div>

                    <Button variant="secondary" size="sm" icon={Heart} onClick={onOpenDonation}>
                      Sponsor a Cause
                    </Button>
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
