# G9 Autos LTD Website Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a single-page React website for G9 Autos LTD mechanic shop with hero, services, gallery, about, contact, and footer sections.

**Architecture:** Single-page app with 7 React components (Navbar, Hero, Services, Gallery, About, Contact, Footer) composed in App.jsx. Plain CSS with custom properties for theming. Images served from public/img/.

**Tech Stack:** React 18, Vite, plain CSS

**Spec:** `docs/superpowers/specs/2026-03-15-g9-autos-website-design.md`

---

## Chunk 1: Project Scaffold & Global Styles

### Task 1: Scaffold Vite + React project

**Files:**
- Create: `package.json`
- Create: `vite.config.js`
- Create: `index.html`
- Create: `src/main.jsx`

- [ ] **Step 1: Initialize Vite project**

```bash
cd /Users/ugureren/Desktop/g9_autos
npm create vite@latest . -- --template react
```

Select: Overwrite existing files if prompted. This generates package.json, vite.config.js, index.html, src/main.jsx, src/App.jsx, src/App.css, src/index.css.

- [ ] **Step 2: Clean up generated files**

Remove default Vite boilerplate from:
- `src/App.jsx` — empty to a minimal shell
- `src/App.css` — clear contents
- `src/index.css` — clear contents
- Delete `src/assets/` directory (not needed)

