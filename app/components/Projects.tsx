"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { usePortfolioStore } from "../ConvexClientProvider";

export default function Projects({
  onSelectProject,
}: {
  onSelectProject: (slug: string) => void;
}) {
  const store = usePortfolioStore();
  const projects = store ? store.state.projects : [];

  return (
    <section id="projects" className="relative w-full py-24 px-4 md:px-8 z-10 flex flex-col items-center bg-white">
      <div className="w-full max-w-[1280px]">
        {/* Section Header (matching Image 2) */}
        <div className="max-w-2xl mb-16 px-2">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-black text-white rounded-full text-[10px] font-bold uppercase tracking-widest mb-6">
            Our Portfolio
          </span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-black leading-[0.95]">
            Digital products built for the future.
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              onClick={() => onSelectProject(project.slug)}
              className="bg-white border-2 border-black rounded-[32px] p-7 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 flex flex-col justify-between cursor-pointer group"
            >
              <div>
                {/* Category Pill */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-zinc-100 border border-black text-black text-[10px] font-bold uppercase tracking-wider">
                    {project.category}
                  </span>
                  {project.metrics && (
                    <span className="text-[10px] font-mono font-bold text-zinc-600">
                      ⚡ {project.metrics.split("•")[0]}
                    </span>
                  )}
                </div>

                {/* Project Title */}
                <h3 className="text-2xl font-black text-black tracking-tight mb-2 group-hover:underline">
                  {project.title}
                </h3>

                {/* Tagline */}
                <p className="text-xs font-semibold text-zinc-700 mb-3">
                  {project.tagline}
                </p>

                {/* Description */}
                <p className="text-sm text-black leading-relaxed mb-6 font-normal">
                  {project.description}
                </p>
              </div>

              <div>
                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded-full bg-zinc-100 border border-zinc-300 text-black text-[10px] font-mono font-bold"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-0.5 rounded-full bg-zinc-100 text-zinc-500 text-[10px] font-mono">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* View Details Link */}
                <div className="flex items-center justify-between pt-4 border-t border-zinc-200 text-xs font-bold text-black">
                  <span className="group-hover:translate-x-1 transition-transform">
                    View System Blueprint →
                  </span>
                  <span className="text-[10px] uppercase font-mono text-zinc-500">
                    Deep Dive
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
