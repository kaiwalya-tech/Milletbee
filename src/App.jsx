import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import OurProducts from "./components/OurProducts";
import FeaturedProducts from "./components/FeaturedProducts";
import BannerCarousel from "./components/BannerCarousel";
import NourishmentSection from "./components/NourishmentSection";
import Footer from "./components/Footer";
import About from "./pages/About";
import NourishmentStats from "./components/NourishmentStats";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <main className="w-full">
                <HeroSection />
                
                  <OurProducts />
                  <NourishmentStats/>
                  <FeaturedProducts />
                <NourishmentSection />
                <BannerCarousel />
                <div className="h-20" />
              </main>
            }
          />
          <Route path="/about" element={<About />} />
          {/* add other routes like /shop, /contact as needed */}
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}