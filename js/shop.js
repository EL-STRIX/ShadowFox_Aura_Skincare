/**
 * AURA Botanicals - Shop & Catalog Filtering
 * E-Commerce Storefront - Frontend Internship (Intermediate Level)
 */

document.addEventListener('DOMContentLoaded', () => {
  const productsGrid = document.getElementById('shopProductsGrid');
  const productCountElem = document.getElementById('shopProductCount');
  const categoryFilters = document.querySelectorAll('.category-filter-btn');
  const sortSelect = document.getElementById('shopSortSelect');
  const searchInput = document.getElementById('shopSearchInput');
  const activeFilterPill = document.getElementById('activeCategoryLabel');

  if (!productsGrid || typeof PRODUCTS === 'undefined') return;

  // Read URL parameters for initial category if navigated from elsewhere
  const urlParams = new URLSearchParams(window.location.search);
  let currentCategory = urlParams.get('category') || 'all';
  let currentSort = 'featured';
  let searchQuery = '';

  // Set active button state based on URL param
  categoryFilters.forEach(btn => {
    if (btn.dataset.category === currentCategory) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Render product cards helper
  function renderProducts() {
    let filtered = PRODUCTS.filter(product => {
      const matchCategory = currentCategory === 'all' || product.category === currentCategory;
      const matchSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    });

    // Sort products
    if (currentSort === 'price-low') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (currentSort === 'price-high') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (currentSort === 'rating') {
      filtered.sort((a, b) => b.rating - a.rating);
    } else if (currentSort === 'name') {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    // Update count display
    if (productCountElem) {
      productCountElem.textContent = `Showing ${filtered.length} product${filtered.length === 1 ? '' : 's'}`;
    }
    if (activeFilterPill) {
      const label = currentCategory === 'all' ? 'All Botanical Formulations' : currentCategory.charAt(0).toUpperCase() + currentCategory.slice(1);
      activeFilterPill.textContent = label;
    }

    if (filtered.length === 0) {
      productsGrid.innerHTML = `
        <div class="no-products-state">
          <i class="fa-solid fa-leaf no-prod-icon"></i>
          <h3>No formulations found</h3>
          <p>Try clearing your search query or selecting a different category.</p>
          <button class="btn btn-secondary" onclick="resetShopFilters()">View All Products</button>
        </div>
      `;
      return;
    }

    productsGrid.innerHTML = filtered.map(product => {
      const defaultSize = product.sizes ? product.sizes[0] : 'Standard';
      return `
        <article class="product-card" data-id="${product.id}">
          <div class="product-card-media">
            <span class="product-badge">${product.badge}</span>
            <a href="product.html?id=${product.id}" class="product-img-link" aria-label="${product.name}">
              <img src="${product.image}" alt="${product.name}" class="product-img" loading="lazy">
            </a>
            <button type="button" class="quick-add-btn" onclick="addToCart('${product.id}', '${defaultSize}', 1)" aria-label="Quick add to bag">
              <i class="fa-solid fa-bag-shopping"></i> Quick Add
            </button>
          </div>
          <div class="product-card-info">
            <div class="product-category-rating">
              <span class="prod-category">${product.categoryLabel}</span>
              <span class="prod-rating"><i class="fa-solid fa-star"></i> ${product.rating}</span>
            </div>
            <h3 class="product-title">
              <a href="product.html?id=${product.id}">${product.name}</a>
            </h3>
            <p class="product-desc">${product.shortDesc}</p>
            <div class="product-card-footer">
              <span class="product-price">$${product.price.toFixed(2)}</span>
              <span class="product-size">${defaultSize}</span>
            </div>
          </div>
        </article>
      `;
    }).join('');
  }

  // Filter Buttons Click
  categoryFilters.forEach(btn => {
    btn.addEventListener('click', () => {
      categoryFilters.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.dataset.category;
      renderProducts();
    });
  });

  // Sort Select Change
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      currentSort = e.target.value;
      renderProducts();
    });
  }

  // Search Input Debounced
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim();
      renderProducts();
    });
  }

  // Global reset helper
  window.resetShopFilters = function() {
    currentCategory = 'all';
    currentSort = 'featured';
    searchQuery = '';
    if (searchInput) searchInput.value = '';
    if (sortSelect) sortSelect.value = 'featured';
    categoryFilters.forEach(btn => {
      if (btn.dataset.category === 'all') btn.classList.add('active');
      else btn.classList.remove('active');
    });
    renderProducts();
  };

  // Initial render
  renderProducts();
});
