# AURA Botanicals — Organic Skincare & Wellness Storefront
**ShadowFox Frontend Development Internship — Intermediate Level Project**

## 1. Project Overview
**AURA Botanicals** is a brand-focused e-commerce storefront frontend developed for a modern organic botanical skincare brand. The project is designed with a warm, editorial aesthetic, robust visual hierarchy, and an interactive customer shopping journey.

---

## 2. Key Features & Storefront Flow

### A. Homepage (`index.html`)
- **Top Announcement Bar:** Highlights active promotions (`WELCOME10` code) and free shipping threshold.
- **Hero Banner:** Compelling value proposition, stats, and clear call-to-action buttons.
- **Brand Values Banner:** Four core pillars (Clean Botanicals, Clinically Tested, Sustainable Glass, Cruelty-Free).
- **Curated Best Sellers Grid:** Dynamic cards with instant "Quick Add to Bag" capability.
- **Category Exploration:** Dedicated cards for Cleansers, Serums, Oils, and Barrier Creams.
- **Botanical Science & Ingredient Spotlight:** Highlights active herbal extracts and clinical benefits.
- **Customer Testimonials:** Verified reviews highlighting product efficacy and texture.
- **Newsletter Subscription:** Client-side email validation with immediate visual confirmation.

### B. Product Catalog & Listing (`shop.html`)
- **Category Filter Tabs:** Filter seamlessly across All, Serums, Cleansers, Facial Oils, and Moisturizers.
- **Live Search Bar:** Instant debounced keyword search matching product names, ingredients, and descriptions.
- **Dynamic Sorting:** Sort by Price (Low to High / High to Low), Customer Rating, and Alphabetical name.
- **Dynamic Product Cards:** Badges (e.g. *Best Seller*, *Award Winner*), star ratings, prices, and one-click add to cart.
- **Empty Filter State:** Friendly fallback state with a one-click filter reset button.

### C. Product Detail Page (`product.html?id=aura-01`)
- **Breadcrumb Navigation:** Dynamic navigation hierarchy.
- **Product Media Showcase:** Interactive image switching and thumbnail gallery.
- **Dynamic Price & Variant Selection:** Live price updates when toggling size variants (e.g., 30ml vs 50ml).
- **Quantity Stepper:** Responsive increment/decrement buttons with real-time total price calculation on the CTA button.
- **Interactive Information Accordions (`<details>`):** Key Active Ingredients & roles, Daily Ritual Usage instructions, and Formulation Philosophy.
- **"Complete Your Ritual" Related Products:** Recommends synergistic formulations from the catalog.

### D. Slide-Out Cart Drawer & State Management (`js/cart.js`)
- **Persistent LocalStorage:** Cart items, chosen variants, and quantities persist across page reloads and between all pages.
- **Free Shipping Progress Tracker:** Live progress bar calculating remaining amount needed to unlock free standard shipping ($60.00 threshold).
- **Quantity Adjustments & Item Removal:** Update quantities (+/-) or remove items directly within the drawer.
- **Promo Code Engine:** Validates discount codes (e.g., `WELCOME10` for 10% off) and updates totals live.
- **Simulated Checkout Flow:** Interactive modal capturing shipping information and simulated payment methods with success confirmation state.

---

## 3. Brand Identity & Design System

- **Design Tone:** Warm, minimalist, botanical editorial aesthetic with natural border radii (4px–10px) and clean typography hierarchy.
- **Color Palette:**
  - **Background (`--bg-main`):** `#F5F3EE` (warm off-white/cream)
  - **Section Alternate (`--bg-section`):** `#EDE7DE`
  - **Card Surface (`--bg-card`):** `#FFFFFF`
  - **Primary Text (`--text-primary`):** `#20252B` (deep charcoal)
  - **Secondary Text (`--text-secondary`):** `#667078` (neutral slate)
  - **Accent (`--accent` / `--accent-hover`):** `#C86B4A` / `#A9573B` (terracotta / rust)
  - **Framing & Borders (`--border`):** `#DDD9D0`

---

## 4. Responsiveness & Usability Approach
- **Mobile First & Flexible CSS Grid / Flexbox:** Fluid layouts accommodating desktop monitors, tablets, and mobile smartphones.
- **Touch-Friendly Controls:** Generous touch targets (40px+ buttons and steppers) and slide-out mobile drawer navigation.
- **Accessible & Semantic HTML5:** Clean landmark tags (`<header>`, `<main>`, `<section>`, `<aside>`, `<footer>`, `<details>`), ARIA labels, and descriptive alt text.

---

## 5. Technology Stack
- **HTML5:** Semantic document architecture.
- **Vanilla CSS3:** Custom CSS properties (variables), Grid, Flexbox, media queries. Zero heavy external CSS frameworks for maximum performance.
- **Vanilla JavaScript (ES6+):** Modular scripts for cart state, dynamic catalog filtering, URL query parameter parsing, and interactive drawer behaviors.
- **Font Awesome 6.5:** Vector icons for shopping bag, search, stars, and botanical features.

---

## 6. How to Run Locally

1. Clone or open the repository folder:
   ```bash
   cd "D:\INTERNSHIPS\5. ShadowFox Front-end\ShadowFox Skincare Brand"
   ```
2. Open `index.html` in any web browser, or start a local live server (e.g., VS Code Live Server extension or `python -m http.server 8000`).
