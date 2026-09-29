import React from 'react';
import { motion } from 'framer-motion';
import { 
  Layers, 
  ShoppingCart, 
  Globe, 
  Zap, 
  DollarSign, 
  Activity, 
  ShieldCheck, 
  Check 
} from 'lucide-react';

export default function Features() {
  const featuresList = [
    {
      icon: Layers,
      title: 'One Platform',
      description: 'Manage Instagram, YouTube, Telegram & Facebook growth from a single unified mobile dashboard.',
      badge: 'ALL-IN-ONE'
    },
    {
      icon: ShoppingCart,
      title: 'Simple Ordering',
      description: 'Select service, paste target link, enter quantity and submit. Processing starts automatically.',
      badge: '3-STEP FLOW'
    },
    {
      icon: Globe,
      title: 'Multiple Platforms',
      description: 'Comprehensive coverage for Instagram reels, YouTube watch hours, Telegram members, and more.',
      badge: '10+ NETWORKS'
    },
    {
      icon: Zap,
      title: 'Fast Processing',
      tag: 'AUTOMATED PIPELINES',
      description: 'Connected directly to automated API provider nodes for high velocity fulfillment.',
      badge: 'INSTANT START'
    },
    {
      icon: DollarSign,
      title: 'Affordable Growth',
      description: 'Designed around creator budgets. Start with as little as ₹1 or use your ₹100 welcome bonus.',
      badge: 'FROM ₹0.20/K'
    },
    {
      icon: Activity,
      title: 'Track Your Orders',
      description: 'Monitor real-time progress, start counts, delivered metrics, and order statuses in live app.',
      badge: 'LIVE UPDATES'
    }
  ];

  return (
    <section id="why" className="py-16 sm:py-24 bg-[#0a0a0a] relative border-b border-[#222222]">
      <div className="site-container relative z-10">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141414] border border-[#00ff41]/40">
            <ShieldCheck className="w-3.5 h-3.5 text-[#00ff41]" />
            <span className="font-mono text-[11px] text-[#00ff41] font-semibold tracking-wider uppercase">
              ENGINEERED FOR RESULTS
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold font-mono text-white tracking-tight">
            Why Creators & Agencies <br />
            <span className="text-[#00ff41] glow-text-green">Choose Social Fox.</span>
          </h2>

          <p className="text-xs sm:text-base text-[#888888]">
            No complex reseller dashboards. Just clean, instant social growth tools built for mobile.
          </p>
        </div>

        {/* Features Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {featuresList.map((feat, idx) => {
            const IconComponent = feat.icon;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="cyber-card p-5 sm:p-6 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-[#0a0a0a] border border-[#00ff41]/30 flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-[#00ff41]" />
                    </div>

                    <span className="font-mono text-[9.5px] font-bold px-2 py-0.5 rounded bg-[#0a0a0a] border border-[#00ff41]/30 text-[#00ff41] uppercase">
                      {feat.badge}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-mono font-bold text-white">
                    {feat.title}
                  </h3>

                  <p className="text-xs text-[#888888] leading-relaxed">
                    {feat.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#222222] flex items-center gap-1.5 text-[11px] font-mono text-[#555]">
                  <Check className="w-3.5 h-3.5 text-[#00ff41]" />
                  <span>Automated API protocol</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
