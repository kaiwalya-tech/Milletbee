// File: src/components/JourneySection.jsx
import React from "react";

/**
 * Updated JourneySection.jsx
 * - Text remains in its own top section; bees are now positioned around the text (not over the background).
 * - Background section below uses object-position: bottom so the image crops from the bottom (not the top).
 * - Bee sizes increased by 1.5x and repositioned to sit around the text area.
 * - Uses image paths under /assets/ (place your images in public/assets/).
 *
 * Place at: src/components/JourneySection.jsx
 */

export default function JourneySection() {
  return (
    <>
      {/* TEXT SECTION: text-only container (bees positioned relative to this container) */}
      <section className="w-full bg-white">
        <style>{`
          .journey-text-wrap { position: relative; z-index: 40; }
          .journey-bee-1, .journey-bee-2, .journey-bee-3 { position: absolute; z-index: 60; pointer-events: none; }

          /* Bee sizes increased by 1.5x from previous (desktop) */
          .journey-bee-1 { width: 108px; right: -3%; top: 29%; transform: rotate(-6deg); }
          .journey-bee-2 { width: 84px; left: 8%; top: 54%; transform: rotate(6deg); }
          .journey-bee-3 { width: 46px; left: 56%; top: 98%; transform: rotate(-2deg); }

          /* Responsive scaling/position tweaks */
          @media (max-width: 1024px) {
            .journey-bee-1 { width: 92px; right: 6%; top: 5%; }
            .journey-bee-2 { width: 72px; left: 6%; top: 46%; }
            // .journey-bee-3 { width: 56px; left: 38%; top: 62%; }
          }
          @media (max-width: 640px) {
            .journey-bee-1 { width: 46px; right: 3%; top: 19%; }
            .journey-bee-2 { width: 48px; left: 9%; top: 63%; }
            .journey-bee-3 { width: 31px; left: 49%; top: 97%; }
          }
        `}</style>

        <div className="journey-text-wrap max-w-6xl mx-auto px-6 pt-12 pb-8 text-center">
          {/* Top quote — Montserrat medium 25px */}
          <p
            className="mx-auto mb-6 leading-tight"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 500,
              fontSize: "18px",
              color: "#492419",
              maxWidth: "980px",
              marginTop: '4rem',
              marginBottom: '2.5rem',
            }}
          >
            From a tiny kitchen that smelled of roasted ragi and ghee to boxes flying into homes
            across India — this journey has been pure magic
          </p>

          {/* Main heading — Orelega One regular 40px */}
          <h2
            style={{
              fontFamily: "'Orelega One', serif",
              fontSize: "40px",
              color: "#492419",
              margin: "0 auto",
              lineHeight: 1.05,
            }}
          >
            Welcome To Milletbee.
          </h2>

          {/* Subheading — Montserrat semi-bold 25px */}
          <p
            className="mt-3"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 600,
              fontSize: "25px",
              color: "#492419",
            }}
          >
            Let’s make millets the coolest grain in your pantry.
          </p>

          {/* Bees positioned around the text (these sit above the text area visually) */}
          <img
            src="/assets/bee-3.png"
            alt="bee right"
            className="journey-bee-1"
          />
          <img
            src="/assets/bee-4.png"
            alt="bee left"
            className="journey-bee-2"
          />
          <img
            src="/assets/bee-5.png"
            alt="bee center"
            className="journey-bee-3"
          />
        </div>
      </section>

      {/* BACKGROUND SECTION: full-bleed farm image below the text; object-position bottom to crop from bottom */}
      <section className="relative w-full overflow-hidden">
        <style>{`
          .journey-bg-img {
            width: 100%;
            height: 65vh;
            object-fit: cover;
            object-position: bottom center;
            
            /* CHANGED: Removed brown by making it grayscale */
            filter: grayscale(100%);
            
            /* Positioning & Opacity kept exactly the same */
            opacity: 0.16;
            display: block;
          }

          @media (max-width: 1024px) {
            .journey-bg-img { height: 48vh; }
          }
          @media (max-width: 640px) {
            .journey-bg-img { height: 17vh; object-position: bottom center; opacity: 0.14; }
          }
        `}</style>

        <img
          src="/assets/hero-bg.png"
          alt="decorative-farm-bg"
          className="journey-bg-img"
          aria-hidden
        />

        {/* ADDED: This overlay forces the Light Yellow color onto the grayscale image */}
        <div className="absolute inset-0 w-full h-full bg-yellow-200 mix-blend-color pointer-events-none"></div>
</section>
    </>
  );
}
