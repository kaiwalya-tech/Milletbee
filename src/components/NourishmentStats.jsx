// src/components/NourishmentStats.jsx
import React from "react";

/**
 * NourishmentStats.jsx
 * - Bottom yellow strip with 4 stats
 * - Has its own top/bottom padding so it can be placed anywhere independently
 */
export default function NourishmentStats() {
  const stats = [
    "Free Shipping Above ₹499",
    "100% Secure Checkout Guarantee",
    "Exceptional Customer Support",
    "Thousands of Happy Customers",
  ];

  return (
    <section className="w-full bg-[#F4C542]">
      <div className="max-w-6xl mx-auto px-6 py-10 md:py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center text-center">
          {stats.map((s, idx) => (
            <div
              key={idx}
              className="px-4"
              style={{
                fontFamily: "'Lexend Deca', sans-serif",
                color: "#492419",
                fontWeight: 500,
              }}
            >
              {s}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
