import React, { useState } from 'react';
import { CSR_INITIATIVES } from '../data/mockData';
import { X, HeartHandshake, ShieldCheck, Download, CheckCircle2, CreditCard, IndianRupee, FileText, Lock, MessageCircle, Copy, ArrowLeft, Send } from 'lucide-react';

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedInitiativeId?: string;
}

export const DonationModal: React.FC<DonationModalProps> = ({
  isOpen,
  onClose,
  preSelectedInitiativeId
}) => {
  const [initiativeId, setInitiativeId] = useState(preSelectedInitiativeId || CSR_INITIATIVES[0].id);
  const [donorName, setDonorName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [panNumber, setPanNumber] = useState('');
  const [amount, setAmount] = useState<number>(1000);
  const [customAmount, setCustomAmount] = useState('');
  const [step, setStep] = useState<'form' | 'payment_details'>('form');
  const [copiedField, setCopiedField] = useState<string | null>(null);

  if (!isOpen) return null;

  const presets = [500, 1000, 2500, 5000, 10000];
  const selectedInitiative = CSR_INITIATIVES.find(i => i.id === initiativeId) || CSR_INITIATIVES[0];
  const finalAmount = customAmount ? Number(customAmount) : amount;

  const handleProceed = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('payment_details');
  };

  const handleCopy = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSendWhatsAppScreenshot = () => {
    const text = encodeURIComponent(
      `Hello DOV India Team! 👋\n\nI am donating to: *${selectedInitiative.title}*\nAmount: ₹${finalAmount.toLocaleString('en-IN')}\nName: ${donorName || 'Donor'}\nPhone: ${phone || '7098555333'}\nPAN: ${panNumber || 'Not provided'}\n\nAttached is my payment screenshot. Please issue my Section 80G tax receipt.`
    );
    window.open(`https://api.whatsapp.com/send/?phone=917098555333&text=${text}&type=phone_number&app_absent=0`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1E3A8A]/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white border border-[#E5E7EB] rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl relative">
        
        {/* Header - Deep Blue (#1E3A8A) */}
        <div className="bg-[#1E3A8A] p-6 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#F97316] text-white font-bold flex items-center justify-center shadow-md">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-extrabold text-base text-white">Donate & Save Tax (80G)</h3>
              <p className="text-xs text-blue-100">DOV Foundation Non-Profit Contribution Gateway</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-white/80 hover:text-white rounded-lg bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {step === 'form' ? (
          <form onSubmit={handleProceed} className="p-6 space-y-4 text-xs text-[#1F2937] max-h-[80vh] overflow-y-auto">
            {/* Initiative Selection */}
            <div>
              <label className="block text-[10px] font-bold text-[#6B7280] mb-1.5 uppercase">
                Select CSR Project to Support:
              </label>
              <select
                value={initiativeId}
                onChange={(e) => setInitiativeId(e.target.value)}
                className="w-full bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl px-3 py-2.5 text-[#1F2937] focus:outline-none focus:border-[#0D6EFD]"
              >
                {CSR_INITIATIVES.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.title} ({item.category})
                  </option>
                ))}
              </select>
            </div>

            {/* Donation Amount Presets */}
            <div>
              <label className="block text-[10px] font-bold text-[#6B7280] mb-1.5 uppercase">
                Select Contribution Amount (₹):
              </label>
              <div className="grid grid-cols-5 gap-2 mb-2">
                {presets.map((val) => (
                  <button
                    key={val}
                    type="button"
                    onClick={() => {
                      setAmount(val);
                      setCustomAmount('');
                    }}
                    className={`py-2 rounded-xl font-extrabold border text-center transition-all cursor-pointer ${
                      amount === val && !customAmount
                        ? 'bg-[#F97316] text-white border-[#EA580C]'
                        : 'bg-[#F8FAFC] border-[#E5E7EB] text-[#1F2937] hover:bg-blue-50'
                    }`}
                  >
                    ₹{val}
                  </button>
                ))}
              </div>
              <input
                type="number"
                placeholder="Or enter custom amount in ₹"
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
                className="w-full bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl px-3 py-2 text-[#1F2937] placeholder-[#9CA3AF] focus:outline-none focus:border-[#0D6EFD]"
              />
            </div>

            {/* Donor Information */}
            <div className="space-y-2 pt-1 border-t border-gray-100">
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-[10px] text-[#6B7280] mb-1">Full Name:</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Meera Kapoor"
                    value={donorName}
                    onChange={(e) => setDonorName(e.target.value)}
                    className="w-full bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl px-3 py-2 text-[#1F2937] focus:outline-none focus:border-[#0D6EFD]"
                  />
                </div>
                <div>
                  <label className="block text-[10px] text-[#6B7280] mb-1">Email ID (For PDF Receipt):</label>
                  <input
                    type="email"
                    required
                    placeholder="meera@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl px-3 py-2 text-[#1F2937] focus:outline-none focus:border-[#0D6EFD]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-[10px] text-[#6B7280] mb-1">Mobile / WhatsApp Number:</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 9876543210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl px-3 py-2 text-[#1F2937] focus:outline-none focus:border-[#0D6EFD]"
                  />
                </div>
                <div>
                  <label className="block text-[10px] text-[#F97316] font-semibold mb-1">PAN Number (Required for 80G):</label>
                  <input
                    type="text"
                    required
                    maxLength={10}
                    placeholder="ABCDE1234F"
                    value={panNumber}
                    onChange={(e) => setPanNumber(e.target.value.toUpperCase())}
                    className="w-full bg-orange-50/50 border border-orange-200 rounded-xl px-3 py-2 text-[#1F2937] uppercase font-mono tracking-wider focus:outline-none focus:border-[#F97316]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] text-[#6B7280] mb-1">Full Address (For 80G Certificate Dispatch):</label>
                <input
                  type="text"
                  placeholder="e.g. Flat 302, LBS Road, Bhandup West, Mumbai, MH"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl px-3 py-2 text-[#1F2937] focus:outline-none focus:border-[#0D6EFD]"
                />
              </div>
            </div>

            <button
              type="submit"
              className="btn-donate w-full py-3.5 mt-4 text-xs font-black shadow-md cursor-pointer uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <CreditCard className="w-4 h-4" />
              Proceed to Secure Payment • ₹{finalAmount.toLocaleString('en-IN')}
            </button>
          </form>
        ) : (
          /* STEP 2: PAYMENT DETAILS & WHATSAPP SCREENSHOT ACTION */
          <div className="p-6 space-y-5 text-xs text-[#1F2937] max-h-[80vh] overflow-y-auto">
            
            <div className="flex items-center justify-between border-b border-gray-100 pb-3">
              <button
                onClick={() => setStep('form')}
                className="inline-flex items-center gap-1 text-xs font-bold text-gray-500 hover:text-[#1E3A8A] transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" /> Edit Details
              </button>
              <span className="font-extrabold text-[#F97316] bg-orange-50 px-3 py-1 rounded-full border border-orange-200 text-xs">
                Amount: ₹{finalAmount.toLocaleString('en-IN')}
              </span>
            </div>

            <div className="text-center space-y-1">
              <h4 className="font-black text-lg text-[#1E3A8A]">Official Bank Payment Details</h4>
              <p className="text-[11px] text-gray-500">Scan QR code or transfer directly to our foundation bank account.</p>
            </div>

            {/* QR & Bank Details Box */}
            <div className="bg-[#F8FAFC] p-4 rounded-xl border border-gray-200 space-y-4">
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="bg-white p-2 rounded-xl border border-gray-200 shrink-0 text-center">
                  <img 
                    src="/SBIUPI.png" 
                    alt="DOV INDIA Official State Bank of India UPI QR Code" 
                    className="w-36 h-44 object-contain mx-auto rounded-lg"
                  />
                  <span className="text-[9px] font-bold text-gray-400 block mt-1">UPI QR Code</span>
                </div>

                <div className="space-y-2 text-xs w-full">
                  <div>
                    <span className="text-[10px] text-gray-400 uppercase font-bold block">Account Holder's Name</span>
                    <span className="font-extrabold text-[#1F2937]">DOV INDIA</span>
                  </div>

                  <div>
                    <span className="text-[10px] text-gray-400 uppercase font-bold block">Bank Name</span>
                    <span className="font-bold text-[#1F2937]">STATE BANK OF INDIA</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-gray-400 uppercase font-bold block">Account Number</span>
                      <span className="font-mono font-black text-[#1F2937] text-sm">41673835177</span>
                    </div>
                    <button 
                      onClick={() => handleCopy('41673835177', 'acc')}
                      className="p-1 bg-gray-200 hover:bg-gray-300 rounded text-gray-700 transition-colors cursor-pointer"
                      title="Copy Account Number"
                    >
                      <Copy className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-gray-400 uppercase font-bold block">IFSC Code</span>
                      <span className="font-mono font-black text-[#0D6EFD] text-sm">SBIN0061638</span>
                    </div>
                    <button 
                      onClick={() => handleCopy('SBIN0061638', 'ifsc')}
                      className="p-1 bg-gray-200 hover:bg-gray-300 rounded text-gray-700 transition-colors cursor-pointer"
                      title="Copy IFSC Code"
                    >
                      <Copy className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div>
                    <span className="text-[10px] text-gray-400 uppercase font-bold block">Branch</span>
                    <span className="font-semibold text-gray-700 text-[11px]">SME TRANSPORT NAGAR</span>
                  </div>
                </div>
              </div>

              {copiedField && (
                <div className="text-[10px] text-emerald-600 font-bold text-center">
                  Copied {copiedField} to clipboard!
                </div>
              )}
            </div>

            {/* Send Screenshot via WhatsApp CTA */}
            <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-xl text-center space-y-2">
              <div className="flex items-center justify-center gap-1.5 font-bold text-emerald-800 text-xs">
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                Send Payment Screenshot for Instant 80G Receipt
              </div>
              <p className="text-[11px] text-emerald-700 leading-snug">
                Once payment is done, send your payment screenshot on WhatsApp helpline (<strong>7098555333</strong>) to receive your official 80G receipt immediately.
              </p>

              <button
                onClick={handleSendWhatsAppScreenshot}
                className="w-full py-3 bg-[#25D366] hover:bg-emerald-600 text-white font-extrabold text-xs rounded-xl shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer uppercase tracking-wider"
              >
                <Send className="w-4 h-4" />
                Send Screenshot on WhatsApp (7098555333)
              </button>
            </div>

          </div>
        )}
      </div>
    </div>
  );
};
