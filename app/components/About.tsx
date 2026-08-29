"use client";

import React from "react";
import { motion } from "framer-motion";

export default function About() {
  const principles = [
    "Agentic AI & Multi-Agent Workflows",
    "Algorithmic Rigor & Problem Solving",
    "Clean, Type-Safe Next.js Architectures",
    "Automated IaaS with Ansible & AWX",
    "Enterprise ServiceNow Remediation Pipelines",
    "Agile Sprints & Rapid Production Milestones",
  ];

  return (
    <section id="about" className="relative py-20 px-4 md:px-8 bg-white">
      <div className="relative z-10 max-w-[1280px] mx-auto">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main About Card */}
          <div className="lg:col-span-2 bg-white border-2 border-black rounded-[32px] p-8 md:p-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border-2 border-black rounded-full text-xs font-bold text-black mb-4 uppercase tracking-wider">
              About Me
            </span>
            <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-extrabold text-black leading-tight">
              Software Engineer 2 &amp; <span className="text-black">Agentic AI Builder</span>
            </h2>
            <p className="mt-4 text-black text-[16px] leading-relaxed max-w-2xl">
              I am a Computer Science graduate from <strong className="font-bold">IIITDM Jabalpur</strong> and currently a <strong className="font-bold">Software Engineer 2 at HCLSoftware</strong>. My core expertise lies in building autonomous agentic AI workflows on <strong className="font-bold">HCL BigFix AEX</strong>, intelligent runbook automations on <strong className="font-bold">BigFix Runbook AI</strong>, automated IaaS delivery with Ansible &amp; Red Hat AWX, and architecting performant Next.js applications.
            </p>
          </div>

          {/* Big Black Card */}
          <div className="bg-black rounded-[32px] border-2 border-black p-8 flex flex-col items-center justify-center text-center text-white shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)]">
            <p className="text-6xl font-black text-white">SE-2</p>
            <p className="text-white text-sm font-bold mt-2 uppercase tracking-wider">HCLSoftware</p>
            <p className="text-zinc-400 text-xs font-mono mt-1">BigFix AEX &amp; Runbook AI</p>
          </div>

          {/* Engineering Strengths Checklist */}
          <div className="lg:col-span-3 bg-white border-2 border-black rounded-[32px] p-8 md:p-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="text-lg font-bold text-black mb-6">Core Engineering Philosophy</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {principles.map((item, pIdx) => (
                <div
                  key={pIdx}
                  className="flex items-start gap-3 bg-white border-2 border-black text-black rounded-2xl p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="mt-0.5 flex-shrink-0">
                    <circle cx="12" cy="12" r="10" stroke="#000" strokeWidth="2" />
                    <path d="M8 12L11 15L16 9" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-xs font-bold text-black leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
