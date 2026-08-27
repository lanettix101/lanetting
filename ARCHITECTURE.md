# Technical Architecture & UX/UI Guide
## Portal: High-Performance Engineering Console
**Client:** Ing. Luis Antonio Lanetti R.

---

## 1. Information Architecture (Sitemap)

The portal is designed as a streamlined Single-Page Application (SPA) to maximize conversion and reduce cognitive load. 

*   **/** (Root)
    *   **Header / Navigation:** Persistent top bar with Light/Dark mode toggle and anchor links.
    *   **Section 1: Hero (`#hero`)**
        *   Value Proposition: "Systems Engineer - Automation & Technical SEO Specialist"
        *   Primary CTA: "Book a Consultation"
    *   **Section 2: Professional Journey (`#timeline`)**
        *   Interactive chronological timeline of core competencies.
    *   **Section 3: Key Services & Solutions (`#services`)**
        *   Dynamic carousel showcasing 6 technical offerings.
    *   **Section 4: Freelance Platforms (`#platforms`)**
        *   Slidecards for verified profiles (Legiit, Contra).
    *   **Section 5: Contact Me (`#contact`)**
        *   Direct links: Email, GitHub, Booking/Calendly.

---

## 2. Directory & Asset Structure

The project strictly follows a scalable, component-driven directory tree:

```text
/
├── ARCHITECTURE.md                  # This document
├── public/
│   └── assets/
│       └── img/
│           └── placeholders/        # Reserved for WebP/AVIF assets
│               ├── img_hero_background_16x9.webp
│               ├── img_service_wp-speed_4x3.webp
│               ├── img_platform_legiit_1x1.webp
│               └── ...
├── src/
│   ├── components/                  # UI Components
│   │   ├── layout/                  # Navbar, Footer
│   │   ├── sections/                # Hero, Timeline, Services, Contact
│   │   └── ui/                      # Reusable atoms (Buttons, Cards)
│   ├── App.tsx                      # Main composition
│   ├── index.css                    # Tailwind + CSS Variables
│   └── main.tsx                     # React Entry
└── package.json                     # Dependencies
```

---

## 3. Design System & CSS Variable Logic

The initial wireframe is **strictly monochromatic**. CSS variables are mapped to structural elements. 

In the final UI phase, the monochromatic hex codes will be replaced with the official palette:
*   `--brand-primary`: **#4A2327** (Burgundy)
*   `--brand-accent`: **#B57B7F** (Rose Gold)
*   `--brand-bg`: **#F8F1F1** (Warm White)

### Light/Dark Mode Contrast Inversion
The architecture implements a CSS-variable based theme swap. 
*   **Light Mode:** `--brand-bg` maps to the background. `--brand-primary` maps to text and heavy structural elements.
*   **Dark Mode:** The logic inverts. Background becomes a deep charcoal/black, and text/accents become the lighter values to ensure WCAG AA/AAA compliance.

---

## 4. Component Interaction Logic

### 4.1. Responsive Breakpoints
*   `sm` (640px) / `md` (768px): Trigger point for shifting from vertical stacks to horizontal grids.
*   `lg` (1024px): Desktop max-width constraints applied to maintain readability (max 75ch for text).

### 4.2. Interactive Timeline
*   **Mobile:** Renders as a vertical stack with a left-aligned connecting line.
*   **Desktop:** Renders as an alternating vertical timeline (left/right) based on odd/even indexing.

### 4.3. Services Carousel
*   Implements native CSS `scroll-snap-type: x mandatory` for lightweight, high-performance swiping on mobile.
*   Desktop falls back to a CSS Grid if the viewport allows, or provides navigation arrows.

### 4.4. Platform Slidecards
*   Hover states trigger a subtle Z-index elevation (`translate-y`) and border-color shift to indicate interactivity.

---

## 5. Accessibility (WCAG 2.1) Guidelines

As a "High-Performance Engineering Console", accessibility is prioritized over visual flair.

1.  **Semantic HTML:** Strict use of `<header>`, `<main>`, `<section>`, `<article>`, and `<nav>`.
2.  **ARIA Roles:** Implementation of `aria-label` on icon-only buttons (like the theme toggle) and carousel controls.
3.  **Color Contrast:** Even in the monochromatic wireframe, text-to-background contrast ratio is mathematically verified to exceed 4.5:1.
4.  **Focus States:** All interactive elements (CTA, links, carousel cards) utilize a distinct `:focus-visible` ring outline to support keyboard navigation.
5.  **Image Optimization:** All placeholders enforce aspect ratios (`aspect-video`, `aspect-[4/3]`) to prevent Cumulative Layout Shift (CLS).

