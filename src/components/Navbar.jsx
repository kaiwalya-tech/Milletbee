// src/components/Navbar.jsx
import React, { useState } from "react";

/**
 * Navbar.jsx (updated)
 * - Logo on the left, navigation links on the right for desktop.
 * - Added "Contact Us" to links.
 * - Removed search feature entirely.
 * - Mobile hamburger keeps same behavior and shows all links.
 * - Active link shows brown underline (#492419).
 */

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = ["Home", "Shop", "About Us", "Contact Us"];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* LEFT: Logo */}
          <div className="flex items-center">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setActive("Home");
                setMobileOpen(false);
              }}
              className="flex items-center"
            >
              <img
                src="assets/logo.png" /* REPLACE WITH ACTUAL IMAGE URL IF NEEDED */
                alt="Logo"
                className="h-8 w-auto"
              />
            </a>
          </div>

          {/* RIGHT: Desktop links + Mobile toggle */}
          <div className="flex items-center gap-4">
            {/* Desktop links (right) */}
            <nav className="hidden md:flex md:items-center md:gap-6">
              {links.map((link) => {
                const isActive = active === link;
                return (
                  <a
                    key={link}
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setActive(link);
                      setMobileOpen(false);
                    }}
                    className="relative text-sm font-medium text-black/90 px-2 py-2 hover:text-black"
                  >
                    <span>{link}</span>
                    {isActive && (
                      <span
                        className="absolute left-1/2 -translate-x-1/2 -bottom-0.5 h-0.5 w-6 rounded-full"
                        style={{ backgroundColor: "#492419" }}
                      />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Mobile hamburger */}
            <div className="md:hidden">
              <button
                aria-label="Toggle mobile menu"
                onClick={() => setMobileOpen((s) => !s)}
                className="p-2 rounded-md hover:bg-gray-100"
              >
                {mobileOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile panel */}
        {mobileOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white">
            <div className="px-4 py-4 space-y-3">
              <div className="flex flex-col gap-2">
                {links.map((link) => (
                  <a
                    key={link}
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setActive(link);
                      setMobileOpen(false);
                    }}
                    className={`px-3 py-2 rounded-md text-sm ${active === link ? "font-semibold text-black" : "text-black/90"}`}
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
