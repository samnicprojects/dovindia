import React, { useState } from 'react';
import { SCOOTER_MODELS } from '../data/mockData';
import { X, Zap, Calendar, MapPin, Phone, User, CheckCircle2, MessageCircle } from 'lucide-react';

interface TestDriveModalProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedScooterId?: string;
  onOpenWhatsApp: (intent?: string) => void;
}

export const TestDriveModal: React.FC<TestDriveModalProps> = ({
  isOpen,
  onClose,
  preSelectedScooterId = SCOOTER_MODELS[0].id,
  onOpenWhatsApp
}) => {
  const [selectedScooterId, setSelectedScooterId] = useState(preSelectedScooterId);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('Pune');
  const [preferredDate, setPreferredDate] = useState('2026-07-25');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const selectedScooter = SCOOTER_MODELS.find(s => s.id === selectedScooterId) || SCOOTER_MODELS[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1E3A8A]/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white border border-[#E5E7EB] rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl relative">
        {/* Header - Royal Blue (#0D6EFD) */}
        <div className="bg-[#0D6EFD] p-6 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white text-[#0D6EFD] font-bold flex items-center justify-center shadow-md">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-extrabold text-base text-white">Book Free EVDov Test Drive</h3>
              <p className="text-xs text-blue-100">Experience electric thrill at your nearest dealership</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-white/80 hover:text-white rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 text-xs text-[#1F2937] max-h-[80vh] overflow-y-auto">
            {/* Scooter Model Selection */}
            <div>
              <label className="block text-[11px] font-bold text-[#6B7280] mb-2 uppercase tracking-wider">
                Select Scooter Model:
              </label>
              <div className="grid grid-cols-2 gap-2">
                {SCOOTER_MODELS.map((scooter) => (
                  <button
                    key={scooter.id}
                    type="button"
                    onClick={() => setSelectedScooterId(scooter.id)}
                    className={`p-3 rounded-xl border text-left transition-all flex items-center gap-2 ${
                      selectedScooterId === scooter.id
                        ? 'bg-blue-50 border-[#0D6EFD] text-[#0D6EFD] font-bold shadow-sm'
                        : 'bg-[#F8FAFC] border-[#E5E7EB] text-[#6B7280] hover:text-[#1F2937]'
                    }`}
                  >
                    <Zap className={`w-4 h-4 shrink-0 ${selectedScooterId === scooter.id ? 'text-[#0D6EFD]' : 'text-gray-400'}`} />
                    <div className="truncate">
                      <div className="text-xs truncate">{scooter.name}</div>
                      <div className="text-[10px] text-[#6B7280] font-normal">{scooter.topSpeed} km/h • {scooter.rangePerCharge}km</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Inputs */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="col-span-2">
                <label className="block text-[10px] font-medium text-[#6B7280] mb-1">Full Name:</label>
                <div className="relative">
                  <User className="w-4 h-4 text-[#9CA3AF] absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Deshmukh"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl pl-9 pr-3 py-2.5 text-[#1F2937] placeholder-[#9CA3AF] focus:outline-none focus:border-[#0D6EFD]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-medium text-[#6B7280] mb-1">Phone Number:</label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-[#9CA3AF] absolute left-3 top-3" />
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 9876543210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl pl-9 pr-3 py-2.5 text-[#1F2937] placeholder-[#9CA3AF] focus:outline-none focus:border-[#0D6EFD]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-medium text-[#6B7280] mb-1">Preferred City:</label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-[#9CA3AF] absolute left-3 top-3" />
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl pl-9 pr-3 py-2.5 text-[#1F2937] focus:outline-none focus:border-[#0D6EFD]"
                  >
                    <option value="Pune">Pune, Maharashtra</option>
                    <option value="Mumbai">Mumbai, Maharashtra</option>
                    <option value="Bengaluru">Bengaluru, Karnataka</option>
                    <option value="Delhi NCR">Delhi NCR</option>
                    <option value="Hyderabad">Hyderabad, Telangana</option>
                    <option value="Ahmedabad">Ahmedabad, Gujarat</option>
                    <option value="Jaipur">Jaipur, Rajasthan</option>
                  </select>
                </div>
              </div>

              <div className="col-span-2">
                <label className="block text-[10px] font-medium text-[#6B7280] mb-1">Preferred Date:</label>
                <div className="relative">
                  <Calendar className="w-4 h-4 text-[#9CA3AF] absolute left-3 top-3" />
                  <input
                    type="date"
                    required
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl pl-9 pr-3 py-2.5 text-[#1F2937] focus:outline-none focus:border-[#0D6EFD]"
                  />
                </div>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="btn-primary w-full py-3.5 rounded-xl shadow-md transition-all text-xs flex items-center justify-center gap-2 mt-4"
            >
              <Zap className="w-4 h-4" />
              Confirm Free Test Drive Booking
            </button>
          </form>
        ) : (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#22C55E]/20 text-[#22C55E] mx-auto flex items-center justify-center border border-[#22C55E]/40">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-bold text-[#1E3A8A]">Test Drive Booking Confirmed! 🎉</h3>
            <p className="text-xs text-[#6B7280] leading-relaxed max-w-sm mx-auto">
              Thank you <strong className="text-[#1F2937]">{name}</strong>! Your test drive for <strong className="text-[#0D6EFD]">{selectedScooter.name}</strong> at our <strong className="text-[#1F2937]">{city}</strong> dealership on <strong className="text-[#22C55E]">{preferredDate}</strong> has been scheduled.
            </p>

            <div className="p-3 bg-[#F8FAFC] rounded-xl border border-[#E5E7EB] text-[11px] text-[#6B7280] space-y-1 text-left max-w-sm mx-auto">
              <div>📍 Dealership Address: EVDov Experience Center, Sector 4, {city}</div>
              <div>📞 Local Helpline: 7098555333</div>
            </div>

            <div className="pt-2 flex flex-col gap-2 max-w-sm mx-auto">
              <button
                onClick={() => {
                  onClose();
                  onOpenWhatsApp(`Hi! I just booked a test drive for ${selectedScooter.name} in ${city} for ${preferredDate}. Name: ${name}`);
                }}
                className="btn-whatsapp w-full py-3 text-xs justify-center"
              >
                <MessageCircle className="w-4 h-4" />
                Get Instant WhatsApp Directions & Pass
              </button>

              <button
                onClick={onClose}
                className="btn-secondary w-full py-2.5 text-xs"
              >
                Close Window
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
