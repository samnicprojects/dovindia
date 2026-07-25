import React, { useState } from 'react';
import { MessageCircle, X, Send, Sparkles, CheckCircle2, Building2, Zap, HeartHandshake, PhoneCall } from 'lucide-react';

interface WhatsAppWidgetProps {
  isOpen: boolean;
  onClose: () => void;
  initialIntent?: string;
}

export const WhatsAppWidget: React.FC<WhatsAppWidgetProps> = ({
  isOpen,
  onClose,
  initialIntent = 'General Inquiry'
}) => {
  const [selectedTopic, setSelectedTopic] = useState<string>(initialIntent);
  const [customName, setCustomName] = useState('');
  const [customCity, setCustomCity] = useState('');
  const [customMessage, setCustomMessage] = useState('');

  const topics = [
    { id: 'Inquire EV Scooter', label: 'EVDov Electric Scooters', icon: Zap, color: 'text-cyan-400' },
    { id: 'Book Test Drive', label: 'Book a Test Drive', icon: Zap, color: 'text-emerald-400' },
    { id: 'Franchise Dealership', label: 'Dealership / Franchise', icon: Building2, color: 'text-purple-400' },
    { id: 'Donate to NGO', label: 'CSR NGO Donation (80G)', icon: HeartHandshake, color: 'text-amber-400' },
    { id: 'Corporate CSR Partnership', label: 'Corporate CSR Tie-up', icon: Sparkles, color: 'text-blue-400' }
  ];

  const handleLaunchWhatsApp = () => {
    const phoneNumber = '917098555333';
    const text = `Hello DOV India Team! 👋\n\nI am interested in: *${selectedTopic}*.\nName: ${customName || 'A visitor'}\nCity: ${customCity || 'India'}\nMessage: ${customMessage || 'Please send me complete details and brochure.'}\n\nSent from dovindia.in`;
    
    const encodedText = encodeURIComponent(text);
    window.open(`https://api.whatsapp.com/send/?phone=${phoneNumber}&text=${encodedText}&type=phone_number&app_absent=0`, '_blank');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 w-full max-w-sm bg-slate-900 border border-emerald-500/30 rounded-2xl shadow-2xl shadow-emerald-950/80 overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-900 via-slate-900 to-cyan-950 p-4 border-b border-emerald-800/40 flex items-center justify-between text-white">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-slate-950 font-bold shadow-md shadow-emerald-900/50">
              <MessageCircle className="w-6 h-6 fill-slate-950 text-emerald-500" />
            </div>
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 rounded-full border-2 border-slate-900 animate-pulse"></span>
          </div>
          <div>
            <h3 className="font-bold text-sm text-white flex items-center gap-1.5">
              DOV India WhatsApp Helpdesk
            </h3>
            <p className="text-[11px] text-emerald-300 font-medium">Online • Responds in &lt; 5 minutes</p>
          </div>
        </div>
        <button 
          onClick={onClose}
          className="p-1.5 text-slate-400 hover:text-white bg-slate-800/60 rounded-lg hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Body */}
      <div className="p-4 space-y-4 max-h-[75vh] overflow-y-auto bg-slate-950 text-slate-200 text-xs">
        {/* Welcome Message Bubble */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-3.5 space-y-1">
          <p className="font-semibold text-slate-200">Welcome to DOV Group Support! 🙏</p>
          <p className="text-slate-400 leading-relaxed">
            Whether you are looking for zero-emission electric scooters, dealership opportunities, or supporting our CSR Foundation projects, we are here to assist you.
          </p>
        </div>

        {/* Topic Selector Chips */}
        <div>
          <label className="block text-[11px] font-semibold text-slate-400 mb-2 uppercase tracking-wider">
            Select Inquiry Topic:
          </label>
          <div className="grid grid-cols-1 gap-1.5">
            {topics.map((t) => {
              const Icon = t.icon;
              const isSelected = selectedTopic === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => setSelectedTopic(t.id)}
                  className={`flex items-center justify-between p-2.5 rounded-xl border text-left transition-all ${
                    isSelected
                      ? 'bg-emerald-950/70 border-emerald-500/60 text-white font-semibold'
                      : 'bg-slate-900/60 border-slate-800/80 text-slate-300 hover:bg-slate-900'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Icon className={`w-4 h-4 ${t.color}`} />
                    <span>{t.label}</span>
                  </div>
                  {isSelected && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
                </button>
              );
            })}
          </div>
        </div>

        {/* User Info Inputs */}
        <div className="space-y-2 pt-1">
          <div>
            <label className="block text-[10px] text-slate-400 font-medium mb-1">Your Name (Optional):</label>
            <input
              type="text"
              placeholder="e.g. Aniket Sharma"
              value={customName}
              onChange={(e) => setCustomName(e.target.value)}
              className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-emerald-500"
            />
          </div>

          <div>
            <label className="block text-[10px] text-slate-400 font-medium mb-1">Your City / Location:</label>
            <input
              type="text"
              placeholder="e.g. Pune, Maharashtra"
              value={customCity}
              onChange={(e) => setCustomCity(e.target.value)}
              className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-emerald-500"
            />
          </div>

          <div>
            <label className="block text-[10px] text-slate-400 font-medium mb-1">Specific Question / Notes:</label>
            <textarea
              rows={2}
              placeholder="e.g., Please share price list, battery specs, or donation receipts."
              value={customMessage}
              onChange={(e) => setCustomMessage(e.target.value)}
              className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-emerald-500 resize-none"
            ></textarea>
          </div>
        </div>

        {/* Direct Action Button */}
        <button
          onClick={handleLaunchWhatsApp}
          className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold py-3 rounded-xl shadow-lg shadow-emerald-900/40 flex items-center justify-center gap-2 transition-all transform active:scale-95 text-xs"
        >
          <Send className="w-4 h-4" />
          Start Official WhatsApp Chat
        </button>

        <p className="text-[10px] text-slate-500 text-center flex items-center justify-center gap-1">
          <span>🔒 Direct encrypted link to official WhatsApp Business</span>
        </p>
      </div>
    </div>
  );
};
