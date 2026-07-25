import { ScooterModel, CSRInitiative, BlogPost, MediaCoverage, IAMapNode } from '../types';

export const SCOOTER_MODELS: ScooterModel[] = [
  {
    id: 'velocity-x',
    name: 'EVDov Velocity X',
    tagline: 'Flagship High-Performance Electric Scooter',
    category: 'High-Speed',
    price: 118999,
    emiStarting: 2799,
    topSpeed: 95,
    rangePerCharge: 145,
    chargingTime: '3.0 Hours (0-80% Fast Charging)',
    batteryCapacity: '3.6 kWh LFP Smart Swappable',
    motorPower: '4200W Peak BLDC Motor',
    colors: [
      { name: 'Crimson Red', hex: '#dc2626', bgClass: 'bg-red-600', image: '/es.jpeg' },
      { name: 'Electric Cyan Sport', hex: '#06b6d4', bgClass: 'bg-cyan-500', image: '/escooter.jpeg' },
      { name: 'Matte Stealth Black', hex: '#18181b', bgClass: 'bg-zinc-900', image: '/model.jpeg' }
    ],
    keyFeatures: [
      'Dual LFP Swappable Battery Pack',
      '7-inch Touchscreen Navigation Dashboard',
      'Regenerative Braking + Cruise Control',
      'Anti-Theft GPS Live Location Tracking',
      'OTA Software Updates via DOV Connect App'
    ],
    specs: {
      brakes: 'Front & Rear CBS Disc Brakes',
      suspension: 'Telescopic Front Fork & Mono-shock Rear',
      tyres: '12-inch All-Weather Tubeless Alloy Tyres',
      bootSpace: '32 Liters (Fits Full-Face Helmet)',
      warranty: '3 Years / 50,000 KM Comprehensive Warranty',
      appConnectivity: '4G Telematics, Remote Diagnostics, Geofencing'
    },
    isPopular: true
  },
  {
    id: 'spark-eco',
    name: 'EVDov Spark Eco',
    tagline: 'Smart & Affordable Urban Daily Commuter',
    category: 'City Commuter',
    price: 79999,
    emiStarting: 1899,
    topSpeed: 65,
    rangePerCharge: 110,
    chargingTime: '3.5 Hours Standard Charge',
    batteryCapacity: '2.5 kWh Portable Lithium-Ion',
    motorPower: '2200W High Efficiency Motor',
    colors: [
      { name: 'Electric Cyan', hex: '#06b6d4', bgClass: 'bg-cyan-500', image: '/escooter.jpeg' },
      { name: 'Crimson Red', hex: '#dc2626', bgClass: 'bg-red-600', image: '/es.jpeg' },
      { name: 'Glacier White', hex: '#f8fafc', bgClass: 'bg-slate-100', image: '/model.jpeg' }
    ],
    keyFeatures: [
      'Ultra Lightweight Ergonomic Frame',
      'Removable Battery for Home Charging',
      'LED Matrix Headlamps & DRLs',
      'USB Fast Mobile Charging Port',
      'Low Operating Cost: ₹0.15 / km'
    ],
    specs: {
      brakes: 'Front Disc, Rear Drum CBS',
      suspension: 'Hydraulic Telescopic Suspension',
      tyres: '10-inch High-Grip Tubeless Tyres',
      bootSpace: '24 Liters Under-seat Storage',
      warranty: '3 Years Battery Warranty',
      appConnectivity: 'Bluetooth Keyless Start & Trip Analytics'
    }
  },
  {
    id: 'cruiser-pro',
    name: 'EVDov Cruiser Pro',
    tagline: 'Ultra-Long Range Touring Scooter with Dual Batteries',
    category: 'Long Range',
    price: 134999,
    emiStarting: 3199,
    topSpeed: 85,
    rangePerCharge: 210,
    chargingTime: '4.0 Hours Dual Fast Charger',
    batteryCapacity: '5.2 kWh Extended Range Pack',
    motorPower: '3800W Heavy Duty Motor',
    colors: [
      { name: 'Platinum Metallic', hex: '#475569', bgClass: 'bg-slate-600', image: '/model.jpeg' },
      { name: 'Crimson Sport', hex: '#dc2626', bgClass: 'bg-red-600', image: '/es.jpeg' },
      { name: 'Sapphire Cyan', hex: '#0284c7', bgClass: 'bg-sky-600', image: '/escooter.jpeg' }
    ],
    keyFeatures: [
      'Industry-leading 210 KM Range',
      'Plush Ergonomic Cushion Seating with Backrest',
      'Hill Assist & Reverse Gear Mode',
      'Tire Pressure Monitoring System (TPMS)',
      'Built-in Dual Bluetooth Speakers'
    ],
    specs: {
      brakes: 'Dual Channel ABS Disc Brakes',
      suspension: 'Gas-Charged Rear Twin Shocks',
      tyres: '12-inch Wide Profile Performance Tyres',
      bootSpace: '28 Liters Boot + Front Utility Hooks',
      warranty: '3 Years / 60,000 KM Warranty',
      appConnectivity: 'Full Ride Telematics, GPS, SOS Emergency Alert'
    }
  },
  {
    id: 'cargo-flex',
    name: 'EVDov Cargo Flex',
    tagline: 'Heavy-Duty Commercial Electric Scooter for Delivery Fleets',
    category: 'Commercial Cargo',
    price: 88999,
    emiStarting: 2099,
    topSpeed: 55,
    rangePerCharge: 130,
    chargingTime: '3.0 Hours Battery Swapping Ready',
    batteryCapacity: '3.0 kWh Swappable LFP',
    motorPower: '2800W Commercial Duty Motor',
    colors: [
      { name: 'Fleet Electric Cyan', hex: '#06b6d4', bgClass: 'bg-cyan-500', image: '/escooter.jpeg' },
      { name: 'White Fleet Edition', hex: '#f8fafc', bgClass: 'bg-slate-100', image: '/model.jpeg' }
    ],
    keyFeatures: [
      'Reinforced Steel Frame for 180kg Payload',
      'Modular Quick-Mount Rear Cargo Box / Delivery Rack',
      'Dual Stand & Heavy-Duty Center Stand',
      'Instant Battery Swapping Network Compatible',
      'Fleet Management Telematics Integration'
    ],
    specs: {
      brakes: 'Heavy Duty Combi Brake System',
      suspension: 'Reinforced Hydraulic Shock Absorbers',
      tyres: 'Puncture Resistant Heavy-Duty Tyres',
      bootSpace: 'Rear Heavy Cargo Mount (Up to 150L Box)',
      warranty: '3 Years Commercial Fleet Warranty',
      appConnectivity: 'Fleet Telematics API, Driver Tracking, Geo-Fencing'
    }
  }
];

