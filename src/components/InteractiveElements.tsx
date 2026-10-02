"use client";
import React, { useState } from 'react';

export function NavIcons() {
  const [clicked, setClicked] = useState<string | null>(null);

  const handleClick = (e: React.MouseEvent, name: string) => {
    e.preventDefault();
    setClicked(name);
    setTimeout(() => setClicked(null), 2500);
  };

  return (
    <div className="nav-icons" style={{ position: 'relative' }}>
      {clicked && (
        <div style={{position: 'absolute', top: '100%', right: 0, background: '#a855f7', color: 'white', padding: '6px 12px', borderRadius: '6px', fontSize: '0.8rem', whiteSpace: 'nowrap', marginTop: '10px', zIndex: 100, boxShadow: '0 4px 15px rgba(168,85,247,0.4)', fontWeight: 'bold'}}>
          {clicked} coming soon!
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
        <span className="cart-badge">2</span>
      </a>
    </div>
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
