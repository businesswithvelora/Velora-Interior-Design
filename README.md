# Velora Interior Design

A premium digital web platform built for **Velora Interior Design**, a high-end luxury interior architecture firm. The application showcases custom residential, corporate, hospitality, and retail portfolio concepts through rich media, fluid interactive sections, and high-performance layout systems.

---

## 1. Project Overview
* **Branding Aesthetic**: Sleek dark backgrounds, refined gold accent styling (`var(--color-gold)`), and high-contrast typography.
* **Key Integrations**: Custom consultation intake workflows, direct pre-formatted WhatsApp redirections, and interactive video review widgets.
* **Technology Stack**: React, Vite, ES6 Javascript, React Router, React Hook Form, and Vanilla CSS components.

---

## 2. Installation

Ensure you have [Node.js](https://nodejs.org/) (v18+ recommended) installed.

1. Clone the project repository:
   ```bash
   git clone <repository-url>
   cd velora-interior-desgin
   ```

2. Install all development and production dependencies:
   ```bash
   npm install
   ```

---

## 3. Development Setup

Start the local development server with Hot Module Replacement (HMR):
```bash
npm run dev
```
By default, the server will launch at [http://localhost:5173](http://localhost:5173).

---

## 4. Folder Structure

```
velora-interior-desgin/
├── src/
│   ├── assets/             # Raw media assets (images, logos, WebPs, videos)
│   ├── components/         # Reusable UI widgets and section blocks
│   │   ├── common/         # Layout modules (Navbar, Footer, CustomCursor)
│   │   ├── sections/       # Modular page sections (HeroSection, PortfolioPreview)
│   │   └── ui/             # Atomic design tokens (Buttons, Cards, Labels)
│   ├── data/               # Static mock structures (services, testimonials, projects)
│   ├── pages/              # Top-level page views (HomePage, AboutPage, ServicesPage, etc.)
│   ├── routes/             # AppRoutes config & routing maps
│   ├── styles/             # Modular CSS stylesheet structures
│   ├── App.jsx             # Entry React tree wrapper
│   └── main.jsx            # Main virtual DOM execution layer
├── public/                 # Static public assets (favicon, site markers)
├── vite.config.js          # Vite build config
├── package.json            # Scripts & project manifests
└── vercel.json             # Vercel routing rules
```

---

## 5. Scripts

All common pipeline scripts are registered in `package.json`:
* `npm run dev`: Launch the local development server.
* `npm run build`: Compile and optimize production assets using the Rolldown/Vite engine.
* `npm run preview`: Boot up a local preview server of the generated production bundle to audit outputs.

---

## 6. Build Process
Vite bundles application assets into highly optimized, chunked code structures:
1. JavaScript assets are minified and split to optimize browser cache limits.
2. WebP images and media are mapped and fingerprinted to guarantee cache invalidation upon asset updates.
3. CSS structures are processed and compiled into compact sheets, eliminating unused rules.

---

## 7. Deployment Process

The project is structured for turnkey deployment on platforms like Vercel or Netlify.

### Deploying to Vercel:
1. Ensure the Vercel CLI is installed (`npm i -g vercel`).
2. Run the deployment sequence:
   ```bash
   vercel
   ```
3. To build and deploy to production directly:
   ```bash
   vercel --prod
   ```

---

## 8. Environment Variables
Currently, all luxury properties and testimonial parameters are stored inside local JSON/JS configurations under `src/data/` for reliability and speed. No external environment configs (`.env`) are required for the static frontend build.

---

## 9. Troubleshooting

* **Asset Loading Failures**: Vite can sometimes face problems resolving relative paths containing parentheses (e.g. `home(sec)1`). Ensure all asset references use absolute source-root absolute prefixes (`/src/assets/...`) inside JSX files.
* **Routing Redirection Loops**: If direct route refreshes result in `404 Not Found` errors in staging, confirm the presence of `vercel.json` rewrite configuration at the project root:
  ```json
  {
    "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
  }
  ```
