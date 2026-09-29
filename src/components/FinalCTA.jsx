import React from 'react';
import { Download, ArrowRight, Sparkles, Smartphone, Shield, CheckCircle } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section id="download" className="py-16 sm:py-24 bg-[#0a0a0a] relative cyber-bg-cyan">
      <div className="site-container relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141414] border border-[#00ff41]/40">
            <Sparkles className="w-3.5 h-3.5 text-[#00ff41] animate-spin" />
            <span className="font-mono text-[11px] text-[#00ff41] font-bold tracking-widest uppercase">
              THE NEXT STEP
            </span>
          </div>

          <div className="space-y-2">
            <h2 className="text-3xl sm:text-5xl font-bold font-mono text-white tracking-tight leading-none">
              Your audience is out there.
            </h2>
            <p className="text-xl sm:text-2xl font-mono text-[#00ff41] glow-text-green font-semibold">
              It's time to build your presence.
            </p>
          </div>

          <p className="text-xs sm:text-base text-[#888888] max-w-lg mx-auto leading-relaxed">
            Download Social Fox and explore the platform built to help creators, businesses and social-media users take their social presence seriously.
          </p>

          {/* Action Card Box */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#141414] border border-[#222222] max-w-xl mx-auto space-y-5">
            <div className="flex items-center justify-center gap-1.5 text-xs font-mono text-[#ffcc00]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Get up to ₹100 joining bonus on registration</span>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a 
                href="#join"
                className="btn-primary w-full sm:w-auto !py-3.5 !px-6 text-xs sm:text-sm font-mono font-bold"
              >
                <span>JOIN SOCIAL FOX</span>
                <ArrowRight className="w-4 h-4 text-black" />
              </a>

              <a 
                href="/social_fox.apk" 
                download
                className="btn-outline w-full sm:w-auto !py-3.5 !px-6 text-xs sm:text-sm font-mono font-bold"
              >
                <Download className="w-4 h-4 text-[#00f5ff]" />
                <span>DOWNLOAD FOR ANDROID</span>
              </a>
            </div>

            <div className="pt-1 flex flex-wrap items-center justify-center gap-4 text-[11px] font-mono text-[#888888]">
              <span className="flex items-center gap-1">
                <Smartphone className="w-3.5 h-3.5 text-[#00ff41]" /> APK Direct Download
              </span>
              <span className="flex items-center gap-1">
                <Shield className="w-3.5 h-3.5 text-[#00f5ff]" /> Signed & Secure
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle className="w-3.5 h-3.5 text-[#ffcc00]" /> Android 8.0+
              </span>
            </div>
          </div>

          {/* Brand Signature Ending */}
          <div className="pt-10 border-t border-[#1c1c1c] max-w-md mx-auto space-y-1">
            <div className="font-mono text-2xl font-bold tracking-wider text-white">
              SOCIAL<span className="text-[#00ff41] glow-text-green">FOX</span>
            </div>
            <p className="font-mono text-xs tracking-widest text-[#888888] uppercase">
              The other side of social media.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
