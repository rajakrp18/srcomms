import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | SR Communication Shalimar Garden",
  description: "Official Privacy Policy of SR Communication. Fully compliant with India's Digital Personal Data Protection Act (DPDP Act 2023). Learn how we safeguard your personal and financial information.",
  alternates: {
    canonical: "https://srcommunication.in/privacy",
  },
  openGraph: {
    title: "Privacy Policy | SR Communication",
    description: "Your data security and privacy rights at SR Communication, Shalimar Garden, Ghaziabad.",
    url: "https://srcommunication.in/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <div className="legal-page-wrapper">
      <div className="container legal-container">
        {/* Breadcrumb */}
        <nav className="page-breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span className="crumb-sep">/</span>
          <span className="crumb-current">Privacy Policy</span>
        </nav>

        {/* Legal Header */}
        <div className="legal-header">
          <span className="legal-badge">
            🔒 COMPLIANCE: DPDP ACT 2023 &amp; IT ACT 2000 • LAST UPDATED: NOVEMBER 2026
          </span>
          <h1 className="legal-title">Privacy Policy</h1>
          <p className="legal-subtitle">
            At SR Communication, your personal privacy and data confidentiality are fundamental principles. This document outlines how we collect, process, store, and safeguard your data across our physical showroom and digital touchpoints.
          </p>
        </div>

        {/* Entity Card */}
        <div className="legal-entity-card">
          <div className="entity-card-header">
            <span className="entity-icon">🏢</span>
            <strong>OFFICIAL DATA CONTROLLER &amp; ENTITY DETAILS</strong>
          </div>
          <div className="entity-grid">
            <div className="entity-item">
              <span className="entity-label">Legal Business Entity:</span>
              <strong className="entity-val">SR COMMUNICATION</strong>
            </div>
            <div className="entity-item">
              <span className="entity-label">GSTIN:</span>
              <strong className="entity-val font-mono">09AKEPJ4696D1ZZ</strong>
            </div>
            <div className="entity-item">
              <span className="entity-label">Registered Showroom Address:</span>
              <span className="entity-val">Ug-1, S/14 Shalimar Garden Ext-2, Sahibabad, Ghaziabad, UP 201005</span>
            </div>
            <div className="entity-item">
              <span className="entity-label">Grievance / Privacy Desk:</span>
              <span className="entity-val">srcommunication98@gmail.com | +91 97174 59671</span>
            </div>
          </div>
        </div>

        {/* Main Legal Content Body */}
        <div className="legal-body-content">
          {/* Section 1 */}
          <section className="legal-section">
            <h2 className="legal-section-heading">1. Introduction &amp; Scope</h2>
            <p>
              This Privacy Policy applies to all customers and visitors who interact with <strong>SR COMMUNICATION</strong> (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;), whether in person at our authorized retail showroom in Shalimar Garden, Sahibabad, or digitally through our website (<strong>srcommunication.in</strong>) and customer support desks (WhatsApp, voice calls).
            </p>
            <p>
              We adhere strictly to the provisions of the <strong>Digital Personal Data Protection Act (DPDP Act 2023)</strong> and the <strong>Information Technology Act, 2000 (including the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011)</strong> of India.
            </p>
          </section>

          {/* Section 2 */}
          <section className="legal-section">
            <h2 className="legal-section-heading">2. Categories of Information We Collect</h2>
            <p>We only collect personal information that is essential for fulfilling transactions, verifying financing eligibility, and providing brand warranty coverage:</p>
            <ul className="legal-list">
              <li>
                <strong>Customer Identity &amp; Contact Details:</strong> Full name, billing address, active mobile number, and email address for generating GST-compliant tax invoices and sending transaction notifications.
              </li>
              <li>
                <strong>Financing &amp; KYC Information (Where Applicable):</strong> When you opt for 0% Downpayment or EMI financing through our banking partners (e.g., Bajaj Finserv, IDFC First Bank, HDFC Bank), your Aadhaar, PAN card, and bank account mandate details are captured directly through secure, bank-authorized biometric or OTP-based partner gateways.
              </li>
              <li>
                <strong>Device &amp; Warranty Identifiers:</strong> Product IMEI numbers, serial numbers, and activation timestamps required for enrolling devices into official manufacturer warranty registries (Apple Care, Samsung Care+, Vivo Warranty).
              </li>
              <li>
                <strong>Old Phone Exchange Records:</strong> Device IMEI, condition grading reports, and customer declarations for fulfilling legal requirements regarding second-hand electronics trade-in and anti-theft verification.
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="legal-section">
            <h2 className="legal-section-heading">3. How We Use Your Information</h2>
            <p>Your data is collected and processed strictly for legitimate business and fulfillment purposes:</p>
            <ul className="legal-list">
              <li>Generating valid, tax-compliant GST invoices as mandated by the Government of India.</li>
              <li>Assisting you with instant 0% EMI underwriting with approved non-banking financial companies (NBFCs) and commercial banks.</li>
              <li>Registering your product with brand warranty systems to ensure zero dispute at authorized service centers.</li>
              <li>Contacting you regarding device reservations, in-store pickup confirmations, or after-sales setup support.</li>
              <li>Preventing fraudulent transactions and ensuring compliance with local retail laws.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="legal-section">
            <h2 className="legal-section-heading">4. Strict No-Sale Policy &amp; Third-Party Disclosures</h2>
            <div className="legal-callout-box">
              <strong>🔒 Strict Commitment:</strong> SR Communication has never sold, rented, leased, or monetized customer personal data, and we will never do so in the future.
            </div>
            <p>We share information solely with authorized service entities under strict confidentiality agreements:</p>
            <ul className="legal-list">
              <li>
                <strong>Financing Partners:</strong> Bajaj Finserv Limited, IDFC First Bank Limited, and HDFC Bank Limited solely for the purpose of processing your loan application upon your explicit consent.
              </li>
              <li>
                <strong>Official Brand Centers:</strong> Official manufacturer service networks (Apple India, Samsung India, Vivo India, OnePlus) strictly to validate warranty claims and Dead-on-Arrival (DOA) replacements.
              </li>
              <li>
                <strong>Law Enforcement &amp; Statutory Authorities:</strong> In circumstances where disclosure is legally required under Indian law, court summons, or tax audit requirements.
              </li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="legal-section">
            <h2 className="legal-section-heading">5. Data Storage, Retention &amp; Security Standards</h2>
            <p>
              We implement industry-standard organizational and technological security safeguards:
            </p>
            <ul className="legal-list">
              <li>All digital communications and website visits are protected with 256-bit TLS/SSL encryption.</li>
              <li>In-store financial KYC documents (such as physical copies of ID proof) are processed through verified bank terminals and not stored indefinitely on unsecured local computers.</li>
              <li>Customer purchase histories and GST records are retained for the statutory period required by Indian tax legislation, after which they are securely archived or purged.</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="legal-section">
            <h2 className="legal-section-heading">6. Customer Rights Under the Indian DPDP Act 2023</h2>
            <p>As a data principal under Indian data protection law, you possess several enforceable rights:</p>
            <ul className="legal-list">
              <li><strong>Right to Access:</strong> You may request a summary of the personal data held about you by SR Communication.</li>
              <li><strong>Right to Correction:</strong> You may request immediate correction of inaccurate or outdated contact information.</li>
              <li><strong>Right to Erasure:</strong> Subject to mandatory tax retention laws, you may request the deletion of your contact records from our promotional systems.</li>
              <li><strong>Right to Grievance Redressal:</strong> You have the right to register concerns with our designated Grievance Officer and receive a prompt resolution.</li>
            </ul>
          </section>

          {/* Section 7 */}
          <section className="legal-section">
            <h2 className="legal-section-heading">7. Cookies &amp; Digital Analytics</h2>
            <p>
              Our website uses minimal, essential functional cookies to keep track of your shopping cart preferences, filter state, and security tokens. We do not employ intrusive cross-site tracking pixels or invasive ad surveillance tools. You may configure your browser to reject cookies at any time without forfeiting access to our product catalog.
            </p>
          </section>

          {/* Section 8 */}
          <section className="legal-section">
            <h2 className="legal-section-heading">8. Statutory Grievance Redressal Officer</h2>
            <p>
              In accordance with the Information Technology Act 2000 and the DPDP Act 2023, the details of our Grievance Redressal Officer are as follows:
            </p>
            <div className="legal-contact-card">
              <div className="contact-detail-row">
                <span className="detail-key">Designated Officer:</span>
                <strong className="detail-value">Ajit Kumar Poddar</strong>
              </div>
              <div className="contact-detail-row">
                <span className="detail-key">Role:</span>
                <span className="detail-value">Director &amp; Customer Grievance Lead</span>
              </div>
              <div className="contact-detail-row">
                <span className="detail-key">Showroom Location:</span>
                <span className="detail-value">Ug-1, S/14 Shalimar Garden Ext-2, Sahibabad, Ghaziabad, UP 201005</span>
              </div>
              <div className="contact-detail-row">
                <span className="detail-key">Direct Email:</span>
                <a href="mailto:srcommunication98@gmail.com" className="legal-link">srcommunication98@gmail.com</a>
              </div>
              <div className="contact-detail-row">
                <span className="detail-key">Telephone:</span>
                <a href="tel:+919717459671" className="legal-link">+91 97174 59671 / +91 99581 43420</a>
              </div>
            </div>
            <p className="grievance-turnaround-note">
              All data-related grievances submitted in writing will be acknowledged within 48 hours and investigated within statutory timelines.
            </p>
          </section>
        </div>

        {/* Bottom Navigation */}
        <div className="legal-footer-nav">
          <Link href="/terms" className="btn btn-outline">
            Review Terms &amp; Conditions →
          </Link>
          <Link href="/contact" className="btn btn-primary">
            Contact Grievance Desk 📍
          </Link>
        </div>
      </div>
    </div>
  );
}