
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Quotes from '@/components/Quotes';
import Slider from '@/components/Slider';
import Features from '@/components/Features';
import Testimony from '@/components/Testimony';
import QuickActions from '@/components/QuickActions';
import CommunitySection from '@/components/CommunitySection';

export default function Home() {
  return (
    <>
    <Navbar/>
      <div className="min-h-screen bg-[#FAFAFA]">
        <Slider/>
        <QuickActions/>
        <Features/>
        <CommunitySection/>
        <Quotes/>
        <Testimony/>
      </div>
      <Footer/>
    </>

  );
}