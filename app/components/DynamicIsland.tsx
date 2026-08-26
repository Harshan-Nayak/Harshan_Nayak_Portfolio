"use client";

import React, { useState, useEffect, createContext, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Terminal, CheckCircle2, Zap, MessageSquare, CloseIcon } from "./Icons";

export type NotificationType = "success" | "info" | "warning" | "agent";

export interface NotificationItem {
  id: string;
  title: string;
  message: string;
  type?: NotificationType;
}

interface DynamicIslandContextType {
  showNotification: (title: string, message: string, type?: NotificationType) => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
  openTerminal: () => void;
  setOpenTerminal: (fn: () => void) => void;
}

const DynamicIslandContext = createContext<DynamicIslandContextType | undefined>(undefined);

export function useDynamicIsland() {
  const context = useContext(DynamicIslandContext);
  if (!context) {
    throw new Error("useDynamicIsland must be used within a DynamicIslandProvider");
  }
  return context;
}

export function DynamicIslandProvider({ children }: { children: React.ReactNode }) {
  const [notification, setNotification] = useState<NotificationItem | null>(null);
  const [activeSection, setActiveSection] = useState<string>("Hero");
  const [terminalOpener, setTerminalOpener] = useState<(() => void) | null>(null);

  const showNotification = (title: string, message: string, type: NotificationType = "success") => {
    const id = Math.random().toString(36).substring(7);
    setNotification({ id, title, message, type });
  };

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        setNotification(null);
      }, 4500);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  return (
    <DynamicIslandContext.Provider
      value={{
        showNotification,
        activeSection,
        setActiveSection,
        openTerminal: () => {
          if (terminalOpener) terminalOpener();
          else {
            const termEl = document.getElementById("terminal-console");
            if (termEl) termEl.scrollIntoView({ behavior: "smooth" });
          }
        },
        setOpenTerminal: (fn) => setTerminalOpener(() => fn),
      }}
    >
      {children}
      <DynamicIslandHUD notification={notification} onDismiss={() => setNotification(null)} activeSection={activeSection} />
    </DynamicIslandContext.Provider>
  );
}

function DynamicIslandHUD({
  notification,
  onDismiss,
  activeSection,
}: {
  notification: NotificationItem | null;
  onDismiss: () => void;
  activeSection: string;
}) {
  return (
    <div className="fixed top-4 inset-x-0 z-[100] flex justify-center pointer-events-none px-4">
      <AnimatePresence mode="wait">
        {notification ? (
          <motion.div
            key={notification.id}
            initial={{ scale: 0.85, y: -20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: -15, opacity: 0 }}
            transition={{ type: "spring", stiffness: 450, damping: 30 }}
            className="pointer-events-auto flex items-center gap-3.5 px-5 py-3 rounded-full bg-black text-white dark:bg-white dark:text-black shadow-[0_12px_30px_rgba(0,0,0,0.35)] border border-white/20 dark:border-black/10 backdrop-blur-xl max-w-md w-full sm:w-auto"
          >
            <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center flex-shrink-0">
              {notification.type === "agent" ? (
                <Zap size={16} className="text-yellow-400 animate-pulse" />
              ) : notification.type === "info" ? (
                <Terminal size={16} className="text-blue-400" />
              ) : (
                <CheckCircle2 size={16} className="text-emerald-400" />
              )}
            </div>

            <div className="flex-1 min-w-0 pr-2">
              <p className="text-xs font-black uppercase tracking-wider line-clamp-1">{notification.title}</p>
              <p className="text-[12px] opacity-80 line-clamp-1">{notification.message}</p>
            </div>

            <button
              onClick={onDismiss}
              className="w-6 h-6 rounded-full flex items-center justify-center hover:bg-white/20 dark:hover:bg-black/10 transition-colors"
            >
              <CloseIcon size={13} />
            </button>
          </motion.div>
        ) : (
          <motion.div
            key="idle-status"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="pointer-events-auto hidden md:flex items-center gap-3 px-4 py-2 rounded-full bg-white/90 dark:bg-zinc-950/90 text-zinc-900 dark:text-zinc-100 border border-zinc-300 dark:border-zinc-800 shadow-sm backdrop-blur-md text-xs font-medium"
          >
            <span className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-semibold text-zinc-800 dark:text-zinc-200">SE-2 @ HCLSoftware</span>
            </span>

            <span className="text-zinc-300 dark:text-zinc-700">•</span>

            <span className="text-zinc-600 dark:text-zinc-400">
              Active: <span className="text-zinc-900 dark:text-zinc-100 font-semibold">{activeSection}</span>
            </span>

            <span className="text-zinc-300 dark:text-zinc-700">•</span>

            <a
              href="#terminal-console"
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors text-[11px] font-mono"
            >
              <Terminal size={12} />
              <span>⌘K Agentic CLI</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
