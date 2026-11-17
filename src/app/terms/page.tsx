import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions | SR Communication Shalimar Garden",
  description: "Official Terms and Conditions for SR Communication. Governed by Indian consumer protection laws. Details on brand warranty, 0% EMI finance terms, DOA policies, and device exchanges.",
  alternates: {
    canonical: "https://srcommunication.in/terms",
  },
  openGraph: {
    title: "Terms & Conditions | SR Communication",
    description: "Official sales, warranty, and financing terms for SR Communication in Shalimar Garden, Ghaziabad.",
    url: "https://srcommunication.in/terms",
  },
};

export default function TermsPage() {
  return (
    <div className="legal-page-wrapper">
      <div className="container legal-container">
        {/* Breadcrumb */}
        <nav className="page-breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span className="crumb-sep">/</span>
          <span className="crumb-current">Terms &amp; Conditions</span>
        </nav>

        {/* Legal Header */}
        <div className="legal-header">
          <span className="legal-badge">
            ⚖️ GOVERNED BY CONSUMER PROTECTION RULES 2020 • LAST UPDATED: NOVEMBER 2026
          </span>
          <h1 className="legal-title">Terms &amp; Conditions</h1>
          <p className="legal-subtitle">
            Welcome to SR Communication. Please read these terms carefully before purchasing products, reserving devices, or applying for 0% EMI financing at our Shalimar Garden showroom or through our digital services.
          </p>
        </div>

        {/* Entity Card */}
        <div className="legal-entity-card">
          <div className="entity-card-header">
            <span className="entity-icon">🏛️</span>
            <strong>RETAIL ENTITY &amp; STATUTORY IDENTIFICATION</strong>
          </div>
          <div className="entity-grid">
            <div className="entity-item">
              <span className="entity-label">Legal Trade Entity:</span>
              <strong className="entity-val">SR COMMUNICATION</strong>
            </div>
            <div className="entity-item">
              <span className="entity-label">GSTIN:</span>
              <strong className="entity-val font-mono">09AKEPJ4696D1ZZ</strong>
            </div>
            <div className="entity-item">
              <span className="entity-label">Physical Showroom:</span>
              <span className="entity-val">Ug-1, S/14 Shalimar Garden Ext-2, Sahibabad, Ghaziabad, UP 201005</span>
            </div>
            <div className="entity-item">
              <span className="entity-label">Contact Desk:</span>
              <span className="entity-val">srcommunication98@gmail.com | +91 97174 59671</span>
            </div>
          </div>
        </div>

        {/* Main Legal Content */}
        <div className="legal-body-content">
          {/* Section 1 */}
          <section className="legal-section">
            <h2 className="legal-section-heading">1. Acceptance of Terms &amp; Business Model</h2>
            <p>
              By accessing our website (<strong>srcommunication.in</strong>), visiting our retail showroom, making an in-store purchase, or initiating a device inquiry via WhatsApp or phone, you agree to be bound by these Terms &amp; Conditions.
            </p>
            <p>
              SR Communication operates as an authorized brick-and-mortar technology retail store in Sahibabad, Ghaziabad, supported by this digital showroom for catalog browsing, price discovery, 0% EMI estimation, and device pre-reservations. All retail transactions, physical box unboxing, payment processing, and GST billing take place directly at our showroom or via our authorized store representatives.
            </p>
          </section>

          {/* Section 2 */}
          <section className="legal-section">
            <h2 className="legal-section-heading">2. 100% Genuine Products &amp; Official Brand Warranty</h2>
            <p>
              Every electronic device (smartphones, tablets, audio gear, and charging accessories) sold by SR Communication is guaranteed to be:
            </p>
            <ul className="legal-list">
              <li><strong>100% Genuine &amp; Factory-Sealed:</strong> Sourced directly through verified Indian national distributors of Apple, Samsung, Vivo, OnePlus, Realme, Xiaomi, and Nothing.</li>
              <li><strong>Backed by Brand Manufacturer Warranty:</strong> Covered by standard 1-year (or applicable brand extended) manufacturer warranty valid across all authorized service centers nationwide in India.</li>
              <li><strong>Accompanied by Official GST Invoice:</strong> All products are sold with an official tax bill mentioning the customer&apos;s name, product serial number, and IMEI.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="legal-section">
            <h2 className="legal-section-heading">3. Dead on Arrival (DOA) &amp; Out-of-Box Defect Protocol</h2>
            <div className="legal-callout-box">
              <strong>⚠️ Important Out-of-Box Policy:</strong> Unopened devices once sold and factory seal broken cannot be returned for cash refunds. If an unexpected manufacturing hardware failure occurs, brand DOA rules apply.
            </div>
            <p>
              In the rare event of an out-of-the-box hardware defect (Dead on Arrival / DOA):
            </p>
            <ul className="legal-list">
              <li>The customer must notify SR Communication or the brand&apos;s official service center within <strong>24 to 48 hours of purchase</strong>.</li>
              <li>The device must be submitted with original box, all included accessories, and invoice to the brand&apos;s authorized service center for diagnostic validation.</li>
              <li>Upon issuance of an official DOA Certificate from the brand center, SR Communication will immediately issue a brand-new sealed unit replacement.</li>
              <li>Physical damage, water ingress, unauthorized software rooting, or accidental drops are strictly excluded from DOA protection.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="legal-section">
            <h2 className="legal-section-heading">4. Dynamic Market Pricing &amp; Stock Availability</h2>
            <p>
              Due to dynamic market conditions, international currency shifts, and brand manufacturer supply adjustments:
            </p>
            <ul className="legal-list">
              <li>Prices displayed on this website represent our current showroom offers and are subject to real-time verification at the store counter.</li>
              <li>Pre-reservation of a device via WhatsApp or our website holds stock for a specified period (typically 24 hours), after which uncollected units may be released to walk-in buyers.</li>
              <li>Special festival bundled gifts (such as free tempered glass, protective cases, or charging adapters) are provided as promotional goodwill while supplies last.</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="legal-section">
            <h2 className="legal-section-heading">5. 0% Interest &amp; Downpayment EMI Financing Disclosures</h2>
            <p>
              SR Communication provides on-spot paperless financing facilities in collaboration with licensed Non-Banking Financial Companies (NBFCs) and banks:
            </p>
            <ul className="legal-list">
              <li>
                <strong>Underwriting Discretion:</strong> All loan approvals, eligible loan amounts, downpayment tiers (0%, 15%, 25%), and required tenures are decided exclusively by the financing partners (Bajaj Finserv Ltd, IDFC First Bank Ltd, HDFC Bank Ltd, TVS Credit) based on their internal credit scoring algorithms. SR Communication acts as a facilitator and does not control credit approval outcomes.
              </li>
              <li>
                <strong>0% Interest (No-Cost EMI) Mechanism:</strong> Under authorized 0% schemes, the interest amount that would normally be charged is subvented (absorbed) by the smartphone manufacturer and SR Communication, ensuring the total amount paid by the customer matches the product&apos;s selling price.
              </li>
              <li>
                <strong>Mandatory Documentation:</strong> Customers seeking instant spot financing must produce valid Indian government identity (Aadhaar linked to active mobile for OTP and PAN Card) along with an active bank account for automated NACH debit mandates.
              </li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="legal-section">
            <h2 className="legal-section-heading">6. Old Device Trade-In &amp; Exchange Policy</h2>
            <p>
              Customers trading in pre-owned smartphones agree to the following terms:
            </p>
            <ul className="legal-list">
              <li>
                <strong>Ownership Declaration:</strong> You declare and warrant that you are the sole and lawful owner of the exchanged device, and that it is free of any third-party liens, unpaid financing loans, or theft reports.
              </li>
              <li>
                <strong>Condition Assessment:</strong> The final exchange discount is determined following a multi-point inspection (display touch, cameras, battery health, biometric sensor, and frame condition) conducted on-spot at our showroom.
              </li>
              <li>
                <strong>Data Erasure Responsibility:</strong> Customers are advised to back up all personal data and execute a full factory reset before handing over the device. SR Communication assists with free data transfer but is not responsible for forgotten data on wiped trade-in phones.
              </li>
            </ul>
          </section>

          {/* Section 7 */}
          <section className="legal-section">
            <h2 className="legal-section-heading">7. Payment Methods &amp; Tax Compliance</h2>
            <p>
              We accept payments via Indian Rupee Cash (up to statutory Income Tax limits), UPI (Google Pay, PhonePe, Paytm, BHIM), all major Credit/Debit Cards (Visa, MasterCard, RuPay), and approved NBFC financing cards. All transactions are billed in accordance with the Goods and Services Tax (GST) Act, 2017.
            </p>
          </section>

          {/* Section 8 */}
          <section className="legal-section">
            <h2 className="legal-section-heading">8. Brand Trademarks &amp; IP Acknowledgement</h2>
            <p>
              All brand names, model names, product photographs, and corporate logos (including Apple, iPhone, MagSafe, Samsung, Galaxy, Vivo, OnePlus, Nothing, Bajaj Finserv, and IDFC First Bank) referenced on this website are the registered trademarks of their respective corporate owners. Their use on this website is solely for product identification and authorized retail marketing purposes.
            </p>
          </section>

          {/* Section 9 */}
          <section className="legal-section">
            <h2 className="legal-section-heading">9. Governing Law &amp; Jurisdiction</h2>
            <p>
              These Terms &amp; Conditions shall be governed by, construed, and enforced in accordance with the substantive laws of India. Any legal dispute, claim, or proceeding arising out of transactions with SR Communication shall be subject to the exclusive jurisdiction of the competent courts in <strong>Ghaziabad / Gautam Buddha Nagar, Uttar Pradesh</strong>.
            </p>
          </section>
        </div>

        {/* Bottom Navigation */}
        <div className="legal-footer-nav">
          <Link href="/privacy" className="btn btn-outline">
            Review Privacy Policy →
          </Link>
          <Link href="/contact" className="btn btn-primary">
            Visit Showroom or Call Desk 📍
          </Link>
        </div>
      </div>
    </div>
  );
}