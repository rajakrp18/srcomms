"use client";
import React, { useState, useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import Link from 'next/link';
import { PRODUCTS, Product } from '@/data/products';

// Cart Item Interface
export interface CartItem {
  id: string;
  slug: string;
  name: string;
  price: number;
  formattedPrice: string;
  image: string;
  brand: string;
  quantity: number;
}

const STORE_WHATSAPP = "919717459671";
const STORE_PHONE = "+91 9717459671";

// Universal Client Portal to break out of all parent stacking contexts (sticky navbars, cards)
function ClientPortal({ children, lockScroll = true }: { children: React.ReactNode; lockScroll?: boolean }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (lockScroll) {
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prevOverflow;
      };
    }
  }, [lockScroll]);

  if (!mounted || typeof document === 'undefined') return null;
  return createPortal(children, document.body);
}

// ==========================================
// 1. NAVIGATION ICONS & DRAWER TRIGGERS
// ==========================================
export function NavIcons() {
  const [cartCount, setCartCount] = useState(0);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const updateCount = () => {
      try {
        const stored = JSON.parse(localStorage.getItem('sr_cart') || '[]');
        const total = stored.reduce((acc: number, item: CartItem) => acc + (item.quantity || 1), 0);
        setCartCount(total);
      } catch (e) {
        setCartCount(0);
      }
    };

    updateCount();
    window.addEventListener('cart-updated', updateCount);
    
    // Keyboard shortcut for search
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
      if (e.key === 'Escape') {
        setSearchOpen(false);
        setCartOpen(false);
        setMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('cart-updated', updateCount);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <>
      <div className="nav-actions-cluster">
        {/* Instant Search Button */}
        <button
          onClick={() => setSearchOpen(true)}
          className="nav-icon-btn search-nav-btn"
          aria-label="Search Catalog"
          title="Search (Ctrl + K)"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <span className="search-pill-label">Search</span>
          <kbd className="kbd-shortcut">⌘K</kbd>
        </button>

        {/* WhatsApp Call / Chat direct */}
        <a
          href={`https://wa.me/${STORE_WHATSAPP}?text=${encodeURIComponent("Hi SR Communication, I'm visiting your website and have a question about smartphone availability.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="nav-icon-btn whatsapp-nav-btn"
          title="Chat with SR Communication on WhatsApp"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.592 2.654-.696c1.001.599 1.804.85 2.806.85 3.181 0 5.767-2.586 5.768-5.766 0-3.18-2.586-5.767-5.768-5.767zm0 10.365c-.878 0-1.637-.253-2.392-.728l-.171-.107-1.776.466.474-1.731-.118-.188c-.521-.828-.797-1.499-.797-2.277 0-2.536 2.064-4.6 4.6-4.6 2.536 0 4.6 2.064 4.6 4.6 0 2.536-2.064 4.6-4.6 4.6z"/>
            <path d="M12 2C6.48 2 2 6.48 2 12c0 1.82.49 3.53 1.35 5L2 22l5.16-1.33c1.44.82 3.11 1.29 4.88 1.29 5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18.04c-1.58 0-3.08-.44-4.38-1.2l-.31-.18-3.06.8 1.13-2.98-.2-.33c-.85-1.34-1.3-2.91-1.3-4.52 0-4.49 3.65-8.14 8.14-8.14 4.49 0 8.14 3.65 8.14 8.14 0 4.49-3.65 8.14-8.14 8.14z"/>
          </svg>
          <span className="wa-text-label">WhatsApp</span>
        </a>

        {/* Shopping Cart Button */}
        <button
          onClick={() => setCartOpen(true)}
          className="nav-icon-btn cart-btn-wrap"
          aria-label="Shopping Cart"
          title="Shopping Cart"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
          {cartCount > 0 && <span className="cart-counter-badge">{cartCount}</span>}
        </button>

        {/* Mobile Hamburger Menu Toggle Button */}
        <button
          onClick={() => setMenuOpen(true)}
          className="nav-icon-btn mobile-menu-toggle-btn"
          aria-label="Open Navigation Menu"
          title="Open Menu"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>

      {/* Slide-out Cart Drawer */}
      <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />

      {/* Global Instant Search Modal */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />

      {/* Mobile Navigation Drawer */}
      {menuOpen && (
        <ClientPortal>
          <div className="mobile-menu-overlay" onClick={() => setMenuOpen(false)}>
            <div className="mobile-menu-drawer" onClick={(e) => e.stopPropagation()}>
              <div className="mobile-menu-header">
                <Link href="/" onClick={() => setMenuOpen(false)} className="navbar-brand-link">
                  <img src="/favicon.png" alt="SR Communication" className="navbar-logo-image" style={{ width: 32, height: 32 }} />
                  <span className="navbar-brand-text" style={{ fontSize: '1.2rem' }}>
                    <span className="brand-primary-text">SR</span> <span className="brand-gradient">Communication</span>
                  </span>
                </Link>
                <button
                  className="drawer-close-btn"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close Menu"
                >
                  ✕
                </button>
              </div>

              <div className="mobile-menu-body">
                <div className="mobile-menu-links">
                  <Link href="/#catalog" onClick={() => setMenuOpen(false)} className="mobile-nav-link">
                    <span className="mobile-link-icon">📱</span>
                    <div>
                      <strong>All Smartphones & Catalog</strong>
                      <span>Browse 60+ latest phones, specs & pricing</span>
                    </div>
                  </Link>

                  <Link href="/#categories" onClick={() => setMenuOpen(false)} className="mobile-nav-link">
                    <span className="mobile-link-icon">🎧</span>
                    <div>
                      <strong>Shop by Category</strong>
                      <span>Audio, Smartwatches, Tablets & Accessories</span>
                    </div>
                  </Link>

                  <Link href="/#emi-calculator" onClick={() => setMenuOpen(false)} className="mobile-nav-link">
                    <span className="mobile-link-icon">⚡</span>
                    <div>
                      <strong>0% Downpayment EMI Calculator</strong>
                      <span>Calculate Bajaj & IDFC zero-interest finance</span>
                    </div>
                  </Link>

                  <Link href="/#deals" onClick={() => setMenuOpen(false)} className="mobile-nav-link">
                    <span className="mobile-link-icon">🔄</span>
                    <div>
                      <strong>Old Phone Exchange Deals</strong>
                      <span>Up to ₹8,000 instant trade-in value</span>
                    </div>
                  </Link>

                  <Link href="/store" onClick={() => setMenuOpen(false)} className="mobile-nav-link">
                    <span className="mobile-link-icon">📍</span>
                    <div>
                      <strong>Showroom Location & Timings</strong>
                      <span>Shalimar Garden, Sahibabad (10 AM - 9 PM)</span>
                    </div>
                  </Link>

                  <Link href="/contact" onClick={() => setMenuOpen(false)} className="mobile-nav-link">
                    <span className="mobile-link-icon">📞</span>
                    <div>
                      <strong>Contact & Support</strong>
                      <span>Helpline, GST Invoice & inquiries</span>
                    </div>
                  </Link>
                </div>

                <div className="mobile-menu-actions">
                  <a
                    href={`https://wa.me/${STORE_WHATSAPP}?text=${encodeURIComponent("Hi SR Communication, I'm visiting your website on mobile and would like to inquire about phone stock and offers.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp-full"
                    style={{ justifyContent: 'center' }}
                  >
                    💬 Chat on WhatsApp
                  </a>

                  <a
                    href="tel:+919717459671"
                    className="btn btn-outline"
                    style={{ justifyContent: 'center', width: '100%', marginTop: '10px' }}
                  >
                    📞 Call Store (+91 97174 59671)
                  </a>
                </div>

                <div className="mobile-store-timing-card">
                  <span>🏪 <strong>SR Communication</strong></span>
                  <p>Ug-1, S/14 Shalimar Garden Ext-2, Sahibabad, Ghaziabad, UP 201005</p>
                  <small>Open 7 Days a Week: 10:00 AM – 9:00 PM</small>
                </div>
              </div>
            </div>
          </div>
        </ClientPortal>
      )}
    </>
  );
}

