# Ilya Hvostenko — Developer Portfolio

[![React](https://img.shields.io/badge/React-19.0-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.2-646CFF?logo=vite&logoColor=white)](https://vite.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3_%2F_4.0-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.18-0055FF?logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](./LICENSE)

A modern, motion-driven personal developer portfolio built with **React 19**, **Vite (SWC)**, **Tailwind CSS**, and **Framer Motion**. Designed with a dark glassmorphic aesthetic to showcase full-stack FinTech platforms, interactive 3D WebGL experiences, engineering skills, enterprise background, and direct contact capabilities.

**Live Demo:** [portfolio-ilyajavadevs-projects.vercel.app](https://portfolio-ilyajavadevs-projects.vercel.app)  
**GitHub Profile:** [@hvostenko-dev](https://github.com/hvostenko-dev)

---

## 🚀 Featured Projects Showcased

### 1. Full-Stack & Advanced Applications
- **[PulseQuant](https://stock-market-signalist-app.vercel.app/)** (`hvostenko-dev/pulsequant`) — Full-stack AI market intelligence terminal with paper-trading P&L simulator, stock screener, watchlists, live NYSE/NASDAQ sessions, and daily Gemini AI news digests orchestrated via Inngest.
- **[NexusFi Pro](https://coin-pulse-crypto-app.vercel.app/)** (`hvostenko-dev/nexusfi-pro`) — Institutional-grade cryptocurrency terminal with live TradingView OHLC candlestick charts, market radar heatmap, portfolio tracker, price alerts, and DCA / what-if quantitative simulators.
- **[ATELIER 3D](https://three-js-ai-rho.vercel.app/)** (`hvostenko-dev/atelier-3d`) — Interactive WebGL apparel studio & configurator with real-time PBR fabric simulation, procedural bump generator, multi-zone decals, HDRI environments, and tech-pack export.
- **[MacBook Pro 3D Experience](https://macbook-apple-app-yhxg.vercel.app/)** (`hvostenko-dev/macbook-pro-3d`) — Apple-style M4 MacBook Pro launch page with scroll-driven GSAP cinematics, interactive 3D model with live video screen textures, chip comparison matrix, and live buy configurator.
- **[iPhone 15 Pro 3D Showcase](https://iphonewebsite-three-js.vercel.app/)** (`hvostenko-dev/iphone-15-pro-3d`) — 3D device showcase featuring interactive 3D model rotation, dynamic color/size switcher, synchronized video carousels, and GSAP scroll timelines.
- **[Zentry — Awwwards Motion Experience](https://awwwards-nu-murex.vercel.app/)** (`hvostenko-dev/zentry-awwwards`) — Awwwards-inspired creative web experience with clip-path video portals, kinetic 3D typography, interactive bento grids, and mobile navigation.

### 2. Commercial Websites & Client Work
- **[Lev Group](https://lev-group.vercel.app/)** (`hvostenko-dev/LevGroup`) — Corporate platform for Israeli property management & building maintenance with 4-language i18n (HE/EN/FR/RU) and RTL/LTR synchronization.
- **[Maestro Web Agency](https://maestro-web-nine.vercel.app/)** (`hvostenko-dev/MAESTRO-WEB`) — Promo website for a digital web studio with video hero backgrounds, 3D-tilt glass cards, and custom cursor.
- **[Maestro Studio](https://maestro-studio-phi.vercel.app/)** (`hvostenko-dev/MAESTRO-STUDIO`) — Landing page for a photo & video production studio in Ashdod with gallery lightbox and accessible controls.
- **[Lila](https://lila-neon.vercel.app/)** (`hvostenko-dev/Lila`) — Landing page for a transformational psychological game with zero-dependency scroll-spy navigation, booking CTAs, and interactive maps.

---

## 🛠️ Tech Stack

### Core & Build Tooling
- **React 19** (`react`, `react-dom`) — Component-driven UI architecture and hooks
- **Vite 6** + **@vitejs/plugin-react-swc** — Instant HMR and fast SWC-powered production builds
- **JavaScript (ES6+ / JSX)** — Modular data-driven components
- **ESLint 9** — Flat config linting with `eslint-plugin-react-hooks` and `eslint-plugin-react-refresh`

### Styling, UI & Animation
- **Tailwind CSS** + **PostCSS** + **Autoprefixer** — Utility-first responsive layout, glassmorphism (`backdrop-blur`), and custom glow effects
- **Framer Motion** — Scroll-triggered animations (`whileInView`), staggered lists, animated progress bars, and micro-interactions
- **Lucide React**, **React Icons**, **Heroicons** — Comprehensive iconography for tech stack badges and UI controls

### Integrations & UX
- **EmailJS (`@emailjs/browser`)** — Client-side email delivery from the contact form without a custom backend
- **React Hot Toast** — Toast notifications for form validation and submission status
- **Microlink API** — Automated live screenshot previews with custom skeleton preloading (`LazyImage`)

---

## 📂 Project Structure

```text
portfolio/
├── public/
│   ├── General CV.pdf          # Downloadable General CV
│   ├── IT CV.pdf               # Downloadable IT CV
│   └── favicon.svg             # Modern SVG brand favicon
├── src/
│   ├── assets/                 # Backgrounds, portraits, logos, and previews
│   ├── components/
│   │   ├── Bio.jsx             # About & engineering mindset section
│   │   ├── ContactForm.jsx     # EmailJS contact form with validation & toasts
│   │   ├── EducationSection.jsx# Education cards & timeline
│   │   ├── Footer.jsx          # Social links & quick navigation
│   │   ├── Hero.jsx            # Hero banner, manifesto & CV download buttons
│   │   ├── Logo.jsx            # Brand logo component
│   │   ├── NavBar.jsx          # Responsive fixed navigation bar
│   │   ├── Projects.jsx        # Featured & commercial project showcase with live/code links
│   │   ├── Skills.jsx          # Categorized skills & animated progress bars
│   │   └── WorkExperience.jsx  # Professional experience cards
│   ├── constants/
│   │   └── index.jsx           # Centralized content (projects, skills, bio, links)
│   ├── App.jsx                 # Root layout and section composition
│   ├── index.css               # Global styles & Tailwind imports
│   └── main.jsx                # React 19 application entry point
├── eslint.config.js            # ESLint 9 flat configuration
├── postcss.config.cjs          # PostCSS configuration
├── tailwind.config.cjs         # Tailwind CSS configuration
├── vite.config.js              # Vite + React SWC configuration
└── package.json
```

---

## ⚡ Getting Started

```bash
# Clone the repository
git clone https://github.com/hvostenko-dev/portfolio.git

# Navigate into the project directory
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

---

## 📬 Contact & Connect

- **GitHub:** [github.com/hvostenko-dev](https://github.com/hvostenko-dev)
- **LinkedIn:** [linkedin.com/in/ilya-hvostenko-a03347298](https://www.linkedin.com/in/ilya-hvostenko-a03347298/)
- **Live Demo:** [portfolio-ilyajavadevs-projects.vercel.app](https://portfolio-ilyajavadevs-projects.vercel.app/)
