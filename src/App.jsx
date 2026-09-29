import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import QuickPurchaseGrid from './components/QuickPurchaseGrid';
import OneRupeeSection from './components/OneRupeeSection';
import OtherSideSection from './components/OtherSideSection';
import GrowthStory from './components/GrowthStory';
import Features from './components/Features';
import Personas from './components/Personas';
import ServicesDirectory from './components/ServicesDirectory';
import AppShowcase from './components/AppShowcase';
import BonusSection from './components/BonusSection';
import TrustFAQ from './components/TrustFAQ';
import WhyWaitCTA from './components/WhyWaitCTA';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f0f0f0] font-body selection:bg-[#00ff41] selection:text-black">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Content Flow */}
      <main>
        {/* 1. Hero Section - Clear Headline: Buy Social Growth At World's Lowest Price */}
        <Hero />

        {/* 2. Quick Purchase Grid - Direct cards for Followers, Views, Likes & Subs from ₹0.20 */}
        <QuickPurchaseGrid />

        {/* 3. ₹1 Psychology Value Section */}
        <OneRupeeSection />

        {/* 4. The Other Side Storytelling Section */}
        <OtherSideSection />

        {/* 5. Creator Scroll-Driven Growth Story */}
        <GrowthStory />

        {/* 6. Why Social Fox Feature Cards */}
        <Features />

        {/* 7. Built For People Who Personas */}
        <Personas />

        {/* 8. Live Service Directory & Pricing */}
        <ServicesDirectory />

        {/* 9. App Showcase Command Center */}
        <AppShowcase />

        {/* 10. ₹100 Welcome Bonus Highlight */}
        <BonusSection />

        {/* 11. Trust & Interactive FAQ */}
        <TrustFAQ />

        {/* 12. Emotional Why Wait Conversion Moment */}
        <WhyWaitCTA />

        {/* 13. Final Call To Action & Download */}
        <FinalCTA />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
