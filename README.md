# BIEL07.DEV — Professional Portfolio

> **Software Engineer | Industrial Digitalization | Manufacturing Systems**  
> Brand: BIEL07.DEV &bull; Owner: Desnabil Gymnastiar  
> Live URL: [https://fbilgy-tech.github.io/](https://fbilgy-tech.github.io/)

---

## 1. Overview

**BIEL07.DEV** is a high-performance, production-quality personal portfolio engineered for a Software Engineer specializing in Web Development, Industrial Digitalization, PPIC Systems, Kanban Management, and Process Automation.

Combining **Futuristic Cyber × Industrial Technology × Premium SaaS** design aesthetics, the interface is inspired by high-end engineering dashboards and Awwwards-level polish while maintaining strict professional, readable, and responsive standards.

---

## 2. Visual Design System

- **Primary Background:** `#080B12` (Ultra-deep industrial obsidian)
- **Secondary Background:** `#0D1320` (Dark technical slate)
- **Card Background:** `#111827` (Engineered carbon panel)
- **Primary Accent:** `#00E5FF` (Cyber Cyan)
- **Secondary Accent:** `#3B82F6` (Electric Blue)
- **Primary Text:** `#F8FAFC`
- **Secondary Text:** `#94A3B8`
- **Border Treatment:** `rgba(148, 163, 184, 0.16)`
- **Success Status:** `#22C55E`
- **Typography:**
  - Headings: `Space Grotesk`
  - Body Text: `Inter`
  - Code & Technical Labels: `JetBrains Mono`

---

## 3. Architecture & Page Sections

1. **Navigation Bar (`<header>`):** Sticky glassmorphism header with active scrollspy, live availability indicator, and accessible mobile navigation drawer.
2. **Hero Section (`#hero`):** Asymmetric editorial layout paired with an original pure-CSS topology architecture diagram linking the Core Hub to Web Applications, PPIC, Kanban, and Automation nodes.
3. **About Section (`#about`):** "Engineering Beyond the Code" editorial narrative highlighting automotive tier-1 floor experience and 4 core engineering pillars: Systems Thinking, Process Optimization, Data-Driven Solutions, and Continuous Improvement.
4. **Technical Expertise (`#expertise`):** Grouped domain matrix covering Web Development, Databases, Automation & Analytics, Infrastructure, and Industrial Systems.
5. **Featured Projects (`#projects`):** Interactive showcase with custom CSS dashboard mockups:
   - **Project 01:** PPIC & Kanban Management System (Production planning, inventory visibility, MRP calculation)
   - **Project 02:** Manufacturing Andon Monitoring (Takt time, plan vs. actual hourly output curves)
   - **Project 03:** Export & Delivery Process System (Logistics dispatch, dual-barcode verification, zero line-stop)
   - **Project 04:** Excel Automation & QR Label Generation (Thermal printer driver integration, automated mechanical cutting)
6. **Professional Experience (`#experience`):** Clean vertical timeline displaying verified roles at PT Namicoh Indonesia Component, PT Astra Daihatsu Motor, and PT Dhecyber Flow Indonesia.
7. **Engineering Approach (`#approach`):** 5-step industrial-to-digital methodology (Understand &rarr; Identify &rarr; Design &rarr; Develop &rarr; Measure).
8. **Connect Section (`#connect`):** Professional networking card highlighting verified LinkedIn profile for engineering discussions and industrial digitalization inquiries.
9. **Footer (`<footer>`):** Dynamic copyright year, semantic navigation, and production status badge.
10. **Interactive Project Modal (`#projectModal`):** Accessible dialog with ESC key and backdrop dismissal.

---

## 4. Tech Stack & Standards

- **Core:** Pure Semantic HTML5, CSS3, and Vanilla JavaScript (ES6+).
- **Multilingual Localization (i18n - 4 Languages):** Native instant switching between English (`EN`), Indonesian (`ID`), Japanese (`JP` - authentic Monozukuri / TPS terminology), and Chinese Mandarin (`ZH` / 简体中文 - authentic smart factory and industrial engineering terminology) across the entire UI and project modals.
- **Zero Heavy Dependencies:** No external bulky frameworks; fast first-contentful paint.
- **Accessibility:** Skip-to-content link, semantic headings, ARIA roles, and `prefers-reduced-motion` compliance.
- **Responsive Breakpoints:** Fully optimized across Desktop (1440px+), Laptop (1024–1439px), Tablet (768–1023px), and Mobile (320–767px).

---

## 5. Local Development & Preview

Because this project is built with standard native web technologies, no build step or node package manager is required.

### Quick Preview via Python HTTP Server:
```bash
# In the project directory:
python -m http.server 8000
```
Then open `http://localhost:8000` in any modern web browser.

### Direct File Open:
Simply open `index.html` directly in Google Chrome, Microsoft Edge, Mozilla Firefox, or Safari.

---

## 6. Deployment (GitHub Pages)

This repository is pre-configured for instant deployment on GitHub Pages:
1. Push all files (`index.html`, `style.css`, `translations.js`, `main.js`, `README.md`) to the `main` branch.
2. In your GitHub repository settings, navigate to **Pages**.
3. Under **Build and deployment > Source**, select **Deploy from a branch**.
4. Set the branch to `main` and folder to `/ (root)`.
5. Click **Save**. The website will be live at `https://fbilgy-tech.github.io/`.

---

&copy; Desnabil Gymnastiar (BIEL07.DEV). All rights reserved.
