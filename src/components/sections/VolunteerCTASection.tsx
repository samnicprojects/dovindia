import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Users, Heart, Sparkles, CheckCircle2, X, Send } from 'lucide-react';
import { Button } from '../ui/ReusableComponents';

export const VolunteerCTASection: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', interest: 'Education' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setModalOpen(false);
      setFormData({ name: '', phone: '', email: '', interest: 'Education' });
    }, 2500);
  };

  return (
    <section id="volunteer" className="py-20 lg:py-28 relative overflow-hidden bg-gradient-to-r from-[#165DFF] via-[#7C3AED] to-[#FF7A00] text-white">
      {/* Background Decorative Circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 border border-white/30 backdrop-blur-md text-xs font-extrabold uppercase tracking-wider text-white"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>JOIN THE MOVEMENT</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-white"
        >
          Become a Volunteer & Be the Change Rural India Needs
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-base sm:text-xl text-blue-100 leading-relaxed max-w-2xl mx-auto"
        >
          Whether you can donate 2 hours a week, teach digital skills, assist emergency medical dispatch, or plant trees, your hands will build a brighter future.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 pt-4"
        >
          <Button
            variant="outline"
            size="lg"
            icon={Users}
            onClick={() => setModalOpen(true)}
            className="!bg-white !text-[#165DFF] hover:!bg-blue-50 shadow-xl"
          >
            Register as Volunteer
          </Button>
        </motion.div>

        <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-bold text-blue-100 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-amber-300" />
            <span>4,500+ Active Volunteers</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-amber-300" />
            <span>14 States Covered</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-amber-300" />
            <span>Certificate of Service</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-amber-300" />
            <span>Flexible Hours</span>
          </div>
        </div>
      </div>

      {/* Volunteer Modal */}
      <AnimatePresence>
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white text-slate-800 rounded-[32px] p-6 sm:p-8 max-w-md w-full shadow-2xl relative space-y-6"
            >
              <button
                onClick={() => setModalOpen(false)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 bg-slate-100 rounded-full"
              >
                <X className="w-5 h-5" />
              </button>

              {submitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#22C55E]/10 text-[#22C55E] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-black text-[#0F172A]">Registration Successful!</h3>
                  <p className="text-xs text-slate-600">Our volunteer coordination team will contact you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1 text-center">
                    <h3 className="text-2xl font-black text-[#0F172A]">Join DOV Volunteers</h3>
                    <p className="text-xs text-slate-500">Fill in your details to start your journey.</p>
                  </div>

                  <div className="space-y-3 pt-2 text-left">
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">Full Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-[#165DFF]"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">Phone Number</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="7098555333"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-[#165DFF]"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">Email Address</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="rahul@example.com"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-[#165DFF]"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">Preferred Volunteer Sector</label>
                      <select
                        value={formData.interest}
                        onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-[#165DFF]"
                      >
                        <option value="Education">Rural Education & Smart Classrooms</option>
                        <option value="Healthcare">Emergency Medical Response</option>
                        <option value="Environment">Afforestation & Tree Plantation</option>
                        <option value="Food">Zero Hunger Cooked Meal Vans</option>
                        <option value="Women">Women Skilling & Vocational Training</option>
                      </select>
                    </div>
                  </div>

                  <Button type="submit" variant="primary" size="md" icon={Send} className="w-full">
                    Submit Volunteer Application
                  </Button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