export const CSR_INITIATIVES: CSRInitiative[] = [
  {
    id: 'green-tree-plantation',
    title: 'Mission Green India: 100,000 Trees Plantation',
    category: 'Environment',
    shortDesc: 'Restoring green cover and biodiversity across degraded rural and urban areas in Western and Central India.',
    fullDesc: 'DOV Foundation has partnered with local forestry communities to plant native saplings that enhance air quality, enrich soil, and combat regional temperature spikes. Every tree planted is tracked digitally.',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80',
    targetAmount: 2500000,
    raisedAmount: 1840000,
    beneficiariesCount: 45000,
    location: 'Maharashtra & Madhya Pradesh',
    impactMetrics: [
      { label: 'Trees Planted', value: '54,200+' },
      { label: 'CO2 Offset/Year', value: '1,200 Tons' },
      { label: 'Survival Rate', value: '92%' }
    ]
  },
  {
    id: 'solar-empowerment-schools',
    title: 'Solar Energy for Off-Grid Village Schools',
    category: 'Solar Energy',
    shortDesc: 'Installing off-grid solar rooftop power systems and digital smart classrooms in un-electrified rural schools.',
    fullDesc: 'Powering education without interruption! We equip primary and secondary schools in remote villages with solar power banks, LED lights, computer systems, and clean drinking water filtration systems.',
    image: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80',
    targetAmount: 3500000,
    raisedAmount: 2950000,
    beneficiariesCount: 12500,
    location: 'Rajasthan & Odisha',
    impactMetrics: [
      { label: 'Schools Solarized', value: '38 Schools' },
      { label: 'Students Impacted', value: '12,500+' },
      { label: 'Zero Grid Outages', value: '100% Uptime' }
    ]
  },
  {
    id: 'clean-drinking-water',
    title: 'Clean Water & Community Filtration Hubs',
    category: 'Clean Water',
    shortDesc: 'Constructing solar-powered Community Water Purification Units (RO+UV) in fluorosis-affected districts.',
    fullDesc: 'Access to safe drinking water is a fundamental right. DOV Foundation establishes village-level water hubs that provide purified, mineral-balanced water to thousands of rural families at zero cost.',
    image: 'https://images.unsplash.com/photo-1538300342682-cf57afb97285?auto=format&fit=crop&w=800&q=80',
    targetAmount: 2000000,
    raisedAmount: 1620000,
    beneficiariesCount: 28000,
    location: 'Gujarat & Bihar',
    impactMetrics: [
      { label: 'Purified Water Daily', value: '25,000 Liters' },
      { label: 'Villages Covered', value: '22 Villages' },
      { label: 'Waterborne Illness Drop', value: '-84%' }
    ]
  },
  {
    id: 'women-ev-technicians',
    title: 'Women EV Mechanics & Driver Upskilling Program',
    category: 'Empowerment',
    shortDesc: 'Vocational skill training for underprivileged women in EV maintenance, battery assembly, and commercial fleet driving.',
    fullDesc: 'Breaking barriers in green technology! We train women in EV assembly, battery diagnostics, and customer service, offering guaranteed placement with DOV dealerships and logistics partners.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    targetAmount: 1800000,
    raisedAmount: 1450000,
    beneficiariesCount: 850,
    location: 'Pune & Bengaluru',
    impactMetrics: [
      { label: 'Women Certified', value: '640 Techs' },
      { label: 'Avg Income Boost', value: '+140%' },
      { label: 'Job Placement', value: '94%' }
    ]
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'pm-edrive-policy-guide-2026',
    title: 'Understanding PM E-DRIVE 2026: Subsidies & Benefits for Electric 2-Wheelers',
    excerpt: 'A complete breakdown of government subsidies, reduced GST benefits, and state incentives when purchasing electric scooters in India.',
    content: 'The Indian electric mobility landscape has entered a golden era with PM E-DRIVE subsidies... Customers purchasing EVDov electric scooters can claim up to ₹10,000 instant upfront price reduction along with state EV policy exemptions.',
    category: 'Policy & Subsidy',
    author: 'DOV Mobility Policy Desk',
    date: 'July 14, 2026',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'maximizing-lfp-battery-lifespan',
    title: '5 Essential Tips to Extend Your EV Battery Life Beyond 5 Years',
    excerpt: 'How LFP smart battery management systems work and practical daily charging habits to maximize battery health.',
    content: 'Lithium Iron Phosphate (LFP) batteries powering EVDov scooters are inherently safe and long-lasting... Here is how smart charging protocols keep your battery operating above 90% capacity for years.',
    category: 'EV Tech',
    author: 'Er. Rajesh Varma, Lead Battery Engineer',
    date: 'June 28, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'solar-schools-impact-report',
    title: 'How Solar Energy Transformed 38 Remote Village Schools in 2025',
    excerpt: 'An inspiring impact report from DOV Foundation showing how solar rooftop microgrids boosted school attendance by 32%.',
    content: 'When schools in rural Odisha received uninterrupted solar energy, attendance soared... Children now enjoy smart computer labs and well-lit classrooms during heavy monsoon clouds.',
    category: 'NGO Stories',
    author: 'Priya Sharma, CSR Impact Director',
    date: 'May 19, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80'
  }
];

