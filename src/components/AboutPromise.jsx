// File: src/components/AboutPromise.jsx
import React from "react";

/**
 * AboutPromise.jsx
 * - Place file at: src/components/AboutPromise.jsx
 * - Uses image: /mnt/data/about-person.png
 * - Fonts: heading uses "Orelega One" via inline fontFamily (ensure font is loaded in your app).
 */

export default function AboutPromise() {
  return (
    <section className="bg-white">
      {/* Top quote */}
      <div className="max-w-4xl mx-auto px-6 py-10 text-center">
        <p
          className="text-[#492419] md:text-lg text-base leading-snug"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          &quot;Making millets the new cool again? Millet cookies that feel
          indulgent? Impossible!&quot; they said.
          <br />
          <span className="block mt-2 font-semibold">“Watch us.” we said.</span>
          <span className="block mt-2 font-semibold" style={{ color: "#492419" }}>
            And just like that, Milletbee was born.
          </span>
        </p>
      </div>

      {/* Two-column content: left = text, right = person image on yellow panel */}
      <div className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left: text content */}
          <div>
            <h2
              className="text-3xl md:text-4xl mb-6"
              style={{ fontFamily: "'Orelega One', serif", color: "#492419", lineHeight: 1.05 }}
            >
              Milletbee Promise
            </h2>

            <div className="text-base md:text-sm leading-relaxed text-black/90 space-y-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              <p>
                We were tired of health foods that tasted like punishment.
                Tired of watching our grandmothers’ supergrains gather dust while
                shelves overflowed with maida and refined sugar.
              </p>

              <p>
                So we took the grains our ancestors thrived on and turned them
                into treats so delicious that even the pickiest kid asks for seconds.
              </p>

              <p>
                <strong style={{ color: "#492419" }}>That’s our obsession.</strong>{" "}
                Super millets. Real A2 ghee. Jaggery. Nothing fake,
                <strong> nothing that makes you feel guilty at 4 PM.</strong>
              </p>
            </div>

            <div className="mt-8">
              <a
                href="#shop"
                className="inline-block bg-[#F6C229] text-black px-6 py-3 rounded-full font-medium shadow hover:opacity-95"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                SHOP NOW
              </a>
            </div>
          </div>

          {/* Right: person image on yellow panel */}
          <div className="flex justify-center md:justify-end">
            <div className="bg-[#ffffff] p-6 md:p-8 w-full max-w-sm md:max-w-md">
              <img
                src="assets/about-person.png"
                alt="Founder holding product"
                className="w-full h-auto object-cover block"
                style={{ display: "block" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
