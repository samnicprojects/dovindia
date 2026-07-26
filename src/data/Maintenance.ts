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
  title: "Scheduled Maintenance in Progress",
  subtitle: "We are updating DOV India to serve you better",
  description: "Our platform is currently undergoing planned system upgrades, performance optimizations, and infrastructure enhancements. We apologize for any temporary inconvenience and appreciate your patience.",
  estimatedCompletion: "Coming Back Shortly",
  expectedDuration: "System Upgrades In Progress",
  supportEmail: "support@dovindia.org",
  supportPhone: "+91 70985 55333",
  whatsappNumber: "917098555333",
  whatsappMessage: "Hello! I am reaching out regarding DOV India during the maintenance window.",
  allowEmergencyDonations: true,
  bypassSecret: "admin",
  featuresUnderMaintenance: [
    "EV Fleet Management Console",
    "Real-time Impact Analytics",
    "Volunteer Registration Portal",
    "Automated 80G Tax Receipt Generation"
  ]
};