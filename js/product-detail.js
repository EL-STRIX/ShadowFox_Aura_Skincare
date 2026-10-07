/**
 * AURA Botanicals - Product Detail Page Logic
 * E-Commerce Storefront - Frontend Internship (Intermediate Level)
 */

document.addEventListener('DOMContentLoaded', () => {
  const detailContainer = document.getElementById('productDetailContainer');
  if (!detailContainer || typeof PRODUCTS === 'undefined') return;

  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id') || 'aura-01';

  const product = PRODUCTS.find(p => p.id === productId) || PRODUCTS[0];

  let selectedSize = product.selectedSize || product.sizes[0];
  let quantity = 1;

  function calculatePrice() {
    let price = product.price;
    if (selectedSize === '50ml' && product.sizes.includes('30ml') || selectedSize === '100ml' || selectedSize === '250ml') {
      price = product.price * 1.35;
    }
    return price.toFixed(2);
  }

  // Render Product Details
  function renderDetail() {
    const currentPrice = calculatePrice();

    detailContainer.innerHTML = `
      <!-- Breadcrumb Navigation -->
      <nav class="breadcrumb-nav" aria-label="Breadcrumb">
        <a href="index.html">Home</a>
        <span class="bc-sep">/</span>
        <a href="shop.html?category=${product.category}">${product.categoryLabel}</a>
        <span class="bc-sep">/</span>
        <span class="bc-current">${product.name}</span>
      </nav>

      <div class="product-detail-layout">
        <!-- Left: Image Showcase -->
        <div class="product-gallery-wrap">
          <div class="product-main-media" id="productMainMedia">
            <img src="${product.image}" alt="${product.name}" class="detail-main-img" id="mainProductImage">
            <span class="detail-badge">${product.badge}</span>
          </div>
          <div class="product-thumbnails">
            <button class="thumb-btn active" onclick="switchThumbnail(0)">
              <img src="${product.image}" alt="${product.name} thumbnail" class="thumb-img">
            </button>
            <button class="thumb-btn" onclick="switchThumbnail(1)">
              <img src="assets/hero-product.jpg" alt="Botanical studio thumbnail" class="thumb-img">
            </button>
          </div>
        </div>

        <!-- Right: Info & Purchase Form -->
        <div class="product-info-wrap">
          <div class="detail-category-rating">
            <span class="detail-category">${product.categoryLabel}</span>
            <div class="detail-rating">
              <span class="stars"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></span>
              <span class="rating-val">${product.rating} (${product.reviewsCount} reviews)</span>
            </div>
          </div>

          <h1 class="detail-title">${product.name}</h1>
          <div class="detail-price-wrap">
            <span class="detail-price" id="dynamicDetailPrice">$${currentPrice}</span>
            <span class="detail-tax-note">Tax included. Free shipping over $60.</span>
          </div>

          <p class="detail-short-desc">${product.shortDesc}</p>

          <!-- Size Selector -->
          <div class="detail-option-group">
            <label class="option-label">Select Size: <strong id="selectedSizeLabel">${selectedSize}</strong></label>
            <div class="size-options">
              ${product.sizes.map(size => `
                <button type="button" class="size-btn ${size === selectedSize ? 'active' : ''}" onclick="selectProductSize('${size}')">
                  ${size}
                </button>
              `).join('')}
            </div>
          </div>

          <!-- Quantity & Add to Cart -->
          <div class="detail-action-group">
            <div class="detail-qty-stepper">
              <button type="button" class="qty-btn" onclick="changeDetailQty(-1)" aria-label="Decrease quantity">-</button>
              <span class="qty-val" id="detailQtyDisplay">${quantity}</span>
              <button type="button" class="qty-btn" onclick="changeDetailQty(1)" aria-label="Increase quantity">+</button>
            </div>
            <button type="button" class="btn btn-primary detail-add-btn" id="detailAddBtn" onclick="handleDetailAddToCart()">
              <i class="fa-solid fa-bag-shopping"></i> Add to Bag — $${(currentPrice * quantity).toFixed(2)}
            </button>
          </div>

          <!-- Trust Badges -->
          <div class="detail-trust-grid">
            <div class="trust-pill">
              <i class="fa-solid fa-seedling"></i>
              <span>100% Botanical</span>
            </div>
            <div class="trust-pill">
              <i class="fa-solid fa-paw"></i>
              <span>Cruelty-Free</span>
            </div>
            <div class="trust-pill">
              <i class="fa-solid fa-shield-halved"></i>
              <span>Dermatologist Tested</span>
            </div>
            <div class="trust-pill">
              <i class="fa-solid fa-recycle"></i>
              <span>Recyclable Glass</span>
            </div>
          </div>

          <!-- Accordion Information Sections -->
          <div class="detail-accordions">
            <!-- 1. Key Ingredients -->
            <details class="accordion-item" open>
              <summary class="accordion-header">
                <span>Key Active Ingredients</span>
                <i class="fa-solid fa-chevron-down acc-icon"></i>
              </summary>
              <div class="accordion-body">
                <ul class="ingredient-list">
                  ${product.keyIngredients.map(ing => `
                    <li><strong>${ing.name}:</strong> ${ing.role}</li>
                  `).join('')}
                </ul>
              </div>
            </details>

            <!-- 2. How to Use -->
            <details class="accordion-item">
              <summary class="accordion-header">
                <span>How to Use & Ritual</span>
                <i class="fa-solid fa-chevron-down acc-icon"></i>
              </summary>
              <div class="accordion-body">
                <p>${product.howToUse}</p>
                <p class="skin-suitability"><strong>Best For:</strong> ${product.skinType}</p>
              </div>
            </details>

            <!-- 3. Full Story & Clinical Benefits -->
            <details class="accordion-item">
              <summary class="accordion-header">
                <span>Formulation Philosophy</span>
                <i class="fa-solid fa-chevron-down acc-icon"></i>
              </summary>
              <div class="accordion-body">
                <p>${product.fullDesc}</p>
              </div>
            </details>
          </div>
        </div>
      </div>

      <!-- Related Products Section -->
      <section class="related-products-section">
        <div class="section-title-wrap text-left">
          <span class="section-subtitle">Complete Your Ritual</span>
          <h2 class="section-title">Pair With These Formulations</h2>
        </div>
        <div class="products-grid related-grid" id="relatedProductsGrid"></div>
      </section>
    `;

    renderRelated();
  }

  // Size change handler
  window.selectProductSize = function(size) {
    selectedSize = size;
    const price = calculatePrice();
    const priceElem = document.getElementById('dynamicDetailPrice');
    const sizeLabel = document.getElementById('selectedSizeLabel');
    const addBtn = document.getElementById('detailAddBtn');
    if (priceElem) priceElem.textContent = `$${price}`;
    if (sizeLabel) sizeLabel.textContent = size;
    if (addBtn) addBtn.innerHTML = `<i class="fa-solid fa-bag-shopping"></i> Add to Bag — $${(price * quantity).toFixed(2)}`;

    document.querySelectorAll('.size-btn').forEach(btn => {
      if (btn.textContent.trim() === size) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  };

  // Quantity Stepper handler
  window.changeDetailQty = function(delta) {
    quantity = Math.max(1, quantity + delta);
    const qtyElem = document.getElementById('detailQtyDisplay');
    const addBtn = document.getElementById('detailAddBtn');
    const price = calculatePrice();
    if (qtyElem) qtyElem.textContent = quantity;
    if (addBtn) addBtn.innerHTML = `<i class="fa-solid fa-bag-shopping"></i> Add to Bag — $${(price * quantity).toFixed(2)}`;
  };

  // Add to Bag Button
  window.handleDetailAddToCart = function() {
    if (typeof addToCart === 'function') {
      addToCart(product.id, selectedSize, quantity, true);
    }
  };

  // Thumbnail switcher
  window.switchThumbnail = function(index) {
    const mainImg = document.getElementById('mainProductImage');
    const thumbs = document.querySelectorAll('.thumb-btn');
    thumbs.forEach((t, i) => {
      if (i === index) t.classList.add('active');
      else t.classList.remove('active');
    });
    if (mainImg) {
      if (index === 0) {
        mainImg.src = product.image;
      } else {
        mainImg.src = 'assets/hero-product.jpg';
      }
    }
  };

  // Render Related Products
  function renderRelated() {
    const relatedGrid = document.getElementById('relatedProductsGrid');
    if (!relatedGrid) return;

    const related = PRODUCTS.filter(p => p.id !== product.id).slice(0, 3);
    relatedGrid.innerHTML = related.map(item => `
      <article class="product-card">
        <div class="product-card-media">
          <a href="product.html?id=${item.id}" class="product-img-link" aria-label="${item.name}">
            <img src="${item.image}" alt="${item.name}" class="product-img" loading="lazy">
          </a>
          <button type="button" class="quick-add-btn" onclick="addToCart('${item.id}', '${item.sizes[0]}', 1)" aria-label="Quick add to bag">
            <i class="fa-solid fa-bag-shopping"></i> Quick Add
          </button>
        </div>
        <div class="product-card-info">
          <div class="product-category-rating">
            <span class="prod-category">${item.categoryLabel}</span>
            <span class="prod-rating"><i class="fa-solid fa-star"></i> ${item.rating}</span>
          </div>
          <h3 class="product-title">
            <a href="product.html?id=${item.id}">${item.name}</a>
          </h3>
          <div class="product-card-footer">
            <span class="product-price">$${item.price.toFixed(2)}</span>
            <span class="product-size">${item.sizes[0]}</span>
          </div>
        </div>
      </article>
    `).join('');
  }

  renderDetail();
});
