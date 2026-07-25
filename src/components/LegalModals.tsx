import React from 'react';
import { X, ShieldCheck, FileText } from 'lucide-react';

interface LegalModalProps {
  type: 'terms' | 'privacy' | null;
  onClose: () => void;
}

export const LegalModals: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const isTerms = type === 'terms';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl relative text-slate-200">
        <div className="p-6 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {isTerms ? <FileText className="w-5 h-5 text-cyan-400" /> : <ShieldCheck className="w-5 h-5 text-emerald-400" />}
            <h3 className="font-bold text-base text-white">
              {isTerms ? 'Terms & Conditions • DOV India Group' : 'Privacy Policy • DOV India Group'}
            </h3>
          </div>
          <button onClick={onClose} className="p-2 text-slate-400 hover:text-white rounded-lg bg-slate-800">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-4 text-xs leading-relaxed max-h-[70vh] overflow-y-auto text-slate-300">
          {isTerms ? (
            <>
              <p>Welcome to www.dovindia.in ("Website"), operated by DOV India Group, comprising EVDov Electric Mobility and DOV CSR Foundation.</p>
              <h4 className="font-bold text-white">1. EV Vehicle Bookings & Specifications</h4>
              <p>All prices listed on the website for EVDov scooters are ex-showroom prices after applying PM E-DRIVE subsidy guidelines. Final on-road prices may vary depending on state road taxes, insurance, and local registration fees.</p>
              <h4 className="font-bold text-white">2. CSR Donations & 80G Tax Certificates</h4>
              <p>All financial contributions made to DOV Foundation are non-refundable. Instant 80G tax receipts are generated based on the PAN details supplied by the donor during transaction processing.</p>
              <h4 className="font-bold text-white">3. Intellectual Property</h4>
              <p>All logos, designs, trademarks, and content on this portal are the sole property of DOV India Group.</p>
            </>
          ) : (
            <>
              <p>DOV India Group respects your privacy and is committed to protecting your personal data in compliance with Indian IT laws and Digital Personal Data Protection (DPDP) Act.</p>
              <h4 className="font-bold text-white">1. Information Collection</h4>
              <p>We collect personal information such as name, phone number, email address, city, and PAN card details (for 80G receipts) strictly when voluntarily provided for test drive bookings, WhatsApp inquiries, dealership applications, or donations.</p>
              <h4 className="font-bold text-white">2. Data Usage & Security</h4>
              <p>Your contact details are used solely to communicate regarding requested services, WhatsApp support, or tax receipts. We do NOT sell or share your data with third-party advertisers.</p>
              <h4 className="font-bold text-white">3. WhatsApp Communication Opt-in</h4>
              <p>By initiating a WhatsApp chat or submitting a contact form, you consent to receiving operational updates and test drive confirmations on WhatsApp.</p>
            </>
          )}
        </div>

        <div className="p-4 border-t border-slate-800 text-right">
          <button onClick={onClose} className="bg-slate-800 hover:bg-slate-700 text-white font-bold px-5 py-2 rounded-xl text-xs">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
