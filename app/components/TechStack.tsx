"use client";

import React from "react";
import { motion } from "framer-motion";

export default function TechStack() {
  const stackItems = [
    {
      title: "Modern Web Apps",
      subtitle: "Next.js 15, React 19, TypeScript",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      ),
    },
    {
      title: "Agentic AI & AWX",
      subtitle: "BigFix AEX, Runbook AI, Ansible",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="3" />
          <line x1="12" y1="18" x2="12" y2="18.01" />
        </svg>
      ),
    },
    {
      title: "Cloud & Automation",
      subtitle: "AWS, ServiceNow, Red Hat AWX",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
        </svg>
      ),
    },
    {
      title: "Real-Time Databases",
      subtitle: "Convex, Firebase, MongoDB, Redis",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        </svg>
      ),
    },
  ];

  return (
    <section id="skills" className="relative py-20 px-4 md:px-8 bg-white">
      <div className="relative z-10 max-w-[1280px] mx-auto">
        {/* Black Container Card */}
        <div className="bg-black border-2 border-black rounded-[32px] shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)] p-8 md:p-12 lg:p-16 overflow-hidden relative text-white">
          <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white rounded-full text-xs font-bold text-black mb-4 uppercase tracking-wider">
                Technical Arsenal
              </span>
              <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-extrabold text-white leading-tight">
                Built With High-Performance Tech Stacks
              </h2>
              <p className="mt-4 text-zinc-300 text-[15px] leading-relaxed max-w-md">
                I leverage modern Agentic AI frameworks, automated Ansible IaaS pipelines, and reactive Next.js stacks to engineer robust applications.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stackItems.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-zinc-900 border-2 border-white/20 rounded-2xl p-5 hover:bg-white hover:text-black hover:border-white transition-all duration-300 group cursor-pointer"
                >
                  <div className="mb-3 opacity-90 group-hover:text-black transition-colors">
                    {item.icon}
                  </div>
                  <p className="text-white group-hover:text-black font-bold text-sm leading-tight transition-colors">
                    {item.title}
                  </p>
                  <p className="text-zinc-400 group-hover:text-zinc-800 text-[11px] font-mono mt-1 transition-colors">
                    {item.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
