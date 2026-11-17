import type { Metadata } from "next";
import "./globals.css";
import { NavIcons, NewsletterForm } from "@/components/InteractiveElements";
import Link from "next/link";

export const metadata: Metadata = {
  metadataBase: new URL('https://srcommunication.in'),
  title: {
    default: "SR Communication | #1 Mobile Store & 0% EMI in Shalimar Garden, Ghaziabad",
    template: "%s | SR Communication"
  },
  description: "SR Communication is Shalimar Garden & Sahibabad's #1 authorized store for Apple iPhone 18/17, Samsung Galaxy S27/S26, Vivo, OnePlus & Nothing. 0% Downpayment paperless EMI via Bajaj Finserv & IDFC, 100% genuine sealed warranty & instant store pickup.",
  keywords: [
    "SR Communication",
    "SR Communication Shalimar Garden",
    "SR Communication Sahibabad",
    "mobile store Shalimar Garden",
    "mobile shop near me Shalimar Garden",
    "buy iPhone 18 Pro Max Shalimar Garden",
    "iPhone 18 Pro Max price Ghaziabad",
    "buy iPhone 17 Pro Max Sahibabad",
    "iPhone 17 Air price in India",
    "Samsung Galaxy S27 Ultra store Ghaziabad",
    "Samsung Galaxy S26 Ultra Shalimar Garden",
    "0% EMI mobile shop Shalimar Garden",
    "0 downpayment mobile store Sahibabad",
    "Bajaj Finserv mobile store Shalimar Garden",
    "IDFC First Bank mobile EMI Ghaziabad",
    "old phone exchange bonus Shalimar Garden",
    "best smartphone showroom Sahibabad",
    "Apple authorized store Shalimar Garden",
    "Samsung smart cafe Sahibabad",
    "OnePlus phone dealer Ghaziabad",
    "Vivo phone store Shalimar Garden Ext 2"
  ],
  authors: [{ name: "SR Communication", url: "https://srcommunication.in" }],
  creator: "SR Communication",
  publisher: "SR Communication",
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  alternates: {
    canonical: 'https://srcommunication.in',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "SR Communication | #1 Mobile Store & 0% EMI in Shalimar Garden, Ghaziabad",
    description: "Authorized retail destination for iPhone 18/17, Galaxy S27/S26, Vivo, OnePlus. 0% Downpayment EMI, genuine brand warranty & same-day pickup.",
    url: 'https://srcommunication.in',
    siteName: 'SR Communication',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/favicon.png',
        width: 512,
        height: 512,
        alt: 'SR Communication Mobile Showroom Shalimar Garden',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "SR Communication | #1 Mobile Store in Shalimar Garden",
    description: "Latest smartphones with 0% Downpayment EMI in Shalimar Garden, Ghaziabad.",
    images: ['/favicon.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const storeJsonLd = {
    "@context": "https://schema.org",
    "@type": "MobilePhoneStore",
    "@id": "https://srcommunication.in/#store",
    "name": "SR Communication",
    "alternateName": [
      "SR Communication Shalimar Garden",
      "SR Mobile Store Sahibabad",
      "SR Coms Ghaziabad"
    ],
    "image": "https://srcommunication.in/favicon.png",
    "url": "https://srcommunication.in",
    "telephone": "+919717459671",
    "priceRange": "₹₹ - ₹₹₹₹",
    "currenciesAccepted": "INR",
    "paymentAccepted": [
      "Cash",
      "Credit Card",
      "Debit Card",
      "UPI",
      "Bajaj Finserv EMI",
      "IDFC First Bank EMI",
      "HDFC EMI",
      "ICICI EMI"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Ug-1, S/14 Shalimar Garden Extension-2",
      "addressLocality": "Sahibabad, Ghaziabad",
      "postalCode": "201005",
      "addressRegion": "Uttar Pradesh",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 28.6947,
      "longitude": 77.3481
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "10:00",
        "closes": "21:30"
      }
    ],
    "areaServed": [
      { "@type": "Place", "name": "Shalimar Garden" },
      { "@type": "Place", "name": "Sahibabad" },
      { "@type": "Place", "name": "Ghaziabad" },
      { "@type": "Place", "name": "Rajendra Nagar" },
      { "@type": "Place", "name": "Dilshad Garden" },
      { "@type": "Place", "name": "Anand Vihar" },
      { "@type": "Place", "name": "Delhi NCR" }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Smartphone & Electronics Catalog",
      "itemListElement": [
        { "@type": "OfferCatalog", "name": "Apple iPhones" },
        { "@type": "OfferCatalog", "name": "Samsung Galaxy Smartphones" },
        { "@type": "OfferCatalog", "name": "Vivo Smartphones" },
        { "@type": "OfferCatalog", "name": "OnePlus Smartphones" },
        { "@type": "OfferCatalog", "name": "Nothing Phones" },
        { "@type": "OfferCatalog", "name": "Audio & Earbuds" },
        { "@type": "OfferCatalog", "name": "Smartwatches & Tablets" }
      ]
    }
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://srcommunication.in/#website",
    "url": "https://srcommunication.in",
    "name": "SR Communication",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://srcommunication.in/?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(storeJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
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

            {/* Price & Market Variance Disclaimer Strip */}
            <div className="footer-disclaimer-strip">
              <div className="disclaimer-title-row">
                <span className="disclaimer-icon">⚠️</span>
                <span className="disclaimer-heading">PRICE &amp; MARKET VARIANCE DISCLAIMER:</span>
              </div>
              <p className="disclaimer-text">
                All product specifications, stock status, and prices displayed on this website are indicative and subject to change without prior notice based on dynamic real-time market supply, demand fluctuations, brand price revisions, and current in-store promotional schemes. Final selling prices, eligible bank cashbacks, and invoice billing will be verified and confirmed at the SR Communication showroom at the time of purchase.
              </p>
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
