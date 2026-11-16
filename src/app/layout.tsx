import type { Metadata } from "next";
import "./globals.css";
import { NavIcons, NewsletterForm } from "@/components/InteractiveElements";
import Link from "next/link";

export const metadata: Metadata = {
  metadataBase: new URL('https://srcommunication.com'),
  title: "SR Communication | Best Smartphone Store in Shalimar Garden, Ghaziabad",
  description: "SR Communication is the premier mobile store in Shalimar Garden, Sahibabad. Best prices on Apple, Samsung, Vivo, OnePlus, Nothing & Xiaomi with 0% Downpayment EMI, genuine warranty, and instant pickup.",
  keywords: [
    "SR Communication",
    "SR Communication Shalimar Garden",
    "Mobile store Shalimar Garden",
    "Buy smartphones Ghaziabad",
    "Best phone shop Sahibabad",
    "0% EMI phones",
    "iPhone 16 Pro Max Shalimar Garden",
    "Samsung S24 Ultra Sahibabad"
  ],
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
        {/* Top Announcement Bar */}
        <div className="top-banner">
          <span>⚡ SHALIMAR GARDEN SPECIAL: 0% Downpayment EMI Available on All Top Smartphones!</span>
          <Link href="/store" className="top-banner-btn">
            Visit Showroom Today →
          </Link>
        </div>

        {/* Main Sticky Navbar */}
        <nav className="navbar">
          <div className="container navbar-container">
            {/* Shop Brand with Official Logo */}
            <Link href="/" className="navbar-brand-link">
              <img
                src="/favicon.png"
                alt="SR Communication Logo"
                className="navbar-logo-image"
              />
              <span className="navbar-brand-text">
                <span className="brand-primary-text">SR</span> <span className="brand-gradient">Communication</span>
              </span>
            </Link>

            {/* Nav Navigation Links */}
            <div className="nav-links">
              <Link href="/#catalog" className="nav-link-item">Catalog</Link>
              <Link href="/#categories" className="nav-link-item">Categories</Link>
              <Link href="/#emi-calculator" className="nav-link-item">0% EMI Calculator</Link>
              <Link href="/#deals" className="nav-link-item">Exchange Deals</Link>
              <Link href="/store" className="nav-link-item">Showroom</Link>
              <Link href="/contact" className="nav-contact-pill">Contact</Link>
            </div>

            {/* Right Action Icons Cluster */}
            <NavIcons />
          </div>
        </nav>

        {/* Page Content */}
        <main className="main-content-wrap">{children}</main>

        {/* Global Luxury Dark Footer */}
        <footer className="footer" id="contact">
          {/* Pre-footer Trust Strip */}
          <div className="footer-pre-strip">
            <div className="container">
              <div className="footer-trust-grid">
                <div className="footer-trust-item">
                  <span className="footer-trust-icon">🛡️</span>
                  <div>
                    <h5>100% Original Products</h5>
                    <p>Brand Sealed with Official Manufacturer Warranty</p>
                  </div>
                </div>
                <div className="footer-trust-item">
                  <span className="footer-trust-icon">💳</span>
                  <div>
                    <h5>0% Downpayment EMI</h5>
                    <p>On-spot paperless approval via Bajaj &amp; IDFC</p>
                  </div>
                </div>
                <div className="footer-trust-item">
                  <span className="footer-trust-icon">⚡</span>
                  <div>
                    <h5>30-Min Store Pickup</h5>
                    <p>Ready for pickup today in Shalimar Garden</p>
                  </div>
                </div>
                <div className="footer-trust-item">
                  <span className="footer-trust-icon">🎁</span>
                  <div>
                    <h5>Free Screen Guard &amp; Case</h5>
                    <p>Complimentary setup &amp; data transfer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Footer Columns */}
          <div className="container">
            <div className="footer-grid">
              {/* Col 1: Store Brand & Info */}
              <div className="footer-brand-col">
                <Link href="/" className="footer-brand-link">
                  <img
                    src="/favicon.png"
                    alt="SR Communication Logo"
                    className="footer-logo-image"
                  />
                  <span className="footer-brand-text">
                    SR <span className="brand-gradient-light">Communication</span>
                  </span>
                </Link>

                <p className="footer-brand-desc">
                  Shalimar Garden&apos;s most trusted mobile &amp; electronics showroom for over 15 years. Authorized retail partner for Apple, Samsung, Vivo, OnePlus, and Nothing.
                </p>

                <div className="footer-store-meta">
                  <div className="store-meta-line">
                    <span className="meta-dot">📍</span>
                    <span>Ug-1, S/14 Shalimar Garden Ext-2, Sahibabad, Ghaziabad, UP 201005</span>
                  </div>
                  <div className="store-meta-line">
                    <span className="meta-dot">📞</span>
                    <span>
                      <a href="tel:+919717459671"><strong>+91 97174 59671</strong></a> / <a href="tel:+919958143420">+91 99581 43420</a>
                    </span>
                  </div>
                  <div className="store-meta-line">
                    <span className="meta-dot">✉️</span>
                    <span>srcommunication98@gmail.com</span>
                  </div>
                </div>

                <div className="footer-hours-badge">
                  <span className="live-status-dot"></span>
                  <span>Showroom Open: <strong>10:00 AM – 9:30 PM (7 Days)</strong></span>
                </div>
              </div>

              {/* Col 2: Categories */}
              <div className="footer-links-col">
                <h4 className="footer-col-title">CATEGORIES</h4>
                <ul className="footer-nav-list">
                  <li><Link href="/#catalog">Smartphones</Link></li>
                  <li><Link href="/#catalog">Audio &amp; Earbuds</Link></li>
                  <li><Link href="/#catalog">Smartwatches</Link></li>
                  <li><Link href="/#catalog">Tablets &amp; iPads</Link></li>
                  <li><Link href="/#catalog">Fast Chargers &amp; Adapters</Link></li>
                  <li><Link href="/#catalog">Power Banks &amp; MagSafe</Link></li>
                </ul>
              </div>

              {/* Col 3: Brands */}
              <div className="footer-links-col">
                <h4 className="footer-col-title">TOP BRANDS</h4>
                <ul className="footer-nav-list">
                  <li><Link href="/#catalog">Apple iPhone</Link></li>
                  <li><Link href="/#catalog">Samsung Galaxy</Link></li>
                  <li><Link href="/#catalog">Vivo Series</Link></li>
                  <li><Link href="/#catalog">OnePlus</Link></li>
                  <li><Link href="/#catalog">Nothing Phone</Link></li>
                  <li><Link href="/#catalog">Xiaomi &amp; Redmi</Link></li>
                  <li><Link href="/#catalog">Realme GT</Link></li>
                  <li><Link href="/#catalog">Oppo Reno</Link></li>
                </ul>
              </div>

              {/* Col 4: Services & EMI */}
              <div className="footer-links-col">
                <h4 className="footer-col-title">STORE &amp; EMI</h4>
                <ul className="footer-nav-list">
                  <li><Link href="/#emi-calculator">0% Finance Calculator</Link></li>
                  <li><Link href="/#deals">Old Phone Exchange Bonus</Link></li>
                  <li><Link href="/store">Showroom Map &amp; Directions</Link></li>
                  <li><Link href="/about">About Our Founders</Link></li>
                  <li><Link href="/contact">Customer Support Desk</Link></li>
                  <li>
                    <a
                      href="https://wa.me/919717459671?text=Hi%20SR%20Communication,%20I%20have%20an%20inquiry%20regarding%20smartphone%20pricing."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer-wa-link"
                    >
                      💬 Chat on WhatsApp
                    </a>
                  </li>
                </ul>
              </div>

              {/* Col 5: Newsletter & Updates */}
              <div className="footer-links-col footer-newsletter-col">
                <h4 className="footer-col-title">GET LAUNCH DEALS</h4>
                <p className="footer-news-desc">
                  Be the first to get price drops, launch pre-orders, and holiday 0% downpayment finance schemes in Shalimar Garden.
                </p>
                <NewsletterForm />

                {/* Direct Showroom Actions */}
                <div className="footer-action-pills">
                  <a
                    href="https://www.google.com/maps/dir//SR+COMMUNICATION,+Shop+No,+S.M.+Mall,+Block+B,+Shalimar+Garden,+Sahibabad,+Ghaziabad,+Uttar+Pradesh+201005"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-action-pill"
                  >
                    📍 Get Directions
                  </a>
                  <a href="tel:+919717459671" className="footer-action-pill">
                    📞 Call Showroom
                  </a>
                </div>
              </div>
            </div>

            {/* Partner Strip */}
            <div className="footer-partner-strip">
              <span className="partner-label">Authorized Finance &amp; Payment Partners:</span>
              <div className="partner-badges-wrap">
                <span className="partner-chip">Bajaj Finserv</span>
                <span className="partner-chip">IDFC First Bank</span>
                <span className="partner-chip">HDFC Bank</span>
                <span className="partner-chip">ICICI Bank</span>
                <span className="partner-chip">UPI (GPay / PhonePe / Paytm)</span>
                <span className="partner-chip">Credit &amp; Debit Cards</span>
              </div>
            </div>

            {/* Bottom Copyright & Legal Links */}
            <div className="footer-bottom">
              <div className="footer-copyright">
                © {new Date().getFullYear()} <strong>SR Communication</strong>. All Rights Reserved. Authorized Mobile Retailer.
              </div>
              <div className="footer-legal-links">
                <Link href="/privacy">Privacy Policy</Link>
                <span className="separator">•</span>
                <Link href="/terms">Terms of Service</Link>
                <span className="separator">•</span>
                <Link href="/store">Showroom Map</Link>
                <span className="separator">•</span>
                <Link href="/contact">Contact</Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
