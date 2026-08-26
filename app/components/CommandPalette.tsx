"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  CloseIcon,
  Terminal,
  Briefcase,
  Layers,
  Cpu,
  Mail,
  FileText,
  Github,
  Linkedin,
  Sun,
  Moon,
  ExternalLink,
  Bot,
  Zap,
} from "./Icons";
import { useDynamicIsland } from "./DynamicIsland";

interface CommandItem {
  id: string;
  title: string;
  category: "Navigation" | "Projects" | "Actions" | "Social";
  icon: React.ReactNode;
  action: () => void;
  shortcut?: string;
}

export default function CommandPalette({
  isOpen,
  onClose,
  onOpenProjectDrawer,
}: {
  isOpen: boolean;
  onClose: () => void;
  onOpenProjectDrawer?: (slug: string) => void;
}) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { showNotification, openTerminal } = useDynamicIsland();

  // Handle global Cmd+K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // If we had external open state, we'd trigger it here
        }
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    showNotification("Theme Updated", isDark ? "Switched to Cyber Dark Mode" : "Switched to Stark Light Mode", "info");
    onClose();
  };

  const copyContact = (type: "email" | "phone") => {
    const text = type === "email" ? "harshan2390@gmail.com" : "+91 7989628048";
    navigator.clipboard.writeText(text);
    showNotification("Copied to Clipboard", `${type === "email" ? "Email" : "Phone"} copied: ${text}`, "success");
    onClose();
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    onClose();
  };

  const commands: CommandItem[] = [
    // Navigation
    { id: "nav-hero", title: "Overview / Hero", category: "Navigation", icon: <Bot size={16} />, action: () => scrollTo("hero") },
    { id: "nav-exp", title: "Experience Timeline (HCL, NexoCabs, NexaDev)", category: "Navigation", icon: <Briefcase size={16} />, action: () => scrollTo("experience") },
    { id: "nav-proj", title: "Featured Projects & Architectures", category: "Navigation", icon: <Layers size={16} />, action: () => scrollTo("projects") },
    { id: "nav-terminal", title: "Launch Agentic AI CLI Console", category: "Navigation", icon: <Terminal size={16} />, action: () => { scrollTo("terminal-console"); openTerminal(); } },
    { id: "nav-skills", title: "Skills Matrix & Endorsements", category: "Navigation", icon: <Cpu size={16} />, action: () => scrollTo("skills") },
    { id: "nav-edu", title: "Education (IIITDM Jabalpur) & Certs", category: "Navigation", icon: <FileText size={16} />, action: () => scrollTo("education") },
    { id: "nav-contact", title: "Contact & Collaboration Form", category: "Navigation", icon: <Mail size={16} />, action: () => scrollTo("contact") },

    // Projects
    { id: "p-bigfix", title: "Project: HCL BigFix AEX & Runbook AI", category: "Projects", icon: <Zap size={16} className="text-yellow-500" />, action: () => { if (onOpenProjectDrawer) onOpenProjectDrawer("hcl-bigfix-agentic-ai"); else scrollTo("projects"); onClose(); } },
    { id: "p-schedsync", title: "Project: SchedSync AI Personal Secretary", category: "Projects", icon: <Zap size={16} className="text-blue-500" />, action: () => { if (onOpenProjectDrawer) onOpenProjectDrawer("schedsync-ai-secretary"); else scrollTo("projects"); onClose(); } },
    { id: "p-jobreferral", title: "Project: JobReferral Enterprise Network", category: "Projects", icon: <Layers size={16} />, action: () => { if (onOpenProjectDrawer) onOpenProjectDrawer("jobreferral-platform"); else scrollTo("projects"); onClose(); } },
    { id: "p-resume", title: "Project: Resume Tailor AI ATS Tool", category: "Projects", icon: <FileText size={16} />, action: () => { if (onOpenProjectDrawer) onOpenProjectDrawer("resume-tailor-ai"); else scrollTo("projects"); onClose(); } },
    { id: "p-indiyase", title: "Project: Indiyase.in 29-State E-Commerce", category: "Projects", icon: <Layers size={16} />, action: () => { if (onOpenProjectDrawer) onOpenProjectDrawer("indiyase-ecommerce"); else scrollTo("projects"); onClose(); } },
    { id: "p-dsa", title: "Project: DSA Wizard 500+ CP Visualizer", category: "Projects", icon: <Cpu size={16} />, action: () => { if (onOpenProjectDrawer) onOpenProjectDrawer("dsa-wizard-toolkit"); else scrollTo("projects"); onClose(); } },

    // Actions
    { id: "act-theme", title: "Toggle Cyber Dark / Stark Light Mode", category: "Actions", icon: <Sun size={16} />, action: toggleTheme, shortcut: "T" },
    { id: "act-copy-mail", title: "Copy Email (harshan2390@gmail.com)", category: "Actions", icon: <Mail size={16} />, action: () => copyContact("email") },
    { id: "act-copy-phone", title: "Copy Phone (+91 7989628048)", category: "Actions", icon: <Mail size={16} />, action: () => copyContact("phone") },
    { id: "act-wa", title: "Chat on WhatsApp (+91 78279 28048)", category: "Actions", icon: <ExternalLink size={16} />, action: () => { window.open("https://wa.me/917827928048?text=Hi%20Harshan%2C%20I%20reviewed%20your%20portfolio%20and%20would%20love%20to%20connect.", "_blank"); onClose(); } },

    // Social Links
    { id: "soc-gh", title: "GitHub: @Harshan-Nayak", category: "Social", icon: <Github size={16} />, action: () => { window.open("https://github.com/Harshan-Nayak", "_blank"); onClose(); } },
    { id: "soc-li", title: "LinkedIn: @harshan-nayak", category: "Social", icon: <Linkedin size={16} />, action: () => { window.open("https://www.linkedin.com/in/harshan-nayak-020754285/", "_blank"); onClose(); } },
  ];

  const filtered = query.trim() === ""
    ? commands
    : commands.filter((cmd) =>
        cmd.title.toLowerCase().includes(query.toLowerCase()) ||
        cmd.category.toLowerCase().includes(query.toLowerCase())
      );

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[120] flex items-start justify-center pt-20 px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
          />

          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: -10 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: -10 }}
            transition={{ type: "spring", damping: 26, stiffness: 350 }}
            className="relative w-full max-w-xl bg-white dark:bg-zinc-900 rounded-3xl border-2 border-black dark:border-zinc-700 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] dark:shadow-[10px_10px_0px_0px_rgba(255,255,255,0.15)] overflow-hidden z-10"
          >
            <div className="flex items-center px-4 py-3.5 border-b border-zinc-200 dark:border-zinc-800">
              <Search size={18} className="text-zinc-400 mr-3" />
              <input
                type="text"
                autoFocus
                placeholder="Search commands, projects, skills, or actions..."
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                className="w-full bg-transparent text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 text-sm focus:outline-none"
              />
              <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-500">
                ESC to close
              </span>
            </div>

            <div className="max-h-[380px] overflow-y-auto p-2">
              {filtered.length === 0 ? (
                <div className="py-12 text-center text-zinc-400 text-xs font-mono">
                  No matching commands found.
                </div>
              ) : (
                filtered.map((item, idx) => (
                  <button
                    key={item.id}
                    onClick={item.action}
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left text-xs transition-colors ${
                      selectedIndex === idx
                        ? "bg-black text-white dark:bg-white dark:text-black font-semibold"
                        : "text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="opacity-80">{item.icon}</span>
                      <span>{item.title}</span>
                    </div>
                    <span className="text-[10px] uppercase tracking-wider opacity-60">
                      {item.category}
                    </span>
                  </button>
                ))
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
