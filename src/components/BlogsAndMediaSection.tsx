import React, { useState } from 'react';
import { BLOG_POSTS, MEDIA_COVERAGE } from '../data/mockData';
import { BookOpen, Newspaper, ExternalLink, Calendar, User, ArrowRight, Award } from 'lucide-react';

export const BlogsAndMediaSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'blogs' | 'media'>('blogs');

  return (
    <div className="bg-white text-[#1F2937] min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header Switcher */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <h1 className="text-3xl sm:text-5xl font-black text-[#1E3A8A]">
            Insights, News & Press
          </h1>
          <p className="text-xs sm:text-sm text-[#6B7280]">
            Stay updated with EV subsidies, battery care guides, CSR impact stories, and media features.
          </p>

          <div className="inline-flex p-1 bg-[#F8FAFC] rounded-2xl border border-[#E5E7EB] shadow-xs">
            <button
              onClick={() => setActiveTab('blogs')}
              className={`px-6 py-2.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'blogs' ? 'bg-[#0D6EFD] text-white shadow-sm' : 'text-[#6B7280] hover:text-[#1F2937]'
              }`}
            >
              Blogs & Policy Guides ({BLOG_POSTS.length})
            </button>
            <button
              onClick={() => setActiveTab('media')}
              className={`px-6 py-2.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'media' ? 'bg-[#F97316] text-white shadow-sm' : 'text-[#6B7280] hover:text-[#1F2937]'
              }`}
            >
              Media Press Coverage ({MEDIA_COVERAGE.length})
            </button>
          </div>
        </div>

        {/* Blogs View */}
        {activeTab === 'blogs' && (
          <div className="grid md:grid-cols-3 gap-6">
            {BLOG_POSTS.map((post) => (
              <div key={post.id} className="card-ngo p-0 overflow-hidden flex flex-col justify-between">
                <div>
                  <img src={post.image} alt={post.title} className="w-full h-48 object-cover" referrerPolicy="no-referrer" />
                  <div className="p-6 space-y-3">
                    <div className="flex items-center justify-between text-[10px] text-[#0D6EFD] font-bold uppercase">
                      <span>{post.category}</span>
                      <span className="text-[#6B7280]">{post.readTime}</span>
                    </div>
                    <h3 className="text-lg font-bold text-[#1E3A8A] leading-snug">{post.title}</h3>
                    <p className="text-xs text-[#6B7280] leading-relaxed">{post.excerpt}</p>
                  </div>
                </div>
                <div className="p-6 pt-0 border-t border-gray-100 mt-4 flex items-center justify-between text-[11px] text-[#6B7280]">
                  <span>{post.date}</span>
                  <button className="text-[#0D6EFD] font-bold flex items-center gap-1 hover:underline">
                    Read Article <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Media View */}
        {activeTab === 'media' && (
          <div className="grid md:grid-cols-3 gap-6">
            {MEDIA_COVERAGE.map((item) => (
              <div key={item.id} className="card-ngo p-0 overflow-hidden flex flex-col justify-between">
                <div>
                  <img src={item.image} alt={item.title} className="w-full h-48 object-cover" referrerPolicy="no-referrer" />
                  <div className="p-6 space-y-3">
                    <div className="inline-block px-2.5 py-0.5 rounded bg-orange-50 border border-orange-200 text-[#F97316] font-bold text-[10px] uppercase">
                      {item.badge}
                    </div>
                    <h3 className="text-lg font-bold text-[#1E3A8A] leading-snug">{item.title}</h3>
                    <div className="text-xs font-semibold text-[#6B7280]">{item.outlet} • {item.date}</div>
                    <p className="text-xs text-[#6B7280] leading-relaxed">{item.summary}</p>
                  </div>
                </div>
                <div className="p-6 pt-0 border-t border-gray-100 mt-4">
                  <a
                    href="#media-press"
                    className="w-full bg-[#F8FAFC] hover:bg-gray-100 text-[#F97316] font-bold py-2.5 rounded-xl text-xs flex items-center justify-center gap-1 border border-[#E5E7EB]"
                  >
                    {item.linkText} <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
