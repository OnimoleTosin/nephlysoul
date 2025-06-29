import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Quotes from '@/components/Quotes';
import Slider from '@/components/Slider';
import Articles from '@/components/Articles';
import Testimony from '@/components/Testimony';
import QuickActions from '@/components/QuickActions';
import Community from '@/components/Community';
import Books from '@/components/Books';
import Groups from '@/components/Groups';

export default function Home() {
  return (
    <>
    <Navbar/>
      <div className="min-h-screen bg-[#FAFAFA]">
        <Slider/>
        <QuickActions/>
        <Articles/>
        <Community/>
        <Books/>
        <Quotes/>
        <Groups/>
        <Testimony/>
      </div>
      <Footer/>
    </>

  );
}