import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProductBySlug, getAllProducts, getProductsByBrand } from "@/data/products";
import { ProductActions, ProductEmiWidget } from "@/components/InteractiveElements";

export async function generateStaticParams() {
  const products = getAllProducts();
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) return { title: "Product Not Found | SR Communication" };

  return {
    title: `${product.name} | Best Price in Shalimar Garden | SR Communication`,
    description: `Buy ${product.name} at SR Communication in Shalimar Garden, Ghaziabad. ${product.description} 0% Downpayment EMI, official warranty, best price.`,
    keywords: [
      product.name,
      `${product.brand} smartphones`,
      `Buy ${product.name} Shalimar Garden`,
      "0% EMI phone",
      "SR Communication"
    ],
    openGraph: {
      title: `${product.name} - ${product.formattedPrice} | SR Communication`,
      description: product.description,
      images: [product.image],
    }
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const related = getProductsByBrand(product.brand)
    .filter((p) => p.slug !== product.slug)
    .slice(0, 4);

  return (
    <div className="product-page-container">
      {/* Breadcrumb Navigation */}
      <div className="container" style={{ paddingTop: '24px', paddingBottom: '16px' }}>
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span className="breadcrumb-separator">/</span>
          <Link href={`/#catalog`}>{product.category}</Link>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">{product.name}</span>
        </nav>
      </div>

      <div className="container">
        <div className="product-details-grid">
          {/* Left Column: Visual Gallery */}
          <div className="product-gallery-card">
            {product.badge && (
              <span className={`badge-pill badge-${product.badge.toLowerCase().replace(/\s+/g, '-')}`}>
                {product.badge}
              </span>
            )}
            
            <div className="main-product-image-wrap">
              <Image
                src={product.image}
                alt={product.name}
                fill
                priority
                style={{ objectFit: 'contain' }}
                sizes="(max-width: 768px) 100vw, 550px"
              />
            </div>

            {/* In-store Guarantee Perks */}
            <div className="store-perks-strip">
              <div className="perk-box">
                <span className="perk-icon">🛡️</span>
                <div>
                  <strong>100% Genuine</strong>
                  <p>Official Warranty</p>
                </div>
              </div>
              <div className="perk-box">
                <span className="perk-icon">💳</span>
                <div>
                  <strong>0% Downpayment</strong>
                  <p>Bajaj / IDFC EMI</p>
                </div>
              </div>
              <div className="perk-box">
                <span className="perk-icon">🎁</span>
                <div>
                  <strong>Free In-Box Gifts</strong>
                  <p>Cover + Screen Guard</p>
                </div>
              </div>
              <div className="perk-box">
                <span className="perk-icon">📍</span>
                <div>
                  <strong>30-Min Pickup</strong>
                  <p>Shalimar Garden</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Information, Pricing, & Action */}
          <div className="product-info-panel">
            <div className="product-meta-header">
              <span className="brand-tag">{product.brand}</span>
              <div className="product-rating-box">
                <span className="star-icon">★</span>
                <strong>{product.rating || 4.8}</strong>
                <span className="review-count">({product.reviewsCount || 120} reviews)</span>
              </div>
            </div>

            <h1 className="product-main-title">{product.name}</h1>
            <p className="product-lead-desc">{product.description}</p>

            {/* Price Box */}
            <div className="product-pricing-card">
              <div className="pricing-primary-row">
                <span className="price-big">{product.formattedPrice}</span>
                {product.formattedOriginalPrice && (
                  <span className="price-struck">{product.formattedOriginalPrice}</span>
                )}
                {product.originalPrice && product.originalPrice > product.price && (
                  <span className="price-discount-tag">
                    Save ₹{(product.originalPrice - product.price).toLocaleString('en-IN')}
                  </span>
                )}
              </div>
              <div className="pricing-emi-note">
                <span className="emi-pulse-badge">0% EMI</span>
                <span>Easy EMI starts at <strong>{product.emiStartsAt}</strong></span>
              </div>
            </div>

            {/* Colors */}
            {product.colors && product.colors.length > 0 && (
              <div className="product-color-selector">
                <span className="selector-label">Available Colors:</span>
                <div className="color-swatches">
                  {product.colors.map((color, idx) => (
                    <div className="color-chip" key={idx} title={color.name}>
                      <span className="color-dot" style={{ backgroundColor: color.hex }}></span>
                      <span className="color-name">{color.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <ProductActions product={product} />

            {/* Direct Store Availability Notice */}
            <div className="store-availability-box">
              <div className="avail-pulse"></div>
              <div>
                <strong>In Stock at SR Communication Showroom</strong>
                <p>Ug-1, S/14 Shalimar Garden Ext-2, Sahibabad • Open Today till 9:30 PM</p>
              </div>
            </div>

            {/* Quick Specs Overview */}
            <div className="specs-overview-card">
              <h3 className="specs-overview-heading">Key Specifications</h3>
              <div className="specs-table-grid">
                {product.specs.display && (
                  <div className="spec-row">
                    <span className="spec-key">Display</span>
                    <span className="spec-val">{product.specs.display}</span>
                  </div>
                )}
                {product.specs.processor && (
                  <div className="spec-row">
                    <span className="spec-key">Processor</span>
                    <span className="spec-val">{product.specs.processor}</span>
                  </div>
                )}
                {product.specs.ram && (
                  <div className="spec-row">
                    <span className="spec-key">RAM</span>
                    <span className="spec-val">{product.specs.ram}</span>
                  </div>
                )}
                {product.specs.storage && (
                  <div className="spec-row">
                    <span className="spec-key">Storage</span>
                    <span className="spec-val">{product.specs.storage}</span>
                  </div>
                )}
                {product.specs.camera && (
                  <div className="spec-row">
                    <span className="spec-key">Camera</span>
                    <span className="spec-val">{product.specs.camera}</span>
                  </div>
                )}
                {product.specs.battery && (
                  <div className="spec-row">
                    <span className="spec-key">Battery</span>
                    <span className="spec-val">{product.specs.battery}</span>
                  </div>
                )}
                {product.specs.charging && (
                  <div className="spec-row">
                    <span className="spec-key">Charging</span>
                    <span className="spec-val">{product.specs.charging}</span>
                  </div>
                )}
                {product.specs.os && (
                  <div className="spec-row">
                    <span className="spec-key">Operating System</span>
                    <span className="spec-val">{product.specs.os}</span>
                  </div>
                )}
              </div>
            </div>

            {/* EMI Breakdown Calculator for this phone */}
            <ProductEmiWidget price={product.price} productName={product.name} />
          </div>
        </div>

        {/* Related Products Section */}
        {related.length > 0 && (
          <section className="related-products-section">
            <div className="section-header-compact">
              <h2>More from {product.brand}</h2>
              <Link href={`/#catalog`} className="link-arrow">View All {product.brand} Devices →</Link>
            </div>

            <div className="related-cards-grid">
              {related.map((rel) => (
                <Link href={`/product/${rel.slug}`} key={rel.id} className="related-card">
                  <div className="related-img-wrap">
                    <Image
                      src={rel.image}
                      alt={rel.name}
                      fill
                      style={{ objectFit: 'contain' }}
                      sizes="(max-width: 768px) 50vw, 220px"
                    />
                  </div>
                  <div className="related-info">
                    <h4>{rel.name}</h4>
                    <span className="related-price">{rel.formattedPrice}</span>
                    <span className="related-emi">{rel.emiStartsAt}</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
