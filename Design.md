# Design System Documentation

Velora Interior Design relies on a cohesive, modern-luxury branding design system. It projects a premium and high-end aesthetic tailored for luxury services.

---

## 1. Color Palette

Our dark theme is punctuated with warm gold highlights:

* **Background Dark (`--color-bg`)**: `#111111` (Deep luxury charcoal)
* **Accent Gold (`--color-gold`)**: `#c9a96e` (Refined champagne gold)
* **Accent Gold Hover (`--color-gold-hover`)**: `#b8975c` (Slightly darker gold tone)
* **Secondary Slate (`--color-slate`)**: `#1a1a1a` (Card backgrounds)
* **Primary Text (`--color-white`)**: `#ffffff`
* **Muted Text (`--color-text-muted`)**: `rgba(255, 255, 255, 0.7)`

---

## 2. Typography

Clean, architectural typography styling:

* **Display/Heading Font (`--font-display`)**: `Playfair Display`, serif (Luxury serif styling)
* **Body Font (`--font-body`)**: `Inter`, sans-serif (Legible, technical sans-serif)

---

## 3. Spacing & Container System

Fluid spacing built on 8px base units:

```css
--spacing-xs: 8px;
--spacing-sm: 16px;
--spacing-md: 24px;
--spacing-lg: 48px;
--spacing-xl: 80px;
```

---

## 4. UI Components

### Buttons
* **Primary**: Filled with accent gold, white sans-serif text, 4px rounded corner radius. Hover triggers scale up (`1.02`) and transition to gold-hover color.
* **Secondary**: Outlined in gold, transparent background, transitions to filled gold state on hover.

### Cards
* **Portfolio Cards**: Featuring rounded corners (`12px`), glassmorphic dark description blocks at the bottom, and dynamic hover-glow backgrounds.
* **Services Strips**: Alternating grid layouts (even/odd) with gold accent borders on images.

---

## 5. Animations

Transitions must feel smooth and fluid:

```css
--transition-smooth: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
```

* **Section Reveals**: Uses `IntersectionObserver` to trigger fade-in and translateY transformations when elements scroll into view.
* **Card Glow Hover**: Blurred dynamic copy of the image fades in and scales behind the card to create a custom color aura.
* **Custom Cursor**: Follows mouse coordinates, transitioning to a gold circle state on hover-trigger components.

---

## 6. Responsive Breakpoints

* **Mobile (portrait)**: `< 576px`
* **Mobile (landscape) / Tablet**: `576px - 768px`
* **Desktop**: `768px - 1200px`
* **Ultra-wide**: `> 1200px`
