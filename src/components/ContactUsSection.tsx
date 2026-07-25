import React, { useState } from 'react';
import { MapPin, Phone, Mail, MessageCircle, Send, Building2, CheckCircle2, Clock, ShieldCheck, Sparkles } from 'lucide-react';

interface ContactUsSectionProps {
  onOpenWhatsApp: (intent?: string) => void;
}

export const ContactUsSection: React.FC<ContactUsSectionProps> = ({ onOpenWhatsApp }) => {
  const [department, setDepartment] = useState('EV Mobility & Dealership');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const branches = [
    {
      city: 'Head Office (Lucknow)',
      title: 'DOV India Corporate Head Office',
      address: '569/169, Near PICCADILY Hotel, Kanpur Road, Singar Nagar Metro Station, Lucknow, Uttar Pradesh 226012',
      phone: '7098555333',
      email: 'care@dovindia.in',
      isHq: true,
      tag: 'Corporate HQ'
    },
    {
      city: 'Transport Nagar Branch',
      title: 'DOV India Transport Office',
      address: 'S 94/10, Transport Nagar, Near Baba Chai Wala, Behind Maruti One Up Service Station, Kanpur Road, Lucknow 226012',
      phone: '7098555333',
      email: 'care@dovindia.in',
      isHq: false,
      tag: 'Branch Office'
    },
    {
      city: 'EV Factory Unit 1',
      title: 'DOV INDIA EV FACTORY (Behsa)',
      address: '1266, Behsa, Near Sahid Path, Mausam Vibhag, Kanpur Road, Opposite SAS Hyundai, Lucknow 226012',
      phone: '7098555333',
      email: 'care@dovindia.in',
      isHq: false,
      tag: 'EV Manufacturing Plant 1'
    },
    {
      city: 'EV Factory Unit 2',
      title: 'DOV INDIA EV FACTORY (Nadarganj)',
      address: 'Amaushi Station Road, Kinderkhera, Nadarganj, Lucknow 226008',
      phone: '7098555333',
      email: 'care@dovindia.in',
      isHq: false,
      tag: 'EV Manufacturing Plant 2'
    }
  ];

  return (
    <div className="bg-[#F8FAFC] text-slate-800 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header Title Section (Matches Screenshot 'Get in touch') */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-orange-50 text-[#EA580C] border border-orange-200 text-xs font-black uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#EA580C]" />
            DIRECT CONTACT & SUPPORT
          </span>
          <h1 className="text-4xl sm:text-6xl font-black text-[#EA580C] tracking-tight">
            Get in touch
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
            Have questions regarding EV Scooters, Dealership Applications, CSR 80G Tax Receipts, or General Support? Reach out to our offices directly.
          </p>
        </div>

        {/* Quick Contact Info Strip */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-orange-50 text-[#EA580C] flex items-center justify-center shrink-0">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <div className="text-[10px] font-bold text-slate-400 uppercase">Helplines</div>
              <div className="text-xs font-black text-[#0E0C4D]">7098555333</div>
              <div className="text-[11px] font-bold text-slate-600">9136520193 / 9026325402</div>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0E0C4D] flex items-center justify-center shrink-0">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <div className="text-[10px] font-bold text-slate-400 uppercase">Support Email</div>
              <a href="mailto:care@dovindia.in" className="text-xs font-bold text-blue-600 hover:underline">
                care@dovindia.in
              </a>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <div className="text-[10px] font-bold text-slate-400 uppercase">Working Hours</div>
              <div className="text-xs font-bold text-slate-800">Mon - Sat: 9:00 AM - 7:00 PM</div>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="text-[10px] font-bold text-slate-400 uppercase">80G Verification</div>
              <div className="text-xs font-bold text-slate-800">100% Tax Deductible</div>
            </div>
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Inquiry Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xl space-y-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-[#0E0C4D]">Send Us a Direct Inquiry</h2>
              <p className="text-xs text-slate-500 font-bold mt-1">Fill out the form below and our team will get back to you within 24 hours.</p>
            </div>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                
                {/* Department Selection */}
                <div>
                  <label className="block text-[11px] font-extrabold text-slate-700 mb-1.5 uppercase tracking-wider">
                    Select Department:
                  </label>
                  <select
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 font-bold focus:outline-none focus:border-[#EA580C] focus:ring-2 focus:ring-orange-100 transition-all cursor-pointer"
                  >
                    <option value="EV Mobility & Dealership">⚡ EV Scooter Sales & Dealership Application</option>
                    <option value="CSR NGO Support">🌱 DOV Foundation CSR & 80G Tax Donations</option>
                    <option value="Factory & Business Visit">🏭 Factory Visit & Agency Allotment</option>
                    <option value="Media & Press">📰 Media, Press & Corporate Relations</option>
                  </select>
                </div>

                {/* Name & Phone */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-extrabold text-slate-700 mb-1.5 uppercase tracking-wider">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Anand Patel"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 font-medium focus:outline-none focus:border-[#EA580C] focus:ring-2 focus:ring-orange-100 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-extrabold text-slate-700 mb-1.5 uppercase tracking-wider">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9876543210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 font-medium focus:outline-none focus:border-[#EA580C] focus:ring-2 focus:ring-orange-100 transition-all"
                    />
                  </div>
                </div>

                {/* Email & City */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-extrabold text-slate-700 mb-1.5 uppercase tracking-wider">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="care@dovindia.in"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 font-medium focus:outline-none focus:border-[#EA580C] focus:ring-2 focus:ring-orange-100 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-extrabold text-slate-700 mb-1.5 uppercase tracking-wider">
                      City / Location *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Mumbai / Raebareli"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 font-medium focus:outline-none focus:border-[#EA580C] focus:ring-2 focus:ring-orange-100 transition-all"
                    />
                  </div>
                </div>

                {/* Message Box */}
                <div>
                  <label className="block text-[11px] font-extrabold text-slate-700 mb-1.5 uppercase tracking-wider">
                    Your Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="How can we assist you today? Mention your requirement, budget, or inquiry..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 font-medium focus:outline-none focus:border-[#EA580C] focus:ring-2 focus:ring-orange-100 transition-all resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#EA580C] hover:bg-orange-700 text-white font-extrabold py-3.5 rounded-xl text-xs flex items-center justify-center gap-2 shadow-lg transition-all transform hover:scale-[1.005] cursor-pointer uppercase tracking-wider"
                >
                  <Send className="w-4 h-4 text-white" />
                  Submit Message
                </button>
              </form>
            ) : (
              <div className="p-8 text-center space-y-4 bg-emerald-50 rounded-2xl border border-emerald-200">
                <CheckCircle2 className="w-14 h-14 text-emerald-600 mx-auto" />
                <h3 className="text-xl font-extrabold text-slate-900">Message Submitted Successfully!</h3>
                <p className="text-xs text-slate-600 leading-relaxed max-w-md mx-auto">
                  Thank you <strong className="text-slate-900">{name}</strong>! Your inquiry for <strong className="text-[#EA580C]">{department}</strong> has been received. Our executive will reach out to you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-2 text-xs font-bold text-emerald-700 underline cursor-pointer"
                >
                  Send Another Inquiry
                </button>
              </div>
            )}
          </div>

          {/* Right Column: Exact Offices from Screenshot */}
          <div className="lg:col-span-5 space-y-6">

            {/* Official Offices List */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-md space-y-5">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <h3 className="text-lg font-black text-[#0E0C4D]">Official Offices</h3>
                <span className="text-[10px] font-bold text-orange-600 bg-orange-50 px-2.5 py-1 rounded-full uppercase">Verified Locations</span>
              </div>

              <div className="space-y-4 text-xs">
                {branches.map((b, idx) => (
                  <div key={idx} className={`p-5 rounded-2xl border transition-all ${b.isHq ? 'bg-orange-50/40 border-orange-200' : 'bg-slate-50 border-slate-200'}`}>
                    <div className="text-xs font-bold text-[#EA580C] uppercase tracking-wider mb-1">
                      {b.tag}
                    </div>
                    <h4 className="text-sm font-black text-[#0E0C4D]">
                      {b.title}
                    </h4>
                    <p className="text-xs text-slate-600 mt-1.5 leading-relaxed font-medium">
                      {b.address}
                    </p>

                    <div className="mt-3 pt-3 border-t border-slate-200/60 flex flex-col gap-1 text-xs font-bold">
                      <div className="flex items-center justify-between">
                        <a href="mailto:care@dovindia.in" className="text-blue-600 hover:underline flex items-center gap-1">
                          <Mail className="w-3.5 h-3.5" /> care@dovindia.in
                        </a>
                        <a href="tel:7098555333" className="text-slate-800 flex items-center gap-1">
                          <Phone className="w-3.5 h-3.5 text-[#EA580C]" /> 7098555333
                        </a>
                      </div>
                      <div className="text-[11px] text-slate-500 font-medium flex items-center gap-3">
                        <a href="tel:09136520193" className="hover:text-slate-900 transition-colors">📞 09136520193</a>
                        <a href="tel:9026325402" className="hover:text-slate-900 transition-colors">📞 9026325402</a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
