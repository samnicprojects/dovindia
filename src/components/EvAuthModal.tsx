import React, { useState } from 'react';
import { X, User, Mail, Lock, LogIn, UserPlus, CheckCircle2, AlertCircle, Zap, FileText, Phone } from 'lucide-react';
import { LegalAgreementModal } from './LegalAgreementModal';

export interface EvUser {
  name: string;
  email: string;
  phone?: string;
  password?: string;
  createdAt?: string;
}

interface EvAuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (user: EvUser) => void;
}

export const EvAuthModal: React.FC<EvAuthModalProps> = ({
  isOpen,
  onClose,
  onLoginSuccess
}) => {
  const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');
  
  // Register state
  const [regName, setRegName] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regPhone, setRegPhone] = useState('');
  const [regPassword, setRegPassword] = useState('');

  // Login state
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  // Agreement State
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [isLegalModalOpen, setIsLegalModalOpen] = useState(false);
  const [legalModalTab, setLegalModalTab] = useState<'terms' | 'privacy'>('terms');

  // Messages
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  if (!isOpen) return null;

  const getSavedUsers = (): EvUser[] => {
    try {
      const data = localStorage.getItem('dov_ev_users');
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  };

  const handleCheckboxClick = () => {
    if (!acceptedTerms) {
      setLegalModalTab('terms');
      setIsLegalModalOpen(true);
    } else {
      setAcceptedTerms(false);
    }
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');

    if (!acceptedTerms) {
      setErrorMsg('Please click the checkbox to read and accept the Terms & Conditions and Privacy Policy.');
      setIsLegalModalOpen(true);
      return;
    }

    if (!regName.trim() || !regEmail.trim() || !regPhone.trim() || !regPassword.trim()) {
      setErrorMsg('Please fill in all fields (Name, Email, Phone, Password).');
      return;
    }

    const existingUsers = getSavedUsers();
    const isAlreadyRegistered = existingUsers.some(
      (u) => u.email.toLowerCase() === regEmail.toLowerCase()
    );

    if (isAlreadyRegistered) {
      setErrorMsg('Account with this email already exists. Please login instead.');
      return;
    }

    const newUser: EvUser = {
      name: regName.trim(),
      email: regEmail.trim().toLowerCase(),
      phone: regPhone.trim(),
      password: regPassword,
      createdAt: new Date().toISOString()
    };

    const updatedUsers = [...existingUsers, newUser];
    localStorage.setItem('dov_ev_users', JSON.stringify(updatedUsers));
    
    // Auto login
    const sessionUser = { name: newUser.name, email: newUser.email };
    localStorage.setItem('dov_ev_current_user', JSON.stringify(sessionUser));

    setSuccessMsg('Registration successful! Logging you in...');
    setTimeout(() => {
      onLoginSuccess(sessionUser);
      onClose();
    }, 800);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');

    if (!acceptedTerms) {
      setErrorMsg('Please click the checkbox to read and accept the Terms & Conditions and Privacy Policy.');
      setIsLegalModalOpen(true);
      return;
    }

    if (!loginEmail.trim() || !loginPassword.trim()) {
      setErrorMsg('Please enter both Email and Password.');
      return;
    }

    const users = getSavedUsers();
    const matchedUser = users.find(
      (u) => u.email.toLowerCase() === loginEmail.trim().toLowerCase() && u.password === loginPassword
    );

    if (!matchedUser) {
      setErrorMsg('Invalid email or password. If you are new, please register.');
      return;
    }

    const sessionUser = { name: matchedUser.name, email: matchedUser.email };
    localStorage.setItem('dov_ev_current_user', JSON.stringify(sessionUser));

    setSuccessMsg(`Welcome back, ${matchedUser.name}!`);
    setTimeout(() => {
      onLoginSuccess(sessionUser);
      onClose();
    }, 800);
  };

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
        <div className="bg-white border border-slate-200 rounded-3xl w-full max-w-md overflow-hidden shadow-2xl relative text-slate-900">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-[#EA580C] to-[#0E0C4D] p-6 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 text-white font-bold flex items-center justify-center backdrop-blur-sm border border-white/20">
                <Zap className="w-6 h-6 text-amber-300 fill-current" />
              </div>
              <div>
                <h3 className="font-extrabold text-base text-white">EV Scooter Portal</h3>
                <p className="text-xs text-orange-100">Customer & Dealership Account Access</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-white/80 hover:text-white rounded-lg bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Tab Selection */}
          <div className="flex border-b border-slate-200 bg-slate-50">
            <button
              type="button"
              onClick={() => {
                setActiveTab('login');
                setErrorMsg('');
                setSuccessMsg('');
              }}
              className={`flex-1 py-3 text-xs font-extrabold flex items-center justify-center gap-2 border-b-2 transition-all cursor-pointer ${
                activeTab === 'login'
                  ? 'border-[#EA580C] text-[#EA580C] bg-white'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              <LogIn className="w-4 h-4" /> Account Login
            </button>

            <button
              type="button"
              onClick={() => {
                setActiveTab('register');
                setErrorMsg('');
                setSuccessMsg('');
              }}
              className={`flex-1 py-3 text-xs font-extrabold flex items-center justify-center gap-2 border-b-2 transition-all cursor-pointer ${
                activeTab === 'register'
                  ? 'border-[#EA580C] text-[#EA580C] bg-white'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              <UserPlus className="w-4 h-4" /> New Registration
            </button>
          </div>

          <div className="p-6 space-y-4 text-xs">
            
            {/* Notifications */}
            {errorMsg && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-red-700 flex items-center gap-2 font-medium">
                <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                <span>{errorMsg}</span>
              </div>
            )}

            {successMsg && (
              <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-700 flex items-center gap-2 font-medium">
                <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
                <span>{successMsg}</span>
              </div>
            )}

            {activeTab === 'login' ? (
              /* LOGIN FORM */
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="email"
                      required
                      placeholder="e.g. user@example.com"
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-3 py-2.5 text-slate-900 font-medium placeholder-slate-400 focus:outline-none focus:border-[#EA580C] focus:bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="password"
                      required
                      placeholder="Enter password"
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-3 py-2.5 text-slate-900 font-medium placeholder-slate-400 focus:outline-none focus:border-[#EA580C] focus:bg-white"
                    />
                  </div>
                </div>

                {/* Agreement Box Trigger */}
                <div 
                  onClick={handleCheckboxClick}
                  className="flex items-start gap-2.5 pt-1 bg-orange-50/70 p-3 rounded-xl border border-orange-200 cursor-pointer hover:bg-orange-100/60 transition-all group"
                >
                  <input
                    type="checkbox"
                    readOnly
                    checked={acceptedTerms}
                    className="mt-0.5 w-4 h-4 text-[#EA580C] accent-[#EA580C] rounded border-slate-300 focus:ring-[#EA580C] cursor-pointer shrink-0"
                  />
                  <div className="text-[11px] text-slate-700 leading-snug select-none">
                    By submitting this form, I agree to the{' '}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setLegalModalTab('privacy');
                        setIsLegalModalOpen(true);
                      }}
                      className="text-[#EA580C] font-extrabold underline hover:text-[#C2410C] cursor-pointer"
                    >
                      Privacy Policy
                    </button>{' '}
                    and{' '}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setLegalModalTab('terms');
                        setIsLegalModalOpen(true);
                      }}
                      className="text-[#EA580C] font-extrabold underline hover:text-[#C2410C] cursor-pointer"
                    >
                      Terms & Conditions of Use
                    </button>, and consent to receive RCS and SMS messages on my provided number.
                    {!acceptedTerms && (
                      <span className="block text-[10px] text-slate-500 font-medium mt-1">
                        (Click to read & tick in popup)
                      </span>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={!acceptedTerms}
                  className={`w-full py-3.5 text-white font-extrabold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-2 uppercase tracking-wider mt-2 ${
                    acceptedTerms
                      ? 'bg-[#EA580C] hover:bg-[#C2410C] cursor-pointer'
                      : 'bg-slate-300 cursor-not-allowed opacity-70'
                  }`}
                >
                  <LogIn className="w-4 h-4" /> Login to EV Portal
                </button>
              </form>
            ) : (
              /* REGISTER FORM */
              <form onSubmit={handleRegister} className="space-y-4">
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={regName}
                      onChange={(e) => setRegName(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-3 py-2.5 text-slate-900 font-medium placeholder-slate-400 focus:outline-none focus:border-[#EA580C] focus:bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="email"
                      required
                      placeholder="e.g. rahul@example.com"
                      value={regEmail}
                      onChange={(e) => setRegEmail(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-3 py-2.5 text-slate-900 font-medium placeholder-slate-400 focus:outline-none focus:border-[#EA580C] focus:bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
                    Contact Mobile Number
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9876543210"
                      value={regPhone}
                      onChange={(e) => setRegPhone(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-3 py-2.5 text-slate-900 font-medium placeholder-slate-400 focus:outline-none focus:border-[#EA580C] focus:bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="password"
                      required
                      placeholder="Create a strong password"
                      value={regPassword}
                      onChange={(e) => setRegPassword(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-3 py-2.5 text-slate-900 font-medium placeholder-slate-400 focus:outline-none focus:border-[#EA580C] focus:bg-white"
                    />
                  </div>
                </div>

                {/* Agreement Box Trigger */}
                <div 
                  onClick={handleCheckboxClick}
                  className="flex items-start gap-2.5 pt-1 bg-orange-50/70 p-3 rounded-xl border border-orange-200 cursor-pointer hover:bg-orange-100/60 transition-all group"
                >
                  <input
                    type="checkbox"
                    readOnly
                    checked={acceptedTerms}
                    className="mt-0.5 w-4 h-4 text-[#EA580C] accent-[#EA580C] rounded border-slate-300 focus:ring-[#EA580C] cursor-pointer shrink-0"
                  />
                  <div className="text-[11px] text-slate-700 leading-snug select-none">
                    By submitting this form, I agree to the{' '}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setLegalModalTab('privacy');
                        setIsLegalModalOpen(true);
                      }}
                      className="text-[#EA580C] font-extrabold underline hover:text-[#C2410C] cursor-pointer"
                    >
                      Privacy Policy
                    </button>{' '}
                    and{' '}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setLegalModalTab('terms');
                        setIsLegalModalOpen(true);
                      }}
                      className="text-[#EA580C] font-extrabold underline hover:text-[#C2410C] cursor-pointer"
                    >
                      Terms & Conditions of Use
                    </button>, and consent to receive RCS and SMS messages on my provided number.
                    {!acceptedTerms && (
                      <span className="block text-[10px] text-slate-500 font-medium mt-1">
                        (Click to read & tick in popup)
                      </span>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={!acceptedTerms}
                  className={`w-full py-3.5 text-white font-extrabold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-2 uppercase tracking-wider mt-2 ${
                    acceptedTerms
                      ? 'bg-[#EA580C] hover:bg-[#C2410C] cursor-pointer'
                      : 'bg-slate-300 cursor-not-allowed opacity-70'
                  }`}
                >
                  <UserPlus className="w-4 h-4" /> Create EV Account
                </button>
              </form>
            )}

            <div className="pt-2 text-center text-[10px] text-slate-500">
              🔒 Account details saved securely in local storage.
            </div>

          </div>

        </div>
      </div>

      {/* Pop-up Legal Agreement Modal with Accept & Tick button */}
      <LegalAgreementModal
        isOpen={isLegalModalOpen}
        onClose={() => setIsLegalModalOpen(false)}
        initialTab={legalModalTab}
        onAccept={() => setAcceptedTerms(true)}
      />
    </>
  );
};
