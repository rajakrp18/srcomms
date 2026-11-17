import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Our Founders & Legacy | SR Communication Shalimar Garden",
  description: "Learn about Sanjeev Kumar Jha (Founder & CEO) and Ajit Kumar Poddar (Co-Founder & Director). Over 15 years building Shalimar Garden's most trusted smartphone empire with 50,000+ happy customers.",
  alternates: {
    canonical: "https://srcommunication.in/about",
  },
  openGraph: {
    title: "About SR Communication | The Visionaries Behind Shalimar Garden's #1 Mobile Store",
    description: "Founded by Sanjeev Kumar Jha and Ajit Kumar Poddar. 15+ years of trust, 100% genuine brand warranty, and 0% downpayment finance.",
    url: "https://srcommunication.in/about",
  },
};

export default function AboutPage() {
  const aboutJsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "SR Communication",
      "founder": [
        {
          "@type": "Person",
          "name": "Sanjeev Kumar Jha",
          "jobTitle": "Founder & CEO",
        },
        {
          "@type": "Person",
          "name": "Ajit Kumar Poddar",
          "jobTitle": "Co-Founder & Director",
        },
      ],
      "foundingDate": "2011",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Ug-1, S/14 Shalimar Garden Extension-2",
        "addressLocality": "Sahibabad, Ghaziabad",
        "postalCode": "201005",
        "addressRegion": "Uttar Pradesh",
        "addressCountry": "IN",
      },
    },
  };

  return (
    <div className="about-page-wrapper">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />

      <div className="container">
        {/* Breadcrumb */}
        <nav className="page-breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span className="crumb-sep">/</span>
          <span className="crumb-current">About Us</span>
        </nav>

        {/* Hero Section */}
        <div className="about-hero-section">
          <span className="about-hero-badge">
            🏆 ESTABLISHED 2011 • 15+ YEARS OF RETAIL TRUST
          </span>
          <h1 className="about-hero-title">The Visionaries Behind SR Communication</h1>
          <p className="about-hero-subtitle">
            Founded with an unwavering commitment to honesty, authentic technology, and personalized service, SR Communication has grown from a humble single counter into Shalimar Garden and Sahibabad&apos;s premier smartphone showroom.
          </p>
        </div>

        {/* Trust Metrics Ribbon */}
        <div className="about-stats-ribbon">
          <div className="stat-box">
            <span className="stat-number">15+</span>
            <span className="stat-label">Years of Community Trust</span>
            <span className="stat-sub">Serving Shalimar Garden since 2011</span>
          </div>
          <div className="stat-box">
            <span className="stat-number">50,000+</span>
            <span className="stat-label">Happy Device Owners</span>
            <span className="stat-sub">Across Ghaziabad &amp; East Delhi</span>
          </div>
          <div className="stat-box">
            <span className="stat-number">100%</span>
            <span className="stat-label">Genuine Sealed Stock</span>
            <span className="stat-sub">Official Indian brand warranty</span>
          </div>
          <div className="stat-box">
            <span className="stat-number">15 Mins</span>
            <span className="stat-label">Paperless 0% EMI Approvals</span>
            <span className="stat-sub">Bajaj Finserv, IDFC &amp; HDFC</span>
          </div>
        </div>

        {/* Brand Heritage Story */}
        <div className="about-story-card">
          <div className="story-content">
            <span className="section-eyebrow">OUR HERITAGE</span>
            <h2 className="story-title">From a Vision to Sahibabad&apos;s Most Trusted Tech Hub</h2>
            <p className="story-paragraph">
              When SR Communication opened its doors in Shalimar Garden Extension-2 over fifteen years ago, the Indian mobile market was flooded with gray-market imports, unsealed boxes, and misleading warranty claims. Founders Sanjeev Kumar Jha and Ajit Kumar Poddar set out with a simple counter-cultural mission: <strong>never compromise on authenticity, never sell an open box as new, and treat every single walk-in customer like family.</strong>
            </p>
            <p className="story-paragraph">
              Over the last decade and a half, that integrity earned SR Communication the deep loyalty of three generations of families across Shalimar Garden, Dilshad Garden, Rajendra Nagar, and Anand Vihar. Today, as smartphones have evolved into essential lifestyle and professional computers, SR Communication remains the region&apos;s top authorized retail showroom for Apple, Samsung, Vivo, OnePlus, and Nothing.
            </p>
          </div>
        </div>

        {/* Executive Leadership Section */}
        <div className="about-founders-section">
          <div className="founders-header">
            <span className="section-eyebrow">EXECUTIVE LEADERSHIP</span>
            <h2 className="section-title">Meet the Founders</h2>
            <p className="founders-subtitle">
              Active every single day on the showroom floor, ensuring personal accountability and unmatched customer satisfaction.
            </p>
          </div>

          <div className="founders-grid">
            {/* Sanjeev Kumar Jha */}
            <div className="founder-card">
              <div className="founder-photo-wrap">
                <Image
                  src="/sanjeev.jpg"
                  alt="Sanjeev Kumar Jha - Founder & CEO of SR Communication"
                  width={340}
                  height={420}
                  className="founder-photo"
                  priority
                />
                <div className="founder-photo-badge">
                  <span>Founder &amp; CEO</span>
                </div>
              </div>
              <div className="founder-info">
                <div className="founder-title-row">
                  <h3 className="founder-name">Sanjeev Kumar Jha</h3>
                  <span className="founder-role-tag">FOUNDER &amp; CEO</span>
                </div>
                <span className="founder-exp">15+ Years Smartphone Retail Leadership</span>
                <p className="founder-bio">
                  Sanjeev established SR Communication in 2011 with the goal of creating a transparent, dependable smartphone destination. His deep technical acumen and long-standing strategic alliances with national distributors of Apple, Samsung, Vivo, and BBK Electronics ensure that SR Communication consistently secures first-day flagship allocations and exclusive promotional pricing for the local Sahibabad community.
                </p>
                <blockquote className="founder-quote">
                  &ldquo;Our relationship with a customer begins the moment they unbox their phone with us, not when the payment clears. We don&apos;t just sell devices — we deliver reliability and peace of mind.&rdquo;
                </blockquote>
                <div className="founder-direct-contact">
                  <span className="contact-tag">Direct Desk:</span>
                  <a href="tel:+919717459671" className="founder-phone-link">
                    📞 +91 97174 59671
                  </a>
                </div>
              </div>
            </div>

            {/* Ajit Kumar Poddar */}
            <div className="founder-card">
              <div className="founder-photo-wrap">
                <Image
                  src="/ajit.jpg"
                  alt="Ajit Kumar Poddar - Co-Founder & Director of SR Communication"
                  width={340}
                  height={420}
                  className="founder-photo"
                  priority
                />
                <div className="founder-photo-badge">
                  <span>Co-Founder &amp; Director</span>
                </div>
              </div>
              <div className="founder-info">
                <div className="founder-title-row">
                  <h3 className="founder-name">Ajit Kumar Poddar</h3>
                  <span className="founder-role-tag">CO-FOUNDER &amp; DIRECTOR</span>
                </div>
                <span className="founder-exp">Customer Experience &amp; Finance Architect</span>
                <p className="founder-bio">
                  Driven by customer-centric innovation, Ajit has been the driving force behind SR Communication&apos;s operational growth and retail partnerships. He spearheaded our on-spot alliances with Bajaj Finserv, IDFC First Bank, and HDFC Bank, making zero-downpayment 0% EMI financing accessible to students, professionals, and families across Ghaziabad without bureaucratic delays.
                </p>
                <blockquote className="founder-quote">
                  &ldquo;Every device that leaves our showroom carries our family name. Genuine factory-sealed quality, honest trade-in values, and crystal-clear finance terms are standards we will never compromise.&rdquo;
                </blockquote>
                <div className="founder-direct-contact">
                  <span className="contact-tag">Direct Desk:</span>
                  <a href="tel:+919958143420" className="founder-phone-link">
                    📞 +91 99581 43420
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars of Excellence */}
        <div className="about-pillars-section">
          <div className="pillars-header">
            <span className="section-eyebrow">THE SR STANDARD</span>
            <h2 className="section-title">Our 4 Pillars of Customer Commitment</h2>
            <p className="pillars-subtitle">The principles that define every interaction at SR Communication.</p>
          </div>

          <div className="pillars-grid">
            <div className="pillar-card">
              <div className="pillar-icon">🛡️</div>
              <h3 className="pillar-title">100% Genuine &amp; Factory Sealed</h3>
              <p className="pillar-desc">
                Every smartphone, tablet, and accessory is directly sourced from brand-authorized channels. Includes official GST invoice and valid manufacturer warranty redeemable at any service center across India.
              </p>
            </div>

            <div className="pillar-card">
              <div className="pillar-icon">⚡</div>
              <h3 className="pillar-title">Zero Downpayment &amp; 0% EMI</h3>
              <p className="pillar-desc">
                We believe financial constraints should never stand between you and the latest technology. Our on-spot finance desks provide transparent, paperless approvals in just 15 minutes with zero surprise charges.
              </p>
            </div>

            <div className="pillar-card">
              <div className="pillar-icon">🔄</div>
              <h3 className="pillar-title">Transparent Old Phone Trade-In</h3>
              <p className="pillar-desc">
                Bring your old smartphone in any condition. Our technicians perform a 5-minute diagnostic evaluation to offer the highest exchange valuation in Ghaziabad, directly deducted from your new purchase.
              </p>
            </div>

            <div className="pillar-card">
              <div className="pillar-icon">🤝</div>
              <h3 className="pillar-title">Complimentary White-Glove Setup</h3>
              <p className="pillar-desc">
                Our service doesn&apos;t end at the register. We provide free complete data migration (WhatsApp chats, contacts, photos from Android to iOS or vice versa) and professional screen guard application.
              </p>
            </div>
          </div>
        </div>

        {/* Brand Portfolio Showcase */}
        <div className="about-brands-section">
          <div className="brands-header">
            <span className="section-eyebrow">AUTHORIZED PARTNERSHIPS</span>
            <h3 className="brands-title">Authorized Brands You Love</h3>
            <p className="brands-desc">Direct partnership with the world&apos;s leading consumer technology giants.</p>
          </div>
          <div className="brands-pills-wrap">
            <span className="brand-badge-pill">Apple Authorized Reseller Stock</span>
            <span className="brand-badge-pill">Samsung Authorized Partner</span>
            <span className="brand-badge-pill">Vivo Authorized Elite Store</span>
            <span className="brand-badge-pill">OnePlus Authorized Dealer</span>
            <span className="brand-badge-pill">Realme Authorized Partner</span>
            <span className="brand-badge-pill">Xiaomi / Redmi Partner</span>
            <span className="brand-badge-pill">Nothing Partner Store</span>
            <span className="brand-badge-pill">boAt Audio Authorized</span>
            <span className="brand-badge-pill">Anker Official Accessories</span>
            <span className="brand-badge-pill">Belkin MagSafe Partner</span>
          </div>
        </div>

        {/* Call to Action Card */}
        <div className="about-cta-card">
          <div className="cta-left">
            <h3 className="cta-title">Experience SR Communication in Person</h3>
            <p className="cta-sub">
              Visit our showroom at Ug-1, S/14 Shalimar Garden Ext-2, Sahibabad. Hands-on demo units, on-spot 0% EMI financing, and cold beverages await you.
            </p>
          </div>
          <div className="cta-right">
            <Link href="/" className="btn btn-primary">
              Browse Latest Flagships →
            </Link>
            <Link href="/contact" className="btn btn-outline">
              Showroom Directions &amp; Helplines 📍
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}