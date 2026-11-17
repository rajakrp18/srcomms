import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm, ContactFaqAccordion } from "@/components/InteractiveElements";

export const metadata: Metadata = {
  title: "Contact Us & Showroom Location | SR Communication Shalimar Garden",
  description: "Visit SR Communication at Shalimar Garden Ext-2, Sahibabad. Call +91 97174 59671 for 0% EMI financing, instant stock reservations, and old phone exchange deals. Open 7 days 10 AM to 9 PM.",
  alternates: {
    canonical: "https://srcommunication.in/contact",
  },
  openGraph: {
    title: "Contact SR Communication | Premier Mobile Showroom in Shalimar Garden",
    description: "Visit our showroom at Ug-1, S/14 Shalimar Garden Ext-2, Sahibabad, Ghaziabad. Instant 0% EMI, 100% genuine brand warranty.",
    url: "https://srcommunication.in/contact",
  },
};

export default function ContactPage() {
  const contactJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "MobilePhoneStore",
      "name": "SR Communication",
      "telephone": "+919717459671",
      "email": "srcommunication98@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Ug-1, S/14 Shalimar Garden Extension-2",
        "addressLocality": "Sahibabad, Ghaziabad",
        "postalCode": "201005",
        "addressRegion": "Uttar Pradesh",
        "addressCountry": "IN",
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "10:00",
        "closes": "21:00",
      },
    },
  };

  return (
    <div className="contact-page-wrapper">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />

      <div className="container">
        {/* Breadcrumb Navigation */}
        <nav className="page-breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span className="crumb-sep">/</span>
          <span className="crumb-current">Contact Us</span>
        </nav>

        {/* Hero Section */}
        <div className="contact-hero-section">
          <span className="contact-hero-badge">
            <span className="live-dot-pulse"></span> SHALIMAR GARDEN EXTENSION-2 • OPEN 7 DAYS A WEEK
          </span>
          <h1 className="contact-hero-title">Get in Touch with Our Showroom</h1>
          <p className="contact-hero-subtitle">
            Whether you want to experience the latest iPhone 18 or Galaxy S26 in person, calculate instant 0% EMI eligibility, or trade in your old smartphone, our expert team is ready to assist you.
          </p>
        </div>

        {/* 4 Core Showroom Cards Grid (2x2 Balanced Layout) */}
        <div className="contact-cards-grid">
          {/* Card 1: Visit Showroom */}
          <div className="contact-card">
            <div className="contact-card-header">
              <div className="contact-card-icon-wrap icon-visit">📍</div>
              <div>
                <span className="contact-card-eyebrow">PHYSICAL STORE</span>
                <h3 className="contact-card-title">Visit Our Showroom</h3>
              </div>
            </div>

            <p className="contact-card-sub">
              Experience flagship devices in person, unbox sealed units, and consult with our smartphone experts in Sahibabad:
            </p>

            <div className="contact-card-address-box">
              <strong className="store-name">SR COMMUNICATION</strong>
              <span className="store-street">Ug-1, S/14 Shalimar Garden Ext-2</span>
              <span className="store-city">Sahibabad, Ghaziabad, Uttar Pradesh 201005</span>
            </div>

            <div className="contact-badges-row">
              <span className="contact-badge-pill">📍 Landmark: Near Shiva Chowk</span>
              <span className="contact-badge-pill">🚇 Metro: Major Mohit Sharma (5 mins)</span>
              <span className="contact-badge-pill">🅿️ Free Dedicated Customer Parking</span>
            </div>

            <div className="contact-card-btn-wrap">
              <a
                href="https://www.google.com/maps/dir//SR+COMMUNICATION,+Shop+No,+S.M.+Mall,+Block+B,+Shalimar+Garden,+Sahibabad,+Ghaziabad,+Uttar+Pradesh+201005"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline contact-card-btn"
              >
                Open in Google Maps ↗
              </a>
            </div>
          </div>

          {/* Card 2: Phone Helplines */}
          <div className="contact-card">
            <div className="contact-card-header">
              <div className="contact-card-icon-wrap icon-call">📞</div>
              <div>
                <span className="contact-card-eyebrow">VOICE HELPLINES</span>
                <h3 className="contact-card-title">Call Us Directly</h3>
              </div>
            </div>

            <p className="contact-card-sub">
              Speak directly with our showroom team for instant device availability and price confirmations:
            </p>

            <div className="contact-phone-grid">
              <a href="tel:+919717459671" className="contact-phone-tile">
                <div className="phone-tile-info">
                  <span className="phone-tile-number">+91 97174 59671</span>
                  <span className="phone-tile-role">Sales, VIP Pre-orders &amp; 0% EMI Desk</span>
                </div>
                <span className="phone-tile-action">Call 📱</span>
              </a>

              <a href="tel:+919958143420" className="contact-phone-tile">
                <div className="phone-tile-info">
                  <span className="phone-tile-number">+91 99581 43420</span>
                  <span className="phone-tile-role">Showroom Operations &amp; Stock Verification</span>
                </div>
                <span className="phone-tile-action">Call 📱</span>
              </a>

              <a href="tel:01202630317" className="contact-phone-tile">
                <div className="phone-tile-info">
                  <span className="phone-tile-number">0120 2630317</span>
                  <span className="phone-tile-role">Showroom Landline Reception Desk</span>
                </div>
                <span className="phone-tile-action">Call ☎️</span>
              </a>
            </div>

            <div className="contact-card-btn-wrap">
              <a href="tel:+919717459671" className="btn btn-primary contact-card-btn">
                Call Store Manager (+91 97174 59671)
              </a>
            </div>
          </div>

          {/* Card 3: WhatsApp Support Desk */}
          <div className="contact-card highlight-whatsapp-card">
            <div className="contact-card-header">
              <div className="contact-card-icon-wrap icon-wa">💬</div>
              <div>
                <div className="wa-title-row">
                  <span className="contact-card-eyebrow">FASTEST RESPONSE</span>
                  <span className="live-status-pill">🟢 Online Now</span>
                </div>
                <h3 className="contact-card-title">WhatsApp Priority Desk</h3>
              </div>
            </div>

            <p className="contact-card-sub">
              Get immediate price confirmations, sealed box photos, and instant 0% EMI quotes without waiting:
            </p>

            <div className="wa-perks-list">
              <div className="wa-perk-item">
                <span className="wa-perk-icon">⚡</span>
                <span className="wa-perk-text">Average response time: <strong>under 5 minutes</strong> (10 AM – 9 PM)</span>
              </div>
              <div className="wa-perk-item">
                <span className="wa-perk-icon">📸</span>
                <span className="wa-perk-text">Request real-time photos of factory-sealed boxes &amp; color variants</span>
              </div>
              <div className="wa-perk-item">
                <span className="wa-perk-icon">🔄</span>
                <span className="wa-perk-text">Send old smartphone photos for instant top-market exchange valuation</span>
              </div>
              <div className="wa-perk-item">
                <span className="wa-perk-icon">💳</span>
                <span className="wa-perk-text">Instant paperless 0% EMI eligibility calculation check</span>
              </div>
            </div>

            <div className="contact-card-btn-wrap">
              <a
                href="https://wa.me/919717459671?text=Hi%20SR%20Communication,%20I%20want%20to%20inquire%20about%20smartphone%20pricing%20and%20availability%20in%20your%20Shalimar%20Garden%20store."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp-full contact-card-btn"
              >
                Start WhatsApp Chat with Showroom 💬
              </a>
            </div>
          </div>

          {/* Card 4: Hours & Business Credentials */}
          <div className="contact-card">
            <div className="contact-card-header">
              <div className="contact-card-icon-wrap icon-info">🏢</div>
              <div>
                <span className="contact-card-eyebrow">OFFICIAL CREDENTIALS</span>
                <h3 className="contact-card-title">Timings &amp; Business Info</h3>
              </div>
            </div>

            <p className="contact-card-sub">
              Verified business registration and showroom operational timings in Shalimar Garden:
            </p>

            <div className="contact-credentials-grid">
              <div className="cred-block">
                <span className="cred-label">SHOWROOM OPERATING HOURS</span>
                <strong className="cred-val text-green">10:00 AM – 9:00 PM (Open 7 Days a Week)</strong>
              </div>

              <div className="cred-block">
                <span className="cred-label">REGISTERED LEGAL ENTITY</span>
                <strong className="cred-val">SR COMMUNICATION</strong>
              </div>

              <div className="cred-block">
                <span className="cred-label">GSTIN REGISTRATION NUMBER</span>
                <strong className="cred-val font-mono">09AKEPJ4696D1ZZ</strong>
              </div>

              <div className="cred-block">
                <span className="cred-label">OFFICIAL INQUIRIES &amp; BILLING EMAIL</span>
                <a href="mailto:srcommunication98@gmail.com" className="cred-val cred-email-link">
                  srcommunication98@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-card-btn-wrap">
              <Link href="/about" className="btn btn-outline contact-card-btn">
                About Our Founders &amp; 15-Yr Legacy →
              </Link>
            </div>
          </div>
        </div>

        {/* Interactive VIP Reservation & Inquiry Form */}
        <div className="contact-form-section-wrapper">
          <ContactForm />
        </div>

        {/* Transit & How to Reach Us Guide */}
        <div className="contact-transit-card">
          <div className="transit-header">
            <span className="section-eyebrow">DIRECTIONS &amp; TRANSIT</span>
            <h3 className="transit-title">How to Reach SR Communication</h3>
          </div>
          <div className="transit-grid">
            <div className="transit-item">
              <span className="transit-icon">🚇</span>
              <div>
                <strong className="transit-method">By Delhi Metro (Red Line):</strong>
                <p>
                  Get down at <strong>Major Mohit Sharma Rajendra Nagar Metro Station</strong>. Our showroom is just a 5-minute direct e-rickshaw or auto ride away at Shalimar Garden Ext-2.
                </p>
              </div>
            </div>

            <div className="transit-item">
              <span className="transit-icon">🚗</span>
              <div>
                <strong className="transit-method">By Car or Two-Wheeler:</strong>
                <p>
                  Located centrally at Ug-1, S/14 Shalimar Garden Ext-2 with dedicated customer vehicle parking space right outside our showroom doors.
                </p>
              </div>
            </div>

            <div className="transit-item">
              <span className="transit-icon">📍</span>
              <div>
                <strong className="transit-method">Prominent Local Landmarks:</strong>
                <p>
                  Easily reachable from Dilshad Garden, Anand Vihar, Seemapuri, Mohan Nagar, and Sahibabad Railway Station. Located near Shiva Chowk.
                </p>
              </div>
            </div>
          </div>

          <div className="transit-cta-strip">
            <span>Prefer interactive navigation? View our interactive showroom locator:</span>
            <Link href="/store" className="btn btn-primary btn-sm">
              View Interactive Showroom Map 📍
            </Link>
          </div>
        </div>

        {/* FAQ Accordion Section */}
        <ContactFaqAccordion />
      </div>
    </div>
  );
}