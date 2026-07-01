# Product Requirement Document (PRD)

## 1. Executive Summary
Velora Interior Design is a high-end, responsive web platform designed to showcase premium architectural works, residential designs, and custom spatial styling projects. The site operates as a luxury digital portfolio and a client acquisition tool, offering visitors photo-realistic visualizations, immersive video testimonials, and structured consultation booking integrations.

---

## 2. Business Goals
* **Prestige Brand Representation**: Project a cohesive, modern-luxury branding identity using curated high-definition assets, sleek dark mode aesthetics, and gold color palettes.
* **Lead Generation**: Actively convert passive site traffic into qualified leads via a streamlined consultation intake form and direct WhatsApp communication channels.
* **Asset Optimization**: Deliver a high-performance web experience that loads rich image and video media under 1.5 seconds on average.

---

## 3. User Goals
* **Inspiration & Discovery**: Browse luxury design concepts (Villas, Penthouses, Corporate Offices) categorized logically by architectural themes.
* **Trust & Proof**: Access verifiable written letters and watch fluid high-definition video testimonials featuring project walkthroughs and client reactions.
* **Frictionless Booking**: Easily request consultations by choosing desired services, filling minimal fields, and instantly launching pre-formatted WhatsApp chat streams.

---

## 4. Target Audience
* **High-Net-Worth Individuals (HNWIs)**: Homeowners seeking bespoke residential estate interior designs or penthouse transformations.
* **Corporate & Commercial Clients**: Executives planning premium office spaces, boutique hotels, or luxury retail showrooms.
* **Developers & Architects**: Industry professionals searching for fit-out and engineering execution partners.

---

## 5. Features
* **Interactive Hero Areas**: Video-like and highly immersive local WebP banners spanning major sections.
* **Services Grid & Strips**: 7 core interior service blocks mapping out design inclusions and specialized workflows.
* **Premium Portfolio preview**: Dynamic cards featuring custom glowing overlays, soft hover-glows, scale transformations, and glassmorphic summaries.
* **Testimonials Video Gallery**: Interactive HTML5 video grids with hover-to-play, metadata preloading, and complete muted loop cycles.
* **Streamlined Contact Form**: Secure form validation collecting Name, Phone, Email, Desired Service, and Scope.
* **WhatsApp Consultation Linkage**: Auto-encodes booking payloads and forwards customers to `+91 73519 01329`.

---

## 6. Functional Requirements
* **Consultation Form validation**: Require Name, Phone, Email, Service, and Scope before submitting. Email must conform to RFC standards, and Phone must align with active regional lengths.
* **WhatsApp Redirect**: Auto-compile inputs into an encoded message:
  ```
  Hello Velora Interior Design,

  I would like to request a consultation.

  Name: [Name]
  Phone: [Phone]
  Email: [Email]
  Service: [Service]
  Project Details: [Project Details]

  Please contact me regarding my project.
  ```
* **HTML5 Video Gallery controls**: Play videos dynamically when a user hovers over a video testimonial card. Pause and reset `currentTime = 0` immediately on mouse leave. Videos must be globally muted.

---

## 7. Non-Functional Requirements
* **Performance**: Under 1.5s First Contentful Paint (FCP) and low Interaction to Next Paint (INP) to maintain a premium feel.
* **Responsive Design**: Consistent scaling across standard breakpoints (mobile, tablet, desktop, ultra-wide) utilizing CSS flexbox, grids, and fluid container widths.
* **Accessibility (a11y)**: Muted video loops, accessible contrast ratios for navigation menus, clear form inputs with matched label identifiers.
* **SEO Optimization**: Unique meta titles, schema markup, semantic headings structure (`h1` per page), and descriptive image alt values.

---

## 8. User Stories
* **Story 1 (Residential HNWI)**: As an owner of a new luxury villa, I want to filter the portfolio by "Luxury Villa" so that I can inspect the aesthetic craftsmanship of previously completed properties.
* **Story 2 (Corporate Client)**: As a commercial developer, I want to request a corporate office consultation via WhatsApp so that I can get immediate feedback on lead times and pricing structures.
* **Story 3 (Boutique Guest)**: As a prospective visitor, I want to watch project walkthroughs directly inside my browser without clicking play buttons or launching full-screen players.

---

## 9. Success Metrics
* **Conversion Rate**: Percentage of site visitors completing contact forms or clicking WhatsApp redirect CTAs.
* **Bounce Rate**: Maintaining bounce rates under 30% through engaging animations and fast initial load states.
* **Media Load Efficiency**: Zero rendering layout shifts (CLS) on high-resolution image mounts.

---

## 10. Future Scope
* **Live Interactive 3D Tours**: Embedding WebGL spatial panoramas directly inside project pages.
* **Real-time Client Dashboard**: Multi-stage portals where active clients check construction statuses and supply chain transit markers.
* **Integrated Booking Calendar**: Direct Calendly or custom time-slot synchronization inside the consultation modal.
