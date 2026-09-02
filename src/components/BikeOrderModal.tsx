import React, { useState, useEffect } from 'react';
import { BikeProduct, BIKES_DATA } from '../data/bikesData';
import { 
  X, 
  Zap, 
  ShieldCheck, 
  CheckCircle2, 
  CreditCard, 
  MessageCircle, 
  Copy, 
  ArrowLeft, 
  Send,
  Truck,
  Sparkles,
  PhoneCall,
  MapPin,
  User,
  Mail,
  Calendar,
  Check
} from 'lucide-react';

interface BikeOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedBikeId?: string;
  initialType?: 'token' | 'full' | 'enquiry';
}

export const BikeOrderModal: React.FC<BikeOrderModalProps> = ({
  isOpen,
  onClose,
  selectedBikeId,
  initialType = 'token'
}) => {
  const [bikeId, setBikeId] = useState<string>(selectedBikeId || BIKES_DATA[0].id);
  const [bookingType, setBookingType] = useState<'token' | 'full' | 'enquiry'>(initialType);
  
  // Customer Details Form State
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [pincode, setPincode] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [notes, setNotes] = useState('');
  
  const [step, setStep] = useState<'form' | 'payment_details'>('form');
  const [copiedField, setCopiedField] = useState<string | null>(null);

  useEffect(() => {
    if (selectedBikeId) {
      setBikeId(selectedBikeId);
    }
  }, [selectedBikeId]);

  const selectedBike = BIKES_DATA.find(b => b.id === bikeId) || BIKES_DATA[0];

  if (!isOpen) return null;

  const paymentAmount = bookingType === 'full' 
    ? selectedBike.price 
    : bookingType === 'token' 
    ? selectedBike.tokenDeposit 
    : 0;

  const handleProceed = (e: React.FormEvent) => {
    e.preventDefault();
    if (bookingType === 'enquiry') {
      // Direct WhatsApp Enquiry
      handleSendWhatsAppEnquiry();
      onClose();
    } else {
      setStep('payment_details');
    }
  };

  const handleCopy = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSendWhatsAppEnquiry = () => {
    const text = encodeURIComponent(
      `Hello DOV India EV Team! 👋\n\nI want to ENQUIRE about booking an Electric Bike:\n\n*Bike Model:* ${selectedBike.name}\n*Price:* ₹${selectedBike.price.toLocaleString('en-IN')}\n\n*Customer Name:* ${fullName || 'Rider'}\n*Phone:* ${phone || '7098555333'}\n*Email:* ${email || 'Not provided'}\n*Location:* ${city ? `${city}, ${state} (${pincode})` : 'India'}\n*Notes:* ${notes || 'Interested in test drive & subsidy details.'}\n\nPlease call me back with booking and delivery timeline.`
    );
    window.open(`https://api.whatsapp.com/send/?phone=917098555333&text=${text}&type=phone_number&app_absent=0`, '_blank');
  };

  const handleSendWhatsAppPaymentScreenshot = () => {
    const text = encodeURIComponent(
      `Hello DOV India EV Team! 👋\n\nI have completed the payment for my Electric Bike Booking! ⚡\n\n*Selected Bike:* ${selectedBike.name}\n*Booking Type:* ${bookingType === 'full' ? 'Full Bike Payment' : 'Token Deposit Reservation'}\n*Amount Paid:* ₹${paymentAmount.toLocaleString('en-IN')}\n\n*Customer Details:*\n• *Name:* ${fullName}\n• *Phone:* ${phone}\n• *Email:* ${email}\n• *Delivery Address:* ${address}, ${city}, ${state} - ${pincode}\n\nAttached is my payment screenshot for verification. Please issue my booking confirmation receipt & dispatch date.`
    );
    window.open(`https://api.whatsapp.com/send/?phone=917098555333&text=${text}&type=phone_number&app_absent=0`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white border border-slate-200 rounded-3xl w-full max-w-xl overflow-hidden shadow-2xl relative max-h-[92vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-[#1E3A8A] via-[#1e40af] to-[#0D6EFD] p-5 sm:p-6 text-white flex items-center justify-between shrink-0 relative">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-[#EA580C] text-white font-extrabold flex items-center justify-center shadow-lg shrink-0">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-extrabold text-base sm:text-lg text-white leading-tight">
                {bookingType === 'enquiry' ? 'EV Bike Enquiry & Test Drive' : 'Book Your EVDov Electric Bike'}
              </h3>
              <p className="text-xs text-blue-100/90 font-medium">
                Official DOV Mobility Subsidized Booking Portal
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-white/80 hover:text-white rounded-xl bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {step === 'form' ? (
          <form onSubmit={handleProceed} className="p-5 sm:p-6 space-y-4 text-xs text-slate-800 overflow-y-auto flex-grow">
            
            {/* Selected Bike Summary Banner */}
            <div className="bg-slate-50 border border-slate-200 p-3.5 rounded-2xl flex items-center gap-3">
              <img 
                src={selectedBike.image} 
                alt={selectedBike.name} 
                className="w-20 h-16 object-contain bg-white rounded-xl p-1 border border-slate-100 shrink-0"
              />
              <div className="flex-grow min-w-0">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="font-black text-sm text-slate-900 truncate">{selectedBike.name}</span>
                  {selectedBike.subsidyApproved && (
                    <span className="bg-emerald-100 text-emerald-800 text-[10px] font-extrabold px-2 py-0.5 rounded-full border border-emerald-300">
                      PM E-DRIVE Subsidy
                    </span>
                  )}
                </div>
                <div className="text-[11px] text-slate-500 font-medium truncate mt-0.5">
                  {selectedBike.tagline}
                </div>
                <div className="flex items-center gap-3 mt-1 text-xs">
                  <span className="font-black text-[#1E3A8A]">₹{selectedBike.price.toLocaleString('en-IN')}</span>
                  <span className="text-slate-400 font-medium line-through">₹{selectedBike.originalPrice.toLocaleString('en-IN')}</span>
                  <span className="text-emerald-600 font-extrabold">Range: {selectedBike.rangePerCharge} km</span>
                </div>
              </div>
            </div>

            {/* Change Bike Selection */}
            <div>
              <label className="block text-[10px] font-extrabold text-slate-500 uppercase tracking-wider mb-1">
                Select Bike Model:
              </label>
              <select
                value={bikeId}
                onChange={(e) => setBikeId(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-900 font-bold text-xs focus:outline-none focus:border-[#1E3A8A]"
              >
                {BIKES_DATA.map((b) => (
                  <option key={b.id} value={b.id}>
                    {b.name} — ₹{b.price.toLocaleString('en-IN')} ({b.rangePerCharge}km range)
                  </option>
                ))}
              </select>
            </div>

            {/* Booking Payment Mode Selection */}
            <div>
              <label className="block text-[10px] font-extrabold text-slate-500 uppercase tracking-wider mb-1.5">
                Choose Booking / Payment Option:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                
                <button
                  type="button"
                  onClick={() => setBookingType('token')}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                    bookingType === 'token'
                      ? 'bg-blue-50/80 border-[#1E3A8A] ring-2 ring-[#1E3A8A]/20'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-extrabold text-xs text-[#1E3A8A]">Token Deposit</span>
                    {bookingType === 'token' && <CheckCircle2 className="w-4 h-4 text-[#1E3A8A]" />}
                  </div>
                  <div className="font-black text-sm text-slate-900 mt-1">₹{selectedBike.tokenDeposit.toLocaleString('en-IN')}</div>
                  <div className="text-[10px] text-slate-500 font-medium">Reserve Bike Online</div>
                </button>

                <button
                  type="button"
                  onClick={() => setBookingType('full')}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                    bookingType === 'full'
                      ? 'bg-orange-50/80 border-[#EA580C] ring-2 ring-[#EA580C]/20'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-extrabold text-xs text-[#EA580C]">Full Bike Price</span>
                    {bookingType === 'full' && <CheckCircle2 className="w-4 h-4 text-[#EA580C]" />}
                  </div>
                  <div className="font-black text-sm text-slate-900 mt-1">₹{selectedBike.price.toLocaleString('en-IN')}</div>
                  <div className="text-[10px] text-slate-500 font-medium">Instant Priority Dispatch</div>
                </button>

                <button
                  type="button"
                  onClick={() => setBookingType('enquiry')}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                    bookingType === 'enquiry'
                      ? 'bg-emerald-50/80 border-[#22C55E] ring-2 ring-[#22C55E]/20'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-extrabold text-xs text-emerald-800">Enquiry / Callback</span>
                    {bookingType === 'enquiry' && <CheckCircle2 className="w-4 h-4 text-emerald-600" />}
                  </div>
                  <div className="font-black text-sm text-emerald-700 mt-1">Free</div>
                  <div className="text-[10px] text-slate-500 font-medium">Speak with EV Expert</div>
                </button>

              </div>
            </div>

            {/* Customer Details Form */}
            <div className="space-y-2.5 pt-2 border-t border-slate-100">
              <div className="font-extrabold text-xs text-slate-900 flex items-center gap-1.5">
                <User className="w-4 h-4 text-[#1E3A8A]" />
                Customer Contact & Delivery Information
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div>
                  <label className="block text-[10px] text-slate-500 font-bold mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-900 font-medium focus:outline-none focus:border-[#1E3A8A]"
                  />
                </div>
                <div>
                  <label className="block text-[10px] text-slate-500 font-bold mb-1">Mobile / WhatsApp Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 9876543210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-900 font-medium focus:outline-none focus:border-[#1E3A8A]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div>
                  <label className="block text-[10px] text-slate-500 font-bold mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="rahul@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-900 font-medium focus:outline-none focus:border-[#1E3A8A]"
                  />
                </div>
                <div>
                  <label className="block text-[10px] text-slate-500 font-bold mb-1">Pincode *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 400080"
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-900 font-medium focus:outline-none focus:border-[#1E3A8A]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] text-slate-500 font-bold mb-1">Delivery Address *</label>
                <input
                  type="text"
                  required={bookingType !== 'enquiry'}
                  placeholder="Flat No, Building, Street, Area"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-900 font-medium focus:outline-none focus:border-[#1E3A8A]"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-[10px] text-slate-500 font-bold mb-1">City *</label>
                  <input
                    type="text"
                    required={bookingType !== 'enquiry'}
                    placeholder="e.g. Mumbai"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-900 font-medium focus:outline-none focus:border-[#1E3A8A]"
                  />
                </div>
                <div>
                  <label className="block text-[10px] text-slate-500 font-bold mb-1">State *</label>
                  <input
                    type="text"
                    required={bookingType !== 'enquiry'}
                    placeholder="e.g. Maharashtra"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-900 font-medium focus:outline-none focus:border-[#1E3A8A]"
                  />
                </div>
              </div>
            </div>

            {/* Action Submit CTA */}
            <div className="pt-2">
              {bookingType === 'enquiry' ? (
                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#25D366] hover:bg-emerald-600 text-white text-xs font-black rounded-2xl shadow-lg flex items-center justify-center gap-2 transition-all cursor-pointer uppercase tracking-wider"
                >
                  <MessageCircle className="w-4 h-4" />
                  Submit Free Enquiry on WhatsApp
                </button>
              ) : (
                <button
                  type="submit"
                  className="w-full py-3.5 bg-gradient-to-r from-[#1E3A8A] to-[#0D6EFD] hover:from-[#1e3a8a] hover:to-[#0284c7] text-white text-xs font-black rounded-2xl shadow-lg flex items-center justify-center gap-2 transition-all cursor-pointer uppercase tracking-wider"
                >
                  <CreditCard className="w-4 h-4 text-amber-300" />
                  Proceed to Payment • ₹{paymentAmount.toLocaleString('en-IN')}
                </button>
              )}
            </div>

          </form>
        ) : (
          /* STEP 2: BANK DETAILS & WHATSAPP SCREENSHOT ACTION (JUST LIKE DONATION MODAL) */
          <div className="p-5 sm:p-6 space-y-4 text-xs text-slate-800 overflow-y-auto flex-grow">
            
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <button
                onClick={() => setStep('form')}
                className="inline-flex items-center gap-1 text-xs font-extrabold text-slate-500 hover:text-[#1E3A8A] transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" /> Edit Order Details
              </button>
              <span className="font-extrabold text-[#EA580C] bg-orange-50 px-3 py-1 rounded-full border border-orange-200 text-xs">
                Paying: ₹{paymentAmount.toLocaleString('en-IN')}
              </span>
            </div>

            {/* Order Brief Box */}
            <div className="bg-blue-50/60 border border-blue-200/80 p-3 rounded-2xl flex items-center gap-3">
              <img 
                src={selectedBike.image} 
                alt={selectedBike.name} 
                className="w-14 h-12 object-contain bg-white rounded-xl p-1 border border-blue-100 shrink-0" 
              />
              <div className="flex-grow min-w-0">
                <span className="font-extrabold text-xs text-slate-900 block truncate">{selectedBike.name}</span>
                <span className="text-[11px] text-slate-600 font-medium block">Customer: {fullName || 'Valued Rider'}</span>
              </div>
            </div>

            <div className="text-center space-y-1">
              <h4 className="font-black text-lg text-[#1E3A8A]">Official DOV India Bank Gateway</h4>
              <p className="text-[11px] text-slate-500">Scan QR Code using PhonePe / Google Pay / Paytm or transfer via NEFT/RTGS.</p>
            </div>

            {/* QR & Bank Details Container */}
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-3">
              <div className="flex flex-col sm:flex-row items-center gap-4">
                
                {/* SBI UPI QR Code */}
                <div className="bg-white p-2.5 rounded-2xl border border-slate-200 shrink-0 text-center shadow-xs">
                  <img 
                    src="/SBIUPI.png" 
                    alt="DOV INDIA Official State Bank of India UPI QR Code" 
                    className="w-36 h-44 object-contain mx-auto rounded-xl"
                  />
                  <span className="text-[9px] font-extrabold text-slate-400 block mt-1 uppercase tracking-wider">
                    Official State Bank of India UPI QR
                  </span>
                </div>

                {/* Bank Account Details */}
                <div className="space-y-2 text-xs w-full">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-extrabold block">Account Holder's Name</span>
                    <span className="font-extrabold text-slate-900 text-sm">DOV INDIA</span>
                  </div>

                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-extrabold block">Bank Name</span>
                    <span className="font-bold text-slate-900">STATE BANK OF INDIA</span>
                  </div>

                  <div className="flex items-center justify-between bg-white p-2 rounded-xl border border-slate-200">
                    <div>
                      <span className="text-[9px] text-slate-400 uppercase font-extrabold block">Account Number</span>
                      <span className="font-mono font-black text-slate-900 text-sm">41673835177</span>
                    </div>
                    <button 
                      onClick={() => handleCopy('41673835177', 'Account Number')}
                      className="p-1.5 bg-slate-100 hover:bg-slate-200 rounded-lg text-slate-700 transition-colors cursor-pointer flex items-center gap-1 text-[10px] font-bold"
                    >
                      <Copy className="w-3.5 h-3.5 text-[#1E3A8A]" /> Copy
                    </button>
                  </div>

                  <div className="flex items-center justify-between bg-white p-2 rounded-xl border border-slate-200">
                    <div>
                      <span className="text-[9px] text-slate-400 uppercase font-extrabold block">IFSC Code</span>
                      <span className="font-mono font-black text-[#0D6EFD] text-sm">SBIN0061638</span>
                    </div>
                    <button 
                      onClick={() => handleCopy('SBIN0061638', 'IFSC Code')}
                      className="p-1.5 bg-slate-100 hover:bg-slate-200 rounded-lg text-slate-700 transition-colors cursor-pointer flex items-center gap-1 text-[10px] font-bold"
                    >
                      <Copy className="w-3.5 h-3.5 text-[#0D6EFD]" /> Copy
                    </button>
                  </div>

                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-extrabold block">Branch</span>
                    <span className="font-semibold text-slate-700 text-[11px]">SME TRANSPORT NAGAR</span>
                  </div>
                </div>

              </div>

              {copiedField && (
                <div className="text-[11px] text-emerald-600 font-extrabold text-center bg-emerald-50 py-1 rounded-lg border border-emerald-200">
                  ✓ Copied {copiedField} to clipboard!
                </div>
              )}
            </div>

            {/* Send Screenshot via WhatsApp CTA */}
            <div className="bg-emerald-50/90 border border-emerald-200 p-4 rounded-2xl text-center space-y-2">
              <div className="flex items-center justify-center gap-1.5 font-black text-emerald-900 text-xs">
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                Send Payment Screenshot on WhatsApp for Instant Booking Receipt
              </div>
              <p className="text-[11px] text-emerald-700 font-medium leading-snug">
                After completing your payment, click below to share your transaction screenshot on our official WhatsApp helpline (<strong>7098555333</strong>) to receive your booking confirmation & dispatch date.
              </p>

              <button
                onClick={handleSendWhatsAppPaymentScreenshot}
                className="w-full py-3.5 bg-[#25D366] hover:bg-emerald-600 text-white font-black text-xs rounded-2xl shadow-lg flex items-center justify-center gap-2 transition-all cursor-pointer uppercase tracking-wider"
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