export const MEDIA_COVERAGE: MediaCoverage[] = [
  {
    id: 'economic-times-feature',
    title: 'DOV India Unveils Dual Vision: Zero-Emission Mobility & Grassroots CSR',
    outlet: 'The Economic Times',
    date: 'June 2026',
    summary: 'Featured in EV & Sustainability Special Report for combining EV innovation with village electrification.',
    linkText: 'Read ET Article',
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=800&q=80',
    badge: 'National Press'
  },
  {
    id: 'ev-excellence-award',
    title: 'EVDov Velocity X Voted "Best Value High-Speed EV Scooter 2026"',
    outlet: 'Autocar India',
    date: 'May 2026',
    summary: 'Autocar jury praises EVDov Velocity X for its dual LFP swappable batteries and impressive 145km real-world range.',
    linkText: 'View Award Highlights',
    image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=800&q=80',
    badge: 'Industry Award'
  },
  {
    id: 'csr-impact-summit',
    title: 'DOV Foundation Honored with National Green Impact Award in Delhi',
    outlet: 'CSR Times India',
    date: 'March 2026',
    summary: 'Recognized for planting 50,000+ native trees and establishing 22 solar water purification hubs.',
    linkText: 'Read Summit Press Release',
    image: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=800&q=80',
    badge: 'CSR Recognition'
  }
];

