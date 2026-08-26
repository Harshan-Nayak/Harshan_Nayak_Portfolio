"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      id: "agentic-ai",
      title: "Agentic AI & Runbook Automation",
      description: "Autonomous multi-agent orchestration, GenAI runbook automation with Ansible & Red Hat AWX, and self-healing enterprise IT workflows.",
      tags: ["AGENTIC WORKFLOWS", "RUNBOOK AI", "ANSIBLE & AWX", "SERVICENOW INTEGRATION"],
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
    },
    {
      id: "web-dev",
      title: "Full-Stack Web Development",
      description: "High-performance full-stack web applications built with Next.js 15, React 19, TypeScript, and modern scalable state architectures.",
      tags: ["NEXT.JS APP ROUTER", "E-COMMERCE ENGINES", "SAAS ARCHITECTURAL DESIGN", "HEADLESS CMS"],
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      ),
    },
    {
      id: "cloud-systems",
      title: "Cloud Infrastructure & Real-Time DBs",
      description: "Scalable cloud services, real-time database synchronizations (Convex, Firebase, Redis, MongoDB), and automated CI/CD pipelines.",
      tags: ["CONVEX REALTIME", "FIREBASE & MONGO", "AWS CLOUD IAAS", "HIGH-CONCURRENCY"],
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        </svg>
      ),
    },
  ];

  return (
    <section id="services" className="relative py-20 px-4 md:px-8">
      <div className="relative z-10 max-w-[1280px] mx-auto">
        {/* Top Header Card (matching Image 3) */}
        <div className="bg-white border-2 border-black rounded-[32px] p-8 md:p-12 text-center mb-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border-2 border-black rounded-full text-xs font-bold text-black mb-4 uppercase tracking-wider">
            What We Do
          </span>
          <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-extrabold text-black leading-tight">
            Services We Offer
          </h2>
          <p className="mt-3 text-black max-w-xl mx-auto leading-relaxed text-sm sm:text-base">
            End-to-end technology services designed to help you innovate, scale, and succeed.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((srv, idx) => (
            <motion.div
              key={srv.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white border-2 border-black rounded-[32px] p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white border-2 border-black flex items-center justify-center mb-6 text-black">
                  {srv.icon}
                </div>

                <h3 className="text-xl font-bold text-black mb-3">
                  {srv.title}
                </h3>

                <p className="text-sm text-black leading-relaxed mb-6">
                  {srv.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {srv.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-zinc-100 border border-zinc-300 text-black text-[10px] font-mono font-bold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-black hover:underline pt-4 border-t border-zinc-200"
              >
                <span>Learn More</span>
                <span>→</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
