import React from 'react';

interface MaintenancePageProps {
  onBypass: () => void;
}

export const MaintenancePage: React.FC<MaintenancePageProps> = () => (
  <main className="flex min-h-screen items-center justify-center bg-black">
    <img
      src="/th.jpg"
      alt="Teen Patti"
      className="max-h-screen w-full object-contain"
    />
  </main>
);