import React, { useState } from 'react';
import { BANK_DETAILS } from '../data/donation';
import { Landmark, Copy, Check, QrCode, ShieldCheck, Download, HeartHandshake, Phone } from 'lucide-react';

interface BankDetailsSectionProps {
  onOpenDonation: () => void;
  onOpenWhatsApp: (intent?: string) => void;
}

export const BankDetailsSection: React.FC<BankDetailsSectionProps> = ({
  onOpenDonation,
  onOpenWhatsApp
}) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleDownloadBankDetails = () => {
    const text = `
==================================================
        DOV CSR FOUNDATION (NON-PROFIT)
    OFFICIAL BANK ACCOUNT DETAILS FOR NEFT/RTGS/IMPS
==================================================
Account Name: ${BANK_DETAILS.accountName}
Bank Name: ${BANK_DETAILS.bankName}
Account Number: ${BANK_DETAILS.accountNumber}
IFSC Code: ${BANK_DETAILS.ifscCode}
Branch: ${BANK_DETAILS.branch}
Account Type: ${BANK_DETAILS.accountType}

UPI ID: ${BANK_DETAILS.upiId}
Trust PAN Number: ${BANK_DETAILS.panNumber}
80G Registration: ${BANK_DETAILS.taxRegistration80G}
FCRA Number: ${BANK_DETAILS.fcraNumber}

Note: All direct bank wire transfers are eligible for 50% Tax Exemption under Section 80G. 
To receive your official 80G tax receipt, please WhatsApp your transaction UTR reference & PAN card to 7098555333.
==================================================
`;
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `DOV_Foundation_Bank_Details.txt`;
    a.click();
  };

  return (
    <div className="bg-[#F8FAFC] text-[#1F2937] min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs text-[#0D6EFD] font-bold">
            <Landmark className="w-4 h-4 text-[#0D6EFD]" />
            <span>OFFICIAL TRUST BANK ACCOUNTS</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-[#1E3A8A]">
            Bank Transfer & UPI Details
          </h1>
          <p className="text-xs sm:text-sm text-[#6B7280]">
            For direct NEFT / RTGS / IMPS bank transfers, corporate CSR grants, and UPI transfers.
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-8 items-start">
          {/* Main Bank Card */}
          <div className="md:col-span-7 card-ngo p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-gray-100 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0D6EFD] font-bold flex items-center justify-center border border-blue-100">
                  <Landmark className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-base font-bold text-[#1E3A8A]">HDFC Bank Trust Account</h2>
                  <p className="text-[11px] text-[#0D6EFD] font-medium">Current Account (12A & 80G Registered)</p>
                </div>
              </div>

              <button
                onClick={handleDownloadBankDetails}
                className="p-2 rounded-xl bg-gray-50 border border-[#E5E7EB] text-[#0D6EFD] text-xs flex items-center gap-1.5 hover:bg-gray-100 transition-colors"
              >
                <Download className="w-3.5 h-3.5" /> TXT Letter
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div className="p-3 bg-[#F8FAFC] rounded-2xl border border-[#E5E7EB] flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-[#6B7280] block font-bold uppercase">Account Name:</span>
                  <strong className="text-[#1F2937] text-xs">{BANK_DETAILS.accountName}</strong>
                </div>
                <button
                  onClick={() => handleCopy(BANK_DETAILS.accountName, 'accountName')}
                  className="p-2 text-[#6B7280] hover:text-[#0D6EFD]"
                >
                  {copiedField === 'accountName' ? <Check className="w-4 h-4 text-[#22C55E]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 bg-[#F8FAFC] rounded-2xl border border-[#E5E7EB] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-[#6B7280] block font-bold uppercase">Account Number:</span>
                    <strong className="text-[#0D6EFD] font-mono text-xs">{BANK_DETAILS.accountNumber}</strong>
                  </div>
                  <button
                    onClick={() => handleCopy(BANK_DETAILS.accountNumber, 'accountNumber')}
                    className="p-2 text-[#6B7280] hover:text-[#0D6EFD]"
                  >
                    {copiedField === 'accountNumber' ? <Check className="w-4 h-4 text-[#22C55E]" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                <div className="p-3 bg-[#F8FAFC] rounded-2xl border border-[#E5E7EB] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-[#6B7280] block font-bold uppercase">IFSC Code:</span>
                    <strong className="text-[#0D6EFD] font-mono text-xs">{BANK_DETAILS.ifscCode}</strong>
                  </div>
                  <button
                    onClick={() => handleCopy(BANK_DETAILS.ifscCode, 'ifscCode')}
                    className="p-2 text-[#6B7280] hover:text-[#0D6EFD]"
                  >
                    {copiedField === 'ifscCode' ? <Check className="w-4 h-4 text-[#22C55E]" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="p-3 bg-[#F8FAFC] rounded-2xl border border-[#E5E7EB]">
                <span className="text-[10px] text-[#6B7280] block font-bold uppercase">Branch Address:</span>
                <span className="text-[#1F2937] text-xs">{BANK_DETAILS.branch}</span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 bg-[#F8FAFC] rounded-2xl border border-[#E5E7EB]">
                  <span className="text-[10px] text-[#6B7280] block font-bold uppercase">PAN Number:</span>
                  <span className="text-[#1F2937] font-mono text-xs">{BANK_DETAILS.panNumber}</span>
                </div>
                <div className="p-3 bg-[#F8FAFC] rounded-2xl border border-[#E5E7EB]">
                  <span className="text-[10px] text-[#6B7280] block font-bold uppercase">80G Reg Number:</span>
                  <span className="text-[#22C55E] font-mono text-[10px]">{BANK_DETAILS.taxRegistration80G}</span>
                </div>
              </div>
            </div>
          </div>

          {/* UPI QR & Quick Verification Card */}
          <div className="md:col-span-5 space-y-6">
            <div className="card-ngo p-6 text-center space-y-4">
              <h3 className="font-bold text-base text-[#1E3A8A] flex items-center justify-center gap-2">
                <QrCode className="w-5 h-5 text-[#F97316]" />
                Instant Scan & Pay via UPI
              </h3>

              {/* Official UPI QR Code Image */}
              <div className="w-52 h-60 mx-auto bg-white p-2 rounded-2xl flex flex-col items-center justify-center border-4 border-[#0D6EFD] shadow-md">
                <img src="/SBIUPI.png" alt="DOV INDIA Official State Bank of India UPI QR Code" className="w-44 h-52 object-contain rounded-xl" />
              </div>

              <div className="p-3 bg-[#F8FAFC] rounded-xl border border-[#E5E7EB] flex items-center justify-between text-xs">
                <span className="text-[#1F2937] font-mono">{BANK_DETAILS.upiId}</span>
                <button
                  onClick={() => handleCopy(BANK_DETAILS.upiId, 'upiId')}
                  className="px-3 py-1 bg-[#0D6EFD] text-white font-bold rounded-lg text-[11px] hover:bg-[#1E3A8A] transition-colors"
                >
                  {copiedField === 'upiId' ? 'Copied!' : 'Copy UPI'}
                </button>
              </div>
            </div>

            <div className="card-ngo p-6 space-y-3 border-green-200">
              <h3 className="text-sm font-bold text-[#1E3A8A] flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#22C55E]" />
                After Transfer 80G Receipt Helpdesk
              </h3>
              <p className="text-xs text-[#6B7280] leading-relaxed">
                After completing your bank wire transfer or UPI payment, please send your transaction screenshot and PAN number to our 80G helpdesk on WhatsApp.
              </p>
              <button
                onClick={() => onOpenWhatsApp('Bank Transfer 80G Receipt')}
                className="btn-whatsapp w-full py-3 text-xs justify-center"
              >
                <Phone className="w-4 h-4" /> WhatsApp Receipt Request
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
