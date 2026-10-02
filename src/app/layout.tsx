import type { Metadata } from "next";
import "./globals.css";
import { NavIcons, NewsletterForm } from "@/components/InteractiveElements";

export const metadata: Metadata = {
  title: "SR Communication | Best Mobile Store in Shalimar Garden",
  description: "Your trusted mobile partner for Vivo, Nothing, Samsung, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="top-banner">
          BEST SMARTPHONE DEALS IN SHALIMAR GARDEN <a href="/contact" className="top-banner-btn">VISIT US TODAY! →</a>
        </div>
        
        <div className="info-bar">
          <div className="container" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <div className="info-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
              0% Downpayment on EMI
            </div>
            <div className="info-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              100% Original Products
            </div>
            <div className="info-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              15 Month Warranty
            </div>
            <div className="info-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path></svg>
              Free Gifts with Purchase
            </div>
          </div>
        </div>

        <nav className="navbar">
          <div className="container">
            <a href="/" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <img src="/favicon.png" alt="SR Logo" style={{ height: '35px', width: 'auto' }} />
              <span><span style={{background: 'none', WebkitTextFillColor: 'black', color: 'black'}}>SR</span> <span>Communication</span></span>
            </a>
            <div className="nav-links">
              <a href="/#smartphones">Smartphones</a>
              <a href="/#categories">Accessories</a>
              <a href="/#deals">Deals</a>
              <a href="/contact" className="nav-contact-btn">Contact</a>
            </div>
            <NavIcons />
          </div>
        </nav>

        <main>{children}</main>
        
        <div className="container">
          <div className="features-footer">
             <div className="feature-item">
               <span className="feature-icon">🛡️</span>
               <div className="feature-text"><h5>100% Original</h5><p>Genuine Products</p></div>
             </div>
             <div className="feature-item">
               <span className="feature-icon">💳</span>
               <div className="feature-text"><h5>Easy EMI</h5><p>0% Downpayment</p></div>
             </div>
             <div className="feature-item">
               <span className="feature-icon">🎁</span>
               <div className="feature-text"><h5>Free Gifts</h5><p>On select purchases</p></div>
             </div>
             <div className="feature-item">
               <span className="feature-icon">🎧</span>
               <div className="feature-text"><h5>Expert Support</h5><p>We're Here to Help</p></div>
             </div>
          </div>
        </div>

        <footer className="footer" id="contact">
          <div className="container">
            <div className="footer-grid">
              <div>
                <a href="/" className="logo" style={{color: 'white'}}>SR <span>Communication</span></a>
                <p style={{color: '#9ca3af', marginTop: '15px', fontSize: '0.85rem', lineHeight: '1.6'}}>
                  Ug-1, S/14 Shalimar Garden Extension-2,<br/>
                  Sahibabad, Ghaziabad 201005<br/><br/>
                  <strong>GSTIN:</strong> 09AKEPJ4696D1ZZ<br/>
                  <strong>Tel:</strong> 9717459671, 9958143420, 01202630317<br/>
                  <strong>Email:</strong> srcommunication98@gmail.com
                </p>
              </div>
              <div>
                <h4>SHOP</h4>
                <ul>
                  <li><a href="#">All Smartphones</a></li>
                  <li><a href="#">Accessories</a></li>
                  <li><a href="#">Smartwatches</a></li>
                </ul>
              </div>
              <div>
                <h4>BRANDS</h4>
                <ul>
                  <li><a href="#">Apple</a></li>
                  <li><a href="#">Samsung</a></li>
                  <li><a href="#">Vivo</a></li>
                  <li><a href="#">OnePlus</a></li>
                  <li><a href="#">Nothing</a></li>
                  <li><a href="#">Oppo</a></li>
                  <li><a href="#">Realme</a></li>
                  <li><a href="#">Xiaomi</a></li>
                </ul>
              </div>
              <div>
                <h4>COMPANY</h4>
                <ul>
                  <li><a href="/about">About Us</a></li>
                  <li><a href="/store">Our Store</a></li>
                  <li><a href="/contact">Contact Us</a></li>
                  <li><a href="/terms">Terms & Conditions</a></li>
                  <li><a href="/privacy">Privacy Policy</a></li>
                </ul>
              </div>
              <div>
                <h4>NEWSLETTER</h4>
                <p style={{color: '#9ca3af', fontSize: '0.85rem', marginBottom: '15px'}}>Subscribe to get updates on exclusive offers.</p>
                <NewsletterForm />
              </div>
            </div>
            <div className="footer-bottom" style={{position: 'relative', alignItems: 'center'}}>
              <p>© 2026 SR Communication. All Rights Reserved.</p>
              <div style={{position: 'absolute', left: '50%', transform: 'translateX(-50%)', color: '#9ca3af'}}>
                Developed by <a href="https://zewardesk.com" target="_blank" rel="noopener noreferrer" style={{color: '#a855f7', fontWeight: 'bold'}}>Team Zewardesk</a>
              </div>
              <div style={{display: 'flex', gap: '20px'}}>
                <a href="/terms">Terms & Conditions</a>
                <a href="/privacy">Privacy Policy</a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
