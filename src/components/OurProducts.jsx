// File: src/components/OurProducts.jsx
import React, { useMemo, useState } from "react";

/**
 * OurProducts.jsx (updated)
 * - Removes duplicate categories (dedupe).
 * - Shows 4 items for the active category (same placeholder logic).
 * - Mobile now shows 2 items per row (default) while larger screens show more.
 * - Image boxes keep their aspect ratio using the padding-bottom trick so images don't stretch.
 */

const RAW_CATEGORIES = [
  "Ladoo",
  "Festive Combos",
  "Featured Products",
  "Chivda",
  "Cookies",
  "Healthy Bites",
  // if duplicate entries appear in your source, they'll be removed below
];

export default function OurProducts() {
  // dedupe categories in case the source contains duplicates
  const CATEGORIES = useMemo(() => Array.from(new Set(RAW_CATEGORIES)), []);

  const [active, setActive] = useState("Chivda");

  // returns exactly 4 product items (replace with real data later)
  const productsFor = (category) =>
    Array.from({ length: 4 }).map((_, i) => ({
      id: `${category}-${i + 1}`,
      name: category,
      // placeholder image URL (600x420) with text label — replace with real image URL later
      img: `https://via.placeholder.com/600x420.png?text=${encodeURIComponent(
        `${category} ${i + 1}`
      )}`,
    }));

  const products = productsFor(active);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2
          className="text-center text-3xl md:text-4xl font-semibold mb-8"
          style={{ color: "#492419", fontFamily: "'Montserrat', serif" }}
        >
          Our Products
        </h2>

        {/* Category buttons */}
        <div className="flex items-center justify-center gap-4 flex-wrap mb-10">
          {CATEGORIES.map((cat) => {
            const isActive = cat === active;
            return (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-full text-sm md:text-base transition-colors duration-150 select-none focus:outline-none ${
                  isActive
                    ? "bg-[#492419] text-white shadow-sm"
                    : "bg-white text-black border border-black/20"
                }`}
                aria-pressed={isActive}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Products grid
            - default (mobile): 2 columns
            - md: 3 columns
            - lg: 4 columns
        */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((p) => (
            <div key={p.id} className="flex flex-col items-center">
              {/* image container keeps original aspect ratio using padding-bottom trick */}
              <div
                className="w-full rounded-lg overflow-hidden"
                style={{
                  backgroundColor: "#D9D9D9",
                  position: "relative",
                  width: "100%",
                  paddingBottom: "70%", // keeps 600x420 (h/w = 0.7)
                }}
              >
                <img
                  src={p.img}
                  alt={p.name}
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={(e) => {
                    // if remote fails, hide image to show grey bg
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>

              <div className="mt-4 text-center">
                <div
                  className="text-sm md:text-base font-medium"
                  style={{ color: "#000" }}
                >
                  {p.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
