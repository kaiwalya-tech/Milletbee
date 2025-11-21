// src/components/Footer.jsx
import React from "react";

/**
 * Footer.jsx (vertical-align fix)
 * - Centers the two main boxes inside the yellow strip vertically so "Quick links" and the Milletbee block align as in the design.
 * - Keeps top brown strip as-is.
 * - Place at: src/components/Footer.jsx
 * - Assets used: /mnt/data/logo.png, /mnt/data/call-logo.png (replace other icons as needed)
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
              <h4 className="text-sm font-semibold uppercase" style={{ fontFamily: "'Montserrat', sans-serif", letterSpacing: "0.06em" }}>
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
              <h4 className="text-sm font-semibold uppercase" style={{ fontFamily: "'Montserrat', sans-serif", letterSpacing: "0.06em" }}>
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
              <h4 className="text-sm font-semibold uppercase" style={{ fontFamily: "'Montserrat', sans-serif", letterSpacing: "0.06em" }}>
                GREAT OFFERS
              </h4>
              <p className="mt-2 text-xs" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                Save FLAT 10% OFF on first order
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Middle yellow content area: ensure both boxes are vertically centered */}
      <div className="w-full bg-[#F4C542] border-t border-b border-black/10">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Quick links (left) - vertically centered with the middle box */}
            <div className="text-left flex flex-col justify-center">
              <h5 className="text-sm font-semibold mb-4" style={{ fontFamily: "'Montserrat', sans-serif", color: "#111827" }}>
                Quick links
              </h5>
              <ul className="space-y-2 text-sm" style={{ fontFamily: "'Montserrat', sans-serif", color: "#111827" }}>
                <li><a href="#" className="hover:underline">About Us</a></li>
                <li><a href="#" className="hover:underline">FAQ's</a></li>
                <li><a href="#" className="hover:underline">Policies</a></li>
              </ul>
            </div>

            {/* Center - logo + description (left-aligned, vertically centered) */}
            <div className="text-left flex items-center">
              <div>
                <img src="/assets/logo.png" alt="milletbee logo" className="h-12 mb-4 object-contain" />
                <div className="text-sm max-w-md" style={{ fontFamily: "'Montserrat', sans-serif", color: "#111827" }}>
                  <strong>Milletbee: Nourishing Traditions, Naturally</strong>
                  <p className="mt-3 text-sm">
                    Our brand prioritizes wholesome, nutritious food that connects consumers with the farmers, aiming to make healthy eating accessible and enjoyable.
                  </p>
                </div>
              </div>
            </div>

            {/* Right column intentionally empty to match layout (keeps spacing symmetric) */}
            <div />
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
