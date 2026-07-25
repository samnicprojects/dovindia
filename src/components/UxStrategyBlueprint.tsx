import React, { useState } from 'react';
import { IA_BLUEPRINT_NODES, WIREFRAME_STEPS } from '../data/mockData';
import { FileCode, Layers, Smartphone, Sparkles, CheckCircle2, ArrowRight, Layout, Compass, Shield, Target, MessageCircle, Cpu, BarChart3, ChevronDown, ChevronRight } from 'lucide-react';

export const UxStrategyBlueprint: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'ia' | 'wireframe' | 'copy' | 'mobile'>('ia');
  const [expandedStep, setExpandedStep] = useState<number | null>(1);

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-slate-900 border border-cyan-500/30 rounded-3xl p-6 sm:p-8 mb-8 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950 border border-cyan-800 text-xs text-cyan-300 font-semibold">
            <FileCode className="w-3.5 h-3.5 text-cyan-400" />
            UX/UI STRATEGY & IA BLUEPRINT
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Redesign & Architecture Roadmap: www.dovindia.in
          </h1>

          <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
            A comprehensive strategic blueprint unifying DOV Group’s dual entities: <strong className="text-cyan-300">EVDov Electric Mobility</strong> and <strong className="text-amber-300">DOV CSR Foundation</strong>. Explore the Information Architecture, Wireframe Funnel, Hero Copy Suggestions, and Mobile-First Execution Strategy below.
          </p>

          {/* Strategy Tabs */}
          <div className="flex items-center gap-2 pt-4 overflow-x-auto border-t border-slate-800">
            <button
              onClick={() => setActiveTab('ia')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === 'ia' ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-950/50' : 'bg-slate-950 text-slate-300 hover:bg-slate-800'
              }`}
            >
              <Compass className="w-4 h-4" />
              1. Information Architecture (IA) Map
            </button>

            <button
              onClick={() => setActiveTab('wireframe')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === 'wireframe' ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-950/50' : 'bg-slate-950 text-slate-300 hover:bg-slate-800'
              }`}
            >
              <Layout className="w-4 h-4" />
              2. Step-by-Step Wireframe Funnel
            </button>

            <button
              onClick={() => setActiveTab('copy')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === 'copy' ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-950/50' : 'bg-slate-950 text-slate-300 hover:bg-slate-800'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              3. Hero Copy & CTA Matrix
            </button>

            <button
              onClick={() => setActiveTab('mobile')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === 'mobile' ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-950/50' : 'bg-slate-950 text-slate-300 hover:bg-slate-800'
              }`}
            >
              <Smartphone className="w-4 h-4" />
              4. Mobile-First UX Strategy
            </button>
          </div>
        </div>

        {/* Tab 1: Information Architecture Map */}
        {activeTab === 'ia' && (
          <div className="space-y-6">
            <div className="bg-slate-900/60 p-4 rounded-2xl border border-slate-800 text-xs text-slate-300 flex items-center justify-between">
              <span className="font-semibold text-cyan-400">Target Sitemap Structure: Unified Header + Dual Mode Switcher</span>
              <span className="text-slate-500 hidden sm:inline">Clean functional separation between NGO and Electric Mobility</span>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {IA_BLUEPRINT_NODES.map((node, i) => (
                <div key={i} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4 hover:border-cyan-500/40 transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono bg-cyan-950 text-cyan-300 px-2.5 py-1 rounded-md border border-cyan-800 uppercase font-semibold">
                      {node.section}
                    </span>
                    <span className="text-xs text-slate-500">Node #{i + 1}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white">{node.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{node.description}</p>

                  <div className="space-y-1.5 pt-2">
                    <div className="text-[11px] font-bold text-slate-400 uppercase">Key Features & Components:</div>
                    {node.keyFeatures.map((kf, k) => (
                      <div key={k} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{kf}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-slate-800 space-y-1">
                    <div className="text-[10px] text-slate-400">Target Audience: <strong className="text-slate-200">{node.targetAudience}</strong></div>
                    <div className="text-[10px] text-slate-400">Primary CTA: <strong className="text-cyan-300">{node.ctaText}</strong></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: Step-by-Step Wireframe Funnel */}
        {activeTab === 'wireframe' && (
          <div className="space-y-6">
            <div className="bg-slate-900/60 p-4 rounded-2xl border border-slate-800 text-xs text-slate-300">
              <strong className="text-emerald-400">Homepage Conversion Funnel:</strong> Designed to route visitors to their precise intent within 1-2 clicks while maximizing WhatsApp lead conversion.
            </div>

            <div className="space-y-3 max-w-4xl mx-auto">
              {WIREFRAME_STEPS.map((wf) => {
                const isExpanded = expandedStep === wf.step;
                return (
                  <div key={wf.step} className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
                    <button
                      onClick={() => setExpandedStep(isExpanded ? null : wf.step)}
                      className="w-full p-4 flex items-center justify-between text-left hover:bg-slate-800/50 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-xl bg-cyan-950 text-cyan-400 font-black text-sm flex items-center justify-center border border-cyan-800">
                          {wf.step}
                        </div>
                        <div>
                          <h4 className="text-sm sm:text-base font-bold text-white">{wf.title}</h4>
                          <span className="text-[11px] text-cyan-400 font-medium">Focus: {wf.focus}</span>
                        </div>
                      </div>
                      {isExpanded ? <ChevronDown className="w-5 h-5 text-slate-400" /> : <ChevronRight className="w-5 h-5 text-slate-400" />}
                    </button>

                    {isExpanded && (
                      <div className="p-4 pt-0 border-t border-slate-800/80 bg-slate-950/60 space-y-3 text-xs text-slate-300">
                        <p className="leading-relaxed">{wf.details}</p>
                        <div className="p-2.5 bg-slate-900 rounded-xl border border-cyan-900/50 flex items-center justify-between text-cyan-300">
                          <span>Suggested Wireframe Action / CTA:</span>
                          <strong className="font-bold">{wf.cta}</strong>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Tab 3: Hero Copy & CTA Suggestions Matrix */}
        {activeTab === 'copy' && (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Main Homepage Copy */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
                <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider">Main Homepage Gateway Copy</div>

                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                  <div className="text-[10px] text-slate-500 uppercase font-mono">Headline (H1):</div>
                  <div className="text-base font-black text-white">"Driving Sustainable Mobility. Empowering Rural Communities."</div>
                </div>

                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                  <div className="text-[10px] text-slate-500 uppercase font-mono">Sub-headline:</div>
                  <div className="text-xs text-slate-300">"Welcome to DOV India — home to EVDov high-speed electric scooters and DOV Foundation grass-root social impact."</div>
                </div>

                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                  <div className="text-[10px] text-slate-500 uppercase font-mono">CTA Buttons:</div>
                  <div className="flex flex-wrap gap-2 text-xs font-bold">
                    <span className="px-3 py-1 bg-cyan-500 text-slate-950 rounded-lg">Explore EV Mobility</span>
                    <span className="px-3 py-1 bg-amber-500 text-slate-950 rounded-lg">Support CSR NGO</span>
                  </div>
                </div>
              </div>

              {/* EV Dov Section Copy */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
                <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider">EV Dov India Landing Copy</div>

                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                  <div className="text-[10px] text-slate-500 uppercase font-mono">Headline (H1):</div>
                  <div className="text-base font-black text-white">"Ride the Future with Zero Emissions & Max Savings."</div>
                </div>

                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                  <div className="text-[10px] text-slate-500 uppercase font-mono">Sub-headline:</div>
                  <div className="text-xs text-slate-300">"Up to 145km range per charge, swappable LFP battery, ₹0.15/km running cost, and PM E-DRIVE subsidy."</div>
                </div>

                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                  <div className="text-[10px] text-slate-500 uppercase font-mono">CTA Buttons:</div>
                  <div className="flex flex-wrap gap-2 text-xs font-bold">
                    <span className="px-3 py-1 bg-emerald-500 text-slate-950 rounded-lg">Book Free Test Drive</span>
                    <span className="px-3 py-1 bg-purple-600 text-white rounded-lg">Apply for Dealership</span>
                  </div>
                </div>
              </div>

              {/* CSR NGO Copy */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4 md:col-span-2">
                <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">DOV CSR Foundation Copy</div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                    <div className="text-[10px] text-slate-500 uppercase font-mono">Headline (H1):</div>
                    <div className="text-base font-black text-white">"Restoring Green Cover & Empowering Rural Schools."</div>
                  </div>

                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                    <div className="text-[10px] text-slate-500 uppercase font-mono">Sub-headline:</div>
                    <div className="text-xs text-slate-300">"50,000+ native trees planted, 38 solar village schools, 22 clean water hubs. 100% Tax Deductible under 80G."</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Mobile-First Strategy */}
        {activeTab === 'mobile' && (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <Smartphone className="w-5 h-5 text-cyan-400" />
              Mobile-First UX & Performance Guidelines for India Market
            </h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                <div className="font-bold text-cyan-300">1. Sticky WhatsApp Lead Bar</div>
                <p className="text-slate-400 leading-relaxed">
                  Persistent bottom action bar on mobile viewports with quick links to WhatsApp Chat, Test Drive booking, and 80G Donation.
                </p>
              </div>

              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                <div className="font-bold text-emerald-300">2. Lightweight Asset Bundling</div>
                <p className="text-slate-400 leading-relaxed">
                  Lazy loading images, WebP compressed vehicle assets, and zero external font blocking for fast load on 4G/5G mobile networks.
                </p>
              </div>

              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                <div className="font-bold text-amber-300">3. Thumb-Friendly Touch Targets</div>
                <p className="text-slate-400 leading-relaxed">
                  All interactive controls, swatches, and CTA buttons adhere to 48px+ minimum height touch standards for comfortable single-handed operation.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
