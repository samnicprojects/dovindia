import React, { useEffect } from 'react';
import { PRIVACY_POLICY_CONTENT } from './PrivacyPolicyModal';
import { ShieldCheck, FileText, ArrowLeft, CheckCircle2, Lock } from 'lucide-react';
import { PageMode } from '../types';

interface PrivacyPolicyPageProps {
  onNavigate: (mode: PageMode) => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ onNavigate }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = "Privacy Policy – EV DOV India";
  }, []);

  return (
    <div className="bg-[#F8FAFC] text-[#1F2937] min-h-screen py-12 lg:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Navigation back */}
        <div>
          <button
            onClick={() => onNavigate('home')}
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-[#EA580C] bg-white px-4 py-2.5 rounded-xl border border-slate-200 shadow-sm transition-all cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </button>
        </div>

        {/* Page Header */}
        <div className="bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#0E0C4D] p-8 sm:p-12 rounded-3xl text-white shadow-xl space-y-4 relative overflow-hidden">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#EA580C] text-white flex items-center justify-center font-black shadow-md">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div>
              <span className="text-xs font-bold text-orange-200 uppercase tracking-widest block">Legal & Compliance</span>
              <h1 className="text-2xl sm:text-4xl font-extrabold text-white">{PRIVACY_POLICY_CONTENT.title}</h1>
            </div>
          </div>
          <p className="text-xs text-slate-300 font-mono">
            Effective Date: {PRIVACY_POLICY_CONTENT.effectiveDate} • EV DOV India Legal Framework
          </p>
        </div>

        {/* Policy Document Body */}
        <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-12 shadow-sm space-y-8 text-xs text-slate-700 leading-relaxed font-normal">
          
          <div className="p-5 bg-orange-50 border border-orange-200 rounded-2xl text-slate-800 font-medium text-sm leading-relaxed">
            {PRIVACY_POLICY_CONTENT.intro}
          </div>

          <div className="space-y-8">
            {PRIVACY_POLICY_CONTENT.sections.map((sec) => (
              <div key={sec.id} className="space-y-3 border-b border-slate-100 pb-6 last:border-none">
                <h2 className="font-extrabold text-base text-[#0F172A] flex items-center gap-2">
                  {sec.title}
                </h2>
                <p className="text-slate-600 leading-relaxed text-xs sm:text-sm">{sec.body}</p>
              </div>
            ))}
          </div>

          <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-2 text-slate-600 font-medium">
              <Lock className="w-4 h-4 text-[#EA580C]" />
              <span>Registered Entity: EV DOV India • Section-8 Non-Profit Framework</span>
            </div>
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-2.5 bg-[#EA580C] hover:bg-[#C2410C] text-white font-extrabold text-xs rounded-xl shadow-md transition-all cursor-pointer"
            >
              Contact Legal Officer
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
