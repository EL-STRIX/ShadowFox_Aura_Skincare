/**
 * AURA Botanicals - Cart Management & Slide-Out Drawer
 * E-Commerce Storefront - Frontend Internship (Intermediate Level)
 */

const CART_STORAGE_KEY = 'AURA_BOTANICALS_CART';
const FREE_SHIPPING_THRESHOLD = 60.00;
let appliedDiscount = 0; // percentage e.g. 0.10 for 10%

// Retrieve cart from localStorage
function getCart() {
  try {
    const data = localStorage.getItem(CART_STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    console.error('Error reading cart from localStorage', e);
    return [];
  }
}

// Save cart to localStorage and refresh UI
function saveCart(cart) {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  } catch (e) {
    console.error('Error saving cart to localStorage', e);
  }
  updateCartBadges();
  renderCartDrawer();
}

// Find product by ID
function findProduct(id) {
  if (typeof PRODUCTS !== 'undefined') {
    return PRODUCTS.find(p => p.id === id);
  }
  return null;
}

// Add item to cart
function addToCart(productId, size, quantity = 1, openDrawer = true) {
  const product = findProduct(productId);
  if (!product) return;

  const itemSize = size || product.selectedSize || (product.sizes && product.sizes[0]) || 'Standard';
  const cart = getCart();
  const existingIndex = cart.findIndex(item => item.id === productId && item.size === itemSize);

  if (existingIndex > -1) {
    cart[existingIndex].quantity += Number(quantity);
  } else {
    cart.push({
      id: productId,
      size: itemSize,
      quantity: Number(quantity)
    });
  }

  saveCart(cart);
  showToast(`Added "${product.name}" (${itemSize}) to your bag.`);

  if (openDrawer) {
    openCartDrawer();
  }
}

// Update item quantity (+1 / -1)
function updateCartItemQuantity(productId, size, delta) {
  const cart = getCart();
  const itemIndex = cart.findIndex(item => item.id === productId && item.size === size);
  if (itemIndex > -1) {
    cart[itemIndex].quantity += delta;
    if (cart[itemIndex].quantity <= 0) {
      cart.splice(itemIndex, 1);
      showToast('Item removed from your bag.');
    }
    saveCart(cart);
  }
}

// Remove item from cart
function removeFromCart(productId, size) {
  let cart = getCart();
  cart = cart.filter(item => !(item.id === productId && item.size === size));
  saveCart(cart);
  showToast('Item removed from your bag.');
}

// Update cart counter badges in navigation
function updateCartBadges() {
  const cart = getCart();
  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const badgeElements = document.querySelectorAll('.cart-count-badge');
  badgeElements.forEach(badge => {
    badge.textContent = totalCount;
    if (totalCount > 0) {
      badge.style.display = 'inline-flex';
    } else {
      badge.style.display = 'none';
    }
  });
}

// Calculate totals
function calculateCartTotals() {
  const cart = getCart();
  let subtotal = 0;

  cart.forEach(item => {
    const product = findProduct(item.id);
    if (product) {
      let price = product.price;
      if (item.size && (item.size === '50ml' && product.sizes.includes('30ml') || item.size === '100ml' || item.size === '250ml')) {
        price = product.price * 1.35;
      }
      subtotal += price * item.quantity;
    }
  });

  const discountAmount = subtotal * appliedDiscount;
  const subtotalAfterDiscount = subtotal - discountAmount;
  const isFreeShipping = subtotalAfterDiscount >= FREE_SHIPPING_THRESHOLD || subtotal === 0;
  const shipping = isFreeShipping ? 0 : 5.00;
  const total = subtotal === 0 ? 0 : subtotalAfterDiscount + shipping;

  return {
    subtotal: subtotal.toFixed(2),
    discountAmount: discountAmount.toFixed(2),
    subtotalAfterDiscount: subtotalAfterDiscount.toFixed(2),
    shipping: shipping.toFixed(2),
    isFreeShipping,
    total: total.toFixed(2),
    amountForFreeShipping: Math.max(0, FREE_SHIPPING_THRESHOLD - subtotalAfterDiscount).toFixed(2)
  };
}

