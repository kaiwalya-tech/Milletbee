// src/components/OurProducts.jsx
import React, { useMemo, useState } from "react";

/**
 * OurProducts.jsx (updated per request)
 * - Container width reduced to `max-w-6xl` to remove excess left/right whitespace.
 * - Grid now enforces exactly 3 columns on md+ and 1 column on mobile.
 * - Each product card supports flexible number of images (slideshow on hover).
 * - Image area is 1:1 aspect ratio and images use object-cover to fill without gaps.
 * - "Starting At" label added before price and price + Order Now button are positioned for good UX.
 *
 * Replace placeholder image URLs with your real image paths when ready.
 */

/* Sample data (replace with real product data). Keep any number of products / images per product. */
const productsByCategoryInit = {
  Ladoo: [
    {
      id: "ladoo-1",
      name: "Millet Ladoo",
      price: 249,
      images: [
        "assets/featured-product.png",
        "assets/our-p1-2.png",
        "assets/our-p1-1.png",
      ],
    },
    {
      id: "ladoo-2",
      name: "Jowar Ladoo",
      price: 199,
      images: [
        "assets/featured-product.png",
        "assets/our-p1-2.png",
        "assets/our-p1-1.png",
      ],
    },
    {
      id: "ladoo-3",
      name: "Bajra Ladoo",
      price: 229,
      images: [
        "assets/featured-product.png",
        "assets/our-p1-2.png",
        "assets/our-p1-1.png",
      ],
    },
  ],

  "Festive Combos": [
    {
      id: "combo-1",
      name: "Combo Pack A",
      price: 399,
      images: [
        "https://via.placeholder.com/800.png?text=Combo+1-1",
        "https://via.placeholder.com/800.png?text=Combo+1-2",
        "https://via.placeholder.com/800.png?text=Combo+1-3",
      ],
    },
    {
      id: "combo-2",
      name: "Combo Pack B",
      price: 499,
      images: [
        "https://via.placeholder.com/800.png?text=Combo+2-1",
        "https://via.placeholder.com/800.png?text=Combo+2-2",
        "https://via.placeholder.com/800.png?text=Combo+2-3",
      ],
    },
    {
      id: "combo-3",
      name: "Combo Pack C",
      price: 599,
      images: [
        "https://via.placeholder.com/800.png?text=Combo+3-1",
        "https://via.placeholder.com/800.png?text=Combo+3-2",
        "https://via.placeholder.com/800.png?text=Combo+3-3",
      ],
    },
  ],

  Chivda: [
    {
      id: "chivda-1",
      name: "Spicy Chivda",
      price: 249,
      images: [
        "https://via.placeholder.com/800.png?text=Chivda+1-1",
        "https://via.placeholder.com/800.png?text=Chivda+1-2",
        "https://via.placeholder.com/800.png?text=Chivda+1-3",
      ],
    },
    {
      id: "chivda-2",
      name: "Tangy Chivda",
      price: 239,
      images: [
        "https://via.placeholder.com/800.png?text=Chivda+2-1",
        "https://via.placeholder.com/800.png?text=Chivda+2-2",
        "https://via.placeholder.com/800.png?text=Chivda+2-3",
      ],
    },
    {
      id: "chivda-3",
      name: "Sweet Chivda",
      price: 219,
      images: [
        "https://via.placeholder.com/800.png?text=Chivda+3-1",
        "https://via.placeholder.com/800.png?text=Chivda+3-2",
        "https://via.placeholder.com/800.png?text=Chivda+3-3",
      ],
    },
  ],

  Cookies: [
    {
      id: "cookie-1",
      name: "Millet Cookies",
      price: 199,
      images: [
        "https://via.placeholder.com/800.png?text=Cookie+1-1",
        "https://via.placeholder.com/800.png?text=Cookie+1-2",
        "https://via.placeholder.com/800.png?text=Cookie+1-3",
      ],
    },
    {
      id: "cookie-2",
      name: "Chocolate Cookie",
      price: 229,
      images: [
        "https://via.placeholder.com/800.png?text=Cookie+2-1",
        "https://via.placeholder.com/800.png?text=Cookie+2-2",
        "https://via.placeholder.com/800.png?text=Cookie+2-3",
      ],
    },
    {
      id: "cookie-3",
      name: "Almond Cookie",
      price: 249,
      images: [
        "https://via.placeholder.com/800.png?text=Cookie+3-1",
        "https://via.placeholder.com/800.png?text=Cookie+3-2",
        "https://via.placeholder.com/800.png?text=Cookie+3-3",
      ],
    },
  ],

  "Featured Products": [
    {
      id: "featured-1",
      name: "Granola Jar",
      price: 249,
      images: [
        "https://via.placeholder.com/800.png?text=Granola+1-1",
        "https://via.placeholder.com/800.png?text=Granola+1-2",
        "https://via.placeholder.com/800.png?text=Granola+1-3",
      ],
    },
    {
      id: "featured-2",
      name: "Protein Mix",
      price: 279,
      images: [
        "https://via.placeholder.com/800.png?text=Protein+1-1",
        "https://via.placeholder.com/800.png?text=Protein+1-2",
        "https://via.placeholder.com/800.png?text=Protein+1-3",
      ],
    },
    {
      id: "featured-3",
      name: "Energy Bites",
      price: 199,
      images: [
        "https://via.placeholder.com/800.png?text=Energy+1-1",
        "https://via.placeholder.com/800.png?text=Energy+1-2",
        "https://via.placeholder.com/800.png?text=Energy+1-3",
      ],
    },
  ],

  "Healthy Bites": [
    {
      id: "hb-1",
      name: "Seed Mix",
      price: 189,
      images: [
        "https://via.placeholder.com/800.png?text=HB+1-1",
        "https://via.placeholder.com/800.png?text=HB+1-2",
        "https://via.placeholder.com/800.png?text=HB+1-3",
      ],
    },
    {
      id: "hb-2",
      name: "Roasted Millet",
      price: 159,
      images: [
        "https://via.placeholder.com/800.png?text=HB+2-1",
        "https://via.placeholder.com/800.png?text=HB+2-2",
        "https://via.placeholder.com/800.png?text=HB+2-3",
      ],
    },
    {
      id: "hb-3",
      name: "Dry Fruit Mix",
      price: 329,
      images: [
        "https://via.placeholder.com/800.png?text=HB+3-1",
        "https://via.placeholder.com/800.png?text=HB+3-2",
        "https://via.placeholder.com/800.png?text=HB+3-3",
      ],
    },
  ],
};

