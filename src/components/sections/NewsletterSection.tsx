import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, CheckCircle2, Send, Sparkles } from 'lucide-react';
import { Button } from '../ui/ReusableComponents';

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 3500);
    }
  };

  return (
    <section className="py-16 bg-white border-t border-slate-200/80 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0F172A] text-white rounded-[36px] p-8 sm:p-14 shadow-2xl relative overflow-hidden grid lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-6 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-bold border border-white/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>STAY INFORMED</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
              Subscribe to Impact Updates & Monthly Reports
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Get quarterly field audit reports, tree plantation coordinates, and rural school stories delivered to your inbox. No spam.
            </p>
          </div>

          <div className="lg:col-span-6">
            {subscribed ? (
              <div className="bg-emerald-500/20 border border-emerald-500/40 p-4 rounded-2xl text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-[#22C55E] mx-auto" />
                <h4 className="text-base font-bold text-white">Subscribed Successfully!</h4>
                <p className="text-xs text-slate-300">Thank you for joining our community of change-makers.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="relative">
                  <Mail className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address..."
                    className="w-full bg-white/10 border border-white/20 rounded-2xl pl-12 pr-4 py-4 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#165DFF] focus:bg-white/20 backdrop-blur-md transition-all"
                  />
                </div>
                <Button type="submit" variant="secondary" size="md" icon={Send} className="w-full">
                  Subscribe to Newsletter
                </Button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};
