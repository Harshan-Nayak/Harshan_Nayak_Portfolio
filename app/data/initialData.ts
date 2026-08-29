export interface ProjectItem {
  slug: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  longDescription: string;
  metrics?: string;
  tags: string[];
  technologies: string[];
  deliverables: string[];
  architecture?: string;
  process: { title: string; description: string }[];
  detailsUrl?: string;
  githubUrl?: string;
  likes: number;
  featured?: boolean;
}

export interface SkillItem {
  name: string;
  category: string;
  level: string;
  endorsements: number;
  icon?: string;
  highlight?: string;
}

export interface GuestbookItem {
  name: string;
  role: string;
  company?: string;
  message: string;
  avatar?: string;
  emoji?: string;
  createdAt: number;
}

export const initialProjectsData: ProjectItem[] = [
  {
    slug: "hcl-bigfix-agentic-ai",
    title: "HCL BigFix AEX & Runbook AI",
    category: "Agentic AI & Enterprise",
    tagline: "Autonomous Agentic AI Platform & Intelligent Runbook Automation for Enterprise IT",
    description: "Architected and engineered autonomous agentic AI workflows and GenAI-driven self-healing runbook automations for enterprise infrastructure.",
    longDescription: "Working as an Agentic AI Engineer on HCL BigFix AEX (the enterprise agentic platform) and GenAI Runbook Automation. Developed end-to-end multi-agent orchestration, intelligent IT incident remediation, and self-healing infrastructure pipelines integrated with Red Hat AWX, Ansible, and ServiceNow.",
    metrics: "99.9% Autonomous Remediation • 60% Faster Incident Resolution • Enterprise Scale",
    tags: ["Agentic AI", "GenAI", "Ansible", "AWX", "ServiceNow", "Enterprise"],
    technologies: ["HCL BigFix AEX", "Runbook AI", "LLM Workflows", "Ansible", "Red Hat AWX", "Python", "ServiceNow"],
    deliverables: [
      "Agentic AI autonomous task execution pipelines",
      "Self-healing Runbook AI remediation scripts",
      "Ansible playbook integration for cloud & on-prem infrastructure",
      "ServiceNow automated incident sync and audit trails"
    ],
    architecture: "Multi-agent cognitive orchestrator receives enterprise telemetry → LLM planner decomposes issue → Ansible/AWX executor dispatches targeted self-healing scripts → ServiceNow logs state transitions.",
    process: [
      { title: "Agentic Workflow Modeling", description: "Designing multi-agent state machines for autonomous problem diagnosis and verification." },
      { title: "Ansible Playbook Automation", description: "Crafting robust Infrastructure-as-a-Service playbooks deployed on Red Hat AWX." },
      { title: "Enterprise Service Integration", description: "Building bi-directional webhooks and incident response lifecycles with ServiceNow." }
    ],
    detailsUrl: "https://www.hcl-software.com/bigfix/products/aex",
    githubUrl: "https://github.com/Harshan-Nayak",
    likes: 142,
    featured: true,
  },
  {
    slug: "schedsync-ai-secretary",
    title: "SchedSync — AI Personal Secretary",
    category: "Agentic AI & Full Stack",
    tagline: "Autonomous AI scheduling assistant optimizing calendar, email, and task lifecycles",
    description: "Developed SchedSync, an intelligent personal assistant that automates calendar scheduling, prioritizes emails, and generates actionable task workflows.",
    longDescription: "SchedSync connects Google Calendar, Outlook, and Gmail with LLM agents to automatically resolve scheduling conflicts, generate meeting briefs, summarize incoming email threads, and assign tasks with zero context switching.",
    metrics: "10+ Hours Saved Weekly • Zero Double Bookings • Instant LLM Sync",
    tags: ["Next.js", "GenAI", "LLM Workflows", "Full Stack", "TypeScript"],
    technologies: ["Next.js 15", "React", "Convex", "OpenAI / Claude API", "Tailwind CSS", "OAuth 2.0"],
    deliverables: [
      "Multi-calendar intelligent sync engine",
      "Autonomous email reply and slot proposal generator",
      "Interactive command bar for natural language scheduling",
      "Real-time task tracking dashboard"
    ],
    architecture: "Next.js App Router frontend with real-time Convex state store, connected to background worker executing LLM scheduling agents and webhook listeners.",
    process: [
      { title: "Natural Language Parser", description: "Trained prompt chains to extract dates, attendee intent, and duration constraints from casual text." },
      { title: "Calendar Graph Alignment", description: "Constructed conflict-resolution graph algorithms for multi-attendee availability." },
      { title: "Real-Time Sync UI", description: "Built optimistic UI updates with Framer Motion and Convex subscriptions." }
    ],
    detailsUrl: "https://github.com/Harshan-Nayak",
    githubUrl: "https://github.com/Harshan-Nayak",
    likes: 98,
    featured: true,
  },
  {
    slug: "jobreferral-platform",
    title: "JobReferral",
    category: "Full Stack & Web Apps",
    tagline: "Enterprise-peer talent networking platform with automated referral matching",
    description: "High-concurrency networking platform connecting job seekers with verified enterprise employees for verified internal referrals.",
    longDescription: "JobReferral empowers professionals to refer talent across organizations seamlessly. It features AI-driven candidate matching, transparent reward systems, and high-concurrency real-time messaging built on modern cloud architecture.",
    metrics: "40% Higher Referral Conversion • 5,000+ Active Networkers • Real-Time Chat",
    tags: ["Networking", "HR Tech", "Enterprise", "Next.js", "AI Matching"],
    technologies: ["Next.js", "React", "Firebase / Convex", "Tailwind CSS", "TypeScript", "NLP"],
    deliverables: [
      "Peer-to-peer enterprise referral marketplace",
      "AI resume match scoring against open requisitions",
      "Secure messaging and referral tracking dashboard",
      "Admin analytics and verification pipeline"
    ],
    architecture: "Next.js SSR/SSG hybrid frontend paired with real-time document databases and cloud functions for notification dispatches.",
    process: [
      { title: "Market Research & UX", description: "Mapped the friction in traditional corporate referral systems." },
      { title: "Matching Engine", description: "Implemented vector embedding similarity between candidate profiles and job descriptions." },
      { title: "Real-Time Messaging", description: "Constructed low-latency chat and notification pipelines." }
    ],
    detailsUrl: "https://www.jobreferral.shop/",
    githubUrl: "https://www.jobreferral.shop/",
    likes: 87,
    featured: true,
  },
  {
    slug: "resume-tailor-ai",
    title: "Resume Tailor",
    category: "Agentic AI & Full Stack",
    tagline: "AI-powered real-time resume optimization and ATS compliance catalyst",
    description: "Intelligent career tool that analyzes job descriptions, scores ATS match rates, and tailors resume bullets in real-time.",
    longDescription: "Resume Tailor helps job seekers land interviews by parsing complex job descriptions and rewriting resume bullet points to highlight matching competencies using NLP. Features a live PDF generator and real-time ATS keyword heatmaps.",
    metrics: "95% ATS Pass Rate • Sub-second PDF Generation • 10,000+ Tailored Resumes",
    tags: ["AI SaaS", "NLP", "Next.js", "PDF Engine", "Tailwind"],
    technologies: ["Next.js", "TypeScript", "LLM APIs", "Puppeteer PDF Engine", "Framer Motion", "Tailwind CSS"],
    deliverables: [
      "Interactive resume builder with live ATS score gauge",
      "Context-aware bullet point enhancer powered by LLMs",
      "Vector-based keyword matching algorithm",
      "One-click high-resolution PDF export"
    ],
    architecture: "Client-side editor with optimistic updates coupled with edge serverless functions running ATS parsing and streaming AI responses.",
    process: [
      { title: "NLP Prompt Engineering", description: "Developed specialized prompt templates preserving authentic user experience while aligning keywords." },
      { title: "PDF Engine Architecture", description: "Created pixel-perfect printable layout templates rendered via serverless workers." },
      { title: "Interactive UI", description: "Built side-by-side comparative diff views with live highlight tags." }
    ],
    detailsUrl: "https://github.com/Harshan-Nayak",
    githubUrl: "https://github.com/Harshan-Nayak",
    likes: 115,
    featured: true,
  },
  {
    slug: "indiyase-ecommerce",
    title: "Indiyase.in E-Commerce",
    category: "Full Stack & Web Apps",
    tagline: "Scalable pan-India artisan marketplace featuring 1000+ authentic regional products",
    description: "Collaborated in an agile startup team to engineer and launch a high-performance e-commerce platform across 29 states in India in 15 days.",
    longDescription: "Engineered an interactive e-commerce platform connecting artisans from 29 Indian states directly with consumers. Optimized database queries, streamlined checkout funnels, and increased average session duration by 35% through real-time inventory updates.",
    metrics: "35% Session Duration Increase • 1000+ Products • 15-Day Sprint Launch",
    tags: ["E-Commerce", "Next.js", "Marketplace", "Full Stack"],
    technologies: ["Next.js", "React", "Firebase", "Node.js", "Tailwind CSS", "Payment Gateway"],
    deliverables: [
      "Multi-vendor product catalog across 29 regional categories",
      "Dynamic filtering by state, craft technique, and price",
      "Streamlined 3-step checkout with payment integration",
      "Artisan merchant onboarding dashboard"
    ],
    architecture: "Component-driven Next.js storefront utilizing client caching, edge routing, and cloud database streams for stock synchronization.",
    process: [
      { title: "Rapid Sprint Scoping", description: "Structured a 15-day agile sprint with continuous daily builds and team pair-programming." },
      { title: "Navigation Optimization", description: "Redesigned categorical taxonomy to reduce bounce rates and maximize product discovery." },
      { title: "Real-Time Stock Handling", description: "Integrated database triggers for instant inventory deduction on payment completion." }
    ],
    detailsUrl: "https://www.indiyase.in/",
    githubUrl: "https://www.indiyase.in/",
    likes: 76,
    featured: false,
  },
  {
    slug: "telugumahila-community",
    title: "TeluguMahila",
    category: "Full Stack & Web Apps",
    tagline: "Regional cultural media portal and community hub serving active monthly users",
    description: "High-traffic digital ecosystem for community discussions, cultural preservation, and regional journalism with a custom CMS.",
    longDescription: "Architected a custom digital publishing platform and member community hub. Integrated high-performance caching for heavy multimedia traffic, user forums, poll systems, and dynamic event management.",
    metrics: "Thousands of Monthly Readers • Sub-second Page Loads • Custom CMS",
    tags: ["Community", "Media", "CMS", "Full Stack"],
    technologies: ["Next.js", "React", "Node.js", "MongoDB", "Tailwind CSS"],
    deliverables: [
      "High-speed content publishing portal",
      "Interactive community forum and comment threads",
      "Cultural events directory and RSVP system",
      "SEO-optimized articles with OpenGraph social previews"
    ],
    architecture: "Incremental Static Regeneration (ISR) for high-traffic articles paired with real-time WebSocket feeds for user discussions.",
    process: [
      { title: "CMS Architecture", description: "Built an intuitive markdown & rich-text editor for regional content authors." },
      { title: "Performance Tuning", description: "Implemented responsive image optimization and edge caching to achieve perfect Lighthouse scores." },
      { title: "Community Features", description: "Rolled out moderation tools, user profiles, and discussion upvotes." }
    ],
    detailsUrl: "https://www.telugumahila.com/",
    githubUrl: "https://www.telugumahila.com/",
    likes: 64,
    featured: false,
  },
  {
    slug: "dsa-wizard-toolkit",
    title: "DSA Wizard & Problem Solver",
    category: "Algorithms & Systems",
    tagline: "Interactive algorithmic visualizer and problem-solving practice suite",
    description: "Comprehensive data structures and algorithms practice platform reflecting 500+ competitive programming problem solutions.",
    longDescription: "A high-performance algorithmic visualizer that demonstrates graph traversals, dynamic programming table state transitions, tree balance rotations, and sorting algorithms in interactive step-by-step 60FPS animations.",
    metrics: "500+ Problems Curated • 60 FPS Visualizer • C++ & TypeScript Engine",
    tags: ["C++", "DSA", "Algorithms", "React", "Interactive"],
    technologies: ["C++", "TypeScript", "React", "Canvas API", "Framer Motion", "Tailwind CSS"],
    deliverables: [
      "Interactive step-by-step visualizer for Graphs, Trees, and DP",
      "Curated repository of 500+ LeetCode, Codeforces, and GFG solutions",
      "Time & space complexity benchmark analyzer",
      "Custom code editor with testcase validation"
    ],
    architecture: "WebAssembly / TypeScript worker sandbox compiling and executing algorithmic traces with canvas rendering.",
    process: [
      { title: "State Machine Engine", description: "Structured algorithms as rewindable generator state machines." },
      { title: "Canvas Rendering", description: "Engineered smooth node/edge physics and color-coded array transformations." },
      { title: "Benchmarking Suite", description: "Added execution profiling for memory allocation and operation counts." }
    ],
    detailsUrl: "https://github.com/Harshan-Nayak",
    githubUrl: "https://github.com/Harshan-Nayak",
    likes: 129,
    featured: false,
  },
];

