# Capital Bridge Logistics - Frontend Redesign & Modernization

## 1. Project Overview

**Goal:** Transform the current static, dated website into a premium, high-tech, kinetic web experience comparable to Apple or Nike standards.
**Constraint:** The underlying page structure, routes, and text content must remain identical to the original site. The changes are strictly UI/UX, styling, animations, and component refactoring.
**Key Technologies:** React, TypeScript, GSAP (for scroll triggers and animations), CSS Modules/Tailwind (for glassmorphism and modern theming).

## 2. Current State

- **Status:** Project Initialized.
- **Completed Work:**
  - Initial site audit and UX teardown.
  - TDD standards established via `TDD_INSTRUCTION_GUIDE.md`.
- **Current Active Phase:** Phase 1 (Foundation & Design System)

---

## 3. Implementation Roadmap

### Phase 1: Foundation & Design System (Currently Active)

Establish the base repository, design tokens, typography, core routing structure, and data layer before building any complex UI.

#### [Feature: Content Extraction & Data Structuring]

**Root cause / Goal:**
We cannot implement Content-Driven Design without the actual content. Hardcoding "Lorem Ipsum" or scattering text throughout UI components leads to layout breakages and poor maintainability. We need a centralized single source of truth for all website text.

**Fix / Approach:**
Scrape the existing live website and structure the text into a central data file (e.g., `src/data/content.ts`). This file will export typed objects for the Hero, Features, Testimonials, and inner pages so the UI components can consume them purely as props.

---

- [x] **RED — Unit (`content.test.ts`):**
  - [x] Test: The `homeContent` object exists and strictly matches the expected TypeScript interface (e.g., contains `hero.headline` and a `features` array).
  - [x] **Run — confirm RED (File does not exist yet).**

- [x] **GREEN — Backend:**
  - [x] N/A - Pure data structuring.

- [x] **RED — Component (`HeroSection.test.tsx` data check):**
  - [x] Test: The dummy `HeroSection` correctly accepts the `homeContent.hero` object as a prop and renders the exact `headline` string in an `<h1>` tag.
  - [x] **Run — confirm RED.**

- [x] **GREEN — Frontend (Types → Data):**
  - [x] [Types] Define `HomeContent` interfaces in `src/types/content.ts`.
  - [x] [Data] Scrape the live site and populate `src/data/content.ts` with the real text.
  - [x] Run unit test — **confirm GREEN**.

- [x] **Verification chain:**
  - [x] Developer imports `homeContent` → The IDE successfully autocompletes `.hero.headline` → The exact string "Keep growing your business..." is securely passed down as data → ✅ Done.

---

#### [Feature: Core Theme and Global Styles Initialization]

**Root cause / Goal:**
The application needs a unified premium design system (colors, typography, spacing) to ensure consistency across all pages. Without it, developers will hardcode values, leading to a fragmented UI.

**Fix / Approach:**
Configure the global CSS/theme provider with the "Midnight Navy" and "Electric Cyan" color palette. Import `Inter` and `Outfit` web fonts. Set up CSS variables for glassmorphism effects and animation timings.

---

- [x] **RED — Integration (`app.routing.test.ts` or Playwright E2E):**
  - [x] Test: `GET /` successfully loads the homepage with a `200` status and mounts the main layout wrapper without hydration errors.
  - [x] **Run — confirm RED (No routing/app exists yet).**

- [x] **GREEN — Backend (Routing & Layout):**
  - [x] [Routes] Initialize the base routing structure for `/`, `/about-us`, `/contact-us`, etc.
  - [x] Run integration test — **confirm GREEN**.

- [x] **RED — Unit / Component (`ThemeProvider.test.tsx`):**
  - [x] Test: The `ThemeProvider` (or global layout) applies the `--color-primary-navy` CSS variable to the root element.
  - [x] **Run — confirm RED.**

- [x] **GREEN — Frontend (Types → Component):**
  - [x] [Types] Define theme types if using a CSS-in-JS or typed config.
  - [x] [Component] Implement the global CSS file and Layout component.
  - [x] Run unit test — **confirm GREEN**.

- [x] **Verification chain:**
  - [x] Developer runs `npm run dev` → Browser opens to `localhost:3000` → Inspecting the `<body>` reveals the correct font families (`Inter`) and the background color is the premium navy blue → ✅ Done.

