import React from 'react';
import { motion } from 'framer-motion';
import { 
  Upload, 
  Clock, 
  HelpCircle, 
  Sparkles, 
  TrendingUp, 
  CheckCircle, 
  Zap 
} from 'lucide-react';

export default function GrowthStory() {
  const steps = [
    {
      number: '01',
      badge: 'THE INITIATION',
      title: 'You post.',
      description: 'You craft the video, edit the script, and perfect the thumbnail. You press upload with high expectations.',
      accentColor: '#888888',
      visual: (
        <div className="p-3.5 rounded-xl bg-[#0a0a0a] border border-[#222222] space-y-2 font-mono text-xs">
          <div className="flex justify-between items-center text-white">
            <span className="flex items-center gap-1.5 text-[11px]">
              <Upload className="w-3.5 h-3.5 text-[#888888]" /> Video_final.mp4
            </span>
            <span className="text-emerald-400 text-[10px]">Published</span>
          </div>
          <div className="w-full bg-[#181818] h-1.5 rounded-full overflow-hidden">
            <div className="bg-[#555] h-full w-full" />
          </div>
        </div>
      )
    },
    {
      number: '02',
      badge: 'THE SILENCE',
      title: 'You wait.',
      description: 'Hours pass. You refresh your feed. 12 views, 3 likes, zero shares. The algorithm seems completely unresponsive.',
      accentColor: '#ff003c',
      visual: (
        <div className="p-3.5 rounded-xl bg-[#0a0a0a] border border-[#ff003c]/30 space-y-2 font-mono text-xs">
          <div className="flex justify-between items-center text-[#ff003c] text-[11px]">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" /> Reach Velocity
            </span>
            <span className="font-bold">LOW</span>
          </div>
          <div className="grid grid-cols-3 gap-1.5 text-center text-white">
            <div className="p-1.5 rounded bg-[#141414] border border-[#222]">
              <span className="block text-[9px] text-[#555]">Views</span>
              <span className="font-bold text-xs text-[#ff003c]">14</span>
            </div>
            <div className="p-1.5 rounded bg-[#141414] border border-[#222]">
              <span className="block text-[9px] text-[#555]">Likes</span>
              <span className="font-bold text-xs text-[#ff003c]">3</span>
            </div>
            <div className="p-1.5 rounded bg-[#141414] border border-[#222]">
              <span className="block text-[9px] text-[#555]">Shares</span>
              <span className="font-bold text-xs text-[#ff003c]">0</span>
            </div>
          </div>
        </div>
      )
    },
    {
      number: '03',
      badge: 'THE FRUSTRATION',
      title: 'You wonder.',
      description: '"Why is nobody seeing this? Is my content bad?" You see lower quality posts going viral while yours stays buried.',
      accentColor: '#ffcc00',
      visual: (
        <div className="p-3.5 rounded-xl bg-[#0a0a0a] border border-[#ffcc00]/30 space-y-1.5">
          <div className="flex items-center gap-1.5 text-[#ffcc00] font-mono text-[11px]">
            <HelpCircle className="w-3.5 h-3.5" /> Internal Question
          </div>
          <p className="text-[11px] text-[#f0f0f0] italic font-mono bg-[#141414] p-2.5 rounded-lg border border-[#222]">
            "My content is good... so why is the algorithm refusing to push it?"
          </p>
        </div>
      )
    },
    {
      number: '04',
      badge: 'THE PIVOT',
      title: 'Then you discover the other side.',
      description: 'You realize great content alone is only half the formula. Creators use strategic distribution tools to jumpstart initial velocity.',
      accentColor: '#00f5ff',
      visual: (
        <div className="p-3.5 rounded-xl bg-[#0a0a0a] border border-[#00f5ff]/50 space-y-2 font-mono text-xs">
          <div className="flex justify-between items-center text-[#00f5ff] text-[11px]">
            <span className="flex items-center gap-1.5 font-bold">
              <Sparkles className="w-3.5 h-3.5" /> SOCIAL FOX CONNECTED
            </span>
            <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#00f5ff]/10 text-[#00f5ff]">READY</span>
          </div>
          <div className="p-2 rounded bg-[#141414] border border-[#00f5ff]/30 text-white flex items-center justify-between text-[11px]">
            <span>Reel Distribution Engine</span>
            <span className="text-[#00ff41]">Active</span>
          </div>
        </div>
      )
    },
    {
      number: '05',
      badge: 'THE VELOCITY',
      title: 'You start building momentum.',
      description: 'Signals start flowing in within minutes. Views, likes, and subscribers begin compound growth.',
      accentColor: '#00ff41',
      visual: (
        <div className="p-3.5 rounded-xl bg-[#0a0a0a] border border-[#00ff41]/50 space-y-2 font-mono text-xs shadow-md">
          <div className="flex justify-between items-center text-[#00ff41] text-[11px]">
            <span className="flex items-center gap-1.5 font-bold">
              <TrendingUp className="w-3.5 h-3.5" /> MOMENTUM ENGINE
            </span>
            <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#00ff41]/20 text-[#00ff41] font-bold">IN-PROGRESS</span>
          </div>
          <div className="grid grid-cols-3 gap-1.5 text-center text-white">
            <div className="p-1.5 rounded bg-[#141414] border border-[#00ff41]/30">
              <span className="block text-[9px] text-[#888888]">Views</span>
              <span className="font-bold text-xs text-[#00ff41]">+5,200</span>
            </div>
            <div className="p-1.5 rounded bg-[#141414] border border-[#00ff41]/30">
              <span className="block text-[9px] text-[#888888]">Likes</span>
              <span className="font-bold text-xs text-[#00ff41]">+640</span>
            </div>
            <div className="p-1.5 rounded bg-[#141414] border border-[#00ff41]/30">
              <span className="block text-[9px] text-[#888888]">Subs</span>
              <span className="font-bold text-xs text-[#00f5ff]">+120</span>
            </div>
          </div>
        </div>
      )
    },
    {
      number: '06',
      badge: 'THE IMPACT',
      title: 'Now people notice.',
      description: 'The social proof kicks in. Organic viewers stop scrolling because your numbers demand attention.',
      accentColor: '#00ff41',
      visual: (
        <div className="p-3.5 rounded-xl bg-[#141414] border border-[#00ff41] space-y-2 font-mono text-xs">
          <div className="flex justify-between items-center text-white text-[11px]">
            <span className="flex items-center gap-1.5 font-bold text-[#00ff41]">
              <CheckCircle className="w-3.5 h-3.5" /> ESTABLISHED PRESENCE
            </span>
            <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#00ff41] text-black font-bold">VERIFIED</span>
          </div>
          <p className="text-white font-mono text-[11px]">
            "Your audience is finally seeing what you created."
          </p>
        </div>
      )
    }
  ];

  return (
    <section id="story" className="py-16 sm:py-24 bg-[#0a0a0a] relative cyber-bg border-b border-[#222222]">
      <div className="site-container relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141414] border border-[#00ff41]/40">
            <Zap className="w-3.5 h-3.5 text-[#00ff41]" />
            <span className="font-mono text-[11px] text-[#00ff41] font-semibold tracking-wider uppercase">
              THE CREATOR JOURNEY
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold font-mono text-white tracking-tight">
            How Social Momentum <span className="text-[#00ff41] glow-text-green">Happens.</span>
          </h2>
          <p className="text-xs sm:text-base text-[#888888] font-normal">
            Every creator goes through these six stages. Which stage are you in right now?
          </p>
        </div>

        {/* Story Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="cyber-card p-5 flex flex-col justify-between space-y-4 relative"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#121212] border border-[#222] text-[#888888]">
                    STAGE {step.number}
                  </span>
                  <span 
                    className="font-mono text-[9.5px] uppercase font-bold tracking-wider"
                    style={{ color: step.accentColor }}
                  >
                    {step.badge}
                  </span>
                </div>

                <h3 className="text-lg font-mono font-bold text-white">
                  {step.title}
                </h3>

                <p className="text-xs text-[#888888] leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div>
                {step.visual}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Punchline Banner */}
        <div className="mt-12 sm:mt-16 max-w-3xl mx-auto p-6 sm:p-10 rounded-2xl bg-[#141414] border-2 border-[#00ff41] text-center space-y-4 shadow-[0_0_30px_rgba(0,255,65,0.15)]">
          <h3 className="text-xl sm:text-3xl font-mono font-bold text-white leading-snug">
            Your content was never the only thing that mattered. <br />
            <span className="text-[#00ff41] glow-text-green">Distribution matters too.</span>
          </h3>

          <p className="text-xs sm:text-sm text-[#888888] max-w-lg mx-auto">
            Give your videos and profile the baseline momentum required to trigger organic discovery algorithms.
          </p>

          <div className="pt-1">
            <a href="#join" className="btn-primary text-xs sm:text-sm !py-3 !px-6">
              START BUILDING MOMENTUM WITH SOCIAL FOX
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
