# Project Data Schemas

This document defines the mock data schemas and data structures driving the dynamic portions of the Velora Interior Design interface.

---

## 1. Service Schema
The service data drives the service listings on the Services page.

### TypeScript Definition
```typescript
interface Service {
  id: number;
  icon: string;         // Name of the react-icons component to load
  title: string;        // Name of the service
  shortDesc: string;    // Brief tag snippet for summaries
  description: string;  // Detailed explanation of the service
  inclusions: string[]; // Key offerings included in the scope
  image: string;        // Imported WebP image variable or file path
}
```

### JSON Representation
```json
{
  "id": 1,
  "icon": "MdOutlineWeekend",
  "title": "Residential Interior Design",
  "shortDesc": "Complete spatial transformation for custom estate homes and luxury apartments.",
  "description": "Our residential interior design services cover every aspect of creating bespoke living environments...",
  "inclusions": [
    "Bespoke layout configuration & space planning",
    "Custom woodwork & built-in design",
    "Material, texture & color coordination",
    "Designer lighting & decorative layouts",
    "Premium furniture sourcing & staging"
  ],
  "image": "/src/assets/images/services/residential_result.webp"
}
```

---

## 2. Portfolio Schema
The portfolio project cards populate the Portfolio page grids and the homepage showcase component.

### TypeScript Definition
```typescript
interface Project {
  id: number;
  title: string;       // Name of the estate or project
  category: string;    // Classification category for filters
  image: string;       // Primary showcase WebP asset path
  location: string;    // City or region of execution
  area: string;        // Spatial square footage
  year: string;        // Year of completion
  details: string;     // Short summary of the design brief
}
```

### JSON Representation
```json
{
  "id": 101,
  "title": "The Grand Oasis Villa",
  "category": "Luxury Villa",
  "image": "/src/assets/images/portfolio/home(sec)1/22_result.webp",
  "location": "Noida, NCR",
  "area": "12,500 sq. ft.",
  "year": "2025",
  "details": "Double-height private residence prioritizing fumed oak woodwork, marble flooring, and smart lighting grids."
}
```

---

## 3. Testimonial Schema
Testimonial data structures are divided into written reviews and interactive video walkthrough elements.

### TypeScript Definition (Written Testimonials)
```typescript
interface WrittenTestimonial {
  id: number;
  name: string;
  location: string;
  review: string;
  rating: number;      // Integer rating score (1 to 5)
  projectType: string; // The service hired for the project
  image: string;       // Profile picture of the reviewer
}
```

### JSON Representation
```json
{
  "id": 1,
  "name": "Aman Singhal",
  "location": "New Delhi",
  "review": "Velora translated our spatial dreams into a reality. The project delivery was on-schedule and the attention to stone layout detail was outstanding.",
  "rating": 5,
  "projectType": "Luxury Villa Design",
  "image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80"
}
```

---

## 4. Team Schema
Defines the structure for senior partners and principal architects on the About page.

### TypeScript Definition
```typescript
interface TeamMember {
  id: number;
  name: string;
  role: string;       // Design function or executive title
  bio: string;        // Personal background summary
  image: string;      // Profile portrait WebP path
}
```

### JSON Representation
```json
{
  "id": 1,
  "name": "Sarah Miller",
  "role": "Principal Architect",
  "bio": "Over 15 years designing luxury residences across Europe and Asia, specializing in sustainable materials.",
  "image": "/src/assets/images/about/soloman.webp"
}
```

---

## 5. Contact Form Data Payload
The dataset submitted by clients seeking spatial consultations.

### TypeScript Definition
```typescript
interface ContactPayload {
  fullName: string;
  phone: string;
  email: string;
  service: string;       // Selected service matching active services
  projectType: string;   // Scope selection (e.g. New Construction)
  message: string;       // Spatial desires and special comments
}
```

### JSON Representation
```json
{
  "fullName": "Kabir Kapoor",
  "phone": "+91 99999 88888",
  "email": "kabir.k@example.com",
  "service": "Corporate Office Design",
  "projectType": "Complete Remodel",
  "message": "We need to remodel our 5,000 sq ft office showroom prioritizing glass partitions and double-height custom chandeliers."
}
```
