// src/components/OurProducts.jsx
import React, { useState } from "react";

/**
 * OurProducts.jsx
 * - Place at: src/components/OurProducts.jsx
 * - Usage: <OurProducts />
 * - Images: placeholders used (replace URL generation if you have real image URLs)
 */

const CATEGORIES = [
  "Ladoo",
  "Chivda",
  "Festive Combos",
  "Featured Products",
  "Cookies",
  "Healthy Bites",
];

export default function OurProducts() {
  const [active, setActive] = useState("Chivda");

  // each category returns exactly 4 product items (replace with real data later)
  const productsFor = (category) =>
    Array.from({ length: 4 }).map((_, i) => ({
      id: `${category}-${i + 1}`,
      name: category,
      // placeholder image URL (400x300) with text label — replace with real image URL later
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
                className={`px-5 py-2 rounded-full text-sm md:text-base transition-colors duration-150 select-none ${
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

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((p) => (
            <div key={p.id} className="flex flex-col items-center">
              <div
                className="w-full rounded-lg overflow-hidden flex items-center justify-center"
                style={{ backgroundColor: "#D9D9D9", height: 220 }}
              >
                {/* Image sits inside; if you want the grey box visible, use an actual transparent image or remove the img */}
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // if remote fails, hide image to show grey bg
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>

              <div className="mt-4 text-center">
                <div className="text-sm md:text-base font-medium" style={{ color: "#000" }}>
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
