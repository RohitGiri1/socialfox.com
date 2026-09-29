import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, ChevronDown, Lock, Server, FileText } from 'lucide-react';
import { faqList } from '../data/servicesData';

export default function TrustFAQ() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-[#0a0a0a] relative border-b border-[#222222]">
      <div className="site-container relative z-10">
        
        {/* Trust Header */}
        <div className="max-w-3xl mx-auto mb-14 text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141414] border border-[#00ff41]/40">
            <ShieldCheck className="w-3.5 h-3.5 text-[#00ff41]" />
            <span className="font-mono text-[11px] text-[#00ff41] font-semibold tracking-wider uppercase">
              TRANSPARENT ARCHITECTURE
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold font-mono text-white tracking-tight">
            Built on Trust, Security & <br />
            <span className="text-[#00ff41] glow-text-green">Clear Expectations.</span>
          </h2>

          <p className="text-xs sm:text-base text-[#888888] max-w-lg mx-auto">
            No false claims or viral guarantees. Social Fox delivers automated distribution infrastructure so you can test and build presence transparently.
          </p>
        </div>

        {/* 3 Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto mb-16">
          <div className="p-5 rounded-2xl bg-[#141414] border border-[#222222] space-y-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#00ff41]/10 border border-[#00ff41]/30 flex items-center justify-center">
              <Lock className="w-4 h-4 text-[#00ff41]" />
            </div>
            <h3 className="font-mono text-xs sm:text-sm font-bold text-white">Encrypted API Protocols</h3>
            <p className="text-xs text-[#888888] leading-relaxed">
              Dispatched through secure REST endpoints. No account passwords ever required.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#141414] border border-[#222222] space-y-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#00f5ff]/10 border border-[#00f5ff]/30 flex items-center justify-center">
              <Server className="w-4 h-4 text-[#00f5ff]" />
            </div>
            <h3 className="font-mono text-xs sm:text-sm font-bold text-white">99.9% System Uptime</h3>
            <p className="text-xs text-[#888888] leading-relaxed">
              Distributed worker architecture monitors provider nodes 24/7.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#141414] border border-[#222222] space-y-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#ffcc00]/10 border border-[#ffcc00]/30 flex items-center justify-center">
              <FileText className="w-4 h-4 text-[#ffcc00]" />
            </div>
            <h3 className="font-mono text-xs sm:text-sm font-bold text-white">Clear Safeguards</h3>
            <p className="text-xs text-[#888888] leading-relaxed">
              If an order cannot be completed by pipelines, funds return to your wallet.
            </p>
          </div>
        </div>

        {/* FAQ Accordion Section */}
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="text-center space-y-1">
            <h3 className="text-xl sm:text-2xl font-mono font-bold text-white">
              Frequently Asked Questions
            </h3>
            <p className="text-xs font-mono text-[#888888]">
              Everything about Social Fox platforms, pricing, and orders.
            </p>
          </div>

          <div className="space-y-3">
            {faqList.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;

              return (
                <div
                  key={idx}
                  className={`rounded-xl border transition-all overflow-hidden ${
                    isOpen
                      ? 'bg-[#141414] border-[#00ff41]/50'
                      : 'bg-[#121212] border-[#222222] hover:border-[#444]'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-4 text-left flex items-center justify-between gap-3"
                  >
                    <span className="font-mono text-xs sm:text-sm font-bold text-white">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#00ff41] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="px-4 pb-4 text-xs text-[#888888] border-t border-[#222]/50 font-normal leading-relaxed pt-2">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
