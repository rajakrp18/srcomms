import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import { MiniAddToCartButton } from "@/components/InteractiveElements";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Top Selling Smartphones 2026 | SR Communication",
  description: "Discover the top 5 selling smartphones of 2026 from Vivo, OnePlus, Nothing, Oppo, Realme, and Xiaomi. Buy the latest mobile phones in Shalimar Garden with 0% EMI.",
  keywords: ["Top 5 smartphones 2026", "Best phones 2026", "Vivo", "OnePlus", "Nothing", "Oppo", "Realme", "Xiaomi", "buy phone on EMI", "Shalimar Garden mobile store"]
};

export const dynamic = 'force-dynamic';
export const revalidate = 0;
export const fetchCache = 'force-no-store';

export default async function Home() {
  // Fetch products and categories from Sanity!
  const sanityProducts = await client.fetch('*[_type == "product" && defined(_id)] | order(_createdAt desc)[0...100]', {}, { next: { revalidate: 0 } });
  const sanityCategories = await client.fetch('*[_type == "category"] | order(_createdAt asc)', {}, { next: { revalidate: 0 } });
  const sanityPromos = await client.fetch('*[_type == "promo"] | order(_createdAt asc)', {}, { next: { revalidate: 0 } });

  // Fallback to placeholders if they haven't uploaded anything yet
  const displayProducts = sanityProducts.length > 0 ? sanityProducts : [
    { name: "Vivo Y31t 5G", specs: "256GB / 8GB RAM", price: "₹18,999", badge: "NEW" },
    { name: "Nothing Phone (2)", specs: "256GB / 12GB RAM", price: "₹36,999" },
    { name: "Samsung S24 Ultra", specs: "512GB / 12GB RAM", price: "₹1,29,999", badge: "HOT" },
    { name: "Realme 12 Pro", specs: "128GB / 8GB RAM", price: "₹23,999" },
    { name: "Oppo Reno 11", specs: "256GB / 8GB RAM", price: "₹28,999" },
  ];

  // We use static premium images for Categories since they rarely change
  const displayCategories = [
    { title: "Smartphones", desc: "Latest from Top Brands", imgUrl: "/cat_phones_1790916868141.png" },
    { title: "Earbuds", desc: "Premium Sound", imgUrl: "/cat_earbuds_1790916882546.png" },
    { title: "Smartwatches", desc: "Stay Connected", imgUrl: "/cat_watches_1790916896158.png" },
    { title: "Accessories", desc: "Essential Add-ons", imgUrl: "/cat_accessories_1790916908147.png" },
    { title: "Tablets", desc: "Powerful, Portable", imgUrl: "/cat_tablets_1790916920076.png" },
  ];

  // We use static premium images for Promos since they are core design elements
  const displayPromos = [
    { title: "0% Downpayment", desc: "On select smartphones with Bajaj Finserv & IDFC.", buttonText: "EXPLORE OFFERS", colorTheme: "promo-1", imgUrl: "/promo_emi_1790917286246.png" },
    { title: "Up to 40% Off on Accessories", desc: "Chargers, cases, earbuds & more.", buttonText: "SHOP ACCESSORIES", colorTheme: "promo-2", imgUrl: "/promo_acc_1790917303930.png" },
    { title: "Trade-In & Save More", desc: "Exchange your old device and get the best value.", buttonText: "LEARN MORE", colorTheme: "promo-3", imgUrl: "/promo_tradein_1790917319484.png" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-content">
          <div className="hero-text">
            <span className="hero-subtitle">SMARTPHONES • ACCESSORIES • DEALS</span>
            <h1 className="hero-title">Upgrade Your<br/>World</h1>
            <p className="hero-desc">Latest smartphones. Genuine products. Better deals. Right here in Shalimar Garden.</p>
            <div className="hero-buttons">
              <a href="#smartphones" className="btn btn-primary">SHOP SMARTPHONES →</a>
              <a href="#deals" className="btn btn-outline">VIEW DEALS</a>
            </div>
          </div>
          <div className="hero-image-area">
             <div className="hero-glow"></div>
             <div className="hero-promo-badge">
               <strong>0% DOWNPAYMENT</strong>
               <span>Easy EMI available</span>
             </div>
             <div className="hero-visual">
                <Image src="/hero1.png" alt="Premium Smartphones" fill style={{ objectFit: 'cover' }} priority sizes="(max-width: 768px) 100vw, 500px" />
             </div>
          </div>
        </div>
        
        {/* Trust Strip */}
        <div className="container">
          <div className="hero-trust-strip">
            <div className="trust-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              <span>100% Original</span>
            </div>
            <div className="trust-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"></rect><line x1="2" y1="10" x2="22" y2="10"></line></svg>
              <span>Easy EMI</span>
            </div>
            <div className="trust-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path></svg>
              <span>Free Gifts</span>
            </div>
            <div className="trust-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg>
              <span>15 Month Warranty</span>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="categories container" id="categories">
        <h2 className="section-title">Shop By Category</h2>
        <div className="cat-grid">
          {displayCategories.map((cat: any, i: number) => (
            <div className="cat-card" key={i}>
               <div className="cat-img-placeholder" style={{position: 'relative', overflow: 'hidden', width: '100%', height: '180px'}}>
                 <Image src={cat.imgUrl} alt={cat.title} fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 20vw" />
               </div>
               <div>
                 <h3 className="cat-title">{cat.title}</h3>
                 <p className="cat-desc">{cat.desc}</p>
                 <a href={`#${cat.title.toLowerCase()}`} className="btn-text" style={{marginTop: '10px', display: 'inline-block'}}>SHOP NOW →</a>
               </div>
            </div>
          ))}
        </div>
      </section>

      {/* Brand Sections */}
      <div id="smartphones">
        {["Apple", "Samsung", "Vivo", "OnePlus", "Nothing", "Oppo", "Realme", "Xiaomi"].map((brandName) => {
          let brandProducts = sanityProducts.filter((p: any) => p.brand === brandName);
          
          console.log(`Brand ${brandName} has ${brandProducts.length} products`);
          if (brandProducts.length === 0) {
            const placeholders: any = {
              "Apple": [
                { name: "iPhone 16 Pro Max", specs: "256GB / 8GB RAM", price: "₹1,44,900", badge: "NEW" },
                { name: "iPhone 16 Pro", specs: "256GB / 8GB RAM", price: "₹1,29,900" },
                { name: "iPhone 16 Plus", specs: "128GB / 8GB RAM", price: "₹89,900" },
                { name: "iPhone 16", specs: "128GB / 8GB RAM", price: "₹79,900" },
                { name: "iPhone 15", specs: "128GB / 6GB RAM", price: "₹69,900", badge: "HOT" }
              ],
              "Samsung": [
                { name: "Galaxy S24 Ultra", specs: "512GB / 12GB RAM", price: "₹1,29,999", badge: "HOT" },
                { name: "Galaxy S24 Plus", specs: "256GB / 12GB RAM", price: "₹99,999" },
                { name: "Galaxy S24", specs: "256GB / 8GB RAM", price: "₹79,999" },
                { name: "Galaxy Z Fold 6", specs: "512GB / 12GB RAM", price: "₹1,64,999", badge: "NEW" },
                { name: "Galaxy Z Flip 6", specs: "256GB / 8GB RAM", price: "₹1,09,999" }
              ],
              "Vivo": [
                { name: "Vivo X100 Pro", specs: "512GB / 16GB RAM", price: "₹89,999", badge: "NEW" },
                { name: "Vivo X100", specs: "256GB / 12GB RAM", price: "₹63,999" },
                { name: "Vivo V30 Pro", specs: "512GB / 12GB RAM", price: "₹41,999" },
                { name: "Vivo V30", specs: "256GB / 8GB RAM", price: "₹33,999" },
                { name: "Vivo T3 5G", specs: "128GB / 8GB RAM", price: "₹19,999", badge: "HOT" }
              ],
              "OnePlus": [
                { name: "OnePlus 12", specs: "512GB / 16GB RAM", price: "₹69,999", badge: "HOT" },
                { name: "OnePlus 12R", specs: "256GB / 16GB RAM", price: "₹45,999" },
                { name: "OnePlus Open", specs: "512GB / 16GB RAM", price: "₹1,39,999" },
                { name: "OnePlus Nord 4", specs: "256GB / 12GB RAM", price: "₹32,999", badge: "NEW" },
                { name: "OnePlus Nord CE4", specs: "256GB / 8GB RAM", price: "₹26,999" }
              ],
              "Nothing": [
                { name: "Nothing Phone (2a) Plus", specs: "256GB / 12GB RAM", price: "₹29,999", badge: "NEW" },
                { name: "Nothing Phone (2a)", specs: "128GB / 8GB RAM", price: "₹23,999" },
                { name: "Nothing Phone (2)", specs: "256GB / 12GB RAM", price: "₹36,999", badge: "HOT" },
                { name: "CMF Phone 1", specs: "128GB / 6GB RAM", price: "₹15,999" },
                { name: "Nothing Phone (1)", specs: "256GB / 8GB RAM", price: "₹27,999" }
              ],
              "Oppo": [
                { name: "Oppo Find N3 Flip", specs: "256GB / 12GB RAM", price: "₹94,999", badge: "NEW" },
                { name: "Oppo Reno 11 Pro", specs: "256GB / 12GB RAM", price: "₹39,999" },
                { name: "Oppo Reno 11", specs: "256GB / 8GB RAM", price: "₹29,999", badge: "HOT" },
                { name: "Oppo F25 Pro", specs: "256GB / 8GB RAM", price: "₹25,999" },
                { name: "Oppo A79 5G", specs: "128GB / 8GB RAM", price: "₹19,999" }
              ],
              "Realme": [
                { name: "Realme GT 6", specs: "512GB / 16GB RAM", price: "₹44,999", badge: "NEW" },
                { name: "Realme GT 6T", specs: "256GB / 8GB RAM", price: "₹32,999" },
                { name: "Realme 12 Pro+", specs: "256GB / 12GB RAM", price: "₹31,999", badge: "HOT" },
                { name: "Realme 12 Pro", specs: "256GB / 8GB RAM", price: "₹26,999" },
                { name: "Realme P1 Pro", specs: "256GB / 8GB RAM", price: "₹21,999" }
              ],
              "Xiaomi": [
                { name: "Xiaomi 14 Ultra", specs: "512GB / 16GB RAM", price: "₹99,999", badge: "NEW" },
                { name: "Xiaomi 14", specs: "512GB / 12GB RAM", price: "₹69,999" },
                { name: "Redmi Note 13 Pro+", specs: "512GB / 12GB RAM", price: "₹33,999", badge: "HOT" },
                { name: "Redmi Note 13 Pro", specs: "256GB / 8GB RAM", price: "₹27,999" },
                { name: "POCO X6 Pro", specs: "512GB / 12GB RAM", price: "₹28,999" }
              ]
            };
            brandProducts = placeholders[brandName] || [];
          }

          return (
            <section className="products container" key={brandName} style={{ paddingTop: '60px', paddingBottom: '20px' }}>
              <div className="brand-header">
                <h2 className="section-title brand-title">
                  {["Apple", "Samsung"].includes(brandName) ? `${brandName} Smartphones` : `Top Selling ${brandName} Smartphones 2026`}
                </h2>
                <a href="#contact" className="brand-enquire">Enquire Now →</a>
              </div>
              <div className="prod-grid">
                {brandProducts.map((prod: any, i: number) => (
                  <Link href={`/product/${prod.slug?.current || '#'}`} className="prod-card" key={i} style={{ display: 'block', color: 'inherit' }}>
                     {prod.badge && <span className="prod-badge">{prod.badge}</span>}
                     <div className="prod-img-placeholder" style={{ position: 'relative', overflow: 'hidden', width: '100%', height: '220px' }}>
                       {prod.image ? (
                         <Image src={urlFor(prod.image).url()} alt={prod.name} fill style={{ objectFit: 'contain' }} sizes="(max-width: 768px) 100vw, 33vw" />
                       ) : (
                         <span style={{color: 'var(--text-light)'}}>[ {prod.name} Image ]</span>
                       )}
                     </div>
                     <h3 className="prod-name">{prod.name}</h3>
                     <p className="prod-specs">{prod.specs}</p>
                     <div className="prod-price-row">
                       <span className="prod-price">{prod.price}</span>
                       <MiniAddToCartButton />
                     </div>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      {/* Other Categories Sections */}
      {["Earbuds", "Smartwatches", "Accessories", "Tablets"].map((catName) => {
        let catProducts = sanityProducts.filter((p: any) => p.category === catName);
        
        if (catProducts.length === 0) {
          const placeholders: any = {
            "Earbuds": [
              { name: "AirPods Pro (2nd Gen)", specs: "Active Noise Cancellation", price: "₹24,900", badge: "HOT" },
              { name: "Galaxy Buds 2 Pro", specs: "24-bit Hi-Fi audio", price: "₹17,999" },
              { name: "Sony WF-1000XM5", specs: "Industry Leading ANC", price: "₹24,990", badge: "NEW" },
              { name: "Nothing Ear (2)", specs: "Personalised ANC", price: "₹9,999" },
              { name: "OnePlus Buds Pro 2", specs: "Spatial Audio", price: "₹11,999" }
            ],
            "Smartwatches": [
              { name: "Apple Watch Series 9", specs: "41mm / 45mm", price: "₹41,900", badge: "NEW" },
              { name: "Galaxy Watch 6 Classic", specs: "43mm / 47mm", price: "₹36,999", badge: "HOT" },
              { name: "Garmin Venu 3", specs: "GPS Smartwatch", price: "₹42,990" },
              { name: "Amazfit GTR 4", specs: "Dual-band GPS", price: "₹16,999" },
              { name: "NoiseFit Halo", specs: "AMOLED Display", price: "₹3,999" }
            ],
            "Accessories": [
              { name: "Apple 20W USB-C Adapter", specs: "Fast Charging", price: "₹1,900", badge: "HOT" },
              { name: "Samsung 25W Adapter", specs: "Super Fast Charging", price: "₹1,299" },
              { name: "Spigen Liquid Air Case", specs: "For iPhone 15", price: "₹1,499" },
              { name: "Anker 10000mAh Powerbank", specs: "20W PD", price: "₹2,499" },
              { name: "Belkin MagSafe Charger", specs: "15W Wireless", price: "₹3,999", badge: "NEW" }
            ],
            "Tablets": [
              { name: "iPad Pro 11-inch (M4)", specs: "256GB / Wi-Fi", price: "₹99,900", badge: "NEW" },
              { name: "iPad Air (M2)", specs: "128GB / Wi-Fi", price: "₹59,900" },
              { name: "Galaxy Tab S9 Ultra", specs: "256GB / Wi-Fi", price: "₹1,08,999", badge: "HOT" },
              { name: "Galaxy Tab S9 FE", specs: "128GB / Wi-Fi", price: "₹36,999" },
              { name: "OnePlus Pad", specs: "128GB / Wi-Fi", price: "₹37,999" }
            ]
          };
          catProducts = placeholders[catName] || [];
        }

        return (
          <section className="products container" id={catName.toLowerCase()} key={catName} style={{ paddingTop: '60px', paddingBottom: '20px' }}>
            <div className="brand-header">
              <h2 className="section-title brand-title">{catName}</h2>
              <a href="#contact" className="brand-enquire">Enquire Now →</a>
            </div>
            <div className="prod-grid">
              {catProducts.map((prod: any, i: number) => (
                <Link href={`/product/${prod.slug?.current || '#'}`} className="prod-card" key={i} style={{ display: 'block', color: 'inherit' }}>
                   {prod.badge && <span className="prod-badge">{prod.badge}</span>}
                   <div className="prod-img-placeholder" style={{ position: 'relative', overflow: 'hidden', width: '100%', height: '220px' }}>
                     {prod.image ? (
                       <Image src={urlFor(prod.image).url()} alt={prod.name} fill style={{ objectFit: 'contain' }} sizes="(max-width: 768px) 100vw, 33vw" />
                     ) : (
                       <span style={{color: 'var(--text-light)'}}>[ {prod.name} Image ]</span>
                     )}
                   </div>
                   <h3 className="prod-name">{prod.name}</h3>
                   <p className="prod-specs">{prod.specs}</p>
                   <div className="prod-price-row">
                     <span className="prod-price">{prod.price}</span>
                     <MiniAddToCartButton />
                   </div>
                </Link>
              ))}
            </div>
          </section>
        );
      })}

      {/* Promos */}
      <section className="promos container" id="deals">
        <div className="promo-grid">
          {displayPromos.map((promo: any, i: number) => (
            <div className={`promo-card ${promo.colorTheme || 'promo-1'}`} key={i}>
               <h3>{promo.title}</h3>
               <p>{promo.desc}</p>
               <button className={promo.colorTheme === 'promo-1' ? 'btn btn-primary' : 'btn btn-outline'} style={{padding: '8px 16px', fontSize: '0.8rem', marginTop: '10px', background: promo.colorTheme !== 'promo-1' ? 'white' : ''}}>{promo.buttonText} →</button>
               <div className="promo-img">
                 <Image src={promo.imgUrl} alt={promo.title} fill style={{ objectFit: 'contain', padding: '15px' }} sizes="(max-width: 768px) 100vw, 30vw" />
               </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
