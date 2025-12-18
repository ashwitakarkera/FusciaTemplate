import React from 'react';  
import Hero from '../components/Hero';
import CoupleProfile from '../components/CoupleProfile';
import Events from '../components/Events';
import Venue from '../components/Venue';
import DressCode from '../components/DressCode';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div className="overflow-x-hidden font-serif bg-[#7FFF00] selection:bg-[#E91E63] selection:text-white">
      
      <Navbar />
      
      <Hero />
      <CoupleProfile />
      <Events />
      <Venue />
      <DressCode />
      <Footer />
    </div>
  );
}