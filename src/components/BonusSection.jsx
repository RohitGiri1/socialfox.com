import React from 'react';
import { motion } from 'framer-motion';
import { Wallet, ArrowRight, Gift, Coins, CheckCircle2 } from 'lucide-react';

export default function BonusSection() {
  return (
    <section id="join" className="py-16 sm:py-24 bg-[#0a0a0a] relative border-b border-[#222222]">
      <div className="site-container relative z-10">
        <div className="max-w-4xl mx-auto p-6 sm:p-12 rounded-3xl bg-[#141414] border-2 border-[#ffcc00]/50 shadow-[0_0_40px_rgba(255,204,0,0.12)] relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-8 space-y-4 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0a0a0a] border border-[#ffcc00]/50">
                <Gift className="w-3.5 h-3.5 text-[#ffcc00]" />
                <span className="font-mono text-[11px] text-[#ffcc00] font-bold tracking-wider uppercase">
                  NEW USER PROMOTION
                </span>
              </div>

              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold font-mono text-white tracking-tight">
                Start with a <br />
                <span className="text-[#ffcc00] glow-text-yellow">little extra.</span>
              </h2>

              <p className="text-xs sm:text-base text-[#f0f0f0]/90 font-normal leading-relaxed">
                Join Social Fox today and receive up to <span className="text-[#ffcc00] font-mono font-bold">₹100</span> in joining bonus credited directly to your in-app wallet upon registration.
              </p>

              <div className="space-y-1.5 pt-1 text-xs font-mono text-[#888888] flex flex-col items-center lg:items-start">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00ff41]" />
                  <span>Instant wallet activation upon sign up</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00ff41]" />
                  <span>Usable immediately across all services</span>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
                <a 
                  href="#download"
                  className="btn-primary !bg-[#ffcc00] !text-black hover:!bg-[#ffe066] shadow-[0_0_20px_rgba(255,204,0,0.3)] text-xs sm:text-sm !py-3 !px-7 font-mono font-bold w-full sm:w-auto"
                >
                  <Coins className="w-4 h-4 text-black" />
                  <span>CLAIM MY BONUS</span>
                  <ArrowRight className="w-4 h-4 text-black" />
                </a>
              </div>

              <p className="text-[10px] text-[#555555] font-mono pt-1">
                *Bonus terms & conditions apply. Promotional credits are non-transferable.
              </p>
            </div>

            {/* Right Column: Wallet Graphic */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-2xl bg-[#0a0a0a] border border-[#ffcc00]/40 p-4 flex flex-col items-center justify-center text-center space-y-2 shadow-[0_0_25px_rgba(255,204,0,0.15)]">
                <div className="w-12 h-12 rounded-xl bg-[#ffcc00]/20 border border-[#ffcc00] flex items-center justify-center">
                  <Wallet className="w-6 h-6 text-[#ffcc00]" />
                </div>
                <div className="font-mono text-xl sm:text-2xl font-bold text-[#ffcc00] glow-text-yellow">
                  +₹100
                </div>
                <span className="font-mono text-[9px] text-[#888888] uppercase">
                  WELCOME BONUS
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
