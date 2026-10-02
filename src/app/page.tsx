import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

export const dynamic = 'force-dynamic'; // Always fetch the latest products instantly

export default async function Home() {
  // Fetch products and categories from Sanity!
  const sanityProducts = await client.fetch('*[_type == "product"] | order(_createdAt desc)[0...5]');
  const sanityCategories = await client.fetch('*[_type == "category"] | order(_createdAt asc)');
  const sanityPromos = await client.fetch('*[_type == "promo"] | order(_createdAt asc)');

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
            <span className="hero-subtitle">Latest Tech. Best Prices.</span>
            <h1 className="hero-title">Upgrade Your World</h1>
            <p className="hero-desc">Discover the latest smartphones and accessories from top brands at unbeatable prices right here in Shalimar Garden.</p>
            <div className="hero-buttons">
              <a href="#smartphones" className="btn btn-primary">SHOP NOW →</a>
              <a href="#deals" className="btn btn-outline">EXPLORE DEALS</a>
            </div>
          </div>
          <div className="hero-image-area">
             <div className="glass-panel" style={{width: '350px', height: '450px', position: 'relative', overflow: 'hidden'}}>
                <Image src="/hero.png" alt="Premium Smartphones" fill style={{ objectFit: 'cover' }} priority sizes="(max-width: 768px) 100vw, 350px" />
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
                 <button className="btn-text" style={{marginTop: '10px'}}>SHOP NOW →</button>
               </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="products container" id="smartphones">
        <h2 className="section-title">Featured Products</h2>
        <div className="prod-grid">
          {displayProducts.map((prod: any, i: number) => (
            <div className="prod-card" key={i}>
               {prod.badge && <span className="prod-badge">{prod.badge}</span>}
               <div className="prod-img-placeholder" style={{ position: 'relative', overflow: 'hidden' }}>
                 {prod.image ? (
                   <Image src={urlFor(prod.image).url()} alt={prod.name} fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 33vw" />
                 ) : (
                   <span>[ {prod.name} Image ]</span>
                 )}
               </div>
               <h3 className="prod-name">{prod.name}</h3>
               <p className="prod-specs">{prod.specs}</p>
               <div className="prod-price-row">
                 <span className="prod-price">{prod.price}</span>
                 <button className="prod-cart-btn">🛒</button>
               </div>
            </div>
          ))}
        </div>
      </section>

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
