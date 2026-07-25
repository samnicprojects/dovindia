import { ScooterModel } from '../types';

export const SCOOTERS_DATA: ScooterModel[] = [
  {
    id: 'velocity-x',
    name: 'EVDov Velocity X',
    tagline: 'High-Performance Urban Flagship with 145km Range',
    category: 'High-Speed',
    price: 98999,
    emiStarting: 2499,
    topSpeed: 85,
    rangePerCharge: 145,
    chargingTime: '3.2 Hours (Fast Charger)',
    batteryCapacity: '3.4 kWh Swappable LFP Smart Battery',
    motorPower: '3800W Peak BLDC Hub Motor',
    isPopular: true,
    colors: [
      { name: 'Crimson Red', hex: '#dc2626', bgClass: 'bg-red-600', image: '/es.jpeg' },
      { name: 'Cyber Cyan', hex: '#06b6d4', bgClass: 'bg-cyan-500', image: '/escooter.jpeg' },
      { name: 'Matte Obsidian', hex: '#0f172a', bgClass: 'bg-slate-900', image: '/model.jpeg' }
    ],
    keyFeatures: [
      'PM E-DRIVE Subsidy Approved',
      'Swappable LFP Battery (2,000+ Charge Cycles)',
      '7-inch Touch TFT Dashboard with Navigation',
      'CBS Dual Disc Brakes with Regenerative Braking',
      '30L Underseat Boot Storage'
    ],
    specs: {
      brakes: 'Front & Rear Hydraulic Disc Brakes + CBS',
      suspension: 'Telescopic Front Fork & Twin Rear Gas Shocks',
      tyres: '12-inch Tubeless All-Weather Tyres',
      bootSpace: '30 Liters (Fits Full-Face Helmet)',
      warranty: '3 Years / 50,000 km Comprehensive Warranty',
      appConnectivity: 'Bluetooth 5.2, GPS Live Tracking, Geo-Fencing'
    }
  },
  {
    id: 'spark-eco',
    name: 'EVDov Spark Eco',
    tagline: 'Affordable Daily Commuter Engineered for Maximum Savings',
    category: 'City Commuter',
    price: 74999,
    emiStarting: 1899,
    topSpeed: 65,
    rangePerCharge: 110,
    chargingTime: '4 Hours (Standard Outlet)',
    batteryCapacity: '2.5 kWh LFP Battery',
    motorPower: '2200W Peak Motor',
    colors: [
      { name: 'Electric Cyan', hex: '#06b6d4', bgClass: 'bg-cyan-500', image: '/escooter.jpeg' },
      { name: 'Arctic Red', hex: '#dc2626', bgClass: 'bg-red-600', image: '/es.jpeg' },
      { name: 'Pearl White', hex: '#f8fafc', bgClass: 'bg-slate-100', image: '/model.jpeg' }
    ],
    keyFeatures: [
      'Ultra Low Running Cost (₹0.15 / km)',
      'Lightweight High-Tensile Steel Frame',
      'Digital LED Cluster',
      'USB Smartphone Charging Port',
      'Anti-Theft Alarm & Remote Lock'
    ],
    specs: {
      brakes: 'Front Disc, Rear Drum Brake + CBS',
      suspension: 'Hydraulic Telescopic Shocks',
      tyres: '10-inch Tubeless Tyres',
      bootSpace: '24 Liters',
      warranty: '3 Years Battery Warranty',
      appConnectivity: 'Optional IoT Tracker'
    }
  },
  {
    id: 'cruiser-pro',
    name: 'EVDov Cruiser Pro',
    tagline: 'Long-Range Touring Scooter with Dual LFP Battery Packs',
    category: 'Long Range',
    price: 118999,
    emiStarting: 2999,
    topSpeed: 95,
    rangePerCharge: 190,
    chargingTime: '2.5 Hours (Dual Fast Charge)',
    batteryCapacity: '4.8 kWh Dual LFP Swappable Battery',
    motorPower: '5000W Peak Mid-Drive Motor',
    colors: [
      { name: 'Platinum Silver', hex: '#475569', bgClass: 'bg-slate-600', image: '/model.jpeg' },
      { name: 'Crimson Sport', hex: '#dc2626', bgClass: 'bg-red-600', image: '/es.jpeg' },
      { name: 'Midnight Cyan', hex: '#0284c7', bgClass: 'bg-sky-600', image: '/escooter.jpeg' }
    ],
    keyFeatures: [
      'Dual Swappable Battery Architecture',
      'Cruise Control & Hill-Hold Assist',
      'Reverse Mode for Easy Parking',
      'Premium Ergonomic Touring Seat'
    ],
    specs: {
      brakes: 'Dual Channel ABS Brakes',
      suspension: 'Monoshock Rear & Telescopic Front',
      tyres: '14-inch Alloy Wheels Tubeless',
      bootSpace: '35 Liters',
      warranty: '4 Years / 60,000 km Warranty',
      appConnectivity: 'Full Smart App, OTA Updates, TPMS Integration'
    }
  }
];

