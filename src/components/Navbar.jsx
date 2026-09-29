import React, { useState, useEffect } from 'react';
import { Smartphone, Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#222222] py-3 shadow-2xl'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="site-container flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2.5 group text-decoration-none">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#141414] border border-[#00ff41]/40 flex items-center justify-center p-1.5 shadow-[0_0_12px_rgba(0,255,65,0.2)] group-hover:border-[#00ff41] transition-all">
            <img src="/fox-icon.svg" alt="Social Fox" className="w-full h-full object-contain" />
          </div>
          <div className="flex flex-col">
            <span className="font-mono text-base sm:text-lg font-bold text-white tracking-wider flex items-center gap-1">
              SOCIAL<span className="text-[#00ff41] glow-text-green">FOX</span>
            </span>
            <span className="font-mono text-[8px] sm:text-[9px] tracking-widest text-[#888888] -mt-1 uppercase">
              The Other Side
            </span>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden lg:flex items-center gap-8 text-xs font-mono text-[#888888]">
          <a href="#why" className="hover:text-[#00ff41] transition-colors py-1">Why Social Fox</a>
          <a href="#story" className="hover:text-[#00ff41] transition-colors py-1">How It Works</a>
          <a href="#value" className="hover:text-[#00ff41] transition-colors py-1">₹1 Power</a>
          <a href="#services" className="hover:text-[#00ff41] transition-colors py-1">Services Directory</a>
          <a href="#showcase" className="hover:text-[#00ff41] transition-colors py-1">App Showcase</a>
          <a href="#faq" className="hover:text-[#00ff41] transition-colors py-1">FAQ</a>
        </nav>

        {/* Header Action CTAs */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="#download"
            className="btn-outline !py-2 !px-4 text-xs font-mono"
          >
            <Smartphone className="w-3.5 h-3.5 text-[#00f5ff]" />
            <span>DOWNLOAD APP</span>
          </a>
          <a
            href="#join"
            className="btn-primary !py-2 !px-4.5 text-xs font-mono"
          >
            <span>JOIN NOW</span>
            <ArrowRight className="w-3.5 h-3.5 text-black" />
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="sm:hidden p-2 rounded-xl bg-[#141414] border border-[#222222] text-white hover:text-[#00ff41] transition-colors"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

      </div>

      {/* Mobile Slideout Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-[#222222] px-5 py-6 space-y-4 animate-in fade-in slide-in-from-top-3">
          <div className="grid grid-cols-2 gap-2 text-xs font-mono text-[#888888] pb-3 border-b border-[#222222]">
            <a
              href="#why"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-lg bg-[#121212] border border-[#222] text-white hover:border-[#00ff41]"
            >
              Why Social Fox
            </a>
            <a
              href="#story"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-lg bg-[#121212] border border-[#222] text-white hover:border-[#00ff41]"
            >
              How It Works
            </a>
            <a
              href="#value"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-lg bg-[#121212] border border-[#222] text-white hover:border-[#00ff41]"
            >
              ₹1 Value
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-lg bg-[#121212] border border-[#222] text-white hover:border-[#00ff41]"
            >
              Services
            </a>
            <a
              href="#showcase"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-lg bg-[#121212] border border-[#222] text-white hover:border-[#00ff41]"
            >
              App Showcase
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-lg bg-[#121212] border border-[#222] text-white hover:border-[#00ff41]"
            >
              FAQ & Help
            </a>
          </div>

          <div className="flex flex-col gap-2.5 pt-1">
            <a
              href="#join"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary text-center text-xs py-3 w-full"
            >
              JOIN SOCIAL FOX (₹100 BONUS)
            </a>
            <a
              href="#download"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-outline text-center text-xs py-3 w-full"
            >
              DOWNLOAD ANDROID APK
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
