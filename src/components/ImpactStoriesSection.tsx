import React from 'react';
import { IMPACT_STATS, SUCCESS_STORIES } from '../data/impact';
import { Sparkles, HeartHandshake, CheckCircle2, Quote, Award, TreePine, Sun, Zap } from 'lucide-react';

interface ImpactStoriesSectionProps {
  onOpenDonation: () => void;
}

export const ImpactStoriesSection: React.FC<ImpactStoriesSectionProps> = ({ onOpenDonation }) => {
  return (
    <div className="bg-[#F8FAFC] text-[#1F2937] min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs text-[#0D6EFD] font-bold">
            <Sparkles className="w-3.5 h-3.5 text-[#0D6EFD]" />
            <span>MEASURABLE SOCIAL & ECOLOGICAL IMPACT</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-[#1E3A8A]">
            Impact Statistics & Beneficiary Stories
          </h1>

          <p className="text-xs sm:text-sm text-[#6B7280]">
            Real stories from farmers, students, solar village sarpanches, and EV delivery riders whose lives have transformed through DOV India initiatives.
          </p>
        </div>

        {/* Impact Numbers Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {IMPACT_STATS.map((stat) => (
            <div key={stat.id} className="card-ngo p-6 text-center space-y-2">
              <div className="text-3xl sm:text-5xl font-black text-[#0D6EFD]">
                {stat.number}
              </div>
              <div className="text-xs font-bold text-[#1E3A8A] uppercase">{stat.label}</div>
              <p className="text-[11px] text-[#6B7280] leading-tight">{stat.subtext}</p>
            </div>
          ))}
        </div>

        {/* Success Stories */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-[#1E3A8A] text-center">Ground-Level Beneficiary Voices</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {SUCCESS_STORIES.map((story) => (
              <div key={story.id} className="card-ngo p-6 space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="text-xs font-bold text-[#F97316] uppercase tracking-wider">{story.programmeTitle}</div>
                  <Quote className="w-8 h-8 text-[#0D6EFD]/20" />
                  <p className="text-xs text-[#6B7280] italic leading-relaxed">"{story.story}"</p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <img src={story.image} alt={story.name} className="w-11 h-11 rounded-full object-cover border border-gray-200" referrerPolicy="no-referrer" />
                  <div>
                    <div className="text-xs font-bold text-[#1E3A8A]">{story.name}</div>
                    <div className="text-[10px] text-[#6B7280]">{story.roleLocation}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
