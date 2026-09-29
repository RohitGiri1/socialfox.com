import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Smartphone, CheckCircle, Search, Layers, Wallet, Clock } from 'lucide-react';

export default function AppShowcase() {
  const [activeScreenIndex, setActiveScreenIndex] = useState(0);

  const screens = [
    {
      id: 'home',
      name: 'Home Dashboard',
      label: 'Find your service.',
      description: 'Quickly view live wallet balance, recent active orders, category shortcuts, and global banners.',
      icon: Search,
      badge: 'DASHBOARD',
      mockContent: (
        <div className="space-y-2 font-mono text-xs">
          <div className="p-2.5 rounded-xl bg-[#141414] border border-[#00ff41]/40 space-y-0.5">
            <span className="text-[9.5px] text-[#888888]">AVAILABLE BALANCE</span>
            <div className="text-lg font-bold text-[#00ff41]">₹1,450.00</div>
            <div className="text-[8.5px] text-[#00f5ff]">Welcome Bonus Applied (+₹100)</div>
          </div>
          <div className="space-y-1">
            <span className="text-[9.5px] text-[#888888]">CATEGORIES</span>
            <div className="grid grid-cols-2 gap-1.5">
              <div className="p-2 rounded-lg bg-[#141414] border border-[#222] text-white flex items-center gap-1.5 text-[11px]">
                <span>📸</span> Instagram
              </div>
              <div className="p-2 rounded-lg bg-[#141414] border border-[#222] text-white flex items-center gap-1.5 text-[11px]">
                <span>📺</span> YouTube
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'services',
      name: 'Services Directory',
      label: 'Choose your quantity.',
      description: 'Filter through hundreds of specialized services by platform, speed, retention, and budget tier.',
      icon: Layers,
      badge: 'CATALOG',
      mockContent: (
        <div className="space-y-2 font-mono text-xs">
          <div className="p-2.5 rounded-xl bg-[#141414] border border-[#00ff41]/30 flex justify-between items-center">
            <div>
              <div className="text-white font-bold text-[11px]">IG High Speed Views</div>
              <div className="text-[9px] text-[#888888]">₹0.20 per 1,000</div>
            </div>
            <span className="text-[8.5px] px-1.5 py-0.5 rounded bg-[#00ff41]/10 text-[#00ff41]">SELECT</span>
          </div>
          <div className="p-2.5 rounded-xl bg-[#141414] border border-[#222] flex justify-between items-center opacity-75">
            <div>
              <div className="text-white font-bold text-[11px]">YT Non-Drop Subs</div>
              <div className="text-[9px] text-[#888888]">₹0.83 per 1,000</div>
            </div>
            <span className="text-[8.5px] px-1.5 py-0.5 rounded bg-[#222] text-[#888888]">SELECT</span>
          </div>
        </div>
      )
    },
    {
      id: 'order',
      name: 'Instant Order Flow',
      label: 'Place your order.',
      description: 'Paste target link, enter quantity, verify total calculation in rupees, and submit with one tap.',
      icon: CheckCircle,
      badge: 'CHECKOUT',
      mockContent: (
        <div className="space-y-2 font-mono text-xs">
          <div className="p-2 rounded bg-[#141414] border border-[#222]">
            <span className="text-[9px] text-[#888888]">TARGET LINK</span>
            <div className="text-white text-[10px] truncate">https://instagram.com/p/C9x...</div>
          </div>
          <div className="p-2 rounded bg-[#141414] border border-[#222] flex justify-between text-[11px]">
            <span className="text-[#888888]">QUANTITY</span>
            <span className="text-[#00ff41] font-bold">10,000</span>
          </div>
          <div className="p-2 rounded-lg bg-[#00ff41] text-black font-bold text-center text-xs">
            SUBMIT ORDER (₹2.00)
          </div>
        </div>
      )
    },
    {
      id: 'tracking',
      name: 'Live Order Tracker',
      label: 'Track your progress.',
      description: 'Monitor real-time progress bars, start counts, delivered quantities, and completion statuses.',
      icon: Clock,
      badge: 'ANALYTICS',
      mockContent: (
        <div className="space-y-2 font-mono text-xs">
          <div className="p-2.5 rounded-xl bg-[#141414] border border-[#00ff41]/40 space-y-1.5">
            <div className="flex justify-between text-[10.5px]">
              <span className="text-white font-bold">Order #SF-9402</span>
              <span className="text-[#00ff41]">85% Done</span>
            </div>
            <div className="w-full bg-[#222] h-1.5 rounded-full overflow-hidden">
              <div className="bg-[#00ff41] h-full w-[85%]" />
            </div>
            <div className="flex justify-between text-[9px] text-[#888888]">
              <span>Start: 120</span>
              <span>Delivered: 8,500</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'wallet',
      name: 'Wallet & Rewards',
      label: 'Keep building.',
      description: 'Instant UPI/QR deposits, automated transaction history, and welcome bonus reward system.',
      icon: Wallet,
      badge: 'WALLET',
      mockContent: (
        <div className="space-y-2 font-mono text-xs">
          <div className="p-2.5 rounded-xl bg-[#141414] border border-[#ffcc00]/40 flex items-center justify-between">
            <div>
              <div className="text-[9px] text-[#888888]">JOINING BONUS</div>
              <div className="text-xs font-bold text-[#ffcc00]">₹100 CREDITED</div>
            </div>
            <span className="text-[8.5px] px-1.5 py-0.5 rounded bg-[#ffcc00]/10 text-[#ffcc00]">ACTIVE</span>
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="showcase" className="py-16 sm:py-24 bg-[#0a0a0a] relative cyber-bg border-b border-[#222222]">
      <div className="site-container relative z-10">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141414] border border-[#00ff41]/40">
            <Smartphone className="w-3.5 h-3.5 text-[#00ff41]" />
            <span className="font-mono text-[11px] text-[#00ff41] font-semibold tracking-wider uppercase">
              THE MOBILE INTERFACE
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold font-mono text-white tracking-tight">
            Meet your social-growth <br />
            <span className="text-[#00ff41] glow-text-green">command center.</span>
          </h2>
          <p className="text-xs sm:text-base text-[#888888]">
            Built with Flutter for high performance, smooth animations, and cyber-secure order routing.
          </p>
        </div>

        {/* Interactive Horizontal Screen Selector on Mobile */}
        <div className="flex overflow-x-auto no-scrollbar gap-2 pb-2 mb-6 lg:hidden">
          {screens.map((sc, idx) => {
            const isActive = activeScreenIndex === idx;

            return (
              <button
                key={sc.id}
                onClick={() => setActiveScreenIndex(idx)}
                className={`px-3.5 py-2 rounded-xl border text-xs font-mono font-bold shrink-0 transition-all ${
                  isActive
                    ? 'bg-[#141414] border-[#00ff41] text-[#00ff41]'
                    : 'bg-[#121212] border-[#222222] text-[#888888]'
                }`}
              >
                {sc.name}
              </button>
            );
          })}
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center max-w-5xl mx-auto">
          
          {/* Left Column: Screen Selector Buttons (Desktop) */}
          <div className="hidden lg:block lg:col-span-5 space-y-2.5">
            {screens.map((sc, idx) => {
              const IconComponent = sc.icon;
              const isActive = activeScreenIndex === idx;

              return (
                <button
                  key={sc.id}
                  onClick={() => setActiveScreenIndex(idx)}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-start gap-3 ${
                    isActive
                      ? 'bg-[#141414] border-[#00ff41] shadow-[0_0_15px_rgba(0,255,65,0.15)]'
                      : 'bg-[#121212] border-[#222222] text-[#888888] hover:border-[#444]'
                  }`}
                >
                  <div 
                    className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                      isActive ? 'bg-[#00ff41]/10 text-[#00ff41]' : 'bg-[#181818] text-[#555]'
                    }`}
                  >
                    <IconComponent className="w-4 h-4" />
                  </div>

                  <div className="space-y-0.5">
                    <div className={`font-mono text-xs font-bold ${isActive ? 'text-white' : 'text-[#888888]'}`}>
                      {sc.name}
                    </div>
                    <p className="font-mono text-[10px] font-semibold text-[#00f5ff]">
                      "{sc.label}"
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Phone Screen Mockup */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="relative w-[270px] sm:w-[300px] h-[500px] sm:h-[540px] bg-[#0a0a0a] border-4 border-[#222222] rounded-[40px] shadow-[0_0_40px_rgba(0,255,65,0.15)] overflow-hidden flex flex-col">
              
              {/* Header */}
              <div className="pt-6 px-4 pb-2.5 bg-[#121212] border-b border-[#222222] flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <img src="/fox-icon.svg" alt="App Logo" className="w-4 h-4" />
                  <span className="font-mono text-xs font-bold text-white">SOCIAL FOX</span>
                </div>
                <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-[#00ff41]/10 text-[#00ff41]">
                  {screens[activeScreenIndex].badge}
                </span>
              </div>

              {/* Display Area */}
              <div className="flex-1 p-4 bg-[#0a0a0a] flex flex-col justify-between overflow-hidden text-left">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeScreenIndex}
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -15 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-3"
                  >
                    <div className="p-2.5 rounded-xl bg-[#141414] border border-[#222222] space-y-0.5">
                      <span className="font-mono text-[9px] text-[#00f5ff] font-bold">STEP {activeScreenIndex + 1}</span>
                      <h4 className="font-mono text-xs font-bold text-white">{screens[activeScreenIndex].name}</h4>
                      <p className="font-mono text-[10.5px] text-[#00ff41]">"{screens[activeScreenIndex].label}"</p>
                    </div>

                    {screens[activeScreenIndex].mockContent}
                  </motion.div>
                </AnimatePresence>

                {/* Bottom App Navigation */}
                <div className="pt-2.5 border-t border-[#222222] flex justify-around text-[10px] font-mono text-[#888888]">
                  <span className={activeScreenIndex === 0 ? 'text-[#00ff41] font-bold' : ''}>Home</span>
                  <span className={activeScreenIndex === 1 ? 'text-[#00ff41] font-bold' : ''}>Services</span>
                  <span className={activeScreenIndex === 2 ? 'text-[#00ff41] font-bold' : ''}>Order</span>
                  <span className={activeScreenIndex === 3 ? 'text-[#00ff41] font-bold' : ''}>History</span>
                  <span className={activeScreenIndex === 4 ? 'text-[#00ff41] font-bold' : ''}>Wallet</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
