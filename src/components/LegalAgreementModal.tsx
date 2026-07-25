import React, { useState } from 'react';
import { X, ShieldCheck, FileText, CheckCircle2 } from 'lucide-react';
import { TERMS_CONTENT } from './TermsModal';
import { PRIVACY_POLICY_CONTENT } from './PrivacyPolicyModal';

interface LegalAgreementModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAccept: () => void;
  initialTab?: 'terms' | 'privacy';
}

export const LegalAgreementModal: React.FC<LegalAgreementModalProps> = ({
  isOpen,
  onClose,
  onAccept,
  initialTab = 'terms'
}) => {
  const [activeTab, setActiveTab] = useState<'terms' | 'privacy'>(initialTab);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white border border-slate-200 rounded-3xl w-full max-w-3xl overflow-hidden shadow-2xl relative text-slate-800 flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="bg-[#0F172A] p-6 text-white flex items-center justify-between shrink-0 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#EA580C] text-white flex items-center justify-center font-bold">
              {activeTab === 'terms' ? <FileText className="w-6 h-6" /> : <ShieldCheck className="w-6 h-6" />}
            </div>
            <div>
              <h3 className="font-extrabold text-base text-white">EV DOV India Legal Framework</h3>
              <p className="text-xs text-orange-200">Please review & accept to proceed with your EV Portal account</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selection */}
        <div className="flex border-b border-slate-200 bg-slate-100 shrink-0">
          <button
            type="button"
            onClick={() => setActiveTab('terms')}
            className={`flex-1 py-3 text-xs font-extrabold flex items-center justify-center gap-2 border-b-2 transition-all cursor-pointer ${
              activeTab === 'terms'
                ? 'border-[#EA580C] text-[#EA580C] bg-white'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <FileText className="w-4 h-4" /> Terms & Conditions
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('privacy')}
            className={`flex-1 py-3 text-xs font-extrabold flex items-center justify-center gap-2 border-b-2 transition-all cursor-pointer ${
              activeTab === 'privacy'
                ? 'border-[#EA580C] text-[#EA580C] bg-white'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <ShieldCheck className="w-4 h-4" /> Privacy Policy
          </button>
        </div>

        {/* Document Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-xs text-slate-700 leading-relaxed font-normal">
          {activeTab === 'terms' ? (
            <>
              <div className="p-4 bg-orange-50 border border-orange-200 rounded-2xl text-slate-800 font-medium leading-relaxed">
                {TERMS_CONTENT.intro}
              </div>

              <div className="space-y-6">
                {TERMS_CONTENT.sections.map((sec) => (
                  <div key={sec.id} className="space-y-2 border-b border-slate-100 pb-4 last:border-none">
                    <h4 className="font-extrabold text-sm text-[#0F172A]">{sec.title}</h4>
                    <p className="text-slate-600 whitespace-pre-line">{sec.body}</p>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <>
              <div className="p-4 bg-orange-50 border border-orange-200 rounded-2xl text-slate-800 font-medium leading-relaxed">
                {PRIVACY_POLICY_CONTENT.intro}
              </div>

              <div className="space-y-6">
                {PRIVACY_POLICY_CONTENT.sections.map((sec) => (
                  <div key={sec.id} className="space-y-2 border-b border-slate-100 pb-4 last:border-none">
                    <h4 className="font-extrabold text-sm text-[#0F172A]">{sec.title}</h4>
                    <p className="text-slate-600">{sec.body}</p>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        {/* Action Bar */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between shrink-0 gap-4">
          <div className="text-[11px] text-slate-500 font-medium">
            Ticking agrees to both Terms & Conditions and Privacy Policy
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-5 py-2.5 bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold text-xs rounded-xl transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                onAccept();
                onClose();
              }}
              className="px-6 py-2.5 bg-[#EA580C] hover:bg-[#C2410C] text-white font-extrabold text-xs rounded-xl shadow-lg transition-all cursor-pointer flex items-center gap-2 hover:scale-105"
            >
              <CheckCircle2 className="w-4.5 h-4.5" /> Accept & Tick Agree
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
