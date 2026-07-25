import React, { useState } from 'react';
import { 
  ShieldAlert, 
  HeartHandshake, 
  Ambulance, 
  Phone, 
  CheckCircle2, 
  FileText, 
  Share2, 
  X, 
  ShieldCheck, 
  Filter, 
  ExternalLink,
  Search,
  Heart,
  Hospital
} from 'lucide-react';

interface EmergencyCasesSectionProps {
  onOpenDonation: (initiativeId?: string) => void;
  onOpenWhatsApp: (intent?: string) => void;
}

export interface EmergencyCase {
  id: string;
  patientName: string;
  ageGender: string;
  condition: string;
  hospital: string;
  doctor: string;
  amountRequired: number;
  amountRaised: number;
  image: string;
  category: 'cardiac' | 'cancer' | 'nicu' | 'trauma';
  description: string;
  medicalReportNo: string;
  taxBenefit: boolean;
  isUrgent: boolean;
}

const EMERGENCY_CASES: EmergencyCase[] = [
  {
    id: 'case-maheshwari',
    patientName: 'Bo-Maheshwari',
    ageGender: 'Age 2, Female',
    condition: 'Congenital Heart Defect (Open Heart Surgery)',
    hospital: 'KEM Hospital & Research Centre, Pune',
    doctor: 'Dr. S. K. Deshmukh (Pediatric Cardiologist)',
    amountRequired: 544000,
    amountRaised: 392000,
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80',
    category: 'cardiac',
    description: 'Baby Bo-Maheshwari requires urgent pediatric open-heart surgery for ventricular septal defect repair within 14 days.',
    medicalReportNo: 'MH-KEM-2026-8841',
    taxBenefit: true,
    isUrgent: true
  },
  {
    id: 'case-aarav',
    patientName: 'Master Aarav',
    ageGender: 'Age 4, Male',
    condition: 'Acute Lymphoblastic Leukemia Chemotherapy',
    hospital: 'Tata Memorial Centre, Mumbai',
    doctor: 'Dr. R. V. Ramanathan (Oncology)',
    amountRequired: 680000,
    amountRaised: 495000,
    image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=800&q=80',
    category: 'cancer',
    description: 'Master Aarav is undergoing intensive targeted chemotherapy protocol. Family needs support for ICU & medicine costs.',
    medicalReportNo: 'TMC-MUM-2026-3109',
    taxBenefit: true,
    isUrgent: true
  },
  {
    id: 'case-ananya',
    patientName: 'Baby Ananya',
    ageGender: 'Age 1, Female',
    condition: 'Preterm NICU Ventilator Support & Surgery',
    hospital: 'Surya Mother & Child Hospital, Pune',
    doctor: 'Dr. Anita Joshi (Neonatologist)',
    amountRequired: 420000,
    amountRaised: 310000,
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
    category: 'nicu',
    description: 'Born prematurely at 28 weeks, Baby Ananya needs high-frequency ventilation and specialized neonatal ICU monitoring.',
    medicalReportNo: 'SMC-PUN-2026-1192',
    taxBenefit: true,
    isUrgent: true
  },
  {
    id: 'case-reyansh',
    patientName: 'Master Reyansh',
    ageGender: 'Age 5, Male',
    condition: 'Major Trauma Brain Surgery & Rehabilitation',
    hospital: 'Sassoon General Hospital, Pune',
    doctor: 'Dr. Vivek Kulkarni (Neurosurgeon)',
    amountRequired: 750000,
    amountRaised: 580000,
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    category: 'trauma',
    description: 'Suffered severe head trauma in a road accident. Emergency craniotomy performed, requires 30 days critical ICU recovery.',
    medicalReportNo: 'SGH-PUN-2026-7023',
    taxBenefit: true,
    isUrgent: true
  },
  {
    id: 'case-kavya',
    patientName: 'Baby Kavya',
    ageGender: '6 Months, Female',
    condition: 'Tracheoesophageal Fistula Surgery',
    hospital: 'BJ Government Medical College, Pune',
    doctor: 'Dr. Milind Sawant (Pediatric Surgery)',
    amountRequired: 390000,
    amountRaised: 285000,
    image: 'https://images.unsplash.com/photo-1538300342682-cf57afb97285?auto=format&fit=crop&w=800&q=80',
    category: 'nicu',
    description: 'Urgent congenital defect correction to allow oral feeding and prevent recurrent aspiration pneumonia.',
    medicalReportNo: 'BJG-PUN-2026-4412',
    taxBenefit: true,
    isUrgent: false
  },
  {
    id: 'case-shivansh',
    patientName: 'Master Shivansh',
    ageGender: 'Age 3, Male',
    condition: 'Pediatric Liver Transplant & Post-ICU Care',
    hospital: 'Sahyadri Super Speciality Hospital, Pune',
    doctor: 'Dr. B. N. Patil (Transplant Surgeon)',
    amountRequired: 890000,
    amountRaised: 640000,
    image: 'https://images.unsplash.com/photo-1547683905-f686c993aae5?auto=format&fit=crop&w=800&q=80',
    category: 'cardiac',
    description: 'Biliary atresia leading to end-stage liver failure. Living donor liver transplant scheduled with emergency funding.',
    medicalReportNo: 'SSH-PUN-2026-9051',
    taxBenefit: true,
    isUrgent: true
  }
];

