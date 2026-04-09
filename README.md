# Linear.app Landing Page Clone

A high-fidelity clone of the [Linear.app](https://linear.app) landing page, built from scratch to demonstrate modern frontend development skills. This pixel-perfect recreation features responsive layouts, smooth animations, and interactive UI elements — all implemented with production-quality code.

## Preview

> **Live Demo:** _Coming soon_

## Tech Stack

| Category          | Technologies                                              |
| ----------------- | --------------------------------------------------------- |
| **Framework**     | Next.js 16 (App Router), React 19, TypeScript             |
| **Styling**       | Tailwind CSS 4, OKLch color system, CSS custom properties |
| **UI Components** | shadcn/ui (Radix UI primitives), Lucide icons             |
| **Animations**    | tw-animate-css, custom keyframe animations                |
| **Fonts**         | Geist Sans, Geist Mono, Inter (via Google Fonts)          |

## Features

- **Pixel-perfect recreation** of Linear's dark-themed landing page with exact color palette, typography, and spacing
- **Interactive hero section** with a full Linear UI mockup (sidebar navigation, issue tracker, floating AI chat widget)
- **Responsive design** across all breakpoints — mobile menu drawer, adaptive grids, and fluid typography
- **Animated brand carousel** with infinite horizontal scroll showcasing partner logos (Coinbase, OpenAI, Cursor, Vercel, etc.)
- **Multi-level dropdown navigation** with descriptive menu items for Product and Resources sections
- **Component-driven architecture** using shadcn/ui with custom variants (Button, Sheet, NavigationMenu, Tooltip, ScrollArea)
- **Lightweight state management** via React Context API for mobile menu state — no external libraries needed

## Project Structure

```
src/
├── app/
│   ├── layout.tsx                # Root layout with font providers
│   ├── globals.css               # Theme variables & global styles
│   └── home/
│       ├── page.tsx              # Main landing page
│       ├── layout.tsx            # Page shell (Header, Footer, Menu)
│       ├── _layout/              # Header, Footer, Navigation, Mobile Menu
│       └── _section/             # Hero, Brands carousel, Pre-footer CTA
├── components/
│   ├── shared/                   # Reusable components (Logo)
│   └── ui/                       # shadcn/ui primitives
└── lib/
    ├── utils.ts                  # Utility functions (cn)
    └── hooks/useMediaQuery.ts    # Responsive breakpoint hook
```

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Purpose

This project was built as a frontend engineering exercise to demonstrate:

- Proficiency with **Next.js App Router** and **React Server Components**
- Ability to translate complex designs into **clean, maintainable code**
- Mastery of **Tailwind CSS** for responsive, utility-first styling
- Experience with **component libraries** (shadcn/ui, Radix UI) and composable architecture
- Attention to **detail, polish, and performance**