- [ ] **Step 3: Copy images to public/img/**

```bash
mkdir -p public/img
cp img/* public/img/
```

- [ ] **Step 4: Install dependencies**

```bash
npm install
```

- [ ] **Step 5: Verify dev server starts**

```bash
npm run dev
```

Confirm it starts without errors, then stop.

- [ ] **Step 6: Commit**

```bash
git init
git add package.json vite.config.js index.html src/ public/img/
git commit -m "chore: scaffold Vite + React project with images"
```

### Task 2: Global styles and CSS variables

**Files:**
- Modify: `src/index.css`
- Modify: `index.html` (update title and meta)

- [ ] **Step 1: Write index.css with reset and CSS variables**

```css
:root {
  --color-bg: #1a1a1a;
  --color-bg-alt: #111111;
  --color-gold: #d4a020;
  --color-white: #ffffff;
  --color-gray: #cccccc;
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background-color: var(--color-bg);
  color: var(--color-white);
  line-height: 1.6;
}

img {
  max-width: 100%;
  display: block;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}
```

- [ ] **Step 2: Update index.html title and meta**

Set `<title>G9 Autos LTD — Auto Parts & Services</title>` and add a meta description.

- [ ] **Step 3: Verify styles apply**

Run dev server, confirm dark background renders.

- [ ] **Step 4: Commit**

```bash
git add src/index.css index.html
git commit -m "style: add global reset and CSS custom properties"
```

---

## Chunk 2: Navbar & Hero Components

### Task 3: Navbar component

**Files:**
- Create: `src/components/Navbar.jsx`
- Create: `src/components/Navbar.css`
- Modify: `src/App.jsx`

- [ ] **Step 1: Create Navbar.css**

Styles for:
- Sticky positioning, z-index 100
- Flexbox: logo left, nav links right
- Background: `var(--color-bg)` with `rgba(26,26,26,0.95)` transparency
- Nav links: white text, gold underline on hover (border-bottom transition)
- Hamburger button: hidden on desktop, visible below 768px
- Mobile menu: vertical dropdown, full-width

- [ ] **Step 2: Create Navbar.jsx**

```jsx
import { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <a href="#" className="navbar__logo">
          <img src="/img/g9-logo.56003a97.png" alt="G9 Autos LTD" />
        </a>
        <button
          className={`navbar__hamburger ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`navbar__links ${menuOpen ? 'open' : ''}`}>
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <a href={href} onClick={() => setMenuOpen(false)}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
```

- [ ] **Step 3: Add Navbar to App.jsx**

```jsx
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
    </>
  );
}

export default App;
```

- [ ] **Step 4: Verify navbar renders and hamburger works on mobile**

Check desktop (links visible) and resize to < 768px (hamburger appears).

- [ ] **Step 5: Commit**

```bash
git add src/components/Navbar.jsx src/components/Navbar.css src/App.jsx
git commit -m "feat: add sticky navbar with mobile hamburger menu"
```

### Task 4: Hero component

**Files:**
- Create: `src/components/Hero.jsx`
- Create: `src/components/Hero.css`
- Modify: `src/App.jsx`

- [ ] **Step 1: Create Hero.css**

Styles for:
- Full-width section, min-height 80vh
- Background image: `picBanner.52e285d0.jpg`, cover, center
- Dark overlay: `::before` pseudo-element with `rgba(0,0,0,0.6)`
- Content centered (flexbox column, align-items center)
- Logo: max-width 250px
- Tagline: white, slightly larger font
- CTA button: gold background, dark text, padding, border-radius, hover darkening

- [ ] **Step 2: Create Hero.jsx**

```jsx
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero__content">
        <img
          src="/img/g9-logo.56003a97.png"
          alt="G9 Autos LTD"
          className="hero__logo"
        />
        <p className="hero__tagline">Auto Parts & Services</p>
        <a href="#contact" className="hero__cta">Get In Touch</a>
      </div>
    </section>
  );
}

export default Hero;
```

- [ ] **Step 3: Add Hero to App.jsx below Navbar**

- [ ] **Step 4: Verify hero renders with banner background, overlay, centered logo**

- [ ] **Step 5: Commit**

```bash
git add src/components/Hero.jsx src/components/Hero.css src/App.jsx
git commit -m "feat: add hero section with banner background and CTA"
```

---

## Chunk 3: Services & Gallery Components

### Task 5: Services component

**Files:**
- Create: `src/components/Services.jsx`
- Create: `src/components/Services.css`
- Modify: `src/App.jsx`

- [ ] **Step 1: Create Services.css**

Styles for:
- Section padding, background `var(--color-bg)`
- Section heading: centered, gold underline decoration
- Grid: `grid-template-columns: repeat(4, 1fr)` on desktop, `repeat(2, 1fr)` at 768px, `1fr` below 480px
- Cards: `var(--color-bg-alt)` background, gold left border (4px), padding, border-radius
- Hover: subtle translateY(-4px) + box-shadow

- [ ] **Step 2: Create Services.jsx**

Define services array with name, description, emoji icon. Map over it to render cards.

8 services:
1. Full Service — "Complete vehicle health check and maintenance"
2. Brake Pads — "Brake pad inspection, repair, and replacement"
3. Clutch — "Clutch repair and replacement for all vehicles"
4. Engine Rebuild — "Full engine rebuild and reconditioning"
5. Timing Belts — "Timing belt inspection and replacement"
6. Timing Chain — "Timing chain service and replacement"
7. DPF — "DPF delete, cleaning, and remapping services"
8. Pick & Drop Off — "Convenient vehicle collection and delivery"

- [ ] **Step 3: Add Services to App.jsx**

- [ ] **Step 4: Verify grid layout at all breakpoints**

- [ ] **Step 5: Commit**

```bash
git add src/components/Services.jsx src/components/Services.css src/App.jsx
git commit -m "feat: add services section with responsive card grid"
```

### Task 6: Gallery component

**Files:**
- Create: `src/components/Gallery.jsx`
- Create: `src/components/Gallery.css`
- Modify: `src/App.jsx`

- [ ] **Step 1: Create Gallery.css**

Styles for:
- Section padding, background `var(--color-bg-alt)`
- Section heading: centered, gold underline
- Grid: 3 columns desktop, 2 tablet, 1 mobile
- Images: border-radius 8px, overflow hidden
- Hover: `transform: scale(1.05)` with transition

- [ ] **Step 2: Create Gallery.jsx**

Array of 7 image paths (pic1–pic7 with their hash filenames). Map to render `<img>` tags in grid.

- [ ] **Step 3: Add Gallery to App.jsx**

- [ ] **Step 4: Verify images render in responsive grid with hover zoom**

- [ ] **Step 5: Commit**

```bash
git add src/components/Gallery.jsx src/components/Gallery.css src/App.jsx
git commit -m "feat: add gallery section with responsive photo grid"
```

---

## Chunk 4: About, Contact, Footer & README

### Task 7: About component

**Files:**
- Create: `src/components/About.jsx`
- Create: `src/components/About.css`
- Modify: `src/App.jsx`

- [ ] **Step 1: Create About.css**

Styles for:
- Section padding, background `var(--color-bg)`
- Section heading: centered, gold underline
- Text: max-width 800px, centered, `var(--color-gray)` for paragraph text

- [ ] **Step 2: Create About.jsx**

Placeholder paragraph with warm, professional tone about G9 Autos being a trusted local mechanic.

- [ ] **Step 3: Add to App.jsx, verify**

- [ ] **Step 4: Commit**

```bash
git add src/components/About.jsx src/components/About.css src/App.jsx
git commit -m "feat: add about section"
```

### Task 8: Contact component

**Files:**
- Create: `src/components/Contact.jsx`
- Create: `src/components/Contact.css`
- Modify: `src/App.jsx`

- [ ] **Step 1: Create Contact.css**

Styles for:
- Section padding, background `var(--color-bg-alt)`
- Section heading: centered, gold underline
- Contact info: flexbox layout, phone numbers with gold icon/accent
- Map placeholder: bordered iframe container, 100% width, 300px height

- [ ] **Step 2: Create Contact.jsx**

Display phone numbers (07853 901 084, 07718 785 217). Google Maps iframe with placeholder src and comment to replace.

- [ ] **Step 3: Add to App.jsx, verify**

- [ ] **Step 4: Commit**

```bash
git add src/components/Contact.jsx src/components/Contact.css src/App.jsx
git commit -m "feat: add contact section with phone numbers and map placeholder"
```

### Task 9: Footer component

**Files:**
- Create: `src/components/Footer.jsx`
- Create: `src/components/Footer.css`
- Modify: `src/App.jsx`

- [ ] **Step 1: Create Footer.css**

Styles for:
- Padding, background `var(--color-bg)`, border-top 1px solid gold
- Text centered, `var(--color-gray)` color
- Small font size

- [ ] **Step 2: Create Footer.jsx**

Copyright line, phone numbers.

- [ ] **Step 3: Add to App.jsx, verify**

- [ ] **Step 4: Commit**

```bash
git add src/components/Footer.jsx src/components/Footer.css src/App.jsx
git commit -m "feat: add footer component"
```

### Task 10: README and final polish

**Files:**
- Create: `README.md`
- Modify: `src/App.css` (if any global app-level styles needed)

- [ ] **Step 1: Write README.md**

Include:
- Project description
- Prerequisites (Node.js 18+)
- How to install (`npm install`)
- How to run (`npm run dev`)
- How to build for production (`npm run build`)
- How to customize (replace placeholder text, add Google Maps embed URL)

- [ ] **Step 2: Final visual check**

Run dev server, scroll through entire page, check all sections render correctly at desktop and mobile widths.

- [ ] **Step 3: Commit**

```bash
git add README.md src/App.css
git commit -m "docs: add README with setup instructions"
```
