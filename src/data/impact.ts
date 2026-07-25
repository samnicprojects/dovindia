import { ImpactStat, SuccessStory } from '../types';

export const IMPACT_STATS: ImpactStat[] = [
  {
    id: 'stat-trees',
    number: '50,000+',
    label: 'Native Trees Planted',
    subtext: 'Miyawaki forests & fruit orchards across 32 locations in Western Ghats',
    iconName: 'TreePine'
  },
  {
    id: 'stat-solar',
    number: '38',
    label: 'Solar Village Schools',
    subtext: '24/7 off-grid electricity powering digital smartboards and STEM labs',
    iconName: 'Sun'
  },
  {
    id: 'stat-co2',
    number: '12,400 Tons',
    label: 'CO2 Footprint Offset',
    subtext: 'Combined impact of EVDov electric scooters and afforestation carbon sinks',
    iconName: 'Zap'
  },
  {
    id: 'stat-beneficiaries',
    number: '1,85,000+',
    label: 'Lives Positively Impacted',
    subtext: 'Across health, education, clean water, emergency relief and electric transit',
    iconName: 'HeartHandshake'
  }
];

export const SUCCESS_STORIES: SuccessStory[] = [
  {
    id: 'story-1',
    name: 'Sunita Patil & Family',
    roleLocation: 'Beneficiary, Sangli District',
    story: 'Before DOV Foundation installed the solar RO water kiosk, my children fell sick every monsoon due to contaminated well water. Now our entire village has access to pure, safe drinking water 24/7.',
    quote: 'Safe drinking water has brought health and happiness back to our village families.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80',
    programmeTitle: 'Clean Water RO Hubs'
  },
  {
    id: 'story-2',
    name: 'Aakash More',
    roleLocation: 'Delivery Partner & Scooter Owner, Pune',
    story: 'Switching from my petrol bike to EVDov Velocity X saved me ₹4,500 every month on fuel. The swappable LFP battery means I never wait at charging stations and can run extra delivery shifts.',
    quote: 'EVDov reduced my monthly costs and doubled my daily earnings.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    programmeTitle: 'EVDov Electric Mobility'
  },
  {
    id: 'story-3',
    name: 'Renu Kamble',
    roleLocation: 'Student, ZP High School Khed',
    story: 'When our school received the DOV solar smart classroom, studying science became so fun. The solar battery power means our computers stay on even during 6-hour power outages.',
    quote: 'Now we can learn coding and digital science without any electricity interruptions.',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
    programmeTitle: 'Solar School Microgrids'
  }
];
