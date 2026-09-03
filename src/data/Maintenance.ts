export interface MaintenanceConfig {
  isEnabled: boolean;
  title: string;
  subtitle: string;
  description: string;
  estimatedCompletion: string;
  expectedDuration: string;
  supportEmail: string;
  supportPhone: string;
  whatsappNumber: string;
  whatsappMessage: string;
  allowEmergencyDonations: boolean;
  bypassSecret: string;
  featuresUnderMaintenance: string[];
}

export const maintenanceConfig: MaintenanceConfig = {
  isEnabled: import.meta.env.VITE_MAINTENANCE_MODE === 'true',
  title: 'Under Scheduled Maintenance',
  subtitle: 'We are upgrading our portal for a better experience.',
  description: 'Our site is currently undergoing scheduled maintenance to bring you new features and improvements.',
  estimatedCompletion: 'Coming Back Soon',
  expectedDuration: 'A few hours',
  supportEmail: 'support@dovindia.com',
  supportPhone: '+91 70985 55333',
  whatsappNumber: '917098555333',
  whatsappMessage: 'Hello! I am reaching out regarding website maintenance support.',
  allowEmergencyDonations: false,
  bypassSecret: 'admin',
  featuresUnderMaintenance: [
    'System Upgrades',
    'Performance Enhancements',
    'Security Updates'
  ]
};