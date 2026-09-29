import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Heart, Users, PlaySquare, Share2, MessageSquare, Zap, ArrowRight, ShieldCheck } from 'lucide-react';

export default function QuickPurchaseGrid() {
  const purchaseItems = [
    {
      title: 'Instagram Views',
      rate: '₹0.20',
      unit: 'per 1,000 views',
      tag: 'INSTANT DELIVERY',
      badgeColor: '#00ff41',
      icon: Eye,
      description: 'Supercharge your Reel reach & video impressions instantly.',
      popular: true
    },
    {
      title: 'YouTube Subscribers',
      rate: '₹0.83',
      unit: 'per 1,000 subs',
      tag: 'NON-DROP PIPELINE',
      badgeColor: '#00f5ff',
      icon: Users,
      description: 'Accelerate channel growth and unlock monetization limits.',
      popular: true
    },
    {
      title: 'Instagram Likes',
      rate: '₹7.00',
      unit: 'per 1,000 likes',
      tag: 'HIGH RETENTION',
      badgeColor: '#ffcc00',
      icon: Heart,
      description: 'Boost post engagement ratios and get featured on Explore.',
      popular: false
    },
    {
      title: 'Instagram Followers',
      rate: '₹35.00',
      unit: 'per 1,000 followers',
      tag: 'REAL PROFILES',
      badgeColor: '#00ff41',
      icon: Users,
      description: 'Build instant social proof and brand credibility for your profile.',
      popular: true
    },
    {
      title: 'Telegram Members',
      rate: '₹18.00',
      unit: 'per 1,000 members',
      tag: 'CHANNEL BOOST',
      badgeColor: '#00f5ff',
      icon: Share2,
      description: 'Expand channel subscribers & group members fast.',
      popular: false
    },
    {
      title: 'YouTube Watch Hours',
      rate: '₹450.00',
      unit: 'per 4,000 hours',
      tag: 'MONETIZATION TIER',
      badgeColor: '#ffcc00',
      icon: PlaySquare,
      description: 'Complete YouTube Partner Program requirements efficiently.',
      popular: false
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#0a0a0a] relative border-b border-[#222222] cyber-bg-cyan">
      <div className="site-container relative z-10">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141414] border border-[#00ff41]/40">
            <Zap className="w-3.5 h-3.5 text-[#00ff41]" />
            <span className="font-mono text-[11px] text-[#00ff41] font-bold tracking-wider uppercase">
              WORLD'S CHEAPEST SMM STORE
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold font-mono text-white tracking-tight">
            Buy Social Growth <br />
            <span className="text-[#00ff41] glow-text-green">Starting @ ₹0.20 Rupees.</span>
          </h2>
          <p className="text-xs sm:text-base text-[#888888]">
            Select any service below to purchase followers, views, likes and subscribers directly inside the Social Fox app.
          </p>
        </div>

        {/* Purchase Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {purchaseItems.map((item, idx) => {
            const IconComp = item.icon;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="cyber-card p-5 sm:p-6 flex flex-col justify-between space-y-4 relative group"
              >
                {item.popular && (
                  <span className="absolute -top-2.5 right-4 font-mono text-[9px] font-bold px-2 py-0.5 rounded bg-[#00ff41] text-black uppercase">
                    MOST POPULAR
                  </span>
                )}

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-9 h-9 rounded-xl bg-[#0a0a0a] border border-[#222] flex items-center justify-center">
                      <IconComp className="w-4.5 h-4.5" style={{ color: item.badgeColor }} />
                    </div>
                    <span 
                      className="font-mono text-[9px] font-bold px-2 py-0.5 rounded bg-[#0a0a0a] border uppercase"
                      style={{ borderColor: item.badgeColor + '50', color: item.badgeColor }}
                    >
                      {item.tag}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg font-mono font-bold text-white group-hover:text-[#00ff41] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#888888] mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#222222] flex items-center justify-between">
                  <div>
                    <span className="text-[9px] font-mono text-[#888888] block">STARTING RATE</span>
                    <span className="font-mono text-lg font-bold text-[#00ff41]">
                      {item.rate} <span className="text-[10px] text-[#888888] font-normal">{item.unit}</span>
                    </span>
                  </div>

                  <a 
                    href="#download" 
                    className="btn-primary !py-2 !px-3.5 text-xs font-mono shrink-0"
                  >
                    <span>BUY NOW</span>
                    <ArrowRight className="w-3.5 h-3.5 text-black" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Micro Guarantee Bar */}
        <div className="mt-10 max-w-2xl mx-auto p-3.5 rounded-xl bg-[#141414] border border-[#222222] flex flex-wrap items-center justify-around gap-3 text-xs font-mono text-[#888888]">
          <span className="flex items-center gap-1.5 text-white">
            <ShieldCheck className="w-4 h-4 text-[#00ff41]" /> Lowest Price Guaranteed
          </span>
          <span className="flex items-center gap-1.5 text-white">
            <Zap className="w-4 h-4 text-[#00f5ff]" /> 100% Automated Instant Start
          </span>
          <span className="flex items-center gap-1.5 text-[#ffcc00]">
            🎁 Get ₹100 Welcome Bonus
          </span>
        </div>

      </div>
    </section>
  );
}
