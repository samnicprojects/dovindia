import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LucideIcon, ChevronDown, Check, Star } from 'lucide-react';

// --- BUTTON COMPONENT ---
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'gradient';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  icon: Icon,
  children,
  className = '',
  ...props
}) => {
  const sizeClasses = {
    sm: 'px-4 py-2 text-xs rounded-xl',
    md: 'px-6 py-3 text-sm rounded-2xl',
    lg: 'px-8 py-4 text-base rounded-2xl'
  };

  const variantClasses = {
    primary: 'bg-[#165DFF] hover:bg-[#0046E0] text-white font-bold shadow-md shadow-[#165DFF]/20 hover:shadow-lg hover:shadow-[#165DFF]/30 active:scale-98',
    secondary: 'bg-[#FF7A00] hover:bg-[#E06B00] text-white font-bold shadow-md shadow-[#FF7A00]/20 hover:shadow-lg hover:shadow-[#FF7A00]/30 active:scale-98',
    outline: 'bg-white/80 backdrop-blur-md hover:bg-white text-[#0F172A] border border-slate-200 hover:border-slate-300 font-bold shadow-xs active:scale-98',
    ghost: 'bg-transparent hover:bg-slate-100 text-[#0F172A] font-bold active:scale-98',
    gradient: 'bg-gradient-to-r from-[#165DFF] via-[#7C3AED] to-[#FF7A00] hover:opacity-95 text-white font-extrabold shadow-md active:scale-98'
  };

  return (
    <button
      className={`inline-flex items-center justify-center gap-2.5 transition-all duration-300 cursor-pointer ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
      {Icon && <Icon className="w-4 h-4 shrink-0" />}
    </button>
  );
};

// --- SECTION TITLE COMPONENT ---
interface SectionTitleProps {
  badge?: string;
  badgeColor?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  dark?: boolean;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  badge,
  badgeColor = 'bg-[#165DFF]/10 text-[#165DFF] border-[#165DFF]/20',
  title,
  subtitle,
  center = true,
  dark = false
}) => {
  return (
    <div className={`space-y-4 ${center ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'}`}>
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-extrabold tracking-wider uppercase border backdrop-blur-md ${badgeColor}`}
        >
          <span>{badge}</span>
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight ${
          dark ? 'text-white' : 'text-[#0F172A]'
        }`}
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className={`text-base sm:text-lg leading-relaxed ${
            dark ? 'text-slate-300' : 'text-slate-600'
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

// --- BADGE COMPONENT ---
export const Badge: React.FC<{ children: React.ReactNode; color?: string }> = ({
  children,
  color = 'bg-blue-50 text-[#165DFF] border-blue-100'
}) => (
  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${color}`}>
    {children}
  </span>
);

// --- CARD COMPONENT ---
export const Card: React.FC<{ children: React.ReactNode; className?: string; hover?: boolean }> = ({
  children,
  className = '',
  hover = true
}) => (
  <div
    className={`bg-white rounded-[28px] border border-slate-200/80 shadow-xs p-6 sm:p-8 transition-all duration-300 ${
      hover ? 'hover:shadow-xl hover:shadow-slate-900/5 hover:-translate-y-1 hover:border-slate-300' : ''
    } ${className}`}
  >
    {children}
  </div>
);

// --- ANIMATED COUNTER ITEM ---
export const CounterItem: React.FC<{ target: number; prefix?: string; suffix?: string; label: string; icon: LucideIcon }> = ({
  target,
  prefix = '',
  suffix = '',
  label,
  icon: Icon
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target]);

  return (
    <div className="bg-white/80 backdrop-blur-md p-6 sm:p-8 rounded-[28px] border border-slate-200/80 shadow-xs flex flex-col items-center text-center space-y-3 group hover:border-[#165DFF]/30 transition-all">
      <div className="w-14 h-14 rounded-2xl bg-[#165DFF]/10 text-[#165DFF] flex items-center justify-center group-hover:scale-110 transition-transform">
        <Icon className="w-7 h-7" />
      </div>
      <div className="text-3xl sm:text-4xl font-black text-[#0F172A] font-mono tracking-tight">
        {prefix}{count.toLocaleString()}{suffix}
      </div>
      <p className="text-xs sm:text-sm font-bold text-slate-500 tracking-wide uppercase">{label}</p>
    </div>
  );
};

// --- FAQ ITEM ACCORDION ---
export const FAQItemCard: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden transition-all">
      <button
        onClick={() => setOpen(!open)}
        className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-base text-[#0F172A] hover:text-[#165DFF] transition-colors"
      >
        <span>{question}</span>
        <div className={`w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0 transition-transform duration-300 ${open ? 'rotate-180 bg-[#165DFF] text-white' : 'text-slate-600'}`}>
          <ChevronDown className="w-4 h-4" />
        </div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
