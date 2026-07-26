import React, { useState } from 'react';
import { 
  ShieldAlert, 
  Clock, 
  Mail, 
  Phone, 
  MessageCircle, 
  Key, 
  Lock, 
  CheckCircle2, 
  HeartHandshake, 
  Sparkles, 
  RefreshCw, 
  X, 
  Landmark,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';
import { maintenanceConfig } from '../data/Maintenance';
import { BANK_DETAILS } from '../data/donation';

interface MaintenancePageProps {
  onBypass: () => void;
}

export const MaintenancePage: React.FC<MaintenancePageProps> = ({ onBypass }) => {
  const [showAdminModal, setShowAdminModal] = useState(false);
  const [showBankModal, setShowBankModal] = useState(false);
  const [passkeyInput, setPasskeyInput] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleBypassSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (passkeyInput.trim().toLowerCase() === maintenanceConfig.bypassSecret.toLowerCase()) {
      localStorage.setItem('dov_maintenance_bypass', 'true');
      onBypass();
    } else {
      setErrorMsg('Invalid admin bypass passkey. Please try again.');
    }
  };

  const copyToClipboard = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(maintenanceConfig.whatsappMessage);
    window.open(`https://api.whatsapp.com/send/?phone=${maintenanceConfig.whatsappNumber}&text=${text}&type=phone_number&app_absent=0`, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col justify-between relative overflow-hidden font-sans selection:bg-blue-600 selection:text-white">
      {/* Background Decorative Glows */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-emerald-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />

      {/* Discreet Admin Bypass Trigger */}
      <button
        onClick={() => setShowAdminModal(true)}
        className="absolute top-4 right-4 text-slate-600 hover:text-slate-300 p-2 transition-colors z-20"
        title="Admin Access"
      >
        <Lock className="w-4 h-4" />
      </button>

      {/* Main Content Hero */}
      <main className="relative z-10 container mx-auto px-6 py-12 flex-grow flex flex-col items-center justify-center text-center max-w-3xl">
        {/* Status Badge */}
        <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-sm font-semibold mb-6 animate-pulse">
          <ShieldAlert className="w-4 h-4" />
          <span>{maintenanceConfig.title}</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
          {maintenanceConfig.subtitle}
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mb-8 leading-relaxed">
          {maintenanceConfig.description}
        </p>

        {/* Timing Card */}
        <div className="w-full max-w-xl bg-slate-800/80 backdrop-blur-xl border border-slate-700/80 rounded-2xl p-6 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 divide-y md:divide-y-0 md:divide-x divide-slate-700">
            <div className="flex items-center space-x-4 pb-3 md:pb-0 md:pr-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div className="text-left">
                <span className="text-xs uppercase tracking-wider font-bold text-slate-400 block">Status</span>
                <span className="text-base font-semibold text-white">{maintenanceConfig.estimatedCompletion}</span>
              </div>
            </div>

            <div className="flex items-center space-x-4 pt-3 md:pt-0 md:pl-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                <RefreshCw className="w-6 h-6 animate-spin" style={{ animationDuration: '8s' }} />
              </div>
              <div className="text-left">
                <span className="text-xs uppercase tracking-wider font-bold text-slate-400 block">Progress</span>
                <span className="text-base font-semibold text-white">{maintenanceConfig.expectedDuration}</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Admin Bypass Modal */}
      {showAdminModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fadeIn">
          <div className="bg-slate-800 border border-slate-700 rounded-2xl max-w-md w-full p-6 relative shadow-2xl">
            <button
              onClick={() => {
                setShowAdminModal(false);
                setErrorMsg('');
              }}
              className="absolute top-4 right-4 p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center">
                <Key className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Administrator Access</h3>
                <p className="text-xs text-slate-400">Enter your bypass passkey to access live site</p>
              </div>
            </div>

            <form onSubmit={handleBypassSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase text-slate-400 mb-1">
                  Passkey
                </label>
                <input
                  type="password"
                  value={passkeyInput}
                  onChange={(e) => {
                    setPasskeyInput(e.target.value);
                    setErrorMsg('');
                  }}
                  placeholder="Enter bypass key..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  autoFocus
                />
                {errorMsg && (
                  <p className="text-xs text-red-400 mt-2 flex items-center space-x-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errorMsg}</span>
                  </p>
                )}
              </div>

              <div className="flex items-center justify-end space-x-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAdminModal(false)}
                  className="px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl text-sm font-semibold bg-blue-600 hover:bg-blue-500 text-white transition-colors shadow-lg shadow-blue-600/30"
                >
                  Unlock Site
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Emergency Bank Details Modal */}
      {showBankModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fadeIn">
          <div className="bg-slate-800 border border-slate-700 rounded-2xl max-w-xl w-full p-6 relative shadow-2xl max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setShowBankModal(false)}
              className="absolute top-4 right-4 p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <Landmark className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Direct Bank Transfer Details</h3>
                <p className="text-xs text-slate-400">Emergency support & 80G Tax Exempted Contributions</p>
              </div>
            </div>

            <div className="space-y-4 text-sm">
              <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-700/60 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 text-xs uppercase font-semibold">Account Name</span>
                  <span className="text-white font-bold">{BANK_DETAILS.accountName}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 text-xs uppercase font-semibold">Bank Name</span>
                  <span className="text-white font-medium">{BANK_DETAILS.bankName}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 text-xs uppercase font-semibold">Account Number</span>
                  <div className="flex items-center space-x-2">
                    <span className="font-mono text-emerald-400 font-bold">{BANK_DETAILS.accountNumber}</span>
                    <button
                      onClick={() => copyToClipboard(BANK_DETAILS.accountNumber, 'acc')}
                      className="text-xs px-2 py-1 rounded bg-slate-800 text-slate-300 hover:text-white"
                    >
                      {copiedField === 'acc' ? 'Copied!' : 'Copy'}
                    </button>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 text-xs uppercase font-semibold">IFSC Code</span>
                  <div className="flex items-center space-x-2">
                    <span className="font-mono text-blue-400 font-bold">{BANK_DETAILS.ifscCode}</span>
                    <button
                      onClick={() => copyToClipboard(BANK_DETAILS.ifscCode, 'ifsc')}
                      className="text-xs px-2 py-1 rounded bg-slate-800 text-slate-300 hover:text-white"
                    >
                      {copiedField === 'ifsc' ? 'Copied!' : 'Copy'}
                    </button>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 text-xs uppercase font-semibold">UPI ID</span>
                  <span className="font-mono text-slate-200">{BANK_DETAILS.upiId}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 text-xs uppercase font-semibold">80G Reg. No.</span>
                  <span className="text-slate-200">{BANK_DETAILS.taxRegistration80G}</span>
                </div>
              </div>

              <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-xl flex items-start space-x-3 text-xs text-blue-300">
                <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>
                  All contributions made to DOV India qualify for tax deductions under Section 80G of the Indian Income Tax Act. Please WhatsApp us your payment screenshot to receive your official receipt.
                </span>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setShowBankModal(false)}
                className="px-5 py-2.5 rounded-xl bg-slate-700 hover:bg-slate-600 text-white font-semibold text-sm transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