// ==========================================
// 2. SEARCH MODAL WITH LIVE AUTOCOMPLETE
// ==========================================
export function SearchModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [query, setQuery] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('All');

  const filtered = useMemo(() => {
    let list = PRODUCTS;
    if (selectedBrand !== 'All') {
      list = list.filter((p) => p.brand.toLowerCase() === selectedBrand.toLowerCase());
    }
    if (!query.trim()) return list.slice(0, 8); // show popular 8
    const q = query.toLowerCase().trim();
    return list.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        (p.specs.processor && p.specs.processor.toLowerCase().includes(q))
    );
  }, [query, selectedBrand]);

  if (!isOpen) return null;

  return (
    <ClientPortal>
      <div className="modal-backdrop" onClick={onClose}>
        <div className="search-modal-box" onClick={(e) => e.stopPropagation()}>
          <div className="search-input-header">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search phones, specs (e.g. iPhone 16, Snapdragon, 200MP, AirPods)..."
            autoFocus
            className="search-main-input"
          />
          {query.trim().length > 0 && (
            <button
              onClick={() => setQuery('')}
              className="search-clear-query-btn"
              title="Clear search"
              aria-label="Clear search"
            >
              ✕
            </button>
          )}
          <button className="search-close-btn" onClick={onClose} aria-label="Close search">Esc</button>
        </div>

        {/* Quick brand filter tags */}
        <div className="search-filter-pills">
          {['All', 'Apple', 'Samsung', 'Vivo', 'OnePlus', 'Nothing', 'Xiaomi', 'Realme', 'Oppo'].map((b) => (
            <button
              key={b}
              onClick={() => setSelectedBrand(b)}
              className={`search-pill ${selectedBrand === b ? 'active' : ''}`}
            >
              {b}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div className="search-results-list">
          {filtered.length > 0 ? (
            filtered.map((item) => (
              <Link
                href={`/product/${item.slug}`}
                key={item.id}
                onClick={onClose}
                className="search-result-item"
              >
                <div className="search-item-img">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={50}
                    height={50}
                    style={{ objectFit: 'contain' }}
                  />
                </div>
                <div className="search-item-info">
                  <div className="search-item-title-row">
                    <span className="search-item-brand">{item.brand}</span>
                    <span className="search-item-title">{item.name}</span>
                    {item.badge && <span className="mini-badge">{item.badge}</span>}
                  </div>
                  <div className="search-item-specs">
                    {item.specs.processor && <span>{item.specs.processor}</span>}
                    {item.specs.camera && <span>• {item.specs.camera.split('+')[0]}</span>}
                  </div>
                </div>
                <div className="search-item-price-col">
                  <span className="search-price">{item.formattedPrice}</span>
                  <span className="search-emi">{item.emiStartsAt}</span>
                </div>
              </Link>
            ))
          ) : (
            <div className="search-empty-state">
              <p>No products found matching &quot;{query}&quot;</p>
              <span>Try searching for &quot;iPhone&quot;, &quot;Samsung&quot;, &quot;Vivo&quot;, or &quot;AirPods&quot;</span>
            </div>
          )}
        </div>

        <div className="search-footer-hint">
          <span>Tip: Press <strong>ESC</strong> to close or click any item to view full specs & 0% EMI details.</span>
        </div>
      </div>
    </div>
    </ClientPortal>
  );
}

// ==========================================
// 3. CART DRAWER WITH WHATSAPP CHECKOUT
// ==========================================
export function CartDrawer({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const loadCart = () => {
    try {
      const stored = JSON.parse(localStorage.getItem('sr_cart') || '[]');
      setCartItems(stored);
    } catch (e) {
      setCartItems([]);
    }
  };

  useEffect(() => {
    if (isOpen) {
      loadCart();
    }
  }, [isOpen]);

  const updateQuantity = (id: string, delta: number) => {
    const updated = cartItems
      .map((item) => {
        if (item.id === id) {
          const newQty = item.quantity + delta;
          return newQty > 0 ? { ...item, quantity: newQty } : null;
        }
        return item;
      })
      .filter(Boolean) as CartItem[];

    setCartItems(updated);
    localStorage.setItem('sr_cart', JSON.stringify(updated));
    window.dispatchEvent(new Event('cart-updated'));
  };

  const removeItem = (id: string) => {
    const updated = cartItems.filter((i) => i.id !== id);
    setCartItems(updated);
    localStorage.setItem('sr_cart', JSON.stringify(updated));
    window.dispatchEvent(new Event('cart-updated'));
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem('sr_cart');
    window.dispatchEvent(new Event('cart-updated'));
  };

  const subtotal = cartItems.reduce((acc, i) => acc + i.price * i.quantity, 0);

  const handleWhatsAppCheckout = () => {
    if (cartItems.length === 0) return;
    
    let message = "🛍️ *New Order Request from SR Communication Website:*\n\n";
    cartItems.forEach((item, idx) => {
      message += `${idx + 1}. *${item.name}* (${item.brand})\n   Qty: ${item.quantity} × ${item.formattedPrice} = ₹${(item.price * item.quantity).toLocaleString('en-IN')}\n`;
    });
    message += `\n*Total Amount:* ₹${subtotal.toLocaleString('en-IN')}\n`;
    message += `*Pickup Store:* SR Communication, Shalimar Garden Ext-2, Ghaziabad\n`;
    message += `*Financing:* Please share 0% EMI options for this order.\n\nIs this ready for pickup today?`;

    const url = `https://wa.me/${STORE_WHATSAPP}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  if (!isOpen) return null;

  return (
    <ClientPortal>
      <div className="drawer-overlay" onClick={onClose}>
        <div className="cart-drawer-panel" onClick={(e) => e.stopPropagation()}>
        <div className="drawer-header">
          <div className="drawer-title-group">
            <h3>Your Shopping Cart</h3>
            <span className="cart-count-pill">{cartItems.reduce((a, b) => a + b.quantity, 0)} items</span>
          </div>
          <button className="drawer-close-btn" onClick={onClose}>✕</button>
        </div>

        <div className="drawer-content">
          {cartItems.length > 0 ? (
            <div className="cart-items-wrapper">
              {cartItems.map((item) => (
                <div className="cart-row-card" key={item.id}>
                  <div className="cart-row-img">
                    <Image src={item.image} alt={item.name} width={65} height={65} style={{ objectFit: 'contain' }} />
                  </div>
                  <div className="cart-row-details">
                    <span className="cart-row-brand">{item.brand}</span>
                    <h4 className="cart-row-name">{item.name}</h4>
                    <span className="cart-row-price">{item.formattedPrice}</span>
                  </div>
                  <div className="cart-row-actions">
                    <div className="qty-control">
                      <button onClick={() => updateQuantity(item.id, -1)} aria-label="Decrease quantity">−</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, 1)} aria-label="Increase quantity">+</button>
                    </div>
                    <button onClick={() => removeItem(item.id)} className="remove-item-btn" title="Remove item">
                      🗑
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="empty-cart-view">
              <span className="empty-cart-icon">🛒</span>
              <h4>Your cart is empty</h4>
              <p>Explore our latest smartphones, earbuds, and accessories to add products to your cart.</p>
              <button onClick={onClose} className="btn btn-primary" style={{ marginTop: '16px' }}>
                Browse Catalog →
              </button>
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="drawer-footer">
            <div className="drawer-subtotal-row">
              <span>Estimated Subtotal:</span>
              <strong>₹{subtotal.toLocaleString('en-IN')}</strong>
            </div>
            <div className="drawer-badge-row">
              <span>✓ 0% Downpayment EMI Eligible</span>
              <span>✓ Free Store Pickup in 30 Mins</span>
            </div>
            <button onClick={handleWhatsAppCheckout} className="btn btn-whatsapp-full">
              💬 Order & Reserve via WhatsApp
            </button>
            <div className="drawer-footer-actions">
              <button onClick={clearCart} className="clear-cart-link">Clear Cart</button>
              <span className="call-store-note">Or Call Store: <strong>{STORE_PHONE}</strong></span>
            </div>
          </div>
        )}
      </div>
    </div>
    </ClientPortal>
  );
}

// ==========================================
// 4. ADD TO CART HELPER BUTTONS
// ==========================================
export function AddToCartButton({ product }: { product?: Product }) {
  const [added, setAdded] = useState(false);

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!product) return;

    try {
      const stored: CartItem[] = JSON.parse(localStorage.getItem('sr_cart') || '[]');
      const existingIdx = stored.findIndex((item) => item.id === product.id);

      if (existingIdx !== -1) {
        stored[existingIdx].quantity += 1;
      } else {
        stored.push({
          id: product.id,
          slug: product.slug,
          name: product.name,
          price: product.price,
          formattedPrice: product.formattedPrice,
          image: product.image,
          brand: product.brand,
          quantity: 1,
        });
      }

      localStorage.setItem('sr_cart', JSON.stringify(stored));
      window.dispatchEvent(new Event('cart-updated'));

      setAdded(true);
      setTimeout(() => setAdded(false), 2000);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <button
      onClick={handleAdd}
      className={`btn ${added ? 'btn-success' : 'btn-outline'}`}
      style={{ padding: '14px 24px', fontWeight: 700 }}
    >
      {added ? '✓ Added to Cart!' : '+ Add to Cart'}
    </button>
  );
}

export function MiniAddToCartButton({ product }: { product?: Product }) {
  const [added, setAdded] = useState(false);

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!product) return;

    try {
      const stored: CartItem[] = JSON.parse(localStorage.getItem('sr_cart') || '[]');
      const existingIdx = stored.findIndex((item) => item.id === product.id);

      if (existingIdx !== -1) {
        stored[existingIdx].quantity += 1;
      } else {
        stored.push({
          id: product.id,
          slug: product.slug,
          name: product.name,
          price: product.price,
          formattedPrice: product.formattedPrice,
          image: product.image,
          brand: product.brand,
          quantity: 1,
        });
      }

      localStorage.setItem('sr_cart', JSON.stringify(stored));
      window.dispatchEvent(new Event('cart-updated'));

      setAdded(true);
      setTimeout(() => setAdded(false), 2000);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <button
      onClick={handleAdd}
      className={`mini-cart-btn ${added ? 'added' : ''}`}
      title={added ? 'Added!' : 'Add to cart'}
      aria-label="Add to cart"
    >
      {added ? '✓' : '+'}
    </button>
  );
}

// ==========================================
// 5. PRODUCT ACTIONS (DETAIL PAGE)
// ==========================================
export function ProductActions({ product }: { product: Product }) {
  const handleWhatsAppBooking = () => {
    const text = `Hi SR Communication, I want to buy *${product.name}* (${product.formattedPrice}) at your Shalimar Garden store.\nPlease confirm stock availability and 0% EMI details.`;
    window.open(`https://wa.me/${STORE_WHATSAPP}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="product-actions-group">
      <button onClick={handleWhatsAppBooking} className="btn btn-whatsapp-action">
        💬 Buy / Inquire on WhatsApp
      </button>
      <AddToCartButton product={product} />
      <a href={`tel:${STORE_PHONE}`} className="btn btn-phone-action" title="Call Store">
        📞 Call Store
      </a>
    </div>
  );
}

// ==========================================
// 5.5. PRODUCT MULTI-ANGLE GALLERY VIEWER
// ==========================================
export function ProductGalleryViewer({ product }: { product: Product }) {
  const images = useMemo(() => {
    if (product.gallery && product.gallery.length > 0) {
      return product.gallery;
    }
    return [product.image];
  }, [product]);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const getAngleLabel = (index: number) => {
    if (index === 0) return "Front View";
    if (index === 1) return "Back View";
    if (index === 2) return "Camera & Profile";
    if (index === 3) return "Side Angle";
    return `Angle ${index + 1}`;
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="product-gallery-viewer">
      {/* Main Interactive Stage */}
      <div className="gallery-main-stage">
        {product.badge && (
          <span className={`badge-pill badge-${product.badge.toLowerCase().replace(/\s+/g, '-')}`}>
            {product.badge}
          </span>
        )}

        {/* Current Angle Label */}
        <div className="gallery-angle-tag">
          <span className="angle-icon">📐</span>
          <span>{getAngleLabel(activeIndex)}</span>
          {images.length > 1 && (
            <span className="angle-counter">
              {activeIndex + 1}/{images.length}
            </span>
          )}
        </div>

        {/* Zoom Button */}
        <button
          type="button"
          onClick={() => setIsLightboxOpen(true)}
          className="gallery-zoom-pill"
          title="Zoom to inspect high-res finish"
          aria-label="Inspect Full Image"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            <line x1="11" y1="8" x2="11" y2="14"></line>
            <line x1="8" y1="11" x2="14" y2="11"></line>
          </svg>
          <span>Zoom</span>
        </button>

        {/* Main Image */}
        <div className="gallery-active-image-wrap" onClick={() => setIsLightboxOpen(true)}>
          <Image
            key={images[activeIndex]}
            src={images[activeIndex]}
            alt={`${product.name} - ${getAngleLabel(activeIndex)}`}
            fill
            priority
            style={{ objectFit: 'contain' }}
            sizes="(max-width: 768px) 100vw, 550px"
          />
        </div>

        {/* Next / Previous Arrows */}
        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); handlePrev(); }}
              className="gallery-arrow-btn arrow-left"
              title="Previous Angle"
              aria-label="Previous angle"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); handleNext(); }}
              className="gallery-arrow-btn arrow-right"
              title="Next Angle"
              aria-label="Next angle"
            >
              ›
            </button>
          </>
        )}
      </div>

      {/* Multi-Angle Thumbnails Track */}
      {images.length > 1 ? (
        <div className="gallery-thumbnails-row">
          {images.map((imgUrl, idx) => (
            <button
              key={idx}
              type="button"
              className={`gallery-thumb-btn ${idx === activeIndex ? 'active' : ''}`}
              onClick={() => setActiveIndex(idx)}
              title={getAngleLabel(idx)}
            >
              <div className="thumb-preview-box">
                <Image
                  src={imgUrl}
                  alt={`Thumbnail ${idx + 1}`}
                  fill
                  style={{ objectFit: 'contain' }}
                  sizes="80px"
                />
              </div>
              <span className="thumb-angle-name">{getAngleLabel(idx)}</span>
            </button>
          ))}
        </div>
      ) : (
        <div className="gallery-single-notice">
          <span className="notice-dot"></span>
          <span>Official 360° physical inspection available at Shalimar Garden store</span>
        </div>
      )}

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <ClientPortal>
          <div className="gallery-lightbox-overlay" onClick={() => setIsLightboxOpen(false)}>
            <div className="lightbox-dialog" onClick={(e) => e.stopPropagation()}>
              <div className="lightbox-top-bar">
                <div className="lightbox-title-box">
                  <h4>{product.name}</h4>
                  <span>{getAngleLabel(activeIndex)} &bull; {activeIndex + 1} of {images.length}</span>
                </div>
                <button
                  type="button"
                  className="lightbox-close-icon"
                  onClick={() => setIsLightboxOpen(false)}
                  aria-label="Close Preview"
                >
                  ✕
                </button>
              </div>

              <div className="lightbox-hero-display">
                <Image
                  src={images[activeIndex]}
                  alt={`${product.name} - ${getAngleLabel(activeIndex)}`}
                  fill
                  style={{ objectFit: 'contain' }}
                  sizes="95vw"
                />
              </div>

              {images.length > 1 && (
                <div className="lightbox-thumb-strip">
                  {images.map((imgUrl, idx) => (
                    <button
                      key={idx}
                      type="button"
                      className={`lightbox-mini-thumb ${idx === activeIndex ? 'active' : ''}`}
                      onClick={() => setActiveIndex(idx)}
                    >
                      <div style={{ position: 'relative', width: '50px', height: '40px' }}>
                        <Image
                          src={imgUrl}
                          alt={`Angle ${idx + 1}`}
                          fill
                          style={{ objectFit: 'contain' }}
                          sizes="50px"
                        />
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </ClientPortal>
      )}
    </div>
  );
}

// ==========================================
// 6. PRODUCT EMI WIDGET (DETAIL PAGE)
// ==========================================
export function ProductEmiWidget({ price, productName }: { price: number; productName: string }) {
  const [tenure, setTenure] = useState(6);

  const emiPerMonth = Math.round(price / tenure);

  return (
    <div className="product-emi-calculator-card">
      <div className="emi-card-title-row">
        <h4>💳 0% Interest EMI Scheme</h4>
        <span className="zero-down-badge">0% Downpayment</span>
      </div>
      <p className="emi-subtitle">Bajaj Finserv • IDFC First Bank • HDFC Bank • ICICI Bank</p>

      <div className="tenure-selector-row">
        {[3, 6, 9, 12].map((m) => (
          <button
            key={m}
            className={`tenure-chip ${tenure === m ? 'active' : ''}`}
            onClick={() => setTenure(m)}
          >
            {m} Months
          </button>
        ))}
      </div>

      <div className="emi-result-display">
        <div className="emi-amount-wrap">
          <span className="emi-amount-label">Monthly EMI:</span>
          <span className="emi-amount-val">₹{emiPerMonth.toLocaleString('en-IN')}/month</span>
        </div>
        <div className="emi-terms-wrap">
          <span>Downpayment: <strong>₹0</strong></span>
          <span>Interest: <strong>0%</strong></span>
        </div>
      </div>

      <button
        onClick={() => {
          const msg = `Hi SR Communication, I want to check my 0% EMI eligibility for *${productName}* (₹${emiPerMonth}/mo for ${tenure} months) at Shalimar Garden store.`;
          window.open(`https://wa.me/${STORE_WHATSAPP}?text=${encodeURIComponent(msg)}`, '_blank');
        }}
        className="btn btn-emi-inquire"
      >
        Check EMI Eligibility on WhatsApp →
      </button>
    </div>
  );
}

// ==========================================
// 7. CATALOG SECTION (MAIN PAGE REVAMP)
// ==========================================
export function CatalogSection({ initialProducts }: { initialProducts: Product[] }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeBrand, setActiveBrand] = useState('All');
  const [priceRange, setPriceRange] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  const brands = useMemo(() => {
    const set = new Set<string>();
    initialProducts.forEach((p) => {
      if (activeCategory === 'All' || p.category.toLowerCase() === activeCategory.toLowerCase()) {
        set.add(p.brand);
      }
    });
    return ['All', ...Array.from(set)];
  }, [initialProducts, activeCategory]);

  const filteredProducts = useMemo(() => {
    return initialProducts
      .filter((p) => {
        if (activeCategory !== 'All' && p.category.toLowerCase() !== activeCategory.toLowerCase()) {
          return false;
        }
        if (activeBrand !== 'All' && p.brand.toLowerCase() !== activeBrand.toLowerCase()) {
          return false;
        }
        if (priceRange === 'under25k' && p.price >= 25000) return false;
        if (priceRange === '25k-50k' && (p.price < 25000 || p.price > 50000)) return false;
        if (priceRange === '50k-100k' && (p.price < 50000 || p.price > 100000)) return false;
        if (priceRange === 'above100k' && p.price < 100000) return false;
        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'price-low') return a.price - b.price;
        if (sortBy === 'price-high') return b.price - a.price;
        if (sortBy === 'rating') return (b.rating || 0) - (a.rating || 0);
        return 0; // featured/default
      });
  }, [initialProducts, activeCategory, activeBrand, priceRange, sortBy]);

  return (
    <section className="catalog-revamp-section" id="catalog">
      <div className="container">
        {/* Section Header */}
        <div className="catalog-header-wrap">
          <div className="catalog-title-group">
            <span className="section-eyebrow">EXPLORE LIVE INVENTORY</span>
            <h2 className="section-heading-revamped">Featured Devices & Accessories</h2>
            <p className="section-sub-desc">
              All models in stock with genuine manufacturer warranty and 0% downpayment finance options in Shalimar Garden.
            </p>
          </div>

          {/* Sort Dropdown */}
          <div className="catalog-sort-box">
            <label htmlFor="sort-select">Sort by:</label>
            <select
              id="sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="catalog-sort-select"
            >
              <option value="featured">Featured / Best Sellers</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>

        {/* 1. Category Tabs */}
        <div className="catalog-category-tabs">
          {[
            { label: 'All Products', value: 'All' },
            { label: 'Smartphones', value: 'Smartphones' },
            { label: 'Earbuds & Audio', value: 'Earbuds' },
            { label: 'Smartwatches', value: 'Smartwatches' },
            { label: 'Tablets & iPads', value: 'Tablets' },
            { label: 'Accessories', value: 'Accessories' }
          ].map((cat) => (
            <button
              key={cat.value}
              onClick={() => {
                setActiveCategory(cat.value);
                setActiveBrand('All');
              }}
              className={`cat-tab-btn ${activeCategory === cat.value ? 'active' : ''}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* 2. Brand & Price Filter Chips */}
        <div className="catalog-filters-bar">
          <div className="filter-group-brands">
            <span className="filter-label">Brand:</span>
            <div className="brand-chips-scroll">
              {brands.map((b) => (
                <button
                  key={b}
                  onClick={() => setActiveBrand(b)}
                  className={`brand-chip ${activeBrand === b ? 'active' : ''}`}
                >
                  {b}
                </button>
              ))}
            </div>
          </div>

          <div className="filter-group-prices">
            <span className="filter-label">Budget:</span>
            <div className="price-chips-row">
              {[
                { label: 'All', value: 'All' },
                { label: 'Under ₹25k', value: 'under25k' },
                { label: '₹25k - ₹50k', value: '25k-50k' },
                { label: '₹50k - ₹1L', value: '50k-100k' },
                { label: '₹1L+ Flagships', value: 'above100k' }
              ].map((p) => (
                <button
                  key={p.value}
                  onClick={() => setPriceRange(p.value)}
                  className={`price-chip ${priceRange === p.value ? 'active' : ''}`}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Count Indicator */}
        <div className="catalog-count-row">
          <span>Showing <strong>{filteredProducts.length}</strong> verified devices</span>
          {(activeCategory !== 'All' || activeBrand !== 'All' || priceRange !== 'All') && (
            <button
              onClick={() => {
                setActiveCategory('All');
                setActiveBrand('All');
                setPriceRange('All');
              }}
              className="reset-filters-btn"
            >
              Reset Filters ✕
            </button>
          )}
        </div>

        {/* Products Grid */}
        <div className="modern-product-grid">
          {filteredProducts.map((product) => (
            <div className="modern-product-card" key={product.id}>
              {/* Badge */}
              {product.badge && (
                <span className={`card-badge badge-${product.badge.toLowerCase().replace(/\s+/g, '-')}`}>
                  {product.badge}
                </span>
              )}

              {/* Quick View Button overlay */}
              <button
                onClick={() => setQuickViewProduct(product)}
                className="quick-view-trigger"
                title="Quick View Specs"
              >
                👁 Quick View
              </button>

              {/* Clickable Image & Title */}
              <Link href={`/product/${product.slug}`} className="card-top-link">
                <div className="card-img-holder">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    style={{ objectFit: 'contain' }}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="card-brand-label">{product.brand}</div>
                <h3 className="card-prod-title">{product.name}</h3>
              </Link>

              {/* Key Specs Pills */}
              <div className="card-specs-chips">
                {product.specs.processor && (
                  <span className="spec-chip chip-cpu">{product.specs.processor.split('(')[0].trim()}</span>
                )}
                {product.specs.camera && (
                  <span className="spec-chip chip-cam">{product.specs.camera.split('+')[0].trim()}</span>
                )}
                {product.specs.battery && (
                  <span className="spec-chip chip-battery">{product.specs.battery.split(',')[0].trim()}</span>
                )}
              </div>

              {/* Price & EMI */}
              <div className="card-pricing-block">
                <div className="card-prices-row">
                  <span className="card-price-main">{product.formattedPrice}</span>
                  {product.formattedOriginalPrice && (
                    <span className="card-price-struck">{product.formattedOriginalPrice}</span>
                  )}
                </div>
                <div className="card-emi-tag">
                  <span>0% EMI: <strong>{product.emiStartsAt}</strong></span>
                </div>
              </div>

              {/* Card Footer Buttons */}
              <div className="card-action-btns">
                <a
                  href={`https://wa.me/${STORE_WHATSAPP}?text=${encodeURIComponent(`Hi SR Communication, is *${product.name}* (${product.formattedPrice}) available in stock at your Shalimar Garden store?`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-wa-btn"
                  title="Inquire on WhatsApp"
                >
                  💬 Inquire
                </a>
                <MiniAddToCartButton product={product} />
              </div>
            </div>
          ))}
        </div>

        {/* Quick View Modal */}
        {quickViewProduct && (
          <ClientPortal>
            <div className="modal-backdrop" onClick={() => setQuickViewProduct(null)}>
              <div className="quick-view-modal" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close-icon" onClick={() => setQuickViewProduct(null)}>✕</button>
                
                <div className="quick-view-grid">
                  <div className="quick-view-img-wrap">
                    <Image
                      src={quickViewProduct.image}
                      alt={quickViewProduct.name}
                      fill
                      style={{ objectFit: 'contain' }}
                    />
                  </div>

                  <div className="quick-view-info">
                    <span className="brand-tag">{quickViewProduct.brand}</span>
                    <h2>{quickViewProduct.name}</h2>
                    <p className="quick-view-desc">{quickViewProduct.description}</p>

                    <div className="quick-view-price-row">
                      <span className="price-big">{quickViewProduct.formattedPrice}</span>
                      {quickViewProduct.formattedOriginalPrice && (
                        <span className="price-struck">{quickViewProduct.formattedOriginalPrice}</span>
                      )}
                      <span className="emi-pulse-badge">0% EMI from {quickViewProduct.emiStartsAt}</span>
                    </div>

                    <div className="quick-view-specs-list">
                      {quickViewProduct.specs.display && <div><strong>Display:</strong> {quickViewProduct.specs.display}</div>}
                      {quickViewProduct.specs.processor && <div><strong>Processor:</strong> {quickViewProduct.specs.processor}</div>}
                      {quickViewProduct.specs.camera && <div><strong>Camera:</strong> {quickViewProduct.specs.camera}</div>}
                      {quickViewProduct.specs.battery && <div><strong>Battery:</strong> {quickViewProduct.specs.battery}</div>}
                    </div>

                    <div className="quick-view-actions">
                      <a
                        href={`https://wa.me/${STORE_WHATSAPP}?text=${encodeURIComponent(`Hi SR Communication, I'm interested in buying *${quickViewProduct.name}* (${quickViewProduct.formattedPrice}).`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-whatsapp-action"
                      >
                        💬 Order on WhatsApp
                      </a>
                      <Link
                        href={`/product/${quickViewProduct.slug}`}
                        className="btn btn-outline"
                        onClick={() => setQuickViewProduct(null)}
                      >
                        View Full Details →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ClientPortal>
        )}
      </div>
    </section>
  );
}

// ==========================================
// 8. INTERACTIVE 0% EMI CALCULATOR (HOME)
// ==========================================
const EMI_PRESET_PHONES = [
  { name: "iPhone 18 Pro Max", price: 164900, brand: "Apple", badge: "Flagship" },
  { name: "iPhone 18 Pro", price: 139900, brand: "Apple", badge: "New" },
  { name: "Galaxy S26 Ultra", price: 134999, brand: "Samsung", badge: "Hot" },
  { name: "iPhone 17 Pro Max", price: 149900, brand: "Apple", badge: "Popular" },
  { name: "iPhone 16", price: 69900, brand: "Apple", badge: "Value" },
  { name: "Vivo V40 Pro", price: 49999, brand: "Vivo", badge: "Camera" },
  { name: "OnePlus 13", price: 64999, brand: "OnePlus", badge: "Speed" },
  { name: "Budget Flagship", price: 19999, brand: "Smart Choice", badge: "Affordable" },
];

const EMI_BANK_PARTNERS = [
  {
    id: "bajaj",
    name: "Bajaj Finserv",
    icon: "💳",
    scheme: "8/0 & 10/2 Scheme",
    highlight: "Zero Downpayment Available",
    details: "Instant paperless approval via Bajaj EMI Card or Aadhaar OTP in 10 minutes.",
  },
  {
    id: "idfc",
    name: "IDFC First Bank",
    icon: "🏛️",
    scheme: "Easy Buy 0% EMI",
    highlight: "Aadhaar + PAN Biometric",
    details: "Paperless digital approval in showroom. No salary slip needed for purchases up to ₹1,00,000.",
  },
  {
    id: "hdfc",
    name: "HDFC Bank / Cards",
    icon: "🏦",
    scheme: "Credit/Debit Card No-Cost",
    highlight: "Instant OTP Based",
    details: "Pre-approved No-Cost EMI for HDFC credit and debit cards with reward points intact.",
  },
  {
    id: "tvs",
    name: "TVS Credit / Home",
    icon: "🏢",
    scheme: "First-Time Buyer Scheme",
    highlight: "No CIBIL Score Needed",
    details: "Designed for first-time smartphone buyers and students establishing credit records.",
  },
];

export function EmiCalculator() {
  const [devicePrice, setDevicePrice] = useState(139900);
  const [priceInput, setPriceInput] = useState("139900");
  const [selectedPreset, setSelectedPreset] = useState<string | null>("iPhone 18 Pro");
  const [selectedBankId, setSelectedBankId] = useState("bajaj");
  const [downpaymentPercent, setDownpaymentPercent] = useState(0);
  const [tenureMonths, setTenureMonths] = useState(8);

  const activeBank = EMI_BANK_PARTNERS.find((b) => b.id === selectedBankId) || EMI_BANK_PARTNERS[0];

  const handlePriceSlider = (val: number) => {
    setDevicePrice(val);
    setPriceInput(String(val));
    setSelectedPreset(null);
  };

  const handlePriceInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/[^0-9]/g, '');
    setPriceInput(raw);
    const num = Number(raw);
    if (!isNaN(num) && num > 0) {
      setDevicePrice(Math.min(Math.max(num, 5000), 300000));
      setSelectedPreset(null);
    }
  };

  const handleSelectPreset = (preset: typeof EMI_PRESET_PHONES[0]) => {
    setDevicePrice(preset.price);
    setPriceInput(String(preset.price));
    setSelectedPreset(preset.name);
  };

  const downpaymentAmount = Math.round((devicePrice * downpaymentPercent) / 100);
  const loanAmount = Math.max(0, devicePrice - downpaymentAmount);
  const monthlyEmi = tenureMonths > 0 ? Math.round(loanAmount / tenureMonths) : 0;
  // Realistic market interest saved compared to standard 14% p.a. credit card finance
  const marketInterestSaved = Math.round((loanAmount * 0.14 * (tenureMonths / 12)));
  const totalPayable = downpaymentAmount + (monthlyEmi * tenureMonths);

  const waMessage = `Hi SR Communication! I used your 0% EMI Calculator on the website and want to check my eligibility:

📱 Device Value: ₹${devicePrice.toLocaleString('en-IN')}${selectedPreset ? ` (${selectedPreset})` : ''}
🏦 Financing Partner: ${activeBank.name} (${activeBank.scheme})
💰 Downpayment: ₹${downpaymentAmount.toLocaleString('en-IN')} (${downpaymentPercent}%)
📅 Loan Tenure: ${tenureMonths} Months
⚡ Estimated Monthly EMI: ₹${monthlyEmi.toLocaleString('en-IN')}/month
🎉 Normal Market Interest Saved: ₹${marketInterestSaved.toLocaleString('en-IN')} (0% No-Cost EMI)

Can I get spot approval and pick this up today at your Shalimar Garden showroom?`;

  return (
    <section className="emi-calculator-section" id="emi-calculator">
      <div className="container">
        {/* Section Header */}
        <div className="emi-section-header">
          <span className="section-eyebrow">⚡ 15-MINUTE SHOWROOM PAPERLESS APPROVAL</span>
          <h2 className="calc-title">0% Interest Downpayment &amp; EMI Calculator</h2>
          <p className="calc-desc">
            Upgrade to your dream flagship with zero financial burden. We partner with Bajaj Finserv, IDFC First Bank, HDFC, and TVS Credit for on-spot, zero-downpayment approvals at our Shalimar Garden showroom.
          </p>
        </div>

        {/* Quick Presets Bar */}
        <div className="emi-presets-bar">
          <span className="emi-presets-label">Quick Flagship Presets:</span>
          <div className="emi-presets-scroll">
            {EMI_PRESET_PHONES.map((p) => {
              const isSelected = selectedPreset === p.name || devicePrice === p.price;
              return (
                <button
                  key={p.name}
                  onClick={() => handleSelectPreset(p)}
                  className={`emi-preset-pill ${isSelected ? 'active' : ''}`}
                  type="button"
                >
                  <span className="preset-name">{p.name}</span>
                  <span className="preset-price">₹{p.price.toLocaleString('en-IN')}</span>
                  {p.badge && <span className="preset-badge">{p.badge}</span>}
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Calculator Grid */}
        <div className="emi-calc-wrapper emi-calc-wrapper-v2">
          {/* Left Column: Interactive Controls */}
          <div className="emi-calc-left">
            {/* 1. Device Value Dual Input (Slider + Direct Input) */}
            <div className="calc-control-group">
              <div className="calc-slider-header">
                <label htmlFor="device-price-input">Device Price (MRP / Offer Price):</label>
                <div className="calc-price-input-wrap">
                  <span className="currency-prefix">₹</span>
                  <input
                    id="device-price-input"
                    type="text"
                    value={priceInput}
                    onChange={handlePriceInput}
                    className="calc-direct-number-input"
                    aria-label="Direct device price input"
                  />
                </div>
              </div>
              <input
                type="range"
                min="10000"
                max="200000"
                step="1000"
                value={devicePrice}
                onChange={(e) => handlePriceSlider(Number(e.target.value))}
                className="calc-range-slider"
                aria-label="Device price slider"
              />
              <div className="slider-minmax-labels">
                <span>₹10,000</span>
                <span>₹1,00,000</span>
                <span>₹2,00,000+</span>
              </div>
            </div>

            {/* 2. Bank Scheme Tabs */}
            <div className="calc-control-group">
              <label>Select Financing Partner:</label>
              <div className="calc-bank-tabs-grid">
                {EMI_BANK_PARTNERS.map((bank) => {
                  const isSelected = selectedBankId === bank.id;
                  return (
                    <button
                      key={bank.id}
                      type="button"
                      onClick={() => setSelectedBankId(bank.id)}
                      className={`calc-bank-tab-card ${isSelected ? 'active' : ''}`}
                    >
                      <div className="bank-tab-top">
                        <span className="bank-tab-icon">{bank.icon}</span>
                        <strong className="bank-tab-name">{bank.name}</strong>
                      </div>
                      <span className="bank-tab-scheme">{bank.scheme}</span>
                      <span className="bank-tab-highlight">{bank.highlight}</span>
                    </button>
                  );
                })}
              </div>
              <div className="active-bank-info-note">
                ℹ️ <strong>{activeBank.name}:</strong> {activeBank.details}
              </div>
            </div>

            {/* 3. Downpayment Selection */}
            <div className="calc-control-group">
              <div className="calc-group-title-row">
                <label>Select Downpayment (Paid on spot):</label>
                <span className="dp-calculated-tag">
                  {downpaymentPercent === 0 ? "₹0 Upfront (Zero Down)" : `₹${downpaymentAmount.toLocaleString('en-IN')}`}
                </span>
              </div>
              <div className="calc-btn-group">
                {[
                  { pct: 0, label: "0% Downpayment (Walk In, Walk Out)" },
                  { pct: 15, label: "15% Down" },
                  { pct: 25, label: "25% Down" },
                  { pct: 33, label: "33% Down" },
                  { pct: 50, label: "50% Down" },
                ].map((item) => (
                  <button
                    key={item.pct}
                    type="button"
                    onClick={() => setDownpaymentPercent(item.pct)}
                    className={`calc-btn ${downpaymentPercent === item.pct ? 'active' : ''}`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Tenure Duration */}
            <div className="calc-control-group">
              <label>Select Loan Tenure:</label>
              <div className="calc-btn-group">
                {[3, 6, 8, 9, 10, 12, 18, 24].map((m) => {
                  const approxPerMonth = tenureMonths > 0 ? Math.round(loanAmount / m) : 0;
                  return (
                    <button
                      key={m}
                      type="button"
                      onClick={() => setTenureMonths(m)}
                      className={`calc-btn calc-tenure-btn ${tenureMonths === m ? 'active' : ''}`}
                    >
                      <span className="tenure-months">{m} Months</span>
                      <span className="tenure-preview-emi">~₹{approxPerMonth.toLocaleString('en-IN')}/mo</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Required Documents Checklist */}
            <div className="emi-doc-checklist-box">
              <h4 className="checklist-heading">📄 Instant Approval Document Checklist (Showroom):</h4>
              <div className="checklist-items">
                <span className="doc-pill">✓ Aadhaar Card (OTP linked)</span>
                <span className="doc-pill">✓ PAN Card</span>
                <span className="doc-pill">✓ NetBanking / Debit Card (for NACH)</span>
                <span className="doc-pill">✓ 18+ Years Age</span>
              </div>
            </div>
          </div>

          {/* Right Column: Financial Summary Card */}
          <div className="emi-calc-right">
            <div className="emi-summary-card emi-summary-card-v2">
              <div className="emi-summary-top">
                <div className="emi-bank-badge">
                  <span className="bank-logo-icon">{activeBank.icon}</span>
                  <div>
                    <span className="partner-verified-label">VERIFIED FINANCE PARTNER</span>
                    <strong className="partner-active-title">{activeBank.name}</strong>
                  </div>
                </div>
                <span className="instant-badge">15-Min Spot Approval</span>
              </div>

              {/* Big Monthly EMI Hero Callout */}
              <div className="monthly-emi-highlight monthly-emi-highlight-v2">
                <span className="emi-result-label">YOUR ESTIMATED MONTHLY INSTALLMENT</span>
                <div className="emi-big-number">
                  ₹{monthlyEmi.toLocaleString('en-IN')}
                  <span className="per-m">/month</span>
                </div>
                <div className="zero-interest-pills-row">
                  <span className="zero-interest-pill">0% Extra Interest Rate</span>
                  <span className="zero-pf-pill">₹0 Hidden Charges</span>
                </div>
              </div>

              {/* Comprehensive Financial Transparency Breakdown */}
              <div className="emi-breakdown-details emi-breakdown-details-v2">
                <div className="calc-data-row">
                  <span className="data-row-label">Device Total Value:</span>
                  <strong className="data-row-val">₹{devicePrice.toLocaleString('en-IN')}</strong>
                </div>

                <div className="calc-data-row">
                  <span className="data-row-label">Spot Downpayment ({downpaymentPercent}%):</span>
                  <strong className="data-row-val text-accent">
                    {downpaymentAmount === 0 ? "₹0 (Zero Down)" : `₹${downpaymentAmount.toLocaleString('en-IN')}`}
                  </strong>
                </div>

                <div className="calc-data-row">
                  <span className="data-row-label">Financed Loan Principal:</span>
                  <strong className="data-row-val">₹{loanAmount.toLocaleString('en-IN')}</strong>
                </div>

                <div className="calc-data-row">
                  <span className="data-row-label">Tenure Duration:</span>
                  <strong className="data-row-val">{tenureMonths} Monthly Installments</strong>
                </div>

                <div className="calc-data-row">
                  <span className="data-row-label">Bank Interest Rate:</span>
                  <strong className="data-row-val text-green">0% (Subvented by Brand)</strong>
                </div>

                <div className="calc-data-row highlight-savings-row">
                  <span className="data-row-label">Standard Credit Interest Saved:</span>
                  <strong className="data-row-val text-highlight-savings">
                    ₹{marketInterestSaved.toLocaleString('en-IN')} SAVED
                  </strong>
                </div>

                <div className="calc-data-row net-total-row">
                  <span className="data-row-label">Total Amount Payable:</span>
                  <strong className="data-row-val">₹{totalPayable.toLocaleString('en-IN')}</strong>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="emi-action-buttons">
                <a
                  href={`https://wa.me/${STORE_WHATSAPP}?text=${encodeURIComponent(waMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp-full btn-emi-whatsapp"
                >
                  <span className="wa-icon-glow">💬</span> Apply for 0% EMI on WhatsApp →
                </a>

                <div className="emi-secondary-links">
                  <a href={`tel:${STORE_PHONE}`} className="btn-call-desk">
                    📞 Call Finance Desk (+91 97174 59671)
                  </a>
                  <Link href="/store" className="btn-visit-showroom-link">
                    📍 Visit Showroom Directions →
                  </Link>
                </div>
              </div>

              <p className="emi-disclaimer">
                *0% EMI schemes are powered by Bajaj Finserv, IDFC First Bank, and HDFC Bank. Approvals and eligibility depend on customer bank verification. Walk into SR Communication at Shalimar Garden Ext-2 for 15-minute biometric spot disbursal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==========================================
// 9. HERO FLAGSHIP SHOWCASE SWITCHER
// ==========================================
export function HeroShowcaseSwitcher() {
  const showcasePhones = [
    {
      name: "iPhone 18 Pro Max",
      brand: "Apple",
      shortLabel: "iPhone 18",
      price: "₹1,64,900",
      emi: "₹13,742/mo",
      tagline: "Apple A20 Pro (2nm) • Under-Display Face ID • 10x Periscope",
      image: "/products/apple-iphone-18-pro-max-v2.png",
      slug: "apple-iphone-18-pro-max",
      color: "Space Titanium"
    },
    {
      name: "Galaxy S27 Ultra 5G",
      brand: "Samsung",
      shortLabel: "Galaxy S27",
      price: "₹1,54,999",
      emi: "₹12,917/mo",
      tagline: "Snapdragon 8 Gen 6 • 300MP Space Zoom • Hologram AI",
      image: "/products/samsung-galaxy-s27-ultra.jpg",
      slug: "samsung-galaxy-s27-ultra",
      color: "Titanium Obsidian"
    },
    {
      name: "iPhone 17 Pro Max",
      brand: "Apple",
      shortLabel: "iPhone 17",
      price: "₹1,49,900",
      emi: "₹12,492/mo",
      tagline: "Apple A19 Pro • All 48MP Triple Fusion • 12GB RAM",
      image: "/products/apple-iphone-17-pro-max.png",
      slug: "apple-iphone-17-pro-max",
      color: "Cosmic Orange"
    },
    {
      name: "Galaxy S26 Ultra 5G",
      brand: "Samsung",
      shortLabel: "Galaxy S26",
      price: "₹1,39,999",
      emi: "₹11,667/mo",
      tagline: "Snapdragon 8 Gen 5 • 200MP Gen 3 ISOCELL • S-Pen",
      image: "/products/samsung-galaxy-s26-ultra-v2.png",
      slug: "samsung-galaxy-s26-ultra",
      color: "Titanium Black"
    }
  ];

  const [activeIdx, setActiveIdx] = useState(0);
  const current = showcasePhones[activeIdx];

  return (
    <div className="hero-interactive-showcase">
      <div className="showcase-switcher-tabs">
        {showcasePhones.map((phone, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIdx(idx)}
            className={`showcase-tab ${activeIdx === idx ? 'active' : ''}`}
          >
            {phone.shortLabel}
          </button>
        ))}
      </div>

      <div className="hero-visual-container">
        <div className="hero-glow-layer"></div>
        
        <div className="hero-floating-badge">
          <span className="badge-sparkle">⚡</span>
          <div>
            <strong>0% DOWNPAYMENT</strong>
            <span>EMI from {current.emi}</span>
          </div>
        </div>

        <div className="hero-phone-render">
          <Image
            src={current.image}
            alt={current.name}
            fill
            priority
            style={{ objectFit: 'contain' }}
            sizes="(max-width: 768px) 100vw, 480px"
          />
        </div>

        <div className="hero-phone-caption">
          <h4>{current.name}</h4>
          <p>{current.tagline}</p>
          <div className="hero-caption-actions">
            <span className="hero-caption-price">{current.price}</span>
            <Link href={`/product/${current.slug}`} className="btn-hero-explore">
              Explore Device →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// Newsletter placeholder for layout footer
export function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
  };

  return (
    <div className="newsletter-box">
      {subscribed ? (
        <div style={{ color: '#10b981', fontWeight: 600 }}>
          ✓ Thank you! We will notify you of new smartphone launches & EMI schemes.
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '8px' }}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your mobile or email"
            required
            style={{
              padding: '12px 16px',
              borderRadius: '50px',
              border: '1px solid rgba(255,255,255,0.2)',
              background: 'rgba(255,255,255,0.08)',
              color: 'white',
              outline: 'none',
              flex: 1
            }}
          />
          <button type="submit" className="btn btn-primary" style={{ padding: '12px 20px', borderRadius: '50px' }}>
            Get Deals
          </button>
        </form>
      )}
    </div>
  );
}

// ==========================================
// 10. SHOWROOM VIP CONTACT INQUIRY FORM
// ==========================================
export function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [device, setDevice] = useState('iPhone 18 Pro Max');
  const [service, setService] = useState('0% Downpayment EMI');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    const message = `🛍️ *VIP Showroom Inquiry - SR Communication Website:*\n\n` +
      `• *Customer Name:* ${name}\n` +
      `• *Mobile:* ${phone}\n` +
      `• *Interested In:* ${device}\n` +
      `• *Required Service:* ${service}\n` +
      (notes ? `• *Customer Note:* ${notes}\n` : '') +
      `\nPlease confirm current stock availability, best pricing, and available 0% EMI schemes at your Shalimar Garden showroom.`;

    const url = `https://wa.me/${STORE_WHATSAPP}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="contact-form-card">
      <div className="contact-form-header">
        <span className="contact-form-tag">DIRECT SHOWROOM RESERVATION</span>
        <h3 className="contact-form-title">Reserve a Device or Request a Callback</h3>
        <p className="contact-form-sub">
          Fill in your details below. Our showroom desk in Shalimar Garden will verify stock and prepare your 0% EMI quote immediately.
        </p>
      </div>

      {submitted ? (
        <div className="contact-success-banner">
          <div className="success-icon">✓</div>
          <h4>Inquiry Forwarded Successfully!</h4>
          <p>
            Your request was sent directly to our WhatsApp showroom desk. Our team will assist you within minutes during business hours (10:00 AM – 9:00 PM).
          </p>
          <button
            type="button"
            className="btn btn-outline"
            onClick={() => {
              setSubmitted(false);
              setName('');
              setPhone('');
              setNotes('');
            }}
          >
            Send Another Inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="contact-actual-form">
          <div className="form-row-two-col">
            <div className="form-field-group">
              <label htmlFor="contact-name">Your Full Name *</label>
              <input
                id="contact-name"
                type="text"
                required
                placeholder="e.g. Rahul Sharma"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="contact-input"
              />
            </div>
            <div className="form-field-group">
              <label htmlFor="contact-phone">WhatsApp / Mobile Number *</label>
              <input
                id="contact-phone"
                type="tel"
                required
                placeholder="e.g. 98110XXXXX"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="contact-input"
              />
            </div>
          </div>

          <div className="form-row-two-col">
            <div className="form-field-group">
              <label htmlFor="contact-device">Device Interested In:</label>
              <select
                id="contact-device"
                value={device}
                onChange={(e) => setDevice(e.target.value)}
                className="contact-select"
              >
                <option value="iPhone 18 Pro Max">Apple iPhone 18 Pro Max</option>
                <option value="iPhone 18 Pro">Apple iPhone 18 Pro</option>
                <option value="iPhone 17 Pro Max">Apple iPhone 17 Pro Max</option>
                <option value="iPhone 17 Air">Apple iPhone 17 Air</option>
                <option value="iPhone 16 Series">Apple iPhone 16 / 16 Plus / 16 Pro</option>
                <option value="Samsung Galaxy S26 Ultra">Samsung Galaxy S26 Ultra</option>
                <option value="Samsung Galaxy S25 Series">Samsung Galaxy S25 / S25+ / S25 Ultra</option>
                <option value="Vivo V40 / X200 Series">Vivo V40 Pro / X200 Series</option>
                <option value="OnePlus 13 / 12 Series">OnePlus 13 / 12 / 12R</option>
                <option value="Nothing Phone Series">Nothing Phone (2) / Phone (2a)</option>
                <option value="Smartwatch / Audio / Accessories">Smartwatches &amp; Earbuds</option>
                <option value="Other / General Query">Other Device / General Inquiries</option>
              </select>
            </div>

            <div className="form-field-group">
              <label htmlFor="contact-service">Required Service:</label>
              <select
                id="contact-service"
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="contact-select"
              >
                <option value="0% Downpayment EMI">0% Downpayment &amp; EMI Scheme</option>
                <option value="New Sealed Phone Purchase">New Sealed Phone Purchase</option>
                <option value="Old Smartphone Exchange / Valuation">Old Phone Exchange &amp; Valuation</option>
                <option value="Accessories, Case &amp; Tempered Glass">Accessories &amp; Free Screen Guard</option>
                <option value="Showroom Demo &amp; Consultation">Showroom Demo &amp; In-Store Consultation</option>
              </select>
            </div>
          </div>

          <div className="form-field-group">
            <label htmlFor="contact-notes">Specific Storage / Color / Questions (Optional):</label>
            <textarea
              id="contact-notes"
              rows={3}
              placeholder="e.g. Looking for 256GB Desert Titanium color. Is it ready for pickup today?"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="contact-textarea"
            />
          </div>

          <div className="form-action-row">
            <button type="submit" className="btn btn-whatsapp-full btn-contact-submit">
              💬 Submit &amp; Chat on WhatsApp Desk →
            </button>
            <span className="contact-form-guarantee">
              🔒 100% Privacy. Zero spam. Directly connected with showroom managers.
            </span>
          </div>
        </form>
      )}
    </div>
  );
}

// ==========================================
// 11. CONTACT FREQUENTLY ASKED QUESTIONS
// ==========================================
export function ContactFaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Can I get 0% EMI approval on the spot at your Shalimar Garden showroom?",
      a: "Yes! We have dedicated on-spot executive desks for Bajaj Finserv, IDFC First Bank, and HDFC Bank right inside our showroom. If you bring your Aadhaar Card and PAN card, paperless biometric approval typically takes only 10 to 15 minutes, allowing you to walk out with your brand-new phone immediately."
    },
    {
      q: "How does the old phone trade-in / exchange process work?",
      a: "Bring your old smartphone to our store. Our technicians perform an instant 5-minute diagnostic evaluation checking the screen, body condition, and battery health to offer you the highest market valuation in Ghaziabad. That valuation is deducted directly from your new phone's price."
    },
    {
      q: "Are all phones 100% brand sealed with official Indian manufacturer warranty?",
      a: "Absolutely 100%. Every single smartphone, tablet, and accessory sold at SR Communication is factory sealed, brand-authorized Indian stock, accompanied by a legitimate GST tax invoice. You are eligible for nationwide warranty support at any official Apple, Samsung, Vivo, or OnePlus service center."
    },
    {
      q: "Can I reserve a smartphone online and pick it up at the store today?",
      a: "Yes. Simply submit the VIP reservation form above or send a WhatsApp message to +91 97174 59671. We will hold the device in your preferred color and storage variant for same-day in-store pickup."
    },
    {
      q: "Do you offer free data transfer and glass setup when purchasing a new phone?",
      a: "Yes! Every customer purchasing a smartphone at SR Communication receives complimentary white-glove setup: full WhatsApp and contact migration from Android to iPhone (or vice versa), software updates, and precision tempered glass application free of charge."
    }
  ];

  return (
    <div className="contact-faq-section">
      <div className="contact-faq-header">
        <span className="section-eyebrow">HELPFUL INFORMATION</span>
        <h3 className="section-title">Frequently Asked Questions</h3>
        <p className="faq-subtitle">Everything you need to know before visiting our Shalimar Garden showroom.</p>
      </div>
      <div className="faq-list">
        {faqs.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div key={idx} className={`faq-card ${isOpen ? 'open' : ''}`}>
              <button
                type="button"
                className="faq-question-btn"
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                aria-expanded={isOpen}
              >
                <span className="faq-q-text">{item.q}</span>
                <span className="faq-chevron">{isOpen ? '▲' : '▼'}</span>
              </button>
              {isOpen && (
                <div className="faq-answer-content">
                  <p>{item.a}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
