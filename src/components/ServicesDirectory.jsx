import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, ArrowRight, Layers } from 'lucide-react';
import { serviceCategories } from '../data/servicesData';

export default function ServicesDirectory() {
  const [selectedCategory, setSelectedCategory] = useState('instagram');
  const [searchTerm, setSearchTerm] = useState('');

  const currentCategoryObj = serviceCategories.find(c => c.id === selectedCategory) || serviceCategories[0];

  const filteredServices = currentCategoryObj.services.filter(s => 
    s.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="services" className="py-16 sm:py-24 bg-[#0a0a0a] relative border-b border-[#222222] cyber-bg">
      <div className="site-container relative z-10">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141414] border border-[#00ff41]/40">
            <Layers className="w-3.5 h-3.5 text-[#00ff41]" />
            <span className="font-mono text-[11px] text-[#00ff41] font-semibold tracking-wider uppercase">
              LIVE SERVICE CATALOG
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold font-mono text-white tracking-tight">
            Explore Growth Services & <br />
            <span className="text-[#00ff41] glow-text-green">Transparent Rates.</span>
          </h2>
          <p className="text-xs sm:text-base text-[#888888]">
            Actual service categories available inside the Social Fox mobile app.
          </p>
        </div>

        {/* Category Tabs Scroll Bar on Mobile */}
        <div className="flex overflow-x-auto no-scrollbar gap-2 pb-2 mb-6 sm:justify-center">
          {serviceCategories.map((cat) => {
            const isActive = selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs font-bold shrink-0 transition-all ${
                  isActive
                    ? 'bg-[#141414] border-2 border-[#00ff41] text-[#00ff41] shadow-[0_0_15px_rgba(0,255,65,0.2)]'
                    : 'bg-[#121212] border border-[#222222] text-[#888888] hover:text-white'
                }`}
              >
                <span>{cat.icon}</span>
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Search Bar & Category Description */}
        <div className="max-w-3xl mx-auto mb-6 p-3.5 rounded-xl bg-[#141414] border border-[#222222] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs font-mono text-[#888888]">
            <span className="text-white font-bold">{currentCategoryObj.name}:</span> {currentCategoryObj.description}
          </div>

          <div className="relative w-full sm:w-56">
            <Search className="w-3.5 h-3.5 text-[#888888] absolute left-3 top-1/2 -translate-y-1/2" />
            <input 
              type="text"
              placeholder="Search service..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 rounded-lg bg-[#0a0a0a] border border-[#222222] text-xs font-mono text-white focus:outline-none focus:border-[#00ff41]"
            />
          </div>
        </div>

        {/* Services List */}
        <div className="max-w-3xl mx-auto space-y-2.5">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="p-3.5 sm:p-4 rounded-xl bg-[#141414] border border-[#222222] hover:border-[#00ff41]/40 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
            >
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] text-[#555]">#{service.id}</span>
                  <h4 className="font-mono text-xs sm:text-sm font-bold text-white">
                    {service.name}
                  </h4>
                </div>
                <div className="flex flex-wrap items-center gap-2 text-[11px] font-mono text-[#888888]">
                  <span>Speed: <strong className="text-[#00f5ff]">{service.speed}</strong></span>
                  <span>•</span>
                  <span>Min: {service.min.toLocaleString()}</span>
                  <span>•</span>
                  <span>Max: {service.max.toLocaleString()}</span>
                </div>
              </div>

              <div className="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-auto pt-2 sm:pt-0 border-t sm:border-t-0 border-[#222]">
                <div className="text-left sm:text-right">
                  <span className="text-[9px] font-mono text-[#888888] block">RATE / 1,000</span>
                  <span className="font-mono text-base font-bold text-[#00ff41]">
                    ₹{service.ratePer1k.toFixed(2)}
                  </span>
                </div>

                <a
                  href="#join"
                  className="px-3 py-1.5 rounded-lg bg-[#0a0a0a] border border-[#00ff41]/40 font-mono text-xs font-bold text-[#00ff41] hover:bg-[#00ff41] hover:text-black transition-all flex items-center gap-1 shrink-0"
                >
                  <span>ORDER</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
