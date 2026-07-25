import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Heart, ShieldCheck, CheckCircle2, Lock, CreditCard, MessageCircle, Copy, FileText, ArrowLeft, Send } from 'lucide-react';
import { SectionTitle, Button } from '../ui/ReusableComponents';

interface DonationSectionProps {
  onDonateSuccess?: (amount: number) => void;
}

export const DonationSection: React.FC<DonationSectionProps> = ({ onDonateSuccess }) => {
  const [selectedAmount, setSelectedAmount] = useState<number>(1000);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [frequency, setFrequency] = useState<'once' | 'monthly'>('once');
  const [step, setStep] = useState<'select' | 'payment'>('select');
  const [donorName, setDonorName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const presetAmounts = [500, 1000, 5000, 10000];
  const finalAmount = customAmount ? parseFloat(customAmount) : selectedAmount;

  const handleCopy = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleProceedToPayment = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('payment');
    if (onDonateSuccess) onDonateSuccess(finalAmount);
  };

  const handleSendWhatsAppScreenshot = () => {
    const text = encodeURIComponent(
      `Hello DOV India Team! 🙏\n\nI have completed my donation of ₹${finalAmount.toLocaleString()}.\nName: ${donorName || 'Donor'}\nPhone: ${phone || '7098555333'}\n\nAttached is my payment screenshot for the official 80G Tax Exemption Receipt.`
    );
    window.open(`https://api.whatsapp.com/send/?phone=917098555333&text=${text}&type=phone_number&app_absent=0`, '_blank');
  };

  return (
    <section id="donate" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        <SectionTitle
          badge="MAKE A DIRECT IMPACT"
          badgeColor="bg-[#FF7A00]/10 text-[#FF7A00] border-[#FF7A00]/20"
          title="Support a Cause That Saves Lives"
          subtitle="Every contribution qualifies for 100% Tax Deductibility under Section 80G of the Income Tax Act. Instant receipt issued upon payment."
        />

        <div className="max-w-4xl mx-auto bg-[#F8FAFC] rounded-[36px] border border-slate-200/80 p-6 sm:p-12 shadow-xl relative overflow-hidden">

          {/* Form Header / Frequency Tabs */}
          <div className="flex justify-center mb-8">
            <div className="bg-slate-200/80 p-1.5 rounded-2xl flex items-center gap-1">
              <button
                type="button"
                onClick={() => setFrequency('once')}
                className={`px-6 py-2.5 rounded-xl font-bold text-xs transition-all ${
                  frequency === 'once'
                    ? 'bg-white text-[#0F172A] shadow-sm'
                    : 'text-slate-600 hover:text-[#0F172A]'
                }`}
              >
                Give One-Time
              </button>
              <button
                type="button"
                onClick={() => setFrequency('monthly')}
                className={`px-6 py-2.5 rounded-xl font-bold text-xs transition-all ${
                  frequency === 'monthly'
                    ? 'bg-[#165DFF] text-white shadow-sm'
                    : 'text-slate-600 hover:text-[#0F172A]'
                }`}
              >
                Give Monthly (Impact Hero)
              </button>
            </div>
          </div>

          {step === 'select' ? (
            <form onSubmit={handleProceedToPayment} className="space-y-8">

              {/* Preset Amounts Cards Grid */}
              <div className="space-y-3">
                <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block">
                  Select Donation Amount (INR)
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {presetAmounts.map((amt) => {
                    const isSelected = selectedAmount === amt && !customAmount;
                    return (
                      <button
                        key={amt}
                        type="button"
                        onClick={() => {
                          setSelectedAmount(amt);
                          setCustomAmount('');
                        }}
                        className={`p-5 rounded-2xl font-black text-xl border transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-[#165DFF] text-white border-[#165DFF] shadow-lg shadow-[#165DFF]/25 scale-102'
                            : 'bg-white text-[#0F172A] border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                        }`}
                      >
                        ₹{amt.toLocaleString()}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Custom Amount Input */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block">
                  Or Enter Custom Amount (INR)
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-lg">₹</span>
                  <input
                    type="number"
                    min="100"
                    placeholder="Enter custom amount (e.g. 2500)"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-2xl pl-10 pr-4 py-4 text-base font-bold text-[#0F172A] focus:outline-none focus:border-[#165DFF] focus:ring-2 focus:ring-[#165DFF]/20"
                  />
                </div>
              </div>

              {/* Donor Contact Info */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-1">
                    Your Name (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Anand Patel"
                    value={donorName}
                    onChange={(e) => setDonorName(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs font-medium text-[#0F172A] focus:outline-none focus:border-[#165DFF]"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-1">
                    Mobile / WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    placeholder="e.g. 9876543210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs font-medium text-[#0F172A] focus:outline-none focus:border-[#165DFF]"
                  />
                </div>
              </div>

              {/* Full Address */}
              <div>
                <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-1">
                  Full Address (Required for 80G Tax Receipt Dispatch)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Flat 302, Green Acres, LBS Road, Bhandup West, Mumbai, MH"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs font-medium text-[#0F172A] focus:outline-none focus:border-[#165DFF]"
                />
              </div>

              {/* What Your Donation Provides Indicator */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200/80 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#FF7A00]/10 text-[#FF7A00] flex items-center justify-center font-bold shrink-0">
                  <Heart className="w-6 h-6 fill-current" />
                </div>
                <div className="text-xs text-slate-700 font-medium">
                  <strong>Your ₹{finalAmount.toLocaleString()} donation provides:</strong>
                  <p className="text-slate-500">
                    {finalAmount >= 5000
                      ? 'Full emergency cardiac screening & 1-month high-nutrient food basket for 3 rural families.'
                      : finalAmount >= 1000
                      ? '1-month STEM learning kit + solar digital textbook access for a girl student.'
                      : '20 fortified warm meal boxes for hospital patient caretakers.'}
                  </p>
                </div>
              </div>

              {/* Submit CTA & Security Notice */}
              <div className="space-y-4">
                <Button type="submit" variant="secondary" size="lg" icon={CreditCard} className="w-full text-base py-4 cursor-pointer">
                  Proceed to Secure Payment • ₹{finalAmount.toLocaleString()}
                </Button>

                <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-500 font-medium pt-2">
                  <div className="flex items-center gap-1.5">
                    <Lock className="w-3.5 h-3.5 text-[#22C55E]" /> 256-bit Bank-Grade SSL Encryption
                  </div>
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#165DFF]" /> Instant 80G Tax Exemption Certificate
                  </div>
                </div>
              </div>

            </form>
          ) : (
            /* STEP 2: PAYMENT DETAILS & SCREENSHOT VERIFICATION */
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="space-y-8 bg-white p-6 sm:p-10 rounded-[32px] border border-slate-200 shadow-sm text-slate-800"
            >
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <button
                  onClick={() => setStep('select')}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-[#165DFF] transition-colors cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" /> Change Amount
                </button>
                <div className="text-xs font-black text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  Amount: ₹{finalAmount.toLocaleString()}
                </div>
              </div>

              <div className="text-center space-y-2">
                <h3 className="text-2xl font-black text-[#0F172A]">Complete Your Donation & Get 80G Receipt</h3>
                <p className="text-xs text-slate-500 max-w-md mx-auto">
                  Scan UPI QR or transfer directly to our official foundation bank account. Send your payment screenshot on WhatsApp to receive instant 80G receipt.
                </p>
              </div>

              {/* UPI & QR Code Box */}
              <div className="grid sm:grid-cols-2 gap-6 items-center bg-[#F8FAFC] p-6 rounded-2xl border border-slate-200">
                <div className="space-y-3">
                  <div className="text-xs font-extrabold text-slate-400 uppercase tracking-wider">Option 1: Scan UPI QR</div>
                  <div className="bg-white p-3 rounded-2xl border border-slate-200 inline-block shadow-sm">
                    <img 
                      src="/SBIUPI.png" 
                      alt="DOV INDIA Official State Bank of India UPI QR Code" 
                      className="w-48 h-56 object-contain mx-auto rounded-xl"
                    />
                  </div>
                  <div className="text-[11px] text-slate-500 font-bold">GPay / PhonePe / Paytm / BHIM</div>
                </div>

                {/* Direct Bank Account Details */}
                <div className="space-y-3 text-xs">
                  <div className="text-xs font-extrabold text-slate-400 uppercase tracking-wider">Option 2: Direct Bank Transfer</div>
                  
                  <div className="space-y-2 bg-white p-4 rounded-xl border border-slate-200">
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase font-bold block">Account Holder's Name</span>
                      <span className="font-extrabold text-slate-900">DOV INDIA</span>
                    </div>

                    <div>
                      <span className="text-[10px] text-slate-400 uppercase font-bold block">Bank Name</span>
                      <span className="font-bold text-slate-800">STATE BANK OF INDIA</span>
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      <div>
                        <span className="text-[10px] text-slate-400 uppercase font-bold block">Account Number</span>
                        <span className="font-mono font-black text-slate-900 text-sm">41673835177</span>
                      </div>
                      <button 
                        onClick={() => handleCopy('41673835177', 'acc')}
                        className="p-1.5 bg-slate-100 hover:bg-slate-200 rounded-lg text-slate-600 transition-colors cursor-pointer"
                        title="Copy Account Number"
                      >
                        <Copy className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      <div>
                        <span className="text-[10px] text-slate-400 uppercase font-bold block">IFSC Code</span>
                        <span className="font-mono font-black text-[#165DFF] text-sm">SBIN0061638</span>
                      </div>
                      <button 
                        onClick={() => handleCopy('SBIN0061638', 'ifsc')}
                        className="p-1.5 bg-slate-100 hover:bg-slate-200 rounded-lg text-slate-600 transition-colors cursor-pointer"
                        title="Copy IFSC Code"
                      >
                        <Copy className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="pt-1">
                      <span className="text-[10px] text-slate-400 uppercase font-bold block">Branch</span>
                      <span className="font-semibold text-slate-700 text-[11px]">SME TRANSPORT NAGAR</span>
                    </div>
                  </div>

                  {copiedField && (
                    <div className="text-[10px] text-emerald-600 font-bold text-center">
                      Copied {copiedField} to clipboard!
                    </div>
                  )}
                </div>
              </div>

              {/* Direct WhatsApp Payment Screenshot Verification CTA */}
              <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-2xl text-center space-y-3">
                <div className="flex items-center justify-center gap-2 text-emerald-800 font-black text-base">
                  <MessageCircle className="w-5 h-5 text-emerald-600" />
                  Send Payment Screenshot on WhatsApp
                </div>
                <p className="text-xs text-emerald-700 max-w-md mx-auto leading-relaxed">
                  After completing your ₹{finalAmount.toLocaleString()} payment, send the payment screenshot along with your PAN card on WhatsApp helpline (<strong>7098555333</strong>) for instant 80G tax receipt.
                </p>
                
                <button
                  onClick={handleSendWhatsAppScreenshot}
                  className="w-full sm:w-auto px-8 py-3.5 bg-[#25D366] hover:bg-emerald-600 text-white font-extrabold text-xs rounded-xl shadow-lg flex items-center justify-center gap-2 mx-auto transition-all transform hover:scale-[1.01] cursor-pointer uppercase tracking-wider"
                >
                  <Send className="w-4 h-4" />
                  Send Screenshot on WhatsApp (7098555333)
                </button>
              </div>

            </motion.div>
          )}

        </div>

      </div>
    </section>
  );
};
