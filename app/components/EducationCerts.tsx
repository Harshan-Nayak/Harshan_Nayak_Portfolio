"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Award,
  Code2,
  Cpu,
  CheckCircle2,
  ExternalLink,
  BookOpen,
} from "./Icons";

export default function EducationCerts() {
  const coursework = [
    "Data Structures & Algorithms",
    "Computer Networks",
    "Object Oriented Programming (OOP)",
    "Database Management Systems (DBMS)",
    "Operating Systems",
    "Internet of Things (IoT)",
  ];

  const certifications = [
    {
      title: "Data Visualization",
      issuer: "Verified Credential",
      year: "Certified",
      description: "Advanced data storytelling, interactive dashboards, and visual analytical paradigms.",
    },
    {
      title: "Data Analytics",
      issuer: "Verified Credential",
      year: "Certified",
      description: "Statistical modeling, exploratory data analysis, and predictive metrics processing.",
    },
  ];

  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black text-white dark:bg-white dark:text-black text-[11px] font-bold uppercase tracking-widest mb-4">
          Academic &amp; Accreditations
        </span>
        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-zinc-50">
          Education &amp; Credentials
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 max-w-xl text-sm sm:text-base mt-3">
          Strong computer science fundamentals rooted in competitive programming and systems design.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* IIITDM Jabalpur Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="lg:col-span-2 bg-white dark:bg-zinc-900 rounded-3xl border-2 border-black dark:border-zinc-700 p-6 sm:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.12)] flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-black text-xl shadow-md">
                <GraduationCap size={24} />
              </div>
              <div>
                <span className="px-2.5 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 text-[10px] font-bold uppercase tracking-wider">
                  Institute of National Importance
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-zinc-900 dark:text-zinc-100 mt-1">
                  IIITDM Jabalpur
                </h3>
              </div>
            </div>

            <p className="text-sm font-bold text-zinc-800 dark:text-zinc-200 mb-2">
              Bachelor of Technology (B.Tech) in Computer Science &amp; Engineering
            </p>
            <p className="text-xs text-zinc-500 font-mono mb-6">
              Indian Institute of Information Technology, Design and Manufacturing Jabalpur
            </p>

            {/* Coursework Pills */}
            <div className="border-t border-zinc-100 dark:border-zinc-800 pt-5">
              <h4 className="text-xs font-black uppercase tracking-widest text-zinc-500 mb-3 flex items-center gap-1.5">
                <BookOpen size={14} className="text-zinc-400" />
                <span>Undergraduate Core Coursework</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {coursework.map((course) => (
                  <div
                    key={course}
                    className="flex items-center gap-2 text-xs font-semibold text-zinc-700 dark:text-zinc-300 bg-zinc-50 dark:bg-zinc-950 p-2 rounded-xl border border-zinc-200 dark:border-zinc-800"
                  >
                    <CheckCircle2 size={14} className="text-blue-500 flex-shrink-0" />
                    <span>{course}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between text-xs font-mono text-zinc-500">
            <span>Specialization: Computer Science &amp; Systems</span>
            <span className="text-emerald-500 font-bold">✓ B.Tech CSE</span>
          </div>
        </motion.div>

        {/* Certifications Column */}
        <div className="space-y-6 flex flex-col justify-between">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 + idx * 0.1 }}
              className="bg-white dark:bg-zinc-900 rounded-3xl border-2 border-black dark:border-zinc-700 p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.12)] flex-1 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-amber-500">
                    <Award size={18} />
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 text-[10px] font-bold uppercase">
                    {cert.year}
                  </span>
                </div>

                <h3 className="text-lg font-black text-zinc-900 dark:text-zinc-100">
                  {cert.title}
                </h3>
                <p className="text-xs text-zinc-500 font-mono mt-0.5 mb-2">
                  {cert.issuer}
                </p>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {cert.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-800 flex items-center gap-1.5 text-[11px] font-mono text-zinc-500">
                <CheckCircle2 size={13} className="text-emerald-500" />
                <span>Verified Industry Accreditation</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
