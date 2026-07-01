/* FILE: src/pages/HomePage.jsx */
import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import StatsSection from '../components/sections/StatsSection';
import ServicesSection from '../components/sections/ServicesSection';
import PortfolioPreview from '../components/sections/PortfolioPreview';
import ProcessSection from '../components/sections/ProcessSection';
import BeforeAfterSection from '../components/sections/BeforeAfterSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import ContactCTABanner from '../components/sections/ContactCTABanner';

export const HomePage = () => {
  return (
    <div className="homepage-container">
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <PortfolioPreview />
      <ProcessSection />
      <BeforeAfterSection />
      <TestimonialsSection />
      <ContactCTABanner />
    </div>
  );
};

export default HomePage;

