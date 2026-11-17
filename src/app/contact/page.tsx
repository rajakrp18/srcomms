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

        {/* 4 Core Showroom Cards Grid */}
        <div className="contact-cards-grid">
          {/* Card 1: Visit Showroom */}
          <div className="contact-card">
            <div className="contact-card-icon-wrap icon-visit">📍</div>
            <h3 className="contact-card-title">Visit Our Showroom</h3>
            <p className="contact-card-detail">
              <strong>SR COMMUNICATION</strong><br />
              Ug-1, S/14 Shalimar Garden Ext-2,<br />
              Sahibabad, Ghaziabad, UP 201005
            </p>
            <div className="contact-card-meta">
              <span className="meta-tag">Landmark: Near Shiva Chowk</span>
              <span className="meta-tag">Metro: Major Mohit Sharma (5 mins)</span>
            </div>
            <a
              href="https://www.google.com/maps/dir//SR+COMMUNICATION,+Shop+No,+S.M.+Mall,+Block+B,+Shalimar+Garden,+Sahibabad,+Ghaziabad,+Uttar+Pradesh+201005"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline contact-card-btn"
            >
              Open in Google Maps ↗
            </a>
          </div>

          {/* Card 2: Phone Helplines */}
          <div className="contact-card">
            <div className="contact-card-icon-wrap icon-call">📞</div>
            <h3 className="contact-card-title">Call Us Directly</h3>
            <p className="contact-card-detail">
              Speak directly with our showroom executives for instant device availability and price confirmations:
            </p>
            <div className="contact-phone-list">
              <a href="tel:+919717459671" className="phone-line-link">
                <span className="phone-icon">📱</span> +91 97174 59671 <span className="phone-role">(Sales &amp; Finance)</span>
              </a>
              <a href="tel:+919958143420" className="phone-line-link">
                <span className="phone-icon">📱</span> +91 99581 43420 <span className="phone-role">(Store Ops)</span>
              </a>
              <a href="tel:01202630317" className="phone-line-link">
                <span className="phone-icon">☎️</span> 0120 2630317 <span className="phone-role">(Landline Desk)</span>
              </a>
            </div>
            <a href="tel:+919717459671" className="btn btn-primary contact-card-btn">
              Call Store Manager Now
            </a>
          </div>

          {/* Card 3: WhatsApp Support Desk */}
          <div className="contact-card highlight-whatsapp-card">
            <div className="contact-card-icon-wrap icon-wa">💬</div>
            <h3 className="contact-card-title">WhatsApp Priority Desk</h3>
            <p className="contact-card-detail">
              Fastest way to get real-time price quotes, photos of factory-sealed boxes, and pre-booking verification:
            </p>
            <div className="wa-perks-list">
              <span>⚡ Average response time: <strong>&lt; 5 mins</strong></span>
              <span>⚡ Instant 0% EMI calculation quotes</span>
              <span>⚡ Share old phone photos for instant valuation</span>
            </div>
            <a
              href="https://wa.me/919717459671?text=Hi%20SR%20Communication,%20I%20want%20to%20inquire%20about%20smartphone%20pricing%20and%20availability%20in%20your%20Shalimar%20Garden%20store."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp-full contact-card-btn"
            >
              Start WhatsApp Chat 💬
            </a>
          </div>

          {/* Card 4: Hours & Business Credentials */}
          <div className="contact-card">
            <div className="contact-card-icon-wrap icon-info">🏢</div>
            <h3 className="contact-card-title">Timings &amp; Credentials</h3>
            <div className="contact-credentials-block">
              <div className="cred-row">
                <span className="cred-label">Showroom Hours:</span>
                <strong className="cred-val text-green">10:00 AM – 9:00 PM</strong>
              </div>
              <div className="cred-row">
                <span className="cred-label">Operating Days:</span>
                <strong className="cred-val">Monday – Sunday (Open 7 Days)</strong>
              </div>
              <div className="cred-row">
                <span className="cred-label">GSTIN:</span>
                <strong className="cred-val font-mono">09AKEPJ4696D1ZZ</strong>
              </div>
              <div className="cred-row">
                <span className="cred-label">Official Email:</span>
                <strong className="cred-val">srcommunication98@gmail.com</strong>
              </div>
            </div>
            <Link href="/about" className="btn btn-outline contact-card-btn">
              About Our Founders &amp; Legacy →
            </Link>
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