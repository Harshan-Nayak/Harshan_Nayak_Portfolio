"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  badge?: string;
  summary: string;
  highlights: string[];
  techStack: string[];
}

const experiences: ExperienceItem[] = [
  {
    id: "hcl-software",
    role: "Software Engineer 2",
    company: "HCLSoftware",
    period: "Sep 2025 – Present",
    location: "Noida, UP • On-site",
    badge: "Current Role",
    summary: "Agentic AI & GenAI Automation Engineer engineering autonomous enterprise workflows on HCL BigFix AEX and self-healing Runbook AI.",
    highlights: [
      "Worked as an Agentic AI Engineer on HCL BigFix AEX — The Agentic AI Platform for the Modern Enterprise, designing multi-agent autonomous decision workflows.",
      "Developed GenAI-driven intelligent runbook automations for HCL BigFix Runbook AI, enabling autonomous problem diagnosis and self-healing IT operations.",
      "Automated Infrastructure-as-a-Service (IaaS) workflows using Ansible and Red Hat AWX across complex enterprise client environments.",
      "Integrated automation remediation pipelines with ServiceNow to streamline enterprise incident lifecycle and change management."
    ],
    techStack: [
      "HCL BigFix AEX",
      "BigFix Runbook AI",
      "Agentic AI",
      "Ansible",
      "Red Hat AWX",
      "ServiceNow",
      "Python"
    ]
  },
  {
    id: "nexocabs",
    role: "Full Stack Developer / Software Engineer",
    company: "NexoCabs Private Limited",
    period: "Nov 2024 – Mar 2025",
    location: "Goa, India • Remote",
    summary: "Engineered scalable Next.js and Firebase web applications delivering 30% performance gains and sub-second page loads.",
    highlights: [
      "Developed and deployed high-traffic web applications with Next.js and Firebase, increasing system efficiency by 30% and reducing page load time by 25%.",
      "Implemented secure role-based user authentication and real-time database synchronizations, boosting app security and processing speed by 20%."
    ],
    techStack: ["Next.js", "React", "Firebase Auth", "Cloud Firestore", "Tailwind CSS", "TypeScript"]
  },
  {
    id: "nexadev",
    role: "Founder & Lead Developer",
    company: "NexaDev - IT Solutions",
    period: "May 2023 – May 2024",
    location: "Jabalpur, MP • On-site",
    summary: "Founded a software solutions startup, secured 3+ qualified client deals in 3 months, and led an engineering team of 8+ developers.",
    highlights: [
      "Founded and led a tech solutions firm, securing 3+ enterprise/business client contracts within the first 90 days.",
      "Supervised and mentored 8+ developers in internship roles on system architecture, project management, code reviews, and client deliverables."
    ],
    techStack: ["Startup Leadership", "Full Stack Development", "Client Architecture", "Next.js", "Node.js"]
  },
  {
    id: "referrush",
    role: "Full Stack Engineer (Internship)",
    company: "ReferRush",
    period: "Jan 2022 – Aug 2023",
    location: "Bengaluru, Karnataka • Remote",
    summary: "Architected a Shopify-integrated storefront app utilizing Next.js and Firebase cloud services for real-time dynamic commerce.",
    highlights: [
      "Contributed to core storefront modules for a Shopify ecosystem application utilizing Next.js on frontend and Firebase backend.",
      "Integrated Shopify Admin & Storefront GraphQL/REST APIs for real-time inventory synchronization, authentication, and order workflows."
    ],
    techStack: ["Next.js", "React", "Shopify API", "Firebase", "Tailwind CSS"]
  },
  {
    id: "indiyase",
    role: "Full-Stack Developer (Internship)",
    company: "Indiyase.in",
    period: "May 2022 – May 2023",
    location: "Karnataka, India • Remote",
    summary: "Collaborated in a fast-paced 6-person startup squad to engineer and launch an interactive web platform in a 15-day sprint.",
    highlights: [
      "Built and launched a complete software platform within a rapid 15-day sprint alongside a 6-developer squad.",
      "Increased average session duration by 35% by streamlining navigation taxonomies, interactive elements, and live data streaming."
    ],
    techStack: ["JavaScript (ES7)", "Next.js", "Firebase", "UI/UX Optimization"]
  }
];

export default function Experience() {
  const [expandedId, setExpandedId] = useState<string>("hcl-software");

  return (
    <section id="experience" className="relative py-20 px-4 md:px-8 bg-white">
      <div className="relative z-10 max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="bg-white border-2 border-black rounded-[32px] p-8 md:p-12 text-center mb-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border-2 border-black rounded-full text-xs font-bold text-black mb-4 uppercase tracking-wider">
            Career Timeline
          </span>
          <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-extrabold text-black leading-tight">
            Professional Experience
          </h2>
          <p className="mt-3 text-black max-w-xl mx-auto leading-relaxed text-sm sm:text-base">
            From scaling startup platforms to architecting enterprise-grade Agentic AI and self-healing runbooks.
          </p>
        </div>

        {/* Timeline Cards */}
        <div className="space-y-6">
          {experiences.map((exp, idx) => {
            const isExpanded = expandedId === exp.id;
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-white border-2 border-black rounded-[32px] p-6 sm:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-300"
              >
                <div
                  onClick={() => setExpandedId(isExpanded ? "" : exp.id)}
                  className="flex items-start justify-between gap-4 cursor-pointer"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-black text-white flex items-center justify-center font-black text-base flex-shrink-0">
                      {exp.company.substring(0, 3).toUpperCase()}
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-xl sm:text-2xl font-black text-black">
                          {exp.role}
                        </h3>
                        {exp.badge && (
                          <span className="px-2.5 py-0.5 rounded-full bg-black text-white text-[10px] font-bold uppercase tracking-wider">
                            {exp.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-xs sm:text-sm font-bold text-zinc-600 font-mono mt-0.5">
                        {exp.company} • {exp.period} • {exp.location}
                      </p>
                    </div>
                  </div>

                  <span className="w-8 h-8 rounded-full border-2 border-black flex items-center justify-center font-bold text-xs">
                    {isExpanded ? "−" : "+"}
                  </span>
                </div>

                {isExpanded && (
                  <div className="mt-6 pt-6 border-t border-black/10">
                    <p className="text-sm text-black font-medium mb-4">
                      {exp.summary}
                    </p>

                    <div className="space-y-2.5 mb-6">
                      {exp.highlights.map((h, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-black">
                          <span className="text-black font-bold">✓</span>
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {exp.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full bg-zinc-100 border border-zinc-300 text-black text-[10px] font-mono font-bold"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
