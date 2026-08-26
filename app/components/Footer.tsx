"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  const resumeUrl = "https://drive.google.com/file/d/1LMHvt9XGYQjNcmPNdhI3EokCtSiHx21f/view?usp=sharing";
  const whatsappUrl = "https://wa.me/917989628048?text=Hi%20Harshan%2C%20I%20would%20like%20to%20connect%20with%20you.";

  const footerLinks = {
    expertise: [
      { label: "Agentic AI (BigFix AEX)", href: "#projects" },
      { label: "Runbook Automation AI", href: "#projects" },
      { label: "Full-Stack Next.js 15", href: "#projects" },
      { label: "Ansible & Red Hat AWX", href: "#skills" },
      { label: "Real-Time Databases", href: "#skills" },
    ],
    navigation: [
      { label: "Home", href: "#hero" },
      { label: "Projects", href: "#projects" },
      { label: "About Me", href: "#about" },
      { label: "Technical Skills", href: "#skills" },
      { label: "Experience", href: "#experience" },
      { label: "Contact", href: "#contact" },
    ],
    connect: [
      { label: "WhatsApp Direct", href: whatsappUrl, external: true },
      { label: "LinkedIn Profile", href: "https://www.linkedin.com/in/harshan-nayak-020754285/", external: true },
      { label: "GitHub Profile", href: "https://github.com/Harshan-Nayak", external: true },
      { label: "View Resume (PDF)", href: resumeUrl, external: true },
      { label: "Direct Call", href: "tel:+917989628048", external: false },
    ],
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative pb-10 pt-4 px-4 md:px-8 bg-white">
      <div className="max-w-[1280px] mx-auto">
        {/* Rounded Black Footer Box (matching screenshot exactly) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-black text-white rounded-[36px] md:rounded-[48px] p-8 md:p-12 lg:p-14 overflow-hidden relative shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)] border-2 border-black"
        >
          {/* Main 4-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-white/15">
            {/* Column 1 & 2: Brand / Bio / Direct Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              {/* Brand Logo & Name */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-[12px] bg-white text-black flex items-center justify-center font-black text-sm tracking-tight shadow-sm">
                  HN
                </div>
                <span className="text-xl font-black text-white tracking-tight uppercase">
                  HARSHAN NAYAK
                </span>
              </div>

              {/* Bio description */}
              <p className="text-sm text-zinc-300 leading-relaxed max-w-sm font-normal">
                Software Engineer 2 at <strong className="text-white font-bold">HCLSoftware</strong> specializing in autonomous Agentic AI platforms, Intelligent Runbook Automation, Ansible, AWX, and scalable Next.js applications.
              </p>

              {/* Direct Contact Rows */}
              <div className="space-y-3 pt-2 text-xs font-mono text-zinc-300">
                <a
                  href="mailto:harshan2390@gmail.com"
                  className="flex items-center gap-3 hover:text-white transition-colors group"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-400 group-hover:text-white">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="M22 7l-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <span>harshan2390@gmail.com</span>
                </a>

                <a
                  href="tel:+917989628048"
                  className="flex items-center gap-3 hover:text-white transition-colors group"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-400 group-hover:text-white">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span>+91 7989628048</span>
                </a>

                <div className="flex items-center gap-3 text-zinc-400">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-400">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>Noida, Uttar Pradesh (On-site @ HCL)</span>
                </div>
              </div>
            </div>

            {/* Column 3: EXPERTISE */}
            <div className="space-y-4">
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-white">
                EXPERTISE
              </h3>
              <ul className="space-y-2.5 text-xs text-zinc-400 font-medium">
                {footerLinks.expertise.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="hover:text-white transition-colors">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: NAVIGATION */}
            <div className="space-y-4">
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-white">
                NAVIGATION
              </h3>
              <ul className="space-y-2.5 text-xs text-zinc-400 font-medium">
                {footerLinks.navigation.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="hover:text-white transition-colors">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 5: CONNECT */}
            <div className="space-y-4">
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-white">
                CONNECT
              </h3>
              <ul className="space-y-2.5 text-xs text-zinc-400 font-medium">
                {footerLinks.connect.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      className="hover:text-white transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400 font-mono">
            <p>© {new Date().getFullYear()} Harshan Nayak. All rights reserved.</p>

            <div className="flex items-center gap-6">
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Resume
              </a>
              <a
                href="https://github.com/Harshan-Nayak"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/harshan-nayak-020754285/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                LinkedIn
              </a>
              <button
                onClick={scrollToTop}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Top ↑
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
