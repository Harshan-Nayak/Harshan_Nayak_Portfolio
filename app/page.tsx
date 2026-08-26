"use client";

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppFAB from "./components/WhatsAppFAB";
import DetailDrawer, { ProjectDetailData } from "./components/DetailDrawer";
import { usePortfolioStore } from "./ConvexClientProvider";

export default function Home() {
  const [selectedProjectSlug, setSelectedProjectSlug] = useState<string | null>(null);
  const store = usePortfolioStore();

  const projects = store ? store.state.projects : [];

  const selectedProject: ProjectDetailData | null =
    selectedProjectSlug
      ? (projects.find((p) => p.slug === selectedProjectSlug) as ProjectDetailData) || null
      : null;

  const handleOpenProjectDrawer = (slug: string) => {
    setSelectedProjectSlug(slug);
  };

  return (
    <main className="flex flex-col min-h-screen lg:pl-36 bg-white relative overflow-x-hidden pt-16 lg:pt-0">
      {/* Left Vertical Dock Navigation / Mobile Top Header */}
      <Navbar />

      {/* Main Sections */}
      <Hero />
      <Projects onSelectProject={handleOpenProjectDrawer} />
      <About />
      <TechStack />
      <Experience />
      <Contact />

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button (+91 7989628048) */}
      <WhatsAppFAB />

      {/* Slide-in Project Detail Drawer (from bottom) */}
      <DetailDrawer
        isOpen={!!selectedProject}
        onClose={() => setSelectedProjectSlug(null)}
        project={selectedProject}
      />
    </main>
  );
}
