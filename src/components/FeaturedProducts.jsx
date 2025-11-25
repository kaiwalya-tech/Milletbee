// src/components/FeaturedProducts.jsx
import React, { useRef, useState } from "react";

/**
 * FeaturedProducts.jsx
 * - 3-column grid (md+) and 1-column mobile
 * - Each card is 1:1 aspect ratio; images cover edge-to-edge
 * - Per-card slideshow starts on hover/focus and is flexible (# images per product)
 * - "Starting At" label added before price; button text = "Order Now"
 * - Hover on card -> shadow; Hover on Order Now -> yellow background (text stays black)
 */

const ITEMS = [
  {
    id: "fp-1",
    title: "Granola Jar",
    desc: "Crunchy millet granola made with nuts & seeds — no preservatives.",
    price: 249,
    images: [
      "assets/featured-product.png",
      "assets/our-p1-2.png",
      "assets/our-p1-1.png",
    ],
  },
  {
    id: "fp-2",
    title: "Roasted Millet Mix",
    desc: "Savory roasted millet mixes — light, crunchy & wholesome.",
    price: 199,
    images: [
      "assets/featured-product.png",
      "assets/our-p1-2.png",
      "assets/our-p1-1.png",
    ],
  },
  {
    id: "fp-3",
    title: "Seed Crunch Bites",
    desc: "Handmade bites with jaggery, ghee & a mix of super millets.",
    price: 279,
    images: [
      "assets/featured-product.png",
      "assets/our-p1-2.png",
      "assets/our-p1-1.png",
    ],
  },
];

function FeaturedCard({ item }) {
  const { title, desc, price, images = [] } = item;
  const [idx, setIdx] = useState(0);
  const intervalRef = useRef(null);

  const start = () => {
    if (intervalRef.current) return;
    if (!images || images.length <= 1) return;
    intervalRef.current = setInterval(() => {
      setIdx((i) => (i + 1) % images.length);
    }, 1400);
  };

  const stop = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setIdx(0);
  };

  return (
    <article
      className="group bg-white rounded-2xl overflow-hidden transform transition duration-300 hover:shadow-2xl"
      onMouseEnter={start}
      onMouseLeave={stop}
      onFocus={start}
      onBlur={stop}
      aria-label={title}
    >
      {/* image (1:1 square) */}
      <div className="relative w-full" style={{ paddingBottom: "100%" }}>
        {images && images.length ? (
          images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`${title} ${i + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                i === idx ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
              onError={(e) => (e.currentTarget.style.display = "none")}
            />
          ))
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-[#F4C542]">
            <span className="text-sm text-[#492419]">No image</span>
          </div>
        )}
      </div>

      {/* body */}
      <div className="px-6 py-5">
        <h4
          className="text-lg font-semibold mb-2"
          style={{ fontFamily: "'Lexend Deca', sans-serif", color: "#111827" }}
        >
          {title}
        </h4>

        <p
          className="text-sm mb-4 leading-tight"
          style={{ fontFamily: "'Lexend Deca', sans-serif", color: "#374151" }}
        >
          {desc}
        </p>

        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="text-xs text-gray-500">Starting At</div>
            <div className="text-lg font-semibold" style={{ color: "#111827" }}>
              ₹{price}
            </div>
          </div>

          <button
            className="ml-auto px-4 py-2 rounded-full border border-[#F6C229] bg-white text-sm font-medium transition-colors duration-150 shadow-sm hover:bg-[#F6C229] hover:text-black"
            aria-label={`Order now ${title}`}
            onClick={() => (window.location.hash = `#order-${item.id}`)}
          >
            Order Now
          </button>
        </div>
      </div>
    </article>
  );
}

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

        {/* grid: 1 col mobile, 3 cols md+ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ITEMS.map((it) => (
            <FeaturedCard key={it.id} item={it} />
          ))}
        </div>
      </div>
    </section>
  );
}
