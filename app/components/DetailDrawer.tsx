"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectItem } from "../data/initialData";

export type ProjectDetailData = ProjectItem;

export default function DetailDrawer({
  isOpen,
  onClose,
  project,
}: {
  isOpen: boolean;
  onClose: () => void;
  project: ProjectDetailData | null;
}) {
  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[90] cursor-pointer"
          />

          {/* Bottom Slide-Up Sheet (matching media_1787770486717.png exactly) */}
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-x-0 bottom-0 top-[8%] bg-white rounded-t-[40px] md:rounded-t-[56px] z-[100] shadow-[0_-20px_80px_rgba(0,0,0,0.15)] overflow-hidden flex flex-col border-t-2 border-black"
          >
            {/* Top Handle Header Bar */}
            <div className="flex flex-col items-center pt-4 pb-3 border-b border-gray-100 sticky top-0 bg-white/95 backdrop-blur-md z-10">
              <div className="w-12 h-1.5 bg-gray-300 rounded-full mb-2" />
              <button
                onClick={onClose}
                aria-label="Close drawer"
                className="absolute right-6 md:right-8 top-5 w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-300 cursor-pointer"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Scrollable Content Area */}
            <div className="flex-1 overflow-y-auto px-6 py-8 md:px-16 lg:px-24">
              <div className="max-w-[1100px] mx-auto">
                {/* Category Tag + Divider */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-4 py-1.5 bg-black text-white rounded-full text-[10px] font-bold uppercase tracking-widest">
                    {project.tags?.[0] || project.category}
                  </span>
                  <div className="h-[2px] w-12 bg-black/10" />
                </div>

                {/* Big Bold Title */}
                <h2 className="text-[clamp(2.5rem,6vw,4.5rem)] font-black text-black leading-[0.95] tracking-tight mb-8">
                  {project.title}
                </h2>

                {/* Main Descriptions */}
                <div className="space-y-4 mb-12">
                  <p className="text-xl md:text-2xl text-black font-bold leading-snug">
                    {project.longDescription}
                  </p>
                  <p className="text-base text-gray-500 font-medium">
                    {project.tagline}
                  </p>
                </div>

                {/* Two Column Section: Methodology (Left) and Technologies / Live Card (Right) */}
                <div className="grid lg:grid-cols-12 gap-12 pt-8 border-t border-gray-100">
                  {/* Left Column: Methodology & Deliverables */}
                  <div className="lg:col-span-7 space-y-12">
                    {/* The Methodology / Engineering Steps */}
                    {project.process && project.process.length > 0 && (
                      <div>
                        <h3 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-8">
                          The Methodology
                        </h3>

                        <div className="space-y-8">
                          {project.process.map((step, idx) => (
                            <div key={idx} className="relative pl-8 border-l-2 border-black/10">
                              <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-black" />
                              <span className="text-[11px] font-bold uppercase text-gray-400 tracking-wider">
                                Step {idx + 1}
                              </span>
                              <h4 className="text-lg font-bold text-black mt-1 mb-2">
                                {step.title}
                              </h4>
                              <p className="text-sm text-gray-600 leading-relaxed">
                                {step.description}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Architecture Blueprint if available */}
                    {project.architecture && (
                      <div className="p-6 rounded-3xl bg-gray-50 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-gray-500 block mb-2">
                          Architecture Blueprint
                        </span>
                        <p className="text-xs font-mono text-black leading-relaxed">
                          {project.architecture}
                        </p>
                      </div>
                    )}

                    {/* Deliverables */}
                    {project.deliverables && project.deliverables.length > 0 && (
                      <div>
                        <h3 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-6">
                          Key Deliverables
                        </h3>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {project.deliverables.map((del, dIdx) => (
                            <div
                              key={dIdx}
                              className="flex items-center gap-3 p-3.5 rounded-2xl border border-gray-200 bg-gray-50/50"
                            >
                              <span className="w-5 h-5 rounded-full bg-black text-white flex items-center justify-center text-[10px] font-bold">
                                ✓
                              </span>
                              <span className="text-xs font-bold text-black">{del}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Right Column: Technologies & Action Box */}
                  <div className="lg:col-span-5 space-y-8">
                    {/* Technologies Pills */}
                    <div>
                      <h3 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-4">
                        Technologies
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((t) => (
                          <span
                            key={t}
                            className="px-4 py-2 rounded-full border border-gray-200 bg-gray-50 text-xs font-bold text-black"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Finished Product Card (matching media_1787770486717.png) */}
                    <div className="bg-white border-2 border-black rounded-3xl p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col items-center text-center">
                      <div className="w-16 h-16 rounded-2xl bg-black text-white flex items-center justify-center mb-6">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                          <line x1="8" y1="21" x2="16" y2="21" />
                          <line x1="12" y1="17" x2="12" y2="21" />
                        </svg>
                      </div>

                      <h4 className="text-2xl font-black text-black mb-3">
                        See the finished product
                      </h4>
                      <p className="text-xs text-gray-500 max-w-xs mb-6">
                        Explore the live application, system workflows, and technical implementation.
                      </p>

                      {project.detailsUrl ? (
                        <a
                          href={project.detailsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-black text-white text-sm font-bold hover:bg-zinc-800 transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:-translate-y-0.5"
                        >
                          <span>Visit Website</span>
                          <span>→</span>
                        </a>
                      ) : (
                        <a
                          href="https://github.com/Harshan-Nayak"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-black text-white text-sm font-bold hover:bg-zinc-800 transition-all"
                        >
                          <span>GitHub Profile</span>
                          <span>→</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
