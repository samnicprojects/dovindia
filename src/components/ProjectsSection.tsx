import React, { useState } from 'react';
import { PROJECTS_DATA } from '../data/projects';
import { ProjectItem } from '../types';
import { MapPin, CheckCircle2, Sparkles, HeartHandshake, Calendar, ArrowRight } from 'lucide-react';

interface ProjectsSectionProps {
  onOpenDonation: (initiativeId?: string) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onOpenDonation }) => {
  const [filter, setFilter] = useState<'All' | 'Ongoing' | 'Completed'>('All');

  const filteredProjects = PROJECTS_DATA.filter((p) => {
    if (filter === 'All') return true;
    return p.status === filter;
  });

  return (
    <div className="bg-[#F8FAFC] text-[#1F2937] min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs text-[#0D6EFD] font-bold">
            <Sparkles className="w-3.5 h-3.5 text-[#0D6EFD]" />
            <span>DOV NGO PROJECT PORTFOLIO</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-[#1E3A8A]">
            Ongoing & Completed CSR Projects
          </h1>

          <p className="text-xs sm:text-sm text-[#6B7280]">
            Transparent tracking of ground-level project execution, budget milestones, and beneficiary impact metrics.
          </p>

          <div className="inline-flex p-1 bg-white rounded-2xl border border-[#E5E7EB] shadow-sm">
            {(['All', 'Ongoing', 'Completed'] as const).map((status) => (
              <button
                key={status}
                onClick={() => setFilter(status)}
                className={`px-5 py-2 rounded-xl text-xs font-bold transition-all ${
                  filter === status ? 'bg-[#0D6EFD] text-white shadow-sm' : 'text-[#6B7280] hover:text-[#1F2937]'
                }`}
              >
                {status} Projects
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((proj) => (
            <div key={proj.id} className="card-ngo p-6 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="relative h-56 rounded-2xl overflow-hidden border border-[#E5E7EB]">
                  <img src={proj.image} alt={proj.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  <span className={`absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider shadow-sm ${
                    proj.status === 'Completed' ? 'bg-[#22C55E] text-white' : 'bg-[#0D6EFD] text-white'
                  }`}>
                    {proj.status}
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="text-xs font-bold text-[#F97316] uppercase tracking-wider">{proj.category}</div>
                  <h2 className="text-xl font-bold text-[#1E3A8A]">{proj.title}</h2>
                  <div className="flex items-center gap-2 text-xs text-[#6B7280] font-mono">
                    <MapPin className="w-3.5 h-3.5 text-[#F97316]" /> {proj.location} • <Calendar className="w-3.5 h-3.5 text-[#0D6EFD]" /> {proj.startDate}
                  </div>
                  <p className="text-xs text-[#6B7280] leading-relaxed">{proj.description}</p>
                </div>

                {/* Progress Bar */}
                <div className="space-y-1.5 pt-2">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-[#6B7280]">Achieved: <strong className="text-[#22C55E]">{proj.achieved}</strong></span>
                    <span className="text-[#6B7280]">Target: <strong className="text-[#1F2937]">{proj.targetGoal}</strong></span>
                  </div>
                  <div className="w-full bg-gray-100 h-3 rounded-full overflow-hidden border border-[#E5E7EB]">
                    <div className="bg-gradient-to-r from-[#0D6EFD] to-[#22C55E] h-full rounded-full" style={{ width: `${proj.progressPercent}%` }}></div>
                  </div>
                  <div className="text-[11px] text-right text-[#22C55E] font-bold">{proj.progressPercent}% Completed</div>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between border-t border-gray-100 text-xs">
                <span className="text-[#6B7280] font-mono">Beneficiaries: <strong className="text-[#1F2937]">{proj.beneficiariesCount.toLocaleString('en-IN')}</strong></span>
                <button
                  onClick={() => onOpenDonation('camp-general')}
                  className="btn-donate px-4 py-2 text-xs"
                >
                  <HeartHandshake className="w-3.5 h-3.5" /> Support Project
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
