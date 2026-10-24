# Ilya Hvostenko — Developer Portfolio

[![React](https://img.shields.io/badge/React-19.0-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.2-646CFF?logo=vite&logoColor=white)](https://vite.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3_%2F_4.0-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.18-0055FF?logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](./LICENSE)

A modern, motion-driven personal developer portfolio built with **React 19**, **Vite (SWC)**, **Tailwind CSS**, and **Framer Motion**. Designed with a dark glassmorphic aesthetic to showcase featured 3D/full-stack projects, engineering skills, work experience, education, and direct contact capabilities.

**Live Demo:** [portfolio-ilyajavadevs-projects.vercel.app](https://portfolio-ilyajavadevs-projects.vercel.app)

---

## Tech Stack

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

## Key Features & Sections

- **Responsive Navigation (`NavBar`)** — Fixed glassmorphic navbar with smooth anchor scrolling, hash-aware navigation on load, and mobile dropdown menu.
- **Hero & Engineering Manifesto (`Hero`)** — Animated introduction, engineering principles manifesto, high-resolution portrait with ambient glow, and one-click **IT CV** / **General CV** PDF downloads.
- **Biography (`Bio`)** — Staggered scroll-reveal narrative highlighting frontend-first full-stack engineering and enterprise system experience.
- **Skills Matrix (`Skills`)** — Categorized skill groups (*Frontend Core, State Management & Data Flow, UI / Motion / 3D, Backend & Data, Tooling & Infrastructure, Product & UX*) with animated proficiency bars.
- **Work Experience (`WorkExperience`)** — Interactive timeline cards detailing roles in software engineering, Terminal Operating Systems (TOS), diagnostics, and naval operations.
- **Education (`EducationSection`)** — Academic and self-taught engineering milestones.
- **Selected Projects (`Projects`)** — Showcase of featured 3D, motion, and full-stack applications with technology tags, lazy-loaded live previews, and external links.
- **Contact Form (`ContactForm`)** — Validated contact form integrated with EmailJS and `react-hot-toast` feedback.

---

## Project Structure

```text
portfolio/
├── public/
│   ├── General CV.pdf          # Downloadable General CV
│   ├── IT CV.pdf               # Downloadable IT CV
│   └── vite.svg
├── src/
│   ├── assets/                 # Backgrounds, portraits, logos, and project previews
│   ├── components/
│   │   ├── Bio.jsx             # About & engineering mindset section
│   │   ├── ContactForm.jsx     # EmailJS contact form with validation & toasts
│   │   ├── EducationSection.jsx# Education cards & timeline
│   │   ├── Footer.jsx          # Social links & quick navigation
│   │   ├── Hero.jsx            # Hero banner, manifesto & CV download buttons
│   │   ├── Logo.jsx            # Brand logo component
│   │   ├── NavBar.jsx          # Responsive fixed navigation bar
│   │   ├── Projects.jsx        # Featured projects grid with LazyImage loader
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
