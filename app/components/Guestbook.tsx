"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageSquare,
  Send,
  Sparkles,
  Heart,
  User,
  CheckCircle2,
} from "./Icons";
import { usePortfolioStore } from "../ConvexClientProvider";
import { useDynamicIsland } from "./DynamicIsland";
import confetti from "canvas-confetti";

export default function Guestbook() {
  const store = usePortfolioStore();
  const { showNotification } = useDynamicIsland();

  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [emoji, setEmoji] = useState("⚡");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const entries = store ? store.state.guestbook : [];

  const emojis = ["⚡", "🚀", "🔥", "💡", "🧠", "✨"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim() || !role.trim()) {
      showNotification("Missing Fields", "Please provide your name, role, and message.", "warning");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      if (store) {
        store.addGuestbookEntry({
          name: name.trim(),
          role: role.trim(),
          company: company.trim() || undefined,
          message: message.trim(),
          emoji,
        });
      }
      setIsSubmitting(false);
      setName("");
      setRole("");
      setCompany("");
      setMessage("");
      showNotification("Message Posted!", "Thank you for leaving a recommendation/endorsement!", "success");

      try {
        confetti({
          particleCount: 35,
          spread: 60,
          origin: { y: 0.8 },
        });
      } catch (err) {}
    }, 400);
  };

  return (
    <section id="guestbook" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black text-white dark:bg-white dark:text-black text-[11px] font-bold uppercase tracking-widest mb-4">
          Peer Endorsements
        </span>
        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-zinc-50">
          Live Guestbook &amp; Recommendations
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 max-w-xl text-sm sm:text-base mt-3">
          Leave a note, feedback, or recommendation. Synced in real-time with the Convex reactive store.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Post Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="lg:col-span-2 bg-white dark:bg-zinc-900 rounded-3xl border-2 border-black dark:border-zinc-700 p-6 sm:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.12)] h-fit"
        >
          <div className="flex items-center gap-2 mb-6 pb-3 border-b border-zinc-100 dark:border-zinc-800">
            <MessageSquare size={18} className="text-blue-600 dark:text-blue-400" />
            <h3 className="font-black text-base text-zinc-900 dark:text-zinc-100">
              Sign the Guestbook
            </h3>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
            <div>
              <label className="block font-bold text-zinc-800 dark:text-zinc-200 mb-1">
                Your Name *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Sarah Jenkins"
                className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-black dark:focus:border-white transition-colors"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block font-bold text-zinc-800 dark:text-zinc-200 mb-1">
                  Role / Title *
                </label>
                <input
                  type="text"
                  required
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  placeholder="e.g. Senior Staff SWE"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-black dark:focus:border-white transition-colors"
                />
              </div>

              <div>
                <label className="block font-bold text-zinc-800 dark:text-zinc-200 mb-1">
                  Company / Team
                </label>
                <input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="e.g. TechCorp"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-black dark:focus:border-white transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block font-bold text-zinc-800 dark:text-zinc-200 mb-1">
                Badge Emoji
              </label>
              <div className="flex gap-2">
                {emojis.map((em) => (
                  <button
                    key={em}
                    type="button"
                    onClick={() => setEmoji(em)}
                    className={`w-9 h-9 rounded-xl flex items-center justify-center text-base border transition-all ${
                      emoji === em
                        ? "bg-black text-white dark:bg-white dark:text-black border-black dark:border-white scale-110 font-bold"
                        : "bg-zinc-100 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 hover:scale-105"
                    }`}
                  >
                    {em}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block font-bold text-zinc-800 dark:text-zinc-200 mb-1">
                Your Message / Note *
              </label>
              <textarea
                rows={3}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Share feedback, collaboration thoughts, or a recommendation..."
                className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-black dark:focus:border-white transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 rounded-full bg-black text-white dark:bg-white dark:text-black font-bold text-xs flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-50 shadow-sm cursor-pointer"
            >
              <Send size={13} />
              <span>{isSubmitting ? "Posting..." : "Post to Guestbook"}</span>
            </button>
          </form>
        </motion.div>

        {/* Live Entries Stream */}
        <div className="lg:col-span-3 space-y-4">
          <AnimatePresence>
            {entries.map((entry, idx) => (
              <motion.div
                key={entry.createdAt + idx}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-white dark:bg-zinc-900 rounded-2xl border-2 border-black dark:border-zinc-700 p-5 sm:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-transform"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center text-lg flex-shrink-0">
                      {entry.emoji || "⚡"}
                    </div>
                    <div>
                      <h4 className="text-sm font-black text-zinc-900 dark:text-zinc-100">
                        {entry.name}
                      </h4>
                      <p className="text-[11px] text-zinc-500 font-mono">
                        {entry.role} {entry.company ? `• ${entry.company}` : ""}
                      </p>
                    </div>
                  </div>

                  <span className="text-[10px] text-zinc-400 font-mono">
                    {new Date(entry.createdAt).toLocaleDateString()}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed font-normal">
                  &ldquo;{entry.message}&rdquo;
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
