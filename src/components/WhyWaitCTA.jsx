import React from 'react';
import { ArrowRight, Radio } from 'lucide-react';

export default function WhyWaitCTA() {
  return (
    <section className="py-16 sm:py-24 bg-[#0a0a0a] relative cyber-bg overflow-hidden border-b border-[#222222]">
      <div className="site-container relative z-10">
        <div className="max-w-3xl mx-auto p-6 sm:p-12 rounded-3xl bg-[#141414] border-2 border-[#00ff41]/50 shadow-[0_0_40px_rgba(0,255,65,0.15)] text-center space-y-6 relative">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0a0a0a] border border-[#00ff41]/40">
            <Radio className="w-3.5 h-3.5 text-[#00ff41] animate-pulse" />
            <span className="font-mono text-[11px] text-[#00ff41] font-bold tracking-widest uppercase">
              THE CONVERSION MOMENT
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold font-mono text-white tracking-tight leading-tight">
            How long are you going to <br />
            <span className="text-[#00ff41] glow-text-green">post into an empty room?</span>
          </h2>

          <div className="space-y-1.5 text-xs sm:text-lg text-[#f0f0f0]/90 max-w-lg mx-auto font-normal leading-relaxed">
            <p className="text-[#888888]">You already create.</p>
            <p className="text-[#888888]">You already post.</p>
            <p className="text-[#888888]">You spend time thinking about captions, thumbnails, and videos.</p>
            <p className="text-white font-mono font-bold text-sm sm:text-xl pt-2 text-[#00ff41]">
              Now give your social presence the tools to move.
            </p>
          </div>

          <div className="pt-2 flex justify-center">
            <a 
              href="#join"
              className="btn-primary !py-3.5 !px-8 text-xs sm:text-sm font-mono font-bold w-full sm:w-auto"
            >
              <span>START WITH SOCIAL FOX</span>
              <ArrowRight className="w-4 h-4 text-black" />
            </a>
          </div>

          <p className="text-[10px] font-mono text-[#888888] pt-1">
            Includes up to ₹100 Welcome Bonus for new account sign-ups.
          </p>

        </div>
      </div>
    </section>
  );
}
