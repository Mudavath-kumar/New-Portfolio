# Mudavath Kumar — Portfolio

> A high-performance, editorial personal portfolio built with **TanStack Start**, **React 19**, **Vite**, **Tailwind CSS**, and **GSAP**.

[![Vercel Deployment](https://img.shields.io/badge/Deploy-Vercel-black?style=flat&logo=vercel)](https://vercel.com)
[![React 19](https://img.shields.io/badge/React-19.2.0-blue?style=flat&logo=react)](https://react.dev)
[![TanStack Start](https://img.shields.io/badge/TanStack-Start-orange?style=flat)](https://tanstack.com/start)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS%204-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue?style=flat&logo=typescript)](https://www.typescriptlang.org)

---

## 🌟 Overview

This portfolio showcases the engineering work, full-stack & AI projects, verified certifications, and career journey of **Mudavath Kumar**. Designed with an editorial aesthetic, smooth cursor interactions, dark/light theme switching, and scroll-driven GSAP animations.

### ✨ Key Features

- **🎨 Modern Editorial Design**: High-contrast typography, refined color palette, and bespoke layout.
- **🌓 Theme Switching**: Seamless dark/light mode toggle with persistent preferences.
- **✨ Fluid Micro-Interactions**: Custom smooth cursor and GSAP scroll-triggered reveals.
- **🚀 Featured Projects**: In-depth breakdowns, live links, and GitHub repositories for full-stack and AI applications.
- **📜 17+ Verified Certifications**: Interactive visual previews with dynamic modal viewing for credentials from ServiceNow, Anthropic, McKinsey, IIT, and more.
- **📄 Resume Integration**: Quick access preview and direct resume download.
- **📱 Fully Responsive**: Tailored layout optimized across mobile, tablet, and widescreen displays.
- **⚡ Blazing Fast**: SSR hydration and optimized asset bundling via Vite & Nitro.

---

## 🛠️ Tech Stack

- **Framework**: [TanStack Start](https://tanstack.com/start) (Full-stack React with SSR)
- **UI & Runtime**: [React 19](https://react.dev) & TypeScript
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com) + Custom CSS Variables
- **Animations**: [GSAP](https://greensock.com/gsap/) + Smooth Cursor
- **Icons**: [Lucide React](https://lucide.dev)
- **Build System & Server Engine**: [Vite](https://vitejs.dev) + [Nitro](https://nitro.unjs.io)

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18.18.0 or higher recommended)
- **npm**, **pnpm**, or **bun**

### 1. Clone the repository

```bash
git clone https://github.com/Mudavath-kumar/New-Portfolio.git
cd New-Portfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start local development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) (or the port shown in your terminal) to view the portfolio.

### 4. Build for production

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

---

## ☁️ Deploying to Vercel

This project is pre-configured for zero-friction deployment to **Vercel** using Nitro's Vercel preset.

### Deploy via Vercel Dashboard (Recommended)

1. Push your repository to GitHub: `https://github.com/Mudavath-kumar/New-Portfolio`
2. Head to [Vercel](https://vercel.com/new) and click **"Add New Project"**.
3. Import the **`New-Portfolio`** repository.
4. In the Project Configuration:
   - **Framework Preset**: `Vite` (or `Other`)
   - **Build Command**: `npm run build`
   - **Output Directory**: Leave empty or `.vercel/output` (Nitro handles output automatically)
5. *(Optional)* Add environment variable:
   - `NITRO_PRESET`: `vercel`
6. Click **Deploy**! 🎉

### Deploy via Vercel CLI

```bash
npm i -g vercel
vercel
```

Follow the CLI prompts to link and deploy your project.

---

## 📂 Project Structure

```
├── public/
│   ├── Mudavath_Kumar_Resume-.pdf   # Resume download
│   ├── Project/                     # Project screenshots & media
│   └── certificates/                # 17 verified certification images
├── src/
│   ├── components/ui/               # Accessible UI components (Radix primitives)
│   ├── registry/magicui/            # Interactive client effects (SmoothCursor)
│   ├── routes/
│   │   ├── __root.tsx               # Root layout & theme wrapper
│   │   └── index.tsx                # Single scroll-driven editorial portfolio
│   ├── styles.css                   # Theme tokens, typography & animations
│   ├── router.tsx                   # TanStack Router instance
│   └── server.ts                    # SSR server entry
├── vite.config.ts                   # Vite & Nitro build configuration
└── package.json
```

---

## 📬 Contact

- **Name**: Mudavath Kumar
- **GitHub**: [@Mudavath-kumar](https://github.com/Mudavath-kumar)
- **LinkedIn**: [Mudavath Kumar](https://www.linkedin.com/in/mudavath-kumar-naik-b4b9b9258)
- **Email**: [kc893825@gmail.com](mailto:kc893825@gmail.com)

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
