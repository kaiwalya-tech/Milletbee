// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

/**
 * Navbar.jsx (router-aware)
 * - Uses react-router-dom NavLink so clicks navigate to routes (/, /shop, /about, /contact).
 * - Closes mobile menu automatically when route changes.
 * - Logo left, nav on right (desktop), hamburger on mobile.
 */

const LINKS = [
  { label: "Home", to: "/" },
  { label: "Shop", to: "/shop" },
  { label: "About Us", to: "/about" },
  { label: "Contact Us", to: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  // close mobile when route changes
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <header className="top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo (left) */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src="assets/logo.png" alt="Logo" className="h-12 w-auto" />
            </Link>
          </div>

          {/* Right: desktop nav + mobile toggle */}
          <div className="flex items-center gap-4">
            {/* Desktop links */}
            <nav className="hidden md:flex md:items-center md:gap-6">
              {LINKS.map(({ label, to }) => (
                <NavLink
                  key={label}
                  to={to}
                  end={to === "/"}
                  className={({ isActive }) =>
                    `relative text-sm font-medium text-black/90 px-2 py-2 hover:text-black ${
                      isActive ? "font-semibold" : ""
                    }`
                  }
                >
                  <span>{label}</span>
                  <NavLink
                    to={to}
                    end={to === "/"}
                    className="sr-only"
                    aria-hidden
                  />
                  {/* brown underline if active */}
                  <NavLink
                    to={to}
                    end={to === "/"}
                    className={({ isActive }) =>
                      isActive
                        ? "absolute left-1/2 -translate-x-1/2 -bottom-0.5 h-0.5 w-6 rounded-full"
                        : "hidden"
                    }
                    style={{ backgroundColor: "#492419" }}
                    aria-hidden
                  />
                </NavLink>
              ))}
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
              <div className="flex flex-col gap-2 items-center">
                {LINKS.map(({ label, to }) => (
                  <NavLink
                    key={label}
                    to={to}
                    end={to === "/"}
                    className={({ isActive }) =>
                      `px-3 py-2 rounded-md text-sm ${isActive ? "font-semibold text-black" : "text-black/90"}`
                    }
                  >
                    {label}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
