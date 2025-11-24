// File: src/components/AboutHero.jsx
import React from "react";

/**
 * AboutHero.jsx (updated positions & sizes)
 * - Background moved up (translateY -15%) on desktop and crops from top on mobile (object-position: top).
 * - Text image scaled 1.7x.
 * - Product image moved 8% lower and scaled 1.3x.
 * - Bee shifted 25% to the right and scaled 1.5x.
 * - Uses local assets (already added to project):
 *   - background: /mnt/data/a85c9ea3-bbfa-4e04-b5f8-ff410ea69200.png
 *   - product:    /mnt/data/about-hero-product.png
 *   - text group: /mnt/data/about-hero-text.png
 *   - bee:        /mnt/data/bee 1.png
 *
 * Place this at src/components/AboutHero.jsx (replace the existing file).
 */

export default function AboutHero() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* Inline CSS for precise transforms & responsive tweaks */}
      <style>{`
        /* Background: move up 15% on desktop; on mobile crop from top */
        .about-bg {
          width: 100%;
          height: auto;
          display: block;
          transform: translateY(-15%); /* move upward so top gets cropped on desktop */
        }
        @media (max-width: 767px) {
          .about-bg {
            transform: translateY(0); /* remove translate for mobile */
            object-position: top; /* ensure crop happens from top on mobile */
          }
        }

        /* Text image: scale 1.7x on desktop, slightly smaller on mobile */
        .about-text {
          transform: scale(1.3);
          transform-origin: left top;
        }
        @media (max-width: 767px) {
          .about-text {
            transform: scale(0.6);
          }
        }

        /* Product image desktop: scale 1.3 and move 8% down relative to current by translateY(8%) */
        .about-product {
          transform: translateY(8%) scale(1.2);
          transform-origin: center bottom;
          filter: drop-shadow(0 18px 28px rgba(0,0,0,0.18));
        }
        /* On mobile product should sit bottom-right and keep natural size scaled to fit */
        @media (max-width: 767px) {
          .about-product {
            transform: translateY(0) scale(1.05);
            width: 92%;
            height: auto;
            max-width: 360px;
          }
        }

        /* Bee adjustments: shift 25% right and scale 1.5x */
        .about-bee {
          transform: translateX(25%) scale(1.5) rotate(5deg);
          left: 62%;
          top: -30%;
        }
        @media (max-width: 767px) {
          .about-bee {
            transform: translateX(10%) scale(1.1) rotate(-10deg);
            top: -14%;
            left: 38%;
          }
        }
      `}</style>

      {/* Full-bleed background image */}
      <div className="w-full">
        <img
          src="assets/about-hero-bg.png"
          alt="about background"
          className="about-bg w-full h-auto object-cover block"
          style={{ display: "block" }}
        />
      </div>

      {/* Absolute layer for positioned elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Text group: top-left on desktop, top-left on mobile with adjusted scale */}
        <div
          className="
            absolute
            top-12 left-8
            md:top-20 md:left-20
            lg:top-28 lg:left-28
            pointer-events-auto
            "
          style={{ maxWidth: "520px" }}
        >
          <img
            src="assets/about-hero-text.png"
            alt="about text"
            className="about-text w-full h-auto object-contain block"
          />
          {/* bee near the text box (shifted right 25% with scaling) */}
          <img
            src="assets/bee-6.png"
            alt="bee"
            className="
            about-bee
            absolute -top-8 -left-30
            md:-top-12 md:-left-12
            w-12 md:w-20 lg:w-28
            pointer-events-none
            "
          />
        </div>

        {/* Product image - right side on desktop (moved down 8%), bottom-right on mobile */}
        {/* Desktop placement */}
        <div
          className="
            hidden md:block
            absolute
            right-8 md:right-20 lg:right-28
            md:top-28 lg:top-36
            pointer-events-auto
            w-48 md:w-80 lg:w-[520px]
            "
          style={{ transformOrigin: "center bottom" }}
        >
          <img
            src="assets/about-hero-product.png"
            alt="product"
            className="about-product w-full h-auto object-contain block"
          />
        </div>

        {/* Mobile placement: show product bottom-right on mobile */}
        <div className="block md:hidden absolute right-4 bottom-6 pointer-events-auto w-40">
          <img
            src="assets/about-hero-product.png"
            alt="product mobile"
            className="about-product w-full h-auto object-contain block"
          />
        </div>
      </div>
    </section>
  );
}