---

### Phase 2: The Hero Section & Pre-loader Animation

Implement the high-impact "Truck wipe" pre-loader and the animated hero section.

#### [Feature: Truck Wipe Pre-loader & Hero Reveal]

**Root cause / Goal:**
The homepage needs an explosive "Wow" factor. A static image is boring. We need a 1.2 to 1.5-second pre-loader where a stylized truck wipes the screen to reveal the hero section, establishing the brand's kinetic energy immediately.

**Fix / Approach:**
Create a `PreLoader` component containing the truck SVG/3D asset. Use GSAP to animate the truck horizontally across the screen, tying a `clip-path` or mask to its X-axis position to safely reveal the `Hero` component beneath it.

---

- [x] **RED — Integration (`homepage.e2e.test.ts`):**
  - [x] Test: On initial load of `/`, the `PreLoader` element is visible. After 2 seconds, the `PreLoader` is unmounted/hidden, and the `HeroSection` heading "Keep growing your business..." is visible in the DOM.
  - [x] **Run — confirm RED.**

- [x] **GREEN — Backend:**
  - [x] N/A - Pure frontend UI feature. (Marking N/A as per standard).

- [x] **RED — Unit / Component (`PreLoader.test.tsx`):**
  - [x] Test: `PreLoader` executes the GSAP `onComplete` callback after the animation timeline finishes, signaling the app to mount the Hero text.
  - [x] **Run — confirm RED.**

- [x] **GREEN — Frontend (Types → Component):**
  - [x] [Component] Build `PreLoader.tsx` with GSAP timeline.
  - [x] [Component] Build `HeroSection.tsx` with staggered text reveal animations.
  - [x] Run unit test — **confirm GREEN**.

- [x] **Verification chain:**
  - [x] User navigates to `www.capitalbridgelogistics.com/` → Screen is dark, a sleek truck drives across the screen → The dark background wipes away behind the truck → The Hero section text floats smoothly into place → ✅ Done.

---

### Phase 3: Bento-Box Feature Cards & Scroll Triggers

Refactor the "Technology", "Quick Quotes", and "Customer Service" sections into a modern grid.

#### [Feature: Scroll-Triggered Bento Box Grid]

**Root cause / Goal:**
The features section is currently a static wall of text. We need to organize this into a scannable Bento-Box grid that animates smoothly as the user scrolls down, increasing engagement and perceived value.

**Fix / Approach:**
Build a `BentoGrid` component. Use GSAP `ScrollTrigger` to animate the individual `BentoCard` components (slide up and fade in) when they enter the viewport.

---

- [x] **RED — Integration (`features.e2e.test.ts`):**
  - [x] Test: Scrolling down 500px from the top of the page triggers the visibility of the "Technology" card (CSS opacity transitions to 1).
  - [x] **Run — confirm RED.**

- [x] **GREEN — Backend:**
  - [x] N/A - Pure frontend UI feature.

- [x] **RED — Unit / Component (`BentoCard.test.tsx`):**
  - [x] Test: Simulating a hover event on the `BentoCard` triggers the `onMouseEnter` handler and activates the specific micro-animation state.
  - [x] **Run — confirm RED.**

- [x] **GREEN — Frontend (Types → Component):**
  - [x] [Types] Define the `FeatureItem` type (title, description, icon).
  - [x] [Component] Build `BentoCard` with glassmorphism CSS classes.
  - [x] [Component] Implement `ScrollTrigger` context in the parent `BentoGrid`.
  - [x] Run unit test — **confirm GREEN**.

- [x] **Verification chain:**
  - [x] User scrolls down from the Hero section → Blank space briefly appears → Bento-Box cards smoothly slide up and tilt into place → User hovers over the "Technology" card → The custom API gear icon begins spinning → ✅ Done.

---

### Phase 4: Premium Design Overhaul & Smooth Scroll Engine (Next)

Eradicate the "AI-generated" look by elevating the design system to a true Apple/Stripe-tier aesthetic and integrating Lenis Smooth Scroll.

#### [Feature: Design System Overhaul & Lenis Integration]

**Root cause / Goal:**
The current "Midnight Navy and Cyan" with basic frosted glass looks generic. To align with the brand identity, we need to pivot to a highly sophisticated "Matte Black & Signature Yellow" (or Studio White & Yellow) palette based on the official Capital Bridge logo, keeping the structural typography and smooth scroll physics to feel like a $50k agency site.

