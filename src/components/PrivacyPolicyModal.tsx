import React from 'react';
import { X, ShieldCheck, FileText, CheckCircle2 } from 'lucide-react';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAccept?: () => void;
}

export const PRIVACY_POLICY_CONTENT = {
  effectiveDate: '26 January 2023',
  title: 'Privacy Policy – EV DOV India',
  intro: `EV DOV India ("EV DOV", "Company", "we", "our", or "us") respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, store, disclose, and protect your information when you visit our website, enquire about our products or services, register your interest, book a vehicle or test ride, apply for a dealership or franchise, request after-sales support, or otherwise interact with us. By accessing or using this website, you acknowledge that you have read and understood this Privacy Policy and agree to the collection and use of your information as described herein, to the extent permitted by applicable Indian law.`,
  sections: [
    {
      id: 1,
      title: '1. Information We Collect',
      body: `Depending on how you interact with our website, we may collect information including but not limited to: Name; Email address; Mobile number; City and State; Business or Company details (where applicable); Dealership or Franchise application details; Product preferences; Test ride or vehicle booking information; Service or warranty-related information; Communication records with us; Technical information such as browser type, device information, operating system, IP address, website usage statistics, cookies, and similar technologies. You may choose not to provide certain information; however, doing so may limit your ability to use certain services available through our website.`
    },
    {
      id: 2,
      title: '2. How We Use Your Information',
      body: `We may use your information for responding to enquiries; processing bookings and requests; providing product information; processing dealership or franchise enquiries; providing customer support; warranty registration and after-sales service; improving our products and website; internal research and analytics; sending service updates, safety information, promotional offers, newsletters and marketing communications where permitted by applicable law; preventing fraud, misuse or unauthorized activities; and complying with legal and regulatory obligations.`
    },
    {
      id: 3,
      title: '3. Cookies and Similar Technologies',
      body: `Our website may use cookies and similar technologies to enhance user experience, understand website performance, remember user preferences, improve security and analyse visitor behaviour. Users may choose to disable cookies through browser settings; however, certain website features may not function properly.`
    },
    {
      id: 4,
      title: '4. Sharing of Information',
      body: `We do not sell or rent your personal information. We may share information where reasonably necessary with authorized dealers and distributors, franchise partners, service centres, payment service providers, logistics and delivery partners, technology service providers, marketing and communication service providers, government authorities where required by law, and professional advisors including auditors, consultants and legal advisors. Such parties are expected to use the information only for legitimate business purposes and in accordance with applicable legal requirements.`
    },
    {
      id: 5,
      title: '5. Data Security',
      body: `We implement reasonable administrative, technical and organisational measures to safeguard personal information against unauthorized access, disclosure, misuse, alteration or destruction. While we strive to protect your information, no method of electronic transmission or storage is completely secure and we cannot guarantee absolute security.`
    },
    {
      id: 6,
      title: '6. Data Retention',
      body: `Personal information is retained only for as long as reasonably necessary to fulfil the purposes described in this Privacy Policy, comply with legal obligations, resolve disputes, enforce agreements or protect our legitimate business interests. Information may thereafter be securely deleted, anonymized or archived as permitted by law.`
    },
    {
      id: 7,
      title: '7. Marketing Communications',
      body: `Where permitted by law, we may send promotional messages regarding our products, services, offers, events, launches or business opportunities. You may opt out at any time. Service-related communications may continue where necessary.`
    },
    {
      id: 8,
      title: '8. Third-Party Websites',
      body: `This website may contain links to third-party websites. We do not control such platforms and are not responsible for their privacy practices, security, content or policies.`
    },
    {
      id: 9,
      title: '9. Children\'s Privacy',
      body: `Our website is not intended for individuals below 18 years of age. We do not knowingly collect personal information from minors.`
    },
    {
      id: 10,
      title: '10. Accuracy of Information',
      body: `Users are responsible for ensuring that the information submitted is accurate, complete and up to date. The Company shall not be responsible for consequences arising from inaccurate or incomplete information.`
    },
    {
      id: 11,
      title: '11. Business Transfers',
      body: `In the event of a merger, acquisition, restructuring, sale of assets, investment or other corporate transaction, personal information may be transferred as part of such transaction, subject to applicable legal requirements.`
    },
    {
      id: 12,
      title: '12. Legal Compliance',
      body: `We may disclose personal information where disclosure is required or permitted by law, regulation, court order or government authority, or to protect our legal rights, property, employees, dealers, customers or the public.`
    },
    {
      id: 13,
      title: '13. User Rights',
      body: `Subject to applicable Indian law, users may request access to, correction of, updating of or deletion of their personal information where legally applicable. The Company reserves the right to verify identity before acting on such requests.`
    },
    {
      id: 14,
      title: '14. Intellectual Property',
      body: `Submission of personal information does not transfer any ownership or intellectual property rights relating to EV DOV India's trademarks, logos, product names, designs, software, content or proprietary materials.`
    },
    {
      id: 15,
      title: '15. Policy Updates',
      body: `We reserve the right to modify this Privacy Policy at any time. Revised versions become effective upon publication. Continued use constitutes acceptance.`
    },
    {
      id: 16,
      title: '16. Governing Law',
      body: `This Privacy Policy shall be governed by the laws of India. Any disputes shall be subject to the competent courts in India.`
    },
    {
      id: 17,
      title: '17. Consent',
      body: `By accessing, browsing, registering on or using this website, submitting enquiries, bookings, dealership or franchise applications, warranty requests or otherwise interacting with EV DOV India, you acknowledge that you have read, understood and agreed to this Privacy Policy and consent to the collection, processing, storage and use of your information in accordance with applicable laws of India.`
    }
  ]
};

export const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({
  isOpen,
  onClose,
  onAccept
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white border border-slate-200 rounded-3xl w-full max-w-3xl overflow-hidden shadow-2xl relative text-slate-800 flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="bg-[#0F172A] p-6 text-white flex items-center justify-between shrink-0 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#EA580C] text-white flex items-center justify-center font-bold">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-extrabold text-base text-white">{PRIVACY_POLICY_CONTENT.title}</h3>
              <p className="text-xs text-slate-300">Effective Date: {PRIVACY_POLICY_CONTENT.effectiveDate}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Policy Body Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-xs text-slate-700 leading-relaxed font-normal">
          <div className="p-4 bg-orange-50 border border-orange-200 rounded-2xl text-slate-800 font-medium leading-relaxed">
            {PRIVACY_POLICY_CONTENT.intro}
          </div>

          <div className="space-y-6">
            {PRIVACY_POLICY_CONTENT.sections.map((sec) => (
              <div key={sec.id} className="space-y-2 border-b border-slate-100 pb-4 last:border-none">
                <h4 className="font-extrabold text-sm text-[#0F172A]">{sec.title}</h4>
                <p className="text-slate-600">{sec.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex items-center justify-between shrink-0 gap-4">
          <span className="text-[11px] text-slate-500 font-medium">
            EV DOV India Privacy Compliance Document
          </span>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-5 py-2.5 bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold text-xs rounded-xl transition-colors cursor-pointer"
            >
              Close
            </button>
            {onAccept && (
              <button
                onClick={() => {
                  onAccept();
                  onClose();
                }}
                className="px-6 py-2.5 bg-[#EA580C] hover:bg-[#C2410C] text-white font-extrabold text-xs rounded-xl shadow-md transition-all cursor-pointer flex items-center gap-1.5"
              >
                <CheckCircle2 className="w-4 h-4" /> Accept & Agree
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
