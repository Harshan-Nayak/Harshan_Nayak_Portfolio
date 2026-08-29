"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const resumeLink = "https://drive.google.com/file/d/1Aebp6MeMKoEaUPi7yAy5SGgMWsk1Vk6i/view?usp=sharing";
  const phone = "+91 7989628048";
  const email = "harshan2390@gmail.com";
  const whatsappUrl = "https://wa.me/917989628048?text=Hi%20Harshan%2C%20I%20would%20like%20to%20connect%20with%20you.";

  return (
    <section id="hero" className="relative min-h-[92vh] flex flex-col justify-between pt-8 pb-16 px-4 md:px-8">
      {/* Top Header Row with Direct Action Options in Top Right Corner */}
      <div className="w-full max-w-[1280px] mx-auto flex flex-wrap items-center justify-between gap-4 pt-2">
        <div className="hidden sm:block">
          <span className="text-xs font-mono text-gray-400 font-bold uppercase tracking-wider">
            Portfolio • 2026
          </span>
        </div>

        {/* Top-Right Action Items: Resume, Call, Email, WhatsApp */}
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 ml-auto">
          {/* View Resume Button */}
          <a
            href={resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-black text-white text-xs font-bold hover:bg-zinc-800 transition-all duration-200 shadow-[3px_3px_0px_0px_rgba(0,0,0,0.3)] hover:-translate-y-0.5"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
            <span>View Resume</span>
          </a>

          {/* Direct Call */}
          <a
            href={`tel:${phone}`}
            title="Call Harshan"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border-2 border-black bg-white text-black text-xs font-bold hover:bg-black hover:text-white transition-all duration-200 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span className="hidden md:inline">{phone}</span>
            <span className="md:hidden">Call</span>
          </a>

          {/* Direct Email */}
          <a
            href={`mailto:${email}`}
            title="Email Harshan"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border-2 border-black bg-white text-black text-xs font-bold hover:bg-black hover:text-white transition-all duration-200 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            <span className="hidden md:inline">{email}</span>
            <span className="md:hidden">Email</span>
          </a>

          {/* Direct WhatsApp */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Chat on WhatsApp (+91 7989628048)"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-black text-white text-xs font-bold hover:bg-zinc-800 transition-all duration-200 shadow-[3px_3px_0px_0px_rgba(0,0,0,0.3)]"
          >
            {/* Official WhatsApp SVG */}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.062-2.115-.527-1.705-.705-2.812-2.45-2.897-2.564-.085-.114-.689-.915-.689-1.745s.434-1.238.587-1.408c.153-.17.334-.213.447-.213.112 0 .225.001.323.006.104.005.244-.04.382.291.144.344.49 1.192.533 1.28.043.088.072.19.014.305-.058.115-.088.188-.175.291-.087.103-.183.23-.261.309-.09.09-.184.188-.079.369.105.181.468.772 1.004 1.249.691.614 1.274.805 1.455.895.181.09.288.077.394-.044.106-.121.454-.528.576-.708.121-.18.244-.15.408-.09.164.06 1.042.492 1.22.582.179.09.297.135.341.21.044.075.044.436-.1.841zM12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.66 1.434 5.178L2 22l4.982-1.39A9.957 9.957 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" />
            </svg>
            <span>WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Main Center Content */}
      <div className="relative z-10 max-w-[1000px] mx-auto w-full flex flex-col items-center text-center my-auto pt-10">
        {/* Top Tag Pill */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <span className="inline-flex items-center gap-2 px-5 py-2 bg-white text-black border-2 border-black rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] mb-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            HARSHAN NAYAK • SOFTWARE ENGINEER 2
          </span>
        </motion.div>

        {/* Big Bold Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-[clamp(2.5rem,7vw,5.5rem)] font-extrabold leading-[1.05] text-black tracking-tight mb-8"
        >
          Software Engineer 2 <br />
          <span className="italic font-serif">Agentic AI &amp; Systems</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[clamp(1rem,2vw,1.25rem)] text-black leading-relaxed max-w-2xl mx-auto mb-10 font-normal"
        >
          I am a Software Engineer 2 at <strong className="font-bold">HCLSoftware</strong> specializing in autonomous Agentic AI platforms (BigFix AEX), Intelligent Runbook Automation (BigFix Runbook AI), Ansible, AWX, and modern Next.js web applications.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-black text-white font-bold text-[15px] hover:bg-zinc-800 transition-all duration-300 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.3)] hover:-translate-y-0.5"
          >
            <span>Start a Conversation</span>
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>

          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-black bg-white text-black font-bold text-[15px] hover:bg-black hover:text-white transition-all duration-300 active:scale-95 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          >
            Explore Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
}