**Fix / Approach:**
Rewrite CSS variables to use the logo's native White and Yellow as the primary high-contrast accents against a premium Matte Black (or pure white) background. Swap fonts to `Geist`/`Satoshi` for body and `Clash Display` for headings. Add a subtle static noise texture overlay. Install `@studio-freight/lenis` and wire it into GSAP's `requestAnimationFrame`.

---

- [x] **RED — Integration (`smoothscroll.e2e.test.ts`):**
  - [x] Test: On load, Lenis is initialized and takes over the native window scroll.
  - [x] **Run — confirm RED.**

- [x] **GREEN — Backend:**
  - [x] N/A

- [x] **RED — Unit / Component (`Theme.test.tsx`):**
  - [x] Test: The new design tokens (Obsidian/Titanium) and fonts are actively applied.
  - [x] **Run — confirm RED.**

- [x] **GREEN — Frontend (Types → Component):**
  - [x] [Styles] Overhaul `global.css` with the new palette and noise texture.
  - [x] [Styles] Update `BentoCard` glassmorphism to subtle white/silver.
  - [x] [Component] Implement Lenis in `App.tsx`.
  - [x] Run unit test — **confirm GREEN**.

- [x] **Verification chain:**
  - [x] User scrolls down → The movement has weight and momentum (Lenis) → The aesthetic feels incredibly expensive, structural, and tactile → ✅ Done.

### Phase 5: Inner Pages Architecture & Routing (Next)

Build out the structural foundation and components for the remaining pages of the original website (About Us, Services, Contact, etc.) using `react-router-dom` and the newly established design system.

#### [Feature: Multi-Page Routing & Inner Page Components]

**Root cause / Goal:**
The homepage is built, but the original Capital Bridge website has multiple inner pages. We need a robust client-side routing system and modular layout components to render the inner pages without breaking the SPA experience or smooth scroll.

**Fix / Approach:**
Install `react-router-dom`. Refactor the current Homepage into `src/pages/Home.tsx`. Scaffold `src/pages/About.tsx`, `src/pages/Services.tsx`, and `src/pages/Contact.tsx`.

---

- [x] **RED — Integration (`routing.e2e.test.ts`):**
  - [x] Test: Navigating to `/about` renders the About Us page heading, and `/services` renders the Services heading.
  - [x] **Run — confirm RED.**

- [x] **GREEN — Backend:**
  - [x] N/A

- [x] **RED — Unit / Component (`Router.test.tsx`):**
  - [x] Test: The `Navbar` links correctly push to the router history without triggering a full page reload.
  - [x] **Run — confirm RED.**

- [x] **GREEN — Frontend (Types → Component):**
  - [x] [Dependency] Install `react-router-dom`.
  - [x] [Component] Refactor Homepage to `Home.tsx`.
  - [x] [Component] Scaffold `About.tsx`, `Services.tsx`, `Contact.tsx`.
  - [x] Run unit test — **confirm GREEN**.

- [x] **Verification chain:**
  - [x] User clicks "About" in navbar → URL changes to `/about` instantly → The smooth Lenis scroll is maintained → ✅ Done.

---

### Phase 6: Testimonials Marquee & Premium Footer (Future)

Implement the GSAP infinite horizontal scroll marquee for testimonials and the final responsive footer.

#### [Feature: Kinetic Testimonial Marquee & Footer]

**Root cause / Goal:**
Standard testimonial grids lack the kinetic energy of a premium brand. We need an infinite auto-scrolling marquee for social proof and an architectural footer.

**Fix / Approach:**
Build `TestimonialMarquee.tsx` utilizing GSAP and `Footer.tsx` with full brand typography and routing links.

---

- [x] **RED — Integration (`marquee.e2e.test.ts`):**
  - [x] Test: Testimonial items exist in the DOM and their X coordinates change over time.
  - [x] **Run — confirm RED.**

- [x] **GREEN — Backend:**
  - [x] N/A

- [x] **RED — Unit / Component (`Footer.test.tsx`):**
  - [x] Test: Footer correctly renders all dynamic router links.
  - [x] **Run — confirm RED.**

- [x] **GREEN — Frontend (Types → Component):**
  - [x] [Component] Implement `TestimonialMarquee.tsx`.
  - [x] [Component] Implement `Footer.tsx`.
  - [x] Run unit test — **confirm GREEN**.

