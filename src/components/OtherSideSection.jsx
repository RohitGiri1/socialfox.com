import React from 'react';
import { motion } from 'framer-motion';
import { Lock, Cpu, Layers, RefreshCw, Sparkles } from 'lucide-react';

export default function OtherSideSection() {
  return (
    <section className="py-16 sm:py-24 bg-[#0a0a0a] relative border-b border-[#222222]">
      <div className="site-container relative z-10">
        <div className="max-w-4xl mx-auto space-y-10 text-center">
          
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141414] border border-[#00ff41]/40">
            <Lock className="w-3.5 h-3.5 text-[#00ff41]" />
            <span className="font-mono text-[11px] text-[#00ff41] tracking-widest uppercase">
              BEHIND THE CURTAIN
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold font-mono text-white tracking-tight leading-tight">
            Welcome to the <br />
            <span className="text-[#00ff41] glow-text-green">other side of social media.</span>
          </h2>

          {/* Contrast Grid: Surface vs Engine */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-left my-8">
            
            {/* Surface Card */}
            <div className="p-5 sm:p-7 rounded-2xl bg-[#121212] border border-[#222222] space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] text-[#888888] uppercase tracking-wider">
                  SURFACE LEVEL
                </span>
                <span className="w-2 h-2 rounded-full bg-red-500" />
              </div>

              <h3 className="text-lg font-mono font-bold text-white">
                What Most People See
              </h3>

              <div className="space-y-2 font-mono text-xs text-[#888888]">
                <div className="p-2.5 rounded-lg bg-[#181818] border border-[#222] flex items-center justify-between">
                  <span>10,000 Followers</span>
                  <span className="text-[10px] text-[#555]">Visible</span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#181818] border border-[#222] flex items-center justify-between">
                  <span>100,000 Views</span>
                  <span className="text-[10px] text-[#555]">Visible</span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#181818] border border-[#222] flex items-center justify-between">
                  <span>Thousands of Likes</span>
                  <span className="text-[10px] text-[#555]">Visible</span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#181818] border border-[#222] flex items-center justify-between">
                  <span>Subscriber Count</span>
                  <span className="text-[10px] text-[#555]">Visible</span>
                </div>
              </div>

              <p className="text-[11px] text-[#555555] italic pt-1">
                "They think it happened purely by luck."
              </p>
            </div>

            {/* Engine Room Card */}
            <div className="p-5 sm:p-7 rounded-2xl bg-[#141414] border border-[#00ff41]/40 shadow-[0_0_20px_rgba(0,255,65,0.08)] space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] text-[#00ff41] uppercase tracking-wider">
                  THE ENGINE ROOM
                </span>
                <span className="w-2 h-2 rounded-full bg-[#00ff41] animate-ping" />
              </div>

              <h3 className="text-lg font-mono font-bold text-white">
                What Actually Happens
              </h3>

              <div className="space-y-2 font-mono text-xs">
                <div className="p-2.5 rounded-lg bg-[#0a0a0a] border border-[#00ff41]/30 text-white flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <Cpu className="w-3.5 h-3.5 text-[#00ff41]" /> Strategic Growth Tools
                  </span>
                  <span className="text-[10px] text-[#00ff41]">Active</span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#0a0a0a] border border-[#00ff41]/30 text-white flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <Layers className="w-3.5 h-3.5 text-[#00f5ff]" /> Distribution Networks
                  </span>
                  <span className="text-[10px] text-[#00f5ff]">Automated</span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#0a0a0a] border border-[#00ff41]/30 text-white flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <RefreshCw className="w-3.5 h-3.5 text-[#ffcc00]" /> Signal Velocity
                  </span>
                  <span className="text-[10px] text-[#ffcc00]">Optimal</span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#0a0a0a] border border-[#00ff41]/30 text-white flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-[#00ff41]" /> Social Proof Acceleration
                  </span>
                  <span className="text-[10px] text-[#00ff41]">Social Fox</span>
                </div>
              </div>

              <p className="text-[11px] text-[#00ff41] font-mono pt-1">
                Social Fox puts powerful social-growth tools in one place for creators.
              </p>
            </div>

          </div>

          <p className="text-xs sm:text-base text-[#f0f0f0] max-w-xl mx-auto font-normal leading-relaxed">
            They don't see the strategy, consistency, distribution and tools working behind the scenes. <br className="hidden sm:block" />
            <span className="text-[#00ff41] font-mono font-semibold">Now you have access to the exact same toolkit.</span>
          </p>

        </div>
      </div>
    </section>
  );
}
