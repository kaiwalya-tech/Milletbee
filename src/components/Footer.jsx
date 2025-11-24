// src/components/Footer.jsx
import React from "react";

/**
 * Footer.jsx (responsive alignment fix)
 * - Keeps desktop layout (left-aligned Quick links, left-aligned Milletbee block) intact.
 * - On mobile (sm and below) stacks the sections and centers their content for better UX.
 * - Vertically centers Quick links and Milletbee block in the yellow strip on desktop.
 * - No other structure changes.
 */

export default function Footer() {
  return (
    <footer className="w-full">
      {/* Top brown strip with 3 centered feature items */}
      <div className="w-full bg-[#492419] text-white">
        <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center">
          <div className="flex flex-col items-center gap-4">
            <img src="assets/call-logo.png" alt="icon-1" className="w-16 h-16 object-contain" />
            <div>
              <h4
                className="text-sm font-semibold uppercase"
                style={{ fontFamily: "'Montserrat', sans-serif", letterSpacing: "0.06em" }}
              >
                SOURCE OF FIBRE
              </h4>
              <p className="mt-2 text-xs" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                We're here to help! Reach out for any assistance you need.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4">
            <img src="assets/offer-logo.png" alt="icon-2" className="w-16 h-16 object-contain" />
            <div>
              <h4
                className="text-sm font-semibold uppercase"
                style={{ fontFamily: "'Montserrat', sans-serif", letterSpacing: "0.06em" }}
              >
                PAN INDIA FREE SHIPPING
              </h4>
              <p className="mt-2 text-xs" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                on all orders above ₹799
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4">
            <img src="assets/express-logo.png" alt="icon-3" className="w-16 h-16 object-contain" />
            <div>
              <h4
                className="text-sm font-semibold uppercase"
                style={{ fontFamily: "'Montserrat', sans-serif", letterSpacing: "0.06em" }}
              >
                GREAT OFFERS
              </h4>
              <p className="mt-2 text-xs" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                Save FLAT 10% OFF on first order
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Middle yellow content area: ensures vertical centering on desktop and centered layout on mobile */}
      <div className="w-full bg-[#F4C542] border-t border-b border-black/10">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Quick links (left on desktop; centered on mobile) */}
            <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left">
              <h5
                className="text-sm font-semibold mb-4"
                style={{ fontFamily: "'Montserrat', sans-serif", color: "#111827" }}
              >
                Quick links
              </h5>
              <ul className="space-y-2 text-sm" style={{ fontFamily: "'Montserrat', sans-serif", color: "#111827" }}>
                <li><a href="#" className="hover:underline">About Us</a></li>
                <li><a href="#" className="hover:underline">FAQ's</a></li>
                <li><a href="#" className="hover:underline">Policies</a></li>
              </ul>
            </div>

            {/* Center - logo + description (left-aligned on desktop; centered on mobile) */}
            <div className="flex items-center justify-center md:justify-start text-center md:text-left">
              <div>
                <img src="/assets/logo.png" alt="milletbee logo" className="h-12 mb-4 mx-auto md:mx-0 object-contain" />
                <div className="text-sm max-w-md mx-auto md:mx-0" style={{ fontFamily: "'Montserrat', sans-serif", color: "#111827" }}>
                  <strong>Milletbee: Nourishing Traditions, Naturally</strong>
                  <p className="mt-3 text-sm">
                    Our brand prioritizes wholesome, nutritious food that connects consumers with the farmers, aiming to make healthy eating accessible and enjoyable.
                  </p>
                </div>
              </div>
            </div>

            {/* Right column intentionally empty to match layout (keeps spacing symmetric on desktop; hidden on mobile for compact stack) */}
            <div className="hidden md:block" />
          </div>
        </div>
      </div>

      {/* Bottom copyright bar */}
      <div className="w-full bg-[#F4C542]">
        <div className="max-w-6xl mx-auto px-6 py-4 text-xs text-black/70" style={{ fontFamily: "'Montserrat', sans-serif" }}>
          © 2025, Millat Bee Powered by Shopify. Privacy policy
        </div>
      </div>
    </footer>
  );
}
