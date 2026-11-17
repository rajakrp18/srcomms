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
  title: "SR Communication | iPhone 17/18 & Galaxy S26/S27 with 0% EMI in Shalimar Garden",
  description: "Explore the latest smartphones: iPhone 18 Pro Max, iPhone 17 Pro, Galaxy S27 Ultra, S26 Ultra, Vivo, OnePlus & Nothing. 0% Downpayment EMI, genuine warranty, and instant store pickup in Shalimar Garden, Ghaziabad.",
  keywords: [
    "SR Communication",
    "iPhone 18 Pro Max Shalimar Garden",
    "iPhone 17 Pro Max Ghaziabad",
    "Galaxy S27 Ultra",
    "Galaxy S26 Ultra Sahibabad",
    "0% EMI phone store Sahibabad",
    "Best mobile shop Shalimar Garden"
  ]
};

export default function Home() {
  const products = getAllProducts();

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Where is SR Communication located in Shalimar Garden, Ghaziabad?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SR Communication is situated at Ug-1, S/14 Shalimar Garden Extension-2, Sahibabad, Ghaziabad, UP 201005 (near S.M. Mall). The showroom is open 7 days a week from 10:00 AM to 9:30 PM with customer parking and live device demo counters."
        }
      },
      {
        "@type": "Question",
        "name": "Can I buy iPhone 18, iPhone 17 and Samsung Galaxy S27/S26 on 0% EMI?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! SR Communication offers instant 0% downpayment paperless EMI approvals through Bajaj Finserv, IDFC First Bank, HDFC, and ICICI Bank. Walk in with your Aadhaar and PAN card, and walk out with your new smartphone in under 15 minutes."
        }
      },
      {
        "@type": "Question",
        "name": "Are smartphones at SR Communication brand sealed with official warranty?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, 100%. Every smartphone sold at SR Communication is brand sealed in factory box with valid GST invoice and official 1-year manufacturer warranty recognized across all authorized service centers nationwide."
        }
      },
      {
        "@type": "Question",
        "name": "How does old phone trade-in & exchange bonus work at SR Communication?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bring your working old phone to our showroom for instant diagnostic evaluation. We calculate maximum fair market value plus an additional exchange bonus that gets deducted on the spot from your new smartphone."
        }
      },
      {
        "@type": "Question",
        "name": "Can I check live prices or reserve a phone via WhatsApp?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. You can contact our direct sales desk anytime at +91 97174 59671 or click any WhatsApp button to verify real-time stock, color availability, or reserve a device for same-day store pickup."
        }
      }
    ]
  };

  return (
    <>
      {/* FAQ Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
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

      {/* 6.5. SEO FAQ SECTION */}
      <section className="faq-section" id="faq">
        <div className="container">
          <div className="section-head-centered">
            <span className="section-eyebrow">HELP &amp; SHOWROOM ANSWERS</span>
            <h2 className="section-heading-revamped">Frequently Asked Questions</h2>
            <p className="section-sub-desc">
              Everything you need to know about buying the latest smartphones, 0% EMI financing, and store pickup at SR Communication in Shalimar Garden.
            </p>
          </div>

          <div className="faq-grid">
            <div className="faq-card">
              <h3>Where is SR Communication located in Shalimar Garden?</h3>
              <p>
                SR Communication is situated at <strong>Ug-1, S/14 Shalimar Garden Extension-2, Sahibabad, Ghaziabad, UP 201005</strong> (near S.M. Mall). We are open all 7 days from 10:00 AM to 9:30 PM with dedicated customer parking and live device demo counters.
              </p>
            </div>

            <div className="faq-card">
              <h3>Can I buy iPhone 18, iPhone 17 and Galaxy S27/S26 on 0% EMI?</h3>
              <p>
                Yes! We offer <strong>0% Downpayment paperless EMI</strong> via Bajaj Finserv, IDFC First Bank, HDFC, and ICICI Bank. Walk in with your Aadhaar Card and PAN Card, and your approval takes under 15 minutes with flexible tenures from 3 to 24 months.
              </p>
            </div>

            <div className="faq-card">
              <h3>Are all phones sold 100% genuine with official brand warranty?</h3>
              <p>
                Absolutely. Every smartphone sold at SR Communication is brand sealed in factory box with valid GST invoice and official 1-year manufacturer warranty recognized across all authorized Apple, Samsung, Vivo, OnePlus, and Nothing service centers nationwide.
              </p>
            </div>

            <div className="faq-card">
              <h3>How does old phone trade-in &amp; exchange bonus work?</h3>
              <p>
                Bring your working old phone to our showroom for instant diagnostic evaluation. We calculate maximum fair market value plus an additional <strong>exchange bonus</strong> that gets deducted on the spot from your new smartphone purchase.
              </p>
            </div>

            <div className="faq-card">
              <h3>Do you offer free data transfer and accessories with new phones?</h3>
              <p>
                Yes! Our in-store tech team will safely migrate all your contacts, photos, WhatsApp chats, and apps from your old phone to your new phone completely free, along with complimentary tempered glass application and protective case.
              </p>
            </div>

            <div className="faq-card">
              <h3>Can I check live prices or reserve a phone via WhatsApp?</h3>
              <p>
                Yes. You can contact our direct sales desk anytime at <strong>+91 97174 59671</strong> or click any WhatsApp button to verify real-time stock, color options, or reserve a device for same-day store pickup.
              </p>
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
