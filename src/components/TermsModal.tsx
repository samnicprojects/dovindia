import React from 'react';
import { X, FileText, CheckCircle2, ShieldCheck } from 'lucide-react';

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAccept?: () => void;
}

export const TERMS_CONTENT = {
  effectiveDate: '26 January 2023',
  title: 'Terms & Conditions – EV DOV India',
  intro: `Welcome to the official website of EV DOV India ("Company", "we", "our", or "us"). These Terms & Conditions ("Terms") govern your access to and use of this website and any information, content, products, services, forms, applications, or features made available through it. By accessing or using this website, you agree to be bound by these Terms. If you do not agree with any part of these Terms, please discontinue use of this website.`,
  sections: [
    {
      id: 1,
      title: '1. Acceptance of Terms',
      body: `Your continued use of this website constitutes your acceptance of these Terms, our Privacy Policy, and any additional policies or guidelines published on this website from time to time.`
    },
    {
      id: 2,
      title: '2. Eligibility',
      body: `By using this website, you represent that you are legally competent to enter into a binding agreement under the applicable laws of India. If you access this website on behalf of a business entity, you represent that you are authorized to act on behalf of that entity.`
    },
    {
      id: 3,
      title: '3. Website Purpose',
      body: `This website is intended to provide information regarding EV DOV India, its electric vehicles, products, accessories, dealership opportunities, franchise opportunities, services, promotional campaigns, and related business activities. Nothing contained on this website shall be construed as creating any contractual obligation unless expressly agreed by the Company in writing.`
    },
    {
      id: 4,
      title: '4. Product Information',
      body: `The Company makes reasonable efforts to ensure that product descriptions, specifications, features, images, colours, pricing, availability, and other information displayed on this website are accurate. However:
• Specifications may change without prior notice.
• Product images are for illustrative purposes only.
• Actual products may vary.
• Features may differ depending on the model, location, or applicable regulations.
• Availability may vary by region.
The Company reserves the right to modify, discontinue, or update any product, service, feature, or specification at any time without prior notice.`
    },
    {
      id: 5,
      title: '5. Pricing',
      body: `Any prices displayed on this website are indicative unless specifically stated otherwise. Prices may vary depending upon:
• Taxes
• Government regulations
• State subsidies
• Registration charges
• Insurance
• Transportation
• Dealer charges
• Optional accessories
Final pricing shall be determined at the time of purchase.`
    },
    {
      id: 6,
      title: '6. Bookings and Enquiries',
      body: `Submitting an enquiry, booking request, dealership application, franchise application, or any online form through this website does not constitute acceptance by the Company. The Company reserves the right to accept, reject, cancel, or discontinue any enquiry, booking, request, or application at its sole discretion.`
    },
    {
      id: 7,
      title: '7. Dealer and Franchise Applications',
      body: `Submission of a dealership or franchise application does not guarantee appointment. The Company reserves the right to evaluate applicants based on its internal business policies and reserves the absolute right to approve or reject any application without assigning any reason.`
    },
    {
      id: 8,
      title: '8. User Responsibilities',
      body: `You agree to use this website responsibly and lawfully. You shall not:
• Submit false or misleading information.
• Attempt unauthorized access.
• Upload malicious software or viruses.
• Interfere with website operations.
• Copy or misuse website content.
• Engage in fraudulent activities.
• Violate applicable laws.`
    },
    {
      id: 9,
      title: '9. Intellectual Property',
      body: `All content available on this website including logos, trademarks, brand names, product names, images, videos, graphics, documents, software, website design, text, layout and technical content is the exclusive property of EV DOV India or its licensors. No material may be copied, reproduced, modified, distributed, published or commercially exploited without prior written permission.`
    },
    {
      id: 10,
      title: '10. Third-Party Links',
      body: `The Company is not responsible for third-party websites or their content.`
    },
    {
      id: 11,
      title: '11. Website Availability',
      body: `The Company does not guarantee uninterrupted or error-free access.`
    },
    {
      id: 12,
      title: '12. Disclaimer',
      body: `Information is provided on an "as is" and "as available" basis. Users should independently verify information before making business or purchasing decisions.`
    },
    {
      id: 13,
      title: '13. Limitation of Liability',
      body: `To the fullest extent permitted under applicable law, EV DOV India shall not be liable for indirect, incidental, special, consequential, exemplary or punitive damages arising from website use.`
    },
    {
      id: 14,
      title: '14. Indemnity',
      body: `Users agree to indemnify EV DOV India against claims arising from misuse of the website or violation of these Terms.`
    },
    {
      id: 15,
      title: '15. Privacy',
      body: `Use of this website is also governed by the Privacy Policy.`
    },
    {
      id: 16,
      title: '16. Force Majeure',
      body: `The Company shall not be liable for delays or failures caused by events beyond its reasonable control.`
    },
    {
      id: 17,
      title: '17. Modification of Website',
      body: `The Company may modify or discontinue any part of the website without prior notice.`
    },
    {
      id: 18,
      title: '18. Termination',
      body: `The Company may suspend or terminate website access if these Terms are violated.`
    },
    {
      id: 19,
      title: '19. Governing Law',
      body: `These Terms are governed by the laws of India.`
    },
    {
      id: 20,
      title: '20. Severability',
      body: `Invalid provisions shall not affect the remaining provisions.`
    },
    {
      id: 21,
      title: '21. Waiver',
      body: `Failure to enforce any provision shall not constitute a waiver.`
    },
    {
      id: 22,
      title: '22. Entire Agreement',
      body: `These Terms together with the Privacy Policy constitute the entire agreement regarding website use.`
    },
    {
      id: 23,
      title: '23. Changes to Terms',
      body: `The Company may revise these Terms at any time. Continued use constitutes acceptance.`
    },
    {
      id: 24,
      title: '24. Acceptance',
      body: `By using this website, you acknowledge that you have read, understood and agreed to these Terms & Conditions.`
    }
  ]
};

export const TermsModal: React.FC<TermsModalProps> = ({
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
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-extrabold text-base text-white">{TERMS_CONTENT.title}</h3>
              <p className="text-xs text-slate-300">Effective Date: {TERMS_CONTENT.effectiveDate}</p>
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
            {TERMS_CONTENT.intro}
          </div>

          <div className="space-y-6">
            {TERMS_CONTENT.sections.map((sec) => (
              <div key={sec.id} className="space-y-2 border-b border-slate-100 pb-4 last:border-none">
                <h4 className="font-extrabold text-sm text-[#0F172A]">{sec.title}</h4>
                <p className="text-slate-600 whitespace-pre-line">{sec.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex items-center justify-between shrink-0 gap-4">
          <span className="text-[11px] text-slate-500 font-medium">
            EV DOV India Terms & Conditions Document
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
