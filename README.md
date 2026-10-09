# AURA Botanicals — Skincare Storefront

A modern, responsive e-commerce storefront built with semantic HTML5, modern CSS, and Vanilla JavaScript. Developed as an intermediate-level frontend project for the **ShadowFox Web Development Internship**.

---

## Overview

**AURA Botanicals** is a brand-focused skincare e-commerce website designed around a clean, organic editorial aesthetic. It features a complete shopping flow—from discovering products on the homepage and filtering formulations in the catalog, to viewing detailed product specifications and managing items in a persistent slide-out cart.

The entire application is built using pure vanilla web technologies without external frameworks, emphasizing core web fundamentals, smooth interactions, and responsive UI design.

---

## Key Features

- **Dynamic Product Catalog (`shop.html`)**
  - Instant category filtering (Serums, Cleansers, Facial Oils, Moisturizers).
  - Real-time search matching product names, ingredients, and descriptions.
  - Multi-criteria sorting (Price low/high, rating, alphabetical).
  - Friendly empty state with a one-click filter reset.

- **Interactive Product Detail Page (`product.html`)**
  - Dynamic product loading via URL parameters (`?id=aura-01`).
  - Size variant toggle (e.g., 30ml vs. 50ml) with live price updates.
  - Interactive image gallery with thumbnail preview switching.
  - Quantity stepper with real-time total price calculation.
  - Expandable accordion sections for active ingredients, ritual usage, and formulation details.
  - "Complete Your Ritual" related product recommendations.

- **Persistent Cart Drawer (`cart.js`)**
  - Slide-out side drawer accessible from every page.
  - `localStorage` persistence for cart items, selected variants, and quantities.
  - Dynamic free shipping progress tracker ($60 threshold).
  - Promo code system (e.g., `WELCOME10` for 10% off) with live total updates.
  - Simulated checkout flow with customer details form and order confirmation modal.

- **Responsive & Accessible Design**
  - Mobile-first layout with a smooth slide-out navigation drawer.
  - Warm botanical color palette with natural typography and micro-interactions.
  - Accessible HTML5 markup, ARIA labels, and touch-friendly controls.

---

## Tech Stack

- **HTML5** — Semantic layout and structured document markup.
- **CSS3** — Custom properties (variables), Grid, Flexbox, and fluid transitions.
- **Vanilla JavaScript (ES6+)** — Modular scripts for cart state, dynamic catalog filtering, URL query parameter parsing, and drawer interactions.
- **Font Awesome 6** — UI and category icons.

---

## Project Structure

```text
├── assets/                  # Product and brand imagery
├── css/
│   └── style.css            # Design tokens, layout & responsive styling
├── js/
│   ├── products.js          # Product catalog dataset
│   ├── cart.js              # Cart drawer state, promo codes & checkout
│   ├── shop.js              # Catalog search, filter, and sorting logic
│   ├── product-detail.js    # Product page rendering & variant selector
│   └── main.js              # Navigation, mobile menu & homepage UI
├── index.html               # Storefront homepage
├── shop.html                # Product catalog page
├── product.html             # Dynamic product detail page
└── README.md                # Project documentation
```

---

## Getting Started

No build tools or package installations are required. To view the project locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/EL-STRIX/ShadowFox_Skincare_Brand.git
   ```

2. **Open the project:**
   - Open `index.html` directly in any modern browser, or
   - Launch using a local server (e.g., VS Code's **Live Server** extension).

---

## Connect

- **Developer**: Sujay Paul
- **GitHub**: [@EL-STRIX](https://github.com/EL-STRIX)
- **LinkedIn**: [Sujay Paul](https://www.linkedin.com/in/sujay-paul-684537374/)
- **Email**: sujaypaul892@gmail.com
