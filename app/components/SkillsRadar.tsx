"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Cpu,
  Bot,
  Code2,
  Database,
  Cloud,
  Flame,
  Award,
  Zap,
  Sparkles,
  CheckCircle2,
} from "./Icons";
import { usePortfolioStore } from "../ConvexClientProvider";
import { useDynamicIsland } from "./DynamicIsland";
import confetti from "canvas-confetti";

export default function SkillsRadar() {
  const store = usePortfolioStore();
  const { showNotification } = useDynamicIsland();
  const skills = store ? store.state.skills : [];

  const categories = [
    { name: "Agentic AI & Automation", icon: <Bot size={16} className="text-blue-500" /> },
    { name: "Programming & Frameworks", icon: <Code2 size={16} className="text-emerald-500" /> },
    { name: "Databases & Cloud", icon: <Database size={16} className="text-purple-500" /> },
    { name: "Core CS & Tools", icon: <Cpu size={16} className="text-amber-500" /> },
  ];

  const handleEndorse = (skillName: string) => {
    if (store) {
      store.endorseSkill(skillName);
      showNotification("Skill Endorsed!", `You endorsed Harshan for ${skillName}`, "success");
      try {
        confetti({
          particleCount: 15,
          spread: 40,
          origin: { y: 0.85 },
        });
      } catch (err) {}
    }
  };

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black text-white dark:bg-white dark:text-black text-[11px] font-bold uppercase tracking-widest mb-4">
          Capabilities Matrix
        </span>
        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-zinc-50">
          Technical Arsenal &amp; Endorsements
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 max-w-xl text-sm sm:text-base mt-3">
          Specialized expertise across autonomous Agentic AI, modern reactive stacks, and deep algorithmic problem-solving.
        </p>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {categories.map((cat, cIdx) => {
          const categorySkills = skills.filter((s) => s.category === cat.name);
          return (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: cIdx * 0.1 }}
              className="bg-white dark:bg-zinc-900 rounded-3xl border-2 border-black dark:border-zinc-700 p-6 sm:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.12)]"
            >
              {/* Category Title */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-zinc-100 dark:border-zinc-800">
                <div className="w-9 h-9 rounded-xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
                  {cat.icon}
                </div>
                <h3 className="text-lg font-black text-zinc-900 dark:text-zinc-100 tracking-tight">
                  {cat.name}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-3">
                {categorySkills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group flex items-center justify-between p-3 rounded-2xl bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-200/80 dark:border-zinc-800/80 hover:border-black dark:hover:border-zinc-600 transition-all"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs sm:text-sm font-bold text-zinc-900 dark:text-zinc-100">
                          {skill.name}
                        </span>
                        <span className="px-2 py-0.5 rounded-full bg-zinc-200 dark:bg-zinc-800 text-[10px] font-mono font-semibold text-zinc-700 dark:text-zinc-300">
                          {skill.level}
                        </span>
                      </div>
                      {skill.highlight && (
                        <p className="text-[11px] text-zinc-500 font-mono mt-0.5">
                          {skill.highlight}
                        </p>
                      )}
                    </div>

                    <button
                      onClick={() => handleEndorse(skill.name)}
                      title={`Endorse ${skill.name}`}
                      className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 text-xs font-bold text-zinc-800 dark:text-zinc-200 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black hover:scale-105 active:scale-95 transition-all shadow-sm flex-shrink-0"
                    >
                      <Zap size={12} className="text-amber-500 fill-amber-500" />
                      <span>{skill.endorsements}</span>
                    </button>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