// Render the contents inside slide-out cart drawer
function renderCartDrawer() {
  const cartItemsContainer = document.getElementById('cartDrawerItems');
  const cartSubtotalElem = document.getElementById('cartDrawerSubtotal');
  const cartShippingBar = document.getElementById('cartShippingBar');
  const cartShippingText = document.getElementById('cartShippingText');
  const cartFooter = document.getElementById('cartDrawerFooter');
  const cartEmptyState = document.getElementById('cartDrawerEmpty');

  if (!cartItemsContainer) return;

  const cart = getCart();
  const totals = calculateCartTotals();

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = '';
    if (cartEmptyState) cartEmptyState.style.display = 'block';
    if (cartFooter) cartFooter.style.display = 'none';
    if (cartShippingText) cartShippingText.innerHTML = `Free shipping on orders over <strong>$${FREE_SHIPPING_THRESHOLD.toFixed(2)}</strong>`;
    if (cartShippingBar) cartShippingBar.style.width = '0%';
    return;
  }

  if (cartEmptyState) cartEmptyState.style.display = 'none';
  if (cartFooter) cartFooter.style.display = 'block';

  // Shipping progress bar calculation
  const subtotalNum = Number(totals.subtotalAfterDiscount);
  const percent = Math.min(100, Math.round((subtotalNum / FREE_SHIPPING_THRESHOLD) * 100));
  if (cartShippingBar) cartShippingBar.style.width = `${percent}%`;
  if (cartShippingText) {
    if (totals.isFreeShipping) {
      cartShippingText.innerHTML = `🎉 You've unlocked <strong>Free Standard Shipping</strong>!`;
    } else {
      cartShippingText.innerHTML = `Add <strong>$${totals.amountForFreeShipping}</strong> more to qualify for <strong>Free Shipping</strong>`;
    }
  }

  if (cartSubtotalElem) {
    cartSubtotalElem.textContent = `$${totals.total}`;
  }

  // Render list of cart items
  cartItemsContainer.innerHTML = cart.map(item => {
    const product = findProduct(item.id);
    if (!product) return '';

    let unitPrice = product.price;
    if (item.size && (item.size === '50ml' && product.sizes.includes('30ml') || item.size === '100ml' || item.size === '250ml')) {
      unitPrice = product.price * 1.35;
    }
    const itemTotal = (unitPrice * item.quantity).toFixed(2);

    return `
      <div class="cart-item" data-id="${item.id}" data-size="${item.size}">
        <div class="cart-item-img">
          <img src="${product.image}" alt="${product.name}" class="cart-item-img-tag" loading="lazy">
        </div>
        <div class="cart-item-details">
          <div class="cart-item-header">
            <h4 class="cart-item-title"><a href="product.html?id=${product.id}">${product.name}</a></h4>
            <button class="cart-item-remove" onclick="removeFromCart('${item.id}', '${item.size}')" aria-label="Remove item">
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>
          <p class="cart-item-variant">Size: ${item.size}</p>
          <div class="cart-item-footer">
            <div class="qty-control">
              <button type="button" class="qty-btn" onclick="updateCartItemQuantity('${item.id}', '${item.size}', -1)" aria-label="Decrease quantity">-</button>
              <span class="qty-val">${item.quantity}</span>
              <button type="button" class="qty-btn" onclick="updateCartItemQuantity('${item.id}', '${item.size}', 1)" aria-label="Increase quantity">+</button>
            </div>
            <span class="cart-item-price">$${itemTotal}</span>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// Open/Close Cart Drawer
function openCartDrawer() {
  const drawer = document.getElementById('cartDrawer');
  const overlay = document.getElementById('cartOverlay');
  if (drawer && overlay) {
    drawer.classList.add('open');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    renderCartDrawer();
  }
}

function closeCartDrawer() {
  const drawer = document.getElementById('cartDrawer');
  const overlay = document.getElementById('cartOverlay');
  if (drawer && overlay) {
    drawer.classList.remove('open');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Toast notification helper
function showToast(message) {
  let toast = document.getElementById('auraToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'auraToast';
    toast.className = 'aura-toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('visible');

  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => {
    toast.classList.remove('visible');
  }, 3200);
}

// Initialize Cart event listeners
document.addEventListener('DOMContentLoaded', () => {
  updateCartBadges();
  renderCartDrawer();

  // Bind Open Drawer Triggers
  const openCartBtns = document.querySelectorAll('.open-cart-btn');
  openCartBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openCartDrawer();
    });
  });

  // Bind Close Drawer Trigger
  const closeCartBtn = document.getElementById('closeCartBtn');
  if (closeCartBtn) {
    closeCartBtn.addEventListener('click', closeCartDrawer);
  }

  const cartOverlay = document.getElementById('cartOverlay');
  if (cartOverlay) {
    cartOverlay.addEventListener('click', closeCartDrawer);
  }

  // Promo Code Handler
  const promoForm = document.getElementById('promoCodeForm');
  const promoInput = document.getElementById('promoCodeInput');
  const promoMsg = document.getElementById('promoMsg');

  if (promoForm && promoInput) {
    promoForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const code = promoInput.value.trim().toUpperCase();
      if (code === 'WELCOME10' || code === 'AURA10') {
        appliedDiscount = 0.10;
        if (promoMsg) {
          promoMsg.textContent = 'Code applied! 10% discount added.';
          promoMsg.className = 'promo-msg success';
        }
        renderCartDrawer();
      } else {
        if (promoMsg) {
          promoMsg.textContent = 'Invalid promo code. Try "WELCOME10"';
          promoMsg.className = 'promo-msg error';
        }
      }
    });
  }

  // Checkout Modal simulation
  const checkoutBtn = document.getElementById('checkoutBtn');
  const checkoutModal = document.getElementById('checkoutModal');
  const closeCheckoutBtn = document.getElementById('closeCheckoutBtn');

  if (checkoutBtn && checkoutModal) {
    checkoutBtn.addEventListener('click', () => {
      const cart = getCart();
      if (cart.length === 0) return;
      closeCartDrawer();
      checkoutModal.classList.add('active');
    });
  }

  if (closeCheckoutBtn && checkoutModal) {
    closeCheckoutBtn.addEventListener('click', () => {
      checkoutModal.classList.remove('active');
    });
  }

  const checkoutForm = document.getElementById('simulatedCheckoutForm');
  if (checkoutForm && checkoutModal) {
    checkoutForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const successBox = document.getElementById('checkoutSuccessState');
      const formBox = document.getElementById('checkoutFormState');
      if (successBox && formBox) {
        formBox.style.display = 'none';
        successBox.style.display = 'block';
        // Clear cart
        localStorage.removeItem(CART_STORAGE_KEY);
        updateCartBadges();
      }
    });
  }
});