- [x] **Verification chain:**
  - [x] User scrolls to bottom of page → Testimonials endlessly loop horizontally → User hovers to pause and read → ✅ Done.

### Phase 7: Verbatim Page Restoration & Service Hierarchy (Currently Active)

Populate all scaffolded pages (and create missing ones) with the exact text content from the vault, ensuring the site matches the original architecture (Solutions/Services dropdowns).

#### [Feature: Content Migration & Inner Page Fidelity]

**Root cause / Goal:**
The previous phases used "Lorem Ipsum" or high-level summaries. To maintain 1:1 parity, we must migrate the exact verbatim text from the vault into the UI components.

**Fix / Approach:**
Migrate all vault markdown files into a structured `src/data/content.ts`. Create a reusable `ContentPageLayout` component that supports both "Solutions" and "Services" sub-pages. Ensure the "Our Team" page renders all 4 members with their correct extensions.

---

- [ ] **RED — Unit (`data.fidelity.test.ts`):**
  - [ ] Test: The `homeContent` object is expanded to include all 14 vaulted pages, and a random sampling of text matches the vault files exactly.
  - [ ] **Run — confirm RED.**

- [ ] **GREEN — Frontend (Data Migration):**
  - [ ] [Data] Update `src/data/content.ts` with all 14 vault files.
  - [ ] [Types] Update `src/types/content.ts` interfaces.
  - [ ] Run unit test — **confirm GREEN**.

- [ ] **RED — Component (`ServicePage.test.tsx`):**
  - [ ] Test: The LTL page renders the exact headline and "Enterprise, Guaranteed, Hazmat" bullet points from the vault.
  - [ ] **Run — confirm RED.**

- [ ] **GREEN — Frontend (UI Restoration):**
  - [ ] [Component] Implement `ServiceLayout.tsx` for all 10 logistics/industry pages.
  - [ ] [Component] Populate `About.tsx` and `Team.tsx` (4 members).
  - [ ] Run unit test — **confirm GREEN**.

- [ ] **Verification chain:**
  - [ ] User navigates to `/solutions/ltl` → The text is identical to the original site but rendered with GSAP staggered reveals and glassmorphism cards → ✅ Done.

---

### Phase 8: Contact Page Form & Mapbox Integration (Future)

Implement the floating label contact form and a high-end, dark-mode Mapbox integration for the Glenview HQ.

---

## 4. Session Notes (Append-Only)

_Coding agents: After completing a unit of work or ending a session, append a brief timestamped log here detailing what was accomplished, any unresolved issues, and the next immediate step. Do not modify or delete past entries._

- **[2026-05-14]** - Project initialized. Site audit completed. TDD standards mapped and `current_state.md` master document created. Ready for Phase 1 execution (Content Extraction).
- **[2026-05-14]** - Phase 5 Inner Pages Architecture & Routing executed successfully. Installed `react-router-dom`, refactored homepage into its own component, and scaffolded About, Services, and Contact pages. Implemented a fixed glassmorphism Navbar with active route highlighting. Integrated `ScrollToTop` logic with Lenis to ensure smooth transitions between routes. All E2E routing tests passed (GREEN).
- **[2026-05-14]** - Phase 6 Testimonials Marquee & Premium Footer executed successfully. Implemented an infinite horizontal GSAP marquee for testimonials with hover-to-pause functionality. Created a multi-column architectural footer with a brand watermark and contact details. Updated `package.json` with a test script and verified all components via RED/GREEN TDD cycles (Vitest and Playwright).
- **[2026-05-14]** - **Scraping Audit & Content Vaulting Session:** Performed an exhaustive audit of the original site after discovering a significant "Content Gap" in previous phases. **Difficulties encountered:** Encounted multiple connection timeouts and 403 Forbidden errors when using automated scrape tools (`read_url_content`), likely due to the host's robot protection. Browser subagents struggled with slow load times (some pages >60s) and menu-based navigation failure. **Solution:** Switched to direct URL scraping and manual verbatim transcription into a localized "Content Vault" (`src/data/vault/`). Successfully archived all 14 pages of the original site (Solutions, Services/Industries, Team of 4, etc.) to ensure 1:1 text parity. Next step: Phase 7 (Verbatim Page Restoration).
