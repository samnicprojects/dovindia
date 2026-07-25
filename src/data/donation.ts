import { DonationCampaignCard, BankDetails } from '../types';

export const BANK_DETAILS: BankDetails & { qrImage?: string; panImage?: string } = {
  accountName: 'DOV INDIA',
  bankName: 'STATE BANK OF INDIA',
  accountNumber: '41673835177',
  ifscCode: 'SBIN0061638',
  branch: 'SME TRANSPORT NAGAR',
  accountType: 'Current Account (CSR Trust)',
  upiId: 'dovindia@sbi',
  panNumber: 'AAICD9879P',
  taxRegistration80G: 'CIT(EXEMPTION)/80G/2021-22 (100% Tax Deductible)',
  fcraNumber: 'Registered Non-Profit Section-8',
  qrImage: '/SBIUPI.png',
  panImage: '/pan.jpeg'
};

export const DONATION_CAMPAIGNS: DonationCampaignCard[] = [
  {
    id: 'camp-child',
    title: 'Sponsor a Child Education',
    category: 'Education',
    description: 'Provide 1 year of tuition fees, uniform, digital tablet, and nutritious mid-day meals for an underprivileged girl student.',
    amountOptions: [1000, 2500, 5000, 12000],
    suggestedAmount: 5000,
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
    badge: '100% 80G Tax Deductible'
  },
  {
    id: 'camp-emergency',
    title: 'Emergency Medical Surgery Fund',
    category: 'Emergency Medical',
    description: 'Direct financial assistance for critical pediatric ICU bed charges, heart surgeries, and emergency accident care.',
    amountOptions: [2000, 5000, 10000, 25000],
    suggestedAmount: 10000,
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80',
    badge: 'CRITICAL NEED',
    urgent: true
  },
  {
    id: 'camp-trees',
    title: 'Plant Native Miyawaki Forest',
    category: 'Environment',
    description: 'Sponsor native banyan, neem, and peepal saplings with 3 years of drip-irrigation maintenance in Western Ghats foothills.',
    amountOptions: [500, 1500, 3000, 10000],
    suggestedAmount: 1500,
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80',
    badge: 'Carbon Offset Certificate'
  },
  {
    id: 'camp-solar',
    title: 'Solar Microgrid for Village School',
    category: 'Solar Energy',
    description: 'Power an entire rural school with 5kW rooftop solar panels and battery storage to run smart classrooms without blackouts.',
    amountOptions: [2500, 5000, 15000, 50000],
    suggestedAmount: 15000,
    image: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80',
    badge: 'High Impact ESG'
  },
  {
    id: 'camp-food',
    title: 'Zero Hunger Food Distribution',
    category: 'Food Security',
    description: 'Provide daily hot nutritious meals to 50 daily wage laborers and hospital caretakers in urban slum hubs.',
    amountOptions: [600, 1800, 3600, 7200],
    suggestedAmount: 1800,
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80',
    badge: 'Direct Relief'
  },
  {
    id: 'camp-women',
    title: 'Women EV Driver Skilling Grant',
    category: 'Women Empowerment',
    description: 'Fund driving license training, safety gear, and micro-loan subsidy for women learning electric 3-wheeler driving.',
    amountOptions: [1200, 3000, 7500, 20000],
    suggestedAmount: 3000,
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    badge: 'Sustainable Livelihood'
  },
  {
    id: 'camp-water',
    title: 'Clean Water RO Hub in Drought Belt',
    category: 'Clean Water',
    description: 'Help build community solar RO water filtration units providing clean fluorosis-free drinking water to drought-prone villages.',
    amountOptions: [2000, 5000, 10000, 25000],
    suggestedAmount: 5000,
    image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=800&q=80',
    badge: 'Health & Sanitation'
  },
  {
    id: 'camp-general',
    title: 'General NGO Emergency Corpus Fund',
    category: 'General Support',
    description: 'Unrestricted corpus fund utilized for rapid flood/cyclone relief, urgent medicine dispatch, and sudden community crises.',
    amountOptions: [1000, 2500, 5000, 10000],
    suggestedAmount: 2500,
    image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=800&q=80',
    badge: '100% Tax Deductible'
  }
];
