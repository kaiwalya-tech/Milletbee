// src/components/FeaturedProducts.jsx
import React from "react";

/**
 * FeaturedProducts.jsx (updated)
 * - Image fits edge-to-edge (cover)
 * - Removed redundant 'Granola' ribbon overlay
 * - Subtext font-size reduced
 * - Price stacked above Add To Card button
 * - Button fills with #F6C229 on hover (text remains black)
 *
 * Place this file at: src/components/FeaturedProducts.jsx
 * Test image path used below: /mnt/data/84f387c4-f67e-4c30-a31c-b5c74ad367b2.png
 */

const ITEMS = Array.from({ length: 4 }).map((_, i) => ({
  id: i + 1,
  title: "Pasta",
  desc: "Neapolitan-Style Pizzas, Wood-Fired, Pure Veg. All Soul, No Shortcuts.",
  price: "₹249",
  img: "/assets/featured-product.png",
}));

export default function FeaturedProducts() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h3
          className="text-2xl md:text-3xl font-medium mb-8"
          style={{ fontFamily: "'Montserrat', sans-serif", color: "#492419" }}
        >
          Featured products
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {ITEMS.map((item) => (
            <article
              key={item.id}
              className="group bg-white rounded-lg overflow-hidden transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              aria-labelledby={`fp-${item.id}-title`}
            >
              {/* Image area: fits edge-to-edge */}
              <div className="w-full h-64 bg-[#F4C542]">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover block"
                />
              </div>

              {/* Card body */}
              <div className="px-6 py-5">
                <h4
                  id={`fp-${item.id}-title`}
                  className="text-lg font-semibold mb-2"
                  style={{ fontFamily: "'Lexend Deca', sans-serif", color: "#111827" }}
                >
                  {item.title}
                </h4>

                <p
                  className="text-xs md:text-sm mb-4 leading-tight"
                  style={{ fontFamily: "'Lexend Deca', sans-serif", color: "#374151" }}
                >
                  {item.desc}
                </p>

                <div className="flex flex-col items-stretch gap-3">
                  <div className="text-lg font-semibold" style={{ color: "#111827", fontFamily: "'Lexend Deca', sans-serif" }}>
                    {item.price}
                  </div>

                  <button
                    className="mt-2 w-full py-3 rounded-full border-2 border-[#F6C229] bg-white text-black text-sm font-medium transition-colors duration-200 group-hover:bg-[#F6C229] group-hover:text-black"
                    aria-label={`Add ${item.title} to cart`}
                  >
                    Add To Card
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
