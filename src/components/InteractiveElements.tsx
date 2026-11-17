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
          className="nav-icon-btn"
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
      </div>

      {/* Slide-out Cart Drawer */}
      <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />

      {/* Global Instant Search Modal */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
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
export function EmiCalculator() {
  const [devicePrice, setDevicePrice] = useState(79900);
  const [downpaymentPercent, setDownpaymentPercent] = useState(0);
  const [tenureMonths, setTenureMonths] = useState(6);

  const downpaymentAmount = Math.round((devicePrice * downpaymentPercent) / 100);
  const loanAmount = devicePrice - downpaymentAmount;
  const monthlyEmi = Math.round(loanAmount / tenureMonths);

  return (
    <section className="emi-calculator-section" id="emi-calculator">
      <div className="container">
        <div className="emi-calc-wrapper">
          <div className="emi-calc-left">
            <span className="section-eyebrow">INSTANT FINANCE ESTIMATOR</span>
            <h2 className="calc-title">0% Interest Downpayment Calculator</h2>
            <p className="calc-desc">
              Upgrade your smartphone with zero financial burden. We partner with Bajaj Finserv, IDFC First Bank, HDFC, and ICICI for instant spot approvals in our Shalimar Garden showroom.
            </p>

            <div className="calc-control-group">
              <div className="calc-slider-header">
                <label>Select Device Price:</label>
                <span className="slider-current-val">₹{devicePrice.toLocaleString('en-IN')}</span>
              </div>
              <input
                type="range"
                min="10000"
                max="180000"
                step="5000"
                value={devicePrice}
                onChange={(e) => setDevicePrice(Number(e.target.value))}
                className="calc-range-slider"
              />
              <div className="slider-minmax-labels">
                <span>₹10,000</span>
                <span>₹1,80,000</span>
              </div>
            </div>

            <div className="calc-control-group">
              <label>Select Downpayment:</label>
              <div className="calc-btn-group">
                {[0, 15, 25, 40].map((dp) => (
                  <button
                    key={dp}
                    onClick={() => setDownpaymentPercent(dp)}
                    className={`calc-btn ${downpaymentPercent === dp ? 'active' : ''}`}
                  >
                    {dp === 0 ? '0% Downpayment' : `${dp}% Down`}
                  </button>
                ))}
              </div>
            </div>

            <div className="calc-control-group">
              <label>Select Tenure:</label>
              <div className="calc-btn-group">
                {[3, 6, 9, 12, 18].map((m) => (
                  <button
                    key={m}
                    onClick={() => setTenureMonths(m)}
                    className={`calc-btn ${tenureMonths === m ? 'active' : ''}`}
                  >
                    {m} Months
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="emi-calc-right">
            <div className="emi-summary-card">
              <div className="emi-bank-logos">
                <span className="bank-tag">Bajaj Finserv</span>
                <span className="bank-tag">IDFC First</span>
                <span className="bank-tag">HDFC Bank</span>
              </div>

              <div className="monthly-emi-highlight">
                <span className="emi-result-label">Your Estimated Monthly EMI</span>
                <div className="emi-big-number">₹{monthlyEmi.toLocaleString('en-IN')}<span className="per-m">/mo</span></div>
                <span className="zero-interest-pill">0% Extra Interest Rate</span>
              </div>

              <div className="emi-breakdown-details">
                <div className="calc-data-row">
                  <span>Device Value:</span>
                  <strong>₹{devicePrice.toLocaleString('en-IN')}</strong>
                </div>
                <div className="calc-data-row">
                  <span>Downpayment on Spot:</span>
                  <strong>₹{downpaymentAmount.toLocaleString('en-IN')}</strong>
                </div>
                <div className="calc-data-row">
                  <span>Tenure Duration:</span>
                  <strong>{tenureMonths} Months</strong>
                </div>
                <div className="calc-data-row">
                  <span>Paperwork Needed:</span>
                  <strong>Aadhaar & PAN Card</strong>
                </div>
              </div>

              <a
                href={`https://wa.me/${STORE_WHATSAPP}?text=${encodeURIComponent(`Hi SR Communication, I calculated an EMI of ₹${monthlyEmi}/mo for a ₹${devicePrice.toLocaleString('en-IN')} device on your website. Please check my eligibility for 0% EMI.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp-full"
              >
                Apply for 0% EMI on WhatsApp →
              </a>

              <p className="emi-disclaimer">
                *Approvals subject to bank criteria. Visit SR Communication in Shalimar Garden for instant on-spot paperless processing in 15 minutes.
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
