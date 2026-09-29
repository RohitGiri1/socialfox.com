import React from 'react';
import { motion } from 'framer-motion';
import { Video, Building2, Rocket, Briefcase, Users, ArrowRight } from 'lucide-react';

export default function Personas() {
  const personaList = [
    {
      icon: Video,
      title: 'Creators',
      quote: 'Turn your content into a growing presence.',
      description: 'You put hours into video editing and storytelling. Social Fox ensures your posts get initial algorithmic traction.',
      points: [
        'Boost initial reel views',
        'Accelerate subscriber growth',
        'High engagement ratios'
      ],
      color: '#00ff41'
    },
    {
      icon: Building2,
      title: 'Small Businesses',
      quote: 'Build social proof around your brand.',
      description: 'First impressions matter. High follower counts and post likes build immediate customer confidence.',
      points: [
        'Build instant brand proof',
        'Increase conversion rates',
        'Active social presence'
      ],
      color: '#00f5ff'
    },
    {
      icon: Rocket,
      title: 'New Accounts',
      quote: 'Start building momentum from day one.',
      description: 'Starting from zero is tough. Give your new profile a baseline kickstart to bypass initial account stagnation.',
      points: [
        'Bypass initial account zero',
        'Gain initial signals fast',
        'Test audience response'
      ],
      color: '#ffcc00'
    },
    {
      icon: Briefcase,
      title: 'Social Media Managers',
      quote: 'Manage multiple growth requirements from one app.',
      description: 'Execute campaign growth orders across client accounts effortlessly from one central wallet.',
      points: [
        'Bulk order handling',
        'Flexible wallet management',
        '24/7 automated processing'
      ],
      color: '#00ff41'
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#0a0a0a] relative cyber-bg-cyan border-b border-[#222222]">
      <div className="site-container relative z-10">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141414] border border-[#00f5ff]/40">
            <Users className="w-3.5 h-3.5 text-[#00f5ff]" />
            <span className="font-mono text-[11px] text-[#00f5ff] font-semibold tracking-wider uppercase">
              TAILORED SOLUTIONS
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold font-mono text-white tracking-tight">
            Built For People Who Take <br />
            <span className="text-[#00f5ff] glow-text-cyan">Social Presence Seriously.</span>
          </h2>
        </div>

        {/* 4 Personas Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {personaList.map((persona, idx) => {
            const IconComp = persona.icon;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="cyber-card p-5 sm:p-6 flex flex-col justify-between space-y-4 relative overflow-hidden"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-xl bg-[#0a0a0a] border border-[#222] flex items-center justify-center">
                        <IconComp className="w-4 h-4" style={{ color: persona.color }} />
                      </div>
                      <h3 className="text-base sm:text-lg font-mono font-bold text-white">
                        {persona.title}
                      </h3>
                    </div>

                    <span className="font-mono text-[10px] text-[#555]">0{idx + 1}</span>
                  </div>

                  <p className="font-mono text-xs font-semibold text-[#00ff41] italic">
                    "{persona.quote}"
                  </p>

                  <p className="text-xs text-[#888888] leading-relaxed">
                    {persona.description}
                  </p>

                  <div className="space-y-1.5 pt-1">
                    {persona.points.map((pt, i) => (
                      <div key={i} className="flex items-center gap-2 text-[11px] font-mono text-[#f0f0f0]">
                        <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: persona.color }} />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-[#222222] flex items-center justify-between text-xs font-mono">
                  <span className="text-[#888888] text-[11px]">Explore solutions</span>
                  <a href="#join" className="text-[#00ff41] flex items-center gap-1 hover:underline text-[11px]">
                    Get Started <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
