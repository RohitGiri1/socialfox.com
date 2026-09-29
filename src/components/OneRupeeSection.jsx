import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Camera, PlaySquare, Zap, Info } from 'lucide-react';
import { oneRupeeValue } from '../data/servicesData';

export default function OneRupeeSection() {
  const [activeTab, setActiveTab] = useState('instagram');

  return (
    <section id="value" className="py-16 sm:py-24 bg-[#0a0a0a] relative border-y border-[#222222] cyber-bg-cyan">
      <div className="site-container relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141414] border border-[#ffcc00]/40">
            <Zap className="w-3.5 h-3.5 text-[#ffcc00]" />
            <span className="font-mono text-[11px] text-[#ffcc00] font-semibold tracking-wider uppercase">
              THE ₹1 VALUE ARCHITECTURE
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold font-mono text-white leading-tight">
            What can <span className="text-[#ffcc00] glow-text-yellow">₹1</span> really do today?
          </h2>

          <div className="space-y-1.5 text-xs sm:text-base text-[#f0f0f0]/90 max-w-lg mx-auto font-normal">
            <p className="text-[#888888] italic">"Think about the last thing you bought for ₹1."</p>
            <p className="text-[#888888]">Probably nothing memorable.</p>
            <p className="text-white font-medium text-sm sm:text-lg pt-1">
              But inside Social Fox, even <span className="text-[#00ff41] font-mono font-bold">₹1</span> can start moving your social presence.
            </p>
          </div>
        </div>

        {/* 3-Step Horizontal Flow Diagram */}
        <div className="my-10 max-w-3xl mx-auto p-5 sm:p-7 rounded-2xl bg-[#141414] border border-[#222222] shadow-xl">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center text-center">
            
            <div className="p-3.5 rounded-xl bg-[#0a0a0a] border border-[#222222] space-y-1">
              <span className="text-2xl font-mono font-bold text-[#ffcc00] block">₹1.00</span>
              <span className="text-[11px] font-mono text-[#888888] block">Minimal Investment</span>
            </div>

            <div className="p-3.5 rounded-xl bg-[#0a0a0a] border border-[#00ff41]/40 space-y-1">
              <div className="flex items-center justify-center gap-1.5">
                <img src="/fox-icon.svg" alt="Social Fox" className="w-5 h-5 object-contain" />
                <span className="font-mono text-xs font-bold text-white">SOCIAL FOX</span>
              </div>
              <span className="text-[11px] font-mono text-[#00ff41] block">Automated Engine</span>
            </div>

            <div className="p-3.5 rounded-xl bg-[#0a0a0a] border border-[#00f5ff]/40 space-y-1">
              <span className="text-base font-mono font-bold text-white block">Thousands of Signals</span>
              <span className="text-[11px] font-mono text-[#00f5ff] block">Views, Likes & Reach</span>
            </div>

          </div>
        </div>

        {/* Platform Selection Tabs */}
        <div className="flex justify-center gap-2.5 mb-6">
          <button
            onClick={() => setActiveTab('instagram')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'instagram'
                ? 'bg-pink-500/10 border border-pink-500 text-pink-400 shadow-[0_0_15px_rgba(236,72,153,0.2)]'
                : 'bg-[#141414] border border-[#222222] text-[#888888] hover:text-white'
            }`}
          >
            <Camera className="w-4 h-4" />
            <span>INSTAGRAM ESTIMATES</span>
          </button>

          <button
            onClick={() => setActiveTab('youtube')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'youtube'
                ? 'bg-red-500/10 border border-red-500 text-red-400 shadow-[0_0_15px_rgba(239,68,68,0.2)]'
                : 'bg-[#141414] border border-[#222222] text-[#888888] hover:text-white'
            }`}
          >
            <PlaySquare className="w-4 h-4" />
            <span>YOUTUBE ESTIMATES</span>
          </button>
        </div>

        {/* Example Estimates Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5 max-w-4xl mx-auto">
          {oneRupeeValue[activeTab].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="cyber-card p-4 flex flex-col justify-between space-y-3"
            >
              <div className="space-y-0.5">
                <span className="text-[10px] font-mono text-[#888888] uppercase tracking-wider block">
                  {item.metric}
                </span>
                <span className="text-lg sm:text-xl font-mono font-bold text-white block">
                  {item.quantity}
                </span>
              </div>

              <div className="pt-2 border-t border-[#222222] flex items-center justify-between text-[10px] font-mono text-[#00f5ff]">
                <span>{item.label}</span>
                <span className="px-1.5 py-0.5 rounded bg-[#222] text-[#888888]">₹1</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer Note */}
        <div className="mt-8 max-w-xl mx-auto text-center space-y-1">
          <div className="inline-flex items-center gap-1.5 text-[11px] font-mono text-[#888888]">
            <Info className="w-3.5 h-3.5 text-[#00f5ff]" />
            <span>Example availability & baseline rates starting from standard API provider pipelines.</span>
          </div>
          <p className="text-[10px] text-[#555555]">
            *Prices and available quantities adapt dynamically in the app based on service updates.
          </p>
        </div>

      </div>
    </section>
  );
}
