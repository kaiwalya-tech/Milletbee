// src/components/NourishmentTop.jsx
import React from "react";

/**
 * NourishmentTop.jsx
 * - Top yellow strip with heading + logos
 * - self-contained spacing so it can be used independently
 */
export default function NourishmentTop() {
  return (
    <section className="w-full bg-[#F4C542]">
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-20 text-center">
        <h3
          className="text-2xl md:text-4xl font-medium"
          style={{ fontFamily: "'Montserrat', sans-serif", color: "#492419" }}
        >
          Nourishment Without Compromise
        </h3>

        {/* logos image (centered) */}
        <div className="mt-8">
          <img
            src="/assets/NWC-logo.png" /* REPLACE WITH ACTUAL IMAGE URL IF NEEDED */
            alt="Nourishment badges"
            className="mx-auto w-full max-w-[880px] h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
