import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Maximize2, X } from 'lucide-react';
import { SectionTitle } from '../ui/ReusableComponents';

export const MasonryGallerySection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const categories = ['All', 'Education', 'Healthcare', 'Environment', 'Relief'];

  const galleryItems = [
    {
      id: 1,
      title: 'Solar Smart Classroom Learning',
      category: 'Education',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
      size: 'h-80'
    },
    {
      id: 2,
      title: 'Emergency Medical Dispatch Unit',
      category: 'Healthcare',
      image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80',
      size: 'h-64'
    },
    {
      id: 3,
      title: 'Dense Miyawaki Afforestation Drive',
      category: 'Environment',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80',
      size: 'h-96'
    },
    {
      id: 4,
      title: 'Disaster Flood Rescue Operation',
      category: 'Relief',
      image: 'https://images.unsplash.com/photo-1547683905-f686c993aae5?auto=format&fit=crop&w=800&q=80',
      size: 'h-72'
    },
    {
      id: 5,
      title: 'Child Malnutrition Nutrition Camp',
      category: 'Healthcare',
      image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=800&q=80',
      size: 'h-80'
    },
    {
      id: 6,
      title: 'Zero Hunger Community Meal Distribution',
      category: 'Relief',
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80',
      size: 'h-64'
    }
  ];

  const filteredItems = galleryItems.filter(
    (item) => selectedFilter === 'All' || item.category === selectedFilter
  );

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#F8FAFC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <SectionTitle
          badge="GROUND ACTION GALLERY"
          badgeColor="bg-[#165DFF]/10 text-[#165DFF] border-[#165DFF]/20"
          title="Moments of Hope & Impact"
          subtitle="Visual evidence of our field initiatives across schools, hospitals, and afforestation zones."
        />

        {/* Category Filters */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
                selectedFilter === cat
                  ? 'bg-[#165DFF] text-white shadow-md'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              onClick={() => setLightboxImage(item.image)}
              className="relative group rounded-[28px] overflow-hidden cursor-pointer border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 break-inside-avoid"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <div className="text-white space-y-1 w-full">
                  <span className="bg-[#165DFF] px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase">{item.category}</span>
                  <h4 className="text-base font-bold">{item.title}</h4>
                </div>
                <div className="absolute top-4 right-4 p-2.5 rounded-full bg-white/20 backdrop-blur-md text-white">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh] rounded-[32px] overflow-hidden shadow-2xl"
            >
              <button
                onClick={() => setLightboxImage(null)}
                className="absolute top-4 right-4 p-3 bg-white/20 hover:bg-white/40 text-white rounded-full backdrop-blur-md z-10"
              >
                <X className="w-6 h-6" />
              </button>
              <img src={lightboxImage} alt="Expanded gallery view" className="w-full h-full object-contain" />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
