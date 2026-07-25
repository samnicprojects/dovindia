import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, Quote, Heart } from 'lucide-react';
import { SectionTitle } from '../ui/ReusableComponents';

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: 'Dr. Anita Joshi',
      role: 'Donor & CSR Committee Member',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
      rating: 5,
      quote: 'DOV India Foundation provides the most transparent ESG compliance and instant 80G tax receipt automation we have experienced among Indian NGOs. Truly world-class transparency.'
    },
    {
      name: 'Rajesh Malhotra',
      role: 'Monthly Sustaining Donor',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
      rating: 5,
      quote: 'Seeing photos and geo-tagged updates of the solar classroom microgrids my monthly donations support gives me immense joy. I know every rupee reaches the village.'
    },
    {
      name: 'Kavita Jadhav',
      role: 'Community Women Lead',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80',
      rating: 5,
      quote: 'The EV battery diagnostic skilling program provided us with health insurance, gloves, and double income. We feel like respected environmental leaders.'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-[#F8FAFC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        <SectionTitle
          badge="DONOR & BENEFICIARY VOICES"
          badgeColor="bg-emerald-50 text-[#22C55E] border-emerald-200"
          title="Loved by Donors, Trusted by Communities"
          subtitle="Read how our transparent Section 80G foundation makes a tangible difference every day."
        />

        {/* Carousel Card Container */}
        <div className="max-w-4xl mx-auto relative bg-white p-8 sm:p-12 rounded-[36px] border border-slate-200/80 shadow-xl">
          <Quote className="w-20 h-20 text-[#165DFF]/10 absolute top-6 right-6" />

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-6 relative z-10"
            >
              {/* Star Rating */}
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-lg sm:text-2xl font-serif italic text-[#0F172A] leading-relaxed">
                "{testimonials[currentIndex].quote}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-[#165DFF]/20"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="text-base font-extrabold text-[#0F172A]">{testimonials[currentIndex].name}</h4>
                  <p className="text-xs text-slate-500 font-semibold">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Controls */}
          <div className="flex items-center justify-end gap-2 pt-6">
            <button
              onClick={() => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="p-3 rounded-2xl bg-slate-100 hover:bg-[#165DFF] hover:text-white transition-colors cursor-pointer text-slate-700"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => setCurrentIndex((prev) => (prev + 1) % testimonials.length)}
              className="p-3 rounded-2xl bg-slate-100 hover:bg-[#165DFF] hover:text-white transition-colors cursor-pointer text-slate-700"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