export const initialSkillsData: SkillItem[] = [
  // Agentic AI & Automation
  { name: "HCL BigFix AEX", category: "Agentic AI & Automation", level: "Expert", endorsements: 64, highlight: "Autonomous Enterprise Platform" },
  { name: "HCL BigFix Runbook AI", category: "Agentic AI & Automation", level: "Expert", endorsements: 58, highlight: "Intelligent Runbook Automation" },
  { name: "Agentic AI & Multi-Agent Systems", category: "Agentic AI & Automation", level: "Advanced", endorsements: 72, highlight: "Autonomous Workflows" },
  { name: "GenAI & LLM Prompt Chains", category: "Agentic AI & Automation", level: "Advanced", endorsements: 69, highlight: "Context & Tool Use" },
  { name: "Ansible & Red Hat AWX", category: "Agentic AI & Automation", level: "Advanced", endorsements: 55, highlight: "IaaS Remediation Playbooks" },
  { name: "ServiceNow Automation", category: "Agentic AI & Automation", level: "Proficient", endorsements: 46, highlight: "Incident & Change Mgmt" },

  // Programming & Frameworks
  { name: "Next.js 15 (App Router)", category: "Programming & Frameworks", level: "Expert", endorsements: 88, highlight: "High-Performance Web" },
  { name: "React 19", category: "Programming & Frameworks", level: "Expert", endorsements: 82, highlight: "Server & Client Components" },
  { name: "TypeScript / JavaScript (ES7)", category: "Programming & Frameworks", level: "Expert", endorsements: 79, highlight: "Type-Safe Architectures" },
  { name: "C++ (Data Structures)", category: "Programming & Frameworks", level: "Advanced", endorsements: 91, highlight: "500+ CP Problems" },
  { name: "Python", category: "Programming & Frameworks", level: "Advanced", endorsements: 68, highlight: "AI & Automation Scripting" },
  { name: "Node.js & Express", category: "Programming & Frameworks", level: "Advanced", endorsements: 61, highlight: "Scalable REST APIs" },
  { name: "Django", category: "Programming & Frameworks", level: "Proficient", endorsements: 42, highlight: "Backend Systems" },
  { name: "Java & C", category: "Programming & Frameworks", level: "Proficient", endorsements: 45, highlight: "Core Systems & OOP" },

  // Databases & Cloud
  { name: "Convex Realtime DB", category: "Databases & Cloud", level: "Advanced", endorsements: 67, highlight: "Full-Stack Reactivity" },
  { name: "Firebase (Auth / Firestore)", category: "Databases & Cloud", level: "Expert", endorsements: 74, highlight: "Realtime Storefronts" },
  { name: "MongoDB", category: "Databases & Cloud", level: "Advanced", endorsements: 56, highlight: "Document Modeling" },
  { name: "Redis", category: "Databases & Cloud", level: "Proficient", endorsements: 49, highlight: "Low-Latency Caching" },
  { name: "PostgreSQL & MySQL", category: "Databases & Cloud", level: "Advanced", endorsements: 58, highlight: "Relational Queries & Indexing" },
  { name: "AWS Cloud & DevOps", category: "Databases & Cloud", level: "Proficient", endorsements: 51, highlight: "Cloud Workflows" },

  // Core CS & Developer Tools
  { name: "DSA & Problem Solving", category: "Core CS & Tools", level: "Expert", endorsements: 95, highlight: "500+ LeetCode/Codeforces" },
  { name: "System Design & Architecture", category: "Core CS & Tools", level: "Advanced", endorsements: 63, highlight: "Scalable Systems" },
  { name: "Git & GitHub CI/CD", category: "Core CS & Tools", level: "Advanced", endorsements: 71, highlight: "Version Control" },
  { name: "Postman & API Testing", category: "Core CS & Tools", level: "Advanced", endorsements: 54, highlight: "Integration Testing" },
];

export const initialGuestbookData: GuestbookItem[] = [
  {
    name: "Alex Vance",
    role: "Engineering Manager",
    company: "Enterprise Cloud Partner",
    message: "Harshan's work on autonomous Runbook AI and Ansible playbooks dramatically cut our infrastructure incident resolution times. Outstanding engineer!",
    emoji: "⚡",
    createdAt: 1714500000000,
  },
  {
    name: "Priya Sharma",
    role: "Lead Architect",
    company: "AI Systems Guild",
    message: "Sharp problem solver with deep mastery over Agentic AI workflows, LLM tool-calling, and clean Next.js architectures. Highly recommend collaborating with Harshan!",
    emoji: "🚀",
    createdAt: 1715800000000,
  },
  {
    name: "Rajesh K.",
    role: "Founder & CTO",
    company: "TechVentures",
    message: "Delivered our platform in record time during the startup sprint. His architectural decisions and algorithmic rigor are world-class.",
    emoji: "🔥",
    createdAt: 1717000000000,
  },
];
