export interface BikeProduct {
  id: string;
  name: string;
  tagline: string;
  category: 'High-Speed' | 'City Commuter' | 'Long Range' | 'Cargo / Commercial' | 'Sport Edition';
  price: number;
  originalPrice: number;
  tokenDeposit: number;
  emiStarting: number;
  topSpeed: number; // km/h
  topSpeedText: string;
  rangePerCharge: number; // km
  chargingTime: string;
  batteryCapacity: string;
  motorPower: string;
  controller: string;
  tyres: string;
  brakes: string;
  isPopular?: boolean;
  isNew?: boolean;
  subsidyApproved?: boolean;
  image: string;
  keyFeatures: string[];
  specs: {
    controller: string;
    motorPower: string;
    maxSpeed: string;
    brakes: string;
    tyres: string;
    warranty: string;
  };
  description: string;
}

export const BIKES_DATA: BikeProduct[] = [
  {
    id: 'cs-01-scroot',
    name: 'CS 01 (SCROOT)',
    tagline: 'Dedicated to the Indian Army • High Performance 1200W Scooter',
    category: 'High-Speed',
    price: 84999,
    originalPrice: 95000,
    tokenDeposit: 999,
    emiStarting: 2199,
    topSpeed: 55,
    topSpeedText: '50-55 Km/h',
    rangePerCharge: 120,
    chargingTime: '3.5 Hours',
    batteryCapacity: '60V/72V High-Capacity LFP Pack',
    motorPower: '1200W Peak Power Engine',
    controller: '60V/72V 45Amp',
    tyres: '90-90-12',
    brakes: 'Front Disc / Rear Drum',
    isPopular: true,
    subsidyApproved: true,
    image: '/product (1).png',
    keyFeatures: [
      'Official DOV INDIA - Dedicated to the Indian Army Series',
      'High-Performance 60V/72V 45Amp Controller',
      'Front Hydraulic Disc & Rear Heavy Drum Brake System',
      'Premium 90-90-12 Tubeless Alloy Tyres',
      'PM E-DRIVE Subsidy Eligible'
    ],
    specs: {
      controller: '60V/72V 45Amp',
      motorPower: '1200W',
      maxSpeed: '50-55 Km/h',
      brakes: 'Front Disc / Rear Drum',
      tyres: '90-90-12',
      warranty: '3 Years Comprehensive Warranty'
    },
    description: 'The CS 01 (SCROOT) is engineered for maximum reliability with a 1200W motor, 60V/72V 45Amp controller, and robust disc braking system.'
  },
  {
    id: 'zl3002-mars',
    name: 'ZL3002 (MARS)',
    tagline: 'Versatile City Scooter with 1000W Motor & Multiple Tyre Variants',
    category: 'City Commuter',
    price: 72999,
    originalPrice: 82000,
    tokenDeposit: 999,
    emiStarting: 1899,
    topSpeed: 45,
    topSpeedText: '40-45 Km/h',
    rangePerCharge: 100,
    chargingTime: '4.0 Hours',
    batteryCapacity: '48V/60V Portable Battery',
    motorPower: '1000W Motor',
    controller: '48V/60V 32Amp',
    tyres: '90-100-10 (10-10", 12-10", 12-12" Available)',
    brakes: 'Front Disc / Rear Drum',
    subsidyApproved: true,
    image: '/product (2).png',
    keyFeatures: [
      'Multiple Wheel Model Variants (10-10", 12-10", 12-12" Tyre Sizes)',
      'Efficient 48V/60V 32Amp Smart Controller',
      '1000W Motor Power with Low Maintenance',
      'Front Disc Brake & Rear Drum Safety',
      'Ultra Low Running Cost (₹0.15 / km)'
    ],
    specs: {
      controller: '48V/60V 32Amp',
      motorPower: '1000W',
      maxSpeed: '40-45 Km/h',
      brakes: 'Front Disc / Rear Drum',
      tyres: '90-100-10 (Available in 10" & 12" variants)',
      warranty: '3 Years Battery & Motor Warranty'
    },
    description: 'ZL3002 (MARS) is designed for smooth daily city transit, offering multiple wheel size options and reliable 1000W motor efficiency.'
  },
  {
    id: 'ssl001-keagle',
    name: 'SSL001 (KEAGLE)',
    tagline: 'Aggressive Aerodynamic Style with 1000W Efficient Engine',
    category: 'City Commuter',
    price: 74999,
    originalPrice: 84000,
    tokenDeposit: 999,
    emiStarting: 1949,
    topSpeed: 45,
    topSpeedText: '40-45 Km/h',
    rangePerCharge: 105,
    chargingTime: '3.8 Hours',
    batteryCapacity: '48V/60V Battery Pack',
    motorPower: '1000W Motor',
    controller: '48V/60V 32Amp',
    tyres: '90-100-10 (10-10", 12-10", 12-12" Available)',
    brakes: 'Front Disc / Rear Drum',
    isNew: true,
    subsidyApproved: true,
    image: '/product (3).png',
    keyFeatures: [
      'Futuristic Sharp Dual Headlamp Front Body Fairing',
      '48V/60V 32Amp Precision Controller',
      'Responsive Front Disc Brake System',
      'Multiple Tyre Model Configurations Available',
      'Ergonomic Upright Riding Stance'
    ],
    specs: {
      controller: '48V/60V 32Amp',
      motorPower: '1000W',
      maxSpeed: '40-45 Km/h',
      brakes: 'Front Disc / Rear Drum',
      tyres: '90-100-10 (Optional 12" Wheel Upgrades)',
      warranty: '3 Years Comprehensive Warranty'
    },
    description: 'SSL001 (KEAGLE) offers bold sporty contours paired with an ultra-efficient 1000W powertrain for urban riding.'
  },
  {
    id: 'cs3-elite',
    name: 'CS3 (ELITE)',
    tagline: 'Premium Executive Scooter with 1200W Motor & 45Amp Controller',
    category: 'High-Speed',
    price: 88999,
    originalPrice: 99000,
    tokenDeposit: 999,
    emiStarting: 2299,
    topSpeed: 45,
    topSpeedText: '40-45 Km/h',
    rangePerCharge: 125,
    chargingTime: '3.5 Hours',
    batteryCapacity: '60V/72V Swappable Battery Pack',
    motorPower: '1200W Motor',
    controller: '60V/72V 45Amp',
    tyres: '90-90-12',
    brakes: 'Front Disc / Rear Drum',
    isPopular: true,
    subsidyApproved: true,
    image: '/product (4).png',
    keyFeatures: [
      'Executive European Scooter Styling in Metallic Champagne Finish',
      'Heavy Duty 60V/72V 45Amp Controller',
      '1200W Peak Performance Motor',
      '12-inch All-Terrain Alloy Wheels & Disc Brakes',
      'Extra Large Footboard & Storage'
    ],
    specs: {
      controller: '60V/72V 45Amp',
      motorPower: '1200W',
      maxSpeed: '40-45 Km/h',
      brakes: 'Front Disc / Rear Drum',
      tyres: '90-90-12',
      warranty: '3 Years / 50,000 km Warranty'
    },
    description: 'CS3 (ELITE) delivers executive comfort and superior torque with its 1200W motor and high-current 45Amp controller.'
  },
  {
    id: 'fs5-master-pro',
    name: 'FS 5 (MASTER PRO)',
    tagline: 'Master Series Heavy Duty Scooter with 1200W Power',
    category: 'Long Range',
    price: 89999,
    originalPrice: 102000,
    tokenDeposit: 999,
    emiStarting: 2349,
    topSpeed: 45,
    topSpeedText: '40-45 Km/h',
    rangePerCharge: 130,
    chargingTime: '3.5 Hours',
    batteryCapacity: '60V/72V Long Range Pack',
    motorPower: '1200W Motor',
    controller: '60V/72V 45Amp',
    tyres: '90-90-12',
    brakes: 'Front Disc / Rear Drum',
    isPopular: true,
    subsidyApproved: true,
    image: '/product (5).png',
    keyFeatures: [
      'Master Pro Edition Built for Maximum Range & Heavy Riding',
      'High Output 60V/72V 45Amp Controller',
      '1200W Heavy Duty Motor',
      'Hydraulic Front Disc & Rear Drum Brake Assembly',
      '90-90-12 Commercial Grade Tubeless Tyres'
    ],
    specs: {
      controller: '60V/72V 45Amp',
      motorPower: '1200W',
      maxSpeed: '40-45 Km/h',
      brakes: 'Front Disc / Rear Drum',
      tyres: '90-90-12',
      warranty: '3 Years Warranty'
    },
    description: 'FS 5 (MASTER PRO) combines robust frame geometry with a 1200W motor and 45Amp controller for smooth long-distance commutes.'
  },
  {
    id: 'vsp-1',
    name: 'VSP 1',
    tagline: 'Retro Stealth Black Urban Commuter with 1200W Power',
    category: 'City Commuter',
    price: 79999,
    originalPrice: 89999,
    tokenDeposit: 999,
    emiStarting: 2099,
    topSpeed: 45,
    topSpeedText: '40-45 Km/h',
    rangePerCharge: 115,
    chargingTime: '3.6 Hours',
    batteryCapacity: '60V/72V Battery System',
    motorPower: '1200W Motor',
    controller: '60V/72V 45Amp',
    tyres: '90-90-12',
    brakes: 'Front Disc / Rear Drum',
    subsidyApproved: true,
    image: '/product (6).png',
    keyFeatures: [
      'Matte Black Body Finish with Vintage Square Headlamp',
      '60V/72V 45Amp Heavy Load Controller',
      '1200W Direct Drive Hub Motor',
      'Front Disc Brake & 90-90-12 Alloy Wheels',
      'Low Noise Smooth Electrical Operation'
    ],
    specs: {
      controller: '60V/72V 45Amp',
      motorPower: '1200W',
      maxSpeed: '40-45 Km/h',
      brakes: 'Front Disc / Rear Drum',
      tyres: '90-90-12',
      warranty: '3 Years Comprehensive Warranty'
    },
    description: 'VSP 1 brings a timeless retro aesthetic combined with modern 1200W electric performance and 45Amp controller reliability.'
  },
  {
    id: 'vsp-3',
    name: 'VSP 3',
    tagline: 'Sleek Arctic White Urban Scooter with LED Apron Illumination',
    category: 'City Commuter',
    price: 81999,
    originalPrice: 91999,
    tokenDeposit: 999,
    emiStarting: 2149,
    topSpeed: 45,
    topSpeedText: '40-45 Km/h',
    rangePerCharge: 120,
    chargingTime: '3.5 Hours',
    batteryCapacity: '60V/72V Battery Pack',
    motorPower: '1200W Motor',
    controller: '60V/72V 45Amp',
    tyres: '90-90-12',
    brakes: 'Front Disc / Rear Drum',
    isNew: true,
    subsidyApproved: true,
    image: '/product (7).png',
    keyFeatures: [
      'Custom Horizontal Chrome Front Apron Grill with DRL LED Lights',
      '60V/72V 45Amp High Output Controller',
      '1200W Motor Power',
      'Precision Front Disc Brake & Rear Drum',
      '90-90-12 All-Weather Tyres'
    ],
    specs: {
      controller: '60V/72V 45Amp',
      motorPower: '1200W',
      maxSpeed: '40-45 Km/h',
      brakes: 'Front Disc / Rear Drum',
      tyres: '90-90-12',
      warranty: '3 Years Warranty'
    },
    description: 'VSP 3 stands out with futuristic front grille styling and dependable 1200W electric power delivery.'
  },
  {
    id: 'younger-pro',
    name: 'YOUNGER PRO',
    tagline: 'Premium Cruiser Scooter with Vintage Mesh Front Grille',
    category: 'High-Speed',
    price: 86999,
    originalPrice: 98000,
    tokenDeposit: 999,
    emiStarting: 2249,
    topSpeed: 45,
    topSpeedText: '40-45 Km/h',
    rangePerCharge: 125,
    chargingTime: '3.5 Hours',
    batteryCapacity: '60V/72V Smart Pack',
    motorPower: '1200W Motor',
    controller: '60V/72V 45Amp',
    tyres: '90-90-12',
    brakes: 'Front Disc / Rear Drum',
    isPopular: true,
    subsidyApproved: true,
    image: '/product (8).png',
    keyFeatures: [
      'Automotive-Style Chrome Grille & Tan Leatherette Cushion Seat',
      'Heavy 60V/72V 45Amp Controller',
      '1200W High Torque Engine',
      'Hydraulic Front Disc & 90-90-12 Tubeless Tyres',
      'Comfortable Touring ergonomics for 2 Riders'
    ],
    specs: {
      controller: '60V/72V 45Amp',
      motorPower: '1200W',
      maxSpeed: '40-45 Km/h',
      brakes: 'Front Disc / Rear Drum',
      tyres: '90-90-12',
      warranty: '3 Years Warranty'
    },
    description: 'YOUNGER PRO offers luxury cruiser comfort featuring a distinct front grille, plush seating, and powerful 1200W motor.'
  },
  {
    id: 'q-7',
    name: 'Q-7',
    tagline: 'Mint Green Eco Cruiser with Oversized 12-inch Wheels',
    category: 'City Commuter',
    price: 82999,
    originalPrice: 93000,
    tokenDeposit: 999,
    emiStarting: 2149,
    topSpeed: 45,
    topSpeedText: '40-45 Km/h',
    rangePerCharge: 120,
    chargingTime: '3.5 Hours',
    batteryCapacity: '60V/72V Battery',
    motorPower: '1200W Motor',
    controller: '60V/72V 45Amp',
    tyres: '90-100-12',
    brakes: 'Front Disc / Rear Drum',
    subsidyApproved: true,
    image: '/product (9).png',
    keyFeatures: [
      'Mint Green Pastel Color Paneling with Rectangular LED Headlight',
      'Oversized 90-100-12 High Ground Clearance Wheels',
      '60V/72V 45Amp Controller',
      '1200W Peak Power Motor',
      'Front Disc Brake with Regenerative Assist'
    ],
    specs: {
      controller: '60V/72V 45Amp',
      motorPower: '1200W',
      maxSpeed: '40-45 Km/h',
      brakes: 'Front Disc / Rear Drum',
      tyres: '90-100-12',
      warranty: '3 Years Warranty'
    },
    description: 'Q-7 combines a refreshing mint green look with larger 12-inch wheels for effortless handling over bumps.'
  },
  {
    id: 'igor-keagle-pro',
    name: 'IGOR (KEAGLE PRO) (RTO APPROVED)',
    tagline: 'Official RTO Approved Sport Scooter with Orange Racing Apron',
    category: 'Sport Edition',
    price: 89999,
    originalPrice: 102000,
    tokenDeposit: 999,
    emiStarting: 2299,
    topSpeed: 45,
    topSpeedText: '40-45 Km/h',
    rangePerCharge: 130,
    chargingTime: '3.5 Hours',
    batteryCapacity: '60V/72V Battery System',
    motorPower: '1000W Motor',
    controller: '60V/72V 45Amp',
    tyres: '90-100-10',
    brakes: 'Front Disc / Rear Drum',
    isPopular: true,
    subsidyApproved: true,
    image: '/product (10).png',
    keyFeatures: [
      'Government RTO Approved Model Certificate',
      'Dual Tone Silver & Racing Orange Aerodynamic Graphics',
      'Passenger Backrest Installed for Extra Comfort',
      '60V/72V 45Amp Heavy Duty Controller',
      '1000W Motor with Front Disc Brake'
    ],
    specs: {
      controller: '60V/72V 45Amp',
      motorPower: '1000W',
      maxSpeed: '40-45 Km/h',
      brakes: 'Front Disc / Rear Drum',
      tyres: '90-100-10',
      warranty: '3 Years RTO Approved Warranty'
    },
    description: 'IGOR (KEAGLE PRO) is officially RTO approved, featuring striking sport livery, passenger backrest, and 45Amp controller.'
  },
  {
    id: 'racer-mars-pro',
    name: 'RACER (MARS PRO) (RTO APPROVED)',
    tagline: 'Official RTO Approved Performance Racer with Red Sports Fairing',
    category: 'Sport Edition',
    price: 91999,
    originalPrice: 104000,
    tokenDeposit: 999,
    emiStarting: 2399,
    topSpeed: 45,
    topSpeedText: '40-45 Km/h',
    rangePerCharge: 135,
    chargingTime: '3.2 Hours',
    batteryCapacity: '60V/72V High-Rate Pack',
    motorPower: '1000W Motor',
    controller: '60V/72V 45Amp',
    tyres: '90-100-10',
    brakes: 'Front Disc / Rear Drum',
    isNew: true,
    subsidyApproved: true,
    image: '/product (11).png',
    keyFeatures: [
      'Official RTO Approved High Performance Scooter',
      'Aggressive Racer Styling in Crimson Red & Checkered Flag Graphics',
      '60V/72V 45Amp Smart Controller',
      '1000W High Acceleration Motor',
      'Integrated Passenger Lumbar Support Backrest'
    ],
    specs: {
      controller: '60V/72V 45Amp',
      motorPower: '1000W',
      maxSpeed: '40-45 Km/h',
      brakes: 'Front Disc / Rear Drum',
      tyres: '90-100-10',
      warranty: '3 Years RTO Approved Warranty'
    },
    description: 'RACER (MARS PRO) delivers track-inspired racing graphics with full RTO approval and dependable 1000W electric power.'
  },
  {
    id: 'vsp-6',
    name: 'VSP 6',
    tagline: 'Dual Disc Braking System Scooter with Royal Blue Bodywork',
    category: 'High-Speed',
    price: 93999,
    originalPrice: 106000,
    tokenDeposit: 999,
    emiStarting: 2449,
    topSpeed: 45,
    topSpeedText: '40-45 Km/h',
    rangePerCharge: 140,
    chargingTime: '3.2 Hours',
    batteryCapacity: '60V/72V Heavy Duty Pack',
    motorPower: '1200W Motor',
    controller: '60V/72V 45Amp',
    tyres: '90-100-10',
    brakes: 'Front Disc / Rear Disc (Dual Disc)',
    isPopular: true,
    subsidyApproved: true,
    image: '/product (12).png',
    keyFeatures: [
      'Dual Disc Braking System (Front Disc + Rear Disc Brakes)',
      '60V/72V 45Amp High Output Controller',
      '1200W Powerful Motor',
      'Royal Blue Paint Finish with Checkered Racing Accents',
      'Heavy Duty Suspension & 90-100-10 Tyres'
    ],
    specs: {
      controller: '60V/72V 45Amp',
      motorPower: '1200W',
      maxSpeed: '40-45 Km/h',
      brakes: 'Front Disc / Rear Disc',
      tyres: '90-100-10',
      warranty: '3 Years Warranty'
    },
    description: 'VSP 6 features dual hydraulic disc brakes on both front and rear wheels for ultimate stopping power paired with a 1200W motor.'
  },
  {
    id: 'nine',
    name: 'NINE',
    tagline: 'High Speed 55Km/h Scooter with Dual Disc Brakes & Yellow Cyber Apron',
    category: 'High-Speed',
    price: 96999,
    originalPrice: 110000,
    tokenDeposit: 999,
    emiStarting: 2499,
    topSpeed: 55,
    topSpeedText: '50-55 Km/h',
    rangePerCharge: 145,
    chargingTime: '3.0 Hours',
    batteryCapacity: '60V/72V Performance Battery',
    motorPower: '1200W Motor',
    controller: '60V/72V 45Amp',
    tyres: '90-90-12',
    brakes: 'Front Disc / Rear Disc (Dual Disc)',
    isPopular: true,
    subsidyApproved: true,
    image: '/product (13).png',
    keyFeatures: [
      'High Speed Performance: 50-55 Km/h Top Speed',
      'Dual Disc Brakes (Front & Rear Disc)',
      'Cyber Yellow & Matte Black Aero Body Styling',
      '60V/72V 45Amp Power Controller',
      '90-90-12 Premium Tubeless Alloy Tyres'
    ],
    specs: {
      controller: '60V/72V 45Amp',
      motorPower: '1200W',
      maxSpeed: '50-55 Km/h',
      brakes: 'Front Disc / Rear Disc',
      tyres: '90-90-12',
      warranty: '3 Years Warranty'
    },
    description: 'NINE is a high-speed electric scooter capable of 55 km/h, equipped with dual disc braking and striking yellow cyber bodywork.'
  },
  {
    id: 'ld',
    name: 'LD',
    tagline: 'High Speed 55Km/h Executive Touring Scooter with Dual Disc Brakes',
    category: 'Long Range',
    price: 95999,
    originalPrice: 108000,
    tokenDeposit: 999,
    emiStarting: 2499,
    topSpeed: 55,
    topSpeedText: '50-55 Km/h',
    rangePerCharge: 140,
    chargingTime: '3.0 Hours',
    batteryCapacity: '60V/72V Smart LFP Battery',
    motorPower: '1200W Motor',
    controller: '60V/72V 45Amp',
    tyres: '90-90-12',
    brakes: 'Front Disc / Rear Disc (Dual Disc)',
    subsidyApproved: true,
    image: '/product (14).png',
    keyFeatures: [
      '50-55 Km/h High Speed Highway & City Commuter',
      'Front Disc & Rear Disc Dual Braking',
      'Metallic Olive Sand Luxury Finish',
      '60V/72V 45Amp Heavy Current Controller',
      '1200W Motor with 90-90-12 Wheels'
    ],
    specs: {
      controller: '60V/72V 45Amp',
      motorPower: '1200W',
      maxSpeed: '50-55 Km/h',
      brakes: 'Front Disc / Rear Disc',
      tyres: '90-90-12',
      warranty: '3 Years Warranty'
    },
    description: 'LD offers effortless 55 km/h speeds, dual disc brakes, and long range touring comfort wrapped in sophisticated olive sand bodywork.'
  },
  {
    id: 'cq',
    name: 'CQ',
    tagline: 'Futuristic Boxy Modular Scooter with 48V/60V 45Amp Controller',
    category: 'Cargo / Commercial',
    price: 85999,
    originalPrice: 97000,
    tokenDeposit: 999,
    emiStarting: 2249,
    topSpeed: 45,
    topSpeedText: '40-45 Km/h',
    rangePerCharge: 120,
    chargingTime: '3.8 Hours',
    batteryCapacity: '48V/60V Battery Pack',
    motorPower: '1000W Motor',
    controller: '48V/60V 45Amp',
    tyres: '90-100-10',
    brakes: 'Front Disc / Rear Drum',
    subsidyApproved: true,
    image: '/product (15).png',
    keyFeatures: [
      'Futuristic Modular Boxy Design with Heavy Outer Crash Guards',
      '48V/60V 45Amp Heavy Duty Controller',
      '1000W Reliable Motor Engine',
      'Dual Front Square LED Headlamp Pods',
      'Front Disc Brake & Passenger Backrest'
    ],
    specs: {
      controller: '48V/60V 45Amp',
      motorPower: '1000W',
      maxSpeed: '40-45 Km/h',
      brakes: 'Front Disc / Rear Drum',
      tyres: '90-100-10',
      warranty: '3 Years Warranty'
    },
    description: 'CQ features a futuristic industrial design with heavy outer crash protection, square LED headlights, and 45Amp controller.'
  },
  {
    id: 'e-4',
    name: 'E 4',
    tagline: 'High Speed 55Km/h Futuristic Flagship with Dual Disc Brakes',
    category: 'High-Speed',
    price: 97999,
    originalPrice: 112000,
    tokenDeposit: 999,
    emiStarting: 2549,
    topSpeed: 55,
    topSpeedText: '50-55 Km/h',
    rangePerCharge: 150,
    chargingTime: '3.0 Hours',
    batteryCapacity: '60V/72V Flagship Pack',
    motorPower: '1200W Motor',
    controller: '60V/72V 45Amp',
    tyres: '90-90-12',
    brakes: 'Front Disc / Rear Disc (Dual Disc)',
    isPopular: true,
    subsidyApproved: true,
    image: '/product (16).png',
    keyFeatures: [
      'Top-Tier 50-55 Km/h Speed Flagship Model',
      'Dual Disc Brakes (Front Disc + Rear Disc)',
      'Clean Champagne Gold Aerodynamic Paneling',
      '60V/72V 45Amp Controller',
      '1200W Peak Performance Engine'
    ],
    specs: {
      controller: '60V/72V 45Amp',
      motorPower: '1200W',
      maxSpeed: '50-55 Km/h',
      brakes: 'Front Disc / Rear Disc',
      tyres: '90-90-12',
      warranty: '3 Years Comprehensive Warranty'
    },
    description: 'E 4 represents the flagship high-speed model with 55 km/h capability, dual disc brakes, and 1200W motor power.'
  }
];
