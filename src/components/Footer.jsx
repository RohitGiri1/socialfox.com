import React from 'react';
import { ShieldCheck, Heart, Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#070707] border-t border-[#262626] pt-16 pb-12">
      <div className="container">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#1A1A1A]">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <a href="#" className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#111] border border-[#00FF41]/40 flex items-center justify-center p-1">
                <img src="/fox-icon.svg" alt="Social Fox" className="w-full h-full object-contain" />
              </div>
              <span className="font-mono text-lg font-bold text-white tracking-wider">
                SOCIAL<span className="text-[#00FF41] glow-green">FOX</span>
              </span>
            </a>

            <p className="font-mono text-xs text-[#00F5FF]">
              The other side of social media.
            </p>

            <p className="text-xs text-[#8A8A8A] max-w-sm leading-relaxed font-normal">
              Social Fox is a social-growth platform designed to help creators, small businesses and social-media users build momentum across supported platforms.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3 font-mono text-xs">
            <span className="text-white font-bold uppercase tracking-wider block mb-2">
              NAVIGATION
            </span>
            <ul className="space-y-2 text-[#8A8A8A]">
              <li><a href="#" className="hover:text-[#00FF41] transition-colors">Home</a></li>
              <li><a href="#why" className="hover:text-[#00FF41] transition-colors">Why Social Fox</a></li>
              <li><a href="#story" className="hover:text-[#00FF41] transition-colors">How It Works</a></li>
              <li><a href="#value" className="hover:text-[#00FF41] transition-colors">₹1 Power</a></li>
              <li><a href="#services" className="hover:text-[#00FF41] transition-colors">Services Directory</a></li>
              <li><a href="#showcase" className="hover:text-[#00FF41] transition-colors">App Showcase</a></li>
              <li><a href="#download" className="hover:text-[#00FF41] transition-colors">Download App</a></li>
            </ul>
          </div>

          {/* Legal & Support */}
          <div className="md:col-span-4 space-y-3 font-mono text-xs">
            <span className="text-white font-bold uppercase tracking-wider block mb-2">
              LEGAL & TRANSPARENCY
            </span>
            <ul className="space-y-2 text-[#8A8A8A]">
              <li><a href="#faq" className="hover:text-[#00F5FF] transition-colors">Frequently Asked Questions</a></li>
              <li><span className="hover:text-[#00F5FF] transition-colors cursor-pointer">Privacy Policy (App)</span></li>
              <li><span className="hover:text-[#00F5FF] transition-colors cursor-pointer">Terms & Conditions</span></li>
              <li><span className="hover:text-[#00F5FF] transition-colors cursor-pointer">Service Level Agreements</span></li>
              <li><span className="hover:text-[#00F5FF] transition-colors cursor-pointer">Support Ticket Center</span></li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#555]">
          <div>
            © 2026 Social Fox. All rights reserved.
          </div>

          <div className="flex items-center gap-2 text-[11px]">
            <span>Encrypted API Infrastructure</span>
            <span>•</span>
            <span className="text-[#00FF41]">Built for Creators</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
