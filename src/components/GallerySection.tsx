import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/gallery';
import { Camera, Film, Filter, Calendar, Sparkles } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Plantation', 'Education', 'Healthcare', 'EV Mobility', 'Solar', 'Relief'];

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (selectedCategory === 'All') return true;
    return item.category === selectedCategory;
  });

  return (
    <div className="bg-[#F8FAFC] text-[#1F2937] min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs text-[#0D6EFD] font-bold">
            <Camera className="w-3.5 h-3.5 text-[#0D6EFD]" />
            <span>FIELD MEDIA & GALLERY</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-[#1E3A8A]">
            Photo & Video Field Gallery
          </h1>

          <p className="text-xs sm:text-sm text-[#6B7280]">
            Real photos from our tree plantation drives, solar school installations, mobile healthcare clinics, and EVDov R&D test tracks.
          </p>

          <div className="inline-flex p-1 bg-white rounded-2xl border border-[#E5E7EB] shadow-sm flex-wrap justify-center gap-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedCategory === cat ? 'bg-[#0D6EFD] text-white shadow-sm' : 'text-[#6B7280] hover:text-[#1F2937]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div key={item.id} className="card-ngo p-0 overflow-hidden flex flex-col justify-between">
              <div>
                <div className="relative h-56 overflow-hidden">
                  <img src={item.url} alt={item.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" referrerPolicy="no-referrer" />
                  <span className="absolute top-3 left-3 bg-white/90 backdrop-blur border border-gray-200 text-[#0D6EFD] text-[10px] px-2.5 py-0.5 rounded-full font-bold uppercase shadow-sm">
                    {item.category}
                  </span>
                </div>
                <div className="p-5 space-y-2">
                  <h3 className="text-base font-bold text-[#1E3A8A]">{item.title}</h3>
                  <p className="text-xs text-[#6B7280] leading-relaxed">{item.caption}</p>
                </div>
              </div>

              <div className="p-5 pt-0 border-t border-gray-100 mt-2 text-[11px] text-[#6B7280] flex items-center justify-between">
                <span className="flex items-center gap-1 font-mono"><Calendar className="w-3.5 h-3.5 text-[#0D6EFD]" /> {item.date}</span>
                <span className="text-[#6B7280] font-bold uppercase">{item.type}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
