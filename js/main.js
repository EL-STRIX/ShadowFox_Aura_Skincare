/**
 * AURA Botanicals - Global UI & Homepage Logic
 * E-Commerce Storefront - Frontend Internship (Intermediate Level)
 */

document.addEventListener('DOMContentLoaded', () => {

  // --- 1. Mobile Menu Navigation ---
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const mobileNavMenu = document.getElementById('mobileNavMenu');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  if (mobileMenuToggle && mobileNavMenu) {
    mobileMenuToggle.addEventListener('click', () => {
      mobileNavMenu.classList.toggle('active');
      const icon = mobileMenuToggle.querySelector('i');
      if (icon) {
        if (mobileNavMenu.classList.contains('active')) {
          icon.classList.remove('fa-bars');
          icon.classList.add('fa-xmark');
        } else {
          icon.classList.remove('fa-xmark');
          icon.classList.add('fa-bars');
        }
      }
    });

    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileNavMenu.classList.remove('active');
        const icon = mobileMenuToggle.querySelector('i');
        if (icon) {
          icon.classList.remove('fa-xmark');
          icon.classList.add('fa-bars');
        }
      });
    });
  }

  // --- 2. Render Featured Products on Homepage ---
  const featuredGrid = document.getElementById('homeFeaturedGrid');
  if (featuredGrid && typeof PRODUCTS !== 'undefined') {
    // Show 4 hero formulations
    const featured = PRODUCTS.slice(0, 4);
    featuredGrid.innerHTML = featured.map(product => {
      const defaultSize = product.sizes ? product.sizes[0] : 'Standard';
      return `
        <article class="product-card" data-id="${product.id}">
          <div class="product-card-media">
            <span class="product-badge">${product.badge}</span>
            <a href="product.html?id=${product.id}" class="product-img-link" aria-label="${product.name}">
              ${getProductSVG(product.iconType, product.imageBg, '#C86B4A')}
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

  // --- 3. Newsletter Subscription Form Validation ---
  const newsletterForm = document.getElementById('newsletterForm');
  const newsletterInput = document.getElementById('newsletterEmail');
  const newsletterSuccess = document.getElementById('newsletterSuccess');

  if (newsletterForm && newsletterInput && newsletterSuccess) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = newsletterInput.value.trim();
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
      }

      newsletterSuccess.style.display = 'block';
      newsletterForm.reset();

      setTimeout(() => {
        newsletterSuccess.style.display = 'none';
      }, 5000);
    });
  }

  // --- 4. Dynamic Year in Footer ---
  const yearElem = document.getElementById('copyrightYear');
  if (yearElem) {
    yearElem.textContent = new Date().getFullYear();
  }
});
