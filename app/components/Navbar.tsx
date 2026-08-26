"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "Projects", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: "hero", label: "Home" },
        { id: "projects", label: "Projects" },
        { id: "about", label: "About" },
        { id: "skills", label: "Skills" },
        { id: "experience", label: "Experience" },
        { id: "contact", label: "Contact" },
      ];

      const scrollPos = window.scrollY + 250;

      for (const sec of sections) {
        const el = document.getElementById(sec.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sec.label);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Vertical Left Sidebar Navigation (matching media_1787771592069.png) */}
      <header className="fixed left-4 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col">
        <nav className="flex flex-col items-center justify-between transition-all duration-300 rounded-[44px] px-2.5 py-8 gap-8 bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          {/* Logo Badge (rounded black square HN) */}
          <a href="#hero" className="flex items-center justify-center group relative">
            <div className="relative w-12 h-12 rounded-[14px] bg-black flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:scale-105 border border-black shadow-sm">
              <span className="relative z-10 text-white font-black text-lg tracking-tighter">
                HN
              </span>
            </div>
          </a>

          {/* Vertical Links with Active Black Pill */}
          <div className="flex flex-col items-center gap-3">
            {navLinks.map((link) => {
              const isActive = activeSection === link.label;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`px-3.5 py-2 w-full text-center rounded-full text-[13px] transition-all duration-200 ${
                    isActive
                      ? "bg-black text-white font-bold shadow-sm"
                      : "text-black font-semibold hover:bg-black hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* Bottom Action (+) Button */}
          <div className="flex items-center justify-center">
            <a
              href="#contact"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white font-bold hover:scale-105 active:scale-95 transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,0.5)]"
              title="Get in Touch"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </a>
          </div>
        </nav>
      </header>

      {/* Mobile Top Header Bar & Menu (matching media_1787771537088.png) */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 px-4 pt-3.5 pb-2 bg-gradient-to-b from-white via-white to-transparent">
        <nav className="w-full max-w-[500px] mx-auto flex items-center justify-between rounded-full px-3.5 py-2 bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <a href="#hero" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-[10px] bg-black flex items-center justify-center text-white font-black text-sm">
              HN
            </div>
            <span className="text-base font-extrabold text-black">Harshan</span>
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-black bg-white hover:bg-black hover:text-white transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M4 6H20M4 12H20M4 18H20" />
              </svg>
            )}
          </button>
        </nav>

        {/* Mobile Dropdown Menu (matching media_1787771537088.png exactly) */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="w-full max-w-[500px] mx-auto bg-white border-2 border-black rounded-[32px] p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mt-3 flex flex-col gap-2.5 z-50"
            >
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-3 px-5 rounded-2xl border-2 border-black bg-white text-black font-bold text-sm hover:bg-black hover:text-white transition-all text-left shadow-[2px_2px_0px_0px_rgba(0,0,0,0.4)]"
                >
                  {link.label}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
