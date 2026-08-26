# Harshan Nayak — High-Tech Modern Portfolio Website

Ultra-sleek, modern, tech-oriented portfolio for **Harshan Nayak** (Software Engineer 2 @ HCLSoftware specializing in Agentic AI, GenAI Runbook Automation, and Scalable Next.js Platforms).

Built with **Next.js 15+ (App Router)**, **Convex Backend**, **Tailwind CSS v4**, **Framer Motion**, and **Lucide React**.

---

## ⚡ Key Highlights & Features

- **Futuristic High-Tech Monochrome Aesthetic**: Inspired by high-contrast neo-brutalist tactile drop shadows, crisp border tokens, cyber grid matrix, and smooth spring physics.
- **Dynamic Island HUD**: Floating top status bar tracking the active section with real-time notification pills and live availability indicator (`SE-2 @ HCLSoftware • Available for Agentic AI Roles`).
- **Interactive Agentic AI CLI Console**: Embedded live interactive terminal where visitors can run simulated autonomous IT runbooks (`runbook --heal-infra`), query Harshan's background with AI prompt handling (`ask <query>`), explore skill JSON schemas (`skills`), or retrieve verified links (`contact`).
- **Deep-Dive Project Architecture Drawer (`DetailDrawer`)**: Slide-in details sheet for inspecting system design blueprints, deliverables, engineering processes, metrics, and live product URLs for projects:
  - *HCL BigFix AEX & Runbook AI Workflows* (Multi-agent enterprise IT automation)
  - *SchedSync* (AI Personal Secretary & Calendar/Email optimizer)
  - *JobReferral* (Enterprise-peer job referral network)
  - *Resume Tailor* (AI ATS analysis & real-time PDF engine)
  - *Indiyase.in E-Commerce* (Multi-state 29-region marketplace)
  - *TeluguMahila* (Regional digital media portal & CMS)
  - *DSA Wizard* (Interactive algorithmic trace simulator with 500+ solved CP problems)
- **Real-Time Convex Backend & Local Reactive Store**:
  - Direct contact inquiry submission with validation and celebration confetti.
  - Real-time project like / upvote counters.
  - Live technical skill endorsement counters.
  - Interactive live visitor guestbook and peer recommendations feed.
- **Command Palette (`⌘K` / `Ctrl+K`)**: Fast keyboard-driven command center for jumping to sections, switching dark/light themes, copying verified contact info, and launching terminal runbooks.
- **Dual High-Tech Theme**: Seamless transition between Cyber OLED Dark Mode and Stark Clean Light Mode.

---

## 🛠️ Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. (Optional) Connect to Convex Cloud Deployment
If you want to sync real-time data to a hosted Convex cloud project:
```bash
npx convex dev
```
Set `NEXT_PUBLIC_CONVEX_URL` in `.env.local` to your Convex deployment URL. (The application includes an embedded local reactive store fallback, so all features—likes, endorsements, guestbook, and contact form—work immediately even without cloud configuration).

### 4. Build for Production
```bash
npm run build
npm run start
```
