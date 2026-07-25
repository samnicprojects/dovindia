import { ProgrammeItem } from '../types';

// Core 6 NGO Programmes for DOV Foundation

export const PROGRAMMES_DATA: ProgrammeItem[] = [
  {
    id: 'prog-1',
    title: 'Emergency Medical Support',
    category: 'Healthcare',
    shortDesc: 'Rapid response critical care transportation, life-saving ICU support, and emergency surgeries for underprivileged patients.',
    fullDesc: 'Providing 24/7 emergency ambulance dispatch, zero-cost ICU beds in partner hospitals, and emergency surgical funding for critically ill children and elderly from low-income families across Maharashtra, Gujarat, and NCR.',
    iconName: 'Ambulance',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80',
    beneficiaries: '12,500+ Emergency Patients',
    locationsCount: 24,
    featured: true,
    objectives: [
      '24/7 Critical Emergency Medical Ambulance Hotline',
      'Zero-cost ICU Beds & Oxygen Cylinder Assistance',
      'Pediatric Heart & Cancer Surgery Financial Aid',
      'Emergency Blood & Plasma Network Dispatch'
    ],
    impactMetrics: [
      { label: 'Lives Saved', value: '12,500+' },
      { label: 'Ambulance Runs', value: '45,000+' },
      { label: 'Partner Hospitals', value: '120+' },
      { label: 'Avg Response Time', value: '18 Mins' }
    ],
    beneficiaryStory: {
      name: 'Sunita Sharma (Mother of 6yo Rohan)',
      quote: 'When my son collapsed with acute heart failure, DOV Foundation funded his cardiac surgery within 4 hours. They gave my child a second life.',
      location: 'Pune, Maharashtra'
    }
  },
  {
    id: 'prog-2',
    title: 'Quality Education Programme',
    category: 'Education',
    shortDesc: 'Digital smart classrooms, STEM learning kits, and merit scholarships for rural government school students.',
    fullDesc: 'Equipping village schools with solar-powered smart interactive boards, digital computer labs, science experimentation kits, and full tuition assistance for underprivileged girls pursuing higher secondary education.',
    iconName: 'GraduationCap',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
    beneficiaries: '35,000+ Students',
    locationsCount: 85,
    featured: true,
    objectives: [
      'Solar Smart Classroom Installation in Rural Schools',
      'Girl Child Higher Secondary Education Scholarships',
      'Robotics & Coding STEM Learning Kits',
      'Teacher Training & Digital Pedagogical Tools'
    ],
    impactMetrics: [
      { label: 'Smart Classrooms', value: '210+' },
      { label: 'Scholarships Awarded', value: '8,400+' },
      { label: 'School Retention Rate', value: '96.4%' },
      { label: 'Female Literacy Lift', value: '42%' }
    ],
    beneficiaryStory: {
      name: 'Priya Rathod (10th Standard Topper)',
      quote: 'With DOV solar digital classroom in our village school, I cleared my board exams with 94% marks and secured an engineering scholarship.',
      location: 'Satara District, Maharashtra'
    }
  },
  {
    id: 'prog-3',
    title: 'Health, Nutrition & Hygiene',
    category: 'Healthcare',
    shortDesc: 'Malnutrition eradication, fortified mid-day meals, and adolescent hygiene awareness camps.',
    fullDesc: 'Distributing daily iron-fortified nutritious meal boxes to children in tribal Anganwadis, paired with sanitary hygiene kit distribution and doctor-led health checkups across rural tribal belts.',
    iconName: 'HeartPulse',
    image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=800&q=80',
    beneficiaries: '48,000+ Children & Women',
    locationsCount: 62,
    featured: true,
    objectives: [
      'Zero-Malnutrition Anganwadi Interventions',
      'Adolescent Girls Sanitary & Menstrual Health Kits',
      'Mobile Healthcare Diagnostics & Anemia Screening',
      'Micronutrient & Vitamin Supplementation Drives'
    ],
    impactMetrics: [
      { label: 'Children Nourished', value: '48,000+' },
      { label: 'Hygiene Kits Distributed', value: '120,000+' },
      { label: 'Anemia Reduction Rate', value: '58%' },
      { label: 'Tribal Camps Held', value: '340+' }
    ],
    beneficiaryStory: {
      name: 'Asha Tai (Anganwadi Supervisor)',
      quote: 'Malnutrition among our toddlers dropped by over 60% within 6 months of DOV Foundation bringing fortified meals and regular doctor checkups.',
      location: 'Nandurbar Tribal Belt'
    }
  },
  {
    id: 'prog-4',
    title: 'Calamity Relief & Emergency Support',
    category: 'Disaster Relief',
    shortDesc: 'Immediate disaster response, dry ration kits, shelter kits, and medical aid during floods & cyclones.',
    fullDesc: 'Pre-positioned rapid emergency relief teams equipped with inflatable rescue boats, solar lanterns, water purification tablets, and 30-day dry ration hampers deployed during natural calamities.',
    iconName: 'ShieldAlert',
    image: 'https://images.unsplash.com/photo-1547683905-f686c993aae5?auto=format&fit=crop&w=800&q=80',
    beneficiaries: '95,000+ Calamity Victims',
    locationsCount: 40,
    featured: true,
    objectives: [
      '72-Hour Rapid Response Disaster Rescue Operations',
      'Family Survival Kits with 30-Day Food & Hygiene',
      'Water Purification & Epidemic Prevention Units',
      'Post-Disaster Rehabilitation & Housing Rebuild'
    ],
    impactMetrics: [
      { label: 'Victims Rescued & Fed', value: '95,000+' },
      { label: 'Relief Hampers Sent', value: '32,000+' },
      { label: 'Water Tablets Supplied', value: '1.5 Million' },
      { label: 'Disasters Covered', value: '14 Events' }
    ],
    beneficiaryStory: {
      name: 'Ramesh Patil (Flood Survivor)',
      quote: 'When the river flooded our entire village, DOV rescue boats reached us at midnight with hot food, dry blankets, and medicine.',
      location: 'Kolhapur, Maharashtra'
    }
  },
  {
    id: 'prog-6',
    title: 'Zero Hunger',
    category: 'Food Security',
    shortDesc: 'Community kitchens, grain banks, and mobile cooked meal vans feeding daily wage earners and homeless populations.',
    fullDesc: 'Operating daily hot meal distribution centers serving balanced 600-calorie meals to daily wage laborers, rickshaw drivers, hospital caretakers, and destitute elderly in urban hubs.',
    iconName: 'Utensils',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80',
    beneficiaries: '1.2 Million Meals Served',
    locationsCount: 18,
    featured: true,
    objectives: [
      'Daily Free Hot Meal Vans in Government Hospitals',
      'Community Grain Banks in Drought-Prone Regions',
      'Excess Food Recovery from Weddings & Events',
      'Senior Citizen Hunger Lifeline Deliveries'
    ],
    impactMetrics: [
      { label: 'Meals Served', value: '1.2 Million' },
      { label: 'Mobile Vans', value: '18 Units' },
      { label: 'Food Waste Saved', value: '450 Tons' },
      { label: 'Daily Beneficiaries', value: '4,500+' }
    ],
    beneficiaryStory: {
      name: 'Shankar Lal (Rickshaw Puller)',
      quote: 'After a hard day of physical labor, getting a warm, fresh thali meal for free near the station keeps me healthy and able to support my family.',
      location: 'Nagpur Central Station'
    }
  },
  {
    id: 'prog-7',
    title: 'Life on Land',
    category: 'Environment',
    shortDesc: 'Afforestation, biodiversity restoration, native seed bombing, and soil rejuvenation drives.',
    fullDesc: 'Restoring degraded forest land through dense Miyawaki forest plantation, native banyan and neem sapling cultivation, and carbon sink forestry protected by local community stewards.',
    iconName: 'TreePine',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80',
    beneficiaries: '50,000+ Native Trees Planted',
    locationsCount: 32,
    featured: true,
    objectives: [
      'Dense Miyawaki Urban Forest Creation',
      'Native Species Banyan, Neem & Peepal Planting',
      'Soil Erosion Prevention & Water Table Recharge',
      'Drone-based Remote Geo-Tagging & Survival Tracking'
    ],
    impactMetrics: [
      { label: 'Trees Planted', value: '50,000+' },
      { label: 'Sapling Survival Rate', value: '92.5%' },
      { label: 'CO2 Offset Annually', value: '1,200 Tons' },
      { label: 'Miyawaki Forests', value: '14 Sites' }
    ],
    beneficiaryStory: {
      name: 'Baliram Gowda (Forest Steward)',
      quote: 'We planted 5,000 native trees on barren hill slopes. Now birds have returned, and ground water level in our wells went up by 8 feet.',
      location: 'Western Ghats Bio-Zone'
    }
  }
];
