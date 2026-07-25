import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  HeartHandshake, 
  Award, 
  Users, 
  ShieldCheck, 
  FileText, 
  MapPin,
  Mail,
  Phone,
  Facebook,
  Twitter,
  Linkedin,
  MessageCircle,
  Building,
  Calendar,
  CheckCircle2
} from 'lucide-react';

import { TimelineSection } from './sections/TimelineSection';

interface AboutUsSectionProps {
  activeSubSection?: string;
  onNavigate?: (mode: any, optionId?: string) => void;
  onOpenWhatsApp?: (intent?: string) => void;
}

export const AboutUsSection: React.FC<AboutUsSectionProps> = ({
  activeSubSection,
  onNavigate,
  onOpenWhatsApp
}) => {
  const [activeTab, setActiveTab] = useState<string>('who-are-we');

  useEffect(() => {
    if (activeSubSection) {
      setActiveTab(activeSubSection);
    }
  }, [activeSubSection]);

  const tabs = [
    { id: 'who-are-we', label: 'WHO ARE WE' },
    { id: 'founders', label: 'OUR FOUNDERS' },
    { id: 'management', label: 'OUR MANAGEMENT TEAM' },
    { id: 'journey', label: 'OUR JOURNEY' },
    { id: 'legal-docs', label: 'LEGAL DOCUMENTS' },
    { id: 'awards', label: 'AWARDS' }
  ];

  return (
    <div className="bg-white text-[#1F2937] min-h-screen py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

        {/* TAB 1: WHO ARE WE */}
        {activeTab === 'who-are-we' && (
          <div className="space-y-12 animate-in fade-in duration-300">
            {/* Header Title with Underline Bar */}
            <div className="text-center space-y-3">
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-wider text-[#1F2937] uppercase inline-block relative pb-2">
                WHO ARE WE
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-[#1F2937] rounded-full"></span>
              </h1>
              <p className="text-sm text-[#4B5563] max-w-2xl mx-auto font-medium">
                We are a team of change-makers who believe that every helping hand can raise a child and create a better future for them.
              </p>
            </div>

            {/* 3-Image Children Collage Banner */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 rounded-2xl overflow-hidden shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=600&q=80" 
                alt="Children in need" 
                className="w-full h-64 sm:h-80 object-cover"
                referrerPolicy="no-referrer"
              />
              <img 
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=80" 
                alt="Child smile" 
                className="w-full h-64 sm:h-80 object-cover"
                referrerPolicy="no-referrer"
              />
              <img 
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=600&q=80" 
                alt="Children playing" 
                className="w-full h-64 sm:h-80 object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Main Narrative Paragraph */}
            <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed text-justify">
              <strong className="text-[#1F2937]">We started extending help to needy children and youth who were eager to study and work for a better life.</strong> This moment intensified when we found that there were many such underprivileged children who needed help with food, shelter and education. Our team expanded and we spread out in different regions to make sure we cover all possible areas and help as many children as possible. We now run shelter homes, schools and a reasonable mess that helps such needy young people.
            </p>

            {/* Organization Details Grid & Need Help Section */}
            <div className="grid md:grid-cols-12 gap-8 items-start pt-4">
              <div className="md:col-span-8 space-y-4 text-xs sm:text-sm text-[#374151] leading-relaxed">
                <div className="space-y-1 font-sans border-l-2 border-[#1E3A8A] pl-4 bg-gray-50/80 p-4 rounded-r-xl">
                  <p><strong className="text-[#1F2937]">Name of the organisation:</strong> DOV INDIA FOUNDATION</p>
                  <p><strong className="text-[#1F2937]">Year of establishment:</strong> 28/12/2021</p>
                  <p><strong className="text-[#1F2937]">Organisation registration No:</strong> U85300MH2021NPL374053</p>
                  <p><strong className="text-[#1F2937]">Organisation Type:</strong> SEC-8</p>
                  <p><strong className="text-[#1F2937]">Organisation Pan No:</strong> AAICD9879P</p>
                  <p><strong className="text-[#1F2937]">Organisation contact address:</strong> B227, 2ND Floor Eastern Business District ,Lal Bahadur Shastri Rd ,near Metro ,Bhandup West ,Mumbai, Maharashtra 400078</p>
                </div>

                <div className="pt-2 space-y-3">
                  <p className="font-bold text-[#1F2937]">
                    DOV INDIA FOUNDATION is a village development centric national Non-profit organization (NGO) is registered under Sec-8 of THE COMPANIES ACT 2013 having its base in Mumbai.
                  </p>
                  <p>
                    It is committed to the village development .The primary objective is to bring our villages into mainstream of development in the areas of Better health ,Employment ,Quality education, Sports Women Empowerment, Environment. we aim to become the most credible organisation in the village development sector in India.
                  </p>
                </div>
              </div>

              {/* Need Help Box */}
              <div className="md:col-span-4 bg-gray-50 p-6 rounded-2xl border border-gray-200 text-center space-y-4">
                <h3 className="text-base font-bold text-[#1F2937]">Need Help?</h3>
                <p className="text-xs text-[#6B7280]">If you have any question please contact us</p>
                <div className="flex items-center justify-center gap-3">
                  <a href="https://www.facebook.com/Develop-Our-Villages-102760469224992/?ref=pages_you_manage" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:opacity-90 transition-opacity" title="Facebook">
                    <Facebook className="w-4 h-4 fill-current" />
                  </a>
                  <a href="https://x.com/dov_india" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-slate-800 text-white flex items-center justify-center hover:opacity-90 transition-opacity" title="Twitter / X">
                    <Twitter className="w-4 h-4 fill-current" />
                  </a>
                  <a href="https://www.linkedin.com/in/dov-india-foundation-434a12229/" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-[#0A66C2] text-white flex items-center justify-center hover:opacity-90 transition-opacity" title="LinkedIn">
                    <Linkedin className="w-4 h-4 fill-current" />
                  </a>
                  <a href="https://api.whatsapp.com/send/?phone=917098555333&text&type=phone_number&app_absent=0" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:opacity-90 transition-opacity" title="WhatsApp">
                    <MessageCircle className="w-4 h-4 fill-current" />
                  </a>
                </div>
              </div>
            </div>

            {/* VISION & MISSION Sections */}
            <div className="space-y-8 pt-6 border-t border-gray-200">
              {/* VISION */}
              <div className="space-y-3">
                <h2 className="text-xl font-extrabold tracking-wider text-[#1F2937] uppercase inline-block relative pb-1">
                  VISION
                  <span className="absolute bottom-0 left-0 w-12 h-1 bg-[#1F2937] rounded-full"></span>
                </h2>
                <p className="text-xs sm:text-sm text-[#4B5563]">
                  To make villages self-dependent for their needs.
                </p>
              </div>

              {/* MISSION */}
              <div className="space-y-3">
                <h2 className="text-xl font-extrabold tracking-wider text-[#1F2937] uppercase inline-block relative pb-1">
                  MISSION
                  <span className="absolute bottom-0 left-0 w-12 h-1 bg-[#1F2937] rounded-full"></span>
                </h2>
                <p className="text-xs sm:text-sm text-[#4B5563]">
                  Reach the rural villages of our country, understand , make policies, Implement and make villages self sustainable
                </p>
              </div>
            </div>

          </div>
        )}

        {/* TAB 2: OUR FOUNDERS */}
        {activeTab === 'founders' && (
          <div className="space-y-12 animate-in fade-in duration-300">
            {/* Header Title with Underline Bar */}
            <div className="text-center space-y-3">
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-wider text-[#1F2937] uppercase inline-block relative pb-2">
                OUR FOUNDERS
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-[#1F2937] rounded-full"></span>
              </h1>
            </div>

            <div className="space-y-16 max-w-4xl mx-auto">
              {/* Founder 1: Rakesh Shukla */}
              <div className="text-center space-y-6">
                <div className="space-y-2">
                  <h2 className="text-xl sm:text-2xl font-bold text-[#1F2937] inline-block relative pb-1">
                    Rakesh Shukla
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-[#1F2937]"></span>
                  </h2>
                </div>

                <div className="flex justify-center">
                  <img 
                    src="/Rakesh.jpg" 
                    alt="Rakesh Shukla" 
                    className="w-52 h-64 object-cover object-top rounded-xl shadow-md border border-gray-200"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="space-y-3 text-xs sm:text-sm text-[#4B5563] leading-relaxed max-w-3xl mx-auto text-center">
                  <p>
                    <strong className="text-[#1F2937]">Rakesh shukla</strong> the founder of <strong>DOV INDIA FOUNDATION</strong> a management graduate and an MBA. He has over 6 years of work experience in various firms and corporate sector. "Whatever you give; comes back to you in thousand folds" is his philosophy of life and he is popularly known as a Go-Getter. An ardent traveler and passion for development of the tribal made him undertake journeys to the remote tribal pocket in India. After a successful career, he had decided to spend the rest of his life for the betterment of the society and the country. He founded <strong>DOV INDIA FOUNDATION</strong>.
                  </p>
                  <p className="font-bold text-[#1F2937]">
                    He is a leader, team player, committed and passionate about the cause of the development of villages.
                  </p>
                </div>
              </div>

              {/* Founder 2: Maitreyee Shukla */}
              <div className="text-center space-y-6 pt-8 border-t border-gray-200">
                <div className="space-y-2">
                  <h2 className="text-xl sm:text-2xl font-bold text-[#1F2937] inline-block relative pb-1">
                    Maitreyee Shukla
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-[#1F2937]"></span>
                  </h2>
                </div>

                <div className="flex justify-center">
                  <img 
                    src="/maitreyee.jpg" 
                    alt="Maitreyee Shukla" 
                    className="w-52 h-64 object-cover object-top rounded-xl shadow-md border border-gray-200"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="space-y-3 text-xs sm:text-sm text-[#4B5563] leading-relaxed max-w-3xl mx-auto text-center">
                  <p>
                    <strong className="text-[#1F2937]">Ms Maitreyee Shukla</strong> is a desirous personality who always share his 27 years of experience to give his best. She is from Rae Bareli Uttar Pradesh and currently serving as director to <strong>DOV INDIA FOUNDATION</strong> past two years. She has years of experience in the social sector She has newly been associated with <strong>DOV INDIA FOUNDATION</strong> but never fails to shows her skilled in nurturing, promoting, working on ground level
                  </p>
                </div>
              </div>
            </div>

            {/* Need Help Box */}
            <div className="max-w-md mx-auto bg-gray-50 p-6 rounded-2xl border border-gray-200 text-center space-y-4">
              <h3 className="text-base font-bold text-[#1F2937]">Need Help?</h3>
              <p className="text-xs text-[#6B7280]">If you have any question please contact us</p>
              <div className="flex items-center justify-center gap-3">
                <a href="https://www.facebook.com/Develop-Our-Villages-102760469224992/?ref=pages_you_manage" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:opacity-90 transition-opacity" title="Facebook">
                  <Facebook className="w-4 h-4 fill-current" />
                </a>
                <a href="https://x.com/dov_india" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-slate-800 text-white flex items-center justify-center hover:opacity-90 transition-opacity" title="Twitter / X">
                  <Twitter className="w-4 h-4 fill-current" />
                </a>
                <a href="https://www.linkedin.com/in/dov-india-foundation-434a12229/" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-[#0A66C2] text-white flex items-center justify-center hover:opacity-90 transition-opacity" title="LinkedIn">
                  <Linkedin className="w-4 h-4 fill-current" />
                </a>
                <a href="https://api.whatsapp.com/send/?phone=917098555333&text&type=phone_number&app_absent=0" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:opacity-90 transition-opacity" title="WhatsApp">
                  <MessageCircle className="w-4 h-4 fill-current" />
                </a>
              </div>
            </div>

          </div>
        )}

        {/* TAB 3: OUR MANAGEMENT TEAM */}
        {activeTab === 'management' && (
          <div className="space-y-12 animate-in fade-in duration-300">
            {/* Header Title with Underline Bar */}
            <div className="text-center space-y-3">
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-wider text-[#1F2937] uppercase inline-block relative pb-2">
                OUR MANAGEMENT TEAM
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-[#1F2937] rounded-full"></span>
              </h1>
            </div>

            {/* 10 Team Members Grid (Matches Screenshot 3) */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: 'MS Vaishali vakade',
                  role: 'Ms Vaishali vakade is working as Programme co-ordinator',
                  image: '/vaishali.jpg'
                },
                {
                  name: 'Vidhi Raval',
                  role: 'Ms Vidhi Raval is working as HR and Admin',
                  image: '/vidhi.jpg'
                },
                {
                  name: 'MS Prerana Panchal',
                  role: 'Ms prerana Panchal is working as marketing executive',
                  image: '/prerana.jpg'
                },
                {
                  name: 'MS Shraddha salvi',
                  role: 'Ms Shraddha salvi is working as Marketing Manager',
                  image: '/shraddha.jpg'
                },
                {
                  name: 'MS Akansha parker',
                  role: 'Ms Akansha Parker is working as Marketing Manager',
                  image: '/akansha.jpg'
                },
                {
                  name: 'MS Supriya Dange',
                  role: 'Ms Supriya Dange is working as Programme co-ordinator',
                  image: '/supriya.jpg'
                },
                {
                  name: 'MS Rajashree Sawant',
                  role: 'Ms Rajashree Sawant is working as Programme co-ordinator',
                  image: '/yogita.jpg'
                },
                {
                  name: 'MS Yogita Jadhav',
                  role: 'Ms Yogita Jadhav is working as Programme co-ordinator',
                  image: '/yogita.jpg'
                },
                {
                  name: 'MS varsha Vetal',
                  role: 'Ms Varsha Vetal is working as Programme co-ordinator',
                  image: '/varsha.jpg'
                },
                {
                  name: 'MS Ruchira Parab',
                  role: 'Ms Ruchira parab is working as digital marketing executive for Dov India foundation. She is very creative and self determined employee. Her responsibilities include Program co-ordination with different companies and content writing.',
                  image: '/ruchita.jpg'
                }
              ].map((member, idx) => (
                <div key={idx} className="bg-gray-100/70 p-6 rounded-2xl text-center space-y-4 border border-gray-200/60 shadow-2xs">
                  <div className="flex justify-center">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-28 h-28 rounded-2xl object-cover object-top shadow-sm border border-gray-300"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-extrabold text-[#1F2937] italic">{member.name}</h3>
                    <p className="text-xs text-[#6B7280] leading-relaxed pt-1">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: LEGAL DOCUMENTS */}
        {activeTab === 'legal-docs' && (
          <div className="space-y-8 animate-in fade-in duration-300 max-w-4xl mx-auto">
            <div className="text-center space-y-3">
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-wider text-[#1F2937] uppercase inline-block relative pb-2">
                LEGAL DOCUMENTS
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-[#1F2937] rounded-full"></span>
              </h1>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Section 80G Tax Exemption Certificate',
                  regNo: 'PAN: AAICD9879P',
                  authority: 'Income Tax Department, Govt of India',
                  benefit: '100% Tax Deductible under Section 80G',
                  status: 'Verified & Active'
                },
                {
                  title: 'Sec-8 Companies Act Registration',
                  regNo: 'Reg No: U85300MH2021NPL374053',
                  authority: 'Ministry of Corporate Affairs, Govt of India',
                  benefit: 'Incorporated on 28/12/2021 as Non-Profit',
                  status: 'Verified & Active'
                }
              ].map((doc, idx) => (
                <div key={idx} className="bg-gray-50 p-6 rounded-2xl border border-gray-200 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="p-2 bg-blue-50 text-[#0D6EFD] rounded-xl border border-blue-100">
                      <FileText className="w-5 h-5" />
                    </span>
                    <span className="bg-emerald-50 text-[#22C55E] px-2.5 py-0.5 rounded-full text-[10px] font-bold border border-emerald-200">
                      {doc.status}
                    </span>
                  </div>
                  <h3 className="text-base font-extrabold text-[#1F2937]">{doc.title}</h3>
                  <p className="text-xs font-mono text-gray-500 font-bold">{doc.regNo}</p>
                  <p className="text-xs text-gray-600">{doc.authority}</p>
                  <p className="text-xs text-[#22C55E] font-bold">{doc.benefit}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 5: AWARDS */}
        {activeTab === 'awards' && (
          <div className="space-y-8 animate-in fade-in duration-300">
            <div className="text-center space-y-3">
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-wider text-[#1F2937] uppercase inline-block relative pb-2">
                AWARDS
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-[#1F2937] rounded-full"></span>
              </h1>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              {[
                {
                  title: 'National Village Development Honor 2026',
                  presenter: 'Village Development Sector India',
                  desc: 'Recognized for village development initiatives in education, health, employment, and sports.',
                  badge: 'Village Development'
                },
                {
                  title: 'Sec-8 Non-Profit Leadership Award',
                  presenter: 'NGO Leadership Summit',
                  desc: 'Honored for transparent social welfare programs and youth empowerment.',
                  badge: 'NGO Excellence'
                },
                {
                  title: 'Clean Environment & Forestry Citation',
                  presenter: 'Environmental Action Forum',
                  desc: 'Awarded for grassroots village afforestation and ecological preservation.',
                  badge: 'Environment'
                }
              ].map((award, idx) => (
                <div key={idx} className="bg-gray-50 p-8 rounded-2xl border border-gray-200 text-center space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-500 flex items-center justify-center font-bold border border-amber-100 mx-auto">
                    <Award className="w-7 h-7" />
                  </div>
                  <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-[#0D6EFD] text-[10px] font-extrabold uppercase">
                    {award.badge}
                  </span>
                  <h3 className="text-base font-extrabold text-[#1F2937]">{award.title}</h3>
                  <p className="text-xs text-[#0D6EFD] font-bold">{award.presenter}</p>
                  <p className="text-xs text-[#6B7280] leading-relaxed">{award.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB: OUR JOURNEY */}
        {activeTab === 'journey' && (
          <div className="animate-in fade-in duration-300">
            <TimelineSection />
          </div>
        )}

      </div>
    </div>
  );
};
