import React, { useState } from 'react';
import { DONATION_CAMPAIGNS } from '../data/donation';
import { DonationCampaignCard } from '../types';
import { HeartHandshake, ShieldCheck, CheckCircle2, Lock, Sparkles, CreditCard, QrCode, Building, IndianRupee } from 'lucide-react';

interface DonateSectionProps {
  onOpenDonationModal: (initiativeId?: string) => void;
  onOpenWhatsApp: (intent?: string) => void;
}

export const DonateSection: React.FC<DonateSectionProps> = ({
  onOpenDonationModal,
  onOpenWhatsApp
}) => {
  const [selectedGateway, setSelectedGateway] = useState<'razorpay' | 'phonepe' | 'upi' | 'card' | 'banking'>('razorpay');

  return (
    <div className="bg-white text-[#1F2937] min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-50 border border-orange-200 text-xs text-[#F97316] font-bold">
            <Sparkles className="w-3.5 h-3.5 text-[#F97316]" />
            <span>DOV FOUNDATION • 80G TAX EXEMPTION CERTIFIED</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-[#1E3A8A]">
            Support Our Non-Profit Causes & Save Tax
          </h1>

          <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed">
            Choose a campaign card below to sponsor education, plant native forests, provide emergency medical surgeries, or distribute daily food boxes. All donations generate instant Section 80G tax receipts.
          </p>
        </div>

        {/* Payment Gateway Options Bar */}
        <div className="card-ngo p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-[#1E3A8A] flex items-center gap-2">
              <Lock className="w-4 h-4 text-emerald-600" />
              Integrated Payment Gateway Options (Instant 80G Receipts)
            </h3>
            <span className="text-[10px] text-[#F97316] font-mono bg-orange-50 px-2.5 py-1 rounded-lg border border-orange-200 font-bold">
              256-Bit SSL Encrypted
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 text-xs">
            <button
              onClick={() => setSelectedGateway('razorpay')}
              className={`p-3 rounded-2xl border font-bold flex flex-col items-center justify-center gap-1.5 transition-all ${
                selectedGateway === 'razorpay' ? 'bg-[#0D6EFD] text-white border-[#0D6EFD] shadow-md' : 'bg-white border-[#E5E7EB] text-[#6B7280] hover:text-[#1F2937]'
              }`}
            >
              <CreditCard className="w-5 h-5" />
              <span>Razorpay</span>
            </button>

            <button
              onClick={() => setSelectedGateway('phonepe')}
              className={`p-3 rounded-2xl border font-bold flex flex-col items-center justify-center gap-1.5 transition-all ${
                selectedGateway === 'phonepe' ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-md' : 'bg-slate-950 border-slate-800 text-slate-300'
              }`}
            >
              <IndianRupee className="w-5 h-5" />
              <span>PhonePe PG</span>
            </button>

            <button
              onClick={() => setSelectedGateway('upi')}
              className={`p-3 rounded-2xl border font-bold flex flex-col items-center justify-center gap-1.5 transition-all ${
                selectedGateway === 'upi' ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-md' : 'bg-slate-950 border-slate-800 text-slate-300'
              }`}
            >
              <QrCode className="w-5 h-5" />
              <span>UPI QR Code</span>
            </button>

            <button
              onClick={() => setSelectedGateway('card')}
              className={`p-3 rounded-2xl border font-bold flex flex-col items-center justify-center gap-1.5 transition-all ${
                selectedGateway === 'card' ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-md' : 'bg-slate-950 border-slate-800 text-slate-300'
              }`}
            >
              <CreditCard className="w-5 h-5" />
              <span>Credit / Debit</span>
            </button>

            <button
              onClick={() => setSelectedGateway('banking')}
              className={`p-3 rounded-2xl border font-bold flex flex-col items-center justify-center gap-1.5 transition-all ${
                selectedGateway === 'banking' ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-md' : 'bg-slate-950 border-slate-800 text-slate-300'
              }`}
            >
              <Building className="w-5 h-5" />
              <span>Net Banking</span>
            </button>
          </div>
        </div>

        {/* 8 Prominent Donation Cards */}
        <div className="grid md:grid-cols-4 gap-6">
          {DONATION_CAMPAIGNS.map((camp) => (
            <div
              key={camp.id}
              className={`bg-slate-900 border rounded-3xl overflow-hidden flex flex-col justify-between transition-all hover:border-amber-500/50 ${
                camp.urgent ? 'border-rose-500/50 shadow-xl shadow-rose-950/20' : 'border-slate-800'
              }`}
            >
              <div>
                <div className="relative h-44 overflow-hidden">
                  <img src={camp.image} alt={camp.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  <span className={`absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider ${
                    camp.urgent ? 'bg-rose-500 text-slate-950' : 'bg-amber-500 text-slate-950'
                  }`}>
                    {camp.badge}
                  </span>
                </div>

                <div className="p-5 space-y-2">
                  <span className="text-[10px] text-amber-400 font-bold uppercase tracking-wider">{camp.category}</span>
                  <h3 className="text-base font-bold text-white leading-snug">{camp.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">{camp.description}</p>
                </div>
              </div>

              <div className="p-5 pt-0 space-y-3">
                <div className="text-[11px] text-slate-400 font-mono">
                  Suggested Option: <strong className="text-amber-300 font-bold">₹{camp.suggestedAmount.toLocaleString('en-IN')}</strong>
                </div>

                <button
                  onClick={() => onOpenDonationModal(camp.id)}
                  className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-black py-3 rounded-xl text-xs flex items-center justify-center gap-1.5 shadow-md"
                >
                  <HeartHandshake className="w-4 h-4" />
                  Donate Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
