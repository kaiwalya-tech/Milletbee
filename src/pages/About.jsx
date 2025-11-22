// File: src/pages/About.jsx
import React from "react";
import AboutHero from "../components/AboutHero";
import AboutPromise from "../components/AboutPromise";
import JourneySection from "../components/JourneySection";
import NourishmentSection from "../components/NourishmentSection";

/**
 * About page (place at src/pages/About.jsx)
 * - App.jsx provides Navbar & Footer; this page only renders page content.
 */

export default function About() {
  return (
    <main className="min-h-screen bg-white">
      <AboutHero />
      <AboutPromise />
      {/* add additional about sections below if needed */}
      <NourishmentSection/>
      <JourneySection/>
    </main>
  );
}
