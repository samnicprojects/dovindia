import React, { useState } from 'react';
import {
  AlertCircle,
  Key,
  Lock,
  X
} from 'lucide-react';
import { maintenanceConfig } from '../data/Maintenance';

interface MaintenancePageProps {
  onBypass: () => void;
}

export const MaintenancePage: React.FC<MaintenancePageProps> = ({ onBypass }) => {
  const [showAdminModal, setShowAdminModal] = useState(false);
  const [showWarningPopup, setShowWarningPopup] = useState(true);
  const [passkeyInput, setPasskeyInput] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  React.useEffect(() => {
    const audioContextClass = window.AudioContext || (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!audioContextClass) return;

    const context = new audioContextClass();
    const playTone = (frequency: number, duration: number, volume: number, delay: number = 0) => {
      const oscillator = context.createOscillator();
      const gainNode = context.createGain();
      const startAt = context.currentTime + delay;

      oscillator.type = 'square';
      oscillator.frequency.setValueAtTime(frequency, startAt);
      gainNode.gain.setValueAtTime(0.0001, startAt);
      gainNode.gain.exponentialRampToValueAtTime(volume, startAt + 0.02);
      gainNode.gain.exponentialRampToValueAtTime(0.0001, startAt + duration);

      oscillator.connect(gainNode);
      gainNode.connect(context.destination);
      oscillator.start(startAt);
      oscillator.stop(startAt + duration + 0.05);
    };

    playTone(880, 0.24, 0.12, 0);
    playTone(660, 0.22, 0.12, 0.28);
    playTone(980, 0.3, 0.14, 0.56);
    playTone(640, 0.36, 0.13, 0.9);

    return () => {
      context.close().catch(() => undefined);
    };
  }, [showWarningPopup]);

  React.useEffect(() => {
    if (!showWarningPopup) {
      const reopenTimer = window.setTimeout(() => {
        setShowWarningPopup(true);
      }, 60000);

      return () => window.clearTimeout(reopenTimer);
    }

    const closeTimer = window.setTimeout(() => {
      setShowWarningPopup(false);
    }, 5000);

    return () => window.clearTimeout(closeTimer);
  }, [showWarningPopup]);

  const handleBypassSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (passkeyInput.trim().toLowerCase() === maintenanceConfig.bypassSecret.toLowerCase()) {
      localStorage.setItem('dov_maintenance_bypass', 'true');
      onBypass();
    } else {
      setErrorMsg('Invalid admin bypass passkey. Please try again.');
    }
  };

  return (
    <div className="min-h-screen overflow-hidden bg-[#070909] text-white selection:bg-red-500 selection:text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,0,0,0.12),_transparent_35%),radial-gradient(circle_at_top,_rgba(255,170,0,0.10),_transparent_30%),linear-gradient(180deg,#040506_0%,#090d12_42%,#100b0a_100%)]" />
      <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '36px 36px' }} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.35)_65%,_rgba(0,0,0,0.75)_100%)]" />

      <button
        onClick={() => setShowAdminModal(true)}
        className="absolute right-4 top-4 z-20 rounded-full border border-white/10 bg-black/30 p-2 text-slate-300 transition hover:border-red-500/80 hover:text-white"
        title="Admin Access"
      >
        <Lock className="h-4 w-4" />
      </button>

      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80"
          alt=""
          className="absolute left-6 top-20 h-36 w-24 rounded-2xl border border-red-500/40 object-cover opacity-30 blur-[1px] rotate-[-18deg] shadow-[0_0_30px_rgba(239,68,68,0.18)]"
        />
        <img
          src="https://images.unsplash.com/photo-1521313512318-4d9df0e2a7ab?auto=format&fit=crop&w=800&q=80"
          alt=""
          className="absolute right-6 top-24 h-36 w-24 rounded-2xl border border-red-500/40 object-cover opacity-30 blur-[1px] rotate-[18deg] shadow-[0_0_30px_rgba(239,68,68,0.18)]"
        />
        <img
          src="https://images.unsplash.com/photo-1511884642898-4c92249e20b6?auto=format&fit=crop&w=600&q=80"
          alt=""
          className="absolute bottom-14 left-12 h-20 w-20 rounded-full border border-yellow-500/40 object-cover opacity-35 shadow-[0_0_25px_rgba(251,191,36,0.2)]"
        />
        <img
          src="https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=600&q=80"
          alt=""
          className="absolute bottom-14 right-12 h-20 w-20 rounded-full border border-yellow-500/40 object-cover opacity-35 shadow-[0_0_25px_rgba(251,191,36,0.2)]"
        />
        <img
          src="https://images.unsplash.com/photo-1526304640588-6f4dce1f8212?auto=format&fit=crop&w=700&q=80"
          alt=""
          className="absolute bottom-10 left-1/2 h-24 w-24 -translate-x-1/2 rounded-full border border-red-500/40 object-cover opacity-35 shadow-[0_0_25px_rgba(239,68,68,0.2)]"
        />
      </div>

      <main className="relative z-10 mx-auto flex min-h-screen max-w-[1400px] items-center justify-center px-4 py-8 md:px-8">
        <div className="relative w-full max-w-[1180px] overflow-hidden rounded-[20px] border border-white/10 bg-[#0b0d0f]/80 px-4 py-6 shadow-[0_0_80px_rgba(0,0,0,0.85)] md:px-8 md:py-10">
          <div className="pointer-events-none absolute inset-0 opacity-80" style={{ background: 'linear-gradient(120deg, transparent 0 48%, rgba(255,255,255,0.03) 49%, transparent 52%)' }} />

          <div className="relative z-10">
            <div className="mb-4 flex items-center justify-center">
              <div className="flex items-center gap-2 rounded-md border border-red-500/40 bg-[#111111]/80 px-5 py-2 text-[10px] font-black uppercase tracking-[0.35em] text-red-300 shadow-[0_0_20px_rgba(239,68,68,0.45)]">
                <span className="inline-block h-3 w-3 rounded-full border border-red-400 bg-red-500" />
                <span>Warning</span>
              </div>
            </div>

            <div className="relative text-center">
              <div className="mb-2 text-[10px] font-black uppercase tracking-[0.65em] text-red-300/80 md:text-xs">This must be corrected today!</div>

              <h1
                className="select-none text-[4.2rem] font-black uppercase leading-[0.8] tracking-[-0.09em] text-white md:text-[8.5rem]"
                style={{
                  fontFamily: 'Impact, Haettenschweiler, "Arial Black", sans-serif',
                  textTransform: 'uppercase',
                  letterSpacing: '-0.09em',
                  textShadow: '0 8px 0 rgba(0,0,0,0.9), 0 0 24px rgba(255,255,255,0.1), 0 0 30px rgba(239,68,68,0.35)',
                  WebkitTextStroke: '2px rgba(255,255,255,0.14)',
                  filter: 'drop-shadow(0 0 18px rgba(239,68,68,0.55))'
                }}
              >
                <span className="block text-[#f8f2ec]">Fix This</span>
                <span className="block text-red-500" style={{ filter: 'drop-shadow(0 0 18px rgba(239,68,68,0.9))' }}>Right Now</span>
              </h1>

              <div className="mx-auto mt-3 inline-flex items-center justify-center rounded-md border border-[#f7d9a9] bg-[#f6d394] px-4 py-2 text-[0.7rem] font-black uppercase tracking-[0.18em] text-black shadow-[0_0_18px_rgba(246,211,148,0.7)] md:text-sm">
                This action cannot wait
              </div>
            </div>

            <div className="relative mx-auto mt-8 max-w-[960px]">
              <div className="absolute left-0 top-10 hidden h-52 w-28 -rotate-12 items-center justify-center rounded-[18px] border border-red-700/70 bg-[radial-gradient(circle_at_center,_rgba(255,0,0,0.15),_transparent_55%),rgba(0,0,0,0.75)] shadow-[0_0_30px_rgba(239,68,68,0.2)] md:flex">
                <span className="text-5xl font-black text-red-500">A</span>
              </div>
              <div className="absolute right-0 top-12 hidden h-52 w-28 rotate-12 items-center justify-center rounded-[18px] border border-red-700/70 bg-[radial-gradient(circle_at_center,_rgba(255,0,0,0.15),_transparent_55%),rgba(0,0,0,0.75)] shadow-[0_0_30px_rgba(239,68,68,0.2)] md:flex">
                <span className="text-5xl font-black text-red-500">A</span>
              </div>

              <div className="relative mx-auto h-[420px] w-[420px] max-w-[75vw]">
                <div className="absolute inset-x-10 top-5 h-[120px] rounded-full bg-[radial-gradient(circle_at_50%_20%,rgba(255,142,0,0.45),transparent_50%)] blur-2xl" />
                <div className="absolute inset-x-12 bottom-4 h-24 rounded-full bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.08),transparent_70%)] blur-xl" />

                <div className="absolute left-1/2 top-0 h-20 w-20 -translate-x-1/2 rounded-full border-[8px] border-[#f9d59a] bg-[#16191c] shadow-[0_0_25px_rgba(246,211,148,0.25)]" />
                <div className="absolute left-1/2 top-[2.9rem] h-[160px] w-[190px] -translate-x-1/2 rounded-[60%_60%_48%_48%/55%_55%_45%_45%] border-[10px] border-[#f7d9a9] bg-[linear-gradient(180deg,#3d0d18_0%,#1b1b1b_16%,#1f1d1d_42%,#2a1d1d_100%)] shadow-[inset_0_0_20px_rgba(0,0,0,0.7)]" />

                <div className="absolute left-1/2 top-[6.7rem] h-16 w-28 -translate-x-1/2 rounded-[40%] border-[7px] border-[#f7d9a9] bg-[#f4c8a9]" />
                <div className="absolute left-1/2 top-[7.2rem] h-7 w-20 -translate-x-1/2 rounded-full bg-[#2d1b12]" />
                <div className="absolute left-[38%] top-[6.9rem] h-3.5 w-3.5 rounded-full bg-[#0f0f0f] shadow-[0_0_0_5px_rgba(255,255,255,0.15)]" />
                <div className="absolute right-[38%] top-[6.9rem] h-3.5 w-3.5 rounded-full bg-[#0f0f0f] shadow-[0_0_0_5px_rgba(255,255,255,0.15)]" />
                <div className="absolute left-1/2 top-[8.8rem] h-10 w-24 -translate-x-1/2 rounded-b-[60%] border-[6px] border-[#f7d9a9] bg-[#5a1f2a]" />
                <div className="absolute left-1/2 top-[8.8rem] h-5 w-14 -translate-x-1/2 rounded-full bg-[#1c0d10]" />
                <div className="absolute left-1/2 top-[12.2rem] h-7 w-7 -translate-x-1/2 rounded-full bg-[#f8e1bf]" />
                <div className="absolute left-[28%] top-[11rem] h-9 w-3 rotate-[-18deg] rounded-full bg-[#f7d9a9]" />
                <div className="absolute right-[28%] top-[11rem] h-9 w-3 rotate-[18deg] rounded-full bg-[#f7d9a9]" />

                <div className="absolute left-1/2 top-[11.5rem] h-28 w-52 -translate-x-1/2 rounded-[40%] bg-[linear-gradient(180deg,#d9dbde_0%,#7b7e82_30%,#1e1e1e_100%)] opacity-90 blur-[1px]" />
                <div className="absolute left-1/2 top-[11.9rem] h-24 w-40 -translate-x-1/2 rounded-[40%] border-[5px] border-[#d8d9dc] bg-[#ffe7ce]/20" />

                <div className="absolute left-1/2 top-[19.5rem] h-14 w-28 -translate-x-1/2 rounded-full bg-[#3e2d2c]" />
                <div className="absolute left-[31%] top-[19rem] h-12 w-5 rounded-full bg-[#d9d9d9]" />
                <div className="absolute right-[31%] top-[19rem] h-12 w-5 rounded-full bg-[#d9d9d9]" />
                <div className="absolute left-[27%] top-[19rem] h-20 w-8 -rotate-[25deg] rounded-full bg-[#d9d9d9]" />
                <div className="absolute right-[27%] top-[19rem] h-20 w-8 rotate-[25deg] rounded-full bg-[#d9d9d9]" />
                <div className="absolute left-[34%] top-[19.8rem] h-20 w-6 rotate-[26deg] rounded-full bg-[#1d1d1d]" />
                <div className="absolute right-[34%] top-[19.8rem] h-20 w-6 -rotate-[26deg] rounded-full bg-[#1d1d1d]" />

                <div className="absolute left-1/2 top-[13.5rem] h-32 w-32 -translate-x-1/2 rounded-full border-[2px] border-[#d7d6d6]/80 bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.18),transparent_35%),linear-gradient(135deg,#350b11,#100d0e_40%,#1d1215)] opacity-90" />
                <div className="absolute left-1/2 top-[13.7rem] h-28 w-28 -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.16),transparent_25%),linear-gradient(135deg,#130909,#0d0d0e)]" />

                <div className="absolute left-1/2 top-[20.8rem] h-20 w-[300px] -translate-x-1/2 rounded-[30px] border border-[#c0ab80]/60 bg-[linear-gradient(180deg,#7d4f2a_0%,#2e221d_45%,#100d11_100%)] shadow-[0_0_35px_rgba(0,0,0,0.5)]" />
                <div className="absolute left-1/2 top-[21.5rem] h-8 w-16 -translate-x-1/2 rounded-full bg-[#251e1d]" />

                <div className="absolute left-1/2 top-[24rem] h-12 w-[6px] -translate-x-1/2 rounded-full bg-[#d4bd8d]" />
                <div className="absolute left-1/2 top-[24.2rem] h-16 w-16 -translate-x-1/2 rounded-full border-[8px] border-[#d4bd8d] bg-[#0b0b0b]" />
                <div className="absolute left-1/2 top-[24.7rem] h-8 w-8 -translate-x-1/2 rounded-full bg-[#d7bd89]" />
              </div>
            </div>

            <div className="relative mt-8 flex flex-col items-center justify-center gap-3 md:flex-row">
              <div className="flex w-full max-w-[280px] items-center justify-center rounded-lg border border-red-500/40 bg-[#111111]/90 px-4 py-3 text-center">
                <div className="mr-3 flex h-9 w-9 items-center justify-center rounded-full border border-red-400 bg-red-500/15 text-red-200">!</div>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-[0.2em] text-red-300">No guarantee</div>
                </div>
              </div>

              <div className="flex w-full max-w-[280px] items-center justify-center rounded-lg border border-red-500/40 bg-[#111111]/90 px-4 py-3 text-center">
                <div className="mr-3 flex h-9 w-9 items-center justify-center rounded-full border border-red-400 bg-red-500/15 text-red-200">!</div>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-[0.2em] text-red-300">Josses today</div>
                </div>
              </div>

              <div className="flex w-full max-w-[280px] items-center justify-center rounded-lg border border-red-500/40 bg-[#111111]/90 px-4 py-3 text-center">
                <div className="mr-3 flex h-9 w-9 items-center justify-center rounded-full border border-red-400 bg-red-500/15 text-red-200">!</div>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-[0.2em] text-red-300">Luck is temporary</div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex items-center justify-center gap-4 text-center text-[#f4d7a8]">
              <div className="inline-flex items-center gap-2 rounded-full border border-yellow-500/40 bg-[#1a120d] px-4 py-2 text-xs font-black uppercase tracking-[0.25em]">
                <span className="text-red-400">!</span>
                {maintenanceConfig.estimatedCompletion}
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-yellow-500/40 bg-[#1a120d] px-4 py-2 text-xs font-black uppercase tracking-[0.25em]">
                <span className="text-red-400">!</span>
                {maintenanceConfig.expectedDuration}
              </div>
            </div>
          </div>
        </div>
      </main>

      {showWarningPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-lg rounded-[22px] border border-red-500/50 bg-[#0b0d10] p-6 text-center shadow-[0_0_35px_rgba(239,68,68,0.5)]">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-500/50 bg-red-500/10 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.35em] text-red-300">
              <span className="inline-flex h-2.5 w-2.5 rounded-full bg-red-500" />
              Critical alert
            </div>

            <h2 className="text-4xl font-black uppercase leading-none tracking-[-0.08em] text-white md:text-6xl" style={{ fontFamily: 'Impact, Haettenschweiler, "Arial Black", sans-serif', textShadow: '0 6px 0 rgba(0,0,0,0.8), 0 0 22px rgba(239,68,68,0.35)', WebkitTextStroke: '1.5px rgba(255,255,255,0.12)' }}>
              <span className="block text-red-500">Warning</span>
              <span className="block text-white">Alert</span>
            </h2>

            <p className="mt-5 text-base text-slate-200 md:text-lg">
              This page is in a critical state and must be corrected before the situation escalates further.
            </p>

            <div className="mt-6 rounded-xl border border-yellow-500/40 bg-yellow-500/10 px-4 py-3 text-sm font-bold uppercase tracking-[0.2em] text-yellow-200">
              Risk level: Critical
            </div>

            <div className="mt-6 flex justify-center gap-3">
              <button
                onClick={() => setShowWarningPopup(false)}
                className="rounded-xl bg-red-500 px-6 py-3 text-sm font-black uppercase tracking-[0.18em] text-white transition hover:bg-red-400"
              >
                Acknowledge
              </button>
            </div>
          </div>
        </div>
      )}

      {showAdminModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-md">
          <div className="relative w-full max-w-md rounded-2xl border border-white/10 bg-slate-900 p-6 shadow-2xl">
            <button
              onClick={() => {
                setShowAdminModal(false);
                setErrorMsg('');
              }}
              className="absolute right-4 top-4 rounded-lg p-1 text-slate-400 hover:bg-slate-800 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/10 text-red-300">
                <Key className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Admin Access</h3>
                <p className="text-xs text-slate-400">Enter the bypass passkey to reveal the real site</p>
              </div>
            </div>

            <form onSubmit={handleBypassSubmit} className="space-y-4">
              <div>
                <label className="mb-1 block text-xs font-bold uppercase tracking-[0.2em] text-slate-400">Passkey</label>
                <input
                  type="password"
                  value={passkeyInput}
                  onChange={(e) => {
                    setPasskeyInput(e.target.value);
                    setErrorMsg('');
                  }}
                  placeholder="Enter bypass key..."
                  className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white placeholder:text-slate-500 focus:border-red-500 focus:outline-none"
                  autoFocus
                />
                {errorMsg && (
                  <p className="mt-2 flex items-center gap-2 text-xs text-red-400">
                    <AlertCircle className="h-3.5 w-3.5" />
                    <span>{errorMsg}</span>
                  </p>
                )}
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAdminModal(false)}
                  className="rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-300 transition hover:bg-slate-800 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-xl bg-red-500 px-5 py-2.5 text-sm font-black uppercase tracking-[0.15em] text-white transition hover:bg-red-400"
                >
                  Unlock
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