/* Per-card slideshow that starts only while hovered */
function ProductCard({ product }) {
  const { id, name, price, images = [] } = product;
  const [index, setIndex] = useState(0);
  const intervalRef = React.useRef(null);

  const startSlideshow = () => {
    if (intervalRef.current) return;
    if (!images || images.length <= 1) return;
    intervalRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 1400);
  };

  const stopSlideshow = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setIndex(0); // reset to first image
  };

  return (
    <div
      className="w-full bg-white rounded-2xl overflow-hidden transition-shadow duration-300 hover:shadow-2xl"
      onMouseEnter={startSlideshow}
      onMouseLeave={stopSlideshow}
      onFocus={startSlideshow}
      onBlur={stopSlideshow}
    >
      {/* 1:1 image square */}
      <div className="relative w-full" style={{ paddingBottom: "100%", backgroundColor: "#D9D9D9" }}>
        {images && images.length > 0 ? (
          images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`${name}-${i}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                i === index ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
              onError={(e) => (e.currentTarget.style.display = "none")}
            />
          ))
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-sm text-black/60">No image</div>
        )}
      </div>

      {/* Body: name + price row */}
      <div className="px-4 py-4">
        <div className="mb-2 text-left">
          <div className="text-base md:text-lg font-semibold" style={{ color: "#111827" }}>{name}</div>
        </div>

        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="text-xs text-gray-500">Starting At</div>
            <div className="text-lg font-semibold" style={{ color: "#111827" }}>₹{price}</div>
          </div>

          <button
            className="ml-auto px-4 py-2 rounded-full border border-[#F6C229] bg-white text-sm font-medium hover:bg-[#F6C229] hover:text-black transition-colors duration-150 shadow-sm"
            onClick={() => (window.location.hash = "#order-" + id)}
            aria-label={`Order now ${name}`}
          >
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default function OurProducts() {
  // dedupe categories preserving order
  const CATEGORIES = useMemo(() => Object.keys(productsByCategoryInit), []);
  const [active, setActive] = useState(CATEGORIES[0] || "");

  const products = productsByCategoryInit[active] || [];

  return (
    <section className="py-16 bg-white">
      {/* Reduced max width to 6xl to shrink left/right whitespace */}
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-center text-3xl md:text-4xl font-semibold mb-8" style={{ color: "#492419", fontFamily: "'Montserrat', serif" }}>
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
                  isActive ? "bg-[#492419] text-white shadow-sm" : "bg-white text-black border border-black/20"
                }`}
                aria-pressed={isActive}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Grid: mobile 1 col, md+ exactly 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