export const EmergencyCasesSection: React.FC<EmergencyCasesSectionProps> = ({
  onOpenDonation,
  onOpenWhatsApp
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCaseModal, setSelectedCaseModal] = useState<EmergencyCase | null>(null);

  const filteredCases = EMERGENCY_CASES.filter((c) => {
    const matchesCategory = selectedCategory === 'all' || c.category === selectedCategory;
    const matchesSearch = c.patientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          c.hospital.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          c.condition.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-[#F8FAFC] min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Main Header matching screenshot style */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-100 border border-red-200 text-red-700 text-xs font-bold uppercase tracking-wider">
            <ShieldAlert className="w-4 h-4 text-red-600 animate-pulse" />
            <span>DOV NGO Emergency Life-Saving Support Wing</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-800 tracking-tight uppercase">
            MEDICAL <span className="relative inline-block pb-2 border-b-4 border-slate-900">EMERGENCY</span> CASES
          </h1>

          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
            100% Tax Deductible (80G) direct financial assistance for critical child surgeries, pediatric ICU care, and emergency hospital procedures across Maharashtra & India.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                selectedCategory === 'all'
                  ? 'bg-[#0f114d] text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              All Cases ({EMERGENCY_CASES.length})
            </button>
            <button
              onClick={() => setSelectedCategory('cardiac')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                selectedCategory === 'cardiac'
                  ? 'bg-[#0f114d] text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Heart Surgeries
            </button>
            <button
              onClick={() => setSelectedCategory('cancer')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                selectedCategory === 'cancer'
                  ? 'bg-[#0f114d] text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Cancer Aid
            </button>
            <button
              onClick={() => setSelectedCategory('nicu')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                selectedCategory === 'nicu'
                  ? 'bg-[#0f114d] text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              NICU Care
            </button>
            <button
              onClick={() => setSelectedCategory('trauma')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                selectedCategory === 'trauma'
                  ? 'bg-[#0f114d] text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Critical Trauma
            </button>
          </div>

          {/* Search Bar */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search patient, hospital..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-1.5 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-[#0f114d]"
            />
          </div>
        </div>

        {/* Emergency Cases Grid - Matching User Screenshot Card Design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCases.map((c) => {
            const percent = Math.min(100, Math.round((c.amountRaised / c.amountRequired) * 100));
            const remaining = Math.max(0, c.amountRequired - c.amountRaised);

            return (
              <div 
                key={c.id} 
                className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Top Split Section */}
                <div className="grid grid-cols-12 min-h-[220px]">
                  
                  {/* Left Side - Dark Navy Blue Section matching exact screenshot */}
                  <div className="col-span-6 bg-[#0e0c4d] text-white p-5 flex flex-col justify-between relative border-r border-[#1a1768]">
                    
                    {/* HELP Title in Red with Underline */}
                    <div>
                      <div className="inline-block border-b-2 border-red-500 pb-0.5">
                        <h2 className="text-[#EF4444] font-black text-2xl tracking-wider leading-none">
                          HELP
                        </h2>
                      </div>

                      {/* Patient Name */}
                      <div className="mt-4 space-y-1">
                        <div className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">Patient Name</div>
                        <div className="text-white font-black text-base sm:text-lg leading-snug drop-shadow-xs">
                          {c.patientName}
                        </div>
                      </div>
                    </div>

                    {/* Amount Required */}
                    <div className="mt-4 pt-3 border-t border-white/10">
                      <div className="text-[10px] text-slate-300 font-medium uppercase">Target Goal</div>
                      <div className="text-white font-extrabold text-lg sm:text-xl">
                        ₹ {c.amountRequired.toLocaleString('en-IN')}
                      </div>
                    </div>

                  </div>

                  {/* Right Side - Patient Image Container */}
                  <div className="col-span-6 relative overflow-hidden bg-slate-900">
                    <img 
                      src={c.image} 
                      alt={c.patientName} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      referrerPolicy="no-referrer"
                    />

                    {/* Yellow Tax Benefit Tag Overlay */}
                    <div className="absolute top-2 left-2 bg-[#FACC15] text-[#0f114d] text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded shadow-sm border border-yellow-300 flex items-center gap-1">
                      <span>TAX BENEFIT</span>
                    </div>

                    {/* Verified Stamp Badge Overlay */}
                    <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-md text-blue-900 border border-blue-200 text-[9px] font-black rounded-full px-2 py-0.5 shadow-sm flex items-center gap-0.5">
                      <ShieldCheck className="w-3 h-3 text-blue-600" />
                      <span>80G</span>
                    </div>

                    {/* Quick Hospital Label */}
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-2 text-white text-[10px] truncate font-medium">
                      {c.hospital}
                    </div>
                  </div>

                </div>

                {/* Bottom Section - Case Details & Progress Bar */}
                <div className="p-4 space-y-3 bg-white">
                  
                  {/* Medical Diagnosis Summary */}
                  <div className="text-xs text-slate-700 font-medium line-clamp-2 leading-relaxed">
                    <span className="font-bold text-[#0e0c4d]">{c.condition}</span> • {c.ageGender}
                  </div>

                  {/* Raised vs Target Progress Bar */}
                  <div className="space-y-1.5 pt-1">
                    <div className="flex justify-between items-center text-[11px] font-mono">
                      <span className="text-slate-500">
                        Raised: <strong className="text-emerald-600 font-bold">₹{c.amountRaised.toLocaleString('en-IN')}</strong>
                      </span>
                      <span className="text-slate-500">
                        Needed: <strong className="text-amber-600 font-bold">₹{remaining.toLocaleString('en-IN')}</strong>
                      </span>
                    </div>

                    <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden border border-slate-200">
                      <div 
                        className="bg-gradient-to-r from-amber-500 to-emerald-500 h-full rounded-full transition-all duration-500" 
                        style={{ width: `${percent}%` }}
                      ></div>
                    </div>

                    <div className="flex justify-between items-center text-[10px] font-bold">
                      <span className="text-emerald-700">{percent}% Funded</span>
                      <span className="text-slate-400">Report #{c.medicalReportNo}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100">
                    <button
                      onClick={() => onOpenDonation(c.id)}
                      className="bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs py-2.5 px-3 rounded-lg flex items-center justify-center gap-1.5 shadow-sm transition-colors cursor-pointer"
                    >
                      <HeartHandshake className="w-4 h-4" /> DONATE NOW
                    </button>
                    
                    <button
                      onClick={() => setSelectedCaseModal(c)}
                      className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs py-2.5 px-3 rounded-lg flex items-center justify-center gap-1 transition-colors cursor-pointer"
                    >
                      <FileText className="w-3.5 h-3.5 text-slate-600" /> Case Details
                    </button>
                  </div>

                  {/* WhatsApp Verification Link */}
                  <button
                    onClick={() => onOpenWhatsApp(`Emergency Verification Request for ${c.patientName} (Ref: ${c.medicalReportNo})`)}
                    className="w-full text-center text-[11px] font-semibold text-emerald-700 hover:text-emerald-800 hover:underline flex items-center justify-center gap-1 py-0.5 cursor-pointer"
                  >
                    <Phone className="w-3 h-3 text-emerald-600" /> Verify Documents via WhatsApp
                  </button>

                </div>
              </div>
            );
          })}
        </div>

        {/* Emergency Assistance Helpline Banner */}
        <div className="bg-[#0e0c4d] rounded-2xl p-6 sm:p-8 text-white space-y-4 shadow-xl border border-[#1a1768] relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-1.5 text-amber-400 text-xs font-black uppercase tracking-wider">
                <Ambulance className="w-4 h-4" /> DOV Emergency Healthcare Support Helpline
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                Do you know a child requiring urgent medical emergency financial aid?
              </h3>
              <p className="text-xs text-slate-300 max-w-2xl">
                Submit medical reports and hospital cost estimates to DOV CSR Foundation for rapid review & transparent community funding approval.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => onOpenWhatsApp('New Medical Emergency Case Application')}
                className="bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-xs py-3 px-6 rounded-xl flex items-center gap-2 shadow-lg transition-all cursor-pointer"
              >
                <Phone className="w-4 h-4" /> Apply via WhatsApp
              </button>

              <button
                onClick={() => onOpenDonation('general-emergency')}
                className="bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs py-3 px-6 rounded-xl flex items-center gap-2 shadow-lg transition-all cursor-pointer"
              >
                <Heart className="w-4 h-4" /> Emergency Pool Fund
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Case Details Modal */}
      {selectedCaseModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 shadow-2xl space-y-6 p-6 relative animate-in fade-in zoom-in-95 duration-200">
            
            {/* Modal Close Button */}
            <button
              onClick={() => setSelectedCaseModal(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="space-y-2 pr-8">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-bold">
                <ShieldAlert className="w-3.5 h-3.5 text-red-600" />
                <span>Verified Critical Medical Case</span>
              </div>
              <h2 className="text-2xl font-black text-slate-900">
                {selectedCaseModal.patientName} ({selectedCaseModal.ageGender})
              </h2>
              <div className="text-xs font-bold text-red-600 flex items-center gap-1">
                <Hospital className="w-4 h-4" /> {selectedCaseModal.hospital}
              </div>
            </div>

            {/* Patient Image & Split Card Banner inside Modal */}
            <div className="grid grid-cols-12 rounded-xl overflow-hidden border border-slate-200">
              <div className="col-span-5 bg-[#0e0c4d] text-white p-4 flex flex-col justify-between">
                <div>
                  <span className="text-[#EF4444] font-black text-xl border-b-2 border-red-500 pb-0.5 inline-block">HELP</span>
                  <div className="text-white font-black text-base mt-2">{selectedCaseModal.patientName}</div>
                </div>
                <div>
                  <div className="text-[10px] text-slate-300">Goal Amount</div>
                  <div className="text-white font-extrabold text-lg">₹ {selectedCaseModal.amountRequired.toLocaleString('en-IN')}</div>
                </div>
              </div>
              <div className="col-span-7 h-44 relative bg-slate-900">
                <img src={selectedCaseModal.image} alt={selectedCaseModal.patientName} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                <span className="absolute top-2 left-2 bg-[#FACC15] text-[#0f114d] text-[9px] font-black px-2 py-0.5 rounded">TAX BENEFIT 80G</span>
              </div>
            </div>

            {/* Medical Report Details */}
            <div className="space-y-3 bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs text-slate-700 space-y-2">
              <div className="flex justify-between items-center border-b border-slate-200 pb-2">
                <span className="font-bold text-slate-500">Medical Report ID:</span>
                <span className="font-mono font-bold text-slate-900">{selectedCaseModal.medicalReportNo}</span>
              </div>
              <div className="flex justify-between items-center border-b border-slate-200 pb-2">
                <span className="font-bold text-slate-500">Attending Specialist:</span>
                <span className="font-bold text-slate-900">{selectedCaseModal.doctor}</span>
              </div>
              <div className="flex justify-between items-center border-b border-slate-200 pb-2">
                <span className="font-bold text-slate-500">Diagnosis & Procedure:</span>
                <span className="font-bold text-[#0e0c4d]">{selectedCaseModal.condition}</span>
              </div>
              <div className="pt-1">
                <span className="font-bold text-slate-900 block mb-1">Case Summary:</span>
                <p className="text-slate-600 leading-relaxed">{selectedCaseModal.description}</p>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <button
                onClick={() => {
                  const id = selectedCaseModal.id;
                  setSelectedCaseModal(null);
                  onOpenDonation(id);
                }}
                className="bg-red-600 hover:bg-red-700 text-white font-black text-xs py-3 rounded-xl flex items-center justify-center gap-2 shadow-md cursor-pointer"
              >
                <HeartHandshake className="w-4 h-4" /> DONATE NOW (80G)
              </button>

              <button
                onClick={() => {
                  const name = selectedCaseModal.patientName;
                  const ref = selectedCaseModal.medicalReportNo;
                  onOpenWhatsApp(`Emergency Medical verification query for ${name} (Ref: ${ref})`);
                }}
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-3 rounded-xl flex items-center justify-center gap-2 shadow-md cursor-pointer"
              >
                <Phone className="w-4 h-4" /> VERIFY ON WHATSAPP
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

