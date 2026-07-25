import React, { useState } from 'react';
import { X, Building2, CheckCircle2, IndianRupee, MapPin, Phone, User, Mail, Send } from 'lucide-react';

interface FranchiseModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenWhatsApp: (intent?: string) => void;
}

export const FranchiseModal: React.FC<FranchiseModalProps> = ({
  isOpen,
  onClose,
  onOpenWhatsApp
}) => {
  const [applicantName, setApplicantName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('Maharashtra');
  const [investmentBudget, setInvestmentBudget] = useState('₹20L - ₹30L');
  const [proposedSpace, setProposedSpace] = useState('1000 - 1500 Sq.Ft');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-purple-500/40 rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl relative">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-950 via-slate-900 to-slate-950 p-6 border-b border-slate-800 flex items-center justify-between text-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-600 text-white font-bold flex items-center justify-center shadow-md">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-extrabold text-base text-white">EVDov Dealership Application</h3>
              <p className="text-xs text-purple-300">Franchise Partnership & ROI Inquiry</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg bg-slate-800/60 hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 text-xs text-slate-200 max-h-[80vh] overflow-y-auto">
            <div className="grid grid-cols-2 gap-3">
              <div className="col-span-2">
                <label className="block text-[10px] font-medium text-slate-400 mb-1">Applicant / Company Name:</label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Vikramaditya Motors"
                    value={applicantName}
                    onChange={(e) => setApplicantName(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-3 py-2.5 text-slate-200 focus:outline-none focus:border-purple-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-medium text-slate-400 mb-1">Mobile Number:</label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                  <input
                    type="tel"
                    required
                    placeholder="7098555333"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-3 py-2.5 text-slate-200 focus:outline-none focus:border-purple-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-medium text-slate-400 mb-1">Email ID:</label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                  <input
                    type="email"
                    required
                    placeholder="vikram@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-3 py-2.5 text-slate-200 focus:outline-none focus:border-purple-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-medium text-slate-400 mb-1">Target City:</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Nashik / Indore / Surat"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-slate-200 focus:outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="block text-[10px] font-medium text-slate-400 mb-1">Target State:</label>
                <select
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-slate-200 focus:outline-none focus:border-purple-500"
                >
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Gujarat">Gujarat</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Madhya Pradesh">Madhya Pradesh</option>
                  <option value="Rajasthan">Rajasthan</option>
                  <option value="Delhi NCR">Delhi NCR</option>
                  <option value="Telangana">Telangana</option>
                  <option value="Tamil Nadu">Tamil Nadu</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-medium text-slate-400 mb-1">Investment Capacity:</label>
                <select
                  value={investmentBudget}
                  onChange={(e) => setInvestmentBudget(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-slate-200 focus:outline-none focus:border-purple-500"
                >
                  <option value="₹15L - ₹20L">₹15L - ₹20L (Standard Showroom)</option>
                  <option value="₹20L - ₹30L">₹20L - ₹30L (Flagship 3S Center)</option>
                  <option value="Above ₹30L">Above ₹30L (District Master Franchise)</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-medium text-slate-400 mb-1">Proposed Showroom Space:</label>
                <select
                  value={proposedSpace}
                  onChange={(e) => setProposedSpace(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-slate-200 focus:outline-none focus:border-purple-500"
                >
                  <option value="500 - 1000 Sq.Ft">500 - 1000 Sq.Ft</option>
                  <option value="1000 - 1500 Sq.Ft">1000 - 1500 Sq.Ft</option>
                  <option value="2000+ Sq.Ft">2000+ Sq.Ft</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-500 text-white font-extrabold py-3.5 rounded-2xl shadow-lg shadow-purple-950/60 transition-all text-xs flex items-center justify-center gap-2 mt-4"
            >
              <Send className="w-4 h-4" />
              Submit Dealership Application
            </button>
          </form>
        ) : (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-purple-500/20 text-purple-400 mx-auto flex items-center justify-center border border-purple-500/40">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-bold text-white">Application Received!</h3>
            <p className="text-xs text-slate-300 leading-relaxed max-w-sm mx-auto">
              Thank you <strong className="text-white">{applicantName}</strong>! Our Head of Franchise Expansion will contact you within 24 hours regarding opening an EVDov dealership in <strong className="text-purple-300">{city}, {state}</strong>.
            </p>

            <div className="pt-2 max-w-sm mx-auto space-y-2">
              <button
                onClick={() => {
                  onClose();
                  onOpenWhatsApp(`Hi! I just applied for an EVDov dealership in ${city}, ${state}. Name: ${applicantName}, Investment: ${investmentBudget}`);
                }}
                className="w-full bg-purple-600 text-white font-bold py-3 rounded-xl text-xs flex items-center justify-center gap-2"
              >
                Chat Directly with Franchise Director on WhatsApp
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
