export type PageMode = 
  | 'home' 
  | 'about' 
  | 'what-we-do' 
  | 'programmes' 
  | 'emergency' 
  | 'bank-details' 
  | 'ev' 
  | 'products'
  | 'contact' 
  | 'csr' 
  | 'projects' 
  | 'impact' 
  | 'gallery' 
  | 'donate' 
  | 'privacy-policy'
  | 'terms-and-conditions'
  | 'ux-blueprint';

export type SubTabEV = 'models' | 'features' | 'franchise' | 'test-drive' | 'calculator';
export type SubTabCSR = 'initiatives' | 'impact' | 'donate' | 'volunteer' | 'partnerships' | 'reports';

export interface ProgrammeItem {
  id: string;
  title: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  image: string;
  beneficiaries: string;
  locationsCount: number;
  featured?: boolean;
  objectives?: string[];
  impactMetrics?: { label: string; value: string }[];
  galleryImages?: string[];
  beneficiaryStory?: {
    name: string;
    quote: string;
    location: string;
    image?: string;
  };
}

export interface ScooterModel {
  id: string;
  name: string;
  tagline: string;
  category: 'High-Speed' | 'City Commuter' | 'Long Range' | 'Commercial Cargo';
  price: number; // in INR
  emiStarting: number;
  topSpeed: number; // km/h
  rangePerCharge: number; // km
  chargingTime: string;
  batteryCapacity: string;
  motorPower: string;
  colors: { name: string; hex: string; bgClass: string; image: string }[];
  keyFeatures: string[];
  specs: {
    brakes: string;
    suspension: string;
    tyres: string;
    bootSpace: string;
    warranty: string;
    appConnectivity: string;
  };
  isPopular?: boolean;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  status: 'Ongoing' | 'Completed' | 'Upcoming';
  location: string;
  targetGoal: string;
  achieved: string;
  progressPercent: number;
  image: string;
  description: string;
  beneficiariesCount: number;
  startDate: string;
  endDate?: string;
}

export interface CSRPartner {
  id: string;
  name: string;
  logo: string;
  category: string;
  contribution: string;
}

export interface SuccessStory {
  id: string;
  name: string;
  roleLocation: string;
  story: string;
  quote: string;
  image: string;
  programmeTitle: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Plantation' | 'Education' | 'Healthcare' | 'EV Mobility' | 'Solar' | 'Relief';
  type: 'image' | 'video';
  url: string;
  caption: string;
  date: string;
}

export interface ImpactStat {
  id: string;
  number: string;
  label: string;
  subtext: string;
  iconName: string;
}

export interface DonationCampaignCard {
  id: string;
  title: string;
  category: string;
  description: string;
  amountOptions: number[];
  suggestedAmount: number;
  image: string;
  badge: string;
  urgent?: boolean;
}

export interface AnnualReport {
  id: string;
  year: string;
  title: string;
  fileSize: string;
  downloadUrl: string;
  highlights: string[];
}

export interface Volunteer {
  id: string;
  name: string;
  role: string;
  city: string;
  hoursContributed: number;
  avatar: string;
  quote: string;
}

export interface Testimonial {
  id: string;
  name: string;
  designation: string;
  organization: string;
  comment: string;
  rating: number;
  avatar: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'EV Tech' | 'Sustainability' | 'Policy & Subsidy' | 'NGO Stories';
  author: string;
  date: string;
  readTime: string;
  image: string;
}

export interface MediaCoverage {
  id: string;
  title: string;
  outlet: string;
  date: string;
  summary: string;
  linkText: string;
  image: string;
  badge: string;
}

export interface BankDetails {
  accountName: string;
  bankName: string;
  accountNumber: string;
  ifscCode: string;
  branch: string;
  accountType: string;
  upiId: string;
  panNumber: string;
  taxRegistration80G: string;
  fcraNumber: string;
}

export interface CSRInitiative {
  id: string;
  title: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  targetAmount: number;
  raisedAmount: number;
  beneficiariesCount: number;
  location: string;
  impactMetrics: { label: string; value: string }[];
}

export interface IAMapNode {
  title: string;
  section: string;
  description: string;
  keyFeatures: string[];
  ctaText: string;
  targetAudience: string;
}
