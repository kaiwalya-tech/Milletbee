// src/components/BannerCarousel.jsx
import React, { useEffect, useRef, useState } from "react";

/**
 * BannerCarousel.jsx (responsive, no-crop, full-bleed)
 * - Images fill the viewport width (w-screen) with height auto so the entire image is visible (no top/bottom crop).
 * - Slides move horizontally (translateX) with flex slides each occupying 100% viewport width (no half-splits).
 * - Continuous autoplay (no hover-pause). Dots below are clickable.
 * - Background is white (no colored background).
 *
 * Put banner files in: /public/assets/banners/b1.png ... b6.png
 */

const IMAGES = [
  "/assets/banners/b1.png",
  "/assets/banners/b2.png",
  "/assets/banners/b3.png",
  "/assets/banners/b4.png",
  "/assets/banners/b5.png",
  "/assets/banners/b6.png",
];

export default function BannerCarousel({ autoPlayMs = 3500 }) {
  const slides = IMAGES;
  const [index, setIndex] = useState(0);
  const autoplayRef = useRef();

  // update callback ref
  useEffect(() => {
    autoplayRef.current = () => {
      setIndex((i) => (i + 1) % slides.length);
    };
  }, [slides.length]);

  // continuous autoplay (no hover pause)
  useEffect(() => {
    const id = setInterval(() => autoplayRef.current(), autoPlayMs);
    return () => clearInterval(id);
  }, [autoPlayMs]);

  function goTo(i) {
    setIndex(((i % slides.length) + slides.length) % slides.length);
  }

  return (
    <section className="w-full bg-white">
      {/* Title centered in the capped container */}
      <div className="max-w-6xl mx-auto px-6">
        <h3
          className="text-2xl md:text-3xl font-medium mb-6 text-center"
          style={{ fontFamily: "'Montserrat', sans-serif", color: "#492419", marginTop: "2rem" }}
        >
          What You Will Find
        </h3>
      </div>

      {/* Full-bleed carousel area */}
      <div className="relative w-full overflow-hidden">
        {/* Use a centered w-screen wrapper so the carousel spans viewport exactly */}
        <div className="w-screen left-1/2 relative transform -translate-x-1/2">
          {/* slides track */}
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              width: `${slides.length * 100}vw`,
              transform: `translateX(-${index * 100}vw)`,
            }}
          >
            {slides.map((src, i) => (
              <div key={i} className="flex-shrink-0 w-[100vw] flex items-center justify-center bg-white">
                {/* image determines the height; w-full keeps it full-bleed, h-auto preserves aspect ratio */}
                <img
                  src={src}
                  alt={`slide-${i + 1}`}
                  className="w-full h-auto object-contain block"
                  style={{ display: "block", maxWidth: "100%" }}
                />
              </div>
            ))}
          </div>

          {/* dots centered under the carousel */}
          <div className="flex items-center justify-center mt-4 mb-8">
            <div className="flex gap-3">
              {slides.map((_, i) => {
                const active = i === index;
                return (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      active ? "bg-[#B86A61]" : "bg-[#E6CFC8] opacity-80"
                    }`}
                    style={active ? { boxShadow: "0 0 0 6px rgba(184,106,97,0.08)" } : undefined}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
