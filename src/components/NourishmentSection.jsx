// src/components/NourishmentSection.jsx
import React from "react";

/**
 * NourishmentSection.jsx
 * - Place at: src/components/NourishmentSection.jsx
 * - Uses uploaded logos image at: /mnt/data/NWC-logo.png
 * - Fonts: Heading uses Montserrat; stats use Lexend Deca (ensure fonts loaded in index.html)
 */

export default function NourishmentSection() {
  const stats = [
    "Free Shipping Above ₹499",
    "100% Secure Checkout Guarantee",
    "Exceptional Customer Support",
    "Thousands of Happy Customers",
  ];

  return (
    <section className="w-full">
      {/* Top yellow strip with heading + logos */}
      <div className="w-full bg-[#F4C542]">
        <div className="max-w-6xl mx-auto px-6 py-12 md:py-16 text-center">
          <h3
            className="text-2xl md:text-4xl font-medium"
            style={{ fontFamily: "'Montserrat', sans-serif", color: "#492419" }}
          >
            Nourishment Without Compromise
          </h3>

          {/* logos image (centered) */}
          <div className="mt-8">
            <img
              src="/assets/NWC-logo.png"
              alt="Nourishment badges"
              className="mx-auto w-full max-w-[880px] h-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* white spacer */}
      <div className="w-full bg-white h-6" />

      {/* Bottom yellow strip with 4 stats */}
      <div className="w-full bg-[#F4C542]">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center text-center">
            {stats.map((s, idx) => (
              <div
                key={idx}
                className="px-4"
                style={{ fontFamily: "'Lexend Deca', sans-serif", color: "#492419", fontWeight: 500 }}
              >
                {s}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
