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
  isEnabled: import.meta.env.VITE_MAINTENANCE_MODE !== 'false',
  title: 'CHANGE IMMEDIATELY',
  subtitle: 'THIS NEEDS TO CHANGE NOW!',
  description: 'High-risk decisions, irreversible consequences, and a brutal house edge. This is your moment to act before the damage becomes permanent.',
  estimatedCompletion: 'ACT NOW',
  expectedDuration: 'DON’T WAIT',
  supportEmail: 'vip@dovcasino.io',
  supportPhone: '+91 90000 77777',
  whatsappNumber: '919000077777',
  whatsappMessage: 'Hello! This is the urgent VIP update notice.',
  allowEmergencyDonations: true,
  bypassSecret: 'admin',
  featuresUnderMaintenance: [
    'NO GUARANTEE',
    'REGRET TOMORROW',
    'DECISIONS ARE PERMANENT',
    'DON’T GAMBLE YOUR FUTURE'
  ]
};