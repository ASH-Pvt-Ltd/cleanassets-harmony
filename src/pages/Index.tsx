
import React from 'react';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import VisionSection from "@/components/home/VisionSection";
import StatisticsSection from "@/components/home/StatisticsSection";
import AssetManagementSection from "@/components/home/AssetManagementSection";
import WhyImplementSection from "@/components/home/WhyImplementSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <HeroSection />
      <VisionSection />
      <StatisticsSection />
      <AssetManagementSection />
      <WhyImplementSection />
      <Footer />
    </div>
  );
};

export default Index;