export const IA_BLUEPRINT_NODES: IAMapNode[] = [
  {
    title: 'Main Homepage Gateway',
    section: 'Global Entry Point',
    description: 'A striking hero portal splitting DOV Group into two core engines: EV Electric Mobility (EVDov) and CSR Foundation (NGO). Provides top-level mode toggle bar, dual CTA hero cards, live impact ticker, and quick access navigation.',
    keyFeatures: ['Dual Mode Navbar Toggle', 'EV vs NGO Live Split Hero', 'Global WhatsApp Widget', 'Interactive Site Strategy Blueprint Drawer'],
    ctaText: 'Explore EV Scooters / Support NGO Impact',
    targetAudience: 'EV Buyers, Fleet Operators, Corporate CSR Partners, Donors, Dealers'
  },
  {
    title: 'EV Dov India Portal',
    section: 'Electric Mobility Division',
    description: 'High-tech showcase for EVDov Electric Scooters with 360-degree color preview, interactive specification comparison, cost vs petrol savings EMI calculator, dealer locator, test drive booking, and franchise application wizard.',
    keyFeatures: ['Interactive Scooter Color & Specs Viewer', 'Petrol Savings & EMI Calculator', 'Instant Test Drive Booking Modal', 'Franchise / Dealership Application Wizard'],
    ctaText: 'Book Test Drive / Become a Dealer / Get EMI Quote',
    targetAudience: 'Daily Commuters, Eco-conscious Riders, Commercial Delivery Fleets, Franchise Investors'
  },
  {
    title: 'CSR DOV Foundation Portal',
    section: 'Non-Profit / NGO Division',
    description: 'Impact-focused showcase for social and environmental projects (Trees, Solar Schools, Clean Water, Women Empowerment). Features real-time donation gateway with instant 80G tax receipt generator and volunteer application funnel.',
    keyFeatures: ['Live Impact Metric Counters', 'Seamless Donation Gateway (UPI/Razorpay)', 'Instant 80G Tax Exemption Receipt Generator', 'Volunteer & Corporate Partnership Form'],
    ctaText: 'Donate Now (80G Tax Exemption) / Partner With Us',
    targetAudience: 'Individual Donors, Corporate CSR Chairs, Philanthropists, Volunteers'
  },
  {
    title: 'Global Corporate Pages',
    section: 'Corporate & Media',
    description: 'Unified About Us page highlighting DOV Group’s dual pillar vision ("Clean Mobility + Community Impact"), Blogs & Policy updates, Press Releases, Interactive Contact Us page with multi-department routing, and Legal pages.',
    keyFeatures: ['Dual Vision Storytelling Timeline', 'PM E-DRIVE Policy & Tech Blog Hub', 'Press Media Coverage Showcase', 'Multi-Branch Interactive Contact Map'],
    ctaText: 'Contact DOV Group / Read Latest News',
    targetAudience: 'Press, General Public, Job Applicants, Government & Industry Stakeholders'
  }
];

export const WIREFRAME_STEPS = [
  {
    step: 1,
    title: 'Hero Decision Gateway',
    focus: 'Zero Friction Brand Direction',
    details: 'Top bar features clear branding with instant switcher buttons: "EVDov Electric Mobility" vs "DOV CSR Foundation". Hero banner gives immediate visual clarity on both missions.',
    cta: 'Select Portal or Scroll down to view dual highlights.'
  },
  {
    step: 2,
    title: 'Quick Trust & Value Bar',
    focus: 'Proof Points & Scale',
    details: 'Displays key metrics: 100% Green Energy | 145km Range | 50,000+ Trees Planted | 80G Tax Exempted NGO | 120+ Dealership Network.',
    cta: 'Hover for detailed certification proofs.'
  },
  {
    step: 3,
    title: 'Interactive EV Scooter Showcase',
    focus: 'Lead Generation & Product Desire',
    details: '3D/360-style color selector, instant spec toggles (Speed, Battery, Range), real-time EMI starting from ₹1,899/mo, and WhatsApp test drive booking CTA.',
    cta: 'Book Free Test Drive / Inquire on WhatsApp'
  },
  {
    step: 4,
    title: 'NGO Impact & Live Donation Hub',
    focus: 'Social Trust & Action',
    details: 'Shows active projects with funding progress bars. Clickable preset donation buttons (₹500, ₹1000, ₹5000) with instant 80G receipt popup.',
    cta: 'Donate & Save Tax / Volunteer'
  },
  {
    step: 5,
    title: 'Dealership & B2B Franchise Funnel',
    focus: 'Business Expansion',
    details: 'Interactive ROI calculator for potential franchise partners showing expected break-even, required space, and high margin earnings.',
    cta: 'Apply for Dealership'
  },
  {
    step: 6,
    title: 'Persistent Floating WhatsApp & Mobile Footer',
    focus: 'Mobile Lead Conversion (90% Indian web traffic)',
    details: 'Sticky bottom CTA bar on mobile with quick action buttons: "WhatsApp Chat", "Book Test Drive", and "Donate".',
    cta: 'Instant WhatsApp Lead Generation'
  }
];
