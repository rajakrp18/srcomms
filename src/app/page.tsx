import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { getAllProducts } from "@/data/products";
import { CATEGORIES, BRANDS } from "@/data/categories";
import {
  CatalogSection,
  EmiCalculator,
  HeroShowcaseSwitcher
} from "@/components/InteractiveElements";

export const metadata: Metadata = {
  title: "SR Communication | Top Selling Smartphones & 0% EMI in Shalimar Garden",
  description: "Explore the latest smartphones from Apple, Samsung, Vivo, OnePlus, Nothing, Oppo, Realme, and Xiaomi. 0% Downpayment EMI, genuine warranty, and instant store pickup in Shalimar Garden, Ghaziabad.",
  keywords: [
    "SR Communication",
    "Smartphones Shalimar Garden",
    "iPhone 16 Pro Shalimar Garden",
    "Samsung Galaxy S24 Ultra Ghaziabad",
    "Vivo X100 Pro store",
    "0% EMI phone store Sahibabad",
    "Best mobile shop Shalimar Garden"
  ]
};

export default function Home() {
  const products = getAllProducts();

  return (
    <>
      {/* 1. HERO SECTION */}
      <section className="hero-revamp">
        <div className="container hero-container-grid">
          <div className="hero-text-col">
            <div className="hero-eyebrow-pill">
              <span className="live-dot"></span>
              <span>SHALIMAR GARDEN&apos;S PREMIER TECH STORE</span>
            </div>

            <h1 className="hero-headline">
              Upgrade to the <br />
              <span className="gradient-text">Latest Flagships</span>
            </h1>

            <p className="hero-subtext">
              100% Genuine smartphones, audio &amp; accessories. Unbeatable deals, 0% downpayment finance, and 30-minute in-store pickup right here in Sahibabad.
            </p>

            <div className="hero-cta-row">
              <a href="#catalog" className="btn btn-primary btn-large">
                Browse All Phones ↓
              </a>
              <a href="#emi-calculator" className="btn btn-outline btn-large">
                Calculate 0% EMI →
              </a>
            </div>

            {/* Quick Trust Indicators */}
            <div className="hero-perks-row">
              <div className="perk-item">
                <span className="perk-check">✓</span>
                <span>100% Official Warranty</span>
              </div>
              <div className="perk-item">
                <span className="perk-check">✓</span>
                <span>0% Downpayment EMI</span>
              </div>
              <div className="perk-item">
                <span className="perk-check">✓</span>
                <span>Free Glass &amp; Case</span>
              </div>
            </div>
          </div>

          {/* Interactive Flagship Switcher (Right Column) */}
          <div className="hero-visual-col">
            <HeroShowcaseSwitcher />
          </div>
        </div>

        {/* Floating Trust Bar */}
        <div className="container">
          <div className="hero-trust-bar">
            <div className="trust-card">
              <span className="trust-icon">🛡️</span>
              <div>
                <strong>100% Original Products</strong>
                <p>Authorized stock with brand bill</p>
              </div>
            </div>
            <div className="trust-card">
              <span className="trust-icon">💳</span>
              <div>
                <strong>0% Downpayment EMI</strong>
                <p>Bajaj Finserv, IDFC &amp; HDFC</p>
              </div>
            </div>
            <div className="trust-card">
              <span className="trust-icon">⚡</span>
              <div>
                <strong>30-Min In-Store Pickup</strong>
                <p>Ready today in Shalimar Garden</p>
              </div>
            </div>
            <div className="trust-card">
              <span className="trust-icon">🎁</span>
              <div>
                <strong>Free Setup &amp; Gifts</strong>
                <p>Data transfer &amp; accessories</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CATEGORY HIGHLIGHT STRIP */}
      <section className="categories-strip-section" id="categories">
        <div className="container">
          <div className="section-head-centered">
            <span className="section-eyebrow">EXPLORE BY CATEGORY</span>
            <h2 className="section-heading-revamped">Shop By Department</h2>
          </div>

          <div className="categories-slider-grid">
            {CATEGORIES.map((cat) => (
              <a href="#catalog" key={cat.id} className="category-tile-card">
                <div className="cat-tile-header">
                  <span className="cat-count-pill">{cat.itemCount}</span>
                  {cat.badge && <span className="cat-tile-badge">{cat.badge}</span>}
                </div>
                <div className="cat-tile-img">
                  <Image
                    src={cat.imgUrl}
                    alt={cat.title}
                    fill
                    style={{ objectFit: 'contain' }}
                    sizes="(max-width: 768px) 50vw, 20vw"
                  />
                </div>
                <div className="cat-tile-info">
                  <h3>{cat.title}</h3>
                  <p>{cat.desc}</p>
                  <span className="cat-explore-link">
                    Explore Deals
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 3. BRAND SHOWCASE STRIP */}
      <section className="brand-strip-section">
        <div className="container">
          <div className="brand-pills-row">
            <span className="brand-strip-title">Authorized Brands:</span>
            <div className="brand-pills-container">
              {BRANDS.map((b) => (
                <div className="brand-pill-badge" key={b.name}>
                  <span className="brand-logo-icon">{b.logo}</span>
                  <span className="brand-name-text">{b.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. MAIN DYNAMIC CATALOG (FILTERS, SEARCH, CARDS, 0% EMI) */}
      <CatalogSection initialProducts={products} />

      {/* 5. INTERACTIVE 0% EMI CALCULATOR */}
      <EmiCalculator />

      {/* 6. TRADE-IN / EXCHANGE PROMO SECTION */}
      <section className="exchange-banner-section" id="deals">
        <div className="container">
          <div className="exchange-banner-card">
            <div className="exchange-content">
              <span className="promo-pill">STORE EXCLUSIVE DEAL</span>
              <h2>Old Phone Exchange &amp; Trade-In Bonus</h2>
              <p>
                Bring your old smartphone to SR Communication in Shalimar Garden and get an instant trade-in discount of up to <strong>₹35,000</strong> on your new iPhone, Samsung Galaxy, or Vivo flagship.
              </p>
              <div className="exchange-points">
                <span>✓ On-spot device valuation in 5 minutes</span>
                <span>✓ Data transfer completely free</span>
                <span>✓ Combine with 0% EMI for maximum savings</span>
              </div>
              <a
                href={`https://wa.me/919717459671?text=${encodeURIComponent("Hi SR Communication, I want to exchange my old smartphone. Please share the trade-in valuation process.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ marginTop: '20px', alignSelf: 'flex-start' }}
              >
                Estimate Exchange Value on WhatsApp →
              </a>
            </div>
            <div className="exchange-visual">
              <Image
                src="/promo_tradein_1790917319484.png"
                alt="Phone Exchange"
                fill
                style={{ objectFit: 'contain' }}
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 7. VISIT STORE & GOOGLE MAPS SHOWROOM */}
      <section className="store-showroom-section" id="visit">
        <div className="container">
          <div className="showroom-card-grid">
            <div className="showroom-info-col">
              <span className="section-eyebrow">EXPERIENCE IN PERSON</span>
              <h2>Visit SR Communication Showroom</h2>
              <p>
                Touch, feel, and compare the latest smartphones side-by-side in our air-conditioned showroom in Shalimar Garden. Our tech specialists will help you find the best device and get your 0% EMI approved on the spot.
              </p>

              <div className="store-contact-meta">
                <div className="meta-row">
                  <span className="meta-icon">📍</span>
                  <div>
                    <strong>Store Address:</strong>
                    <p>Ug-1, S/14 Shalimar Garden Extension-2, Sahibabad, Ghaziabad, UP 201005</p>
                  </div>
                </div>

                <div className="meta-row">
                  <span className="meta-icon">🕒</span>
                  <div>
                    <strong>Showroom Hours:</strong>
                    <p>Open 7 Days a Week • 10:00 AM – 9:30 PM</p>
                  </div>
                </div>

                <div className="meta-row">
                  <span className="meta-icon">📞</span>
                  <div>
                    <strong>Direct Call / WhatsApp:</strong>
                    <p>+91 9717459671 / +91 9811440022</p>
                  </div>
                </div>
              </div>

              <div className="store-buttons-row">
                <a
                  href="https://www.google.com/maps/dir//SR+COMMUNICATION,+Shop+No,+S.M.+Mall,+Block+B,+Shalimar+Garden,+Sahibabad,+Ghaziabad,+Uttar+Pradesh+201005"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Get Google Maps Directions 📍
                </a>
                <a
                  href="tel:+919717459671"
                  className="btn btn-outline"
                >
                  Call Showroom Directly 📞
                </a>
              </div>
            </div>

            <div className="showroom-map-col">
              <iframe
                title="SR Communication Shalimar Garden Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.569420063711!2d77.34178067645163!3d28.69260598406798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfa5a0b965023%3A0x8ad4f60675c17ec3!2sSR%20COMMUNICATION!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '24px', minHeight: '380px' }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
