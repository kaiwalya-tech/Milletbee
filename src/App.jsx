// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import OurProducts from './components/OurProducts';
import FeaturedProducts from './components/FeaturedProducts';
import BannerCarousel from './components/BannerCarousel';
import NourishmentSection from './components/NourishmentSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* make main full-width so sections that need to be full-bleed can be */}
      <main className="w-full">
        {/* full-bleed hero */}
        <HeroSection />

        {/* centered content area for sections that should be constrained */}
        <div className="max-w-6xl mx-auto px-6">
          <OurProducts />
          <FeaturedProducts />
        </div>

        {/* these sections are full-bleed by design, keep them outside the centered wrapper */}
        <NourishmentSection />
        <BannerCarousel />

        <div className="h-20" />
      </main>

      <Footer />
    </div>
  );
}
