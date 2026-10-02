"use client";
import React, { useState } from 'react';

import { useEffect } from 'react';

export function NavIcons() {
  const [clicked, setClicked] = useState<string | null>(null);
  const [cartCount, setCartCount] = useState(0);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const [wishlistOpen, setWishlistOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const mockProducts = [
    { name: "iPhone 16 Pro Max", price: "₹1,44,900" },
    { name: "iPhone 16 Pro", price: "₹1,29,900" },
    { name: "iPhone 16", price: "₹79,900" },
    { name: "Samsung Galaxy S24 Ultra", price: "₹1,29,999" },
    { name: "Samsung Galaxy S24", price: "₹79,999" },
    { name: "Vivo X100 Pro", price: "₹89,999" },
    { name: "OnePlus 12", price: "₹69,999" },
    { name: "Nothing Phone (2)", price: "₹36,999" },
    { name: "Oppo Reno 11", price: "₹29,999" },
    { name: "Realme GT 6", price: "₹44,999" },
    { name: "Xiaomi 14 Ultra", price: "₹99,999" },
    { name: "Apple AirPods Pro", price: "₹24,900" },
    { name: "Samsung Galaxy Buds 2", price: "₹11,999" }
  ];

  useEffect(() => {
    const handleCartUpdate = () => {
      const current = parseInt(localStorage.getItem('cartCount') || '0', 10);
      setCartCount(current);
    };
    handleCartUpdate();
    window.addEventListener('cart-update', handleCartUpdate);
    return () => window.removeEventListener('cart-update', handleCartUpdate);
  }, []);

  const handleClick = (e: React.MouseEvent, name: string) => {
    e.preventDefault();
    if (name === 'Shopping Cart') setCartOpen(true);
    if (name === 'Search') setSearchOpen(true);
    if (name === 'User Account') setAccountOpen(true);
    if (name === 'Wishlist') setWishlistOpen(true);
  };

  return (
    <div className="nav-icons" style={{ position: 'relative' }}>
      {/* Search Modal */}
      {searchOpen && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.7)', zIndex: 999, display: 'flex', justifyContent: 'center', paddingTop: '100px' }}>
           <div style={{ width: '600px', maxWidth: '90%', background: 'white', padding: '30px', borderRadius: '16px', height: 'max-content', maxHeight: '80vh', display: 'flex', flexDirection: 'column' }}>
             <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
               <h2 style={{ fontSize: '1.5rem', fontWeight: 800 }}>Search Store</h2>
               <button onClick={() => setSearchOpen(false)} style={{ background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer' }}>✕</button>
             </div>
             <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search for smartphones, accessories..." autoFocus style={{ width: '100%', padding: '15px', borderRadius: '8px', border: '2px solid #e2e8f0', fontSize: '1.1rem', outline: 'none' }} />
             
             <div style={{ overflowY: 'auto', flex: 1, marginTop: '20px' }}>
               {searchQuery.length > 0 ? (
                 <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                   {mockProducts.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase())).map((p, i) => (
                     <a href={`/product/${p.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} key={i} onClick={() => setSearchOpen(false)} style={{ display: 'flex', justifyContent: 'space-between', padding: '15px', background: '#f8fafc', borderRadius: '8px', color: 'inherit', textDecoration: 'none' }}>
                       <span style={{ fontWeight: 'bold' }}>{p.name}</span>
                       <span style={{ color: 'var(--primary)' }}>{p.price}</span>
                     </a>
                   ))}
                   {mockProducts.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase())).length === 0 && (
                     <div style={{ padding: '20px', textAlign: 'center', color: '#94a3b8' }}>No results found for "{searchQuery}"</div>
                   )}
                 </div>
               ) : (
                 <div style={{ color: '#64748b', fontSize: '0.9rem' }}>Popular: iPhone 16 Pro, Samsung S24, Earbuds</div>
               )}
             </div>
           </div>
        </div>
      )}

      {/* Account Modal */}
      {accountOpen && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.5)', zIndex: 999, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
           <div style={{ width: '400px', maxWidth: '90%', background: 'white', padding: '30px', borderRadius: '16px' }}>
             <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
               <h2 style={{ fontSize: '1.5rem', fontWeight: 800 }}>Sign In</h2>
               <button onClick={() => setAccountOpen(false)} style={{ background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer' }}>✕</button>
             </div>
             <input type="email" placeholder="Email Address" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0', marginBottom: '15px', outline: 'none' }} />
             <input type="password" placeholder="Password" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0', marginBottom: '20px', outline: 'none' }} />
             <button className="btn btn-primary" style={{ width: '100%', padding: '12px' }}>Login</button>
             <div style={{ marginTop: '15px', textAlign: 'center', color: '#64748b', fontSize: '0.9rem' }}>Don't have an account? <span style={{color: 'var(--primary)', cursor: 'pointer'}}>Sign up</span></div>
           </div>
        </div>
      )}

      {/* Wishlist Sidebar Overlay */}
      {wishlistOpen && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.5)', zIndex: 999, display: 'flex', justifyContent: 'flex-end' }}>
           <div style={{ width: '400px', maxWidth: '100%', background: 'white', height: '100%', padding: '30px', display: 'flex', flexDirection: 'column', boxShadow: '-10px 0 30px rgba(0,0,0,0.1)' }}>
             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #eee', paddingBottom: '20px', marginBottom: '20px' }}>
               <h2 style={{ fontSize: '1.5rem', fontWeight: 800 }}>My Wishlist</h2>
               <button onClick={() => setWishlistOpen(false)} style={{ background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer' }}>✕</button>
             </div>
             <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8', flexDirection: 'column', gap: '10px' }}>
               <div style={{ fontSize: '3rem' }}>🤍</div>
               <div>Your wishlist is empty</div>
               <button onClick={() => setWishlistOpen(false)} className="btn btn-outline" style={{ marginTop: '10px' }}>Explore Products</button>
             </div>
           </div>
        </div>
      )}

      {/* Cart Sidebar Overlay */}
      {cartOpen && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.5)', zIndex: 999, display: 'flex', justifyContent: 'flex-end' }}>
           <div style={{ width: '400px', maxWidth: '100%', background: 'white', height: '100%', padding: '30px', display: 'flex', flexDirection: 'column', boxShadow: '-10px 0 30px rgba(0,0,0,0.1)' }}>
             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #eee', paddingBottom: '20px', marginBottom: '20px' }}>
               <h2 style={{ fontSize: '1.5rem', fontWeight: 800 }}>Your Cart ({cartCount})</h2>
               <button onClick={() => setCartOpen(false)} style={{ background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer' }}>✕</button>
             </div>
             
             <div style={{ flex: 1, overflowY: 'auto' }}>
               {cartCount === 0 ? (
                 <div style={{ textAlign: 'center', marginTop: '50px', color: '#94a3b8' }}>Your cart is empty</div>
               ) : (
                 <div style={{ display: 'flex', gap: '15px', alignItems: 'center', padding: '15px', background: '#f8fafc', borderRadius: '12px' }}>
                   <div style={{ width: '60px', height: '60px', background: '#e2e8f0', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>📱</div>
                   <div style={{ flex: 1 }}>
                     <div style={{ fontWeight: 700 }}>Smartphone</div>
                     <div style={{ fontSize: '0.8rem', color: '#64748b' }}>Qty: {cartCount}</div>
                   </div>
                   <button onClick={() => {
                     localStorage.setItem('cartCount', '0');
                     setCartCount(0);
                     window.dispatchEvent(new Event('cart-update'));
                   }} style={{ background: '#fee2e2', color: '#ef4444', border: 'none', padding: '5px 10px', borderRadius: '6px', cursor: 'pointer', fontSize: '0.8rem', fontWeight: 'bold' }}>Clear</button>
                 </div>
               )}
             </div>

             {cartCount > 0 && (
               <div style={{ borderTop: '1px solid #eee', paddingTop: '20px', marginTop: '20px' }}>
                 <button className="btn btn-primary" style={{ width: '100%', padding: '15px' }} onClick={() => alert('Checkout flow coming soon!')}>Checkout securely</button>
               </div>
             )}
           </div>
        </div>
      )}

      <a href="#" onClick={(e) => handleClick(e, 'Search')} title="Search">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
      </a>
      <a href="#" onClick={(e) => handleClick(e, 'User Account')} title="Account">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
      </a>
      <a href="#" onClick={(e) => handleClick(e, 'Wishlist')} title="Wishlist">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
      </a>
      <a href="#" onClick={(e) => handleClick(e, 'Shopping Cart')} className="cart-icon" title="Cart">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
        {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
      </a>
    </div>
  );
}

export function AddToCartButton() {
  const [added, setAdded] = useState(false);
  
  const handleAddToCart = () => {
    const current = parseInt(localStorage.getItem('cartCount') || '0', 10);
    localStorage.setItem('cartCount', (current + 1).toString());
    window.dispatchEvent(new Event('cart-update'));
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <button 
      className="btn btn-outline" 
      onClick={handleAddToCart} 
      style={{ flex: 1, padding: '18px', fontSize: '1.1rem', background: added ? '#f0fdf4' : '', borderColor: added ? '#22c55e' : '', color: added ? '#15803d' : '' }}
    >
      {added ? 'Added! ✓' : 'Add to Cart 🛒'}
    </button>
  );
}

export function MiniAddToCartButton() {
  const [added, setAdded] = useState(false);
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const current = parseInt(localStorage.getItem('cartCount') || '0', 10);
    localStorage.setItem('cartCount', (current + 1).toString());
    window.dispatchEvent(new Event('cart-update'));
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <button 
      className="prod-cart-btn" 
      onClick={handleAddToCart} 
      style={{ background: added ? '#22c55e' : '', color: added ? 'white' : '', transform: added ? 'scale(1.1)' : '' }}
    >
      {added ? '✓' : '🛒'}
    </button>
  );
}

export function NewsletterForm() {
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('success');
    setTimeout(() => setStatus('idle'), 4000);
  };

  return (
    <div>
      {status === 'success' ? (
        <div style={{background: 'linear-gradient(135deg, #10b981, #059669)', color: 'white', padding: '12px', borderRadius: '6px', fontSize: '0.9rem', textAlign: 'center', fontWeight: 'bold', boxShadow: '0 4px 15px rgba(16, 185, 129, 0.3)'}}>
          Thanks for subscribing! 🎉
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{display: 'flex', gap: '5px'}}>
          <input required type="email" placeholder="Enter your email" style={{padding: '10px', borderRadius: '4px', border: 'none', flex: 1, outline: 'none', color: '#1e293b'}} />
          <button type="submit" className="btn btn-primary" style={{padding: '10px 15px', borderRadius: '4px'}}>➤</button>
        </form>
      )}
    </div>
  );
}
