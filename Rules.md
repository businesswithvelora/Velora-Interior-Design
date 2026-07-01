# Development & Contribution Rules

These guidelines define standard code styling, file management, and component architecture for the Velora Interior Design codebase. Adhering to these conventions maintains architectural integrity and premium runtime performance.

---

## 1. Code Style & Syntax
* **JavaScript**: Use ES6+ syntax patterns exclusively. Prefer functional paradigms, arrow functions, and object destructuring.
* **Imports**: Group imports at the top of files in the following sequence:
  1. Core React imports.
  2. Third-party packages and icon libraries (`react-icons`).
  3. Reusable UI components and widgets.
  4. Local data structures and mock files.
  5. Stylesheets and asset assets.

---

## 2. Naming Conventions
* **Components**: PascalCase (e.g. `PortfolioPreview.jsx`, `TestimonialCard.jsx`).
* **Utility Classes & Functions**: camelCase (e.g. `handleSubmit`, `formatMessage`).
* **Variables & Constants**: camelCase for constants, except global configuration parameters which use UPPER_SNAKE_CASE.
* **Styles & Classes**: kebab-case (e.g. `video-testimonials-grid`, `service-strip-image`).

---

## 3. Component Architecture
* **Single Responsibility**: Each component should perform one job. Break down large files into smaller sub-components inside their parent directories.
* **Inline CSS vs Stylesheets**:
  * Store layout-specific variables, hover actions, and keyframe definitions in modular CSS files inside `src/styles/components/`.
  * Use inline style structures for parameters computed at runtime (e.g. background images or dynamic overlays).

---

## 4. Folder Rules
* All page-specific imports belong inside `src/pages/`.
* Reusable components that occupy entire rows or layout grids belong inside `src/components/sections/`.
* Atomic UI elements (e.g. buttons, simple labels, custom cards) belong inside `src/components/ui/`.
* Custom page-specific stylesheet rules belong inside `src/styles/components/` and are imported at the top of the main pages.

---

## 5. Asset Management
* Use **WebP** formats for all images to maintain low payload delivery.
* Use **MP4** containers with high-efficiency codecs (H.264/AAC) for video files.
* Do not place raw source assets in the `public/` directory unless they are referenced by external services (e.g., manifest.json or favicons). Always store layout media inside `src/assets/` to ensure they are compressed and hashed at build time.

---

## 6. Routing Rules
* Define all route pathways inside `src/routes/AppRoutes.jsx`.
* Ensure every page component has a fallback route mapping to the home path (`/`) to prevent broken dead-ends.
* Clean up routes when removing features. Do not leave unused imports or inactive paths inside routing lists.

---

## 7. Performance & Optimization
* Use `loading="lazy"` on all images outside the hero folder to optimize initial page paint times.
* Preload metadata only (`preload="metadata"`) for videos in the testimonial gallery. Never load complete media files automatically.
* Keep components clean of memory leaks. Clean up event listeners, intervals, and timeouts when components unmount using the cleanup function of `useEffect`.

---

## 8. SEO Guidelines
* Ensure every page includes a single structured semantic `h1` element representing the main header.
* Provide clean, descriptive `alt` text parameters on all rendering `<img>` elements.
* Keep page meta descriptive strings concise (between 150-160 characters) and include target design keywords.

---

## 9. Accessibility (a11y)
* Provide visible focus indicators on all inputs and interactive button components.
* Ensure all background video streams are muted (`muted`) and support playsinline layouts on mobile browsers.
* Keep contrast ratios above 4.5:1 for standard text overlays to ensure maximum legibility.
