import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Clock, ArrowRight, X, Sparkles } from 'lucide-react';
import { SectionTitle, Button } from '../ui/ReusableComponents';

export const NewsSection: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<any | null>(null);

  const articles = [
    {
      id: 1,
      title: 'PM E-DRIVE 2026 Subsidy & 80G Tax Exemption Guide',
      category: 'Policy & Tax',
      date: 'July 18, 2026',
      readTime: '4 Min Read',
      excerpt: 'How customers and donors can maximize upfront price reductions on EV scooters and claim 100% tax deductions.',
      content: 'The Indian electric mobility landscape has entered a golden era with PM E-DRIVE subsidies... Customers purchasing electric scooters can claim up to ₹10,000 instant upfront price reduction along with 80G tax exemptions for foundation contributions.',
      image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'DOV Foundation Awarded National Green Impact Honor in Delhi',
      category: 'NGO Awards',
      date: 'June 24, 2026',
      readTime: '3 Min Read',
      excerpt: 'Recognized by the Ministry of Environment for planting 50,000+ native trees and installing 38 solar school microgrids.',
      content: 'In a prestigious ceremony held at Vigyan Bhawan, New Delhi, DOV India Foundation received top honors for transparent ESG execution, rural afforestation, and 80G tax receipt automation.',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      title: 'How Solar Smart Classrooms Boosted Attendance by 38%',
      category: 'Field Report',
      date: 'May 12, 2026',
      readTime: '5 Min Read',
      excerpt: 'An inspiring impact study showing how 5kW rooftop solar microgrids eliminated power outage dropouts in rural schools.',
      content: 'Power outages used to halt computer education for village students for weeks during the monsoon. Rooftop solar microgrids with lithium battery storage now keep classes running 24/7.',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <section id="news" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        <SectionTitle
          badge="LATEST NEWS & INSIGHTS"
          badgeColor="bg-[#FF7A00]/10 text-[#FF7A00] border-[#FF7A00]/20"
          title="Field Stories & Policy Updates"
          subtitle="Stay updated with our latest field operations, policy breakdowns, and NGO milestones."
        />

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onClick={() => setSelectedArticle(article)}
              className="bg-white rounded-[28px] border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-extrabold text-[#165DFF]">
                    {article.category}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-4 text-[11px] text-slate-400 font-medium">
                    <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {article.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {article.readTime}</span>
                  </div>

                  <h3 className="text-lg font-extrabold text-[#0F172A] group-hover:text-[#165DFF] transition-colors leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <div className="pt-3 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-[#165DFF] group-hover:translate-x-1 transition-transform">
                  <span>Read Full Article</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Article Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-[32px] max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative space-y-4 max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-4 right-4 p-2.5 bg-slate-100 text-slate-600 rounded-full hover:bg-slate-200"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-2">
                <span className="bg-[#165DFF]/10 text-[#165DFF] px-3 py-1 rounded-full text-xs font-extrabold">{selectedArticle.category}</span>
                <h3 className="text-2xl font-black text-[#0F172A]">{selectedArticle.title}</h3>
                <p className="text-xs text-slate-400 font-mono">{selectedArticle.date} • {selectedArticle.readTime}</p>
              </div>

              <img src={selectedArticle.image} alt={selectedArticle.title} className="w-full h-64 object-cover rounded-2xl" />

              <p className="text-sm text-slate-700 leading-relaxed pt-2">
                {selectedArticle.content}
              </p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
