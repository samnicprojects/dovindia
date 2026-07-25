import React from 'react';
import { motion } from 'motion/react';
import { HelpCircle, MessageCircle } from 'lucide-react';
import { SectionTitle, FAQItemCard } from '../ui/ReusableComponents';

export const FAQSection: React.FC = () => {
  const faqs = [
    {
      q: 'How does the Section 80G Tax Exemption work for my donation?',
      a: 'Under Section 80G of the Income Tax Act 1961, 50% to 100% of your donated amount is deductible from your taxable income. Upon completing your donation, our automated system generates an official 80G receipt with Registration No: AABTD9842F20218, which you can attach directly to your Income Tax Returns (ITR).'
    },
    {
      q: 'How quickly will I receive my Section 80G tax exemption receipt?',
      a: 'Instantly! As soon as your online donation is processed, your official 80G receipt with tax registration details is delivered to your registered email address within 60 seconds. A copy is also accessible via WhatsApp support.'
    },
    {
      q: 'Can I track the exact field location and impact of my donation?',
      a: 'Yes! We believe in 100% transparent audit trails. For afforestation donations, sapling locations are geo-tagged on digital maps. For solar smart school microgrids, donors receive quarterly field progress photos and impact reports.'
    },
    {
      q: 'What is DOV India Foundation’s official legal registration status?',
      a: 'DOV INDIA FOUNDATION is a registered Section-8 Non-Profit Organization under The Companies Act 2013 (Reg No: U85300MH2021NPL374053) with PAN No: AAICD9879P, base in Mumbai. We are also registered on NITI Aayog Darpan (ID: MH/2021/0284719) and MCA CSR-1.'
    },
    {
      q: 'How can I register as a volunteer or student intern?',
      a: 'You can register through our online Volunteer Registration portal on this website or contact our team on WhatsApp helpline (7098555333). We offer flexible remote and ground field volunteer opportunities with certificates of service.'
    },
    {
      q: 'What payment methods are supported for online donations?',
      a: 'We support all major payment channels including UPI (GPay, PhonePe, Paytm), Credit Cards, Debit Cards, Netbanking across all Indian banks, and direct NEFT/RTGS bank transfers for Corporate CSR contributions.'
    }
  ];

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#F8FAFC] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        <SectionTitle
          badge="FREQUENTLY ASKED QUESTIONS"
          badgeColor="bg-[#165DFF]/10 text-[#165DFF] border-[#165DFF]/20"
          title="Got Questions? We Have Answers"
          subtitle="Everything you need to know about 80G tax receipts, field impact, and donation security."
        />

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItemCard key={index} question={faq.q} answer={faq.a} />
          ))}
        </div>

        {/* WhatsApp Help CTA */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 text-center space-y-3 shadow-xs">
          <p className="text-sm font-bold text-[#0F172A]">Still have a specific question about CSR or donor compliance?</p>
          <a
            href="https://api.whatsapp.com/send/?phone=917098555333&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#22C55E] hover:underline"
          >
            <MessageCircle className="w-4 h-4" /> Chat Live with DOV Donor Helpdesk on WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
};
