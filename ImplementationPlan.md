# Project Implementation Plan & Roadmap

This document outlines the sequential delivery steps for developers working on the Velora Interior Design project.

---

## Phase 1: Foundation & Project Config

### Tasks
1. Initialize directory using Vite dev tools, selecting React + JS template.
2. Establish global CSS design system rules inside `src/index.css`.
3. Set up directory hierarchy (pages, components, routes, data, styles).

### Deliverables
* Complete repository structure with clean configuration parameters.
* Global style constants (colors, layouts, animations, cursors).

### Acceptance Criteria
* Code base builds with `npm run build` with zero compiler warnings.
* Global theme is active on root launch views.

---

## Phase 2: Core Routing & Shell Layout

### Tasks
1. Program navigation menus and page shells inside `Navbar.jsx` and `Footer.jsx`.
2. Configure layout routing paths in `AppRoutes.jsx`.
3. Build responsive page stubs (Home, About, Services, Portfolio, Process, Testimonials, Contact).

### Deliverables
* Fully functional client router mappings.
* Consistent header and footer layout frames on all pages.

### Acceptance Criteria
* Swapping page links updates view URLs instantly.
* Direct URL entries (e.g. `/services`) load successfully.

---

## Phase 3: Services Section & Consultation System

### Tasks
1. Build service grid lists linking inclusions lists.
2. Configure consultation modal popup component supporting input validation.
3. Hook up WhatsApp submission handler.

### Deliverables
* Services listings page.
* Accessible popup modal form with validation states and loader panels.

### Acceptance Criteria
* Clicking "Request Consultation" opens modal and pre-fills selected service.
* Submitting redirects user to WhatsApp with pre-filled encoded text.

---

## Phase 4: Testimonials Video Gallery

### Tasks
1. Implement testimonial page containing written feedback.
2. Program HTML5 video grid using Cloudinary video blocks.
3. Build mouse enter/leave play hooks.

### Deliverables
* Interactive video showcase section.
* Written customer feedback cards.

### Acceptance Criteria
* Hovering starts video play cycle smoothly.
* Mouse leave pauses and resets video playback.

---

## Phase 5: Production Deployment & QA

### Tasks
1. Audit layout responsiveness on mobile/tablet screen widths.
2. Verify production-build package outputs.
3. Deploy staging to Edge CDN nodes (Vercel).

### Deliverables
* Live URL hosting verified build.
* Rewrites configurations checking routing reloads.

### Acceptance Criteria
* Site achieves high Google PageSpeed scores on mobile and desktop devices.
* Form booking pathways convert correctly on active devices.
