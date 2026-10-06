import type { Metadata } from "next";
import "./globals.css";
import { NavIcons, NewsletterForm } from "@/components/InteractiveElements";

export const metadata: Metadata = {
  title: "SR Communication | Best Mobile Store in Shalimar Garden, Ghaziabad",
  description: "SR Communication is the top-rated mobile store in Shalimar Garden, Sahibabad. We offer the best deals on Apple, Samsung, Vivo, OnePlus, and more smartphones with 0% EMI and free gifts.",
  keywords: ["SR Communication", "SR Communication Shalimar Garden", "Mobile store Shalimar Garden", "Buy smartphones Ghaziabad", "Best phone shop Sahibabad", "Mobile repair", "0% EMI phones", "SR Communication phone shop"],
  openGraph: {
    title: "SR Communication | Best Mobile Store in Shalimar Garden",
    description: "Discover the latest smartphones and accessories from top brands at unbeatable prices right here in Shalimar Garden.",
    url: 'https://srcommunication.com',
    siteName: 'SR Communication',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MobilePhoneStore",
    "name": "SR Communication",
    "image": "https://srcommunication.com/favicon.png",
    "@id": "https://srcommunication.com",
    "url": "https://srcommunication.com",
    "telephone": "+919717459671",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Ug-1, S/14 Shalimar Garden Extension-2, Sahibabad",
      "addressLocality": "Ghaziabad",
      "postalCode": "201005",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 28.6791,
      "longitude": 77.3370
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "10:00",
      "closes": "21:30"
    } 
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <div className="top-banner">
          BEST SMARTPHONE DEALS IN SHALIMAR GARDEN <a href="/contact" className="top-banner-btn">VISIT US TODAY! →</a>
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
            <div className="footer-bottom">
              <p>© 2026 SR Communication. All Rights Reserved.</p>
              <div className="footer-credit">
                Developed by <a href="https://zewardesk.com" target="_blank" rel="noopener noreferrer" style={{color: '#a855f7', fontWeight: 'bold'}}>Team Zewardesk</a>
              </div>
              <div className="footer-links">
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
