// src/components/HeroSection.jsx
import React from "react";

/**
 * HeroSection.jsx
 * - Adjusted overall hero height: mobile uses 60vh, desktop uses full screen (h-screen).
 * - Keeps previous responsive tweaks for bees and background but ensures less vertical gap on mobile.
 * - Uses local assets under /assets/.
 */

export default function HeroSection() {
  return (
    <section className="relative w-full h-[60vh] md:h-screen bg-[#F4C542] overflow-hidden">
      {/* Inline CSS for precise bee positioning & responsive tweaks */}
      <style>{`
        .hero-bee-1 {
          position: absolute;
          top: -40px;
          left: 87%;
          transform: translateX(calc(-50% + 15%));
          width: 144px;
          pointer-events: none;
          z-index: 60;
        }
        .hero-bee-2 {
          position: absolute;
          top: -24px;
          left: -12%;
          width: 108px; /* 25% less than previous */
          pointer-events: none;
          z-index: 60;
        }

        /* Background wrapper size control (desktop large, mobile smaller) */
        .hero-bg-wrapper {
          height: 60vh;
        }
        .hero-bg-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top;
          display: block;
        }

        /* Small screens: scale down and nudge to avoid overlap; reduce bg height to ~half */
        @media (max-width: 767px) {
          .hero-bee-1 {
            top: -67px;
            left: 119%;
            transform: translateX(-50%);
            width: 95px;
          }
          .hero-bee-2 {
            top: -53px;
            left: 0%;
            width: 72px;
          }

          /* make background much shorter on mobile (approx half of desktop) and keep it positioned lower */
          .hero-bg-wrapper {
            height: 28vh;
          }
          .hero-bg-wrapper img {
            object-position: bottom; /* prefer cropping from bottom on mobile */
            transform: translateY(8%);
          }
        }

        /* Medium screens slight adjustment */
        @media (min-width: 768px) and (max-width: 1023px) {
          .hero-bg-wrapper {
            height: 44vh;
          }
        }
      `}</style>

      {/* Farm image at bottom (object-top for desktop; object-bottom handled in CSS for mobile) */}
      <div className="absolute inset-x-0 bottom-0 z-10 overflow-hidden hero-bg-wrapper">
        <img
          src="assets/hero-bg.png"
          alt="farm background"
          className="block"
          style={{ transform: "translateY(10%)" }}
        />
      </div>

      {/* Content area - reduced top padding on small screens */}
      <div className="relative z-30 pt-[8vh] md:pt-[20vh]">
        <div className="max-w-6xl mx-auto px-6">
          {/* height tuned so content fits well inside mobile 60vh and desktop screen */}
          <div className="h-auto md:h-[36vh] flex flex-col items-center justify-start text-center">
            {/* Heading (two lines) with tight line-height */}
            <h1
              style={{ fontFamily: "'Orelega One', serif" }}
              className="text-[#492419] leading-[0.9] tracking-tight"
            >
              <div className="text-[clamp(36px,5.8vw,72px)] font-medium">
                <span className="inline-block relative">
                  WHOLESOME{" "}
                  <span className="inline-block relative">
                    GOODNESS,
                    {/* bee 1 (always visible) */}
                    <img
                      src="assets/bee-1.png"
                      alt="bee above goodness"
                      className="hero-bee-1"
                    />
                  </span>
                </span>
              </div>

              <div className="text-[clamp(36px,5.8vw,72px)] font-medium mt-1 relative inline-block">
                <span className="inline-block relative">
                  {/* bee 2 (always visible, 25% smaller) */}
                  <img
                    src="assets/bee-2.png"
                    alt="bee left of straight"
                    className="hero-bee-2"
                  />
                  STRAIGHT FROM THE FIELD
                </span>
              </div>
            </h1>

            {/* Subheading (two lines) */}
            <p
              style={{ fontFamily: "'Montserrat', sans-serif" }}
              className="mt-4 md:mt-6 max-w-2xl text-[#492419] font-semibold text-[clamp(14px,1.6vw,18px)] z-40"
            >
              Enjoy preservative-free, flavorful millet-based
              <br />
              foods for a healthier lifestyle.
            </p>

            {/* SHOP NOW button */}
            <a
              href="#shop"
              className="inline-block mt-4 md:mt-6 bg-[#492419] text-white px-8 py-3 rounded-full text-sm md:text-base font-medium shadow-sm transform transition-transform duration-200 hover:scale-105 z-50"
              style={{ boxShadow: "0 8px 22px rgba(73,36,25,0.18)" }}
            >
              SHOP NOW
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
