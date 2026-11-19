import React from 'react';
import { Settings } from 'lucide-react';
import { maintenanceConfig } from '../data/Maintenance';

interface MaintenancePageProps {
  onBypass: () => void;
}

export const MaintenancePage: React.FC<MaintenancePageProps> = () => {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#F8FAFC] px-6 py-12 text-[#475569]">
      <div className="absolute inset-0 bg-mesh-gradient opacity-70" aria-hidden="true" />

      <section className="relative w-full max-w-3xl rounded-[2rem] border border-white/80 bg-white/90 p-8 text-center shadow-2xl shadow-slate-200/60 backdrop-blur md:p-14">
        <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#165DFF]/10 text-[#165DFF]">
          <Settings size={32} aria-hidden="true" />
        </div>

        <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#165DFF]">
          {maintenanceConfig.estimatedCompletion}
        </p>
        <h1 className="text-3xl font-extrabold text-[#0F172A] md:text-5xl">
          {maintenanceConfig.title}
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-lg font-medium text-[#334155]">
          {maintenanceConfig.subtitle}
        </p>
        <p className="mx-auto mt-3 max-w-xl leading-7 text-[#64748B]">
          {maintenanceConfig.description}
        </p>

        <div className="mx-auto mt-8 grid max-w-xl gap-3 text-left sm:grid-cols-3">
          {maintenanceConfig.featuresUnderMaintenance.map((feature) => (
            <div key={feature} className="rounded-xl bg-[#F8FAFC] px-4 py-3 text-sm font-semibold text-[#334155]">
              {feature}
            </div>
          ))}
        </div>

      </section>
    </main>
  );
};