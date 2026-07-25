import { CSRPartner, AnnualReport, Volunteer, Testimonial } from '../types';

export const NGO_OVERVIEW = {
  name: 'DOV CSR Foundation',
  registeredName: 'DOV Social & Ecological Welfare Foundation',
  registrationNumber: 'MAH/NGO/2021/88412',
  tax12A: 'AAATD0921RE20214',
  tax80G: 'CIT(EXEMPTION)/80G/2021-22/A/10452',
  panNumber: 'AAATD0921R',
  fcraNumber: '083781644',
  tagline: 'Driving Grassroots Ecological Restoration & Sustainable Social Empowerment',
  mission: 'To eliminate rural energy poverty, restore degraded green cover, provide quality STEM education, and deliver immediate medical support to vulnerable communities across India.',
  vision: 'A climate-resilient India where zero-emission technology and grassroots social action create equal opportunities for every citizen.',
  overviewText: 'DOV CSR Foundation (NGO wing of DOV India Group) is a registered non-profit working at the intersection of climate action and social equality. We channel corporate CSR capital and individual donor contributions into high-impact, transparent programs with 100% 80G tax deductibility.'
};

export const CSR_PARTNERS: CSRPartner[] = [
  { id: 'p1', name: 'Tata Power Solar', logo: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=300&q=80', category: 'Renewable Energy', contribution: '38 Solar Microgrids' },
  { id: 'p2', name: 'Mahindra Electric Mobility', logo: 'https://images.unsplash.com/photo-1558441719-aa34455441bd?auto=format&fit=crop&w=300&q=80', category: 'Clean Mobility', contribution: '50 EV Skilling Hubs' },
  { id: 'p3', name: 'State Bank of India CSR Foundation', logo: 'https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?auto=format&fit=crop&w=300&q=80', category: 'Banking & CSR', contribution: '12 Medical Ambulances' },
  { id: 'p4', name: 'Infosys Foundation', logo: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=300&q=80', category: 'IT & Education', contribution: '25 Smart Computer Labs' },
  { id: 'p5', name: 'Godrej Agrovet CSR', logo: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=300&q=80', category: 'Agriculture', contribution: '20,000 Fruit Trees' }
];

export const ANNUAL_REPORTS: AnnualReport[] = [
  {
    id: 'rep-2025',
    year: '2024-2025',
    title: 'DOV Foundation Annual Impact & Financial Audit Report',
    fileSize: '4.2 MB PDF',
    downloadUrl: '#download-report-2025',
    highlights: ['50,000+ Native Trees Planted', '38 Solar Microgrids Deployed', '100% Audit Compliance', 'INR 4.8 Cr Transacted via 80G']
  },
  {
    id: 'rep-2024',
    year: '2023-2024',
    title: 'Social Return on Investment (SROI) & CSR Audit',
    fileSize: '3.8 MB PDF',
    downloadUrl: '#download-report-2024',
    highlights: ['12 Mobile Clinics Launched', '15,000 Students Benefited', 'Zero Administrative Leakage']
  },
  {
    id: 'rep-2023',
    year: '2022-2023',
    title: 'Grassroots Community & Ecological Assessment',
    fileSize: '2.9 MB PDF',
    downloadUrl: '#download-report-2023',
    highlights: ['First 10,000 Miyawaki Forests', 'Women Micro-Grant Rollout']
  }
];

export const VOLUNTEERS: Volunteer[] = [
  {
    id: 'v1',
    name: 'Priya Deshmukh',
    role: 'Solar School Educator',
    city: 'Pune, MH',
    hoursContributed: 140,
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    quote: 'Teaching digital skills to young girls in solar-lit rural classrooms is the most fulfilling experience of my life.'
  },
  {
    id: 'v2',
    name: 'Rahul Mehta',
    role: 'Afforestation Drive Captain',
    city: 'Satara, MH',
    hoursContributed: 210,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    quote: 'We have planted 5,000 trees across Western Ghats foothills with 94% survival rate.'
  },
  {
    id: 'v3',
    name: 'Dr. Ananya Sharma',
    role: 'Mobile Clinic Medical Lead',
    city: 'Nashik, MH',
    hoursContributed: 180,
    avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=200&q=80',
    quote: 'Our team delivers life-saving preventive health screenings directly to doorstep in remote villages.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Kavita Jadhav',
    designation: 'Sarpanch',
    organization: 'Khed Shivapur Gram Panchayat',
    comment: 'DOV Foundation replaced our diesel generator with a solar microgrid. Now our village health sub-center has 24/7 power for vaccine cold chains and night deliveries.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 't2',
    name: 'Vikram S. Kirloskar',
    designation: 'Head of CSR',
    organization: 'Apex Industrial Group',
    comment: 'DOV Foundation provides the most transparent ESG compliance and instant 80G tax receipt management we have experienced among Indian NGOs.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
  }
];
