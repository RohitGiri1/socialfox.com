import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  ArrowRight, 
  Download, 
  Eye, 
  Heart, 
  TrendingUp, 
  ShieldCheck, 
  Wallet,
  Users,
  PlaySquare,
  Zap,
  CheckCircle2
} from 'lucide-react';

export default function Hero() {
  const quickPrices = [
    { platform: 'Instagram Views', rate: '₹0.20 / 1k', icon: '📸', highlight: true },
    { platform: 'YouTube Subs', rate: '₹0.83 / 1k', icon: '📺', highlight: false },
    { platform: 'Instagram Likes', rate: '₹7.00 / 1k', icon: '❤️', highlight: false },
    { platform: 'Telegram Members', rate: '₹18.00 / 1k', icon: '✈️', highlight: false },
  ];

  return (
    <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-24 cyber-bg overflow-hidden">
      
      {/* Background Radial Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-80 bg-[#00ff41]/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="site-container relative z-10">
        
        {/* World's Lowest Price Ticker Bar */}
        <div className="mb-6 py-2 px-4 rounded-xl bg-[#141414] border border-[#00ff41]/40 flex items-center justify-between text-xs font-mono max-w-3xl mx-auto shadow-md">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-0.5">
            <span className="px-2 py-0.5 rounded bg-[#00ff41] text-black font-bold uppercase shrink-0 text-[10px]">
              LOWEST PRICE GUARANTEE
            </span>
            <span className="text-[#00ff41] font-bold shrink-0">Services Start @ ₹0.20 / 1,000</span>
            <span className="text-[#888888] hidden sm:inline">•</span>
            <span className="text-white hidden sm:inline">Followers, Views, Likes & Subscribers</span>
          </div>
          <span className="text-[#ffcc00] font-bold shrink-0 ml-2 hidden md:inline">
            +₹100 Bonus
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Main Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* World's Lowest Price Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141414] border border-[#00ff41]/50 shadow-[0_0_15px_rgba(0,255,65,0.2)]"
            >
              <Zap className="w-3.5 h-3.5 text-[#00ff41] animate-pulse" />
              <span className="font-mono text-[11px] sm:text-xs text-[#00ff41] font-bold tracking-wider">
                WORLD'S LOWEST PRICE SMM PLATFORM
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="space-y-2"
            >
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-mono text-white tracking-tight leading-[1.12]">
                Buy Social Growth <br />
                <span className="text-[#00ff41] glow-text-green">At World's Lowest Price.</span>
              </h1>
              <p className="text-xs sm:text-sm font-mono text-[#00f5ff] font-bold tracking-wider uppercase pt-1">
                Services Starting From Just ₹0.20 Rupees
              </p>
            </motion.div>

            {/* Clear Subtext Explaining EXACTLY What Users Can Buy */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="text-sm sm:text-base lg:text-lg text-[#f0f0f0]/90 max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed"
            >
              Purchase <strong className="text-white underline decoration-[#00ff41]">Instagram Views, Likes & Followers</strong>, <strong className="text-white underline decoration-[#00f5ff]">YouTube Subscribers & Watch Time</strong>, Telegram Members and Facebook Growth instantly with automated fulfillment.
            </motion.p>

            {/* Quick Price Cards Grid */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.18 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-2 max-w-lg mx-auto lg:mx-0"
            >
              {quickPrices.map((qp, i) => (
                <div 
                  key={i} 
                  className={`p-2 rounded-xl border text-center font-mono ${
                    qp.highlight 
                      ? 'bg-[#00ff41]/10 border-[#00ff41] text-[#00ff41]' 
                      : 'bg-[#141414] border-[#222222] text-[#888888]'
                  }`}
                >
                  <span className="text-[10px] block text-[#888888]">{qp.icon} {qp.platform}</span>
                  <span className="text-xs font-bold text-white block">{qp.rate}</span>
                </div>
              ))}
            </motion.div>

            {/* ₹100 Welcome Bonus Highlight */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="p-3.5 sm:p-4 rounded-2xl bg-[#141414] border border-[#ffcc00]/40 flex items-center gap-3.5 max-w-md mx-auto lg:mx-0 text-left"
            >
              <div className="w-10 h-10 rounded-xl bg-[#ffcc00]/15 border border-[#ffcc00]/40 flex items-center justify-center shrink-0">
                <Wallet className="w-5 h-5 text-[#ffcc00]" />
              </div>
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs sm:text-sm font-bold text-white">Get up to ₹100 Joining Bonus</span>
                  <span className="px-1.5 py-0.5 rounded text-[9px] font-mono font-bold bg-[#ffcc00] text-black uppercase">
                    PROMO
                  </span>
                </div>
                <p className="text-[11px] text-[#888888] font-mono">
                  Wallet credit on sign up. Start ordering immediately!
                </p>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.25 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-1"
            >
              <a href="#services" className="btn-primary w-full sm:w-auto text-sm !py-3.5 !px-7">
                <span>VIEW ALL SERVICES (₹0.20 STARTS)</span>
                <ArrowRight className="w-4 h-4 text-black" />
              </a>

              <a href="#download" className="btn-outline w-full sm:w-auto text-sm !py-3.5 !px-7">
                <Download className="w-4 h-4 text-[#00f5ff]" />
                <span>DOWNLOAD APP</span>
              </a>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 text-[11px] font-mono text-[#888888]"
            >
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#00ff41]" /> Lowest Price Guarantee
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00f5ff]" /> Instant Delivery Engine
              </span>
              <span className="flex items-center gap-1.5">
                <TrendingUp className="w-3.5 h-3.5 text-[#ffcc00]" /> Starting @ ₹0.20
              </span>
            </motion.div>

          </div>

          {/* Right Column: Phone Simulator Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative flex justify-center items-center pt-4 lg:pt-0"
          >
            
            {/* Phone Container Frame */}
            <div className="relative w-[280px] sm:w-[310px] h-[540px] sm:h-[570px] bg-[#0a0a0a] border-4 border-[#222222] rounded-[40px] shadow-[0_0_40px_rgba(0,255,65,0.2)] overflow-hidden flex flex-col z-20">
              
              {/* Header */}
              <div className="pt-7 px-4 pb-2.5 bg-[#121212] border-b border-[#222222] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-[#0a0a0a] border border-[#00ff41]/50 p-1 flex items-center justify-center">
                    <img src="/fox-icon.svg" alt="App Icon" className="w-full h-full object-contain" />
                  </div>
                  <span className="font-mono text-xs font-bold text-white">SOCIAL FOX</span>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-[#00ff41]/10 border border-[#00ff41]/40 text-[9.5px] font-mono font-bold text-[#00ff41]">
                  LOWEST RATES
                </span>
              </div>

              {/* Feed Content */}
              <div className="flex-1 bg-[#0a0a0a] p-3.5 space-y-3 overflow-hidden text-left">
                
                {/* Active Rate Banner */}
                <div className="p-3 rounded-xl bg-[#141414] border border-[#00ff41]/50 space-y-1">
                  <div className="flex items-center justify-between text-[10px] font-mono text-[#888888]">
                    <span>STARTS FROM</span>
                    <span className="text-[#00ff41] font-bold">LIVE RATE</span>
                  </div>
                  <div className="text-xl font-mono font-bold text-[#00ff41] glow-text-green">
                    ₹0.20 <span className="text-xs text-white font-normal">/ 1,000 Views</span>
                  </div>
                  <p className="text-[9px] font-mono text-[#00f5ff]">Instant Fulfillment Engine</p>
                </div>

                {/* Service Item Mock 1 */}
                <div className="p-2.5 rounded-xl bg-[#141414] border border-[#00ff41]/30 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-pink-500/10 border border-pink-500/30 flex items-center justify-center shrink-0">
                      <Eye className="w-3.5 h-3.5 text-pink-400" />
                    </div>
                    <div>
                      <div className="text-xs font-mono font-bold text-white">IG Reel Views</div>
                      <div className="text-[9.5px] text-[#00ff41] font-bold">₹0.20 / 1,000</div>
                    </div>
                  </div>
                  <span className="text-[9px] font-mono px-2 py-1 rounded bg-[#00ff41] text-black font-bold">
                    BUY
                  </span>
                </div>

                {/* Service Item Mock 2 */}
                <div className="p-2.5 rounded-xl bg-[#141414] border border-[#00f5ff]/30 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-red-500/10 border border-red-500/30 flex items-center justify-center shrink-0">
                      <PlaySquare className="w-3.5 h-3.5 text-red-400" />
                    </div>
                    <div>
                      <div className="text-xs font-mono font-bold text-white">YT Subscribers</div>
                      <div className="text-[9.5px] text-[#00f5ff] font-bold">₹0.83 / 1,000</div>
                    </div>
                  </div>
                  <span className="text-[9px] font-mono px-2 py-1 rounded bg-[#00f5ff] text-black font-bold">
                    BUY
                  </span>
                </div>

                {/* Service Item Mock 3 */}
                <div className="p-2.5 rounded-xl bg-[#141414] border border-[#ffcc00]/30 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-yellow-500/10 border border-yellow-500/30 flex items-center justify-center shrink-0">
                      <Heart className="w-3.5 h-3.5 text-yellow-400" />
                    </div>
                    <div>
                      <div className="text-xs font-mono font-bold text-white">IG Likes</div>
                      <div className="text-[9.5px] text-[#ffcc00] font-bold">₹7.00 / 1,000</div>
                    </div>
                  </div>
                  <span className="text-[9px] font-mono px-2 py-1 rounded bg-[#ffcc00] text-black font-bold">
                    BUY
                  </span>
                </div>

              </div>

              {/* Bottom Navigation Mock */}
              <div className="p-2.5 bg-[#121212] border-t border-[#222222] flex justify-around text-[10px] font-mono text-[#888888]">
                <span className="text-[#00ff41] font-bold">Buy Now</span>
                <span>Services</span>
                <span>Orders</span>
                <span>Wallet</span>
              </div>

            </div>

            {/* Floating Badges */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-2 left-0 sm:-left-6 p-2.5 rounded-xl bg-[#141414]/90 border border-[#00ff41]/50 backdrop-blur-md shadow-lg flex items-center gap-2 z-30"
            >
              <div className="w-6 h-6 rounded-md bg-[#00ff41]/20 flex items-center justify-center">
                <Eye className="w-3.5 h-3.5 text-[#00ff41]" />
              </div>
              <div className="text-[11px] font-mono">
                <div className="font-bold text-white">₹0.20 / 1k Views</div>
                <div className="text-[9px] text-[#00ff41]">Lowest Rate</div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute -bottom-2 right-0 sm:-right-4 p-2.5 rounded-xl bg-[#141414]/90 border border-[#00f5ff]/50 backdrop-blur-md shadow-lg flex items-center gap-2 z-30"
            >
              <div className="w-6 h-6 rounded-md bg-[#00f5ff]/20 flex items-center justify-center">
                <Users className="w-3.5 h-3.5 text-[#00f5ff]" />
              </div>
              <div className="text-[11px] font-mono">
                <div className="font-bold text-white">₹0.83 / 1k Subs</div>
                <div className="text-[9px] text-[#00f5ff]">Instant Boost</div>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
