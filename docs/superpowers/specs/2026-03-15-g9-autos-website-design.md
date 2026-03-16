# G9 Autos LTD — Website Design Spec

## Overview

A single-page website for G9 Autos LTD, a local car mechanic in the UK. The site presents services, a photo gallery, an about section, and contact details. Built with React 18 + Vite, plain CSS, no external dependencies.

## Color Palette

Derived from the existing logo (black background, gold text/accents, white text):

| Token            | Value     | Usage                              |
|------------------|-----------|------------------------------------|
| `--color-bg`     | `#1a1a1a` | Primary background                 |
| `--color-bg-alt` | `#111111` | Alternating section background     |
| `--color-gold`   | `#d4a020` | Accent color (buttons, borders, hover) |
| `--color-white`  | `#ffffff` | Primary text                       |
| `--color-gray`   | `#cccccc` | Secondary text                     |

## Page Sections (top to bottom)

### 1. Navbar

- Sticky, top of viewport
- Logo (small, ~40px height) on left
- Nav links on right: Services, Gallery, About, Contact
- Gold underline on hover/active
- Hamburger menu on mobile (< 768px)
- Background: `--color-bg` with slight transparency

### 2. Hero

- Full-width banner image (`picBanner`) as background
- Dark overlay (rgba black, ~0.6 opacity) for text readability
- Logo centered, prominent (~250px width)
- Tagline: "Auto Parts & Services"
- Gold CTA button: "Get In Touch" — smooth scrolls to Contact section
- Min-height: 80vh

### 3. Services

- Section heading: "Our Services"
- 2x4 grid on desktop, 2x4 on tablet, 1-column on mobile
- 8 cards, one per service from the logo:
  - Full Service
  - Brake Pads
  - Clutch
  - Engine Rebuild
  - Timing Belts
  - Timing Chain
  - DPF (Delete & Remapping)
  - Pick & Drop Off
- Each card: service name, one-line description, simple icon (emoji or CSS-only)
- Card style: `--color-bg-alt` background, gold left border, subtle hover lift
- Background: `--color-bg`

### 4. Gallery

- Section heading: "Our Work"
- Responsive grid of 7 mechanic photos (pic1–pic7)
- 3 columns on desktop, 2 on tablet, 1 on mobile
- Images: rounded corners, slight hover zoom effect
- Background: `--color-bg-alt`

### 5. About Us

- Section heading: "About G9 Autos"
- Placeholder paragraph text (owner can replace)
- Warm, professional tone
- Background: `--color-bg`

### 6. Contact

- Section heading: "Get In Touch"
- Phone numbers: 07853 901 084, 07718 785 217
- Google Maps iframe placeholder (empty src, owner fills in real embed URL)
- Background: `--color-bg-alt`

### 7. Footer

- "© 2026 G9 Autos LTD. All rights reserved."
- Phone numbers
- Background: `--color-bg`

## Technical Decisions

- **React 18 + Vite**: Fast dev server, simple setup
- **Plain CSS**: No Tailwind, Bootstrap, or CSS-in-JS. CSS custom properties for theming. One stylesheet per component or a single `App.css`.
- **No external dependencies**: Beyond react, react-dom, and vite
- **Responsive**: Mobile-first media queries at 768px and 1024px breakpoints
- **Images**: Served from `/img/` directory (copied to `public/img/`)
- **Smooth scroll**: CSS `scroll-behavior: smooth` on `html`

## File Structure

```
g9_autos/
├── public/
│   └── img/          (all images copied here)
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Navbar.css
│   │   ├── Hero.jsx
│   │   ├── Hero.css
│   │   ├── Services.jsx
│   │   ├── Services.css
│   │   ├── Gallery.jsx
│   │   ├── Gallery.css
│   │   ├── About.jsx
│   │   ├── About.css
│   │   ├── Contact.jsx
│   │   ├── Contact.css
│   │   ├── Footer.jsx
│   │   └── Footer.css
│   ├── App.jsx
│   ├── App.css
│   ├── index.css     (reset + CSS variables)
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Out of Scope

- Backend / form submissions
- CMS / admin panel
- SEO optimization beyond basic meta tags
- Animations library
- Testing (kept simple per user request)
