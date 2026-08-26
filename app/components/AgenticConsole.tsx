"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Terminal,
  Play,
  RotateCcw,
  Sparkles,
  Bot,
  Zap,
  CheckCircle2,
  Copy,
  Check,
} from "./Icons";
import { useDynamicIsland } from "./DynamicIsland";

interface LogLine {
  id: string;
  type: "input" | "output" | "system" | "success" | "agent" | "error";
  text: string;
}

export default function AgenticConsole() {
  const [input, setInput] = useState("");
  const [isRunningRunbook, setIsRunningRunbook] = useState(false);
  const [logs, setLogs] = useState<LogLine[]>([
    {
      id: "init-1",
      type: "system",
      text: "⚡ Harshan Nayak — Agentic AI & BigFix Runbook AI Console [v2.4.0]",
    },
    {
      id: "init-2",
      type: "system",
      text: "Connected to autonomous orchestration runtime (HCL BigFix AEX & Red Hat AWX).",
    },
    {
      id: "init-3",
      type: "agent",
      text: "Type 'help' or click any quick command below to execute autonomous agentic workflows.",
    },
  ]);

  const bottomRef = useRef<HTMLDivElement>(null);
  const { showNotification } = useDynamicIsland();

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [logs]);

  const executeCommand = (rawCmd: string) => {
    const trimmed = rawCmd.trim();
    if (!trimmed) return;

    // Append user input
    setLogs((prev) => [
      ...prev,
      { id: Math.random().toString(), type: "input", text: `$ ${trimmed}` },
    ]);

    const lower = trimmed.toLowerCase();

    if (lower === "clear" || lower === "cls") {
      setLogs([]);
      return;
    }

    if (lower === "help") {
      setLogs((prev) => [
        ...prev,
        {
          id: Math.random().toString(),
          type: "output",
          text: `AVAILABLE COMMANDS:
  runbook --heal-infra   : Execute autonomous self-healing IT runbook simulation
  ask <query>           : Ask Harshan's AI Agent about architecture & tech stacks
  skills                : View parsed skill matrix & proficiency levels
  experience            : Display career timeline (HCLSoftware, NexoCabs, NexaDev)
  contact               : Output direct contact info & verified links
  projects              : List top featured engineering projects
  clear                 : Clear terminal console`,
        },
      ]);
      return;
    }

    if (lower.startsWith("runbook") || lower.includes("heal")) {
      runAutonomousRunbook();
      return;
    }

    if (lower.startsWith("ask")) {
      const query = trimmed.replace(/^ask\s+(harshan\s+)?/i, "").trim();
      handleAskQuery(query || "Tell me about Harshan's expertise in Agentic AI.");
      return;
    }

    if (lower === "skills") {
      setLogs((prev) => [
        ...prev,
        {
          id: Math.random().toString(),
          type: "output",
          text: `{
  "agentic_ai": ["HCL BigFix AEX", "BigFix Runbook AI", "LLM Workflows", "Multi-Agent Systems"],
  "infrastructure": ["Ansible", "Red Hat AWX", "ServiceNow ITIL Automation", "AWS"],
  "frontend_backend": ["Next.js 15", "React 19", "TypeScript", "Node.js", "Django", "C++", "Python"],
  "databases": ["Convex Realtime", "Firebase", "MongoDB", "Redis", "PostgreSQL"],
  "problem_solving": "500+ Solved across LeetCode, Codeforces, GFG, CodeChef"
}`,
        },
      ]);
      return;
    }

    if (lower === "experience") {
      setLogs((prev) => [
        ...prev,
        {
          id: Math.random().toString(),
          type: "output",
          text: `CAREER SUMMARY:
[1] Software Engineer 2 @ HCLSoftware (Sep 2025 – Present)
    • Agentic AI Engineer on HCL BigFix AEX
    • GenAI Runbook Automation with Ansible, AWX & ServiceNow
[2] Full Stack Engineer @ NexoCabs (Nov 2024 – Mar 2025)
    • Next.js + Firebase, 30% system efficiency boost, 25% load time reduction
[3] Founder @ NexaDev IT Solutions (May 2023 – May 2024)
    • 3+ Enterprise client deals in 90 days, mentored 8+ developers
[4] Full Stack Engineer @ ReferRush (Jan 2022 – Aug 2023)
    • Shopify + Next.js + Firebase cloud commerce
[5] Full Stack Engineer @ Indiyase.in (May 2022 – May 2023)
    • 15-day platform sprint launch, 35% session increase`,
        },
      ]);
      return;
    }

    if (lower === "contact") {
      setLogs((prev) => [
        ...prev,
        {
          id: Math.random().toString(),
          type: "success",
          text: `CONTACT HARSHAN NAYAK:
  • Email    : harshan2390@gmail.com
  • Phone    : +91 7989628048
  • WhatsApp : +91 78279 28048
  • GitHub   : https://github.com/Harshan-Nayak
  • LinkedIn : https://www.linkedin.com/in/harshan-nayak-020754285/`,
        },
      ]);
      return;
    }

    if (lower === "projects") {
      setLogs((prev) => [
        ...prev,
        {
          id: Math.random().toString(),
          type: "output",
          text: `FEATURED PROJECTS:
  1. HCL BigFix AEX & Runbook AI — Enterprise Autonomous IT Operations
  2. SchedSync — AI Personal Secretary (Calendar & Email Automation)
  3. JobReferral — High-Concurrency Enterprise Talent Referral Network
  4. Resume Tailor — AI ATS Optimization & Real-Time PDF Engine
  5. Indiyase.in — Pan-India Artisan Marketplace (29 States)
  6. DSA Wizard — 500+ Problem Algorithmic Trace Sandbox`,
        },
      ]);
      return;
    }

    // Fallback response
    setLogs((prev) => [
      ...prev,
      {
        id: Math.random().toString(),
        type: "error",
        text: `Command '${trimmed}' not recognized. Type 'help' to see valid operations.`,
      },
    ]);
  };

  const handleAskQuery = (query: string) => {
    let answer = `Harshan is a Software Engineer 2 at HCLSoftware specializing in Agentic AI and GenAI-driven Runbook Automation. He builds multi-agent workflows on HCL BigFix AEX, automates enterprise IaaS with Ansible & Red Hat AWX, and designs scalable Next.js and Convex architectures.`;

    const q = query.toLowerCase();
    if (q.includes("ansible") || q.includes("awx") || q.includes("servicenow")) {
      answer = `Harshan uses Ansible and Red Hat AWX to orchestrate self-healing infrastructure remediation workflows for real-world enterprise environments, deeply integrated with ServiceNow incident and change lifecycles.`;
    } else if (q.includes("bigfix") || q.includes("aex") || q.includes("runbook")) {
      answer = `At HCLSoftware, Harshan engineers agentic decision engines on BigFix AEX and intelligent runbooks on BigFix Runbook AI, enabling autonomous IT diagnostics, fault-tolerance, and self-healing systems.`;
    } else if (q.includes("next") || q.includes("react") || q.includes("frontend")) {
      answer = `Harshan is an expert in Next.js 15 App Router, React 19, TypeScript, Tailwind CSS, and Framer Motion, with proven production metrics (e.g. 30% performance increase at NexoCabs, 15-day sprint launch at Indiyase).`;
    } else if (q.includes("dsa") || q.includes("problems") || q.includes("leetcode")) {
      answer = `Harshan has solved over 500+ algorithmic problems across LeetCode, Codeforces, GFG, and CodeChef, holding a strong Computer Science foundation from IIITDM Jabalpur.`;
    }

    setLogs((prev) => [
      ...prev,
      {
        id: Math.random().toString(),
        type: "agent",
        text: `[Agent Response for: "${query}"]\n${answer}`,
      },
    ]);
  };

  const runAutonomousRunbook = () => {
    if (isRunningRunbook) return;
    setIsRunningRunbook(true);

    const steps = [
      { delay: 400, type: "system", text: "▶ [1/4] INGESTING TELEMETRY: Receiving anomaly alert from BigFix Enterprise Agent (High CPU & I/O Contention)..." },
      { delay: 1100, type: "agent", text: "🤖 [2/4] AGENTIC AI REASONING: BigFix AEX multi-agent planner analyzing logs → Identified stuck memory leak in worker pool." },
      { delay: 1900, type: "system", text: "⚡ [3/4] EXECUTING RUNBOOK: Triggering Ansible Playbook via Red Hat AWX (playbook: self_heal_worker_pool.yml)..." },
      { delay: 2800, type: "success", text: "✓ [4/4] REMEDIATION COMPLETE: System stabilized, CPU 12%, ServiceNow Incident #INC-94821 automatically resolved and closed with audit trail!" },
    ];

    steps.forEach(({ delay, type, text }, index) => {
      setTimeout(() => {
        setLogs((prev) => [
          ...prev,
          { id: Math.random().toString(), type: type as any, text },
        ]);
        if (index === steps.length - 1) {
          setIsRunningRunbook(false);
          showNotification("Runbook Succeeded", "Autonomous self-healing sequence resolved incident successfully!", "agent");
        }
      }, delay);
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    executeCommand(input);
    setInput("");
  };

  return (
    <section id="terminal-console" className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-10">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-600 text-white text-[11px] font-bold uppercase tracking-widest mb-4 shadow-sm">
          <Terminal size={13} />
          <span>Interactive Runtime</span>
        </span>
        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-zinc-50">
          Agentic AI &amp; Runbook Console
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 max-w-xl text-sm sm:text-base mt-3">
          Simulate Harshan&#39;s autonomous agentic runbooks or query his background directly in this interactive shell.
        </p>
      </div>

      {/* Terminal Window Box */}
      <div className="rounded-3xl border-2 border-black dark:border-zinc-700 bg-zinc-950 text-zinc-100 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] dark:shadow-[10px_10px_0px_0px_rgba(59,130,246,0.3)] overflow-hidden font-mono text-xs sm:text-sm">
        {/* Terminal Header Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-zinc-900 border-b border-zinc-800">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
            <span className="ml-3 text-xs font-semibold text-zinc-400">
              harshan-agentic-runtime: ~/hcl-bigfix-aex
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline text-[11px] text-zinc-500 uppercase tracking-wider">
              Status: <span className="text-emerald-400 font-bold">ONLINE</span>
            </span>
            <button
              onClick={() => setLogs([])}
              title="Clear terminal"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              <RotateCcw size={14} />
            </button>
          </div>
        </div>

        {/* Console Logs Body */}
        <div className="p-5 sm:p-7 min-h-[300px] max-h-[420px] overflow-y-auto space-y-2.5 scanline">
          {logs.map((log) => {
            let color = "text-zinc-300";
            if (log.type === "input") color = "text-blue-400 font-bold";
            if (log.type === "system") color = "text-zinc-400";
            if (log.type === "agent") color = "text-emerald-400 font-medium";
            if (log.type === "success") color = "text-green-300 font-semibold";
            if (log.type === "error") color = "text-rose-400";

            return (
              <div key={log.id} className={`${color} whitespace-pre-wrap leading-relaxed`}>
                {log.text}
              </div>
            );
          })}
          <div ref={bottomRef} />
        </div>

        {/* Interactive CLI Input */}
        <form
          onSubmit={handleSubmit}
          className="flex items-center gap-3 px-5 py-3.5 bg-zinc-900/90 border-t border-zinc-800"
        >
          <span className="text-emerald-400 font-bold">$</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type command ('runbook', 'ask <query>', 'skills', 'help')..."
            className="flex-1 bg-transparent text-zinc-100 placeholder:text-zinc-600 focus:outline-none text-xs sm:text-sm font-mono"
          />
          <button
            type="submit"
            className="px-4 py-1.5 rounded-xl bg-white text-black font-bold text-xs hover:bg-zinc-200 active:scale-95 transition-all"
          >
            Execute
          </button>
        </form>
      </div>

      {/* Quick Interactive Command Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 mt-6">
        <span className="text-xs font-mono text-zinc-500 uppercase mr-1">Try:</span>
        <button
          onClick={runAutonomousRunbook}
          disabled={isRunningRunbook}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white dark:bg-zinc-900 border-2 border-black dark:border-zinc-700 text-xs font-mono font-bold text-zinc-900 dark:text-zinc-100 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.15)] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all disabled:opacity-50"
        >
          <Play size={12} className="text-emerald-500" />
          <span>runbook --heal-infra</span>
        </button>

        <button
          onClick={() => executeCommand('ask "What is Harshan\'s experience with Agentic AI?"')}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white dark:bg-zinc-900 border-2 border-black dark:border-zinc-700 text-xs font-mono font-bold text-zinc-900 dark:text-zinc-100 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.15)] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all"
        >
          <Bot size={12} className="text-blue-500" />
          <span>ask &quot;Agentic AI Exp&quot;</span>
        </button>

        <button
          onClick={() => executeCommand("skills")}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white dark:bg-zinc-900 border-2 border-black dark:border-zinc-700 text-xs font-mono font-bold text-zinc-900 dark:text-zinc-100 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.15)] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all"
        >
          <Zap size={12} className="text-amber-500" />
          <span>skills</span>
        </button>

        <button
          onClick={() => executeCommand("contact")}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white dark:bg-zinc-900 border-2 border-black dark:border-zinc-700 text-xs font-mono font-bold text-zinc-900 dark:text-zinc-100 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.15)] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all"
        >
          <span>contact</span>
        </button>
      </div>
    </section>
  );
}
