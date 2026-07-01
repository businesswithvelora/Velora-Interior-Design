# Technical Specification (TechSpec)

## 1. Architecture Overview
Velora Interior Design is architected as a lightweight, single-page client application (SPA). High-fidelity local assets and code bundles are optimized, cached, and served instantly using modern web pipelines.

---

## 2. Routing Structure
Routing is declared declaratively via React Router inside `src/routes/AppRoutes.jsx`. The application utilizes standard path configurations:

```
/                -> HomePage.jsx (Hero banner, 3-card showcase, statistics, maps)
/about           -> AboutPage.jsx (Origin summary, timeline, partner profiles)
/services        -> ServicesPage.jsx (Services grid, consultation trigger, modal form)
/portfolio       -> PortfolioPage.jsx (Categorized filters, project grids)
/process         -> ProcessPage.jsx (Chronological process timeline, steps)
/testimonials    -> TestimonialsPage.jsx (Hover-to-play video player, written letters)
/contact         -> ContactPage.jsx (General inquiry forms, coordinates, live maps)
```

---

## 3. State Management
* **Intake Forms**: Validated via lightweight react-hook-form modules or React component state vectors.
* **UI States**: Modal toggling (`isModalOpen`), dropdown lists, filter states (`selectedCategory`), and loading transitions (`isSubmitting`) are contained using standard React `useState` hooks to minimize component re-renders.

---

## 4. Component Architecture
* **Layout Wrappers**: The navbar and footer wrap around active route modules to maintain layout consistency.
* **Custom Cursor Widget**: Track client mouse vectors and update cursor states (`hovering-clickable`) to improve site interactivity.
* **Before-After Slider**: Reusable canvas elements that track horizontal swipe gestures to overlay before-and-after construction previews.

---

## 5. Asset Management Strategy
* **Pre-Optimization**: All imagery is transformed to WebP formats with compressed dimensions matching maximum viewport limits (e.g. 1920px width for heroes, 600px width for cards).
* **Vite Hash Mapping**: The Vite bundler processes all relative asset imports inside JS/JSX files and maps them to clean fingerprint strings (e.g., `hero_result-CHlnHh25.webp`) to optimize content delivery network (CDN) caching.

---

## 6. Performance Optimization
* **Lazy Loading**: Apply native browser `loading="lazy"` tags on all cards and secondary strips to delay loading until viewport entry.
* **Video Tuning**:Muted settings, inline parameters, and metadata preloads ensure videos start playing on hover with zero buffer delays:
  ```html
  <video muted preload="metadata" playsinline loop />
  ```
* **Minification**: Bundled CSS files are processed by Vite's internal minifier, stripping whitespaces and combining duplicate variables.

---

## 7. SEO Implementation
* **Header Hierarchy**: Strictly one `h1` element per view, followed by organized heading nests (`h2` and `h3`).
* **Semantic HTML**: Utilize structural landmarks such as `<header>`, `<main>`, `<section>`, and `<footer>` rather than generic `<div>` stacks.
* **Anchor Descriptors**: Avoid generic links; provide distinct text and descriptive link summaries.

---

## 8. Deployment Strategy
* **Staging Builds**: Staged builds are automatically triggered on Vercel upon commits to the branch code repository.
* **Edge Routing**: Rewrite configs map clean routes back to `index.html` to allow direct page reloads:
  ```json
  { "source": "/(.*)", "destination": "/index.html" }
  ```
